module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        bg: "#e5e7ef",
        azul: "#111e6c",
        rojo: "#ef434e",
        griso: "#323232",
        grisc: "#969696",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
