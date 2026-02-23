import { ParticleBackground } from '@/components/particle-background'
import { NavHeader } from '@/components/nav-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <main
      className="relative min-h-screen"
      style={{ background: 'var(--color-background)' }}
    >
      <ParticleBackground />
      <NavHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SiteFooter />
    </main>
  )
}
