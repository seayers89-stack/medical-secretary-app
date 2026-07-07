# UK private hospital group "find a consultant" directories — Step 0 findings (data source check)

Date: 2026-07-07
Status: **Blocked for all four groups — do not build a scraper against any of these sites. Same category of problem as PHIN (see `docs/phin-data-source.md`): this is a licensing/partnership conversation, not an engineering task.**

Scope: robots.txt, website Terms of Use/Terms & Conditions, and consultant-directory structure for Spire Healthcare, Nuffield Health, HCA Healthcare UK, and Circle Health Group. No scraping, bulk download, or directory-content extraction was performed — only robots.txt and legal pages were read, exactly like reading any other public webpage.

**Important general caveat that applies to all four (and to PHIN):** robots.txt is not itself a binding legal instrument — it's a machine-readable crawling preference. The actual legal exposure comes from (a) the website's Terms of Use, which is a contract formed by using the site, and (b) UK copyright and the *sui generis* database right (Copyright, Designs and Patents Act 1988 / Copyright and Rights in Databases Regulations 1997), which protect compiled directory content **regardless of whether the Terms of Use say anything about scraping at all**. So even where a site's ToS is silent on "automated access," building a commercial product on top of the extracted data can still infringe database right / copyright unless the use falls under a narrow statutory exception (none of which cover "build a competing commercial directory").

---

## 1. Spire Healthcare (spirehealthcare.com)

**A) robots.txt** — `https://www.spirehealthcare.com/robots.txt`
```
User-agent: *
Disallow: /aspnet_client/
Disallow: /bin/
Disallow: /config/
Disallow: /data/
Disallow: /macroScripts/
Disallow: /umbraco/
Disallow: /umbraco_client/
Disallow: /usercontrols/
Disallow: /gdpr/
Disallow: /help/
Disallow: /uapi/

Disallow: /spire-wellesley-hospital/consultants/profiles/843/
Disallow: /spire-southampton-hospital/consultants/profiles/797/
... (~800+ more individually-named consultant profile URLs, pattern:
     /{hospital-slug}/consultants/profiles/{id}/)
```
Followed by 48 `Sitemap:` lines — one root sitemap plus one per hospital (e.g. `https://www.spirehealthcare.com/spire-southampton-hospital/xml-sitemap/`).

This is **not** a blanket block on the consultant directory: there's no `Disallow: /consultants/` rule, and the consultant search page and per-hospital sitemaps are fully crawlable/indexed. What's disallowed is a large explicit list (~800+) of individually-numbered profile URLs — almost certainly stale/duplicate/removed-consultant pages being de-indexed for SEO hygiene, not a deliberate anti-scraping wall. `/uapi/` is disallowed (an internal API path) but there's no generic `/api` disallow.

**B) Terms of Use** — footer link "Terms and Conditions" → `https://www.spirehealthcare.com/legal/terms-and-conditions/`, which links out to a PDF: `https://www.spirehealthcare.com/media/5839/spire-website-legal-notices.pdf` ("Notice and disclaimer").

Relevant clause (para. 10, "Credits"):
> "All content on this website is copyright © Spire Healthcare Limited. Please see our copyright notice for more information. **Spire Healthcare and/or its licensors are the owners of the copyright and database rights in the site**, except where specifically stated otherwise, including content data, design, graphics, text, images, software and underlying source codes."

Notably, this document does **not** contain an explicit scraping/bot clause, and does **not** contain the "non-commercial use only" language PHIN and Nuffield use. It's mostly a liability disclaimer plus a bare assertion of copyright/database-right ownership. A separate "Patient Terms and Conditions" PDF exists (governs bookings, not site use) and was not reviewed as out of scope. A referenced "copyright notice" (linked from para. 10) could not be located separately in the time available.

**C) Directory structure** — Search: `/consultants/consultant-search/` (filters: name, specialty, hospital, region). Individual profiles: `/{hospital-slug}/consultants/profiles/{id}/` — the hospital is baked directly into the profile URL, and a consultant who practises at multiple Spire hospitals gets a separate profile page per hospital. Hospital affiliation is therefore unambiguous from the URL/page structure alone.

**D) API/licensing** — None found. A "Healthcare professionals" section exists but is for consultants applying for practising privileges, not a data product.

**Verdict: gray area / ambiguous.** No explicit scraping or commercial-use prohibition was located in the reviewed Terms document, but Spire explicitly asserts copyright **and database rights** over the site's "content data," and the robots.txt shows active, granular management of individual consultant-profile URLs (indicating these are treated as discrete, curated assets, not throwaway pages). Default IP protection likely still applies. Recommend a follow-up check of the separate "copyright notice" referenced in the terms before treating this as lower-risk than the others.

---

## 2. Nuffield Health (nuffieldhealth.com)

**A) robots.txt** — `https://www.nuffieldhealth.com/robots.txt`
```
User-agent: AlphaSeoBot
Disallow: /
User-agent: AlphaSeoBot-SA
Disallow: /
User-agent: SemrushBot
Disallow: /
User-agent: SemrushBot-SA
Disallow: /
User-agent: Screaming Frog SEO Spider
Disallow: /
User-agent: MJ12bot
Disallow: /

User-agent: *
Disallow: /_preview*
Disallow: /search?*

Sitemap: https://www.nuffieldhealth.com/sitemap_index.xml
```
Nuffield fully blocks several named commercial SEO/crawling tools (Semrush, Screaming Frog, MJ12bot, AlphaSeoBot) outright, and blocks `/search?*` and `/_preview*` for everyone else. No `/api` disallow found; the consultant directory paths themselves are not disallowed.

**B) Terms of Use** — footer "Terms and conditions" → `https://www.nuffieldhealth.com/terms/nuffield-health-website-terms-and-conditions`.

Relevant clause (near-identical template to PHIN's own ToS):
> "This website is protected by copyright. It is published by Nuffield Health and may not be reproduced other than when downloaded and viewed on a single device for **private use only**."
> "...is not to be otherwise reproduced or transmitted or **made available on a network without the prior written consent of Nuffield Health**."

This is functionally the same clause structure PHIN uses (see `docs/phin-data-source.md`), down to similar phrasing ("single device," "made available on a network," "prior written consent"). No explicit scraping/bot clause was found, but as with PHIN, the use-restriction governs regardless of how the data was obtained — republishing Nuffield's directory data inside a commercial, multi-user platform is squarely "making available on a network" without consent.

**C) Directory structure** — Search: `https://www.nuffieldhealth.com/consultants` (filters: specialty — 1,000+ option dropdown, postcode + radius, hospital — 36-facility dropdown). Individual profile URL pattern confirmed via search index: `/consultants/mr-pierluigi-vergara` (name-slug, no numeric ID). Nuffield also publishes hospital-scoped consultant listings, e.g. `/hospitals/the-holly/consultants` and `/hospitals/wolverhampton/consultants?...filters...locations=Wolverhampton+Hospital`, which confirms hospital-level affiliation data exists on the site, though direct confirmation of the exact fields shown on an individual profile page was not obtained (the profile page itself could not be fetched in this session — this should be spot-checked manually before relying on it).

**D) API/licensing** — None found.

**Verdict: appears blocked by ToS.** Same category and strength as the PHIN finding — the "single device / private use only" + "not made available on a network without written consent" clause directly prohibits exactly what a searchable multi-user Veyn directory would do.

---

## 3. HCA Healthcare UK (hcahealthcare.co.uk)

**A) robots.txt** — `https://www.hcahealthcare.co.uk/robots.txt`
```
User-agent: *
Allow: /
Disallow: */data/*
Disallow: */Data/*
Disallow: */page-data/*
Disallow: */Page-Data/*
Disallow: */content/hca/home/*
Disallow: /settings/*
Disallow: /undefined/*

Sitemap: https://www.hcahealthcare.co.uk/sitemap.hca.consultant-finder.xml
Sitemap: https://www.hcahealthcare.co.uk/sitemap.xml
```
Notably HCA publishes a **dedicated sitemap specifically for the consultant finder** (`sitemap.hca.consultant-finder.xml`), and nothing in robots.txt disallows the finder paths — the opposite signal from Spire's per-profile blocking: HCA actively wants every consultant profile crawled and indexed by search engines. No `/api` disallow. (A `finder.hcahealthcare.co.uk` subdomain turned up in search results but would not resolve for direct fetch in this session — the live, working consultant-profile links found are all under `www.hcahealthcare.co.uk/finder/...`, so that subdomain may be legacy/regional and wasn't separately checked.)

**B) Terms of Use** — No single dedicated "Terms of Use" page; terms live directly on the legal hub: `https://www.hcahealthcare.co.uk/legal`, under headings "Copyright and Trademarks," "Reliability of Information," "Links to Websites," "Logged Information," "Liability," "Indemnity," "Governing Laws and Severability."

Relevant clause ("Copyright and Trademarks," condition 3):
> "You may print and download material from this site, other than third party stock images... and other material as indicated, on the following conditions:
> i. The use is for **personal or educational use only, you should not distribute, sell or circulate any material for profit thereafter**;
> ii. No documents or related graphics on this site are to be modified in any way;
> ...
> iv. All copies should acknowledge the source of this material as HCA International Limited;
> v. **Any use of material on this site otherwise than as explicitly permitted in this copyright notice is prohibited unless prior written permission has been obtained from HCA International Limited.**"

This is an explicit, unambiguous commercial-use restriction with a catch-all: any use beyond personal/educational, non-commercial copying requires HCA's prior written permission. Building a commercial consultant directory from this content falls outside the permitted uses. No explicit "scraping/bot" clause was found in the sections reviewed, but as with PHIN and Nuffield, the use-restriction is method-agnostic — it doesn't matter whether the data was scraped or manually copied.

**C) Directory structure** — Entry point `/finder/step-intro` → `/finder/step-search-consultant` → results at `/finder/step-consultant-cards?...` (filters: location, video-consult availability, gender, payment method/insurer — 20+ insurers, language, sort by relevance/rating/distance). Individual profiles: `/finder/stepconsultantprofile/{name-slug}` (e.g. `/finder/stepconsultantprofile/mr-frank-lee`). HCA additionally publishes a hospital-indexed version of the same directory for healthcare professionals: `/for-healthcare-professionals/hca-uk-consultant-directory/{hospital-slug}` (e.g. `london-bridge-hospital`), confirming hospital-affiliation data is present and structured on the site even though the patient-facing `/finder/` profile page titles found via search don't show a specific hospital name in the title alone (specialty + "at HCA Healthcare UK" brand level).

**D) API/licensing** — None found. A "For Healthcare Professionals" / "For Consultants" section exists but is for consultants seeking practising privileges, not a data-licensing product.

**Verdict: appears blocked by ToS.** The explicit "no distribution/sale/circulation for profit" + "any other use prohibited without written permission" clause squarely covers a commercial directory product, notwithstanding that HCA's robots.txt/sitemap behaviour shows they actively want the consultant finder indexed by search engines (search-engine indexing ≠ a license to republish the data in a competing product).

---

## 4. Circle Health Group (circlehealthgroup.co.uk)

**A) robots.txt** — Every direct fetch attempt against this domain (`https://www.circlehealthgroup.co.uk/robots.txt`, `https://circlehealthgroup.co.uk/robots.txt`, and the site's homepage and terms pages) returned **HTTP 403 Forbidden** with no body, from this session's fetch tooling. This is consistent across every path tried, suggesting the site's edge/CDN (Cloudflare or similar bot-management) is actively blocking non-browser HTTP clients site-wide — including, ironically, requests for robots.txt itself. This could not be resolved in this session; a manual browser visit would be needed to read the actual robots.txt content. Practically, this is itself a signal (if not a legal one) that the site does not want automated clients touching it.

**B) Terms of Use** — Located via search index at `https://www.circlehealthgroup.co.uk/terms-of-use` (the page itself also 403'd on direct fetch, so the quotes below come from a third-party search engine's indexed snippet of the page rather than a direct read of the live page — **this should be manually verified in a browser before being relied on for a legal opinion**, though the search engine's snippet extraction was detailed enough to look like a genuine excerpt, not a paraphrase).

Per the indexed content:
> "[Circle Health Group] prohibits conducting, facilitating, authorizing or permitting any **text or data mining or web scraping** in relation to their website or any services provided via the website... using any '**robot**', '**bot**', '**spider**', '**scraper**' or other automated device, program, tool, algorithm, code, process or methodology to access, obtain, copy, monitor or republish any portion of the website or any data, content, information or services accessed via the same."
> "The contents of Circle Health Group's website may not be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means without the express written permission of Circle Health Group."
> Permitted use is limited to printing/downloading "the contents of an individual page... for the purposes of private and personal non-commercial use" only.
> A carve-out notes the restrictions don't apply where a mandatory statutory text/data-mining exception applies (standard UK CDPA-style boilerplate) — but this exception is narrow (non-commercial research with lawful access) and would not cover a commercial consultant-directory product.

This is the most explicit and strongest clause of the four — a modern, purpose-built anti-scraping/anti-TDM clause that names "robot/bot/spider/scraper" directly, which none of the other three sites' reviewed terms do explicitly.

**C) Directory structure** — Search/browse: `https://www.circlehealthgroup.co.uk/consultants` (by treatment or hospital, or direct "find a specialist"). Individual profiles: `/consultants/{name-slug}` (e.g. `/consultants/jae-rhee`, `/consultants/puneet-monga`). Search-index page titles confirm hospital/location affiliation is displayed on profile pages, e.g. "Mr Jae Rhee – Consultant Trauma & Orthopaedic Surgeon in Croydon," "Puneet Monga – Consultant Orthopaedic Surgeon in Manchester" (tied to named hospitals such as The Alexandra Hospital, The Priory Hospital). Consultant reviews are sourced from a third party, Doctify, not generated in-house.

**D) API/licensing** — None found. A "Healthcare professionals" section exists for consultants seeking practising privileges, not data licensing.

**Verdict: appears blocked by ToS** — and the clearest-cut of the four. Explicit, named prohibition on bots/scrapers/data mining, plus a blanket reproduction/redistribution restriction, plus edge-level bot-blocking observed in practice.

---

## Summary comparison

| Group | robots.txt signal | ToS verdict | Explicit anti-scraping clause? | Explicit commercial-use restriction? | Hospital shown on profile? | API/licensing path |
|---|---|---|---|---|---|---|
| **Spire Healthcare** | No blanket block; ~800 individual profile IDs disallowed (looks like SEO hygiene, not anti-scraping) | Gray area / ambiguous | Not found | Not found (only bare copyright/database-right assertion) | Yes — hospital is in the profile URL itself | None found |
| **Nuffield Health** | Blocks named SEO bots; `/search?*`, `/_preview*` disallowed for all | Appears blocked by ToS | Not found | Yes — "network"/"prior written consent" clause, same template as PHIN | Likely yes (hospital-scoped listings exist); profile page itself not directly confirmed | None found |
| **HCA Healthcare UK** | No block on finder; dedicated consultant-finder sitemap actively published | Appears blocked by ToS | Not found (but catch-all "otherwise than explicitly permitted... prohibited") | Yes — explicit "no distribution/sale/circulation for profit" clause | Yes — via separate hospital-indexed consultant directory | None found |
| **Circle Health Group** | Could not read directly — site 403'd every automated request, including robots.txt | Appears blocked by ToS (strongest of the four) | **Yes — explicit, named "robot/bot/spider/scraper" and "text or data mining" prohibition** | Yes — "private and personal non-commercial use" only | Yes — hospital named in profile page titles | None found |

**Bottom line, consistent with the PHIN conclusion:** all four groups either explicitly prohibit the kind of commercial redistribution Veyn's directory would involve (Nuffield, HCA, Circle) or assert copyright/database rights without a clear permissive carve-out (Spire) — and none publish a self-serve API or data-licensing product. This is a licensing/partnership conversation with each hospital group individually, not a build task. No engineering work (crawler, schema, scheduled job) should proceed against any of these four sites without a written agreement, exactly per the precedent set by the PHIN investigation.

## Recommended next step

Same pattern as the PHIN recommendation: someone at Veyn should reach out to each group's business-development/partnerships or legal contact (not an automated process), explain the intended use case, and ask whether a data-sharing or API licensing arrangement exists or could be negotiated. Given four separate commercial conversations would be needed (versus one for PHIN, which aggregates across all groups), it may be more efficient to prioritize the PHIN licensing conversation first, since PHIN's dataset already spans all UK private hospital groups' consultants in one place — these four groups' own sites would only be worth pursuing individually if the PHIN conversation stalls or excludes fields Veyn needs (e.g., PHIN's contact-card fields, per `docs/phin-data-source.md`).
