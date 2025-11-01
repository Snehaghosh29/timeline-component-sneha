// ✅ Import global Tailwind + base styles
import "../src/index.css";
import type { Preview } from "@storybook/react";

// ✅ Configure Storybook preview settings
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
    layout: "centered", // optional, centers components in preview
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1f2937" },
      ],
    },
  },
};

export default preview;
