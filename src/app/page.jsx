import AboutUs from "@/components/Aboutus";
import FAQSection from "@/components/faq";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SlideContainer from "@/components/SlideContainer";
import SlideContainer2 from "@/components/SlideContainer2";
import SlideThree from "@/components/SlideThree";
import SlideTwo from "@/components/SlideTwo";
import VideoTextSection from "@/components/VideoTextSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoTextSection />
      <AboutUs />
      <SlideContainer />
      <SlideTwo />
      <SlideThree />
      <SlideContainer2 />
      <FAQSection />
      <Footer />
    </main>
  );
}
