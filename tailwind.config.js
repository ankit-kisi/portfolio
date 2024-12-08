const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        soft: "#ffd9c2", // Background color
        softWhite: "#FFF3EC",
        orange: "#ffa92a", // Accent color
        rose: "#feb6d2", // Text & icons
        pink: "#d4609e", // Secondary accent
        blue: "#c4cbf7", // Key text
        white: "#FFFFFF", // Neutral text & backgrounds
        green: "#92d4a3",
        dark: "#0F172A",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
