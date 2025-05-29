"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState<[number, number]>([0, 0])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition([e.clientX, e.clientY])
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  const [px, py] = position

  return (
    <div
      className='pointer-events-none fixed top-0 left-0 z-50 h-48 w-48 rounded-full bg-primary opacity-20 blur-2xl transition-transform duration-300'
      style={{
        transform: `translate(${px}px, ${py}px)`,
      }}
    />
  )
}
