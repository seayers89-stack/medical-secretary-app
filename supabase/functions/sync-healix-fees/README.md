# Deploying the Healix fee schedule sync function

This Edge Function pulls Healix Health Services' published CCSD fee schedule and upserts it into `healix_fees`. It's triggered by the "Run CCSD update" button in the admin panel (`account/admin.html`), gated so only admins can run it. Needs the Supabase CLI to deploy.

## 1. Install the Supabase CLI and link this project (skip if already done)
```
npm install -g supabase
supabase login
supabase link --project-ref kdknadmgbiebyuqwigfi
```

## 2. Deploy the function
```
supabase functions deploy sync-healix-fees
```
(`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically to Edge Functions — no secrets to set for this one.)

That's it — the "Run CCSD update" button in the admin panel will call this function from then on. No GitHub secrets, no local PowerShell commands needed once it's deployed.
