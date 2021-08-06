module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 20px 2px rgba(0, 0, 0, 0.05)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-padding-safe")(),
    require("@tailwindcss/aspect-ratio"),
  ],
};
