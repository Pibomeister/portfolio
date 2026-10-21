'use client'

import { motion } from 'motion/react'
import { ExternalLink, Github, Terminal, Bot, Workflow } from 'lucide-react'
import Image from 'next/image'
import { FadeUp, WordReveal } from './scroll-reveal'

type Repo = {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  url: string
  deployUrl?: string
  image?: string
  icon: typeof Bot
  language: string
  license: string
  tags: string[]
}

const REPOS: Repo[] = [
  {
    id: 'agent-kit',
    name: 'agent-kit',
    slug: 'Pibomeister/agent-kit',
    tagline: 'Agent lifecycle and skill catalog CLI.',
    description:
      'A TypeScript toolkit for defining, registering, and running agent skills with a consistent CLI surface. Built to make agent workflows composable, testable, and easy to extend.',
    url: 'https://github.com/Pibomeister/agent-kit',
    icon: Bot,
    language: 'TypeScript',
    license: 'MIT',
    tags: ['TypeScript', 'Agents', 'CLI'],
  },
  {
    id: 'firstmate',
    name: 'firstmate',
    slug: 'Pibomeister/firstmate',
    tagline: 'Talk to one agent. Ship with a crew.',
    description:
      'A multi-agent fleet supervisor that coordinates workers across tasks. Orchestrates autonomous agents, routes decisions, and keeps complex runs observable from a single interface.',
    url: 'https://github.com/Pibomeister/firstmate',
    icon: Workflow,
    language: 'Shell',
    license: 'MIT',
    tags: ['Orchestration', 'Multi-Agent', 'CLI'],
  },
  {
    id: 'bash-ai-elements',
    name: 'Bash AI Elements',
    slug: 'Pibomeister/just-bash-vercel-ai-sdk-elements',
    tagline: 'The complete production blueprint for efficient AI agents.',
    description:
      'Reference architecture for agentic RAG with citation-first retrieval, memory compression, and streaming UI components using the Vercel AI SDK.',
    url: 'https://github.com/Pibomeister/just-bash-vercel-ai-sdk-elements',
    deployUrl:
      'https://vercel.com/new/clone?repository-url=https://github.com/Pibomeister/just-bash-vercel-ai-sdk-elements',
    image: '/github-project.png',
    icon: Terminal,
    language: 'Next.js',
    license: 'MIT',
    tags: ['Next.js 16', 'AI SDK v6', 'RAG'],
  },
]

function RepoCard({ repo, index }: { repo: Repo; index: number }) {
  const Icon = repo.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(17,24,39,0.92) 0%, rgba(11,16,26,0.92) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Visual header */}
      <div
        className="relative h-40 overflow-hidden"
        style={{
          background: repo.image
            ? undefined
            : 'linear-gradient(135deg, rgba(255,212,59,0.06) 0%, rgba(11,16,26,0.6) 100%)',
        }}
      >
        {repo.image ? (
          <>
            <Image
              src={repo.image}
              alt={`${repo.name} preview`}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(11,16,26,0.9) 0%, rgba(11,16,26,0.2) 60%, transparent 100%)',
              }}
            />
          </>
        ) : (
          <>
            {/* Abstract code-line motif */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 gap-2 opacity-40">
              <div className="h-1.5 rounded-full w-3/4" style={{ background: 'rgba(255,212,59,0.25)' }} />
              <div className="h-1.5 rounded-full w-1/2" style={{ background: 'rgba(255,212,59,0.15)' }} />
              <div className="h-1.5 rounded-full w-5/6" style={{ background: 'rgba(255,212,59,0.2)' }} />
              <div className="h-1.5 rounded-full w-2/5" style={{ background: 'rgba(255,212,59,0.1)' }} />
            </div>
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at bottom, var(--color-background) 0%, transparent 70%)',
              }}
            />
          </>
        )}

        <div className="absolute top-4 left-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              background: 'rgba(255,212,59,0.1)',
              border: '1px solid rgba(255,212,59,0.2)',
            }}
          >
            <Icon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold leading-tight">{repo.name}</h3>
            <span
              className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
            >
              {repo.license}
            </span>
          </div>
          <p
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.04em] mb-3"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <Github className="w-3.5 h-3.5" />
            {repo.slug}
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
            {repo.tagline}
          </p>
        </div>

        <p
          className="text-sm leading-relaxed mb-6 flex-1"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {repo.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {repo.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-sm transition-all duration-200 hover:scale-105"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-background)',
            }}
          >
            GitHub Repo <ExternalLink className="w-3.5 h-3.5" />
          </a>
          {'deployUrl' in repo && (
            <a
              href={repo.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-sm border transition-all duration-200 hover:scale-105"
              style={{
                borderColor: 'rgba(255,255,255,0.12)',
                color: 'var(--color-text-primary)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              1-click deploy
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function OpenSourceSection() {
  return (
    <section
      id="open-source"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-12 md:mb-16">
          <FadeUp delay={0.05}>
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Open Source
            </p>
          </FadeUp>
          <WordReveal
            text="Tools for the AI-native workflow."
            as="h2"
            delay={0.12}
            stagger={0.07}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
            wordClassName="text-3xl md:text-4xl font-bold"
          />
          <FadeUp delay={0.2}>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Libraries and reference architectures I build and maintain for agent orchestration,
              skill catalogs, and production AI interfaces.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPOS.map((repo, i) => (
            <RepoCard key={repo.id} repo={repo} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
