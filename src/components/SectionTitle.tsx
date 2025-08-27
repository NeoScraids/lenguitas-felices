import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  subtitleClassName?: string;
  id?: string; // optional anchor passthrough
  /**
   * Cuando es true, no se aplica el color base por defecto al título
   * permitiendo que estilos externos (gradientes, blanco, etc.) dominen.
   */
  noBaseColor?: boolean;
  /**
   * Evita aplicar el color base del subtítulo (text-warm-700) para personalización completa.
   */
  noBaseSubtitleColor?: boolean;
}

/**
 * Componente reutilizable para títulos de sección que asegura consistencia visual:
 * - Jerarquía tipográfica
 * - Colores
 * - Animación de entrada
 */
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  subtitleClassName = '',
  id,
  noBaseColor = false,
  noBaseSubtitleColor = false,
}) => {
  const baseAlign = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`mb-12 ${baseAlign}`} id={id}>
      <motion.h2
        className={`text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.28] md:leading-[1.24] pb-2 pt-1 overflow-visible ${!noBaseColor ? 'text-warm-800' : ''} mb-5 ${className}`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <span className="inline-block pb-1 align-baseline">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`max-w-2xl leading-relaxed ${!noBaseSubtitleColor ? 'text-warm-700' : ''} ${align === 'center' ? 'mx-auto' : ''} ${subtitleClassName}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.12, duration: 0.55 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;