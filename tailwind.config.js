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
      healthSection: "#F1E4DB",
      healthText: "#121211cc",
      healthTextDark: "#121211",
      newWorldSection: "#FFF8EF",
      borderGreen: "#A2AE85",
      contact: "#FBF5F0",
      cardBg: "#FAF5EF"
    },
    width: {
      '261': '261px',
      '435': '435px',
      '443': '443px',
      '690': '690px',
      '706': '706px',
      '874': '874px',
      '1032': '1032px',
      '1160': '1160px',
      '1250': '1250px',
      '1320': '1320px',
      '1580': '1580px',
    },
    inset: {
      'right0': '0px',
      '100': '100px'
    },
    extend: {},
  },
  plugins: [],
}

