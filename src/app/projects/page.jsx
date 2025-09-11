"use client";

import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import PropertyCard from "@/components/PropertyCard";

import { properties } from "./projectsData";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ProjectsHeader />

      {/* Property Cards */}
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-4 py-8 sm:py-12 flex flex-col gap-16 sm:gap-24 lg:gap-40 mt-12 sm:mt-16 lg:mt-20">
        {properties.map((property, i) => (
          <PropertyCard key={i} property={property} />
        ))}
      </div>

      <Footer headingText="We Will Help You To Find Your Dream Home" />
    </div>
  );
}
