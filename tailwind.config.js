/** @type {import('tailwindcss').Config} */
export default {
  // Files to scan for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // Enable dark mode with class strategy
  darkMode: 'class',

  theme: {
    extend: {
      // Custom color palette
      colors: {
        dark: {
          bg: '#1a1625',
          card: '#1e1e1e',
          header: '#2d2d2d',
          text: '#ffffff',
          muted: '#9ca3af'
        },
        light: {
          bg: '#ffffff',
          card: '#f3f4f6',
          header: '#e5e7eb',
          text: '#1f2937',
          muted: '#6b7280'
        },
        primary: {
          DEFAULT: '#a855f7',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87'
        },
        gradient: {
          start: '#ff2764',
          end: '#00d0ff'
        }
      },

      // Custom animations
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out'
      },

      // Animation keyframes
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(20px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          }
        }
      },

      // Additional utilities
      transitionDuration: {
        '2000': '2000ms'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },

  // Add any Tailwind plugins here
  plugins: []
}