import { motion } from 'framer-motion';

const rows = [
  { label: 'GSTR-3B · July', status: 'Filed', tone: 'emerald' as const },
  { label: 'TDS 26Q · Q1', status: 'Filed', tone: 'emerald' as const },
  { label: 'PF ECR · July', status: 'Due in 3d', tone: 'amber' as const },
];

const tones: Record<string, string> = {
  emerald: 'bg-emerald/10 text-emerald',
  amber: 'bg-amber/10 text-amber',
};

export default function StatusPanel({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      whileHover={{ rotate: 0, y: -4 }}
      className={`w-[300px] rounded-2xl bg-white border border-line shadow-float p-5 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-medium text-inkSoft">Compliance status</span>
        <span className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-line" />
          <span className="w-2 h-2 rounded-full bg-line" />
          <span className="w-2 h-2 rounded-full bg-emerald" />
        </span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-lg bg-surface px-3 py-2.5"
          >
            <span className="text-[12.5px] font-mono text-ink">{r.label}</span>
            <span className={`text-[10.5px] font-medium px-2 py-0.5 rounded-full ${tones[r.tone]}`}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
        <span className="text-[11px] text-inkSoft">This month</span>
        <span className="text-[13px] font-semibold text-ink">3/3 on time</span>
      </div>
    </motion.div>
  );
}
