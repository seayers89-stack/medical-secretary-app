-- Veyn: 30-day limit on job postings. The £29 bundle buys one posting for
-- 30 days, not an indefinite listing — after that it drops off the public
-- board and the consultant has to post (and pay) again to relist.

alter table job_postings add column expires_at timestamptz;

update job_postings set expires_at = created_at + interval '30 days' where expires_at is null;

alter table job_postings alter column expires_at set default (now() + interval '30 days');
alter table job_postings alter column expires_at set not null;
