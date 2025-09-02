"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  EquipmentGym03Icon,
  SwimmingIcon,
  Train01Icon,
} from "@hugeicons/core-free-icons";

// Individual slide components
const Slide1Component = ({ property }) => (
  <div className="w-full h-full">
    <div className="grid grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-white h-full">
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
            className="text-sm text-[#0F3026]/80 block mb-2"
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
            className="text-[#2E2E2E] text-sm md:text-base leading-relaxed mb-6 md:mb-7"
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
              <span
                className="text-[#054738]"
                style={{ fontFamily: "Gilroy" }}
              >
                Location
              </span>
              <span
                className="text-[#054738]"
                style={{ fontFamily: "Gilroy" }}
              >
                {property.location}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm py-3 md:py-3.5">
              <span
                className="text-[#054738]"
                style={{ fontFamily: "Gilroy" }}
              >
                Status
              </span>
              <span
                className="text-[#0F3026]"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                {property.status}
              </span>
            </div>
          </div>

          {/* BHK + CTA */}
          <div className="flex items-center justify-between">
            <h3
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-black"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              {property.bhk}
            </h3>

            <button
              className="flex items-center gap-2 border-1 border-[#0F3026] text-[#0F3026] rounded-full px-5 md:px-6 py-2.5 hover:bg-[#0F3026] hover:text-white transition-colors duration-300"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              Book a site visit
              <HugeiconsIcon icon={ArrowRight02Icon} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide2Component = ({ property }) => (
  <div className="w-full h-full">
    <div className="grid grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-white h-full">
      {/* PANEL FIRST */}
      <div className="col-span-12 md:col-span-7 bg-[#F0F8FF] px-6 md:px-10 py-8 md:py-10 flex items-center">
        <div className="w-full max-w-xl">
          <span className="text-sm text-[#0F3026]/80 block mb-2 font-medium">
            {property.type}
          </span>
          <h2
            className="text-4xl md:text-5xl text-[#0F3026] mb-4 font-bold"
            style={{ fontFamily: "Gambetta, serif" }}
          >
            {property.title}
          </h2>
          <p className="text-[#2E2E2E] text-sm md:text-base leading-relaxed mb-8">
            {property.description}
          </p>

          <div className="flex items-center gap-6 mb-8 text-[#054738]">
            <HugeiconsIcon icon={Train01Icon} className="w-7 h-7" />
            <HugeiconsIcon icon={EquipmentGym03Icon} className="w-7 h-7" />
            <HugeiconsIcon icon={SwimmingIcon} className="w-7 h-7" />
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex justify-between items-center text-sm py-2 border-b border-[#E0E0E0]">
              <span className="text-[#666666] font-medium">Location</span>
              <span className="text-[#0F3026] font-semibold">{property.location}</span>
            </div>
            <div className="flex justify-between items-center text-sm py-2">
              <span className="text-[#666666] font-medium">Status</span>
              <span className="text-[#0F3026] font-semibold">{property.status}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-2xl md:text-3xl font-black text-[#0F3026]">
              {property.bhk}
            </h3>
            <button className="flex items-center gap-2 bg-[#0F3026] text-white rounded-full px-6 py-3 hover:bg-[#0A2A1E] transition-colors font-medium">
              Enquire now
              <HugeiconsIcon icon={ArrowRight02Icon} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* IMAGE SECOND */}
      <div className="col-span-12 md:col-span-5 relative">
        <div className="relative h-[320px] md:h-full w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
);

const Slide3Component = ({ property }) => (
  <div className="w-full h-full">
    <div className="grid grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-white h-full">
      {/* COMPACT IMAGE */}
      <div className="col-span-12 md:col-span-4 relative">
        <div className="relative h-[260px] md:h-full w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0F3026]">
            {property.type}
          </div>
        </div>
      </div>

      {/* EXTENDED PANEL */}
      <div className="col-span-12 md:col-span-8 bg-gradient-to-br from-[#F7F3E9] to-[#F0EDE3] px-6 md:px-10 py-8 md:py-10 flex items-center">
        <div className="w-full max-w-2xl">
          <h2
            className="text-4xl md:text-6xl text-[#0F3026] mb-4 font-light"
            style={{ fontFamily: "Gambetta, serif" }}
          >
            {property.title}
          </h2>
          <p className="text-[#2E2E2E] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {property.description}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <span className="text-xs text-[#666666] uppercase tracking-wider block mb-1">Location</span>
              <span className="text-lg font-bold text-[#0F3026]">{property.location}</span>
            </div>
            <div>
              <span className="text-xs text-[#666666] uppercase tracking-wider block mb-1">Status</span>
              <span className="text-lg font-bold text-[#0F3026]">{property.status}</span>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs text-[#666666] uppercase tracking-wider block mb-1">Configuration</span>
              <h3 className="text-3xl md:text-4xl font-black text-[#0F3026]">
                {property.bhk}
              </h3>
            </div>
            <button className="flex items-center gap-2 border-2 border-[#0F3026] text-[#0F3026] rounded-full px-8 py-3 hover:bg-[#0F3026] hover:text-white transition-all duration-300 font-semibold">
              Book a site visit
              <HugeiconsIcon icon={ArrowRight02Icon} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedProperties = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const properties = [
    {
      id: 1,
      type: "Residential",
      title: "Salasar Green",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum laoreet.",
      location: "Mira Road",
      status: "Under Construction",
      bhk: "3BHK, 2BHK",
      image: "/FProperty1.png",
      component: Slide1Component,
    },
    {
      id: 2,
      type: "Commercial",
      title: "Salasar Heights",
      description:
        "Premium commercial spaces designed for modern businesses. Featuring state-of-the-art facilities and prime location connectivity.",
      location: "Andheri West",
      status: "Ready to Move",
      bhk: "Office Spaces",
      image: "/FProperty2.png",
      component: Slide2Component,
    },
    {
      id: 3,
      type: "Luxury",
      title: "Salasar Elite",
      description:
        "Ultra-luxury residences with panoramic city views. Experience the pinnacle of modern living with world-class amenities.",
      location: "Bandra",
      status: "Launching Soon",
      bhk: "4BHK, 5BHK",
      image: "/FProperty1.png",
      component: Slide3Component,
    },
  ];

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (isTransitioning) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") nextSlide();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((p) => (p + 1) % properties.length);
    setTimeout(() => setIsTransitioning(false), 550);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((p) => (p - 1 + properties.length) % properties.length);
    setTimeout(() => setIsTransitioning(false), 550);
  };

  const goToSlide = (idx) => {
    if (isTransitioning || idx === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(idx);
    setTimeout(() => setIsTransitioning(false), 550);
  };

  return (
    <section className="w-full bg-white">
      {/* Header row */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pt-8 md:pt-12">
        <div className="grid grid-cols-12 items-start gap-y-4 md:gap-6 mt-5">
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

      {/* Slider with increased bottom padding for dots */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pb-20 md:pb-24 relative">
        <div className="relative overflow-hidden rounded-none md:rounded-2xl">
          {/* Fixed slide height with proper spacing */}
          <div className="h-auto md:h-[540px] lg:h-[560px] relative mt-16">
            <div
              className="absolute inset-0 will-change-transform transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]"
              style={{ transform: `translateY(-${currentSlide * 100}%)` }}
            >
              <div className="flex flex-col">
                {properties.map((property) => {
                  const SlideComponent = property.component;
                  return (
                    <div
                      key={property.id}
                      className="min-h-[520px] md:h-[570px] lg:h-[560px]"
                    >
                      <SlideComponent property={property} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dots - positioned with more space from bottom */}
          <div className="absolute -bottom-12 md:-bottom-14 left-2 md:left-4 flex gap-2">
            {properties.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === currentSlide 
                    ? "bg-[#0F6B50] scale-110" 
                    : "bg-[#D5E2DC] hover:bg-[#B8CCC3]"
                }`}
              />
            ))}
          </div>

          {/* Arrows - positioned with more space from bottom */}
          <div className="absolute -bottom-12 md:-bottom-14 right-2 md:right-4 flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-11 h-11 rounded-full bg-white shadow-md border border-[#0F3026] flex items-center justify-center hover:shadow-lg hover:bg-[#0F3026] hover:text-white transition-all duration-300 disabled:opacity-50"
              aria-label="Previous"
            >
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                className="w-5 h-5 rotate-180"
              />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-11 h-11 rounded-full bg-white shadow-md border border-[#0F3026] flex items-center justify-center hover:shadow-lg hover:bg-[#0F3026] hover:text-white transition-all duration-300 disabled:opacity-50"
              aria-label="Next"
            >
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;