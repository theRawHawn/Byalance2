
import { Calculator, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const features = [
  "Sales, Purchase & Expense Entries",
  "Bank Reconciliation (Monthly)",
  "Cash Book & Petty Cash Maintenance",
  "Journal Entries & Depreciation Schedules",
  "Ledger & Vendor Reconciliation",
  "Trial Balance, P&L & Balance Sheet",
  "Receivables & Payables Tracking",
  "Data Setup, Cleanup & Migration",
  "Month-End & Year-End Closing Support",
];

const whoIsItFor = [
  "Retail & trading businesses",
  "Startups and early-stage companies",
  "Service providers and consultants",
  "MSMEs and small manufacturers",
  "E-commerce sellers",
];

function AccountingIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="Accounting & Bookkeeping Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />

      {/* Balance Scale */}\
      <path d="M 100 240 Q 240 200 380 240" stroke="#4B5563" strokeWidth="4" fill="none" />
      <rect x="235" y="100" width="10" height="150" rx="5" fill="#4B5563" />
      
      {/* Left Pan (Assets) */}\
      <g transform="translate(60, 130)">
        <path d="M 0 60 L 80 60 L 70 75 L 10 75 Z" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="2" />
        <line x1="40" y1="0" x2="40" y2="60" stroke="#9CA3AF" strokeWidth="2" />
        <circle cx="40" cy="0" r="5" fill="#3B82F6" />
        {/* Assets Icons */}\
        <g transform="translate(20, 15) scale(0.8)">
            <rect width="40" height="30" rx="4" fill="#16A34A" />
            <text x="20" y="20" textAnchor="middle" fontSize="16" fill="#FFFFFF" fontWeight="bold">₹</text>
        </g>
      </g>
      <text x="100" y="235" textAnchor="middle" fontSize="12" fontWeight="medium">ASSETS</text>


      {/* Right Pan (Liabilities) */}\
      <g transform="translate(340, 130)">
        <path d="M 0 60 L 80 60 L 70 75 L 10 75 Z" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="2" />
        <line x1="40" y1="0" x2="40" y2="60" stroke="#9CA3AF" strokeWidth="2" />
        <circle cx="40" cy="0" r="5" fill="#3B82F6" />
        {/* Liabilities Icons */}\
        <g transform="translate(15, 12) scale(0.7)">
            <rect width="50" height="35" rx="4" fill="#EF4444" />
            <line x1="10" y1="10" x2="40" y2="10" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="10" y1="18" x2="40" y2="18" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="10" y1="26" x2="30" y2="26" stroke="#FFFFFF" strokeWidth="2" />
        </g>
      </g>
      <text x="380" y="235" textAnchor="middle" fontSize="12" fontWeight="medium">LIABILITIES</text>

      {/* Background elements */}\
      <circle cx="240" cy="80" r="30" fill="#10B981" fillOpacity="0.2"/>
      <path d="M 180 80 L 240 140 L 300 80" stroke="#3B82F6" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>

      <text x="240" y="280" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E40AF">FINANCIAL BALANCE</text>
    </svg>
  );
}

export default function AccountingBookkeeping() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}\
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-600 rounded-xl text-white">
                  <Calculator className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">Our Services</p>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Accounting &amp; Bookkeeping</h1>
                </div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mt-4">
                Accurate, timely books are the foundation of every healthy business. We manage your entire
                accounting lifecycle — from day-to-day entries to year-end closing — so you always have a
                clear financial picture.
              </p>
            </div>
            <div className="hidden md:block">
              <AccountingIllustration />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}\
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h2>
              <p className="text-gray-600 mb-4">
                Without accurate books, you&apos;re flying blind. Delayed or incorrect accounts mean missed
                tax deductions, incorrect GST filings, and no visibility into cash flow. Byalance keeps
                your records clean on a monthly cadence so nothing falls through the cracks.
              </p>
              <p className="text-gray-600">
                We work with Tally, Zoho Books, QuickBooks, and Excel — whatever your team already uses.
                No disruption to your workflow.
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

        {/* Sidebar CTA */}\
        <div className="space-y-6">
          <Card className="border-2 border-primary-600">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Started Today</h3>
              <p className="text-gray-600 text-sm mb-4">
                Book a free 30-minute consultation. We&apos;ll review your current setup and recommend the
                right plan.
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
                  { label: "GST Services",      href: "/services/gst-services"            },
                  { label: "TDS Services",       href: "/services/tds-services"            },
                  { label: "Payroll Processing", href: "/services/payroll-processing"      },
                  { label: "ITR Services",       href: "/services/itr-services"            },
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
