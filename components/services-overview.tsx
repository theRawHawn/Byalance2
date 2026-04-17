"use client";

import { Calculator, FileText, Receipt, Users, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/lib/translation-context";
import Link from "next/link";

const services = [
  {
    icon: <Calculator className="w-12 h-12 text-primary-600" />,
    title: "Accounting & Bookkeeping",
    href: "/services/accounting-bookkeeping",
    description: "Comprehensive accounting services to keep your books accurate and up-to-date.",
    features: [
      "Sales, Purchase, Expense Entries",
      "Bank Reconciliation",
      "Cash Book Maintenance",
      "Journal Entries & Depreciation",
      "Ledgers/Vendors Reconciliation",
      "Trial Balance, P&L, Balance Sheet",
      "Receivables & Payables Tracking",
      "Data Setup & Cleanup",
      "Month-End & Year-End Closing Support",
    ],
    wide: true,
  },
  {
    icon: <FileText className="w-12 h-12 text-primary-600" />,
    title: "ITR Services",
    href: "/services/itr-services",
    description: "Expert ITR filing services for individuals and businesses.",
    features: [
      "Applicability Check (Mandatory/Voluntary)",
      "PAN-Aadhaar Linking Verification",
      "Computation of Total Income & Tax",
      "Form 26AS, AIS & TIS Review",
      "Filing Correct ITR Form (ITR-1 to ITR-7)",
      "Notice & Scrutiny Support",
    ],
    wide: false,
  },
  {
    icon: <FileText className="w-12 h-12 text-primary-600" />,
    title: "GST Services",
    href: "/services/gst-services",
    description: "Complete GST compliance and filing services to keep your business tax-compliant.",
    features: [
      "GST Registration",
      "GSTR-1, 3B, 9 Filing",
      "GST Input Credit Matching (2B vs Books)",
      "E-Invoice & E-Way Bill Compliance",
      "Late Fee and Penalty Resolution",
    ],
    wide: false,
  },
  {
    icon: <Receipt className="w-12 h-12 text-primary-600" />,
    title: "TDS Services",
    href: "/services/tds-services",
    description: "Comprehensive TDS management and filing services for your business.",
    features: [
      "TAN Application",
      "Filing of Form 24Q, 26Q",
      "Advance Tax & Challan Management",
      "Form 16/16A Generation",
      "TDS Default & Demand Resolution",
    ],
    wide: false,
  },
  {
    icon: <Users className="w-12 h-12 text-primary-600" />,
    title: "Payroll Services",
    href: "/services/payroll-processing",
    description: "Complete payroll management with accurate calculations and statutory compliance.",
    features: [
      "Employee Master Data Management",
      "Salary Structuring & Monthly Calculations",
      "Accurate Payslips & Payroll Register",
      "Payroll Register & Salary Slips",
      "TDS on Salary & Form 16/16A",
      "PF/ESI/PT/EDLI Return Filing",
      "Full & Final Settlement",
    ],
    wide: true,
  },
];

export default function ServicesOverview() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.sections.services}</h2>
          <p className="text-xl text-gray-600">{t.sections.servicesSubtitle}</p>
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <Link
                        href={service.href}
                        className="text-sm text-primary-600 font-medium hover:text-primary-700 whitespace-nowrap border border-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        {t.cta.learnMore} →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 ${service.wide ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-x-8 gap-y-3`}>
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}