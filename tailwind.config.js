module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
        pp: ['"PP Neue Montreal"', 'sans-serif'],
      },
       letterSpacing: {
        wider3: '0.03em', // 3%
      },
       lineHeight: {
        tight110: '1.1',
      },
        primary: '#0463FF',
        lightblue: '#E2EAFB',
      },
    },
  },
  plugins: [],
}