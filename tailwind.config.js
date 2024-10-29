/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          50: "#F2FBF9",
          100: "#D3F4EC",
          200: "#A6E9D9",
          300: "#76D7C4",
          400: "#45BCA8",
          500: "#2CA090",
          600: "#208174",
          700: "#1E675E",
          800: "#1C534D",
          900: "#1B4641",
          950: "0A2927",
        },
        secondary: {
          50: "#EAECEE",
          100: "#BEC3C9",
          200: "#9EA6AF",
          300: "#727E8A",
          400: "#566573",
          500: "#2C3E50",
          600: "#283849",
          700: "#1F2C39",
          800: "#18222C",
          900: "#121A22",
        },
        alert: {
          50: "#FEF5E7",
          100: "#FDF0DB",
          200: "#FBE0B6",
          300: "#F39C12",
          400: "#DB8C10",
          500: "#C27D0E",
          600: "#B6750E",
          700: "#925E0B",
          800: "#6D4608",
          900: "#553706",
        },
        error: {
          50: "#FDEDEC",
          100: "#FBE4E2",
          200: "#F8C8C3",
          300: "#E74C3C",
          400: "#D04436",
          500: "#B93D30",
          600: "#AD392D",
          700: "#8B2E24",
          800: "#68221B",
          900: "#511B15",
        },
        success: {
          50: "#E9F7EF",
          100: "#DFF3E7",
          200: "#BCE6CE",
          300: "#27AE60",
          400: "#239D56",
          500: "#1F8B4D",
          600: "#1D8348",
          700: "#17683A",
          800: "#124E2B",
          900: "#0E3D22",
        },
        tertiary: {
          50: "#E8E8E8",
          100: "#DDDDDD",
          200: "#B9B9B9",
          300: "#1C1C1C",
          400: "#191919",
          500: "#161616",
          600: "#151515",
          700: "#111111",
          800: "#0D0D0D",
          900: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
};
