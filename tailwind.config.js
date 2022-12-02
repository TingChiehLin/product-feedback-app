/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pfPurple: "#AD1FEA",
        pfBlue_normal: "#4661E6",
        pfBLue_light: "#62BCFA",
        pfBlue_dark: "#3A4374",
        pfBlue_darkLight: "#4661E6",
        pfOrange_warm: "#F49F85",
        pfWhite: "#FFFFFF",
        pfGray_normal: "#F2F4FF",
        pfGray_light: "#F7F8FD",
        pfGray_dark: "#647196",
      },
    },
  },
  plugins: [],
};
