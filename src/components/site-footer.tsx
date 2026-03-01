'use client'

import { motion } from 'motion/react'
import { Github, Linkedin } from 'lucide-react'
import { StaggerContainer, StaggerItem } from './scroll-reveal'

const RIBBON_ITEMS = [
  'Available for Work',
  '✦',
  'Lead Fullstack Engineer',
  '✦',
  'Next.js · React · TypeScript',
  '✦',
  'Mexico City, MX',
  '✦',
  'Nearshore — North America & Europe',
  '✦',
  'Open to Freelance',
  '✦',
]

function FooterRibbon() {
  // Duplicate items so the scroll loop is seamless
  const items = [...RIBBON_ITEMS, ...RIBBON_ITEMS]

  return (
    <div
      className="relative w-full overflow-hidden py-3"
      style={{ background: 'var(--color-accent)', boxShadow: '0 0 20px rgba(255,212,59,0.3), 0 -4px 16px rgba(255,212,59,0.15)' }}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        style={{ width: 'max-content' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-background)' }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Gold ribbon */}
      <FooterRibbon />

      <div className="relative py-12 px-8 md:px-16">
      {/* Watermark — subtle scale-in */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="text-[15vw] font-extrabold leading-none tracking-tighter"
          style={{ color: 'rgba(255,255,255,0.02)', userSelect: 'none' }}
        >
          EP
        </span>
      </motion.div>

      <StaggerContainer
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
        stagger={0.1}
        delayChildren={0.2}
      >
        <StaggerItem>
          <p
            className="text-sm font-medium"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Eduardo Picazo —{' '}
            <span style={{ color: 'var(--color-text-primary)' }}>Lead Fullstack Engineer</span>
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="flex items-center gap-6">
            {[
              { href: 'https://github.com/Pibomeister', label: 'GitHub', icon: Github },
              { href: 'https://www.linkedin.com/in/eduardo-picazo-enriquez', label: 'LinkedIn', icon: Linkedin },
            ].map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </StaggerItem>

        <StaggerItem>
          <p
            className="text-xs"
            style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}
          >
            © {year}
          </p>
        </StaggerItem>
      </StaggerContainer>
      </div>
    </footer>
  )
}
