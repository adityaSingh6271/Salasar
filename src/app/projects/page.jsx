"use client";

import ProjectsHeader from "@/components/ProjectsHeader";
import PropertyCard from "@/components/PropertyCard";
import {
  Train01Icon,
  SwimmingIcon,
  EquipmentGym03Icon,
} from "@hugeicons/core-free-icons";

export default function Projects() {
  const properties = [
    {
      type: "Residential",
      title: "Exotica-II",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      location: "Behind GCC Club, Mira Road(E)",
      status: "Under Construction",
      bhk: "3BHK, 2BHK",
      price: "3.2 cr*",
      image: "/ExoticaTwo.png",
      icons: [
        { type: "img", src: "/Mall.png", alt: "Mall" },
        { type: "icon", component: Train01Icon },
        { type: "icon", component: SwimmingIcon },
        { type: "icon", component: EquipmentGym03Icon },
        { type: "img", src: "/hugeicons_university.png", alt: "University" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ProjectsHeader />

      {/* Property Cards */}
      <div className="max-w-[1200px] mx-auto w-full px-4 py-12">
        {properties.map((property, i) => (
          <PropertyCard key={i} property={property} />
        ))}
      </div>
    </div>
  );
}
