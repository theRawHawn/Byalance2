import { FileSpreadsheet, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const features = [
  "Applicability Check (Mandatory vs Voluntary Filing)",
  "PAN–Aadhaar Linking Verification",
  "Computation of Total Income & Tax Liability",
  "Form 26AS, AIS & TIS Review",
  "Income & Deduction Documentation (Form 16, Bank Statements)",
  "Filing of Correct ITR Form (ITR-1 to ITR-7)",
  "Revised Return Filing",
  "Notice & Scrutiny Support (143(1), 139(9), 143(2) Responses)",
  "Tax Planning & Advance Tax Advisory",
];

const whoIsItFor = [
  "Salaried individuals (Form 16 holders)",
  "Self-employed professionals (doctors, lawyers, consultants)",
  "Business owners and proprietors",
  "Freelancers with domestic or foreign income",
  "HUFs and partnership firms",
  "Companies and LLPs",
];

export default function ITRServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-600 rounded-xl text-white">
              <FileSpreadsheet className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">Our Services</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">ITR Services</h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mt-4">
            Filing your income tax return on time and accurately is not just a legal requirement — it
            unlocks loans, visas, and government tenders. Byalance handles everything from document
            collection to notice responses, ensuring zero-stress compliance.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Accurate ITR Filing Matters</h2>
              <p className="text-gray-600 mb-4">
                An incorrect ITR form or missed schedule can trigger a defective return notice under
                Section 139(9), leading to penalties and even prosecution in extreme cases. Our team
                matches your income across Form 26AS, AIS, and bank statements before filing so your
                return is bulletproof.
              </p>
              <p className="text-gray-600">
                We also advise on legal deductions under Sections 80C, 80D, 80G, HRA, and LTA to
                minimise your tax outgo every year.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is This For?</h2>
              <ul className="space-y-3">
                {whoIsItFor.map((w) => (
                  <li key={w} className="flex items-center gap-3 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-primary-600 flex-shrink-0" />{w}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-primary-600">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Started Today</h3>
              <p className="text-gray-600 text-sm mb-4">
                Share your Form 16 or income details. We&apos;ll handle the rest and file before the
                deadline.
              </p>
              <a
                href="https://wa.me/917406296116"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors mb-3"
              >
                Chat on WhatsApp
              </a>
              <Link href="/#contact" className="block w-full text-center border border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Send an Enquiry
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Related Services</h3>
              <ul className="space-y-2">
                {[
                  { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
                  { label: "GST Services",             href: "/services/gst-services"           },
                  { label: "TDS Services",             href: "/services/tds-services"           },
                  { label: "Payroll Processing",       href: "/services/payroll-processing"     },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" />{label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
