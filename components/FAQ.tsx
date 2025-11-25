'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Does my child need coding experience?",
      answer: "No prior coding required. We start from zero and teach Python basics using guided Google Colab notebooks. By week 3, students write their own code with support.",
    },
    {
      question: "What's the difference between 5-day camp and 10-week course?",
      answer: "Same 25-hour curriculum. The intensive camp (5 days, 5 hours/day) is great for school breaks. The 10-week course (2.5 hours/week) allows more time for homework and project development.",
    },
    {
      question: "Will this help with college applications?",
      answer: "Yes. Students earn a Certificate of Completion and build a portfolio project they can showcase. Admissions officers value demonstrated AI literacy and project-based learning.",
    },
    {
      question: "What if my child is shy or introverted?",
      answer: "Small class sizes (8-12 students) and team projects (3-4 per group) create a supportive environment. Participation can be via chat, and we use pair programming so no one works alone.",
    },
    {
      question: "Is this safe? What about AI misuse?",
      answer: "Safety is core to our curriculum. Module 9 is dedicated to AI ethics — bias, privacy, misinformation. We teach responsible use, not just technical skills. Parents receive progress updates.",
    },
    {
      question: "What's your refund policy?",
      answer: "Full refund within 7 days of the first session. We also offer free rescheduling to a future cohort if timing doesn't work out.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
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
            <span className="font-semibold text-orange-600">Still have questions?</span> Enroll now and we'll answer everything
          </p>
        </div>
      </div>
    </section>
  )
}
