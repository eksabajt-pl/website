"use server";

import { insertReview } from "@/db/review/insertReview";
import { InsertProject, InsertReview } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ContactFormData } from "@/schemas/contactFormSchema";
import { Resend } from "resend";
import ThankYouForContact from "@/emails/ThankYouForContact";
import UserContacted from "@/emails/UserContacted";
import InsertProjectFn from "@/db/project/InsertProjectFn";

export interface ReviewFormSchema {
  stars: number;
  content: string;
}
export type ProjectFormSchema = {
  email: string;
  type: string;
  price: number;
};
export async function projectForm(formData: ProjectFormSchema) {
  console.log("projectForm called with data:", formData); // Ensure this logs
  const supabase = await createClient();
  console.log("Supabase client initialized:", supabase);
  const verify = (await supabase.auth.getUser()).data.user;
  console.log("verify:", verify);
  if (!verify) {
    console.log("redirected");
    redirect("/login");
  }
  const review: InsertProject = {
    user_id: verify.id,
    ...formData,
  };
  await InsertProjectFn(review);
  revalidatePath("/dashboard/projects", "page");
  revalidatePath("/", "page");
}
export async function reviewForm(formData: ReviewFormSchema) {
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
  revalidatePath("/dashboard/reviews", "page");
  revalidatePath("/", "page");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactForm(formData: ContactFormData) {
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

  console.error(error);
}
