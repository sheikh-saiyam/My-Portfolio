/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(1)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      fontFamily: {
        sans: ["Fira Code", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      colors: {
        bgColor: "#282C33",
        secondBgColor: "#282C33",
        primaryText: "#C778DD",
        grayText: "#ABB2BF",
      },
    },
  },
  plugins: [require("daisyui")],
};
