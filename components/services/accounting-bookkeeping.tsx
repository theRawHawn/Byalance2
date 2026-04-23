
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
      <rect x="100" y="60" width="280" height="200" rx="12" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <path d="M240 60 V 260" stroke="#E5E7EB" strokeWidth="1.5" />
      <text x="170" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Debits</text>
      <text x="310" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Credits</text>
      <rect x="120" y="100" width="100" height="8" rx="4" fill="#E5E7EB" />
      <rect x="260" y="100" width="100" height="8" rx="4" fill="#E5E7EB" />
      <rect x="120" y="120" width="80" height="8" rx="4" fill="#E5E7EB" />
      <rect x="260" y="120" width="100" height="8" rx="4" fill="#E5E7EB" />
      <rect x="120" y="140" width="100" height="8" rx="4" fill="#E5E7EB" />
      <rect x="260" y="140" width="70" height="8" rx="4" fill="#E5E7EB" />
      <line x1="110" y1="230" x2="370" y2="230" stroke="#D1D5DB" strokeWidth="2"/>
      <rect x="160" y="240" width="40" height="10" rx="5" fill="#16A34A" />
      <rect x="290" y="240" width="40" height="10" rx="5" fill="#16A34A" />
      <circle cx="60" cy="100" r="30" fill="#3B82F6" />
      <path d="M50 100 L 60 110 L 70 90" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="420" cy="220" r="30" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
      <path d="M410,225 a15,15 0 0,1 20,0" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="416" cy="218" r="2" fill="#3B82F6"/>
      <circle cx="424" cy="218" r="2" fill="#3B82F6"/>
    </svg>
  );
}

export default function AccountingBookkeeping() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Accounting & Bookkeeping</h1>
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
        {/* Main content */}
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

        {/* Sidebar CTA */}
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
