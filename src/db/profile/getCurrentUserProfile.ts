"use server";
import { profilesTable } from "../schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import { getCurrentUser } from "../auth/getCurrentUser";

export async function getCurrentUserProfile() {
  const user = await getCurrentUser();
  const result = await db
    .select()
    .from(profilesTable)
    .where(eq(profilesTable.id, user.id));

  return result[0];
}
