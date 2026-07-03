// Veyn: pulls the full Healix Health Services fee schedule from their public
// fee-checker API and upserts it into healix_fees. Same logic as
// scripts/sync-healix-fees.js, but runs server-side so it can be triggered
// from a button in the admin panel (account/admin.html) without ever
// exposing the service_role key to the browser. Admin-gated: verifies the
// caller's JWT belongs to an admin before doing anything.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const HEALIX_API = "https://hsp.healix.com/HFS/GetFilteredHFS";
const PAGE_SIZE = 200;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://www.veyn.uk",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

async function fetchPage(page: number) {
  const url = `${HEALIX_API}?orderby=code&direction=asc&searchChapterId=-1&pageSize=${PAGE_SIZE}&currentPage=${page}`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Healix API returned ${res.status} on page ${page}`);
  return res.json();
}

async function fetchAllFees() {
  const rows: any[] = [];
  let page = 1;
  while (true) {
    const data = await fetchPage(page);
    rows.push(...data.Result);
    if (rows.length >= data.RecordsCount || data.Result.length === 0) break;
    page++;
  }
  return rows;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    const callerClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: isAdmin, error: adminCheckError } = await callerClient.rpc("is_admin");
    if (adminCheckError || !isAdmin) {
      return new Response(JSON.stringify({ error: "Admins only" }), {
        status: 403,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const rows = await fetchAllFees();

    const syncedAt = new Date().toISOString();
    const records = rows
      .filter((r) => r.CCSDCode)
      .map((r) => ({
        ccsd_code: r.CCSDCode,
        description: r.Description || null,
        procedure_fee: r.ProcedureFee != null && r.ProcedureFee >= 0 ? r.ProcedureFee : null,
        anaesthetic_fee: r.AnaestheticFee != null && r.AnaestheticFee >= 0 ? r.AnaestheticFee : null,
        synced_at: syncedAt,
      }));

    const BATCH_SIZE = 500;
    for (let i = 0; i < records.length; i += BATCH_SIZE) {
      const batch = records.slice(i, i + BATCH_SIZE);
      const { error } = await supabase.from("healix_fees").upsert(batch, { onConflict: "ccsd_code" });
      if (error) throw new Error(`Upsert failed: ${error.message}`);
    }

    return new Response(JSON.stringify({ ok: true, count: records.length, syncedAt }), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
});
