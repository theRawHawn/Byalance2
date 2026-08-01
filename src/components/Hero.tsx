import { motion } from 'framer-motion';
import StatusPanel from './mockups/StatusPanel';

const logos = ['GST', 'TDS', 'EPFO', 'ICEGATE', 'RBI'];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28 mesh">
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.15fr,0.85fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
            <span className="text-[12px] font-medium text-inkSoft">Bengaluru · serving startups pan-India</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-[42px] leading-[1.1] sm:text-[52px] md:text-[58px] md:leading-[1.08] text-ink tracking-tight"
          >
            Your books, compliance, and imports — run by{' '}
            <span className="text-indigo">one desk</span>, not five vendors.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-inkSoft"
          >
            Byalance is built for startups, R&amp;D teams and institutions that don't have a
            finance desk yet. We file the returns, run payroll, and import the hardware — under
            our own registrations where you don't have any.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-indigo text-white px-6 py-3.5 text-[14.5px] font-medium shadow-card hover:bg-indigoDeep transition-colors duration-300"
            >
              Talk to us this week
            </a>
            <a
              href="#imports"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-ink hover:text-indigo transition-colors duration-300"
            >
              See how imports work
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <span className="text-[11px] uppercase tracking-wider text-inkSoft/70">We file &amp; clear under</span>
            {logos.map((l) => (
              <span key={l} className="font-mono text-[13px] font-medium text-ink/70">
                {l}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:flex justify-center items-center h-[420px]">
          <div className="absolute w-[380px] h-[380px] rounded-full bg-indigo/5 blur-3xl" />
          <StatusPanel className="relative" />
        </div>
      </div>
    </section>
  );
}
