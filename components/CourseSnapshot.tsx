export default function CourseSnapshot() {
  const details = [
    { label: "Duration", value: "4 weeks" },
    { label: "Format", value: "Live online sessions" },
    { label: "Age Range", value: "13-17 years" },
    { label: "Prerequisites", value: "None" },
  ]

  const modules = [
    "What is AI? Understanding the basics",
    "Using ChatGPT and AI assistants responsibly",
    "AI in everyday life – tools and applications",
    "Building your first AI project",
    "Ethics and safety in AI",
    "Showcase and presentation",
  ]

  const tools = [
    "ChatGPT",
    "Google Colab",
    "Teachable Machine",
    "Canva AI",
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Course Overview
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {details.map((detail, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm">
              <p className="text-sm text-gray-500 uppercase tracking-wide">{detail.label}</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">{detail.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What We Cover
            </h3>
            <ul className="space-y-3">
              {modules.map((module, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{module}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tools We Use
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-600 text-sm">
              All tools are free and safe to use. We provide guidance for each platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
