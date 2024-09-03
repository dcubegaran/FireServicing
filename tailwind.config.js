/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx}','./index.js'],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}

