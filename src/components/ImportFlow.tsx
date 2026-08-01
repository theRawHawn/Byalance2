import { motion } from 'framer-motion';
import { CrateGlyph, PlaneRoute } from './doodles/ServiceIcons';
import Stamp from './doodles/Stamp';

const steps = [
  {
    mark: 'RFQ',
    title: 'You send the requirement',
    body: 'Part numbers, specs or a supplier link — whatever you have. No IEC or import registration needed on your side.',
  },
  {
    mark: 'SOURCE',
    title: 'We source and quote',
    body: 'From vetted Indian and overseas distributors, at landed cost — duty, freight and our margin shown separately.',
  },
  {
    mark: 'IMPORT',
    title: 'We import under our IEC',
    body: 'Byalance clears the shipment on its own registrations — Bill of Entry, IGST, HSN classification, RBI IDPMS, all our liability.',
  },
  {
    mark: 'DELIVER',
    title: 'Goods land at your door',
    body: 'Cleared, invoiced, and reconciled against the advance you\u2019ve already paid.',
  },
];

export default function ImportFlow() {
  return (
    <section id="imports" className="relative py-24 md:py-32 bg-navy text-paper overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.3em] text-brassLight mb-3">IMPORT SOURCING</p>
        <h2 className="font-display text-[32px] md:text-[42px] max-w-2xl">
          We hold the import registrations. You hold the requirement.
        </h2>
        <p className="mt-5 max-w-xl text-paper/70 text-[15px] leading-relaxed">
          Most R&amp;D teams and early-stage startups don\u2019t have an IEC, a customs broker, or the
          bandwidth to chase a Bill of Entry. Byalance imports on your behalf through its own
          company and sells it on — so the shipment lands compliant and the paperwork never
          touches your desk.
        </p>

        <div className="mt-16 text-navyLight">
          <PlaneRoute className="w-full opacity-70" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.mark}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 text-brassLight">
                <CrateGlyph />
                <span className="font-mono text-[11px] tracking-[0.25em]">{s.mark}</span>
              </div>
              <h3 className="font-display text-[19px] mt-4">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-paper/65">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* commercial models */}
        <div className="mt-24 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-paper/15 p-8 bg-paper/[0.04]"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-brassLight">ONE-OFF OR OCCASIONAL</p>
            <h3 className="font-display text-[24px] mt-3">Per-shipment commission</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-paper/65">
              We quote landed cost plus a fixed commission on that shipment. No retainer, no
              minimum volume — pay per import.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-paper/15 p-8 bg-paper/[0.04]"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-brassLight">REGULAR IMPORTERS</p>
            <h3 className="font-display text-[24px] mt-3">Monthly subscription</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-paper/65">
              A flat monthly fee covers ongoing sourcing and clearance across multiple shipments —
              usually cheaper than commission once you\u2019re importing regularly.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-dashed border-paper/25 p-8"
        >
          <Stamp label="REQUIRED · BOTH PATHS" sub="50% adv." color="#CBAA5F" size={104} />
          <p className="text-[14.5px] leading-relaxed text-paper/75 max-w-lg">
            Either way, we take <span className="text-paper font-medium">50% advance</span> before
            we place the order — it funds the purchase and duty upfront. The balance is settled
            against the final landed invoice once your shipment clears.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
