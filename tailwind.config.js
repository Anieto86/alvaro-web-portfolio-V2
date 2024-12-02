/** @type {import('tailwindcss').Config} */
// import "@fontsource-variable/onest";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        oneStyle: ['"OneStyle"', "sans-serif"],
      },
      animation: {
        "slide-left": "slide-left 8s linear infinite",
      },
    },
  },
  plugins: [],
};
