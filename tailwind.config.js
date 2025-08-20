/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // B2B Professional Color Palette
        primary: "#24547A",      // Professional Blue - Dominant brand color, backgrounds, headers
        secondary: "#333333",    // Dark Gray - Secondary color, subheadings, key graphics
        accent: "#FF8C00",       // Action Orange - Accent color, CTA buttons
        background: "#FFFFFF",   // Clean White - Backgrounds, text, contrast
        foreground: "#333333",   // Dark Gray - Text, secondary information, contrast
        lightNeutral: "#F5F5F5", // Light Gray for subtle backgrounds
      },
    },
  },
  plugins: [],
}


