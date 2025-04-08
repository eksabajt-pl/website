"use client";
import { useContactForm } from "@/components/hooks/useContactForm";
import Pricing from "@/components/pricing/pricing";
import { FormProvider } from "react-hook-form";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactFormProvider() {
  const form = useContactForm();
  return (
    <FormProvider {...form}>
      <Pricing />
      <ContactSection />
    </FormProvider>
  );
}
