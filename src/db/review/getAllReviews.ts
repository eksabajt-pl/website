"use server";
import { profile, review } from "@/db/schema";
import { db } from "@/db/index";
import { desc, eq } from "drizzle-orm";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";

export async function getAllReviews() {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return [];
  }
  const result = await db
    .select()
    .from(review)
    .innerJoin(profile, eq(profile.id, review.userId))
    .orderBy(desc(review.createdAt));

  if (!result) {
    console.error("Error fetching reviews");
    return [];
  }

  return result;
}
