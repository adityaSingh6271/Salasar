import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="py-16 mt-5">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-10"
          style={{ fontFamily: "Gambetta" }}
        >
          Our Gallery
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        <div className="relative w-full aspect-[4/3]">
          <Image src="/Gallery-img1.png" alt="Gallery-Image" fill className="object-cover" />
        </div>
        <div className="relative w-full aspect-[4/3]">
          <Image src="/Gallery-img2.png" alt="Gallery-Image" fill className="object-cover" />
        </div>
        <div className="relative w-full aspect-[4/3]">
          <Image src="/Gallery-img3.png" alt="Gallery-Image" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
