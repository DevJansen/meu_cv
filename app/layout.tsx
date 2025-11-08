import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeScript from '@/components/ThemeScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'J.J - Portifólio',
  description: 'Portifólio de Jhonata Jansen, Desenvolvedor Back End.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/JJ.svg" />
        <link rel="apple-touch-icon" href="/JJ.svg" />
        <link rel="shortcut icon" href="/JJ.svg" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}