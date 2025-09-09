"use client"
import { useEffect, useRef } from "react"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import "swiper/css"

export default function AboutUs() {
  const swiperRef = useRef(null)
  const images = ["/Building-1.png", "/Building-2.png", "/Building-3.png", "/Building-4.png", "/Building-3.png"]

  useEffect(() => {
    if (!swiperRef.current) return
    const swiper = swiperRef.current.swiper

    const interval = setInterval(() => {
      swiper.slideNext()
    }, 2000) // change speed here

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start mt-16 sm:mt-20 lg:mt-30">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#333232] cursor-pointer text-white text-xs sm:text-sm rounded-full hover:bg-gray-700 transition-colors duration-200">
              About us
            </button>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
              style={{
                fontFamily: "Gambetta, serif",
                fontWeight: 500,
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                lineHeight: "1.2",
                letterSpacing: "clamp(-0.02em, -0.3vw, -0.125em)",
                textTransform: "capitalize",
              }}
            >
              Build with integrity, deliver on
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>time, and create addresses that
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>families are proud to call home.
            </h1>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12 lg:pt-16">
            <p
              className="text-[#11111180] leading-relaxed"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                lineHeight: "1.6",
                letterSpacing: "-0.01em",
              }}
            >
              Since 1982, Salasar Group has been crafting homes and landscapes across Pune, Pimpri-Chinchwad, and Thane
              – blending bold engineering with thoughtful design that enhances everyday life.
            </p>

            <p
              className="text-[#11111180] leading-relaxed"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                lineHeight: "1.6",
                letterSpacing: "-0.01em",
              }}
            >
              Integrated Expertise: Development, construction, investment and financing – with initiatives in education
              and renewable energy – ensures quality materials, transparent processes, and timely handovers.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite scroll */}
      <div className="w-full bg-gray-50 py-8 sm:py-12">
        <div className="overflow-hidden">
          {/* Marquee container */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 animate-marquee">
            {[...images, ...images].map((src, idx) => (
              <div
                key={idx}
                className="relative w-[280px] h-[300px] sm:w-[320px] sm:h-[340px] md:w-[380px] md:h-[400px] lg:w-[460px] lg:h-[480px] flex-shrink-0 rounded-lg overflow-hidden"
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Building ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 460px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
