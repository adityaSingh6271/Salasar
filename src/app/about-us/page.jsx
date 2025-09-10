"use client";
import AboutHero from "@/components/AboutHero";
import AwardsSection from "@/components/AwardsSection";
import Message from "@/components/Message";
import News from "@/components/News";
import RevealText from "@/components/RevealText";
import SectionBlock from "@/components/SectionBlock";
import SlideTwo from "@/components/SlideTwo";
import SuccessStats from "@/components/SuccessStats";
import Team from "@/components/Team";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <RevealText/>
      <SectionBlock/>
      <Message />
      <div className="mt-10">
        <SlideTwo/>
      </div>
      <SuccessStats/>
      <Team/>
      <AwardsSection/>
      <News/>
    </>
  );
};

export default AboutPage;
