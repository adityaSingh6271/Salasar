"use client";

import Image from "next/image";

export default function ProjectOverview() {
  return (
    <div
      className="max-w-6xl mx-auto px-6 lg:px-12 py-12 grid lg:grid-cols-3 gap-10"
      style={{ fontFamily: "Instrument Sans, sans-serif" }}
    >
      {/* Left: Text Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Heading */}
        <h2
          className="text-5xl font-md text-black"
          style={{ fontFamily: "Gambetta, serif" }}
        >
          Overview
        </h2>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
          Choose an exotic life in your city and celebrate every day like a
          vacation. Salasar Exotica offers architecture designed for a high
          standard of living — urban outside, peaceful inside. The residency
          brings convenience, entertainment, and endless luxuries, creating a
          home where you work, play, breathe peacefully, and make unforgettable
          memories. With top brands, malls, supermarkets nearby, and gardens
          with a clubhouse within, gift your family a blissful lifestyle in the
          heart of the city.
        </p>
      </div>

      {/* Right: Location & Status */}
      <div className="flex flex-col gap-6 mt-20">
        {/* Location */}
        <div className="flex justify-between items-center border rounded-md px-4 py-3 text-sm font-medium border-[#054738]">
          <span className="text-gray-800">Location</span>
          <span className="text-[#054738]">Mira Road</span>
        </div>

        {/* Status */}
        <div className="border rounded-md px-4 py-3 border-[#054738]">
          <div className="flex justify-between items-center mb-2 text-sm font-medium">
            <span className="text-gray-800">Status</span>
            <span className="text-[#054738]">Under construction</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-[#F0E6C3] h-2 rounded-full overflow-hidden">
            <div className="bg-[#054738] h-2 w-2/3 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Full width image */}
      <div className="lg:col-span-3 mt-8 relative w-full h-[388px]">
        <Image
          src="/Skyline.jpg"
          alt="Skyline"
          fill
          priority
          
        />
      </div>
    </div>
  );
}
