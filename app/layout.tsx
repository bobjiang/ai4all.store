import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI4All — AI-Native Product Building Workshops',
  description: 'Intensive workshops for founders and product leaders. Learn to build and ship real software products using AI tools — no coding experience required. Half-day, full-day, and two-day formats available.',
  keywords: ['AI workshop', 'AI product building', 'no-code AI', 'founder workshop', 'product manager training', 'AI development course', 'build with AI', 'AI-native development'],
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3Y4VQJZ7S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q3Y4VQJZ7S');
          `}
        </Script>
      </body>
    </html>
  )
}
