import { motion } from 'framer-motion';
import { LedgerIcon, PayrollIcon, EORIcon, ImportIcon } from './doodles/ServiceIcons';

const services = [
  {
    tag: 'Books',
    title: 'Accounting & bookkeeping',
    body: 'Monthly books closed on time, reconciled bank feeds, and financials that hold up when an investor or auditor asks to see them.',
    Icon: LedgerIcon,
  },
  {
    tag: 'GST · TDS · Payroll',
    title: 'Compliance, filed on schedule',
    body: 'GSTR-1/3B, TDS returns, PF/ECR and ITR — tracked against real due dates, not remembered after the notice arrives.',
    Icon: PayrollIcon,
  },
  {
    tag: 'EOR India',
    title: 'Hire in India without an entity',
    body: "Onboard talent on Byalance's registrations — payroll, PF, statutory benefits and compliant contracts, handled end to end.",
    Icon: EORIcon,
  },
  {
    tag: 'Import compliance',
    title: 'Import sourcing & customs',
    body: 'No IEC, no GST-linked import registration, no customs broker on retainer? We import under our own company and hand the goods over cleared.',
    Icon: ImportIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="text-[13px] font-medium text-indigo mb-3">What we run</p>
            <h2 className="font-display font-semibold text-[32px] md:text-[40px] text-ink max-w-xl tracking-tight">
              Four desks, one point of contact
            </h2>
          </div>
          <p className="text-inkSoft max-w-sm text-[14.5px] leading-relaxed">
            Use one service or all four — most clients start with books and compliance, then
            hand us imports once volumes pick up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map(({ tag, title, body, Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-line shadow-card p-8 md:p-9 transition-shadow duration-300 hover:shadow-float"
            >
              <div className="flex items-start justify-between">
                <span className="w-12 h-12 rounded-xl bg-indigoSoft flex items-center justify-center text-indigo">
                  <Icon width={26} height={26} strokeWidth={1.8} />
                </span>
                <span className="text-[11px] font-mono font-medium text-inkSoft/70 mt-1">{tag}</span>
              </div>
              <h3 className="font-display font-semibold text-[20px] mt-6 text-ink tracking-tight">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-inkSoft">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
