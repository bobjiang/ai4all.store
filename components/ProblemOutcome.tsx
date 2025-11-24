export default function ProblemOutcome() {
  const painPoints = [
    "AI is transforming every career path, but schools aren't teaching it",
    "Teens use ChatGPT daily without understanding how it works — or its limits",
    "No clear path from \"using AI\" to \"building with AI\"",
    "Concerns about ethical misuse: cheating, misinformation, and privacy risks",
  ]

  const outcomes = [
    "Understand AI, machine learning, and neural networks — not just use them",
    "Write Python code and experiment with real ML models in Google Colab",
    "Build a portfolio project addressing a real-world challenge",
    "Learn to evaluate AI systems for bias, fairness, and accuracy",
    "Earn a certificate of completion for college applications",
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Why Teens Need AI Education Now
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          By 2030, AI will impact 70% of jobs. Give your teen the skills to lead, not follow.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-red-800 mb-6">
              The Challenge Parents Face
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
