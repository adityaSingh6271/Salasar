"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar02Icon,
  Building05Icon,
  ContractsIcon,
  MapsLocation02Icon,
  FlowConnectionIcon,
  PlusSignIcon,
  Clubs01Icon,
} from "@hugeicons/core-free-icons";

const SlideTwo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
  ];

  return (
    <div className="w-full h-full py-8 sm:py-16 bg-white flex justify-center">
      <div className="w-full px-4">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-[#28282C] text-white inline-block mb-4 sm:mb-6 font-gilroy">
            Why choose us?
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#0F3026] mb-3 sm:mb-4"
            style={{ fontFamily: "Gambetta, serif" }}
          >
            What we believe
          </h2>

          <p className="text-[#6B6B6B] text-sm sm:text-base md:text-lg font-gilroy leading-relaxed max-w-2xl mx-auto">
            From projects to homes, our artisans build with grace and wonder.
          </p>
        </div>

        {/* Main Grid - Reduced gap and container width */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 bg-white overflow-hidden max-w-6xl mx-auto">
          {/* Left Image (Responsive) */}
          {/* Left Image (Locked height, no accordion effect) */}
          <div className="col-span-1 md:col-span-5 flex justify-center items-start relative">
            <div className="relative h-[320px] md:h-[600px] w-full">
              <Image
                src="/FProperty2.png"
                alt="Belief section"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>

          {/* Right Accordion - Reduced padding and gap */}
          <div className="col-span-1 md:col-span-7 bg-white px-4 md:px-6 py-6 sm:py-10 flex items-start">
            <div className="w-full max-w-2xl self-stretch">
              <div className="divide-y divide-gray-200">
                {items.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={i} className="py-3 sm:py-5">
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleAccordion(i)}
                        className="flex items-center justify-between w-full text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 text-[#0F3026]">
                          {item.icon ? (
                            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                              <HugeiconsIcon
                                icon={item.icon}
                                className="w-6 h-6 sm:w-7 sm:h-7 text-[#0F6B50]"
                              />
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                              <Image
                                src={item.img}
                                alt={item.title}
                                width={24}
                                height={24}
                                className="sm:w-7 sm:h-7"
                                style={{
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          )}
                          <span className="font-gilroy text-base sm:text-lg md:text-xl text-[#000000]">
                            {item.title}
                          </span>
                        </div>

                        <div className="flex-shrink-0">
                          <HugeiconsIcon
                            icon={PlusSignIcon}
                            className={`w-5 h-5 sm:w-6 sm:h-6 text-[#0F3026] transition-transform duration-300 ${
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
                        <div className="pl-9 sm:pl-11">
                          <p className="text-[#2E2E2E] text-xs sm:text-sm md:text-base font-gilroy leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideTwo;
