/* ReturnAI v4 — Bridge auto-play con IntersectionObserver.
   La animación se dispara automáticamente cuando la sección entra
   al viewport (threshold 25%). No depende del scroll manual.
   Degrada a estático con reduced-motion. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var scrolly = document.querySelector('.rai4-scrolly');
  if (!scrolly) return;

  var path = scrolly.querySelector('#bridgePath');
  var dot = scrolly.querySelector('#bridgeDot');
  var kpi = scrolly.querySelector('#bridgeKpi');
  var beats = [].slice.call(scrolly.querySelectorAll('.rai4-beat'));
  if (!path) return;

  var len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;

  /* Bandas de cada beat sobre el progreso [0..1].
     Beat 03 peak en 0.87 → opacidad 1 al llegar a p=1. */
  var BANDS = [0.20, 0.52, 0.87];

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
    if (kpi) { kpi.textContent = '$' + Math.round(891 * p) + 'K'; }
    setBeats(p);
  }

  /* Reduced motion: estado completo estático inmediato */
  if (reduce) {
    draw(1);
    beats.forEach(function (b) { b.style.opacity = 1; b.style.transform = 'none'; });
    return;
  }

  /* Auto-play: 4500ms, disparo único al entrar al viewport */
  var DURATION = 4500;
  var startTime = null;
  var playing = false;

  function animate(now) {
    if (!startTime) startTime = now;
    var p = Math.min(1, (now - startTime) / DURATION);
    draw(p);
    if (p < 1) {
      requestAnimationFrame(animate);
    } else {
      playing = false;
      /* Estado final: beat 03 al 100%, puente completo */
      beats.forEach(function (b, i) {
        b.style.opacity = i === 2 ? 1 : 0;
        b.style.transform = 'none';
      });
    }
  }

  function startPlay() {
    if (playing) return;
    playing = true;
    startTime = null;
    draw(0);
    requestAnimationFrame(animate);
  }

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      startPlay();
      observer.disconnect();
    }
  }, { threshold: 0.25 });

  observer.observe(scrolly);
  draw(0);
})();
