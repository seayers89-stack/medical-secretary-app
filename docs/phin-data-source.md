# PHIN consultant data — Step 0 findings (data source check)

Date: 2026-06-29
Status: **Blocked — do not crawl. Needs a commercial/legal conversation with PHIN, not an engineering build.**

## What was checked

1. **robots.txt** (`https://www.phin.org.uk/robots.txt`):
   ```
   User-agent: *
   Disallow: /my-list
   Disallow: /shared-list
   Disallow: /api
   Sitemap: https://www.phin.org.uk/sitemap.xml
   ```
   `/api` is explicitly disallowed for all crawlers — confirms an internal API exists but is not intended for public/automated use.

2. **Public data downloads** (`/data`, `/data/datasheets`): these are aggregated hospital-level statistics (patient volumes, length of stay, infections, adverse events, "Patient Insights Explorer"). No consultant-by-consultant directory export (name, specialty, hospitals, contact) is offered as a bulk download. The consultant directory is only browsable one profile at a time via the public A–Z consultant index.

3. **Terms and Conditions of Use** (`https://www.phin.org.uk/about/Terms-and-Conditions-of-Use`) — this is the blocker:
   > "...downloaded and viewed on a single device for individual private use, research, study or non-commercial use only."
   > "It is not to be otherwise reproduced or transmitted or made available on a network without the prior written consent of PHIN."

   Veyn republishing PHIN's consultant directory data inside a commercial, multi-user platform is **commercial use**, and serving it back out to Veyn's users is **making it available on a network** — both squarely against this clause without PHIN's written consent. No clause was found explicitly naming "scraping" or "bots," but the use-restriction above governs regardless of *how* the data is obtained (manual copy-paste would be just as non-compliant as a crawler).

4. **PHIN Business Services** (`https://www.phin.org.uk/help/phin-business-services`): PHIN has a commercial data-licensing arm. They explicitly sell bespoke reports and analytics built from their consultant/hospital data ("standard reports starting from £2,500"), and reference a "Private Healthcare Measurement platform" with licensable IP. No public API or self-serve bulk-export product is documented, but this is clearly the intended commercial route for an organisation that wants to build a product on top of PHIN's data.
   - Contact: **info@phin.org.uk** / **+44 (0)203 479 3810**

## Conclusion

Per the original brief's own instruction ("If the Terms and Conditions of Use prohibit automated extraction/scraping for commercial reuse, stop and flag this back to me rather than proceeding — that changes this from a build task into a legal/partnership conversation"): **this has happened.** No engineering work (crawler, schema, scheduled job, search UI) was started.

## Recommended next step

Someone at Veyn (not an automated process) should email **info@phin.org.uk**, explain Veyn's intended use case (a searchable consultant lookup for medical secretaries/consultants — name, specialty, hospitals worked at, and any published contact card), and ask specifically:

1. Does PHIN offer an API or licensed data feed for this kind of consultant-directory use case, separate from the aggregated statistics datasheets?
2. What would a data-sharing/licensing agreement look like — cost, refresh frequency, which fields are licensable (PHIN's own ToS suggests contact-card fields may have different provenance/consent than hospital-submitted fields)?
3. Whether PHIN has existing partnerships with platforms doing something similar, as a precedent.

Once there's a written agreement or a documented API, this build can resume against Step 2 onward (schema, monthly refresh job, search UI) exactly as scoped in the original brief — none of that work is wasted, it's just gated on this conversation happening first.
