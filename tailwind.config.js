/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Madimi: ["Madimi One", "sans-serif"],
      minor: ["Mulish", "sans-serif"],
    },
  },

  plugins: [],
};

// module.exports = {
//   theme: {
//     // Some useful comment
//     fontFamily: {
//       'nunito': ['nunito', 'sans-serif'],
//       'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
//     },
//   },
//   variants: {
//     // Some useful comment
//   },
//   plugins: [
//     // Some useful comment
//   ]
// }
