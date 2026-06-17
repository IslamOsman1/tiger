/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif']
      },
      colors: {
        tiger: {
          50: '#fff9db',
          100: '#fff1a8',
          200: '#ffe066',
          300: '#ffd43b',
          400: '#fcc419',
          500: '#f59f00',
          600: '#e67700',
          700: '#b86200',
          800: '#854d0e',
          900: '#452a03'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(245, 159, 0, 0.25)'
      },
      backgroundImage: {
        'tiger-gradient': 'linear-gradient(135deg, #0b0b0b 0%, #191919 45%, #f59f00 140%)'
      }
    }
  },
  plugins: []
};
