import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        paper: "#fbfaf7",
        clay: "#c56a45",
        forest: "#1f6b57",
        citron: "#d7b938",
        ocean: "#256f8f",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(17, 24, 39, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
