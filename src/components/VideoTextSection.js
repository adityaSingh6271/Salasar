"use client";

import { motion } from "framer-motion";

export default function VideoTextSection() {
  return (
    <section
      id="video-text"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* The green overlay at the very back */}
      <div className="absolute inset-0 bg-[#054738] z-[-1]"></div>

      {/* Container for the video and text */}
      <motion.div
        initial={{ scale: 3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          id="salasarTextVideo"
        >
          <source src="/salasarClip2.mp4" type="video/mp4" />
        </video>

        {/* Green overlay that will be masked by text - video shows through text */}
        <div 
          className="absolute inset-0 bg-[#054639] z-5 flex items-center justify-center"
          style={{
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}
        />

        {/* Fallback text for browsers that don't support mask */}
        <div
          className="relative z-10 text-6xl md:text-8xl font-extrabold uppercase text-white opacity-80"
          style={{
            fontFamily: "Gambetta, serif",
          }}
        >
          SALASAR GROUP
        </div>
      </motion.div>
    </section>
  );
}