'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '@/lib/projects-data'
import { getPaletteAccent, hexWithAlpha, isColorDark, lightenHex } from '@/lib/project-utils'

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

const DIALOG_LOGO_SIZES = { sm: 28, md: 40, lg: 56 } as const

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const paletteAccent = project?.colorPalette ? getPaletteAccent(project.colorPalette) : null
  const rawPaletteBase = project?.colorPalette?.[0] ?? null
  const paletteBase =
    rawPaletteBase && project?.lightenDialogBackground
      ? lightenHex(rawPaletteBase, 0.1)
      : rawPaletteBase
  const paletteIsDark = paletteBase ? isColorDark(paletteBase) : false
  const accentNeedsLightText = paletteAccent ? isColorDark(paletteAccent) : false
  const hasImages = (project?.images.length ?? 0) > 0

  // Foreground colors: adapt to dark OR light palette backgrounds
  const fg = paletteBase
    ? paletteIsDark
      ? { primary: '#ffffff', secondary: 'rgba(255,255,255,0.85)', muted: 'rgba(255,255,255,0.7)' }
      : { primary: '#111111', secondary: 'rgba(0,0,0,0.7)', muted: 'rgba(0,0,0,0.5)' }
    : { primary: 'var(--color-text-primary)', secondary: 'var(--color-text-secondary)', muted: 'var(--color-text-secondary)' }
  const [imgIndex, setImgIndex] = useState(0)

  // Reset carousel on project change
  useEffect(() => {
    setImgIndex(0)
  }, [project?.id])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  const prev = useCallback(() => {
    if (!project) return
    const len = Math.max(project.images.length, 1)
    setImgIndex(i => (i - 1 + len) % len)
  }, [project])

  const next = useCallback(() => {
    if (!project) return
    const len = Math.max(project.images.length, 1)
    setImgIndex(i => (i + 1) % len)
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.3, ease }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              background: paletteBase ?? 'var(--color-surface)',
              border: paletteAccent
                ? `1px solid ${hexWithAlpha(paletteAccent, 0.12)}`
                : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors hover:opacity-80"
              style={{
                background: paletteIsDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)',
                color: fg.primary,
              }}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image carousel — only rendered when images exist */}
            {hasImages && (
              <div
                className="relative w-full overflow-hidden rounded-t-2xl"
                style={{
                  aspectRatio: '16/9',
                  background: paletteBase ?? project.accentColor ?? '#111827',
                }}
              >
                <img
                  src={project.images[imgIndex]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />

                {/* Carousel controls */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full"
                      style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full"
                      style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImgIndex(i)}
                          className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                          style={{
                            background:
                              i === imgIndex
                                ? (paletteAccent ?? 'var(--color-accent)')
                                : 'rgba(255,255,255,0.3)',
                            transform: i === imgIndex ? 'scale(1.3)' : 'scale(1)',
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Content */}
            <div className={hasImages ? 'p-6 md:p-8' : 'p-6 md:p-8 pt-12 md:pt-14'}>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 min-w-0">
                  {project.logo && (
                    <div
                      className="relative shrink-0"
                      style={{
                        width: project.logoWide
                          ? (project.logoSize ? DIALOG_LOGO_SIZES[project.logoSize] : 40) * 3
                          : project.logoSize
                            ? DIALOG_LOGO_SIZES[project.logoSize]
                            : 40,
                        height: project.logoSize
                          ? DIALOG_LOGO_SIZES[project.logoSize]
                          : 40,
                      }}
                    >
                      <Image
                        src={project.logo}
                        alt=""
                        fill
                        className="object-contain"
                        sizes={
                          project.logoWide
                            ? `${(project.logoSize ? DIALOG_LOGO_SIZES[project.logoSize] : 40) * 3}px`
                            : project.logoSize
                              ? `${DIALOG_LOGO_SIZES[project.logoSize]}px`
                              : '40px'
                        }
                      />
                    </div>
                  )}
                  <h3
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: fg.primary }}
                  >
                    {project.name}
                  </h3>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{
                      background: paletteAccent ?? 'var(--color-accent)',
                      color: accentNeedsLightText ? '#fff' : 'var(--color-background)',
                    }}
                  >
                    Visit <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: fg.secondary }}
              >
                {project.description}
              </p>

              {/* Tech stack chips */}
              <div>
                <p
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: fg.muted }}
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        background: paletteIsDark
                          ? 'rgba(255,255,255,0.12)'
                          : 'rgba(0,0,0,0.08)',
                        border: paletteIsDark
                          ? '1px solid rgba(255,255,255,0.2)'
                          : '1px solid rgba(0,0,0,0.12)',
                        color: fg.secondary,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
