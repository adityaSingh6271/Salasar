import AboutUs from "@/components/Aboutus";
// import FeaturedProperties from "@/components/FeaturedProperties";
import HeroSection from "@/components/HeroSection";
import SlideContainer from "@/components/SlideContainer";
import VideoTextSection from "@/components/VideoTextSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoTextSection/>
      <AboutUs/>
      <SlideContainer/>
    </main>
  );
}
