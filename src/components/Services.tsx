import { motion } from 'framer-motion';
import { LedgerIcon, PayrollIcon, EORIcon, ImportIcon } from './doodles/ServiceIcons';

const services = [
  {
    tag: 'BOOKS',
    title: 'Accounting & bookkeeping',
    body:
      'Monthly books closed on time, reconciled bank feeds, and financials that hold up when an investor or auditor asks to see them.',
    Icon: LedgerIcon,
  },
  {
    tag: 'GST · TDS · PAYROLL',
    title: 'Compliance, filed on schedule',
    body:
      'GSTR-1/3B, TDS returns, PF/ECR and ITR — tracked against real due dates, not remembered after the notice arrives.',
    Icon: PayrollIcon,
  },
  {
    tag: 'EOR INDIA',
    title: 'Hire in India without an entity',
    body:
      'Onboard talent on Byalance\u2019s registrations — payroll, PF, statutory benefits and compliant contracts, handled end to end.',
    Icon: EORIcon,
  },
  {
    tag: 'IMPORT COMPLIANCE',
    title: 'Import sourcing & customs',
    body:
      'No IEC, no GST-linked import registration, no customs broker on retainer? We import under our own company and hand the goods over cleared.',
    Icon: ImportIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-seal mb-3">WHAT WE RUN</p>
            <h2 className="font-display text-[32px] md:text-[42px] text-ink max-w-xl">
              Four desks, one point of contact
            </h2>
          </div>
          <p className="text-ink/60 max-w-sm text-[14.5px] leading-relaxed">
            Use one service or all four — most clients start with books and compliance, then
            hand us imports once volumes pick up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden">
          {services.map(({ tag, title, body, Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-paper p-8 md:p-10 hover:bg-navy transition-colors duration-500"
            >
              <div className="flex items-start justify-between">
                <Icon className="text-navy group-hover:text-brassLight transition-colors duration-500" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 group-hover:text-paper/50 transition-colors duration-500">
                  {tag}
                </span>
              </div>
              <h3 className="font-display text-[22px] mt-6 text-ink group-hover:text-paper transition-colors duration-500">
                {title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink/65 group-hover:text-paper/75 transition-colors duration-500">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
