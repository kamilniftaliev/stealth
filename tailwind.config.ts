import type { Config } from "tailwindcss";

const sidebarWidth = "61px";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5a1f",
      },
      backgroundColor: {
        sidebar: "#292D53",
      },
      fontFamily: {
        bree: '"Bree Serif", serif',
      },
      width: {
        sidebar: sidebarWidth,
        "sidebar-open": "280px",
      },
      padding: {
        sidebar: sidebarWidth,
      },
    },
  },
  plugins: [],
};
export default config;
