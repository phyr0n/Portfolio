import type { MarqueeArt as MarqueeArtType } from '@/features/projects/types/project';

type ProjectMarqueeProps = {
  marquee: MarqueeArtType;
  title: string;
  className?: string;
};

export const ProjectMarquee = ({ marquee, title, className = ''}: ProjectMarqueeProps) => {
  // If we pass in an actual image to this, present that image. Otherwise, just present a generic pattern.
  if (marquee.imageUrl) {
    return (
      <div className={`overflow-hidden bg-bg-elevated ${className}`}>
        <img
          src={marquee.imageUrl}
          alt={`${title} — key art`}
          className={`h-full w-full object-cover`}
        />
      </div>
    );
  }

  // Display a label on top of the generic marquee.
  return (
    <div className={`relative overflow-hidden bg-bg-elevated ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <MarqueePattern variant={marquee.variant} />
      </svg>
      {marquee.label && (
        <span className="absolute right-3 bottom-3 font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase">
          {marquee.label}
        </span>
      )}
    </div>
  );
};

export const MarqueePattern = ({ variant }: { variant: MarqueeArtType['variant'] }) => {
  switch (variant) {
    case 'grid':
      return GridPattern();
    case 'stripes':
      return StripesPattern();
    case 'dots':
      return DotsPattern();
    case 'rings':
      return RingsPattern();
    case 'blocks':
      return BlocksPattern();
    default:
      return DiagonalPattern();
  }
};

function GridPattern() {
  return <g>
    {Array.from({ length: 11 }).map((_, i) => (
      <line key={`v-${i}`} x1={i * 40} y1={0} x2={i * 40} y2={240} stroke="var(--color-border)" strokeWidth="1" />
    ))}
    {Array.from({ length: 7 }).map((_, i) => (
      <line key={`h-${i}`} x1={0} y1={i * 40} x2={400} y2={i * 40} stroke="var(--color-border)" strokeWidth="1" />
    ))}
    <circle cx="200" cy="120" r="10" fill="var(--color-accent)" />
  </g>;
}

function StripesPattern() {
  return <g>
    {Array.from({ length: 14 }).map((_, i) => (
      <rect
        key={i}
        x={i * 56 - 120}
        y="-40"
        width="24"
        height="320"
        transform="rotate(20 200 120)"
        fill={i % 5 === 0 ? 'var(--color-accent)' : 'var(--color-border)'} />
    ))}
  </g>;
}

function DotsPattern() {
  return <g>
    {Array.from({ length: 10 }).map((_, row) => Array.from({ length: 17 }).map((_, col) => {
      const isAccent = (row + col) % 13 === 0;
      return (
        <circle
          key={`${row}-${col}`}
          cx={col * 24 + 12}
          cy={row * 24 + 12}
          r={isAccent ? 4.5 : 2.5}
          fill={isAccent ? 'var(--color-accent)' : 'var(--color-border)'} />
      );
    })
    )}
  </g>;
}

function RingsPattern() {
  return <g fill="none">
    {[100, 78, 56, 34].map((r, i) => (
      <circle
        key={r}
        cx="200"
        cy="120"
        r={r}
        stroke={i === 0 ? 'var(--color-accent)' : 'var(--color-border)'}
        strokeWidth="1.5" />
    ))}
  </g>;
}

function BlocksPattern() {
  return <g>
    <rect x="0" y="0" width="400" height="240" fill="var(--color-bg-elevated)" />
    <rect x="24" y="24" width="140" height="90" fill="var(--color-border)" />
    <rect x="180" y="24" width="196" height="46" fill="var(--color-border)" />
    <rect x="180" y="86" width="90" height="130" fill="var(--color-accent)" />
    <rect x="286" y="86" width="90" height="60" fill="var(--color-border)" />
    <rect x="24" y="130" width="140" height="86" fill="var(--color-border)" />
  </g>;
}

function DiagonalPattern() {
  return <g>
    <polygon points="0,240 400,0 400,240" fill="var(--color-bg-elevated)" />
    <polygon points="0,0 400,0 0,240" fill="var(--color-border)" />
    <line x1="0" y1="0" x2="400" y2="240" stroke="var(--color-accent)" strokeWidth="2" />
  </g>;
}

