"use server";
import { profile } from "@/db/schema";
import { db } from "@/db/index";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { eq } from "drizzle-orm";

export async function changeUserGroup(id: string, value: "admin" | "user") {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return [];
  }
  await db.update(profile).set({ userGroup: value }).where(eq(profile.id, id));
}
