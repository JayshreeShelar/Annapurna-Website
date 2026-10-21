/* Demo form handling (no backend yet): shows the thank-you note and resets the form */
document.querySelectorAll('form[data-form]').forEach((form) => form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = form.querySelector('[data-ok]');
  ok.dataset.show = true;
  form.reset();
  setTimeout(() => { ok.dataset.show = false; }, 6000);
}));
const date = document.querySelector('input[type=date]');
if (date) date.min = new Date().toISOString().split('T')[0];
