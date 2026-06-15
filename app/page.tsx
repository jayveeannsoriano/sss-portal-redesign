import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data: users } = await supabase.from("users").select();

  return (
    <>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      {/* This is where the fetched data from the 'users' table is displayed */}
      <div>
        {users?.map((user) => (
          <p key={user.id}>{JSON.stringify(user)}</p>
        ))}
      </div>
    </>
  );
}
