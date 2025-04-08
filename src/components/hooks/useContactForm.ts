import { useForm } from "react-hook-form";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useContactForm = () => {
  return useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
      tier: "",
    },
  });
};
