"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const RevealText = () => {
  return (
    <ScrollReveal
      baseOpacity={0}
      enableBlur={true}
      baseRotation={5}
      blurStrength={10}
      containerClassName="flex justify-center px-4 md:px-6"
      textClassName="text-[#1111118A] font-gambetta font-medium whitespace-pre-line max-w-[750px] mx-auto"
    >
      {`Build With Integrity, Deliver On Time, And Create Addresses That Families Are Proud To Call Home.

Since 1982, Salasar Group has been crafting homes and workspaces across Mira-Bhayander, Mira Road, and Thane — blending solid engineering with thoughtful design that enhances everyday life.

Integrated Expertise: Development, construction, investment, and financing — with initiatives in education and renewable energy — ensuring quality materials, transparent processes, and timely handovers.`}
    </ScrollReveal>
  );
};

export default RevealText;
