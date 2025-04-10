"use server";
import { profile } from "@/db/schema";
import { db } from "@/db/index";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { eq } from "drizzle-orm";

export async function deleteUserProfile(id: string) {
  const user = await getCurrentUserProfile();
  // If is admin - then can delete any user, if not only his own
  if (user?.userGroup !== "admin") {
    if (user?.id !== id) {
      return;
    }
  }
  await db.delete(profile).where(eq(profile.id, id));
}
