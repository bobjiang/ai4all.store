import type { Metadata } from 'next'
import Script from 'next/script'
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
