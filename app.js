/* ReturnAI — interactions: nav scroll, reveal, count-up, mobile menu */

const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Nav scroll blur ---
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// --- Mobile menu ---
const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.mobile-menu');
if (burger) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// --- Count-up ---
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = (el.dataset.count.split('.')[1] || '').length;
  if (REDUCE_MOTION) { el.textContent = el.dataset.count; return; }
  const dur = 1700;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    const val = target * eased;
    el.textContent = decimals ? val.toFixed(decimals) : Math.round(val).toString();
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = el.dataset.count;
  }
  requestAnimationFrame(tick);
}

// --- IntersectionObserver: reveal + rules + counters ---
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    el.querySelectorAll && el.querySelectorAll('[data-count]').forEach(c => {
      if (!c.dataset.done) { c.dataset.done = '1'; countUp(c); }
    });
    if (el.matches('[data-count]') && !el.dataset.done) { el.dataset.done = '1'; countUp(el); }
    io.unobserve(el);
  });
}, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('[data-reveal], .rule, [data-count]').forEach(el => io.observe(el));

// Stagger children that share a parent marked data-stagger
document.querySelectorAll('[data-stagger]').forEach(parent => {
  [...parent.children].forEach((child, i) => {
    if (child.hasAttribute('data-reveal')) child.style.transitionDelay = (i * 0.1) + 's';
  });
});

// --- Panel lateral: Extracto del libro (mismo sistema que /novela-returnai) ---
(function () {
  const panel = document.getElementById('preludio-panel');
  const btn = document.getElementById('btn-extracto');
  if (!panel || !btn) return;

  const closeBtn = panel.querySelector('.preludio-panel__close');
  const backdrop = panel.querySelector('.preludio-panel__backdrop');
  const drawer = panel.querySelector('.preludio-panel__drawer');
  const focusable = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const els = [...panel.querySelectorAll(focusable)].filter(el => !el.disabled);
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function openPanel(e) {
    e.preventDefault();
    panel.hidden = false;
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add('is-open')));
    drawer.scrollTop = 0;
    setTimeout(() => closeBtn.focus(), 420);
    panel.addEventListener('keydown', trapFocus);
  }

  function closePanel() {
    panel.classList.remove('is-open');
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded', 'false');
    panel.removeEventListener('keydown', trapFocus);
    btn.focus();
    drawer.addEventListener('transitionend', function hide() {
      panel.hidden = true;
      drawer.removeEventListener('transitionend', hide);
    });
  }

  btn.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !panel.hidden) closePanel();
  });
})();
