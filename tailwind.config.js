/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      textWhite: "#FFF",
      btnBg: "#1F4934",
      borderCol: "#F0D3D3",
    },
    height: {
      header: '124px'
    },
    margin: {
      'common': '170px'
    },
    extend: {},
  },
  plugins: [],
}

