import { motion } from 'framer-motion';
import type { SVGProps } from 'react';

function RocketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 15c-3 0-5.5-2-6-6 4-1 7 0 9 3M12 15c3 0 5.5-2 6-6-4-1-7 0-9 3M12 15v5M9.5 18h5" stroke="currentColor" />
      <circle cx="12" cy="9" r="1.4" stroke="currentColor" />
    </svg>
  );
}
function FlaskIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 3h4M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" stroke="currentColor" />
      <path d="M7.5 15h9" stroke="currentColor" />
    </svg>
  );
}
function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="4" width="14" height="17" rx="1" stroke="currentColor" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" stroke="currentColor" />
    </svg>
  );
}

const audiences = [
  { who: 'Early-stage startups', detail: "Pre-revenue or just past it — no finance hire yet, but GST, TDS and payroll don't wait.", Icon: RocketIcon, chip: 'bg-indigoSoft text-indigo' },
  { who: 'R&D & deep-tech teams', detail: 'Importing components or lab equipment without an IEC, a customs broker, or the patience for ICEGATE.', Icon: FlaskIcon, chip: 'bg-emerald/10 text-emerald' },
  { who: 'Institutions & labs', detail: 'Grant-funded or academic bodies that need clean, auditable compliance without hiring for it.', Icon: BuildingIcon, chip: 'bg-amber/10 text-amber' },
];

export default function WhyByalance() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-14 items-start">
          <div>
            <p className="text-[13px] font-medium text-indigo mb-3">Who it's for</p>
            <h2 className="font-display font-semibold text-[32px] md:text-[38px] text-ink leading-tight tracking-tight">
              Built for teams that don't have the documentation — or don't want the hurdle.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-inkSoft max-w-md">
              If you've ever stalled a shipment or a filing because a registration didn't exist
              yet, that's the exact gap Byalance is built to sit in.
            </p>
          </div>

          <div className="space-y-4">
            {audiences.map((a, i) => (
              <motion.div
                key={a.who}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: -3 }}
                className="rounded-2xl bg-white border border-line shadow-card p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
              >
                <span className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${a.chip}`}>
                  <a.Icon />
                </span>
                <span className="font-display font-semibold text-[19px] text-ink w-full sm:w-48 shrink-0">
                  {a.who}
                </span>
                <span className="text-[14px] leading-relaxed text-inkSoft">{a.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
