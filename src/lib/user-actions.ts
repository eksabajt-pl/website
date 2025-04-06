"use server";

import { createClient } from "@/utils/supabase/server";

export default async function writeReview(formData: FormData) {
  const supabase = createClient();

  const review = {
    user_id: formData.get("user_id"),
    stars: formData.get("stars") as unknown as number,
    content: formData.get("content"),
  };
  console.log(review);
  const { data, error } = await (await supabase)
    .from("reviews")
    .insert([review]);

  if (error) {
    console.error("Error writing review:", error);
  } else {
    console.log("Review written successfully:", data);
  }
}
