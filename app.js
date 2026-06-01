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
