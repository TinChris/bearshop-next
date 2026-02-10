/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
              // Brand Colors
              brandGreen: '#78B833',
              brandBlue: '#2E4185',
              brandRed: '#D93742',
              brandLightBlue: '#D0ECE7',
              brandBeige: '#FBF5EF',
              brandGold: '#DAA520',

              // Aliases für Kompatibilität
              gummyGreen: '#78B833',
              gummyBlue: '#2E4185',
              gummyRed: '#D93742',
              gummyOrange: '#78B833',
              gummyYellow: '#DAA520',
              gummyPurple: '#2E4185',

              // Backgrounds
              candyWhite: '#FBF5EF',
              nightBlue: '#1E2A38',
            },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}