import { Receipt, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const features = [
  "TAN Registration & Application",
  "Filing of Form 24Q (Salary TDS)",
  "Filing of Form 26Q (Non-Salary TDS)",
  "Filing of Form 27Q (Non-Resident Payments)",
  "Advance Tax Calculation & Challan Management",
  "TDS on Rent (Form 26QC) & Purchase of Property",
  "Form 16 & Form 16A Generation",
  "TDS Default & Demand Resolution",
  "Lower Deduction Certificate Support (Form 13)",
];

const whoIsItFor = [
  "Companies and LLPs deducting TDS on salaries",
  "Businesses making contractor or professional payments",
  "Landlords or tenants with high-value rent",
  "Buyers of property above ₹50 lakh",
  "Any entity making payments subject to TDS provisions",
];

export default function TDSServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-600 rounded-xl text-white">
              <Receipt className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">Our Services</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">TDS Services</h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mt-4">
            Tax Deducted at Source is one of the most compliance-heavy areas for Indian businesses.
            Missed deadlines, incorrect deductions, or wrong PAN details attract heavy penalties.
            Byalance manages your complete TDS lifecycle — from deduction to quarterly filings and
            certificate generation.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Cost of Non-Compliance</h2>
              <p className="text-gray-600 mb-4">
                Under Section 271C, failure to deduct TDS can attract a penalty equal to the amount
                of tax not deducted. Late filing of TDS returns attracts ₹200/day under Section 234E.
                These penalties compound quickly — Byalance ensures you&apos;re always a step ahead of
                every quarterly deadline.
              </p>
              <p className="text-gray-600">
                We reconcile your 26AS with books every quarter so discrepancies are caught before the
                Income Tax Department flags them.
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
                Book a free consultation. We&apos;ll review your current TDS obligations and set up a
                clean quarterly filing schedule.
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
                  { label: "ITR Services",             href: "/services/itr-services"           },
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
