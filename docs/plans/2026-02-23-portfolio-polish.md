# Portfolio Polish Pass Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Elevate the portfolio's visual distinctiveness by upgrading typography, adding texture, fixing generic patterns, and adding an animated code snippet to the hero.

**Architecture:** All changes are isolated to existing component files plus layout.tsx and globals.css. No new dependencies except Space Grotesk Google Font. The code snippet component is new but self-contained.

**Tech Stack:** Next.js 15, Tailwind CSS v4, motion/react (Framer Motion), TypeScript

---

### Task 1: Add Space Grotesk Display Font

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

**Step 1: Add Space Grotesk import to layout.tsx**

```tsx
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// In RootLayout, apply both variables:
// <html lang="en" className={`${jakarta.variable} ${grotesk.variable}`}>
```

**Step 2: Add display font token to globals.css**

```css
@theme {
  --color-background: #0b101a;
  --color-surface: #111827;
  --color-accent: #ffb800;
  --color-accent-dim: #cc9200;
  --color-text-primary: #ffffff;
  --color-text-secondary: #8a95a5;
  --color-border: rgba(255, 255, 255, 0.08);

  --font-sans: var(--font-jakarta);
  --font-display: var(--font-grotesk);
}
```

**Step 3: Apply display font to h1/h2 globally in globals.css**

```css
h1, h2 {
  font-family: var(--font-display), sans-serif;
}
```

---

### Task 2: Add SVG Grain Texture

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx` (add SVG filter element to body)

**Step 1: Add grain SVG filter + overlay in globals.css**

```css
/* Grain overlay */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
```

---

### Task 3: Fix Button Corners in Hero

**Files:**
- Modify: `src/components/hero-section.tsx`

**Step 1: Change primary CTA from rounded-full to rounded-sm**

Find the gold "View Work" button:
```tsx
className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full ..."
```
Change to:
```tsx
className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm ..."
```

**Step 2: Change secondary "Connect" button from rounded-full to rounded**

```tsx
className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded border ..."
```

---

### Task 4: Remove Watermarks from Projects and Experience Sections

**Files:**
- Modify: `src/components/projects-section.tsx`
- Modify: `src/components/experience-section.tsx`

**Step 1: Remove watermark div from projects-section.tsx**

Remove the block that renders the large "WORK" (or similar) text watermark.

**Step 2: Remove watermark div from experience-section.tsx**

Remove the block that renders the "CV" text watermark.

Keep watermarks only in hero-section.tsx (EP) and about-section.tsx (ABOUT).

---

### Task 5: Projects Section Header Redesign (Counter Layout)

**Files:**
- Modify: `src/components/projects-section.tsx`

**Step 1: Replace the standard header with an editorial counter layout**

Remove the current:
```tsx
<motion.p className="text-xs font-semibold tracking-[0.3em] uppercase ...">Projects</motion.p>
<WordReveal text="Work I'm proud of." ... />
```

Replace with:
```tsx
<div className="flex items-baseline gap-6 mb-16">
  {/* Large counter */}
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-[8rem] font-bold leading-none select-none"
    style={{
      fontFamily: 'var(--font-display)',
      color: 'rgba(255, 184, 0, 0.15)',
      lineHeight: 1,
    }}
  >
    03
  </motion.span>

  {/* Heading beside it */}
  <div className="flex flex-col gap-2">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-xs font-semibold tracking-[0.3em] uppercase"
      style={{ color: 'var(--color-accent)' }}
    >
      Projects
    </motion.p>
    <WordReveal
      text="Work I'm proud of."
      className="text-4xl md:text-5xl font-bold tracking-tight"
      delay={0.15}
    />
  </div>
</div>
```

Note: Section number `03` because: 01 = About, 02 = Experience (or re-order as needed).

---

### Task 6: Animated Code Snippet in Hero Right Panel

**Files:**
- Create: `src/components/hero-code-snippet.tsx`
- Modify: `src/components/hero-section.tsx`

**Step 1: Create hero-code-snippet.tsx**

A self-contained component that renders a syntax-highlighted TypeScript snippet with a typewriter line-by-line animation on mount. Uses Framer Motion `useAnimate` or staggered `motion.div` variants. No external syntax highlighter needed — manual spans with color styles.

```tsx
'use client'

import { motion } from 'motion/react'

const CODE_LINES = [
  { tokens: [
    { text: 'async function', color: '#c792ea' },
    { text: ' fetchUser', color: '#82aaff' },
    { text: '<', color: '#89ddff' },
    { text: 'T', color: '#ffcb6b' },
    { text: '>(', color: '#89ddff' },
    { text: 'id', color: '#f78c6c' },
    { text: ': ', color: '#89ddff' },
    { text: 'string', color: '#c792ea' },
    { text: '): ', color: '#89ddff' },
    { text: 'Promise', color: '#ffcb6b' },
    { text: '<T> {', color: '#89ddff' },
  ]},
  { tokens: [{ text: '  const controller = new ', color: '#8a95a5' }, { text: 'AbortController', color: '#82aaff' }, { text: '()', color: '#89ddff' }] },
  { tokens: [{ text: '  const signal = controller.signal', color: '#8a95a5' }] },
  { tokens: [] }, // blank line
  { tokens: [{ text: '  try {', color: '#89ddff' }] },
  { tokens: [{ text: '    const res = await ', color: '#8a95a5' }, { text: 'fetch', color: '#82aaff' }, { text: '(`/api/users/${', color: '#89ddff' }, { text: 'id', color: '#f78c6c' }, { text: '}`, { signal })', color: '#89ddff' }] },
  { tokens: [{ text: '    if ', color: '#c792ea' }, { text: '(!res.ok) ', color: '#89ddff' }, { text: 'throw new ', color: '#c792ea' }, { text: 'Error', color: '#82aaff' }, { text: '(res.statusText)', color: '#89ddff' }] },
  { tokens: [{ text: '    return ', color: '#c792ea' }, { text: 'res.json', color: '#82aaff' }, { text: '() as ', color: '#89ddff' }, { text: 'Promise', color: '#ffcb6b' }, { text: '<T>', color: '#89ddff' }] },
  { tokens: [{ text: '  } catch ', color: '#c792ea' }, { text: '(err) {', color: '#89ddff' }] },
  { tokens: [{ text: '    controller.abort()', color: '#8a95a5' }] },
  { tokens: [{ text: '    throw err', color: '#8a95a5' }] },
  { tokens: [{ text: '  }', color: '#89ddff' }] },
  { tokens: [{ text: '}', color: '#89ddff' }] },
]

export function HeroCodeSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative w-full max-w-lg mx-auto"
      style={{ transform: 'rotate(-2deg)' }}
    >
      {/* Window chrome */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,184,0,0.05)',
        }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-2 text-xs" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>fetchUser.ts</span>
        </div>

        {/* Code */}
        <div className="p-5 overflow-hidden" style={{ fontFamily: "'Fira Code', 'Cascadia Code', monospace", fontSize: '0.78rem', lineHeight: '1.7' }}>
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.06, ease: 'easeOut' }}
              style={{ minHeight: '1.7em' }}
            >
              {line.tokens.map((token, j) => (
                <span key={j} style={{ color: token.color }}>{token.text}</span>
              ))}
            </motion.div>
          ))}

          {/* Blinking cursor on last line */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.8 + CODE_LINES.length * 0.06 }}
            style={{ display: 'inline-block', width: '2px', height: '1em', background: 'var(--color-accent)', verticalAlign: 'middle' }}
          />
        </div>
      </div>

      {/* Ambient glow behind card */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-2xl"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,184,0,0.06) 0%, transparent 70%)' }}
      />
    </motion.div>
  )
}
```

**Step 2: Update hero-section.tsx right panel**

Replace the gradient placeholder div with `<HeroCodeSnippet />`:

```tsx
import { HeroCodeSnippet } from './hero-code-snippet'

// In the right panel (hidden lg:flex div):
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, delay: 0.3, ease }}
  className="relative hidden lg:flex items-center justify-center overflow-hidden"
  style={{ minHeight: '100vh' }}
>
  <HeroCodeSnippet />

  {/* Subtle vertical accent line — keep this */}
  <div
    aria-hidden
    className="absolute left-0 top-1/4 bottom-1/4 w-px"
    style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)' }}
  />
</motion.div>
```

---

### Verification

```bash
cd /workspace/group/portfolio
npm run build
```

Expected: Clean build, no TypeScript errors.
