import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ProductData {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
}

const hoverMotion = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, boxShadow: '0 6px 18px -6px rgba(0,0,0,0.12)' },
  hover: {
    scale: 1.04,
    rotateX: 4,
    rotateY: -4,
    boxShadow: '0 10px 30px -4px rgba(255,150,80,0.35)',
    transition: { type: 'spring', stiffness: 220, damping: 14 },
  },
};

const ProductCard: React.FC<{ product: ProductData }> = ({ product }) => {
  let { image, name, description, price } = product;
  // Si la imagen es jpg o png y existe el .webp equivalente, usa .webp
  if (image.endsWith('.jpg')) {
    const webp = image.replace('.jpg', '.webp');
    image = webp;
  } else if (image.endsWith('.png')) {
    const webp = image.replace('.png', '.webp');
    image = webp;
  }
  const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="%23fcd9bd" offset="0%"/><stop stop-color="%23feecdc" offset="50%"/><stop stop-color="%23fef7f0" offset="100%"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g)"/><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="22" fill="%239a3412" text-anchor="middle" dy="8">Imagen no disponible</text></svg>`);
  const [src, setSrc] = useState(image);
  const handleError = useCallback(() => {
    if (src !== fallback) setSrc(fallback);
  }, [src, fallback]);
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <motion.div
      ref={ref}
      role="listitem"
      variants={hoverMotion}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      whileHover="hover"
      animate="rest"
      className="group relative glass-card p-4 sm:p-6 overflow-hidden"
    >
      {/* Overlay unificado (menos blur para nitidez) */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-warm-100/35 via-transparent to-warm-400/25 opacity-55" />
      <div className="absolute -inset-6 pointer-events-none z-0 blur-xl opacity-25 bg-gradient-to-br from-warm-400/30 via-transparent to-warm-600/20" />
      <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 relative max-w-[160px] sm:max-w-full mx-auto shadow-md">
        <img
          src={src}
          srcSet={`${src} 1x, ${src.replace('.webp', '@2x.webp')} 2x`}
          sizes="(max-width: 640px) 100vw, 400px"
          onError={handleError}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-30 group-hover:opacity-20 transition-opacity" />
      </div>
      <h3 className="text-lg font-semibold text-warm-700 mb-1 tracking-tight">{name}</h3>
  <p className="text-sm text-warm-800/90 font-serif leading-relaxed mb-3 tracking-wide">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-warm-700 font-bold text-base bg-warm-200 px-3 py-1 rounded-full shadow-sm">{price}</span>
        <button
          className="group/button relative overflow-hidden inline-flex items-center gap-2 text-base font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow-lg ring-2 ring-warm-200/40 hover:ring-warm-400/60 hover:shadow-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-400/70 focus-visible:ring-4 focus-visible:ring-warm-400/40 active:scale-95"
          aria-label={`Ver detalles de ${name}`}
        >
          <span className="text-lg" aria-hidden="true">🐾</span>
          Detalles
          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:opacity-25 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.65),transparent_70%)]" />
        </button>
      </div>
    </motion.div>
  );
};

export default React.memo(ProductCard);