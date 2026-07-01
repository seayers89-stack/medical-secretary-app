// Veyn: invites a new admin account by email. Admin accounts are a
// distinct role (profiles.role = 'admin') created only through this
// function — never via the normal client-side signup pages — so the
// service_role key never touches the browser. Same shape as
// sync-healix-fees: a service-role client plus a JWT-based caller check.
//
// Bootstrap: if no admin account exists yet, the auth check is skipped for
// exactly one email (infoveynuk@gmail.com), so the very first superadmin
// can be seeded without a chicken-and-egg "you need an admin to create an
// admin" problem. The moment that row exists, this path closes itself.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const BOOTSTRAP_SUPERADMIN_EMAIL = "infoveynuk@gmail.com";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  try {
    const { email, first_name, last_name, redirectTo } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return jsonResponse({ error: "A valid email is required." }, 400);
    }

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { count: adminCount, error: countError } = await admin
      .from("profiles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");
    if (countError) throw countError;

    const isBootstrap = (adminCount ?? 0) === 0;

    if (isBootstrap) {
      if (email.toLowerCase() !== BOOTSTRAP_SUPERADMIN_EMAIL) {
        return jsonResponse({ error: "No admins exist yet — only the designated superadmin email can bootstrap the first account." }, 403);
      }
    } else {
      const authHeader = req.headers.get("Authorization") ?? "";
      const callerClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
        global: { headers: { Authorization: authHeader } },
      });
      const { data: isSuperAdmin, error: superAdminError } = await callerClient.rpc("is_super_admin");
      if (superAdminError || !isSuperAdmin) {
        return jsonResponse({ error: "Only super admins can add new admin accounts." }, 403);
      }
    }

    const { data: invited, error: inviteError } = await admin.auth.admin.inviteUserByEmail(email, {
      redirectTo: redirectTo || undefined,
    });
    if (inviteError) throw inviteError;

    const { error: profileError } = await admin.from("profiles").insert({
      id: invited.user.id,
      role: "admin",
      first_name: first_name || "Admin",
      last_name: last_name || "",
      email,
      is_super_admin: isBootstrap,
    });
    if (profileError) throw profileError;

    return jsonResponse({ ok: true, id: invited.user.id, isSuperAdmin: isBootstrap }, 200);
  } catch (err) {
    return jsonResponse({ error: err.message || String(err) }, 500);
  }
});
