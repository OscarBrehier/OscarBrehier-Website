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
        poppins: ['Poppins'],
        utopia: ['utopia-std-display'],
        spacegrotesk: ['Space Grotesk'],
        syne: ['Syne'],
        domain_display: ['Domaine Display'],
        editorial_new: ['Editorial New'],
        canopee: ['Canopee'],
        cantebury: 'Cantebury',
        sf_display: ['SF Pro Display']
      },
      colors: {
        'amazing-blue': '#84e7ff',
        'amazing-green': '#7af0ae',
        'amazing-yellow': '#ffef80',
        'amazing-pink': '#ffc3e5',
        'beige': '#cdc6be',
        'gray': '#1c1c19'
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
