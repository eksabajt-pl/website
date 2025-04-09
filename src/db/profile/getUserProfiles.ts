"use server";
import { profile } from "@/db/schema";
import { db } from "@/db/index";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";

export async function getUserProfiles() {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return [];
  }
  const result = await db.select().from(profile);

  if (!result) {
    console.error("Error fetching profiles");
    return [];
  }

  return result;
}
