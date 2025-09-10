// AwardsSection.jsx
"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Award02Icon } from "@hugeicons/core-free-icons";

const awards = [
  {
    title: "Prominent Builders & Developers",
    desc: "CREDAI-MCHI, 2011.",
  },
  {
    title: "Iconic Trusted Developer",
    desc: "Mid-day Real Estate & Infrastructure Icons, 2023.",
  },
  {
    title: "Mid-day Hot Property Award",
    desc: "June 2023 for Salasar Centre Park Lawn.",
  },
];

export default function AwardsSection() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 md:mb-12 gap-4 md:gap-8">
          <h2
            className="text-3xl md:text-[45px] font-medium text-[#000000] leading-tight"
            style={{ fontFamily: "Gambetta" }}
          >
            Awards
          </h2>
          <p
            className="max-w-md text-sm md:text-base leading-relaxed text-[#1111118A]"
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
          >
            Discover our featured works showcasing our expertise and passion in
            every project. Let these stories inspire your next venture!
          </p>
        </div>

        {/* Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 md:p-8 shadow-sm w-full min-h-[320px] md:min-h-[380px] lg:min-h-[422px]"
              style={{
                backgroundColor: "#054738",
                fontFamily: "Instrument Sans, sans-serif",
              }}
            >
              {/* Icon centered */}
              <div className="mb-6 md:mb-10 flex justify-center">
                <div
                  className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16"
                  style={{
                    border: "2px solid #F0E6C3",
                    borderRadius: "8px",
                  }}
                >
                  <HugeiconsIcon
                    icon={Award02Icon}
                    className="w-6 h-6 md:w-8 md:h-8"
                    style={{ color: "#F0E6C3" }}
                  />
                </div>
              </div>

              {/* Text content - left aligned */}
              <div className="flex flex-col w-full flex-1">
                {/* Title wrapper occupies remaining space and centers its content */}
                <div className="flex-1 flex items-center justify-center">
                  <h3
                    style={{
                      color: "#F0E6C3",
                      fontSize: "18px",
                      fontFamily: "Instrument-Sans, sans-serif",
                    }}
                    className="text-lg md:text-xl lg:text-[23px] font-medium leading-snug"
                  >
                    {award.title}
                  </h3>
                </div>

                {/* Description stays left-aligned at the bottom */}
                <p
                  className="italic leading-relaxed text-base md:text-lg text-left"
                  style={{
                    color: "#F0E6C3",
                    fontFamily: "Instrument-Sans, sans-serif",
                  }}
                >
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
