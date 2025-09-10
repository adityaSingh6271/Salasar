"use client";
import React from "react";

export default function SuccessStats() {
  return (
    <div className="mt-10 w-full flex justify-center px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-6xl border border-[#054738] p-6 md:p-10 text-center bg-white rounded-lg">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Essential Aspects Driving Our Success
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          Our success is fueled by innovation, powered by operational excellence,
          and anchored in an unwavering commitment to our clients.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="flex flex-col items-center justify-center p-6 shadow-sm bg-white rounded-md">
            <h3
              className="text-5xl sm:text-6xl font-medium text-[#000000]"
              style={{ fontFamily: "Gambetta" }}
            >
              42+
            </h3>
            <p className="mt-2 text-gray-600 text-sm">Years crafting realty dreams.</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 shadow-sm bg-white rounded-md">
            <h3
              className="text-5xl sm:text-6xl font-medium text-[#000000]"
              style={{ fontFamily: "Gambetta" }}
            >
              50M+
            </h3>
            <p className="mt-2 text-gray-600 text-sm">Sq Ft of wonder built.</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 shadow-sm bg-white rounded-md">
            <h3
              className="text-5xl sm:text-6xl font-medium text-[#000000]"
              style={{ fontFamily: "Gambetta" }}
            >
              10+
            </h3>
            <p className="mt-2 text-gray-600 text-sm">Projects in pipeline</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 shadow-sm bg-white rounded-md">
            <h3
              className="text-5xl sm:text-6xl font-medium text-[#000000]"
              style={{ fontFamily: "Gambetta" }}
            >
              8000+
            </h3>
            <p className="mt-2 text-gray-600 text-sm">Joyful Families served.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
