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
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.underline-after': {
          position: 'relative',
        },
        '.underline-after::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '0',
          height: '2px', // Alt xəttin qalınlığı
          backgroundColor: 'blue', // Alt xəttin rəngi
          transition: 'width 0.3s ease',
        },
        '.hover-underline-after:hover::after': {
          width: '100%', // Hover zamanı alt xəttin genişliyi
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
};

