import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        surface: "#FFFFFF",
        primary: "#C5A059", // Soft Gold
        secondary: "#71717A",
        border: "rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "sans-serif"],
        display: ["var(--font-instrument)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
