"use server";
import { ban, InsertBan } from "@/db/schema";
import { db } from "@/db/index";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";

export async function banUser(data: InsertBan) {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return;
  }
  const result = await db.insert(ban).values(data);
  console.log(result);
}
