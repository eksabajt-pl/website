"use client";
import { SelectProfile } from "@/db/schema";
import {
  changeUserGroupAction,
  deleteUserProfileAction,
} from "@/lib/admin-actions";
import { ShieldIcon, TrashIcon, UserIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import AsyncButton from "../buttons/AsyncButton";

export function ManageUserProfileCardDecorator({
  children,
  profile,
}: {
  children: React.ReactNode;
  profile: SelectProfile;
}) {
  const { id } = profile;
  return (
    <Card className="p-0 ">
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
          action={async () => deleteUserProfileAction(id)}
        >
          <TrashIcon />
          Delete user
        </AsyncButton>
      </div>
    </Card>
  );
}
