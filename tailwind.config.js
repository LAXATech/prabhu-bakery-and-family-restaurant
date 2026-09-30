/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EF', // main warm cream background
          200: '#F4ECE0',
          300: '#E6D7C3',
        },
        brown: {
          900: '#2A170E',
          800: '#3B2418', // main chocolate brown text
          700: '#523423',
          600: '#6C4834',
          500: '#8A6249',
          400: '#AE866E',
          200: '#DFCABE',
          100: '#F2EAE4',
          50: '#FAF7F5',
        },
        caramel: {
          DEFAULT: '#D98E32', // primary accent
          hover: '#C47A22',
          light: '#FBF2E4',
          dark: '#9F6216',
        },
        tomato: {
          DEFAULT: '#C8402E', // highlights
          hover: '#B13121',
          light: '#FCECE9',
        },
        veg: {
          DEFAULT: '#16A34A',
          border: '#15803D',
          bg: '#F0FDF4',
        },
        nonveg: {
          DEFAULT: '#B91C1C',
          border: '#991B1B',
          bg: '#FEF2F2',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Poppins"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'card': '14px',
        'btn': '12px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(59, 36, 24, 0.06)',
        'soft-md': '0 6px 24px -2px rgba(59, 36, 24, 0.08)',
        'soft-lg': '0 12px 32px -4px rgba(59, 36, 24, 0.12)',
      }
    },
  },
  plugins: [],
}
