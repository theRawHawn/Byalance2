import { motion } from 'framer-motion';
import { LedgerIcon, PayrollIcon, EORIcon, ImportIcon } from './doodles/ServiceIcons';

const services = [
  {
    tag: 'Books',
    title: 'Accounting & bookkeeping',
    body: 'Monthly books closed on time, reconciled bank feeds, and financials that hold up when an investor or auditor asks to see them.',
    Icon: LedgerIcon,
    chip: 'bg-indigoSoft text-indigo',
    bar: 'bg-indigo',
  },
  {
    tag: 'GST · TDS · Payroll',
    title: 'Compliance, filed on schedule',
    body: 'GSTR-1/3B, TDS returns, PF/ECR and ITR — tracked against real due dates, not remembered after the notice arrives.',
    Icon: PayrollIcon,
    chip: 'bg-emerald/10 text-emerald',
    bar: 'bg-emerald',
  },
  {
    tag: 'EOR India',
    title: 'Hire in India without an entity',
    body: "Onboard talent on Byalance's registrations — payroll, PF, statutory benefits and compliant contracts, handled end to end.",
    Icon: EORIcon,
    chip: 'bg-amber/10 text-amber',
    bar: 'bg-amber',
  },
  {
    tag: 'Import compliance',
    title: 'Import sourcing & customs',
    body: 'No IEC, no GST-linked import registration, no customs broker on retainer? We import under our own company and hand the goods over cleared.',
    Icon: ImportIcon,
    chip: 'bg-indigoSoft text-indigoDeep',
    bar: 'bg-indigoDeep',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="text-[13px] font-medium text-indigo mb-3">What we run</p>
            <h2 className="font-display font-semibold text-[32px] md:text-[42px] text-ink max-w-xl tracking-tight">
              Four desks, one point of contact
            </h2>
          </div>
          <p className="text-inkSoft max-w-sm text-[14.5px] leading-relaxed">
            Use one service or all four — most clients start with books and compliance, then
            hand us imports once volumes pick up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map(({ tag, title, body, Icon, chip, bar }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl border border-line shadow-card p-8 md:p-9 overflow-hidden transition-shadow duration-300 hover:shadow-float"
            >
              <span className={`absolute top-0 left-0 right-0 h-[3px] ${bar} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400`} />
              <div className="flex items-start justify-between">
                <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${chip}`}>
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
