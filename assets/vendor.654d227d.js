function j(){}function A(t){return t()}function S(){return Object.create(null)}function a(t){t.forEach(A)}function L(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function K(t,e){t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function R(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function W(){return C(" ")}function X(){return C("")}function Y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Z(t){return function(e){return e.preventDefault(),t.call(this,e)}}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function q(t){return Array.from(t.childNodes)}function et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function nt(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let l;function d(t){l=t}function B(){if(!l)throw new Error("Function called outside component initialization");return l}function rt(t){B().$$.after_update.push(t)}const _=[],N=[],h=[],O=[],D=Promise.resolve();let $=!1;function F(){$||($=!0,D.then(z))}function x(t){h.push(t)}const b=new Set;let p=0;function z(){const t=l;do{for(;p<_.length;){const e=_[p];p++,d(e),M(e.$$)}for(d(null),_.length=0,p=0;N.length;)N.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];b.has(n)||(b.add(n),n())}h.length=0}while(_.length);for(;O.length;)O.pop()();$=!1,b.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const m=new Set;let i;function ot(){i={r:0,c:[],p:i}}function st(){i.r||a(i.c),i=i.p}function U(t,e){t&&t.i&&(m.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(m.has(t))return;m.add(t),i.c.push(()=>{m.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function ct(t){t&&t.c()}function G(t,e,n,r){const{fragment:s,on_mount:g,on_destroy:f,after_update:y}=t.$$;s&&s.m(e,n),r||x(()=>{const c=g.map(A).filter(L);f?f.push(...c):a(c),t.$$.on_mount=[]}),y.forEach(x)}function H(t,e){const n=t.$$;n.fragment!==null&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){t.$$.dirty[0]===-1&&(_.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(t,e,n,r,s,g,f,y=[-1]){const c=l;d(t);const o=t.$$={fragment:null,ctx:null,props:g,update:j,not_equal:s,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:S(),dirty:y,skip_bound:!1,root:e.target||c.$$.root};f&&f(o.root);let w=!1;if(o.ctx=n?n(t,e.props||{},(u,v,...E)=>{const k=E.length?E[0]:v;return o.ctx&&s(o.ctx[u],o.ctx[u]=k)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](k),w&&I(t,u)),v}):[],o.update(),w=!0,a(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const u=q(e.target);o.fragment&&o.fragment.l(u),u.forEach(T)}else o.fragment&&o.fragment.c();e.intro&&U(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),z()}d(c)}class ft{$destroy(){H(this,1),this.$destroy=j}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!P(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ft as S,nt as a,tt as b,Q as c,K as d,V as e,et as f,T as g,ct as h,it as i,U as j,ut as k,H as l,G as m,j as n,X as o,ot as p,st as q,R as r,J as s,C as t,W as u,Y as v,Z as w,a as x,rt as y,N as z};
