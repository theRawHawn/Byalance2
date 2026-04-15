import { Users, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const features = [
  "Employee Master Creation (PAN, Aadhaar, Bank Details)",
  "Monthly Salary & CTC Calculations",
  "Payroll Register & Payroll Journal",
  "Digital Salary Slip Generation",
  "Reimbursement & Allowance Processing",
  "TDS on Salary (Section 192) & Form 16",
  "PF (Provident Fund) Return Filing",
  "ESI (Employee State Insurance) Filing",
  "Professional Tax (PT) Compliance",
  "EDLI & LWF Compliance",
  "Full & Final Settlement Processing",
];

const whoIsItFor = [
  "Startups hiring their first employees",
  "SMEs with 5–200 employees",
  "Businesses outsourcing HR & payroll functions",
  "Companies requiring PF/ESI statutory compliance",
  "Businesses in Karnataka, Maharashtra, Tamil Nadu, and other PT states",
];

export default function PayrollProcessing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-600 rounded-xl text-white">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">Our Services</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Payroll Processing</h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mt-4">
            Running payroll correctly means more than just transferring salaries. PF, ESI, PT, TDS
            on salaries, and Form 16 all need to be managed on strict monthly and quarterly deadlines.
            Byalance handles your complete payroll cycle so your employees are paid correctly and your
            business stays compliant.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Outsource Payroll?</h2>
              <p className="text-gray-600 mb-4">
                Payroll errors are costly — incorrect TDS deductions trigger notices from the Income
                Tax Department, late PF deposits attract 12% penal interest under the EPF Act, and
                ESI non-compliance can lead to prosecution. Byalance processes payroll with a
                multi-layer review to ensure accuracy every single month.
              </p>
              <p className="text-gray-600">
                We also provide Form 16 to all your employees by June each year and assist with
                full &amp; final settlement calculations for departing staff.
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
                Share your employee headcount and CTC details. We&apos;ll set up your payroll structure
                and take over from month one.
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
                  { label: "GST Services",             href: "/services/gst-services"           },
                  { label: "ITR Services",             href: "/services/itr-services"           },
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
