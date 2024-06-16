/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#3B71CA",
      "primary-dark": "#18214D",
      "primary-muted": "#305B85",
      "primary-opacity": "#EFFAFE",
      grey: "#A6A5A5",
      "grey-stroke": "#D2D2D2",
      "grey-dark": "#717171",
      "grey-opacity": "#EDEDED",
      white: "#ffffff",
      black: "#000000",
      error: "#DC0303",
      warning: "#DC7603",
      success: "#55B645",
    },

    container: {
      center: true,
      padding: "2rem",
    },
    important: true,
    extend: {
      dropShadow: {
        custom: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
