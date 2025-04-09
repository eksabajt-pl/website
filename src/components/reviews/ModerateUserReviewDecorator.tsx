"use client";
import { SelectReviewWithProfile } from "@/db/schema";
import {
  verifyReviewWithId,
  rejectReviewWithId,
  deleteReviewWithId,
} from "@/lib/admin-actions";
import { CheckIcon, TrashIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import AsyncButton from "../buttons/AsyncButton";

export function ModerateUserReviewDecorator({
  children,
  reviewWithProfile,
}: {
  children: React.ReactNode;
  reviewWithProfile: SelectReviewWithProfile;
}) {
  const { review } = reviewWithProfile;

  return (
    <Card className="p-0 ">
      {children}
      <div className="p-4 -mt-10 flex flex-row gap-2">
        <AsyncButton
          className="flex-1 cursor-pointer"
          action={async () => await rejectReviewWithId(review.id)}
        >
          <TrashIcon />
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
      </div>
    </Card>
  );
}
