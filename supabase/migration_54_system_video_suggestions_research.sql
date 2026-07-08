-- Veyn: allows a system_video_suggestions row to have no submitter, for
-- videos found via research/curation (e.g. by Claude) rather than
-- submitted by a logged-in secretary through account/system-guide.html.
-- These still go through the exact same admin review/approve flow as any
-- other suggestion — nothing here writes to system_videos directly.
-- Run this in the Supabase SQL editor, after migration_53.

alter table system_video_suggestions alter column submitted_by_profile_id drop not null;

-- The two Semble videos found during the original video-link research
-- (see conversation history / system-skills-data.js git history) —
-- practitioner screen-recordings, not official vendor content, so they
-- need a human to actually watch them and confirm no patient-identifiable
-- data is visible on screen before being approved into system_videos.
insert into system_video_suggestions (system_slug, url, label, note, submitted_by_profile_id, status) values
('semble', 'https://www.youtube.com/watch?v=6CU6Ys59p4M', 'Save HOURS using Semble in Your Private Practice', 'Found via research, not submitted by a secretary. A real practitioner''s own screen-recording of their private practice — watch in full before approving and confirm no patient name/DOB/notes are visible on screen at any point.', null, 'pending'),
('semble', 'https://www.youtube.com/watch?v=sx-_CbnSU9A', 'Run Your Private Practice From ANYWHERE Using Semble', 'Found via research, not submitted by a secretary. A real practitioner''s own screen-recording of their private practice — watch in full before approving and confirm no patient name/DOB/notes are visible on screen at any point.', null, 'pending');
