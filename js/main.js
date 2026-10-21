/* Annapurna - single script for every page (needs icons.js loaded first, plain script, works without a server).
   Loads header/footer, icons, sprigs, scroll effects, and page-specific features
   (each feature only runs if its elements exist on the page). */
/* WhatsApp number that receives every enquiry: country code + number, digits only (91 = India). CHANGE THIS. */
const WHATSAPP = '9309154396';
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* ---------- shared header / footer (components/header.js, components/footer.js) ---------- */
function loadComponents() {
  document.querySelectorAll('[data-include]').forEach((el) => {
    el.outerHTML = (window.Components && Components[el.dataset.include]) || '';
  });
}

/* ---------- decorative leaf sprigs: <i class="sp" data-sp="gold:7"> ---------- */
function sprig(type,n){
  const cfg={green:['#7aa26c','#3d6a45',1.2],gold:['none','#d9b45a',1.3],olive:['#d8cf9c','#8a8650',1],dark:['rgba(80,140,100,.25)','rgba(120,180,130,.55)',1]}[type]||['none','#d9b45a',1.3];
  const [f,s,w]=cfg;const P0=[14,210],P1=[24,100],P2=[96,8];
  const pt=t=>[(1-t)*(1-t)*P0[0]+2*t*(1-t)*P1[0]+t*t*P2[0],(1-t)*(1-t)*P0[1]+2*t*(1-t)*P1[1]+t*t*P2[1]];
  const tg=t=>Math.atan2(2*(1-t)*(P1[1]-P0[1])+2*t*(P2[1]-P1[1]),2*(1-t)*(P1[0]-P0[0])+2*t*(P2[0]-P1[0]));
  let o=`<svg class="h-auto w-full overflow-visible" viewBox="-20 0 170 220" fill="none"><path d="M${P0} Q${P1} ${P2}" stroke="${s}" stroke-width="${w+.3}" fill="none"/>`;
  const leaf=(x,y,a,sz)=>`<g transform="translate(${x} ${y}) rotate(${a*180/Math.PI})"><path d="M0 0C${sz*.25} ${-sz*.32} ${sz*.7} ${-sz*.32} ${sz} 0C${sz*.7} ${sz*.32} ${sz*.25} ${sz*.32} 0 0Z" fill="${f}" stroke="${s}" stroke-width="${w}"/><path d="M0 0L${sz*.88} 0" stroke="${s}" stroke-width=".6"/></g>`;
  for(let i=0;i<n;i++){const t=.14+.74*i/(n-1);const [x,y]=pt(t);const a=tg(t);const sz=40-16*t;o+=leaf(x,y,a-.95,sz)+leaf(x,y,a+.95,sz*.92);}
  const [x,y]=pt(1);o+=leaf(x,y,tg(1),30);
  return o+'</svg>';
}

const renderSprigs = () => document.querySelectorAll('.sp[data-sp]').forEach((e) => {
  const [t, n] = e.dataset.sp.split(':');
  e.innerHTML = sprig(t, +(n || 6));
});

/* ---------- header: active link, sticky style, mobile menu, progress bar, back-to-top, parallax ---------- */
function initHeader() {
  const hdr = document.getElementById('hdr');
  if (!hdr) return;
  const prog = document.getElementById('prog'), toTop = document.getElementById('top');
  const nav = document.getElementById('nav'), burger = document.getElementById('bg');
  const parallax = document.querySelector('[data-parallax]');

  const page = document.body.dataset.page;
  nav.querySelectorAll('a').forEach((a) => { if (a.dataset.page === page) a.setAttribute('aria-current', 'page'); });

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

  toTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    hdr.dataset.stuck = y > 40;
    toTop.dataset.on = y > 600;
    prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    if (parallax && y < 900) parallax.style.transform = `translateY(${y * 0.22}px)`;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- scroll reveal ([data-a]) + counters ([data-count]) ---------- */
function initEffects() {
  const reveal = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    reveal.unobserve(el);
    const delay = parseFloat(getComputedStyle(el).getPropertyValue('--d')) || 0;
    setTimeout(() => el.removeAttribute('data-a'), (delay + 1) * 1000 + 100); /* hand control back to hover transitions */
  }), { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-a]').forEach((el) => reveal.observe(el));

  const count = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    count.unobserve(e.target);
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suf || '', dec = el.dataset.dec ? 1 : 0, t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / 1800, 1);
      el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => count.observe(el));
}

/* ---------- home: hero slider ---------- */
function initSlider() {
  const slides = [...document.querySelectorAll('[data-slide]')], dots = [...document.querySelectorAll('[data-dot]')];
  if (!slides.length) return;
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

/* ---------- menu + gallery: tab filter ---------- */
function initFilter() {
  document.querySelectorAll('[data-filter]').forEach((box) => {
    const items = document.querySelectorAll(box.dataset.filter), tabs = box.querySelectorAll('[data-k]');
    tabs.forEach((tab) => tab.onclick = () => {
      tabs.forEach((t) => t.dataset.on = false);
      tab.dataset.on = true;
      items.forEach((it) => {
        const show = tab.dataset.k === 'all' || it.dataset.cat === tab.dataset.k;
        it.dataset.off = !show;
        if (show) { it.classList.remove('animate-rise'); void it.offsetWidth; it.classList.add('animate-rise'); }
      });
    });
  });
}

/* ---------- gallery: lightbox ---------- */
function initLightbox() {
  const items = [...document.querySelectorAll('[data-gi]')], lb = document.getElementById('lb');
  if (!items.length || !lb) return;
  const img = document.getElementById('lbi'), cap = document.getElementById('lbc');
  let cur = 0;
  const visible = () => items.filter((g) => g.dataset.off !== 'true');
  const close = () => { lb.dataset.open = false; };
  const show = (n) => {
    const v = visible(); cur = (n + v.length) % v.length;
    img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
    img.src = v[cur].querySelector('img').src;
    cap.textContent = v[cur].dataset.t || '';
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

/* ---------- reservations: FAQ accordion ---------- */
function initFaq() {
  document.querySelectorAll('[data-faq] button').forEach((btn) => btn.onclick = () => {
    const item = btn.parentElement, answer = item.querySelector('[data-answer]'), wasOpen = item.dataset.open === 'true';
    document.querySelectorAll('[data-faq] [data-open=true]').forEach((o) => { o.dataset.open = false; o.querySelector('[data-answer]').style.maxHeight = 0; });
    if (!wasOpen) { item.dataset.open = true; answer.style.maxHeight = answer.scrollHeight + 'px'; }
  });
}

/* ---------- WhatsApp enquiries ---------- */
/* Dish buttons: <a data-enquire="Dish name"> opens WhatsApp with a ready message */
function initEnquiry() {
  document.querySelectorAll('[data-enquire]').forEach((a) => {
    a.href = waLink(`Hello Annapurna, I would like to enquire about *${a.dataset.enquire}*. Please share the details.`);
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

/* Forms: <form data-form="Enquiry title"> sends all filled fields to WhatsApp */
function initForms() {
  document.querySelectorAll('form[data-form]').forEach((form) => form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lines = [`*${form.dataset.form}*`];
    form.querySelectorAll('input, select, textarea').forEach((f) => {
      const label = f.previousElementSibling?.textContent.replace('*', '').trim();
      if (label && f.value.trim()) lines.push(`${label}: ${f.value.trim()}`);
    });
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    const ok = form.querySelector('[data-ok]');
    ok.dataset.show = true;
    form.reset();
    setTimeout(() => { ok.dataset.show = false; }, 6000);
  }));
  const date = document.querySelector('input[type=date]');
  if (date) date.min = new Date().toISOString().split('T')[0];
}

/* ---------- boot ---------- */
injectSprite();
loadComponents();
renderSprigs();
hydrateIcons();
initHeader();
initEffects();
initSlider();
initFilter();
initLightbox();
initFaq();
initEnquiry();
initForms();
