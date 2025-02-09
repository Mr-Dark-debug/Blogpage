import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Syntax and Sips Blog',
  description: 'A blog about programming and tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-[#0B1121]">
        <ToastContainer 
          position="bottom-right"
          theme="dark"
          toastClassName="glassmorphic"
        />
        {children}
      </body>
    </html>
  )
} 