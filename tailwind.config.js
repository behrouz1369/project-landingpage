/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        pink:{
          750:"#d53868"
        },
        amber:{
          350:"#daab51"
        }
      }
    },
  },
  plugins: [],
}

