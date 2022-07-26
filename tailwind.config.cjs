/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        "sm": "375px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",

      }
    },
  },
  plugins: [],
}
