"use client";
import { Card } from "@/components/ui/card";
import { getCurrentUser } from "@/db/auth/getCurrentUser";
import { SelectProfile } from "@/db/schema";
import { Shield, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface UserProfileCardProps {
  profile: SelectProfile;
  className?: string;
}
export default function UserProfileCard({
  profile,
  className,
}: UserProfileCardProps) {
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
    getCurrentUser().then(({ id }) => setUserId(id));
  }, []);
  const { avatarUrl, fullName, email, userGroup, id } = profile;

  return (
    <div className="flex-1 gap-2 flex flex-col" id={id}>
      <Card
        className={twMerge(
          "relative text-wrap overflow-hidden p-4 flex flex-row  flex-wrap",
          className
        )}
      >
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        {userId && id == userId && (
          <p className="absolute top-4 right-4 font-bold">(you)</p>
        )}
        <img
          src={avatarUrl}
          alt={fullName + "'s profile picture"}
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col gap-2 justify-around">
          {" "}
          <p className="text-lg font-bold">{fullName || "​"}</p> <p>{email}</p>
          <p className="font-bold uppercase flex flex-row gap-2">
            {userGroup === "admin" ? <Shield /> : <UserIcon />} {userGroup}{" "}
          </p>
        </div>
      </Card>
    </div>
  );
}
