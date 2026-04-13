/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d1018",
        graphite: "#1b1f29",
        paper: "#fbfcfe",
        mist: "#eef4f6",
        cyan: "#00c3d9",
        cyanLight: "#7ce5ef",
        brass: "#c7a76a"
      },
      boxShadow: {
        glass: "0 24px 70px rgba(13, 16, 24, 0.12)",
        premium: "0 40px 110px rgba(13, 16, 24, 0.24)",
        line: "0 1px 0 rgba(13, 16, 24, 0.1)"
      },
      fontFamily: {
        sans: ["Inter", "Geist", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
