import { Github, Linkedin } from 'lucide-react'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative py-12 px-8 md:px-16 overflow-hidden"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="text-[15vw] font-extrabold leading-none tracking-tighter"
          style={{ color: 'rgba(255,255,255,0.02)', userSelect: 'none' }}
        >
          EP
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-sm font-medium"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Eduardo Picazo — Lead Fullstack Engineer
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Pibomeister"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            style={{ color: 'var(--color-text-secondary)' }}
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-picazo-enriquez"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            style={{ color: 'var(--color-text-secondary)' }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <p
          className="text-xs"
          style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}
        >
          © {year}
        </p>
      </div>
    </footer>
  )
}
