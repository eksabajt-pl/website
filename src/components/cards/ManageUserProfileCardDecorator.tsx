"use client";
import { SelectProfile } from "@/db/schema";
import {
  banUserAction,
  changeUserGroupAction,
  deleteUnverifiedUserReviewsAction,
} from "@/lib/admin-actions";
import { BanIcon, ShieldIcon, TrashIcon, UserIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import AsyncButton from "../buttons/AsyncButton";
import { useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function ManageUserProfileCardDecorator({
  children,
  profile,
}: {
  children: React.ReactNode;
  profile: SelectProfile;
}) {
  const { id } = profile;
  const params = useSearchParams();
  const searchUser = params.get("user");
  return (
    <Card
      className={twMerge(
        "p-0 ",
        searchUser == id && "border-2 rounded-lg border-green-400"
      )}
    >
      {children}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 -mt-10 flex overflow-hidden flex-wrap flex-row gap-2">
        <AsyncButton
          className=" cursor-pointer"
          action={async () => changeUserGroupAction(id, "admin")}
        >
          <ShieldIcon />
          Set role to Admin
        </AsyncButton>
        <AsyncButton
          className="cursor-pointer"
          action={async () => changeUserGroupAction(id, "user")}
        >
          <UserIcon />
          Set role to User
        </AsyncButton>
        <AsyncButton
          className="cursor-pointer"
          action={async () => banUserAction(id)}
        >
          <BanIcon />
          Ban user
        </AsyncButton>
        <AsyncButton
          className="cursor-pointer "
          action={async () => deleteUnverifiedUserReviewsAction(id)}
        >
          <TrashIcon />
          Delete unverified
        </AsyncButton>
      </div>
    </Card>
  );
}
