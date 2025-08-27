import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import SocialIcons from '../components/SocialIcons';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col font-sans scroll-smooth">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Products />
        <Testimonials />
        <ContactForm />
        <SocialIcons />
      </main>
      <Footer />
    </div>
  );
};

export default Home;