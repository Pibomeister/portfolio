'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Project } from '@/lib/projects-data'
import { ProjectCard } from './project-card'
import { GlowingEffect } from './ui/glowing-effect'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

interface FeaturedBentoProps {
  projects: Project[]
  onCardClick: (project: Project) => void
}

/**
 * Bento layout for 5–6 cards (3-col grid):
 *
 *  ┌─────────────────┬─────────┐
 *  │  Card 1 (hero)  │ Card 2  │  row 1: hero col-span-2, card2 col-span-1
 *  ├────────┬────────┴─────────┤
 *  │ Card 3 │ Card 4  │ Card 5 │  row 2: three equal columns
 *  └────────┴─────────┴────────┘
 *  (Card 6 if present gets its own full-width row)
 */
export function FeaturedBento({ projects, onCardClick }: FeaturedBentoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const [hero, second, ...rest] = projects

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Row 1: hero (col-span-2) + second card */}
      {hero && (
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div className="relative h-full rounded-2xl">
            <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
            <ProjectCard project={hero} onClick={onCardClick} hero />
          </div>
        </motion.div>
      )}

      {second && (
        <motion.div
          className="md:col-span-1 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          <div className="relative flex flex-col h-full rounded-2xl">
            <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
            <ProjectCard project={second} onClick={onCardClick} className="flex-1" />
          </div>
        </motion.div>
      )}

      {/* Row 2: up to 3 cards, each col-span-1 */}
      {rest.slice(0, 3).map((project, i) => (
        <motion.div
          key={project.id}
          className="md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16 + i * 0.08, ease }}
        >
          <div className="relative h-full rounded-2xl">
            <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
            <ProjectCard project={project} onClick={onCardClick} />
          </div>
        </motion.div>
      ))}

      {/* Row 3: 6th card if present (FinLedger), spans full width, 30% taller */}
      {rest[3] && (
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease }}
        >
          <div className="relative h-full rounded-2xl">
            <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
            <ProjectCard project={rest[3]} onClick={onCardClick} tall />
          </div>
        </motion.div>
      )}
    </div>
  )
}
