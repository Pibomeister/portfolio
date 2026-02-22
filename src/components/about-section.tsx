'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const skills = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'PostgreSQL', 'Supabase', 'Docker', 'AWS',
  'GraphQL', 'tRPC', 'Tailwind CSS', 'Figma',
]

const info = [
  { label: 'Experience', value: '10+ Years' },
  { label: 'Clients', value: '30+ Clients' },
  { label: 'Languages', value: 'Spanish, English, German' },
  { label: 'Location', value: 'Mexico City, MX' },
  { label: 'Availability', value: 'Nearshore — North America & Europe' },
]

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Faint watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none"
      >
        <span
          className="text-[20vw] font-extrabold leading-none tracking-tighter"
          style={{ color: 'rgba(255, 255, 255, 0.012)', userSelect: 'none' }}
        >
          ABOUT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">

          {/* LEFT: Visual card (40% = 2/5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-2 relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto"
              style={{
                background: 'linear-gradient(135deg, #111827 0%, #0b101a 100%)',
                border: '1px solid rgba(255,184,0,0.15)',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div
                  className="w-20 h-px"
                  style={{ background: 'var(--color-accent)' }}
                />
                <p
                  className="text-4xl font-bold tracking-tight"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  EP
                </p>
                <div
                  className="w-20 h-px"
                  style={{ background: 'var(--color-accent)' }}
                />
                <p
                  className="text-xs tracking-widest uppercase text-center"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Lead Fullstack<br />Engineer
                </p>
              </div>

              {/* Corner accents */}
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: 'var(--color-accent)' }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: 'var(--color-accent)' }}
              />
            </div>
          </motion.div>

          {/* RIGHT: Text (60% = 3/5 cols) */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-accent)' }}
            >
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-snug"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Building software that<br />
              <span style={{ color: 'var(--color-accent)' }}>feels inevitable.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="space-y-4 mb-10 text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <p>
                I&apos;m a Lead Fullstack Engineer with a focus on shipping polished, high-performance
                web products. I care deeply about developer experience, type safety, and the kind
                of UI details users feel but never consciously notice.
              </p>
              <p>
                When I&apos;m not building, I&apos;m thinking about distributed systems, design systems,
                and how to make teams move faster without sacrificing quality.
              </p>
            </motion.div>

            {/* Personal info grid */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10"
            >
              {info.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[11px] font-semibold tracking-[0.15em] uppercase"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Skill chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      background: 'rgba(255, 184, 0, 0.08)',
                      border: '1px solid rgba(255, 184, 0, 0.2)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
