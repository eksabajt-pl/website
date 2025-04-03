import Header from "@/components/header/Header";
import ReviewsSection from "@/components/sections/ReviewSection";
import ContactSection from "@/components/sections/ContactSection";
import BrandWave from "@/components/pearls/BrandWave";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandWave />
      <ReviewsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
