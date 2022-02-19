module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        grandslang: ['Grandslang roman', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        silka_medium: ['Silka Medium'],
        silka_regular: ['Silka Regular'],
        poppins: ['Poppins']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
