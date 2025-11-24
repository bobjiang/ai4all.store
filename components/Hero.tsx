'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Skills for Teens: A Hands-On Introduction to Artificial Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Understand how AI works, use tools like ChatGPT safely, and build a real mini-project – no coding experience required.
        </p>
        <a
          href="#waitlist"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Join the Waitlist
        </a>
        <p className="mt-4 text-sm text-gray-500">
          Be the first to know when the next cohort opens
        </p>
      </div>
    </section>
  )
}
