"use server";

import { insertReview } from "@/db/review/insertReview";
import { InsertReview } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ContactFormData } from "@/schemas/contactFormSchema";
import { Resend } from "resend";
import ThankYouForContact from "@/emails/ThankYouForContact";
import UserContacted from "@/emails/UserContacted";

export interface ReviewFormSchema {
  stars: number;
  content: string;
}

export default async function reviewForm(formData: ReviewFormSchema) {
  const supabase = await createClient();
  const user = (await supabase.auth.getUser()).data.user;

  if (!user) {
    redirect("/login");
  }

  const review: InsertReview = {
    userId: user.id,
    ...formData,
  };

  await insertReview(review);
  revalidatePath("/dashboard/reviews","page");
  revalidatePath("/", "page");
}

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
