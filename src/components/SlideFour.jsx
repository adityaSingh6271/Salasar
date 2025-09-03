// SlideFour.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SlideFour({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      // z-40 so navbar/chat (z-50) remain visible above it
      className="fixed inset-0 z-40 flex items-center justify-center bg-black"
      aria-modal="true"
      role="dialog"
    >
      {/* shared video — same layoutId you used in SlideThree */}
      <motion.video
        layoutId="property-video"
        src="/Salasar_slideClip.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </motion.div>
  );
}
