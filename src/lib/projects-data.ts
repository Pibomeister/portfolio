export type TechFilter = 'react' | 'nextjs' | 'react-native' | 'flutter'

export type Project = {
  id: string
  name: string
  description: string
  tech: TechFilter[]       // used for filter bar
  techStack: string[]      // displayed as chips in dialog
  url?: string
  images: string[]         // placeholder array initially
  featured?: boolean
  accentColor?: string     // per-card gradient accent for placeholder
}

export const FILTERS: { id: TechFilter | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'react', label: 'React' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'react-native', label: 'React Native' },
  { id: 'flutter', label: 'Flutter' },
]

export const PROJECTS: Project[] = [
  // --- Featured (4) ---
  {
    id: 'fluxkeep',
    name: 'Fluxkeep',
    description:
      'A high-performance SaaS platform for real-time data pipeline management. Built to handle millions of events per day with sub-50ms latency.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Redis', 'AWS'],
    url: 'https://fluxkeep.com',
    images: [],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a2035 0%, #0f1825 100%)',
  },
  {
    id: 'storefront-pro',
    name: 'Storefront Pro',
    description:
      'Headless e-commerce platform powering 50+ brands. Custom storefront builder with drag-and-drop and live preview.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'React', 'Shopify', 'GraphQL', 'Tailwind CSS'],
    images: [],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a1525 0%, #0f0f1a 100%)',
  },
  {
    id: 'trackr-mobile',
    name: 'Trackr Mobile',
    description:
      'Cross-platform habit and goal tracking app with offline-first sync and beautiful data visualizations.',
    tech: ['react-native'],
    techStack: ['React Native', 'TypeScript', 'Supabase', 'Reanimated 3'],
    images: [],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a2520 0%, #0f1a15 100%)',
  },
  {
    id: 'designops',
    name: 'DesignOps Suite',
    description:
      'Internal design system management tool used by 200+ engineers. Token management, component playground, and automated Figma sync.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'Storybook', 'Figma API', 'Node.js'],
    images: [],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1f1a10 0%, #1a1408 100%)',
  },

  // --- All Projects (8 more) ---
  {
    id: 'campo-app',
    name: 'Campo',
    description:
      'Flutter app for agricultural field management with GPS mapping and crop analytics.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
    images: [],
    accentColor: 'linear-gradient(135deg, #0f1a10 0%, #0a120a 100%)',
  },
  {
    id: 'finledger',
    name: 'FinLedger',
    description:
      'Real-time financial dashboard for SMBs. Multi-currency, automated reconciliation, and AI-powered insights.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'Recharts'],
    url: 'https://finledger.io',
    images: [],
    accentColor: 'linear-gradient(135deg, #101820 0%, #080f18 100%)',
  },
  {
    id: 'rideflow',
    name: 'RideFlow',
    description:
      'React Native ride-sharing app with live driver tracking, surge pricing, and in-app payments.',
    tech: ['react-native'],
    techStack: ['React Native', 'Expo', 'Stripe', 'Socket.io', 'Node.js'],
    images: [],
    accentColor: 'linear-gradient(135deg, #1a1010 0%, #120808 100%)',
  },
  {
    id: 'contentwave',
    name: 'ContentWave',
    description:
      'CMS platform for media companies. Multi-tenant, real-time collaborative editing, and CDN-integrated media management.',
    tech: ['react', 'nextjs'],
    techStack: ['Next.js', 'React', 'tRPC', 'PostgreSQL', 'S3', 'CloudFront'],
    images: [],
    accentColor: 'linear-gradient(135deg, #181020 0%, #100a18 100%)',
  },
  {
    id: 'medtrack',
    name: 'MedTrack',
    description:
      'Flutter health app for medication scheduling with smart reminders, refill tracking, and caregiver sharing.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'HealthKit'],
    images: [],
    accentColor: 'linear-gradient(135deg, #0f1820 0%, #081018 100%)',
  },
  {
    id: 'launchpad',
    name: 'Launchpad',
    description:
      'Internal dev portal for a 300-person engineering org. Service catalog, runbooks, and incident management in one place.',
    tech: ['react'],
    techStack: ['React', 'TypeScript', 'GraphQL', 'PagerDuty API', 'GitHub API'],
    images: [],
    accentColor: 'linear-gradient(135deg, #1a1520 0%, #100f18 100%)',
  },
  {
    id: 'spotcheck',
    name: 'SpotCheck',
    description:
      'React Native QA inspection app for manufacturing floors. Offline-first with barcode scanning and auto-report generation.',
    tech: ['react-native'],
    techStack: ['React Native', 'Expo', 'SQLite', 'PDF generation', 'BLE'],
    images: [],
    accentColor: 'linear-gradient(135deg, #1a1a10 0%, #121208 100%)',
  },
  {
    id: 'atlas-cms',
    name: 'Atlas CMS',
    description:
      'Next.js-powered CMS for a global NGO. 12 languages, A/B testing, and deep Salesforce integration.',
    tech: ['nextjs'],
    techStack: ['Next.js', 'TypeScript', 'Contentful', 'Salesforce', 'i18n'],
    images: [],
    accentColor: 'linear-gradient(135deg, #101a18 0%, #081210 100%)',
  },
]

export const FEATURED = PROJECTS.filter(p => p.featured)
export const ALL_PROJECTS = PROJECTS.filter(p => !p.featured)
