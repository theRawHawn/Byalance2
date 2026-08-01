import { motion } from 'framer-motion';

const points = [
  { k: '1', label: 'Point of contact', detail: 'across books, tax, EOR and imports' },
  { k: '4', label: 'Registrations covered', detail: 'GST, TDS, PF/EPFO, IEC' },
  { k: '50%', label: 'Advance on imports', detail: 'transparent, quoted upfront' },
  { k: '0', label: 'Entities you need to open', detail: 'we hire and import on ours' },
];

export default function CapabilityStrip() {
  return (
    <section className="relative border-y border-line bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
        {points.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="px-5 md:px-8 py-9 md:py-11"
          >
            <span className="font-display font-semibold text-[30px] md:text-[36px] text-indigo tracking-tight">
              {p.k}
            </span>
            <p className="mt-2 text-[13.5px] font-medium text-ink">{p.label}</p>
            <p className="mt-0.5 text-[12.5px] text-inkSoft leading-snug">{p.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
