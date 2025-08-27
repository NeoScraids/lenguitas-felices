# 🐕 Lengüitas Felices

Sitio web moderno y elegante de postres premium para perros (y escalable a gatos), construido con React + TypeScript + Tailwind y desplegado en Netlify.

![Lengüitas Felices](https://img.shields.io/badge/Estado-Producción-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-2.2.19-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)

## 🌐 Demo en Vivo

**[Ver sitio web →](https://lengüitas-felices.netlify.app)**  
Deploy continuo (branch `main`).

## 📋 Descripción

Experiencia visual premium con gradiente global cálido, fondo animado de orbes suaves, animaciones accesibles, componentes reutilizables y enfoque en confianza / calidad artesanal.

## ✨ Highlights

### 🎨 UX / UI
- Gradiente de marca (crema → naranja → crema)
- Orbes animados con mezcla luz para profundidad
- Tipografía clara y jerarquía consistente
- Componentes con motion sutil (Framer Motion)
- Accesibilidad: foco visible, reduce-motion support

### 🧩 Funcionalidad
- Catálogo de productos interactivo
- Carrusel de testimonios con auto-rotación y paginación manual
- Formulario de contacto listo para integrarse (Netlify / backend futuro)
- Scroll anclado suave y navegación semántica

### 🛠 Stack
- React 18 + TypeScript
- Tailwind CSS (gradiente global + utilidades personalizadas)
- Framer Motion (animaciones fluidas)
- Netlify (build, headers, CDN, redirects SPA)
- React Icons / React Scroll

## 🚀 Instalación Local

Requisitos: Node 18+

```bash
git clone https://github.com/NeoScraids/lenguitas-felices.git
cd lenguitas-felices
npm install
npm start
```
Abrir: http://localhost:3000

Build producción:
```bash
npm run build
```

## 📁 Estructura
```
src/
  components/
  pages/
  styles/
  types/
public/
netlify.toml
```

## 🖼 Imágenes y Fallbacks

Las imágenes se sirven desde `/public` mediante rutas absolutas (ej: `/images/archivo.jpg`).

Se agregó fallback SVG embebido en:
- `ProductCard`
- `TestimonialCarousel`

Si una imagen falta en producción, se muestra un placeholder sin romper layout.

Recomendaciones:
- Usar `.webp` optimizado
- Productos: ~800x600 – Testimonios: ~400x400
- Mantener nombres existentes para evitar cambios de código

Optimización futura: pipeline (Sharp/Imagemin) + lazy strategies avanzadas.

## 🎨 Personalización Rápida

Paleta principal en `tailwind.config.js` (grupo `warm`). Ajustar tonos para recalibrar branding.

## 🚀 Despliegue (Netlify)

Incluye `netlify.toml` con:
- command: `npm run build`
- publish: `build`
- Redirect SPA: `/* -> /index.html 200`
- Headers de seguridad y cache (CSS/JS immutable)

Pipeline:
1. Push a `main`
2. Netlify construye
3. CDN sirve versión optimizada

Deploy manual:
```bash
npm run build
# Arrastrar carpeta build al panel de Netlify
```

GitHub Pages (opcional): copiar `build` → `docs/` (no necesario si usas Netlify).

## 🧪 Calidad
- ESLint (config CRA)
- Soporte a prefers-reduced-motion
- Animaciones sólo transform/opacity → performance friendly

## 🤝 Contribuir
```bash
git checkout -b feature/nueva-funcion
# cambios
git commit -m "feat: nueva función"
git push origin feature/nueva-funcion
```
Abrir Pull Request.

## 📝 Licencia
MIT (ver LICENSE si se agrega).

## 📞 Contacto
- Repositorio: https://github.com/NeoScraids/lenguitas-felices
- Producción: https://lengüitas-felices.netlify.app
- Issues: https://github.com/NeoScraids/lenguitas-felices/issues

## 🙏 Agradecimientos
- React Team
- Tailwind CSS
- Framer Motion

---
Hecho con ❤️ para amigos de cuatro patas. 🐕🍰