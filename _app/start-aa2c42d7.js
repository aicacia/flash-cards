var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(e,s,r)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,o=(t,o)=>{for(var a in o||(o={}))e.call(o,a)&&n(t,a,o[a]);if(s)for(var a of s(o))r.call(o,a)&&n(t,a,o[a]);return t};import{S as a,i,s as c,e as l,t as u,c as h,a as p,b as d,d as f,f as m,g,h as y,j as v,q as $,k as b,l as w,n as E,m as _,o as x,p as k,r as R,u as S,v as O,w as j,x as I,y as L,z as P,A as T,B as q,C as D,D as V,E as A,F as U,G as C}from"./chunks/index-4d8bfc51.js";import{_ as N}from"./chunks/preload-helper-9f12a5fd.js";import{w as z}from"./chunks/index-33760531.js";import{i as B}from"./chunks/singletons-dd9f995d.js";function K(t){let e,s,r=t[1].stack+"";return{c(){e=l("pre"),s=u(r)},l(t){e=h(t,"PRE",{});var n=p(e);s=d(n,r),n.forEach(f)},m(t,r){m(t,e,r),g(e,s)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&y(s,r)},d(t){t&&f(e)}}}function M(t){let e,s,r,n,o,a,i,c,_,x,k,R=t[1].message+"";document.title=e=t[0];let S=t[2]&&t[1].stack&&K(t);return{c(){s=v(),r=l("div"),n=l("div"),o=l("div"),a=l("h1"),i=u(t[0]),c=v(),_=l("p"),x=u(R),k=v(),S&&S.c(),this.h()},l(e){$('[data-svelte="svelte-1moakz"]',document.head).forEach(f),s=b(e),r=h(e,"DIV",{class:!0});var l=p(r);n=h(l,"DIV",{class:!0});var u=p(n);o=h(u,"DIV",{class:!0});var m=p(o);a=h(m,"H1",{});var g=p(a);i=d(g,t[0]),g.forEach(f),c=b(m),_=h(m,"P",{});var y=p(_);x=d(y,R),y.forEach(f),k=b(m),S&&S.l(m),m.forEach(f),u.forEach(f),l.forEach(f),this.h()},h(){w(o,"class","col"),w(n,"class","row justify-content-md-center"),w(r,"class","container")},m(t,e){m(t,s,e),m(t,r,e),g(r,n),g(n,o),g(o,a),g(a,i),g(o,c),g(o,_),g(_,x),g(o,k),S&&S.m(o,null)},p(t,[s]){1&s&&e!==(e=t[0])&&(document.title=e),1&s&&y(i,t[0]),2&s&&R!==(R=t[1].message+"")&&y(x,R),t[2]&&t[1].stack?S?S.p(t,s):(S=K(t),S.c(),S.m(o,null)):S&&(S.d(1),S=null)},i:E,o:E,d(t){t&&f(s),t&&f(r),S&&S.d()}}}function G(t,e,s){let{status:r}=e,{error:n}=e;return t.$$set=t=>{"status"in t&&s(0,r=t.status),"error"in t&&s(1,n=t.error)},[r,n,!1]}class W extends a{constructor(t){super(),i(this,t,G,M,c,{status:0,error:1})}}function Y(t){let e,s,r;const n=[t[4]||{}];var o=t[2][1];function a(t){let e={};for(let s=0;s<n.length;s+=1)e=_(e,n[s]);return{props:e}}return o&&(e=new o(a())),{c(){e&&x(e.$$.fragment),s=k()},l(t){e&&R(e.$$.fragment,t),s=k()},m(t,n){e&&S(e,t,n),m(t,s,n),r=!0},p(t,r){const i=16&r?O(n,[j(t[4]||{})]):{};if(o!==(o=t[2][1])){if(e){V();const t=e;L(t.$$.fragment,1,0,(()=>{P(t,1)})),A()}o?(e=new o(a()),x(e.$$.fragment),I(e.$$.fragment,1),S(e,s.parentNode,s)):e=null}else o&&e.$set(i)},i(t){r||(e&&I(e.$$.fragment,t),r=!0)},o(t){e&&L(e.$$.fragment,t),r=!1},d(t){t&&f(s),e&&P(e,t)}}}function F(t){let e,s;return e=new W({props:{status:t[0],error:t[1]}}),{c(){x(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,r){S(e,t,r),s=!0},p(t,s){const r={};1&s&&(r.status=t[0]),2&s&&(r.error=t[1]),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function H(t){let e,s,r,n;const o=[F,Y],a=[];function i(t,e){return t[1]?0:1}return e=i(t),s=a[e]=o[e](t),{c(){s.c(),r=k()},l(t){s.l(t),r=k()},m(t,s){a[e].m(t,s),m(t,r,s),n=!0},p(t,n){let c=e;e=i(t),e===c?a[e].p(t,n):(V(),L(a[c],1,1,(()=>{a[c]=null})),A(),s=a[e],s?s.p(t,n):(s=a[e]=o[e](t),s.c()),I(s,1),s.m(r.parentNode,r))},i(t){n||(I(s),n=!0)},o(t){L(s),n=!1},d(t){a[e].d(t),t&&f(r)}}}function J(t){let e,s=t[6]&&X(t);return{c(){e=l("div"),s&&s.c(),this.h()},l(t){e=h(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=p(e);s&&s.l(r),r.forEach(f),this.h()},h(){w(e,"id","svelte-announcer"),w(e,"aria-live","assertive"),w(e,"aria-atomic","true"),w(e,"class","svelte-1j55zn5")},m(t,r){m(t,e,r),s&&s.m(e,null)},p(t,r){t[6]?s?s.p(t,r):(s=X(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&f(e),s&&s.d()}}}function X(t){let e,s;return{c(){e=u("Navigated to "),s=u(t[7])},l(r){e=d(r,"Navigated to "),s=d(r,t[7])},m(t,r){m(t,e,r),m(t,s,r)},p(t,e){128&e&&y(s,t[7])},d(t){t&&f(e),t&&f(s)}}}function Q(t){let e,s,r,n;const o=[t[3]||{}];let a={$$slots:{default:[H]},$$scope:{ctx:t}};for(let c=0;c<o.length;c+=1)a=_(a,o[c]);e=new t[8]({props:a});let i=t[5]&&J(t);return{c(){x(e.$$.fragment),s=v(),i&&i.c(),r=k()},l(t){R(e.$$.fragment,t),s=b(t),i&&i.l(t),r=k()},m(t,o){S(e,t,o),m(t,s,o),i&&i.m(t,o),m(t,r,o),n=!0},p(t,[s]){const n=8&s?O(o,[j(t[3]||{})]):{};2071&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n),t[5]?i?i.p(t,s):(i=J(t),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){P(e,t),t&&f(s),i&&i.d(t),t&&f(r)}}}function Z(t,e,s){let{status:r}=e,{error:n}=e,{stores:o}=e,{page:a}=e,{components:i}=e,{props_0:c=null}=e,{props_1:l=null}=e;const u=i[0];T("__svelte__",o),q(o.page.notify);let h=!1,p=!1,d=null;return D((()=>{const t=o.page.subscribe((()=>{h&&(s(6,p=!0),s(7,d=document.title))}));return s(5,h=!0),t})),t.$$set=t=>{"status"in t&&s(0,r=t.status),"error"in t&&s(1,n=t.error),"stores"in t&&s(9,o=t.stores),"page"in t&&s(10,a=t.page),"components"in t&&s(2,i=t.components),"props_0"in t&&s(3,c=t.props_0),"props_1"in t&&s(4,l=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&o.page.set(a)},[r,n,i,c,l,h,p,d,u,o,a]}class tt extends a{constructor(t){super(),i(this,t,Z,Q,c,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}function et(t){let e,s,r;const n=t[1].default,o=U(n,t,t[0],null);return{c(){e=l("div"),s=l("div"),o&&o.c(),this.h()},l(t){e=h(t,"DIV",{class:!0});var r=p(e);s=h(r,"DIV",{class:!0});var n=p(s);o&&o.l(n),n.forEach(f),r.forEach(f),this.h()},h(){w(s,"class","row"),w(e,"class","container")},m(t,n){m(t,e,n),g(e,s),o&&o.m(s,null),r=!0},p(t,[e]){o&&o.p&&1&e&&C(o,n,t,t[0],e,null,null)},i(t){r||(I(o,t),r=!0)},o(t){L(o,t),r=!1},d(t){t&&f(e),o&&o.d(t)}}}function st(t,e,s){let{$$slots:r={},$$scope:n}=e;return t.$$set=t=>{"$$scope"in t&&s(0,n=t.$$scope)},[n,r]}var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends a{constructor(t){super(),i(this,t,st,et,c,{})}}});const nt=[()=>N((()=>import("./pages/index.svelte-0457a5c5.js")),["/_app/pages/index.svelte-0457a5c5.js","/_app/chunks/index-4d8bfc51.js"]),()=>N((()=>import("./pages/decks/index.svelte-1aceb9a3.js")),["/_app/pages/decks/index.svelte-1aceb9a3.js","/_app/chunks/index-4d8bfc51.js","/_app/chunks/decks-03deb0ad.js"]),()=>N((()=>import("./pages/decks/[deckId]/cards/[cardId]/edit.svelte-f78217e5.js")),["/_app/pages/decks/[deckId]/cards/[cardId]/edit.svelte-f78217e5.js","/_app/chunks/index-4d8bfc51.js","/_app/chunks/singletons-dd9f995d.js","/_app/chunks/decks-03deb0ad.js","/_app/chunks/preload-helper-9f12a5fd.js","/_app/chunks/Root-473887a8.js"]),()=>N((()=>import("./pages/decks/[deckId]/edit.svelte-845d691d.js")),["/_app/pages/decks/[deckId]/edit.svelte-845d691d.js","/_app/chunks/index-4d8bfc51.js","/_app/chunks/preload-helper-9f12a5fd.js","/_app/chunks/Root-473887a8.js","/_app/chunks/decks-03deb0ad.js"])],ot=decodeURIComponent,at=()=>({}),it=[{pattern:/^\/$/,params:at,parts:[nt[0]]},{pattern:/^\/decks\/?$/,params:at,parts:[nt[1]]},{pattern:/^\/decks\/([^/]+?)\/cards\/([^/]+?)\/edit\/?$/,params:t=>({deckId:ot(t[1]),cardId:ot(t[2])}),parts:[nt[2]]},{pattern:/^\/decks\/([^/]+?)\/edit\/?$/,params:t=>({deckId:ot(t[1])}),parts:[nt[3]]}],ct=[];function lt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ut(){return{x:pageXOffset,y:pageYOffset}}class ht{constructor({base:t,host:e,pages:s,ignore:r}){this.base=t,this.host=e,this.pages=s,this.ignore=r,this.history=window.history||{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"}}init(t){let e;this.renderer=t,t.router=this,"scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{this.history.scrollRestoration="auto"})),addEventListener("load",(()=>{this.history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=o(o({},history.state||{}),{"sveltekit:scroll":ut()});history.replaceState(t,document.title,window.location.href)}),50)})),addEventListener("click",(t=>{if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=lt(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(s?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const o=this.select(n);if(o){const s=e.hasAttribute("sveltekit:noscroll");this.renderer.notify(o.page),this.history.pushState({},"",n.href),this.navigate(o,s?ut():null,[],n.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state){const e=new URL(location.href),s=this.select(e);s?this.navigate(s,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),this.history.replaceState({},"",location.href)}select(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;let e=t.pathname.slice(this.base.length);if(""===e&&(e="/"),!this.ignore.some((t=>t.test(e))))for(const s of this.pages){const r=s.pattern.exec(e);if(r){const n=new URLSearchParams(t.search),o=s.params(r),a={host:this.host,path:e,query:n,params:o};return{nodes:s.parts.map((t=>t())),page:a}}}}async goto(t,{noscroll:e=!1,replaceState:s=!1}={},r){const n=new URL(t,function(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}(document)),o=this.select(n);return o?(this.renderer.notify(o.page),this.history[s?"replaceState":"pushState"]({},"",t),this.navigate(o,e?ut():null,r,n.hash)):(location.href=t,new Promise((()=>{})))}async navigate(t,e,s,r){location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.render(t,s),document.body.focus();const n=r&&document.getElementById(r.slice(1));e?scrollTo(e.x,e.y):n?scrollTo(0,n.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function pt(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,s=t.status;return e instanceof Error?!s||s<400||s>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:s,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function dt(t){const e=z(t);let s=!0;return{notify:function(){s=!0,e.update((t=>t))},set:function(t){s=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||s&&e!==r)&&t(r=e)}))}}}class ft{constructor({Root:t,layout:e,target:s,session:r}){this.Root=t,this.layout=e,this.router=null,this.target=s,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.prefetching={href:null,promise:null},this.stores={page:dt({}),navigating:z(null),session:z(r)},this.$session=null,this.root=null;const n=t=>{const e=lt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let o;addEventListener("touchstart",n),addEventListener("mousemove",(t=>{clearTimeout(o),o=setTimeout((()=>{n(t)}),20)}));let a=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!a)return;this.current.session_changed=!0;const e=this.router.select(new URL(location.href));this.render(e)})),a=!0}async start(t,e,s){const r={stores:this.stores,error:s,status:e,page:t.page};if(s)r.components=[this.layout.default];else{const e=await this.hydrate(t);if(e.redirect)throw new Error("TODO client-side redirects");Object.assign(r,e.props),this.current=e.state}this.root=new this.Root({target:this.target,props:r,hydrate:!0}),this.started=!0}notify(t){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.stores.navigating.set({from:this.current.page,to:t})}async render(t,e){const s=this.token={},r=await this.hydrate(t);if(this.token===s){if(r.redirect){if(!(e.length>10||e.includes(this.current.page.path)))return void this.router.goto(r.redirect,{replaceState:!0},[...e||[],this.current.page.path]);r.props.status=500,r.props.error=new Error("Redirect loop")}this.current=r.state,this.root.$set(r.props),await this.stores.navigating.set(null),dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}async hydrate({nodes:t,page:n}){const a={status:200,error:null,components:[]},i=(t,n)=>{if(!this.started){const n=document.querySelector(`script[type="svelte-data"][url="${t}"]`);if(n){const t=JSON.parse(n.textContent),{body:o}=t,a=((t,n)=>{var o={};for(var a in t)e.call(t,a)&&n.indexOf(a)<0&&(o[a]=t[a]);if(null!=t&&s)for(var a of s(t))n.indexOf(a)<0&&r.call(t,a)&&(o[a]=t[a]);return o})(t,["body"]);return Promise.resolve(new Response(o,a))}}return fetch(t,n)},c=n.query.toString(),l={page:n,query:c,session_changed:!1,nodes:[],contexts:[]},u=[this.layout,...t],h=[];let p,d;const f={params:Object.keys(n.params).filter((t=>!this.current.page||this.current.page.params[t]!==n.params[t])),query:c!==this.current.query,session:this.current.session_changed,context:!1};try{for(let t=0;t<u.length;t+=1){const e=this.current.nodes[t],s=this.current.contexts[t],{default:r,preload:m,load:g}=await u[t];if(a.components[t]=r,m)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#load");if(!e||r!==e.component||f.params.some((t=>e.uses.params.has(t)))||f.query&&e.uses.query||f.session&&e.uses.session||f.context&&e.uses.context){const e=n.path+c,s=this.caches.get(r),u=s&&s.get(e);let m,y;if(!u||f.context&&u.node.uses.context){m={component:r,uses:{params:new Set,query:!1,session:!1,context:!1}};const t={};for(const s in n.params)Object.defineProperty(t,s,{get:()=>(m.uses.params.add(s),n.params[s]),enumerable:!0});const e=this.$session;y=g&&await g.call(null,{page:{host:n.host,path:n.path,params:t,get query(){return m.uses.query=!0,n.query}},get session(){return m.uses.session=!0,e},get context(){return m.uses.context=!0,o({},p)},fetch:i})}else({node:m,loaded:y}=u);if(y){if(y=pt(y),y.error)return a.error=y.error,a.status=y.status||500,l.nodes=[],{redirect:d,props:a,state:l};if(y.redirect){d=y.redirect;break}if(y.context&&(f.context=!0,p=o(o({},p),y.context)),y.maxage){this.caches.has(r)||this.caches.set(r,new Map);const t=this.caches.get(r),s={node:m,loaded:y};t.set(e,s);let n=!1;const o=setTimeout((()=>{a()}),1e3*y.maxage),a=()=>{t.get(e)===s&&t.delete(e),i(),clearTimeout(o)},i=this.stores.session.subscribe((()=>{n&&a()}));n=!0}h[t]=y.props}l.nodes[t]=m,l.contexts[t]=p}else l.nodes[t]=e,l.contexts[t]=p=s}(await Promise.all(h)).forEach(((t,e)=>{t&&(a[`props_${e}`]=t)})),this.current.page&&n.path===this.current.page.path&&!f.query||(a.page=n)}catch(m){a.error=m,a.status=500,l.nodes=[]}return{redirect:d,props:a,state:l}}async prefetch(t){const e=this.router.select(t);if(e)return t.href!==this.prefetching.href&&(this.prefetching={href:t.href,promise:this.hydrate(e)}),this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`)}}async function mt({paths:t,target:e,session:s,error:r,status:n,nodes:o,page:a}){const i=new ht({base:t.base,host:a.host,pages:it,ignore:ct}),c=new ft({Root:tt,layout:rt,target:e,session:s});B({router:i,renderer:c}),i.init(c),await c.start({nodes:o,page:a},n,r),dispatchEvent(new CustomEvent("sveltekit:start"))}export{mt as start};