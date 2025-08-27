import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  dog: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Desde que probó las galletas, Bruno mueve la cola cada vez que abrimos la caja.',
    author: 'Laura',
    dog: 'Bruno',
    image: '/dogs/dog1.jpg',
  },
  {
    id: 2,
    text: 'Luna es delicada del estómago y estos postres le caen perfecto. ¡Feliz y sana!',
    author: 'Marcos',
    dog: 'Luna',
    image: '/dogs/dog2.jpg',
  },
  {
    id: 3,
    text: 'Perfectos para celebrar su cumpleaños. Rocky se relamía de alegría.',
    author: 'Ana',
    dog: 'Rocky',
    image: '/dogs/dog3.jpg',
  },
  {
    id: 4,
    text: 'Ingredientes naturales y se nota. Coco ya reconoce la bolsa y se emociona.',
    author: 'Sofía',
    dog: 'Coco',
    image: '/dogs/dog4.jpg',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
    filter: 'blur(8px)',
    transition: {
      x: { type: 'spring', stiffness: 120, damping: 18 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
      filter: { duration: 0.35 },
    },
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: 'spring', stiffness: 80, damping: 16 },
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 },
      filter: { duration: 0.5 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
    filter: 'blur(8px)',
    transition: {
      x: { type: 'spring', stiffness: 120, damping: 18 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
      filter: { duration: 0.35 },
    },
  }),
};

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const current = testimonials[index];

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto max-w-2xl px-4 py-8">
      <div className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-white via-warm-100 to-warm-200 p-6 md:p-10 border border-warm-200/60" role="region" aria-label="Carrusel de testimonios" aria-live="polite">
        {/* Botón izquierdo */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-warm-100 rounded-full shadow-lg p-2 z-30 text-2xl font-bold text-warm-600 transition"
          onClick={() => paginate(-1)}
          aria-label="Anterior"
        >
          ‹
        </button>
        {/* Botón derecho */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-warm-100 rounded-full shadow-lg p-2 z-30 text-2xl font-bold text-warm-600 transition"
          onClick={() => paginate(1)}
          aria-label="Siguiente"
        >
          ›
        </button>
        <div className="grid md:grid-cols-[160px_1fr] gap-8 items-center">
          {/* Columna izquierda (imagen + nombre perro) */}
          <div className="flex flex-col items-center">
            <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-white/95 to-warm-100/60 border-4 border-warm-200">
              <picture>
                <source srcSet={current.image} type="image/webp" />
                <img
                  src={current.image.replace('.webp', '.jpg')}
                  alt={current.dog}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-4 text-base font-semibold text-warm-700 text-center drop-shadow-sm">
              {current.dog}
            </div>
          </div>
          {/* Columna derecha (texto + autor) con animación */}
          <div className="flex flex-col justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <p className="text-xl md:text-2xl font-medium text-warm-800 leading-relaxed mb-4 italic">
                  “{current.text}”
                </p>
                <p className="font-bold text-warm-600 tracking-wide text-base uppercase text-right">
                  — {current.author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Bullets de navegación */}
        <div className="flex justify-center items-center mt-8 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              className={`h-3 w-7 rounded-full transition-all duration-300 shadow focus:outline-none ${i === index ? 'bg-gradient-to-r from-warm-200 via-warm-400 to-warm-600 scale-110' : 'bg-warm-100/80 hover:bg-warm-200'}`}
              aria-label={`Ir a testimonio ${i + 1}`}
              onClick={() => paginate(i - index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TestimonialCarousel);