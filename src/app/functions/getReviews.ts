"use server";
import { profilesTable, reviewsTable } from "@/db/schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";

export async function fetchAllReviews() {
  const result = await db
    .select()
    .from(reviewsTable)
    .innerJoin(profilesTable, eq(profilesTable.id, reviewsTable.userId));

  console.log(result);
  if (!result) {
    console.error("Error fetching reviews");
    return [];
  }

  return result;
}
