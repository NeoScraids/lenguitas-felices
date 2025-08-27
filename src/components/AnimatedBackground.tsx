import React, { useMemo } from 'react';

interface OrbConfig {
  size: number; // in rem
  top: string; // % or calc
  left: string;
  hue: number; // base hue for warm/caramel range
  saturation: number; // %
  lightness: number; // %
  opacity: number; // 0..1
  driftX: number; // rem
  driftY: number; // rem
  duration: number; // s
  delay: number; // s
  blur: number; // px
  gradientShift?: number; // lightness shift for radial center
}

const ORBS: OrbConfig[] = [
  // Upper region (naranja/caramelo, grandes y pequeños, dispersos)
  { size: 32, top: '2%', left: '8%', hue: 32, saturation: 95, lightness: 68, opacity: 0.32, driftX: 4, driftY: 6, duration: 38, delay: 0, blur: 32, gradientShift: 12 },
  { size: 14, top: '6%', left: '22%', hue: 28, saturation: 90, lightness: 72, opacity: 0.38, driftX: -2, driftY: 2, duration: 22, delay: 2, blur: 16, gradientShift: 10 },
  { size: 18, top: '4%', left: '55%', hue: 30, saturation: 85, lightness: 74, opacity: 0.36, driftX: 2, driftY: 3, duration: 28, delay: 1, blur: 20, gradientShift: 10 },
  { size: 10, top: '10%', left: '80%', hue: 35, saturation: 88, lightness: 70, opacity: 0.34, driftX: 1, driftY: 2, duration: 18, delay: 3, blur: 12, gradientShift: 8 },
  { size: 22, top: '13%', left: '40%', hue: 33, saturation: 92, lightness: 72, opacity: 0.30, driftX: -3, driftY: 2, duration: 32, delay: 2, blur: 24, gradientShift: 14 },
  { size: 8, top: '17%', left: '65%', hue: 31, saturation: 90, lightness: 75, opacity: 0.40, driftX: 2, driftY: 1, duration: 16, delay: 1, blur: 8, gradientShift: 7 },
  // Mid region (blancos y cálidos, dispersos, mezcla de tamaños)
  { size: 24, top: '32%', left: '12%', hue: 28, saturation: 70, lightness: 88, opacity: 0.34, driftX: 5, driftY: -5, duration: 40, delay: 3, blur: 28, gradientShift: 16 },
  { size: 16, top: '38%', left: '60%', hue: 29, saturation: 60, lightness: 92, opacity: 0.30, driftX: -4, driftY: 4, duration: 36, delay: 6, blur: 20, gradientShift: 12 },
  { size: 12, top: '45%', left: '85%', hue: 30, saturation: 55, lightness: 94, opacity: 0.28, driftX: 2, driftY: 2, duration: 28, delay: 2, blur: 14, gradientShift: 8 },
  { size: 20, top: '52%', left: '30%', hue: 32, saturation: 50, lightness: 96, opacity: 0.32, driftX: -3, driftY: 3, duration: 30, delay: 5, blur: 18, gradientShift: 10 },
  { size: 10, top: '58%', left: '70%', hue: 33, saturation: 45, lightness: 97, opacity: 0.28, driftX: 1, driftY: 2, duration: 22, delay: 2, blur: 10, gradientShift: 9 },
  { size: 8, top: '62%', left: '50%', hue: 30, saturation: 50, lightness: 98, opacity: 0.36, driftX: 2, driftY: 1, duration: 16, delay: 1, blur: 8, gradientShift: 7 },
  // Lower region (crema/blanco premium, dispersos, mezcla de tamaños)
  { size: 28, top: '75%', left: '18%', hue: 38, saturation: 38, lightness: 98, opacity: 0.28, driftX: 6, driftY: -4, duration: 44, delay: 4, blur: 24, gradientShift: 18 },
  { size: 18, top: '80%', left: '60%', hue: 40, saturation: 22, lightness: 99, opacity: 0.32, driftX: -2, driftY: 3, duration: 34, delay: 7, blur: 18, gradientShift: 12 },
  { size: 14, top: '85%', left: '80%', hue: 38, saturation: 18, lightness: 99, opacity: 0.34, driftX: 2, driftY: -2, duration: 22, delay: 1, blur: 12, gradientShift: 10 },
  { size: 20, top: '90%', left: '40%', hue: 39, saturation: 20, lightness: 99, opacity: 0.30, driftX: -3, driftY: 2, duration: 28, delay: 3, blur: 16, gradientShift: 12 },
  { size: 12, top: '95%', left: '10%', hue: 40, saturation: 15, lightness: 99, opacity: 0.28, driftX: 2, driftY: -2, duration: 22, delay: 2, blur: 10, gradientShift: 8 },
  { size: 8, top: '98%', left: '90%', hue: 39, saturation: 18, lightness: 99, opacity: 0.32, driftX: -2, driftY: 1, duration: 16, delay: 1, blur: 8, gradientShift: 7 },
  // Extras para dispersión, profundidad y modernidad
  { size: 10, top: '20%', left: '5%', hue: 32, saturation: 92, lightness: 68, opacity: 0.22, driftX: 2, driftY: 2, duration: 18, delay: 1, blur: 10, gradientShift: 8 },
  { size: 10, top: '30%', left: '90%', hue: 28, saturation: 68, lightness: 85, opacity: 0.22, driftX: -2, driftY: 2, duration: 18, delay: 2, blur: 10, gradientShift: 8 },
  { size: 10, top: '70%', left: '95%', hue: 38, saturation: 38, lightness: 96, opacity: 0.22, driftX: 2, driftY: -2, duration: 18, delay: 2, blur: 10, gradientShift: 8 },
  { size: 10, top: '85%', left: '50%', hue: 39, saturation: 20, lightness: 98, opacity: 0.22, driftX: -2, driftY: 2, duration: 18, delay: 2, blur: 10, gradientShift: 8 },
  // Sutiles orbes de fondo para profundidad
  { size: 40, top: '50%', left: '50%', hue: 32, saturation: 40, lightness: 90, opacity: 0.12, driftX: 0, driftY: 0, duration: 60, delay: 0, blur: 40, gradientShift: 20 },
  { size: 60, top: '80%', left: '10%', hue: 38, saturation: 20, lightness: 99, opacity: 0.10, driftX: 0, driftY: 0, duration: 80, delay: 0, blur: 60, gradientShift: 30 },
];

/**
 * Fondo animado ultra-ligero con orbes difuminados.
 * - Usa transform/opacity (GPU friendly)
 * - Respeta prefers-reduced-motion
 * - No interfiere con blobs ya existentes (z-index bajo)
 */
const AnimatedBackground: React.FC = () => {
  const reduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {ORBS.map((o, i) => {
        const sizePx = `${o.size}rem`;
        const innerLight = Math.min(o.lightness + (o.gradientShift ?? 10), 96);
        const start = `hsla(${o.hue} ${o.saturation}% ${innerLight}% / ${o.opacity})`;
        const end = `hsla(${o.hue} ${Math.max(o.saturation - 30, 35)}% ${o.lightness - 15}% / ${o.opacity * 0.55})`;
        const style: React.CSSProperties = {
          top: o.top,
          left: o.left,
          width: sizePx,
          height: sizePx,
          filter: `blur(${o.blur}px) saturate(120%) contrast(110%) brightness(1.08)`,
          background: `radial-gradient(circle at 30% 30%, ${start}, ${end})`,
          opacity: o.opacity,
          mixBlendMode: 'lighten',
          animation: reduceMotion
            ? 'none'
            : `orbFloat ${o.duration}s cubic-bezier(.4,.8,.6,1.2) ${o.delay}s infinite alternate`,
          ['--dx' as any]: `${o.driftX}rem`,
          ['--dy' as any]: `${o.driftY}rem`,
        };
        return (
          <span
            key={i}
            className="absolute rounded-full will-change-transform"
            style={style}
          />
        );
      })}
      {/* Sutil velo para integrar orbes con el gradiente base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
    </div>
  );
};

export default AnimatedBackground;