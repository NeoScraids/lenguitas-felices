module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ffb679', // warm orange
        secondary: '#ff9d5c', // lighter orange
        accent: '#c57334', // brown
        background: '#fff6ec', // light cream
        text: '#4E342E', // dark brown
        warm: {
          50: '#fff6ec',
          100: '#ffe3c7',
          200: '#ffd3ad',
          300: '#ffc59b',
          400: '#ffb679',
          500: '#ff9d5c',
          600: '#c57334',
          700: '#8b5a2b',
          800: '#4E342E',
        },
        beige: {
          50: '#f5e9da',
          100: '#f3e3d1',
          200: '#eedbc2',
          300: '#e6cfae',
          400: '#dcc29a',
          500: '#cbb18a',
          600: '#b09a76',
          700: '#8c7a5c',
          800: '#6b5c43',
        },
        purple: {
          50: '#f3e8ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};