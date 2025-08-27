import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Galletas de Maní',
    description: 'Crujientes y naturales con mantequilla de maní.',
    price: '$5.99',
    image: '/images/peanut-butter-biscuit.jpg',
  },
  {
    id: 2,
    name: 'Pastel de Algarroba',
    description: 'Suave, húmedo y seguro para tu perrito.',
    price: '$7.99',
    image: '/images/carob-cake.jpg',
  },
  {
    id: 3,
    name: 'Paws de Calabaza',
    description: 'Ricos en fibra y sabor otoñal.',
    price: '$4.99',
    image: '/images/pumpkin-paws.jpg',
  },
  {
    id: 4,
    name: 'Bocados Manzana Canela',
    description: 'Aromáticos y llenos de ternura.',
    price: '$6.49',
    image: '/images/apple-cinnamon-bites.jpg',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const Products: React.FC = () => {
  return (
    <section id="productos" className="relative py-24 bg-gradient-to-b from-warm-100 via-warm-200 to-warm-300">
      <div className="absolute inset-0 bg-[url('/patterns/paws.png')] opacity-5 mix-blend-multiply pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-warm-700 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Nuestros Productos Especiales
        </motion.h2>
        <motion.p
          className="text-center max-w-2xl mx-auto text-warm-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Ingredientes naturales, sabor irresistible y mucho amor en cada mordida.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;