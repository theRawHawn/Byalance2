import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How imports work', href: '#imports' },
  { label: 'Who it\u2019s for', href: '#why' },
  { label: 'Talk to us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-[64px]">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display italic text-[22px] leading-none text-navy">Byalance</span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] text-seal/80 group-hover:text-seal transition-colors">
            BOOKS · TAX · IMPORTS
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-ink/75 hover:text-ink relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-seal group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-ink/20 px-4 py-2 text-[13px] hover:bg-navy hover:text-paper hover:border-navy transition-colors duration-300"
        >
          Get a quote
        </a>
      </div>
    </motion.header>
  );
}
