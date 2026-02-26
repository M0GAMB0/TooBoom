/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B13EC",
        customRed: "#F87171",
        errorRed: "#EF4444",
        // Light mode colors
        light: {
          text: "#11181C",
          background: "#F9F5FF",
          tint: "#0a7ea4",
          icon: "#64748B",
          tabIconDefault: "#687076",
          tabIconSelected: "#0a7ea4",
          default: "#A492C9",
          cardBackground: "#fff",
          white: "#fff",
          tabInactive: "#94A3B8",
          borderColor: "#5B13EC0D",
          streak: "#F97316",
          streakBadge: "#FAF5FF",
          secondaryText: "#94A3B8",
        },
        // Dark mode colors
        dark: {
          text: "#ECEDEE",
          background: "#161022",
          tint: "#fff",
          icon: "#fff",
          tabIconDefault: "#9BA1A6",
          tabIconSelected: "#fff",
          default: "#A492C9",
          cardBackground: "#1F182F",
          white: "#fff",
          tabInactive: "#64748B",
          borderColor: "#2F2348",
          streak: "#F97316",
          streakBadge: "#1F182F",
          secondaryText: "#94A3B8",
        },
      },
    },
  },
  plugins: [],
};
