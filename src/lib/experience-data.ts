export type WorkEntry = {
  id: string
  period: string
  role: string
  company: string
  tech: string[]
  current?: boolean
}

export type Achievement = {
  id: string
  iconName: 'Heart' | 'TrendingUp' | 'Sparkles' | 'Rocket' | 'Layers' | 'Shield'
  title: string
  description: string
}

export const WORK_ENTRIES: WorkEntry[] = [
  {
    id: 'current',
    period: 'Nov 2025 – Present',
    role: 'Lead Frontend Engineer',
    company: 'Current Role',
    tech: ['React', 'GraphQL', 'Azure AI', 'Azure SQL'],
    current: true,
  },
  {
    id: 'jetbridge',
    period: 'Aug 2024 – Nov 2025',
    role: 'Lead Fullstack Developer',
    company: 'JetBridge',
    tech: ['SST v3', 'AWS', 'Lambda', 'Prisma', 'PostgreSQL', 'Next.js'],
  },
  {
    id: 'sydecar',
    period: 'Jul 2022 – Aug 2024',
    role: 'Lead Fullstack Developer',
    company: 'Sydecar',
    tech: ['React', 'Node.js', 'NestJS', 'PostgreSQL', 'Python', 'GCP'],
  },
  {
    id: 'presencepg',
    period: 'Apr 2022 – Jul 2022',
    role: 'Lead Fullstack Developer',
    company: 'PresencePG',
    tech: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'conde-nast',
    period: 'Nov 2021 – Apr 2022',
    role: 'Principal Frontend Architect',
    company: 'Condé Nast',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Terraform'],
  },
  {
    id: 'kalyptio',
    period: 'Feb 2019 – Nov 2021',
    role: 'CTO & Lead Fullstack Engineer',
    company: 'Kalyptio',
    tech: ['Node.js', 'React', 'Python', 'FastAPI', 'MongoDB', 'AWS', 'Flutter'],
  },
  {
    id: 'idr',
    period: 'Mar 2015 – Feb 2019',
    role: 'Senior Fullstack Developer',
    company: 'IDR Technologies',
    tech: ['Node.js', 'Angular', 'C#/.NET', 'MongoDB', 'AWS', 'PostgreSQL'],
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'healthcare',
    iconName: 'Heart',
    title: 'Scalable Healthcare',
    description:
      'Engineered systems at JetBridge handling hundreds of thousands of patient benefit investigations and enrollments at scale.',
  },
  {
    id: 'fintech',
    iconName: 'TrendingUp',
    title: 'Fintech & Compliance',
    description:
      'Owned full-stack SPV platform implementation including KYC and compliance features; participated in architecture panels for best practices.',
  },
  {
    id: 'ai',
    iconName: 'Sparkles',
    title: 'Strategic AI Integration',
    description:
      'Pioneered AI venture integration into fintech platforms, leveraging emerging LLM technologies for business strategy.',
  },
  {
    id: 'founding',
    iconName: 'Rocket',
    title: 'Agency Co-Founder',
    description:
      'Co-founded Kalyptio, a digital agency serving 20+ clients across 3 continents in finance, health, and entertainment.',
  },
  {
    id: 'architecture',
    iconName: 'Layers',
    title: 'Architecture & Mentorship',
    description:
      'Designed cost-balanced architectural solutions at Condé Nast while establishing sustainable technical standards and mentoring engineers.',
  },
  {
    id: 'security',
    iconName: 'Shield',
    title: 'Large-Scale Security',
    description:
      'Led developer and testing teams for two major security projects that remain in active use today.',
  },
]
