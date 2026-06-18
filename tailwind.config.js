/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2F1D",    // Dark Green
        secondary: "#1E5631",  // Green Accent
        accent: "#FFB085",     // Peach Button/CTA
        light: "#FFDAB9",      // Distinct Peach background
        dark: "#111827",       // Dark text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'slow-pan': {
          '0%': { objectPosition: 'center top' },
          '100%': { objectPosition: 'center bottom' },
        }
      },
      animation: {
        'slow-pan': 'slow-pan 20s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}
