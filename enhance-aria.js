/* Modelo ARIA — JS específico de página: acordeón FAQ.
   (El scroll-spy del sticky rail lo maneja enhance4.js sobre .aria2;
    el count-up y el reveal los maneja app.js.) */
(function () {
  'use strict';
  var REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = [].slice.call(document.querySelectorAll('.faq__item'));
  if (!items.length) return;

  function close(item) {
    var panel = item.querySelector('.faq__a');
    var btn = item.querySelector('.faq__q');
    item.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    if (REDUCE) { panel.style.height = '0px'; return; }
    panel.style.height = panel.scrollHeight + 'px';
    requestAnimationFrame(function () { panel.style.height = '0px'; });
  }

  function open(item) {
    var panel = item.querySelector('.faq__a');
    var btn = item.querySelector('.faq__q');
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    if (REDUCE) { panel.style.height = 'auto'; return; }
    panel.style.height = panel.scrollHeight + 'px';
    var done = function (e) {
      if (e.propertyName !== 'height') return;
      if (item.classList.contains('open')) panel.style.height = 'auto';
      panel.removeEventListener('transitionend', done);
    };
    panel.addEventListener('transitionend', done);
  }

  items.forEach(function (item) {
    var btn = item.querySelector('.faq__q');
    var panel = item.querySelector('.faq__a');
    // estado inicial: el primero abierto (marcado con .open en el HTML)
    if (item.classList.contains('open')) {
      btn.setAttribute('aria-expanded', 'true');
      panel.style.height = REDUCE ? 'auto' : panel.scrollHeight + 'px';
      if (!REDUCE) requestAnimationFrame(function () { panel.style.height = 'auto'; });
    } else {
      btn.setAttribute('aria-expanded', 'false');
      panel.style.height = '0px';
    }

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      // acordeón exclusivo: cierra los demás
      items.forEach(function (other) { if (other !== item && other.classList.contains('open')) close(other); });
      if (isOpen) close(item); else open(item);
    });
  });

  // reajusta altura del panel abierto al cambiar el viewport
  window.addEventListener('resize', function () {
    items.forEach(function (item) {
      if (item.classList.contains('open')) {
        var panel = item.querySelector('.faq__a');
        panel.style.height = 'auto';
      }
    });
  });
})();

/* Navegación de secciones (dot-nav): scroll-spy + salto suave + modo oscuro */
(function () {
  'use strict';
  var nav = document.querySelector('.section-nav');
  if (!nav) return;
  var REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var links = [].slice.call(nav.querySelectorAll('a'));
  var sections = [];
  links.forEach(function (a) {
    var id = (a.getAttribute('href') || '').replace('#', '');
    var s = document.getElementById(id);
    if (s) sections.push({ a: a, s: s });
  });
  if (!sections.length) return;

  // scroll-spy: la sección cuya mitad cruza el centro del viewport es la activa
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var target = e.target;
      links.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + target.id);
      });
      nav.classList.toggle('on-dark', target.classList.contains('bg-carbon'));
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
  sections.forEach(function (o) { io.observe(o.s); });

  // salto suave (respeta reduced-motion)
  links.forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var id = (a.getAttribute('href') || '').replace('#', '');
      var s = document.getElementById(id);
      if (!s) return;
      ev.preventDefault();
      var y = s.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: REDUCE ? 'auto' : 'smooth' });
    });
  });
})();
