'use client'

import { motion } from 'motion/react'
import { FILTERS, TechFilter } from '@/lib/projects-data'

interface ProjectFilterBarProps {
  active: TechFilter | 'all'
  onChange: (filter: TechFilter | 'all') => void
}

export function ProjectFilterBar({ active, onChange }: ProjectFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {FILTERS.map(f => {
        const isActive = active === f.id
        return (
          <motion.button
            key={f.id}
            onClick={() => onChange(f.id)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
            style={{
              background: isActive ? 'var(--color-accent)' : 'rgba(255,255,255,0.04)',
              color: isActive ? 'var(--color-background)' : 'var(--color-text-secondary)',
              border: isActive
                ? '1px solid var(--color-accent)'
                : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {f.label}
          </motion.button>
        )
      })}
    </div>
  )
}
