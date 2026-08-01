interface StampProps {
  label: string;
  sub?: string;
  color?: string;
  className?: string;
  size?: number;
}

let uid = 0;

export default function Stamp({ label, sub, color = '#A83C2E', className = '', size = 132 }: StampProps) {
  const id = `stamp-path-${uid++}`;
  const filterId = `stamp-rough-${uid++}`;
  return (
    <svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      className={className}
      style={{ overflow: 'visible' }}
      aria-hidden="true"
    >
      <defs>
        <path id={id} d="M 70,70 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.04" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`} stroke={color} fill="none">
        <circle cx="70" cy="70" r="62" strokeWidth="2.5" opacity="0.9" />
        <circle cx="70" cy="70" r="53" strokeWidth="1.5" opacity="0.7" />
        <text fontSize="11.5" fontFamily="'IBM Plex Mono', monospace" letterSpacing="2.5" fill={color}>
          <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
            {label}
          </textPath>
        </text>
        {sub && (
          <text
            x="70"
            y="76"
            fontSize="15"
            fontFamily="'Newsreader', serif"
            fontStyle="italic"
            textAnchor="middle"
            fill={color}
            stroke="none"
          >
            {sub}
          </text>
        )}
      </g>
    </svg>
  );
}
