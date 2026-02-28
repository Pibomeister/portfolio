export type TechFilter = 'react' | 'nextjs' | 'react-native' | 'flutter'

/** Hex color strings for project brand palette (e.g. primary, secondary, accent) */
export type ColorPalette = string[]

export type Project = {
  id: string
  name: string
  description: string
  tech: TechFilter[]       // used for filter bar
  techStack: string[]      // displayed as chips in dialog
  url?: string
  images: string[]         // primary image(s); [0] used in dialog
  imageWide?: string       // optional wide variant for responsive cards (md+)
  logo?: string            // path to project logo (e.g. /logos/fluxkeep.svg)
  logoSize?: 'sm' | 'md' | 'lg'  // sm=24px, md=32px, lg=48px; overrides responsive default
  logoWide?: boolean       // 3x wider aspect for horizontal logos
  colorPalette?: ColorPalette  // brand colors as hex strings
  lightenDialogBackground?: boolean  // use ~10% lighter base when logo blends into background
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
  // --- Featured (6) ---
  {
    id: 'fluxkeep',
    name: 'Fluxkeep',
    description:
      'Privacy-first financial dashboard that turns PDF bank statements into organized insights. No bank credentials needed — AI-powered categorization, subscription detection, and cash flow visualization across all your accounts.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Redis', 'AWS'],
    url: 'https://www.fluxkeep.com',
    images: ['/fluxkeep.png'],
    logo: '/fluxkeep.svg',
    colorPalette: [
      '#0B0C0F', // Primary background (near-black charcoal)
      '#14161B', // Card background
      '#1B1E24', // Secondary surface
      '#A3D977', // Primary green (income / positive)
      '#8EDC5B', // Bright green (progress)
      '#B8E986', // Soft lime (AI badge)
      '#5FAE3A', // Dark green (hover)
    ],
    featured: true,
    accentColor: 'linear-gradient(135deg, #0B0C0F 0%, #14161B 50%, #1B1E24 100%)',
  },
  {
    id: 'storefront-pro',
    name: 'Mi Foto de Perfil',
    description:
      'AI profile photo generator that creates custom styled images from personal photos. From anime and cyberpunk to realistic professional portraits — unique profile pictures without design skills or expensive photoshoots.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'React', 'Shopify', 'GraphQL', 'Tailwind CSS'],
    url: 'https://www.mifotodeperfil.com',
    images: ['/mi-foto-de-perfil.png'],
    logo: '/mi-foto-de-perfil.svg',
    logoWide: true,
    colorPalette: ['#0B1230', '#1B1F4F', '#7C4DFF', '#8E5BFF', '#A78BFA', '#4F46E5', '#A3E635', '#2DD4BF', '#38BDF8', '#F472B6'],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a1525 0%, #0f0f1a 100%)',
  },
  {
    id: 'trackr-mobile',
    name: 'Estudio Foto IA',
    description:
      'AI-powered photo studio that transforms casual selfies into polished corporate headshots for professionals across Latin America — no photoshoot required.',
    tech: ['react-native'],
    techStack: ['React Native', 'TypeScript', 'Supabase', 'Reanimated 3'],
    url: 'https://www.estudiofotoia.com',
    images: ['/estudio-foto-ai.png'],
    logo: '/estudio-foto-ia.svg',
    logoWide: true,
    colorPalette: ['#3B2DD9', '#6A1FD9', '#8A1EDB', '#6C3CF0', '#5A2DE0', '#4F46E5'],
    lightenDialogBackground: true,
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a2520 0%, #0f1a15 100%)',
  },
  {
    id: 'designops',
    name: 'Vonal',
    description:
      'Real-time translation platform that breaks language barriers at live events. Supports 50+ languages with AI-powered translations in fractions of a second — no hardware required.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'Storybook', 'Figma API', 'Node.js'],
    url: 'https://www.vonal.ai',
    images: ['/vonal.png'],
    logo: '/vonal.svg',
    logoWide: true,
    colorPalette: ['#000000', '#1C1C1C', '#EDEDED', '#A8C97F', '#B6D88C', '#8FAE63'],
    featured: true,
    accentColor: 'linear-gradient(135deg, #1f1a10 0%, #1a1408 100%)',
  },
  {
    id: 'rideflow-featured',
    name: 'Naveon Content',
    description:
      'Web platform for building curated media portals for hospice and palliative care patients. Combines the simplicity of a site builder with curated video playlists to deliver personalized patient engagement content.',
    tech: ['react-native'],
    techStack: ['React Native', 'Expo', 'Stripe', 'Socket.io', 'Node.js'],
    url: 'https://www.naveoncontent.com',
    images: ['/naveon-content.png'],
    logo: '/naveon.webp?v=2',
    logoWide: true,
    colorPalette: ['#0077A8', '#005F87', '#F5A623', '#E38C13', '#000000'],
    lightenDialogBackground: true,
    featured: true,
    accentColor: 'linear-gradient(135deg, #1a1010 0%, #120808 100%)',
  },
  {
    id: 'el-abogado-ai',
    name: 'El Abogado AI',
    description:
      'Intelligent workspace for legal professionals to review, analyze, and edit documents at superhuman speed. Natural language queries, automated risk detection, and tracked edits — built with enterprise-grade security for law firms.',
    tech: ['nextjs', 'react'],
    techStack: ['Next.js', 'TypeScript', 'OpenAI', 'LangChain', 'Supabase'],
    url: 'https://www.elabogado.ai',
    images: ['/el-abogado-narrow.jpeg'],
    imageWide: '/el-abogado-wide.jpeg',
    logo: '/elabogado.webp',
    logoWide: true,
    colorPalette: ['#030B0E', '#062226', '#1CC7C9', '#3EDFD8', '#E9F2F3'],
    featured: true,
    accentColor: 'linear-gradient(135deg, #0f1820 0%, #081018 100%)',
  },

  // --- Flutter ---
  {
    id: 'uberall',
    name: 'Uberall',
    description:
      'Multi-location marketing platform that helps businesses manage online presence, reputation, and customer engagement across local search channels.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
    url: 'https://uberall.com',
    images: [],
    logo: '/logos/uberall.png',
    colorPalette: ['#860EFF', '#6109D6', '#14111B', '#0E1224', '#1B0C3B', '#330076'],
    accentColor: 'linear-gradient(135deg, #14111B 0%, #0E1224 100%)',
  },
  {
    id: 'leadferno',
    name: 'Leadferno',
    description:
      'Conversion platform powered by 2-way SMS that helps businesses capture website leads and close them faster through text messaging.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Node.js', 'Firebase'],
    url: 'https://leadferno.com',
    images: [],
    logo: '/logos/leadferno.svg',
    logoWide: true,
    colorPalette: ['#F15537', '#F47C3A', '#39AF25', '#0A84FF', '#252525', '#F8F9FA'],
    accentColor: 'linear-gradient(135deg, #1a0f0a 0%, #120a08 100%)',
  },
  {
    id: 'investnaija',
    name: 'InvestNaija',
    description:
      'Investment platform deepening financial inclusion in Nigeria, enabling users to invest in SEC-registered mutual funds starting from ₦5,000.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    url: 'https://investnaija.com',
    images: [],
    logo: '/logos/investnaija.png',
    colorPalette: ['#eb5959', '#002b43', '#18b4b3', '#f2f2f2', '#252525'],
    accentColor: 'linear-gradient(135deg, #0a1520 0%, #001520 100%)',
  },
  {
    id: 'inhabit-education',
    name: 'Inhabit Education',
    description:
      'Educational platform for early childhood literacy and Indigenous language learning, specializing in Inuktitut materials for northern communities.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Firebase'],
    url: 'https://inhabiteducation.com',
    images: [],
    logo: '/logos/inhabit-education.jpg',
    logoWide: true,
    colorPalette: ['#578fbf', '#4781aa', '#28202e', '#1d1721', '#2b3338', '#57595f'],
    accentColor: 'linear-gradient(135deg, #1a2030 0%, #101520 100%)',
  },
  {
    id: 'pyvott',
    name: 'Pyvott',
    description:
      'Social media platform connecting communities through shared content, real-time interactions, and personalized feeds.',
    tech: ['flutter'],
    techStack: ['Flutter', 'Dart', 'Node.js', 'NestJS'],
    url: 'https://pyvott.com',
    images: [],
    logo: '/logos/pyvott.svg',
    colorPalette: ['#313131', '#0693e3', '#007cba', '#eeeeee', '#ffffff'],
    accentColor: 'linear-gradient(135deg, #0a1520 0%, #081018 100%)',
  },

  // --- Node.js / NestJS ---
  {
    id: 'condenast',
    name: 'Condé Nast',
    description:
      'Global media company behind Vogue, GQ, Wired, and The New Yorker — reaching over 1 billion consumers across print, digital, and social.',
    tech: [],
    techStack: ['Node.js', 'NestJS', 'TypeScript'],
    url: 'https://www.condenast.com',
    images: [],
    logo: '/logos/condenast.png',
    colorPalette: ['#111111', '#529fcb', '#1c5ea8', '#FFFFFF', '#333333'],
    accentColor: 'linear-gradient(135deg, #0a0a0a 0%, #080808 100%)',
  },
  {
    id: 'kidzania',
    name: 'KidZania',
    description:
      'Interactive entertainment platform where children ages 4–14 explore real-world professions inside child-sized city replicas.',
    tech: [],
    techStack: ['Node.js', 'NestJS', 'TypeScript'],
    url: 'https://mexico.kidzania.com',
    images: [],
    logo: '/logos/kidzania.png',
    colorPalette: ['#ac0033', '#333333', '#FF6B35', '#FFA500', '#FFFFFF'],
    accentColor: 'linear-gradient(135deg, #1a0a10 0%, #120810 100%)',
  },

  // --- React / Next.js ---
  {
    id: 'equalstrue',
    name: 'EqualsTrue',
    description:
      'Digital agency platform for building, scaling, and delivering custom web development and technology solutions.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript'],
    url: 'https://equalstrue.tech',
    images: [],
    logo: '/logos/equalstrue.svg',
    logoWide: true,
    colorPalette: ['#F12A30', '#222222', '#631A1C', '#CB0E14', '#FF555A', '#A71115'],
    accentColor: 'linear-gradient(135deg, #1a0a0a 0%, #120808 100%)',
  },
  {
    id: 'space-plan-wizard',
    name: 'Space Plan Wizard',
    description:
      'Platform that digitizes workplace floor plans into actionable intelligence for data-driven space optimization and real estate decisions.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    url: 'https://spaceplanwizard.com',
    images: [],
    logo: '/logos/spw.webp',
    logoWide: true,
    colorPalette: ['#0066CC', '#333333', '#F5F5F5', '#FFFFFF', '#1a3a5c'],
    accentColor: 'linear-gradient(135deg, #0a1520 0%, #081018 100%)',
  },
  {
    id: 'sydecar',
    name: 'Sydecar',
    description:
      'Deal execution platform for venture investors — automating SPV creation, banking, compliance, contracts, and reporting in minutes.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript'],
    url: 'https://sydecar.io',
    images: [],
    logo: '/logos/sydecar.png',
    colorPalette: ['#e7fd66', '#52c0a3', '#ec84b1', '#66cce9', '#ff9f5b', '#121212', '#f8f7ef'],
    accentColor: 'linear-gradient(135deg, #0a1210 0%, #080e0c 100%)',
  },
  {
    id: 'jetbridge',
    name: 'JetBridge',
    description:
      'Healthcare data platform for Medicaid patient ingestion — streamlining enrollment, eligibility verification, and patient record management.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript'],
    url: 'https://jetbridge.com',
    images: [],
    logo: '/logos/jetbridge.png',
    colorPalette: ['#44FF00', '#000000', '#F5F5F5', '#373737', '#0E88B2', '#3C96D2'],
    accentColor: 'linear-gradient(135deg, #0a1a08 0%, #081208 100%)',
  },
  {
    id: 'oneauctionview',
    name: 'OneAuctionView',
    description:
      'Centralized auction management software helping auto dealers search, evaluate, and acquire vehicles across 1,000+ auction locations.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript'],
    url: 'https://oneauctionview.com',
    images: [],
    logo: '/logos/oneauctionview.png',
    colorPalette: ['#1a237e', '#283593', '#3949ab', '#5c6bc0', '#c5cae9'],
    accentColor: 'linear-gradient(135deg, #0a0f20 0%, #080c18 100%)',
  },
  {
    id: 'imperfect-foods',
    name: 'Imperfect Foods',
    description:
      'Online grocery delivery service sourcing produce with cosmetic imperfections from farmers, reducing food waste at lower prices.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'TypeScript'],
    url: 'https://www.imperfectfoods.com',
    images: [],
    logo: '/logos/imperfect-foods.png',
    logoWide: true,
    colorPalette: ['#F0D3E3', '#F8F2ED', '#C6E8EB', '#C5DB66', '#F7D46D'],
    accentColor: 'linear-gradient(135deg, #1a1510 0%, #121008 100%)',
  },
  {
    id: 'seiu',
    name: 'SEIU',
    description:
      'Digital platform for the 2-million-member labor union representing workers in healthcare, public services, and property services.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'TypeScript'],
    url: 'https://www.seiu.org',
    images: [],
    logo: '/logos/seiu.png',
    colorPalette: ['#6C419A', '#FFC107', '#2AB54D', '#1F90B0', '#D14334', '#212529'],
    accentColor: 'linear-gradient(135deg, #1a1020 0%, #100a18 100%)',
  },
  {
    id: 'union-hiring-hall',
    name: 'Union Hiring Hall',
    description:
      'Job search platform connecting workers with union positions offering higher wages, better benefits, and contract-protected employment.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'TypeScript'],
    url: 'https://www.unionhiringhall.org',
    images: [],
    logo: '/logos/unionhiringhall.png',
    colorPalette: ['#1e3a5f', '#2a5298', '#e87722', '#f5a623', '#f3f4f6'],
    accentColor: 'linear-gradient(135deg, #0f1a28 0%, #0a1018 100%)',
  },
  {
    id: 'portexpro',
    name: 'PortexPro',
    description:
      'Freight management platform where shippers quote, bid, track, and analyze freight with carriers — all in one place.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'TypeScript'],
    url: 'https://www.portexpro.com',
    images: [],
    logo: '/logos/portexpro.svg',
    logoWide: true,
    colorPalette: ['#0045ff', '#6941C6', '#F2F4F7', '#FFFFFF'],
    accentColor: 'linear-gradient(135deg, #0a0f20 0%, #080a18 100%)',
  },
  {
    id: 'freight99',
    name: 'Freight99',
    description:
      'AI-powered pricing intelligence that analyzes shipper data for instant insights on pricing trends, win/loss rates, and competitive metrics.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'TypeScript'],
    url: 'https://www.freight-99.com',
    images: [],
    logo: '/logos/freight99.svg',
    colorPalette: ['#ff6db1', '#a66bff', '#6aa6ff', '#3ecf8e', '#ffb6c1', '#cdadff'],
    accentColor: 'linear-gradient(135deg, #1a1020 0%, #100a18 100%)',
  },
  {
    id: 'borrego',
    name: 'Borrego Energy',
    description:
      'Utility-scale solar and energy storage platform supporting engineering, procurement, and construction for renewable energy projects.',
    tech: ['react', 'nextjs'],
    techStack: ['React', 'Next.js', 'TypeScript'],
    url: 'https://www.borregoenergy.com',
    images: [],
    logo: '/logos/borrego.svg',
    logoWide: true,
    colorPalette: ['#000000', '#313131', '#007cba', '#FFFFFF', '#4CAF50'],
    accentColor: 'linear-gradient(135deg, #0a1518 0%, #080f12 100%)',
  },
]

export const FEATURED = PROJECTS.filter(p => p.featured)
export const ALL_PROJECTS = PROJECTS.filter(p => !p.featured)
