import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as f}from"./assets/vendor-77e16229.js";const o=document.getElementById("datetime-picker");o.classList.add("input");const n=document.querySelector("button");n.classList.add("btn-start");n.disabled=!0;const p=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");n.addEventListener("click",S);function D(t){let e=t,s=String(e.getFullYear()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),l=String(e.getHours()).padStart(2,"0"),c=String(e.getMinutes()).padStart(2,"0"),u=String(e.getSeconds()).padStart(2,"0");return`${s}-${r}-${i} ${l}:${c}:${u}`}o.value=D(new Date);let m,d,a;h(o,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){m=t[0],d=Date.now(),a=m-d,a>0?(n.disabled=!1,n.classList.add("btn-normal")):(n.disabled=!0,n.classList.remove("btn-normal"),f.show({message:"Please choose a date in the future",messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",iconUrl:"../img/error.svg"}))}});function L(t){const l=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),g=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:c,minutes:u,seconds:g}}n.addEventListener("click",S);class k{constructor(e){this.idInterval=null,this.clock=e}start(){this.idInterval=setInterval(()=>{d=Date.now(),a=m-d,a>0?this.clock():(clearInterval(this.idInterval),o.disabled=!1)},1e3)}}function C(){let t=L(a),{days:e,hours:s,minutes:r,seconds:i}=t;p.textContent=e.toString().padStart(2,"0"),y.textContent=s.toString().padStart(2,"0"),b.textContent=r.toString().padStart(2,"0"),v.textContent=i.toString().padStart(2,"0")}const E=new k(C);function S(){E.start(),o.disabled=!0,n.disabled=!0,n.classList.remove("btn-normal")}
//# sourceMappingURL=commonHelpers.js.map
