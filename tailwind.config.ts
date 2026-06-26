import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f6f1e7",
        card: "#efe7d4",
        ink: "#26221d",
        "ink-dark": "#1c1813",
        body: "#46402f",
        "body-card": "#33302a",
        muted: "#8a8170",
        "muted-serif": "#5b5345",
        accent: "#7a1f1f",
        "accent-hover": "#8f2525",
        "accent-deep": "#681a1a",
        rose: "#e9c9c9",
        "rose-2": "#f0d6d6",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        serif: ["var(--font-spectral)", "Georgia", "serif"],
      },
      boxShadow: {
        cta: "0 8px 24px rgba(122,31,31,0.4)",
        "cta-lg": "0 10px 30px rgba(122,31,31,0.38)",
        "cta-sm": "0 8px 22px rgba(122,31,31,0.32)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
