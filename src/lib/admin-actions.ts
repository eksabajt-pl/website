"use server";

import { changeUserGroup } from "@/db/profile/changeUserGroup";
import { deleteUserProfile } from "@/db/profile/deleteUserProfile";
import { changeReviewStatus } from "@/db/review/changeReviewStatus";
import { deleteReview } from "@/db/review/deleteReview";
import { revalidatePath } from "next/cache";

export async function deleteUserProfileAction(userId: string) {
  await deleteUserProfile(userId);
  revalidatePath("/dashboard/users", "page");
  revalidatePath("/", "page");
}

export async function changeUserGroupAction(
  userId: string,
  userGroup: "user" | "admin"
) {
  await changeUserGroup(userId, userGroup);
  revalidatePath("/dashboard/users", "page");
}

export async function rejectReviewWithId(reviewId: number) {
  await changeReviewStatus(reviewId, "rejected");
  revalidatePath("/dashboard/reviews", "page");
  revalidatePath("/", "page");
}

export async function verifyReviewWithId(reviewId: number) {
  await changeReviewStatus(reviewId, "verified");
  revalidatePath("/dashboard/reviews", "page");
  revalidatePath("/", "page");
}

export async function deleteReviewWithId(reviewId: number) {
  await deleteReview(reviewId);
  revalidatePath("/dashboard/reviews", "page");
  revalidatePath("/", "page");
}

// TODO: implement this function
// This function should ban a user by their ID
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function banUserWithId(userId: string) {}
