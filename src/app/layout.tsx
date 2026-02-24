import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Eduardo Picazo — Lead Fullstack Engineer',
  description: 'Personal portfolio of Eduardo Picazo, Lead Fullstack Engineer specializing in modern web applications.',
  openGraph: {
    title: 'Eduardo Picazo — Lead Fullstack Engineer',
    description: 'Personal portfolio of Eduardo Picazo, Lead Fullstack Engineer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
