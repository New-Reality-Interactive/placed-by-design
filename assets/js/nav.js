// ─── NAV ─────────────────────────────────────────────────────
// Scroll: adds .scrolled class to #nav when page scrolls past 40px
// Hamburger: toggles mobile menu open/closed

const nav = document.getElementById('nav');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.querySelector('.nav-links');

// Scroll state
window.addEventListener('scroll', () => {
   nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger toggle
hamburgerBtn.addEventListener('click', () => {
   const isOpen = navLinks.classList.contains('nav-open');
   navLinks.classList.toggle('nav-open', !isOpen);
   hamburgerBtn.classList.toggle('is-active', !isOpen);
   hamburgerBtn.setAttribute('aria-expanded', String(!isOpen));
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
   link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open');
      hamburgerBtn.classList.remove('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
   });
});

// Close menu on resize back to desktop
window.addEventListener('resize', () => {
   if (window.innerWidth > 768) {
      navLinks.classList.remove('nav-open');
      hamburgerBtn.classList.remove('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
   }
});