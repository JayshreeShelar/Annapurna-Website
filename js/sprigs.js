/* Annapurna - decorative leaf sprigs: <i class="sp" data-sp="gold:7"></i> */
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

export function renderSprigs(root=document){
  root.querySelectorAll('.sp[data-sp]').forEach(e=>{const [t,n]=e.dataset.sp.split(':');e.innerHTML=sprig(t,+(n||6))});
}
