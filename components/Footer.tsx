export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-bold text-white text-lg mb-2">AI4All</p>
        <p className="text-sm mb-4">
          AI education for the next generation
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} AI4All. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
