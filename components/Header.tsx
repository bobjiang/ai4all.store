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
