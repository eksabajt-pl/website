"use server";
import { Profile } from "../schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import { getCurrentUser } from "../auth/getCurrentUser";

export async function getCurrentUserProfile() {
  const user = await getCurrentUser();
  const result = await db.select().from(Profile).where(eq(Profile.id, user.id));
  return result[0];
}
