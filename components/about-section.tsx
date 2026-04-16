import { Handshake, TrendingUp, Clock } from "lucide-react";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Byalance</h2>
            <p className="text-lg text-gray-600 mb-6">
              Byalance is a modern virtual accounting firm dedicated to serving the unique needs of
              startups and small businesses in Tier 1, 2 and Tier 3 cities across India. We understand
              that growing businesses need reliable, affordable, and professional accounting services.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We specialise in working with startups, retailers, traders, service providers, and MSMEs
              who need comprehensive accounting support without the complexity and high costs of
              traditional accounting firms.
            </p>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 italic">
                Making compliance stress-free, affordable, and professional for every business.
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
          {[
            {
              icon: <Handshake className="w-12 h-12" />,
              title: "Trusted Partner",
              desc: "Building long-term relationships with our clients based on trust and reliability.",
            },
            {
              icon: <TrendingUp className="w-12 h-12" />,
              title: "Growth Focused",
              desc: "Supporting businesses at every stage of their growth journey.",
            },
            {
              icon: <Clock className="w-12 h-12" />,
              title: "Timely Service",
              desc: "Meeting all deadlines and keeping your business compliant on time.",
            },
          ].map(({ icon, title, desc }) => (
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
