/* =============================================
   GetPoring Pre-Registration — main.js
   ============================================= */

// ── CONFIG ────────────────────────────────────
const MOCK_COUNT     = 32148;
const MILESTONES     = [20000, 50000, 100000, 150000, 200000];
const HERO_BUBBLES   = [
  "Pre-register me! 🐣",
  "I'll be your best companion! 💖",
  "Let's go on an adventure! ⚔️",
  "Feed me first! 🍽️",
  "I want to go to ROZ! 🎮"
];
const CHAR_PATHS = {
  idle:  "assets/char_shiddle_idle.gif",
  tap:   "assets/char_shiddle_tap.gif",
  happy: "assets/char_shiddle_happy.gif",
};

// ── STATE ─────────────────────────────────────
let state = {
  lang:       'en',
  strings:    {},
  isLoggedIn: false,
  hasPrereg:  false,
  rozPrereg:  false,
  count:      MOCK_COUNT,
};

// ── i18n ──────────────────────────────────────
async function loadLang(locale) {
  try {
    const res  = await fetch(`lang/${locale}.json`);
    const data = await res.json();
    state.strings = data;
    state.lang    = locale;
    applyStrings();
    document.getElementById('lang-code').textContent = locale.toUpperCase();
    document.documentElement.lang = locale;
  } catch (e) {
    console.warn('Lang load failed:', locale, e);
  }
}

function t(key) {
  return state.strings[key] || key;
}

function applyStrings() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (state.strings[key]) el.textContent = state.strings[key];
  });
}

// ── GNB language switcher ─────────────────────
document.getElementById('lang-select').addEventListener('change', e => {
  loadLang(e.target.value);
});

// ── AUTH ──────────────────────────────────────
const authModal      = document.getElementById('auth-modal');
const modalDemoLogin = document.getElementById('modal-demo-login');
const modalClose     = document.getElementById('modal-close');

function openAuthModal() {
  authModal.classList.remove('hidden');
  authModal.style.display = 'flex';
}
function closeAuthModal() {
  authModal.style.display = 'none';
  authModal.classList.add('hidden');
}

document.getElementById('gnb-login').addEventListener('click', openAuthModal);
document.getElementById('gnb-signup').addEventListener('click', openAuthModal);
document.getElementById('btn-login').addEventListener('click', openAuthModal);
document.getElementById('btn-signup').addEventListener('click', openAuthModal);
modalClose.addEventListener('click', closeAuthModal);
authModal.addEventListener('click', e => { if (e.target === authModal) closeAuthModal(); });

modalDemoLogin.addEventListener('click', () => {
  closeAuthModal();
  onLogin();
});

function onLogin() {
  state.isLoggedIn = true;
  showPreregState('loggedin');
  // update GNB buttons
  document.getElementById('gnb-login').textContent  = '👤 User';
  document.getElementById('gnb-signup').classList.add('hidden');
}

// ── PRE-REG STATES ────────────────────────────
function showPreregState(which) {
  ['loggedout', 'loggedin', 'done'].forEach(s => {
    const el = document.getElementById(`state-${s}`);
    el.classList.toggle('active', s === which);
  });
}

// agree checkbox enables CTA
const agreeCheck = document.getElementById('agree-check');
const btnPrereg  = document.getElementById('btn-prereg');
agreeCheck.addEventListener('change', () => {
  btnPrereg.disabled = !agreeCheck.checked;
});

// precautions accordion
document.getElementById('btn-precautions').addEventListener('click', () => {
  const box = document.getElementById('precautions-content');
  box.classList.toggle('hidden');
});

// submit
btnPrereg.addEventListener('click', () => {
  if (!agreeCheck.checked) return;
  state.hasPrereg = true;
  state.count    += 1;
  showPreregState('done');
  updateCounter(state.count);
  updateRozStatus();
  scrollRevealAll();
  // animate milestone bar again
  animateGauge(state.count);
});

// share button
document.getElementById('btn-share').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'GetPoring Pre-Registration',
      text:  'I just pre-registered for GetPoring! Join me!',
      url:   window.location.href,
    });
  } else {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied!'));
  }
});

// ── HERO CHARACTER CLICK ──────────────────────
const heroChar = document.getElementById('hero-char');
let charTimer;
heroChar.addEventListener('click', () => {
  clearTimeout(charTimer);
  heroChar.src = CHAR_PATHS.tap;
  charTimer = setTimeout(() => { heroChar.src = CHAR_PATHS.idle; }, 1400);
});

// random bubble text rotation
const bubble = document.getElementById('hero-bubble');
function rotateBubble() {
  const arr = state.strings['hero.bubble'] || HERO_BUBBLES;
  const txt = Array.isArray(arr) ? arr[Math.floor(Math.random() * arr.length)] : HERO_BUBBLES[0];
  bubble.style.opacity = '0';
  setTimeout(() => { bubble.textContent = txt; bubble.style.opacity = '1'; }, 300);
}
bubble.style.transition = 'opacity 0.3s';
setInterval(rotateBubble, 4000);

// ── COUNTER ───────────────────────────────────
function countUp(el, target, duration = 1800) {
  const start = performance.now();
  const step = ts => {
    const p   = Math.min((ts - start) / duration, 1);
    const val = Math.round(p * target);
    el.textContent = val.toLocaleString();
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(step);
}
function updateCounter(n) {
  const heroCountEl      = document.getElementById('hero-count');
  const milestoneCountEl = document.getElementById('milestone-count');
  heroCountEl.textContent      = n.toLocaleString();
  milestoneCountEl.textContent = n.toLocaleString();
}

// ── GAUGE ─────────────────────────────────────
function animateGauge(current) {
  const max   = MILESTONES[MILESTONES.length - 1];
  const pct   = Math.min((current / max) * 100, 100).toFixed(2);
  document.getElementById('gauge-fill').style.width = pct + '%';
}

// ── ROZ STATUS ────────────────────────────────
function updateRozStatus() {
  const gpBadge  = document.getElementById('roz-gp-badge');
  const rozBadge = document.getElementById('roz-roz-badge');
  const rwBadge  = document.getElementById('roz-reward-badge');
  const clear    = document.getElementById('roz-mission-clear');

  if (state.hasPrereg) {
    gpBadge.textContent = '✅ Done';
    gpBadge.className   = 'roz-status-badge done';
  }
  if (state.rozPrereg) {
    rozBadge.textContent = '✅ Done';
    rozBadge.className   = 'roz-status-badge done';
  }
  if (state.hasPrereg && state.rozPrereg) {
    rwBadge.textContent = '🎁 Unlocked';
    rwBadge.className   = 'roz-status-badge done';
    clear.classList.add('show');
  }
}

// ── COMPENDIUM TABS ───────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
    bindCharCells();
  });
});

// char cell hover — swap to happy gif (event delegation)
function bindCharCells() {
  document.querySelectorAll('.char-cell:not(.locked)').forEach(cell => {
    if (cell._bound) return;
    cell._bound = true;
    const img   = cell.querySelector('.char-gif');
    const idle  = cell.dataset.idle;
    const happy = cell.dataset.happy;
    let hoverTimer;
    cell.addEventListener('mouseenter', () => {
      if (img && happy) { clearTimeout(hoverTimer); img.src = happy; }
    });
    cell.addEventListener('mouseleave', () => {
      if (img && idle) { hoverTimer = setTimeout(() => { img.src = idle; }, 800); }
    });
    cell.addEventListener('touchstart', () => {
      if (img && happy) { img.src = happy; setTimeout(() => { img.src = idle; }, 1500); }
    }, { passive: true });
  });
}

// ── SCROLL REVEAL ─────────────────────────────
function scrollRevealAll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// gauge triggered on scroll into view
function observeGauge() {
  const wrap = document.querySelector('.gauge-wrap');
  if (!wrap) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      countUp(document.getElementById('hero-count'),      state.count);
      countUp(document.getElementById('milestone-count'), state.count);
      animateGauge(state.count);
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(wrap);
}

// ── INIT ──────────────────────────────────────
async function init() {
  await loadLang('en');
  scrollRevealAll();
  observeGauge();
  bindCharCells();
}

init();
