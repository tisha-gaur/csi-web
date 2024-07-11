/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30rem': '30rem',
        '42rem': '42rem',
        '36rem': '36rem',
        '51rem': '51rem',
        '22rem': '22rem',
        '25rem': '25rem',
        '32rem': '32rem',
        '3rem': '3rem',
        '10rem': '10rem',
        '5.4rem': '5.4rem',
      },

      screens: {
        'sm': '480px',   
        'md': '768px',   
        'lg': '1024px',  
        'xl': '1280px',  
        'resp': '1198px'
      },
    },
  },
  plugins: [],
}