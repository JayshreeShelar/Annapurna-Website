/* Header + footer behaviour: sticky style, mobile menu, progress bar, back-to-top, banner parallax */
export function initHeader() {
  const hdr = document.getElementById('hdr');
  if (!hdr) return;
  const prog = document.getElementById('prog'), toTop = document.getElementById('top');
  const nav = document.getElementById('nav'), burger = document.getElementById('bg');
  const parallax = document.querySelector('[data-parallax]');

  /* active link */
  const page = document.body.dataset.page;
  nav.querySelectorAll('a').forEach((a) => { if (a.dataset.page === page) a.setAttribute('aria-current', 'page'); });

  /* mobile menu */
  const setNav = (open) => {
    nav.dataset.open = open;
    burger.innerHTML = `<i class="ic"><svg><use href="#i-${open ? 'x' : 'menu'}"/></svg></i>`;
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    burger.setAttribute('aria-expanded', open);
  };
  burger.onclick = (e) => { e.stopPropagation(); setNav(nav.dataset.open !== 'true'); };
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setNav(false)));
  document.addEventListener('click', (e) => { if (nav.dataset.open === 'true' && !nav.contains(e.target)) setNav(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });
  addEventListener('resize', () => { if (innerWidth > 1020) setNav(false); });

  /* scroll */
  toTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    hdr.dataset.stuck = y > 40;
    toTop.dataset.on = y > 600;
    prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    if (parallax && y < 900) parallax.style.transform = `translateY(${y * 0.22}px)`;
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
