'use client'

import { motion } from 'motion/react'
import {
  Heart, TrendingUp, Sparkles, Rocket, Layers, Shield,
  type LucideProps,
} from 'lucide-react'
import { Achievement } from '@/lib/experience-data'
import { GlowingEffect } from './ui/glowing-effect'

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
      className="relative rounded-xl"
    >
      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      <div
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
          style={{ background: 'rgba(255,212,59,0.1)' }}
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
      </div>
    </motion.div>
  )
}
