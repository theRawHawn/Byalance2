import { motion } from 'framer-motion';
import ShipmentPanel from './mockups/ShipmentPanel';

const steps = [
  { mark: '01', title: 'You send the requirement', body: 'Part numbers, specs or a supplier link — whatever you have. No IEC or import registration needed on your side.' },
  { mark: '02', title: 'We source and quote', body: 'From vetted Indian and overseas distributors, at landed cost — duty, freight and our margin shown separately.' },
  { mark: '03', title: 'We import under our IEC', body: 'Byalance clears the shipment on its own registrations — Bill of Entry, IGST, HSN classification, RBI IDPMS, all our liability.' },
  { mark: '04', title: 'Goods land at your door', body: "Cleared, invoiced, and reconciled against the advance you've already paid." },
];

export default function ImportFlow() {
  return (
    <section id="imports" className="relative py-24 md:py-32 bg-indigoDeep text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(50% 40% at 90% 0%, rgba(53,71,232,0.35) 0%, rgba(53,71,232,0) 100%)' }} />
      <div className="absolute inset-0 dot-grid-light fade-edges opacity-60 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-start mb-20">
          <div>
            <p className="text-[13px] font-medium text-white/60 mb-3">Import sourcing</p>
            <h2 className="font-display font-semibold text-[32px] md:text-[40px] tracking-tight">
              We hold the import registrations. You hold the requirement.
            </h2>
            <p className="mt-5 max-w-xl text-white/70 text-[15px] leading-relaxed">
              Most R&amp;D teams and early-stage startups don't have an IEC, a customs broker, or
              the bandwidth to chase a Bill of Entry. Byalance imports on your behalf through its
              own company and sells it on — so the shipment lands compliant and the paperwork
              never touches your desk.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ShipmentPanel />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.mark}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-mono text-[12px] text-white/40">{s.mark}</span>
              <h3 className="font-display font-semibold text-[18px] mt-3">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/15 p-8 bg-white/[0.04]"
          >
            <p className="text-[12px] font-medium text-white/50">One-off or occasional</p>
            <h3 className="font-display font-semibold text-[22px] mt-2">Per-shipment commission</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/65">
              We quote landed cost plus a fixed commission on that shipment. No retainer, no
              minimum volume — pay per import.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/15 p-8 bg-white/[0.04]"
          >
            <p className="text-[12px] font-medium text-white/50">Regular importers</p>
            <h3 className="font-display font-semibold text-[22px] mt-2">Monthly subscription</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/65">
              A flat monthly fee covers ongoing sourcing and clearance across multiple shipments —
              usually cheaper than commission once you're importing regularly.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-5"
        >
          <span className="shrink-0 rounded-full bg-white text-indigoDeep text-[12.5px] font-semibold px-3.5 py-1.5">
            50% advance
          </span>
          <p className="text-[14px] leading-relaxed text-white/75">
            Required upfront on both paths — it funds the purchase and duty. The balance is
            settled against the final landed invoice once your shipment clears.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
