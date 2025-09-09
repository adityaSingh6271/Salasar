"use client"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, EquipmentGym03Icon, SwimmingIcon, Train01Icon } from "@hugeicons/core-free-icons"

const SlideOne = () => {
  const property = {
    type: "Residential",
    title: "Salasar Green",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    location: "Mira Road",
    status: "Under Construction",
    bhk: "3BHK, 2BHK",
    image: "/FProperty1.png",
  }

  return (
    <div className="w-full h-full flex flex-col mt-6 sm:mt-10">
      {/* Header inside slide */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 pt-4 sm:pt-8 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4 md:gap-6 mt-4 sm:mt-8">
          <div className="col-span-1 md:col-span-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black -ml-4 sm:-ml-8 md:-ml-14 lg:-ml-30"
              style={{
                fontFamily: "Gambetta, serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              Featured Properties
            </h1>
          </div>
          <div className="col-span-1 md:col-span-6">
            <p
              className="text-[#6B6B6B] text-sm sm:text-base md:text-lg max-w-md md:ml-auto leading-relaxed"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
              }}
            >
              Discover our featured works showcasing our expertise and passion in every project. Let these stories
              inspire your next venture!
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden bg-white h-full mt-6 sm:mt-10">
        {/* IMAGE */}
        <div className="col-span-1 md:col-span-5 relative order-1 md:order-1">
          <div className="relative h-[280px] sm:h-[320px] md:h-full w-full min-h-[400px] md:min-h-[500px]">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>

        {/* PANEL */}
        <div className="col-span-1 md:col-span-7 bg-[#FAF8F1] px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 flex items-start order-2 md:order-2">
          <div className="w-full max-w-xl">
            <span
              className="text-lg sm:text-xl md:text-2xl text-[#000000]/80 block mb-2 font-medium"
              style={{
                fontFamily: "Gilroy, sans-serif",
                fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
              }}
            >
              {property.type}
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#0F3026] mb-3 sm:mb-4"
              style={{
                fontFamily: "Gambetta, serif",
                fontSize: "clamp(2rem, 6vw, 4rem)",
              }}
            >
              {property.title}
            </h2>

            <p
              className="text-[#000000] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-7"
              style={{
                fontFamily: "Gilroy, sans-serif",
                fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
              }}
            >
              {property.description}
            </p>

            {/* ICONS ROW */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-7 mb-4 sm:mb-6 md:mb-7 text-[#054738] overflow-x-auto pb-2">
              <div className="flex-shrink-0">
                <Image src="/Mall.png" alt="Mall" width={24} height={24} className="sm:w-7 sm:h-7" />
              </div>
              <div className="flex-shrink-0">
                <HugeiconsIcon icon={Train01Icon} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-shrink-0">
                <HugeiconsIcon icon={SwimmingIcon} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-shrink-0">
                <HugeiconsIcon icon={EquipmentGym03Icon} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/hugeicons_university.png"
                  alt="University"
                  width={24}
                  height={24}
                  className="sm:w-7 sm:h-7"
                />
              </div>
            </div>

            {/* META ROWS */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <div className="flex justify-between items-center text-xs sm:text-sm py-2.5 sm:py-3 md:py-3.5 border-b border-[#CFC9BA]">
                <span className="text-[#054738] font-gilroy">Location</span>
                <span className="text-[#054738] font-gilroy">{property.location}</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm py-2.5 sm:py-3 md:py-3.5">
                <span className="text-[#054738] font-gilroy">Status</span>
                <span className="text-[#0F3026] font-gilroy">{property.status}</span>
              </div>
            </div>

            {/* BHK + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000000] font-gilroy">
                {property.bhk}
              </h3>

              <button className="cursor-pointer flex items-center gap-2 border border-[#0F3026] text-[#0F3026] rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 hover:bg-[#0F3026] hover:text-white transition-colors duration-300 font-gilroy text-sm sm:text-base whitespace-nowrap">
                Book a site visit
                <HugeiconsIcon icon={ArrowRight02Icon} className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideOne
