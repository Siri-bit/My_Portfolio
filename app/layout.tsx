import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sirisha VL - Software Developer & AI Enthusiast',
  description: 'Portfolio website of Sirisha VL - Software Developer, Full Stack Developer, and AI Enthusiast',
  keywords: ['Sirisha VL', 'Software Developer', 'Full Stack Developer', 'AI Enthusiast', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


