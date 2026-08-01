export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-indigo flex items-center justify-center">
            <span className="w-2 h-2 rounded-sm bg-white" />
          </span>
          <span className="font-display font-semibold text-[16px] text-ink">Byalance</span>
        </div>
        <p className="text-[12.5px] text-inkSoft">
          Bengaluru, Karnataka · Serving startups across Karnataka &amp; Maharashtra
        </p>
        <p className="text-[12.5px] text-inkSoft">© {new Date().getFullYear()} Byalance. All rights reserved.</p>
      </div>
    </footer>
  );
}
