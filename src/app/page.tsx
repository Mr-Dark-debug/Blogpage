"use client";

import { FlickeringGrid } from '@/components/ui/flickering-grid'
import ASCIIText from '@/components/ui/ASCIIText'

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
          <div className="h-[200px] relative mb-8">
            <ASCIIText
              text="Syntax"
              asciiFontSize={8}
              textFontSize={120}
              textColor="#9CA3AF"
              planeBaseHeight={8}
              enableWaves={true}
            />
          </div>
          <span className="text-[#F59E0B] text-6xl font-bold">&</span>
          <div className="h-[200px] relative mt-8">
            <ASCIIText
              text="Sips"
              asciiFontSize={8}
              textFontSize={120}
              textColor="#9CA3AF"
              planeBaseHeight={8}
              enableWaves={true}
            />
          </div>
        </div>
      </div>
    </main>
  )
} 