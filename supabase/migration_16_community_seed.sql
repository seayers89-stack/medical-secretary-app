-- Veyn: remove test post, support official "Veyn Team" seeded posts, and
-- seed 2 starter posts per category.
-- Run this in the Supabase SQL editor.

-- Delete the test post created during development (cascades to its replies/reports).
delete from community_posts where title = 'Anyone used Carebit for clinic letters?';

alter table community_posts alter column profile_id drop not null;
alter table community_posts add column if not exists is_veyn boolean not null default false;
alter table community_posts add constraint community_posts_author_check
  check (profile_id is not null or is_veyn);

insert into community_posts (profile_id, category, title, body, is_veyn) values
  (null, 'Systems & software', 'Welcome — share your Carebit, Semble, and EMIS tips here', 'This board is for swapping practical know-how on the systems we all use day to day. Found a useful shortcut, template, or workaround? Post it here so other secretaries can benefit.', true),
  (null, 'Systems & software', 'Anyone found a good way to speed up clinic letter templating?', 'Curious how others handle repetitive letter formatting across different consultants'' preferred styles. Do you keep a personal template library, or rely on what''s built into the practice system?', true),
  (null, 'Day rates & business', 'What''s a realistic day rate to start with as a freelance secretary?', 'A common question from secretaries just starting out on a self-employed basis. Use the day-rate calculator in the Business Hub as a starting point, then share what''s worked for you in this thread.', true),
  (null, 'Day rates & business', 'How do you handle late payment from a practice or consultant?', 'Chasing payment is one of the less pleasant parts of self-employment. Share what''s worked for you — clear invoice terms, polite follow-up timing, anything else.', true),
  (null, 'General', 'Welcome to the Veyn Community — introduce yourself', 'New here? Say hello — what specialty you work in, how long you''ve been a medical secretary, and what you''re hoping to get out of this community.', true),
  (null, 'General', 'What''s one thing you wish you''d known when you started as a private secretary?', 'Looking back, what would you tell someone just starting out in private practice secretarial work?', true);
