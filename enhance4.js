/* v4 — coreografía de scroll: progreso, nav activa, diagrama-puente, ARIA sticky stepper, parallax */

// ---------- Barra de progreso de lectura ----------
const progress = document.querySelector('.scroll-progress');

// ---------- Nav: resaltado de sección activa ----------
const navLinks = [...document.querySelectorAll('.nav__links a')];
const linkMap = new Map();
navLinks.forEach(a => {
  const id = a.getAttribute('href');
  if (id && id.startsWith('#') && id.length > 1) linkMap.set(id.slice(1), a);
});
const navIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && linkMap.has(e.target.id)) {
      navLinks.forEach(a => a.classList.remove('active'));
      linkMap.get(e.target.id).classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
linkMap.forEach((_, id) => { const el = document.getElementById(id); if (el) navIO.observe(el); });

// ---------- Diagrama-puente: dibujo + KPI sincronizados con scroll ----------
const bridge = document.querySelector('.bridge__viz');
let bPath, bTrack, bDot, bKpi, bLen;
if (bridge) {
  bPath = bridge.querySelector('#bridgePath');
  bDot = bridge.querySelector('#bridgeDot');
  bKpi = bridge.querySelector('#bridgeKpi');
  bLen = bPath.getTotalLength();
  bPath.style.strokeDasharray = bLen;
  bPath.style.strokeDashoffset = bLen;
}
function updateBridge() {
  if (!bridge) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    bPath.style.strokeDashoffset = 0;
    const end = bPath.getPointAtLength(bLen);
    bDot.setAttribute('cx', end.x); bDot.setAttribute('cy', end.y); bDot.style.opacity = 1;
    bKpi.textContent = '67%';
    return;
  }
  const r = bridge.getBoundingClientRect();
  const vh = window.innerHeight;
  // progreso: arranca cuando el viz entra al 85% del viewport, termina cuando su centro pasa el 45%
  const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
  bPath.style.strokeDashoffset = bLen * (1 - p);
  const pt = bPath.getPointAtLength(bLen * p);
  bDot.setAttribute('cx', pt.x);
  bDot.setAttribute('cy', pt.y);
  bDot.style.opacity = p > 0.01 ? 1 : 0;
  const val = Math.round(19 + (67 - 19) * p);
  bKpi.textContent = val + '%';
}

// ---------- ARIA sticky stepper ----------
const steps = [...document.querySelectorAll('.aria2__step')];
const railItems = [...document.querySelectorAll('.aria2__stepper li')];
function updateStepper() {
  if (!steps.length) return;
  const threshold = window.innerHeight * 0.5;
  let active = 0;
  steps.forEach((s, i) => { if (s.getBoundingClientRect().top < threshold) active = i; });
  steps.forEach((s, i) => s.classList.toggle('active', i === active));
  railItems.forEach((li, i) => li.classList.toggle('active', i === active));
}
updateStepper();

// ---------- Parallax banda fotográfica ----------
const para = document.querySelector('.fullbleed__frame image-slot');
const paraFrame = document.querySelector('.fullbleed__frame');

// ---------- Scroll loop (rAF) ----------
let ticking = false;
function onScrollFx() {
  if (progress) {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }
  updateStepper();
  updateBridge();
  if (para && paraFrame && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const r = paraFrame.getBoundingClientRect();
    if (r.bottom > 0 && r.top < window.innerHeight) {
      // recorrido de 80px de holgura (el slot mide 80px más que el marco)
      const p = Math.max(0, Math.min(1, (window.innerHeight - r.top) / (window.innerHeight + r.height)));
      para.style.transform = 'translateY(' + (-80 * p) + 'px)';
    }
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(onScrollFx); }
}, { passive: true });
window.addEventListener('resize', () => { if (bridge) bLen = bPath.getTotalLength(); onScrollFx(); });
onScrollFx();
