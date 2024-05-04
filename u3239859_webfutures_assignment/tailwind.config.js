/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      textColor: {
        'green': "#00C03B"
      },
      colors: {
        colordark: 'rgb(9 9 11)',
        colorlight: 'rgb(228 228 231)',
      },
      backgroundImage: theme => ({
        'hero-image': "url(../src/assets/images/hero-background.png)"
      }),
      backgroundSize: {
        "100%": "100%",
        "30%": "30%"
      }
    },
  },
  plugins: [],
}