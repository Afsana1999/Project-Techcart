/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./assets/**/*.html", "./assets/**/*.js"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "850px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    screens: {
      sm: "400px",
      md: "850px",
    },
  },
  plugins: [],
};

