import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lenguitas Felices</h3>
            <p className="text-warm-200 leading-relaxed">
              Postres especiales hechos con amor para las lenguitas más felices.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-warm-200 hover:text-white transition">Inicio</a></li>
              <li><a href="#productos" className="text-warm-200 hover:text-white transition">Productos</a></li>
              <li><a href="#comentarios" className="text-warm-200 hover:text-white transition">Comentarios</a></li>
              <li><a href="#contacto" className="text-warm-200 hover:text-white transition">Contáctanos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-warm-200 mb-2">Email: info@lenguitasfelices.com</p>
            <p className="text-warm-200">Tel: +123 456 7890</p>
          </div>
        </div>
        <div className="border-t border-warm-600 pt-8 text-center">
          <p className="text-warm-300">© 2025 Lenguitas Felices. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;