'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

export function BackgroundEffect() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: 'transparent' },
        particles: {
          color: { value: '#00FFE0' },
          links: { enable: true, color: '#00FFE0', distance: 100 },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
        },
      }}
    />
  )
}
