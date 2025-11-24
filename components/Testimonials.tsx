export default function Testimonials() {
  const testimonials = [
    {
      quote: "I was worried about my son using AI for school without understanding it. Now he explains neural networks to ME and knows how to spot AI bias. Worth every penny.",
      author: "Sarah M.",
      role: "Parent of 16-year-old",
    },
    {
      quote: "I built an image classifier that detects recyclables vs trash for my final project. I went from zero coding to writing Python in 3 weeks. Can't wait to add it to my college apps.",
      author: "Alex",
      role: "Student, Age 17",
    },
    {
      quote: "The small class size meant my shy daughter actually participated. She's now teaching her younger brother how to use ChatGPT responsibly. The ethics module was exactly what we needed.",
      author: "David L.",
      role: "Parent of 14-year-old",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          What Families Are Saying
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Feedback from our pilot cohort participants
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
