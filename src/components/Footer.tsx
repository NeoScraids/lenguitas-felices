import React from 'react';

const Footer: React.FC = () => {
  return (
  <footer className="relative w-full z-10 bg-warm-800/90 backdrop-blur text-white py-12 mt-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-2 text-sm">
          <div>
            <h3 className="text-lg font-bold mb-2">Lengüitas Felices</h3>
            <p className="text-warm-200 text-sm leading-relaxed">
              Postres especiales hechos con amor para las lengüitas más felices.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-warm-200 hover:text-white transition">Inicio</a></li>
              <li><a href="#productos" className="text-warm-200 hover:text-white transition">Productos</a></li>
              <li><a href="#comentarios" className="text-warm-200 hover:text-white transition">Comentarios</a></li>
              <li><a href="#contacto" className="text-warm-200 hover:text-white transition">Contáctanos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Contacto</h4>
            <p className="text-warm-200 text-sm mb-1">Email: info@lenguitasfelices.com</p>
            <p className="text-warm-200 text-sm">Tel: +123 456 7890</p>
          </div>
        </div>
  <div className="pt-2 text-center">
          <p className="text-warm-300 text-xs">© 2025 Lengüitas Felices. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;