document.querySelectorAll('.q-hero-fade').forEach(e=>e.remove());
// themed loading screen for the main window: shown until the library/store has rendered (max 8s)
(()=>{if(window.__qLoad)return;window.__qLoad=1;
const o=document.createElement('div');o.id='q-load';o.innerHTML='<div class="q-mark"></div><div class="q-bar"></div>';
const add=()=>document.body&&!o.isConnected&&document.body.appendChild(o);document.body?add():addEventListener('DOMContentLoaded',add,{once:true});
const t0=Date.now(),iv=setInterval(()=>{if(document.querySelector('.Rp8QOGJ2DypeDniMnRBhr')){clearInterval(iv);o.remove();return}add();if(document.querySelector('._1rDh5rXSFZJOqCa4UpnI4z ._3x1HklzyDs4TEjACrRO2tB,._1rDh5rXSFZJOqCa4UpnI4z ._2B7WsaKHDSav8vpQUxkVRB,._1rDh5rXSFZJOqCa4UpnI4z .NZMJ6g2iVnFsOOp-lDmIP')||Date.now()-t0>8000){clearInterval(iv);o.classList.add('out');setTimeout(()=>o.remove(),350)}},100)})();
// game-page hero: show the whole art (no crop) centred in the *visible* banner, black fades on both ends
(()=>{let raf=0;const place=()=>{raf=0;
 const hero=document.querySelector('.NZMJ6g2iVnFsOOp-lDmIP');if(!hero)return;
 const img=[...hero.querySelectorAll('img.HNbe3eZf6H7dtJ042x1vM')].find(i=>!i.classList.contains('HSQWw9HUAP6jtA2OZjS-u')&&!i.classList.contains('_3_IUVzR9tpG_JKEjhwXEAb'));if(!img||!img.naturalWidth)return;
 for(let p=img.parentElement;p&&p!==hero;p=p.parentElement){for(const [k,v] of [['overflow','visible'],['position','static'],['transform','none'],['clip-path','none'],['-webkit-mask-image','none'],['mask-image','none']])p.style.setProperty(k,v,'important')}
 if(getComputedStyle(hero).position==='static')hero.style.setProperty('position','relative','important');
 const op=hero,hr=hero.getBoundingClientRect(),pr=hr;
 let vl=hr.left,vr=hr.right;for(let p=hero.parentElement;p&&p!==document.body;p=p.parentElement){const s=getComputedStyle(p);if(s.overflowX!=='visible'){const r=p.getBoundingClientRect();vl=Math.max(vl,r.left);vr=Math.min(vr,r.left+p.clientWidth)}}
 const w=vr-vl,ar=img.naturalWidth/img.naturalHeight,iw=w,ih=Math.round(w/ar);
 hero.style.setProperty('height',ih+'px','important');hero.style.setProperty('max-height','none','important');hero.style.setProperty('min-height','0','important');
 const h=ih;
 img.classList.add('q-hero');Object.assign(img.style,{position:'absolute',left:(vl-pr.left)+'px',top:'0px',width:iw+'px',height:ih+'px'});};
 const q=()=>{if(!raf)raf=requestAnimationFrame(place)};
 addEventListener('resize',q);new MutationObserver(q).observe(document.documentElement,{childList:true,subtree:true});document.addEventListener('load',q,true)})();
