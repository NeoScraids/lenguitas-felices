import React, { useEffect, useState } from 'react';
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
  const [darkZone, setDarkZone] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const doc = document.documentElement;
            const scrollTop = window.scrollY;
            const maxScroll = doc.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
            // Umbral donde la parte del gradiente empieza a oscurecerse (ajustable)
            const shouldDark = progress > 0.55; 
            setDarkZone(shouldDark);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBase = darkZone ? 'text-warm-50 hover:text-white' : 'text-warm-700 hover:text-warm-800';
  const underline = darkZone
    ? "after:bg-gradient-to-r after:from-warm-50/90 after:to-warm-100/90"
    : "after:bg-gradient-to-r after:from-warm-500 after:to-warm-600";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl transition-colors duration-500 border-b shadow-lg ${
        darkZone
          ? 'bg-warm-900/30 border-white/10 shadow-black/30'
          : 'bg-white/30 border-white/30 shadow-warm-700/20'
      }`}
      style={{ WebkitBackdropFilter: 'blur(28px)', backdropFilter: 'blur(28px)' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        <Link to="inicio" smooth duration={550} offset={-80} className="cursor-pointer select-none">
          <motion.div
            className="relative text-2xl font-extrabold tracking-tight h-[1.2em]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-warm-500 to-warm-600 transition-opacity duration-700 ease-out"
              style={{ opacity: darkZone ? 0 : 1 }}
            >
              Lengüitas Felices
            </span>
            <span
              className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-warm-50 to-warm-100 drop-shadow-sm transition-opacity duration-700 ease-out"
              style={{ opacity: darkZone ? 1 : 0 }}
            >
              Lengüitas Felices
            </span>
            {/* Invisible placeholder to preserve layout height */}
            <span className="invisible">
              Lengüitas Felices
            </span>
          </motion.div>
        </Link>
    <nav className={`hidden md:flex space-x-6 font-medium transition-colors duration-700 ease-out ${darkZone ? 'text-warm-100' : 'text-warm-700'}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={550}
              offset={-80}
      className={`relative cursor-pointer ${navBase} transition-colors duration-700 ease-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 ${underline} after:transition-all after:duration-500 hover:after:w-full`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
  {/* ...no mobile menu... */}
    </header>
  );
};

export default Header;