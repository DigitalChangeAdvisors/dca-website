/* Reading Panel — Preludio de ReturnAI
   Slide-in desde la derecha, fondo carbón.
   Accesible: focus trap, ESC, scroll lock. */

(function () {
  const panel    = document.getElementById('preludio-panel');
  const btn      = document.getElementById('btn-preludio');
  const closeBtn = panel && panel.querySelector('.preludio-panel__close');
  const backdrop = panel && panel.querySelector('.preludio-panel__backdrop');
  const drawer   = panel && panel.querySelector('.preludio-panel__drawer');

  if (!panel || !btn) return;

  // --- Focus trap helpers ---
  const focusable = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function trapFocus(e) {
    const els = Array.from(panel.querySelectorAll(focusable)).filter(el => !el.disabled);
    const first = els[0], last = els[els.length - 1];
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  // --- Open ---
  function openPanel() {
    panel.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => panel.classList.add('is-open'));
    });
    drawer.scrollTop = 0;
    setTimeout(() => closeBtn.focus(), 420);
    panel.addEventListener('keydown', trapFocus);
  }

  // --- Close ---
  function closePanel() {
    panel.classList.remove('is-open');
    document.body.style.overflow = '';
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
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closePanel();
  });
})();
