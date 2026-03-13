# AI4All.store Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite ai4all.store from a teen AI camp to a premium AI-native product building workshop site with 3 course tiers and Stripe checkout.

**Architecture:** Single-page Next.js 15 + React 19 + TypeScript + Tailwind CSS 3. Nine components rendered sequentially. Dark slate theme with gradient accents. No new routes, no backend, no new dependencies.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, Stripe Buy Button (web component)

**Spec:** `docs/superpowers/specs/2026-03-13-website-redesign-design.md`

---

## Chunk 1: Foundation, Layout, and All Components

### Task 1: Update Tailwind config and global styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Update `tailwind.config.ts` with new color palette**

Replace the existing `colors` in `theme.extend` with the new palette. Keep `content` paths unchanged.

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        accent: {
          blue: '#38bdf8',
          purple: '#818cf8',
          violet: '#c084fc',
          pink: '#f472b6',
        },
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 2: Update `app/globals.css`**

Keep `scroll-behavior: smooth`. Update body background and text colors for the dark theme.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #0f172a;
  color: #ffffff;
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "Update Tailwind config and global styles for dark theme"
```

---

### Task 2: Update layout metadata and remove ConvertKit

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Rewrite `app/layout.tsx`**

Update metadata for the new product. Remove any ConvertKit references (none in layout, but verify). Keep GA4 script.

```typescript
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
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "Update metadata for AI workshop product, keep GA4"
```

---

### Task 3: Rewrite Header component

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Rewrite `components/Header.tsx`**

Sticky dark header with logo, nav links, and CTA button. Server component (no `'use client'`).

```tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary-900/95 backdrop-blur-sm border-b border-primary-700/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-xl text-white tracking-tight">
          AI4All
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-sm text-slate-400 hover:text-white transition-colors">
            Courses
          </a>
          <a href="#faq" className="text-sm text-slate-400 hover:text-white transition-colors">
            FAQ
          </a>
          <a href="mailto:bob@ai4all.store" className="text-sm text-slate-400 hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="#courses"
            className="bg-gradient-to-r from-sky-400 to-indigo-400 text-slate-900 px-5 py-2 rounded-lg text-sm font-semibold hover:from-sky-300 hover:to-indigo-300 transition-all"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile CTA - always visible on small screens */}
        <a
          href="#courses"
          className="md:hidden bg-gradient-to-r from-sky-400 to-indigo-400 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "Rewrite Header with dark theme, sticky nav, and Book Now CTA"
```

---

### Task 4: Rewrite Hero component

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Rewrite `components/Hero.tsx`**

Outcome-focused hero with gradient headline text. Client component for the gradient text CSS (could be server but keeping `'use client'` consistent with spec).

```tsx
'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-900 to-primary-800 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold mb-6">
          For Founders & Product Leaders
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          From Idea to{' '}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Shipped Product
          </span>
          {' '}in One Day
        </h1>

        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Learn to direct AI coding tools to build real software. No programming
          experience needed — just your product vision.
        </p>

        <a
          href="#courses"
          className="inline-block bg-gradient-to-r from-sky-400 to-indigo-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg hover:from-sky-300 hover:to-indigo-300 transition-all shadow-lg shadow-sky-400/20"
        >
          Book a Workshop
        </a>

        <div className="mt-6 flex justify-center gap-6 text-sm text-slate-500">
          <span>&#10003; Half-Day</span>
          <span>&#10003; Full-Day</span>
          <span>&#10003; Two-Day</span>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "Rewrite Hero with gradient headline and workshop CTA"
```

---

### Task 5: Create ValueProposition component

**Files:**
- Create: `components/ValueProposition.tsx`
- Delete: `components/ProblemOutcome.tsx`

- [ ] **Step 1: Create `components/ValueProposition.tsx`**

Server component. Four outcomes in a responsive grid with inline SVG icons.

```tsx
export default function ValueProposition() {
  const outcomes = [
    {
      title: 'Ship Real Products',
      description: 'Deploy working web applications from idea to live URL in hours',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#grad-blue)" strokeWidth={1.5}>
          <defs><linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#818cf8" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
    {
      title: 'Direct AI, Don\'t Code',
      description: 'Learn to manage AI coding tools like a product leader manages a team',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#grad-purple)" strokeWidth={1.5}>
          <defs><linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#c084fc" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      ),
    },
    {
      title: 'Master the AI Workflow',
      description: 'Research, Plan, Implement, Test — the professional AI development loop',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#grad-violet)" strokeWidth={1.5}>
          <defs><linearGradient id="grad-violet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#f472b6" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      ),
    },
    {
      title: 'Leave With a Toolkit',
      description: 'PRD templates, prompt library, context engineering frameworks you\'ll use forever',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#grad-pink)" strokeWidth={1.5}>
          <defs><linearGradient id="grad-pink" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#f472b6" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 px-4 bg-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-primary-800 border border-primary-700 rounded-xl p-6"
            >
              <div className="mb-4">{outcome.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{outcome.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Delete `components/ProblemOutcome.tsx`**

```bash
rm components/ProblemOutcome.tsx
```

- [ ] **Step 3: Commit** (build will fail until page.tsx is updated in Task 12 — this is expected)

```bash
git add components/ValueProposition.tsx
git rm components/ProblemOutcome.tsx
git commit -m "Add ValueProposition, remove ProblemOutcome"
```

---

### Task 6: Create CourseTiers component with Stripe

**Files:**
- Create: `components/CourseTiers.tsx`
- Delete: `components/CourseSnapshot.tsx`

- [ ] **Step 1: Create `components/CourseTiers.tsx`**

Client component for Stripe script loading. Three pricing cards with middle featured.

```tsx
'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

const STRIPE_PUBLISHABLE_KEY = 'pk_live_51PjrbmRuO2Zel37KZFZIefEHwYeOlj9AACIghFQ9mKM7kZHuHsAgzHvyPrjo81hKebLMt0gitYNThPBt10T2C9Ku007cTyCy1U'

const tiers = [
  {
    name: 'Half-Day',
    duration: '4 Hours',
    descriptor: 'Intensive',
    price: '3,000',
    accent: 'sky',
    gradientFrom: 'from-sky-400',
    gradientTo: 'to-indigo-400',
    labelColor: 'text-sky-400',
    buyButtonId: 'PLACEHOLDER_HALF_DAY',
    features: [
      'Ship a working app in the first 45 minutes',
      'AI-native mindset & Agent Manager model',
      'Prompt engineering (3 core techniques)',
      'Context engineering essentials',
      'Build & deploy from spec to live URL',
    ],
    featured: false,
  },
  {
    name: 'Full-Day',
    duration: '8 Hours',
    descriptor: 'Comprehensive',
    price: '5,000',
    accent: 'indigo',
    gradientFrom: 'from-indigo-400',
    gradientTo: 'to-violet-400',
    labelColor: 'text-indigo-400',
    buyButtonId: 'PLACEHOLDER_FULL_DAY',
    features: [
      'Everything in Half-Day',
      'Full PRD & specification writing',
      '5-technique prompt engineering framework',
      'Professional dev environment setup (Cursor, Git, Vercel)',
      'Build & deploy interactive multi-feature app',
    ],
    featured: true,
  },
  {
    name: 'Two-Day',
    duration: '16 Hours',
    descriptor: 'Complete',
    price: '9,000',
    accent: 'violet',
    gradientFrom: 'from-violet-400',
    gradientTo: 'to-pink-400',
    labelColor: 'text-violet-400',
    buyButtonId: 'PLACEHOLDER_TWO_DAY',
    features: [
      'Everything in Full-Day',
      'Rapid prototyping sprint (5 prototypes)',
      'Database & user authentication (Supabase)',
      'Payment processing (Stripe)',
      'Testing, QA & production deployment',
    ],
    featured: false,
  },
]

export default function CourseTiers() {
  const stripeRefs = useRef<(HTMLDivElement | null)[]>([])
  const stripeLoaded = useRef(false)

  function renderStripeButtons() {
    if (stripeLoaded.current) return
    stripeLoaded.current = true
    tiers.forEach((tier, index) => {
      const container = stripeRefs.current[index]
      if (container && !container.hasChildNodes()) {
        const btn = document.createElement('stripe-buy-button')
        btn.setAttribute('buy-button-id', tier.buyButtonId)
        btn.setAttribute('publishable-key', STRIPE_PUBLISHABLE_KEY)
        container.appendChild(btn)
      }
    })
  }

  useEffect(() => {
    // If Stripe script loaded before component mount (cached), render buttons immediately
    if (typeof window !== 'undefined' && document.querySelector('script[src*="buy-button"]')) {
      renderStripeButtons()
    }
  }, [])

  return (
    <section id="courses" className="py-20 px-4 bg-primary-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4 tracking-tight">
          Choose Your Workshop
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Intensive training for teams up to 10. Available in-person or online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-xl p-8 text-center ${
                tier.featured
                  ? 'bg-gradient-to-b from-primary-800 to-primary-900 border-2 border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.15)] md:scale-105 relative'
                  : 'bg-primary-900 border border-primary-700'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <p className={`text-xs uppercase tracking-[0.2em] ${tier.labelColor} font-semibold mb-2`}>
                {tier.name}
              </p>
              <p className="text-3xl font-extrabold text-white">{tier.duration}</p>
              <p className="text-sm text-slate-500 mb-4">{tier.descriptor}</p>

              <p className="text-3xl font-bold text-white mb-1">${tier.price}</p>
              <p className="text-xs text-slate-500 mb-6">AUD / class</p>

              <ul className="text-left space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-400">
                    <span className={`${tier.labelColor} mr-2 mt-0.5 flex-shrink-0`}>&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                ref={(el) => { stripeRefs.current[index] = el }}
                className="flex justify-center"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Up to 10 participants per class &middot; 10+?{' '}
          <a href="mailto:bob@ai4all.store" className="text-indigo-400 underline hover:text-indigo-300">
            Let&apos;s talk
          </a>
        </p>
      </div>

      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="lazyOnload"
        onLoad={renderStripeButtons}
      />
    </section>
  )
}
```

- [ ] **Step 2: Delete `components/CourseSnapshot.tsx`**

```bash
rm components/CourseSnapshot.tsx
```

- [ ] **Step 3: Commit**

```bash
git add components/CourseTiers.tsx
git rm components/CourseSnapshot.tsx
git commit -m "Add CourseTiers with Stripe, remove CourseSnapshot"
```

---

### Task 7: Create SyllabusComparison component

**Files:**
- Create: `components/SyllabusComparison.tsx`

- [ ] **Step 1: Create `components/SyllabusComparison.tsx`**

Server component. Comparison table with alternating row backgrounds.

```tsx
const rows = [
  { topic: 'First AI-built app deployment', halfDay: '✓', fullDay: '✓', twoDay: '✓' },
  { topic: 'Agent Manager mindset', halfDay: '✓', fullDay: '✓', twoDay: '✓' },
  { topic: 'Prompt engineering', halfDay: '3 techniques', fullDay: '5 techniques', twoDay: '5 techniques' },
  { topic: 'Context engineering', halfDay: '✓', fullDay: '✓', twoDay: '✓ + deeper lab' },
  { topic: 'PRD / specification writing', halfDay: 'Lite', fullDay: 'Full', twoDay: 'Full + iteration' },
  { topic: 'AI-first dev environment (Cursor, Git)', halfDay: '—', fullDay: '✓', twoDay: '✓' },
  { topic: 'Rapid prototyping sprint', halfDay: '—', fullDay: '—', twoDay: '5 prototypes' },
  { topic: 'Database & authentication', halfDay: '—', fullDay: '—', twoDay: '✓' },
  { topic: 'Payment processing (Stripe)', halfDay: '—', fullDay: '—', twoDay: 'Stretch goal' },
  { topic: 'Multi-agent coordination', halfDay: '—', fullDay: '—', twoDay: '✓' },
  { topic: 'Automated testing / QA', halfDay: '—', fullDay: 'Manual only', twoDay: '3-layer approach' },
  { topic: 'Production deployment & monitoring', halfDay: '—', fullDay: '—', twoDay: '✓' },
]

function CellContent({ value }: { value: string }) {
  if (value === '✓') return <span className="text-emerald-400 font-semibold">✓</span>
  if (value === '—') return <span className="text-slate-600">—</span>
  return <span className="text-slate-300 text-sm">{value}</span>
}

export default function SyllabusComparison() {
  return (
    <section className="py-20 px-4 bg-primary-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4 tracking-tight">
          What Each Format Covers
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Compare the three workshop formats side by side
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-primary-700">
                <th className="py-3 px-4 text-sm font-semibold text-slate-400">Topic</th>
                <th className="py-3 px-4 text-sm font-semibold text-sky-400 text-center">Half-Day (4h)</th>
                <th className="py-3 px-4 text-sm font-semibold text-indigo-400 text-center">Full-Day (8h)</th>
                <th className="py-3 px-4 text-sm font-semibold text-violet-400 text-center">Two-Day (16h)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-primary-700/50 ${
                    index % 2 === 0 ? 'bg-primary-800/50' : ''
                  }`}
                >
                  <td className="py-3 px-4 text-sm text-slate-300">{row.topic}</td>
                  <td className="py-3 px-4 text-center"><CellContent value={row.halfDay} /></td>
                  <td className="py-3 px-4 text-center"><CellContent value={row.fullDay} /></td>
                  <td className="py-3 px-4 text-center"><CellContent value={row.twoDay} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/SyllabusComparison.tsx
git commit -m "Add SyllabusComparison table component"
```

---

### Task 8: Create WhoIsThisFor component

**Files:**
- Create: `components/WhoIsThisFor.tsx`
- Delete: `components/Testimonials.tsx`

- [ ] **Step 1: Create `components/WhoIsThisFor.tsx`**

Server component. Four audience profiles with inline SVG icons.

```tsx
export default function WhoIsThisFor() {
  const profiles = [
    {
      role: 'Founders',
      description: 'You have a product idea but no technical co-founder',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#wg-blue)" strokeWidth={1.5}>
          <defs><linearGradient id="wg-blue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#818cf8" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      role: 'Product Managers',
      description: 'You want to prototype and validate ideas without waiting for engineering',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#wg-purple)" strokeWidth={1.5}>
          <defs><linearGradient id="wg-purple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#c084fc" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      role: 'Solo Creators',
      description: 'You want to build and launch your own digital products',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#wg-violet)" strokeWidth={1.5}>
          <defs><linearGradient id="wg-violet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#f472b6" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      role: 'Team Leaders',
      description: 'You want your team to leverage AI for faster product development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#wg-pink)" strokeWidth={1.5}>
          <defs><linearGradient id="wg-pink" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#f472b6" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 px-4 bg-primary-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
          Who This Is For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-primary-900 border border-primary-700 rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">{profile.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{profile.role}</h3>
              <p className="text-sm text-slate-400">{profile.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xl font-bold text-white">
          No coding experience required.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Delete `components/Testimonials.tsx`**

```bash
rm components/Testimonials.tsx
```

- [ ] **Step 3: Commit**

```bash
git add components/WhoIsThisFor.tsx
git rm components/Testimonials.tsx
git commit -m "Add WhoIsThisFor, remove Testimonials"
```

---

### Task 9: Rewrite FAQ component

**Files:**
- Modify: `components/FAQ.tsx`

- [ ] **Step 1: Rewrite `components/FAQ.tsx`**

Client component. Dark-themed accordion with chevron toggle and new content.

```tsx
'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do I need any coding experience?',
      answer: 'No. The course is designed for non-technical professionals. You\'ll learn to direct AI tools to write code for you.',
    },
    {
      question: 'What do participants need to bring?',
      answer: 'A laptop with Chrome or Firefox and an internet connection. We provide all tools, templates, and accounts needed.',
    },
    {
      question: 'How many people can attend per class?',
      answer: 'Up to 10 participants per class. For larger groups, contact us for custom pricing.',
    },
    {
      question: 'Is the course available online?',
      answer: 'Yes. All three formats are available both in-person and online.',
    },
    {
      question: 'What will participants take away?',
      answer: 'A deployed working web application, plus reusable templates (PRD template, prompt library, CLAUDE.md configuration) and frameworks they\'ll keep using after the course.',
    },
    {
      question: 'What\'s the difference between the three formats?',
      answer: 'The Half-Day (4h) covers core AI building concepts and a first deployed app. The Full-Day (8h) adds professional dev environment setup, deeper prompt/context engineering, and a more complex build. The Two-Day (16h) adds production infrastructure — databases, authentication, testing, and monitored deployment.',
    },
    {
      question: 'What\'s the refund policy?',
      answer: 'Full refund if cancelled 7 or more days before the workshop. No refunds for cancellations within 7 days, but you may transfer your booking to a future date.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-primary-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-primary-800 border border-primary-700 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-indigo-400 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds (FAQ is standalone).

- [ ] **Step 3: Commit**

```bash
git add components/FAQ.tsx
git commit -m "Rewrite FAQ with dark theme, new content, chevron toggle"
```

---

### Task 10: Rewrite FinalCTA component

**Files:**
- Modify: `components/FinalCTA.tsx`

- [ ] **Step 1: Rewrite `components/FinalCTA.tsx`**

Remove all ConvertKit code. Simple CTA section with scroll link to pricing. Server component (no client-side interactivity needed).

```tsx
export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Ready to Build?
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
          Give your team the skills to turn product ideas into shipped software — using AI.
        </p>

        <a
          href="#courses"
          className="inline-block bg-gradient-to-r from-sky-400 to-indigo-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg hover:from-sky-300 hover:to-indigo-300 transition-all shadow-lg shadow-sky-400/20 mb-6"
        >
          Book a Workshop
        </a>

        <p className="text-sm text-slate-500">
          Questions?{' '}
          <a href="mailto:bob@ai4all.store" className="text-indigo-400 underline hover:text-indigo-300">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/FinalCTA.tsx
git commit -m "Rewrite FinalCTA, remove ConvertKit, add scroll CTA"
```

---

### Task 11: Rewrite Footer component

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Rewrite `components/Footer.tsx`**

Minimal dark footer. Server component.

```tsx
export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-primary-700/50 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} AI4All &middot;{' '}
          <a href="mailto:bob@ai4all.store" className="text-slate-400 hover:text-white transition-colors">
            bob@ai4all.store
          </a>
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "Rewrite Footer with minimal dark design"
```

---

### Task 12: Update page.tsx with new component imports

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Rewrite `app/page.tsx`**

Update imports to use the new component names and add SyllabusComparison + WhoIsThisFor.

```tsx
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import CourseTiers from '@/components/CourseTiers'
import SyllabusComparison from '@/components/SyllabusComparison'
import WhoIsThisFor from '@/components/WhoIsThisFor'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ValueProposition />
      <CourseTiers />
      <SyllabusComparison />
      <WhoIsThisFor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Run full build**

Run: `npm run build`
Expected: Build succeeds with zero errors. All old component references removed, all new components imported.

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: No lint errors.

- [ ] **Step 4: Visual check**

Run: `npm run dev`
Open `http://localhost:3000` in a browser. Verify:
- Dark theme throughout
- Header sticky with nav links and Book Now button
- Hero shows gradient headline
- 4 value proposition cards in a row
- 3 pricing cards with middle featured
- Comparison table renders correctly
- 4 audience profile cards
- FAQ accordion opens/closes
- Final CTA button scrolls to pricing
- Footer shows copyright and email
- Responsive: check at mobile (375px) and tablet (768px) widths

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "Update page.tsx with new component imports and layout"
```

---

### Task 13: Final cleanup and verification

**Files:**
- Verify all old components are deleted

- [ ] **Step 1: Verify no old component files remain**

Check that these files no longer exist:
- `components/ProblemOutcome.tsx` — should be deleted in Task 5
- `components/CourseSnapshot.tsx` — should be deleted in Task 6
- `components/Testimonials.tsx` — should be deleted in Task 8

If any still exist, delete them now.

- [ ] **Step 2: Run full build one final time**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Run lint one final time**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 4: Final commit if any cleanup was needed**

```bash
git add -A
git commit -m "Final cleanup: remove stale files"
```

(Skip if nothing to commit.)
