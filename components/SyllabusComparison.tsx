const rows = [
  { topic: 'First AI-built app deployment', halfDay: '✓', fullDay: '✓', twoDay: '✓' },
  { topic: 'Agent Manager mindset', halfDay: '✓', fullDay: '✓', twoDay: '✓' },
  { topic: 'Prompt engineering', halfDay: '3 techniques', fullDay: '5 techniques', twoDay: '5 techniques' },
  { topic: 'Context engineering', halfDay: '✓', fullDay: '✓', twoDay: '✓ + deeper lab' },
  { topic: 'PRD / specification writing', halfDay: 'Lite', fullDay: 'Full', twoDay: 'Full + iteration' },
  { topic: 'AI-first dev environment (Cursor, Git)', halfDay: '—', fullDay: '✓', twoDay: '✓' },
  { topic: 'Rapid prototyping sprint', halfDay: '—', fullDay: '—', twoDay: '5 prototypes' },
  { topic: 'Database & authentication', halfDay: '—', fullDay: '—', twoDay: '✓' },
  { topic: 'Payment processing (Stripe)', halfDay: '—', fullDay: '—', twoDay: 'Stretch goal' },
  { topic: 'Multi-agent coordination', halfDay: '—', fullDay: '—', twoDay: '✓' },
  { topic: 'Automated testing / QA', halfDay: '—', fullDay: 'Manual only', twoDay: '3-layer approach' },
  { topic: 'Production deployment & monitoring', halfDay: '—', fullDay: '—', twoDay: '✓' },
]

function CellContent({ value }: { value: string }) {
  if (value === '✓') return <span className="text-emerald-400 font-semibold">✓</span>
  if (value === '—') return <span className="text-slate-600">—</span>
  return <span className="text-slate-300 text-sm">{value}</span>
}

export default function SyllabusComparison() {
  return (
    <section className="py-20 px-4 bg-primary-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4 tracking-tight">
          What Each Format Covers
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Compare the three workshop formats side by side
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-primary-700">
                <th className="py-3 px-4 text-sm font-semibold text-slate-400">Topic</th>
                <th className="py-3 px-4 text-sm font-semibold text-sky-400 text-center">Half-Day (4h)</th>
                <th className="py-3 px-4 text-sm font-semibold text-indigo-400 text-center">Full-Day (8h)</th>
                <th className="py-3 px-4 text-sm font-semibold text-violet-400 text-center">Two-Day (16h)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-primary-700/50 ${
                    index % 2 === 0 ? 'bg-primary-800/50' : ''
                  }`}
                >
                  <td className="py-3 px-4 text-sm text-slate-300">{row.topic}</td>
                  <td className="py-3 px-4 text-center"><CellContent value={row.halfDay} /></td>
                  <td className="py-3 px-4 text-center"><CellContent value={row.fullDay} /></td>
                  <td className="py-3 px-4 text-center"><CellContent value={row.twoDay} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
