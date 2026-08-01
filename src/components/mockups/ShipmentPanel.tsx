import { motion } from 'framer-motion';

const stages = ['RFQ', 'Sourced', 'Imported', 'Delivered'];

export default function ShipmentPanel({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={{ rotate: 0, y: -4 }}
      className={`w-[320px] rounded-2xl bg-white border border-line shadow-float p-5 ${className}`}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-medium text-inkSoft">Shipment · SG&#8594;BLR</span>
        <span className="text-[10.5px] font-medium px-2 py-0.5 rounded-full bg-indigoSoft text-indigo">
          In transit
        </span>
      </div>

      <div className="relative flex items-center justify-between mb-2">
        <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-[2px] bg-line" />
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: '62%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-[2px] bg-indigo"
        />
        {stages.map((s, i) => (
          <div key={s} className="relative z-10 flex flex-col items-center gap-2 flex-1">
            <div
              className={`w-3 h-3 rounded-full border-2 ${
                i < 3 ? 'bg-indigo border-indigo' : 'bg-white border-line'
              }`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-4">
        {stages.map((s) => (
          <span key={s} className="text-[10px] font-mono text-inkSoft flex-1 text-center first:text-left last:text-right">
            {s}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-line flex items-center justify-between">
        <span className="text-[11px] text-inkSoft">HS 8471.30 · Bill of Entry</span>
        <span className="text-[13px] font-semibold text-ink">Cleared</span>
      </div>
    </motion.div>
  );
}
