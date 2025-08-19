/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        hebbo: ["Hebbo", 'Orbitron', "sans-serif"],
      },
    },
  },
  plugins: [],
}
