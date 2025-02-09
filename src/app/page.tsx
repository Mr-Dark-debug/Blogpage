"use client";

import { FlickeringGrid } from '@/components/ui/flickering-grid'
import CustomButton from '@/components/ui/custom-button'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'

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
        <div className="text-center px-4 space-y-8">
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
              }}
              className="block text-[#9CA3AF]"
            >
              Syntax
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 0.3,
              }}
              className="text-[#F59E0B]"
            >
              &
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="last"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 0.6,
              }}
              className="block text-[#9CA3AF]"
            >
              Sips
            </VerticalCutReveal>
          </h1>
          <div className="flex justify-center">
            <CustomButton />
          </div>
        </div>
      </div>
    </main>
  )
} 