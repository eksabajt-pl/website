"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await (await supabase).auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

const supabase = await createClient();

export default async function writeReview(formData: FormData) {
  const data = {
    user_id: formData.get("user_id") as string,
    password: formData.get("user_provider") as string,
  };
  const { data, error } = await supabase.from("public.reviews").insert([
    {
      user_id: userId,
      user_provider: userProvider,
      stars: stars,
      content: content,
    },
  ]);

  if (error) {
    console.error("Error writing review:", error);
  } else {
    console.log("Review written successfully:", data);
  }
}
