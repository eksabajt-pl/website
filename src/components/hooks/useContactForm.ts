import { useForm } from "react-hook-form";
import {
  ContactFormData,
  contactFormSchema,
} from "@/schemas/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useContactForm = () => {
  return useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
      tier: "other",
    },
  });
};
