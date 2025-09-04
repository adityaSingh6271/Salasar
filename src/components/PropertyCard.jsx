"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const PropertyCard = ({ property }) => {
  return (
    <div className="w-full h-auto md:h-[560px] bg-white shadow-sm overflow-hidden flex flex-col md:flex-row">
      {/* Image */}
      <div className="w-full md:w-5/12 h-[300px] md:h-full">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-7/12 bg-[#FAF8F1] px-8 py-10 flex flex-col">
        {/* Top section */}
        <div className="flex-1 space-y-6">
          {/* Property Type */}
          <span className="text-lg text-gray-600 block">{property.type}</span>

          {/* Property Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#054738] leading-tight">
            {property.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {property.description}
          </p>

          {/* Icons */}
          <div className="flex items-center gap-5 flex-wrap">
            {property.icons?.map((icon, i) =>
              icon.type === "img" ? (
                <img
                  key={i}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-7 h-7 object-contain"
                />
              ) : (
                <HugeiconsIcon
                  key={i}
                  icon={icon.component}
                  className="w-7 h-7 text-[#054738]"
                />
              )
            )}
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="text-sm font-medium text-[#054738]">Location</span>
              <span className="text-sm text-gray-700">{property.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-[#054738]">Status</span>
              <span className="text-sm text-gray-700">{property.status}</span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between mt-8">
          <div>
            <span className="text-2xl font-bold text-black">{property.price}</span>
            <span className="ml-4 text-lg font-semibold text-black">{property.bhk}</span>
          </div>
          <button className="flex items-center gap-2 bg-[#054738] text-white px-6 py-3 rounded-md hover:bg-[#043529] transition">
            Book a site visit
            <HugeiconsIcon icon={ArrowRight02Icon} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
