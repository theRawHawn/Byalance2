import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calculator, FileText, Receipt, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Byalance",
  description:
    "Explore the comprehensive range of accounting and financial services offered by Byalance — GST, ITR, TDS, Payroll, and full Accounting & Bookkeeping for businesses across India.",
};

const services = [
  {
    title: "Accounting & Bookkeeping",
    icon: <Calculator className="w-10 h-10 text-primary-600" />,
    description:
      "Comprehensive accounting services covering sales, purchase, expense entries, bank reconciliation, financial statements, and year-end support so your books are always accurate.",
    href: "/services/accounting-bookkeeping",
  },
  {
    title: "ITR Services",
    icon: <FileText className="w-10 h-10 text-primary-600" />,
    description:
      "Hassle-free income tax return filing for individuals and businesses. We handle everything from applicability checks and Form 26AS review to notice responses and revised filings.",
    href: "/services/itr-services",
  },
  {
    title: "GST Services",
    icon: <FileText className="w-10 h-10 text-primary-600" />,
    description:
      "End-to-end GST compliance — registration, GSTR-1/3B/9 filing, input credit reconciliation, and late fee resolution — keeping your business fully tax-compliant.",
    href: "/services/gst-services",
  },
  {
    title: "TDS Services",
    icon: <Receipt className="w-10 h-10 text-primary-600" />,
    description:
      "Complete TDS management: TAN application, quarterly return filing (24Q/26Q), advance tax and challan management, and Form 16/16A generation.",
    href: "/services/tds-services",
  },
  {
    title: "Payroll Processing",
    icon: <Users className="w-10 h-10 text-primary-600" />,
    description:
      "End-to-end payroll: employee master setup, monthly salary calculations, salary slips, TDS on salary, Form 16, and PF/ESI/PT/EDLI compliance filings.",
    href: "/services/payroll-processing",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of accounting and financial compliance services designed for startups,
            retailers, MSMEs, and growing businesses across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.href} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
