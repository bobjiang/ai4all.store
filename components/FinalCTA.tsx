'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export default function FinalCTA() {
  const waitlistRef = useRef<HTMLDivElement>(null)
  const stripeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (waitlistRef.current) {
      // Clear any existing content
      waitlistRef.current.innerHTML = ''

      // Create and append the Kit script
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-uid', '9b14a5c3f7')
      script.src = 'https://ai4all-store.kit.com/9b14a5c3f7/index.js'
      waitlistRef.current.appendChild(script)
    }
  }, [])

  return (
    <section id="waitlist" className="py-20 px-4 bg-blue-600">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
            <span className="text-xl">⚡</span>
            <span className="font-bold">Early Bird: First 6 Students Save 50%</span>
            <span className="text-xl">⚡</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Teen's Spot
          </h2>
          <p className="text-blue-100 mb-2 max-w-2xl mx-auto">
            Limited to 12 students per cohort for personalized attention.
          </p>
          <p className="text-white font-semibold text-lg">
            Use code <code className="bg-white/20 px-3 py-1 rounded">AI4All</code> for 50% off
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stripe Payment */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-orange-400">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg mb-4 text-center font-bold">
              ⚡ EARLY BIRD SPECIAL ⚡
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enroll Now</h3>
            <p className="text-blue-100 text-sm mb-2">
              <span className="font-semibold">First Cohort:</span> January 19-23, 2026
            </p>
            <p className="text-blue-100 text-sm mb-4">
              Use code <code className="bg-white/20 px-2 py-1 rounded font-bold">AI4All</code> for <span className="text-orange-300 font-bold">50% OFF</span>
            </p>
            <div ref={stripeRef} className="flex justify-center" />
            <Script
              src="https://js.stripe.com/v3/buy-button.js"
              strategy="lazyOnload"
              onLoad={() => {
                if (stripeRef.current) {
                  const stripeButton = document.createElement('stripe-buy-button')
                  stripeButton.setAttribute('buy-button-id', 'buy_btn_1SX9J5RuO2Zel37KZzsroSm7')
                  stripeButton.setAttribute('publishable-key', 'pk_live_51PjrbmRuO2Zel37KZFZIefEHwYeOlj9AACIghFQ9mKM7kZHuHsAgzHvyPrjo81hKebLMt0gitYNThPBt10T2C9Ku007cTyCy1U')
                  stripeRef.current.appendChild(stripeButton)
                }
              }}
            />
          </div>

          {/* Waitlist Option */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">Join Waitlist</h3>
            <p className="text-blue-100 text-sm mb-6">Get notified when the next cohort opens</p>
            <div ref={waitlistRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
