import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import NavBar from './ui/NavBar'
import Footer from './ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Diego Guevara - %s',
    default: 'Diego Guevara',
  },
  description: 'Diego Guevara Résumé.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="relative text-gray-800 bg-gray-50">
        <NavBar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
