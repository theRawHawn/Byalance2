
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

function PayrollIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="Payroll Processing Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />

      {/* Central element: Payslip */}
      <rect x="140" y="60" width="200" height="200" rx="12" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <circle cx="240" cy="100" r="25" fill="#3B82F6"/>
      <path d="M230 100 h 20 M240 90 v 20" stroke="#FFFFFF" strokeWidth="4"/>
      <text x="240" y="140" textAnchor="middle" fontSize="12" fontWeight="bold">SALARY SLIP</text>

      {/* Earnings and Deductions */}
      <rect x="160" y="160" width="60" height="6" rx="2" fill="#16A34A"/>
      <rect x="160" y="175" width="50" height="6" rx="2" fill="#16A34A"/>
      <text x="150" y="150" fontSize="10" fill="#16A34A">Earnings</text>

      <rect x="260" y="160" width="60" height="6" rx="2" fill="#EF4444"/>
      <rect x="260" y="175" width="40" height="6" rx="2" fill="#EF4444"/>
      <text x="320" y="150" fontSize="10" fill="#EF4444" textAnchor="end">Deductions</text>
      
      <line x1="150" y1="190" x2="330" y2="190" stroke="#D1D5DB" strokeWidth="1.5" />
      <text x="240" y="210" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#111827">Net Pay: ₹XXX</text>


      {/* Statutory Icons */}
      <g transform="translate(40, 80)">
        <rect width="80" height="50" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="30" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1E40AF">PF</text>
        <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#6B7280">Provident Fund</text>
      </g>

      <g transform="translate(360, 80)">
        <rect width="80" height="50" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="30" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1E40AF">ESI</text>
        <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#6B7280">State Insurance</text>
      </g>

      <g transform="translate(40, 200)">
        <rect width="80" height="50" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="30" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1E40AF">PT</text>
        <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#6B7280">Professional Tax</text>
      </g>

      <g transform="translate(360, 200)">
        <rect width="80" height="50" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="30" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#EF4444">TDS</text>
        <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#6B7280">Income Tax</text>
      </g>

    </svg>
  );
}

export default function PayrollProcessing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
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
            <div className="hidden md:block">
              <PayrollIllustration />
            </div>
          </div>
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
