import { motion } from 'framer-motion';

const audiences = [
  {
    who: 'Early-stage startups',
    detail: 'Pre-revenue or just past it — no finance hire yet, but GST, TDS and payroll don\u2019t wait.',
  },
  {
    who: 'R&D & deep-tech teams',
    detail: 'Importing components or lab equipment without an IEC, a customs broker, or the patience for ICEGATE.',
  },
  {
    who: 'Institutions & labs',
    detail: 'Grant-funded or academic bodies that need clean, auditable compliance without hiring for it.',
  },
];

export default function WhyByalance() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-14 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-seal mb-3">WHO IT'S FOR</p>
            <h2 className="font-display text-[32px] md:text-[40px] text-ink leading-tight">
              Built for teams that don\u2019t have the documentation —
              <span className="italic text-navy"> or don\u2019t want the hurdle.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/65 max-w-md">
              If you\u2019ve ever stalled a shipment or a filing because a registration didn\u2019t
              exist yet, that\u2019s the exact gap Byalance is built to sit in.
            </p>
          </div>

          <div className="space-y-0">
            {audiences.map((a, i) => (
              <motion.div
                key={a.who}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rule-dotted py-6 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-8"
              >
                <span className="font-mono text-[11px] text-seal/80 w-10 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[19px] text-ink w-full sm:w-56 shrink-0">{a.who}</span>
                <span className="text-[14px] leading-relaxed text-ink/65">{a.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
