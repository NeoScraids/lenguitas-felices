import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-warm-50 via-warm-100 to-warm-200 text-center px-4"
    >
      {/* Animaciones de fondo con Framer Motion y nuevos colores */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-72 h-72 md:w-80 md:h-80 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, #f5e9da 60%, #a78bfa 100%)', opacity: 0.4 }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, #a78bfa 60%, #f5e9da 100%)', opacity: 0.4 }}
        />
      </div>
      <motion.img
        src="/dog-dessert.png"
        alt="Perrito feliz con postre"
        className="w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-xl relative z-10 rounded-full border-8 border-white/60 shadow-lg bg-white/40 backdrop-blur"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      <motion.h1
        className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight text-purple-700 drop-shadow-sm relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Lengüitas Felices
      </motion.h1>
      <motion.p
        className="mt-4 text-xl md:text-2xl font-bold text-beige-700 uppercase relative z-10 tracking-wide"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8 }}
      >
        Un premio hecho con amor
      </motion.p>
      <motion.a
        href="#productos"
        className="relative z-10 mt-8 inline-block group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="px-8 py-3 rounded-full bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold text-lg shadow-lg shadow-warm-500/30 ring-2 ring-white/50 backdrop-blur transition-all group-hover:shadow-xl group-hover:shadow-warm-600/40">
          Conoce nuestros productos
        </span>
      </motion.a>
      <motion.div
        className="absolute bottom-6 left-0 w-full flex flex-col items-center text-warm-600 text-sm tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        Desliza para explorar
        <motion.div
          className="mt-2 w-1 h-6 rounded-full bg-gradient-to-b from-warm-500 to-warm-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;