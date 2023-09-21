/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F2F2F2",
        pfPurple: "#AD1FEA",
        pfBlue_normal: "#4661E6",
        pfBLue_light: "#62BCFA",
        pfBlue_dark: "#3A4374",
        pfBlue_darkLight: "#CFD7FF",
        pfBlue_primary: "#373F68",
        pfOrange_warm: "#F49F85",
        pfWhite: "#FFFFFF",
        pfWhiteLight: "#F2F4FE",
        pfGray_normal: "#F2F4FF",
        pfGray_light: "#F7F8FD",
        pfGray_dark: "#647196",
        pfPink: "#AD1FEA",
        pfPink_light: "#C75AF6",
      },
      fontFamily: {
        jost: ["var(--font-jost)"],
      },
      animation: {
        fade: "fadeOut 0.75s ease-out",
      },
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
