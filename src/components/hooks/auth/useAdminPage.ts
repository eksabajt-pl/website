"use server";
import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";
import { redirect } from "next/navigation";

export const useAdminPage = async (redirectTo: string = "/") => {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    redirect(redirectTo);
  }
};
