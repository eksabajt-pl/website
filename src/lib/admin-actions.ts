"use server";

import { changeReviewStatus } from "@/db/review/changeReviewStatus";
import { deleteReview } from "@/db/review/deleteReview";
import { revalidatePath } from "next/cache";

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
