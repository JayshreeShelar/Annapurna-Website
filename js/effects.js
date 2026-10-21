/* Scroll-reveal ([data-a]) and number counters ([data-count]) */
export function initReveal() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    io.unobserve(el);
    /* once revealed, drop the reveal rules so normal hover transitions take over */
    const delay = parseFloat(getComputedStyle(el).getPropertyValue('--d')) || 0;
    setTimeout(() => el.removeAttribute('data-a'), (delay + 1) * 1000 + 100);
  }), { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-a]').forEach((el) => io.observe(el));
}

export function initCounters() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suf || '', dec = el.dataset.dec ? 1 : 0, t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / 1800, 1), v = end * (1 - Math.pow(1 - p, 3));
      el.textContent = v.toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => io.observe(el));
}
