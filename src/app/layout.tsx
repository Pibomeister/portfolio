import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-family',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Eduardo Picazo — Forward Deployed Engineer / AI Product Engineer',
  description: 'Personal portfolio of Eduardo Picazo, Forward Deployed Engineer and AI Product Engineer building AI-native products, agent systems, and high-performance web applications.',
  openGraph: {
    title: 'Eduardo Picazo — Forward Deployed Engineer / AI Product Engineer',
    description: 'Personal portfolio of Eduardo Picazo, Forward Deployed Engineer and AI Product Engineer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
