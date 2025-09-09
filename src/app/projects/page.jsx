"use client";

import Footer from "@/components/Footer";
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
      image: "/ExoticaTwo.png",
      icons: [
        { type: "img", src: "/Mall.png", alt: "Mall" },
        { type: "icon", component: Train01Icon },
        { type: "icon", component: SwimmingIcon },
        { type: "icon", component: EquipmentGym03Icon },
        { type: "img", src: "/hugeicons_university.png", alt: "University" },
      ],
    },
    {
      type: "Residential",
      title: "Esquire",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      location: "Indralok, Bhayander (E)",
      status: "Under Construction",
      bhk: "3BHK, 2BHK",
      image: "./Esquire.jpg",
      icons: [
        { type: "img", src: "/Mall.png", alt: "Mall" },
        { type: "icon", component: Train01Icon },
        { type: "icon", component: SwimmingIcon },
        { type: "icon", component: EquipmentGym03Icon },
        { type: "img", src: "/hugeicons_university.png", alt: "University" },
      ],
    },
    {
      type: "Residential",
      title: "Salasar Sheetal Sangeet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      location: "Sheetal Nagar Junction, Mira Road.",
      status: "Under Construction",
      bhk: "3BHK, 2BHK",
      image: "./Salasar-Sheetal-Sangeet.jpg",
      icons: [
        { type: "img", src: "/Mall.png", alt: "Mall" },
        { type: "icon", component: Train01Icon },
        { type: "icon", component: SwimmingIcon },
        { type: "icon", component: EquipmentGym03Icon },
        { type: "img", src: "/hugeicons_university.png", alt: "University" },
      ],
    },
    {
      type: "Residential",
      title: "Salasar Elanza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      location: "Poonam Garden, Mira Road(E)",
      status: "Under Construction",
      bhk: "3BHK, 2BHK",
      image: "./Salasar-Elanza.jpg",
      icons: [
        { type: "img", src: "/Mall.png", alt: "Mall" },
        { type: "icon", component: Train01Icon },
        { type: "icon", component: SwimmingIcon },
        { type: "icon", component: EquipmentGym03Icon },
        { type: "img", src: "/hugeicons_university.png", alt: "University" },
      ],
    },
    {
      type: "Residential",
      title: "Epic Centre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      location: "Sheetal Nagar, Mira Road(E)",
      status: "Under Construction",
      bhk: "3BHK, 2BHK",
      image: "./Epic-Centre.jpg",
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
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-4 py-8 sm:py-12 flex flex-col gap-16 sm:gap-24 lg:gap-40 mt-12 sm:mt-16 lg:mt-20">
        {properties.map((property, i) => (
          <PropertyCard key={i} property={property} />
        ))}
      </div>

      <Footer headingText="We Will Help You To Find Your Dream Home" />
    </div>
  )
}
