"use server";
import { profile } from "@/db/schema";
import { db } from "@/db/index";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { desc } from "drizzle-orm";

export async function getUserProfiles() {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return [];
  }
  const result = await db.select().from(profile).orderBy(desc(profile.id));

  if (!result) {
    console.error("Error fetching profiles");
    return [];
  }

  return result;
}
