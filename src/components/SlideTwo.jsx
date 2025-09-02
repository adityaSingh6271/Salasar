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
      content:
        "We commit to timely handovers, ensuring your home is delivered exactly when promised.",
    },
    {
      title: "Design that lifts daily life",
      icon: null, // handled as image
      img: "/design.png",
      content:
        "Our designs are made to bring comfort and beauty into your everyday living.",
    },
    {
      title: "Built-to-last quality",
      icon: Building05Icon,
      content:
        "Using only premium materials and tested construction practices that last for decades.",
    },
    {
      title: "Transparent & ethical",
      icon: ContractsIcon,
      content:
        "We believe in honesty, clarity, and accountability at every step of your home journey.",
    },
    {
      title: "Strong locations",
      icon: MapsLocation02Icon,
      content:
        "Our projects are located in prime areas with excellent connectivity and amenities.",
    },
    {
      title: "End-to-end control",
      icon: FlowConnectionIcon,
      content:
        "We oversee every stage of the process to guarantee seamless execution and delivery.",
    },
    {
      title: "Responsible luxury",
      icon: null, // handled as image
      img: "/clubsO1Icon.png",
      content:
        "Luxury with responsibility — balancing aesthetics with sustainability for the future.",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-white h-full">
        {/* IMAGE */}
        <div className="col-span-12 md:col-span-5 relative">
          <div className="relative h-[320px] md:h-full w-full">
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

        {/* ACCORDION */}
        <div className="col-span-12 md:col-span-7 bg-white px-6 md:px-10 py-10 flex items-start">
          <div className="w-full max-w-xl">
            {/* Tag */}
            <span className="px-3 py-1 text-sm rounded-full bg-[#0F3026]/5 text-[#0F3026] inline-block mb-3 font-gilroy">
              Why choose us?
            </span>

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl font-light text-[#0F3026] mb-2"
              style={{ fontFamily: "Gambetta, serif" }}
            >
              What we believe
            </h2>
            <p className="text-[#6B6B6B] text-base mb-8 font-gilroy">
              From projects to homes, our artisans build with grace and wonder.
            </p>

            {/* Accordion items */}
            <div className="divide-y divide-gray-200">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="py-4">
                    <button
                      onClick={() => toggleAccordion(i)}
                      className="flex items-center justify-between w-full text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-3 text-[#0F3026]">
                        {item.icon ? (
                          <HugeiconsIcon
                            icon={item.icon}
                            className="w-6 h-6 text-[#0F6B50]"
                          />
                        ) : (
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={24}
                            height={24}
                          />
                        )}
                        <span className="font-gilroy text-lg">
                          {item.title}
                        </span>
                      </div>

                      <HugeiconsIcon
                        icon={PlusSignIcon}
                        className={`w-5 h-5 text-[#0F3026] transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    {/* Accordion content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-40 mt-3" : "max-h-0"
                      }`}
                    >
                      <p className="text-[#2E2E2E] text-sm md:text-base font-gilroy leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideTwo;
