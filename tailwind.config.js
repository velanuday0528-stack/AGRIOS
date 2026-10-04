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
        agrios: {
          dark: '#060F09',
          card: '#0B1710',
          panel: '#0E1F16',
          border: 'rgba(52, 211, 153, 0.15)',
          forest: '#0A2417',
          emerald: '#10B981',
          lime: '#84CC16',
          limeGlow: '#A3E635',
          gold: '#EAB308',
          goldLight: '#FDE047',
          cream: '#F4F7F4',
          offwhite: '#E6EFE8',
          muted: '#8A9E91',
          slate: '#1E2D24',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'data-stream': 'dataStream 2s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 0.9, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.4, filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))' },
          '50%': { opacity: 0.8, filter: 'drop-shadow(0 0 16px rgba(132, 204, 22, 0.5))' },
        },
        dataStream: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(ellipse at 50% -20%, rgba(16, 185, 129, 0.25), transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
        'card-gradient': 'linear-gradient(180deg, rgba(14, 31, 22, 0.7) 0%, rgba(11, 23, 16, 0.95) 100%)',
      }
    },
  },
  plugins: [],
}
