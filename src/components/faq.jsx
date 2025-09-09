"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react" // icons

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer end-to-end real estate development services including planning, construction, design, and delivery.",
  },
  {
    question: "How does the design process begin?",
    answer:
      "The process starts with a consultation to understand your vision, followed by concept development and approvals.",
  },
  {
    question: "How long will it take to complete my design project?",
    answer: "Timelines depend on the scale of the project, but we provide a clear schedule during the planning phase.",
  },
  {
    question: "What type of projects do you manage?",
    answer: "We manage residential, commercial, and mixed-use projects from concept to completion.",
  },
  {
    question: "Do you work with specific contractors or suppliers?",
    answer: "Yes, we partner with trusted contractors and suppliers to ensure high-quality outcomes.",
  },
  {
    question: "Do you carry out remote projects?",
    answer: "Yes, we have systems in place to manage and monitor projects remotely.",
  },
  {
    question: "What is the payment process?",
    answer: "Our payment process is milestone-based, ensuring transparency at every stage.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium leading-tight text-[#000000]"
            style={{
              fontFamily: "Gambetta, serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              lineHeight: "1.2",
            }}
          >
            Answers To Your Frequently <br className="hidden sm:block" />
            <span className="italic">Asked Questions</span>
          </h2>
          <p
            className="text-[#11111180] leading-relaxed max-w-md"
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            We've compiled a list of frequently asked questions to make your experience seamless. This section provides
            quick answers to the topics you're curious about.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-3 sm:pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-start sm:items-center w-full text-left py-2 sm:py-3 group"
              >
                <span
                  className="text-base sm:text-lg md:text-xl text-gray-900 pr-4 group-hover:text-gray-700 transition-colors duration-200"
                  style={{
                    fontFamily: "Gambetta",
                    fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
                    lineHeight: "1.3",
                  }}
                >
                  {faq.question}
                </span>
                <div className="flex-shrink-0 mt-1 sm:mt-0">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 transition-transform duration-200" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Accordion Content with Smooth Transition */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-32 sm:max-h-40 opacity-100 mt-2 sm:mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="text-gray-600 leading-relaxed pr-8 sm:pr-12"
                  style={{
                    fontFamily: "Instrument Sans, sans-serif",
                    fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                    lineHeight: "1.6",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
