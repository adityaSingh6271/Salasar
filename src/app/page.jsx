import AboutUs from "@/components/Aboutus";
import FAQSection from "@/components/faq";
import HeroSection from "@/components/HeroSection";
import SlideContainer from "@/components/SlideContainer";
import SlideContainer2 from "@/components/SlideContainer2";
import VideoTextSection from "@/components/VideoTextSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoTextSection/>
      <AboutUs/>
      <SlideContainer/>
      <SlideContainer2/>
      <FAQSection/>
    </main>
  );
}
