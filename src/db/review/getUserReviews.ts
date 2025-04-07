"use server";
import { profilesTable, reviewsTable } from "@/db/schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";

export async function getUserReviews(userId: string) {
  const result = await db
    .select()
    .from(reviewsTable)
    .where(eq(reviewsTable.userId, userId))
    .innerJoin(profilesTable, eq(profilesTable.id, reviewsTable.userId));

  if (!result) {
    console.error("Error fetching reviews");
    return [];
  }

  return result;
}
