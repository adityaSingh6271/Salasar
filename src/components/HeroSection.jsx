"use client";

import Navbar from "@/components/Navbar";
import { Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-center"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/salasarClip.mp4" type="video/mp4" />
      </video>
      {/* Bottom Overlay (gradient fade) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-8 text-white">
        <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8 mt-16 sm:mt-20 lg:mt-24">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight sm:leading-tight"
            style={{
              fontFamily: "Gambetta, serif",
              fontSize: "clamp(1.5rem, 4vw, 4.5rem)",
              lineHeight: "1.1",
            }}
          >
            SALASAR GROUP – BUILDERS & DEVELOPERS
          </h1>
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl italic text-gray-200 leading-tight"
            style={{
              fontFamily: "Gambetta, serif",
              fontSize: "clamp(1.125rem, 3vw, 3rem)",
            }}
          >
            Weaving Dreams into{" "}
            <span className="text-[#9A9999]">Lasting Legacies</span>
          </h2>

          <p
            className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg text-[#9A9999] px-2 sm:px-4 mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
            }}
          >
            Craft identities that echo through eternity — strong and luminous.
            From vision to reality, our artisans build with grace and wonder.
            Lay your foundation of magic with Salasar.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-lg px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3">
              <HugeiconsIcon
                className="text-gray-700 flex-shrink-0"
                style={{
                  width: "clamp(16px, 3vw, 24px)",
                  height: "clamp(16px, 3vw, 24px)",
                }}
                icon={Search02Icon}
              />
              <input
                type="text"
                placeholder="Salasar heights"
                className="w-full px-2 sm:px-3 md:px-5 py-1 sm:py-2 md:py-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-full text-black placeholder-gray-900 outline-none bg-transparent"
                style={{
                  fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Floating Chatbot GIF (bottom-right) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/30 z-50 cursor-pointer hover:scale-105 transition-transform duration-200">
        <Image
          src="/Chatbot.gif"
          alt="Chatbot"
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* <div className="absolute inset-0 bg-black text-white">
        Aditya
      </div> */}
    </section>
  );
}
