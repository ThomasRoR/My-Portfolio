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
      },
    },
  },
  plugins: [],
}