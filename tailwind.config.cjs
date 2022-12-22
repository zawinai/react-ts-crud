/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        "card-container" : 'repeat(auto-fit, minmax(230px, auto))'
      }
    },
  },
  plugins: [],
}
