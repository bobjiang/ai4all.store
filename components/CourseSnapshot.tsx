export default function CourseSnapshot() {
  const details = [
    { label: "Duration", value: "25 hours" },
    { label: "Format", value: "5-day camp or 10-week course" },
    { label: "Age Range", value: "13-18 years" },
    { label: "Prerequisites", value: "Basic computer skills" },
  ]

  const modules = [
    { title: "Welcome to AI", desc: "definitions & real-world examples" },
    { title: "Data Foundations", desc: "how AI learns from data" },
    { title: "Python & Colab", desc: "hands-on coding intro" },
    { title: "Data Visualization", desc: "charts, patterns, insights" },
    { title: "How Machines Learn", desc: "ML concepts demystified" },
    { title: "Experimenting with ML", desc: "build and test models" },
    { title: "Neural Networks", desc: "understand deep learning" },
    { title: "Generative AI", desc: "ChatGPT, DALL-E, prompting" },
    { title: "AI Ethics", desc: "bias, fairness, responsibility" },
    { title: "Final Project", desc: "showcase your work" },
  ]

  const tools = [
    "Google Colab",
    "ChatGPT",
    "Teachable Machine",
    "TensorFlow Playground",
    "DALL-E",
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          What Your Teen Will Learn
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A comprehensive curriculum covering AI fundamentals to advanced concepts
        </p>

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
                <li key={index} className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <span className="text-gray-900 font-medium">{module.title}</span>
                    <span className="text-gray-500 text-sm"> — {module.desc}</span>
                  </div>
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
