/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#07131f",
        deep: "#0a1b2b",
        harbor: "#0f3346",
        ocean: "#28b6c8",
        brass: "#c7a76a",
        mist: "#eef6fb"
      },
      boxShadow: {
        glass: "0 28px 90px rgba(0, 0, 0, 0.42)",
        premium: "0 40px 120px rgba(0, 0, 0, 0.56)",
        glow: "0 0 80px rgba(40, 182, 200, 0.22)"
      },
      fontFamily: {
        sans: ["Inter", "Geist", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
