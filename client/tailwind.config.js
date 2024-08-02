/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F2F2F2",
        pfPurple: "#AD1FEA",
        lightPurple: "#CFD7FF",
        pfBlueNormal: "#4661E6",
        pfBlueLight: "#62BCFA",
        pfBlueDark: "#3A4374",
        pfBlueDarkLight: "#656EA3",
        pfBluePrimary: "#373F68",
        pfOrangeWarm: "#F49F85",
        pfWhite: "#FFFFFF",
        pfWhiteLight: "#F2F4FE",
        pfGrayNormal: "#F2F4FF",
        pfGrayLight: "#F7F8FD",
        pfGrayDark: "#647196",
        pfPink: "#AD1FEA",
        pfPinkLight: "#C75AF6",
        pfRed: "#D73737",
        pfLightRed:"#E98888",
        error: "#D73737"
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
