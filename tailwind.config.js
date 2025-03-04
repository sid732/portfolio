
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a1625',
        secondary: '#2d2b3d',
        accent: '#6e56cf',
        'dark-text': '#ffffff',
        'light-text': '#1a1625',
        'dark-bg': '#1a1625',
        'light-bg': '#ffffff',
      },
      backgroundColor: {
        dark: '#1a1625',
        light: '#ffffff',
      },
      textColor: {
        dark: '#ffffff',
        light: '#1a1625',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}