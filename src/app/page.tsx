import Header from "@/components/header/Header";
import ReviewsSection from "@/components/sections/ReviewSection";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import Footer from "@/components/footer/Footer";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactFormProvider from "./ContactFormProvider";
import BrandWave from "@/components/pearls/BrandWave";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ProjectsSection />
      <Suspense>
        <ReviewsSection />
      </Suspense>
      <TeamSection />
      <ContactFormProvider />
      <BrandWave />
      <Footer />
    </>
  );
}
