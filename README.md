# 🐕 Lengüitas Felices

Un sitio web moderno y elegante especializado en postres especiales para perros, construido con React y desplegado en GitHub Pages.

![Lengüitas Felices](https://img.shields.io/badge/Estado-En%20Línea-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-2.2.19-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-4.4.4-blue)

## 🌐 Demo en Vivo

**[Ver sitio web →](https://lengüitas-felices.netlify.app)**

## 📋 Descripción

Lengüitas Felices es una página web profesional diseñada para mostrar y vender postres especiales para perros. La aplicación ofrece una experiencia visual atractiva con animaciones suaves, diseño responsivo y una paleta de colores cálida que refleja la alegría y el amor por nuestras mascotas.

## ✨ Características

### 🎨 **Diseño y UX**
- **Interfaz moderna** con componentes animados
- **Diseño totalmente responsivo** para móviles, tablets y desktop
- **Paleta de colores cálida** (beige, naranja, púrpura)
- **Tipografía elegante** con Google Fonts (Poppins)
- **Animaciones fluidas** con Framer Motion

### 🧩 **Funcionalidades**
- **Hero section** con llamada a la acción principal
- **Catálogo de productos** con tarjetas interactivas
- **Formulario de contacto** funcional
- **Testimonios de clientes** con carrusel
- **Navegación fluida** con scroll suave
- **Iconos sociales** animados

### 🛠 **Tecnologías**
- **React 18.2.0** - Framework de JavaScript
- **TypeScript 4.4.4** - Tipado estático
- **Tailwind CSS 2.2.19** - Framework de CSS utilitario
- **Framer Motion 10.16.4** - Librería de animaciones
- **React Icons 4.12.0** - Iconos vectoriales
- **React Scroll 1.9.0** - Navegación suave

## 🚀 Instalación y Uso Local

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/NeoScraids/lenguitas-felices.git
cd lenguitas-felices
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Crea una versión optimizada para producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de webpack (irreversible)

## 📁 Estructura del Proyecto

```
lenguitas-felices/
├── public/                 # Archivos estáticos públicos
│   └── index.html         # Plantilla HTML principal
├── src/                   # Código fuente
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.tsx     # Navegación principal
│   │   ├── Hero.tsx       # Sección hero con CTA
│   │   ├── Products.tsx   # Catálogo de productos
│   │   ├── ProductCard.tsx # Tarjeta individual de producto
│   │   ├── Testimonials.tsx # Sección de testimonios
│   │   ├── TestimonialCarousel.tsx # Carrusel de testimonios
│   │   ├── ContactForm.tsx # Formulario de contacto
│   │   ├── SocialIcons.tsx # Iconos de redes sociales
│   │   └── Footer.tsx     # Pie de página
│   ├── pages/             # Páginas principales
│   │   └── Home.tsx       # Página de inicio
│   ├── styles/            # Estilos y configuración
│   │   └── tailwind.css   # Configuración de Tailwind
│   ├── types/             # Definiciones de TypeScript
│   │   └── index.ts       # Tipos e interfaces
│   ├── App.tsx            # Componente principal
│   └── index.tsx          # Punto de entrada
├── docs/                  # Build para GitHub Pages
├── package.json           # Configuración del proyecto
├── tailwind.config.js     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Este archivo
```

## 🎨 Personalización

### Colores
El proyecto utiliza una paleta personalizada definida en `tailwind.config.js`:

```javascript
colors: {
  warm: {
    50: '#fef7f0',   // Fondo claro
    100: '#feecdc',  // Fondo suave
    200: '#fcd9bd',  // Bordes suaves
    // ... más tonos
    800: '#9a3412',  // Texto principal
    900: '#7c2d12'   // Texto oscuro
  },
  // Paletas beige y purple también disponibles
}
```

### Componentes
Cada componente está diseñado para ser:
- **Reutilizable** y modular
- **Accesible** con ARIA labels
- **Responsivo** por defecto
- **Tipo-seguro** con TypeScript

## 🚀 Despliegue

### GitHub Pages (Actual)
El sitio está configurado para desplegarse automáticamente en GitHub Pages:

1. **Build automático**: Los cambios en `main` activan el build
2. **Carpeta docs**: El contenido se publica desde `/docs`
3. **URL en vivo**: https://lengüitas-felices.netlify.app

### Netlify (Recomendado)
Para mejor rendimiento y características avanzadas:

1. **Configuración automática**: El proyecto incluye `netlify.toml`
2. **Formularios funcionales**: Netlify Forms configurado
3. **Deploy continuo**: Desde GitHub automáticamente
4. **Ver guía completa**: [NETLIFY_DEPLOY.md](./NETLIFY_DEPLOY.md)

### Para desplegar manualmente:

#### GitHub Pages:
```bash
npm run build
cp -r build/* docs/
git add docs
git commit -m "Deploy to GitHub Pages"
git push
```

#### Netlify:
```bash
npm run build
# Arrastra la carpeta build a netlify.com
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Repositorio**: [https://github.com/NeoScraids/lenguitas-felices](https://github.com/NeoScraids/lenguitas-felices)
- **Sitio Web**: [https://lengüitas-felices.netlify.app](https://lengüitas-felices.netlify.app)
- **Issues**: [https://github.com/NeoScraids/lenguitas-felices/issues](https://github.com/NeoScraids/lenguitas-felices/issues)

## 🙏 Agradecimientos

- **React Team** por el excelente framework
- **Tailwind CSS** por el sistema de diseño utilitario
- **Framer Motion** por las animaciones fluidas
- **Google Fonts** por la tipografía Poppins

---

**¡Hecho con ❤️ para nuestros amigos de cuatro patas!** 🐕🍰

Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries, please reach out to us at [contact@lenguitasfelices.com](mailto:contact@lenguitasfelices.com). 

### 👍 Conclusión

Thank you for visiting Lengüitas Felices! Enjoy our special desserts for your furry friends!