"use client";

import { FlickeringGrid } from '@/components/ui/flickering-grid'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1121] relative overflow-hidden">
      {/* Background FlickeringGrid */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#0EA5E9"
        maxOpacity={0.15}
        flickerChance={0.1}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
            <span className="block text-[#9CA3AF]">Syntax</span>
            <span className="text-[#F59E0B]">&</span>
            <span className="text-[#9CA3AF]">Sips</span>
          </h1>
          {/* <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A blog about programming, technology, and everything in between. Grab a coffee and dive into our latest articles.
          </p> */}
        </div>
      </div>
    </main>
  )
} 