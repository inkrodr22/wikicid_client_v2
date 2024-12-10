/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        custom: '0 4px 10px -5px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-out': {
          from: { transform: 'translateX(0)', display: 'block' },
          to: { transform: 'translateX(-100%)', display: 'none' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 500ms ease-in-out',
        'slide-in':
          'slide-in 500ms both cubic-bezier(0, 0.6, 0.32, 1.06) 200ms',
        'slide-out': 'slide-out 250ms ease-in',
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      colors: {
        'blue-primary-text': '#02457A',
        'blue-primary': '#355471',
        'blue-secondary': '#02457A',
        'blue-medium': '#018ABE',
        'blue-light': '#97CADB',
        'blue-lighter': '#D6E7EE',
        'blue-hover': 'rgba(155, 204, 221, 0.30)',
        'blue-links': '#1D4ED8',
        'black-text': '#373937',
        'black-text-secondary': '#424242',
        'green-success': '#84CC16',
        'red-error': '#DC2626',
        gray: '#FFF',
        'gray-disabled': '#CBD5E1',
        'gray-lighter': '#F8F8F8',
        'gray-white': '#F4F4F4',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
