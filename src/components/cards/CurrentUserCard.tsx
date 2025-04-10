"use server";
import { getCurrentUser } from "@/db/auth/getCurrentUser";
import UserCard from "./UserCard";

export default async function CurrentUserCard() {
  const user = await getCurrentUser();
  return <UserCard user={user} />;
}
