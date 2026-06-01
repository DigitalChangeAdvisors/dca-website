/* v6 — motion expresivo: word-reveal, CTA magnético, íconos ARIA, onda de llegada del puente */
(function () {
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE_OBS = { threshold: 0.3, rootMargin: '0px 0px -8% 0px' };

  // ---------- Revelado de titulares por palabras ----------
  function splitWords(el) {
    const nodes = [];
    el.childNodes.forEach(node => {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach(tok => {
          if (tok === '') return;
          if (/^\s+$/.test(tok)) { nodes.push(document.createTextNode(tok)); return; }
          const w = document.createElement('span'); w.className = 'word';
          const i = document.createElement('span'); i.className = 'word__i'; i.textContent = tok;
          w.appendChild(i); nodes.push(w);
        });
      } else {
        nodes.push(node.cloneNode(true));
      }
    });
    el.textContent = '';
    nodes.forEach(n => el.appendChild(n));
    // stagger
    let k = 0;
    el.querySelectorAll('.word__i').forEach(i => { i.style.transitionDelay = (k * 0.05) + 's'; k++; });
  }

  const headings = document.querySelectorAll('.section-head h2, .finalcta h2, .aria2__rail h2');
  if (!REDUCE) {
    const wordIO = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); wordIO.unobserve(e.target); } });
    }, EASE_OBS);
    headings.forEach(h => {
      splitWords(h);
      h.setAttribute('data-anim', 'words');
      const p = h.closest('[data-reveal]');
      if (p) p.classList.add('rf');
      wordIO.observe(h);
    });
  }

  // ---------- CTA magnético (solo puntero fino) ----------
  if (!REDUCE && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.btn--lg').forEach(btn => {
      btn.addEventListener('mousemove', (ev) => {
        const r = btn.getBoundingClientRect();
        const mx = ev.clientX - (r.left + r.width / 2);
        const my = ev.clientY - (r.top + r.height / 2);
        btn.style.transform = 'translate(' + (mx * 0.18) + 'px,' + (my * 0.28) + 'px)';
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // ---------- Íconos ARIA que se dibujan al activarse (y se quedan dibujados) ----------
  const ariaSteps = document.querySelectorAll('.aria2__step');
  ariaSteps.forEach(step => {
    const paths = step.querySelectorAll('.iconbox svg path');
    if (REDUCE) { paths.forEach(p => { p.style.strokeDashoffset = 0; }); return; }
    paths.forEach(p => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = step.classList.contains('active') ? 0 : len;
    });
    const mo = new MutationObserver(() => {
      if (step.classList.contains('active')) paths.forEach(p => { p.style.strokeDashoffset = 0; });
    });
    mo.observe(step, { attributes: true, attributeFilter: ['class'] });
  });

  // ---------- Onda de llegada del puente ----------
  const bridgeSvg = document.querySelector('.bridge__svg');
  if (bridgeSvg && !REDUCE) {
    const arrIO = new IntersectionObserver((entries) => {
      entries.forEach(e => { bridgeSvg.classList.toggle('is-complete', e.isIntersecting); });
    }, { threshold: 0.6 });
    arrIO.observe(bridgeSvg);
  }
})();
