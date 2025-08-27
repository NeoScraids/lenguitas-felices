import React, { useRef } from 'react';
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
  const { image, name, description, price } = product;
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <motion.div
      ref={ref}
      variants={hoverMotion}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative rounded-3xl bg-gradient-to-b from-white/90 to-white/70 backdrop-blur p-4 shadow-lg ring-1 ring-white/60 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-warm-500/20 via-transparent to-warm-600/30 pointer-events-none" />
      <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />
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