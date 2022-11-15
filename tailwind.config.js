/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'm
  theme: {
    extend: {
      fontFamily: {
        iYekan: ['YEKAN', 'sans-serif'],
      },
    },
    poppins: ['Poppins', 'sans-serif'],
  },
  variants: {
    extend: {
      border: ['last', 'odd', 'first', 'even'],
    },
  },
  plugins: [],
}
