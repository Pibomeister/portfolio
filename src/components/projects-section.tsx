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
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          {/* Section header — editorial counter layout */}
          <div className="flex items-baseline gap-6 mb-16">
            {/* Large counter */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              aria-hidden
              className="text-[7rem] md:text-[9rem] font-bold leading-none select-none shrink-0"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'rgba(255, 184, 0, 0.12)',
                lineHeight: 1,
              }}
            >
              03
            </motion.span>

            {/* Heading beside it */}
            <div className="flex flex-col gap-2 pb-2">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: 'var(--color-accent)' }}
              >
                Projects
              </motion.p>
              <WordReveal
                text="Work that ships."
                as="h2"
                delay={0.15}
                stagger={0.08}
                className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
                wordClassName="text-3xl md:text-4xl font-bold"
              />
            </div>
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
