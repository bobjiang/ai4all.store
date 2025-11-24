import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 4 All - AI Camp for High School Students',
  description: 'A 25-hour AI camp for teens (13-18) to master AI fundamentals, experiment with machine learning, and create a portfolio project. Zero coding experience required.',
  keywords: ['AI camp', 'AI course for teens', 'high school AI program', 'machine learning for teens', 'ChatGPT', 'artificial intelligence education'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
