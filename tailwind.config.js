/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      backgroundImage: {
        'dashboard': "url('./assets/background image.png')",
      }
    },
  },
  plugins: [],
}