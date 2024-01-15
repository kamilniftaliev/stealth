import type { Config } from "tailwindcss";

const sidebarWidth = "61px";

const topNavHeight = "50px";

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
      height: {
        // Height without the top navigation bar
        content: `calc(100vh - ${topNavHeight})`,
        "top-nav": topNavHeight,
      },
      padding: {
        sidebar: sidebarWidth,
      },
    },
  },
  plugins: [],
};
export default config;
