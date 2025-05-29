'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='bg-white/10 p-2 rounded-full backdrop-blur hover:bg-white/20 transition'
      title='Toggle theme'
    >
      {theme === 'dark' ? <Sun className='h-5 w-5 text-yellow-400' /> : <Moon className='h-5 w-5 text-sky-600' />}
    </button>
  )
}
