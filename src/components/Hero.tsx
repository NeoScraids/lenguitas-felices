import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logo.webp';
import GradientBlobs from './GradientBlobs';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center min-h-[92vh] md:min-h-screen overflow-x-hidden overflow-y-hidden text-center px-4 pt-28 md:pt-0 scroll-mt-24"
    >
  <GradientBlobs variant="light" />
      <motion.img
        src={logo}
        alt="Logo Lengüitas Felices"
        width={400}
        height={400}
        className="w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] object-contain drop-shadow-xl relative z-10 rounded-full border-[14px] border-white/60 shadow-lg bg-white/40 backdrop-blur"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
    <motion.h1
  className="mt-10 mb-3 sm:mt-12 sm:mb-4 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-warm-800 drop-shadow-sm relative z-10 px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Lengüitas Felices
      </motion.h1>
      <motion.p
        className="mt-5 mb-6 sm:mt-6 sm:mb-8 text-lg sm:text-xl md:text-2xl font-bold text-beige-700 relative z-10 tracking-wide px-4 max-w-xl"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8 }}
      >
        Un premio hecho con amor
      </motion.p>
      <motion.a
        href="#productos"
        className="relative z-10 mt-8 mb-4 inline-block group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
  <span className="px-7 py-3 md:px-8 rounded-full bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold text-base sm:text-lg shadow-lg shadow-warm-500/30 ring-2 ring-white/50 backdrop-blur transition-all group-hover:shadow-xl group-hover:shadow-warm-600/40">
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