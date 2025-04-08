"use client";
import { useContactForm } from "@/components/hooks/useContactForm";
import { FormProvider } from "react-hook-form";
import ContactSection from "@/components/sections/ContactSection";
import PricingSection from "@/components/sections/PricingSection";

export default function ContactFormProvider() {
  const form = useContactForm();
  return (
    <FormProvider {...form}>
      <PricingSection />
      <ContactSection />
    </FormProvider>
  );
}
