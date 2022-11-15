/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'm
  theme: {
    extend: {
      colors:{
        appBarBg:'#FFFFFF',
        mainBg:'#F7F8F9',
        green:{
          27:'#27AE60'
        },
        grey:{
          9:'#9CAEBB',
          45:'#454545'
        }
      },
      backgroundImage: {
        'avatar-img': "url('https://i.pravatar.cc/300')",
      },
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
