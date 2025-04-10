"use server";
import { review } from "@/db/schema";
import { db } from "@/db/index";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { and, eq, not } from "drizzle-orm";

export async function deleteUnverifiedUserReviews(userId: string) {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return [];
  }
  await db
    .delete(review)
    .where(and(eq(review.userId, userId), not(eq(review.status, "verified"))));
}
