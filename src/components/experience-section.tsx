'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { WORK_ENTRIES, ACHIEVEMENTS } from '@/lib/experience-data'
import { TimelineEntry } from './timeline-entry'
import { AchievementCard } from './achievement-card'
import { WordReveal, FadeUp, StaggerContainer, StaggerItem } from './scroll-reveal'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-5%' })

  const achievementsRef = useRef<HTMLDivElement>(null)
  const achievementsInView = useInView(achievementsRef, { once: true, margin: '-10%' })

  return (
    <section
      id="experience"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        {/* Section header */}
        <div className="mb-16">
          <FadeUp delay={0.05} distance={12}>
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Experience
            </p>
          </FadeUp>
          <div>
            <WordReveal
              text="Where I've"
              as="h2"
              delay={0.1}
              stagger={0.08}
              className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
              wordClassName="text-3xl md:text-4xl font-bold"
            />
            <WordReveal
              text="built things."
              as="h2"
              delay={0.22}
              stagger={0.08}
              className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
              wordClassName="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--color-accent)' } as React.CSSProperties}
            />
          </div>
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
                'linear-gradient(to bottom, var(--color-accent), rgba(255,212,59,0.1))',
              boxShadow: '0 0 6px rgba(255,212,59,0.3)',
            }}
          />

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
        <div ref={achievementsRef}>
          <FadeUp delay={0.05}>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Key Achievements
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((achievement, i) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={i}
                isInView={achievementsInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
