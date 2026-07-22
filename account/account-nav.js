// Veyn: renders the role-aware account nav (My profile / Messages / Search /
// Post a job / My postings for consultants; My profile / Messages / Job
// board / Academy / Daily Tools / Business Hub / Community for secretaries)
// in place of the public marketing nav, once a session is found. Pages with
// no session keep the marketing nav-links already in their markup — this
// script does nothing. Editing a profile happens via the "Edit profile"
// button on profile.html itself, not a standalone nav entry.

const CONSULTANT_NAV_LINKS = [
  { label: 'My profile', href: 'profile.html', key: 'profile' },
  { label: 'Messages', href: 'messages.html', key: 'messages' },
  { label: 'Search', href: 'search-secretaries.html', key: 'search' },
  { label: 'Post a job', href: 'post-job.html', key: 'post-job' },
  { label: 'My postings', href: 'my-postings.html', key: 'my-postings' },
  { label: 'Refer & earn', href: 'referrals.html', key: 'referrals' },
  { label: 'Ideas', href: 'ideas.html', key: 'ideas' },
  { label: 'Support', href: 'support.html', key: 'support' },
];

const SECRETARY_NAV_LINKS = [
  { label: 'My profile', href: 'profile.html', key: 'profile' },
  { label: 'Messages', href: 'messages.html', key: 'messages' },
  { label: 'Job board', href: 'job-board.html', key: 'job-board' },
  { label: 'Academy', href: 'academy.html', key: 'academy' },
  { label: 'Daily Tools', href: 'daily-tools.html', key: 'daily-tools' },
  { label: 'Task Tracker', href: 'task-tracker.html', key: 'task-tracker' },
  { label: 'Business Hub', href: 'business-hub.html', key: 'business-hub' },
  { label: 'Community', href: 'community.html', key: 'community' },
  { label: 'Refer & earn', href: 'referrals.html', key: 'referrals' },
  { label: 'Ideas', href: 'ideas.html', key: 'ideas' },
  { label: 'Support', href: 'support.html', key: 'support' },
];

const ADMIN_NAV_LINKS = [
  { label: 'Admin', href: 'admin.html', key: 'admin' },
  { label: 'Search', href: 'search-secretaries.html', key: 'search' },
  { label: 'Job board', href: 'job-board.html', key: 'job-board' },
  { label: 'Academy', href: 'academy.html', key: 'academy' },
  { label: 'Daily Tools', href: 'daily-tools.html', key: 'daily-tools' },
  { label: 'Task Tracker', href: 'task-tracker.html', key: 'task-tracker' },
  { label: 'Business Hub', href: 'business-hub.html', key: 'business-hub' },
  { label: 'Community', href: 'community.html', key: 'community' },
  { label: 'Ideas', href: 'ideas.html', key: 'ideas' },
  { label: 'Support', href: 'admin.html#support', key: 'support' },
];

const ADMIN_ALLOWLIST = [
  'admin.html', 'admin-accept-invite.html', 'login.html',
  'view-secretary.html', 'search-secretaries.html', 'view-group.html', 'group-thread.html',
  'specialist-course.html', 'specialist-course-exercises.html',
  'specialist-course-quiz.html', 'specialist-course-flashcards.html', 'specialist-course-printables.html',
  'support.html', 'job-board.html', 'academy.html', 'specialist-courses.html',
  'daily-tools.html', 'task-tracker.html', 'business-hub.html', 'community.html', 'community-post.html', 'ideas.html',
  'messages.html', 'thread.html', 'post-job.html', 'my-postings.html', 'referrals.html',
];

function buildAccountNavHtml(role, activeKey) {
  const links = role === 'admin' ? ADMIN_NAV_LINKS : (role === 'consultant' ? CONSULTANT_NAV_LINKS : SECRETARY_NAV_LINKS);
  return links.map(l => {
    const active = l.key === activeKey ? ' class="active"' : '';
    const badge = l.key === 'messages'
      ? '<span id="account-nav-unread" style="display:none; min-width:16px; height:16px; padding:0 4px; margin-left:6px; border-radius:999px; background:#C1393C; color:#fff; font-size:10.5px; font-weight:700; line-height:16px; text-align:center; vertical-align:middle;"></span>'
      : '';
    return `<a href="${l.href}"${active}>${l.label}${badge}</a>`;
  }).join('');
}

// Call with the <nav class="nav-links"> element, the page's nav key
// ('profile', 'messages', 'search', 'post-job', 'my-postings', 'job-board',
// or null if this page isn't one of those — edit-profile.html has no nav
// entry of its own, so it passes a key that matches nothing), and the
// Supabase client. Returns { session, profile } if logged in, otherwise
// null — callers can reuse this instead of re-fetching session/profile
// themselves.
// Hide the nav immediately to prevent the logged-out links flashing before
// the session check completes. Revealed in renderAccountNav once the correct
// links (or the original public links) are ready to show.
(function () {
  const nav = document.querySelector('nav.nav-links');
  if (nav) nav.style.visibility = 'hidden';
})();

async function renderAccountNav(navEl, supabaseClient, activeKey) {
  const reveal = () => { navEl.style.visibility = ''; };

  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) { reveal(); return null; }

  const { data: profile } = await supabaseClient
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();
  if (!profile) { reveal(); return null; }

  if (profile.role === 'admin') {
    const currentPage = window.location.pathname.split('/').pop() || '';
    if (!ADMIN_ALLOWLIST.includes(currentPage)) {
      window.location.replace('admin.html');
      return { session, profile, isAdmin: true, redirecting: true };
    }
  }

  const { data: isAdmin } = await supabaseClient.rpc('is_admin');
  navEl.innerHTML = buildAccountNavHtml(profile.role, activeKey);
  reveal();

  let unread = null;
  if (profile.role !== 'admin') {
    const filterColumn = profile.role === 'consultant' ? 'consultant_id' : 'secretary_id';
    const { data } = await supabaseClient
      .from('messages')
      .select('id')
      .eq(filterColumn, session.user.id)
      .neq('sender_id', session.user.id)
      .is('read_at', null);
    unread = data || [];

    // Group threads only ever have two participants — the consultant and
    // whichever secretary currently admins the group — so consultants
    // filter by consultant_id directly, while secretaries only see group
    // unreads for groups they currently admin (non-admin members don't
    // participate in group threads at all).
    let groupUnread;
    if (profile.role === 'consultant') {
      const { data: gu } = await supabaseClient
        .from('group_messages')
        .select('id')
        .eq('consultant_id', session.user.id)
        .neq('sender_id', session.user.id)
        .is('read_at', null);
      groupUnread = gu;
    } else {
      const { data: gu } = await supabaseClient
        .from('group_messages')
        .select('id, groups!inner(admin_id)')
        .eq('groups.admin_id', session.user.id)
        .neq('sender_id', session.user.id)
        .is('read_at', null);
      groupUnread = gu;
    }
    unread = unread.concat(groupUnread || []);
  }

  if (unread && unread.length > 0) {
    const badge = navEl.querySelector('#account-nav-unread');
    if (badge) {
      badge.textContent = unread.length > 9 ? '9+' : String(unread.length);
      badge.style.display = 'inline-block';
    }
  }

  await supabaseClient.from('profiles').update({ last_active_at: new Date().toISOString() }).eq('id', session.user.id);

  return { session, profile, isAdmin: !!isAdmin };
}

// Shared "last active" formatter for search results / profile views. Buckets
// into four tiers rather than exact relative time.
function formatLastActive(iso) {
  if (!iso) return null;
  const diffMs = Date.now() - new Date(iso).getTime();
  const hours = diffMs / (60 * 60 * 1000);
  if (hours < 24) return 'Active in the last 24 hours';
  if (hours < 24 * 7) return 'Active in the last week';
  if (hours < 24 * 30) return 'Active in the last month';
  return 'Active over a month ago';
}

// Shared HTML-escaping helper for free-text fields (bios, messages, etc.)
// rendered via innerHTML.
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Formats a secretary_profiles row's rate fields into a display string, or
// null if no rate is set.
function formatSecretaryRate(sec) {
  let base = null;
  if (sec.rate_type === 'percentage') {
    base = sec.percentage_rate != null ? `${sec.percentage_rate}% of consultant's income` : null;
  } else if (sec.rate_type === 'day') {
    base = sec.day_rate != null ? `£${sec.day_rate}/day` : null;
  } else {
    base = sec.hourly_rate != null ? `£${sec.hourly_rate}/hour` : null;
  }
  if (!base) return null;
  return sec.rate_negotiable ? `${base} (negotiable)` : base;
}

// Same formatting as formatSecretaryRate, for a groups row (one rate set by
// the admin for the whole group, rather than per-member rates).
function formatGroupRate(group) {
  return formatSecretaryRate(group);
}

// Builds the "Skills-tested" card — a gold seal badge plus one stat row per
// verified credential (typing speed, terminology quiz, each verified
// system, each specialist course). Returns '' if nothing is verified, so
// callers can skip rendering the card entirely (same behavior as the old
// compact pill it replaces).
function renderVerifiedSkillsCard(sec, passedSystems, passedCourses) {
  const rows = [];

  if (sec.typing_wpm_verified != null) {
    const suffix = sec.typing_accuracy_verified != null ? `— ${sec.typing_accuracy_verified}% accuracy` : '';
    rows.push({ label: 'Typing speed', value: `${sec.typing_wpm_verified} wpm`, suffix });
  }
  if (sec.terminology_quiz_passed && sec.terminology_quiz_score != null) {
    rows.push({ label: 'Terminology', value: `${sec.terminology_quiz_score}%`, suffix: '— passed' });
  }
  (passedSystems || []).forEach(r => {
    const name = (SYSTEM_SKILLS[r.system_slug] && SYSTEM_SKILLS[r.system_slug].name) || r.system_slug;
    rows.push({ label: 'System', value: name, suffix: r.quiz_score != null ? `— ${r.quiz_score}%` : '' });
  });
  (passedCourses || []).forEach(r => {
    const course = SPECIALIST_COURSES[r.course_slug];
    if (!course) return;
    rows.push({ label: 'Specialist', value: course.title, suffix: r.quiz_score != null ? `— ${r.quiz_score}%` : '' });
  });

  if (rows.length === 0) return '';

  const rowsHtml = rows.map(r => `
    <div class="skills-stat-row">
      <div class="skills-stat-label">${escapeHtml(r.label)}</div>
      <div class="skills-stat-value">${escapeHtml(r.value)} <span class="skills-stat-suffix">${escapeHtml(r.suffix)}</span></div>
    </div>
  `).join('');

  return `
    <div class="card skills-verified-card">
      <div class="skills-verified-head">
        <div class="verify-ring">${verifiedSealSVG(64)}</div>
        <div>
          <div class="skills-eyebrow">Skills-tested</div>
          <p class="skills-tagline">Tested directly on the platform — no stored documents, just measured skill.</p>
        </div>
      </div>
      <div class="skills-stat-list">${rowsHtml}</div>
    </div>
  `;
}

// Builds the availability badge HTML for a secretary_profiles row, reflecting
// the specific "Available now" / "Available within X" / "No availability"
// state rather than a flat available/not-available boolean.
function availabilityBadgeHTML(sec) {
  const start = sec.availability_start;
  if (start === 'Available now') return '<span class="result-badge">Available now</span>';
  if (start === 'No availability') return '<span class="result-badge unavailable">No availability</span>';
  if (start && start.startsWith('Available within')) return `<span class="result-badge soon">${escapeHtml(start)}</span>`;
  return sec.available
    ? '<span class="result-badge">Available now</span>'
    : '<span class="result-badge unavailable">Not available</span>';
}

// True when a secretary_profiles row should show the grey "unavailable"-style
// badge (No availability, or legacy data with no availability_start and
// available === false). Secretaries with "Available within X" are not
// considered unavailable — they're just not available immediately.
function isSecretaryUnavailable(sec) {
  const start = sec.availability_start;
  if (start === 'No availability') return true;
  if (start === 'Available now' || (start && start.startsWith('Available within'))) return false;
  return sec.available === false;
}

// Shows a confirmation modal warning the consultant that this secretary is
// currently set as not available, before letting them proceed to message or
// pay to unlock contact. Calls proceedFn only if the consultant confirms.
// If the secretary isn't flagged unavailable, proceedFn runs immediately.
function confirmIfUnavailable(sec, proceedFn) {
  if (!isSecretaryUnavailable(sec)) { proceedFn(); return; }

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed; inset:0; background:rgba(46,63,84,0.55); display:flex; align-items:center; justify-content:center; z-index:9999; padding:20px;';
  overlay.innerHTML = `
    <div style="background:#F7F4ED; border-radius:14px; padding:28px; max-width:380px; width:100%; font-family:'Special Elite', cursive; box-shadow:0 20px 60px rgba(0,0,0,0.25);">
      <h3 style="font-family:'Fraunces', serif; font-size:19px; margin:0 0 10px; color:#2E3F54;">This secretary is set as not available</h3>
      <p style="font-size:14px; color:#5C6470; line-height:1.55; margin:0 0 22px;">They've marked their profile as not currently taking on new consultants. Are you sure you want to continue?</p>
      <div style="display:flex; gap:10px; justify-content:flex-end;">
        <button type="button" id="avail-confirm-cancel" style="padding:10px 16px; border-radius:8px; border:1px solid rgba(46,63,84,0.15); background:#fff; color:#2E3F54; font-size:13.5px; cursor:pointer;">Cancel</button>
        <button type="button" id="avail-confirm-continue" style="padding:10px 16px; border-radius:8px; border:none; background:#2E3F54; color:#F7F4ED; font-size:13.5px; cursor:pointer; font-weight:600;">Continue anyway</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  const cleanup = () => overlay.remove();
  overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(); });
  overlay.querySelector('#avail-confirm-cancel').addEventListener('click', cleanup);
  overlay.querySelector('#avail-confirm-continue').addEventListener('click', () => { cleanup(); proceedFn(); });
}

// Checks how many times a profile has attempted a given proficiency quiz
// (terminology, or a specific system's skills quiz) in the last 24 hours.
// Returns { allowed, resetAt } — resetAt is only set when allowed is false.
async function checkQuizAttemptLimit(supabaseClient, profileId, quizKey) {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { data } = await supabaseClient
    .from('proficiency_quiz_attempts')
    .select('created_at')
    .eq('profile_id', profileId)
    .eq('quiz_key', quizKey)
    .gte('created_at', since)
    .order('created_at', { ascending: true })
    .limit(1);

  const attempts = data || [];
  if (attempts.length === 0) return { allowed: true };
  return { allowed: false, resetAt: new Date(new Date(attempts[0].created_at).getTime() + 24 * 60 * 60 * 1000) };
}

async function recordQuizAttempt(supabaseClient, profileId, quizKey) {
  await supabaseClient.from('proficiency_quiz_attempts').insert({ profile_id: profileId, quiz_key: quizKey });
}

// Fetches ratings *received* by a profile (i.e. given by the other party in
// each pairing, not ratings this profile gave out) and returns the average
// plus count, or null if they have none yet.
async function fetchAverageRating(supabaseClient, profileId) {
  const { data } = await supabaseClient
    .from('ratings')
    .select('rating, rater_id')
    .or(`consultant_id.eq.${profileId},secretary_id.eq.${profileId}`);

  const received = (data || []).filter(r => r.rater_id !== profileId);
  if (received.length === 0) return null;

  const avg = received.reduce((sum, r) => sum + r.rating, 0) / received.length;
  return { avg, count: received.length };
}

// Renders a compact "★ 4.5 (3)" style string for the rating helper above.
function formatRating(ratingResult) {
  if (!ratingResult) return null;
  return `★ ${ratingResult.avg.toFixed(1)} (${ratingResult.count})`;
}
