import { Handshake, TrendingUp, Clock } from "lucide-react";

// Inline SVG illustration replacing the missing /file_000.webp
function AccountingIllustration() {
  return (
    <svg
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-xl shadow-lg w-full h-auto"
      aria-label="Professional accounting and financial services"
    >
      <rect width="480" height="360" rx="16" fill="#EFF6FF" />

      {/* Desk */}
      <rect x="40" y="260" width="400" height="16" rx="4" fill="#BFDBFE" />

      {/* Monitor */}
      <rect x="140" y="120" width="200" height="130" rx="8" fill="#1E40AF" />
      <rect x="150" y="130" width="180" height="110" rx="4" fill="#EFF6FF" />
      {/* Chart bars on screen */}
      <rect x="165" y="195" width="22" height="30" rx="3" fill="#3B82F6" />
      <rect x="195" y="178" width="22" height="47" rx="3" fill="#2563EB" />
      <rect x="225" y="163" width="22" height="62" rx="3" fill="#1D4ED8" />
      <rect x="255" y="150" width="22" height="75" rx="3" fill="#1E40AF" />
      <rect x="285" y="170" width="22" height="55" rx="3" fill="#3B82F6" />
      {/* Screen label */}
      <text x="240" y="148" textAnchor="middle" fontSize="10" fill="#1E40AF" fontFamily="system-ui">Financial Reports</text>
      {/* Monitor stand */}
      <rect x="220" y="250" width="40" height="10" rx="2" fill="#93C5FD" />
      <rect x="205" y="258" width="70" height="6" rx="3" fill="#BFDBFE" />

      {/* Calculator */}
      <rect x="60" y="190" width="70" height="70" rx="8" fill="#1E40AF" />
      <rect x="68" y="198" width="54" height="20" rx="4" fill="#EFF6FF" />
      <text x="95" y="212" textAnchor="middle" fontSize="11" fill="#1E40AF" fontFamily="system-ui" fontWeight="bold">₹ 24,500</text>
      {[0,1,2,3].map(r => [0,1,2].map(c => (
        <rect key={`${r}${c}`} x={72 + c*18} y={225 + r*12} width="12" height="9" rx="2" fill="#3B82F6" />
      )))}

      {/* Document stack */}
      <rect x="355" y="175" width="70" height="90" rx="6" fill="white" stroke="#BFDBFE" strokeWidth="2" />
      <rect x="360" y="165" width="70" height="90" rx="6" fill="white" stroke="#BFDBFE" strokeWidth="2" />
      <rect x="365" y="155" width="70" height="90" rx="6" fill="white" stroke="#93C5FD" strokeWidth="2" />
      {/* Lines on top doc */}
      <rect x="375" y="170" width="48" height="4" rx="2" fill="#BFDBFE" />
      <rect x="375" y="180" width="36" height="4" rx="2" fill="#BFDBFE" />
      <rect x="375" y="190" width="42" height="4" rx="2" fill="#BFDBFE" />
      <rect x="375" y="200" width="30" height="4" rx="2" fill="#BFDBFE" />
      <text x="400" y="230" textAnchor="middle" fontSize="9" fill="#1E40AF" fontFamily="system-ui" fontWeight="bold">ITR / GST</text>

      {/* Coins */}
      {[0,1,2,3].map(i => (
        <ellipse key={i} cx="100" cy={260 - i * 7} rx="22" ry="7" fill={i % 2 === 0 ? "#FCD34D" : "#F59E0B"} />
      ))}

      {/* Checkmark badge */}
      <circle cx="380" cy="100" r="28" fill="#22C55E" />
      <path d="M368 100 l8 9 l16-18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Labels */}
      <rect x="120" y="300" width="240" height="28" rx="6" fill="#1E40AF" />
      <text x="240" y="319" textAnchor="middle" fontSize="13" fill="white" fontFamily="system-ui" fontWeight="bold">
        Byalance — Trusted Accounting Partner
      </text>
    </svg>
  );
}

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
            <AccountingIllustration />
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
