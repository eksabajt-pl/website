"use server";

import { banUser } from "@/db/ban/banUser";
import { changeUserGroup } from "@/db/profile/changeUserGroup";
import { deleteUserProfile } from "@/db/profile/deleteUserProfile";
import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";
import { getUserProfile } from "@/db/profile/getUserProfile";
import { changeReviewStatus } from "@/db/review/changeReviewStatus";
import { deleteReview } from "@/db/review/deleteReview";
import { deleteUnverifiedUserReviews } from "@/db/review/deleteUnverifiedUserReviews";
import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isAdmin = async () => {
  const user = await getCurrentUserProfile();
  return user.userGroup == "admin";
};

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

export async function deleteUnverifiedUserReviewsAction(userId: string) {
  await deleteUnverifiedUserReviews(userId);
  revalidatePath("/dashboard/users", "page");
  revalidatePath("/", "page");
}

export async function banUserAction(userId: string) {
  const user = (await getUserProfile(userId)) as { email?: string };
  if (!user.email) {
    throw new Error("User has no email");
  }
  const { email } = user;
  await banUser({ email });
  await deleteUserProfile(userId);

  revalidatePath("/dashboard/users", "page");
  revalidatePath("/", "page");
}
