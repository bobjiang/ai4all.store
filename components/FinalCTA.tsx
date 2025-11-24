'use client'

import { useEffect, useRef } from 'react'

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content
      containerRef.current.innerHTML = ''

      // Create and append the script
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-uid', '9b14a5c3f7')
      script.src = 'https://ai4all-store.kit.com/9b14a5c3f7/index.js'
      containerRef.current.appendChild(script)
    }
  }, [])

  return (
    <section id="waitlist" className="py-20 px-4 bg-blue-600">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Secure Your Teen's Spot
        </h2>
        <p className="text-blue-100 mb-8">
          Limited to 12 students per cohort for personalized attention. Join the waitlist for early access and founding member pricing.
        </p>

        {/* ConvertKit Form */}
        <div ref={containerRef} className="max-w-md mx-auto" />
      </div>
    </section>
  )
}
