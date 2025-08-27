import React from 'react';

interface GradientBlobsProps {
  variant?: 'light' | 'mid' | 'dark';
  className?: string;
}

// Color maps for variants (using palette similar to Hero original gradients)
const variantMap = {
  light: [
    { from: '#f5e9da', to: '#e8c5a0', size: 'w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem]', pos: 'top-0 left-0 -translate-x-1/4 -translate-y-1/4', opacity: 0.55 },
    { from: '#e8c5a0', to: '#f5e9da', size: 'w-[24rem] h-[24rem] md:w-[30rem] md:h-[30rem]', pos: 'bottom-0 right-0 translate-x-1/5 translate-y-1/5', opacity: 0.5 },
    { from: '#ffe3c7', to: '#f5e9da', size: 'w-[14rem] h-[14rem] md:w-[18rem] md:h-[18rem]', pos: 'top-1/3 right-10', opacity: 0.45 },
  ],
  mid: [
    { from: '#ffb679', to: '#ff9d5c', size: 'w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem]', pos: 'top-10 -left-12', opacity: 0.5 },
    { from: '#ffd3ad', to: '#ffb679', size: 'w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem]', pos: 'bottom-0 right-0 translate-x-1/6 translate-y-1/6', opacity: 0.48 },
    { from: '#ffe3c7', to: '#ffb679', size: 'w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem]', pos: 'top-1/4 right-1/4', opacity: 0.42 },
  ],
  dark: [
    { from: '#c57334', to: '#8b5a2b', size: 'w-[30rem] h-[30rem] md:w-[36rem] md:h-[36rem]', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/3', opacity: 0.42 },
    { from: '#8b5a2b', to: '#7a5235', size: 'w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem]', pos: 'bottom-0 right-0 translate-x-1/5 translate-y-1/6', opacity: 0.38 },
    { from: '#ff9d5c', to: '#c57334', size: 'w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem]', pos: 'bottom-1/4 left-0 -translate-x-1/3', opacity: 0.34 },
  ],
} as const;

/**
 * Decorative blurred gradient blobs to unify visual language across sections.
 * Absolutely positioned, non-interactive.
 */
const GradientBlobs: React.FC<GradientBlobsProps> = ({ variant = 'light', className = '' }) => {
  const blobs = variantMap[variant];
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`} aria-hidden="true">
      {blobs.map((b, idx) => (
        <span
          key={idx}
          className={`absolute ${b.size} ${b.pos} rounded-full blur-3xl mix-blend-normal`}
          style={{
            background: `linear-gradient(135deg, ${b.from} 10%, ${b.to} 90%)`,
            opacity: b.opacity,
            filter: 'contrast(105%) saturate(110%)',
          }}
        >
          {/* inner subtle highlight */}
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.35), transparent 60%)',
              mixBlendMode: 'overlay',
              opacity: 0.35,
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default GradientBlobs;