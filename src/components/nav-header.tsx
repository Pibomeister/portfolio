'use client'

import { motion } from 'motion/react'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function NavHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      style={{
        background: 'linear-gradient(to bottom, rgba(11,16,26,0.9) 0%, transparent 100%)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <Link
        href="/"
        className="text-sm font-semibold tracking-[0.2em] uppercase transition-colors"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        EP
      </Link>

      <nav className="flex items-center gap-4" aria-label="Social links">
        <a
          href="https://github.com/Pibomeister"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: 'var(--color-text-secondary)' }}
          aria-label="GitHub profile"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/eduardo-picazo-enriquez"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: 'var(--color-text-secondary)' }}
          aria-label="LinkedIn profile"
        >
          <Linkedin className="w-4 h-4" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </nav>
    </motion.header>
  )
}
