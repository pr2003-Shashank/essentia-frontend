/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins font
      },
      screens: {
        xs: "600px", // Custom xs breakpoint
      },
    },
  },
  plugins: [],
}

