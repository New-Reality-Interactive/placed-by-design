// ─── FAQ ACCORDION ───────────────────────────────────────────
// One item open at a time. Click or Enter/Space to toggle.

document.querySelectorAll('.faq-question').forEach(q => {
   q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
   });

   q.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
         e.preventDefault();
         q.click();
      }
   });
});