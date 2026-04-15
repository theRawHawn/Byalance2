import { FileText, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const features = [
  "GST Registration (Regular & Composition)",
  "GSTR-1 Filing (Monthly / Quarterly)",
  "GSTR-3B Filing (Monthly)",
  "GSTR-9 Annual Return Filing",
  "GST Input Credit Matching (2B vs Books)",
  "E-Invoice & E-Way Bill Compliance",
  "GST Amendments & Reconciliation",
  "Late Fee & Penalty Resolution",
];

const whoIsItFor = [
  "Businesses with annual turnover above ₹40 lakh",
  "E-commerce sellers & marketplace vendors",
  "Exporters & importers",
  "Service providers crossing the GST threshold",
  "Businesses switching from Composition to Regular scheme",
];

export default function GSTServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-600 rounded-xl text-white">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">Our Services</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">GST Services</h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mt-4">
            Stay fully compliant with Goods &amp; Services Tax regulations. From registration to
            monthly/annual filings and reconciliation, we handle every aspect of your GST lifecycle
            so you never miss a deadline or lose input credit.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Timely GST Filing Matters</h2>
              <p className="text-gray-600 mb-4">
                Late or incorrect GST filings attract penalties of up to ₹200/day per return and can
                block your clients from claiming input tax credit — damaging business relationships.
                Byalance files your returns accurately before every deadline and reconciles your GSTR-2B
                against purchase records monthly.
              </p>
              <p className="text-gray-600">
                We also track GSTN portal notices and advisory communications so nothing slips through.
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
                Book a free consultation. We&apos;ll audit your current GST status and set up a clean
                filing schedule.
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
                  { label: "TDS Services",             href: "/services/tds-services"           },
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
