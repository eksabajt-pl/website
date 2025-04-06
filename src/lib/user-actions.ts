"use server";

import { ReviewType } from "@/components/types/ReviewType";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function reviewForm(formData: ReviewType) {
  const supabase = await createClient();
  const user = (await supabase.auth.getUser()).data.user;

  if (!user) {
    redirect("/login");
  }

  const review = {
    user_id: user.id,
    ...formData,
  };

  const { data, error } = await supabase.from("reviews").insert([review]);

  if (error) {
    console.error("Error writing review:", error);
  } else {
    console.log("Review written successfully:", data);
  }
}
