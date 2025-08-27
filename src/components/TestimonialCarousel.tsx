import React, { useEffect, useState, useCallback } from 'react';
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

// Variantes para animar solo el contenido (no los bullets)
const contentVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48, y: 8, filter: 'blur(4px)' }),
  center: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48, y: -6, filter: 'blur(4px)', transition: { duration: 0.45, ease: 'easeInOut' } }),
};

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({});
  const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="%23fcd9bd" offset="0%"/><stop stop-color="%23feecdc" offset="50%"/><stop stop-color="%23fef7f0" offset="100%"/></linearGradient></defs><rect width="160" height="160" fill="url(%23g)"/><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="%239a3412" text-anchor="middle" dy="5">Sin foto</text></svg>`);
  const handleImgError = useCallback((id: number) => {
    setImageErrorMap(m => (m[id] ? m : { ...m, [id]: true }));
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(150deg,rgba(255,233,205,0.58),rgba(255,214,176,0.46)_50%,rgba(245,184,130,0.40))] backdrop-blur-xl shadow-[0_14px_50px_-16px_rgba(0,0,0,0.42)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,244,232,0.55),transparent_68%),radial-gradient(circle_at_85%_78%,rgba(235,140,60,0.30),transparent_62%)] mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_28%,transparent_72%,rgba(120,60,20,0.12))]" />
        <div className="grid md:grid-cols-[160px_1fr] gap-8 items-start relative">
          {/* Columna izquierda (imagen + nombre perro) */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-white/95 to-warm-100/60">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.img
                  key={testimonials[index].id + '-img'}
                  variants={contentVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  src={imageErrorMap[testimonials[index].id] ? fallback : testimonials[index].image}
                  onError={() => handleImgError(testimonials[index].id)}
                  alt={testimonials[index].dog}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>
            </div>
            <div className="mt-4 text-sm font-medium text-warm-700">
              {testimonials[index].dog}
            </div>
          </div>
          {/* Columna derecha (texto + autor) */}
          <div className="text-left">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={testimonials[index].id + '-text'}
                variants={contentVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <p className="text-lg md:text-xl font-medium text-warm-800 leading-relaxed">
                  "{testimonials[index].text}"
                </p>
                <p className="mt-6 font-semibold text-warm-700 tracking-wide text-sm uppercase">
                  {testimonials[index].author}
                </p>
              </motion.div>
            </AnimatePresence>
            {/* Bullets estáticos */}
            <div className="mt-6 flex items-center space-x-3">
              {testimonials.map((t, i) => (
                <motion.button
                  key={t.id}
                  aria-label={`Ir a testimonio ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  initial={false}
                  animate={i === index ? { scale: 1.18 } : { scale: 1 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                  className={`h-3 w-7 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-warm-400/60 focus-visible:ring-offset-1 focus-visible:ring-offset-warm-50 shadow transition-all duration-400 ${i === index ? 'bg-gradient-to-r from-warm-100 via-warm-200 to-warm-300 shadow-warm-200/40' : 'bg-warm-50/98 shadow-warm-100/20 hover:bg-warm-100'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-white/70 hover:bg-white shadow-md text-warm-700 hover:scale-105 active:scale-95 transition"
            aria-label="Anterior"
          >
            ‹
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-white/70 hover:bg-white shadow-md text-warm-700 hover:scale-105 active:scale-95 transition"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;