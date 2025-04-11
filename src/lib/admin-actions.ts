"use server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import InsertProjectFn from "@/db/project/InsertProjectFn";
import { changeReviewStatus } from "@/db/review/changeReviewStatus";
import { deleteReview } from "@/db/review/deleteReview";
import { InsertProject, profile } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function rejectReviewWithId(reviewId: number) {
  await changeReviewStatus(reviewId, "rejected");
}

export async function verifyReviewWithId(reviewId: number) {
  await changeReviewStatus(reviewId, "verified");
}

export async function deleteReviewWithId(reviewId: number) {
  await deleteReview(reviewId);
}
export type ProjectFormSchema = {
  email: string;
  type: string;
  price: number;
};
export type WebsiteProjectSchema = {
  Title: string;
  Description: string;
  Link: string;
};
export async function WebsiteprojectForm(formData: WebsiteProjectSchema) {
  const supabase = await createClient();
  const verify = (await supabase.auth.getUser()).data.user;
  if (!verify) {
    redirect("/login");
  }
  const review: InsertProject = {
    user_id: verify.id,
    ...formData,
  };
  await InsertProjectFn(review);
  revalidatePath("/dashboard/projects", "page");
  revalidatePath("/", "page");
}
export async function projectForm(formData: ProjectFormSchema) {
  const supabase = await createClient();
  const verify = (await supabase.auth.getUser()).data.user;
  if (!verify) {
    redirect("/login");
  }
  const result = await db
    .select()
    .from(profile)
    .where(eq(profile.email, formData.email));
  if (!result) {
    console.log("no result");
  }
  const resultProject: InsertProject = {
    user_id: result[0].id,
    email: formData.email,
    type: formData.type,
    price: formData.price,
  };
  await InsertProjectFn(resultProject);
  revalidatePath("/dashboard/projects", "page");
  revalidatePath("/", "page");
}
// TODO: implement this function
// This function should ban a user by their ID
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function banUserWithId(userId: string) {}
