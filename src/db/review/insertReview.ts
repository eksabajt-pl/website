"use server";
import { review } from "@/db/schema";
import { db } from "@/db/index";
import { InsertReview } from "../types";

export async function insertReview(data: InsertReview) {
  data.status = "pending";
  await db.insert(review).values(data);
}
