/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
        Lato:['Lato', 'sans-serif'],
        Roboto:['Roboto', 'sans-serif'],
      },
      colors:{
        lightYellow:'#F1C30F',
        lightBlue:'#526B84',
        pimaryBlue:'#073D69'
      }
    },
  },
  plugins: [],
}