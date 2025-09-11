import Image from "next/image";
import React from "react";

const Floorplan = () => {
  return (
    <section className="py-16 mt-5">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium" style={{ fontFamily: "Gambetta" }}>
          Floor Plan
        </h2>
        <p
          className="text-gray-600 mt-4 text-sm sm:text-base"
          style={{ fontFamily: "Instrument Sans, sans-serif" }}
        >
          Smartly designed layouts for comfort and convenience.
        </p>
      </div>

      {/* Responsive Image */}
      <div className="flex justify-center">
        <div className="mt-8 w-full max-w-6xl px-4">
          <Image
            src="/Floor-Plan.png"
            alt="Floor-Plan"
            width={1128}
            height={422}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Floorplan;
