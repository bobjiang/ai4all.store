'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do I need any coding experience?',
      answer: 'No. The course is designed for non-technical professionals. You\'ll learn to direct AI tools to write code for you.',
    },
    {
      question: 'What do participants need to bring?',
      answer: 'A laptop with Chrome or Firefox and an internet connection. We provide all tools, templates, and accounts needed.',
    },
    {
      question: 'How many people can attend per class?',
      answer: 'Up to 10 participants per class. For larger groups, contact us for custom pricing.',
    },
    {
      question: 'Is the course available online?',
      answer: 'Yes. All three formats are available both in-person and online.',
    },
    {
      question: 'What will participants take away?',
      answer: 'A deployed working web application, plus reusable templates (PRD template, prompt library, CLAUDE.md configuration) and frameworks they\'ll keep using after the course.',
    },
    {
      question: 'What\'s the difference between the three formats?',
      answer: 'The Half-Day (4h) covers core AI building concepts and a first deployed app. The Full-Day (8h) adds professional dev environment setup, deeper prompt/context engineering, and a more complex build. The Two-Day (16h) adds production infrastructure — databases, authentication, testing, and monitored deployment.',
    },
    {
      question: 'What\'s the refund policy?',
      answer: 'Full refund if cancelled 7 or more days before the workshop. No refunds for cancellations within 7 days, but you may transfer your booking to a future date.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-primary-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-primary-800 border border-primary-700 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-inset rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-indigo-400 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4" id={`faq-answer-${index}`} role="region">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
