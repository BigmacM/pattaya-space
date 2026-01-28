/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Turquoise
        turquoise: {
          DEFAULT: '#0F3D3E',
          900: '#0A2A2B',
          800: '#0F3D3E',
          700: '#145253',
          600: '#1A6769',
          500: '#1F7C7E',
        },
        // Background - Charcoal/Gunmetal
        charcoal: {
          DEFAULT: '#222831',
          900: '#1A1F26',
          800: '#222831',
          700: '#2D343F',
          600: '#393E46',
          500: '#454B55',
        },
        gunmetal: {
          DEFAULT: '#393E46',
          600: '#393E46',
          500: '#454B55',
          400: '#525964',
        },
        // Accent - Cyan/Teal
        cyan: {
          DEFAULT: '#00ADB5',
          glow: '#00FFF5',
          900: '#006B70',
          800: '#008B91',
          700: '#00ADB5',
          600: '#00C9D2',
          500: '#00E5EF',
          400: '#00FFF5',
        },
        // Text - Silver/Off-white
        silver: {
          DEFAULT: '#EEEEEE',
          100: '#EEEEEE',
          200: '#D1D1D1',
          300: '#A0A0A0',
          400: '#6B7280',
          500: '#4B5563',
        },
      },
      fontFamily: {
        // Editorial serif for headlines
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        // Clean sans for body
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Monospace for technical/prices
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 30px rgba(0, 173, 181, 0.4)',
        'glow-lg': '0 0 50px rgba(0, 173, 181, 0.5)',
        'glow-cyan': '0 0 40px rgba(0, 255, 245, 0.3)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(0, 173, 181, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(0, 255, 245, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '12px',
        'nav': '20px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
