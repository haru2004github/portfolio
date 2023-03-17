/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'light' : '#f1f1f1',
        'dark' : '#202020',
      },
      boxShadow: {
        'extra': '7px 7px 15px 0 rgb(0 0 0 / 12%), -7px -7px 15px 0 #fff',
        'inset': 'inset -4px -4px 10px 0 #fff, inset 4px 4px 6px 0 rgb(0 0 0 / 20%)',
        'dark-extra': ' 10px 10px 20px #151515,-10px -10px 20px #2b2b2b',
        'dark-inset': ' inset 18px 18px 50px #131313,inset -18px -18px 50px #2d2d2d',
        'dark-ultra' : ' 18px 18px 20px #151515,-18px -18px 20px #2b2b2b',
      }
    },
  },
  plugins: [],
}
