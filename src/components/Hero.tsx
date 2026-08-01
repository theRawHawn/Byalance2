import { motion } from 'framer-motion';
import StatusPanel from './mockups/StatusPanel';

const logos = ['GST', 'TDS', 'EPFO', 'ICEGATE', 'RBI'];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28">
      <div className="absolute inset-0 mesh" />
      <div className="absolute inset-0 dot-grid fade-edges opacity-70 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-indigo/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-32 w-[380px] h-[380px] rounded-full bg-emerald/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 backdrop-blur px-3.5 py-1.5 mb-8 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
            <span className="text-[12px] font-medium text-inkSoft">Bengaluru · serving startups pan-India</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-[46px] leading-[1.06] sm:text-[58px] md:text-[66px] md:leading-[1.02] text-ink tracking-tight"
          >
            Your books, compliance,
            <br className="hidden sm:block" /> and imports —{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-indigo">one desk.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute left-0 -bottom-1 h-[10px] w-full bg-indigo/15 origin-left -z-0"
              />
            </span>{' '}
            Not five vendors.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 max-w-lg text-[17px] leading-relaxed text-inkSoft"
          >
            Byalance is built for startups, R&amp;D teams and institutions that don't have a
            finance desk yet. We file the returns, run payroll, and import the hardware — under
            our own registrations where you don't have any.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-indigo text-white px-6 py-3.5 text-[14.5px] font-medium shadow-card hover:bg-indigoDeep hover:-translate-y-0.5 transition-all duration-300"
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
            className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <span className="text-[11px] uppercase tracking-wider text-inkSoft/70">We file &amp; clear under</span>
            {logos.map((l) => (
              <span key={l} className="font-mono text-[13px] font-medium text-ink/70">
                {l}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:flex justify-center items-center h-[460px]">
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute w-[260px] rounded-2xl bg-white border border-line shadow-card p-5 -translate-x-16 translate-y-24"
          >
            <p className="text-[11px] font-medium text-inkSoft mb-3">Import advance</p>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-semibold text-[26px] text-ink">50%</span>
              <span className="text-[12px] text-inkSoft">upfront, balance on delivery</span>
            </div>
          </motion.div>

          <StatusPanel className="relative z-10 -translate-x-4" />
        </div>
      </div>
    </section>
  );
}
