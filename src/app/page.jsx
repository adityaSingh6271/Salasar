import AboutUs from "@/components/Aboutus";
import FeaturedProperties from "@/components/FeaturedProperties";
import HeroSection from "@/components/HeroSection";
import VideoTextSection from "@/components/VideoTextSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoTextSection/>
      <AboutUs/>
      <FeaturedProperties/>
    </main>
  );
}
