'use client'

import { motion } from 'motion/react'
import { Project } from '@/lib/projects-data'

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
  className?: string
  /** For bento hero card: wider aspect ratio */
  hero?: boolean
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

const TECH_LABELS: Record<string, string> = {
  react: 'React',
  nextjs: 'Next.js',
  'react-native': 'React Native',
  flutter: 'Flutter',
}

export function ProjectCard({ project, onClick, className = '', hero = false }: ProjectCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease }}
      onClick={() => onClick(project)}
      className={`relative overflow-hidden rounded-2xl w-full text-left cursor-pointer group ${className}`}
      style={{
        background: project.accentColor || 'linear-gradient(135deg, #111827 0%, #0b101a 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        minHeight: hero ? '320px' : '200px',
        display: 'block',
      }}
    >
      {/* Placeholder image area */}
      <div
        className="absolute inset-0"
        style={{
          background: project.accentColor || 'linear-gradient(135deg, #111827 0%, #0b101a 100%)',
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px)',
        }}
      />

      {/* Bottom gradient for text legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
        }}
      />

      {/* Hover accent overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(255,184,0,0.04)' }}
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p
          className="text-base font-semibold mb-2 leading-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {project.name}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(255,184,0,0.15)',
                color: 'var(--color-accent)',
                border: '1px solid rgba(255,184,0,0.25)',
              }}
            >
              {TECH_LABELS[t] ?? t}
            </span>
          ))}
        </div>
      </div>

      {/* Gold corner accent (hero only) */}
      {hero && (
        <div
          className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
          style={{ borderColor: 'var(--color-accent)' }}
        />
      )}
    </motion.button>
  )
}
