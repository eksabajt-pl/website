"use server";

import { changeReviewStatus } from "@/db/review/changeReviewStatus";
import { deleteReview } from "@/db/review/deleteReview";

export async function rejectReviewWithId(reviewId: number) {
  await changeReviewStatus(reviewId, "rejected");
}

export async function verifyReviewWithId(reviewId: number) {
  await changeReviewStatus(reviewId, "verified");
}

export async function deleteReviewWithId(reviewId: number) {
  await deleteReview(reviewId);
}

// TODO: implement this function
// This function should ban a user by their ID
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function banUserWithId(userId: string) {}
