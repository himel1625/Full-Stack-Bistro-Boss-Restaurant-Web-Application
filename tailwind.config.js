/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      colors: {
        customYellow: '#eeff25',
      },
      backgroundImage: {
        featured: "url('./src/assets/home/featured.jpg')",
      },
    },
  },
  plugins: [],
};
