/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Merriweather'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      colors: {
        lightBlue: 'hsl(182, 100%, 35%)',
        darkBlue: 'hsl(182, 100%, 30%)',
        darkerBlue: 'hsl(182, 100%, 20%)',
      },
    },
  },
  plugins: [],
};
