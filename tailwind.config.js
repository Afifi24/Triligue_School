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
        pimaryBlue:'#073D69',
        primaryYellow:'#EFC30F',
        lightwhite:'#dbd9d9'
      },
      backgroundImage:{
      'text-gradient':'linear-gradient(to left, #fff 84%, #151515 16%)'
      
      }
    },
  },
  plugins: [],
}