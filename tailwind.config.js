/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#6366F1",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: ["18px", { lineHeight: "1.5" }],
        highlight: ["24px", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
