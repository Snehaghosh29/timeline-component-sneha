/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "media", 
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#dbeafe",
          400: "#60a5fa",
          600: "#2563eb",
          900: "#1e3a8a",
        },
        green: {
          100: "#dcfce7",
          400: "#4ade80",
          600: "#16a34a",
          900: "#14532d",
        },
        red: {
          100: "#fee2e2",
          400: "#f87171",
          600: "#dc2626",
          900: "#7f1d1d",
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
