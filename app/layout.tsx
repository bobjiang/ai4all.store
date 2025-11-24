import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI4All - AI Skills for Teens',
  description: 'A hands-on introduction to Artificial Intelligence for teenagers. Learn to use AI tools safely and build real projects.',
  keywords: ['AI course', 'teens', 'artificial intelligence', 'education', 'ChatGPT', 'coding'],
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
