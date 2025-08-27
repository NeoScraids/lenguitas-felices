import React, { useEffect, useState } from 'react';
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
  enter: { opacity: 0, x: 60, scale: 0.95 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -60, scale: 0.95 },
};

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

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
      <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur shadow-xl ring-1 ring-white/60 p-8 md:p-10">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={testimonials[index].id}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="grid md:grid-cols-[160px_1fr] gap-8 items-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-md ring-4 ring-warm-200/60">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].dog}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-sm font-medium text-warm-700">
                {testimonials[index].dog}
              </div>
            </div>
            <div className="text-left">
              <p className="text-lg md:text-xl font-medium text-warm-800 leading-relaxed">
                "{testimonials[index].text}"
              </p>
              <p className="mt-6 font-semibold text-warm-700 tracking-wide text-sm uppercase">
                {testimonials[index].author}
              </p>
              <div className="mt-4 flex items-center space-x-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    aria-label={`Ir a testimonio ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? 'bg-gradient-to-r from-warm-500 to-warm-600 w-8' : 'bg-warm-300 w-2.5 hover:bg-warm-400'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
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