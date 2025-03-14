/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285F4',
          red: '#DB4437',
          yellow: '#F4B400',
          green: '#0F9D58',
          gray: '#666666'
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'border-width': 'border-width 3s infinite alternate',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'textPulse': 'textPulse 2s infinite',
        'borderFlicker': 'borderFlicker 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'background-shine': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' }
        },
        'border-width': {
          from: { borderWidth: '4px' },
          to: { borderWidth: '8px' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        textPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        },
        borderFlicker: {
          '0%, 100%': { borderColor: 'var(--neon-pink)' },
          '50%': { borderColor: 'transparent' }
        }
      },
    },
  },
  plugins: [],
};