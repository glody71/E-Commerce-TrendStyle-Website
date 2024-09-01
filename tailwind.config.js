/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Kumbh Sans'
    },
    extend: {
      colors: {
        primary: '#080712',
      },
      backgroundImage: {
        hero: "url(/src/assets/hero-background.jpg)"
      },

    },
  },
  plugins: [],
}

