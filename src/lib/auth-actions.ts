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

export async function getUserProfileById(userId: string) {
  const supabase = createClient();

  const { data, error } = await (await supabase)
    .from("profiles")
    .select("*")
    .eq("id", userId);

  if (error) {
    console.error(error);
  }

  if (!data || data.length === 0) {
    return null;
  }

  return data[0];
}

export async function getCurrentUserId() {
  const supabase = createClient();

  const { data, error } = await (await supabase).auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return data.user.id;
}

export async function getCurrentUserGroup() {
  const { user_group } = await getCurrentUser();
  return user_group;
}

export async function getCurrentUser() {
  const supabase = createClient();

  const { data, error } = await (
    await supabase
  )
    .from("profiles")
    .select("*")
    .eq("id", await getCurrentUserId());

  if (error) {
    console.error(error);
  }

  if (!data || data.length === 0) {
    return null;
  }

  return data[0];
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        full_name: `${firstName + " " + lastName}`,
        email: formData.get("email") as string,
      },
    },
  };

  const { error } = await (await supabase).auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signout() {
  const supabase = createClient();
  const { error } = await (await supabase).auth.signOut();
  if (error) {
    console.log(error);
    redirect("/error");
  }

  redirect("/");
}

export async function signInWithOAuth(
  provider: "google" | "github" | "discord"
) {
  const supabase = createClient();
  const { data, error } = await (
    await supabase
  ).auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  redirect(data.url);
}
