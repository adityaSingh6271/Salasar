"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  return (
    <div className="w-full h-auto lg:h-[560px] bg-white shadow-sm overflow-hidden flex flex-col lg:flex-row">
      {/* Image */}

      <div className="w-full lg:w-5/12 h-[250px] sm:h-[300px] md:h-[350px] lg:h-full">
       <Link href={`/projects/${property.slug}`}>
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        </Link>
      </div>

      {/* Content */}
      <div className="w-full lg:w-7/12 bg-[#FAF8F1] px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col">
        {/* Top section */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          {/* Property Type */}
          <span className="text-base sm:text-lg text-gray-600 block">
            {property.type}
          </span>

          {/* Property Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#054738] leading-tight">
            {property.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {property.description}
          </p>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap mt-4 sm:mt-6">
            {property.icons?.map((icon, i) =>
              icon.type === "img" ? (
                <img
                  key={i}
                  src={icon.src || "/placeholder.svg"}
                  alt={icon.alt}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              ) : (
                <HugeiconsIcon
                  key={i}
                  icon={icon.component}
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#054738]"
                />
              )
            )}
          </div>

          {/* Details */}
          <div className="space-y-4 sm:space-y-5 mt-4 sm:mt-6">
            <div className="flex justify-between border-b border-gray-300 pb-3 sm:pb-5">
              <span className="text-xs sm:text-sm font-medium text-[#054738]">
                Location
              </span>
              <span className="text-xs sm:text-sm text-gray-700 text-right">
                {property.location}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-3 sm:pb-5">
              <span className="text-xs sm:text-sm font-medium text-[#054738]">
                Status
              </span>
              <span className="text-xs sm:text-sm text-gray-700">
                {property.status}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 sm:mt-8 gap-4 sm:gap-0">
          <div>
            <span className="text-2xl sm:text-[32px] font-semibold text-black">
              {property.bhk}
            </span>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#054738] text-white px-4 sm:px-6 py-3 rounded-md hover:bg-[#043529] transition text-sm sm:text-base">
            Book a site visit
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
