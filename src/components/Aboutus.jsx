"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

export default function AboutUs() {
  const swiperRef = useRef(null);
  const images = [
    "/Building-1.png",
    "/Building-2.png",
    "/Building-3.png",
    "/Building-4.png",
    "/Building-3.png",
  ];

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    const interval = setInterval(() => {
      swiper.slideNext();
    }, 2000); // change speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-30">
          {/* Left Content */}
          <div className="space-y-8">
            <button className="px-6 py-3 bg-[#333232] cursor-pointer text-white text-sm rounded-full hover:bg-gray-700 transition">
              About us
            </button>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{
                fontFamily: "Gambetta, serif",
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "55.68px",
                letterSpacing: "-2px",
                textTransform: "capitalize",
              }}
            >
              Build with integrity, deliver on
              <br />
              time, and create addresses that
              <br />
              families are proud to call home.
            </h1>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-6 pt-16 mt-3">
            <p
              className="text-[#11111180]"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.24px",
              }}
            >
              Since 1982, Salasar Group has been crafting homes and landscapes
              across Pune, Pimpri-Chinchwad, and Thane – blending bold
              engineering with thoughtful design that enhances everyday life.
            </p>

            <p
              className="text-[#11111180]"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.24px",
              }}
            >
              Integrated Expertise: Development, construction, investment and
              financing – with initiatives in education and renewable energy –
              ensures quality materials, transparent processes, and timely
              handovers.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite scroll */}
      <div className="w-full bg-gray-50">
        <div className="mx-auto px-6 md:px-12 overflow-hidden">
          {/* Marquee container */}
          <div className="flex gap-6 animate-marquee">
            {[...images, ...images].map((src, idx) => (
              <div
                key={idx}
                 className="relative w-[460px] h-[480px]"
              >
                <Image
                  src={src}
                  alt={`Building ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
