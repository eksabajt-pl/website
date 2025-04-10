"use client";
import { SelectReviewWithProfile } from "@/db/schema";
import {
  verifyReviewWithId,
  rejectReviewWithId,
  deleteReviewWithId,
} from "@/lib/admin-actions";
import { BanIcon, CheckIcon, TrashIcon, UserIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import AsyncButton from "../buttons/AsyncButton";
import { redirect } from "next/navigation";

export function ModerateUserReviewDecorator({
  children,
  reviewWithProfile,
}: {
  children: React.ReactNode;
  reviewWithProfile: SelectReviewWithProfile;
}) {
  const { review, profile } = reviewWithProfile;
  const { id } = profile;
  return (
    <Card className="p-0 ">
      {children}
      <div className="p-4 -mt-10 grid grid-cols-2 gap-2">
        <AsyncButton
          className="flex-1 cursor-pointer"
          action={async () => await rejectReviewWithId(review.id)}
        >
          <BanIcon />
          Reject
        </AsyncButton>
        <AsyncButton
          className="flex-1 cursor-pointer"
          action={async () => await verifyReviewWithId(review.id)}
        >
          <CheckIcon />
          Verify
        </AsyncButton>
        <AsyncButton
          className="flex-1 cursor-pointer"
          action={async () => await deleteReviewWithId(review.id)}
        >
          <TrashIcon />
          Delete
        </AsyncButton>
        <AsyncButton
          action={async () => redirect(`/dashboard/users?user=${id}`)}
          className="flex-1 cursor-pointer"
        >
          <UserIcon />
          Manage user
        </AsyncButton>
      </div>
    </Card>
  );
}
