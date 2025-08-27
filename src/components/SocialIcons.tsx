import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const icons = [
  { href: 'https://www.instagram.com', label: 'Instagram', Icon: FaInstagram, color: '#E1306C' },
  { href: 'https://www.facebook.com', label: 'Facebook', Icon: FaFacebookF, color: '#1877F2' },
  { href: 'https://www.tiktok.com', label: 'TikTok', Icon: FaTiktok, color: '#010101' },
  { href: 'https://wa.me/000000000', label: 'WhatsApp', Icon: FaWhatsapp, color: '#25D366' },
];

const SocialIcons: React.FC = () => {
  return (
    <section id="redes" className="relative py-20 bg-gradient-to-b from-warm-400 via-warm-500 to-warm-600">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-warm-800 mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Lengüitas Felices
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-warm-700 mb-12 text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Un premio hecho con amor
        </motion.p>
        {/* Animación de fondo con Framer Motion */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-warm-200 via-warm-400 to-warm-600 blur-3xl"
            style={{ top: '-80px', left: '-80px' }}
            initial={{ scale: 0.7, opacity: 0.2 }}
            animate={{ scale: [0.7, 1.1, 0.9, 1], opacity: [0.2, 0.4, 0.3, 0.3] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-warm-500 via-warm-700 to-warm-400 blur-2xl"
            style={{ bottom: '-60px', right: '-60px' }}
            initial={{ scale: 0.8, opacity: 0.2 }}
            animate={{ scale: [0.8, 1.2, 0.9, 1], opacity: [0.2, 0.4, 0.3, 0.3] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          />
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8">
          {icons.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              style={{ perspective: 800 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.12, rotate: 4 }}
              whileTap={{ scale: 0.94 }}
              aria-label={item.label}
            >
              <div className="relative w-20 h-20 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow-lg ring-1 ring-white/50 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${item.color}33, transparent 70%)` }}
                />
                <item.Icon
                  className="text-3xl drop-shadow-sm"
                  style={{ color: item.color }}
                />
              </div>
              <span className="mt-3 block text-sm font-medium text-warm-800 group-hover:text-warm-700 transition-colors">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialIcons;