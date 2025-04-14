import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export const useAdminPage = (redirectTo: string = "/") => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const payload = async () => {
      const { userGroup } = await getCurrentUserProfile();
      if (!userGroup || userGroup !== "admin") {
        redirect(redirectTo);
      }
      setLoaded(true);
    };
    payload();
  }, [redirectTo]);
  return { loaded };
};
