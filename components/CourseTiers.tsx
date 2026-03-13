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
