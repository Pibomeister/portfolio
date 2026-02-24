'use client'

/**
 * Reusable scroll-triggered animation components.
 * All use `whileInView` for clean declarative scroll animations.
 */

import { motion, type Variants, type MotionProps } from 'motion/react'
import React, { type ReactNode } from 'react'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

/* ─────────────────────────────────────────────
   FadeUp — fades + slides up when entering view
───────────────────────────────────────────── */
interface FadeUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  distance = 24,
  className,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10%' }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   FadeIn — fades in only (no movement)
───────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function FadeIn({ children, delay = 0, duration = 0.8, className, once = true }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: '-10%' }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   SlideIn — slides in from left or right
───────────────────────────────────────────── */
interface SlideInProps {
  children: ReactNode
  from?: 'left' | 'right'
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
}

export function SlideIn({
  children,
  from = 'left',
  delay = 0,
  duration = 0.8,
  distance = 40,
  className,
  once = true,
}: SlideInProps) {
  const x = from === 'left' ? -distance : distance
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: '-10%' }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   StaggerContainer — animates children in sequence
───────────────────────────────────────────── */
const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.1,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-10%' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & MotionProps) {
  return (
    <motion.div variants={staggerItemVariants} className={className} {...rest}>
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   WordReveal — reveals text word by word
───────────────────────────────────────────── */
interface WordRevealProps {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  style?: React.CSSProperties
}

export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  once = true,
  as: Tag = 'h2',
  style,
}: WordRevealProps) {
  const words = text.split(' ')

  return (
    <motion.div
      className={`overflow-hidden ${className ?? ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-10%' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      <Tag className="flex flex-wrap gap-x-[0.3em] gap-y-0" style={style}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className={`inline-block overflow-hidden ${wordClassName ?? ''}`}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   RevealLine — animated horizontal rule
───────────────────────────────────────────── */
interface RevealLineProps {
  delay?: number
  className?: string
  color?: string
  once?: boolean
}

export function RevealLine({ delay = 0, className, color, once = true }: RevealLineProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once, margin: '-10%' }}
      transition={{ duration: 0.8, delay, ease }}
      className={`origin-left h-px ${className ?? ''}`}
      style={{ background: color ?? 'var(--color-accent)' }}
    />
  )
}

/* ─────────────────────────────────────────────
   ScaleIn — scales up from 95% on enter
───────────────────────────────────────────── */
interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function ScaleIn({ children, delay = 0, duration = 0.7, className, once = true }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: '-10%' }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
