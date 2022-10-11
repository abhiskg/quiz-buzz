/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#f6b727",
        secondary: {
          100: "#d4d8ba",
          200: "#c2a05b",
        },
      },
    },
  },
  plugins: [],
};
// #ecaf3a
