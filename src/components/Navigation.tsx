"use client"

import Link from 'next/link'
import { Home, BookOpen, Settings } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gray-900/50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Syntax & Sips
              </span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </Link>
            <Link
              href="/admin"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              <Settings className="h-4 w-4" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 