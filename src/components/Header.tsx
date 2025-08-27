import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const navItems = [
  { to: 'inicio', label: 'Inicio' },
  { to: 'productos', label: 'Productos' },
  { to: 'comentarios', label: 'Comentarios' },
  { to: 'contacto', label: 'Contáctanos' },
  { to: 'redes', label: 'Redes Sociales' },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <motion.div
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-warm-500 to-warm-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Lenguitas Felices
        </motion.div>
        <nav className="hidden md:flex space-x-6 font-medium text-warm-700">
          {navItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={550}
              offset={-80}
              className="relative cursor-pointer transition-colors hover:text-warm-800 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-warm-500 after:to-warm-600 after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;