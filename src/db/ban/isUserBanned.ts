"use server";
import { ban } from "@/db/schema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm";

export async function isUserBanned(email: string) {
  const result = await db.select().from(ban).where(eq(ban.email, email));

  if (!result) {
    console.error("Error fetching reviews");
    return false;
  }
  return result.length > 0;
}
