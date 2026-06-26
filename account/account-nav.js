// Veyn: renders the role-aware account nav (My profile / Messages / Search /
// Post a job / My postings / Edit profile for consultants; My profile /
// Messages / Job board / Academy / Business Hub / Community / Edit profile
// for secretaries) in place of the public marketing nav, once a session is
// found. Pages with no session keep the marketing nav-links already in their
// markup — this script does nothing.

const CONSULTANT_NAV_LINKS = [
  { label: 'My profile', href: 'profile.html', key: 'profile' },
  { label: 'Messages', href: 'messages.html', key: 'messages' },
  { label: 'Search', href: 'search-secretaries.html', key: 'search' },
  { label: 'Post a job', href: 'post-job.html', key: 'post-job' },
  { label: 'My postings', href: 'my-postings.html', key: 'my-postings' },
  { label: 'Edit profile', href: 'edit-profile.html', key: 'edit-profile' },
];

const SECRETARY_NAV_LINKS = [
  { label: 'My profile', href: 'profile.html', key: 'profile' },
  { label: 'Messages', href: 'messages.html', key: 'messages' },
  { label: 'Job board', href: 'job-board.html', key: 'job-board' },
  { label: 'Academy', href: 'academy.html', key: 'academy' },
  { label: 'Business Hub', href: 'business-hub.html', key: 'business-hub' },
  { label: 'Community', href: 'community.html', key: 'community' },
  { label: 'Edit profile', href: 'edit-profile.html', key: 'edit-profile' },
];

function buildAccountNavHtml(role, activeKey, isAdmin) {
  const links = role === 'consultant' ? CONSULTANT_NAV_LINKS : SECRETARY_NAV_LINKS;
  const allLinks = isAdmin ? [...links, { label: 'Admin', href: 'admin.html', key: 'admin' }] : links;
  return allLinks.map(l => {
    const active = l.key === activeKey ? ' class="active"' : '';
    const badge = l.key === 'messages' ? '<span id="account-nav-unread"></span>' : '';
    return `<a href="${l.href}"${active}>${l.label}${badge}</a>`;
  }).join('');
}

// Call with the <nav class="nav-links"> element, the page's nav key
// ('profile', 'messages', 'search', 'post-job', 'my-postings', 'edit-profile',
// 'job-board', or null if this page isn't one of those), and the Supabase
// client. Returns { session, profile } if logged in, otherwise null —
// callers can reuse this instead of re-fetching session/profile themselves.
async function renderAccountNav(navEl, supabaseClient, activeKey) {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) return null;

  const { data: profile } = await supabaseClient
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();
  if (!profile) return null;

  const { data: isAdmin } = await supabaseClient.rpc('is_admin');
  navEl.innerHTML = buildAccountNavHtml(profile.role, activeKey, isAdmin);

  const filterColumn = profile.role === 'consultant' ? 'consultant_id' : 'secretary_id';
  const { data: unread } = await supabaseClient
    .from('messages')
    .select('id')
    .eq(filterColumn, session.user.id)
    .neq('sender_id', session.user.id)
    .is('read_at', null);

  if (unread && unread.length > 0) {
    const badge = navEl.querySelector('#account-nav-unread');
    if (badge) badge.textContent = ` (${unread.length})`;
  }

  await supabaseClient.from('profiles').update({ last_active_at: new Date().toISOString() }).eq('id', session.user.id);

  return { session, profile };
}

// Shared "last active" formatter for search results / profile views.
function formatLastActive(iso) {
  if (!iso) return null;
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 5) return 'Active now';
  if (mins < 60) return `Active ${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Active ${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `Active ${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 8) return `Active ${weeks}w ago`;
  return 'Active over 2 months ago';
}
