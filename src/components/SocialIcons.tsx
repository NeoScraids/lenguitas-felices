import React, { useMemo } from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import GradientBlobs from './GradientBlobs';

const icons = [
  { href: 'https://www.instagram.com', label: 'Instagram', Icon: FaInstagram, color: '#E1306C' },
  { href: 'https://www.facebook.com', label: 'Facebook', Icon: FaFacebookF, color: '#1877F2' },
  { href: 'https://www.tiktok.com', label: 'TikTok', Icon: FaTiktok, color: '#010101' },
  { href: 'https://wa.me/000000000', label: 'WhatsApp', Icon: FaWhatsapp, color: '#25D366' },
];

const SocialIcons: React.FC = () => {
  // Detect user preference to reduce motion (avoids unnecessary framer animations for accessibility/performance)
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);
  return (
    <section id="redes" className="relative py-28 scroll-mt-24">
      <GradientBlobs variant="dark" />
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Radial claro para levantar contraste */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[70%] max-w-3xl h-64 pointer-events-none select-none opacity-70 blur-2xl z-[5] bg-[radial-gradient(circle_at_center,rgba(255,246,236,0.92),rgba(255,246,236,0.55)_55%,rgba(255,246,236,0)_80%)]" />
        <SectionTitle
          title="Lengüitas Felices"
          subtitle="Un premio hecho con amor"
          noBaseColor
          noBaseSubtitleColor
          className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-warm-50 to-warm-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          subtitleClassName="relative z-10 inline-block px-4 py-2 rounded-xl text-white bg-warm-800/25 backdrop-blur-sm shadow-[0_2px_8px_-1px_rgba(0,0,0,0.45)]"
        />
  {/* Blobs gestionados por componente reutilizable */}
  <ul className="flex flex-wrap justify-center gap-8">
          {icons.map((item, i) => (
            <li key={item.label} className="flex flex-col items-center">
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-300/70 rounded-2xl"
                style={{ perspective: 800 }}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1 * i, duration: 0.5 }}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.12, rotate: 4 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                aria-label={item.label}
              >
                <div className="relative w-20 h-20 rounded-2xl bg-white/90 dark:bg-white/80 backdrop-blur flex items-center justify-center shadow-lg ring-1 ring-white/50 overflow-hidden transition-shadow group-hover:shadow-xl">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${item.color}33, transparent 70%)` }}
                  />
                  <item.Icon
                    className="text-3xl drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                    style={{ color: item.color }}
                  />
                </div>
                <span className="mt-3 block text-sm font-medium text-white transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">
                  {item.label}
                </span>
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialIcons;