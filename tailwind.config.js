/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'apple-gray': '#1d1d1f',
        'apple-gray-light': '#86868b',
        'apple-blue': '#007aff',
        'apple-bg': '#f5f5f7',
        'booboo-red': '#ff6b6b',
        'booboo-dot': '#ffbaba',
        'booboo-hover': '#ffecec',
        'bg-section': 'var(--color-bg-section)',
        'feature-icon': 'var(--color-feature-icon)',
        'text-muted': 'var(--color-text-muted)',
        'dot-active': 'var(--color-dot-active)',
        'dot-inactive': 'var(--color-dot-inactive)',
        'arrow': 'var(--color-arrow)',
        'arrow-hover': 'var(--color-arrow-hover)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};