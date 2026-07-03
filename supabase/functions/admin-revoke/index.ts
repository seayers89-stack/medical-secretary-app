// Veyn: revokes an admin account by deleting the underlying auth user.
// Admin accounts have no secretary/consultant data attached, so deleting
// the auth user (which cascades to the profiles row via
// "on delete cascade") is a clean, complete revoke — there's no leftover
// flag to accidentally leave set. Super-admin gated; refuses to delete the
// permanent superuser.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://www.veyn.uk",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
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
    const { target_user_id } = await req.json();
    if (!target_user_id || typeof target_user_id !== "string") {
      return jsonResponse({ error: "target_user_id is required." }, 400);
    }

    const authHeader = req.headers.get("Authorization") ?? "";
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const callerClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: isSuperAdmin, error: superAdminError } = await callerClient.rpc("is_super_admin");
    if (superAdminError || !isSuperAdmin) {
      return jsonResponse({ error: "Only super admins can remove admin accounts." }, 403);
    }

    const { data: target, error: targetError } = await admin
      .from("profiles")
      .select("role, is_super_admin")
      .eq("id", target_user_id)
      .single();
    if (targetError) throw targetError;
    if (target.role !== "admin") {
      return jsonResponse({ error: "That account is not an admin." }, 400);
    }
    if (target.is_super_admin) {
      return jsonResponse({ error: "The permanent superadmin can't be removed this way." }, 403);
    }

    const { error: deleteError } = await admin.auth.admin.deleteUser(target_user_id);
    if (deleteError) throw deleteError;

    return jsonResponse({ ok: true }, 200);
  } catch (err) {
    return jsonResponse({ error: err.message || String(err) }, 500);
  }
});
