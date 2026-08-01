export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span className="font-display italic text-[18px] text-navy">Byalance</span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40">
            BOOKS · TAX · EOR · IMPORTS
          </span>
        </div>
        <p className="text-[12.5px] text-ink/45">
          Bengaluru, Karnataka · Serving startups across Karnataka &amp; Maharashtra
        </p>
        <p className="text-[12.5px] text-ink/45">© {new Date().getFullYear()} Byalance. All rights reserved.</p>
      </div>
    </footer>
  );
}
