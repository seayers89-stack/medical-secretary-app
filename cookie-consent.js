(function () {
  var STORAGE_KEY = 'veyn_cookie_consent';
  if (localStorage.getItem(STORAGE_KEY)) return;

  var style = document.createElement('style');
  style.textContent = [
    '#veyn-cookie-banner{',
      'position:fixed;bottom:0;left:0;right:0;z-index:9999;',
      'background:#1B2430;color:rgba(247,244,237,0.9);',
      'padding:18px 32px;',
      'display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;',
      'box-shadow:0 -4px 24px rgba(27,36,48,0.18);',
      'font-family:"Inter",sans-serif;font-size:14px;line-height:1.5;',
      'transform:translateY(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);',
    '}',
    '#veyn-cookie-banner.visible{transform:translateY(0);}',
    '#veyn-cookie-banner p{margin:0;flex:1;min-width:220px;color:rgba(247,244,237,0.8);}',
    '#veyn-cookie-banner a{color:#B8924A;text-decoration:underline;}',
    '#veyn-cookie-banner a:hover{color:#d4a95e;}',
    '.veyn-cookie-btns{display:flex;gap:10px;flex-shrink:0;}',
    '.veyn-cookie-btn{',
      'font-family:"Inter",sans-serif;font-weight:600;font-size:13.5px;',
      'padding:9px 20px;border-radius:7px;cursor:pointer;border:none;white-space:nowrap;',
      'transition:opacity .15s ease;',
    '}',
    '.veyn-cookie-btn:hover{opacity:.85;}',
    '.veyn-cookie-btn.accept{background:#B8924A;color:#1B2430;}',
    '.veyn-cookie-btn.decline{background:transparent;color:rgba(247,244,237,0.7);border:1.5px solid rgba(247,244,237,0.2);}',
  ].join('');
  document.head.appendChild(style);

  var banner = document.createElement('div');
  banner.id = 'veyn-cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML = [
    '<p>',
      'We use essential cookies to keep you logged in and remember your preferences. ',
      'No tracking or advertising cookies. ',
      '<a href="/veyn-cookie-policy.html">Cookie policy</a>',
    '</p>',
    '<div class="veyn-cookie-btns">',
      '<button class="veyn-cookie-btn decline" id="veyn-cookie-decline">Decline non-essential</button>',
      '<button class="veyn-cookie-btn accept" id="veyn-cookie-accept">Accept</button>',
    '</div>',
  ].join('');
  document.body.appendChild(banner);

  requestAnimationFrame(function () {
    requestAnimationFrame(function () { banner.classList.add('visible'); });
  });

  function dismiss(value) {
    localStorage.setItem(STORAGE_KEY, value);
    banner.style.transition = 'transform .3s cubic-bezier(.4,0,.2,1)';
    banner.classList.remove('visible');
    banner.addEventListener('transitionend', function () { banner.remove(); }, { once: true });
  }

  document.getElementById('veyn-cookie-accept').addEventListener('click', function () { dismiss('accepted'); });
  document.getElementById('veyn-cookie-decline').addEventListener('click', function () { dismiss('declined'); });
})();
