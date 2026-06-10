// ─── CONTACT FORM ────────────────────────────────────────────
// Shows/hides the referral name or "other" text field
// based on the "How did you hear about us?" select value.

const hearSelect = document.getElementById('hearAboutSelect');
const referralGroup = document.getElementById('referralGroup');
const otherGroup = document.getElementById('otherGroup');

if (hearSelect) {
   hearSelect.addEventListener('change', () => {
      referralGroup.classList.toggle('js-hidden', hearSelect.value !== 'Referred by a friend');
      otherGroup.classList.toggle('js-hidden', hearSelect.value !== 'Other');
   });
}