// ─── GALLERY ─────────────────────────────────────────────────
// Tab active state — visual only for now.
// TODO: wire up actual filtering by room type when photos are ready.

document.querySelectorAll('.gallery-tab').forEach(tab => {
   tab.addEventListener('click', () => {
      document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
   });
});