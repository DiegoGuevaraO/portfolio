import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import NavBar from './ui/navbar/NavBar'
import Footer from './ui/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Diego Guevara | %s',
    default: 'Diego Guevara',
  },
  description: 'Diego Guevara Curriculum Vitae.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div id='main-layout' className="flex flex-col min-h-screen bg-back text-main">
        <NavBar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
