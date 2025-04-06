"use server";
import { Card } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth-actions";

export default async function UserCard() {
  const user = await getCurrentUser();

  return (
    <div className="flex-1 gap-2 flex flex-col ">
      <Card className="p-4 flex flex-row">
        <img src={user.avatar_url} className="h-20 w-20 rounded-full" />
        <div className="flex flex-col gap-2 justify-around">
          {" "}
          <p>You&apos;re logged in as</p>
          <p className="text-lg font-bold">{user.full_name}</p>{" "}
          <p>{user.email}</p>
        </div>
      </Card>
    </div>
  );
}
