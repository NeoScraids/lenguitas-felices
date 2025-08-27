import React from 'react';

function Footer() {
  return (
    <footer className="bg-warm-900 py-8 px-4 mt-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <h3 className="text-lg font-bold mb-2 text-white">Lengüitas Felices</h3>
          <p className="text-warm-200 text-sm leading-relaxed">
            Postres especiales hechos con amor para las lengüitas más felices.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2 text-white">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="text-warm-200 hover:text-white transition">Inicio</a></li>
            <li><a href="#productos" className="text-warm-200 hover:text-white transition">Productos</a></li>
            <li><a href="#comentarios" className="text-warm-200 hover:text-white transition">Comentarios</a></li>
            <li><a href="#contacto" className="text-warm-200 hover:text-white transition">Contáctanos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2 text-white">Contacto</h4>
          <p className="text-warm-200 text-sm mb-1">Email: info@lenguitasfelices.com</p>
          <p className="text-warm-200 text-sm">Tel: +123 456 7890</p>
        </div>
      </div>
      <div className="pt-2 text-center">
        <p className="text-warm-300 text-xs">© 2025 Lengüitas Felices. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;