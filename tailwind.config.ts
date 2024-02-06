import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{png, svg, jpg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('/Main/back.png')"
      },
    },
  },
  plugins: [],
};
export default config;
