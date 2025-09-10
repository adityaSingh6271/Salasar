"use client";
import React from "react";
import Image from "next/image";

const SectionBlock = () => {
  return (
    <div className="mt-20">
      <div className="w-full flex justify-center bg-[#FAFAFA] py-12 px-4">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex items-start md:items-center gap-4 md:gap-6 w-full md:w-1/2 justify-center md:justify-start">
            {/* Number */}
            <span className="text-[22px] sm:text-[26px] md:text-[28.2px] leading-[100%] tracking-[-0.14px] text-[#111111] font-[Instrument Sans]">
              01
            </span>

            {/* Text */}
            <p className="text-[20px] sm:text-[24px] md:text-[28.2px] leading-[120%] text-[#1111118A] font-[Instrument Sans]">
              Delivering uncompromising
              <br className="hidden sm:block" />
              construction quality,
              <br className="hidden sm:block" />
              safety, and on-time
              <br className="hidden sm:block" />
              execution.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/Hall-ladder.png"
              alt="Hall ladder"
              width={562}
              height={599}
              className="object-contain w-full max-w-[400px] md:max-w-[562px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;
