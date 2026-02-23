'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { FEATURED, ALL_PROJECTS, type Project, type TechFilter } from '@/lib/projects-data'
import { FeaturedBento } from './featured-bento'
import { ProjectFilterBar } from './project-filter-bar'
import { AllProjectsMasonry } from './all-projects-masonry'
import { ProjectDialog } from './project-dialog'
import { WordReveal, FadeUp, RevealLine } from './scroll-reveal'

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
        {/* Watermark — drifts in from left */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 1.6, ease }}
          className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none"
        >
          <span
            className="text-[20vw] font-extrabold leading-none tracking-tighter"
            style={{ color: 'rgba(255,255,255,0.012)', userSelect: 'none' }}
          >
            WORK
          </span>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          {/* Section header */}
          <div className="mb-16">
            <FadeUp delay={0.05} distance={12}>
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Projects
              </p>
            </FadeUp>
            <WordReveal
              text="Work that ships."
              as="h2"
              delay={0.1}
              stagger={0.08}
              className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
              wordClassName="text-3xl md:text-4xl font-bold"
            />
          </div>

          {/* Featured bento */}
          <FadeUp delay={0.15} className="mb-2">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Featured
            </p>
          </FadeUp>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-16"
          >
            <FeaturedBento projects={FEATURED} onCardClick={setSelectedProject} />
          </motion.div>

          {/* Divider + filter bar */}
          <div className="mb-12">
            <RevealLine delay={0.1} className="w-full mb-10" color="rgba(255,255,255,0.06)" />
            <FadeUp delay={0.15}>
              <ProjectFilterBar active={filter} onChange={setFilter} />
            </FadeUp>
          </div>

          {/* All projects masonry */}
          <FadeUp delay={0.1}>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              All Projects
            </p>
          </FadeUp>
          <AllProjectsMasonry
            projects={ALL_PROJECTS}
            filter={filter}
            onCardClick={setSelectedProject}
          />
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
