import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/lib/theme-provider'
import { Topbar } from '@/components/layout/Topbar'
import { Sidebar } from '@/components/layout/Sidebar'
import { CursorGlow } from '@/components/ui/CursorGlow'
import { BackgroundEffect } from '@/components/ui/BackgroundEffect'

export const metadata: Metadata = {
  title: 'DRN.today – The Dynamic Resource Network',
  description: 'Code. Data. And a Human Network.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-background text-white font-sora'>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <BackgroundEffect />
          <CursorGlow />
          <div className='flex min-h-screen w-full'>
            <Sidebar />
            <div className='flex-1 flex flex-col'>
              <Topbar />
              <main className='flex-1 p-4'>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
