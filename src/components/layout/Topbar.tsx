'use client'

import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Menu } from 'lucide-react'

export function Topbar() {
  return (
    <div className='flex items-center justify-between px-6 py-4 border-b border-white/10 backdrop-blur-md bg-glass'>
      <div className='text-xl font-orbitron tracking-wider text-primary'>
        DRN<span className='text-white'>.today</span>
      </div>
      <div className='flex items-center gap-4'>
        <ThemeToggle />
        <Menu className='h-6 w-6 text-white md:hidden' />
      </div>
    </div>
  )
}
