"use client";
import AboutHero from "@/components/AboutHero";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";
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
    <main>
      <AboutHero />
      <RevealText />
      <SectionBlock />
      <Message />
      <div className="mt-10">
        <SlideTwo />
      </div>
      <SuccessStats />
      <Team />
      <AwardsSection />
      <News />
      <Footer />
    </main>
  );
};

export default AboutPage;
