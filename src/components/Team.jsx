import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="flex flex-col items-center w-full px-4 md:px-20 py-12">
      {/* Heading */}
      <h1
        className="text-black font-medium text-[40px] md:text-3xl text-center"
        style={{ fontFamily: "Gambetta, serif" }}
      >
        Our Team
      </h1>

      {/* Subheading */}
      <p
        className="mt-4 text-gray-600 text-base md:text-lg text-center max-w-3xl"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        Experts who put your goals first, every step of the way
      </p>

      {/* Team Image */}
      <div className="mt-8 w-full max-w-[1128px]">
        <Image
          src="/Team.png"
          alt="Our Team"
          width={1128}
          height={422}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Bottom Text - Clamped to 3 lines */}
      <p
        className="mt-8 text-[20px] sm:text-[22px] md:text-[24px] text-[#0000008A] text-center italic max-w-4xl 
                   leading-[1.3] overflow-hidden text-ellipsis 
                   -webkit-box -webkit-line-clamp-3 -webkit-box-orient-vertical"
        style={{ fontFamily: "Instrument Sans, sans-serif" }}
      >
        “Our team is a group of dedicated real estate professionals committed to
        helping clients buy, sell, and invest with confidence. With expertise in
        market trends, property management, and client care, we work
        collaboratively to deliver personalized solutions and exceptional
        results every step of the way.”
      </p>
    </section>
  );
};

export default Team;
