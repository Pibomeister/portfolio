# Experience Section Design
Date: 2026-02-23

## Overview
A CV/Experience section placed between Projects and Footer. Two sub-sections: a vertical left-rail timeline of 7 work entries, and a 2×3 achievements grid below.

## Layout
```
[ Section Header — see src/components/experience-section.tsx ]
[ Vertical Timeline — 7 entries, newest first ]
[ Achievements Grid — 2×3 cards ]
```

## Timeline
- Gold vertical line on the left, animated scaleY draw-in on scroll
- Each entry:
  - Gold pulsing dot on the line
  - Period badge (gold, above role)
  - Role title (bold, white) + Company name (gold)
  - Tech stack chips (same style as About section)
- Staggered fade-in left→right per entry as it enters viewport
- "Present" badge highlighted differently to show active role
- Current role and company come from `WORK_ENTRIES` in the data source below.

## Work Entries (newest first)

[src/lib/experience-data.ts](../../src/lib/experience-data.ts) owns work history and achievement entries, including their display order.

## Achievements Grid
2×3 grid of dark surface cards, each with:
- Gold lucide icon
- Bold short title
- 1–2 sentence description
- Gold border-left accent

Render `ACHIEVEMENTS` from the data source above.

## Data Shape
```ts
type WorkEntry = {
  period: string
  role: string
  company: string
  tech: string[]
  current?: boolean
}

type Achievement = {
  iconName: string   // lucide icon name
  title: string
  description: string
}
```

## Components
- `src/lib/experience-data.ts` — static data
- `src/components/experience-section.tsx` — orchestrator, section header
- `src/components/timeline-entry.tsx` — single timeline row
- `src/components/achievement-card.tsx` — single achievement card
