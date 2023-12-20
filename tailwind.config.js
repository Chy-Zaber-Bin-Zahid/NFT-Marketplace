/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        custom: "74rem",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        integral: ["Integral CF", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        purple: "#3D00B7", // Define your custom color
        collectionLeftP: "#363639",
        collectionLeftH: "#3A3A3A",
        collectionMiddleGreen: "#00AC4F",
        collectionMiddleGray: "#757575",
        collectionLastPurple: "#3D00B7",
        collectionRightGray: "#636363",
        collectionRightGreen: "#14C8B0",
        collectionRightRed: "#FF002E",
      },
      width: {
        discoverP: "23.5rem",
      },
      inset: {
        "custom-top": "12.5rem", // Define your custom top value here
        "custom-left": "4.3rem", // Define your custom top value here
      },
    },
  },
  plugins: [],
};
