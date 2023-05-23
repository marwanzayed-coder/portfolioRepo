module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #ccc",
      },
      colors: {
        main: "#4b6bfb",
        background: "#F7F7F7",
        "background-dark": "#0f172a",
        "background-white": "#fff",
        "background-black": "#1e293b",
      },
      animation: {
        hero: "topbottom 2.5s linear infinite",
      },
      keyframes: {
        topbottom: {
          "0%, 50%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(20px)" },
          "75%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
