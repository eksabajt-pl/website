"use client";
import Header from "@/components/header/Header";
import ReviewsSection from "@/components/sections/ReviewSection";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import Footer from "@/components/footer/Footer";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactFormProvider from "./ContactFormProvider";
import { Suspense } from "react";
import PortfolioSection from "@/components/sections/PortfolioSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <PortfolioSection />
      <Suspense>
        <ReviewsSection />
      </Suspense>
      <TeamSection />
      <ContactFormProvider />
      <Footer />
    </>
  );
}
