/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "411px",
      sm: "540px",
      smd: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1920px",
    },
    extend: {
      maxWidth: {
        section: "970px",
      },
      animation: {
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
      keyframes: {
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        dark: "#231F20",
        light: "#707070",
        link: "#21409A",
      },
      fontFamily: {
        primary: ["Albra"],
      },
      boxShadow: {
        accent: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        section:
          "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);",
        sm: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);",
        top: "rgb(0 0 0 / 14%) 0px 4px 32px",
      },
      backgroundImage: {
        'home-banner-image': "url(/home/home-banner-img.jpeg)",
      }
    },
  },
  plugins: [],
}