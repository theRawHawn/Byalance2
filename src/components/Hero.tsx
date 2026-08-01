import { motion } from 'framer-motion';
import Stamp from './doodles/Stamp';

const chips = ['GSTR-1', 'GSTR-3B', 'TDS 26Q', 'PF · ECR', 'Bill of Entry', 'ICEGATE'];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* faint dotted route arcing across the hero */}
      <svg
        className="absolute top-24 left-0 w-full h-[420px] text-ink/10 pointer-events-none hidden md:block"
        viewBox="0 0 1200 420"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-20 340 C 220 200, 420 380, 620 220 C 780 90, 980 160, 1220 60"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="1 10"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, rotate: -18, scale: 0.85 }}
        animate={{ opacity: 1, rotate: -12, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
        className="absolute right-6 top-[168px] md:right-16 md:top-[130px] hidden sm:block"
      >
        <Stamp label="VERIFIED · BYALANCE" sub="filed" color="#A83C2E" size={116} />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.3em] text-seal mb-6"
        >
          VIRTUAL ACCOUNTANT &amp; IMPORT DESK — BENGALURU
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[42px] leading-[1.08] sm:text-[56px] md:text-[68px] md:leading-[1.05] text-ink max-w-4xl"
        >
          Your books, your compliance, and your imports —
          <span className="italic text-navy"> run by one desk</span>, not five vendors.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-ink/70"
        >
          Byalance is built for startups, R&amp;D teams and institutions that don't have a finance
          desk yet, or don't want the paperwork. We file the returns, run the payroll, and import
          the hardware — under our own registrations where you don't have any.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-navy text-paper px-6 py-3.5 text-[14px] font-medium hover:bg-ink transition-colors duration-300"
          >
            Talk to us this week
          </a>
          <a
            href="#imports"
            className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-[14px] hover:border-ink/60 transition-colors duration-300"
          >
            See how import sourcing works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 flex flex-wrap gap-x-3 gap-y-2"
        >
          {chips.map((c) => (
            <span
              key={c}
              className="font-mono text-[11px] tracking-wide text-ink/55 border border-ink/15 rounded px-2.5 py-1 bg-paper/60"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
