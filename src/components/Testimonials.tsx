import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section id="comentarios" className="relative py-24 bg-gradient-to-b from-warm-200 via-warm-300 to-warm-400 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-10 w-72 h-72 bg-warm-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-warm-200 rounded-full blur-3xl opacity-40" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-warm-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Historias Felices
        </motion.h2>
        <motion.p
          className="text-center max-w-2xl mx-auto text-warm-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Lo que dicen las familias sobre los momentos dulces de sus peluditos.
        </motion.p>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonials;