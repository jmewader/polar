module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      ld: { max: "1200xp" },
      md: { max: "900px" },
      sm: { max: "500px" },
    },
    container: {
      padding: "20px",
      center: true,
    },
    extend: {
      colors: {
        darkPink: "#CF5979",
        lightBlack: "#101010",
      },
    },
  },
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
