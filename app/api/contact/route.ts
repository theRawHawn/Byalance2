export const runtime = 'edge';
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

const contactSchema = z.object({
  name:         z.string().min(1, "Name is required"),
  mobile:       z.string().min(10, "Mobile number must be at least 10 digits").max(15),
  email:        z.string().email("Invalid email address"),
  businessType: z.string().optional(),
  message:      z.string().optional(),
});

const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;

const auth = new google.auth.JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: (GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function appendToSheet(data: z.infer<typeof contactSchema>) {
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    throw new Error("Google Sheets credentials are not configured.");
  }

  const sheets = google.sheets({ auth, version: "v4" });
  await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: "Client Details",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        new Date().toISOString(),
        data.name,
        data.mobile,
        data.email,
        data.businessType ?? "",
        data.message ?? "",
      ]],
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Validation error", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await appendToSheet(parsed.data);

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { message: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}
