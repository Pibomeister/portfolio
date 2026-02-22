'use client'

import { motion, AnimatePresence, useInView } from 'motion/react'
import { useRef } from 'react'
import { Project, TechFilter } from '@/lib/projects-data'
import { ProjectCard } from './project-card'

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
      <style>{`
        .masonry-grid { column-count: 1; column-gap: 1rem; }
        @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
        @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
      `}</style>

      <div className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              style={{ breakInside: 'avoid', marginBottom: '1rem', display: 'block' }}
            >
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
