"use server";
import { ContactFormData } from "@/schemas/contactFormSchema";
import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emailTemplates/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function contactForm(formData: ContactFormData) {
  const { tier, username, email, message } = formData;
  await resend.emails.send({
    from: "Kontakt <noreply@eksabajt.pl>",
    to: [email],
    subject: "Dziękujemy za kontakt z Eksabajt.pl",
    react: ContactEmailTemplate({ name: username }),
  });

  const { error } = await resend.emails.send({
    from: `${username} (${email}) <noreply@eksabajt.pl>`,
    to: ["kontakt@eksabajt.pl"],
    subject: `Formularz kontaktowy, tier ${tier}`,
    react: message, //EmailTemplate({ firstName: "John" }),
  });

  console.log(error);
}
