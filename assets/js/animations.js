/* ═══════════════════════════════════════
   AMPERE ELECTRIC — ADVANCED ANIMATIONS
══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded',()=>{

/* KPI smooth count */

const counters=document.querySelectorAll('.counter');

if('IntersectionObserver' in window){

const obs=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const el=entry.target;

const target=parseInt(
el.dataset.target || '0',
10
);

const duration=1800;

let start=0;

const startTime=performance.now();

function update(now){

const progress=Math.min(
(now-startTime)/duration,
1
);

const eased=
1-Math.pow(1-progress,4);

const value=Math.floor(
eased*target
);

el.textContent=
value +
(el.dataset.suffix || '');

if(progress<1){

requestAnimationFrame(update);

}

}

requestAnimationFrame(update);

obs.unobserve(el);

});

});

counters.forEach(c=>obs.observe(c));

}

/* hero parallax */

const hero=document.querySelector('#hero');

if(hero){

window.addEventListener(
'mousemove',
(e)=>{

const x=(e.clientX/window.innerWidth-.5)*10;

const y=(e.clientY/window.innerHeight-.5)*10;

hero.style.transform=
`translate(${x}px,${y}px)`;

},
{passive:true}
);

}

/* scroll progress */

const progress=document.createElement('div');

progress.id='scrollProgress';

document.body.appendChild(progress);

window.addEventListener('scroll',()=>{

const total=
document.documentElement.scrollHeight-
window.innerHeight;

const percent=
(window.scrollY/total)*100;

progress.style.width=
percent+'%';

},{passive:true});

});