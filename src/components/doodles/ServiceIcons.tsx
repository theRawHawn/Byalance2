import type { SVGProps } from 'react';

const base: SVGProps<SVGSVGElement> = {
  width: 56,
  height: 56,
  viewBox: '0 0 56 56',
  fill: 'none',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function LedgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 8 h26 a3 3 0 0 1 3 3 v33 a2 2 0 0 1-2.6 1.9 L28 43 l-10.4 2.9A2 2 0 0 1 15 44V11a3 3 0 0 1 3-3Z" stroke="currentColor" />
      <path d="M20 17 h13 M20 24 h13 M20 31 h8" stroke="currentColor" />
      <path d="M12 8 v34" stroke="currentColor" opacity="0.5" />
    </svg>
  );
}

export function PayrollIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="23" cy="26" r="13" stroke="currentColor" />
      <circle cx="34" cy="19" r="9" stroke="currentColor" opacity="0.55" />
      <path d="M23 21 v10 M19.5 24 h7" stroke="currentColor" />
    </svg>
  );
}

export function EORIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="14" y="8" width="26" height="36" rx="3" stroke="currentColor" />
      <circle cx="27" cy="21" r="5.5" stroke="currentColor" />
      <path d="M19 37 c1.5 -6.5 14.5 -6.5 16 0" stroke="currentColor" />
      <path d="M14 15 h26" stroke="currentColor" opacity="0.4" />
    </svg>
  );
}

export function ImportIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M9 21 L28 11 L47 21 V39 L28 49 L9 39 Z" stroke="currentColor" />
      <path d="M9 21 L28 31 L47 21" stroke="currentColor" />
      <path d="M28 31 V49" stroke="currentColor" opacity="0.5" />
    </svg>
  );
}

export function CrateGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M6 14 L20 7 L34 14 V28 L20 35 L6 28 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M6 14 L20 21 L34 14 M20 21 V35" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PlaneRoute(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="100%" height="60" viewBox="0 0 600 60" fill="none" preserveAspectRatio="none" {...props}>
      <path
        d="M4 45 C 120 5, 260 65, 400 20 C 460 3, 520 10, 596 32"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      <circle cx="4" cy="45" r="3.5" fill="currentColor" />
      <circle cx="596" cy="32" r="3.5" fill="currentColor" />
    </svg>
  );
}
