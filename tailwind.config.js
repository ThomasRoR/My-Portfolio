/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-custom': '#0a0a0a',
        'purple-custom': '#8A2BE2',
        'orange-custom': '#FF8A3D',
        'turquoise-custom': '#2ED5C1',
        'pink-custom': '#FF9EDC',
      },
    },
  },
  plugins: [],
}