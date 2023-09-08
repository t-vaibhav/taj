/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#FFC727',
        'primary-pink': '#FF5D73',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'molengo': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}