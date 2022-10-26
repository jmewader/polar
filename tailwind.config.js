module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      ld: { max: "1200xp" },
      md: { max: "1000px" },
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
        bgMain: "#070302",
      },
    },
  },
};
