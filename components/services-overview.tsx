"use client";
import React from 'react';

import { Calculator, FileText, Receipt, Users, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/lib/translation-context";
import Link from "next/link";

const serviceIcons: { [key: string]: React.ReactElement } = {
  accounting: <Calculator className="w-12 h-12 text-primary-600" />,
  itr: <FileText className="w-12 h-12 text-primary-600" />,
  gst: <FileText className="w-12 h-12 text-primary-600" />,
  tds: <Receipt className="w-12 h-12 text-primary-600" />,
  payroll: <Users className="w-12 h-12 text-primary-600" />,
};

const serviceLinks: { [key: string]: string } = {
  accounting: "/services/accounting-bookkeeping",
  itr: "/services/itr-services",
  gst: "/services/gst-services",
  tds: "/services/tds-services",
  payroll: "/services/payroll-processing",
};

const serviceWideLayout: { [key: string]: boolean } = {
  accounting: true,
  itr: false,
  gst: false,
  tds: false,
  payroll: true,
};

export default function ServicesOverview() {
  const { t } = useTranslation();

  const services = Object.keys(t.services).map((key) => ({
    key: key,
    icon: serviceIcons[key],
    title: t.services[key as keyof typeof t.services].title,
    description: t.services[key as keyof typeof t.services].description,
    features: t.services[key as keyof typeof t.services].features,
    href: serviceLinks[key],
    wide: serviceWideLayout[key],
  }));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.sections.services}</h2>
          <p className="text-xl text-gray-600">{t.sections.servicesSubtitle}</p>
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <Card key={service.key} className="hover:shadow-md transition-shadow">
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