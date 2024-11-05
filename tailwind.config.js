/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fontFamily: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        bgColor: "#1F4E3D",
        primary: '#ff9c00',
        secondary: '#fb923c'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "3rem",
          "2xl": "3rem"
        }
      }
    },
  },
  plugins: [],
}

