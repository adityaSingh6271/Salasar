"use client";

import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import AwardsSection from "./AwardsSection";

// constants
const slides = [
  { id: 1, component: <AwardsSection /> },
  // { id: 2, component: <FAQSection /> },
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
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12 pb-16 md:pb-28 lg:pb-32 relative">
        {/* SLIDER VIEWPORT - Responsive height */}
        <div className="relative overflow-hidden rounded-2xl min-h-[500px] md:min-h-[600px] lg:min-h-[720px]">
          <div
            className="transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]"
            style={{
              transform: `translateY(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full">
                {slide.component}
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex gap-2">
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
        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex items-center gap-3">
          <button
            onClick={prevSlide}
            disabled={isTransitioning || currentSlide === 0}
            className="group w-10 h-10 md:w-11 md:h-11 rounded-full cursor-pointer bg-white shadow-md border border-[#0F3026] flex items-center justify-center hover:shadow-lg hover:bg-[#0F3026] disabled:opacity-50 transition-all duration-200"
            aria-label="Previous"
          >
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="w-4 h-4 md:w-5 md:h-5 rotate-180 text-[#0F3026] group-hover:text-white transition-colors duration-200"
            />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning || currentSlide === TOTAL_SLIDES - 1}
            className="group w-10 h-10 md:w-11 md:h-11 rounded-full cursor-pointer bg-white shadow-md border border-[#0F3026] flex items-center justify-center hover:shadow-lg hover:bg-[#0F3026] disabled:opacity-50 transition-all duration-200"
            aria-label="Next"
          >
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="w-4 h-4 md:w-5 md:h-5 text-[#0F3026] group-hover:text-white transition-colors duration-200"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SlideContainer2;
