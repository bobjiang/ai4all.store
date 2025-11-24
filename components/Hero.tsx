'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Early Bird Banner */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg animate-pulse">
          <span className="text-2xl">🎉</span>
          <span className="font-bold">Early Bird Special: First 6 Students Save 50%</span>
          <span className="text-2xl">🎉</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-[#2563EB]">Learn</span> AI. <span className="text-[#22C55E]">Build</span> Projects. <span className="text-[#A855F7]">Think</span> Critically.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A 25-hour camp for teens (13-18) to master AI fundamentals, experiment with machine learning, and create a portfolio project — zero coding experience required.
        </p>

        {/* Promo Code Box */}
        <div className="bg-white border-2 border-dashed border-orange-500 rounded-lg p-4 max-w-md mx-auto mb-6">
          <p className="text-sm text-gray-600 mb-2">Use promo code at checkout:</p>
          <div className="flex items-center justify-center gap-3">
            <code className="text-2xl font-bold text-orange-600 bg-orange-50 px-4 py-2 rounded">AI4All</code>
            <span className="text-sm text-gray-500">50% OFF</span>
          </div>
        </div>

        <a
          href="#waitlist"
          className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Secure Your Spot Now
        </a>
        <p className="mt-4 text-sm text-gray-600">
          <span className="font-semibold text-orange-600">Only 6 early bird spots available</span> • First Cohort: Jan 19-23, 2026
        </p>
      </div>
    </section>
  )
}
