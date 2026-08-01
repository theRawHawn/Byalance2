import { motion } from 'framer-motion';

const audiences = [
  { who: 'Early-stage startups', detail: "Pre-revenue or just past it — no finance hire yet, but GST, TDS and payroll don't wait." },
  { who: 'R&D & deep-tech teams', detail: 'Importing components or lab equipment without an IEC, a customs broker, or the patience for ICEGATE.' },
  { who: 'Institutions & labs', detail: 'Grant-funded or academic bodies that need clean, auditable compliance without hiring for it.' },
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
                className="rounded-2xl bg-white border border-line p-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8"
              >
                <span className="font-display font-semibold text-[20px] text-ink w-full sm:w-56 shrink-0">
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
