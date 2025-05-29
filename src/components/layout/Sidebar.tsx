'use client'

import { Home, Terminal, Wrench, Briefcase, Mail } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Tools', icon: Wrench, href: '/tools' },
  { name: 'Terminal', icon: Terminal, href: '/terminal' },
  { name: 'Portfolio', icon: Briefcase, href: '/portfolio' },
  { name: 'Contact', icon: Mail, href: '/contact' },
]

export function Sidebar() {
  return (
    <aside className='hidden md:flex flex-col p-4 w-20 bg-glass backdrop-blur-lg border-r border-white/10 space-y-6'>
      {navItems.map((item) => (
        <Link href={item.href} key={item.name} title={item.name}>
          <item.icon className='text-white hover:text-primary transition h-6 w-6 mx-auto' />
        </Link>
      ))}
    </aside>
  )
}
