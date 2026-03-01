'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { WordReveal, SlideIn, FadeUp, ScaleIn, StaggerContainer, StaggerItem } from './scroll-reveal'

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
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Watermark — drifts in from the right */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none"
      >
        <span
          className="text-[20vw] font-extrabold leading-none tracking-tighter"
          style={{ color: 'rgba(255, 255, 255, 0.012)', userSelect: 'none' }}
        >
          ABOUT
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">

          {/* LEFT: Visual card */}
          <SlideIn from="left" delay={0.1} duration={0.9} className="lg:col-span-2 relative">
            <div
              className="relative rounded-2xl overflow-hidden aspect-9/16 max-w-sm mx-auto"
              style={{
                background: 'linear-gradient(135deg, #111827 0%, #0b101a 100%)',
                border: '1px solid rgba(255,212,59,0.15)',
              }}
            >
              <Image
                src="/headshot-2.png"
                alt="Portrait of Eduardo Picazo"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 30%' }}
                sizes="(min-width: 1024px) 22rem, (min-width: 768px) 20rem, 85vw"
              />

              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, color-mix(in srgb, var(--color-background) 75%, transparent) 8%, color-mix(in srgb, var(--color-background) 45%, transparent) 42%, color-mix(in srgb, var(--color-accent) 18%, transparent) 100%)',
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 50% 35%, color-mix(in srgb, var(--color-background) 12%, transparent) 0%, transparent 55%)',
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div
                  className="w-full max-w-56 rounded-xl px-6 py-7 flex flex-col items-center gap-4 translate-y-17.5 md:translate-y-21.5"
                  style={{
                    background: 'color-mix(in srgb, var(--color-background) 65%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--color-text-primary) 18%, transparent)',
                    boxShadow: '0 18px 40px rgba(0,0,0,0.45)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.45, ease }}
                  className="w-20 h-px origin-left"
                  style={{ background: 'var(--color-accent)' }}
                />
                <motion.p
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
                  className="text-4xl font-bold tracking-tight"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  EP
                </motion.p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6, ease }}
                  className="w-20 h-px origin-right"
                  style={{ background: 'var(--color-accent)' }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7, ease }}
                  className="text-xs tracking-widest uppercase text-center"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Lead Fullstack<br />Engineer
                </motion.p>
                </div>
              </div>

              {/* Corner accents */}
              <motion.div
                initial={{ opacity: 0, scale: 0, transformOrigin: 'top left' }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.75, ease }}
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: 'var(--color-accent)', filter: 'drop-shadow(0 0 4px rgba(255,212,59,0.4))' }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0, transformOrigin: 'bottom right' }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8, ease }}
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: 'var(--color-accent)', filter: 'drop-shadow(0 0 4px rgba(255,212,59,0.4))' }}
              />
            </div>
          </SlideIn>

          {/* RIGHT: Text */}
          <div className="lg:col-span-3">
            <FadeUp delay={0.05} distance={12}>
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                About Me
              </p>
            </FadeUp>

            {/* Word-by-word heading reveal */}
            <div className="mb-6">
              <WordReveal
                text="Building software that"
                as="h2"
                delay={0.08}
                stagger={0.07}
                className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
                wordClassName="text-3xl md:text-4xl font-bold"
              />
              <WordReveal
                text="feels inevitable."
                as="h2"
                delay={0.28}
                stagger={0.08}
                className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
                wordClassName="text-3xl md:text-4xl font-bold"
                style={{ color: 'var(--color-accent)' } as React.CSSProperties}
              />
            </div>

            <FadeUp delay={0.2} duration={0.9}>
              <div
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
              </div>
            </FadeUp>

            {/* Info grid — staggered */}
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10"
              stagger={0.07}
              delayChildren={0.25}
            >
              {info.map(({ label, value }) => (
                <StaggerItem key={label} className="flex flex-col gap-0.5">
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
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Skill chips — pop in with stagger */}
            <FadeUp delay={0.35}>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Core Stack
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-10%' }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } },
                }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 8 },
                      visible: {
                        opacity: 1, scale: 1, y: 0,
                        transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
                      },
                    }}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      background: 'rgba(255, 212, 59, 0.08)',
                      border: '1px solid rgba(255, 212, 59, 0.2)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
