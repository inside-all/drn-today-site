// src/app/layout.tsx
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { CursorGlow } from '@/components/ui/CursorGlow'
import { BackgroundEffect } from '@/components/ui/BackgroundEffect'
import { Metadata } from 'next'
import { MotionConfig, AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DRN.today – The Dynamic Resource Network™',
  description: 'The future of freelancing. Built with code. Powered by intelligence.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('relative min-h-screen bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionConfig reducedMotion="user">
            <AnimatePresence mode="wait">
              <CursorGlow />
              <BackgroundEffect />
              <main className="relative z-10 p-4 sm:p-6 md:p-8">
                <div className="backdrop-blur-2xl bg-white/10 dark:bg-black/20 rounded-3xl shadow-xl border border-white/10 p-6 sm:p-10">
                  {children}
                </div>
              </main>
            </AnimatePresence>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
