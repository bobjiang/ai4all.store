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
