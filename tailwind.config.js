/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      color1: "#11071F",
      color2: "#1A0B2E",
      color3: "#4f22b6",
      background: "#000000",
      error: "#E42929",
      warning: "#E4CE06",
      success: "#56E39F",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#A0AEC0",
      transparent: "transparent",
      // commandResult: "#91C499",
      // commandResult: "#A4B0F5",
      commandResult: "#94a3b8",
    },
    extend: {},
    fontFamily: {
      terminal: ["Terminal Medium"],
      reiswar: ["Reiswar"],
      trLarabie: ["Tr Larabie"],
      videoType: ["VideoType"],
    },
  },
  plugins: [],
};
