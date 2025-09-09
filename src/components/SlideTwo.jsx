"use client"

import { useState } from "react"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar02Icon,
  Building05Icon,
  ContractsIcon,
  MapsLocation02Icon,
  FlowConnectionIcon,
  PlusSignIcon,
  Clubs01Icon,
} from "@hugeicons/core-free-icons"

const SlideTwo = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const items = [
    {
      title: "On-time handovers",
      icon: Calendar02Icon,
      content: "Promised dates, tracked milestones.",
    },
    {
      title: "Design that lifts daily life",
      icon: null,
      img: "/design.png",
      content: "Promised dates, tracked milestones.",
    },
    {
      title: "Built-to-last quality",
      icon: Building05Icon,
      content: "Promised dates, tracked milestones.",
    },
    {
      title: "Transparent & ethical",
      icon: ContractsIcon,
      content: "Promised dates, tracked milestones.",
    },
    {
      title: "Strong locations",
      icon: MapsLocation02Icon,
      content: "Promised dates, tracked milestones.",
    },
    {
      title: "End-to-end control",
      icon: FlowConnectionIcon,
      content: "Promised dates, tracked milestones.",
    },
    {
      title: "Responsible luxury",
      icon: Clubs01Icon,
      content: "Promised dates, tracked milestones.",
    },
  ]

  return (
    <div className="w-full h-full py-6 sm:py-8 md:py-16 bg-white flex justify-center">
      <div className="w-full px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-14">
          <span className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-[#28282C] text-white inline-block mb-3 sm:mb-4 md:mb-6 font-gilroy">
            Why choose us?
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#0F3026] mb-2 sm:mb-3 md:mb-4"
            style={{
              fontFamily: "Gambetta, serif",
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
            }}
          >
            What we believe
          </h2>

          <p className="text-[#6B6B6B] text-sm sm:text-base md:text-lg lg:text-xl font-gilroy leading-relaxed max-w-2xl mx-auto px-4">
            From projects to homes, our artisans build with grace and wonder.
          </p>
        </div>

        {/* Main Grid - Enhanced responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 bg-white overflow-hidden max-w-6xl mx-auto">
          {/* Left Image */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-start relative order-2 lg:order-1">
            <div className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[600px] w-full">
              <Image
                src="/FProperty2.png"
                alt="Belief section"
                fill
                priority
                className="object-cover rounded-lg lg:rounded-none"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          {/* Right Accordion */}
          <div className="col-span-1 lg:col-span-7 bg-white px-4 sm:px-6 md:px-8 lg:px-6 xl:px-8 py-6 sm:py-8 md:py-10 flex items-start order-1 lg:order-2">
            <div className="w-full max-w-2xl self-stretch">
              <div className="divide-y divide-gray-200">
                {items.map((item, i) => {
                  const isOpen = openIndex === i
                  return (
                    <div key={i} className="py-2.5 sm:py-3 md:py-5">
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleAccordion(i)}
                        className="flex items-center justify-between w-full text-left focus:outline-none group"
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 text-[#0F3026] flex-1 min-w-0">
                          {item.icon ? (
                            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center">
                              <HugeiconsIcon
                                icon={item.icon}
                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0F6B50]"
                              />
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center">
                              <Image
                                src={item.img || "/placeholder.svg"}
                                alt={item.title}
                                width={20}
                                height={20}
                                className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                                style={{
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          )}
                          <span className="font-gilroy text-sm sm:text-base md:text-lg lg:text-xl text-[#000000] truncate">
                            {item.title}
                          </span>
                        </div>

                        <div className="flex-shrink-0 ml-2">
                          <HugeiconsIcon
                            icon={PlusSignIcon}
                            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F3026] transition-transform duration-300 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-in-out ${
                          isOpen ? "opacity-100 mt-2 sm:mt-3" : "opacity-0 mt-0"
                        }`}
                        style={{
                          maxHeight: isOpen ? "500px" : "0px",
                        }}
                      >
                        <div className="pl-7 sm:pl-9 md:pl-11">
                          <p className="text-[#2E2E2E] text-xs sm:text-sm md:text-base lg:text-lg font-gilroy leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideTwo
