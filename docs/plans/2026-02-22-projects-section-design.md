# Projects Section Design
Date: 2026-02-22

## Overview
A full projects section below the About section, consisting of three parts: Featured bento grid, language filter bar, and All Projects masonry list. Cards expand into a detail dialog on click.

## Layout Flow
```
[ Section Header — see src/components/projects-section.tsx ]
[ Featured Bento Grid — asymmetric; entries from src/lib/projects-data.ts ]
[ Filter Bar — All / React / Next.js / React Native / Flutter ]
[ All Projects Masonry — filtered by selected tech ]
```

## Featured Bento Grid
- For the current card layout, see [FeaturedBento](../../src/components/featured-bento.tsx).
- Each card: image with dark gradient overlay at bottom
- Overlay contains: project name + tech stack icons
- Hover: slight scale-up + brighter overlay
- Gold border-left accent on hero card
- Click → opens Project Dialog

## Filter Bar
- Positioned between Featured and All Projects
- Pills: All | React | Next.js | React Native | Flutter
- "All" selected by default
- Active state: gold background + dark text
- Inactive: muted border + secondary text
- Filtering animates with `AnimatePresence` + layout animation

## All Projects Masonry
- CSS columns masonry: 3 cols desktop, 2 tablet, 1 mobile
- Each card: `--color-surface` bg, rounded-xl, gold corner accent
- Shows: project name + tech stack icon row
- Staggered fade-in on scroll via `useInView`
- Click → same Project Dialog

## Project Dialog
- `AnimatePresence` + `motion.div`, scales from center
- Backdrop: blur overlay, click outside to close, Escape key to close
- Dialog content:
  - Project name (large)
  - Short description
  - Tech stack chips
  - Live URL button (optional)
  - Image carousel with arrow nav + dot indicators
- Smooth open/close transition

## Data Shape
```ts
type TechFilter = 'react' | 'nextjs' | 'react-native' | 'flutter'

type Project = {
  id: string
  name: string
  description: string
  tech: TechFilter[]       // for filtering
  techStack: string[]      // display chips (e.g. "TypeScript", "Supabase")
  url?: string
  images: string[]         // placeholder array initially
  featured?: boolean
}
```

## Components
- `projects-section.tsx` — outer section, data, section header
- `featured-bento.tsx` — bento grid layout
- `project-filter-bar.tsx` — pill toggles
- `all-projects-masonry.tsx` — filtered masonry grid
- `project-card.tsx` — shared card (used in both bento and masonry)
- `project-dialog.tsx` — modal with carousel
- `lib/projects-data.ts` — authoritative project data

## Project Data

[src/lib/projects-data.ts](../../src/lib/projects-data.ts) owns the project entries, featured selection, display order, and image paths.
