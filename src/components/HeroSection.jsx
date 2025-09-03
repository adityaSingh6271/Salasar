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
        className="absolute top-0 left-0 w-full h-full object-cover"
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
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white mt-24">
        <h1
          className="text-3xl md:text-5xl lg:text-7xl font-light"
          style={{ fontFamily: "Gambetta, serif", marginTop: "240px" }}
        >
          SALASAR GROUP – BUILDERS & DEVELOPERS
        </h1>
        <h2
          className="mt-4 text-2xl md:text-4xl lg:text-5xl italic text-gray-200"
          style={{ fontFamily: "Gambetta, serif" }}
        >
          Weaving Dreams into{" "}
          <span className="text-[#9A9999]">Lasting Legacies</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm md:text-base text-[#9A9999] px-4">
          Craft identities that echo through eternity — strong and luminous.
          From vision to reality, our artisans build with grace and wonder. Lay
          your foundation of magic with Salasar.
        </p>

        {/* Search Bar */}
        <div className="mt-6 w-full max-w-2xl flex items-center bg-white rounded-full shadow px-4 md:px-6 py-2 md:py-3">
          <HugeiconsIcon
            className="text-gray-700"
            style={{ width: "24px", height: "24px" }}
            icon={Search02Icon}
          />
          <input
            type="text"
            placeholder="Salasar heights"
            className="w-full px-3 md:px-5 py-2 md:py-3 text-lg md:text-2xl rounded-full text-black placeholder-gray-900 outline-none bg-transparent"
          />
        </div>
      </div>
      {/* Floating Chatbot GIF (bottom-right) */}
      <div className="fixed bottom-6 right-6 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/30 z-50 cursor-pointer">
        <Image
          src="/Chatbot.gif"
          alt="Chatbot"
          fill
          className="object-cover rounded-full"
        />
      </div>
    </section>
  );
}
