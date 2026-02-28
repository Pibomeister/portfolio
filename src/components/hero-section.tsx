'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Faint "EP" watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <span
          className="text-[30vw] font-extrabold leading-none tracking-tighter"
          style={{
            color: 'rgba(255, 255, 255, 0.015)',
            userSelect: 'none',
          }}
        >
          EP
        </span>
      </div>

      {/* Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT: Text content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center px-8 md:px-16 xl:px-24 pt-8 pb-16 md:pt-10 lg:pt-0 lg:pb-0">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            Portfolio
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-3"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Eduardo
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Picazo</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="text-lg md:text-xl font-medium mb-8"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Lead Fullstack Engineer
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="w-16 h-px mb-8 origin-left"
            style={{ background: 'var(--color-accent)' }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="text-base leading-relaxed mb-10 max-w-md"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Crafting high-performance web experiences at scale. Passionate about
            developer tooling, elegant architectures, and products that feel inevitable.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/Pibomeister"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm transition-all duration-200 hover:scale-105"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-background)',
              }}
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-picazo-enriquez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:scale-105"
              style={{
                borderColor: 'rgba(255,255,255,0.15)',
                color: 'var(--color-text-primary)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              Connect
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Headshot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="order-1 lg:order-2 relative flex items-center justify-center overflow-hidden px-8 md:px-12 lg:px-8 xl:px-16 pt-28 pb-6 md:pb-10 lg:py-0 min-h-[300px] sm:min-h-[360px] md:min-h-[440px] lg:min-h-screen"
        >
          <div className="relative w-full max-w-88 md:max-w-md xl:max-w-lg aspect-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/headshot.png"
              alt="Portrait of Eduardo Picazo"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 40vw, (min-width: 768px) 24rem, 85vw"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(11,11,11,0.35) 0%, rgba(11,11,11,0) 40%)',
              }}
            />
          </div>

          {/* Subtle vertical accent line */}
          <div
            aria-hidden
            className="absolute left-0 top-1/4 bottom-1/4 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)' }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--color-text-secondary)', zIndex: 10 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'var(--color-accent)' }}
        />
      </motion.div>
    </section>
  )
}
