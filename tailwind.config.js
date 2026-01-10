/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A5F",
        secondary: "#2DD4BF",
        accent: "#FDBA3B",
        "text-primary": "#0F1F33",
        "text-muted": "#64748B",
        "bg-light": "#FBFDFF",
        "bg-dark-section": "#16263F",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
