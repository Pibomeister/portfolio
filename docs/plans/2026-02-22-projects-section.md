# Projects Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a Projects section with asymmetric featured bento grid, language filter bar, masonry all-projects list, and an animated dialog with image carousel.

**Architecture:** Static data in `lib/projects-data.ts`. Section composed of 6 components: `projects-section.tsx` (orchestrator), `featured-bento.tsx`, `project-filter-bar.tsx`, `all-projects-masonry.tsx`, `project-card.tsx` (shared), `project-dialog.tsx`. All use `motion/react` for animations consistent with the rest of the portfolio.

**Tech Stack:** Next.js 16, React 19, motion/react, Tailwind v4, TypeScript, lucide-react

---

### Task 1: Data layer — `lib/projects-data.ts`

**Files:**
- Create: `src/lib/projects-data.ts`

**Step 1: Create the data file**

```ts
// src/lib/projects-data.ts

export type TechFilter = 'react' | 'nextjs' | 'react-native' | 'flutter'

export type Project = {
  id: string
  name: string
  description: string
  tech: TechFilter[]       // used for filter bar
  techStack: string[]      // displayed as chips in dialog
  url?: string
  images: string[]         // placeholder gradient strings for now
  featured?: boolean
  accentColor?: string     // per-card gradient accent for placeholder
}

export const FILTERS: { id: TechFilter | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'react', label: 'React' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'react-native', label: 'React Native' },
  { id: 'flutter', label: 'Flutter' },
]

export const PROJECTS: Project[] = [
  // --- Featured (4) ---
  {
    id: 'fluxkeep',
    name: 'Fluxkeep',
    description: 'A high-performance SaaS platform for real-time data pipeline management. Built to handle millions of events per day with sub-50ms latency.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Redis', 'AWS'],
    url: 'https://fluxkeep.com',
    images: [],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a2035 0%, #0f1825 100%)',
  },
  {
    id: 'storefront-pro',
    name: 'Storefront Pro',
    description: 'Headless e-commerce platform powering 50+ brands. Custom storefront builder with drag-and-drop and live preview.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'React', 'Shopify', 'GraphQL', 'Tailwind CSS'],
    url: undefined,
    images: [],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a1525 0%, #0f0f1a 100%)',
  },
  {
    id: 'trackr-mobile',
    name: 'Trackr Mobile',
    description: 'Cross-platform habit and goal tracking app with offline-first sync and beautiful data visualizations.',
    tech: ['react-native'],
    techStack: ['React Native', 'TypeScript', 'Supabase', 'Reanimated 3'],
    url: undefined,
    images: [],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a2520 0%, #0f1a15 100%)',
  },
  {
    id: 'designops',
    name: 'DesignOps Suite',
    description: 'Internal design system management tool used by 200+ engineers. Token management, component playground, and automated Figma sync.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'Storybook', 'Figma API', 'Node.js'],
    url: undefined,
    images: [],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1f1a10 0%, #1a1408 100%)',
  },

  // --- All Projects (8 more) ---
  {
    id: 'campo-app',
    name: 'Campo',
    description: 'Flutter app for agricultural field management with GPS mapping and crop analytics.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
    images: [],
    accentColor: 'linear-gradient(135deg, #0f1a10 0%, #0a120a 100%)',
  },
  {
    id: 'finledger',
    name: 'FinLedger',
    description: 'Real-time financial dashboard for SMBs. Multi-currency, automated reconciliation, and AI-powered insights.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'Recharts'],
    url: 'https://finledger.io',
    images: [],
    accentColor: 'linear-gradient(135deg, #101820 0%, #080f18 100%)',
  },
  {
    id: 'rideflow',
    name: 'RideFlow',
    description: 'React Native ride-sharing app with live driver tracking, surge pricing, and in-app payments.',
    tech: ['react-native'],
    techStack: ['React Native', 'Expo', 'Stripe', 'Socket.io', 'Node.js'],
    images: [],
    accentColor: 'linear-gradient(135deg, #1a1010 0%, #120808 100%)',
  },
  {
    id: 'contentwave',
    name: 'ContentWave',
    description: 'CMS platform for media companies. Multi-tenant, real-time collaborative editing, and CDN-integrated media management.',
    tech: ['react', 'nextjs'],
    techStack: ['Next.js', 'React', 'tRPC', 'PostgreSQL', 'S3', 'CloudFront'],
    images: [],
    accentColor: 'linear-gradient(135deg, #181020 0%, #100a18 100%)',
  },
  {
    id: 'medtrack',
    name: 'MedTrack',
    description: 'Flutter health app for medication scheduling with smart reminders, refill tracking, and caregiver sharing.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'HealthKit'],
    images: [],
    accentColor: 'linear-gradient(135deg, #0f1820 0%, #081018 100%)',
  },
  {
    id: 'launchpad',
    name: 'Launchpad',
    description: 'Internal dev portal for a 300-person engineering org. Service catalog, runbooks, and incident management in one place.',
    tech: ['react'],
    techStack: ['React', 'TypeScript', 'GraphQL', 'PagerDuty API', 'GitHub API'],
    images: [],
    accentColor: 'linear-gradient(135deg, #1a1520 0%, #100f18 100%)',
  },
  {
    id: 'spotcheck',
    name: 'SpotCheck',
    description: 'React Native QA inspection app for manufacturing floors. Offline-first with barcode scanning and auto-report generation.',
    tech: ['react-native'],
    techStack: ['React Native', 'Expo', 'SQLite', 'PDF generation', 'BLE'],
    images: [],
    accentColor: 'linear-gradient(135deg, #1a1a10 0%, #121208 100%)',
  },
  {
    id: 'atlas-cms',
    name: 'Atlas CMS',
    description: 'Next.js-powered CMS for a global NGO. 12 languages, A/B testing, and deep Salesforce integration.',
    tech: ['nextjs'],
    techStack: ['Next.js', 'TypeScript', 'Contentful', 'Salesforce', 'i18n'],
    images: [],
    accentColor: 'linear-gradient(135deg, #101a18 0%, #081210 100%)',
  },
]

export const FEATURED = PROJECTS.filter(p => p.featured)
export const ALL_PROJECTS = PROJECTS.filter(p => !p.featured)
```

**Step 2: Commit**

```bash
git add src/lib/projects-data.ts
git commit -m "feat: projects data layer with 12 placeholder projects"
```

---

### Task 2: `project-card.tsx` — shared card component

**Files:**
- Create: `src/components/project-card.tsx`

**Step 1: Create the card**

```tsx
// src/components/project-card.tsx
'use client'

import { motion } from 'motion/react'
import { Project } from '@/lib/projects-data'

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
  className?: string
  /** For bento hero card: taller aspect ratio */
  hero?: boolean
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

// Minimal tech label map for on-card display
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
        aspectRatio: hero ? '16/9' : '4/3',
        minHeight: hero ? '320px' : '200px',
      }}
    >
      {/* Placeholder image area — full bleed */}
      <div
        className="absolute inset-0"
        style={{
          background: project.accentColor || 'linear-gradient(135deg, #111827 0%, #0b101a 100%)',
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)',
        }}
      />

      {/* Bottom gradient overlay for text legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
        }}
      />

      {/* Hover: brighter overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(255,184,0,0.04)' }}
      />

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p
          className="text-base font-semibold mb-2 leading-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {project.name}
        </p>
        {/* Tech filter tags */}
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
```

**Step 2: Commit**

```bash
git add src/components/project-card.tsx
git commit -m "feat: shared ProjectCard component"
```

---

### Task 3: `featured-bento.tsx` — asymmetric bento grid

**Files:**
- Create: `src/components/featured-bento.tsx`

**Step 1: Create the bento**

```tsx
// src/components/featured-bento.tsx
'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Project } from '@/lib/projects-data'
import { ProjectCard } from './project-card'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

interface FeaturedBentoProps {
  projects: Project[]
  onCardClick: (project: Project) => void
}

export function FeaturedBento({ projects, onCardClick }: FeaturedBentoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const [hero, ...rest] = projects

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Hero card: col-span-2 on md+ */}
      {hero && (
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <ProjectCard project={hero} onClick={onCardClick} hero />
        </motion.div>
      )}

      {/* Remaining 3 cards */}
      {rest.slice(0, 3).map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease }}
        >
          <ProjectCard project={project} onClick={onCardClick} />
        </motion.div>
      ))}
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/featured-bento.tsx
git commit -m "feat: FeaturedBento asymmetric grid"
```

---

### Task 4: `project-filter-bar.tsx` — filter pill toggles

**Files:**
- Create: `src/components/project-filter-bar.tsx`

**Step 1: Create the filter bar**

```tsx
// src/components/project-filter-bar.tsx
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
```

**Step 2: Commit**

```bash
git add src/components/project-filter-bar.tsx
git commit -m "feat: ProjectFilterBar pill toggles"
```

---

### Task 5: `all-projects-masonry.tsx` — filtered masonry grid

**Files:**
- Create: `src/components/all-projects-masonry.tsx`

**Step 1: Create the masonry grid**

```tsx
// src/components/all-projects-masonry.tsx
'use client'

import { motion, AnimatePresence, useInView } from 'motion/react'
import { useRef } from 'react'
import { Project, TechFilter } from '@/lib/projects-data'
import { ProjectCard } from './project-card'

interface AllProjectsMasonryProps {
  projects: Project[]
  filter: TechFilter | 'all'
  onCardClick: (project: Project) => void
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function AllProjectsMasonry({ projects, filter, onCardClick }: AllProjectsMasonryProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.tech.includes(filter))

  return (
    <div ref={ref}>
      {/* CSS columns masonry */}
      <div
        className="gap-4"
        style={{
          columnCount: 1,
          // Responsive column count via inline style since Tailwind v4 CSS columns need special handling
        }}
      >
        <style>{`
          @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
          @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
        `}</style>
        <div className="masonry-grid" style={{ columnGap: '1rem' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                style={{ breakInside: 'avoid', marginBottom: '1rem', display: 'block' }}
              >
                <ProjectCard project={project} onClick={onCardClick} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          No projects for this filter yet.
        </motion.p>
      )}
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/all-projects-masonry.tsx
git commit -m "feat: AllProjectsMasonry with AnimatePresence filter"
```

---

### Task 6: `project-dialog.tsx` — animated modal with carousel

**Files:**
- Create: `src/components/project-dialog.tsx`

**Step 1: Create the dialog**

```tsx
// src/components/project-dialog.tsx
'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState, useCallback } from 'react'
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '@/lib/projects-data'

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const [imgIndex, setImgIndex] = useState(0)

  // Reset carousel on project change
  useEffect(() => { setImgIndex(0) }, [project?.id])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  const prev = useCallback(() => {
    if (!project) return
    setImgIndex(i => (i - 1 + Math.max(project.images.length, 1)) % Math.max(project.images.length, 1))
  }, [project])

  const next = useCallback(() => {
    if (!project) return
    setImgIndex(i => (i + 1) % Math.max(project.images.length, 1))
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
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
            {/* Dialog panel */}
            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.3, ease }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image carousel */}
              <div
                className="relative w-full overflow-hidden rounded-t-2xl"
                style={{ aspectRatio: '16/9', background: project.accentColor || '#111827' }}
              >
                {project.images.length > 0 ? (
                  <img
                    src={project.images[imgIndex]}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder when no images */
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: project.accentColor }}
                  >
                    <span
                      className="text-5xl font-bold tracking-tighter opacity-20"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {project.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}

                {/* Carousel controls — only show if images exist */}
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
                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImgIndex(i)}
                          className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                          style={{
                            background: i === imgIndex ? 'var(--color-accent)' : 'rgba(255,255,255,0.3)',
                            transform: i === imgIndex ? 'scale(1.3)' : 'scale(1)',
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {project.name}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{
                        background: 'var(--color-accent)',
                        color: 'var(--color-background)',
                      }}
                    >
                      Visit <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {project.description}
                </p>

                {/* Tech stack chips */}
                <div>
                  <p
                    className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: 'rgba(255,184,0,0.08)',
                          border: '1px solid rgba(255,184,0,0.2)',
                          color: 'var(--color-text-secondary)',
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
        </>
      )}
    </AnimatePresence>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/project-dialog.tsx
git commit -m "feat: ProjectDialog animated modal with carousel"
```

---

### Task 7: `projects-section.tsx` — orchestrator + wire into page

**Files:**
- Create: `src/components/projects-section.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create the orchestrator**

```tsx
// src/components/projects-section.tsx
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
              Work that <span style={{ color: 'var(--color-accent)' }}>ships.</span>
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

      {/* Dialog — outside section so it can portal over everything */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
```

**Step 2: Add to page.tsx**

In `src/app/page.tsx`, add import and place `<ProjectsSection />` between `<AboutSection />` and `<SiteFooter />`:

```tsx
import { ProjectsSection } from '@/components/projects-section'
// ... existing imports ...

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: 'var(--color-background)' }}>
      <ParticleBackground />
      <NavHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SiteFooter />
    </main>
  )
}
```

**Step 3: Commit**

```bash
git add src/components/projects-section.tsx src/app/page.tsx
git commit -m "feat: ProjectsSection orchestrator wired into page"
```

---

### Task 8: Screenshot and verify

**Step 1: Build static HTML preview and take screenshot**

```bash
ls /workspace/group/.playwright-browsers/chromium_headless_shell-*/chrome-linux/headless_shell 2>/dev/null && echo "installed" || echo "needs install"
```

Then take screenshot of the projects section using static HTML preview or Playwright against dev server.

**Step 2: Send to Eduardo**

Use `send_photo` tool with the screenshot.
