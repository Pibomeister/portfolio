'use client'

import dynamic from 'next/dynamic'
import { memo, useEffect, useState } from 'react'

const HeroFuturistic = dynamic(
  () => import('./hero-futuristic').then((mod) => mod.HeroFuturistic),
  { ssr: false }
)

// memo prevents parent re-renders (e.g. useInView in ExperienceSection)
// from propagating into the Canvas and killing the WebGPU frame loop
export const HeroFuturisticWrapper = memo(function HeroFuturisticWrapper() {
  const [supportsWebGPU, setSupportsWebGPU] = useState<boolean | null>(null)

  useEffect(() => {
    setSupportsWebGPU('gpu' in navigator)
  }, [])

  // Loading state
  if (supportsWebGPU === null) {
    return (
      <div className="w-full h-full bg-[var(--color-background)] overflow-hidden" />
    )
  }

  // Fallback gradient when WebGPU unavailable
  if (!supportsWebGPU) {
    return (
      <div
        className="w-full h-full overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, rgba(255,212,59,0.12), transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(232,114,12,0.08), transparent 60%), var(--color-surface)',
        }}
      />
    )
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Crystal sphere container */}
      <div
        className="relative aspect-square"
        style={{ width: '85%', maxWidth: '500px' }}
      >
        {/* Outer glow */}
        <div
          className="absolute inset-[-12%] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255,180,50,0.08) 0%, rgba(255,120,20,0.04) 40%, transparent 70%)',
          }}
        />

        {/* Sphere body — clips the WebGPU canvas */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{
            boxShadow:
              'inset 0 0 60px 10px rgba(0,0,0,0.6), 0 0 40px 2px rgba(255,170,50,0.1), 0 0 80px 4px rgba(255,120,20,0.06)',
          }}
        >
          <HeroFuturistic />

          {/* Glass specular highlight — top-left */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 50% 40% at 32% 28%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)',
            }}
          />

          {/* Rim light — edge highlight */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, transparent 42%, rgba(255,200,100,0.07) 48%, rgba(255,180,60,0.04) 50%, transparent 52%)',
            }}
          />

          {/* Inner shadow for depth/curvature */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow:
                'inset 0 -20px 40px rgba(0,0,0,0.5), inset 0 20px 40px rgba(255,255,255,0.03)',
            }}
          />
        </div>

        {/* Glass border ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: '1px solid rgba(255,200,120,0.1)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)',
          }}
        />
      </div>
    </div>
  )
})
