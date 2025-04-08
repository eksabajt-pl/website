"use server";
import { ContactFormData } from "@/schemas/contactFormSchema";
import { Resend } from "resend";
import ThankYouForContact from "@/emails/ThankYouForContact";
import UserContacted from "@/emails/UserContacted";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function contactForm(formData: ContactFormData) {
  const { tier, username, email, message } = formData;
  await resend.emails.send({
    from: "Kontakt <kontakt@eksabajt.pl>",
    to: [email],
    subject: "Dziękujemy za kontakt z Eksabajt.pl",
    react: ThankYouForContact({ name: username, email, message, topic: tier }),
  });

  const { error } = await resend.emails.send({
    from: `${username} (${email}) <noreply@eksabajt.pl>`,
    to: ["kontakt@eksabajt.pl"],
    subject: `Formularz kontaktowy, tier ${tier}`,
    react: UserContacted({ name: username, email, message, topic: tier }),
  });

  console.log(error);
}
