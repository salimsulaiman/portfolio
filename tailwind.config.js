/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./src//assets/background.png')",
        backgroundDark: "url('./src/assets/backgroundDark.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
