'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { ExternalLink, Github, Rocket, X } from 'lucide-react'
import Image from 'next/image'
import { FadeUp, WordReveal } from './scroll-reveal'

const PROJECT = {
  name: 'Bash AI Elements',
  slug: 'just-bash-vercel-ai-sdk-elements',
  tagline: 'The complete production blueprint for efficient AI agents.',
  repoUrl: 'https://github.com/Pibomeister/just-bash-vercel-ai-sdk-elements',
  demoUrl: '#',
  deployUrl:
    'https://vercel.com/new/clone?repository-url=https://github.com/Pibomeister/just-bash-vercel-ai-sdk-elements',
  highlights: [
    'LlamaParse + LlamaIndex for agentic RAG with citation-first retrieval.',
    'Mastra observational memory for long-term context with strong compression.',
    'Deterministic sidecar.json enrichment for instant Bash navigation and metadata.',
    'Secure just-bash filesystem tooling with practical, sandboxed command workflows.',
    'Vercel ai-elements streaming UI with custom tool rendering and full theming.',
  ],
} as const

const DETAILS = {
  whyItMatters:
    'Traditional RAG pipelines tend to flood prompts and burn tokens. This architecture keeps responses fast and coherent by combining retrieval relevance, memory compression, and deterministic document helpers that Bash tools can use immediately.',
  coreFeatures: [
    'AI Bash Agent Chat with streaming UX and secure tool calls.',
    'Persistent memory context injection with graceful fallback behavior.',
    'Document ingestion and retrieval flow with source-aware citations.',
    'RAG Playground controls for alpha, topK, rerankTopN, and model selection.',
  ],
  enrichment: [
    'Auto-detected title/document type and full table of contents.',
    'Extracted entities and pre-built regex helpers (including Mexican legal patterns).',
    'Navigation shortcuts and integrity hash checks for large files.',
    'Zero-LLM deterministic processing for sidecar generation.',
  ],
  techStack: [
    'Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, Radix UI',
    'AI SDK v6 with OpenAI and Google provider integrations',
    'Mastra memory stack and LlamaCloud retrieval integration',
    'Vitest, ESLint, Biome, Husky with strict TypeScript',
  ],
  appSurfaces: ['/', '/rag-playground', '/prompt-box-demo'],
  localDev: ['pnpm install', 'pnpm dev', 'pnpm validate'],
} as const

export function OpenSourceSection() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <section
        id="open-source"
        className="relative py-24 md:py-36 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          <div className="mb-12">
            <FadeUp delay={0.05}>
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Recent Open Source
              </p>
            </FadeUp>
            <WordReveal
              text="Production-ready AI agent architecture."
              as="h2"
              delay={0.12}
              stagger={0.07}
              className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
              wordClassName="text-3xl md:text-4xl font-bold"
            />
          </div>

          <FadeUp delay={0.16}>
            <div
              className="relative rounded-2xl p-6 md:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(17,24,39,0.92) 0%, rgba(11,16,26,0.92) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <a
                href={PROJECT.demoUrl}
                className="absolute right-6 top-6 md:right-8 md:top-8 z-10 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-[0.12em] uppercase"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.58)',
                }}
              >
                Live demo
              </a>
              <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_1fr] gap-8 items-start">
                <div>
                  <div
                    className="relative rounded-xl overflow-hidden mb-5 ring-1 ring-white/10 shadow-[0_26px_72px_rgba(0,0,0,0.48)]"
                    style={{
                      background: 'rgba(255,255,255,0.01)',
                    }}
                  >
                    <div className="relative aspect-16/10">
                      <Image
                        src="/github-project.png"
                        alt="Screenshot preview of just-bash-vercel-ai-sdk-elements"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 36rem, (min-width: 768px) 80vw, 100vw"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(11,16,26,0.45) 0%, rgba(11,16,26,0.02) 65%)',
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.82)',
                      }}
                    >
                      Next.js 16
                    </span>
                    <span
                      className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      AI SDK v6
                    </span>
                    <span
                      className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      LlamaParse
                    </span>
                    <span
                      className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      Mastra Memory
                    </span>
                    <span
                      className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      Just Bash
                    </span>
                    <span
                      className="text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      AI Elements
                    </span>
                  </div>
                </div>

                <div>
                  <div className="mb-6 pr-24 md:pr-28">
                    <div className="max-w-xl">
                      <p
                        className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        Showcase Repo
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3">{PROJECT.name}</h3>
                      <p
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] mb-3"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        <Github className="w-3.5 h-3.5" />
                        {PROJECT.slug}
                      </p>
                      <p
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.72)' }}
                      >
                        {PROJECT.tagline}
                      </p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 gap-4 mb-8">
                    {PROJECT.highlights.map(item => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed pl-4 relative"
                        style={{
                          color: 'rgba(255,255,255,0.74)',
                        }}
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[0.46rem] font-semibold"
                          style={{ color: 'rgba(255,255,255,0.45)' }}
                        >
                          &gt;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col items-start gap-6">
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={PROJECT.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-sm transition-all duration-200 hover:scale-105"
                        style={{
                          background: 'var(--color-accent)',
                          color: 'var(--color-background)',
                        }}
                      >
                        GitHub Repo <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={PROJECT.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-sm border transition-all duration-200 hover:scale-105"
                        style={{
                          borderColor: 'rgba(255,255,255,0.16)',
                          color: 'var(--color-text-primary)',
                          background: 'rgba(255,255,255,0.04)',
                        }}
                      >
                        1-click deploy <Rocket className="w-4 h-4" />
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center text-sm font-medium transition-colors duration-200"
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      Read the docs &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="open-source-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Open source project details"
          >
            <motion.div
              key="open-source-dialog"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={event => event.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors hover:opacity-80"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'var(--color-text-secondary)',
                }}
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 md:p-8">
                <p
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: 'var(--color-accent)' }}
                >
                  In-depth Overview
                </p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{PROJECT.name}</h3>
                <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                  {DETAILS.whyItMatters}
                </p>

                <div className="space-y-7">
                  <section>
                    <h4 className="text-sm font-semibold tracking-[0.14em] uppercase mb-3">Core Features</h4>
                    <ul className="space-y-2">
                      {DETAILS.coreFeatures.map(item => (
                        <li key={item} className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold tracking-[0.14em] uppercase mb-3">
                      Smart Document Enrichment
                    </h4>
                    <ul className="space-y-2">
                      {DETAILS.enrichment.map(item => (
                        <li key={item} className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold tracking-[0.14em] uppercase mb-3">Tech Stack</h4>
                    <ul className="space-y-2">
                      {DETAILS.techStack.map(item => (
                        <li key={item} className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold tracking-[0.14em] uppercase mb-3">App Surfaces</h4>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      {DETAILS.appSurfaces.join('  |  ')}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold tracking-[0.14em] uppercase mb-3">Local Development</h4>
                    <div
                      className="rounded-xl px-4 py-3 text-sm font-mono"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {DETAILS.localDev.join('\n')}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
