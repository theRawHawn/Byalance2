import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How imports work', href: '#imports' },
  { label: "Who it's for", href: '#why' },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">
        <a href="#top" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-sm bg-white" />
          </span>
          <span className="font-display font-semibold text-[18px] text-ink">Byalance</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[14px] text-inkSoft hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-lg bg-indigo text-white px-4 py-2.5 text-[13.5px] font-medium hover:bg-indigoDeep transition-colors duration-300"
        >
          Get a quote
        </a>
      </div>
    </motion.header>
  );
}
