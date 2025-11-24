export default function Testimonials() {
  const testimonials = [
    {
      quote: "My daughter went from being intimidated by AI to building her own project. The instructors made everything so accessible.",
      author: "Parent of 15-year-old",
      role: "Pilot Cohort",
    },
    {
      quote: "I finally understand what AI actually is, not just how to use ChatGPT. The ethics discussions were eye-opening.",
      author: "Student, Age 14",
      role: "Pilot Cohort",
    },
    {
      quote: "As a parent, I appreciated the focus on responsible AI use. It's exactly what schools should be teaching.",
      author: "Parent of 13-year-old",
      role: "Pilot Cohort",
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
