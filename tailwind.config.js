/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E63946',
        'brand-black': '#1A1A1A',
        'brand-white': '#FFFFFF',
        'brand-light': '#F8F9FA',
        'brand-dark': '#0F0F0F',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(230, 57, 70, 0.3)',
        'glow-lg': '0 0 60px rgba(230, 57, 70, 0.4)',
        'soft': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-fire': 'linear-gradient(135deg, #E63946 0%, #1A1A1A 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(230, 57, 70, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(230, 57, 70, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
    },
  },
  plugins: [],
}
