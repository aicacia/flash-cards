function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function u(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function i(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,u,c){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,u);if(s){const r=f(n,e,o,c);t.p(r,s)}}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function b(){return m("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function v(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const u=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||u.push(t.name)}for(let t=0;t<u.length;t++)o.removeAttribute(u[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):$(n)}function w(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function E(t){return w(t," ")}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function A(t,n){t.value=null==n?"":n}function j(t,n=document.body){return Array.from(n.querySelectorAll(t))}let N;function S(t){N=t}function q(){if(!N)throw new Error("Function called outside component initialization");return N}function C(t){q().$$.on_mount.push(t)}function L(t){q().$$.after_update.push(t)}function O(t,n){q().$$.context.set(t,n)}const T=[],z=[],B=[],F=[],M=Promise.resolve();let D=!1;function G(t){B.push(t)}let H=!1;const I=new Set;function J(){if(!H){H=!0;do{for(let t=0;t<T.length;t+=1){const n=T[t];S(n),K(n.$$)}for(S(null),T.length=0;z.length;)z.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];I.has(n)||(I.add(n),n())}B.length=0}while(T.length);for(;F.length;)F.pop()();D=!1,H=!1,I.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const P=new Set;let Q;function R(){Q={r:0,c:[],p:Q}}function U(){Q.r||r(Q.c),Q=Q.p}function V(t,n){t&&t.i&&(P.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(P.has(t))return;P.add(t),Q.c.push((()=>{P.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t,n){const e={},o={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=n[u];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[u]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,n,o,c){const{fragment:s,on_mount:i,on_destroy:f,after_update:a}=t.$$;s&&s.m(n,o),c||G((()=>{const n=i.map(e).filter(u);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(G)}function et(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){-1===t.$$.dirty[0]&&(T.push(t),D||(D=!0,M.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,e,u,c,s,i,f=[-1]){const a=N;S(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=u?u(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&s(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ot(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!c&&c(l.ctx),e.target){if(e.hydrate){const t=x(e.target);l.fragment&&l.fragment.l(t),t.forEach(p)}else l.fragment&&l.fragment.c();e.intro&&V(n.$$.fragment),nt(n,e.target,e.anchor,e.customElement),J()}S(a)}class ut{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{O as A,L as B,C,R as D,U as E,i as F,a as G,y as H,A as I,h as J,r as K,s as L,ut as S,x as a,w as b,v as c,p as d,$ as e,d as f,l as g,k as h,rt as i,g as j,E as k,_ as l,n as m,t as n,Z as o,b as p,j as q,tt as r,c as s,m as t,nt as u,X as v,Y as w,V as x,W as y,et as z};
