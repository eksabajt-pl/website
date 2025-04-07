import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";
import { PropsWithChildren } from "react";

interface IsAdminProps extends PropsWithChildren {
  fallback?: React.ReactNode;
}

export default async function IsAdmin({ children, fallback }: IsAdminProps) {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return fallback;
  }
  return children;
}
