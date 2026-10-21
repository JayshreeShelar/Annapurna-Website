/* Gallery lightbox (markup lives in pages/gallery.html) */
const items = [...document.querySelectorAll('[data-gi]')];
const lb = document.getElementById('lb');
if (items.length && lb) {
  const img = document.getElementById('lbi'), cap = document.getElementById('lbc');
  let cur = 0;
  const visible = () => items.filter((g) => g.dataset.off !== 'true');
  const close = () => { lb.dataset.open = false; };
  const show = (n) => {
    const v = visible(); cur = (n + v.length) % v.length;
    const g = v[cur];
    img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
    img.src = g.querySelector('img').src;
    cap.textContent = g.dataset.t || '';
    lb.dataset.open = true;
  };
  items.forEach((g) => g.onclick = (e) => { e.preventDefault(); show(visible().indexOf(g)); });
  lb.querySelector('[data-lb=close]').onclick = close;
  lb.querySelector('[data-lb=prev]').onclick = () => show(cur - 1);
  lb.querySelector('[data-lb=next]').onclick = () => show(cur + 1);
  lb.onclick = (e) => { if (e.target === lb) close(); };
  addEventListener('keydown', (e) => {
    if (lb.dataset.open !== 'true') return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
}
