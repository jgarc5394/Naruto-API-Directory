(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function di(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const se={},tn=[],He=()=>{},mu=()=>!1,gu=/^on[^a-z]/,Wr=t=>gu.test(t),hi=t=>t.startsWith("onUpdate:"),ge=Object.assign,pi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_u=Object.prototype.hasOwnProperty,K=(t,e)=>_u.call(t,e),F=Array.isArray,nn=t=>zr(t)==="[object Map]",Va=t=>zr(t)==="[object Set]",V=t=>typeof t=="function",he=t=>typeof t=="string",mi=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Wa=t=>oe(t)&&V(t.then)&&V(t.catch),za=Object.prototype.toString,zr=t=>za.call(t),yu=t=>zr(t).slice(8,-1),Ka=t=>zr(t)==="[object Object]",gi=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pr=di(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bu=/-(\w)/g,et=Kr(t=>t.replace(bu,(e,n)=>n?n.toUpperCase():"")),vu=/\B([A-Z])/g,bn=Kr(t=>t.replace(vu,"-$1").toLowerCase()),qr=Kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ps=Kr(t=>t?`on${qr(t)}`:""),Fn=(t,e)=>!Object.is(t,e),mr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ds=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Eu=t=>{const e=he(t)?Number(t):NaN;return isNaN(e)?t:e};let ao;const Ls=()=>ao||(ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _i(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?Ru(r):_i(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(he(t))return t;if(oe(t))return t}}const wu=/;(?![^(]*\))/g,Iu=/:([^]+)/,Tu=/\/\*[^]*?\*\//g;function Ru(t){const e={};return t.replace(Tu,"").split(wu).forEach(n=>{if(n){const r=n.split(Iu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jr(t){let e="";if(he(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Jr(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Su="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cu=di(Su);function qa(t){return!!t||t===""}const Bt=t=>he(t)?t:t==null?"":F(t)||oe(t)&&(t.toString===za||!V(t.toString))?JSON.stringify(t,Ja,2):String(t),Ja=(t,e)=>e&&e.__v_isRef?Ja(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Va(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!F(e)&&!Ka(e)?String(e):e;let Fe;class Au{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pu(t,e=Fe){e&&e.active&&e.effects.push(t)}function Ou(){return Fe}const yi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ga=t=>(t.w&Ot)>0,Ya=t=>(t.n&Ot)>0,ku=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},Nu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ga(s)&&!Ya(s)?s.delete(t):e[n++]=s,s.w&=~Ot,s.n&=~Ot}e.length=n}},Ms=new WeakMap;let Pn=0,Ot=1;const Us=30;let $e;const Ht=Symbol(""),Fs=Symbol("");class bi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pu(this,r)}run(){if(!this.active)return this.fn();let e=$e,n=St;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$e,$e=this,St=!0,Ot=1<<++Pn,Pn<=Us?ku(this):co(this),this.fn()}finally{Pn<=Us&&Nu(this),Ot=1<<--Pn,$e=this.parent,St=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(co(this),this.onStop&&this.onStop(),this.active=!1)}}function co(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let St=!0;const Xa=[];function vn(){Xa.push(St),St=!1}function En(){const t=Xa.pop();St=t===void 0?!0:t}function Ae(t,e,n){if(St&&$e){let r=Ms.get(t);r||Ms.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=yi()),Qa(s)}}function Qa(t,e){let n=!1;Pn<=Us?Ya(t)||(t.n|=Ot,n=!Ga(t)):n=!t.has($e),n&&(t.add($e),$e.deps.push(t))}function lt(t,e,n,r,s,i){const o=Ms.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?gi(n)&&a.push(o.get("length")):(a.push(o.get(Ht)),nn(t)&&a.push(o.get(Fs)));break;case"delete":F(t)||(a.push(o.get(Ht)),nn(t)&&a.push(o.get(Fs)));break;case"set":nn(t)&&a.push(o.get(Ht));break}if(a.length===1)a[0]&&Bs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Bs(yi(c))}}function Bs(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&lo(r);for(const r of n)r.computed||lo(r)}function lo(t,e){(t!==$e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const xu=di("__proto__,__v_isRef,__isVue"),Za=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mi)),Du=vi(),Lu=vi(!1,!0),Mu=vi(!0),uo=Uu();function Uu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){vn();const r=J(this)[e].apply(this,n);return En(),r}}),t}function Fu(t){const e=J(this);return Ae(e,"has",t),e.hasOwnProperty(t)}function vi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ef:sc:e?rc:nc).get(r))return r;const o=F(r);if(!t){if(o&&K(uo,s))return Reflect.get(uo,s,i);if(s==="hasOwnProperty")return Fu}const a=Reflect.get(r,s,i);return(mi(s)?Za.has(s):xu(s))||(t||Ae(r,"get",s),e)?a:we(a)?o&&gi(s)?a:a.value:oe(a)?t?oc(a):Yr(a):a}}const Bu=ec(),$u=ec(!0);function ec(t=!1){return function(n,r,s,i){let o=n[r];if(un(o)&&we(o)&&!we(s))return!1;if(!t&&(!Pr(s)&&!un(s)&&(o=J(o),s=J(s)),!F(n)&&we(o)&&!we(s)))return o.value=s,!0;const a=F(n)&&gi(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===J(i)&&(a?Fn(s,o)&&lt(n,"set",r,s):lt(n,"add",r,s)),c}}function Hu(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&lt(t,"delete",e,void 0),r}function ju(t,e){const n=Reflect.has(t,e);return(!mi(e)||!Za.has(e))&&Ae(t,"has",e),n}function Vu(t){return Ae(t,"iterate",F(t)?"length":Ht),Reflect.ownKeys(t)}const tc={get:Du,set:Bu,deleteProperty:Hu,has:ju,ownKeys:Vu},Wu={get:Mu,set(t,e){return!0},deleteProperty(t,e){return!0}},zu=ge({},tc,{get:Lu,set:$u}),Ei=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function ar(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(e!==i&&Ae(s,"get",e),Ae(s,"get",i));const{has:o}=Gr(s),a=r?Ei:n?Ti:Bn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function cr(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(t!==s&&Ae(r,"has",t),Ae(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function lr(t,e=!1){return t=t.__v_raw,!e&&Ae(J(t),"iterate",Ht),Reflect.get(t,"size",t)}function fo(t){t=J(t);const e=J(this);return Gr(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function ho(t,e){e=J(e);const n=J(this),{has:r,get:s}=Gr(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Fn(e,o)&&lt(n,"set",t,e):lt(n,"add",t,e),this}function po(t){const e=J(this),{has:n,get:r}=Gr(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&lt(e,"delete",t,void 0),i}function mo(){const t=J(this),e=t.size!==0,n=t.clear();return e&&lt(t,"clear",void 0,void 0),n}function ur(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?Ei:t?Ti:Bn;return!t&&Ae(a,"iterate",Ht),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function fr(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=nn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ei:e?Ti:Bn;return!e&&Ae(i,"iterate",c?Fs:Ht),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function mt(t){return function(...e){return t==="delete"?!1:this}}function Ku(){const t={get(i){return ar(this,i)},get size(){return lr(this)},has:cr,add:fo,set:ho,delete:po,clear:mo,forEach:ur(!1,!1)},e={get(i){return ar(this,i,!1,!0)},get size(){return lr(this)},has:cr,add:fo,set:ho,delete:po,clear:mo,forEach:ur(!1,!0)},n={get(i){return ar(this,i,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:ur(!0,!1)},r={get(i){return ar(this,i,!0,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=fr(i,!1,!1),n[i]=fr(i,!0,!1),e[i]=fr(i,!1,!0),r[i]=fr(i,!0,!0)}),[t,n,e,r]}const[qu,Ju,Gu,Yu]=Ku();function wi(t,e){const n=e?t?Yu:Gu:t?Ju:qu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Xu={get:wi(!1,!1)},Qu={get:wi(!1,!0)},Zu={get:wi(!0,!1)},nc=new WeakMap,rc=new WeakMap,sc=new WeakMap,ef=new WeakMap;function tf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nf(t){return t.__v_skip||!Object.isExtensible(t)?0:tf(yu(t))}function Yr(t){return un(t)?t:Ii(t,!1,tc,Xu,nc)}function ic(t){return Ii(t,!1,zu,Qu,rc)}function oc(t){return Ii(t,!0,Wu,Zu,sc)}function Ii(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rn(t){return un(t)?rn(t.__v_raw):!!(t&&t.__v_isReactive)}function un(t){return!!(t&&t.__v_isReadonly)}function Pr(t){return!!(t&&t.__v_isShallow)}function ac(t){return rn(t)||un(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function cc(t){return Ar(t,"__v_skip",!0),t}const Bn=t=>oe(t)?Yr(t):t,Ti=t=>oe(t)?oc(t):t;function lc(t){St&&$e&&(t=J(t),Qa(t.dep||(t.dep=yi())))}function uc(t,e){t=J(t);const n=t.dep;n&&Bs(n)}function we(t){return!!(t&&t.__v_isRef===!0)}function We(t){return fc(t,!1)}function rf(t){return fc(t,!0)}function fc(t,e){return we(t)?t:new sf(t,e)}class sf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:Bn(e)}get value(){return lc(this),this._value}set value(e){const n=this.__v_isShallow||Pr(e)||un(e);e=n?e:J(e),Fn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bn(e),uc(this))}}function me(t){return we(t)?t.value:t}const of={get:(t,e,n)=>me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dc(t){return rn(t)?t:new Proxy(t,of)}class af{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new bi(e,()=>{this._dirty||(this._dirty=!0,uc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this);return lc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function cf(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=He):(r=t.get,s=t.set),new af(r,s,i||!s,n)}function Ct(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Xn(i,e,n)}return s}function je(t,e,n,r){if(V(t)){const i=Ct(t,e,n,r);return i&&Wa(i)&&i.catch(o=>{Xn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(je(t[i],e,n,r));return s}function Xn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ct(c,null,10,[t,o,a]);return}}lf(t,n,s,r)}function lf(t,e,n,r=!0){console.error(t)}let $n=!1,$s=!1;const Ee=[];let Ye=0;const sn=[];let it=null,Ut=0;const hc=Promise.resolve();let Ri=null;function pc(t){const e=Ri||hc;return t?e.then(this?t.bind(this):t):e}function uf(t){let e=Ye+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;Hn(Ee[r])<t?e=r+1:n=r}return e}function Si(t){(!Ee.length||!Ee.includes(t,$n&&t.allowRecurse?Ye+1:Ye))&&(t.id==null?Ee.push(t):Ee.splice(uf(t.id),0,t),mc())}function mc(){!$n&&!$s&&($s=!0,Ri=hc.then(yc))}function ff(t){const e=Ee.indexOf(t);e>Ye&&Ee.splice(e,1)}function gc(t){F(t)?sn.push(...t):(!it||!it.includes(t,t.allowRecurse?Ut+1:Ut))&&sn.push(t),mc()}function go(t,e=$n?Ye+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function _c(t){if(sn.length){const e=[...new Set(sn)];if(sn.length=0,it){it.push(...e);return}for(it=e,it.sort((n,r)=>Hn(n)-Hn(r)),Ut=0;Ut<it.length;Ut++)it[Ut]();it=null,Ut=0}}const Hn=t=>t.id==null?1/0:t.id,df=(t,e)=>{const n=Hn(t)-Hn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yc(t){$s=!1,$n=!0,Ee.sort(df);const e=He;try{for(Ye=0;Ye<Ee.length;Ye++){const n=Ee[Ye];n&&n.active!==!1&&Ct(n,null,14)}}finally{Ye=0,Ee.length=0,_c(),$n=!1,Ri=null,(Ee.length||sn.length)&&yc()}}function hf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||se;p&&(s=n.map(_=>he(_)?_.trim():_)),f&&(s=n.map(Ds))}let a,c=r[a=ps(e)]||r[a=ps(et(e))];!c&&i&&(c=r[a=ps(bn(e))]),c&&je(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(l,t,6,s)}}function bc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const u=bc(l,e,!0);u&&(a=!0,ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ge(o,i),oe(t)&&r.set(t,o),o)}function Xr(t,e){return!t||!Wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,bn(e))||K(t,e))}let xe=null,Qr=null;function Or(t){const e=xe;return xe=t,Qr=t&&t.type.__scopeId||null,e}function Ci(t){Qr=t}function Ai(){Qr=null}function jt(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ao(-1);const i=Or(e);let o;try{o=t(...s)}finally{Or(i),r._d&&Ao(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ms(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:_,ctx:g,inheritAttrs:w}=t;let N,k;const P=Or(t);try{if(n.shapeFlag&4){const R=s||r;N=Be(u.call(R,R,f,i,_,p,g)),k=c}else{const R=e;N=Be(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),k=e.props?c:mf(c)}}catch(R){Dn.length=0,Xn(R,t,1),N=ce(ut)}let H=N;if(k&&w!==!1){const R=Object.keys(k),{shapeFlag:B}=H;R.length&&B&7&&(o&&R.some(hi)&&(k=gf(k,o)),H=dn(H,k))}return n.dirs&&(H=dn(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),N=H,Or(P),N}function pf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Dr(r)){if(r.type!==ut||r.children==="v-if"){if(e)return;e=r}}else return}return e}const mf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wr(n))&&((e||(e={}))[n]=t[n]);return e},gf=(t,e)=>{const n={};for(const r in t)(!hi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function _f(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_o(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Xr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_o(r,o,l):!0:!!o;return!1}function _o(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Xr(n,i))return!0}return!1}function Pi({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yf=t=>t.__isSuspense,bf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?Ef(e,n,r,s,i,o,a,c,l):wf(t,e,n,r,s,o,a,c,l)},hydrate:If,create:Oi,normalize:Tf},vf=bf;function jn(t,e){const n=t.props&&t.props[e];V(n)&&n()}function Ef(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),p=t.suspense=Oi(t,s,r,e,f,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(jn(t,"onPending"),jn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),on(p,t.ssFallback)):p.resolve(!1,!0)}function wf(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,_=e.ssFallback,{activeBranch:g,pendingBranch:w,isInFallback:N,isHydrating:k}=f;if(w)f.pendingBranch=p,Et(p,w)?(c(w,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():N&&(c(g,_,n,r,s,null,i,o,a),on(f,_))):(f.pendingId++,k?(f.isHydrating=!1,f.activeBranch=w):l(w,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),N?(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(g,_,n,r,s,null,i,o,a),on(f,_))):g&&Et(p,g)?(c(g,p,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(g&&Et(p,g))c(g,p,n,r,s,f,i,o,a),on(f,p);else if(jn(e,"onPending"),f.pendingBranch=p,f.pendingId++,c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:P,pendingId:H}=f;P>0?setTimeout(()=>{f.pendingId===H&&f.fallback(_)},P):P===0&&f.fallback(_)}}function Oi(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:p,um:_,n:g,o:{parentNode:w,remove:N}}=l;let k;const P=Sf(t);P&&e!=null&&e.pendingBranch&&(k=e.pendingId,e.deps++);const H=t.props?Eu(t.props.timeout):void 0,R={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof H=="number"?H:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(B=!1,G=!1){const{vnode:ie,activeBranch:ne,pendingBranch:ae,pendingId:ue,effects:ye,parentComponent:Oe,container:be}=R;if(R.isHydrating)R.isHydrating=!1;else if(!B){const le=ne&&ae.transition&&ae.transition.mode==="out-in";le&&(ne.transition.afterLeave=()=>{ue===R.pendingId&&p(ae,be,q,0)});let{anchor:q}=R;ne&&(q=g(ne),_(ne,Oe,R,!0)),le||p(ae,be,q,0)}on(R,ae),R.pendingBranch=null,R.isInFallback=!1;let Me=R.parent,nt=!1;for(;Me;){if(Me.pendingBranch){Me.effects.push(...ye),nt=!0;break}Me=Me.parent}nt||gc(ye),R.effects=[],P&&e&&e.pendingBranch&&k===e.pendingId&&(e.deps--,e.deps===0&&!G&&e.resolve()),jn(ie,"onResolve")},fallback(B){if(!R.pendingBranch)return;const{vnode:G,activeBranch:ie,parentComponent:ne,container:ae,isSVG:ue}=R;jn(G,"onFallback");const ye=g(ie),Oe=()=>{R.isInFallback&&(f(null,B,ae,ye,ne,null,ue,a,c),on(R,B))},be=B.transition&&B.transition.mode==="out-in";be&&(ie.transition.afterLeave=Oe),R.isInFallback=!0,_(ie,ne,null,!0),be||Oe()},move(B,G,ie){R.activeBranch&&p(R.activeBranch,B,G,ie),R.container=B},next(){return R.activeBranch&&g(R.activeBranch)},registerDep(B,G){const ie=!!R.pendingBranch;ie&&R.deps++;const ne=B.vnode.el;B.asyncDep.catch(ae=>{Xn(ae,B,0)}).then(ae=>{if(B.isUnmounted||R.isUnmounted||R.pendingId!==B.suspenseId)return;B.asyncResolved=!0;const{vnode:ue}=B;qs(B,ae,!1),ne&&(ue.el=ne);const ye=!ne&&B.subTree.el;G(B,ue,w(ne||B.subTree.el),ne?null:g(B.subTree),R,o,c),ye&&N(ye),Pi(B,ue.el),ie&&--R.deps===0&&R.resolve()})},unmount(B,G){R.isUnmounted=!0,R.activeBranch&&_(R.activeBranch,n,B,G),R.pendingBranch&&_(R.pendingBranch,n,B,G)}};return R}function If(t,e,n,r,s,i,o,a,c){const l=e.suspense=Oi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Tf(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=yo(r?n.default:n),t.ssFallback=r?yo(n.fallback):ce(ut)}function yo(t){let e;if(V(t)){const n=fn&&t._c;n&&(t._d=!1,de()),t=t(),n&&(t._d=!0,e=De,Uc())}return F(t)&&(t=pf(t)),t=Be(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Rf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):gc(t)}function on(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Pi(r,s))}function Sf(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const dr={};function gr(t,e,n){return vc(t,e,n)}function vc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=se){var a;const c=Ou()===((a=_e)==null?void 0:a.scope)?_e:null;let l,u=!1,f=!1;if(we(t)?(l=()=>t.value,u=Pr(t)):rn(t)?(l=()=>t,r=!0):F(t)?(f=!0,u=t.some(R=>rn(R)||Pr(R)),l=()=>t.map(R=>{if(we(R))return R.value;if(rn(R))return $t(R);if(V(R))return Ct(R,c,2)})):V(t)?e?l=()=>Ct(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),je(t,c,3,[_])}:l=He,e&&r){const R=l;l=()=>$t(R())}let p,_=R=>{p=P.onStop=()=>{Ct(R,c,4)}},g;if(Vn)if(_=He,e?n&&je(e,c,3,[l(),f?[]:void 0,_]):l(),s==="sync"){const R=yd();g=R.__watcherHandles||(R.__watcherHandles=[])}else return He;let w=f?new Array(t.length).fill(dr):dr;const N=()=>{if(P.active)if(e){const R=P.run();(r||u||(f?R.some((B,G)=>Fn(B,w[G])):Fn(R,w)))&&(p&&p(),je(e,c,3,[R,w===dr?void 0:f&&w[0]===dr?[]:w,_]),w=R)}else P.run()};N.allowRecurse=!!e;let k;s==="sync"?k=N:s==="post"?k=()=>Ce(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),k=()=>Si(N));const P=new bi(l,k);e?n?N():w=P.run():s==="post"?Ce(P.run.bind(P),c&&c.suspense):P.run();const H=()=>{P.stop(),c&&c.scope&&pi(c.scope.effects,P)};return g&&g.push(H),H}function Cf(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?Ec(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=_e;hn(this);const a=vc(s,i.bind(r),n);return o?hn(o):Vt(),a}function Ec(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function $t(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))$t(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)$t(t[n],e);else if(Va(t)||nn(t))t.forEach(n=>{$t(n,e)});else if(Ka(t))for(const n in t)$t(t[n],e);return t}function Hs(t,e){const n=xe;if(n===null)return t;const r=ns(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=se]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&$t(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Dt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(vn(),je(c,n,8,[t.el,a,t,e]),En())}}function wc(t,e){return V(t)?(()=>ge({name:t.name},e,{setup:t}))():t}const _r=t=>!!t.type.__asyncLoader,Ic=t=>t.type.__isKeepAlive;function Af(t,e){Tc(t,"a",e)}function Pf(t,e){Tc(t,"da",e)}function Tc(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Zr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ic(s.parent.vnode)&&Of(r,e,n,s),s=s.parent}}function Of(t,e,n,r){const s=Zr(e,t,r,!0);Sc(()=>{pi(r[e],s)},n)}function Zr(t,e,n=_e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;vn(),hn(n);const a=je(e,n,t,o);return Vt(),En(),a});return r?s.unshift(i):s.push(i),i}}const dt=t=>(e,n=_e)=>(!Vn||t==="sp")&&Zr(t,(...r)=>e(...r),n),kf=dt("bm"),Rc=dt("m"),Nf=dt("bu"),xf=dt("u"),Df=dt("bum"),Sc=dt("um"),Lf=dt("sp"),Mf=dt("rtg"),Uf=dt("rtc");function Ff(t,e=_e){Zr("ec",t,e)}const Cc="components";function ki(t,e){return $f(Cc,t,!0,e)||t}const Bf=Symbol.for("v-ndc");function $f(t,e,n=!0,r=!1){const s=xe||_e;if(s){const i=s.type;if(t===Cc){const a=md(i,!1);if(a&&(a===e||a===et(e)||a===qr(et(e))))return i}const o=bo(s[t]||i[t],e)||bo(s.appContext[t],e);return!o&&r?i:o}}function bo(t,e){return t&&(t[e]||t[et(e)]||t[qr(et(e))])}function Ac(t,e,n,r){let s;const i=n&&n[r];if(F(t)||he(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const js=t=>t?$c(t)?ns(t)||t.proxy:js(t.parent):null,xn=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>js(t.parent),$root:t=>js(t.root),$emit:t=>t.emit,$options:t=>Ni(t),$forceUpdate:t=>t.f||(t.f=()=>Si(t.update)),$nextTick:t=>t.n||(t.n=pc.bind(t.proxy)),$watch:t=>Cf.bind(t)}),gs=(t,e)=>t!==se&&!t.__isScriptSetup&&K(t,e),Hf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gs(r,e))return o[e]=1,r[e];if(s!==se&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==se&&K(n,e))return o[e]=4,n[e];Vs&&(o[e]=0)}}const u=xn[e];let f,p;if(u)return e==="$attrs"&&Ae(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==se&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gs(s,e)?(s[e]=n,!0):r!==se&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&K(t,o)||gs(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(xn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vo(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vs=!0;function jf(t){const e=Ni(t),n=t.proxy,r=t.ctx;Vs=!1,e.beforeCreate&&Eo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:_,updated:g,activated:w,deactivated:N,beforeDestroy:k,beforeUnmount:P,destroyed:H,unmounted:R,render:B,renderTracked:G,renderTriggered:ie,errorCaptured:ne,serverPrefetch:ae,expose:ue,inheritAttrs:ye,components:Oe,directives:be,filters:Me}=e;if(l&&Vf(l,r,null),o)for(const q in o){const Y=o[q];V(Y)&&(r[q]=Y.bind(n))}if(s){const q=s.call(n,n);oe(q)&&(t.data=Yr(q))}if(Vs=!0,i)for(const q in i){const Y=i[q],rt=V(Y)?Y.bind(n,n):V(Y.get)?Y.get.bind(n,n):He,pt=!V(Y)&&V(Y.set)?Y.set.bind(n):He,qe=Ne({get:rt,set:pt});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Se=>qe.value=Se})}if(a)for(const q in a)Pc(a[q],r,n,q);if(c){const q=V(c)?c.call(n):c;Reflect.ownKeys(q).forEach(Y=>{yr(Y,q[Y])})}u&&Eo(u,t,"c");function le(q,Y){F(Y)?Y.forEach(rt=>q(rt.bind(n))):Y&&q(Y.bind(n))}if(le(kf,f),le(Rc,p),le(Nf,_),le(xf,g),le(Af,w),le(Pf,N),le(Ff,ne),le(Uf,G),le(Mf,ie),le(Df,P),le(Sc,R),le(Lf,ae),F(ue))if(ue.length){const q=t.exposed||(t.exposed={});ue.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:rt=>n[Y]=rt})})}else t.exposed||(t.exposed={});B&&t.render===He&&(t.render=B),ye!=null&&(t.inheritAttrs=ye),Oe&&(t.components=Oe),be&&(t.directives=be)}function Vf(t,e,n=He){F(t)&&(t=Ws(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=Ve(s.from||r,s.default,!0):i=Ve(s.from||r):i=Ve(s),we(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eo(t,e,n){je(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pc(t,e,n,r){const s=r.includes(".")?Ec(n,r):()=>n[r];if(he(t)){const i=e[t];V(i)&&gr(s,i)}else if(V(t))gr(s,t.bind(n));else if(oe(t))if(F(t))t.forEach(i=>Pc(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&gr(s,i,t)}}function Ni(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>kr(c,l,o,!0)),kr(c,e,o)),oe(e)&&i.set(e,c),c}function kr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&kr(t,i,n,!0),s&&s.forEach(o=>kr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wf={data:wo,props:Io,emits:Io,methods:On,computed:On,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:On,directives:On,watch:Kf,provide:wo,inject:zf};function wo(t,e){return e?t?function(){return ge(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function zf(t,e){return On(Ws(t),Ws(e))}function Ws(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function On(t,e){return t?ge(Object.create(null),t,e):e}function Io(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ge(Object.create(null),vo(t),vo(e??{})):e}function Kf(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=Te(t[r],e[r]);return n}function Oc(){return{app:null,config:{isNativeTag:mu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qf=0;function Jf(t,e){return function(r,s=null){V(r)||(r=ge({},r)),s!=null&&!oe(s)&&(s=null);const i=Oc(),o=new Set;let a=!1;const c=i.app={_uid:qf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...u)):V(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=ce(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,ns(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Nr=c;try{return l()}finally{Nr=null}}};return c}}let Nr=null;function yr(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=_e||xe;if(r||Nr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Nr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}function Gf(t,e,n,r=!1){const s={},i={};Ar(i,ts,1),t.propsDefaults=Object.create(null),kc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ic(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Xr(t.emitsOptions,p))continue;const _=e[p];if(c)if(K(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const g=et(p);s[g]=zs(c,a,g,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{kc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!K(e,f)&&((u=bn(f))===f||!K(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=zs(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!K(e,f))&&(delete i[f],l=!0)}l&&lt(t,"set","$attrs")}function kc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pr(c))continue;const l=e[c];let u;s&&K(s,u=et(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Xr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=zs(s,c,f,l[f],t,!K(l,f))}}return o}function zs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(hn(s),r=l[n]=c.call(null,e),Vt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===bn(n))&&(r=!0))}return r}function Nc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const u=f=>{c=!0;const[p,_]=Nc(f,e,!0);ge(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return oe(t)&&r.set(t,tn),tn;if(F(i))for(let u=0;u<i.length;u++){const f=et(i[u]);To(f)&&(o[f]=se)}else if(i)for(const u in i){const f=et(u);if(To(f)){const p=i[u],_=o[f]=F(p)||V(p)?{type:p}:ge({},p);if(_){const g=Co(Boolean,_.type),w=Co(String,_.type);_[0]=g>-1,_[1]=w<0||g<w,(g>-1||K(_,"default"))&&a.push(f)}}}const l=[o,a];return oe(t)&&r.set(t,l),l}function To(t){return t[0]!=="$"}function Ro(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function So(t,e){return Ro(t)===Ro(e)}function Co(t,e){return F(e)?e.findIndex(n=>So(n,t)):V(e)&&So(e,t)?0:-1}const xc=t=>t[0]==="_"||t==="$stable",xi=t=>F(t)?t.map(Be):[Be(t)],Xf=(t,e,n)=>{if(e._n)return e;const r=jt((...s)=>xi(e(...s)),n);return r._c=!1,r},Dc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xc(s))continue;const i=t[s];if(V(i))e[s]=Xf(s,i,r);else if(i!=null){const o=xi(i);e[s]=()=>o}}},Lc=(t,e)=>{const n=xi(e);t.slots.default=()=>n},Qf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),Ar(e,"_",n)):Dc(e,t.slots={})}else t.slots={},e&&Lc(t,e);Ar(t.slots,ts,1)},Zf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Dc(e,s)),o=e}else e&&(Lc(t,e),o={default:1});if(i)for(const a in s)!xc(a)&&!(a in o)&&delete s[a]};function Ks(t,e,n,r,s=!1){if(F(t)){t.forEach((p,_)=>Ks(p,e&&(F(e)?e[_]:e),n,r,s));return}if(_r(r)&&!s)return;const i=r.shapeFlag&4?ns(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(he(l)?(u[l]=null,K(f,l)&&(f[l]=null)):we(l)&&(l.value=null)),V(c))Ct(c,a,12,[o,u]);else{const p=he(c),_=we(c);if(p||_){const g=()=>{if(t.f){const w=p?K(f,c)?f[c]:u[c]:c.value;s?F(w)&&pi(w,i):F(w)?w.includes(i)||w.push(i):p?(u[c]=[i],K(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,K(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ce(g,n)):g()}}}const Ce=Rf;function ed(t){return td(t)}function td(t,e){const n=Ls();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:_=He,insertStaticContent:g}=t,w=(d,h,m,y=null,E=null,I=null,O=!1,S=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!Et(d,h)&&(y=v(d),Se(d,E,I,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:T,ref:M,shapeFlag:D}=h;switch(T){case es:N(d,h,m,y);break;case ut:k(d,h,m,y);break;case _s:d==null&&P(h,m,y,O);break;case ke:Oe(d,h,m,y,E,I,O,S,C);break;default:D&1?B(d,h,m,y,E,I,O,S,C):D&6?be(d,h,m,y,E,I,O,S,C):(D&64||D&128)&&T.process(d,h,m,y,E,I,O,S,C,A)}M!=null&&E&&Ks(M,d&&d.ref,I,h||d,!h)},N=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const E=h.el=d.el;h.children!==d.children&&l(E,h.children)}},k=(d,h,m,y)=>{d==null?r(h.el=c(h.children||""),m,y):h.el=d.el},P=(d,h,m,y)=>{[d.el,d.anchor]=g(d.children,h,m,y,d.el,d.anchor)},H=({el:d,anchor:h},m,y)=>{let E;for(;d&&d!==h;)E=p(d),r(d,m,y),d=E;r(h,m,y)},R=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},B=(d,h,m,y,E,I,O,S,C)=>{O=O||h.type==="svg",d==null?G(h,m,y,E,I,O,S,C):ae(d,h,E,I,O,S,C)},G=(d,h,m,y,E,I,O,S)=>{let C,T;const{type:M,props:D,shapeFlag:U,transition:j,dirs:W}=d;if(C=d.el=o(d.type,I,D&&D.is,D),U&8?u(C,d.children):U&16&&ne(d.children,C,null,y,E,I&&M!=="foreignObject",O,S),W&&Dt(d,null,y,"created"),ie(C,d,d.scopeId,O,y),D){for(const Z in D)Z!=="value"&&!pr(Z)&&i(C,Z,null,D[Z],I,d.children,y,E,ve);"value"in D&&i(C,"value",null,D.value),(T=D.onVnodeBeforeMount)&&Ge(T,y,d)}W&&Dt(d,null,y,"beforeMount");const re=(!E||E&&!E.pendingBranch)&&j&&!j.persisted;re&&j.beforeEnter(C),r(C,h,m),((T=D&&D.onVnodeMounted)||re||W)&&Ce(()=>{T&&Ge(T,y,d),re&&j.enter(C),W&&Dt(d,null,y,"mounted")},E)},ie=(d,h,m,y,E)=>{if(m&&_(d,m),y)for(let I=0;I<y.length;I++)_(d,y[I]);if(E){let I=E.subTree;if(h===I){const O=E.vnode;ie(d,O,O.scopeId,O.slotScopeIds,E.parent)}}},ne=(d,h,m,y,E,I,O,S,C=0)=>{for(let T=C;T<d.length;T++){const M=d[T]=S?bt(d[T]):Be(d[T]);w(null,M,h,m,y,E,I,O,S)}},ae=(d,h,m,y,E,I,O)=>{const S=h.el=d.el;let{patchFlag:C,dynamicChildren:T,dirs:M}=h;C|=d.patchFlag&16;const D=d.props||se,U=h.props||se;let j;m&&Lt(m,!1),(j=U.onVnodeBeforeUpdate)&&Ge(j,m,h,d),M&&Dt(h,d,m,"beforeUpdate"),m&&Lt(m,!0);const W=E&&h.type!=="foreignObject";if(T?ue(d.dynamicChildren,T,S,m,y,W,I):O||Y(d,h,S,null,m,y,W,I,!1),C>0){if(C&16)ye(S,h,D,U,m,y,E);else if(C&2&&D.class!==U.class&&i(S,"class",null,U.class,E),C&4&&i(S,"style",D.style,U.style,E),C&8){const re=h.dynamicProps;for(let Z=0;Z<re.length;Z++){const fe=re[Z],Ue=D[fe],Yt=U[fe];(Yt!==Ue||fe==="value")&&i(S,fe,Ue,Yt,E,d.children,m,y,ve)}}C&1&&d.children!==h.children&&u(S,h.children)}else!O&&T==null&&ye(S,h,D,U,m,y,E);((j=U.onVnodeUpdated)||M)&&Ce(()=>{j&&Ge(j,m,h,d),M&&Dt(h,d,m,"updated")},y)},ue=(d,h,m,y,E,I,O)=>{for(let S=0;S<h.length;S++){const C=d[S],T=h[S],M=C.el&&(C.type===ke||!Et(C,T)||C.shapeFlag&70)?f(C.el):m;w(C,T,M,null,y,E,I,O,!0)}},ye=(d,h,m,y,E,I,O)=>{if(m!==y){if(m!==se)for(const S in m)!pr(S)&&!(S in y)&&i(d,S,m[S],null,O,h.children,E,I,ve);for(const S in y){if(pr(S))continue;const C=y[S],T=m[S];C!==T&&S!=="value"&&i(d,S,T,C,O,h.children,E,I,ve)}"value"in y&&i(d,"value",m.value,y.value)}},Oe=(d,h,m,y,E,I,O,S,C)=>{const T=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:j}=h;j&&(S=S?S.concat(j):j),d==null?(r(T,m,y),r(M,m,y),ne(h.children,m,M,E,I,O,S,C)):D>0&&D&64&&U&&d.dynamicChildren?(ue(d.dynamicChildren,U,m,E,I,O,S),(h.key!=null||E&&h===E.subTree)&&Mc(d,h,!0)):Y(d,h,m,M,E,I,O,S,C)},be=(d,h,m,y,E,I,O,S,C)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?E.ctx.activate(h,m,y,O,C):Me(h,m,y,E,I,O,C):nt(d,h,C)},Me=(d,h,m,y,E,I,O)=>{const S=d.component=ud(d,y,E);if(Ic(d)&&(S.ctx.renderer=A),fd(S),S.asyncDep){if(E&&E.registerDep(S,le),!d.el){const C=S.subTree=ce(ut);k(null,C,h,m)}return}le(S,d,h,m,E,I,O)},nt=(d,h,m)=>{const y=h.component=d.component;if(_f(d,h,m))if(y.asyncDep&&!y.asyncResolved){q(y,h,m);return}else y.next=h,ff(y.update),y.update();else h.el=d.el,y.vnode=h},le=(d,h,m,y,E,I,O)=>{const S=()=>{if(d.isMounted){let{next:M,bu:D,u:U,parent:j,vnode:W}=d,re=M,Z;Lt(d,!1),M?(M.el=W.el,q(d,M,O)):M=W,D&&mr(D),(Z=M.props&&M.props.onVnodeBeforeUpdate)&&Ge(Z,j,M,W),Lt(d,!0);const fe=ms(d),Ue=d.subTree;d.subTree=fe,w(Ue,fe,f(Ue.el),v(Ue),d,E,I),M.el=fe.el,re===null&&Pi(d,fe.el),U&&Ce(U,E),(Z=M.props&&M.props.onVnodeUpdated)&&Ce(()=>Ge(Z,j,M,W),E)}else{let M;const{el:D,props:U}=h,{bm:j,m:W,parent:re}=d,Z=_r(h);if(Lt(d,!1),j&&mr(j),!Z&&(M=U&&U.onVnodeBeforeMount)&&Ge(M,re,h),Lt(d,!0),D&&X){const fe=()=>{d.subTree=ms(d),X(D,d.subTree,d,E,null)};Z?h.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=ms(d);w(null,fe,m,y,d,E,I),h.el=fe.el}if(W&&Ce(W,E),!Z&&(M=U&&U.onVnodeMounted)){const fe=h;Ce(()=>Ge(M,re,fe),E)}(h.shapeFlag&256||re&&_r(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Ce(d.a,E),d.isMounted=!0,h=m=y=null}},C=d.effect=new bi(S,()=>Si(T),d.scope),T=d.update=()=>C.run();T.id=d.uid,Lt(d,!0),T()},q=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,Yf(d,h.props,y,m),Zf(d,h.children,m),vn(),go(),En()},Y=(d,h,m,y,E,I,O,S,C=!1)=>{const T=d&&d.children,M=d?d.shapeFlag:0,D=h.children,{patchFlag:U,shapeFlag:j}=h;if(U>0){if(U&128){pt(T,D,m,y,E,I,O,S,C);return}else if(U&256){rt(T,D,m,y,E,I,O,S,C);return}}j&8?(M&16&&ve(T,E,I),D!==T&&u(m,D)):M&16?j&16?pt(T,D,m,y,E,I,O,S,C):ve(T,E,I,!0):(M&8&&u(m,""),j&16&&ne(D,m,y,E,I,O,S,C))},rt=(d,h,m,y,E,I,O,S,C)=>{d=d||tn,h=h||tn;const T=d.length,M=h.length,D=Math.min(T,M);let U;for(U=0;U<D;U++){const j=h[U]=C?bt(h[U]):Be(h[U]);w(d[U],j,m,null,E,I,O,S,C)}T>M?ve(d,E,I,!0,!1,D):ne(h,m,y,E,I,O,S,C,D)},pt=(d,h,m,y,E,I,O,S,C)=>{let T=0;const M=h.length;let D=d.length-1,U=M-1;for(;T<=D&&T<=U;){const j=d[T],W=h[T]=C?bt(h[T]):Be(h[T]);if(Et(j,W))w(j,W,m,null,E,I,O,S,C);else break;T++}for(;T<=D&&T<=U;){const j=d[D],W=h[U]=C?bt(h[U]):Be(h[U]);if(Et(j,W))w(j,W,m,null,E,I,O,S,C);else break;D--,U--}if(T>D){if(T<=U){const j=U+1,W=j<M?h[j].el:y;for(;T<=U;)w(null,h[T]=C?bt(h[T]):Be(h[T]),m,W,E,I,O,S,C),T++}}else if(T>U)for(;T<=D;)Se(d[T],E,I,!0),T++;else{const j=T,W=T,re=new Map;for(T=W;T<=U;T++){const Pe=h[T]=C?bt(h[T]):Be(h[T]);Pe.key!=null&&re.set(Pe.key,T)}let Z,fe=0;const Ue=U-W+1;let Yt=!1,so=0;const Rn=new Array(Ue);for(T=0;T<Ue;T++)Rn[T]=0;for(T=j;T<=D;T++){const Pe=d[T];if(fe>=Ue){Se(Pe,E,I,!0);continue}let Je;if(Pe.key!=null)Je=re.get(Pe.key);else for(Z=W;Z<=U;Z++)if(Rn[Z-W]===0&&Et(Pe,h[Z])){Je=Z;break}Je===void 0?Se(Pe,E,I,!0):(Rn[Je-W]=T+1,Je>=so?so=Je:Yt=!0,w(Pe,h[Je],m,null,E,I,O,S,C),fe++)}const io=Yt?nd(Rn):tn;for(Z=io.length-1,T=Ue-1;T>=0;T--){const Pe=W+T,Je=h[Pe],oo=Pe+1<M?h[Pe+1].el:y;Rn[T]===0?w(null,Je,m,oo,E,I,O,S,C):Yt&&(Z<0||T!==io[Z]?qe(Je,m,oo,2):Z--)}}},qe=(d,h,m,y,E=null)=>{const{el:I,type:O,transition:S,children:C,shapeFlag:T}=d;if(T&6){qe(d.component.subTree,h,m,y);return}if(T&128){d.suspense.move(h,m,y);return}if(T&64){O.move(d,h,m,A);return}if(O===ke){r(I,h,m);for(let D=0;D<C.length;D++)qe(C[D],h,m,y);r(d.anchor,h,m);return}if(O===_s){H(d,h,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),Ce(()=>S.enter(I),E);else{const{leave:D,delayLeave:U,afterLeave:j}=S,W=()=>r(I,h,m),re=()=>{D(I,()=>{W(),j&&j()})};U?U(I,W,re):re()}else r(I,h,m)},Se=(d,h,m,y=!1,E=!1)=>{const{type:I,props:O,ref:S,children:C,dynamicChildren:T,shapeFlag:M,patchFlag:D,dirs:U}=d;if(S!=null&&Ks(S,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const j=M&1&&U,W=!_r(d);let re;if(W&&(re=O&&O.onVnodeBeforeUnmount)&&Ge(re,h,d),M&6)or(d.component,m,y);else{if(M&128){d.suspense.unmount(m,y);return}j&&Dt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,E,A,y):T&&(I!==ke||D>0&&D&64)?ve(T,h,m,!1,!0):(I===ke&&D&384||!E&&M&16)&&ve(C,h,m),y&&Jt(d)}(W&&(re=O&&O.onVnodeUnmounted)||j)&&Ce(()=>{re&&Ge(re,h,d),j&&Dt(d,null,h,"unmounted")},m)},Jt=d=>{const{type:h,el:m,anchor:y,transition:E}=d;if(h===ke){Gt(m,y);return}if(h===_s){R(d);return}const I=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:S}=E,C=()=>O(m,I);S?S(d.el,I,C):C()}else I()},Gt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},or=(d,h,m)=>{const{bum:y,scope:E,update:I,subTree:O,um:S}=d;y&&mr(y),E.stop(),I&&(I.active=!1,Se(O,d,h,m)),S&&Ce(S,h),Ce(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ve=(d,h,m,y=!1,E=!1,I=0)=>{for(let O=I;O<d.length;O++)Se(d[O],h,m,y,E)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Se(h._vnode,null,null,!0):w(h._vnode||null,d,h,null,null,null,m),go(),_c(),h._vnode=d},A={p:w,um:Se,m:qe,r:Jt,mt:Me,mc:ne,pc:Y,pbc:ue,n:v,o:t};let L,X;return e&&([L,X]=e(A)),{render:x,hydrate:L,createApp:Jf(x,L)}}function Lt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mc(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=bt(s[i]),a.el=o.el),n||Mc(o,a)),a.type===es&&(a.el=o.el)}}function nd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const rd=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),_s=Symbol.for("v-stc"),Dn=[];let De=null;function de(t=!1){Dn.push(De=t?null:[])}function Uc(){Dn.pop(),De=Dn[Dn.length-1]||null}let fn=1;function Ao(t){fn+=t}function Fc(t){return t.dynamicChildren=fn>0?De||tn:null,Uc(),fn>0&&De&&De.push(t),t}function Re(t,e,n,r,s,i){return Fc(te(t,e,n,r,s,i,!0))}function xr(t,e,n,r,s){return Fc(ce(t,e,n,r,s,!0))}function Dr(t){return t?t.__v_isVNode===!0:!1}function Et(t,e){return t.type===e.type&&t.key===e.key}const ts="__vInternal",Bc=({key:t})=>t??null,br=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||we(t)||V(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bc(e),ref:e&&br(e),scopeId:Qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(Di(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),fn>0&&!o&&De&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&De.push(c),c}const ce=sd;function sd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Bf)&&(t=ut),Dr(t)){const a=dn(t,e,!0);return n&&Di(a,n),fn>0&&!i&&De&&(a.shapeFlag&6?De[De.indexOf(t)]=a:De.push(a)),a.patchFlag|=-2,a}if(gd(t)&&(t=t.__vccOpts),e){e=id(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=Jr(a)),oe(c)&&(ac(c)&&!F(c)&&(c=ge({},c)),e.style=_i(c))}const o=he(t)?1:yf(t)?128:rd(t)?64:oe(t)?4:V(t)?2:0;return te(t,e,n,r,s,o,i,!0)}function id(t){return t?ac(t)||ts in t?ge({},t):t:null}function dn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ad(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bc(a),ref:e&&e.ref?n&&s?F(s)?s.concat(br(e)):[s,br(e)]:br(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vr(t=" ",e=0){return ce(es,null,t,e)}function od(t="",e=!1){return e?(de(),xr(ut,null,t)):ce(ut,null,t)}function Be(t){return t==null||typeof t=="boolean"?ce(ut):F(t)?ce(ke,null,t.slice()):typeof t=="object"?bt(t):ce(es,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function Di(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Di(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ts in e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function ad(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jr([e.class,r.class]));else if(s==="style")e.style=_i([e.style,r.style]);else if(Wr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ge(t,e,n,r=null){je(t,e,7,[n,r])}const cd=Oc();let ld=0;function ud(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cd,i={uid:ld++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Au(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nc(r,s),emitsOptions:bc(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hf.bind(null,i),t.ce&&t.ce(i),i}let _e=null,Li,Xt,Po="__VUE_INSTANCE_SETTERS__";(Xt=Ls()[Po])||(Xt=Ls()[Po]=[]),Xt.push(t=>_e=t),Li=t=>{Xt.length>1?Xt.forEach(e=>e(t)):Xt[0](t)};const hn=t=>{Li(t),t.scope.on()},Vt=()=>{_e&&_e.scope.off(),Li(null)};function $c(t){return t.vnode.shapeFlag&4}let Vn=!1;function fd(t,e=!1){Vn=e;const{props:n,children:r}=t.vnode,s=$c(t);Gf(t,n,s,e),Qf(t,r);const i=s?dd(t,e):void 0;return Vn=!1,i}function dd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cc(new Proxy(t.ctx,Hf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?pd(t):null;hn(t),vn();const i=Ct(r,t,0,[t.props,s]);if(En(),Vt(),Wa(i)){if(i.then(Vt,Vt),e)return i.then(o=>{qs(t,o,e)}).catch(o=>{Xn(o,t,0)});t.asyncDep=i}else qs(t,i,e)}else Hc(t,e)}function qs(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=dc(e)),Hc(t,n)}let Oo;function Hc(t,e,n){const r=t.type;if(!t.render){if(!e&&Oo&&!r.render){const s=r.template||Ni(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ge(ge({isCustomElement:i,delimiters:a},o),c);r.render=Oo(s,l)}}t.render=r.render||He}hn(t),vn(),jf(t),En(),Vt()}function hd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ae(t,"get","$attrs"),e[n]}}))}function pd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return hd(t)},slots:t.slots,emit:t.emit,expose:e}}function ns(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dc(cc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xn)return xn[n](t)},has(e,n){return n in e||n in xn}}))}function md(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function gd(t){return V(t)&&"__vccOpts"in t}const Ne=(t,e)=>cf(t,e,Vn);function jc(t,e,n){const r=arguments.length;return r===2?oe(e)&&!F(e)?Dr(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Dr(n)&&(n=[n]),ce(t,e,n))}const _d=Symbol.for("v-scx"),yd=()=>Ve(_d),bd="3.3.4",vd="http://www.w3.org/2000/svg",Ft=typeof document<"u"?document:null,ko=Ft&&Ft.createElement("template"),Ed={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ft.createElementNS(vd,t):Ft.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ft.createTextNode(t),createComment:t=>Ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ko.innerHTML=r?`<svg>${t}</svg>`:t;const a=ko.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wd(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Id(t,e,n){const r=t.style,s=he(n);if(n&&!s){if(e&&!he(e))for(const i in e)n[i]==null&&Js(r,i,"");for(const i in n)Js(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const No=/\s*!important$/;function Js(t,e,n){if(F(n))n.forEach(r=>Js(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Td(t,e);No.test(n)?t.setProperty(bn(r),n.replace(No,""),"important"):t[r]=n}}const xo=["Webkit","Moz","ms"],ys={};function Td(t,e){const n=ys[e];if(n)return n;let r=et(e);if(r!=="filter"&&r in t)return ys[e]=r;r=qr(r);for(let s=0;s<xo.length;s++){const i=xo[s]+r;if(i in t)return ys[e]=i}return e}const Do="http://www.w3.org/1999/xlink";function Rd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Do,e.slice(6,e.length)):t.setAttributeNS(Do,e,n);else{const i=Cu(e);n==null||i&&!qa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Sd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qa(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Qt(t,e,n,r){t.addEventListener(e,n,r)}function Cd(t,e,n,r){t.removeEventListener(e,n,r)}function Ad(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Pd(e);if(r){const l=i[e]=Nd(r,s);Qt(t,a,l,c)}else o&&(Cd(t,a,o,c),i[e]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function Pd(t){let e;if(Lo.test(t)){e={};let r;for(;r=t.match(Lo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bn(t.slice(2)),e]}let bs=0;const Od=Promise.resolve(),kd=()=>bs||(Od.then(()=>bs=0),bs=Date.now());function Nd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(xd(r,n.value),e,5,[r])};return n.value=t,n.attached=kd(),n}function xd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mo=/^on[a-z]/,Dd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?wd(t,r,s):e==="style"?Id(t,n,r):Wr(e)?hi(e)||Ad(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ld(t,e,r,s))?Sd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rd(t,e,r,s))};function Ld(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mo.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mo.test(e)&&he(n)?!1:e in t}const Uo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>mr(e,n):e};function Md(t){t.target.composing=!0}function Fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Uo(s);const i=r||s.props&&s.props.type==="number";Qt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ds(a)),t._assign(a)}),n&&Qt(t,"change",()=>{t.value=t.value.trim()}),e||(Qt(t,"compositionstart",Md),Qt(t,"compositionend",Fo),Qt(t,"change",Fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Uo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ds(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ud=["ctrl","shift","alt","meta"],Fd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ud.some(n=>t[`${n}Key`]&&!e.includes(n))},Bd=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Fd[e[s]];if(i&&i(n,e))return}return t(n,...r)},$d={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Sn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Sn(t,!0),r.enter(t)):r.leave(t,()=>{Sn(t,!1)}):Sn(t,e))},beforeUnmount(t,{value:e}){Sn(t,e)}};function Sn(t,e){t.style.display=e?t._vod:"none"}const Hd=ge({patchProp:Dd},Ed);let $o;function jd(){return $o||($o=ed(Hd))}const Vd=(...t)=>{const e=jd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wd(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Wd(t){return he(t)?document.querySelector(t):t}const zd="modulepreload",Kd=function(t){return"/Naruto-API-Directory/"+t},Ho={},qd=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Kd(i),i in Ho)return;Ho[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":zd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zt=typeof window<"u";function Jd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function vs(t,e){const n={};for(const r in e){const s=e[r];n[r]=ze(s)?s.map(t):t(s)}return n}const Ln=()=>{},ze=Array.isArray,Gd=/\/$/,Yd=t=>t.replace(Gd,"");function Es(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=eh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Xd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Qd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&pn(e.matched[r],n.matched[s])&&Vc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zd(t[n],e[n]))return!1;return!0}function Zd(t,e){return ze(t)?Vo(t,e):ze(e)?Vo(e,t):t===e}function Vo(t,e){return ze(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function eh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Wn;(function(t){t.pop="pop",t.push="push"})(Wn||(Wn={}));var Mn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mn||(Mn={}));function th(t){if(!t)if(Zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Yd(t)}const nh=/^[^#]+#/;function rh(t,e){return t.replace(nh,"#")+e}function sh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const rs=()=>({left:window.pageXOffset,top:window.pageYOffset});function ih(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wo(t,e){return(history.state?history.state.position-e:-1)+t}const Gs=new Map;function oh(t,e){Gs.set(t,e)}function ah(t){const e=Gs.get(t);return Gs.delete(t),e}let ch=()=>location.protocol+"//"+location.host;function Wc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),jo(c,"")}return jo(n,t)+r+s}function lh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=Wc(t,location),g=n.value,w=e.value;let N=0;if(p){if(n.value=_,e.value=p,o&&o===g){o=null;return}N=w?p.position-w.position:0}else r(_);s.forEach(k=>{k(n.value,g,{delta:N,type:Wn.pop,direction:N?N>0?Mn.forward:Mn.back:Mn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:rs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function zo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?rs():null}}function uh(t){const{history:e,location:n}=window,r={value:Wc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:ch()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=Q({},e.state,zo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,e.state,{forward:c,scroll:rs()});i(u.current,u,!0);const f=Q({},zo(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function fh(t){t=th(t);const e=uh(t),n=lh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:rh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function dh(t){return typeof t=="string"||t&&typeof t=="object"}function zc(t){return typeof t=="string"||typeof t=="symbol"}const gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kc=Symbol("");var Ko;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ko||(Ko={}));function mn(t,e){return Q(new Error,{type:t,[Kc]:!0},e)}function st(t,e){return t instanceof Error&&Kc in t&&(e==null||!!(t.type&e))}const qo="[^/]+?",hh={sensitive:!1,strict:!1,start:!0,end:!0},ph=/[.+*?^${}()[\]/\\]/g;function mh(t,e){const n=Q({},hh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(ph,"\\$&"),_+=40;else if(p.type===1){const{value:g,repeatable:w,optional:N,regexp:k}=p;i.push({name:g,repeatable:w,optional:N});const P=k||qo;if(P!==qo){_+=10;try{new RegExp(`(${P})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+R.message)}}let H=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(H=N&&l.length<2?`(?:/${H})`:"/"+H),N&&(H+="?"),s+=H,_+=20,N&&(_+=-8),w&&(_+=-20),P===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",g=i[p-1];f[g.name]=_&&g.repeatable?_.split("/"):_}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:g,repeatable:w,optional:N}=_,k=g in l?l[g]:"";if(ze(k)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=ze(k)?k.join("/"):k;if(!P)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=P}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function gh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function _h(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jo(r))return 1;if(Jo(s))return-1}return s.length-r.length}function Jo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yh={type:0,value:""},bh=/[a-zA-Z0-9_]/;function vh(t){if(!t)return[[]];if(t==="/")return[[yh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:bh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Eh(t,e,n){const r=mh(vh(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wh(t,e){const n=[],r=new Map;e=Xo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const _=!p,g=Ih(u);g.aliasOf=p&&p.record;const w=Xo(e,u),N=[g];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of H)N.push(Q({},g,{components:p?p.record.components:g.components,path:R,aliasOf:p?p.record:g}))}let k,P;for(const H of N){const{path:R}=H;if(f&&R[0]!=="/"){const B=f.record.path,G=B[B.length-1]==="/"?"":"/";H.path=f.record.path+(R&&G+R)}if(k=Eh(H,f,w),p?p.alias.push(k):(P=P||k,P!==k&&P.alias.push(k),_&&u.name&&!Yo(k)&&o(u.name)),g.children){const B=g.children;for(let G=0;G<B.length;G++)i(B[G],k,p&&p.children[G])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return P?()=>{o(P)}:Ln}function o(u){if(zc(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&_h(u,n[f])>=0&&(u.record.path!==n[f].record.path||!qc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Yo(u)&&r.set(u.record.name,u)}function l(u,f){let p,_={},g,w;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw mn(1,{location:u});w=p.record.name,_=Q(Go(f.params,p.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Go(u.params,p.keys.map(P=>P.name))),g=p.stringify(_)}else if("path"in u)g=u.path,p=n.find(P=>P.re.test(g)),p&&(_=p.parse(g),w=p.record.name);else{if(p=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!p)throw mn(1,{location:u,currentLocation:f});w=p.record.name,_=Q({},f.params,u.params),g=p.stringify(_)}const N=[];let k=p;for(;k;)N.unshift(k.record),k=k.parent;return{name:w,path:g,params:_,matched:N,meta:Rh(N)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Go(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ih(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Th(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Th(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Yo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rh(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Xo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qc(t,e){return e.children.some(n=>n===t||qc(t,n))}const Jc=/#/g,Sh=/&/g,Ch=/\//g,Ah=/=/g,Ph=/\?/g,Gc=/\+/g,Oh=/%5B/g,kh=/%5D/g,Yc=/%5E/g,Nh=/%60/g,Xc=/%7B/g,xh=/%7C/g,Qc=/%7D/g,Dh=/%20/g;function Mi(t){return encodeURI(""+t).replace(xh,"|").replace(Oh,"[").replace(kh,"]")}function Lh(t){return Mi(t).replace(Xc,"{").replace(Qc,"}").replace(Yc,"^")}function Ys(t){return Mi(t).replace(Gc,"%2B").replace(Dh,"+").replace(Jc,"%23").replace(Sh,"%26").replace(Nh,"`").replace(Xc,"{").replace(Qc,"}").replace(Yc,"^")}function Mh(t){return Ys(t).replace(Ah,"%3D")}function Uh(t){return Mi(t).replace(Jc,"%23").replace(Ph,"%3F")}function Fh(t){return t==null?"":Uh(t).replace(Ch,"%2F")}function Lr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Bh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Gc," "),o=i.indexOf("="),a=Lr(o<0?i:i.slice(0,o)),c=o<0?null:Lr(i.slice(o+1));if(a in e){let l=e[a];ze(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Qo(t){let e="";for(let n in t){const r=t[n];if(n=Mh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&Ys(i)):[r&&Ys(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $h(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Hh=Symbol(""),Zo=Symbol(""),ss=Symbol(""),Ui=Symbol(""),Xs=Symbol("");function Cn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(mn(4,{from:n,to:e})):f instanceof Error?a(f):dh(f)?a(mn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function ws(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(jh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(vt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Jd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&vt(p,n,r,i,o)()}))}}return s}function jh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ea(t){const e=Ve(ss),n=Ve(Ui),r=Ne(()=>e.resolve(me(t.to))),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(pn.bind(null,u));if(p>-1)return p;const _=ta(c[l-2]);return l>1&&ta(u)===_&&f[f.length-1].path!==_?f.findIndex(pn.bind(null,c[l-2])):p}),i=Ne(()=>s.value>-1&&Kh(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&Vc(n.params,r.value.params));function a(c={}){return zh(c)?e[me(t.replace)?"replace":"push"](me(t.to)).catch(Ln):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Vh=wc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ea,setup(t,{slots:e}){const n=Yr(ea(t)),{options:r}=Ve(ss),s=Ne(()=>({[na(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[na(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:jc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Wh=Vh;function zh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ta(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const na=(t,e,n)=>t??e??n,qh=wc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ve(Xs),s=Ne(()=>t.route||r.value),i=Ve(Zo,0),o=Ne(()=>{let l=me(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ne(()=>s.value.matched[o.value]);yr(Zo,Ne(()=>o.value+1)),yr(Hh,a),yr(Xs,s);const c=We();return gr(()=>[c.value,a.value,t.name],([l,u,f],[p,_,g])=>{u&&(u.instances[f]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!pn(u,_)||!p)&&(u.enterCallbacks[f]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return ra(n.default,{Component:p,route:l});const _=f.props[u],g=_?_===!0?l.params:typeof _=="function"?_(l):_:null,N=jc(p,Q({},g,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ra(n.default,{Component:N,route:l})||N}}});function ra(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jh=qh;function Gh(t){const e=wh(t.routes,t),n=t.parseQuery||Bh,r=t.stringifyQuery||Qo,s=t.history,i=Cn(),o=Cn(),a=Cn(),c=rf(gt);let l=gt;Zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vs.bind(null,v=>""+v),f=vs.bind(null,Fh),p=vs.bind(null,Lr);function _(v,x){let A,L;return zc(v)?(A=e.getRecordMatcher(v),L=x):L=v,e.addRoute(L,A)}function g(v){const x=e.getRecordMatcher(v);x&&e.removeRoute(x)}function w(){return e.getRoutes().map(v=>v.record)}function N(v){return!!e.getRecordMatcher(v)}function k(v,x){if(x=Q({},x||c.value),typeof v=="string"){const m=Es(n,v,x.path),y=e.resolve({path:m.path},x),E=s.createHref(m.fullPath);return Q(m,y,{params:p(y.params),hash:Lr(m.hash),redirectedFrom:void 0,href:E})}let A;if("path"in v)A=Q({},v,{path:Es(n,v.path,x.path).path});else{const m=Q({},v.params);for(const y in m)m[y]==null&&delete m[y];A=Q({},v,{params:f(m)}),x.params=f(x.params)}const L=e.resolve(A,x),X=v.hash||"";L.params=u(p(L.params));const d=Xd(r,Q({},v,{hash:Lh(X),path:L.path})),h=s.createHref(d);return Q({fullPath:d,hash:X,query:r===Qo?$h(v.query):v.query||{}},L,{redirectedFrom:void 0,href:h})}function P(v){return typeof v=="string"?Es(n,v,c.value.path):Q({},v)}function H(v,x){if(l!==v)return mn(8,{from:x,to:v})}function R(v){return ie(v)}function B(v){return R(Q(P(v),{replace:!0}))}function G(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let L=typeof A=="function"?A(v):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=P(L):{path:L},L.params={}),Q({query:v.query,hash:v.hash,params:"path"in L?{}:v.params},L)}}function ie(v,x){const A=l=k(v),L=c.value,X=v.state,d=v.force,h=v.replace===!0,m=G(A);if(m)return ie(Q(P(m),{state:typeof m=="object"?Q({},X,m.state):X,force:d,replace:h}),x||A);const y=A;y.redirectedFrom=x;let E;return!d&&Qd(r,L,A)&&(E=mn(16,{to:y,from:L}),qe(L,L,!0,!1)),(E?Promise.resolve(E):ue(y,L)).catch(I=>st(I)?st(I,2)?I:pt(I):Y(I,y,L)).then(I=>{if(I){if(st(I,2))return ie(Q({replace:h},P(I.to),{state:typeof I.to=="object"?Q({},X,I.to.state):X,force:d}),x||y)}else I=Oe(y,L,!0,h,X);return ye(y,L,I),I})}function ne(v,x){const A=H(v,x);return A?Promise.reject(A):Promise.resolve()}function ae(v){const x=Gt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function ue(v,x){let A;const[L,X,d]=Yh(v,x);A=ws(L.reverse(),"beforeRouteLeave",v,x);for(const m of L)m.leaveGuards.forEach(y=>{A.push(vt(y,v,x))});const h=ne.bind(null,v,x);return A.push(h),ve(A).then(()=>{A=[];for(const m of i.list())A.push(vt(m,v,x));return A.push(h),ve(A)}).then(()=>{A=ws(X,"beforeRouteUpdate",v,x);for(const m of X)m.updateGuards.forEach(y=>{A.push(vt(y,v,x))});return A.push(h),ve(A)}).then(()=>{A=[];for(const m of d)if(m.beforeEnter)if(ze(m.beforeEnter))for(const y of m.beforeEnter)A.push(vt(y,v,x));else A.push(vt(m.beforeEnter,v,x));return A.push(h),ve(A)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),A=ws(d,"beforeRouteEnter",v,x),A.push(h),ve(A))).then(()=>{A=[];for(const m of o.list())A.push(vt(m,v,x));return A.push(h),ve(A)}).catch(m=>st(m,8)?m:Promise.reject(m))}function ye(v,x,A){a.list().forEach(L=>ae(()=>L(v,x,A)))}function Oe(v,x,A,L,X){const d=H(v,x);if(d)return d;const h=x===gt,m=Zt?history.state:{};A&&(L||h?s.replace(v.fullPath,Q({scroll:h&&m&&m.scroll},X)):s.push(v.fullPath,X)),c.value=v,qe(v,x,A,h),pt()}let be;function Me(){be||(be=s.listen((v,x,A)=>{if(!or.listening)return;const L=k(v),X=G(L);if(X){ie(Q(X,{replace:!0}),L).catch(Ln);return}l=L;const d=c.value;Zt&&oh(Wo(d.fullPath,A.delta),rs()),ue(L,d).catch(h=>st(h,12)?h:st(h,2)?(ie(h.to,L).then(m=>{st(m,20)&&!A.delta&&A.type===Wn.pop&&s.go(-1,!1)}).catch(Ln),Promise.reject()):(A.delta&&s.go(-A.delta,!1),Y(h,L,d))).then(h=>{h=h||Oe(L,d,!1),h&&(A.delta&&!st(h,8)?s.go(-A.delta,!1):A.type===Wn.pop&&st(h,20)&&s.go(-1,!1)),ye(L,d,h)}).catch(Ln)}))}let nt=Cn(),le=Cn(),q;function Y(v,x,A){pt(v);const L=le.list();return L.length?L.forEach(X=>X(v,x,A)):console.error(v),Promise.reject(v)}function rt(){return q&&c.value!==gt?Promise.resolve():new Promise((v,x)=>{nt.add([v,x])})}function pt(v){return q||(q=!v,Me(),nt.list().forEach(([x,A])=>v?A(v):x()),nt.reset()),v}function qe(v,x,A,L){const{scrollBehavior:X}=t;if(!Zt||!X)return Promise.resolve();const d=!A&&ah(Wo(v.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return pc().then(()=>X(v,x,d)).then(h=>h&&ih(h)).catch(h=>Y(h,v,x))}const Se=v=>s.go(v);let Jt;const Gt=new Set,or={currentRoute:c,listening:!0,addRoute:_,removeRoute:g,hasRoute:N,getRoutes:w,resolve:k,options:t,push:R,replace:B,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:rt,install(v){const x=this;v.component("RouterLink",Wh),v.component("RouterView",Jh),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>me(c)}),Zt&&!Jt&&c.value===gt&&(Jt=!0,R(s.location).catch(X=>{}));const A={};for(const X in gt)Object.defineProperty(A,X,{get:()=>c.value[X],enumerable:!0});v.provide(ss,x),v.provide(Ui,ic(A)),v.provide(Xs,c);const L=v.unmount;Gt.add(v),v.unmount=function(){Gt.delete(v),Gt.size<1&&(l=gt,be&&be(),be=null,c.value=gt,Jt=!1,q=!1),L()}}};function ve(v){return v.reduce((x,A)=>x.then(()=>ae(A)),Promise.resolve())}return or}function Yh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>pn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>pn(l,c))||s.push(c))}return[n,r,s]}function Xh(){return Ve(ss)}function Qh(){return Ve(Ui)}/**
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
 */const Zc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},el={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new ep;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ep extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tp=function(t){const e=Zc(t);return el.encodeByteArray(e,!0)},tl=function(t){return tp(t).replace(/\./g,"")},nl=function(t){try{return el.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function np(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rp=()=>np().__FIREBASE_DEFAULTS__,sp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ip=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nl(t[1]);return e&&JSON.parse(e)},Fi=()=>{try{return rp()||sp()||ip()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},op=t=>{var e,n;return(n=(e=Fi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rl=()=>{var t;return(t=Fi())===null||t===void 0?void 0:t.config},sl=t=>{var e;return(e=Fi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ap{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function lp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function up(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fp(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dp(){try{return typeof indexedDB=="object"}catch{return!1}}function hp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pp="FirebaseError";class kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pp,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kt(s,a,r)}}function mp(t,e){return t.replace(gp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gp=/\{\$([^}]+)}/g;function _p(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sa(i)&&sa(o)){if(!Mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sa(t){return t!==null&&typeof t=="object"}/**
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
 */function Zn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Nn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yp(t,e){const n=new bp(t,e);return n.subscribe.bind(n)}class bp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Is(){}/**
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class Ep{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ap;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ip(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wp(t){return t===Mt?void 0:t}function Ip(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ep(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Rp={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Sp=ee.INFO,Cp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ap=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Cp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class il{constructor(e){this.name=e,this._logLevel=Sp,this._logHandler=Ap,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Pp=(t,e)=>e.some(n=>t instanceof n);let ia,oa;function Op(){return ia||(ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kp(){return oa||(oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ol=new WeakMap,Qs=new WeakMap,al=new WeakMap,Ts=new WeakMap,Bi=new WeakMap;function Np(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ol.set(n,t)}).catch(()=>{}),Bi.set(e,t),e}function xp(t){if(Qs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Qs.set(t,e)}let Zs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||al.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dp(t){Zs=t(Zs)}function Lp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rs(this),e,...n);return al.set(r,e.sort?e.sort():[e]),At(r)}:kp().includes(t)?function(...e){return t.apply(Rs(this),e),At(ol.get(this))}:function(...e){return At(t.apply(Rs(this),e))}}function Mp(t){return typeof t=="function"?Lp(t):(t instanceof IDBTransaction&&xp(t),Pp(t,Op())?new Proxy(t,Zs):t)}function At(t){if(t instanceof IDBRequest)return Np(t);if(Ts.has(t))return Ts.get(t);const e=Mp(t);return e!==t&&(Ts.set(t,e),Bi.set(e,t)),e}const Rs=t=>Bi.get(t);function Up(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=At(o);return r&&o.addEventListener("upgradeneeded",c=>{r(At(o.result),c.oldVersion,c.newVersion,At(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Fp=["get","getKey","getAll","getAllKeys","count"],Bp=["put","add","delete","clear"],Ss=new Map;function aa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ss.get(e))return Ss.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Bp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ss.set(e,i),i}Dp(t=>({...t,get:(e,n,r)=>aa(e,n)||t.get(e,n,r),has:(e,n)=>!!aa(e,n)||t.has(e,n)}));/**
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
 */class $p{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ei="@firebase/app",ca="0.9.24";/**
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
 */const zt=new il("@firebase/app"),jp="@firebase/app-compat",Vp="@firebase/analytics-compat",Wp="@firebase/analytics",zp="@firebase/app-check-compat",Kp="@firebase/app-check",qp="@firebase/auth",Jp="@firebase/auth-compat",Gp="@firebase/database",Yp="@firebase/database-compat",Xp="@firebase/functions",Qp="@firebase/functions-compat",Zp="@firebase/installations",em="@firebase/installations-compat",tm="@firebase/messaging",nm="@firebase/messaging-compat",rm="@firebase/performance",sm="@firebase/performance-compat",im="@firebase/remote-config",om="@firebase/remote-config-compat",am="@firebase/storage",cm="@firebase/storage-compat",lm="@firebase/firestore",um="@firebase/firestore-compat",fm="firebase",dm="10.7.0";/**
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
 */const ti="[DEFAULT]",hm={[ei]:"fire-core",[jp]:"fire-core-compat",[Wp]:"fire-analytics",[Vp]:"fire-analytics-compat",[Kp]:"fire-app-check",[zp]:"fire-app-check-compat",[qp]:"fire-auth",[Jp]:"fire-auth-compat",[Gp]:"fire-rtdb",[Yp]:"fire-rtdb-compat",[Xp]:"fire-fn",[Qp]:"fire-fn-compat",[Zp]:"fire-iid",[em]:"fire-iid-compat",[tm]:"fire-fcm",[nm]:"fire-fcm-compat",[rm]:"fire-perf",[sm]:"fire-perf-compat",[im]:"fire-rc",[om]:"fire-rc-compat",[am]:"fire-gcs",[cm]:"fire-gcs-compat",[lm]:"fire-fst",[um]:"fire-fst-compat","fire-js":"fire-js",[fm]:"fire-js-all"};/**
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
 */const Ur=new Map,ni=new Map;function pm(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(ni.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;ni.set(e,t);for(const n of Ur.values())pm(n,t);return!0}function cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const mm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new Qn("app","Firebase",mm);/**
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
 */class gm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const er=dm;function ll(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ti,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=rl()),!n)throw Pt.create("no-options");const i=Ur.get(s);if(i){if(Mr(n,i.options)&&Mr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new Tp(s);for(const c of ni.values())o.addComponent(c);const a=new gm(n,r,o);return Ur.set(s,a),a}function _m(t=ti){const e=Ur.get(t);if(!e&&t===ti&&rl())return ll();if(!e)throw Pt.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=hm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}zn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ym="firebase-heartbeat-database",bm=1,Kn="firebase-heartbeat-store";let Cs=null;function ul(){return Cs||(Cs=Up(ym,bm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kn)}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),Cs}async function vm(t){try{return await(await ul()).transaction(Kn).objectStore(Kn).get(fl(t))}catch(e){if(e instanceof kt)zt.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function la(t,e){try{const r=(await ul()).transaction(Kn,"readwrite");await r.objectStore(Kn).put(e,fl(t)),await r.done}catch(n){if(n instanceof kt)zt.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}}function fl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Em=1024,wm=30*24*60*60*1e3;class Im{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ua();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ua(),{heartbeatsToSend:r,unsentEntries:s}=Tm(this._heartbeatsCache.heartbeats),i=tl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ua(){return new Date().toISOString().substring(0,10)}function Tm(t,e=Em){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dp()?hp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fa(t){return tl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Sm(t){zn(new gn("platform-logger",e=>new $p(e),"PRIVATE")),zn(new gn("heartbeat",e=>new Im(e),"PRIVATE")),an(ei,ca,t),an(ei,ca,"esm2017"),an("fire-js","")}Sm("");var Cm="firebase",Am="10.7.0";/**
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
 */an(Cm,Am,"app");const Pm={apiKey:"AIzaSyAzqhCBZknqb47NwiSjZTh-rE5sNI-4Zr0",authDomain:"naruto-api-directory.firebaseapp.com",projectId:"naruto-api-directory",storageBucket:"naruto-api-directory.appspot.com",messagingSenderId:"405726667030",appId:"1:405726667030:web:47554c5fc3b2bc58dcb037"},Om=ll(Pm);function $i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function dl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const km=dl,hl=new Qn("auth","Firebase",dl());/**
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
 */const Fr=new il("@firebase/auth");function Nm(t,...e){Fr.logLevel<=ee.WARN&&Fr.warn(`Auth (${er}): ${t}`,...e)}function Er(t,...e){Fr.logLevel<=ee.ERROR&&Fr.error(`Auth (${er}): ${t}`,...e)}/**
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
 */function Ke(t,...e){throw Hi(t,...e)}function Qe(t,...e){return Hi(t,...e)}function xm(t,e,n){const r=Object.assign(Object.assign({},km()),{[e]:n});return new Qn("auth","Firebase",r).create(e,{appName:t.name})}function Hi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hl.create(t,...e)}function $(t,e,...n){if(!t)throw Hi(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Er(e),new Error(e)}function ft(t,e){t||ot(e)}/**
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
 */function ri(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dm(){return da()==="http:"||da()==="https:"}function da(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Lm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dm()||lp()||"connection"in navigator)?navigator.onLine:!0}function Mm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class tr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=cp()||up()}get(){return Lm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ji(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fm=new tr(3e4,6e4);function qt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xt(t,e,n,r,s={}){return ml(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Zn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),pl.fetch()(gl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ml(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Um),e);try{const s=new $m(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xm(t,u,l);Ke(t,u)}}catch(s){if(s instanceof kt)throw s;Ke(t,"network-request-failed",{message:String(s)})}}async function is(t,e,n,r,s={}){const i=await xt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ji(t.config,s):`${t.config.apiScheme}://${s}`}function Bm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $m{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),Fm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qe(t,e,r);return s.customData._tokenResponse=n,s}function ha(t){return t!==void 0&&t.enterprise!==void 0}class Hm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function jm(t,e){return xt(t,"GET","/v2/recaptchaConfig",qt(t,e))}/**
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
 */async function Vm(t,e){return xt(t,"POST","/v1/accounts:delete",e)}async function Wm(t,e){return xt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Un(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zm(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),s=Vi(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Un(As(s.auth_time)),issuedAtTime:Un(As(s.iat)),expirationTime:Un(As(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function As(t){return Number(t)*1e3}function Vi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Er("JWT malformed, contained fewer than 3 sections"),null;try{const s=nl(n);return s?JSON.parse(s):(Er("Failed to decode base64 JWT payload"),null)}catch(s){return Er("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Km(t){const e=Vi(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&qm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Jm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Br(t){var e;const n=t.auth,r=await t.getIdToken(),s=await qn(t,Wm(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xm(i.providerUserInfo):[],a=Ym(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Gm(t){const e=Nt(t);await Br(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ym(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xm(t){return t.map(e=>{var{providerId:n}=e,r=$i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qm(t,e){const n=await ml(t,{},async()=>{const r=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zm(t,e){return xt(t,"POST","/v2/accounts:revokeToken",qt(t,e))}/**
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
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function _t(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zm(this,e)}reload(){return Gm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Br(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qn(this,Vm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:R,isAnonymous:B,providerData:G,stsTokenManager:ie}=n;$(H&&ie,e,"internal-error");const ne=Jn.fromJSON(this.name,ie);$(typeof H=="string",e,"internal-error"),_t(f,e.name),_t(p,e.name),$(typeof R=="boolean",e,"internal-error"),$(typeof B=="boolean",e,"internal-error"),_t(_,e.name),_t(g,e.name),_t(w,e.name),_t(N,e.name),_t(k,e.name),_t(P,e.name);const ae=new Wt({uid:H,auth:e,email:p,emailVerified:R,displayName:f,isAnonymous:B,photoURL:g,phoneNumber:_,tenantId:w,stsTokenManager:ne,createdAt:k,lastLoginAt:P});return G&&Array.isArray(G)&&(ae.providerData=G.map(ue=>Object.assign({},ue))),N&&(ae._redirectEventId=N),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jn;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Br(i),i}}/**
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
 */const pa=new Map;function at(t){ft(t instanceof Function,"Expected a class definition");let e=pa.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pa.set(t,e),e)}/**
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
 */class yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yl.type="NONE";const ma=yl;/**
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
 */function wr(t,e,n){return`firebase:${t}:${e}:${n}`}class cn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wr(this.userKey,s.apiKey,i),this.fullPersistenceKey=wr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cn(at(ma),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||at(ma);const o=wr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Wt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new cn(i,e,r))}}/**
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
 */function ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(El(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Il(e))return"Blackberry";if(Tl(e))return"Webos";if(Wi(e))return"Safari";if((e.includes("chrome/")||vl(e))&&!e.includes("edge/"))return"Chrome";if(wl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bl(t=Ie()){return/firefox\//i.test(t)}function Wi(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vl(t=Ie()){return/crios\//i.test(t)}function El(t=Ie()){return/iemobile/i.test(t)}function wl(t=Ie()){return/android/i.test(t)}function Il(t=Ie()){return/blackberry/i.test(t)}function Tl(t=Ie()){return/webos/i.test(t)}function os(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eg(t=Ie()){var e;return os(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tg(){return fp()&&document.documentMode===10}function Rl(t=Ie()){return os(t)||wl(t)||Tl(t)||Il(t)||/windows phone/i.test(t)||El(t)}function ng(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sl(t,e=[]){let n;switch(t){case"Browser":n=ga(Ie());break;case"Worker":n=`${ga(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${er}/${r}`}/**
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
 */class rg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sg(t,e={}){return xt(t,"GET","/v2/passwordPolicy",qt(t,e))}/**
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
 */const ig=6;class og{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ig,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ag{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _a(this),this.idTokenSubscription=new _a(this),this.beforeStateQueue=new rg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Br(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sg(this),n=new og(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Nm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wn(t){return Nt(t)}class _a{constructor(e){this.auth=e,this.observer=null,this.addObserver=yp(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function cg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Cl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cg().appendChild(r)})}function lg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ug="https://www.google.com/recaptcha/enterprise.js?render=",fg="recaptcha-enterprise",dg="NO_RECAPTCHA";class hg{constructor(e){this.type=fg,this.auth=wn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{jm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Hm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ha(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(dg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ha(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Cl(ug+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ya(t,e,n,r=!1){const s=new hg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ba(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ya(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ya(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function pg(t,e){const n=cl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mr(i,e??{}))return s;Ke(s,"already-initialized")}return n.initialize({options:e})}function mg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gg(t,e,n){const r=wn(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Al(e),{host:o,port:a}=_g(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yg()}function Al(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _g(t){const e=Al(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:va(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:va(o)}}}function va(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function bg(t,e){return xt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vg(t,e){return is(t,"POST","/v1/accounts:signInWithPassword",qt(t,e))}/**
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
 */async function Eg(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",qt(t,e))}async function wg(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",qt(t,e))}/**
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
 */class Gn extends zi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,n,"signInWithPassword",vg);case"emailLink":return Eg(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,r,"signUpPassword",bg);case"emailLink":return wg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ln(t,e){return is(t,"POST","/v1/accounts:signInWithIdp",qt(t,e))}/**
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
 */const Ig="http://localhost";class Kt extends zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$i(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}buildRequest(){const e={requestUri:Ig,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zn(n)}return e}}/**
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
 */function Tg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rg(t){const e=kn(Nn(t)).link,n=e?kn(Nn(e)).deep_link_id:null,r=kn(Nn(t)).deep_link_id;return(r?kn(Nn(r)).link:null)||r||n||e||t}class Ki{constructor(e){var n,r,s,i,o,a;const c=kn(Nn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Tg((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Rg(e);try{return new Ki(n)}catch{return null}}}/**
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
 */class In{constructor(){this.providerId=In.PROVIDER_ID}static credential(e,n){return Gn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ki.parseLink(n);return $(r,"argument-error"),Gn._fromEmailAndCode(e,r.code,r.tenantId)}}In.PROVIDER_ID="password";In.EMAIL_PASSWORD_SIGN_IN_METHOD="password";In.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nr extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends nr{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class It extends nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class Tt extends nr{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class Rt extends nr{constructor(){super("twitter.com")}static credential(e,n){return Kt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
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
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=Ea(r);return new _n({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ea(r);return new _n({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ea(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $r extends kt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$r.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $r(e,n,r,s)}}function Ol(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$r._fromErrorAndOperation(t,i,e,r):i})}async function Sg(t,e,n=!1){const r=await qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",r)}/**
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
 */async function Cg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await qn(t,Ol(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Vi(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),_n._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
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
 */async function kl(t,e,n=!1){const r="signIn",s=await Ol(t,r,e),i=await _n._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ag(t,e){return kl(wn(t),e)}/**
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
 */async function Pg(t){const e=wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Og(t,e,n){return Ag(Nt(t),In.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pg(t),r})}function kg(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function Ng(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}function xg(t){return Nt(t).signOut()}const Hr="__sak";/**
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
 */class Nl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dg(){const t=Ie();return Wi(t)||os(t)}const Lg=1e3,Mg=10;class xl extends Nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dg()&&ng(),this.fallbackToPolling=Rl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Lg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xl.type="LOCAL";const Ug=xl;/**
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
 */class Dl extends Nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dl.type="SESSION";const Ll=Dl;/**
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
 */function Fg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class as{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new as(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Fg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
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
 */function qi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Bg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=qi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ze(){return window}function $g(t){Ze().location.href=t}/**
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
 */function Ml(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Hg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Vg(){return Ml()?self:null}/**
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
 */const Ul="firebaseLocalStorageDb",Wg=1,jr="firebaseLocalStorage",Fl="fbase_key";class rr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cs(t,e){return t.transaction([jr],e?"readwrite":"readonly").objectStore(jr)}function zg(){const t=indexedDB.deleteDatabase(Ul);return new rr(t).toPromise()}function si(){const t=indexedDB.open(Ul,Wg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jr,{keyPath:Fl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jr)?e(r):(r.close(),await zg(),e(await si()))})})}async function wa(t,e,n){const r=cs(t,!0).put({[Fl]:e,value:n});return new rr(r).toPromise()}async function Kg(t,e){const n=cs(t,!1).get(e),r=await new rr(n).toPromise();return r===void 0?null:r.value}function Ia(t,e){const n=cs(t,!0).delete(e);return new rr(n).toPromise()}const qg=800,Jg=3;class Bl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await si(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ml()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(Vg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hg(),!this.activeServiceWorker)return;this.sender=new Bg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await si();return await wa(e,Hr,"1"),await Ia(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Kg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ia(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cs(s,!1).getAll();return new rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bl.type="LOCAL";const Gg=Bl;new tr(3e4,6e4);/**
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
 */function Yg(t,e){return e?at(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ji extends zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xg(t){return kl(t.auth,new Ji(t),t.bypassAuthState)}function Qg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Cg(n,new Ji(t),t.bypassAuthState)}async function Zg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Sg(n,new Ji(t),t.bypassAuthState)}/**
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
 */class $l{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xg;case"linkViaPopup":case"linkViaRedirect":return Zg;case"reauthViaPopup":case"reauthViaRedirect":return Qg;default:Ke(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const e_=new tr(2e3,1e4);class en extends $l{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e_.get())};e()}}en.currentPopupAction=null;/**
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
 */const t_="pendingRedirect",Ir=new Map;class n_ extends $l{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ir.get(this.auth._key());if(!e){try{const r=await r_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ir.set(this.auth._key(),e)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r_(t,e){const n=o_(e),r=i_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function s_(t,e){Ir.set(t._key(),e)}function i_(t){return at(t._redirectPersistence)}function o_(t){return wr(t_,t.config.apiKey,t.name)}async function a_(t,e,n=!1){const r=wn(t),s=Yg(r,e),o=await new n_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const c_=10*60*1e3;class l_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ta(e))}saveEventToCache(e){this.cachedEventUids.add(Ta(e)),this.lastProcessedEventTime=Date.now()}}function Ta(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function u_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hl(t);default:return!1}}/**
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
 */async function f_(t,e={}){return xt(t,"GET","/v1/projects",e)}/**
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
 */const d_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h_=/^https?/;async function p_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await f_(t);for(const n of e)try{if(m_(n))return}catch{}Ke(t,"unauthorized-domain")}function m_(t){const e=ri(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!h_.test(n))return!1;if(d_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const g_=new tr(3e4,6e4);function Ra(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function __(t){return new Promise((e,n)=>{var r,s,i;function o(){Ra(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ra(),n(Qe(t,"network-request-failed"))},timeout:g_.get()})}if(!((s=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=lg("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},Cl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Tr=null,e})}let Tr=null;function y_(t){return Tr=Tr||__(t),Tr}/**
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
 */const b_=new tr(5e3,15e3),v_="__/auth/iframe",E_="emulator/auth/iframe",w_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T_(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ji(e,E_):`https://${t.config.authDomain}/${v_}`,r={apiKey:e.apiKey,appName:t.name,v:er},s=I_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zn(r).slice(1)}`}async function R_(t){const e=await y_(t),n=Ze().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:T_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},b_.get());function c(){Ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const S_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C_=500,A_=600,P_="_blank",O_="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k_(t,e,n,r=C_,s=A_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},S_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=vl(l)?P_:n),bl(l)&&(e=e||O_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,g])=>`${p}${_}=${g},`,"");if(eg(l)&&a!=="_self")return N_(e||"",a),new Sa(null);const f=window.open(e||"",a,u);$(f,t,"popup-blocked");try{f.focus()}catch{}return new Sa(f)}function N_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const x_="__/auth/handler",D_="emulator/auth/handler",L_=encodeURIComponent("fac");async function Ca(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:er,eventId:s};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_p(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof nr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${L_}=${encodeURIComponent(c)}`:"";return`${M_(t)}?${Zn(a).slice(1)}${l}`}function M_({config:t}){return t.emulator?ji(t,D_):`https://${t.authDomain}/${x_}`}/**
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
 */const Ps="webStorageSupport";class U_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ll,this._completeRedirectFn=a_,this._overrideRedirectResult=s_}async _openPopup(e,n,r,s){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ca(e,n,r,ri(),s);return k_(e,o,qi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ca(e,n,r,ri(),s);return $g(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await R_(e),r=new l_(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ps,{type:Ps},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ps];o!==void 0&&n(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rl()||Wi()||os()}}const F_=U_;var Aa="@firebase/auth",Pa="1.5.0";/**
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
 */class B_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function H_(t){zn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sl(t)},l=new ag(r,s,i,c);return mg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new gn("auth-internal",e=>{const n=wn(e.getProvider("auth").getImmediate());return(r=>new B_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Aa,Pa,$_(t)),an(Aa,Pa,"esm2017")}/**
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
 */const j_=5*60,V_=sl("authIdTokenMaxAge")||j_;let Oa=null;const W_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>V_)return;const s=n==null?void 0:n.token;Oa!==s&&(Oa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function z_(t=_m()){const e=cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pg(t,{popupRedirectResolver:F_,persistence:[Gg,Ug,Ll]}),r=sl("authTokenSyncURL");if(r){const i=W_(r);Ng(n,i,()=>i(n.currentUser)),kg(n,o=>i(o))}const s=op("auth");return s&&gg(n,`http://${s}`),n}H_("Browser");function K_(t){const e=We(t.currentUser),n=Ne(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const ii=z_(Om),{isAuthenticated:ka,user:q_}=K_(ii),Gi=()=>({isAuthenticated:ka,user:q_,login:async(n,r)=>(await Og(ii,n,r),ka.value),logout:async()=>{await xg(ii),ro.push({name:"Login"})}});const ht=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},J_={},jl=t=>(Ci("data-v-1ef9a5bd"),t=t(),Ai(),t),G_={class:"wrapper"},Y_=jl(()=>te("input",{type:"text",placeholder:"Search Character",class:"search"},null,-1)),X_=jl(()=>te("span",{class:"icon"},[te("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[te("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),Q_=[Y_,X_];function Z_(t,e){return de(),Re("div",G_,Q_)}const ey=ht(J_,[["render",Z_],["__scopeId","data-v-1ef9a5bd"]]);function Vl(t,e){return function(){return t.apply(e,arguments)}}const{toString:ty}=Object.prototype,{getPrototypeOf:Yi}=Object,ls=(t=>e=>{const n=ty.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),tt=t=>(t=t.toLowerCase(),e=>ls(e)===t),us=t=>e=>typeof e===t,{isArray:Tn}=Array,Yn=us("undefined");function ny(t){return t!==null&&!Yn(t)&&t.constructor!==null&&!Yn(t.constructor)&&Le(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Wl=tt("ArrayBuffer");function ry(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Wl(t.buffer),e}const sy=us("string"),Le=us("function"),zl=us("number"),fs=t=>t!==null&&typeof t=="object",iy=t=>t===!0||t===!1,Rr=t=>{if(ls(t)!=="object")return!1;const e=Yi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},oy=tt("Date"),ay=tt("File"),cy=tt("Blob"),ly=tt("FileList"),uy=t=>fs(t)&&Le(t.pipe),fy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Le(t.append)&&((e=ls(t))==="formdata"||e==="object"&&Le(t.toString)&&t.toString()==="[object FormData]"))},dy=tt("URLSearchParams"),hy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function sr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Tn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Kl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const ql=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Jl=t=>!Yn(t)&&t!==ql;function oi(){const{caseless:t}=Jl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Kl(e,s)||s;Rr(e[i])&&Rr(r)?e[i]=oi(e[i],r):Rr(r)?e[i]=oi({},r):Tn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&sr(arguments[r],n);return e}const py=(t,e,n,{allOwnKeys:r}={})=>(sr(e,(s,i)=>{n&&Le(s)?t[i]=Vl(s,n):t[i]=s},{allOwnKeys:r}),t),my=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),gy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},_y=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Yi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},yy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},by=t=>{if(!t)return null;if(Tn(t))return t;let e=t.length;if(!zl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},vy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Yi(Uint8Array)),Ey=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},wy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Iy=tt("HTMLFormElement"),Ty=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Na=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ry=tt("RegExp"),Gl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};sr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Sy=t=>{Gl(t,(e,n)=>{if(Le(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Le(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Cy=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Tn(t)?r(t):r(String(t).split(e)),n},Ay=()=>{},Py=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Os="abcdefghijklmnopqrstuvwxyz",xa="0123456789",Yl={DIGIT:xa,ALPHA:Os,ALPHA_DIGIT:Os+Os.toUpperCase()+xa},Oy=(t=16,e=Yl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function ky(t){return!!(t&&Le(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ny=t=>{const e=new Array(10),n=(r,s)=>{if(fs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Tn(r)?[]:{};return sr(r,(o,a)=>{const c=n(o,s+1);!Yn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},xy=tt("AsyncFunction"),Dy=t=>t&&(fs(t)||Le(t))&&Le(t.then)&&Le(t.catch),b={isArray:Tn,isArrayBuffer:Wl,isBuffer:ny,isFormData:fy,isArrayBufferView:ry,isString:sy,isNumber:zl,isBoolean:iy,isObject:fs,isPlainObject:Rr,isUndefined:Yn,isDate:oy,isFile:ay,isBlob:cy,isRegExp:Ry,isFunction:Le,isStream:uy,isURLSearchParams:dy,isTypedArray:vy,isFileList:ly,forEach:sr,merge:oi,extend:py,trim:hy,stripBOM:my,inherits:gy,toFlatObject:_y,kindOf:ls,kindOfTest:tt,endsWith:yy,toArray:by,forEachEntry:Ey,matchAll:wy,isHTMLForm:Iy,hasOwnProperty:Na,hasOwnProp:Na,reduceDescriptors:Gl,freezeMethods:Sy,toObjectSet:Cy,toCamelCase:Ty,noop:Ay,toFiniteNumber:Py,findKey:Kl,global:ql,isContextDefined:Jl,ALPHABET:Yl,generateString:Oy,isSpecCompliantForm:ky,toJSONObject:Ny,isAsyncFn:xy,isThenable:Dy};function z(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Xl=z.prototype,Ql={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ql[t]={value:t}});Object.defineProperties(z,Ql);Object.defineProperty(Xl,"isAxiosError",{value:!0});z.from=(t,e,n,r,s,i)=>{const o=Object.create(Xl);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Ly=null;function ai(t){return b.isPlainObject(t)||b.isArray(t)}function Zl(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function Da(t,e,n){return t?t.concat(e).map(function(s,i){return s=Zl(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function My(t){return b.isArray(t)&&!t.some(ai)}const Uy=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function ds(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,N){return!b.isUndefined(N[w])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(b.isDate(g))return g.toISOString();if(!c&&b.isBlob(g))throw new z("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(g)||b.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,w,N){let k=g;if(g&&!N&&typeof g=="object"){if(b.endsWith(w,"{}"))w=r?w:w.slice(0,-2),g=JSON.stringify(g);else if(b.isArray(g)&&My(g)||(b.isFileList(g)||b.endsWith(w,"[]"))&&(k=b.toArray(g)))return w=Zl(w),k.forEach(function(H,R){!(b.isUndefined(H)||H===null)&&e.append(o===!0?Da([w],R,i):o===null?w:w+"[]",l(H))}),!1}return ai(g)?!0:(e.append(Da(N,w,i),l(g)),!1)}const f=[],p=Object.assign(Uy,{defaultVisitor:u,convertValue:l,isVisitable:ai});function _(g,w){if(!b.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(g),b.forEach(g,function(k,P){(!(b.isUndefined(k)||k===null)&&s.call(e,k,b.isString(P)?P.trim():P,w,p))===!0&&_(k,w?w.concat(P):[P])}),f.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return _(t),e}function La(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Xi(t,e){this._pairs=[],t&&ds(t,this,e)}const eu=Xi.prototype;eu.append=function(e,n){this._pairs.push([e,n])};eu.toString=function(e){const n=e?function(r){return e.call(this,r,La)}:La;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Fy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tu(t,e,n){if(!e)return t;const r=n&&n.encode||Fy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new Xi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class By{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ma=By,nu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$y=typeof URLSearchParams<"u"?URLSearchParams:Xi,Hy=typeof FormData<"u"?FormData:null,jy=typeof Blob<"u"?Blob:null,Vy=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Wy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Xe={isBrowser:!0,classes:{URLSearchParams:$y,FormData:Hy,Blob:jy},isStandardBrowserEnv:Vy,isStandardBrowserWebWorkerEnv:Wy,protocols:["http","https","file","blob","url","data"]};function zy(t,e){return ds(t,new Xe.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Xe.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Ky(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function qy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function ru(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=qy(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e(Ky(r),s,n,0)}),n}return null}function Jy(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Qi={transitional:nu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(ru(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return zy(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ds(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Jy(e)):e}],transformResponse:[function(e){const n=this.transitional||Qi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{Qi.headers[t]={}});const Zi=Qi,Gy=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Gy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ua=Symbol("internals");function An(t){return t&&String(t).trim().toLowerCase()}function Sr(t){return t===!1||t==null?t:b.isArray(t)?t.map(Sr):String(t)}function Xy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Qy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ks(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function Zy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function eb(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class hs{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=An(c);if(!u)throw new Error("header name must be a non-empty string");const f=b.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Sr(a))}const o=(a,c)=>b.forEach(a,(l,u)=>i(l,u,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!Qy(e)?o(Yy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=An(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xy(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=An(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ks(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=An(o),o){const a=b.findKey(r,o);a&&(!n||ks(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||ks(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=Sr(s),delete n[i];return}const a=e?Zy(i):String(i).trim();a!==i&&delete n[i],n[a]=Sr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ua]=this[Ua]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=An(o);r[a]||(eb(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}hs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(hs.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(hs);const ct=hs;function Ns(t,e){const n=this||Zi,r=e||n,s=ct.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function su(t){return!!(t&&t.__CANCEL__)}function ir(t,e,n){z.call(this,t??"canceled",z.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(ir,z,{__CANCEL__:!0});function tb(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const nb=Xe.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),b.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),b.isString(i)&&c.push("path="+i),b.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function rb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function sb(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function iu(t,e){return t&&!rb(e)?sb(t,e):e}const ib=Xe.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function ob(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function ab(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const _=u&&l-u;return _?Math.round(p*1e3/_):void 0}}function Fa(t,e){let n=0;const r=ab(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const cb=typeof XMLHttpRequest<"u",lb=cb&&function(t){return new Promise(function(n,r){let s=t.data;const i=ct.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}let l;b.isFormData(s)&&(Xe.isStandardBrowserEnv||Xe.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.getContentType(/^\s*multipart\/form-data/)?b.isString(l=i.getContentType())&&i.setContentType(l.replace(/^\s*(multipart\/form-data);+/,"$1")):i.setContentType("multipart/form-data"));let u=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+w))}const f=iu(t.baseURL,t.url);u.open(t.method.toUpperCase(),tu(f,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function p(){if(!u)return;const g=ct.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),N={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:t,request:u};tb(function(P){n(P),c()},function(P){r(P),c()},N),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new z("Request aborted",z.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const N=t.transitional||nu;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new z(w,N.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,u)),u=null},Xe.isStandardBrowserEnv){const g=ib(f)&&t.xsrfCookieName&&nb.read(t.xsrfCookieName);g&&i.set(t.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&b.forEach(i.toJSON(),function(w,N){u.setRequestHeader(N,w)}),b.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Fa(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Fa(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=g=>{u&&(r(!g||g.type?new ir(null,t,u):g),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const _=ob(f);if(_&&Xe.protocols.indexOf(_)===-1){r(new z("Unsupported protocol "+_+":",z.ERR_BAD_REQUEST,t));return}u.send(s||null)})},ci={http:Ly,xhr:lb};b.forEach(ci,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ba=t=>`- ${t}`,ub=t=>b.isFunction(t)||t===null||t===!1,ou={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!ub(n)&&(r=ci[(o=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ba).join(`
`):" "+Ba(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ci};function xs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ir(null,t)}function $a(t){return xs(t),t.headers=ct.from(t.headers),t.data=Ns.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ou.getAdapter(t.adapter||Zi.adapter)(t).then(function(r){return xs(t),r.data=Ns.call(t,t.transformResponse,r),r.headers=ct.from(r.headers),r},function(r){return su(r)||(xs(t),r&&r.response&&(r.response.data=Ns.call(t,t.transformResponse,r.response),r.response.headers=ct.from(r.response.headers))),Promise.reject(r)})}const Ha=t=>t instanceof ct?t.toJSON():t;function yn(t,e){e=e||{};const n={};function r(l,u,f){return b.isPlainObject(l)&&b.isPlainObject(u)?b.merge.call({caseless:f},l,u):b.isPlainObject(u)?b.merge({},u):b.isArray(u)?u.slice():u}function s(l,u,f){if(b.isUndefined(u)){if(!b.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!b.isUndefined(u))return r(void 0,u)}function o(l,u){if(b.isUndefined(u)){if(!b.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Ha(l),Ha(u),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);b.isUndefined(p)&&f!==a||(n[u]=p)}),n}const au="1.6.0",eo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ja={};eo.transitional=function(e,n,r){function s(i,o){return"[Axios v"+au+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new z(s(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!ja[o]&&(ja[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function fb(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new z("option "+i+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const li={assertOptions:fb,validators:eo},yt=li.validators;class Vr{constructor(e){this.defaults=e,this.interceptors={request:new Ma,response:new Ma}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=yn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&li.assertOptions(r,{silentJSONParsing:yt.transitional(yt.boolean),forcedJSONParsing:yt.transitional(yt.boolean),clarifyTimeoutError:yt.transitional(yt.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:li.assertOptions(s,{encode:yt.function,serialize:yt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ct.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let u,f=0,p;if(!c){const g=[$a.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),p=g.length,u=Promise.resolve(n);f<p;)u=u.then(g[f++],g[f++]);return u}p=a.length;let _=n;for(f=0;f<p;){const g=a[f++],w=a[f++];try{_=g(_)}catch(N){w.call(this,N);break}}try{u=$a.call(this,_)}catch(g){return Promise.reject(g)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=yn(this.defaults,e);const n=iu(e.baseURL,e.url);return tu(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){Vr.prototype[e]=function(n,r){return this.request(yn(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(yn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Vr.prototype[e]=n(),Vr.prototype[e+"Form"]=n(!0)});const Cr=Vr;class to{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new ir(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new to(function(s){e=s}),cancel:e}}}const db=to;function hb(t){return function(n){return t.apply(null,n)}}function pb(t){return b.isObject(t)&&t.isAxiosError===!0}const ui={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ui).forEach(([t,e])=>{ui[e]=t});const mb=ui;function cu(t){const e=new Cr(t),n=Vl(Cr.prototype.request,e);return b.extend(n,Cr.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return cu(yn(t,s))},n}const pe=cu(Zi);pe.Axios=Cr;pe.CanceledError=ir;pe.CancelToken=db;pe.isCancel=su;pe.VERSION=au;pe.toFormData=ds;pe.AxiosError=z;pe.Cancel=pe.CanceledError;pe.all=function(e){return Promise.all(e)};pe.spread=hb;pe.isAxiosError=pb;pe.mergeConfig=yn;pe.AxiosHeaders=ct;pe.formToJSON=t=>ru(b.isHTMLForm(t)?new FormData(t):t);pe.getAdapter=ou.getAdapter;pe.HttpStatusCode=mb;pe.default=pe;const gb=pe,lu=We([]),uu=We(1),fi=We(!1),fu=We(1),du=We(8),hu=We(null),pu=gb.create({baseURL:"https://naruto-character-directory.onrender.com",auth:{username:"admin",password:"admin"}}),_b=async()=>{fi.value=!0;const{data:t,headers:e}=await pu.get("/api/characters",{params:{page:fu.value,size:du.value}});lu.value=t,uu.value=Number(e["x-total-pages"])||1,fi.value=!1},yb=async t=>{const{data:e}=await pu.get(`/api/characters/${t}`);hu.value=e,console.log(e)},no=()=>({characters:lu,pages:uu,activePage:fu,loading:fi,pageSize:du,getCharacters:_b,getCharacter:yb,currentCharacter:hu});const bb={class:"card-image"},vb=["src"],Eb={class:"card-details"},wb={class:"card-details-name font-poppins"},Ib={class:"card-details-clan font-poppins"},Tb={class:"card-details-village font-poppins"},Rb={class:"card-details-quote font-poppins"},Sb={__name:"MainCardsSingle",props:{character:{type:Object,required:!0,default:()=>({createdAt:"2020-01-01",characterId:"123",name:"John Doe",image:"https://www.example.com",updatedAt:"2022-01-01"})}},setup(t){const e=t,n=()=>{console.log(`${e.character.name} selected`)};return(r,s)=>{const i=ki("RouterLink");return e.character.characterId?(de(),xr(i,{key:0,to:`/api/characters/${e.character.characterId}`},{default:jt(()=>[te("div",{class:"card",onClick:n},[te("div",bb,[te("img",{src:e.character.image,alt:"",srcset:""},null,8,vb)]),te("div",Eb,[te("p",wb,Bt(e.character.name),1),te("p",Ib,Bt(e.character.clan),1),te("p",Tb,Bt(e.character.village),1),te("p",Rb,'"'+Bt(e.character.quote)+'"',1)])])]),_:1},8,["to"])):od("",!0)}}},Cb=ht(Sb,[["__scopeId","data-v-091e115f"]]);const Ab=t=>(Ci("data-v-1a9e96d1"),t=t(),Ai(),t),Pb={class:"sub-wrapper"},Ob=Ab(()=>te("div",null,"Loading...",-1)),kb={__name:"MainCards",setup(t){const{characters:e}=no();return(n,r)=>(de(),Re("div",Pb,[(de(),xr(vf,null,{fallback:jt(()=>[Ob]),default:jt(()=>[(de(!0),Re(ke,null,Ac(me(e),s=>(de(),xr(Cb,{key:n.characterId,character:s},null,8,["character"]))),128))]),_:1}))]))}},Nb=ht(kb,[["__scopeId","data-v-1a9e96d1"]]);const xb={class:"pagination"},Db=["disabled"],Lb=["onClick"],Mb=["disabled"],Ub={__name:"MainPagination",setup(t){const{activePage:e,pages:n,getCharacters:r}=no(),s=async()=>{e.value>1&&(e.value--,await r())},i=async()=>{e.value<n.value&&(e.value++,await r())},o=async a=>{e.value=a,await r()};return(a,c)=>(de(),Re("div",xb,[te("button",{class:"action",disabled:me(e)===1,onClick:s},"Prev",8,Db),(de(!0),Re(ke,null,Ac(me(n),l=>(de(),Re("button",{class:Jr(["page",l===me(e)?"active":""]),key:l,onClick:u=>o(l)},Bt(l),11,Lb))),128)),te("button",{class:"action",disabled:me(e)===me(n),onClick:i},"Next",8,Mb)]))}},Fb=ht(Ub,[["__scopeId","data-v-a8ff4683"]]);const Bb={key:0},$b={key:1,class:"wrapper"},Hb={__name:"MainPage",setup(t){const{getCharacters:e,loading:n}=no();return Rc(async()=>{await e()}),(r,s)=>me(n)?(de(),Re("p",Bb,"Loading...")):(de(),Re("div",$b,[ce(ey),ce(Nb),ce(Fb)]))}},jb=ht(Hb,[["__scopeId","data-v-b3d04159"]]);const Vb=t=>(Ci("data-v-a61722e7"),t=t(),Ai(),t),Wb=["onSubmit"],zb=Vb(()=>te("button",{type:"submit",class:"bg-orange-300 px-4 py-2"},"Log In",-1)),Kb={__name:"LoginPage",setup(t){const{login:e,logout:n}=Gi(),r=Xh(),s=Qh(),i=We(""),o=We(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(de(),Re("form",{class:"login-form",onSubmit:Bd(a,["prevent"])},[Hs(te("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>i.value=u),type:"text",placeholder:"username"},null,512),[[Bo,i.value]]),Hs(te("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>o.value=u),type:"password",placeholder:"Password"},null,512),[[Bo,o.value]]),zb],40,Wb))}},qb=ht(Kb,[["__scopeId","data-v-a61722e7"]]),Jb={};function Gb(t,e){return de(),Re("h1",null,"Settings Page")}const Yb=ht(Jb,[["render",Gb]]);const Xb={},Qb={class:"not-found"};function Zb(t,e){return de(),Re("h2",Qb,"404 - Page not found")}const ev=ht(Xb,[["render",Zb],["__scopeId","data-v-22f42c34"]]),{isAuthenticated:tv}=Gi(),nv=[{path:"/Naruto-API-Directory/",name:"Home",component:jb},{path:"/login",name:"Login",component:qb},{path:"/settings",name:"Settings",component:Yb,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:ev},{path:"/api/characters/:id",name:"Character",component:()=>qd(()=>import("./CharacterPage-e20a5e74.js"),[])}],ro=Gh({history:fh(),routes:nv});ro.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!tv.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const rv={class:"wrapper"},sv={class:"brand-title"},iv={class:"menu"},ov={class:"px-4 py-4"},av={key:0},cv={key:1},lv={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=Gi(),s=We("Naruto Character Directory");return(i,o)=>{var c;const a=ki("RouterLink");return de(),Re("nav",null,[te("div",rv,[ce(a,{to:{name:"Home"},class:"brand"},{default:jt(()=>[te("span",sv,Bt(s.value),1)]),_:1}),te("div",iv,[Hs(te("p",ov,[vr("Welcome Back "),te("strong",null,[te("i",null,Bt((c=me(r))==null?void 0:c.email),1)])],512),[[$d,me(e)]]),me(e)?(de(),Re("div",av,[ce(a,{to:{name:"Settings"},href:"#",class:"menu-item"},{default:jt(()=>[vr("Settings")]),_:1}),te("button",{href:"#",class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>me(n)&&me(n)(...l))},"Logout")])):(de(),Re("div",cv,[ce(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:jt(()=>[vr("Login")]),_:1})]))])])])}}},uv=ht(lv,[["__scopeId","data-v-46b0f192"]]),fv={__name:"App",setup(t){return(e,n)=>{const r=ki("RouterView");return de(),Re(ke,null,[ce(uv),ce(r)],64)}}};Vd(fv).use(ro).mount("#app");export{Sc as a,de as b,Re as c,me as d,te as e,od as f,no as g,Rc as o,We as r,Bt as t,Qh as u};
