# AI4All.store Website Redesign — Design Spec

## Overview

Complete rewrite of ai4all.store from a teen AI camp landing page to a premium executive workshop site for the "AI-Native Product Building" course. The site sells three workshop tiers (4h, 8h, 16h) targeting non-technical founders and product managers who want to build software products using AI tools without coding.

## Product

**Course:** AI-Native Product Building
**Formats:**

| Tier | Duration | Price (AUD) | Tagline |
|------|----------|-------------|---------|
| Half-Day | 4 hours | $3,000 | Intensive |
| Full-Day | 8 hours | $5,000 | Comprehensive |
| Two-Day | 16 hours | $9,000 | Complete |

- Pricing is per class, up to 10 participants
- Groups of 10+ require custom pricing via contact
- Available both in-person and online
- No coding experience required

## Target Audience

Non-technical founders and product managers who want to build and ship software products using AI tools. The positioning is "build products without coding" — executive education, not a coding bootcamp.

## Architecture

Single-page Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 3. Same stack as current site. All existing component content is replaced. No new routes or API endpoints.

### Components (in render order in `app/page.tsx`)

1. `Header`
2. `Hero`
3. `ValueProposition`
4. `CourseTiers`
5. `SyllabusComparison`
6. `WhoIsThisFor`
7. `FAQ`
8. `FinalCTA`
9. `Footer`

### Component Classification

- **Client components** (`'use client'`): `Hero` (if any animation), `FAQ` (accordion toggle), `FinalCTA` (Stripe script loading), `CourseTiers` (Stripe script loading)
- **Server components**: `Header`, `ValueProposition`, `SyllabusComparison`, `WhoIsThisFor`, `Footer`

## Visual Design

### Color Palette

- **Background primary:** `#0f172a` (slate-900)
- **Background secondary:** `#1e293b` (slate-800)
- **Background cards:** `#1e293b` with `#334155` (slate-700) borders
- **Text primary:** `#ffffff`
- **Text secondary:** `#94a3b8` (slate-400)
- **Text muted:** `#64748b` (slate-500)
- **Accent blue:** `#38bdf8` (sky-400)
- **Accent purple:** `#818cf8` (indigo-400)
- **Accent violet:** `#c084fc` (violet-400)
- **Accent pink:** `#f472b6` (pink-400)
- **Gradient primary:** `#38bdf8` → `#818cf8` (blue to purple)
- **Gradient secondary:** `#818cf8` → `#c084fc` (purple to violet)
- **Gradient tertiary:** `#c084fc` → `#f472b6` (violet to pink)
- **Featured card border:** `#818cf8` with `box-shadow: 0 0 30px rgba(129,140,248,0.15)`

### Typography

- Bold, high-weight headings (font-weight 800, tight letter-spacing)
- Uppercase small labels with wide letter-spacing for category tags
- System font stack (inherited from Tailwind defaults)

### Tone

Bold and premium. Executive education aesthetic. Dark backgrounds with vibrant gradient accents. High contrast. No emojis. No playful language. Confident and authoritative.

## Section Specifications

### 1. Header

- Logo: "AI4All" text or logo mark, left-aligned
- Nav links: Courses (`href="#courses"`), FAQ (`href="#faq"`), Contact (`mailto:bob@ai4all.store`) — horizontally aligned, right side
- CTA button: "Book Now" (`href="#courses"`) with gradient background, right-most
- `position: sticky` with `top: 0` and `z-index: 50` on scroll
- Dark background matching hero

### 2. Hero

- **Eyebrow text:** "For Founders & Product Leaders" — uppercase, small, sky-400 color
- **Headline:** "From Idea to Shipped Product in One Day" — large, bold, white with "Shipped Product" in gradient text (blue → purple → violet)
- **Subheadline:** "Learn to direct AI coding tools to build real software. No programming experience needed — just your product vision." — slate-400
- **CTA button:** "Book a Workshop" — gradient background (blue → purple)
- **Tier indicators below CTA:** "✓ Half-Day  ✓ Full-Day  ✓ Two-Day" — muted text
- **Background:** gradient from slate-900 to slate-800
- Generous vertical padding (py-24 or more)

### 3. Value Proposition

Four outcomes in a responsive grid: 1-column on mobile, 2-column on tablet (md), 4-column on desktop (lg):

1. **Ship Real Products** — "Deploy working web applications from idea to live URL in hours"
2. **Direct AI, Don't Code** — "Learn to manage AI coding tools like a product leader manages a team"
3. **Master the AI Workflow** — "Research, Plan, Implement, Test — the professional AI development loop"
4. **Leave With a Toolkit** — "PRD templates, prompt library, context engineering frameworks you'll use forever"

Each item: inline SVG icon (simple, monoline, implementer's choice — no icon library dependency) + headline + one-line description. Dark card backgrounds with subtle border. Icons in gradient accent colors.

### 4. Course Tiers (Pricing)

Three-column card layout with middle card (Full-Day) featured:

**Each card contains:**
- Tier label (e.g., "Half-Day") — colored in that tier's gradient accent
- Duration (e.g., "4 Hours") — large, bold, white
- Descriptor (e.g., "Intensive") — muted text
- Price (e.g., "$3,000") — large, bold, white
- "AUD / class" — muted text
- Feature list (4-5 bullets) — checkmarks, slate-400 text
- "Book Now" Stripe Buy Button — gradient matching that tier's accent

**Tier-specific details:**

Half-Day (4h) — accent: blue (#38bdf8)
- Ship a working app in the first 45 minutes
- AI-native mindset & Agent Manager model
- Prompt engineering (3 core techniques)
- Context engineering essentials
- Build & deploy from spec to live URL

Full-Day (8h) — accent: purple (#818cf8), **featured with "Most Popular" badge**
- Everything in Half-Day
- Full PRD & specification writing
- 5-technique prompt engineering framework
- Professional dev environment setup (Cursor, Git, Vercel)
- Build & deploy interactive multi-feature app

Two-Day (16h) — accent: violet/pink (#c084fc → #f472b6)
- Everything in Full-Day
- Rapid prototyping sprint (5 prototypes)
- Database & user authentication (Supabase)
- Payment processing (Stripe)
- Testing, QA & production deployment

**Featured card (Full-Day) styling:**
- Slightly scaled up (`scale(1.05)` or equivalent)
- Glowing border in purple (#818cf8)
- "Most Popular" badge with gradient background at top

**Below cards:** "Up to 10 participants per class · 10+? Let's talk" with "Let's talk" as a contact link

**Stripe integration:** Each card has its own Stripe Buy Button. Existing Stripe publishable key is reused. One shared Stripe JS script load for the entire `CourseTiers` component (not per-card). Stripe Buy Button IDs are hardcoded constants — use `PLACEHOLDER_HALF_DAY`, `PLACEHOLDER_FULL_DAY`, `PLACEHOLDER_TWO_DAY` during development. The site owner will create real buy buttons in the Stripe dashboard and replace these constants before deployment. No other code changes needed — just swap the ID strings.

### 5. Syllabus Comparison

A full-width comparison table on dark background:

| Topic | Half-Day (4h) | Full-Day (8h) | Two-Day (16h) |
|-------|:---:|:---:|:---:|
| First AI-built app deployment | ✓ | ✓ | ✓ |
| Agent Manager mindset | ✓ | ✓ | ✓ |
| Prompt engineering | 3 techniques | 5 techniques | 5 techniques |
| Context engineering | ✓ | ✓ | ✓ + deeper lab |
| PRD / specification writing | Lite | Full | Full + iteration |
| AI-first dev environment (Cursor, Git) | — | ✓ | ✓ |
| Rapid prototyping sprint | — | — | 5 prototypes |
| Database & authentication | — | — | ✓ |
| Payment processing (Stripe) | — | — | Stretch goal |
| Multi-agent coordination | — | — | ✓ |
| Automated testing / QA | — | Manual only | 3-layer approach |
| Production deployment & monitoring | — | — | ✓ |

Styling: alternating row backgrounds (slate-800 / slate-900), subtle borders, checkmarks in green or accent color, dashes in muted color. Column headers match tier accent colors.

### 6. Who This Is For

Four audience profiles in a row/grid:

1. **Founders** — "You have a product idea but no technical co-founder"
2. **Product Managers** — "You want to prototype and validate ideas without waiting for engineering"
3. **Solo Creators** — "You want to build and launch your own digital products"
4. **Team Leaders** — "You want your team to leverage AI for faster product development"

Each: inline SVG icon (simple, monoline, matching Value Proposition style) + role title + one-liner.

Below the grid, a bold standalone line: **"No coding experience required."**

### 7. FAQ

Expandable accordion, 7 questions:

1. **Do I need any coding experience?** — No. The course is designed for non-technical professionals. You'll learn to direct AI tools to write code for you.
2. **What do participants need to bring?** — A laptop with Chrome or Firefox and an internet connection. We provide all tools, templates, and accounts needed.
3. **How many people can attend per class?** — Up to 10 participants per class. For larger groups, contact us for custom pricing.
4. **Is the course available online?** — Yes. All three formats are available both in-person and online.
5. **What will participants take away?** — A deployed working web application, plus reusable templates (PRD template, prompt library, CLAUDE.md configuration) and frameworks they'll keep using after the course.
6. **What's the difference between the three formats?** — The Half-Day (4h) covers core AI building concepts and a first deployed app. The Full-Day (8h) adds professional dev environment setup, deeper prompt/context engineering, and a more complex build. The Two-Day (16h) adds production infrastructure — databases, authentication, testing, and monitored deployment.
7. **What's the refund policy?** — Full refund if cancelled 7 or more days before the workshop. No refunds for cancellations within 7 days, but you may transfer your booking to a future date.

Styling: dark background, questions in white bold, answers in slate-400. Chevron toggle icon in accent color (rotating on open/close).

### 8. Final CTA

- Headline: "Ready to Build?" or similar — bold, white
- Brief reinforcing line about the value
- A single "Book a Workshop" anchor link (`href="#courses"`) that smooth-scrolls to the Course Tiers section (which has `id="courses"`). Use `scroll-behavior: smooth` on the html element via Tailwind's `scroll-smooth` class.
- "Questions? Get in touch" — `mailto:bob@ai4all.store`
- Dark background, slightly different shade or with subtle gradient to differentiate from FAQ

### 9. Footer

- Minimal: "© 2026 AI4All" + `bob@ai4all.store` mailto link
- Dark background (darkest shade)
- No social links

## Metadata Updates

```typescript
export const metadata: Metadata = {
  title: 'AI4All — AI-Native Product Building Workshops',
  description: 'Intensive workshops for founders and product leaders. Learn to build and ship real software products using AI tools — no coding experience required. Half-day, full-day, and two-day formats available.',
  keywords: ['AI workshop', 'AI product building', 'no-code AI', 'founder workshop', 'product manager training', 'AI development course', 'build with AI', 'AI-native development'],
}
```

## Integrations

### Stripe
- 3 Stripe Buy Buttons (one per tier) — new buy button IDs to be created
- Existing publishable key reused: `pk_live_51Pjrbm...`
- Buy buttons embedded via `stripe-buy-button` web component + Stripe JS script

### Google Analytics
- Keep existing GA4 tag: `G-Q3Y4VQJZ7S`
- No changes to tracking setup

### Removed
- ConvertKit waitlist form — remove all ConvertKit-related code, refs, and script loading. ConvertKit only exists in `components/FinalCTA.tsx` (the `waitlistRef`, Kit script, and associated markup)

## Tailwind Config Changes

Update `tailwind.config.ts` to reflect new color palette:

```typescript
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
}
```

## Files Changed

| File | Action |
|------|--------|
| `app/layout.tsx` | Update metadata, remove ConvertKit |
| `app/page.tsx` | Update component imports (new components) |
| `tailwind.config.ts` | Update color palette |
| `components/Header.tsx` | Rewrite |
| `components/Hero.tsx` | Rewrite |
| `components/ValueProposition.tsx` | New (replaces ProblemOutcome.tsx) |
| `components/CourseTiers.tsx` | New (replaces CourseSnapshot.tsx) |
| `components/SyllabusComparison.tsx` | New |
| `components/WhoIsThisFor.tsx` | New (replaces Testimonials.tsx) |
| `components/FAQ.tsx` | Rewrite |
| `components/FinalCTA.tsx` | Rewrite |
| `components/Footer.tsx` | Rewrite |
| `components/ProblemOutcome.tsx` | Delete |
| `components/CourseSnapshot.tsx` | Delete |
| `components/Testimonials.tsx` | Delete |

## Out of Scope

- Multi-page routing
- Database or backend
- User authentication
- Blog or content pages
- Instructor/about page
- Animated transitions or scroll effects beyond basic CSS
- Mobile app
