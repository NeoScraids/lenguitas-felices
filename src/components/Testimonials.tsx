import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import SectionTitle from './SectionTitle';
import GradientBlobs from './GradientBlobs';

const Testimonials: React.FC = () => {
  return (
    <section id="comentarios" className="relative py-28 overflow-hidden scroll-mt-24">
      <GradientBlobs variant="mid" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Historias Felices"
          subtitle="Lo que dicen las familias sobre los momentos dulces de sus peluditos."
          className="text-warm-50 drop-shadow-sm"
          subtitleClassName="text-warm-100"
        />
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonials;