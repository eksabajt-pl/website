"use server";
import { InsertReview, review } from "@/db/schema";
import { db } from "@/db/index";

export async function insertReview(data: InsertReview) {
  data.status = "pending";
  await db.insert(review).values(data);
}
