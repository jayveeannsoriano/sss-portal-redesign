import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { logout } from "@/app/(auth)/action/action";

export default async function Dashboard() {
  const supabase = await createClient();

  // Get the currently authenticated user from the session cookie.
  // getClaims() is preferred over getUser() for performance — it reads
  // the JWT directly without an extra Supabase network round-trip.
  const { data } = await supabase.auth.getClaims();
  const authUser = data?.claims;

  // If there's no session, redirect to login.
  // (The middleware also handles this, but this is a server-side safety net.)
  if (!authUser) redirect("/login");

  // Fetch the account_type and username from public.users using the auth UUID.
  const { data: userProfile } = await supabase
    .from("users")
    .select("username, account_type")
    .eq("user_id", authUser.sub)
    .single();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Welcome, {userProfile?.username}!</h1>
      <p className="text-sm text-muted-foreground capitalize">
        Account type: {userProfile?.account_type}
      </p>

      {/* logoutAction is a Server Action — no "use client" needed on this page.
          Wrapping the button in a <form> lets it call the action progressively. */}
      <form action={logout}>
        <Button type="submit" variant="outline" className="cursor-pointer">
          Logout
        </Button>
      </form>
    </div>
  );
}
