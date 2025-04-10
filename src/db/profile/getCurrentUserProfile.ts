"use server";
import { profile } from "../schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import { getCurrentUser } from "../auth/getCurrentUser";

export async function getCurrentUserProfile() {
  const user = await getCurrentUser();
  const result = await db.select().from(profile).where(eq(profile.id, user.id));
  return result[0];
}
