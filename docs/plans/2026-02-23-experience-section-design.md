# Experience Section Design
Date: 2026-02-23

## Overview
A CV/Experience section placed between Projects and Footer. Two sub-sections: a vertical left-rail timeline of 7 work entries, and a 2×3 achievements grid below.

## Layout
```
[ Section Header: "Experience" / "Where I've built things." ]
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
- Current role (no company name yet) rendered as company: "Current Role"

## Work Entries (newest first)
| Period | Role | Company | Tech |
|--------|------|---------|------|
| Nov 2025 – Present | Lead Frontend Engineer | Current Role | React, GraphQL, Azure AI, Azure SQL |
| Aug 2024 – Nov 2025 | Lead Fullstack Developer | JetBridge | SST v3, AWS, Prisma, PostgreSQL, Next.js |
| Jul 2022 – Aug 2024 | Lead Fullstack Developer | Sydecar | React, Node.js, NestJS, PostgreSQL, Python, GCP |
| Apr 2022 – Jul 2022 | Lead Fullstack Developer | PresencePG | React, Node.js, FastAPI, PostgreSQL, AWS |
| Nov 2021 – Apr 2022 | Principal Frontend Architect | Condé Nast | React, Node.js, PostgreSQL, AWS, Terraform |
| Feb 2019 – Nov 2021 | CTO & Lead Fullstack Engineer | Kalyptio | Node.js, React, Python, FastAPI, MongoDB, AWS, Flutter |
| Mar 2015 – Feb 2019 | Senior Fullstack Developer | IDR Technologies | Node.js, Angular, C#/.NET, MongoDB, AWS, Postgres |

## Achievements Grid
2×3 grid of dark surface cards, each with:
- Gold lucide icon
- Bold short title
- 1–2 sentence description
- Gold border-left accent

Entries:
1. Heart — "Scalable Healthcare" — Engineered systems at JetBridge handling hundreds of thousands of patient benefit investigations.
2. TrendingUp — "Fintech & Compliance" — Full-stack SPV platforms with KYC, compliance, and architecture panel participation.
3. Sparkles — "Strategic AI Integration" — Pioneered AI venture integration into fintech platforms using emerging LLM technologies.
4. Rocket — "Agency Co-Founder" — Co-founded Kalyptio, serving 20+ clients across 3 continents in finance, health & entertainment.
5. Layers — "Architecture & Mentorship" — Designed cost-balanced architectural solutions at Condé Nast; established engineering standards.
6. Shield — "Large-Scale Security" — Led developer and testing teams for two major security projects still in active use today.

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
