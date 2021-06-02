// tailwind.config.js

module.exports = {
  purge: false,
  theme: {
    colors: {
      footGray:"#1c1c1c",
      white: "#FFFFFF",
      black: "#000",
      transparent: "transparent"
    },
  },
  variants: {
    borderColor: ["hover", "focus"],
  },
  plugins: [],
};