"use server";
import { InsertReview, reviewsTable } from "@/db/schema";
import { db } from "@/db/index";

export async function insertReview(data: InsertReview) {
  await db.insert(reviewsTable).values(data);
}
