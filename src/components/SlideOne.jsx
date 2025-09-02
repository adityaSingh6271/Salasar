"use client";

import React from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  EquipmentGym03Icon,
  SwimmingIcon,
  Train01Icon,
} from "@hugeicons/core-free-icons";

const SlideOne = () => {
  const property = {
    type: "Residential",
    title: "Salasar Green",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    location: "Mira Road",
    status: "Under Construction",
    bhk: "3BHK, 2BHK",
    image: "/FProperty1.png",
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header inside slide */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pt-8 md:pt-12">
        <div className="grid grid-cols-12 items-start gap-y-4 md:gap-6 mt-8">
          <div className="col-span-12 md:col-span-6">
            <h1
              className="text-4xl md:text-5xl font-light text-black"
              style={{ fontFamily: "Gambetta, serif" }}
            >
              Featured Properties
            </h1>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p
              className="text-[#6B6B6B] text-sm md:text-base max-w-md md:ml-auto"
              style={{ fontFamily: "Instrument Sans, sans-serif" }}
            >
              Discover our featured works showcasing our expertise and passion
              in every project. Let these stories inspire your next venture!
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 gap-0 overflow-hidden bg-white h-full mt-10">
        {/* IMAGE */}
        <div className="col-span-12 md:col-span-5 relative">
          <div className="relative h-[320px] md:h-full w-full">
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>

        {/* PANEL */}
        <div className="col-span-12 md:col-span-7 bg-[#FAF8F1] px-6 md:px-10 py-8 md:py-10 flex items-start">
          <div className="w-full max-w-xl">
            <span
              className="text-2xl text-[#000000]/80 block mb-2 font-medium"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              {property.type}
            </span>

            <h2
              className="text-4xl md:text-5xl leading-tight text-[#0F3026] mb-4"
              style={{ fontFamily: "Gambetta, serif" }}
            >
              {property.title}
            </h2>

            <p
              className="text-[#000000] text-sm md:text-base leading-relaxed mb-6 md:mb-7"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              {property.description}
            </p>

            {/* ICONS ROW */}
            <div className="flex items-center gap-6 md:gap-7 mb-6 md:mb-7 text-[#054738]">
              <Image src="/Mall.png" alt="Mall" width={28} height={28} />
              <HugeiconsIcon icon={Train01Icon} className="w-6 h-6" />
              <HugeiconsIcon icon={SwimmingIcon} className="w-6 h-6" />
              <HugeiconsIcon icon={EquipmentGym03Icon} className="w-6 h-6" />
              <Image
                src="/hugeicons_university.png"
                alt="University"
                width={28}
                height={28}
              />
            </div>

            {/* META ROWS */}
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between items-center text-sm py-3 md:py-3.5 border-b border-[#CFC9BA]">
                <span className="text-[#054738] font-gilroy">Location</span>
                <span className="text-[#054738] font-gilroy">
                  {property.location}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm py-3 md:py-3.5">
                <span className="text-[#054738] font-gilroy">Status</span>
                <span className="text-[#0F3026] font-gilroy">
                  {property.status}
                </span>
              </div>
            </div>

            {/* BHK + CTA */}
            <div className="flex items-center justify-between">
              <h3 className="text-3xl md:text-3xl font-bold tracking-tight text-[#000000] font-gilroy">
                {property.bhk}
              </h3>

              <button className="cursor-pointer flex items-center gap-2 border border-[#0F3026] text-[#0F3026] rounded-full px-5 md:px-6 py-2.5 hover:bg-[#0F3026] hover:text-white transition-colors duration-300 font-gilroy">
                Book a site visit
                <HugeiconsIcon icon={ArrowRight02Icon} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
