import type { Config } from "tailwindcss";
import path from "path";

const config: Config = {
  content: [
    path.join(__dirname, "pages/**/*.{js,ts,jsx,tsx,mdx}"),
    path.join(__dirname, "components/**/*.{js,ts,jsx,tsx,mdx}"),
    path.join(__dirname, "app/**/*.{js,ts,jsx,tsx,mdx}"),
    "./frontend/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: "var(--brand-primary)",
          dark: "var(--brand-strong)",
          surface: "var(--brand-surface)",
          "surface-light": "var(--brand-surface-elevated)",
          border: "var(--brand-border)",
          lime: "var(--brand-lime)",
          "lime-hover": "var(--brand-lime-hover)",
          "lime-muted": "var(--brand-lime-muted)",
          offwhite: "var(--brand-offwhite)",
          lightgreen: "var(--brand-lightgreen)",
          gray: {
            50: "#FAFAF9",
            100: "#F5F5F4",
            200: "#E7E5E4",
            300: "#D6D3D1",
            400: "#A8A29E",
            500: "#78716C",
            600: "#57534E",
            700: "#44403C",
            800: "#292524",
            900: "#1C1917",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
        bangla: ["var(--font-hind-siliguri)", "var(--font-noto-bengali)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-4deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" },
        },
      },
      boxShadow: {
        "lime-glow": "0 0 30px rgba(199, 255, 0, 0.25)",
        "lime-glow-lg": "0 0 50px rgba(199, 255, 0, 0.35)",
        "dark-card": "0 10px 30px -10px rgba(15, 36, 17, 0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
