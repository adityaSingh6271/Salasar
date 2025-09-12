import React from "react";
import Navbar from "./Navbar";

const BlogHero = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Video Section */}
      <div className="relative h-[100vh]">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/salasarClip.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Content at bottom center of video */}
        <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto text-center mb-20">
            {/* Title - force single line */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight whitespace-nowrap"
              style={{
                fontFamily: "Gambetta, serif",
                /* slightly more flexible clamp so it can shrink on very small screens */
                fontSize: "clamp(1.25rem, 3.5vw, 4.5rem)",
                lineHeight: "1.1",
              }}
            >
              Discover Our <span className="italic">Recent Events</span>
            </h1>

            {/* Description - next line */}
            <p
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#DADADA] leading-relaxed mx-auto max-w-3xl"
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)",
                fontFamily: "Instrument Sans, sans-serif",
              }}
            >
              Stay updated on milestones and activities. Recent events <br/> show our
              dedication to growth and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Remaining White Section (20% of screen height) */}
      <div className="h-[20vh] w-full bg-white"></div>
    </div>
  );
};

export default BlogHero;
