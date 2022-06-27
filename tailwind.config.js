/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      fontFamily: {
        sans: 'Roboto'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015f43',
        },
        blue: {
           500: '#81D8F7', 
        },
        orage: {
          500: '#fba94c',
        },
        red: {
          500: '#f75a68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        }
      },
    },
  },
  plugins: [],
}
