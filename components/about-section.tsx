'use client';

import { Handshake, TrendingUp, Clock } from "lucide-react";
import Image from 'next/image';
import { useTranslation } from "@/lib/translation-context";

export default function AboutSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Handshake className="w-12 h-12" />,
      title: t.about.features.trusted.title,
      desc: t.about.features.trusted.description,
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: t.about.features.growth.title,
      desc: t.about.features.growth.description,
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: t.about.features.timely.title,
      desc: t.about.features.timely.description,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t.about.p1}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {t.about.p2}
            </p>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.about.missionTitle}</h3>
              <p className="text-gray-700 italic">
                {t.about.missionText}
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <Image 
              src="/file_000.webp"
              alt="Illustration of accounting services provided by Byalance"
              width={480}
              height={360}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="text-center">
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