// Veyn: site-wide mobile nav fix. Every page hides .nav-links below 760px
// (via each page's own <style> block) with no way to get it back — this
// injects a hamburger toggle and the CSS needed to reveal the menu as a
// dropdown, without touching each page's existing styles.
(function () {
  function init() {
    const navLinks = document.querySelector('.nav-links');
    const navLeft = document.querySelector('.nav-left');
    if (!navLinks || !navLeft || document.getElementById('mobile-nav-toggle')) return;

    const style = document.createElement('style');
    style.textContent = `
      #mobile-nav-toggle{
        display:none; background:none; border:none; cursor:pointer; padding:6px;
        margin-left:8px; flex-shrink:0;
      }
      #mobile-nav-toggle svg{ display:block; }
      @media (max-width:760px){
        #mobile-nav-toggle{ display:inline-flex; align-items:center; }
        .nav-links.mobile-open{
          display:flex !important; flex-direction:column; gap:4px !important;
          position:absolute; top:100%; left:0; right:0; background:var(--paper, #F7F4ED);
          border-bottom:1px solid rgba(46,63,84,0.08); padding:12px 32px 16px;
          box-shadow:0 8px 16px -8px rgba(46,63,84,0.15);
        }
        .nav-links.mobile-open a{ padding:10px 0; }
        .nav{ position:relative; }
      }
    `;
    document.head.appendChild(style);

    const toggle = document.createElement('button');
    toggle.id = 'mobile-nav-toggle';
    toggle.setAttribute('aria-label', 'Toggle menu');
    toggle.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#2E3F54" stroke-width="2" stroke-linecap="round"/></svg>`;
    navLeft.appendChild(toggle);

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Delegated, not per-anchor: account-nav.js replaces navLinks' innerHTML
    // after login, which would silently drop per-element listeners.
    navLinks.addEventListener('click', (e) => {
      if (e.target.closest('a')) navLinks.classList.remove('mobile-open');
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) navLinks.classList.remove('mobile-open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
