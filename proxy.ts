import { type NextRequest } from "next/server";

import { updateSession } from "@/lib/supabase/proxy";

/**
 * This is the Next.js middleware entry point.
 * NOTE: The middleware file convention is deprecated and has been renamed to proxy.
 *
 * It runs on the server before every matched request (see `config.matcher` below).
 * Its job is to refresh the user's Supabase auth session so it never expires
 * while the user is actively using the app.
 *
 * Internally, `updateSession`:
 *  1. Creates a Supabase server client scoped to the current request.
 *  2. Calls `supabase.auth.getClaims()` to read and refresh the session from cookies.
 *  3. Writes any updated auth cookies back onto the response so the browser stays in sync.
 *  4. If there is no logged-in user and the route is not `/login` or `/auth`,
 *     it redirects the user to `/login` (route protection).
 */
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // Tells Next.js which routes this middleware should run on.
  // It matches every route EXCEPT static assets, so auth checks
  // don't run unnecessarily on files that never need authentication.
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
