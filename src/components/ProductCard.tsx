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
      variants={hoverMotion}
      initial="rest"
      whileHover="hover"
      animate="rest"
  className="group relative rounded-3xl bg-gradient-to-b from-white/90 to-white/70 backdrop-blur p-3 sm:p-4 shadow-lg ring-1 ring-white/60 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-warm-500/20 via-transparent to-warm-600/30 pointer-events-none" />
      <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 relative max-w-[160px] sm:max-w-full mx-auto shadow-md">
        <img
          src={src}
          onError={handleError}
          alt={name}
          className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-30 group-hover:opacity-20 transition-opacity" />
      </div>
      <h3 className="text-lg font-semibold text-warm-700 mb-1 tracking-tight">{name}</h3>
      <p className="text-sm text-warm-600 leading-relaxed mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-warm-700 font-bold text-base bg-warm-200 px-3 py-1 rounded-full shadow-sm">{price}</span>
        <button className="text-sm font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all">
          Detalles
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;