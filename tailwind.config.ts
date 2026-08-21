/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e8edff',
          200: '#cddcff',
          300: '#a4b8ff',
          400: '#7d93ff',
          500: '#5d72ff',
          600: '#465bdb',
          700: '#3346b3',
          800: '#29398d',
          900: '#1d2b68',
        },
      },
      boxShadow: {
        soft: '0 12px 32px rgba(39, 63, 126, 0.12)',
      },
    },
  },
  plugins: [],
};
