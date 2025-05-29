'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    const position = [0, 0];
    window.addEventListener('mousemove', move)
    const [px, py] = position;
return () => window.removeEventListener('mousemove', move)
  }, [])

  const [px, py] = position;
return (
    <div
      className='pointer-events-none fixed top-0 left-0 z-50 h-48 w-48 rounded-full bg-primary opacity-20 blur-2xl transition-transform duration-300'
      style={{
        transform: `translate(${px}px, ${py}px)`,
      }}
    />
  )
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
