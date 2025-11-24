export default function ProblemOutcome() {
  const painPoints = [
    "School curriculum hasn't caught up with AI",
    "Kids use AI tools without proper guidance",
    "Concerns about plagiarism and academic integrity",
  ]

  const outcomes = [
    "Confidence using AI ethically and responsibly",
    "Better study skills and productivity",
    "Portfolio piece for future applications",
    "Critical thinking about AI limitations",
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          For Parents: Why This Course?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-red-800 mb-6">
              The Challenge
            </h3>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              What Your Teen Will Gain
            </h3>
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
