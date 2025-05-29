import { type Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00FFE0',
        secondary: '#0F172A',
        accent: '#38BDF8',
        background: '#000000',
        glass: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
