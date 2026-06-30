// Veyn: pulls the full Healix Health Services fee schedule from their public
// fee-checker API (https://hsp.healix.com/hfs — the page itself is an
// Angular SPA; this calls the JSON endpoint it uses internally) and upserts
// it into the healix_fees table. Run monthly by
// .github/workflows/sync-healix-fees.yml. Requires SUPABASE_URL and
// SUPABASE_SERVICE_ROLE_KEY as env vars (the service role key bypasses RLS,
// which is required since healix_fees has no public write policy).

const HEALIX_API = 'https://hsp.healix.com/HFS/GetFilteredHFS';
const PAGE_SIZE = 200;

async function fetchPage(page) {
  const url = `${HEALIX_API}?orderby=code&direction=asc&searchChapterId=-1&pageSize=${PAGE_SIZE}&currentPage=${page}`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`Healix API returned ${res.status} on page ${page}`);
  return res.json();
}

async function fetchAllFees() {
  const rows = [];
  let page = 1;
  while (true) {
    const data = await fetchPage(page);
    rows.push(...data.Result);
    if (rows.length >= data.RecordsCount || data.Result.length === 0) break;
    page++;
  }
  return rows;
}

async function upsertBatch(supabaseUrl, serviceKey, batch) {
  const res = await fetch(`${supabaseUrl}/rest/v1/healix_fees`, {
    method: 'POST',
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates',
    },
    body: JSON.stringify(batch),
  });
  if (!res.ok) throw new Error(`Supabase upsert failed: ${res.status} ${await res.text()}`);
}

async function main() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set');
  }

  const rows = await fetchAllFees();
  console.log(`Fetched ${rows.length} rows from Healix.`);

  const syncedAt = new Date().toISOString();
  const records = rows
    .filter(r => r.CCSDCode)
    .map(r => ({
      ccsd_code: r.CCSDCode,
      description: r.Description || null,
      procedure_fee: r.ProcedureFee != null && r.ProcedureFee >= 0 ? r.ProcedureFee : null,
      anaesthetic_fee: r.AnaestheticFee != null && r.AnaestheticFee >= 0 ? r.AnaestheticFee : null,
      synced_at: syncedAt,
    }));

  const BATCH_SIZE = 500;
  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    await upsertBatch(supabaseUrl, serviceKey, batch);
    console.log(`Upserted ${i + batch.length}/${records.length}`);
  }

  console.log('Healix fee schedule sync complete.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
