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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary
        marineBlue: "#02295A",
        purplishBlue: "#473DFF",
        pastelBlue: "#ADBEFF",
        lightBlue: "#BFE2FD",
        strawberry: "#ED3548",

        // Secondary
        coolGray: "#9699AB",
        lightGray: "#D6D9E6",
        magnolia: "#F0F6FF",
        alabaster: "#9699AB",
      },
    },
  },
  plugins: [],
};
export default config;
