module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          100: "#eef6f6",
          200: "#deeded",
          300: "#cde3e4",
          400: "#bddadb",
          500: "#acd1d3",
          600: "#9bc8ca",
          700: "#8bbfc1",
          800: "#7ab5b8",
          900: "#6aacaf"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}