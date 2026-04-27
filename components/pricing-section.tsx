"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

export default function PricingSection() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.sections.pricing}</h2>
          <p className="text-xl text-gray-600">{t.sections.pricingSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Starter */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.starter}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-1">{t.pricing.starterPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.starterFeatures.map((f) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} variant="outline" className="w-full" size="lg">
                {t.cta.choosePlan} Starter
              </Button>
            </CardContent>
          </Card>

          {/* Growth — Recommended */}
          <Card className="border-2 border-primary-600 shadow-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                {t.pricing.recommended}
              </span>
            </div>
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.growth}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-1">{t.pricing.growthPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.growthFeatures.map((f) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} className="w-full bg-primary-600 hover:bg-primary-700" size="lg">
                {t.cta.choosePlan} Growth
              </Button>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.pro}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-1">{t.pricing.proPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.proFeatures.map((f) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} variant="outline" className="w-full" size="lg">
                {t.cta.choosePlan} Pro
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-primary-600 mb-3">{t.pricing.notIdeal}</h3>
          <p className="text-gray-600 mb-6">{t.pricing.notIdealDesc}</p>
          <Button onClick={scrollToContact} className="bg-primary-600 text-white hover:bg-primary-700" size="lg">
            {t.cta.contactCustom}
          </Button>
        </div>
      </div>
    </section>
  );
}
