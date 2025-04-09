"use server";
import { InsertReview, Review } from "@/db/schema";
import { db } from "@/db/index";

export async function insertReview(data: InsertReview) {
  await db.insert(Review).values(data);
}
