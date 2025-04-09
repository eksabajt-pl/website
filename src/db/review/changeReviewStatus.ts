"use server";
import { review } from "@/db/schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";

export async function changeReviewStatus(
  id: number,
  value: "rejected" | "pending" | "verified"
) {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return [];
  }
  await db.update(review).set({ status: value }).where(eq(review.id, id));
}
