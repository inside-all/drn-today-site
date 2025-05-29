'use client'

import { ReactNode } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { CursorGlow } from '@/components/ui/CursorGlow'
import { BackgroundEffect } from '@/components/ui/BackgroundEffect'

export function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <CursorGlow />
        <BackgroundEffect />
        {children}
      </AnimatePresence>
    </MotionConfig>
  )
}
