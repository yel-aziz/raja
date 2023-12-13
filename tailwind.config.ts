import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#06422B",
        green: "#0EC96A",
        greenf2: "#007145",
        greenc2: "#00974A",
        yellow: "#E8C257",
        yellow2: "#E8C257",
        blackgreen: "#091D07",
        darkgreenlite: "#023320",
        red:  "#BB0000"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        helvatica: ["Helvetica Neue", "sans"],
      },
      keyframes: {
        "ease-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ease-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "ease-in": "ease-in 1s ease-in",
        "ease-out": "ease-out 1s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
