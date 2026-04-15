"use client";

import { IndianRupee, Languages, Shield, Store } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const items = [
    { icon: <IndianRupee className="w-12 h-12" />, title: t.features.transparentPricing,  desc: t.features.transparentPricingDesc  },
    { icon: <Languages    className="w-12 h-12" />, title: t.features.localLanguage,       desc: t.features.localLanguageDesc       },
    { icon: <Shield       className="w-12 h-12" />, title: t.features.compliance,           desc: t.features.complianceDesc          },
    { icon: <Store        className="w-12 h-12" />, title: t.features.microFriendly,        desc: t.features.microFriendlyDesc       },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.sections.whyChooseUs}</h2>
          <p className="text-xl text-gray-600">{t.sections.whySubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="text-center p-6 rounded-xl bg-primary-50 hover:bg-blue-100 transition-colors">
              <div className="text-primary-600 mb-4 flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
