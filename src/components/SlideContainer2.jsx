// SlideContainer2.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import AwardsSection from "./AwardsSection";
import FAQSection from "./faq";

// constants
const BASE_SLIDE_HEIGHT = 900;
const slides = [
  { id: 1, component: <AwardsSection /> },
//   { id: 2, component: <FAQSection /> },
];
const TOTAL_SLIDES = slides.length;

const SlideContainer2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // refs to avoid stale closure
  const isTransitioningRef = useRef(isTransitioning);
  const currentSlideRef = useRef(currentSlide);

  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  // Keyboard + scroll navigation
  useEffect(() => {
    const onKey = (e) => {
      if (isTransitioningRef.current) return;

      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    const onWheel = (e) => {
      if (isTransitioningRef.current) return;
      if (e.deltaY > 0) nextSlide();
      else if (e.deltaY < 0) prevSlide();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  // navigation helpers
  const nextSlide = () => {
    if (
      isTransitioningRef.current ||
      currentSlideRef.current === TOTAL_SLIDES - 1
    )
      return;
    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentSlide((p) => Math.min(p + 1, TOTAL_SLIDES - 1));
    setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }, 550);
  };

  const prevSlide = () => {
    if (isTransitioningRef.current || currentSlideRef.current === 0) return;
    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentSlide((p) => Math.max(p - 1, 0));
    setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }, 550);
  };

  const goToSlide = (idx) => {
    if (isTransitioningRef.current || idx === currentSlide) return;
    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentSlide(idx);
    setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }, 550);
  };

  return (
    <section className="w-full bg-white relative">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pb-28 md:pb-32 relative">
        {/* SLIDER VIEWPORT */}
        <div className="relative overflow-hidden rounded-2xl h-[720px]">
          <div
            className="transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]"
            style={{
              transform: `translateY(-${currentSlide * BASE_SLIDE_HEIGHT}px)`,
              height: `${TOTAL_SLIDES * BASE_SLIDE_HEIGHT}px`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="h-[720px] w-full">
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
            disabled={isTransitioning || currentSlide === 0}
            className="group w-11 h-11 rounded-full cursor-pointer bg-white shadow-md border border-[#0F3026] flex items-center justify-center hover:shadow-lg hover:bg-[#0F3026] disabled:opacity-50"
            aria-label="Previous"
          >
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="w-5 h-5 rotate-180 text-[#0F3026] group-hover:text-white"
            />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning || currentSlide === TOTAL_SLIDES - 1}
            className="group w-11 h-11 rounded-full cursor-pointer bg-white shadow-md border border-[#0F3026] flex items-center justify-center hover:shadow-lg hover:bg-[#0F3026] disabled:opacity-50"
            aria-label="Next"
          >
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="w-5 h-5 text-[#0F3026] group-hover:text-white"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SlideContainer2;
