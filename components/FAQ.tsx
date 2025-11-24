'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is this course safe for my child?",
      answer: "Absolutely. We use age-appropriate tools and maintain strict content guidelines. All AI interactions are supervised, and we teach responsible usage practices. Parents receive regular updates on progress.",
    },
    {
      question: "Is it all screen time?",
      answer: "No. While we use computers for AI tools, sessions include discussions, brainstorming, and offline activities. We encourage breaks and balance digital learning with critical thinking exercises.",
    },
    {
      question: "What if my child is shy or introverted?",
      answer: "Our small class sizes (8-12 students) create a supportive environment. Participation can be through chat or voice, and we never force anyone to present on camera. Many quiet students thrive in our courses.",
    },
    {
      question: "Does my child need coding experience?",
      answer: "No coding experience required! We focus on understanding AI concepts and using no-code/low-code tools. This course is designed for complete beginners.",
    },
    {
      question: "What's your refund policy?",
      answer: "Full refund within 7 days of the first session if the course isn't the right fit. We also offer rescheduling to a future cohort at no extra cost.",
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
      </div>
    </section>
  )
}
