(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function hi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const se={},rn=[],je=()=>{},yu=()=>!1,vu=/^on[^a-z]/,Kr=t=>vu.test(t),pi=t=>t.startsWith("onUpdate:"),_e=Object.assign,mi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bu=Object.prototype.hasOwnProperty,K=(t,e)=>bu.call(t,e),F=Array.isArray,sn=t=>qr(t)==="[object Map]",Va=t=>qr(t)==="[object Set]",V=t=>typeof t=="function",he=t=>typeof t=="string",gi=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Wa=t=>oe(t)&&V(t.then)&&V(t.catch),za=Object.prototype.toString,qr=t=>za.call(t),Eu=t=>qr(t).slice(8,-1),Ka=t=>qr(t)==="[object Object]",_i=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gr=hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wu=/-(\w)/g,tt=Jr(t=>t.replace(wu,(e,n)=>n?n.toUpperCase():"")),Iu=/\B([A-Z])/g,En=Jr(t=>t.replace(Iu,"-$1").toLowerCase()),Gr=Jr(t=>t.charAt(0).toUpperCase()+t.slice(1)),gs=Jr(t=>t?`on${Gr(t)}`:""),$n=(t,e)=>!Object.is(t,e),_r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Tu=t=>{const e=he(t)?Number(t):NaN;return isNaN(e)?t:e};let co;const Us=()=>co||(co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yi(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?Au(r):yi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(he(t))return t;if(oe(t))return t}}const Ru=/;(?![^(]*\))/g,Su=/:([^]+)/,Cu=/\/\*[^]*?\*\//g;function Au(t){const e={};return t.replace(Cu,"").split(Ru).forEach(n=>{if(n){const r=n.split(Su);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yr(t){let e="";if(he(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Yr(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ou=hi(Pu);function qa(t){return!!t||t===""}const Ht=t=>he(t)?t:t==null?"":F(t)||oe(t)&&(t.toString===za||!V(t.toString))?JSON.stringify(t,Ja,2):String(t),Ja=(t,e)=>e&&e.__v_isRef?Ja(t,e.value):sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Va(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!F(e)&&!Ka(e)?String(e):e;let Be;class ku{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!e&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Nu(t,e=Be){e&&e.active&&e.effects.push(t)}function xu(){return Be}const vi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ga=t=>(t.w&kt)>0,Ya=t=>(t.n&kt)>0,Du=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kt},Lu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ga(s)&&!Ya(s)?s.delete(t):e[n++]=s,s.w&=~kt,s.n&=~kt}e.length=n}},Fs=new WeakMap;let kn=0,kt=1;const Bs=30;let He;const Vt=Symbol(""),$s=Symbol("");class bi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Nu(this,r)}run(){if(!this.active)return this.fn();let e=He,n=Ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,Ct=!0,kt=1<<++kn,kn<=Bs?Du(this):lo(this),this.fn()}finally{kn<=Bs&&Lu(this),kt=1<<--kn,He=this.parent,Ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(lo(this),this.onStop&&this.onStop(),this.active=!1)}}function lo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ct=!0;const Xa=[];function wn(){Xa.push(Ct),Ct=!1}function In(){const t=Xa.pop();Ct=t===void 0?!0:t}function Pe(t,e,n){if(Ct&&He){let r=Fs.get(t);r||Fs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=vi()),Qa(s)}}function Qa(t,e){let n=!1;kn<=Bs?Ya(t)||(t.n|=kt,n=!Ga(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function ft(t,e,n,r,s,i){const o=Fs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?_i(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),sn(t)&&a.push(o.get($s)));break;case"delete":F(t)||(a.push(o.get(Vt)),sn(t)&&a.push(o.get($s)));break;case"set":sn(t)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&Hs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Hs(vi(c))}}function Hs(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&uo(r);for(const r of n)r.computed||uo(r)}function uo(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Mu=hi("__proto__,__v_isRef,__isVue"),Za=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gi)),Uu=Ei(),Fu=Ei(!1,!0),Bu=Ei(!0),fo=$u();function $u(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wn();const r=G(this)[e].apply(this,n);return In(),r}}),t}function Hu(t){const e=G(this);return Pe(e,"has",t),e.hasOwnProperty(t)}function Ei(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?rf:sc:e?rc:nc).get(r))return r;const o=F(r);if(!t){if(o&&K(fo,s))return Reflect.get(fo,s,i);if(s==="hasOwnProperty")return Hu}const a=Reflect.get(r,s,i);return(gi(s)?Za.has(s):Mu(s))||(t||Pe(r,"get",s),e)?a:Ie(a)?o&&_i(s)?a:a.value:oe(a)?t?oc(a):Qr(a):a}}const ju=ec(),Vu=ec(!0);function ec(t=!1){return function(n,r,s,i){let o=n[r];if(dn(o)&&Ie(o)&&!Ie(s))return!1;if(!t&&(!kr(s)&&!dn(s)&&(o=G(o),s=G(s)),!F(n)&&Ie(o)&&!Ie(s)))return o.value=s,!0;const a=F(n)&&_i(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?$n(s,o)&&ft(n,"set",r,s):ft(n,"add",r,s)),c}}function Wu(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ft(t,"delete",e,void 0),r}function zu(t,e){const n=Reflect.has(t,e);return(!gi(e)||!Za.has(e))&&Pe(t,"has",e),n}function Ku(t){return Pe(t,"iterate",F(t)?"length":Vt),Reflect.ownKeys(t)}const tc={get:Uu,set:ju,deleteProperty:Wu,has:zu,ownKeys:Ku},qu={get:Bu,set(t,e){return!0},deleteProperty(t,e){return!0}},Ju=_e({},tc,{get:Fu,set:Vu}),wi=t=>t,Xr=t=>Reflect.getPrototypeOf(t);function lr(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(e!==i&&Pe(s,"get",e),Pe(s,"get",i));const{has:o}=Xr(s),a=r?wi:n?Ri:Hn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ur(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(t!==s&&Pe(r,"has",t),Pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function fr(t,e=!1){return t=t.__v_raw,!e&&Pe(G(t),"iterate",Vt),Reflect.get(t,"size",t)}function ho(t){t=G(t);const e=G(this);return Xr(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function po(t,e){e=G(e);const n=G(this),{has:r,get:s}=Xr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?$n(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function mo(t){const e=G(this),{has:n,get:r}=Xr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ft(e,"delete",t,void 0),i}function go(){const t=G(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function dr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?wi:t?Ri:Hn;return!t&&Pe(a,"iterate",Vt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function hr(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=sn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?wi:e?Ri:Hn;return!e&&Pe(i,"iterate",c?$s:Vt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:this}}function Gu(){const t={get(i){return lr(this,i)},get size(){return fr(this)},has:ur,add:ho,set:po,delete:mo,clear:go,forEach:dr(!1,!1)},e={get(i){return lr(this,i,!1,!0)},get size(){return fr(this)},has:ur,add:ho,set:po,delete:mo,clear:go,forEach:dr(!1,!0)},n={get(i){return lr(this,i,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:dr(!0,!1)},r={get(i){return lr(this,i,!0,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hr(i,!1,!1),n[i]=hr(i,!0,!1),e[i]=hr(i,!1,!0),r[i]=hr(i,!0,!0)}),[t,n,e,r]}const[Yu,Xu,Qu,Zu]=Gu();function Ii(t,e){const n=e?t?Zu:Qu:t?Xu:Yu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const ef={get:Ii(!1,!1)},tf={get:Ii(!1,!0)},nf={get:Ii(!0,!1)},nc=new WeakMap,rc=new WeakMap,sc=new WeakMap,rf=new WeakMap;function sf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function of(t){return t.__v_skip||!Object.isExtensible(t)?0:sf(Eu(t))}function Qr(t){return dn(t)?t:Ti(t,!1,tc,ef,nc)}function ic(t){return Ti(t,!1,Ju,tf,rc)}function oc(t){return Ti(t,!0,qu,nf,sc)}function Ti(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=of(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function on(t){return dn(t)?on(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function kr(t){return!!(t&&t.__v_isShallow)}function ac(t){return on(t)||dn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function cc(t){return Or(t,"__v_skip",!0),t}const Hn=t=>oe(t)?Qr(t):t,Ri=t=>oe(t)?oc(t):t;function lc(t){Ct&&He&&(t=G(t),Qa(t.dep||(t.dep=vi())))}function uc(t,e){t=G(t);const n=t.dep;n&&Hs(n)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function me(t){return fc(t,!1)}function af(t){return fc(t,!0)}function fc(t,e){return Ie(t)?t:new cf(t,e)}class cf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Hn(e)}get value(){return lc(this),this._value}set value(e){const n=this.__v_isShallow||kr(e)||dn(e);e=n?e:G(e),$n(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hn(e),uc(this))}}function ge(t){return Ie(t)?t.value:t}const lf={get:(t,e,n)=>ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ie(s)&&!Ie(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dc(t){return on(t)?t:new Proxy(t,lf)}class uf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new bi(e,()=>{this._dirty||(this._dirty=!0,uc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return lc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ff(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=je):(r=t.get,s=t.set),new uf(r,s,i||!s,n)}function At(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Zn(i,e,n)}return s}function Ve(t,e,n,r){if(V(t)){const i=At(t,e,n,r);return i&&Wa(i)&&i.catch(o=>{Zn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ve(t[i],e,n,r));return s}function Zn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){At(c,null,10,[t,o,a]);return}}df(t,n,s,r)}function df(t,e,n,r=!0){console.error(t)}let jn=!1,js=!1;const we=[];let Xe=0;const an=[];let ot=null,Bt=0;const hc=Promise.resolve();let Si=null;function pc(t){const e=Si||hc;return t?e.then(this?t.bind(this):t):e}function hf(t){let e=Xe+1,n=we.length;for(;e<n;){const r=e+n>>>1;Vn(we[r])<t?e=r+1:n=r}return e}function Ci(t){(!we.length||!we.includes(t,jn&&t.allowRecurse?Xe+1:Xe))&&(t.id==null?we.push(t):we.splice(hf(t.id),0,t),mc())}function mc(){!jn&&!js&&(js=!0,Si=hc.then(yc))}function pf(t){const e=we.indexOf(t);e>Xe&&we.splice(e,1)}function gc(t){F(t)?an.push(...t):(!ot||!ot.includes(t,t.allowRecurse?Bt+1:Bt))&&an.push(t),mc()}function _o(t,e=jn?Xe+1:0){for(;e<we.length;e++){const n=we[e];n&&n.pre&&(we.splice(e,1),e--,n())}}function _c(t){if(an.length){const e=[...new Set(an)];if(an.length=0,ot){ot.push(...e);return}for(ot=e,ot.sort((n,r)=>Vn(n)-Vn(r)),Bt=0;Bt<ot.length;Bt++)ot[Bt]();ot=null,Bt=0}}const Vn=t=>t.id==null?1/0:t.id,mf=(t,e)=>{const n=Vn(t)-Vn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yc(t){js=!1,jn=!0,we.sort(mf);const e=je;try{for(Xe=0;Xe<we.length;Xe++){const n=we[Xe];n&&n.active!==!1&&At(n,null,14)}}finally{Xe=0,we.length=0,_c(),jn=!1,Si=null,(we.length||an.length)&&yc()}}function gf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||se;p&&(s=n.map(_=>he(_)?_.trim():_)),f&&(s=n.map(Ms))}let a,c=r[a=gs(e)]||r[a=gs(tt(e))];!c&&i&&(c=r[a=gs(En(e))]),c&&Ve(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ve(l,t,6,s)}}function vc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const u=vc(l,e,!0);u&&(a=!0,_e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):_e(o,i),oe(t)&&r.set(t,o),o)}function Zr(t,e){return!t||!Kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,En(e))||K(t,e))}let De=null,es=null;function Nr(t){const e=De;return De=t,es=t&&t.type.__scopeId||null,e}function Ai(t){es=t}function Pi(){es=null}function Wt(t,e=De,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Po(-1);const i=Nr(e);let o;try{o=t(...s)}finally{Nr(i),r._d&&Po(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _s(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:_,ctx:g,inheritAttrs:w}=t;let N,k;const P=Nr(t);try{if(n.shapeFlag&4){const R=s||r;N=$e(u.call(R,R,f,i,_,p,g)),k=c}else{const R=e;N=$e(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),k=e.props?c:yf(c)}}catch(R){Mn.length=0,Zn(R,t,1),N=le(dt)}let H=N;if(k&&w!==!1){const R=Object.keys(k),{shapeFlag:B}=H;R.length&&B&7&&(o&&R.some(pi)&&(k=vf(k,o)),H=pn(H,k))}return n.dirs&&(H=pn(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),N=H,Nr(P),N}function _f(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Mr(r)){if(r.type!==dt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const yf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kr(n))&&((e||(e={}))[n]=t[n]);return e},vf=(t,e)=>{const n={};for(const r in t)(!pi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Zr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?yo(r,o,l):!0:!!o;return!1}function yo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Zr(n,i))return!0}return!1}function Oi({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ef=t=>t.__isSuspense,wf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?Tf(e,n,r,s,i,o,a,c,l):Rf(t,e,n,r,s,o,a,c,l)},hydrate:Sf,create:ki,normalize:Cf},If=wf;function Wn(t,e){const n=t.props&&t.props[e];V(n)&&n()}function Tf(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),p=t.suspense=ki(t,s,r,e,f,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(Wn(t,"onPending"),Wn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),cn(p,t.ssFallback)):p.resolve(!1,!0)}function Rf(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,_=e.ssFallback,{activeBranch:g,pendingBranch:w,isInFallback:N,isHydrating:k}=f;if(w)f.pendingBranch=p,wt(p,w)?(c(w,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():N&&(c(g,_,n,r,s,null,i,o,a),cn(f,_))):(f.pendingId++,k?(f.isHydrating=!1,f.activeBranch=w):l(w,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),N?(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(g,_,n,r,s,null,i,o,a),cn(f,_))):g&&wt(p,g)?(c(g,p,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(g&&wt(p,g))c(g,p,n,r,s,f,i,o,a),cn(f,p);else if(Wn(e,"onPending"),f.pendingBranch=p,f.pendingId++,c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:P,pendingId:H}=f;P>0?setTimeout(()=>{f.pendingId===H&&f.fallback(_)},P):P===0&&f.fallback(_)}}function ki(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:p,um:_,n:g,o:{parentNode:w,remove:N}}=l;let k;const P=Pf(t);P&&e!=null&&e.pendingBranch&&(k=e.pendingId,e.deps++);const H=t.props?Tu(t.props.timeout):void 0,R={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof H=="number"?H:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(B=!1,Y=!1){const{vnode:ie,activeBranch:ne,pendingBranch:ae,pendingId:ue,effects:ve,parentComponent:xe,container:be}=R;if(R.isHydrating)R.isHydrating=!1;else if(!B){const ce=ne&&ae.transition&&ae.transition.mode==="out-in";ce&&(ne.transition.afterLeave=()=>{ue===R.pendingId&&p(ae,be,J,0)});let{anchor:J}=R;ne&&(J=g(ne),_(ne,xe,R,!0)),ce||p(ae,be,J,0)}cn(R,ae),R.pendingBranch=null,R.isInFallback=!1;let Ue=R.parent,rt=!1;for(;Ue;){if(Ue.pendingBranch){Ue.effects.push(...ve),rt=!0;break}Ue=Ue.parent}rt||gc(ve),R.effects=[],P&&e&&e.pendingBranch&&k===e.pendingId&&(e.deps--,e.deps===0&&!Y&&e.resolve()),Wn(ie,"onResolve")},fallback(B){if(!R.pendingBranch)return;const{vnode:Y,activeBranch:ie,parentComponent:ne,container:ae,isSVG:ue}=R;Wn(Y,"onFallback");const ve=g(ie),xe=()=>{R.isInFallback&&(f(null,B,ae,ve,ne,null,ue,a,c),cn(R,B))},be=B.transition&&B.transition.mode==="out-in";be&&(ie.transition.afterLeave=xe),R.isInFallback=!0,_(ie,ne,null,!0),be||xe()},move(B,Y,ie){R.activeBranch&&p(R.activeBranch,B,Y,ie),R.container=B},next(){return R.activeBranch&&g(R.activeBranch)},registerDep(B,Y){const ie=!!R.pendingBranch;ie&&R.deps++;const ne=B.vnode.el;B.asyncDep.catch(ae=>{Zn(ae,B,0)}).then(ae=>{if(B.isUnmounted||R.isUnmounted||R.pendingId!==B.suspenseId)return;B.asyncResolved=!0;const{vnode:ue}=B;Js(B,ae,!1),ne&&(ue.el=ne);const ve=!ne&&B.subTree.el;Y(B,ue,w(ne||B.subTree.el),ne?null:g(B.subTree),R,o,c),ve&&N(ve),Oi(B,ue.el),ie&&--R.deps===0&&R.resolve()})},unmount(B,Y){R.isUnmounted=!0,R.activeBranch&&_(R.activeBranch,n,B,Y),R.pendingBranch&&_(R.pendingBranch,n,B,Y)}};return R}function Sf(t,e,n,r,s,i,o,a,c){const l=e.suspense=ki(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Cf(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=vo(r?n.default:n),t.ssFallback=r?vo(n.fallback):le(dt)}function vo(t){let e;if(V(t)){const n=hn&&t._c;n&&(t._d=!1,de()),t=t(),n&&(t._d=!0,e=Le,Uc())}return F(t)&&(t=_f(t)),t=$e(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Af(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):gc(t)}function cn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Oi(r,s))}function Pf(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const pr={};function yr(t,e,n){return bc(t,e,n)}function bc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=se){var a;const c=xu()===((a=ye)==null?void 0:a.scope)?ye:null;let l,u=!1,f=!1;if(Ie(t)?(l=()=>t.value,u=kr(t)):on(t)?(l=()=>t,r=!0):F(t)?(f=!0,u=t.some(R=>on(R)||kr(R)),l=()=>t.map(R=>{if(Ie(R))return R.value;if(on(R))return jt(R);if(V(R))return At(R,c,2)})):V(t)?e?l=()=>At(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Ve(t,c,3,[_])}:l=je,e&&r){const R=l;l=()=>jt(R())}let p,_=R=>{p=P.onStop=()=>{At(R,c,4)}},g;if(zn)if(_=je,e?n&&Ve(e,c,3,[l(),f?[]:void 0,_]):l(),s==="sync"){const R=bd();g=R.__watcherHandles||(R.__watcherHandles=[])}else return je;let w=f?new Array(t.length).fill(pr):pr;const N=()=>{if(P.active)if(e){const R=P.run();(r||u||(f?R.some((B,Y)=>$n(B,w[Y])):$n(R,w)))&&(p&&p(),Ve(e,c,3,[R,w===pr?void 0:f&&w[0]===pr?[]:w,_]),w=R)}else P.run()};N.allowRecurse=!!e;let k;s==="sync"?k=N:s==="post"?k=()=>Ae(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),k=()=>Ci(N));const P=new bi(l,k);e?n?N():w=P.run():s==="post"?Ae(P.run.bind(P),c&&c.suspense):P.run();const H=()=>{P.stop(),c&&c.scope&&mi(c.scope.effects,P)};return g&&g.push(H),H}function Of(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?Ec(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=ye;mn(this);const a=bc(s,i.bind(r),n);return o?mn(o):zt(),a}function Ec(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function jt(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))jt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)jt(t[n],e);else if(Va(t)||sn(t))t.forEach(n=>{jt(n,e)});else if(Ka(t))for(const n in t)jt(t[n],e);return t}function Ye(t,e){const n=De;if(n===null)return t;const r=ss(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=se]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&jt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(wn(),Ve(c,n,8,[t.el,a,t,e]),In())}}function wc(t,e){return V(t)?(()=>_e({name:t.name},e,{setup:t}))():t}const vr=t=>!!t.type.__asyncLoader,Ic=t=>t.type.__isKeepAlive;function kf(t,e){Tc(t,"a",e)}function Nf(t,e){Tc(t,"da",e)}function Tc(t,e,n=ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ts(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ic(s.parent.vnode)&&xf(r,e,n,s),s=s.parent}}function xf(t,e,n,r){const s=ts(e,t,r,!0);Sc(()=>{mi(r[e],s)},n)}function ts(t,e,n=ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wn(),mn(n);const a=Ve(e,n,t,o);return zt(),In(),a});return r?s.unshift(i):s.push(i),i}}const pt=t=>(e,n=ye)=>(!zn||t==="sp")&&ts(t,(...r)=>e(...r),n),Df=pt("bm"),Rc=pt("m"),Lf=pt("bu"),Mf=pt("u"),Uf=pt("bum"),Sc=pt("um"),Ff=pt("sp"),Bf=pt("rtg"),$f=pt("rtc");function Hf(t,e=ye){ts("ec",t,e)}const Cc="components";function Ni(t,e){return Vf(Cc,t,!0,e)||t}const jf=Symbol.for("v-ndc");function Vf(t,e,n=!0,r=!1){const s=De||ye;if(s){const i=s.type;if(t===Cc){const a=_d(i,!1);if(a&&(a===e||a===tt(e)||a===Gr(tt(e))))return i}const o=bo(s[t]||i[t],e)||bo(s.appContext[t],e);return!o&&r?i:o}}function bo(t,e){return t&&(t[e]||t[tt(e)]||t[Gr(tt(e))])}function Ac(t,e,n,r){let s;const i=n&&n[r];if(F(t)||he(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Vs=t=>t?Hc(t)?ss(t)||t.proxy:Vs(t.parent):null,Ln=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vs(t.parent),$root:t=>Vs(t.root),$emit:t=>t.emit,$options:t=>xi(t),$forceUpdate:t=>t.f||(t.f=()=>Ci(t.update)),$nextTick:t=>t.n||(t.n=pc.bind(t.proxy)),$watch:t=>Of.bind(t)}),ys=(t,e)=>t!==se&&!t.__isScriptSetup&&K(t,e),Wf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ys(r,e))return o[e]=1,r[e];if(s!==se&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==se&&K(n,e))return o[e]=4,n[e];Ws&&(o[e]=0)}}const u=Ln[e];let f,p;if(u)return e==="$attrs"&&Pe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==se&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ys(s,e)?(s[e]=n,!0):r!==se&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&K(t,o)||ys(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(Ln,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Eo(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ws=!0;function zf(t){const e=xi(t),n=t.proxy,r=t.ctx;Ws=!1,e.beforeCreate&&wo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:_,updated:g,activated:w,deactivated:N,beforeDestroy:k,beforeUnmount:P,destroyed:H,unmounted:R,render:B,renderTracked:Y,renderTriggered:ie,errorCaptured:ne,serverPrefetch:ae,expose:ue,inheritAttrs:ve,components:xe,directives:be,filters:Ue}=e;if(l&&Kf(l,r,null),o)for(const J in o){const X=o[J];V(X)&&(r[J]=X.bind(n))}if(s){const J=s.call(n,n);oe(J)&&(t.data=Qr(J))}if(Ws=!0,i)for(const J in i){const X=i[J],st=V(X)?X.bind(n,n):V(X.get)?X.get.bind(n,n):je,mt=!V(X)&&V(X.set)?X.set.bind(n):je,qe=Ne({get:st,set:mt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Ce=>qe.value=Ce})}if(a)for(const J in a)Pc(a[J],r,n,J);if(c){const J=V(c)?c.call(n):c;Reflect.ownKeys(J).forEach(X=>{br(X,J[X])})}u&&wo(u,t,"c");function ce(J,X){F(X)?X.forEach(st=>J(st.bind(n))):X&&J(X.bind(n))}if(ce(Df,f),ce(Rc,p),ce(Lf,_),ce(Mf,g),ce(kf,w),ce(Nf,N),ce(Hf,ne),ce($f,Y),ce(Bf,ie),ce(Uf,P),ce(Sc,R),ce(Ff,ae),F(ue))if(ue.length){const J=t.exposed||(t.exposed={});ue.forEach(X=>{Object.defineProperty(J,X,{get:()=>n[X],set:st=>n[X]=st})})}else t.exposed||(t.exposed={});B&&t.render===je&&(t.render=B),ve!=null&&(t.inheritAttrs=ve),xe&&(t.components=xe),be&&(t.directives=be)}function Kf(t,e,n=je){F(t)&&(t=zs(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),Ie(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wo(t,e,n){Ve(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pc(t,e,n,r){const s=r.includes(".")?Ec(n,r):()=>n[r];if(he(t)){const i=e[t];V(i)&&yr(s,i)}else if(V(t))yr(s,t.bind(n));else if(oe(t))if(F(t))t.forEach(i=>Pc(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&yr(s,i,t)}}function xi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>xr(c,l,o,!0)),xr(c,e,o)),oe(e)&&i.set(e,c),c}function xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xr(t,i,n,!0),s&&s.forEach(o=>xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=qf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qf={data:Io,props:To,emits:To,methods:Nn,computed:Nn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Nn,directives:Nn,watch:Gf,provide:Io,inject:Jf};function Io(t,e){return e?t?function(){return _e(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Jf(t,e){return Nn(zs(t),zs(e))}function zs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Nn(t,e){return t?_e(Object.create(null),t,e):e}function To(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:_e(Object.create(null),Eo(t),Eo(e??{})):e}function Gf(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=Re(t[r],e[r]);return n}function Oc(){return{app:null,config:{isNativeTag:yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yf=0;function Xf(t,e){return function(r,s=null){V(r)||(r=_e({},r)),s!=null&&!oe(s)&&(s=null);const i=Oc(),o=new Set;let a=!1;const c=i.app={_uid:Yf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ed,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...u)):V(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=le(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,ss(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Dr=c;try{return l()}finally{Dr=null}}};return c}}let Dr=null;function br(t,e){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=ye||De;if(r||Dr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}function Qf(t,e,n,r=!1){const s={},i={};Or(i,rs,1),t.propsDefaults=Object.create(null),kc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ic(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Zf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Zr(t.emitsOptions,p))continue;const _=e[p];if(c)if(K(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const g=tt(p);s[g]=Ks(c,a,g,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{kc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!K(e,f)&&((u=En(f))===f||!K(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ks(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!K(e,f))&&(delete i[f],l=!0)}l&&ft(t,"set","$attrs")}function kc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(gr(c))continue;const l=e[c];let u;s&&K(s,u=tt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Zr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ks(s,c,f,l[f],t,!K(l,f))}}return o}function Ks(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(mn(s),r=l[n]=c.call(null,e),zt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===En(n))&&(r=!0))}return r}function Nc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const u=f=>{c=!0;const[p,_]=Nc(f,e,!0);_e(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return oe(t)&&r.set(t,rn),rn;if(F(i))for(let u=0;u<i.length;u++){const f=tt(i[u]);Ro(f)&&(o[f]=se)}else if(i)for(const u in i){const f=tt(u);if(Ro(f)){const p=i[u],_=o[f]=F(p)||V(p)?{type:p}:_e({},p);if(_){const g=Ao(Boolean,_.type),w=Ao(String,_.type);_[0]=g>-1,_[1]=w<0||g<w,(g>-1||K(_,"default"))&&a.push(f)}}}const l=[o,a];return oe(t)&&r.set(t,l),l}function Ro(t){return t[0]!=="$"}function So(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Co(t,e){return So(t)===So(e)}function Ao(t,e){return F(e)?e.findIndex(n=>Co(n,t)):V(e)&&Co(e,t)?0:-1}const xc=t=>t[0]==="_"||t==="$stable",Di=t=>F(t)?t.map($e):[$e(t)],ed=(t,e,n)=>{if(e._n)return e;const r=Wt((...s)=>Di(e(...s)),n);return r._c=!1,r},Dc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xc(s))continue;const i=t[s];if(V(i))e[s]=ed(s,i,r);else if(i!=null){const o=Di(i);e[s]=()=>o}}},Lc=(t,e)=>{const n=Di(e);t.slots.default=()=>n},td=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),Or(e,"_",n)):Dc(e,t.slots={})}else t.slots={},e&&Lc(t,e);Or(t.slots,rs,1)},nd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Dc(e,s)),o=e}else e&&(Lc(t,e),o={default:1});if(i)for(const a in s)!xc(a)&&!(a in o)&&delete s[a]};function qs(t,e,n,r,s=!1){if(F(t)){t.forEach((p,_)=>qs(p,e&&(F(e)?e[_]:e),n,r,s));return}if(vr(r)&&!s)return;const i=r.shapeFlag&4?ss(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(he(l)?(u[l]=null,K(f,l)&&(f[l]=null)):Ie(l)&&(l.value=null)),V(c))At(c,a,12,[o,u]);else{const p=he(c),_=Ie(c);if(p||_){const g=()=>{if(t.f){const w=p?K(f,c)?f[c]:u[c]:c.value;s?F(w)&&mi(w,i):F(w)?w.includes(i)||w.push(i):p?(u[c]=[i],K(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,K(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ae(g,n)):g()}}}const Ae=Af;function rd(t){return sd(t)}function sd(t,e){const n=Us();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:_=je,insertStaticContent:g}=t,w=(d,h,m,y=null,E=null,I=null,O=!1,S=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!wt(d,h)&&(y=b(d),Ce(d,E,I,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:T,ref:M,shapeFlag:D}=h;switch(T){case ns:N(d,h,m,y);break;case dt:k(d,h,m,y);break;case vs:d==null&&P(h,m,y,O);break;case ke:xe(d,h,m,y,E,I,O,S,C);break;default:D&1?B(d,h,m,y,E,I,O,S,C):D&6?be(d,h,m,y,E,I,O,S,C):(D&64||D&128)&&T.process(d,h,m,y,E,I,O,S,C,A)}M!=null&&E&&qs(M,d&&d.ref,I,h||d,!h)},N=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const E=h.el=d.el;h.children!==d.children&&l(E,h.children)}},k=(d,h,m,y)=>{d==null?r(h.el=c(h.children||""),m,y):h.el=d.el},P=(d,h,m,y)=>{[d.el,d.anchor]=g(d.children,h,m,y,d.el,d.anchor)},H=({el:d,anchor:h},m,y)=>{let E;for(;d&&d!==h;)E=p(d),r(d,m,y),d=E;r(h,m,y)},R=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},B=(d,h,m,y,E,I,O,S,C)=>{O=O||h.type==="svg",d==null?Y(h,m,y,E,I,O,S,C):ae(d,h,E,I,O,S,C)},Y=(d,h,m,y,E,I,O,S)=>{let C,T;const{type:M,props:D,shapeFlag:U,transition:j,dirs:W}=d;if(C=d.el=o(d.type,I,D&&D.is,D),U&8?u(C,d.children):U&16&&ne(d.children,C,null,y,E,I&&M!=="foreignObject",O,S),W&&Mt(d,null,y,"created"),ie(C,d,d.scopeId,O,y),D){for(const ee in D)ee!=="value"&&!gr(ee)&&i(C,ee,null,D[ee],I,d.children,y,E,Ee);"value"in D&&i(C,"value",null,D.value),(T=D.onVnodeBeforeMount)&&Ge(T,y,d)}W&&Mt(d,null,y,"beforeMount");const re=(!E||E&&!E.pendingBranch)&&j&&!j.persisted;re&&j.beforeEnter(C),r(C,h,m),((T=D&&D.onVnodeMounted)||re||W)&&Ae(()=>{T&&Ge(T,y,d),re&&j.enter(C),W&&Mt(d,null,y,"mounted")},E)},ie=(d,h,m,y,E)=>{if(m&&_(d,m),y)for(let I=0;I<y.length;I++)_(d,y[I]);if(E){let I=E.subTree;if(h===I){const O=E.vnode;ie(d,O,O.scopeId,O.slotScopeIds,E.parent)}}},ne=(d,h,m,y,E,I,O,S,C=0)=>{for(let T=C;T<d.length;T++){const M=d[T]=S?bt(d[T]):$e(d[T]);w(null,M,h,m,y,E,I,O,S)}},ae=(d,h,m,y,E,I,O)=>{const S=h.el=d.el;let{patchFlag:C,dynamicChildren:T,dirs:M}=h;C|=d.patchFlag&16;const D=d.props||se,U=h.props||se;let j;m&&Ut(m,!1),(j=U.onVnodeBeforeUpdate)&&Ge(j,m,h,d),M&&Mt(h,d,m,"beforeUpdate"),m&&Ut(m,!0);const W=E&&h.type!=="foreignObject";if(T?ue(d.dynamicChildren,T,S,m,y,W,I):O||X(d,h,S,null,m,y,W,I,!1),C>0){if(C&16)ve(S,h,D,U,m,y,E);else if(C&2&&D.class!==U.class&&i(S,"class",null,U.class,E),C&4&&i(S,"style",D.style,U.style,E),C&8){const re=h.dynamicProps;for(let ee=0;ee<re.length;ee++){const fe=re[ee],Fe=D[fe],Qt=U[fe];(Qt!==Fe||fe==="value")&&i(S,fe,Fe,Qt,E,d.children,m,y,Ee)}}C&1&&d.children!==h.children&&u(S,h.children)}else!O&&T==null&&ve(S,h,D,U,m,y,E);((j=U.onVnodeUpdated)||M)&&Ae(()=>{j&&Ge(j,m,h,d),M&&Mt(h,d,m,"updated")},y)},ue=(d,h,m,y,E,I,O)=>{for(let S=0;S<h.length;S++){const C=d[S],T=h[S],M=C.el&&(C.type===ke||!wt(C,T)||C.shapeFlag&70)?f(C.el):m;w(C,T,M,null,y,E,I,O,!0)}},ve=(d,h,m,y,E,I,O)=>{if(m!==y){if(m!==se)for(const S in m)!gr(S)&&!(S in y)&&i(d,S,m[S],null,O,h.children,E,I,Ee);for(const S in y){if(gr(S))continue;const C=y[S],T=m[S];C!==T&&S!=="value"&&i(d,S,T,C,O,h.children,E,I,Ee)}"value"in y&&i(d,"value",m.value,y.value)}},xe=(d,h,m,y,E,I,O,S,C)=>{const T=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:j}=h;j&&(S=S?S.concat(j):j),d==null?(r(T,m,y),r(M,m,y),ne(h.children,m,M,E,I,O,S,C)):D>0&&D&64&&U&&d.dynamicChildren?(ue(d.dynamicChildren,U,m,E,I,O,S),(h.key!=null||E&&h===E.subTree)&&Mc(d,h,!0)):X(d,h,m,M,E,I,O,S,C)},be=(d,h,m,y,E,I,O,S,C)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?E.ctx.activate(h,m,y,O,C):Ue(h,m,y,E,I,O,C):rt(d,h,C)},Ue=(d,h,m,y,E,I,O)=>{const S=d.component=dd(d,y,E);if(Ic(d)&&(S.ctx.renderer=A),hd(S),S.asyncDep){if(E&&E.registerDep(S,ce),!d.el){const C=S.subTree=le(dt);k(null,C,h,m)}return}ce(S,d,h,m,E,I,O)},rt=(d,h,m)=>{const y=h.component=d.component;if(bf(d,h,m))if(y.asyncDep&&!y.asyncResolved){J(y,h,m);return}else y.next=h,pf(y.update),y.update();else h.el=d.el,y.vnode=h},ce=(d,h,m,y,E,I,O)=>{const S=()=>{if(d.isMounted){let{next:M,bu:D,u:U,parent:j,vnode:W}=d,re=M,ee;Ut(d,!1),M?(M.el=W.el,J(d,M,O)):M=W,D&&_r(D),(ee=M.props&&M.props.onVnodeBeforeUpdate)&&Ge(ee,j,M,W),Ut(d,!0);const fe=_s(d),Fe=d.subTree;d.subTree=fe,w(Fe,fe,f(Fe.el),b(Fe),d,E,I),M.el=fe.el,re===null&&Oi(d,fe.el),U&&Ae(U,E),(ee=M.props&&M.props.onVnodeUpdated)&&Ae(()=>Ge(ee,j,M,W),E)}else{let M;const{el:D,props:U}=h,{bm:j,m:W,parent:re}=d,ee=vr(h);if(Ut(d,!1),j&&_r(j),!ee&&(M=U&&U.onVnodeBeforeMount)&&Ge(M,re,h),Ut(d,!0),D&&Q){const fe=()=>{d.subTree=_s(d),Q(D,d.subTree,d,E,null)};ee?h.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=_s(d);w(null,fe,m,y,d,E,I),h.el=fe.el}if(W&&Ae(W,E),!ee&&(M=U&&U.onVnodeMounted)){const fe=h;Ae(()=>Ge(M,re,fe),E)}(h.shapeFlag&256||re&&vr(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Ae(d.a,E),d.isMounted=!0,h=m=y=null}},C=d.effect=new bi(S,()=>Ci(T),d.scope),T=d.update=()=>C.run();T.id=d.uid,Ut(d,!0),T()},J=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,Zf(d,h.props,y,m),nd(d,h.children,m),wn(),_o(),In()},X=(d,h,m,y,E,I,O,S,C=!1)=>{const T=d&&d.children,M=d?d.shapeFlag:0,D=h.children,{patchFlag:U,shapeFlag:j}=h;if(U>0){if(U&128){mt(T,D,m,y,E,I,O,S,C);return}else if(U&256){st(T,D,m,y,E,I,O,S,C);return}}j&8?(M&16&&Ee(T,E,I),D!==T&&u(m,D)):M&16?j&16?mt(T,D,m,y,E,I,O,S,C):Ee(T,E,I,!0):(M&8&&u(m,""),j&16&&ne(D,m,y,E,I,O,S,C))},st=(d,h,m,y,E,I,O,S,C)=>{d=d||rn,h=h||rn;const T=d.length,M=h.length,D=Math.min(T,M);let U;for(U=0;U<D;U++){const j=h[U]=C?bt(h[U]):$e(h[U]);w(d[U],j,m,null,E,I,O,S,C)}T>M?Ee(d,E,I,!0,!1,D):ne(h,m,y,E,I,O,S,C,D)},mt=(d,h,m,y,E,I,O,S,C)=>{let T=0;const M=h.length;let D=d.length-1,U=M-1;for(;T<=D&&T<=U;){const j=d[T],W=h[T]=C?bt(h[T]):$e(h[T]);if(wt(j,W))w(j,W,m,null,E,I,O,S,C);else break;T++}for(;T<=D&&T<=U;){const j=d[D],W=h[U]=C?bt(h[U]):$e(h[U]);if(wt(j,W))w(j,W,m,null,E,I,O,S,C);else break;D--,U--}if(T>D){if(T<=U){const j=U+1,W=j<M?h[j].el:y;for(;T<=U;)w(null,h[T]=C?bt(h[T]):$e(h[T]),m,W,E,I,O,S,C),T++}}else if(T>U)for(;T<=D;)Ce(d[T],E,I,!0),T++;else{const j=T,W=T,re=new Map;for(T=W;T<=U;T++){const Oe=h[T]=C?bt(h[T]):$e(h[T]);Oe.key!=null&&re.set(Oe.key,T)}let ee,fe=0;const Fe=U-W+1;let Qt=!1,io=0;const Cn=new Array(Fe);for(T=0;T<Fe;T++)Cn[T]=0;for(T=j;T<=D;T++){const Oe=d[T];if(fe>=Fe){Ce(Oe,E,I,!0);continue}let Je;if(Oe.key!=null)Je=re.get(Oe.key);else for(ee=W;ee<=U;ee++)if(Cn[ee-W]===0&&wt(Oe,h[ee])){Je=ee;break}Je===void 0?Ce(Oe,E,I,!0):(Cn[Je-W]=T+1,Je>=io?io=Je:Qt=!0,w(Oe,h[Je],m,null,E,I,O,S,C),fe++)}const oo=Qt?id(Cn):rn;for(ee=oo.length-1,T=Fe-1;T>=0;T--){const Oe=W+T,Je=h[Oe],ao=Oe+1<M?h[Oe+1].el:y;Cn[T]===0?w(null,Je,m,ao,E,I,O,S,C):Qt&&(ee<0||T!==oo[ee]?qe(Je,m,ao,2):ee--)}}},qe=(d,h,m,y,E=null)=>{const{el:I,type:O,transition:S,children:C,shapeFlag:T}=d;if(T&6){qe(d.component.subTree,h,m,y);return}if(T&128){d.suspense.move(h,m,y);return}if(T&64){O.move(d,h,m,A);return}if(O===ke){r(I,h,m);for(let D=0;D<C.length;D++)qe(C[D],h,m,y);r(d.anchor,h,m);return}if(O===vs){H(d,h,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),Ae(()=>S.enter(I),E);else{const{leave:D,delayLeave:U,afterLeave:j}=S,W=()=>r(I,h,m),re=()=>{D(I,()=>{W(),j&&j()})};U?U(I,W,re):re()}else r(I,h,m)},Ce=(d,h,m,y=!1,E=!1)=>{const{type:I,props:O,ref:S,children:C,dynamicChildren:T,shapeFlag:M,patchFlag:D,dirs:U}=d;if(S!=null&&qs(S,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const j=M&1&&U,W=!vr(d);let re;if(W&&(re=O&&O.onVnodeBeforeUnmount)&&Ge(re,h,d),M&6)cr(d.component,m,y);else{if(M&128){d.suspense.unmount(m,y);return}j&&Mt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,E,A,y):T&&(I!==ke||D>0&&D&64)?Ee(T,h,m,!1,!0):(I===ke&&D&384||!E&&M&16)&&Ee(C,h,m),y&&Yt(d)}(W&&(re=O&&O.onVnodeUnmounted)||j)&&Ae(()=>{re&&Ge(re,h,d),j&&Mt(d,null,h,"unmounted")},m)},Yt=d=>{const{type:h,el:m,anchor:y,transition:E}=d;if(h===ke){Xt(m,y);return}if(h===vs){R(d);return}const I=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:S}=E,C=()=>O(m,I);S?S(d.el,I,C):C()}else I()},Xt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},cr=(d,h,m)=>{const{bum:y,scope:E,update:I,subTree:O,um:S}=d;y&&_r(y),E.stop(),I&&(I.active=!1,Ce(O,d,h,m)),S&&Ae(S,h),Ae(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ee=(d,h,m,y=!1,E=!1,I=0)=>{for(let O=I;O<d.length;O++)Ce(d[O],h,m,y,E)},b=d=>d.shapeFlag&6?b(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Ce(h._vnode,null,null,!0):w(h._vnode||null,d,h,null,null,null,m),_o(),_c(),h._vnode=d},A={p:w,um:Ce,m:qe,r:Yt,mt:Ue,mc:ne,pc:X,pbc:ue,n:b,o:t};let L,Q;return e&&([L,Q]=e(A)),{render:x,hydrate:L,createApp:Xf(x,L)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mc(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=bt(s[i]),a.el=o.el),n||Mc(o,a)),a.type===ns&&(a.el=o.el)}}function id(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const od=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),vs=Symbol.for("v-stc"),Mn=[];let Le=null;function de(t=!1){Mn.push(Le=t?null:[])}function Uc(){Mn.pop(),Le=Mn[Mn.length-1]||null}let hn=1;function Po(t){hn+=t}function Fc(t){return t.dynamicChildren=hn>0?Le||rn:null,Uc(),hn>0&&Le&&Le.push(t),t}function Se(t,e,n,r,s,i){return Fc(q(t,e,n,r,s,i,!0))}function Lr(t,e,n,r,s){return Fc(le(t,e,n,r,s,!0))}function Mr(t){return t?t.__v_isVNode===!0:!1}function wt(t,e){return t.type===e.type&&t.key===e.key}const rs="__vInternal",Bc=({key:t})=>t??null,Er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||Ie(t)||V(t)?{i:De,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bc(e),ref:e&&Er(e),scopeId:es,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return a?(Li(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),hn>0&&!o&&Le&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Le.push(c),c}const le=ad;function ad(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jf)&&(t=dt),Mr(t)){const a=pn(t,e,!0);return n&&Li(a,n),hn>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(t)]=a:Le.push(a)),a.patchFlag|=-2,a}if(yd(t)&&(t=t.__vccOpts),e){e=cd(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=Yr(a)),oe(c)&&(ac(c)&&!F(c)&&(c=_e({},c)),e.style=yi(c))}const o=he(t)?1:Ef(t)?128:od(t)?64:oe(t)?4:V(t)?2:0;return q(t,e,n,r,s,o,i,!0)}function cd(t){return t?ac(t)||rs in t?_e({},t):t:null}function pn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ld(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bc(a),ref:e&&e.ref?n&&s?F(s)?s.concat(Er(e)):[s,Er(e)]:Er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function wr(t=" ",e=0){return le(ns,null,t,e)}function $c(t="",e=!1){return e?(de(),Lr(dt,null,t)):le(dt,null,t)}function $e(t){return t==null||typeof t=="boolean"?le(dt):F(t)?le(ke,null,t.slice()):typeof t=="object"?bt(t):le(ns,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pn(t)}function Li(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Li(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(rs in e)?e._ctx=De:s===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:De},n=32):(e=String(e),r&64?(n=16,e=[wr(e)]):n=8);t.children=e,t.shapeFlag|=n}function ld(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yr([e.class,r.class]));else if(s==="style")e.style=yi([e.style,r.style]);else if(Kr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ge(t,e,n,r=null){Ve(t,e,7,[n,r])}const ud=Oc();let fd=0;function dd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ud,i={uid:fd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nc(r,s),emitsOptions:vc(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gf.bind(null,i),t.ce&&t.ce(i),i}let ye=null,Mi,Zt,Oo="__VUE_INSTANCE_SETTERS__";(Zt=Us()[Oo])||(Zt=Us()[Oo]=[]),Zt.push(t=>ye=t),Mi=t=>{Zt.length>1?Zt.forEach(e=>e(t)):Zt[0](t)};const mn=t=>{Mi(t),t.scope.on()},zt=()=>{ye&&ye.scope.off(),Mi(null)};function Hc(t){return t.vnode.shapeFlag&4}let zn=!1;function hd(t,e=!1){zn=e;const{props:n,children:r}=t.vnode,s=Hc(t);Qf(t,n,s,e),td(t,r);const i=s?pd(t,e):void 0;return zn=!1,i}function pd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cc(new Proxy(t.ctx,Wf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?gd(t):null;mn(t),wn();const i=At(r,t,0,[t.props,s]);if(In(),zt(),Wa(i)){if(i.then(zt,zt),e)return i.then(o=>{Js(t,o,e)}).catch(o=>{Zn(o,t,0)});t.asyncDep=i}else Js(t,i,e)}else jc(t,e)}function Js(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=dc(e)),jc(t,n)}let ko;function jc(t,e,n){const r=t.type;if(!t.render){if(!e&&ko&&!r.render){const s=r.template||xi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=ko(s,l)}}t.render=r.render||je}mn(t),wn(),zf(t),In(),zt()}function md(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}}))}function gd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return md(t)},slots:t.slots,emit:t.emit,expose:e}}function ss(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dc(cc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function _d(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function yd(t){return V(t)&&"__vccOpts"in t}const Ne=(t,e)=>ff(t,e,zn);function Vc(t,e,n){const r=arguments.length;return r===2?oe(e)&&!F(e)?Mr(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mr(n)&&(n=[n]),le(t,e,n))}const vd=Symbol.for("v-scx"),bd=()=>We(vd),Ed="3.3.4",wd="http://www.w3.org/2000/svg",$t=typeof document<"u"?document:null,No=$t&&$t.createElement("template"),Id={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?$t.createElementNS(wd,t):$t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$t.createTextNode(t),createComment:t=>$t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{No.innerHTML=r?`<svg>${t}</svg>`:t;const a=No.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Td(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rd(t,e,n){const r=t.style,s=he(n);if(n&&!s){if(e&&!he(e))for(const i in e)n[i]==null&&Gs(r,i,"");for(const i in n)Gs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const xo=/\s*!important$/;function Gs(t,e,n){if(F(n))n.forEach(r=>Gs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Sd(t,e);xo.test(n)?t.setProperty(En(r),n.replace(xo,""),"important"):t[r]=n}}const Do=["Webkit","Moz","ms"],bs={};function Sd(t,e){const n=bs[e];if(n)return n;let r=tt(e);if(r!=="filter"&&r in t)return bs[e]=r;r=Gr(r);for(let s=0;s<Do.length;s++){const i=Do[s]+r;if(i in t)return bs[e]=i}return e}const Lo="http://www.w3.org/1999/xlink";function Cd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lo,e.slice(6,e.length)):t.setAttributeNS(Lo,e,n);else{const i=Ou(e);n==null||i&&!qa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ad(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qa(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function en(t,e,n,r){t.addEventListener(e,n,r)}function Pd(t,e,n,r){t.removeEventListener(e,n,r)}function Od(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=kd(e);if(r){const l=i[e]=Dd(r,s);en(t,a,l,c)}else o&&(Pd(t,a,o,c),i[e]=void 0)}}const Mo=/(?:Once|Passive|Capture)$/;function kd(t){let e;if(Mo.test(t)){e={};let r;for(;r=t.match(Mo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let Es=0;const Nd=Promise.resolve(),xd=()=>Es||(Nd.then(()=>Es=0),Es=Date.now());function Dd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(Ld(r,n.value),e,5,[r])};return n.value=t,n.attached=xd(),n}function Ld(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uo=/^on[a-z]/,Md=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Td(t,r,s):e==="style"?Rd(t,n,r):Kr(e)?pi(e)||Od(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ud(t,e,r,s))?Ad(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cd(t,e,r,s))};function Ud(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uo.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uo.test(e)&&he(n)?!1:e in t}const Fo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>_r(e,n):e};function Fd(t){t.target.composing=!0}function Bo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const at={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Fo(s);const i=r||s.props&&s.props.type==="number";en(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ms(a)),t._assign(a)}),n&&en(t,"change",()=>{t.value=t.value.trim()}),e||(en(t,"compositionstart",Fd),en(t,"compositionend",Bo),en(t,"change",Bo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Fo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ms(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Bd=["ctrl","shift","alt","meta"],$d={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bd.some(n=>t[`${n}Key`]&&!e.includes(n))},Wc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=$d[e[s]];if(i&&i(n,e))return}return t(n,...r)},Hd={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):An(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),An(t,!0),r.enter(t)):r.leave(t,()=>{An(t,!1)}):An(t,e))},beforeUnmount(t,{value:e}){An(t,e)}};function An(t,e){t.style.display=e?t._vod:"none"}const jd=_e({patchProp:Md},Id);let $o;function Vd(){return $o||($o=rd(jd))}const Wd=(...t)=>{const e=Vd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zd(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zd(t){return he(t)?document.querySelector(t):t}const Kd="modulepreload",qd=function(t){return"/Naruto-API-Directory/"+t},Ho={},Jd=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=qd(i),i in Ho)return;Ho[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Kd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof window<"u";function Gd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function ws(t,e){const n={};for(const r in e){const s=e[r];n[r]=ze(s)?s.map(t):t(s)}return n}const Un=()=>{},ze=Array.isArray,Yd=/\/$/,Xd=t=>t.replace(Yd,"");function Is(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=th(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Qd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gn(e.matched[r],n.matched[s])&&zc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!eh(t[n],e[n]))return!1;return!0}function eh(t,e){return ze(t)?Vo(t,e):ze(e)?Vo(e,t):t===e}function Vo(t,e){return ze(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function th(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Kn;(function(t){t.pop="pop",t.push="push"})(Kn||(Kn={}));var Fn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fn||(Fn={}));function nh(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xd(t)}const rh=/^[^#]+#/;function sh(t,e){return t.replace(rh,"#")+e}function ih(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const is=()=>({left:window.pageXOffset,top:window.pageYOffset});function oh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ih(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wo(t,e){return(history.state?history.state.position-e:-1)+t}const Ys=new Map;function ah(t,e){Ys.set(t,e)}function ch(t){const e=Ys.get(t);return Ys.delete(t),e}let lh=()=>location.protocol+"//"+location.host;function Kc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),jo(c,"")}return jo(n,t)+r+s}function uh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=Kc(t,location),g=n.value,w=e.value;let N=0;if(p){if(n.value=_,e.value=p,o&&o===g){o=null;return}N=w?p.position-w.position:0}else r(_);s.forEach(k=>{k(n.value,g,{delta:N,type:Kn.pop,direction:N?N>0?Fn.forward:Fn.back:Fn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(Z({},p.state,{scroll:is()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function zo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?is():null}}function fh(t){const{history:e,location:n}=window,r={value:Kc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:lh()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=Z({},e.state,zo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Z({},s.value,e.state,{forward:c,scroll:is()});i(u.current,u,!0);const f=Z({},zo(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function dh(t){t=nh(t);const e=fh(t),n=uh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:sh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hh(t){return typeof t=="string"||t&&typeof t=="object"}function qc(t){return typeof t=="string"||typeof t=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Jc=Symbol("");var Ko;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ko||(Ko={}));function _n(t,e){return Z(new Error,{type:t,[Jc]:!0},e)}function it(t,e){return t instanceof Error&&Jc in t&&(e==null||!!(t.type&e))}const qo="[^/]+?",ph={sensitive:!1,strict:!1,start:!0,end:!0},mh=/[.+*?^${}()[\]/\\]/g;function gh(t,e){const n=Z({},ph,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(mh,"\\$&"),_+=40;else if(p.type===1){const{value:g,repeatable:w,optional:N,regexp:k}=p;i.push({name:g,repeatable:w,optional:N});const P=k||qo;if(P!==qo){_+=10;try{new RegExp(`(${P})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+R.message)}}let H=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(H=N&&l.length<2?`(?:/${H})`:"/"+H),N&&(H+="?"),s+=H,_+=20,N&&(_+=-8),w&&(_+=-20),P===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",g=i[p-1];f[g.name]=_&&g.repeatable?_.split("/"):_}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:g,repeatable:w,optional:N}=_,k=g in l?l[g]:"";if(ze(k)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=ze(k)?k.join("/"):k;if(!P)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=P}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function _h(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=_h(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jo(r))return 1;if(Jo(s))return-1}return s.length-r.length}function Jo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vh={type:0,value:""},bh=/[a-zA-Z0-9_]/;function Eh(t){if(!t)return[[]];if(t==="/")return[[vh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:bh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function wh(t,e,n){const r=gh(Eh(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ih(t,e){const n=[],r=new Map;e=Xo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const _=!p,g=Th(u);g.aliasOf=p&&p.record;const w=Xo(e,u),N=[g];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of H)N.push(Z({},g,{components:p?p.record.components:g.components,path:R,aliasOf:p?p.record:g}))}let k,P;for(const H of N){const{path:R}=H;if(f&&R[0]!=="/"){const B=f.record.path,Y=B[B.length-1]==="/"?"":"/";H.path=f.record.path+(R&&Y+R)}if(k=wh(H,f,w),p?p.alias.push(k):(P=P||k,P!==k&&P.alias.push(k),_&&u.name&&!Yo(k)&&o(u.name)),g.children){const B=g.children;for(let Y=0;Y<B.length;Y++)i(B[Y],k,p&&p.children[Y])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return P?()=>{o(P)}:Un}function o(u){if(qc(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&yh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Gc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Yo(u)&&r.set(u.record.name,u)}function l(u,f){let p,_={},g,w;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw _n(1,{location:u});w=p.record.name,_=Z(Go(f.params,p.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Go(u.params,p.keys.map(P=>P.name))),g=p.stringify(_)}else if("path"in u)g=u.path,p=n.find(P=>P.re.test(g)),p&&(_=p.parse(g),w=p.record.name);else{if(p=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!p)throw _n(1,{location:u,currentLocation:f});w=p.record.name,_=Z({},f.params,u.params),g=p.stringify(_)}const N=[];let k=p;for(;k;)N.unshift(k.record),k=k.parent;return{name:w,path:g,params:_,matched:N,meta:Sh(N)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Go(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Th(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Rh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Rh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Yo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Sh(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function Xo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Gc(t,e){return e.children.some(n=>n===t||Gc(t,n))}const Yc=/#/g,Ch=/&/g,Ah=/\//g,Ph=/=/g,Oh=/\?/g,Xc=/\+/g,kh=/%5B/g,Nh=/%5D/g,Qc=/%5E/g,xh=/%60/g,Zc=/%7B/g,Dh=/%7C/g,el=/%7D/g,Lh=/%20/g;function Ui(t){return encodeURI(""+t).replace(Dh,"|").replace(kh,"[").replace(Nh,"]")}function Mh(t){return Ui(t).replace(Zc,"{").replace(el,"}").replace(Qc,"^")}function Xs(t){return Ui(t).replace(Xc,"%2B").replace(Lh,"+").replace(Yc,"%23").replace(Ch,"%26").replace(xh,"`").replace(Zc,"{").replace(el,"}").replace(Qc,"^")}function Uh(t){return Xs(t).replace(Ph,"%3D")}function Fh(t){return Ui(t).replace(Yc,"%23").replace(Oh,"%3F")}function Bh(t){return t==null?"":Fh(t).replace(Ah,"%2F")}function Ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $h(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Xc," "),o=i.indexOf("="),a=Ur(o<0?i:i.slice(0,o)),c=o<0?null:Ur(i.slice(o+1));if(a in e){let l=e[a];ze(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Qo(t){let e="";for(let n in t){const r=t[n];if(n=Uh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&Xs(i)):[r&&Xs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Hh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jh=Symbol(""),Zo=Symbol(""),os=Symbol(""),Fi=Symbol(""),Qs=Symbol("");function Pn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Et(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(_n(4,{from:n,to:e})):f instanceof Error?a(f):hh(f)?a(_n(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Ts(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Vh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Et(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Gd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Et(p,n,r,i,o)()}))}}return s}function Vh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ea(t){const e=We(os),n=We(Fi),r=Ne(()=>e.resolve(ge(t.to))),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(gn.bind(null,u));if(p>-1)return p;const _=ta(c[l-2]);return l>1&&ta(u)===_&&f[f.length-1].path!==_?f.findIndex(gn.bind(null,c[l-2])):p}),i=Ne(()=>s.value>-1&&qh(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&zc(n.params,r.value.params));function a(c={}){return Kh(c)?e[ge(t.replace)?"replace":"push"](ge(t.to)).catch(Un):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Wh=wc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ea,setup(t,{slots:e}){const n=Qr(ea(t)),{options:r}=We(os),s=Ne(()=>({[na(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[na(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Vc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zh=Wh;function Kh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ta(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const na=(t,e,n)=>t??e??n,Jh=wc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(Qs),s=Ne(()=>t.route||r.value),i=We(Zo,0),o=Ne(()=>{let l=ge(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ne(()=>s.value.matched[o.value]);br(Zo,Ne(()=>o.value+1)),br(jh,a),br(Qs,s);const c=me();return yr(()=>[c.value,a.value,t.name],([l,u,f],[p,_,g])=>{u&&(u.instances[f]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!gn(u,_)||!p)&&(u.enterCallbacks[f]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return ra(n.default,{Component:p,route:l});const _=f.props[u],g=_?_===!0?l.params:typeof _=="function"?_(l):_:null,N=Vc(p,Z({},g,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ra(n.default,{Component:N,route:l})||N}}});function ra(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gh=Jh;function Yh(t){const e=Ih(t.routes,t),n=t.parseQuery||$h,r=t.stringifyQuery||Qo,s=t.history,i=Pn(),o=Pn(),a=Pn(),c=af(_t);let l=_t;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ws.bind(null,b=>""+b),f=ws.bind(null,Bh),p=ws.bind(null,Ur);function _(b,x){let A,L;return qc(b)?(A=e.getRecordMatcher(b),L=x):L=b,e.addRoute(L,A)}function g(b){const x=e.getRecordMatcher(b);x&&e.removeRoute(x)}function w(){return e.getRoutes().map(b=>b.record)}function N(b){return!!e.getRecordMatcher(b)}function k(b,x){if(x=Z({},x||c.value),typeof b=="string"){const m=Is(n,b,x.path),y=e.resolve({path:m.path},x),E=s.createHref(m.fullPath);return Z(m,y,{params:p(y.params),hash:Ur(m.hash),redirectedFrom:void 0,href:E})}let A;if("path"in b)A=Z({},b,{path:Is(n,b.path,x.path).path});else{const m=Z({},b.params);for(const y in m)m[y]==null&&delete m[y];A=Z({},b,{params:f(m)}),x.params=f(x.params)}const L=e.resolve(A,x),Q=b.hash||"";L.params=u(p(L.params));const d=Qd(r,Z({},b,{hash:Mh(Q),path:L.path})),h=s.createHref(d);return Z({fullPath:d,hash:Q,query:r===Qo?Hh(b.query):b.query||{}},L,{redirectedFrom:void 0,href:h})}function P(b){return typeof b=="string"?Is(n,b,c.value.path):Z({},b)}function H(b,x){if(l!==b)return _n(8,{from:x,to:b})}function R(b){return ie(b)}function B(b){return R(Z(P(b),{replace:!0}))}function Y(b){const x=b.matched[b.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let L=typeof A=="function"?A(b):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=P(L):{path:L},L.params={}),Z({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function ie(b,x){const A=l=k(b),L=c.value,Q=b.state,d=b.force,h=b.replace===!0,m=Y(A);if(m)return ie(Z(P(m),{state:typeof m=="object"?Z({},Q,m.state):Q,force:d,replace:h}),x||A);const y=A;y.redirectedFrom=x;let E;return!d&&Zd(r,L,A)&&(E=_n(16,{to:y,from:L}),qe(L,L,!0,!1)),(E?Promise.resolve(E):ue(y,L)).catch(I=>it(I)?it(I,2)?I:mt(I):X(I,y,L)).then(I=>{if(I){if(it(I,2))return ie(Z({replace:h},P(I.to),{state:typeof I.to=="object"?Z({},Q,I.to.state):Q,force:d}),x||y)}else I=xe(y,L,!0,h,Q);return ve(y,L,I),I})}function ne(b,x){const A=H(b,x);return A?Promise.reject(A):Promise.resolve()}function ae(b){const x=Xt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(b):b()}function ue(b,x){let A;const[L,Q,d]=Xh(b,x);A=Ts(L.reverse(),"beforeRouteLeave",b,x);for(const m of L)m.leaveGuards.forEach(y=>{A.push(Et(y,b,x))});const h=ne.bind(null,b,x);return A.push(h),Ee(A).then(()=>{A=[];for(const m of i.list())A.push(Et(m,b,x));return A.push(h),Ee(A)}).then(()=>{A=Ts(Q,"beforeRouteUpdate",b,x);for(const m of Q)m.updateGuards.forEach(y=>{A.push(Et(y,b,x))});return A.push(h),Ee(A)}).then(()=>{A=[];for(const m of d)if(m.beforeEnter)if(ze(m.beforeEnter))for(const y of m.beforeEnter)A.push(Et(y,b,x));else A.push(Et(m.beforeEnter,b,x));return A.push(h),Ee(A)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),A=Ts(d,"beforeRouteEnter",b,x),A.push(h),Ee(A))).then(()=>{A=[];for(const m of o.list())A.push(Et(m,b,x));return A.push(h),Ee(A)}).catch(m=>it(m,8)?m:Promise.reject(m))}function ve(b,x,A){a.list().forEach(L=>ae(()=>L(b,x,A)))}function xe(b,x,A,L,Q){const d=H(b,x);if(d)return d;const h=x===_t,m=tn?history.state:{};A&&(L||h?s.replace(b.fullPath,Z({scroll:h&&m&&m.scroll},Q)):s.push(b.fullPath,Q)),c.value=b,qe(b,x,A,h),mt()}let be;function Ue(){be||(be=s.listen((b,x,A)=>{if(!cr.listening)return;const L=k(b),Q=Y(L);if(Q){ie(Z(Q,{replace:!0}),L).catch(Un);return}l=L;const d=c.value;tn&&ah(Wo(d.fullPath,A.delta),is()),ue(L,d).catch(h=>it(h,12)?h:it(h,2)?(ie(h.to,L).then(m=>{it(m,20)&&!A.delta&&A.type===Kn.pop&&s.go(-1,!1)}).catch(Un),Promise.reject()):(A.delta&&s.go(-A.delta,!1),X(h,L,d))).then(h=>{h=h||xe(L,d,!1),h&&(A.delta&&!it(h,8)?s.go(-A.delta,!1):A.type===Kn.pop&&it(h,20)&&s.go(-1,!1)),ve(L,d,h)}).catch(Un)}))}let rt=Pn(),ce=Pn(),J;function X(b,x,A){mt(b);const L=ce.list();return L.length?L.forEach(Q=>Q(b,x,A)):console.error(b),Promise.reject(b)}function st(){return J&&c.value!==_t?Promise.resolve():new Promise((b,x)=>{rt.add([b,x])})}function mt(b){return J||(J=!b,Ue(),rt.list().forEach(([x,A])=>b?A(b):x()),rt.reset()),b}function qe(b,x,A,L){const{scrollBehavior:Q}=t;if(!tn||!Q)return Promise.resolve();const d=!A&&ch(Wo(b.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return pc().then(()=>Q(b,x,d)).then(h=>h&&oh(h)).catch(h=>X(h,b,x))}const Ce=b=>s.go(b);let Yt;const Xt=new Set,cr={currentRoute:c,listening:!0,addRoute:_,removeRoute:g,hasRoute:N,getRoutes:w,resolve:k,options:t,push:R,replace:B,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:st,install(b){const x=this;b.component("RouterLink",zh),b.component("RouterView",Gh),b.config.globalProperties.$router=x,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(c)}),tn&&!Yt&&c.value===_t&&(Yt=!0,R(s.location).catch(Q=>{}));const A={};for(const Q in _t)Object.defineProperty(A,Q,{get:()=>c.value[Q],enumerable:!0});b.provide(os,x),b.provide(Fi,ic(A)),b.provide(Qs,c);const L=b.unmount;Xt.add(b),b.unmount=function(){Xt.delete(b),Xt.size<1&&(l=_t,be&&be(),be=null,c.value=_t,Yt=!1,J=!1),L()}}};function Ee(b){return b.reduce((x,A)=>x.then(()=>ae(A)),Promise.resolve())}return cr}function Xh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gn(l,c))||s.push(c))}return[n,r,s]}function Qh(){return We(os)}function Zh(){return We(Fi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ep=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ep(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new tp;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const np=function(t){const e=tl(t);return nl.encodeByteArray(e,!0)},rl=function(t){return np(t).replace(/\./g,"")},sl=function(t){try{return nl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=()=>rp().__FIREBASE_DEFAULTS__,ip=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},op=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sl(t[1]);return e&&JSON.parse(e)},Bi=()=>{try{return sp()||ip()||op()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ap=t=>{var e,n;return(n=(e=Bi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},il=()=>{var t;return(t=Bi())===null||t===void 0?void 0:t.config},ol=t=>{var e;return(e=Bi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function up(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dp(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hp(){try{return typeof indexedDB=="object"}catch{return!1}}function pp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mp,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function gp(t,e){return t.replace(_p,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _p=/\{\$([^}]+)}/g;function yp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sa(i)&&sa(o)){if(!Fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vp(t,e){const n=new bp(t,e);return n.subscribe.bind(n)}class bp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ep(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rs),s.error===void 0&&(s.error=Rs),s.complete===void 0&&(s.complete=Rs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ep(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tp(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ip(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ip(t){return t===Ft?void 0:t}function Tp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Sp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Cp=te.INFO,Ap={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Pp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ap[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class al{constructor(e){this.name=e,this._logLevel=Cp,this._logHandler=Pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Op=(t,e)=>e.some(n=>t instanceof n);let ia,oa;function kp(){return ia||(ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Np(){return oa||(oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cl=new WeakMap,Zs=new WeakMap,ll=new WeakMap,Ss=new WeakMap,$i=new WeakMap;function xp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cl.set(n,t)}).catch(()=>{}),$i.set(e,t),e}function Dp(t){if(Zs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zs.set(t,e)}let ei={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ll.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lp(t){ei=t(ei)}function Mp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cs(this),e,...n);return ll.set(r,e.sort?e.sort():[e]),Pt(r)}:Np().includes(t)?function(...e){return t.apply(Cs(this),e),Pt(cl.get(this))}:function(...e){return Pt(t.apply(Cs(this),e))}}function Up(t){return typeof t=="function"?Mp(t):(t instanceof IDBTransaction&&Dp(t),Op(t,kp())?new Proxy(t,ei):t)}function Pt(t){if(t instanceof IDBRequest)return xp(t);if(Ss.has(t))return Ss.get(t);const e=Up(t);return e!==t&&(Ss.set(t,e),$i.set(e,t)),e}const Cs=t=>$i.get(t);function Fp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Bp=["get","getKey","getAll","getAllKeys","count"],$p=["put","add","delete","clear"],As=new Map;function aa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(As.get(e))return As.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$p.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return As.set(e,i),i}Lp(t=>({...t,get:(e,n,r)=>aa(e,n)||t.get(e,n,r),has:(e,n)=>!!aa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ti="@firebase/app",ca="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new al("@firebase/app"),Vp="@firebase/app-compat",Wp="@firebase/analytics-compat",zp="@firebase/analytics",Kp="@firebase/app-check-compat",qp="@firebase/app-check",Jp="@firebase/auth",Gp="@firebase/auth-compat",Yp="@firebase/database",Xp="@firebase/database-compat",Qp="@firebase/functions",Zp="@firebase/functions-compat",em="@firebase/installations",tm="@firebase/installations-compat",nm="@firebase/messaging",rm="@firebase/messaging-compat",sm="@firebase/performance",im="@firebase/performance-compat",om="@firebase/remote-config",am="@firebase/remote-config-compat",cm="@firebase/storage",lm="@firebase/storage-compat",um="@firebase/firestore",fm="@firebase/firestore-compat",dm="firebase",hm="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]",pm={[ti]:"fire-core",[Vp]:"fire-core-compat",[zp]:"fire-analytics",[Wp]:"fire-analytics-compat",[qp]:"fire-app-check",[Kp]:"fire-app-check-compat",[Jp]:"fire-auth",[Gp]:"fire-auth-compat",[Yp]:"fire-rtdb",[Xp]:"fire-rtdb-compat",[Qp]:"fire-fn",[Zp]:"fire-fn-compat",[em]:"fire-iid",[tm]:"fire-iid-compat",[nm]:"fire-fcm",[rm]:"fire-fcm-compat",[sm]:"fire-perf",[im]:"fire-perf-compat",[om]:"fire-rc",[am]:"fire-rc-compat",[cm]:"fire-gcs",[lm]:"fire-gcs-compat",[um]:"fire-fst",[fm]:"fire-fst-compat","fire-js":"fire-js",[dm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map,ri=new Map;function mm(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(ri.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;ri.set(e,t);for(const n of Br.values())mm(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new er("app","Firebase",gm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=hm;function fl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ni,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(n||(n=il()),!n)throw Ot.create("no-options");const i=Br.get(s);if(i){if(Fr(n,i.options)&&Fr(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new Rp(s);for(const c of ri.values())o.addComponent(c);const a=new _m(n,r,o);return Br.set(s,a),a}function ym(t=ni){const e=Br.get(t);if(!e&&t===ni&&il())return fl();if(!e)throw Ot.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let s=(r=pm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}qn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="firebase-heartbeat-database",bm=1,Jn="firebase-heartbeat-store";let Ps=null;function dl(){return Ps||(Ps=Fp(vm,bm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jn)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Ps}async function Em(t){try{return await(await dl()).transaction(Jn).objectStore(Jn).get(hl(t))}catch(e){if(e instanceof Nt)qt.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function la(t,e){try{const r=(await dl()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(e,hl(t)),await r.done}catch(n){if(n instanceof Nt)qt.warn(n.message);else{const r=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function hl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=1024,Im=30*24*60*60*1e3;class Tm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ua();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Im}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ua(),{heartbeatsToSend:r,unsentEntries:s}=Rm(this._heartbeatsCache.heartbeats),i=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ua(){return new Date().toISOString().substring(0,10)}function Rm(t,e=wm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hp()?pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Em(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fa(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){qn(new yn("platform-logger",e=>new Hp(e),"PRIVATE")),qn(new yn("heartbeat",e=>new Tm(e),"PRIVATE")),ln(ti,ca,t),ln(ti,ca,"esm2017"),ln("fire-js","")}Cm("");var Am="firebase",Pm="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(Am,Pm,"app");const Om={apiKey:"AIzaSyAzqhCBZknqb47NwiSjZTh-rE5sNI-4Zr0",authDomain:"naruto-api-directory.firebaseapp.com",projectId:"naruto-api-directory",storageBucket:"naruto-api-directory.appspot.com",messagingSenderId:"405726667030",appId:"1:405726667030:web:47554c5fc3b2bc58dcb037"},km=fl(Om);function Hi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function pl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nm=pl,ml=new er("auth","Firebase",pl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new al("@firebase/auth");function xm(t,...e){$r.logLevel<=te.WARN&&$r.warn(`Auth (${nr}): ${t}`,...e)}function Ir(t,...e){$r.logLevel<=te.ERROR&&$r.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,...e){throw ji(t,...e)}function Ze(t,...e){return ji(t,...e)}function Dm(t,e,n){const r=Object.assign(Object.assign({},Nm()),{[e]:n});return new er("auth","Firebase",r).create(e,{appName:t.name})}function ji(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ml.create(t,...e)}function $(t,e,...n){if(!t)throw ji(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ir(e),new Error(e)}function ht(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lm(){return da()==="http:"||da()==="https:"}function da(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lm()||up()||"connection"in navigator)?navigator.onLine:!0}function Um(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=lp()||fp()}get(){return Mm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new rr(3e4,6e4);function Gt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dt(t,e,n,r,s={}){return _l(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=tr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gl.fetch()(yl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function _l(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fm),e);try{const s=new Hm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dm(t,u,l);Ke(t,u)}}catch(s){if(s instanceof Nt)throw s;Ke(t,"network-request-failed",{message:String(s)})}}async function as(t,e,n,r,s={}){const i=await Dt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vi(t.config,s):`${t.config.apiScheme}://${s}`}function $m(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),Bm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ze(t,e,r);return s.customData._tokenResponse=n,s}function ha(t){return t!==void 0&&t.enterprise!==void 0}class jm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $m(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Vm(t,e){return Dt(t,"GET","/v2/recaptchaConfig",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e){return Dt(t,"POST","/v1/accounts:delete",e)}async function zm(t,e){return Dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Km(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=Wi(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bn(Os(s.auth_time)),issuedAtTime:Bn(Os(s.iat)),expirationTime:Bn(Os(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Os(t){return Number(t)*1e3}function Wi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ir("JWT malformed, contained fewer than 3 sections"),null;try{const s=sl(n);return s?JSON.parse(s):(Ir("Failed to decode base64 JWT payload"),null)}catch(s){return Ir("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qm(t){const e=Wi(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&Jm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gn(t,zm(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qm(i.providerUserInfo):[],a=Xm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Ym(t){const e=xt(t);await Hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qm(t){return t.map(e=>{var{providerId:n}=e,r=Hi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(t,e){const n=await _l(t,{},async()=>{const r=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=yl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eg(t,e){return Dt(t,"POST","/v2/accounts:revokeToken",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Zm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Km(this,e)}reload(){return Ym(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,Wm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:R,isAnonymous:B,providerData:Y,stsTokenManager:ie}=n;$(H&&ie,e,"internal-error");const ne=Yn.fromJSON(this.name,ie);$(typeof H=="string",e,"internal-error"),yt(f,e.name),yt(p,e.name),$(typeof R=="boolean",e,"internal-error"),$(typeof B=="boolean",e,"internal-error"),yt(_,e.name),yt(g,e.name),yt(w,e.name),yt(N,e.name),yt(k,e.name),yt(P,e.name);const ae=new Kt({uid:H,auth:e,email:p,emailVerified:R,displayName:f,isAnonymous:B,photoURL:g,phoneNumber:_,tenantId:w,stsTokenManager:ne,createdAt:k,lastLoginAt:P});return Y&&Array.isArray(Y)&&(ae.providerData=Y.map(ue=>Object.assign({},ue))),N&&(ae._redirectEventId=N),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yn;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map;function lt(t){ht(t instanceof Function,"Expected a class definition");let e=pa.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bl.type="NONE";const ma=bl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e,n){return`firebase:${t}:${e}:${n}`}class un{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Tr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Tr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new un(lt(ma),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||lt(ma);const o=Tr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Kt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new un(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new un(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Il(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(El(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rl(e))return"Blackberry";if(Sl(e))return"Webos";if(zi(e))return"Safari";if((e.includes("chrome/")||wl(e))&&!e.includes("edge/"))return"Chrome";if(Tl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function El(t=Te()){return/firefox\//i.test(t)}function zi(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wl(t=Te()){return/crios\//i.test(t)}function Il(t=Te()){return/iemobile/i.test(t)}function Tl(t=Te()){return/android/i.test(t)}function Rl(t=Te()){return/blackberry/i.test(t)}function Sl(t=Te()){return/webos/i.test(t)}function cs(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tg(t=Te()){var e;return cs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ng(){return dp()&&document.documentMode===10}function Cl(t=Te()){return cs(t)||Tl(t)||Sl(t)||Rl(t)||/windows phone/i.test(t)||Il(t)}function rg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e=[]){let n;switch(t){case"Browser":n=ga(Te());break;case"Worker":n=`${ga(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t,e={}){return Dt(t,"GET","/v2/passwordPolicy",Gt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=6;class ag{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:og,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _a(this),this.idTokenSubscription=new _a(this),this.beforeStateQueue=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ml,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Um()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ig(this),n=new ag(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Al(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return xt(t)}class _a{constructor(e){this.auth=e,this.observer=null,this.addObserver=vp(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lg().appendChild(r)})}function ug(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fg="https://www.google.com/recaptcha/enterprise.js?render=",dg="recaptcha-enterprise",hg="NO_RECAPTCHA";class pg{constructor(e){this.type=dg,this.auth=Tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Vm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new jm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ha(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(hg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ha(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Pl(fg+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ya(t,e,n,r=!1){const s=new pg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function va(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ya(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ya(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){const n=ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fr(i,e??{}))return s;Ke(s,"already-initialized")}return n.initialize({options:e})}function gg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _g(t,e,n){const r=Tn(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ol(e),{host:o,port:a}=yg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||vg()}function Ol(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yg(t){const e=Ol(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ba(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ba(o)}}}function ba(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function bg(t,e){return Dt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t,e){return as(t,"POST","/v1/accounts:signInWithPassword",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(t,e){return as(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))}async function Ig(t,e){return as(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Ki{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return va(e,n,"signInWithPassword",Eg);case"emailLink":return wg(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return va(e,r,"signUpPassword",bg);case"emailLink":return Ig(e,{idToken:n,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e){return as(t,"POST","/v1/accounts:signInWithIdp",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="http://localhost";class Jt extends Ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fn(e,n)}buildRequest(){const e={requestUri:Tg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sg(t){const e=xn(Dn(t)).link,n=e?xn(Dn(e)).deep_link_id:null,r=xn(Dn(t)).deep_link_id;return(r?xn(Dn(r)).link:null)||r||n||e||t}class qi{constructor(e){var n,r,s,i,o,a;const c=xn(Dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Rg((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Sg(e);try{return new qi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return Xn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qi.parseLink(n);return $(r,"argument-error"),Xn._fromEmailAndCode(e,r.code,r.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends kl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends sr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends sr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends sr{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=Ea(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ea(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ea(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jr(e,n,r,s)}}function Nl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(t,i,e,r):i})}async function Cg(t,e,n=!1){const r=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Gn(t,Nl(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Wi(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),vn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t,e,n=!1){const r="signIn",s=await Nl(t,r,e),i=await vn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Pg(t,e){return xl(Tn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t){const e=Tn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function kg(t,e,n){return Pg(xt(t),Rn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Og(t),r})}function Ng(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function xg(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function Dg(t){return xt(t).signOut()}const Vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vr,"1"),this.storage.removeItem(Vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){const t=Te();return zi(t)||cs(t)}const Mg=1e3,Ug=10;class Ll extends Dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lg()&&rg(),this.fallbackToPolling=Cl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ng()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ug):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ll.type="LOCAL";const Fg=Ll;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends Dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ml.type="SESSION";const Ul=Ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Bg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ji("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function Hg(t){et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function jg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wg(){return Fl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="firebaseLocalStorageDb",zg=1,Wr="firebaseLocalStorage",$l="fbase_key";class ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function us(t,e){return t.transaction([Wr],e?"readwrite":"readonly").objectStore(Wr)}function Kg(){const t=indexedDB.deleteDatabase(Bl);return new ir(t).toPromise()}function ii(){const t=indexedDB.open(Bl,zg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wr,{keyPath:$l})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wr)?e(r):(r.close(),await Kg(),e(await ii()))})})}async function wa(t,e,n){const r=us(t,!0).put({[$l]:e,value:n});return new ir(r).toPromise()}async function qg(t,e){const n=us(t,!1).get(e),r=await new ir(n).toPromise();return r===void 0?null:r.value}function Ia(t,e){const n=us(t,!0).delete(e);return new ir(n).toPromise()}const Jg=800,Gg=3;class Hl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ls._getInstance(Wg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jg(),!this.activeServiceWorker)return;this.sender=new $g(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ii();return await wa(e,Vr,"1"),await Ia(e,Vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ia(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=us(s,!1).getAll();return new ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hl.type="LOCAL";const Yg=Hl;new rr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t,e){return e?lt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qg(t){return xl(t.auth,new Gi(t),t.bypassAuthState)}function Zg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Ag(n,new Gi(t),t.bypassAuthState)}async function e_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Cg(n,new Gi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qg;case"linkViaPopup":case"linkViaRedirect":return e_;case"reauthViaPopup":case"reauthViaRedirect":return Zg;default:Ke(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new rr(2e3,1e4);class nn extends jl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=Ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,t_.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="pendingRedirect",Rr=new Map;class r_ extends jl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rr.get(this.auth._key());if(!e){try{const r=await s_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rr.set(this.auth._key(),e)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s_(t,e){const n=a_(e),r=o_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function i_(t,e){Rr.set(t._key(),e)}function o_(t){return lt(t._redirectPersistence)}function a_(t){return Tr(n_,t.config.apiKey,t.name)}async function c_(t,e,n=!1){const r=Tn(t),s=Xg(r,e),o=await new r_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=10*60*1e3;class u_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ta(e))}saveEventToCache(e){this.cachedEventUids.add(Ta(e)),this.lastProcessedEventTime=Date.now()}}function Ta(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(t,e={}){return Dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p_=/^https?/;async function m_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d_(t);for(const n of e)try{if(g_(n))return}catch{}Ke(t,"unauthorized-domain")}function g_(t){const e=si(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!p_.test(n))return!1;if(h_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new rr(3e4,6e4);function Ra(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function y_(t){return new Promise((e,n)=>{var r,s,i;function o(){Ra(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ra(),n(Ze(t,"network-request-failed"))},timeout:__.get()})}if(!((s=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)o();else{const a=ug("iframefcb");return et()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},Pl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function v_(t){return Sr=Sr||y_(t),Sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new rr(5e3,15e3),E_="__/auth/iframe",w_="emulator/auth/iframe",I_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R_(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vi(e,w_):`https://${t.config.authDomain}/${E_}`,r={apiKey:e.apiKey,appName:t.name,v:nr},s=T_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tr(r).slice(1)}`}async function S_(t){const e=await v_(t),n=et().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:R_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=et().setTimeout(()=>{i(o)},b_.get());function c(){et().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A_=500,P_=600,O_="_blank",k_="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N_(t,e,n,r=A_,s=P_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},C_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(a=wl(l)?O_:n),El(l)&&(e=e||k_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,g])=>`${p}${_}=${g},`,"");if(tg(l)&&a!=="_self")return x_(e||"",a),new Sa(null);const f=window.open(e||"",a,u);$(f,t,"popup-blocked");try{f.focus()}catch{}return new Sa(f)}function x_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="__/auth/handler",L_="emulator/auth/handler",M_=encodeURIComponent("fac");async function Ca(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nr,eventId:s};if(e instanceof kl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof sr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${M_}=${encodeURIComponent(c)}`:"";return`${U_(t)}?${tr(a).slice(1)}${l}`}function U_({config:t}){return t.emulator?Vi(t,L_):`https://${t.authDomain}/${D_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="webStorageSupport";class F_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ul,this._completeRedirectFn=c_,this._overrideRedirectResult=i_}async _openPopup(e,n,r,s){var i;ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ca(e,n,r,si(),s);return N_(e,o,Ji())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ca(e,n,r,si(),s);return Hg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ht(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await S_(e),r=new u_(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ks,{type:ks},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ks];o!==void 0&&n(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cl()||zi()||cs()}}const B_=F_;var Aa="@firebase/auth",Pa="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function j_(t){qn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Al(t)},l=new cg(r,s,i,c);return gg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qn(new yn("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(r=>new $_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Aa,Pa,H_(t)),ln(Aa,Pa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=5*60,W_=ol("authIdTokenMaxAge")||V_;let Oa=null;const z_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W_)return;const s=n==null?void 0:n.token;Oa!==s&&(Oa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function K_(t=ym()){const e=ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mg(t,{popupRedirectResolver:B_,persistence:[Yg,Fg,Ul]}),r=ol("authTokenSyncURL");if(r){const i=z_(r);xg(n,i,()=>i(n.currentUser)),Ng(n,o=>i(o))}const s=ap("auth");return s&&_g(n,`http://${s}`),n}j_("Browser");function q_(t){const e=me(t.currentUser),n=Ne(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const oi=K_(km),{isAuthenticated:ka,user:J_}=q_(oi),Yi=()=>({isAuthenticated:ka,user:J_,login:async(n,r)=>(await kg(oi,n,r),ka.value),logout:async()=>{await Dg(oi),so.push({name:"Login"})}});const Lt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};function Wl(t,e){return function(){return t.apply(e,arguments)}}const{toString:G_}=Object.prototype,{getPrototypeOf:Xi}=Object,fs=(t=>e=>{const n=G_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),nt=t=>(t=t.toLowerCase(),e=>fs(e)===t),ds=t=>e=>typeof e===t,{isArray:Sn}=Array,Qn=ds("undefined");function Y_(t){return t!==null&&!Qn(t)&&t.constructor!==null&&!Qn(t.constructor)&&Me(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const zl=nt("ArrayBuffer");function X_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&zl(t.buffer),e}const Q_=ds("string"),Me=ds("function"),Kl=ds("number"),hs=t=>t!==null&&typeof t=="object",Z_=t=>t===!0||t===!1,Cr=t=>{if(fs(t)!=="object")return!1;const e=Xi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},ey=nt("Date"),ty=nt("File"),ny=nt("Blob"),ry=nt("FileList"),sy=t=>hs(t)&&Me(t.pipe),iy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Me(t.append)&&((e=fs(t))==="formdata"||e==="object"&&Me(t.toString)&&t.toString()==="[object FormData]"))},oy=nt("URLSearchParams"),ay=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function or(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Sn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function ql(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Jl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Gl=t=>!Qn(t)&&t!==Jl;function ai(){const{caseless:t}=Gl(this)&&this||{},e={},n=(r,s)=>{const i=t&&ql(e,s)||s;Cr(e[i])&&Cr(r)?e[i]=ai(e[i],r):Cr(r)?e[i]=ai({},r):Sn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&or(arguments[r],n);return e}const cy=(t,e,n,{allOwnKeys:r}={})=>(or(e,(s,i)=>{n&&Me(s)?t[i]=Wl(s,n):t[i]=s},{allOwnKeys:r}),t),ly=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),uy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},fy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Xi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},dy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},hy=t=>{if(!t)return null;if(Sn(t))return t;let e=t.length;if(!Kl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},py=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Xi(Uint8Array)),my=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},gy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},_y=nt("HTMLFormElement"),yy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Na=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),vy=nt("RegExp"),Yl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};or(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},by=t=>{Yl(t,(e,n)=>{if(Me(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Me(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ey=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Sn(t)?r(t):r(String(t).split(e)),n},wy=()=>{},Iy=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ns="abcdefghijklmnopqrstuvwxyz",xa="0123456789",Xl={DIGIT:xa,ALPHA:Ns,ALPHA_DIGIT:Ns+Ns.toUpperCase()+xa},Ty=(t=16,e=Xl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Ry(t){return!!(t&&Me(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Sy=t=>{const e=new Array(10),n=(r,s)=>{if(hs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Sn(r)?[]:{};return or(r,(o,a)=>{const c=n(o,s+1);!Qn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Cy=nt("AsyncFunction"),Ay=t=>t&&(hs(t)||Me(t))&&Me(t.then)&&Me(t.catch),v={isArray:Sn,isArrayBuffer:zl,isBuffer:Y_,isFormData:iy,isArrayBufferView:X_,isString:Q_,isNumber:Kl,isBoolean:Z_,isObject:hs,isPlainObject:Cr,isUndefined:Qn,isDate:ey,isFile:ty,isBlob:ny,isRegExp:vy,isFunction:Me,isStream:sy,isURLSearchParams:oy,isTypedArray:py,isFileList:ry,forEach:or,merge:ai,extend:cy,trim:ay,stripBOM:ly,inherits:uy,toFlatObject:fy,kindOf:fs,kindOfTest:nt,endsWith:dy,toArray:hy,forEachEntry:my,matchAll:gy,isHTMLForm:_y,hasOwnProperty:Na,hasOwnProp:Na,reduceDescriptors:Yl,freezeMethods:by,toObjectSet:Ey,toCamelCase:yy,noop:wy,toFiniteNumber:Iy,findKey:ql,global:Jl,isContextDefined:Gl,ALPHABET:Xl,generateString:Ty,isSpecCompliantForm:Ry,toJSONObject:Sy,isAsyncFn:Cy,isThenable:Ay};function z(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}v.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ql=z.prototype,Zl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Zl[t]={value:t}});Object.defineProperties(z,Zl);Object.defineProperty(Ql,"isAxiosError",{value:!0});z.from=(t,e,n,r,s,i)=>{const o=Object.create(Ql);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Py=null;function ci(t){return v.isPlainObject(t)||v.isArray(t)}function eu(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Da(t,e,n){return t?t.concat(e).map(function(s,i){return s=eu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Oy(t){return v.isArray(t)&&!t.some(ci)}const ky=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function ps(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,N){return!v.isUndefined(N[w])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(v.isDate(g))return g.toISOString();if(!c&&v.isBlob(g))throw new z("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(g)||v.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,w,N){let k=g;if(g&&!N&&typeof g=="object"){if(v.endsWith(w,"{}"))w=r?w:w.slice(0,-2),g=JSON.stringify(g);else if(v.isArray(g)&&Oy(g)||(v.isFileList(g)||v.endsWith(w,"[]"))&&(k=v.toArray(g)))return w=eu(w),k.forEach(function(H,R){!(v.isUndefined(H)||H===null)&&e.append(o===!0?Da([w],R,i):o===null?w:w+"[]",l(H))}),!1}return ci(g)?!0:(e.append(Da(N,w,i),l(g)),!1)}const f=[],p=Object.assign(ky,{defaultVisitor:u,convertValue:l,isVisitable:ci});function _(g,w){if(!v.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(g),v.forEach(g,function(k,P){(!(v.isUndefined(k)||k===null)&&s.call(e,k,v.isString(P)?P.trim():P,w,p))===!0&&_(k,w?w.concat(P):[P])}),f.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return _(t),e}function La(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Qi(t,e){this._pairs=[],t&&ps(t,this,e)}const tu=Qi.prototype;tu.append=function(e,n){this._pairs.push([e,n])};tu.toString=function(e){const n=e?function(r){return e.call(this,r,La)}:La;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ny(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nu(t,e,n){if(!e)return t;const r=n&&n.encode||Ny,s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new Qi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class xy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ma=xy,ru={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Dy=typeof URLSearchParams<"u"?URLSearchParams:Qi,Ly=typeof FormData<"u"?FormData:null,My=typeof Blob<"u"?Blob:null,Uy=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Fy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Qe={isBrowser:!0,classes:{URLSearchParams:Dy,FormData:Ly,Blob:My},isStandardBrowserEnv:Uy,isStandardBrowserWebWorkerEnv:Fy,protocols:["http","https","file","blob","url","data"]};function By(t,e){return ps(t,new Qe.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Qe.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function $y(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Hy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function su(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=Hy(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e($y(r),s,n,0)}),n}return null}function jy(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Zi={transitional:ru,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s&&s?JSON.stringify(su(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return By(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ps(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),jy(e)):e}],transformResponse:[function(e){const n=this.transitional||Zi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qe.classes.FormData,Blob:Qe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{Zi.headers[t]={}});const eo=Zi,Vy=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Vy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ua=Symbol("internals");function On(t){return t&&String(t).trim().toLowerCase()}function Ar(t){return t===!1||t==null?t:v.isArray(t)?t.map(Ar):String(t)}function zy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Ky=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function xs(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function qy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Jy(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ms{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=On(c);if(!u)throw new Error("header name must be a non-empty string");const f=v.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Ar(a))}const o=(a,c)=>v.forEach(a,(l,u)=>i(l,u,c));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!Ky(e)?o(Wy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=On(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return zy(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=On(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||xs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=On(o),o){const a=v.findKey(r,o);a&&(!n||xs(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||xs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=Ar(s),delete n[i];return}const a=e?qy(i):String(i).trim();a!==i&&delete n[i],n[a]=Ar(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ua]=this[Ua]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=On(o);r[a]||(Jy(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}ms.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(ms.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(ms);const ut=ms;function Ds(t,e){const n=this||eo,r=e||n,s=ut.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function iu(t){return!!(t&&t.__CANCEL__)}function ar(t,e,n){z.call(this,t??"canceled",z.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(ar,z,{__CANCEL__:!0});function Gy(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Yy=Qe.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),v.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),v.isString(i)&&c.push("path="+i),v.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Xy(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Qy(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function ou(t,e){return t&&!Xy(e)?Qy(t,e):e}const Zy=Qe.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function ev(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function tv(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const _=u&&l-u;return _?Math.round(p*1e3/_):void 0}}function Fa(t,e){let n=0;const r=tv(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const nv=typeof XMLHttpRequest<"u",rv=nv&&function(t){return new Promise(function(n,r){let s=t.data;const i=ut.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}let l;v.isFormData(s)&&(Qe.isStandardBrowserEnv||Qe.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.getContentType(/^\s*multipart\/form-data/)?v.isString(l=i.getContentType())&&i.setContentType(l.replace(/^\s*(multipart\/form-data);+/,"$1")):i.setContentType("multipart/form-data"));let u=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+w))}const f=ou(t.baseURL,t.url);u.open(t.method.toUpperCase(),nu(f,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function p(){if(!u)return;const g=ut.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),N={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:t,request:u};Gy(function(P){n(P),c()},function(P){r(P),c()},N),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new z("Request aborted",z.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const N=t.transitional||ru;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new z(w,N.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,u)),u=null},Qe.isStandardBrowserEnv){const g=Zy(f)&&t.xsrfCookieName&&Yy.read(t.xsrfCookieName);g&&i.set(t.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&v.forEach(i.toJSON(),function(w,N){u.setRequestHeader(N,w)}),v.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Fa(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Fa(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=g=>{u&&(r(!g||g.type?new ar(null,t,u):g),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const _=ev(f);if(_&&Qe.protocols.indexOf(_)===-1){r(new z("Unsupported protocol "+_+":",z.ERR_BAD_REQUEST,t));return}u.send(s||null)})},li={http:Py,xhr:rv};v.forEach(li,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ba=t=>`- ${t}`,sv=t=>v.isFunction(t)||t===null||t===!1,au={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!sv(n)&&(r=li[(o=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ba).join(`
`):" "+Ba(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:li};function Ls(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ar(null,t)}function $a(t){return Ls(t),t.headers=ut.from(t.headers),t.data=Ds.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),au.getAdapter(t.adapter||eo.adapter)(t).then(function(r){return Ls(t),r.data=Ds.call(t,t.transformResponse,r),r.headers=ut.from(r.headers),r},function(r){return iu(r)||(Ls(t),r&&r.response&&(r.response.data=Ds.call(t,t.transformResponse,r.response),r.response.headers=ut.from(r.response.headers))),Promise.reject(r)})}const Ha=t=>t instanceof ut?t.toJSON():t;function bn(t,e){e=e||{};const n={};function r(l,u,f){return v.isPlainObject(l)&&v.isPlainObject(u)?v.merge.call({caseless:f},l,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function s(l,u,f){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!v.isUndefined(u))return r(void 0,u)}function o(l,u){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Ha(l),Ha(u),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);v.isUndefined(p)&&f!==a||(n[u]=p)}),n}const cu="1.6.0",to={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{to[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ja={};to.transitional=function(e,n,r){function s(i,o){return"[Axios v"+cu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new z(s(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!ja[o]&&(ja[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function iv(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new z("option "+i+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const ui={assertOptions:iv,validators:to},vt=ui.validators;class zr{constructor(e){this.defaults=e,this.interceptors={request:new Ma,response:new Ma}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=bn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ui.assertOptions(r,{silentJSONParsing:vt.transitional(vt.boolean),forcedJSONParsing:vt.transitional(vt.boolean),clarifyTimeoutError:vt.transitional(vt.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:ui.assertOptions(s,{encode:vt.function,serialize:vt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ut.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let u,f=0,p;if(!c){const g=[$a.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),p=g.length,u=Promise.resolve(n);f<p;)u=u.then(g[f++],g[f++]);return u}p=a.length;let _=n;for(f=0;f<p;){const g=a[f++],w=a[f++];try{_=g(_)}catch(N){w.call(this,N);break}}try{u=$a.call(this,_)}catch(g){return Promise.reject(g)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=bn(this.defaults,e);const n=ou(e.baseURL,e.url);return nu(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){zr.prototype[e]=function(n,r){return this.request(bn(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(bn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}zr.prototype[e]=n(),zr.prototype[e+"Form"]=n(!0)});const Pr=zr;class no{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new ar(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new no(function(s){e=s}),cancel:e}}}const ov=no;function av(t){return function(n){return t.apply(null,n)}}function cv(t){return v.isObject(t)&&t.isAxiosError===!0}const fi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fi).forEach(([t,e])=>{fi[e]=t});const lv=fi;function lu(t){const e=new Pr(t),n=Wl(Pr.prototype.request,e);return v.extend(n,Pr.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return lu(bn(t,s))},n}const pe=lu(eo);pe.Axios=Pr;pe.CanceledError=ar;pe.CancelToken=ov;pe.isCancel=iu;pe.VERSION=cu;pe.toFormData=ps;pe.AxiosError=z;pe.Cancel=pe.CanceledError;pe.all=function(e){return Promise.all(e)};pe.spread=av;pe.isAxiosError=cv;pe.mergeConfig=bn;pe.AxiosHeaders=ut;pe.formToJSON=t=>su(v.isHTMLForm(t)?new FormData(t):t);pe.getAdapter=au.getAdapter;pe.HttpStatusCode=lv;pe.default=pe;const uu=pe,fu=me([]),du=me(1),di=me(!1),hu=me(1),pu=me(8),mu=me(null),gu=uu.create({baseURL:"https://naruto-character-directory.onrender.com",auth:{username:"admin",password:"admin"}}),uv=async()=>{di.value=!0;const{data:t,headers:e}=await gu.get("/api/characters",{params:{page:hu.value,size:pu.value}});fu.value=t,du.value=Number(e["x-total-pages"])||1,di.value=!1},fv=async t=>{const{data:e}=await gu.get(`/api/characters/${t}`);mu.value=e,console.log(e)},ro=()=>({characters:fu,pages:du,activePage:hu,loading:di,pageSize:pu,getCharacters:uv,getCharacter:fv,currentCharacter:mu});const dv={class:"card-image"},hv=["src"],pv={class:"card-details"},mv={class:"card-details-name font-poppins"},gv={class:"card-details-clan font-poppins"},_v={class:"card-details-village font-poppins"},yv={class:"card-details-quote font-poppins"},vv={__name:"MainCardsSingle",props:{character:{type:Object,required:!0,default:()=>({createdAt:"2020-01-01",characterId:"123",name:"John Doe",image:"https://www.example.com",updatedAt:"2022-01-01"})}},setup(t){const e=t,n=()=>{console.log(`${e.character.name} selected`)};return(r,s)=>{const i=Ni("RouterLink");return e.character.characterId?(de(),Lr(i,{key:0,to:`/api/characters/${e.character.characterId}`},{default:Wt(()=>[q("div",{class:"card",onClick:n},[q("div",dv,[q("img",{src:e.character.image,alt:"",srcset:""},null,8,hv)]),q("div",pv,[q("p",mv,Ht(e.character.name),1),q("p",gv,Ht(e.character.clan),1),q("p",_v,Ht(e.character.village),1),q("p",yv,'"'+Ht(e.character.quote)+'"',1)])])]),_:1},8,["to"])):$c("",!0)}}},bv=Lt(vv,[["__scopeId","data-v-091e115f"]]);const Ev=t=>(Ai("data-v-28e4b2ed"),t=t(),Pi(),t),wv={key:0,class:"sub-wrapper"},Iv=Ev(()=>q("div",null,"Loading...",-1)),Tv={__name:"MainCards",setup(t){const{characters:e}=ro(),n=me(""),r=Ne(()=>e.value.filter(s=>s.name.toLowerCase().includes(n.value.toLowerCase())));return(s,i)=>(de(),Se(ke,null,[Ye(q("input",{type:"text",placeholder:"Search Character...",class:"search","onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o)},null,512),[[at,n.value]]),ge(e)?(de(),Se("div",wv,[(de(),Lr(If,null,{fallback:Wt(()=>[Iv]),default:Wt(()=>[(de(!0),Se(ke,null,Ac(r.value,o=>(de(),Lr(bv,{key:o.characterId,character:o},null,8,["character"]))),128))]),_:1}))])):$c("",!0)],64))}},Rv=Lt(Tv,[["__scopeId","data-v-28e4b2ed"]]);const Sv={class:"pagination"},Cv=["disabled"],Av=["onClick"],Pv=["disabled"],Ov={__name:"MainPagination",setup(t){const{activePage:e,pages:n,getCharacters:r}=ro(),s=async()=>{e.value>1&&(e.value--,await r())},i=async()=>{e.value<n.value&&(e.value++,await r())},o=async a=>{e.value=a,await r()};return(a,c)=>(de(),Se("div",Sv,[q("button",{class:"action",disabled:ge(e)===1,onClick:s},"Prev",8,Cv),(de(!0),Se(ke,null,Ac(ge(n),l=>(de(),Se("button",{class:Yr(["page",l===ge(e)?"active":""]),key:l,onClick:u=>o(l)},Ht(l),11,Av))),128)),q("button",{class:"action",disabled:ge(e)===ge(n),onClick:i},"Next",8,Pv)]))}},kv=Lt(Ov,[["__scopeId","data-v-a8ff4683"]]);const Nv={key:0},xv={key:1,class:"wrapper"},Dv={__name:"MainPage",setup(t){const{getCharacters:e,loading:n}=ro();return Rc(async()=>{await e()}),(r,s)=>ge(n)?(de(),Se("p",Nv,"Loading...")):(de(),Se("div",xv,[le(Rv),le(kv)]))}},Lv=Lt(Dv,[["__scopeId","data-v-48d01c4c"]]);const Mv=t=>(Ai("data-v-a61722e7"),t=t(),Pi(),t),Uv=["onSubmit"],Fv=Mv(()=>q("button",{type:"submit",class:"bg-orange-300 px-4 py-2"},"Log In",-1)),Bv={__name:"LoginPage",setup(t){const{login:e,logout:n}=Yi(),r=Qh(),s=Zh(),i=me(""),o=me(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(de(),Se("form",{class:"login-form",onSubmit:Wc(a,["prevent"])},[Ye(q("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>i.value=u),type:"text",placeholder:"username"},null,512),[[at,i.value]]),Ye(q("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>o.value=u),type:"password",placeholder:"Password"},null,512),[[at,o.value]]),Fv],40,Uv))}},$v=Lt(Bv,[["__scopeId","data-v-a61722e7"]]);const _u=t=>(Ai("data-v-b4cd5bdd"),t=t(),Pi(),t),Hv=["onSubmit"],jv=_u(()=>q("h1",{class:"title"},"Add Character Form",-1)),Vv=_u(()=>q("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"submit",-1)),Wv={__name:"SettingsPage",setup(t){const e=uu.create({baseURL:"https://naruto-character-directory.onrender.com",auth:{username:"admin",password:"admin"}}),n=me(""),r=me(""),s=me(""),i=me([]),o=me(""),a=me(""),c=async()=>{await e.post("/api/characters",{name:n.value,clan:r.value,village:s.value,jutsus:[i.value],quote:o.value,image:a.value}),l()},l=()=>{var u=document.getElementById("api_form");u.reset(),n.value="",r.value="",s.value="",i.value="",o.value="",a.value=""};return(u,f)=>(de(),Se("form",{id:"api_form",class:"login-form",onSubmit:Wc(c,["prevent"])},[jv,Ye(q("input",{"onUpdate:modelValue":f[0]||(f[0]=p=>n.value=p),type:"text",placeholder:"name"},null,512),[[at,n.value]]),Ye(q("input",{"onUpdate:modelValue":f[1]||(f[1]=p=>r.value=p),type:"text",placeholder:"clan"},null,512),[[at,r.value]]),Ye(q("input",{"onUpdate:modelValue":f[2]||(f[2]=p=>s.value=p),type:"text",placeholder:"village"},null,512),[[at,s.value]]),Ye(q("input",{"onUpdate:modelValue":f[3]||(f[3]=p=>i.value=p),type:"text",placeholder:"jutsu"},null,512),[[at,i.value]]),Ye(q("input",{"onUpdate:modelValue":f[4]||(f[4]=p=>o.value=p),type:"text",placeholder:"quote"},null,512),[[at,o.value]]),Ye(q("input",{"onUpdate:modelValue":f[5]||(f[5]=p=>a.value=p),type:"text",placeholder:"image"},null,512),[[at,a.value]]),Vv],40,Hv))}},zv=Lt(Wv,[["__scopeId","data-v-b4cd5bdd"]]);const Kv={},qv={class:"not-found"};function Jv(t,e){return de(),Se("h2",qv,"404 - Page not found")}const Gv=Lt(Kv,[["render",Jv],["__scopeId","data-v-22f42c34"]]),{isAuthenticated:Yv}=Yi(),Xv=[{path:"/Naruto-API-Directory/",name:"Home",component:Lv},{path:"/login",name:"Login",component:$v},{path:"/settings",name:"Settings",component:zv,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Gv},{path:"/api/characters/:id",name:"Character",component:()=>Jd(()=>import("./CharacterPage-6ca6efd3.js"),[])}],so=Yh({history:dh(),routes:Xv});so.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!Yv.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const Qv={class:"wrapper"},Zv={class:"brand-title"},eb={class:"menu"},tb={class:"px-4 py-4"},nb={key:0},rb={key:1},sb={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=Yi(),s=me("Naruto Character Directory");return(i,o)=>{var c;const a=Ni("RouterLink");return de(),Se("nav",null,[q("div",Qv,[le(a,{to:{name:"Home"},class:"brand"},{default:Wt(()=>[q("span",Zv,Ht(s.value),1)]),_:1}),q("div",eb,[Ye(q("p",tb,[wr("Welcome Back "),q("strong",null,[q("i",null,Ht((c=ge(r))==null?void 0:c.email),1)])],512),[[Hd,ge(e)]]),ge(e)?(de(),Se("div",nb,[le(a,{to:{name:"Settings"},class:"menu-item"},{default:Wt(()=>[wr("Settings")]),_:1}),q("button",{class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>ge(n)&&ge(n)(...l))},"Logout")])):(de(),Se("div",rb,[le(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:Wt(()=>[wr("Login")]),_:1})]))])])])}}},ib=Lt(sb,[["__scopeId","data-v-ca57d363"]]),ob={__name:"App",setup(t){return(e,n)=>{const r=Ni("RouterView");return de(),Se(ke,null,[le(ib),le(r)],64)}}};Wd(ob).use(so).mount("#app");export{ke as F,Sc as a,de as b,Se as c,ge as d,q as e,Ac as f,$c as g,ro as h,Rc as o,me as r,Ht as t,Zh as u};
