'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-900 to-primary-800 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold mb-6">
          For Founders &amp; Product Leaders
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
