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

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#waitlist"
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Secure Your Spot Now
          </a>
          <p className="mt-3 text-sm text-gray-600">
            <span className="font-semibold text-orange-600">Join these successful students</span> • 50% off for first 6
          </p>
        </div>
      </div>
    </section>
  )
}
