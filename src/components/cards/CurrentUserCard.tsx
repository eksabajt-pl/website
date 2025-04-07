"use server";
import { Card } from "@/components/ui/card";
import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";

export default async function CurrentUserCard() {
  const { avatarUrl, fullName, email } = await getCurrentUserProfile();

  return (
    <div className="flex-1 gap-2 flex flex-col ">
      <Card className="text-wrap overflow-hidden p-4 flex flex-row justify-center flex-wrap">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={avatarUrl}
          alt={fullName + "'s profile picture"}
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col gap-2 justify-around">
          {" "}
          <p>You&apos;re logged in as</p>
          <p className="text-lg font-bold">{fullName}</p> <p>{email}</p>
        </div>
      </Card>
    </div>
  );
}
