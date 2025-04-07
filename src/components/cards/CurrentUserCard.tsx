"use server";
import { Card } from "@/components/ui/card";
import { getCurrentUser } from "@/db/auth/getCurrentUser";

export default async function CurrentUserCard() {
  const user = await getCurrentUser();
  const { avatar_url, full_name, email } = user.user_metadata;
  const { provider } = user.app_metadata;
  return (
    <div className="flex-1 gap-2 flex flex-col ">
      <Card className="text-wrap overflow-hidden p-4 flex flex-row justify-center flex-wrap">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={avatar_url}
          alt={full_name + "'s profile picture"}
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col gap-2 justify-around">
          {" "}
          <p>You&apos;re logged in as</p>
          <p className="text-lg font-bold">{full_name}</p> <p>{email}</p>
          <p>Logged with {provider}</p>
        </div>
      </Card>
    </div>
  );
}
