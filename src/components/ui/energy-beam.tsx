'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface EnergyBeamProps {
  projectId?: string
  className?: string
}

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => void
    }
  }
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({
  projectId = 'hRFfUymDGOHwtFe7evR2',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Parallax: the inner layer moves at ~40 % of the scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  useEffect(() => {
    if (scriptLoadedRef.current) return

    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js'
    script.async = true

    script.onload = () => {
      scriptLoadedRef.current = true
      if (window.UnicornStudio && containerRef.current) {
        window.UnicornStudio.init()
      }
    }

    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [projectId])

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* Parallax inner — taller than container so it has room to travel */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[15%] h-[130%]"
      >
        <div
          data-us-project={projectId}
          className="w-full h-full"
        />
      </motion.div>

      {/* Top fade: page bg → transparent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 md:h-48 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-background) 0%, transparent 100%)',
        }}
      />

      {/* Bottom fade: transparent → page bg */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 md:h-48 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, var(--color-background) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}

export default EnergyBeam
