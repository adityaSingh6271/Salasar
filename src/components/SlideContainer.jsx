"use client";

import React, { useEffect, useRef, useState } from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import SlideOne from "./SlideOne";
import SlideFour from "./SlideFour";

// constants (stable across renders)
const BASE_SLIDE_HEIGHT = 900;
const baseSlides = [{ id: 1, component: <SlideOne /> }];
const overlayIndex = baseSlides.length; // index for slide-four

const slideVariants = {
  enter: (direction) => ({
    y: direction === "next" ? "-20%" : "20%",
    opacity: 0,
  }),
  center: {
    y: "0%",
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction === "next" ? "20%" : "-20%",
    opacity: 0,
  }),
};

const SlideContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next");

  // refs to avoid stale/useEffect dependency issues
  const isTransitioningRef = useRef(isTransitioning);
  const currentSlideRef = useRef(currentSlide);
  const directionRef = useRef(direction);

  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  // Stable keyboard listener (no dynamic dependency array)
  useEffect(() => {
    const onKey = (e) => {
      // use refs so no dependency-array needed
      if (isTransitioningRef.current) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        // next
        if (currentSlideRef.current < overlayIndex - 1) {
          isTransitioningRef.current = true;
          setIsTransitioning(true);
          setDirection("next");
          setCurrentSlide((p) => p + 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
            setIsTransitioning(false);
          }, 850);
        }
      }

      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        // prev
        if (currentSlideRef.current > 0) {
          isTransitioningRef.current = true;
          setIsTransitioning(true);
          setDirection("prev");
          setCurrentSlide((p) => p - 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
            setIsTransitioning(false);
          }, 850);
        }
      }

      if (e.key === "Escape") {
        // if overlay open, close to last base slide
        if (currentSlideRef.current === overlayIndex) {
          setCurrentSlide(baseSlides.length - 1);
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // intentionally empty

  // navigation helpers used by buttons (keeps behavior identical)
  const nextSlide = () => {
    if (isTransitioningRef.current) return;
    if (currentSlideRef.current < overlayIndex - 1) {
      isTransitioningRef.current = true;
      setIsTransitioning(true);
      setDirection("next");
      setCurrentSlide((p) => p + 1);
      setTimeout(() => {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      }, 850);
    }
  };

  const prevSlide = () => {
    if (isTransitioningRef.current) return;
    if (currentSlideRef.current > 0) {
      isTransitioningRef.current = true;
      setIsTransitioning(true);
      setDirection("prev");
      setCurrentSlide((p) => p - 1);
      setTimeout(() => {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      }, 850);
    }
  };

  const goToSlide = (idx) => {
    if (isTransitioningRef.current || idx === currentSlide) return;
    if (idx > currentSlide) {
      setDirection("next");
    } else if (idx < currentSlide) {
      setDirection("prev");
    }
    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentSlide(idx);
    setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }, 850);
  };

  // Only the base slides are in the translateY track
  const trackIndex = Math.min(currentSlide, baseSlides.length - 1);

  return (
    <LayoutGroup>
      <section className="w-full bg-white relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pb-28 md:pb-32 relative">
          {/* SLIDER VIEWPORT (base slides 1..3) */}
          <div className="relative overflow-hidden rounded-2xl h-[880px]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={trackIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="h-[900px] w-full">
                  {trackIndex === baseSlides.length - 1
                    ? // inject expand handler into SlideThree
                      React.cloneElement(baseSlides[trackIndex].component, {
                        onExpandVideo: () => setCurrentSlide(overlayIndex),
                      })
                    : baseSlides[trackIndex].component}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOTS (hide when overlay active) */}
          {currentSlide !== overlayIndex && (
            <div className="absolute bottom-4 md:bottom-6 left-6 flex gap-2">
              {baseSlides.map((_, i) => (
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
          )}

          {/* ARROWS (hide when overlay active) */}
          {currentSlide !== overlayIndex && (
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
                disabled={
                  isTransitioning || currentSlide === baseSlides.length - 1
                }
                className="group w-11 h-11 rounded-full cursor-pointer bg-white shadow-md border border-[#0F3026] flex items-center justify-center hover:shadow-lg hover:bg-[#0F3026] disabled:opacity-50"
                aria-label="Next"
              >
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  className="w-5 h-5 text-[#0F3026] group-hover:text-white"
                />
              </button>
            </div>
          )}
        </div>

        {/* Fullscreen overlay (SlideFour) mounted via AnimatePresence */}
        <AnimatePresence>
          {currentSlide === overlayIndex && (
            <SlideFour
              key="slide-four-overlay"
              onClose={() => setCurrentSlide(baseSlides.length - 1)}
            />
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
};

export default SlideContainer;
