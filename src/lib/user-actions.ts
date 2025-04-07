"use server";

import { insertReview } from "@/db/review/insertReview";
import { InsertReview } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
