module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Caudex", "serif"],
    },

    colors: {
      baseColor: "#fd914f",
      buttonColor: "#ff8233",
      hoverColor: "#ff9554",
      gradientColor: "#ff853b",
    },
    extend: {
      darkMode: {},
    },
  },
  plugins: [],
};
