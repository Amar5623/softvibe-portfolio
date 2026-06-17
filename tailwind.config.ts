import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F8F7F4",
        "bg-alt": "#F1EFE9",
        surface: "#FFFFFF",
        border: "#E4E1D9",
        ink: "#1A1A18",
        "ink-soft": "#6B6B65",
        accent: {
          DEFAULT: "#1B4332",
          soft: "#E3EAE5",
          softer: "#D3E0D8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
