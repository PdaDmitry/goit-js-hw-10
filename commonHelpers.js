import"./assets/modulepreload-polyfill-3cfb730f.js";import"./assets/vendor-94c342ae.js";const a=document.getElementById("datetime-picker");a.classList.add("input");const l=document.querySelector("button");l.classList.add("btn-start");function o(r){let t=r,e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),s=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),d=String(t.getSeconds()).padStart(2,"0");return`${e}-${n}-${i} ${s}:${c}:${d}`}a.value=o(new Date);l.addEventListener("click",S);class u{constructor(t){this.idInterval=null,this.clock=t}start(t){let e=Date.now();this.idInterval=setInterval(()=>{let n=Date.now()-e;console.log(o(Date.now(n))),this.clock()},1e3),setTimeout(()=>{clearInterval(this.idInterval),console.log("Stop")},6e3)}}function m(){console.log("Hello")}let g=new u(m);function S(){g.start()}
//# sourceMappingURL=commonHelpers.js.map