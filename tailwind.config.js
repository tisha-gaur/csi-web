/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30rem': '30rem',  // Custom spacing value
        '42rem': '42rem',
        '36rem': '36rem',
        '51rem': '51rem',
        '22rem': '22rem',
        '25rem': '25rem',
        '32rem': '32rem',
        '3rem': '3rem',
        '10rem': '10rem',
      },

      screens: {
        'sm': '480px',   // Custom small breakpoint
        'md': '768px',   // Custom medium breakpoint
        'lg': '1024px',  // Custom large breakpoint
        'xl': '1390px',  // Custom extra large breakpoint
      },
    },
  },
  plugins: [],
}