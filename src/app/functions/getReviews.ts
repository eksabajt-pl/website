"use server";
import { createClient } from "@/utils/supabase/server";

export async function fetchAllReviews() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("reviews").select("*"); // Select all columns

  if (error) {
    console.error("Error fetching reviews:", error.message || error);
    return null;
  }

  return data;
}
