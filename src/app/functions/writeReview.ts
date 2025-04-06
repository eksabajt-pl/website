"use server";
import { createClient } from "@/utils/supabase/server";

const supabase = await createClient();

export default async function writeReview(
  userId: string,
  userProvider: string,
  stars: number,
  content: string
) {
  const { data, error } = await supabase.from("public.reviews").insert([
    {
      user_id: userId,
      user_provider: userProvider,
      stars: stars,
      content: content,
    },
  ]);

  if (error) {
    console.error("Error writing review:", error);
  } else {
    console.log("Review written successfully:", data);
  }
}
