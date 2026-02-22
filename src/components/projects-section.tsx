'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { FEATURED, ALL_PROJECTS, type Project, type TechFilter } from '@/lib/projects-data'
import { FeaturedBento } from './featured-bento'
import { ProjectFilterBar } from './project-filter-bar'
import { AllProjectsMasonry } from './all-projects-masonry'
import { ProjectDialog } from './project-dialog'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [filter, setFilter] = useState<TechFilter | 'all'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative py-24 md:py-36 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Watermark */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none"
        >
          <span
            className="text-[20vw] font-extrabold leading-none tracking-tighter"
            style={{ color: 'rgba(255,255,255,0.012)', userSelect: 'none' }}
          >
            WORK
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          {/* Section header */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Work that{' '}
              <span style={{ color: 'var(--color-accent)' }}>ships.</span>
            </motion.h2>
          </div>

          {/* Featured bento */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mb-16"
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Featured
            </p>
            <FeaturedBento projects={FEATURED} onCardClick={setSelectedProject} />
          </motion.div>

          {/* Divider + filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="mb-12"
          >
            <div
              className="w-full h-px mb-10"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            />
            <ProjectFilterBar active={filter} onChange={setFilter} />
          </motion.div>

          {/* All projects masonry */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              All Projects
            </p>
            <AllProjectsMasonry
              projects={ALL_PROJECTS}
              filter={filter}
              onCardClick={setSelectedProject}
            />
          </motion.div>
        </div>
      </section>

      {/* Dialog — outside section to overlay everything */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
