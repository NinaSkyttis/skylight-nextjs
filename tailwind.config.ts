import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        crimson: ["Crimson Text", "serif"],
        crimsonItalic: ["Crimson Text", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        slBlack: "#444444",
        slBorderColor: "#c78528",
        slDarkOrange: "#CE812D",
        slLavender: "#d7d5e7",
        slLightOrange: "#fdc36d",
        slMintGreen: "#b2e3aa",
        slOrange: "#F66951",
        slOrangeBright: "#F33F21",
        slSageGreen: "#b7cbbf",
        slWhite: "#fffefa",
      },
    },
  },
  plugins: [],
};
export default config;
