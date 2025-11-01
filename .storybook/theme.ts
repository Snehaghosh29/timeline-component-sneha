import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  // 🏷️ Brand identity
  brandTitle: "Timeline Component — Sneha Ghosh",
  brandUrl: "https://github.com/sneha-ghosh", // optional link (you can replace)
  brandImage:
    "https://storybook.js.org/images/placeholders/350x150.png", // you can replace with your logo image URL
  brandTarget: "_blank",

  // 🎨 Custom palette
  colorPrimary: "#2563eb", // Tailwind blue-600
  colorSecondary: "#1d4ed8",

  // ⚙️ UI Tweaks
  appBg: "#f9fafb",
  appContentBg: "#ffffff",
  appBorderColor: "#e5e7eb",
  appBorderRadius: 12,

  // 🧭 Text colors
  textColor: "#111827",
  textInverseColor: "#f9fafb",

  // 🧩 Toolbar default
  barTextColor: "#111827",
  barSelectedColor: "#2563eb",
  barBg: "#f3f4f6",

  // 📘 Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: "monospace",
});
