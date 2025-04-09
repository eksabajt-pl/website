"use server";
import { profile, review } from "@/db/schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";

export async function getVerifiedReviews() {
  const result = await db
    .select()
    .from(review)
    .where(eq(review.status, "verified"))
    .innerJoin(profile, eq(profile.id, review.userId));

  if (!result) {
    console.error("Error fetching reviews");
    return [];
  }

  return result;
}
