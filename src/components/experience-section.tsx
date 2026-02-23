'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { WORK_ENTRIES, ACHIEVEMENTS } from '@/lib/experience-data'
import { TimelineEntry } from './timeline-entry'
import { AchievementCard } from './achievement-card'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-5%' })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-start pl-8 pointer-events-none select-none"
      >
        <span
          className="text-[20vw] font-extrabold leading-none tracking-tighter"
          style={{ color: 'rgba(255,255,255,0.012)', userSelect: 'none' }}
        >
          CV
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
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Where I&apos;ve{' '}
            <span style={{ color: 'var(--color-accent)' }}>built things.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mb-24 max-w-2xl">
          {/* Animated vertical gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute left-0 top-2 bottom-0 w-px origin-top"
            style={{
              background:
                'linear-gradient(to bottom, var(--color-accent), rgba(255,184,0,0.1))',
            }}
          />

          {/* Entries */}
          {WORK_ENTRIES.map((entry, i) => (
            <TimelineEntry
              key={entry.id}
              entry={entry}
              index={i}
              isInView={timelineInView}
            />
          ))}
        </div>

        {/* Achievements grid */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Key Achievements
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((achievement, i) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
