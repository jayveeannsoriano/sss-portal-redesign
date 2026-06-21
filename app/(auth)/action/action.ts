"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(username: string, password: string) {
  const supabase = await createClient();

  // 1. Look up the email from public.users by username.
  //    Uses a SECURITY DEFINER RPC to bypass RLS (user isn't authenticated yet).
  const { data: email, error: emailError } = await supabase.rpc(
    "get_email_by_username",
    { p_username: username },
  );

  if (emailError || !email) {
    return { error: "Invalid username or password." };
  }

  // 2. Sign in with the email + password against Supabase Auth.
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    return { error: "Invalid username or password." };
  }

  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();

  // Signs the user out by clearing the session cookies.
  await supabase.auth.signOut();

  // Redirect to the login page after logout.
  redirect("/login");
}
