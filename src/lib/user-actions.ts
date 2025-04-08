"use server";
import { ContactFormData } from "@/schemas/contactFormSchema";
import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function contactForm(formData: ContactFormData) {
  const { tier, username, email, message } = formData;
  await resend.emails.send({
    from: "Kontakt <noreply@eksabajt.pl>",
    to: [email],
    subject: "Dziękujemy za kontakt z Eksabajt.pl",
    react: "Dziękujemy za kontakt", //EmailTemplate({ firstName: "John" }),
  });

  const { data, error } = await resend.emails.send({
    from: `${username} (${email}) <noreply@eksabajt.pl>`,
    to: ["kontakt@eksabajt.pl"],
    subject: `Formularz kontaktowy, tier ${tier}`,
    react: message, //EmailTemplate({ firstName: "John" }),
  });

  console.log(error);
}
