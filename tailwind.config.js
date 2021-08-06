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
        center: "0 0 20px 2px rgba(0, 0, 0, 0.05)",
      },
      aspectRatio: {
        128: '128',
        113: '113',
        375: '375',
        667: '667',
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
