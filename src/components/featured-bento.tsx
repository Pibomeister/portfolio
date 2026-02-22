'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Project } from '@/lib/projects-data'
import { ProjectCard } from './project-card'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

interface FeaturedBentoProps {
  projects: Project[]
  onCardClick: (project: Project) => void
}

export function FeaturedBento({ projects, onCardClick }: FeaturedBentoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const [hero, ...rest] = projects

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Hero card: spans both columns on md+ */}
      {hero && (
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <ProjectCard project={hero} onClick={onCardClick} hero />
        </motion.div>
      )}

      {/* Remaining 3 cards in a row */}
      {rest.slice(0, 3).map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease }}
        >
          <ProjectCard project={project} onClick={onCardClick} />
        </motion.div>
      ))}
    </div>
  )
}
