# Experience Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an Experience section with a left-rail animated timeline of 7 work entries and a 2×3 achievements grid below.

**Architecture:** Static data in `lib/experience-data.ts`. Section composed of 4 components: `experience-section.tsx` (orchestrator), `timeline-entry.tsx` (single row), `achievement-card.tsx` (single card). Gold vertical line animated with `motion/react` `scaleY` on scroll. Staggered entry animations via `useInView`. Wired into `page.tsx` between `ProjectsSection` and `SiteFooter`.

**Tech Stack:** Next.js 16, React 19, motion/react, Tailwind v4, TypeScript, lucide-react

---

### Task 1: Data layer — `lib/experience-data.ts`

**Files:**
- Create: `src/lib/experience-data.ts`

**Step 1: Create the data file**

```ts
// src/lib/experience-data.ts

export type WorkEntry = {
  id: string
  period: string
  role: string
  company: string
  tech: string[]
  current?: boolean
}

export type Achievement = {
  id: string
  iconName: 'Heart' | 'TrendingUp' | 'Sparkles' | 'Rocket' | 'Layers' | 'Shield'
  title: string
  description: string
}

export const WORK_ENTRIES: WorkEntry[] = [
  {
    id: 'current',
    period: 'Nov 2025 – Present',
    role: 'Lead Frontend Engineer',
    company: 'Current Role',
    tech: ['React', 'GraphQL', 'Azure AI', 'Azure SQL'],
    current: true,
  },
  {
    id: 'jetbridge',
    period: 'Aug 2024 – Nov 2025',
    role: 'Lead Fullstack Developer',
    company: 'JetBridge',
    tech: ['SST v3', 'AWS', 'Lambda', 'Prisma', 'PostgreSQL', 'Next.js'],
  },
  {
    id: 'sydecar',
    period: 'Jul 2022 – Aug 2024',
    role: 'Lead Fullstack Developer',
    company: 'Sydecar',
    tech: ['React', 'Node.js', 'NestJS', 'PostgreSQL', 'Python', 'GCP'],
  },
  {
    id: 'presencepg',
    period: 'Apr 2022 – Jul 2022',
    role: 'Lead Fullstack Developer',
    company: 'PresencePG',
    tech: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'conde-nast',
    period: 'Nov 2021 – Apr 2022',
    role: 'Principal Frontend Architect',
    company: 'Condé Nast',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Terraform'],
  },
  {
    id: 'kalyptio',
    period: 'Feb 2019 – Nov 2021',
    role: 'CTO & Lead Fullstack Engineer',
    company: 'Kalyptio',
    tech: ['Node.js', 'React', 'Python', 'FastAPI', 'MongoDB', 'AWS', 'Flutter'],
  },
  {
    id: 'idr',
    period: 'Mar 2015 – Feb 2019',
    role: 'Senior Fullstack Developer',
    company: 'IDR Technologies',
    tech: ['Node.js', 'Angular', 'C#/.NET', 'MongoDB', 'AWS', 'PostgreSQL'],
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'healthcare',
    iconName: 'Heart',
    title: 'Scalable Healthcare',
    description:
      'Engineered systems at JetBridge handling hundreds of thousands of patient benefit investigations and enrollments at scale.',
  },
  {
    id: 'fintech',
    iconName: 'TrendingUp',
    title: 'Fintech & Compliance',
    description:
      'Owned full-stack SPV platform implementation including KYC and compliance features; participated in architecture panels for best practices.',
  },
  {
    id: 'ai',
    iconName: 'Sparkles',
    title: 'Strategic AI Integration',
    description:
      'Pioneered AI venture integration into fintech platforms, leveraging emerging LLM technologies for business strategy.',
  },
  {
    id: 'founding',
    iconName: 'Rocket',
    title: 'Agency Co-Founder',
    description:
      'Co-founded Kalyptio, a digital agency serving 20+ clients across 3 continents in finance, health, and entertainment.',
  },
  {
    id: 'architecture',
    iconName: 'Layers',
    title: 'Architecture & Mentorship',
    description:
      'Designed cost-balanced architectural solutions at Condé Nast while establishing sustainable technical standards and mentoring engineers.',
  },
  {
    id: 'security',
    iconName: 'Shield',
    title: 'Large-Scale Security',
    description:
      'Led developer and testing teams for two major security projects that remain in active use today.',
  },
]
```

**Step 2: Commit**

```bash
git add src/lib/experience-data.ts
git commit -m "feat: experience data layer — 7 work entries, 6 achievements"
```

---

### Task 2: `achievement-card.tsx`

**Files:**
- Create: `src/components/achievement-card.tsx`

**Step 1: Create the card**

```tsx
// src/components/achievement-card.tsx
'use client'

import { motion } from 'motion/react'
import {
  Heart, TrendingUp, Sparkles, Rocket, Layers, Shield,
  type LucideProps,
} from 'lucide-react'
import { Achievement } from '@/lib/experience-data'

const ICONS: Record<Achievement['iconName'], React.FC<LucideProps>> = {
  Heart,
  TrendingUp,
  Sparkles,
  Rocket,
  Layers,
  Shield,
}

interface AchievementCardProps {
  achievement: Achievement
  index: number
  isInView: boolean
}

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function AchievementCard({ achievement, index, isInView }: AchievementCardProps) {
  const Icon = ICONS[achievement.iconName]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.07, ease }}
      className="relative rounded-xl p-6 overflow-hidden"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderLeft: '3px solid var(--color-accent)',
      }}
    >
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
        style={{ background: 'rgba(255,184,0,0.1)' }}
      >
        <Icon className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
      </div>

      {/* Title */}
      <p
        className="text-sm font-semibold mb-2 leading-tight"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {achievement.title}
      </p>

      {/* Description */}
      <p
        className="text-xs leading-relaxed"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {achievement.description}
      </p>
    </motion.div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/achievement-card.tsx
git commit -m "feat: AchievementCard component"
```

---

### Task 3: `timeline-entry.tsx`

**Files:**
- Create: `src/components/timeline-entry.tsx`

**Step 1: Create the timeline entry**

```tsx
// src/components/timeline-entry.tsx
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
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Gold dot on the timeline line */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-[5px] z-10"
        style={{
          background: entry.current ? 'var(--color-accent)' : 'var(--color-surface)',
          border: '2px solid var(--color-accent)',
          boxShadow: entry.current ? '0 0 8px rgba(255,184,0,0.5)' : 'none',
        }}
      />

      {/* Period badge */}
      <div className="mb-1 flex items-center gap-2">
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
            Present
          </span>
        )}
      </div>

      {/* Role + Company */}
      <p
        className="text-base font-bold leading-tight mb-0.5"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {entry.role}
      </p>
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
```

**Step 2: Commit**

```bash
git add src/components/timeline-entry.tsx
git commit -m "feat: TimelineEntry component"
```

---

### Task 4: `experience-section.tsx` — orchestrator + wire into page

**Files:**
- Create: `src/components/experience-section.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create the section**

```tsx
// src/components/experience-section.tsx
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
        <div
          ref={timelineRef}
          className="relative mb-24 max-w-2xl"
        >
          {/* Animated vertical gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute left-0 top-2 bottom-0 w-px origin-top"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent), rgba(255,184,0,0.15))' }}
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
```

**Step 2: Wire into page.tsx**

In `src/app/page.tsx`, add import and place `<ExperienceSection />` between `<ProjectsSection />` and `<SiteFooter />`:

```tsx
import { ExperienceSection } from '@/components/experience-section'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: 'var(--color-background)' }}>
      <ParticleBackground />
      <NavHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SiteFooter />
    </main>
  )
}
```

**Step 3: Commit**

```bash
git add src/components/experience-section.tsx src/app/page.tsx
git commit -m "feat: ExperienceSection wired into page"
```

---

### Task 5: Screenshot and send

**Step 1: Take screenshot of the experience section**

Build static HTML preview and screenshot with Playwright at `/workspace/group/portfolio/screenshots/experience-desktop.png`.

**Step 2: Send to Eduardo**

Use `send_photo` tool.
