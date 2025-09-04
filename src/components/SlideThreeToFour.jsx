"use client";
import { useState, useEffect } from "react";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";

export default function SlideThreeToFour() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [played, setPlayed] = useState(false); // prevent repetitive triggering

  // Watch when SlideThree comes into view
  const { ref, inView } = useInView({
    threshold: 0.6,   // 60% visible
    triggerOnce: true // fire only once
  });

  useEffect(() => {
    if (inView && !played) {
      setPlayed(true);
      setShowOverlay(true);

      // Auto close overlay after 2s
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [inView, played]);

  return (
    <LayoutGroup>
      <div ref={ref}>
        <SlideThree onExpandVideo={() => setShowOverlay(true)} />
      </div>

      <AnimatePresence>
        {showOverlay && (
          <SlideFour key="slide-four-overlay" onClose={() => setShowOverlay(false)} />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
