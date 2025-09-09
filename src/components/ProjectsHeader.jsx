"use client"

import Navbar from "@/components/Navbar"
import { Search02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ProjectsHeader = () => {
  return (
    <>
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[514px] overflow-visible">
        {/* Background video */}
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/Salasar_ProjectClip.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Navbar */}
        <div className="relative z-30">
          <Navbar />
        </div>
      </section>

      {/* Search Section */}
      <div className="relative -mt-16 sm:-mt-20 z-40 px-4 sm:px-6 lg:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#054738] shadow-lg overflow-hidden p-4 sm:p-6 rounded-lg sm:rounded-none">
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-md mb-4 overflow-hidden">
              <div className="flex items-center px-3 sm:px-4 py-3 flex-1 min-w-0">
                <HugeiconsIcon
                  className="text-[#000000] mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  icon={Search02Icon}
                />
                <input
                  type="text"
                  placeholder="Salasar heights"
                  className="flex-1 text-base sm:text-[20px] lg:text-[24px] text-black placeholder-[#000000] outline-none bg-transparent min-w-0"
                />
              </div>
              <button className="bg-[#054738] text-white px-4 py-2 sm:py-3 m-1 rounded-sm font-medium hover:bg-[#043529] transition text-sm sm:text-base">
                Search
              </button>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch sm:items-center justify-between gap-3 sm:gap-4 text-white">
              <Select>
                <SelectTrigger className="w-full sm:w-[140px] lg:w-[150px] bg-transparent border-none text-white! [&_svg]:text-white! h-10 sm:h-auto">
                  <SelectValue placeholder="Residential" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-[140px] lg:w-[150px] bg-transparent border-none text-white! [&_svg]:text-white! h-10 sm:h-auto">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-[140px] lg:w-[150px] bg-transparent border-none text-white! [&_svg]:text-white! h-10 sm:h-auto">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-[140px] lg:w-[150px] bg-transparent border-none text-white! [&_svg]:text-white! h-10 sm:h-auto">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50L-1Cr">50L – 1Cr</SelectItem>
                  <SelectItem value="1Cr+">1Cr+</SelectItem>
                </SelectContent>
              </Select>

              {/* Toggle */}
              <div className="flex items-center justify-between sm:justify-start gap-2 whitespace-nowrap mt-2 sm:mt-0">
                <span className="text-xs sm:text-sm">New Launches Only</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#F0E6C3] transition" />
                  <div className="absolute left-0.5 top-0.5 sm:left-1 sm:top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsHeader
