"use server";
import { profile } from "@/db/schema";
import { db } from "@/db/index";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { eq } from "drizzle-orm";

export async function getUserProfile(userId: string) {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return [];
  }
  const result = await db.select().from(profile).where(eq(profile.id, userId));
  if (!result) {
    console.error("Error fetching profiles");
    return {};
  }
  return result[0];
}
