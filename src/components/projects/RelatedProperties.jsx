"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const properties = [
  {
    id: 1,
    image: "/Construction-Img1.png",
    date: "December 5, 2024",
    title: "nsion in Progress",
  },
  {
    id: 2,
    image: "/Construction-Img2.png",
    date: "December 5, 2024",
    title: "New alliance with leading company",
  },
  {
    id: 3,
    image: "/Construction-Img3.png",
    date: "February 28, 2025",
    title: "Structural Work Reaches New Milestone",
  },
  {
    id: 4,
    image: "/Construction-Img4.png",
    date: "March 15, 2025",
    title: "Innovative Interior Trends That Transform Living Spaces",
  },
];

export default function RelatedProperties() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null); // <- store Swiper instance here

  return (
    <section className="mt-10 pl-8">
      {/* small right shift with padding-left */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex justify-evenly items-start mb-12">
          <div>
            <h2
              className="text-4xl font-normal text-black mb-4 ml-10"
              style={{ fontFamily: "Gambetta" }}
            >
              Related
              <br />
              Properties
            </h2>
          </div>
          <div className="max-w-md">
            <p
              className="text-gray-600 text-sm leading-relaxed"
              style={{ fontFamily: "Instrument Sans, sans-serif" }}
            >
              Stay informed with the latest projects of Skyline Group — from
              equipment achieved to upcoming developments, we keep you updated
              every step of the way.
            </p>
          </div>
        </div>

        {/* Swiper */}
        <div className="mb-8">
          <Swiper
            onSwiper={(s) => setSwiperInstance(s)}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            onSlideChange={(s) => setCurrentSlide(s.realIndex)}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="properties-swiper"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="group cursor-pointer">
                  {/* removed rounded from image container */}
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={900}
                      height={700}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  </div>

                  <div className="space-y-2">
                    <p
                      className="text-sm text-gray-500"
                      style={{ fontFamily: "Instrument Sans, sans-serif" }}
                    >
                      {property.date}
                    </p>

                    <h3
                      className="text-xl font-medium text-black leading-tight whitespace-wrap"
                      style={{ fontFamily: "Instrument Sans, sans-serif" }}
                    >
                      {property.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dots (control Swiper via state) */}
        <div className="flex justify-center space-x-2 mb-12">
          {properties.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (
                  swiperInstance &&
                  typeof swiperInstance.slideToLoop === "function"
                ) {
                  swiperInstance.slideToLoop(i);
                }
                setCurrentSlide(i);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === i ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Download Button (no border-radius) */}
        <div className="flex justify-center">
          <button
            className="px-8 py-3 text-white hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "#054738",
              fontFamily: "Instrument Sans, sans-serif",
            }}
          >
            Download a brochure
          </button>
        </div>
      </div>
    </section>
  );
}
