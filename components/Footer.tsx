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
