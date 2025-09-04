// SlideVideoWrapper.jsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SlideThree from "./SlideThree";

export default function SlideVideoWrapper() {
  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
    // start when SlideThree enters viewport, end when fully passed
  });

  // Scale + opacity for the "fullscreen" overlay
  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 1.5]); // zoom feel
  const opacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Normal SlideThree */}
      <SlideThree />

      {/* Overlay fullscreen video (SlideFour style) */}
      <motion.video
        layoutId="property-video"
        src="/Salasar_slideClip.mp4"
        className="fixed inset-0 z-30 w-full h-full object-cover pointer-events-none"
        style={{
          scale,
          opacity,
        }}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
