import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "slide-fwd-center": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.2)",
          },
        },
        "shadow-drop": {
          "0%": {
            boxShadow: "0 0 0 0 transparent",
            transform:"scale(1)"
          },
          "100%":{
            boxShadow:"0 0 20px 0 rgba(0,0,0,.35)",
            transform:"scale(1.05)"
          }
        },
      },
      animation: {
        "slide-fwd-center":
          "slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "shadow-drop": "shadow-drop .4s cubic-bezier(.25,.46,.45,.94) both",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
