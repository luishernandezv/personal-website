// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        black: {
          default: "#372D3B",
        },
        primary: {
          white: "#CBE0D8",
          default: "#3DA282",
          light: "#62B494",
        },
        secondary: {
          light: "#F4EFEA",
          default: "#C1813E",
          dark: "#9E6B30",
        },
      },
    },
  },
  purge: [
    // Use *.tsx if using TypeScript
    "./src/**/*.js",
  ],
  // ...
};
