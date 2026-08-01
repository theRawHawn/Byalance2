import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl bg-ink text-white px-8 py-16 md:px-16 md:py-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-60"
            style={{ background: 'radial-gradient(60% 60% at 100% 0%, rgba(53,71,232,0.35) 0%, rgba(53,71,232,0) 100%)' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-xl"
          >
            <p className="text-[13px] font-medium text-white/60 mb-4">Get started</p>
            <h2 className="font-display font-semibold text-[32px] md:text-[42px] leading-tight tracking-tight">
              Send us this month's mess. We'll tell you what's overdue.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              A first call is free — bring your last GST return, your payroll headcount, or the
              parts list you've been meaning to import. We'll tell you exactly what we'd take off
              your plate.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="mailto:hello@byalance.in"
                className="inline-flex items-center rounded-lg bg-indigo text-white px-6 py-3.5 text-[14.5px] font-medium hover:bg-indigoDeep transition-colors duration-300"
              >
                hello@byalance.in
              </a>
              <a
                href="tel:+910000000000"
                className="inline-flex items-center rounded-lg border border-white/25 px-6 py-3.5 text-[14.5px] hover:border-white/60 transition-colors duration-300"
              >
                Schedule a call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
