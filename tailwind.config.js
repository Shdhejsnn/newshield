/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ebay-red': '#E53238',
        'ebay-dark': '#0064D2',
        'ebay-light': '#F5F5F5'
      }
    },
  },
  plugins: [],
} 