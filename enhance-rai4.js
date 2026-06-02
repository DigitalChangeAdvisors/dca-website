/* ReturnAI v4 — Bridge en scrollytelling pinneado.
   Controla #bridgePath / #bridgeDot / #bridgeKpi y los "beats"
   a partir del progreso de scroll de la escena .rai4-scrolly.
   enhance4.js NO toca este puente (no usa la clase .bridge__viz).
   Degrada a estático con reduced-motion, móvil o sin pin. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var scrolly = document.querySelector('.rai4-scrolly');
  if (!scrolly) return;

  var inner = scrolly.querySelector('.rai4-scrolly__inner');
  var pin = scrolly.querySelector('.rai4-scrolly__pin');
  var path = scrolly.querySelector('#bridgePath');
  var dot = scrolly.querySelector('#bridgeDot');
  var kpi = scrolly.querySelector('#bridgeKpi');
  var beats = [].slice.call(scrolly.querySelectorAll('.rai4-beat'));
  if (!path || !inner || !pin) return;

  var len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;

  // Bandas de cada beat sobre el progreso [0..1]; la opacidad sigue el scroll
  // de forma continua (cross-fade fluido y garantizado, sin depender de CSS).
  var BANDS = [0.16, 0.48, 0.80];
  function setBeats(p) {
    beats.forEach(function (b, i) {
      var d = Math.abs(p - BANDS[i]);
      var o = d < 0.15 ? 1 : (d < 0.27 ? (0.27 - d) / 0.12 : 0);
      o = Math.max(0, Math.min(1, o));
      b.style.opacity = o;
      b.style.transform = 'translateY(' + (10 * (1 - o)) + 'px)';
    });
  }

  function draw(p) {
    p = Math.max(0, Math.min(1, p));
    path.style.strokeDashoffset = len * (1 - p);
    try {
      var pt = path.getPointAtLength(len * p);
      dot.setAttribute('cx', pt.x);
      dot.setAttribute('cy', pt.y);
    } catch (e) {}
    dot.style.opacity = p > 0.01 ? 1 : 0;
    if (kpi) kpi.textContent = Math.round(19 + (67 - 19) * p) + '%';
    setBeats(p);
  }

  function pinned() {
    return getComputedStyle(pin).position === 'sticky' &&
      window.innerHeight >= 720 &&
      inner.offsetHeight > window.innerHeight * 1.2;
  }

  // Fallback estático: dibuja completo y muestra todos los beats.
  if (reduce || !pinned()) {
    draw(1);
    beats.forEach(function (b) { b.style.opacity = 1; b.style.transform = 'none'; });
    return;
  }

  var ticking = false;
  function update() {
    var r = inner.getBoundingClientRect();
    var total = r.height - window.innerHeight;
    var p = total > 0 ? (-r.top) / total : 0;
    draw(p);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', function () {
    if (reduce || !pinned()) { draw(1); beats.forEach(function (b) { b.style.opacity = 1; b.style.transform = 'none'; }); return; }
    len = path.getTotalLength();
    path.style.strokeDasharray = len;
    update();
  });

  draw(0);
  update();
})();
