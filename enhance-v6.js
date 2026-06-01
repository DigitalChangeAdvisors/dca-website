/* Modelo ARIA v6 — motion contextual (solo lo carga modelo-aria-v6.html).
   Aislado por body.mra-v6 para no afectar versiones anteriores.
   Dot-nav contextual: aparece al dejar el hero, se retira en el footer. */
(function () {
  'use strict';
  if (!document.body.classList.contains('mra-v6')) return;

  var nav = document.querySelector('.section-nav');
  if (!nav) return;

  var hero = document.getElementById('top');
  var footer = document.querySelector('.footer');
  var heroOut = false, footerIn = false;

  function update() { nav.classList.toggle('visible', heroOut && !footerIn); }

  if (hero) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { heroOut = !e.isIntersecting; });
      update();
    }, { threshold: 0 }).observe(hero);
  } else {
    heroOut = true; update();
  }

  if (footer) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { footerIn = e.isIntersecting; });
      update();
    }, { threshold: 0.05 }).observe(footer);
  }
})();
