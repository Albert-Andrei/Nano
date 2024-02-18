import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        nav: "480px",
      },
      spacing: {
        xs: "5px",
        sm: "10px",
        md: "20px",
        lg: "40px",
        nav: "480px",
      },
      colors: {
        main: "#F6F6F6",
        background: "#0A0A0A",
        gold: "#E8D5C6",
        line: "#6E6E6E",
        "light-line": "#D9D9D9",
        faded: "#3B3B3B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
