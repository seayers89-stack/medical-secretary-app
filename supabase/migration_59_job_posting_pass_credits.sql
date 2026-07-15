-- Veyn: bundle job postings into consultant passes.
-- 2-week pass: 1 job posting. 1-month pass: 3 job postings. 6-month pass:
-- unlimited job postings while the pass is active (no credit needed — checked
-- against pass_type/pass_expires_at directly). Credits are set (not added)
-- each time a pass is purchased, so unused credits from an expired pass are
-- forfeited rather than carried into a new one.

alter table consultant_profiles add column job_posting_credits integer not null default 0;
