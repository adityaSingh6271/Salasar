import React from "react";
import Navbar from "./Navbar";

const ExoticaHero = () => {
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
          <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8 mb-20">
            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight"
              style={{
                fontFamily: "Gambetta, serif",
                fontSize: "clamp(2rem, 5vw, 5rem)",
                lineHeight: "1.1",
              }}
            >
              SALASAR-EXOTICA II
            </h1>

            {/* Description */}
            <p
              className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-[#DADADA] mx-auto leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 2vw, 1.25rem)",
                fontFamily: "Instrument Sans, sans-serif",
              }}
            >
             Good buildings come from good people, and all problems are solved by good design.
            </p>
          </div>
        </div>
      </div>

      {/* Remaining White Section (20% of screen height) */}
      <div className="h-[20vh] w-full bg-white"></div>
    </div>
  );
};

export default ExoticaHero;
