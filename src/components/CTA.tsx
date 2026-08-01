import { motion } from 'framer-motion';
import Stamp from './doodles/Stamp';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl bg-ink text-paper px-8 py-16 md:px-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, rotate: 8, scale: 0.85 }}
            whileInView={{ opacity: 1, rotate: 8, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute -right-4 -top-6 md:right-10 md:top-10 hidden sm:block"
          >
            <Stamp label="BYALANCE · SINCE 2023" sub="talk?" color="#EDEEE6" size={110} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-xl"
          >
            <p className="font-mono text-[11px] tracking-[0.3em] text-brassLight mb-4">GET STARTED</p>
            <h2 className="font-display text-[32px] md:text-[44px] leading-tight">
              Send us this month\u2019s mess. We\u2019ll tell you what\u2019s overdue.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-paper/70">
              A first call is free — bring your last GST return, your payroll headcount, or the
              parts list you\u2019ve been meaning to import. We\u2019ll tell you exactly what we\u2019d
              take off your plate.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="mailto:hello@byalance.in"
                className="inline-flex items-center rounded-full bg-seal text-paper px-6 py-3.5 text-[14px] font-medium hover:bg-sealLight transition-colors duration-300"
              >
                hello@byalance.in
              </a>
              <a
                href="tel:+910000000000"
                className="inline-flex items-center rounded-full border border-paper/25 px-6 py-3.5 text-[14px] hover:border-paper/60 transition-colors duration-300"
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
