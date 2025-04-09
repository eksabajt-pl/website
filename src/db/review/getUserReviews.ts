"use server";
import { Profile, Review } from "@/db/schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";

export async function getUserReviews(userId: string) {
  const result = await db
    .select()
    .from(Review)
    .where(eq(Review.userId, userId))
    .innerJoin(Profile, eq(Profile.id, Review.userId));

  if (!result) {
    console.error("Error fetching reviews");
    return [];
  }

  return result;
}
