'use client'

import { motion } from 'motion/react'

type Token = { text: string; color: string }
type CodeLine = { tokens: Token[] }

const CODE_LINES: CodeLine[] = [
  { tokens: [
    { text: 'import', color: '#c792ea' },
    { text: ' { useEffect, useRef, useState } ', color: '#cdd5e0' },
    { text: 'from', color: '#c792ea' },
    { text: " 'react'", color: '#c3e88d' },
  ]},
  { tokens: [] },
  { tokens: [
    { text: 'function ', color: '#c792ea' },
    { text: 'useFetch', color: '#82aaff' },
    { text: '<', color: '#89ddff' },
    { text: 'T', color: '#ffcb6b' },
    { text: '>(', color: '#89ddff' },
    { text: 'url', color: '#f78c6c' },
    { text: ': ', color: '#89ddff' },
    { text: 'string', color: '#c792ea' },
    { text: ') {', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '  const ', color: '#c792ea' },
    { text: '[data, setData] = ', color: '#cdd5e0' },
    { text: 'useState', color: '#82aaff' },
    { text: '<', color: '#89ddff' },
    { text: 'T ', color: '#ffcb6b' },
    { text: '| ', color: '#89ddff' },
    { text: 'null', color: '#c792ea' },
    { text: '>(', color: '#89ddff' },
    { text: 'null', color: '#c792ea' },
    { text: ')', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '  const ', color: '#c792ea' },
    { text: '[loading, setLoading] = ', color: '#cdd5e0' },
    { text: 'useState', color: '#82aaff' },
    { text: '(', color: '#89ddff' },
    { text: 'true', color: '#c792ea' },
    { text: ')', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '  const ', color: '#c792ea' },
    { text: '[error, setError] = ', color: '#cdd5e0' },
    { text: 'useState', color: '#82aaff' },
    { text: '<', color: '#89ddff' },
    { text: 'string ', color: '#ffcb6b' },
    { text: '| ', color: '#89ddff' },
    { text: 'null', color: '#c792ea' },
    { text: '>(', color: '#89ddff' },
    { text: 'null', color: '#c792ea' },
    { text: ')', color: '#89ddff' },
  ]},
  { tokens: [] },
  { tokens: [
    { text: '  ', color: '#cdd5e0' },
    { text: 'useEffect', color: '#82aaff' },
    { text: '(() => {', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '    const ', color: '#c792ea' },
    { text: 'ctrl = ', color: '#cdd5e0' },
    { text: 'new ', color: '#c792ea' },
    { text: 'AbortController', color: '#82aaff' },
    { text: '()', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '    ', color: '#cdd5e0' },
    { text: 'fetch', color: '#82aaff' },
    { text: '(url, { signal: ctrl.signal })', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '      .then', color: '#82aaff' },
    { text: '(r => r.', color: '#89ddff' },
    { text: 'json', color: '#82aaff' },
    { text: '<', color: '#89ddff' },
    { text: 'T', color: '#ffcb6b' },
    { text: '>())', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '      .then', color: '#82aaff' },
    { text: '(setData)', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '      .catch', color: '#82aaff' },
    { text: '(e => ', color: '#89ddff' },
    { text: 'setError', color: '#82aaff' },
    { text: '(e.message))', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '      .finally', color: '#82aaff' },
    { text: '(() => ', color: '#89ddff' },
    { text: 'setLoading', color: '#82aaff' },
    { text: '(', color: '#89ddff' },
    { text: 'false', color: '#c792ea' },
    { text: '))', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '    return ', color: '#c792ea' },
    { text: '() => ctrl.', color: '#cdd5e0' },
    { text: 'abort', color: '#82aaff' },
    { text: '()', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '  }, [url])', color: '#89ddff' },
  ]},
  { tokens: [] },
  { tokens: [
    { text: '  return ', color: '#c792ea' },
    { text: '{ data, loading, error }', color: '#89ddff' },
  ]},
  { tokens: [
    { text: '}', color: '#89ddff' },
  ]},
]

export function HeroCodeSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative w-full max-w-lg mx-auto"
      style={{ transform: 'rotate(-1.5deg)' }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(255,184,0,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Window card */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: 'rgba(13, 18, 30, 0.92)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,184,0,0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255, 95, 87, 0.7)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255, 189, 46, 0.7)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40, 202, 66, 0.7)' }} />
          <span
            className="ml-3 text-[11px] tracking-wide"
            style={{ color: 'rgba(255,255,255,0.18)', fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace" }}
          >
            useFetch.ts
          </span>
        </div>

        {/* Code body */}
        <div
          className="px-5 py-4 overflow-hidden"
          style={{
            fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', 'Courier New', monospace",
            fontSize: '0.72rem',
            lineHeight: '1.75',
          }}
        >
          {/* Line numbers + code */}
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.25,
                delay: 0.7 + i * 0.05,
                ease: 'easeOut',
              }}
              className="flex gap-4"
              style={{ minHeight: '1.75em' }}
            >
              {/* Line number */}
              <span
                className="select-none shrink-0 w-5 text-right"
                style={{ color: 'rgba(255,255,255,0.12)' }}
              >
                {i + 1}
              </span>
              {/* Tokens */}
              <span>
                {line.tokens.map((token, j) => (
                  <span key={j} style={{ color: token.color }}>
                    {token.text}
                  </span>
                ))}
              </span>
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + CODE_LINES.length * 0.05 + 0.2 }}
          >
            <span className="shrink-0 w-5" />
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                display: 'inline-block',
                width: '1.5px',
                height: '0.85em',
                background: 'var(--color-accent)',
                verticalAlign: 'middle',
                borderRadius: '1px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
