/* Home page: auto-changing hero slider */
const slides = [...document.querySelectorAll('[data-slide]')];
const dots = [...document.querySelectorAll('[data-dot]')];
if (slides.length) {
  let i = 0, timer;
  const go = (n) => {
    slides[i].dataset.on = false; dots[i] && (dots[i].dataset.on = false);
    i = (n + slides.length) % slides.length;
    slides[i].dataset.on = true; dots[i] && (dots[i].dataset.on = true);
  };
  const start = () => { timer = setInterval(() => go(i + 1), 5500); };
  dots.forEach((d, n) => d.onclick = () => { go(n); clearInterval(timer); start(); });
  start();
}
