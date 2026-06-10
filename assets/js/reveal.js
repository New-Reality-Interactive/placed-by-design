// ─── SCROLL REVEAL ───────────────────────────────────────────
// Watches all .reveal elements and adds .visible when they
// enter the viewport. Unobserves after firing (one-shot).

const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
   entries.forEach(e => {
      if (e.isIntersecting) {
         e.target.classList.add('visible');
         observer.unobserve(e.target);
      }
   });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));