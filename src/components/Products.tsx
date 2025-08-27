import React from 'react';
import ProductCard from './ProductCard';
// ...existing code...
import SectionTitle from './SectionTitle';
import GradientBlobs from './GradientBlobs';

const products = [
  {
    id: 1,
    name: 'Galletas de Maní',
    description: 'Crujientes y naturales con mantequilla de maní.',
    price: '$18.000 COP',
    image: '/images/peanut-butter-biscuit.jpg',
  },
  {
    id: 2,
    name: 'Pastel de Algarroba',
    description: 'Suave, húmedo y seguro para tu perrito.',
    price: '$25.000 COP',
    image: '/images/carob-cake.jpg',
  },
  {
    id: 3,
    name: 'Paws de Calabaza',
    description: 'Ricos en fibra y sabor otoñal.',
    price: '$15.000 COP',
    image: '/images/pumpkin-paws.jpg',
  },
  {
    id: 4,
    name: 'Bocados Manzana Canela',
    description: 'Aromáticos y llenos de ternura.',
    price: '$20.000 COP',
    image: '/images/apple-cinnamon-bites.jpg',
  },
];

const Products: React.FC = () => {
  return (
    <section id="productos" className="relative py-28 overflow-hidden scroll-mt-24">
      <GradientBlobs variant="mid" />
      <div className="absolute inset-0 bg-[url('/patterns/paws.png')] opacity-5 mix-blend-multiply pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-2 sm:px-6">
        <SectionTitle
          title="Nuestros Productos"
          subtitle="Ingredientes naturales, sabor irresistible y mucho amor en cada mordida."
        />
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-7 mt-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
// ...existing code...
};

export default Products;