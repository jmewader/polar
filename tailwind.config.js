module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      ld: { max: "1200xp" },
      md: { max: "1000px" },
      td: { max: "800px" },
      sm: { max: "500px" },
      xs: { max: "400px" },
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
