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
      },
      colors: {
        purple: "#3D00B7", // Define your custom color
      },
      width: {
        discoverP: "23.5rem",
      },
    },
  },
  plugins: [],
};
