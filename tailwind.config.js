/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Work Sans'], // Replace 'Poppins' with the new font name
      },
    },
  },
  plugins: [],
};
