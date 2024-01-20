/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeInSecond: 'fadeInSecond 3s ease-in-out 2s',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-seri'],
      },
    },
  },
  plugins: [],
}