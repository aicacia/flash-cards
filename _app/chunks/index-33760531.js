import{n as t,s as n,H as e,I as s,J as r,K as o}from"./index-4d8bfc51.js";const c=[];function u(t,n){return{subscribe:i(t,n).subscribe}}function i(e,s=t){let r;const o=[];function u(t){if(n(e,t)&&(e=t,r)){const t=!c.length;for(let n=0;n<o.length;n+=1){const t=o[n];t[1](),c.push(t,e)}if(t){for(let t=0;t<c.length;t+=2)c[t][0](c[t+1]);c.length=0}}}return{set:u,update:function(t){u(t(e))},subscribe:function(n,c=t){const i=[n,c];return o.push(i),1===o.length&&(r=s(u)||t),n(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",derived:function(n,o,c){const i=!Array.isArray(n),l=i?[n]:n,a=o.length<2;return u(c,(n=>{let c=!1;const u=[];let f=0,b=t;const g=()=>{if(f)return;b();const e=o(i?u[0]:u,n);a?n(e):b=r(e)?e:t},h=l.map(((t,n)=>e(t,(t=>{u[n]=t,f&=~(1<<n),c&&g()}),(()=>{f|=1<<n}))));return c=!0,g(),function(){s(h),b()}}))},readable:u,writable:i,get:o});export{l as s,i as w};