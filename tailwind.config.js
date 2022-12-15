/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [],
};
