// FAQSection.jsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // icons

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
    answer:
      "Timelines depend on the scale of the project, but we provide a clear schedule during the planning phase.",
  },
  {
    question: "What type of projects do you manage?",
    answer:
      "We manage residential, commercial, and mixed-use projects from concept to completion.",
  },
  {
    question: "Do you work with specific contractors or suppliers?",
    answer:
      "Yes, we partner with trusted contractors and suppliers to ensure high-quality outcomes.",
  },
  {
    question: "Do you carry out remote projects?",
    answer:
      "Yes, we have systems in place to manage and monitor projects remotely.",
  },
  {
    question: "What is the payment process?",
    answer:
      "Our payment process is milestone-based, ensuring transparency at every stage.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <h2
            className="text-4xl md:text-4xl font-medium leading-tight mb-6 text-[#000000]"
            style={{ fontFamily: "Gambetta, serif" }}
          >
            Answers To Your Frequently <br />
            <span className="italic">Asked Questions</span>
          </h2>
          <p
            className="text-[#11111180] text-base leading-relaxed"
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
          >
            We’ve compiled a list of frequently asked questions to make your
            experience seamless. This section provides quick answers to the
            topics you’re curious about.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span
                  className="text-lg text-gray-900"
                  style={{ fontFamily: "Gambetta" }}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-900" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-900" />
                )}
              </button>

              {/* Accordion Content with Smooth Transition */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "Instrument Sans, sans-serif" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
