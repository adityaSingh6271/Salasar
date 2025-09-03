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
    <section className="w-full bg-white py-16 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h2
            className="text-[45px] font-medium text-[#000000]"
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-8 shadow-sm w-[356px] h-[422px]"
              style={{
                backgroundColor: "#054738",
                fontFamily: "Instrument Sans, sans-serif",
              }}
            >
              {/* Icon centered */}
              <div className="mb-10 flex justify-center">
                <div
                  className="flex items-center justify-center w-16 h-16"
                  style={{
                    border: "2px solid #F0E6C3",
                    borderRadius: "8px",
                  }}
                >
                  <HugeiconsIcon
                    icon={Award02Icon}
                    className="w-8 h-8"
                    style={{ color: "#F0E6C3" }}
                  />
                </div>
              </div>

              {/* Text content - left aligned */}
              <div className="flex flex-col text-left w-full">
                {/* Title */}
                <h3
                  className="font-medium leading-snug mb-16"
                  style={{
                    color: "#F0E6C3",
                    fontSize: "23px",
                    fontFamily:"Instrument-Sans, sans-serif"
                  }}
                >
                  {award.title}
                </h3>

                {/* Description */}
                <p
                  className="italic leading-relaxed mt-12"
                  style={{
                    color: "#F0E6C3",
                    fontSize: "18px",
                    fontFamily:"Instrument-Sans, sans-serif"
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
