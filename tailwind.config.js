/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      nutraWhite: "#FFF",
      btnBg: "#1F4934",
      borderCol: "#F0D3D3",
      QuizBg: "#F1E4DB",
    },
    height: {
      header: '124px'
    },
    margin: {
      'common': '170px',
      '56px': '56px',
      '100px': '100px'
    },
    width: {
      '1160': '1160px',
      '1250': '1250px',
    },
    fontSize: {
      '25px': '25px',
      '50px': '50px',
      '65px': '65px',
    },
    extend: {},
  },
  plugins: [],
}

