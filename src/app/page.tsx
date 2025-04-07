import Header from "@/components/header/Header";
import ReviewsSection from "@/components/sections/ReviewSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import Footer from "@/components/footer/Footer";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import PricingSection from "@/components/sections/PricingSection";
import FeedbackFormSection from "@/components/sections/FeedbackFormSection";

export default function Home() {
  return (
    <>
      <Header />
      <ContactSection />
      <FeedbackFormSection />
      <Footer />
    </>
  );
}
