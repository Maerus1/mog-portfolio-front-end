module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          1200: '#1b1b1b',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
