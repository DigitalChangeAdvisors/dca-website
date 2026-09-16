/* /nosotros v4 — wayfinding lateral (indicador de sección).
   Reutiliza el resto del motion del sistema (enhance4/enhance6).
   Construye un mini-nav de puntos desde una lista curada de anclas,
   resalta la sección activa, invierte sobre fondos oscuros y hace
   salto suave (respeta prefers-reduced-motion). */
(function () {
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Anclas curadas — no todas las secciones, solo las de orientación.
  const ITEMS = [
    { id: 'proposito',  label: 'Propósito' },
    { id: 'puente',     label: 'Uso → Impacto' },
    { id: 'la-firma',   label: 'La firma' },
    { id: 'liderazgo',  label: 'Liderazgo' },
    { id: 'metodo',     label: 'Método' },
    { id: 'principios', label: 'Principios' },
    { id: 'evidencia',  label: 'Evidencia' },
  ].filter(it => document.getElementById(it.id));

  if (ITEMS.length < 2) return;

  const nav = document.createElement('nav');
  nav.className = 'dotnav';
  nav.setAttribute('aria-label', 'Navegación de secciones');

  const btnById = new Map();
  ITEMS.forEach(it => {
    const b = document.createElement('button');
    b.className = 'dotnav__item';
    b.type = 'button';
    b.setAttribute('aria-label', 'Ir a ' + it.label);
    b.innerHTML = '<span class="dotnav__label">' + it.label + '</span><span class="dotnav__dot"></span>';
    b.addEventListener('click', () => {
      const el = document.getElementById(it.id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: REDUCE ? 'auto' : 'smooth' });
    });
    btnById.set(it.id, b);
    nav.appendChild(b);
  });
  document.body.appendChild(nav);

  // Sección activa
  const activeIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      btnById.forEach(b => { b.classList.remove('active'); b.removeAttribute('aria-current'); });
      const b = btnById.get(e.target.id);
      if (b) { b.classList.add('active'); b.setAttribute('aria-current', 'true'); }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ITEMS.forEach(it => activeIO.observe(document.getElementById(it.id)));

  // Inversión sobre fondos oscuros (teal / carbón)
  const darkSections = [...document.querySelectorAll('.bg-teal, .bg-carbon')];
  if (darkSections.length) {
    const darkIO = new IntersectionObserver((entries) => {
      let onDark = false;
      entries.forEach(e => { if (e.isIntersecting) onDark = true; });
      // recomputar contra todas (una entrada puede salir mientras otra entra)
      const anyDark = darkSections.some(s => {
        const r = s.getBoundingClientRect();
        const mid = window.innerHeight * 0.5;
        return r.top <= mid && r.bottom >= mid;
      });
      nav.classList.toggle('on-dark', anyDark);
    }, { rootMargin: '-50% 0px -50% 0px' });
    darkSections.forEach(s => darkIO.observe(s));
  }
})();
