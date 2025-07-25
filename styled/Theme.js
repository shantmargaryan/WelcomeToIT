"use client"
const theme = {
  colors: {
    darkBlue: "#282938",
    white: "#fff",
    gray: "#f4f6fc",
    yellow: "#fff",
    BlueGradient: "linear-gradient(90deg,rgba(2, 0, 36, 1) 1%, rgba(41, 39, 255, 1) 53%, rgba(6, 2, 89, 1) 100%)",
    accent: "#eef4fa",
  },
  media: {
    mobile: "min-width: 480px",
    mobileLarge: "min-width: 576px",
    tablet: "min-width: 768px",
    tabletLarge: "min-width: 992px",
    laptop: "min-width: 1024px",
    laptopLarge: "min-width: 1200px",
    desktop: "min-width: 1440px",
  },
  container: {
    width: 1280,
    offset: 15,
  },

  Response: {
    gridCustom: "repeat(auto-fit, minmax(min(100%, 31rem), 1fr))",
  },
};

export default theme;
