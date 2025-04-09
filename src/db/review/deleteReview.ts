"use server";
import { review } from "@/db/schema";
import { db } from "@/db/index";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { eq } from "drizzle-orm";

export async function deleteReview(id: number) {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return [];
  }
  await db.delete(review).where(eq(review.id, id));
}
