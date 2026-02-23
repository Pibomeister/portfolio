'use client'

import { motion } from 'motion/react'
import { WorkEntry } from '@/lib/experience-data'

interface TimelineEntryProps {
  entry: WorkEntry
  index: number
  isInView: boolean
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function TimelineEntry({ entry, index, isInView }: TimelineEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.09, ease }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Gold dot on the timeline line */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full z-10"
        style={{
          background: entry.current ? 'var(--color-accent)' : 'var(--color-surface)',
          border: '2px solid var(--color-accent)',
          transform: 'translateX(-5px)',
          boxShadow: entry.current ? '0 0 10px rgba(255,184,0,0.6)' : 'none',
        }}
      />

      {/* Period + Present badge */}
      <div className="mb-1 flex items-center gap-2 flex-wrap">
        <span
          className="text-[11px] font-semibold tracking-[0.12em] uppercase"
          style={{ color: 'var(--color-accent)' }}
        >
          {entry.period}
        </span>
        {entry.current && (
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(255,184,0,0.15)',
              color: 'var(--color-accent)',
              border: '1px solid rgba(255,184,0,0.3)',
            }}
          >
            Now
          </span>
        )}
      </div>

      {/* Role */}
      <p
        className="text-base font-bold leading-tight mb-0.5"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {entry.role}
      </p>

      {/* Company */}
      <p
        className="text-sm font-medium mb-3"
        style={{ color: 'var(--color-accent)' }}
      >
        {entry.company}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5">
        {entry.tech.map(t => (
          <span
            key={t}
            className="px-2.5 py-0.5 text-[11px] font-medium rounded-full"
            style={{
              background: 'rgba(255,184,0,0.06)',
              border: '1px solid rgba(255,184,0,0.15)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
