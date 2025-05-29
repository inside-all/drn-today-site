import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ClientLayoutWrapper } from '@/components/layout/ClientLayoutWrapper'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DRN.today – The Dynamic Resource Network™',
  description: 'The future of freelancing. Built with code. Powered by intelligence.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('relative min-h-screen bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientLayoutWrapper>
            <main className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="backdrop-blur-2xl bg-white/10 dark:bg-black/20 rounded-3xl shadow-xl border border-white/10 p-6 sm:p-10">
                {children}
              </div>
            </main>
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
