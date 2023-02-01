/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}"
  ],
  theme: {
    colors: {
      martin: {
        grey: {
          light: '#948a99',
          DEFAULT: '#edf5f7',
        },
        purple: '#9352b3',
        yellow: '#ffc741',
        gunmetal: '#3e4555',
      },
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
