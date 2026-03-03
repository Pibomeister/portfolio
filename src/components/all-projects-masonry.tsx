'use client'

import { motion, AnimatePresence, useInView } from 'motion/react'
import { useRef } from 'react'
import { Project, TechFilter } from '@/lib/projects-data'
import { ProjectCard } from './project-card'
import { GlowingEffect } from './ui/glowing-effect'

interface AllProjectsMasonryProps {
  projects: Project[]
  filter: TechFilter | 'all'
  onCardClick: (project: Project) => void
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function AllProjectsMasonry({ projects, filter, onCardClick }: AllProjectsMasonryProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const filtered =
    filter === 'all' ? projects : projects.filter(p => p.tech.includes(filter))

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              className="relative rounded-2xl"
            >
              <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <ProjectCard project={project} onClick={onCardClick} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          No projects for this filter yet.
        </motion.p>
      )}
    </div>
  )
}
