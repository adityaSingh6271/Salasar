"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "landscape", label: "Landscape and aesthetics" },
  { id: "parking", label: "Parking" },
  { id: "safety", label: "Safety & Security" },
];

// Replace with dynamic images in the future
const amenitiesImages = {
  landscape: [
    "/AmenityLeft.png",
    "/Amenity-midtop.png",
    "/Amenity-midbottom.png",
    "/Amenity-Right.png",
  ],
  parking: [
    "/AmenityLeft.png",
    "/Amenity-midtop.png",
    "/Amenity-midbottom.png",
    "/Amenity-Right.png",
  ],
  safety: [
    "/AmenityLeft.png",
    "/Amenity-midtop.png",
    "/Amenity-midbottom.png",
    "/Amenity-Right.png",
  ],
};

export default function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("landscape");

  return (
    <section className="py-16">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-5xl font-medium" style={{ fontFamily: "Gambetta" }}>
          Amenities
        </h2>
        <p className="text-gray-600 mt-4" style={{fontFamily: "Instrument Sans, sans-serif"}} >
          A thoughtfully curated range of modern amenities designed to bring
          comfort, safety, and joy to everyday living.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="mt-12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Left Big Image */}
          <div className="md:col-span-1 lg:col-span-1 flex justify-center">
            <div className="relative w-full max-w-[388px] aspect-[3/4]">
              <Image
                src={amenitiesImages[activeTab][0] || "/placeholder.svg"}
                alt="Amenity Left"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 388px"
              />
            </div>
          </div>

          {/* Middle Column (2 stacked images) */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col gap-4 lg:gap-6">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={amenitiesImages[activeTab][1] || "/placeholder.svg"}
                alt="Amenity Mid Top"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={amenitiesImages[activeTab][2] || "/placeholder.svg"}
                alt="Amenity Mid Bottom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Right Big Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[303px] aspect-[9/16]">
              <Image
                src={amenitiesImages[activeTab][3] || "/placeholder.svg"}
                alt="Amenity Right"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 303px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
