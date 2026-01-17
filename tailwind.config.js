/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'rif-blue': '#5D8AA8',
        'rif-offwhite': '#F9F9F7',
        'rif-charcoal': '#1A1A1B',
        'rif-green': '#7E8C6D',
        'rif-rust': '#B25B3C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
