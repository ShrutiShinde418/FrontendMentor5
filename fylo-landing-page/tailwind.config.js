/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(243, 87%, 12%)",
        blue: "hsl(238, 22%, 44%)",
        brightBlue: "hsl(224,93%,58%)",
        cyan: "hsl(170, 45%, 43%)",
        grayishBlue: "hsl(240, 75%, 98%)",
        gray: "hsl(0, 0%, 75%)",
      },
      fontFamily: {
        raleway: "Raleway",
        open: "Open Sans",
      },
      backgroundImage: {
        desktop: "url('/images/bg-curve-desktop.svg')",
        mobile: "url('/images/bg-curve-mobile.svg')",
      },
    },
  },
  plugins: [],
};
