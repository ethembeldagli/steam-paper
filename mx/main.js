// themed loading screen for the main window: shown until the library/store has rendered (max 8s)
(()=>{if(window.__qLoad)return;window.__qLoad=1;
const o=document.createElement('div');o.id='q-load';o.innerHTML='<div class="q-mark"></div><div class="q-bar"></div>';
const add=()=>document.body&&!o.isConnected&&document.body.appendChild(o);document.body?add():addEventListener('DOMContentLoaded',add,{once:true});
const t0=Date.now(),iv=setInterval(()=>{if(document.querySelector('.Rp8QOGJ2DypeDniMnRBhr')){clearInterval(iv);o.remove();return}add();if(document.querySelector('._1rDh5rXSFZJOqCa4UpnI4z ._3x1HklzyDs4TEjACrRO2tB,._1rDh5rXSFZJOqCa4UpnI4z ._2B7WsaKHDSav8vpQUxkVRB,._1rDh5rXSFZJOqCa4UpnI4z .NZMJ6g2iVnFsOOp-lDmIP')||Date.now()-t0>8000){clearInterval(iv);o.classList.add('out');setTimeout(()=>o.remove(),350)}},100)})();
