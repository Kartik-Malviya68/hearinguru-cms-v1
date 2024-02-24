/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      flex: {
        '100': '1 1 0'
      },
      lineHeight: {
        "150": "150%",
        "125": "125%",
      },
      colors: {
        CTA: "#5B7CE2",
      },
    
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
    // ... other plugins
  ],
};
