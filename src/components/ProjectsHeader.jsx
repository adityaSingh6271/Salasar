"use client";

import Navbar from "@/components/Navbar";
import { Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ProjectsHeader = () => {
  return (
    <section className="relative w-full h-[514px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Salasar_ProjectClip.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Search Section */}
      <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 z-20 w-full flex justify-center">
        <div className="w-full max-w-[900px] shadow-lg rounded-md overflow-visible">
          {/* Search Bar */}
          <div className="bg-white flex items-center">
            <div className="flex items-center px-4 py-3 flex-1">
              <HugeiconsIcon
                className="text-gray-500 mr-3 w-5 h-5"
                icon={Search02Icon}
              />
              <input
                type="text"
                placeholder="Salasar heights"
                className="flex-1 text-base text-black placeholder-gray-500 outline-none bg-transparent"
              />
            </div>
            <button className="bg-[#054738] text-white px-6 py-3 font-medium hover:bg-[#043529] transition">
              Search
            </button>
          </div>

          {/* Filters Row */}
          <div className="bg-[#054738] px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 text-white">
            <select className="bg-transparent outline-none">
              <option className="text-black">Residential</option>
              <option className="text-black">Commercial</option>
            </select>
            <select className="bg-transparent outline-none">
              <option className="text-black">Type</option>
              <option className="text-black">Apartment</option>
              <option className="text-black">Villa</option>
            </select>
            <select className="bg-transparent outline-none">
              <option className="text-black">Status</option>
              <option className="text-black">Ongoing</option>
              <option className="text-black">Completed</option>
            </select>
            <select className="bg-transparent outline-none">
              <option className="text-black">Budget</option>
              <option className="text-black">50L–1Cr</option>
              <option className="text-black">1Cr+</option>
            </select>

            {/* Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm">New Launches Only</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition" />
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeader;
