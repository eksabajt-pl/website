"use server";
import { profile, review } from "@/db/schema";
import { db } from "@/db/index";
import { desc, eq } from "drizzle-orm";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";

export async function getUserReviews(userId: string) {
  const user = await getCurrentUserProfile();
  if (userId != user.id && user.userGroup !== "admin") {
    return [];
  }
  const result = await db
    .select()
    .from(review)
    .where(eq(review.userId, userId))
    .innerJoin(profile, eq(profile.id, review.userId))
    .orderBy(desc(review.createdAt));

  if (!result) {
    console.error("Error fetching reviews");
    return [];
  }

  return result;
}
