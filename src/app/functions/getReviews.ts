"use server";
import { ReviewType } from "@/components/types/ReviewType";
import { getUserProfileById } from "@/lib/auth-actions";
import { createClient } from "@/utils/supabase/server";

export async function fetchAllReviews() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) {
    console.error("Error fetching reviews:", error.message || error);
    return [];
  }

  const reviews = await Promise.all(
    data.map(async (review) => {
      review.user = await getUserProfileById(review.user_id);
      return review;
    })
  );

  return reviews as ReviewType[];
}
