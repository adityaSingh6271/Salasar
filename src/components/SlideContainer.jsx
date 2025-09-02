"use client";

import React, { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

const SlideContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { id: 1, component: <SlideOne /> },
    { id: 2, component: <SlideTwo /> },
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
    setCurrentSlide((p) => (p + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 550);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 550);
  };

  const goToSlide = (idx) => {
    if (isTransitioning || idx === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(idx);
    setTimeout(() => setIsTransitioning(false), 550);
  };

  return (
    <section className="w-full bg-white relative">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pb-28 md:pb-32 relative">
        {/* SLIDER VIEWPORT */}
        <div className="relative overflow-hidden rounded-2xl h-[720px]">
          {/* TRACK (all slides stacked vertically, move with translateY) */}
          <div
            className="h-full flex flex-col transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]"
            style={{
              transform: `translateY(-${currentSlide * 100}%)`,
              height: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="h-[720px] w-full flex-shrink-0">
                {slide.component}
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-4 md:bottom-6 left-6 flex gap-2">
          {slides.map((_, i) => (
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

        {/* ARROWS */}
        <div className="absolute bottom-4 md:bottom-6 right-6 flex items-center gap-3">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-11 h-11 rounded-full bg-white shadow-md border border-[#0F3026] flex items-center justify-center hover:shadow-lg hover:bg-[#0F3026] hover:text-white transition-all duration-300 disabled:opacity-50"
            aria-label="Previous"
          >
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="w-5 h-5 rotate-180 text-[#0F3026] hover:text-white"
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
              className="w-5 h-5 text-[#0F3026] hover:text-white"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SlideContainer;
