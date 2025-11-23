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
              // Hauptfarben - Grün & Blau
              brandGreen: '#6bb536',      // Hauptfarbe
              brandBlue: '#214b96',       // Sekundärfarbe
              brandGold: '#DAA520',       // Nur für Logo & CTA
              
              // Alte Gummy-Farben für Kompatibilität (mapped zu neuen Farben)
              gummyGreen: '#6bb536',      // Hauptfarbe
              gummyBlue: '#214b96',       // Sekundärfarbe
              gummyRed: '#6bb536',        // → Grün
              gummyOrange: '#6bb536',     // → Grün
              gummyYellow: '#DAA520',     // Gold
              gummyPurple: '#214b96',     // → Blau
              
              // Backgrounds
              candyWhite: '#FFF8F0',
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