"use server";
import { Card } from "@/components/ui/card";
import { SelectProfile } from "@/db/schema";

interface UserProfileCardProps {
  profile: SelectProfile;
}
export default async function UserProfileCard({
  profile,
}: UserProfileCardProps) {
  const { avatarUrl, fullName, email, userGroup } = profile;
  return (
    <div className="flex-1 gap-2 flex flex-col ">
      <Card className="text-wrap overflow-hidden p-4 flex flex-row  flex-wrap">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={avatarUrl}
          alt={fullName + "'s profile picture"}
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col gap-2 justify-around">
          {" "}
          <p className="text-lg font-bold">{fullName}</p> <p>{email}</p>
          <p className="font-bold">{userGroup}</p>
        </div>
      </Card>
    </div>
  );
}
