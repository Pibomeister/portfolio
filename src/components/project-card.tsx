'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Project } from '@/lib/projects-data'

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
  className?: string
  /** For bento hero card: wider aspect ratio */
  hero?: boolean
  /** For full-width bento row (e.g. FinLedger): 30% taller min-height */
  tall?: boolean
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

const TECH_LABELS: Record<string, string> = {
  react: 'React',
  nextjs: 'Next.js',
  'react-native': 'React Native',
  flutter: 'Flutter',
}

const CARD_LOGO_SIZES = { sm: 24, md: 32, lg: 48 } as const

export function ProjectCard({ project, onClick, className = '', hero = false, tall = false }: ProjectCardProps) {
  const hasImage = Boolean(project.images[0])
  const hasWideVariant = Boolean(project.imageWide)
  const logoSizePx =
    project.logoSize
      ? CARD_LOGO_SIZES[project.logoSize]
      : hero || tall
        ? 48
        : 32

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
        minHeight: hero ? '320px' : tall ? '260px' : '200px',
      }}
    >
      {hasImage ? (
        <div className="absolute inset-0">
          {hasWideVariant ? (
            <>
              <Image
                src={project.images[0]}
                alt={`${project.name} preview`}
                fill
                className="object-cover md:hidden"
                sizes="100vw"
              />
              <Image
                src={project.imageWide!}
                alt={`${project.name} preview`}
                fill
                className="object-cover hidden md:block"
                sizes={hero ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
              />
            </>
          ) : (
            <Image
              src={project.images[0]}
              alt={`${project.name} preview`}
              fill
              className="object-cover"
              sizes={hero ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
            />
          )}
        </div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: project.accentColor || 'linear-gradient(135deg, #111827 0%, #0b101a 100%)',
          }}
        />
      )}

      {/* Keep the grid texture only for gradient placeholder cards */}
      {!hasImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px)',
          }}
        />
      )}

      {/* Very subtle palette gradient overlay */}
      {project.colorPalette && project.colorPalette.length >= 2 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.colorPalette[0]} 0%, ${project.colorPalette[Math.min(1, project.colorPalette.length - 1)]} 50%, ${project.colorPalette[project.colorPalette.length - 1]} 100%)`,
            opacity: 0.04,
          }}
        />
      )}

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
        style={{ background: 'rgba(255,212,59,0.04)' }}
      />

      {/* Content — unified backdrop, width fits content */}
      <div className="absolute left-5 bottom-5">
        <div
          className="w-fit rounded-xl p-4"
          style={{
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {project.logo && (
            <div
              className="relative shrink-0 mb-2"
              style={{
                width: project.logoWide ? logoSizePx * 3 : logoSizePx,
                height: logoSizePx,
              }}
            >
              <Image
                src={project.logo}
                alt=""
                fill
                className="object-contain object-left"
                sizes={`${project.logoWide ? logoSizePx * 3 : logoSizePx}px`}
              />
            </div>
          )}
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
                  background: 'rgba(255,212,59,0.15)',
                  color: 'var(--color-accent)',
                  border: '1px solid rgba(255,212,59,0.25)',
                }}
              >
                {TECH_LABELS[t] ?? t}
              </span>
            ))}
          </div>
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
