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
      'text-gradient1':'linear-gradient(to left, #fff 84%, #151515 16%)',
      'text-gradient2':'linear-gradient(to left, #fff 86.5%, #151515 13.5%)',
      'text-gradient3':'linear-gradient(to left, #fff 70.5%, #151515 29.5%)',
      'text-gradient4':'linear-gradient(to left, #fff 90%, #151515 10%)',
      // 
      'text-gradient5':'linear-gradient(to left, #fff 85%, #151515 15%)',

      
      }
    },
  },
  plugins: [],
}