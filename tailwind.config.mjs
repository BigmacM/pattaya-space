/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep Emerald Green - Primary
        emerald: {
          900: '#064E3B',
          800: '#065F46',
          700: '#047857',
          600: '#059669',
          500: '#10B981',
        },
        // Warm Wood/Walnut tones
        walnut: {
          900: '#1C1410',
          800: '#2D221B',
          700: '#3D3027',
          600: '#4E3E33',
          500: '#5F4C3F',
          400: '#8B7355',
          300: '#A68B6A',
        },
        // Gold/Brass accents
        brass: {
          600: '#92702B',
          500: '#B8860B',
          400: '#D4A029',
          300: '#E8C547',
          200: '#F5E6A3',
        },
        // Soft Cream/Off-White
        cream: {
          50: '#FFFEF7',
          100: '#FDF8E7',
          200: '#FAF0D4',
          300: '#F5E6BE',
          400: '#E8D5A3',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 30px rgba(184, 134, 11, 0.3)',
        'glow-lg': '0 0 50px rgba(184, 134, 11, 0.4)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(184, 134, 11, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(184, 134, 11, 0.5)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
