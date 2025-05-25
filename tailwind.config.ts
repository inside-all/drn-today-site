import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f0ff',
        neonGreen: '#00ff9d',
        glassDark: 'rgba(0,0,0,0.3)',
        glassLight: 'rgba(255,255,255,0.1)'
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}

export default config
