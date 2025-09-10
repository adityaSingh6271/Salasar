"use client";

import Navbar from "@/components/Navbar";
import { Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Font size shrinks from text-6xl → text-3xl when scrolling 200vh
  const fontSize = useTransform(
    scrollY,
    [0.1 * (typeof window !== "undefined" ? window.innerHeight : 1000), 
     1.2 * (typeof window !== "undefined" ? window.innerHeight : 1000)],
    ["100px", "7rem"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[220vh] overflow-x-clip">
      <div className="sticky top-0 h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/salasarClip.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <div
        className="absolute h-[220vh] top-0  wrapper_x1"
        style={{
          display: scrolled ? "flex" : "none",
          fontFamily: "Instrument Sans, sans-serif",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[100vh] sticky top-0"
        >
          <source src="/salasarClip.mp4" type="video/mp4" />
        </video>
        <svg viewBox="0 0 800 200" class="mask">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            YOUR TEXT HERE
          </text>
        </svg> */}
      {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 285 80"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" />
              <text x="72" y="50" font-size="2em">
                SALASAR GROUP
              </text>
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="#054639"/>
        </svg> */}
      {/* </div> */}
      {/* <div className="top-0 absolute h-[220vh] w-full">
        <motion.div
          style={{
            fontSize,
            display: scrolled ? "flex" : "none",
            fontFamily: "Instrument Sans, sans-serif",
          }}
          className="h-screen overflow-clip w-full sticky top-0 z-[9999] flex items-center justify-center text-nowrap font-black pointer-events-none text-white bg-[#054639]"
        >
          SALASAR GROUP
        </motion.div>
      </div> */}
      <div className="absolute top-0 w-full h-screen">
        <section id="hero" className="relative w-full h-screen overflow-hidden">
          {/* Background video */}

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
                Craft identities that echo through eternity — strong and
                luminous. From vision to reality, our artisans build with grace
                and wonder. Lay your foundation of magic with Salasar.
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
              onClick={() => console.log(fontSize.get("current"))}
              src="/Chatbot.gif"
              alt="Chatbot"
              fill
              className="object-cover rounded-full"
            />
          </div>

          <div
            className="absolute inset-0 bg-transparent z-50 flex items-center justify-center text-[3000px] text-nowrap font-black text-transparent pointer-events-none"
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
          >
            SALASAR GROUP
          </div>
        </section>
      </div>
      <div
        className="absolute top-0 w-full h-[220vh] overflow-x-clip z-[9999]"
        style={{
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? "auto" : "none",
        }}
      >
        <div className="sticky top-0 h-[100vh] wrapper_x1">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[100vh] w-[100vw] object-cover sticky top-0"
          >
            <source src="/salasarClip.mp4" type="video/mp4" />
          </video>
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
            style={{
              display: "flex",
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
              <motion.text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                style={{
                  fontSize,
                  fontWeight: "bold",
                  fill: "black",
                  color: "black",
                  fontFamily: "Instrument Sans, sans-serif",
                }}
              >
                SALASAR GROUP
              </motion.text>
            </mask>
            <rect x="0" y="0" width="100%" height="100%" fill="#054639" mask="url(#mask)"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
