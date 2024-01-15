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
      diffrentSection: "#E4E1CE",
    },
    height: {
      header: '124px'
    },
    margin: {
      'common': '170px',
      '30px': '30px',
      '56px': '56px',
      '60px': '60px',
      '95px': '95px',
      '100px': '100px',
      '106px': '106px',
      '125px': '125px',
    },
    width: {
      '435': '435px',
      '1032': '1032px',
      '1160': '1160px',
      '1250': '1250px',
    },
    fontSize: {
      '25px': '25px',
      '50px': '50px',
      '55px': '55px',
      '65px': '65px',
    },
    inset: {
      'right0': '0px',
      '100': '100px'
    },
    extend: {},
  },
  plugins: [],
}

