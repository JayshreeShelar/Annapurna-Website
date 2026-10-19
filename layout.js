/* Annapurna - shared header, footer, icons, animations & small widgets */
(function(){
const C=(x,y,r)=>`M${x-r} ${y}a${r} ${r} 0 1 0 ${2*r} 0a${r} ${r} 0 1 0 ${-2*r} 0`;
const P={
leaf:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
sprout:"M7 20h10 M10 20c5.5-2.5.8-6.4 3-10 M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
pot:"M3 11h18 M5 11v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-7 M2 11h2 M20 11h2 M8 7c0-1.5 1-1.5 1-3 M12 7c0-1.5 1-1.5 1-3 M16 7c0-1.5 1-1.5 1-3",
flower:C(12,5,2.6)+" "+C(18,9.6,2.6)+" "+C(15.8,16.6,2.6)+" "+C(8.2,16.6,2.6)+" "+C(6,9.6,2.6)+" "+C(12,12,2)+" M12 14v8",
heart:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
award:C(12,9,6)+" M8.21 13.89 7 23l5-3 5 3-1.21-9.12",
users:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 "+C(9,7,4)+" M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
pin:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z "+C(12,10,3),
phone:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
mail:"M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6",
clock:C(12,12,10)+" M12 6v6l4 2",
shield:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z M9 12l2 2 4-4",
arrow:"M5 12h14 M12 5l7 7-7 7",
insta:"M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z M17.5 6.5h.01",
fb:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
utensils:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2 M7 2v20 M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
menu:"M3 6h18 M3 12h18 M3 18h18",
star:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
quote:"M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h1 M15 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h1",
plus:"M12 5v14 M5 12h14",
check:"M20 6 9 17l-5-5",
calendar:"M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
car:"M5 17h14 M3 17v-5l2-5h14l2 5v5 M3 17v2h3v-2 M18 17v2h3v-2 "+C(7.5,13,1)+" "+C(16.5,13,1),
gift:"M20 12v10H4V12 M2 7h20v5H2z M12 22V7 M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
x:"M18 6 6 18 M6 6l12 12",
chev:"M9 6l6 6-6 6",
cup:"M18 8h1a4 4 0 0 1 0 8h-1 M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z M6 1v3 M10 1v3 M14 1v3",
zoom:"M21 21l-4.3-4.3 "+C(11,11,8)+" M11 8v6 M8 11h6",
cake:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8 M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1 M2 21h20 M7 8v3 M12 8v3 M17 8v3 M7 4h.01 M12 4h.01 M17 4h.01",
globe:C(12,12,10)+" M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
};
let sp='<svg width="0" height="0" style="position:absolute"><defs>';
for(const k in P)sp+=`<symbol id="i-${k}" viewBox="0 0 24 24">${P[k].split(' M').map((d,i)=>`<path d="${i?'M':''}${d}"/>`).join('')}</symbol>`;
sp+='</defs></svg>';
document.body.insertAdjacentHTML('afterbegin',sp);

const lotus=`<svg class="lo" viewBox="0 0 64 52" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M32 4c6 8 6 20 0 30-6-10-6-22 0-30z"/><path d="M32 34C24 32 17 25 16 14c8 1 14 7 16 20z"/><path d="M32 34c8-2 15-9 16-20-8 1-14 7-16 20z"/><path d="M32 34C20 35 11 29 8 21c9-1 18 3 24 13z"/><path d="M32 34c12 1 21-5 24-13-9-1-18 3-24 13z"/><path d="M18 43h28"/></svg>`;
const logo=`<a href="index.html" class="logo"><span class="row">${lotus}<b>Annapurna</b></span><small>PURE VEG RESTAURANT</small></a>`;
const links=[['index.html','Home'],['story.html','Our Story'],['menu.html','Menu'],['specials.html','Specials'],['gallery.html','Gallery'],['reservations.html','Reservations'],['contact.html','Contact']];
const cur=location.pathname.split('/').pop()||'index.html';
document.body.insertAdjacentHTML('afterbegin',`<div class="prog" id="prog"></div><header class="hdr" id="hdr"><div class="in">${logo}<nav class="nav" id="nav">${links.map(l=>`<a href="${l[0]}" class="${l[0]==cur?'on':''}">${l[1]}</a>`).join('')}</nav><a href="reservations.html" class="btn sm">Book a Table</a><button class="burger" id="bg" aria-label="Menu"><i data-i="menu"></i></button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer class="ft"><div class="wrap"><div class="g4c">
<div>${logo}<p class="about">Pure vegetarian flavours, crafted with love for a healthier tomorrow.</p><div class="soc"><a href="#" aria-label="Instagram"><i data-i="insta"></i></a><a href="#" aria-label="Facebook"><i data-i="fb"></i></a><a href="#" aria-label="Dining"><i data-i="utensils"></i></a></div></div>
<div><h5>Quick Links</h5><ul><li><a href="index.html">Home</a></li><li><a href="story.html">Our Story</a></li><li><a href="menu.html">Menu</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="contact.html">Contact</a></li></ul></div>
<div><h5>Opening Hours</h5><div class="ln"><i data-i="clock"></i><span>Mon - Sun<br>11:00 AM - 10:30 PM</span></div></div>
<div><h5>Visit Us</h5><div class="ln"><i data-i="pin"></i><span>123 Green Park, College Road,<br>Nashik, Maharashtra - 422001</span></div><a class="ln" href="tel:+919876543210"><i data-i="phone"></i><span>+91 98765 43210</span></a></div>
</div><div class="fb"><span>&copy; 2026 Annapurna Pure Veg Restaurant. All rights reserved.</span><span>Good Food &bull; Good Mood &bull; Always <i data-i="heart"></i></span></div></div></footer><button class="totop" id="top" aria-label="Back to top"><i data-i="chev"></i></button>`);

/* sprigs (decorative leaf line-art) */
function sprig(type,n){
  const cfg={green:['#7aa26c','#3d6a45',1.2],gold:['none','#d9b45a',1.3],olive:['#d8cf9c','#8a8650',1],dark:['rgba(80,140,100,.25)','rgba(120,180,130,.55)',1]}[type]||['none','#d9b45a',1.3];
  const [f,s,w]=cfg;const P0=[14,210],P1=[24,100],P2=[96,8];
  const pt=t=>[(1-t)*(1-t)*P0[0]+2*t*(1-t)*P1[0]+t*t*P2[0],(1-t)*(1-t)*P0[1]+2*t*(1-t)*P1[1]+t*t*P2[1]];
  const tg=t=>Math.atan2(2*(1-t)*(P1[1]-P0[1])+2*t*(P2[1]-P1[1]),2*(1-t)*(P1[0]-P0[0])+2*t*(P2[0]-P1[0]));
  let o=`<svg viewBox="-20 0 170 220" fill="none"><path d="M${P0} Q${P1} ${P2}" stroke="${s}" stroke-width="${w+.3}" fill="none"/>`;
  const leaf=(x,y,a,sz)=>`<g transform="translate(${x} ${y}) rotate(${a*180/Math.PI})"><path d="M0 0C${sz*.25} ${-sz*.32} ${sz*.7} ${-sz*.32} ${sz} 0C${sz*.7} ${sz*.32} ${sz*.25} ${sz*.32} 0 0Z" fill="${f}" stroke="${s}" stroke-width="${w}"/><path d="M0 0L${sz*.88} 0" stroke="${s}" stroke-width=".6"/></g>`;
  for(let i=0;i<n;i++){const t=.14+.74*i/(n-1);const [x,y]=pt(t);const a=tg(t);const sz=40-16*t;o+=leaf(x,y,a-.95,sz)+leaf(x,y,a+.95,sz*.92);}
  const [x,y]=pt(1);o+=leaf(x,y,tg(1),30);
  return o+'</svg>';
}
document.querySelectorAll('.sp[data-sp]').forEach(e=>{const [t,n]=e.dataset.sp.split(':');e.innerHTML=sprig(t,+(n||6));e.style.setProperty('--r',(e.dataset.r||0)+'deg')});
document.querySelectorAll('[data-i]').forEach(e=>{e.classList.add('ic');e.innerHTML=`<svg><use href="#i-${e.dataset.i}"/></svg>`});

/* header / burger / progress / to-top */
const hdr=document.getElementById('hdr'),prog=document.getElementById('prog'),top=document.getElementById('top');
const nav=document.getElementById('nav'),bgb=document.getElementById('bg');
const setNav=o=>{nav.classList.toggle('open',o);bgb.innerHTML=`<i class="ic"><svg><use href="#i-${o?'x':'menu'}"/></svg></i>`;bgb.setAttribute('aria-label',o?'Close menu':'Open menu');bgb.setAttribute('aria-expanded',o)};
bgb.onclick=e=>{e.stopPropagation();setNav(!nav.classList.contains('open'))};
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setNav(false)));
document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target))setNav(false)});
addEventListener('keydown',e=>{if(e.key==='Escape')setNav(false)});
addEventListener('resize',()=>{if(innerWidth>1020)setNav(false)});
top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const bimg=document.querySelector('.banner .bimg');
function onScroll(){
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  hdr.classList.toggle('stuck',y>40);top.classList.toggle('on',y>600);
  prog.style.width=(h>0?y/h*100:0)+'%';
  if(bimg&&y<900)bimg.style.transform=`translateY(${y*.22}px)`;
}
addEventListener('scroll',onScroll,{passive:true});onScroll();

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.14,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('[data-a]').forEach(e=>io.observe(e));

/* counters */
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
  const el=e.target,end=+el.dataset.count,suf=el.dataset.suf||'',dec=el.dataset.dec?1:0,t0=performance.now();
  (function f(t){const p=Math.min((t-t0)/1800,1),v=end*(1-Math.pow(1-p,3));el.textContent=v.toFixed(dec)+suf;if(p<1)requestAnimationFrame(f)})(t0);
}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(e=>cio.observe(e));

/* hero slider */
const sl=document.querySelectorAll('.hero .slides img');
if(sl.length){let i=0;const dots=document.querySelectorAll('.dots i');
  const go=n=>{sl[i].classList.remove('on');dots[i]&&dots[i].classList.remove('on');i=(n+sl.length)%sl.length;sl[i].classList.add('on');dots[i]&&dots[i].classList.add('on')};
  let tm=setInterval(()=>go(i+1),5500);
  dots.forEach((d,n)=>d.onclick=()=>{go(n);clearInterval(tm);tm=setInterval(()=>go(i+1),5500)});}

/* menu tabs + gallery filter (same data-filter pattern) */
document.querySelectorAll('[data-filter]').forEach(box=>{
  const items=document.querySelectorAll(box.dataset.filter);
  box.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{
    box.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));t.classList.add('on');
    const k=t.dataset.k;
    items.forEach(it=>{const show=k==='all'||it.dataset.cat===k;it.classList.toggle('off',!show);it.classList.toggle('hide',!show);
      if(show){it.querySelectorAll('[data-a]').forEach(a=>{a.classList.remove('in');void a.offsetWidth;requestAnimationFrame(()=>a.classList.add('in'))})}});
  });
});

/* lightbox */
const gis=[...document.querySelectorAll('.gi')];
if(gis.length){
  document.body.insertAdjacentHTML('beforeend','<div class="lb" id="lb"><button class="x" aria-label="Close"><i data-i="x"></i></button><button class="pv" aria-label="Previous"><i data-i="chev" style="transform:rotate(180deg)"></i></button><img id="lbi" alt=""><button class="nx" aria-label="Next"><i data-i="chev"></i></button><div class="cap" id="lbc"></div></div>');
  document.querySelectorAll('#lb [data-i]').forEach(e=>{e.classList.add('ic');e.innerHTML=`<svg><use href="#i-${e.dataset.i}"/></svg>`});
  const lb=document.getElementById('lb'),lbi=document.getElementById('lbi'),lbc=document.getElementById('lbc');let cur=0;
  const vis=()=>gis.filter(g=>!g.classList.contains('hide'));
  const show=n=>{const v=vis();cur=(n+v.length)%v.length;const g=v[cur];lbi.style.animation='none';void lbi.offsetWidth;lbi.style.animation='';lbi.src=g.querySelector('img').src;lbc.textContent=g.dataset.t||'';lb.classList.add('on')};
  gis.forEach(g=>g.onclick=e=>{e.preventDefault();show(vis().indexOf(g))});
  lb.querySelector('.x').onclick=()=>lb.classList.remove('on');
  lb.querySelector('.pv').onclick=()=>show(cur-1);lb.querySelector('.nx').onclick=()=>show(cur+1);
  lb.onclick=e=>{if(e.target===lb)lb.classList.remove('on')};
  addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
}

/* FAQ accordion */
document.querySelectorAll('.fq button').forEach(b=>b.onclick=()=>{
  const f=b.parentElement,a=f.querySelector('.a'),open=f.classList.contains('open');
  document.querySelectorAll('.fq.open').forEach(o=>{o.classList.remove('open');o.querySelector('.a').style.maxHeight=0});
  if(!open){f.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
});

/* forms */
document.querySelectorAll('form.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const ok=f.querySelector('.ok');ok.classList.add('show');f.reset();setTimeout(()=>ok.classList.remove('show'),6000)}));
const d=document.querySelector('input[type=date]');if(d)d.min=new Date().toISOString().split('T')[0];
})();
