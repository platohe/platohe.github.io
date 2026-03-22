const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["vendor-processing.BXrOsedG.js","vendor-core.CFXOvhrT.js","vendor-visual.Drt-dmtb.js","AccessibilityPanel.DqvEOJ0q.js","vendor-utils.AceBcgTx.js","vendor-documents.3ADYhLl3.js","AccessibilityPanel.HUr2SpIBcss","SearchService.BNhrLmuw.js"])))=>i.map(i=>d[i]);
import{e as ob,f as rb,h as cb,g as Cu,r as g,j as s,T as Ln,M as Ga,i as re,k as Va,l as Ne,D as oi,m as Qa,n as Za,o as Je,S as lu,A as iu,p as Ka,q as Nn,F as si,C as Wc,t as Ho,E as ko,R as gm,u as Qt,v as Ic,w as su,Q as bm,I as Lo,x as Pc,y as rs,z as No,B as ou,G as ru,H as cu,J as uu,K as Ro,L as ym,N as vm,O as du,P as xm,U as xl,V as Ao,W as _o,X as ci,Y as fu,Z as hu,_ as mu,$ as Sm,a0 as fa,a1 as pu,a2 as gu,a3 as bu,a4 as yu,a5 as ri,a6 as Rm,a7 as ss,a8 as Mo,a9 as $o,aa as vu,ab as xu,ac as Su,ad as wu,ae as Tu,af as Eu,ag as ju,ah as os,ai as _m,aj as $m,ak as Om,al as Hm,am as Bm,an as ub,ao as ui,ap as Zt,aq as Bo,ar as Uo,as as qo,at as Yo,au as Xo,av as Au,aw as db,ax as fb,ay as hb,az as mb,aA as eu,aB as Ct,aC as sn,aD as on,aE as vl,aF as pb,aG as ls,aH as gb,aI as Um,aJ as bb,aK as yb,aL as qm,aM as vb,aN as xb,aO as Sb,aP as wb,aQ as Tb,aR as Eb,aS as jb,aT as kb}from"./vendor-core.CFXOvhrT.js";import{w as Go,x as Vo,y as Mb,z as Ym,A as Du,B as zu,D as Xm,F as Qo,G as Lu,H as Gm,J as Zo,h as wn,K as Fo,S as Cb,V as Ab,M as Vm,O as Db,P as zb,Q as Lb,R as Nb,T as Rb,U as _b,W as $b,X as wm,Y as Tm,_ as $t,Z as Ob,g as Hb,u as Ye,$ as Bb,a0 as Ub,a1 as qb,a2 as Yb,a3 as Xb,a4 as Gb,a5 as Vb,a6 as Nu,a7 as Qb,a8 as Zb}from"./vendor-processing.BXrOsedG.js";import{j as Qm,v as Do,a as Fb}from"./vendor-utils.AceBcgTx.js";import{r as Kb,a as Jb,v as Wb,G as Ib,g as Pb,J as zo,b as ey,u as ty,P as ny}from"./vendor-documents.3ADYhLl3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const b of f)if(b.type==="childList")for(const p of b.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function d(f){const b={};return f.integrity&&(b.integrity=f.integrity),f.referrerPolicy&&(b.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?b.credentials="include":f.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function c(f){if(f.ep)return;f.ep=!0;const b=d(f);fetch(f.href,b)}})();var tu={exports:{}},is={};var Em;function ay(){if(Em)return is;Em=1;var m=ob(),r=rb(),d=cb();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(b(e)!==e)throw Error(c(188))}function X(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return j(l),e;if(i===a)return j(l),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,a=i;break}if(u===a){o=!0,a=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,a=l;break}if(u===a){o=!0,a=i,n=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function H(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=H(e),t!==null)return t;e=e.sibling}return null}var $=Object.assign,k=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),se=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case x:return"Profiler";case G:return"StrictMode";case U:return"Suspense";case T:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case se:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case A:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var P=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Se=[],be=-1;function pe(e){return{current:e}}function ke(e){0>be||(e.current=Se[be],Se[be]=null,be--)}function fe(e,t){be++,Se[be]=e.current,e.current=t}var we=pe(null),Ot=pe(null),ft=pe(null),vt=pe(null);function lt(e,t){switch(fe(ft,t),fe(Ot,e),fe(we,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bh(t),e=Uh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ke(we),fe(we,e)}function xt(){ke(we),ke(Ot),ke(ft)}function Ee(e){e.memoizedState!==null&&fe(vt,e);var t=we.current,n=Uh(t,e.type);t!==n&&(fe(Ot,e),fe(we,n))}function ht(e){Ot.current===e&&(ke(we),ke(Ot)),vt.current===e&&(ke(vt),es._currentValue=ae)}var qt,wl;function At(e){if(qt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qt=t&&t[1]||"",wl=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+e+wl}var Yt=!1;function Ft(e,t){if(!e||Yt)return"";Yt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(z){var D=z}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(z){D=z}e.call(Y.prototype)}}else{try{throw Error()}catch(z){D=z}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(z){if(z&&D&&typeof z.stack=="string")return[z.stack,D.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var y=o.split(`
`),C=u.split(`
`);for(l=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(a===y.length||l===C.length)for(a=y.length-1,l=C.length-1;1<=a&&0<=l&&y[a]!==C[l];)l--;for(;1<=a&&0<=l;a--,l--)if(y[a]!==C[l]){if(a!==1||l!==1)do if(a--,l--,0>l||y[a]!==C[l]){var O=`
`+y[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=l);break}}}finally{Yt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?At(n):""}function ha(e,t){switch(e.tag){case 26:case 27:case 5:return At(e.type);case 16:return At("Lazy");case 13:return e.child!==t&&t!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return Ft(e.type,!1);case 11:return Ft(e.type.render,!1);case 1:return Ft(e.type,!0);case 31:return At("Activity");default:return""}}function Tl(e){try{var t="",n=null;do t+=ha(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Kt=Object.prototype.hasOwnProperty,xe=m.unstable_scheduleCallback,Xe=m.unstable_cancelCallback,Ht=m.unstable_shouldYield,Et=m.unstable_requestPaint,Ie=m.unstable_now,Dt=m.unstable_getCurrentPriorityLevel,Ja=m.unstable_ImmediatePriority,rn=m.unstable_UserBlockingPriority,cn=m.unstable_NormalPriority,Hn=m.unstable_LowPriority,ve=m.unstable_IdlePriority,Bn=m.log,mt=m.unstable_setDisableYieldValue,Pe=null,ye=null;function Bt(e){if(typeof Bn=="function"&&mt(e),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(Pe,e)}catch{}}var Ae=Math.clz32?Math.clz32:Xt,Jt=Math.log,un=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Jt(e)/un|0)|0}var he=256,$e=262144,it=4194304;function De(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oe(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=De(a):(o&=u,o!==0?l=De(o):n||(n=u&~e,n!==0&&(l=De(n))))):(u=a&~i,u!==0?l=De(u):o!==0?l=De(o):n||(n=a&~e,n!==0&&(l=De(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Ue(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wa(){var e=it;return it<<=1,(it&62914560)===0&&(it=4194304),e}function di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ia(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ee(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,y=e.expirationTimes,C=e.hiddenUpdates;for(n=o&~n;0<n;){var O=31-Ae(n),Y=1<<O;u[O]=0,y[O]=-1;var D=C[O];if(D!==null)for(C[O]=null,O=0;O<D.length;O++){var z=D[O];z!==null&&(z.lane&=-536870913)}n&=~Y}a!==0&&us(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function us(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ae(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function fi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ae(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Fn(e,t){var n=t&-t;return n=(n&42)!==0?1:ma(n),(n&(e.suspendedLanes|t))!==0?0:n}function ma(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function El(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jl(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:cm(e.type))}function kl(e,t){var n=R.p;try{return R.p=e,t()}finally{R.p=n}}var kt=Math.random().toString(36).slice(2),St="__reactFiber$"+kt,zt="__reactProps$"+kt,Un="__reactContainer$"+kt,Pa="__reactEvents$"+kt,ds="__reactListeners$"+kt,fs="__reactHandles$"+kt,Ml="__reactResources$"+kt,pa="__reactMarker$"+kt;function Cl(e){delete e[St],delete e[zt],delete e[Pa],delete e[ds],delete e[fs]}function ga(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zh(e);e!==null;){if(n=e[St])return n;e=Zh(e)}return t}e=n,n=e.parentNode}return null}function ba(e){if(e=e[St]||e[Un]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ya(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function dn(e){var t=e[Ml];return t||(t=e[Ml]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[pa]=!0}var hs=new Set,ms={};function qn(e,t){Ut(e,t),Ut(e+"Capture",t)}function Ut(e,t){for(ms[e]=t,e=0;e<t.length;e++)hs.add(t[e])}var Re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hi={},wt={};function va(e){return Kt.call(wt,e)?!0:Kt.call(hi,e)?!1:Re.test(e)?wt[e]=!0:(hi[e]=!0,!1)}function el(e,t,n){if(va(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function tl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Gt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gs(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xa(e){if(!e._valueTracker){var t=ps(e)?"checked":"value";e._valueTracker=gs(e,t,""+e[t])}}function mi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ps(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yn=/[\n"\\]/g;function It(e){return e.replace(Yn,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function h(e,t,n,a,l,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wt(t)):e.value!==""+Wt(t)&&(e.value=""+Wt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?N(e,o,Wt(t)):n!=null?N(e,o,Wt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Wt(u):e.removeAttribute("name")}function S(e,t,n,a,l,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){xa(e);return}n=n!=null?""+Wt(n):"",t=t!=null?""+Wt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),xa(e)}function N(e,t,n){t==="number"&&nl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Z(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function K(e,t,n){if(t!=null&&(t=""+Wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Wt(n):""}function ue(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(P(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Wt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),xa(e)}function me(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nt(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||fn.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Qe(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&nt(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&nt(e,i,t[i])}function ot(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _u=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$u=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(e){return $u.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Tn(){}var gi=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Dl=null;function Ou(e){var t=ba(e);if(t&&(e=t.stateNode)){var n=e[zt]||null;e:switch(e=t.stateNode,t.type){case"input":if(h(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[zt]||null;if(!l)throw Error(c(90));h(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&mi(a)}break e;case"textarea":K(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Z(e,!!n.multiple,t,!1)}}}var Jo=!1;function Hu(e,t,n){if(Jo)return e(t,n);Jo=!0;try{var a=e(t);return a}finally{if(Jo=!1,(Al!==null||Dl!==null)&&(ao(),Al&&(t=Al,e=Dl,Dl=Al=null,Ou(t),e)))for(t=0;t<e.length;t++)Ou(e[t])}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[zt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=!1;if(Kn)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Wo=!1}var Sa=null,Io=null,bs=null;function Bu(){if(bs)return bs;var e,t=Io,n=t.length,a,l="value"in Sa?Sa.value:Sa.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return bs=l.slice(e,1<a?1-a:void 0)}function ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vs(){return!0}function Uu(){return!1}function Pt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vs:Uu,this.isPropagationStopped=Uu,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),t}var al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=Pt(al),vi=$({},al,{view:0,detail:0}),ip=Pt(vi),Po,er,xi,Ss=$({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Po=e.screenX-xi.screenX,er=e.screenY-xi.screenY):er=Po=0,xi=e),Po)},movementY:function(e){return"movementY"in e?e.movementY:er}}),qu=Pt(Ss),sp=$({},Ss,{dataTransfer:0}),op=Pt(sp),rp=$({},vi,{relatedTarget:0}),tr=Pt(rp),cp=$({},al,{animationName:0,elapsedTime:0,pseudoElement:0}),up=Pt(cp),dp=$({},al,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fp=Pt(dp),hp=$({},al,{data:0}),Yu=Pt(hp),mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gp[e])?!!t[e]:!1}function nr(){return bp}var yp=$({},vi,{key:function(e){if(e.key){var t=mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type==="keypress"?ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=Pt(yp),xp=$({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=Pt(xp),Sp=$({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),wp=Pt(Sp),Tp=$({},al,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ep=Pt(Tp),jp=$({},Ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kp=Pt(jp),Mp=$({},al,{newState:0,oldState:0}),Cp=Pt(Mp),Ap=[9,13,27,32],ar=Kn&&"CompositionEvent"in window,Si=null;Kn&&"documentMode"in document&&(Si=document.documentMode);var Dp=Kn&&"TextEvent"in window&&!Si,Gu=Kn&&(!ar||Si&&8<Si&&11>=Si),Vu=" ",Qu=!1;function Zu(e,t){switch(e){case"keyup":return Ap.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zl=!1;function zp(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(Qu=!0,Vu);case"textInput":return e=t.data,e===Vu&&Qu?null:e;default:return null}}function Lp(e,t){if(zl)return e==="compositionend"||!ar&&Zu(e,t)?(e=Bu(),bs=Io=Sa=null,zl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gu&&t.locale!=="ko"?null:t.data;default:return null}}var Np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Np[e.type]:t==="textarea"}function Ju(e,t,n,a){Al?Dl?Dl.push(a):Dl=[a]:Al=a,t=uo(t,"onChange"),0<t.length&&(n=new xs("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var wi=null,Ti=null;function Rp(e){Nh(e,0)}function ws(e){var t=ya(e);if(mi(t))return e}function Wu(e,t){if(e==="change")return t}var Iu=!1;if(Kn){var lr;if(Kn){var ir="oninput"in document;if(!ir){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),ir=typeof Pu.oninput=="function"}lr=ir}else lr=!1;Iu=lr&&(!document.documentMode||9<document.documentMode)}function ed(){wi&&(wi.detachEvent("onpropertychange",td),Ti=wi=null)}function td(e){if(e.propertyName==="value"&&ws(Ti)){var t=[];Ju(t,Ti,e,Ko(e)),Hu(Rp,t)}}function _p(e,t,n){e==="focusin"?(ed(),wi=t,Ti=n,wi.attachEvent("onpropertychange",td)):e==="focusout"&&ed()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ws(Ti)}function Op(e,t){if(e==="click")return ws(t)}function Hp(e,t){if(e==="input"||e==="change")return ws(t)}function Bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hn=typeof Object.is=="function"?Object.is:Bp;function Ei(e,t){if(hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Kt.call(t,l)||!hn(e[l],t[l]))return!1}return!0}function nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ad(e,t){var n=nd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nd(n)}}function ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function id(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=nl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Up=Kn&&"documentMode"in document&&11>=document.documentMode,Ll=null,or=null,ji=null,rr=!1;function sd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rr||Ll==null||Ll!==nl(a)||(a=Ll,"selectionStart"in a&&sr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ji&&Ei(ji,a)||(ji=a,a=uo(or,"onSelect"),0<a.length&&(t=new xs("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ll)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nl={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionrun:ll("Transition","TransitionRun"),transitionstart:ll("Transition","TransitionStart"),transitioncancel:ll("Transition","TransitionCancel"),transitionend:ll("Transition","TransitionEnd")},cr={},od={};Kn&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete Nl.animationend.animation,delete Nl.animationiteration.animation,delete Nl.animationstart.animation),"TransitionEvent"in window||delete Nl.transitionend.transition);function il(e){if(cr[e])return cr[e];if(!Nl[e])return e;var t=Nl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in od)return cr[e]=t[n];return e}var rd=il("animationend"),cd=il("animationiteration"),ud=il("animationstart"),qp=il("transitionrun"),Yp=il("transitionstart"),Xp=il("transitioncancel"),dd=il("transitionend"),fd=new Map,ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ur.push("scrollEnd");function _n(e,t){fd.set(e,t),qn(t,[e])}var Ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},En=[],Rl=0,dr=0;function Es(){for(var e=Rl,t=dr=Rl=0;t<e;){var n=En[t];En[t++]=null;var a=En[t];En[t++]=null;var l=En[t];En[t++]=null;var i=En[t];if(En[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&hd(n,l,i)}}function js(e,t,n,a){En[Rl++]=e,En[Rl++]=t,En[Rl++]=n,En[Rl++]=a,dr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function fr(e,t,n,a){return js(e,t,n,a),ks(e)}function sl(e,t){return js(e,null,null,t),ks(e)}function hd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Ae(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function ks(e){if(50<Zi)throw Zi=0,Sc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _l={};function Gp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,t,n,a){return new Gp(e,t,n,a)}function hr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jn(e,t){var n=e.alternate;return n===null?(n=mn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function md(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ms(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")hr(e)&&(o=1);else if(typeof e=="string")o=Kg(e,n,we.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=mn(31,n,t,l),e.elementType=I,e.lanes=i,e;case F:return ol(n.children,l,i,t);case G:o=8,l|=24;break;case x:return e=mn(12,n,t,l|2),e.elementType=x,e.lanes=i,e;case U:return e=mn(13,n,t,l),e.elementType=U,e.lanes=i,e;case T:return e=mn(19,n,t,l),e.elementType=T,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case se:o=10;break e;case W:o=9;break e;case A:o=11;break e;case L:o=14;break e;case Q:o=16,a=null;break e}o=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=mn(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function ol(e,t,n,a){return e=mn(7,e,a,t),e.lanes=n,e}function mr(e,t,n){return e=mn(6,e,null,t),e.lanes=n,e}function pd(e){var t=mn(18,null,null,0);return t.stateNode=e,t}function pr(e,t,n){return t=mn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gd=new WeakMap;function jn(e,t){if(typeof e=="object"&&e!==null){var n=gd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Tl(t)},gd.set(e,t),t)}return{value:e,source:t,stack:Tl(t)}}var $l=[],Ol=0,Cs=null,ki=0,kn=[],Mn=0,wa=null,Xn=1,Gn="";function Wn(e,t){$l[Ol++]=ki,$l[Ol++]=Cs,Cs=e,ki=t}function bd(e,t,n){kn[Mn++]=Xn,kn[Mn++]=Gn,kn[Mn++]=wa,wa=e;var a=Xn;e=Gn;var l=32-Ae(a)-1;a&=~(1<<l),n+=1;var i=32-Ae(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Xn=1<<32-Ae(t)+l|n<<l|a,Gn=i+e}else Xn=1<<i|n<<l|a,Gn=e}function gr(e){e.return!==null&&(Wn(e,1),bd(e,1,0))}function br(e){for(;e===Cs;)Cs=$l[--Ol],$l[Ol]=null,ki=$l[--Ol],$l[Ol]=null;for(;e===wa;)wa=kn[--Mn],kn[Mn]=null,Gn=kn[--Mn],kn[Mn]=null,Xn=kn[--Mn],kn[Mn]=null}function yd(e,t){kn[Mn++]=Xn,kn[Mn++]=Gn,kn[Mn++]=wa,Xn=t.id,Gn=t.overflow,wa=e}var Lt=null,et=null,_e=!1,Ta=null,Cn=!1,yr=Error(c(519));function Ea(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mi(jn(t,e)),yr}function vd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[St]=e,t[zt]=a,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<Ki.length;n++)Ce(Ki[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),S(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),ue(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Oh(t.textContent,n)?(a.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),a.onScroll!=null&&Ce("scroll",t),a.onScrollEnd!=null&&Ce("scrollend",t),a.onClick!=null&&(t.onclick=Tn),t=!0):t=!1,t||Ea(e,!0)}function xd(e){for(Lt=e.return;Lt;)switch(Lt.tag){case 5:case 31:case 13:Cn=!1;return;case 27:case 3:Cn=!0;return;default:Lt=Lt.return}}function Hl(e){if(e!==Lt)return!1;if(!_e)return xd(e),_e=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$c(e.type,e.memoizedProps)),n=!n),n&&et&&Ea(e),xd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));et=Qh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));et=Qh(e)}else t===27?(t=et,Ha(e.type)?(e=qc,qc=null,et=e):et=t):et=Lt?Dn(e.stateNode.nextSibling):null;return!0}function rl(){et=Lt=null,_e=!1}function vr(){var e=Ta;return e!==null&&(an===null?an=e:an.push.apply(an,e),Ta=null),e}function Mi(e){Ta===null?Ta=[e]:Ta.push(e)}var xr=pe(null),cl=null,In=null;function ja(e,t,n){fe(xr,t._currentValue),t._currentValue=n}function Pn(e){e._currentValue=xr.current,ke(xr)}function Sr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function wr(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var y=0;y<t.length;y++)if(u.context===t[y]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Sr(i.return,n,e),a||(o=null);break e}i=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Sr(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function Bl(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=l.type;hn(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===vt.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(es):e=[es])}l=l.return}e!==null&&wr(t,e,n,a),t.flags|=262144}function As(e){for(e=e.firstContext;e!==null;){if(!hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ul(e){cl=e,In=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nt(e){return Sd(cl,e)}function Ds(e,t){return cl===null&&ul(e),Sd(e,t)}function Sd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},In===null){if(e===null)throw Error(c(308));In=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else In=In.next=t;return n}var Vp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Qp=m.unstable_scheduleCallback,Zp=m.unstable_NormalPriority,pt={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tr(){return{controller:new Vp,data:new Map,refCount:0}}function Ci(e){e.refCount--,e.refCount===0&&Qp(Zp,function(){e.controller.abort()})}var Ai=null,Er=0,Ul=0,ql=null;function Fp(e,t){if(Ai===null){var n=Ai=[];Er=0,Ul=Mc(),ql={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Er++,t.then(wd,wd),t}function wd(){if(--Er===0&&Ai!==null){ql!==null&&(ql.status="fulfilled");var e=Ai;Ai=null,Ul=0,ql=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Kp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Td=_.S;_.S=function(e,t){oh=Ie(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fp(e,t),Td!==null&&Td(e,t)};var dl=pe(null);function jr(){var e=dl.current;return e!==null?e:We.pooledCache}function zs(e,t){t===null?fe(dl,dl.current):fe(dl,t.pool)}function Ed(){var e=jr();return e===null?null:{parent:pt._currentValue,pool:e}}var Yl=Error(c(460)),kr=Error(c(474)),Ls=Error(c(542)),Ns={then:function(){}};function jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Tn,Tn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cd(e),e;default:if(typeof t.status=="string")t.then(Tn,Tn);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cd(e),e}throw hl=t,Yl}}function fl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(hl=n,Yl):n}}var hl=null;function Md(){if(hl===null)throw Error(c(459));var e=hl;return hl=null,e}function Cd(e){if(e===Yl||e===Ls)throw Error(c(483))}var Xl=null,Di=0;function Rs(e){var t=Di;return Di+=1,Xl===null&&(Xl=[]),kd(Xl,e,t)}function zi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _s(e,t){throw t.$$typeof===k?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ad(e){function t(E,w){if(e){var M=E.deletions;M===null?(E.deletions=[w],E.flags|=16):M.push(w)}}function n(E,w){if(!e)return null;for(;w!==null;)t(E,w),w=w.sibling;return null}function a(E){for(var w=new Map;E!==null;)E.key!==null?w.set(E.key,E):w.set(E.index,E),E=E.sibling;return w}function l(E,w){return E=Jn(E,w),E.index=0,E.sibling=null,E}function i(E,w,M){return E.index=M,e?(M=E.alternate,M!==null?(M=M.index,M<w?(E.flags|=67108866,w):M):(E.flags|=67108866,w)):(E.flags|=1048576,w)}function o(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function u(E,w,M,q){return w===null||w.tag!==6?(w=mr(M,E.mode,q),w.return=E,w):(w=l(w,M),w.return=E,w)}function y(E,w,M,q){var oe=M.type;return oe===F?O(E,w,M.props.children,q,M.key):w!==null&&(w.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Q&&fl(oe)===w.type)?(w=l(w,M.props),zi(w,M),w.return=E,w):(w=Ms(M.type,M.key,M.props,null,E.mode,q),zi(w,M),w.return=E,w)}function C(E,w,M,q){return w===null||w.tag!==4||w.stateNode.containerInfo!==M.containerInfo||w.stateNode.implementation!==M.implementation?(w=pr(M,E.mode,q),w.return=E,w):(w=l(w,M.children||[]),w.return=E,w)}function O(E,w,M,q,oe){return w===null||w.tag!==7?(w=ol(M,E.mode,q,oe),w.return=E,w):(w=l(w,M),w.return=E,w)}function Y(E,w,M){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=mr(""+w,E.mode,M),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case V:return M=Ms(w.type,w.key,w.props,null,E.mode,M),zi(M,w),M.return=E,M;case B:return w=pr(w,E.mode,M),w.return=E,w;case Q:return w=fl(w),Y(E,w,M)}if(P(w)||ce(w))return w=ol(w,E.mode,M,null),w.return=E,w;if(typeof w.then=="function")return Y(E,Rs(w),M);if(w.$$typeof===se)return Y(E,Ds(E,w),M);_s(E,w)}return null}function D(E,w,M,q){var oe=w!==null?w.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return oe!==null?null:u(E,w,""+M,q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case V:return M.key===oe?y(E,w,M,q):null;case B:return M.key===oe?C(E,w,M,q):null;case Q:return M=fl(M),D(E,w,M,q)}if(P(M)||ce(M))return oe!==null?null:O(E,w,M,q,null);if(typeof M.then=="function")return D(E,w,Rs(M),q);if(M.$$typeof===se)return D(E,w,Ds(E,M),q);_s(E,M)}return null}function z(E,w,M,q,oe){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return E=E.get(M)||null,u(w,E,""+q,oe);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return E=E.get(q.key===null?M:q.key)||null,y(w,E,q,oe);case B:return E=E.get(q.key===null?M:q.key)||null,C(w,E,q,oe);case Q:return q=fl(q),z(E,w,M,q,oe)}if(P(q)||ce(q))return E=E.get(M)||null,O(w,E,q,oe,null);if(typeof q.then=="function")return z(E,w,M,Rs(q),oe);if(q.$$typeof===se)return z(E,w,M,Ds(w,q),oe);_s(w,q)}return null}function ne(E,w,M,q){for(var oe=null,He=null,ie=w,je=w=0,Le=null;ie!==null&&je<M.length;je++){ie.index>je?(Le=ie,ie=null):Le=ie.sibling;var Be=D(E,ie,M[je],q);if(Be===null){ie===null&&(ie=Le);break}e&&ie&&Be.alternate===null&&t(E,ie),w=i(Be,w,je),He===null?oe=Be:He.sibling=Be,He=Be,ie=Le}if(je===M.length)return n(E,ie),_e&&Wn(E,je),oe;if(ie===null){for(;je<M.length;je++)ie=Y(E,M[je],q),ie!==null&&(w=i(ie,w,je),He===null?oe=ie:He.sibling=ie,He=ie);return _e&&Wn(E,je),oe}for(ie=a(ie);je<M.length;je++)Le=z(ie,E,je,M[je],q),Le!==null&&(e&&Le.alternate!==null&&ie.delete(Le.key===null?je:Le.key),w=i(Le,w,je),He===null?oe=Le:He.sibling=Le,He=Le);return e&&ie.forEach(function(Xa){return t(E,Xa)}),_e&&Wn(E,je),oe}function ge(E,w,M,q){if(M==null)throw Error(c(151));for(var oe=null,He=null,ie=w,je=w=0,Le=null,Be=M.next();ie!==null&&!Be.done;je++,Be=M.next()){ie.index>je?(Le=ie,ie=null):Le=ie.sibling;var Xa=D(E,ie,Be.value,q);if(Xa===null){ie===null&&(ie=Le);break}e&&ie&&Xa.alternate===null&&t(E,ie),w=i(Xa,w,je),He===null?oe=Xa:He.sibling=Xa,He=Xa,ie=Le}if(Be.done)return n(E,ie),_e&&Wn(E,je),oe;if(ie===null){for(;!Be.done;je++,Be=M.next())Be=Y(E,Be.value,q),Be!==null&&(w=i(Be,w,je),He===null?oe=Be:He.sibling=Be,He=Be);return _e&&Wn(E,je),oe}for(ie=a(ie);!Be.done;je++,Be=M.next())Be=z(ie,E,je,Be.value,q),Be!==null&&(e&&Be.alternate!==null&&ie.delete(Be.key===null?je:Be.key),w=i(Be,w,je),He===null?oe=Be:He.sibling=Be,He=Be);return e&&ie.forEach(function(sb){return t(E,sb)}),_e&&Wn(E,je),oe}function Ke(E,w,M,q){if(typeof M=="object"&&M!==null&&M.type===F&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case V:e:{for(var oe=M.key;w!==null;){if(w.key===oe){if(oe=M.type,oe===F){if(w.tag===7){n(E,w.sibling),q=l(w,M.props.children),q.return=E,E=q;break e}}else if(w.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Q&&fl(oe)===w.type){n(E,w.sibling),q=l(w,M.props),zi(q,M),q.return=E,E=q;break e}n(E,w);break}else t(E,w);w=w.sibling}M.type===F?(q=ol(M.props.children,E.mode,q,M.key),q.return=E,E=q):(q=Ms(M.type,M.key,M.props,null,E.mode,q),zi(q,M),q.return=E,E=q)}return o(E);case B:e:{for(oe=M.key;w!==null;){if(w.key===oe)if(w.tag===4&&w.stateNode.containerInfo===M.containerInfo&&w.stateNode.implementation===M.implementation){n(E,w.sibling),q=l(w,M.children||[]),q.return=E,E=q;break e}else{n(E,w);break}else t(E,w);w=w.sibling}q=pr(M,E.mode,q),q.return=E,E=q}return o(E);case Q:return M=fl(M),Ke(E,w,M,q)}if(P(M))return ne(E,w,M,q);if(ce(M)){if(oe=ce(M),typeof oe!="function")throw Error(c(150));return M=oe.call(M),ge(E,w,M,q)}if(typeof M.then=="function")return Ke(E,w,Rs(M),q);if(M.$$typeof===se)return Ke(E,w,Ds(E,M),q);_s(E,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,w!==null&&w.tag===6?(n(E,w.sibling),q=l(w,M),q.return=E,E=q):(n(E,w),q=mr(M,E.mode,q),q.return=E,E=q),o(E)):n(E,w)}return function(E,w,M,q){try{Di=0;var oe=Ke(E,w,M,q);return Xl=null,oe}catch(ie){if(ie===Yl||ie===Ls)throw ie;var He=mn(29,ie,null,E.mode);return He.lanes=q,He.return=E,He}}}var ml=Ad(!0),Dd=Ad(!1),ka=!1;function Mr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(qe&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ks(e),hd(e,null,n),t}return js(e,a,t,n),ks(e)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fi(e,n)}}function Ar(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Dr=!1;function Ni(){if(Dr){var e=ql;if(e!==null)throw e}}function Ri(e,t,n,a){Dr=!1;var l=e.updateQueue;ka=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var y=u,C=y.next;y.next=null,o===null?i=C:o.next=C,o=y;var O=e.alternate;O!==null&&(O=O.updateQueue,u=O.lastBaseUpdate,u!==o&&(u===null?O.firstBaseUpdate=C:u.next=C,O.lastBaseUpdate=y))}if(i!==null){var Y=l.baseState;o=0,O=C=y=null,u=i;do{var D=u.lane&-536870913,z=D!==u.lane;if(z?(ze&D)===D:(a&D)===D){D!==0&&D===Ul&&(Dr=!0),O!==null&&(O=O.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var ne=e,ge=u;D=t;var Ke=n;switch(ge.tag){case 1:if(ne=ge.payload,typeof ne=="function"){Y=ne.call(Ke,Y,D);break e}Y=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ge.payload,D=typeof ne=="function"?ne.call(Ke,Y,D):ne,D==null)break e;Y=$({},Y,D);break e;case 2:ka=!0}}D=u.callback,D!==null&&(e.flags|=64,z&&(e.flags|=8192),z=l.callbacks,z===null?l.callbacks=[D]:z.push(D))}else z={lane:D,tag:u.tag,payload:u.payload,callback:u.callback,next:null},O===null?(C=O=z,y=Y):O=O.next=z,o|=D;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;z=u,u=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);O===null&&(y=Y),l.baseState=y,l.firstBaseUpdate=C,l.lastBaseUpdate=O,i===null&&(l.shared.lanes=0),Na|=o,e.lanes=o,e.memoizedState=Y}}function zd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ld(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)zd(n[e],t)}var Gl=pe(null),$s=pe(0);function Nd(e,t){e=ra,fe($s,e),fe(Gl,t),ra=e|t.baseLanes}function zr(){fe($s,ra),fe(Gl,Gl.current)}function Lr(){ra=$s.current,ke(Gl),ke($s)}var pn=pe(null),An=null;function Aa(e){var t=e.alternate;fe(ut,ut.current&1),fe(pn,e),An===null&&(t===null||Gl.current!==null||t.memoizedState!==null)&&(An=e)}function Nr(e){fe(ut,ut.current),fe(pn,e),An===null&&(An=e)}function Rd(e){e.tag===22?(fe(ut,ut.current),fe(pn,e),An===null&&(An=e)):Da()}function Da(){fe(ut,ut.current),fe(pn,pn.current)}function gn(e){ke(pn),An===e&&(An=null),ke(ut)}var ut=pe(0);function Os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bc(n)||Uc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,Te=null,Ze=null,gt=null,Hs=!1,Vl=!1,pl=!1,Bs=0,_i=0,Ql=null,Jp=0;function rt(){throw Error(c(321))}function Rr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hn(e[n],t[n]))return!1;return!0}function _r(e,t,n,a,l,i){return ea=i,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?yf:Jr,pl=!1,i=n(a,l),pl=!1,Vl&&(i=$d(t,n,a,l)),_d(e),i}function _d(e){_.H=Hi;var t=Ze!==null&&Ze.next!==null;if(ea=0,gt=Ze=Te=null,Hs=!1,_i=0,Ql=null,t)throw Error(c(300));e===null||bt||(e=e.dependencies,e!==null&&As(e)&&(bt=!0))}function $d(e,t,n,a){Te=e;var l=0;do{if(Vl&&(Ql=null),_i=0,Vl=!1,25<=l)throw Error(c(301));if(l+=1,gt=Ze=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=vf,i=t(n,a)}while(Vl);return i}function Wp(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?$i(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Te.flags|=1024),t}function $r(){var e=Bs!==0;return Bs=0,e}function Or(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Hr(e){if(Hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hs=!1}ea=0,gt=Ze=Te=null,Vl=!1,_i=Bs=0,Ql=null}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Te.memoizedState=gt=e:gt=gt.next=e,gt}function dt(){if(Ze===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=gt===null?Te.memoizedState:gt.next;if(t!==null)gt=t,Ze=e;else{if(e===null)throw Te.alternate===null?Error(c(467)):Error(c(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},gt===null?Te.memoizedState=gt=e:gt=gt.next=e}return gt}function Us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $i(e){var t=_i;return _i+=1,Ql===null&&(Ql=[]),e=kd(Ql,e,t),t=Te,(gt===null?t.memoizedState:gt.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?yf:Jr),e}function qs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $i(e);if(e.$$typeof===se)return Nt(e)}throw Error(c(438,String(e)))}function Br(e){var t=null,n=Te.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Us(),Te.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=le;return t.index++,n}function ta(e,t){return typeof t=="function"?t(e):t}function Ys(e){var t=dt();return Ur(t,Ze,e)}function Ur(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=o=null,y=null,C=t,O=!1;do{var Y=C.lane&-536870913;if(Y!==C.lane?(ze&Y)===Y:(ea&Y)===Y){var D=C.revertLane;if(D===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),Y===Ul&&(O=!0);else if((ea&D)===D){C=C.next,D===Ul&&(O=!0);continue}else Y={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},y===null?(u=y=Y,o=i):y=y.next=Y,Te.lanes|=D,Na|=D;Y=C.action,pl&&n(i,Y),i=C.hasEagerState?C.eagerState:n(i,Y)}else D={lane:Y,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},y===null?(u=y=D,o=i):y=y.next=D,Te.lanes|=Y,Na|=Y;C=C.next}while(C!==null&&C!==t);if(y===null?o=i:y.next=u,!hn(i,e.memoizedState)&&(bt=!0,O&&(n=ql,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=y,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function qr(e){var t=dt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);hn(i,t.memoizedState)||(bt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Od(e,t,n){var a=Te,l=dt(),i=_e;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var o=!hn((Ze||l).memoizedState,n);if(o&&(l.memoizedState=n,bt=!0),l=l.queue,Gr(Ud.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,Zl(9,{destroy:void 0},Bd.bind(null,a,l,n,t),null),We===null)throw Error(c(349));i||(ea&127)!==0||Hd(a,t,n)}return n}function Hd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t=Us(),Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bd(e,t,n,a){t.value=n,t.getSnapshot=a,qd(t)&&Yd(e)}function Ud(e,t,n){return n(function(){qd(t)&&Yd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hn(e,n)}catch{return!0}}function Yd(e){var t=sl(e,2);t!==null&&ln(t,e,2)}function Yr(e){var t=Vt();if(typeof e=="function"){var n=e;if(e=n(),pl){Bt(!0);try{n()}finally{Bt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t}function Xd(e,t,n,a){return e.baseState=n,Ur(e,Ze,typeof a=="function"?a:ta)}function Ip(e,t,n,a,l){if(Vs(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};_.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Gd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Gd(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=_.T,o={};_.T=o;try{var u=n(l,a),y=_.S;y!==null&&y(o,u),Vd(e,t,u)}catch(C){Xr(e,t,C)}finally{i!==null&&o.types!==null&&(i.types=o.types),_.T=i}}else try{i=n(l,a),Vd(e,t,i)}catch(C){Xr(e,t,C)}}function Vd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Qd(e,t,a)},function(a){return Xr(e,t,a)}):Qd(e,t,n)}function Qd(e,t,n){t.status="fulfilled",t.value=n,Zd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Gd(e,n)))}function Xr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Zd(t),t=t.next;while(t!==a)}e.action=null}function Zd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Fd(e,t){return t}function Kd(e,t){if(_e){var n=We.formState;if(n!==null){e:{var a=Te;if(_e){if(et){t:{for(var l=et,i=Cn;l.nodeType!==8;){if(!i){l=null;break t}if(l=Dn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){et=Dn(l.nextSibling),a=l.data==="F!";break e}}Ea(a)}a=!1}a&&(t=n[0])}}return n=Vt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fd,lastRenderedState:t},n.queue=a,n=pf.bind(null,Te,a),a.dispatch=n,a=Yr(!1),i=Kr.bind(null,Te,!1,a.queue),a=Vt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Ip.bind(null,Te,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Jd(e){var t=dt();return Wd(t,Ze,e)}function Wd(e,t,n){if(t=Ur(e,t,Fd)[0],e=Ys(ta)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=$i(t)}catch(o){throw o===Yl?Ls:o}else a=t;t=dt();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(Te.flags|=2048,Zl(9,{destroy:void 0},Pp.bind(null,l,n),null)),[a,i,e]}function Pp(e,t){e.action=t}function Id(e){var t=dt(),n=Ze;if(n!==null)return Wd(t,n,e);dt(),t=t.memoizedState,n=dt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Zl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Te.updateQueue,t===null&&(t=Us(),Te.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Pd(){return dt().memoizedState}function Xs(e,t,n,a){var l=Vt();Te.flags|=e,l.memoizedState=Zl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Gs(e,t,n,a){var l=dt();a=a===void 0?null:a;var i=l.memoizedState.inst;Ze!==null&&a!==null&&Rr(a,Ze.memoizedState.deps)?l.memoizedState=Zl(t,i,n,a):(Te.flags|=e,l.memoizedState=Zl(1|t,i,n,a))}function ef(e,t){Xs(8390656,8,e,t)}function Gr(e,t){Gs(2048,8,e,t)}function eg(e){Te.flags|=4;var t=Te.updateQueue;if(t===null)t=Us(),Te.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function tf(e){var t=dt().memoizedState;return eg({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function nf(e,t){return Gs(4,2,e,t)}function af(e,t){return Gs(4,4,e,t)}function lf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sf(e,t,n){n=n!=null?n.concat([e]):null,Gs(4,4,lf.bind(null,t,e),n)}function Vr(){}function of(e,t){var n=dt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Rr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function rf(e,t){var n=dt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Rr(t,a[1]))return a[0];if(a=e(),pl){Bt(!0);try{e()}finally{Bt(!1)}}return n.memoizedState=[a,t],a}function Qr(e,t,n){return n===void 0||(ea&1073741824)!==0&&(ze&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ch(),Te.lanes|=e,Na|=e,n)}function cf(e,t,n,a){return hn(n,t)?n:Gl.current!==null?(e=Qr(e,n,a),hn(e,t)||(bt=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(ze&261930)===0?(bt=!0,e.memoizedState=n):(e=ch(),Te.lanes|=e,Na|=e,t)}function uf(e,t,n,a,l){var i=R.p;R.p=i!==0&&8>i?i:8;var o=_.T,u={};_.T=u,Kr(e,!1,t,n);try{var y=l(),C=_.S;if(C!==null&&C(u,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var O=Kp(y,a);Oi(e,t,O,vn(e))}else Oi(e,t,a,vn(e))}catch(Y){Oi(e,t,{then:function(){},status:"rejected",reason:Y},vn())}finally{R.p=i,o!==null&&u.types!==null&&(o.types=u.types),_.T=o}}function tg(){}function Zr(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=df(e).queue;uf(e,l,t,ae,n===null?tg:function(){return ff(e),n(a)})}function df(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ff(e){var t=df(e);t.next===null&&(t=e.alternate.memoizedState),Oi(e,t.next.queue,{},vn())}function Fr(){return Nt(es)}function hf(){return dt().memoizedState}function mf(){return dt().memoizedState}function ng(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=vn();e=Ma(n);var a=Ca(t,e,n);a!==null&&(ln(a,t,n),Li(a,t,n)),t={cache:Tr()},e.payload=t;return}t=t.return}}function ag(e,t,n){var a=vn();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vs(e)?gf(t,n):(n=fr(e,t,n,a),n!==null&&(ln(n,e,a),bf(n,t,a)))}function pf(e,t,n){var a=vn();Oi(e,t,n,a)}function Oi(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vs(e))gf(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,hn(u,o))return js(e,t,l,0),We===null&&Es(),!1}catch{}if(n=fr(e,t,l,a),n!==null)return ln(n,e,a),bf(n,t,a),!0}return!1}function Kr(e,t,n,a){if(a={lane:2,revertLane:Mc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vs(e)){if(t)throw Error(c(479))}else t=fr(e,n,a,2),t!==null&&ln(t,e,2)}function Vs(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function gf(e,t){Vl=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fi(e,n)}}var Hi={readContext:Nt,use:qs,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt};Hi.useEffectEvent=rt;var yf={readContext:Nt,use:qs,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:ef,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xs(4194308,4,lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){Xs(4,2,e,t)},useMemo:function(e,t){var n=Vt();t=t===void 0?null:t;var a=e();if(pl){Bt(!0);try{e()}finally{Bt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Vt();if(n!==void 0){var l=n(t);if(pl){Bt(!0);try{n(t)}finally{Bt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=ag.bind(null,Te,e),[a.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:function(e){e=Yr(e);var t=e.queue,n=pf.bind(null,Te,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vr,useDeferredValue:function(e,t){var n=Vt();return Qr(n,e,t)},useTransition:function(){var e=Yr(!1);return e=uf.bind(null,Te,e.queue,!0,!1),Vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Te,l=Vt();if(_e){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),We===null)throw Error(c(349));(ze&127)!==0||Hd(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ef(Ud.bind(null,a,i,e),[e]),a.flags|=2048,Zl(9,{destroy:void 0},Bd.bind(null,a,i,n,t),null),n},useId:function(){var e=Vt(),t=We.identifierPrefix;if(_e){var n=Gn,a=Xn;n=(a&~(1<<32-Ae(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Bs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Jp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fr,useFormState:Kd,useActionState:Kd,useOptimistic:function(e){var t=Vt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Kr.bind(null,Te,!0,n),n.dispatch=t,[e,t]},useMemoCache:Br,useCacheRefresh:function(){return Vt().memoizedState=ng.bind(null,Te)},useEffectEvent:function(e){var t=Vt(),n={impl:e};return t.memoizedState=n,function(){if((qe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Jr={readContext:Nt,use:qs,useCallback:of,useContext:Nt,useEffect:Gr,useImperativeHandle:sf,useInsertionEffect:nf,useLayoutEffect:af,useMemo:rf,useReducer:Ys,useRef:Pd,useState:function(){return Ys(ta)},useDebugValue:Vr,useDeferredValue:function(e,t){var n=dt();return cf(n,Ze.memoizedState,e,t)},useTransition:function(){var e=Ys(ta)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:$i(e),t]},useSyncExternalStore:Od,useId:hf,useHostTransitionStatus:Fr,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=dt();return Xd(n,Ze,e,t)},useMemoCache:Br,useCacheRefresh:mf};Jr.useEffectEvent=tf;var vf={readContext:Nt,use:qs,useCallback:of,useContext:Nt,useEffect:Gr,useImperativeHandle:sf,useInsertionEffect:nf,useLayoutEffect:af,useMemo:rf,useReducer:qr,useRef:Pd,useState:function(){return qr(ta)},useDebugValue:Vr,useDeferredValue:function(e,t){var n=dt();return Ze===null?Qr(n,e,t):cf(n,Ze.memoizedState,e,t)},useTransition:function(){var e=qr(ta)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:$i(e),t]},useSyncExternalStore:Od,useId:hf,useHostTransitionStatus:Fr,useFormState:Id,useActionState:Id,useOptimistic:function(e,t){var n=dt();return Ze!==null?Xd(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Br,useCacheRefresh:mf};vf.useEffectEvent=tf;function Wr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ir={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=vn(),l=Ma(a);l.payload=t,n!=null&&(l.callback=n),t=Ca(e,l,a),t!==null&&(ln(t,e,a),Li(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=vn(),l=Ma(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ca(e,l,a),t!==null&&(ln(t,e,a),Li(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vn(),a=Ma(n);a.tag=2,t!=null&&(a.callback=t),t=Ca(e,a,n),t!==null&&(ln(t,e,n),Li(t,e,n))}};function xf(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,a)||!Ei(l,i):!0}function Sf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ir.enqueueReplaceState(t,t.state,null)}function gl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=$({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function wf(e){Ts(e)}function Tf(e){console.error(e)}function Ef(e){Ts(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function jf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Pr(e,t,n){return n=Ma(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function kf(e){return e=Ma(e),e.tag=3,e}function Mf(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){jf(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){jf(t,n,a),typeof l!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function lg(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Bl(t,n,l,!0),n=pn.current,n!==null){switch(n.tag){case 31:case 13:return An===null?lo():n.alternate===null&&ct===0&&(ct=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Ns?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Ec(e,a,l)),!1;case 22:return n.flags|=65536,a===Ns?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Ec(e,a,l)),!1}throw Error(c(435,n.tag))}return Ec(e,a,l),lo(),!1}if(_e)return t=pn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==yr&&(e=Error(c(422),{cause:a}),Mi(jn(e,n)))):(a!==yr&&(t=Error(c(423),{cause:a}),Mi(jn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=jn(a,n),l=Pr(e.stateNode,a,l),Ar(e,l),ct!==4&&(ct=2)),!1;var i=Error(c(520),{cause:a});if(i=jn(i,n),Qi===null?Qi=[i]:Qi.push(i),ct!==4&&(ct=2),t===null)return!0;a=jn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Pr(n.stateNode,a,e),Ar(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=kf(l),Mf(l,e,n,a),Ar(n,l),!1}n=n.return}while(n!==null);return!1}var ec=Error(c(461)),bt=!1;function Rt(e,t,n,a){t.child=e===null?Dd(t,null,n,a):ml(t,e.child,n,a)}function Cf(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}else o=a;return ul(t),a=_r(e,t,n,o,i,l),u=$r(),e!==null&&!bt?(Or(e,t,l),na(e,t,l)):(_e&&u&&gr(t),t.flags|=1,Rt(e,t,a,l),t.child)}function Af(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!hr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Df(e,t,i,a,l)):(e=Ms(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!rc(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(o,a)&&e.ref===t.ref)return na(e,t,l)}return t.flags|=1,e=Jn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Df(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Ei(i,a)&&e.ref===t.ref)if(bt=!1,t.pendingProps=a=i,rc(e,l))(e.flags&131072)!==0&&(bt=!0);else return t.lanes=e.lanes,na(e,t,l)}return tc(e,t,n,a,l)}function zf(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Lf(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zs(t,i!==null?i.cachePool:null),i!==null?Nd(t,i):zr(),Rd(t);else return a=t.lanes=536870912,Lf(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(zs(t,i.cachePool),Nd(t,i),Da(),t.memoizedState=null):(e!==null&&zs(t,null),zr(),Da());return Rt(e,t,l,n),t.child}function Bi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lf(e,t,n,a,l){var i=jr();return i=i===null?null:{parent:pt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&zs(t,null),zr(),Rd(t),e!==null&&Bl(e,t,a,!0),t.childLanes=l,null}function Zs(e,t){return t=Ks({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Nf(e,t,n){return ml(t,e.child,null,n),e=Zs(t,t.pendingProps),e.flags|=2,gn(t),t.memoizedState=null,e}function ig(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(a.mode==="hidden")return e=Zs(t,a),t.lanes=536870912,Bi(null,e);if(Nr(t),(e=et)?(e=Vh(e,Cn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Xn,overflow:Gn}:null,retryLane:536870912,hydrationErrors:null},n=pd(e),n.return=t,t.child=n,Lt=t,et=null)):e=null,e===null)throw Ea(t);return t.lanes=536870912,null}return Zs(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Nr(t),l)if(t.flags&256)t.flags&=-257,t=Nf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(bt||Bl(e,t,n,!1),l=(n&e.childLanes)!==0,bt||l){if(a=We,a!==null&&(o=Fn(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,sl(e,o),ln(a,e,o),ec;lo(),t=Nf(e,t,n)}else e=i.treeContext,et=Dn(o.nextSibling),Lt=t,_e=!0,Ta=null,Cn=!1,e!==null&&yd(t,e),t=Zs(t,a),t.flags|=4096;return t}return e=Jn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function tc(e,t,n,a,l){return ul(t),n=_r(e,t,n,a,void 0,l),a=$r(),e!==null&&!bt?(Or(e,t,l),na(e,t,l)):(_e&&a&&gr(t),t.flags|=1,Rt(e,t,n,l),t.child)}function Rf(e,t,n,a,l,i){return ul(t),t.updateQueue=null,n=$d(t,a,n,l),_d(e),a=$r(),e!==null&&!bt?(Or(e,t,i),na(e,t,i)):(_e&&a&&gr(t),t.flags|=1,Rt(e,t,n,i),t.child)}function _f(e,t,n,a,l){if(ul(t),t.stateNode===null){var i=_l,o=n.contextType;typeof o=="object"&&o!==null&&(i=Nt(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ir,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Mr(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Nt(o):_l,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Wr(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Ir.enqueueReplaceState(i,i.state,null),Ri(t,a,i,l),Ni(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,y=gl(n,u);i.props=y;var C=i.context,O=n.contextType;o=_l,typeof O=="object"&&O!==null&&(o=Nt(O));var Y=n.getDerivedStateFromProps;O=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||C!==o)&&Sf(t,i,a,o),ka=!1;var D=t.memoizedState;i.state=D,Ri(t,a,i,l),Ni(),C=t.memoizedState,u||D!==C||ka?(typeof Y=="function"&&(Wr(t,n,Y,a),C=t.memoizedState),(y=ka||xf(t,n,y,a,D,C,o))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=C),i.props=a,i.state=C,i.context=o,a=y):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Cr(e,t),o=t.memoizedProps,O=gl(n,o),i.props=O,Y=t.pendingProps,D=i.context,C=n.contextType,y=_l,typeof C=="object"&&C!==null&&(y=Nt(C)),u=n.getDerivedStateFromProps,(C=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==Y||D!==y)&&Sf(t,i,a,y),ka=!1,D=t.memoizedState,i.state=D,Ri(t,a,i,l),Ni();var z=t.memoizedState;o!==Y||D!==z||ka||e!==null&&e.dependencies!==null&&As(e.dependencies)?(typeof u=="function"&&(Wr(t,n,u,a),z=t.memoizedState),(O=ka||xf(t,n,O,a,D,z,y)||e!==null&&e.dependencies!==null&&As(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,z,y),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,z,y)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=z),i.props=a,i.state=z,i.context=y,a=O):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Fs(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ml(t,e.child,null,l),t.child=ml(t,null,n,l)):Rt(e,t,n,l),t.memoizedState=i.state,e=t.child):e=na(e,t,l),e}function $f(e,t,n,a){return rl(),t.flags|=256,Rt(e,t,n,a),t.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ac(e){return{baseLanes:e,cachePool:Ed()}}function lc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=yn),e}function Of(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(l?Aa(t):Da(),(e=et)?(e=Vh(e,Cn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Xn,overflow:Gn}:null,retryLane:536870912,hydrationErrors:null},n=pd(e),n.return=t,t.child=n,Lt=t,et=null)):e=null,e===null)throw Ea(t);return Uc(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(Da(),l=t.mode,u=Ks({mode:"hidden",children:u},l),a=ol(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=ac(n),a.childLanes=lc(e,o,n),t.memoizedState=nc,Bi(null,a)):(Aa(t),ic(t,u))}var y=e.memoizedState;if(y!==null&&(u=y.dehydrated,u!==null)){if(i)t.flags&256?(Aa(t),t.flags&=-257,t=sc(e,t,n)):t.memoizedState!==null?(Da(),t.child=e.child,t.flags|=128,t=null):(Da(),u=a.fallback,l=t.mode,a=Ks({mode:"visible",children:a.children},l),u=ol(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,ml(t,e.child,null,n),a=t.child,a.memoizedState=ac(n),a.childLanes=lc(e,o,n),t.memoizedState=nc,t=Bi(null,a));else if(Aa(t),Uc(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var C=o.dgst;o=C,a=Error(c(419)),a.stack="",a.digest=o,Mi({value:a,source:null,stack:null}),t=sc(e,t,n)}else if(bt||Bl(e,t,n,!1),o=(n&e.childLanes)!==0,bt||o){if(o=We,o!==null&&(a=Fn(o,n),a!==0&&a!==y.retryLane))throw y.retryLane=a,sl(e,a),ln(o,e,a),ec;Bc(u)||lo(),t=sc(e,t,n)}else Bc(u)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,et=Dn(u.nextSibling),Lt=t,_e=!0,Ta=null,Cn=!1,e!==null&&yd(t,e),t=ic(t,a.children),t.flags|=4096);return t}return l?(Da(),u=a.fallback,l=t.mode,y=e.child,C=y.sibling,a=Jn(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,C!==null?u=Jn(C,u):(u=ol(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,Bi(null,a),a=t.child,u=e.child.memoizedState,u===null?u=ac(n):(l=u.cachePool,l!==null?(y=pt._currentValue,l=l.parent!==y?{parent:y,pool:y}:l):l=Ed(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=lc(e,o,n),t.memoizedState=nc,Bi(e.child,a)):(Aa(t),n=e.child,e=n.sibling,n=Jn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function ic(e,t){return t=Ks({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ks(e,t){return e=mn(22,e,null,t),e.lanes=0,e}function sc(e,t,n){return ml(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Sr(e.return,t,n)}function oc(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function Bf(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=ut.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,fe(ut,o),Rt(e,t,a,n),a=_e?ki:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hf(e,n,t);else if(e.tag===19)Hf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),oc(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Os(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}oc(t,!0,n,null,i,a);break;case"together":oc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function na(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Bl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&As(e)))}function sg(e,t,n){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),ja(t,pt,e.memoizedState.cache),rl();break;case 27:case 5:Ee(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:ja(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Nr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Aa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Of(e,t,n):(Aa(t),e=na(e,t,n),e!==null?e.sibling:null);Aa(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Bl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Bf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),fe(ut,ut.current),a)break;return null;case 22:return t.lanes=0,zf(e,t,n,t.pendingProps);case 24:ja(t,pt,e.memoizedState.cache)}return na(e,t,n)}function Uf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)bt=!0;else{if(!rc(e,n)&&(t.flags&128)===0)return bt=!1,sg(e,t,n);bt=(e.flags&131072)!==0}else bt=!1,_e&&(t.flags&1048576)!==0&&bd(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=fl(t.elementType),t.type=e,typeof e=="function")hr(e)?(a=gl(e,a),t.tag=1,t=_f(null,t,e,a,n)):(t.tag=0,t=tc(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===A){t.tag=11,t=Cf(null,t,e,a,n);break e}else if(l===L){t.tag=14,t=Af(null,t,e,a,n);break e}}throw t=J(e)||e,Error(c(306,t,""))}}return t;case 0:return tc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=gl(a,t.pendingProps),_f(e,t,a,l,n);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Cr(e,t),Ri(t,a,null,n);var o=t.memoizedState;if(a=o.cache,ja(t,pt,a),a!==i.cache&&wr(t,[pt],n,!0),Ni(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=$f(e,t,a,n);break e}else if(a!==l){l=jn(Error(c(424)),t),Mi(l),t=$f(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,et=Dn(e.firstChild),Lt=t,_e=!0,Ta=null,Cn=!0,n=Dd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rl(),a===l){t=na(e,t,n);break e}Rt(e,t,a,n)}t=t.child}return t;case 26:return Fs(e,t),e===null?(n=Wh(t.type,null,t.pendingProps,null))?t.memoizedState=n:_e||(n=t.type,e=t.pendingProps,a=fo(ft.current).createElement(n),a[St]=t,a[zt]=e,_t(a,n,e),st(a),t.stateNode=a):t.memoizedState=Wh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ee(t),e===null&&_e&&(a=t.stateNode=Fh(t.type,t.pendingProps,ft.current),Lt=t,Cn=!0,l=et,Ha(t.type)?(qc=l,et=Dn(a.firstChild)):et=l),Rt(e,t,t.pendingProps.children,n),Fs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((l=a=et)&&(a=$g(a,t.type,t.pendingProps,Cn),a!==null?(t.stateNode=a,Lt=t,et=Dn(a.firstChild),Cn=!1,l=!0):l=!1),l||Ea(t)),Ee(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,$c(l,i)?a=null:o!==null&&$c(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=_r(e,t,Wp,null,null,n),es._currentValue=l),Fs(e,t),Rt(e,t,a,n),t.child;case 6:return e===null&&_e&&((e=n=et)&&(n=Og(n,t.pendingProps,Cn),n!==null?(t.stateNode=n,Lt=t,et=null,e=!0):e=!1),e||Ea(t)),null;case 13:return Of(e,t,n);case 4:return lt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ml(t,null,a,n):Rt(e,t,a,n),t.child;case 11:return Cf(e,t,t.type,t.pendingProps,n);case 7:return Rt(e,t,t.pendingProps,n),t.child;case 8:return Rt(e,t,t.pendingProps.children,n),t.child;case 12:return Rt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,ja(t,t.type,a.value),Rt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,ul(t),l=Nt(l),a=a(l),t.flags|=1,Rt(e,t,a,n),t.child;case 14:return Af(e,t,t.type,t.pendingProps,n);case 15:return Df(e,t,t.type,t.pendingProps,n);case 19:return Bf(e,t,n);case 31:return ig(e,t,n);case 22:return zf(e,t,n,t.pendingProps);case 24:return ul(t),a=Nt(pt),e===null?(l=jr(),l===null&&(l=We,i=Tr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Mr(t),ja(t,pt,l)):((e.lanes&n)!==0&&(Cr(e,t),Ri(t,null,null,n),Ni()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ja(t,pt,a)):(a=i.cache,ja(t,pt,a),a!==l.cache&&wr(t,[pt],n,!0))),Rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function aa(e){e.flags|=4}function cc(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(hh())e.flags|=8192;else throw hl=Ns,kr}else e.flags&=-16777217}function qf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nm(t))if(hh())e.flags|=8192;else throw hl=Ns,kr}function Js(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Wa():536870912,e.lanes|=t,Wl|=t)}function Ui(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function og(e,t,n){var a=t.pendingProps;switch(br(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return tt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pn(pt),xt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hl(t)?aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vr())),tt(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(aa(t),i!==null?(tt(t),qf(t,i)):(tt(t),cc(t,l,null,a,n))):i?i!==e.memoizedState?(aa(t),tt(t),qf(t,i)):(tt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&aa(t),tt(t),cc(t,l,e,a,n)),null;case 27:if(ht(t),n=ft.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&aa(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return tt(t),null}e=we.current,Hl(t)?vd(t):(e=Fh(l,a,n),t.stateNode=e,aa(t))}return tt(t),null;case 5:if(ht(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&aa(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return tt(t),null}if(i=we.current,Hl(t))vd(t);else{var o=fo(ft.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[St]=t,i[zt]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(_t(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&aa(t)}}return tt(t),cc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&aa(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ft.current,Hl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Lt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[St]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Oh(e.nodeValue,n)),e||Ea(t,!0)}else e=fo(e).createTextNode(a),e[St]=t,t.stateNode=e}return tt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Hl(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[St]=t}else rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),e=!1}else n=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(gn(t),t):(gn(t),null);if((t.flags&128)!==0)throw Error(c(558))}return tt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Hl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[St]=t}else rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),l=!1}else l=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(gn(t),t):(gn(t),null)}return gn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Js(t,t.updateQueue),tt(t),null);case 4:return xt(),e===null&&zc(t.stateNode.containerInfo),tt(t),null;case 10:return Pn(t.type),tt(t),null;case 19:if(ke(ut),a=t.memoizedState,a===null)return tt(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Ui(a,!1);else{if(ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Os(e),i!==null){for(t.flags|=128,Ui(a,!1),e=i.updateQueue,t.updateQueue=e,Js(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)md(n,e),n=n.sibling;return fe(ut,ut.current&1|2),_e&&Wn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Ie()>to&&(t.flags|=128,l=!0,Ui(a,!1),t.lanes=4194304)}else{if(!l)if(e=Os(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Js(t,e),Ui(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!_e)return tt(t),null}else 2*Ie()-a.renderingStartTime>to&&n!==536870912&&(t.flags|=128,l=!0,Ui(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ie(),e.sibling=null,n=ut.current,fe(ut,l?n&1|2:n&1),_e&&Wn(t,a.treeForkCount),e):(tt(t),null);case 22:case 23:return gn(t),Lr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),n=t.updateQueue,n!==null&&Js(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&ke(dl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pn(pt),tt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function rg(e,t){switch(br(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(pt),xt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ht(t),null;case 31:if(t.memoizedState!==null){if(gn(t),t.alternate===null)throw Error(c(340));rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(ut),null;case 4:return xt(),null;case 10:return Pn(t.type),null;case 22:case 23:return gn(t),Lr(),e!==null&&ke(dl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pn(pt),null;case 25:return null;default:return null}}function Yf(e,t){switch(br(t),t.tag){case 3:Pn(pt),xt();break;case 26:case 27:case 5:ht(t);break;case 4:xt();break;case 31:t.memoizedState!==null&&gn(t);break;case 13:gn(t);break;case 19:ke(ut);break;case 10:Pn(t.type);break;case 22:case 23:gn(t),Lr(),e!==null&&ke(dl);break;case 24:Pn(pt)}}function qi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(u){Ve(t,t.return,u)}}function za(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var y=n,C=u;try{C()}catch(O){Ve(l,y,O)}}}a=a.next}while(a!==i)}}catch(O){Ve(t,t.return,O)}}function Xf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ld(t,n)}catch(a){Ve(e,e.return,a)}}}function Gf(e,t,n){n.props=gl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ve(e,t,a)}}function Yi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Ve(e,t,l)}}function Vn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Ve(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ve(e,t,l)}else n.current=null}function Vf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Ve(e,e.return,l)}}function uc(e,t,n){try{var a=e.stateNode;Dg(a,e.type,n,t),a[zt]=t}catch(l){Ve(e,e.return,l)}}function Qf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tn));else if(a!==4&&(a===27&&Ha(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(fc(e,t,n),e=e.sibling;e!==null;)fc(e,t,n),e=e.sibling}function Ws(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Ha(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}function Zf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);_t(t,a,n),t[St]=e,t[zt]=n}catch(i){Ve(e,e.return,i)}}var la=!1,yt=!1,hc=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,Mt=null;function cg(e,t){if(e=e.containerInfo,Rc=vo,e=id(e),sr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,y=-1,C=0,O=0,Y=e,D=null;t:for(;;){for(var z;Y!==n||l!==0&&Y.nodeType!==3||(u=o+l),Y!==i||a!==0&&Y.nodeType!==3||(y=o+a),Y.nodeType===3&&(o+=Y.nodeValue.length),(z=Y.firstChild)!==null;)D=Y,Y=z;for(;;){if(Y===e)break t;if(D===n&&++C===l&&(u=o),D===i&&++O===a&&(y=o),(z=Y.nextSibling)!==null)break;Y=D,D=Y.parentNode}Y=z}n=u===-1||y===-1?null:{start:u,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(_c={focusedElem:e,selectionRange:n},vo=!1,Mt=t;Mt!==null;)if(t=Mt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Mt=e;else for(;Mt!==null;){switch(t=Mt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var ne=gl(n.type,l);e=a.getSnapshotBeforeUpdate(ne,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(ge){Ve(n,n.return,ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Hc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Mt=e;break}Mt=t.return}}function Kf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:sa(e,n),a&4&&qi(5,n);break;case 1:if(sa(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Ve(n,n.return,o)}else{var l=gl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ve(n,n.return,o)}}a&64&&Xf(n),a&512&&Yi(n,n.return);break;case 3:if(sa(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ld(e,t)}catch(o){Ve(n,n.return,o)}}break;case 27:t===null&&a&4&&Zf(n);case 26:case 5:sa(e,n),t===null&&a&4&&Vf(n),a&512&&Yi(n,n.return);break;case 12:sa(e,n);break;case 31:sa(e,n),a&4&&If(e,n);break;case 13:sa(e,n),a&4&&Pf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=yg.bind(null,n),Hg(e,n))));break;case 22:if(a=n.memoizedState!==null||la,!a){t=t!==null&&t.memoizedState!==null||yt,l=la;var i=yt;la=a,(yt=t)&&!i?oa(e,n,(n.subtreeFlags&8772)!==0):sa(e,n),la=l,yt=i}break;case 30:break;default:sa(e,n)}}function Jf(e){var t=e.alternate;t!==null&&(e.alternate=null,Jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Cl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,en=!1;function ia(e,t,n){for(n=n.child;n!==null;)Wf(e,t,n),n=n.sibling}function Wf(e,t,n){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(Pe,n)}catch{}switch(n.tag){case 26:yt||Vn(n,t),ia(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:yt||Vn(n,t);var a=at,l=en;Ha(n.type)&&(at=n.stateNode,en=!1),ia(e,t,n),Wi(n.stateNode),at=a,en=l;break;case 5:yt||Vn(n,t);case 6:if(a=at,l=en,at=null,ia(e,t,n),at=a,en=l,at!==null)if(en)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode)}catch(i){Ve(n,t,i)}else try{at.removeChild(n.stateNode)}catch(i){Ve(n,t,i)}break;case 18:at!==null&&(en?(e=at,Xh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ii(e)):Xh(at,n.stateNode));break;case 4:a=at,l=en,at=n.stateNode.containerInfo,en=!0,ia(e,t,n),at=a,en=l;break;case 0:case 11:case 14:case 15:za(2,n,t),yt||za(4,n,t),ia(e,t,n);break;case 1:yt||(Vn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Gf(n,t,a)),ia(e,t,n);break;case 21:ia(e,t,n);break;case 22:yt=(a=yt)||n.memoizedState!==null,ia(e,t,n),yt=a;break;default:ia(e,t,n)}}function If(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ii(e)}catch(n){Ve(t,t.return,n)}}}function Pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ii(e)}catch(n){Ve(t,t.return,n)}}function ug(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ff),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ff),t;default:throw Error(c(435,e.tag))}}function Is(e,t){var n=ug(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=vg.bind(null,e,a);a.then(l,l)}})}function tn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(Ha(u.type)){at=u.stateNode,en=!1;break e}break;case 5:at=u.stateNode,en=!1;break e;case 3:case 4:at=u.stateNode.containerInfo,en=!0;break e}u=u.return}if(at===null)throw Error(c(160));Wf(i,o,l),at=null,en=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}var $n=null;function eh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tn(t,e),nn(e),a&4&&(za(3,e,e.return),qi(3,e),za(5,e,e.return));break;case 1:tn(t,e),nn(e),a&512&&(yt||n===null||Vn(n,n.return)),a&64&&la&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=$n;if(tn(t,e),nn(e),a&512&&(yt||n===null||Vn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[pa]||i[St]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),_t(i,a,n),i[St]=e,st(i),a=i;break e;case"link":var o=em("link","href",l).get(a+(n.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break t}}i=l.createElement(a),_t(i,a,n),l.head.appendChild(i);break;case"meta":if(o=em("meta","content",l).get(a+(n.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break t}}i=l.createElement(a),_t(i,a,n),l.head.appendChild(i);break;default:throw Error(c(468,a))}i[St]=e,st(i),a=i}e.stateNode=a}else tm(l,e.type,e.stateNode);else e.stateNode=Ph(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?tm(l,e.type,e.stateNode):Ph(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&uc(e,e.memoizedProps,n.memoizedProps)}break;case 27:tn(t,e),nn(e),a&512&&(yt||n===null||Vn(n,n.return)),n!==null&&a&4&&uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tn(t,e),nn(e),a&512&&(yt||n===null||Vn(n,n.return)),e.flags&32){l=e.stateNode;try{me(l,"")}catch(ne){Ve(e,e.return,ne)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,uc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(hc=!0);break;case 6:if(tn(t,e),nn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ne){Ve(e,e.return,ne)}}break;case 3:if(po=null,l=$n,$n=ho(t.containerInfo),tn(t,e),$n=l,nn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ii(t.containerInfo)}catch(ne){Ve(e,e.return,ne)}hc&&(hc=!1,th(e));break;case 4:a=$n,$n=ho(e.stateNode.containerInfo),tn(t,e),nn(e),$n=a;break;case 12:tn(t,e),nn(e);break;case 31:tn(t,e),nn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 13:tn(t,e),nn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eo=Ie()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 22:l=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,C=la,O=yt;if(la=C||l,yt=O||y,tn(t,e),yt=O,la=C,nn(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||y||la||yt||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(i=y.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=y.stateNode;var Y=y.memoizedProps.style,D=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;u.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(ne){Ve(y,y.return,ne)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=l?"":y.memoizedProps}catch(ne){Ve(y,y.return,ne)}}}else if(t.tag===18){if(n===null){y=t;try{var z=y.stateNode;l?Gh(z,!0):Gh(y.stateNode,!1)}catch(ne){Ve(y,y.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Is(e,n))));break;case 19:tn(t,e),nn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 30:break;case 21:break;default:tn(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Qf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,i=dc(e);Ws(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(me(o,""),n.flags&=-33);var u=dc(e);Ws(e,u,o);break;case 3:case 4:var y=n.stateNode.containerInfo,C=dc(e);fc(e,C,y);break;default:throw Error(c(161))}}catch(O){Ve(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function th(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;th(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kf(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:za(4,t,t.return),bl(t);break;case 1:Vn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gf(t,t.return,n),bl(t);break;case 27:Wi(t.stateNode);case 26:case 5:Vn(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function oa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:oa(l,i,n),qi(4,i);break;case 1:if(oa(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){Ve(a,a.return,C)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)zd(y[l],u)}catch(C){Ve(a,a.return,C)}}n&&o&64&&Xf(i),Yi(i,i.return);break;case 27:Zf(i);case 26:case 5:oa(l,i,n),n&&a===null&&o&4&&Vf(i),Yi(i,i.return);break;case 12:oa(l,i,n);break;case 31:oa(l,i,n),n&&o&4&&If(l,i);break;case 13:oa(l,i,n),n&&o&4&&Pf(l,i);break;case 22:i.memoizedState===null&&oa(l,i,n),Yi(i,i.return);break;case 30:break;default:oa(l,i,n)}t=t.sibling}}function mc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ci(n))}function pc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ci(e))}function On(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nh(e,t,n,a),t=t.sibling}function nh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:On(e,t,n,a),l&2048&&qi(9,t);break;case 1:On(e,t,n,a);break;case 3:On(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ci(e)));break;case 12:if(l&2048){On(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ve(t,t.return,y)}}else On(e,t,n,a);break;case 31:On(e,t,n,a);break;case 13:On(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?On(e,t,n,a):Xi(e,t):i._visibility&2?On(e,t,n,a):(i._visibility|=2,Fl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&mc(o,t);break;case 24:On(e,t,n,a),l&2048&&pc(t.alternate,t);break;default:On(e,t,n,a)}}function Fl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=n,y=a,C=o.flags;switch(o.tag){case 0:case 11:case 15:Fl(i,o,u,y,l),qi(8,o);break;case 23:break;case 22:var O=o.stateNode;o.memoizedState!==null?O._visibility&2?Fl(i,o,u,y,l):Xi(i,o):(O._visibility|=2,Fl(i,o,u,y,l)),l&&C&2048&&mc(o.alternate,o);break;case 24:Fl(i,o,u,y,l),l&&C&2048&&pc(o.alternate,o);break;default:Fl(i,o,u,y,l)}t=t.sibling}}function Xi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Xi(n,a),l&2048&&mc(a.alternate,a);break;case 24:Xi(n,a),l&2048&&pc(a.alternate,a);break;default:Xi(n,a)}t=t.sibling}}var Gi=8192;function Kl(e,t,n){if(e.subtreeFlags&Gi)for(e=e.child;e!==null;)ah(e,t,n),e=e.sibling}function ah(e,t,n){switch(e.tag){case 26:Kl(e,t,n),e.flags&Gi&&e.memoizedState!==null&&Jg(n,$n,e.memoizedState,e.memoizedProps);break;case 5:Kl(e,t,n);break;case 3:case 4:var a=$n;$n=ho(e.stateNode.containerInfo),Kl(e,t,n),$n=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Gi,Gi=16777216,Kl(e,t,n),Gi=a):Kl(e,t,n));break;default:Kl(e,t,n)}}function lh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Vi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Mt=a,sh(a,e)}lh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ih(e),e=e.sibling}function ih(e){switch(e.tag){case 0:case 11:case 15:Vi(e),e.flags&2048&&za(9,e,e.return);break;case 3:Vi(e);break;case 12:Vi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ps(e)):Vi(e);break;default:Vi(e)}}function Ps(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Mt=a,sh(a,e)}lh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:za(8,t,t.return),Ps(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ps(t));break;default:Ps(t)}e=e.sibling}}function sh(e,t){for(;Mt!==null;){var n=Mt;switch(n.tag){case 0:case 11:case 15:za(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ci(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Mt=a;else e:for(n=e;Mt!==null;){a=Mt;var l=a.sibling,i=a.return;if(Jf(a),a===n){Mt=null;break e}if(l!==null){l.return=i,Mt=l;break e}Mt=i}}}var dg={getCacheForType:function(e){var t=Nt(pt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Nt(pt).controller.signal}},fg=typeof WeakMap=="function"?WeakMap:Map,qe=0,We=null,Me=null,ze=0,Ge=0,bn=null,La=!1,Jl=!1,gc=!1,ra=0,ct=0,Na=0,yl=0,bc=0,yn=0,Wl=0,Qi=null,an=null,yc=!1,eo=0,oh=0,to=1/0,no=null,Ra=null,Tt=0,_a=null,Il=null,ca=0,vc=0,xc=null,rh=null,Zi=0,Sc=null;function vn(){return(qe&2)!==0&&ze!==0?ze&-ze:_.T!==null?Mc():jl()}function ch(){if(yn===0)if((ze&536870912)===0||_e){var e=$e;$e<<=1,($e&3932160)===0&&($e=262144),yn=e}else yn=536870912;return e=pn.current,e!==null&&(e.flags|=32),yn}function ln(e,t,n){(e===We&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(Pl(e,0),$a(e,ze,yn,!1)),Ia(e,n),((qe&2)===0||e!==We)&&(e===We&&((qe&2)===0&&(yl|=n),ct===4&&$a(e,ze,yn,!1)),Qn(e))}function uh(e,t,n){if((qe&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ue(e,t),l=a?pg(e,t):Tc(e,t,!0),i=a;do{if(l===0){Jl&&!a&&$a(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!hg(n)){l=Tc(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=Qi;var y=u.current.memoizedState.isDehydrated;if(y&&(Pl(u,o).flags|=256),o=Tc(u,o,!1),o!==2){if(gc&&!y){u.errorRecoveryDisabledLanes|=i,yl|=i,l=4;break e}i=an,an=l,i!==null&&(an===null?an=i:an.push.apply(an,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Pl(e,0),$a(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:$a(a,t,yn,!La);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=eo+300-Ie(),10<l)){if($a(a,t,yn,!La),Oe(a,0,!0)!==0)break e;ca=t,a.timeoutHandle=qh(dh.bind(null,a,n,an,no,yc,t,yn,yl,Wl,La,i,"Throttled",-0,0),l);break e}dh(a,n,an,no,yc,t,yn,yl,Wl,La,i,null,-0,0)}}break}while(!0);Qn(e)}function dh(e,t,n,a,l,i,o,u,y,C,O,Y,D,z){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tn},ah(t,i,Y);var ne=(i&62914560)===i?eo-Ie():(i&4194048)===i?oh-Ie():0;if(ne=Wg(Y,ne),ne!==null){ca=i,e.cancelPendingCommit=ne(vh.bind(null,e,t,i,n,a,l,o,u,y,O,Y,null,D,z)),$a(e,i,o,!C);return}}vh(e,t,i,n,a,l,o,u,y)}function hg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!hn(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $a(e,t,n,a){t&=~bc,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-Ae(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&us(e,n,t)}function ao(){return(qe&6)===0?(Fi(0),!1):!0}function wc(){if(Me!==null){if(Ge===0)var e=Me.return;else e=Me,In=cl=null,Hr(e),Xl=null,Di=0,e=Me;for(;e!==null;)Yf(e.alternate,e),e=e.return;Me=null}}function Pl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ng(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ca=0,wc(),We=e,Me=n=Jn(e.current,null),ze=t,Ge=0,bn=null,La=!1,Jl=Ue(e,t),gc=!1,Wl=yn=bc=yl=Na=ct=0,an=Qi=null,yc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-Ae(a),i=1<<l;t|=e[l],a&=~i}return ra=t,Es(),n}function fh(e,t){Te=null,_.H=Hi,t===Yl||t===Ls?(t=Md(),Ge=3):t===kr?(t=Md(),Ge=4):Ge=t===ec?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bn=t,Me===null&&(ct=1,Qs(e,jn(t,e.current)))}function hh(){var e=pn.current;return e===null?!0:(ze&4194048)===ze?An===null:(ze&62914560)===ze||(ze&536870912)!==0?e===An:!1}function mh(){var e=_.H;return _.H=Hi,e===null?Hi:e}function ph(){var e=_.A;return _.A=dg,e}function lo(){ct=4,La||(ze&4194048)!==ze&&pn.current!==null||(Jl=!0),(Na&134217727)===0&&(yl&134217727)===0||We===null||$a(We,ze,yn,!1)}function Tc(e,t,n){var a=qe;qe|=2;var l=mh(),i=ph();(We!==e||ze!==t)&&(no=null,Pl(e,t)),t=!1;var o=ct;e:do try{if(Ge!==0&&Me!==null){var u=Me,y=bn;switch(Ge){case 8:wc(),o=6;break e;case 3:case 2:case 9:case 6:pn.current===null&&(t=!0);var C=Ge;if(Ge=0,bn=null,ei(e,u,y,C),n&&Jl){o=0;break e}break;default:C=Ge,Ge=0,bn=null,ei(e,u,y,C)}}mg(),o=ct;break}catch(O){fh(e,O)}while(!0);return t&&e.shellSuspendCounter++,In=cl=null,qe=a,_.H=l,_.A=i,Me===null&&(We=null,ze=0,Es()),o}function mg(){for(;Me!==null;)gh(Me)}function pg(e,t){var n=qe;qe|=2;var a=mh(),l=ph();We!==e||ze!==t?(no=null,to=Ie()+500,Pl(e,t)):Jl=Ue(e,t);e:do try{if(Ge!==0&&Me!==null){t=Me;var i=bn;t:switch(Ge){case 1:Ge=0,bn=null,ei(e,t,i,1);break;case 2:case 9:if(jd(i)){Ge=0,bn=null,bh(t);break}t=function(){Ge!==2&&Ge!==9||We!==e||(Ge=7),Qn(e)},i.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:jd(i)?(Ge=0,bn=null,bh(t)):(Ge=0,bn=null,ei(e,t,i,7));break;case 5:var o=null;switch(Me.tag){case 26:o=Me.memoizedState;case 5:case 27:var u=Me;if(o?nm(o):u.stateNode.complete){Ge=0,bn=null;var y=u.sibling;if(y!==null)Me=y;else{var C=u.return;C!==null?(Me=C,io(C)):Me=null}break t}}Ge=0,bn=null,ei(e,t,i,5);break;case 6:Ge=0,bn=null,ei(e,t,i,6);break;case 8:wc(),ct=6;break e;default:throw Error(c(462))}}gg();break}catch(O){fh(e,O)}while(!0);return In=cl=null,_.H=a,_.A=l,qe=n,Me!==null?0:(We=null,ze=0,Es(),ct)}function gg(){for(;Me!==null&&!Ht();)gh(Me)}function gh(e){var t=Uf(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?io(e):Me=t}function bh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rf(n,t,t.pendingProps,t.type,void 0,ze);break;case 11:t=Rf(n,t,t.pendingProps,t.type.render,t.ref,ze);break;case 5:Hr(t);default:Yf(n,t),t=Me=md(t,ra),t=Uf(n,t,ra)}e.memoizedProps=e.pendingProps,t===null?io(e):Me=t}function ei(e,t,n,a){In=cl=null,Hr(t),Xl=null,Di=0;var l=t.return;try{if(lg(e,l,t,n,ze)){ct=1,Qs(e,jn(n,e.current)),Me=null;return}}catch(i){if(l!==null)throw Me=l,i;ct=1,Qs(e,jn(n,e.current)),Me=null;return}t.flags&32768?(_e||a===1?e=!0:Jl||(ze&536870912)!==0?e=!1:(La=e=!0,(a===2||a===9||a===3||a===6)&&(a=pn.current,a!==null&&a.tag===13&&(a.flags|=16384))),yh(t,e)):io(t)}function io(e){var t=e;do{if((t.flags&32768)!==0){yh(t,La);return}e=t.return;var n=og(t.alternate,t,ra);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);ct===0&&(ct=5)}function yh(e,t){do{var n=rg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);ct=6,Me=null}function vh(e,t,n,a,l,i,o,u,y){e.cancelPendingCommit=null;do so();while(Tt!==0);if((qe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=dr,ee(e,n,i,o,u,y),e===We&&(Me=We=null,ze=0),Il=t,_a=e,ca=n,vc=i,xc=l,rh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xg(cn,function(){return Eh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,l=R.p,R.p=2,o=qe,qe|=4;try{cg(e,t,n)}finally{qe=o,R.p=l,_.T=a}}Tt=1,xh(),Sh(),wh()}}function xh(){if(Tt===1){Tt=0;var e=_a,t=Il,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var a=R.p;R.p=2;var l=qe;qe|=4;try{eh(t,e);var i=_c,o=id(e.containerInfo),u=i.focusedElem,y=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&ld(u.ownerDocument.documentElement,u)){if(y!==null&&sr(u)){var C=y.start,O=y.end;if(O===void 0&&(O=C),"selectionStart"in u)u.selectionStart=C,u.selectionEnd=Math.min(O,u.value.length);else{var Y=u.ownerDocument||document,D=Y&&Y.defaultView||window;if(D.getSelection){var z=D.getSelection(),ne=u.textContent.length,ge=Math.min(y.start,ne),Ke=y.end===void 0?ge:Math.min(y.end,ne);!z.extend&&ge>Ke&&(o=Ke,Ke=ge,ge=o);var E=ad(u,ge),w=ad(u,Ke);if(E&&w&&(z.rangeCount!==1||z.anchorNode!==E.node||z.anchorOffset!==E.offset||z.focusNode!==w.node||z.focusOffset!==w.offset)){var M=Y.createRange();M.setStart(E.node,E.offset),z.removeAllRanges(),ge>Ke?(z.addRange(M),z.extend(w.node,w.offset)):(M.setEnd(w.node,w.offset),z.addRange(M))}}}}for(Y=[],z=u;z=z.parentNode;)z.nodeType===1&&Y.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<Y.length;u++){var q=Y[u];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}vo=!!Rc,_c=Rc=null}finally{qe=l,R.p=a,_.T=n}}e.current=t,Tt=2}}function Sh(){if(Tt===2){Tt=0;var e=_a,t=Il,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var a=R.p;R.p=2;var l=qe;qe|=4;try{Kf(e,t.alternate,t)}finally{qe=l,R.p=a,_.T=n}}Tt=3}}function wh(){if(Tt===4||Tt===3){Tt=0,Et();var e=_a,t=Il,n=ca,a=rh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Tt=5:(Tt=0,Il=_a=null,Th(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ra=null),El(n),t=t.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(Pe,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,l=R.p,R.p=2,_.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var u=a[o];i(u.value,{componentStack:u.stack})}}finally{_.T=t,R.p=l}}(ca&3)!==0&&so(),Qn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Sc?Zi++:(Zi=0,Sc=e):Zi=0,Fi(0)}}function Th(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ci(t)))}function so(){return xh(),Sh(),wh(),Eh()}function Eh(){if(Tt!==5)return!1;var e=_a,t=vc;vc=0;var n=El(ca),a=_.T,l=R.p;try{R.p=32>n?32:n,_.T=null,n=xc,xc=null;var i=_a,o=ca;if(Tt=0,Il=_a=null,ca=0,(qe&6)!==0)throw Error(c(331));var u=qe;if(qe|=4,ih(i.current),nh(i,i.current,o,n),qe=u,Fi(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(Pe,i)}catch{}return!0}finally{R.p=l,_.T=a,Th(e,t)}}function jh(e,t,n){t=jn(n,t),t=Pr(e.stateNode,t,2),e=Ca(e,t,2),e!==null&&(Ia(e,2),Qn(e))}function Ve(e,t,n){if(e.tag===3)jh(e,e,n);else for(;t!==null;){if(t.tag===3){jh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ra===null||!Ra.has(a))){e=jn(n,e),n=kf(2),a=Ca(t,n,2),a!==null&&(Mf(n,a,t,e),Ia(a,2),Qn(a));break}}t=t.return}}function Ec(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new fg;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(gc=!0,l.add(n),e=bg.bind(null,e,t,n),t.then(e,e))}function bg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,We===e&&(ze&n)===n&&(ct===4||ct===3&&(ze&62914560)===ze&&300>Ie()-eo?(qe&2)===0&&Pl(e,0):bc|=n,Wl===ze&&(Wl=0)),Qn(e)}function kh(e,t){t===0&&(t=Wa()),e=sl(e,t),e!==null&&(Ia(e,t),Qn(e))}function yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kh(e,n)}function vg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),kh(e,n)}function xg(e,t){return xe(e,t)}var oo=null,ti=null,jc=!1,ro=!1,kc=!1,Oa=0;function Qn(e){e!==ti&&e.next===null&&(ti===null?oo=ti=e:ti=ti.next=e),ro=!0,jc||(jc=!0,wg())}function Fi(e,t){if(!kc&&ro){kc=!0;do for(var n=!1,a=oo;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-Ae(42|e)+1)-1,i&=l&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Dh(a,i))}else i=ze,i=Oe(a,a===We?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ue(a,i)||(n=!0,Dh(a,i));a=a.next}while(n);kc=!1}}function Sg(){Mh()}function Mh(){ro=jc=!1;var e=0;Oa!==0&&Lg()&&(e=Oa);for(var t=Ie(),n=null,a=oo;a!==null;){var l=a.next,i=Ch(a,t);i===0?(a.next=null,n===null?oo=l:n.next=l,l===null&&(ti=n)):(n=a,(e!==0||(i&3)!==0)&&(ro=!0)),a=l}Tt!==0&&Tt!==5||Fi(e),Oa!==0&&(Oa=0)}function Ch(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-Ae(i),u=1<<o,y=l[o];y===-1?((u&n)===0||(u&a)!==0)&&(l[o]=jt(u,t)):y<=t&&(e.expiredLanes|=u),i&=~u}if(t=We,n=ze,n=Oe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xe(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ue(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Xe(a),El(n)){case 2:case 8:n=rn;break;case 32:n=cn;break;case 268435456:n=ve;break;default:n=cn}return a=Ah.bind(null,e),n=xe(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Xe(a),e.callbackPriority=2,e.callbackNode=null,2}function Ah(e,t){if(Tt!==0&&Tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var a=ze;return a=Oe(e,e===We?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(uh(e,a,t),Ch(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?Ah.bind(null,e):null)}function Dh(e,t){if(so())return null;uh(e,t,!0)}function wg(){Rg(function(){(qe&6)!==0?xe(Ja,Sg):Mh()})}function Mc(){if(Oa===0){var e=Ul;e===0&&(e=he,he<<=1,(he&261888)===0&&(he=256)),Oa=e}return Oa}function zh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pi(""+e)}function Lh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Tg(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=zh((l[zt]||null).action),o=a.submitter;o&&(t=(t=o[zt]||null)?zh(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new xs("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Oa!==0){var y=o?Lh(l,o):new FormData(l);Zr(n,{pending:!0,data:y,method:l.method,action:i},null,y)}}else typeof i=="function"&&(u.preventDefault(),y=o?Lh(l,o):new FormData(l),Zr(n,{pending:!0,data:y,method:l.method,action:i},i,y))},currentTarget:l}]})}}for(var Cc=0;Cc<ur.length;Cc++){var Ac=ur[Cc],Eg=Ac.toLowerCase(),jg=Ac[0].toUpperCase()+Ac.slice(1);_n(Eg,"on"+jg)}_n(rd,"onAnimationEnd"),_n(cd,"onAnimationIteration"),_n(ud,"onAnimationStart"),_n("dblclick","onDoubleClick"),_n("focusin","onFocus"),_n("focusout","onBlur"),_n(qp,"onTransitionRun"),_n(Yp,"onTransitionStart"),_n(Xp,"onTransitionCancel"),_n(dd,"onTransitionEnd"),Ut("onMouseEnter",["mouseout","mouseover"]),Ut("onMouseLeave",["mouseout","mouseover"]),Ut("onPointerEnter",["pointerout","pointerover"]),Ut("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki));function Nh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var u=a[o],y=u.instance,C=u.currentTarget;if(u=u.listener,y!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=C;try{i(l)}catch(O){Ts(O)}l.currentTarget=null,i=y}else for(o=0;o<a.length;o++){if(u=a[o],y=u.instance,C=u.currentTarget,u=u.listener,y!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=C;try{i(l)}catch(O){Ts(O)}l.currentTarget=null,i=y}}}}function Ce(e,t){var n=t[Pa];n===void 0&&(n=t[Pa]=new Set);var a=e+"__bubble";n.has(a)||(Rh(t,e,2,!1),n.add(a))}function Dc(e,t,n){var a=0;t&&(a|=4),Rh(n,e,a,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function zc(e){if(!e[co]){e[co]=!0,hs.forEach(function(n){n!=="selectionchange"&&(kg.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Dc("selectionchange",!1,t))}}function Rh(e,t,n,a){switch(cm(t)){case 2:var l=eb;break;case 8:l=tb;break;default:l=Qc}n=l.bind(null,t,n,e),l=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Lc(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var u=a.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=a.return;o!==null;){var y=o.tag;if((y===3||y===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=ga(u),o===null)return;if(y=o.tag,y===5||y===6||y===26||y===27){a=i=o;continue e}u=u.parentNode}}a=a.return}Hu(function(){var C=i,O=Ko(n),Y=[];e:{var D=fd.get(e);if(D!==void 0){var z=xs,ne=e;switch(e){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":z=vp;break;case"focusin":ne="focus",z=tr;break;case"focusout":ne="blur",z=tr;break;case"beforeblur":case"afterblur":z=tr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=wp;break;case rd:case cd:case ud:z=up;break;case dd:z=Ep;break;case"scroll":case"scrollend":z=ip;break;case"wheel":z=kp;break;case"copy":case"cut":case"paste":z=fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Xu;break;case"toggle":case"beforetoggle":z=Cp}var ge=(t&4)!==0,Ke=!ge&&(e==="scroll"||e==="scrollend"),E=ge?D!==null?D+"Capture":null:D;ge=[];for(var w=C,M;w!==null;){var q=w;if(M=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||M===null||E===null||(q=bi(w,E),q!=null&&ge.push(Ji(w,q,M))),Ke)break;w=w.return}0<ge.length&&(D=new z(D,ne,null,n,O),Y.push({event:D,listeners:ge}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",D&&n!==gi&&(ne=n.relatedTarget||n.fromElement)&&(ga(ne)||ne[Un]))break e;if((z||D)&&(D=O.window===O?O:(D=O.ownerDocument)?D.defaultView||D.parentWindow:window,z?(ne=n.relatedTarget||n.toElement,z=C,ne=ne?ga(ne):null,ne!==null&&(Ke=b(ne),ge=ne.tag,ne!==Ke||ge!==5&&ge!==27&&ge!==6)&&(ne=null)):(z=null,ne=C),z!==ne)){if(ge=qu,q="onMouseLeave",E="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ge=Xu,q="onPointerLeave",E="onPointerEnter",w="pointer"),Ke=z==null?D:ya(z),M=ne==null?D:ya(ne),D=new ge(q,w+"leave",z,n,O),D.target=Ke,D.relatedTarget=M,q=null,ga(O)===C&&(ge=new ge(E,w+"enter",ne,n,O),ge.target=M,ge.relatedTarget=Ke,q=ge),Ke=q,z&&ne)t:{for(ge=Mg,E=z,w=ne,M=0,q=E;q;q=ge(q))M++;q=0;for(var oe=w;oe;oe=ge(oe))q++;for(;0<M-q;)E=ge(E),M--;for(;0<q-M;)w=ge(w),q--;for(;M--;){if(E===w||w!==null&&E===w.alternate){ge=E;break t}E=ge(E),w=ge(w)}ge=null}else ge=null;z!==null&&_h(Y,D,z,ge,!1),ne!==null&&Ke!==null&&_h(Y,Ke,ne,ge,!0)}}e:{if(D=C?ya(C):window,z=D.nodeName&&D.nodeName.toLowerCase(),z==="select"||z==="input"&&D.type==="file")var He=Wu;else if(Ku(D))if(Iu)He=Hp;else{He=$p;var ie=_p}else z=D.nodeName,!z||z.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?C&&ot(C.elementType)&&(He=Wu):He=Op;if(He&&(He=He(e,C))){Ju(Y,He,n,O);break e}ie&&ie(e,D,C),e==="focusout"&&C&&D.type==="number"&&C.memoizedProps.value!=null&&N(D,"number",D.value)}switch(ie=C?ya(C):window,e){case"focusin":(Ku(ie)||ie.contentEditable==="true")&&(Ll=ie,or=C,ji=null);break;case"focusout":ji=or=Ll=null;break;case"mousedown":rr=!0;break;case"contextmenu":case"mouseup":case"dragend":rr=!1,sd(Y,n,O);break;case"selectionchange":if(Up)break;case"keydown":case"keyup":sd(Y,n,O)}var je;if(ar)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else zl?Zu(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(Gu&&n.locale!=="ko"&&(zl||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&zl&&(je=Bu()):(Sa=O,Io="value"in Sa?Sa.value:Sa.textContent,zl=!0)),ie=uo(C,Le),0<ie.length&&(Le=new Yu(Le,e,null,n,O),Y.push({event:Le,listeners:ie}),je?Le.data=je:(je=Fu(n),je!==null&&(Le.data=je)))),(je=Dp?zp(e,n):Lp(e,n))&&(Le=uo(C,"onBeforeInput"),0<Le.length&&(ie=new Yu("onBeforeInput","beforeinput",null,n,O),Y.push({event:ie,listeners:Le}),ie.data=je)),Tg(Y,e,C,n,O)}Nh(Y,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=bi(e,n),l!=null&&a.unshift(Ji(e,l,i)),l=bi(e,t),l!=null&&a.push(Ji(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Mg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _h(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var u=n,y=u.alternate,C=u.stateNode;if(u=u.tag,y!==null&&y===a)break;u!==5&&u!==26&&u!==27||C===null||(y=C,l?(C=bi(n,i),C!=null&&o.unshift(Ji(n,C,y))):l||(C=bi(n,i),C!=null&&o.push(Ji(n,C,y)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Cg=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function $h(e){return(typeof e=="string"?e:""+e).replace(Cg,`
`).replace(Ag,"")}function Oh(e,t){return t=$h(t),$h(e)===t}function Fe(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||me(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&me(e,""+a);break;case"className":tl(e,"class",a);break;case"tabIndex":tl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":tl(e,n,a);break;case"style":Qe(e,a,i);break;case"data":if(t!=="object"){tl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=pi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Fe(e,t,"name",l.name,l,null),Fe(e,t,"formEncType",l.formEncType,l,null),Fe(e,t,"formMethod",l.formMethod,l,null),Fe(e,t,"formTarget",l.formTarget,l,null)):(Fe(e,t,"encType",l.encType,l,null),Fe(e,t,"method",l.method,l,null),Fe(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=pi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Tn);break;case"onScroll":a!=null&&Ce("scroll",e);break;case"onScrollEnd":a!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=pi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),el(e,"popover",a);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":el(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_u.get(n)||n,el(e,n,a))}}function Nc(e,t,n,a,l,i){switch(n){case"style":Qe(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?me(e,a):(typeof a=="number"||typeof a=="bigint")&&me(e,""+a);break;case"onScroll":a!=null&&Ce("scroll",e);break;case"onScrollEnd":a!=null&&Ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ms.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[zt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):el(e,n,a)}}}function _t(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Fe(e,t,i,o,n,null)}}l&&Fe(e,t,"srcSet",n.srcSet,n,null),a&&Fe(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var u=i=o=l=null,y=null,C=null;for(a in n)if(n.hasOwnProperty(a)){var O=n[a];if(O!=null)switch(a){case"name":l=O;break;case"type":o=O;break;case"checked":y=O;break;case"defaultChecked":C=O;break;case"value":i=O;break;case"defaultValue":u=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:Fe(e,t,a,O,n,null)}}S(e,i,u,y,C,o,l,!1);return;case"select":Ce("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:Fe(e,t,l,u,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Z(e,!!a,t,!1):n!=null&&Z(e,!!a,n,!0);return;case"textarea":Ce("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:Fe(e,t,o,u,n,null)}ue(e,a,l,i);return;case"option":for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null)&&(y==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Fe(e,t,y,a,n,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(a=0;a<Ki.length;a++)Ce(Ki[a],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(a=n[C],a!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Fe(e,t,C,a,n,null)}return;default:if(ot(t)){for(O in n)n.hasOwnProperty(O)&&(a=n[O],a!==void 0&&Nc(e,t,O,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&Fe(e,t,u,a,n,null))}function Dg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,u=null,y=null,C=null,O=null;for(z in n){var Y=n[z];if(n.hasOwnProperty(z)&&Y!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":y=Y;default:a.hasOwnProperty(z)||Fe(e,t,z,null,a,Y)}}for(var D in a){var z=a[D];if(Y=n[D],a.hasOwnProperty(D)&&(z!=null||Y!=null))switch(D){case"type":i=z;break;case"name":l=z;break;case"checked":C=z;break;case"defaultChecked":O=z;break;case"value":o=z;break;case"defaultValue":u=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:z!==Y&&Fe(e,t,D,z,a,Y)}}h(e,o,u,y,C,O,i,l);return;case"select":z=o=u=D=null;for(i in n)if(y=n[i],n.hasOwnProperty(i)&&y!=null)switch(i){case"value":break;case"multiple":z=y;default:a.hasOwnProperty(i)||Fe(e,t,i,null,a,y)}for(l in a)if(i=a[l],y=n[l],a.hasOwnProperty(l)&&(i!=null||y!=null))switch(l){case"value":D=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==y&&Fe(e,t,l,i,a,y)}t=u,n=o,a=z,D!=null?Z(e,!!n,D,!1):!!a!=!!n&&(t!=null?Z(e,!!n,t,!0):Z(e,!!n,n?[]:"",!1));return;case"textarea":z=D=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Fe(e,t,u,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":D=l;break;case"defaultValue":z=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&Fe(e,t,o,l,a,i)}K(e,D,z);return;case"option":for(var ne in n)D=n[ne],n.hasOwnProperty(ne)&&D!=null&&!a.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Fe(e,t,ne,null,a,D));for(y in a)D=a[y],z=n[y],a.hasOwnProperty(y)&&D!==z&&(D!=null||z!=null)&&(y==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":Fe(e,t,y,D,a,z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in n)D=n[ge],n.hasOwnProperty(ge)&&D!=null&&!a.hasOwnProperty(ge)&&Fe(e,t,ge,null,a,D);for(C in a)if(D=a[C],z=n[C],a.hasOwnProperty(C)&&D!==z&&(D!=null||z!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Fe(e,t,C,D,a,z)}return;default:if(ot(t)){for(var Ke in n)D=n[Ke],n.hasOwnProperty(Ke)&&D!==void 0&&!a.hasOwnProperty(Ke)&&Nc(e,t,Ke,void 0,a,D);for(O in a)D=a[O],z=n[O],!a.hasOwnProperty(O)||D===z||D===void 0&&z===void 0||Nc(e,t,O,D,a,z);return}}for(var E in n)D=n[E],n.hasOwnProperty(E)&&D!=null&&!a.hasOwnProperty(E)&&Fe(e,t,E,null,a,D);for(Y in a)D=a[Y],z=n[Y],!a.hasOwnProperty(Y)||D===z||D==null&&z==null||Fe(e,t,Y,D,a,z)}function Hh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,u=l.duration;if(i&&u&&Hh(o)){for(o=0,u=l.responseEnd,a+=1;a<n.length;a++){var y=n[a],C=y.startTime;if(C>u)break;var O=y.transferSize,Y=y.initiatorType;O&&Hh(Y)&&(y=y.responseEnd,o+=O*(y<u?1:(u-C)/(y-C)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rc=null,_c=null;function fo(e){return e.nodeType===9?e:e.ownerDocument}function Bh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oc=null;function Lg(){var e=window.event;return e&&e.type==="popstate"?e===Oc?!1:(Oc=e,!0):(Oc=null,!1)}var qh=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(e){return Yh.resolve(null).then(e).catch(_g)}:qh;function _g(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function Xh(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),ii(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Wi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Wi(n);for(var i=n.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[pa]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Wi(e.ownerDocument.body);n=l}while(n);ii(t)}function Gh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Hc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hc(n),Cl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $g(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[pa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Dn(e.nextSibling),e===null)break}return null}function Og(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Dn(e.nextSibling),e===null))return null;return e}function Vh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Dn(e.nextSibling),e===null))return null;return e}function Bc(e){return e.data==="$?"||e.data==="$~"}function Uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var qc=null;function Qh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Dn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Zh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Fh(e,t,n){switch(t=fo(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Wi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Cl(e)}var zn=new Map,Kh=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=R.d;R.d={f:Bg,r:Ug,D:qg,C:Yg,L:Xg,m:Gg,X:Qg,S:Vg,M:Zg};function Bg(){var e=ua.f(),t=ao();return e||t}function Ug(e){var t=ba(e);t!==null&&t.tag===5&&t.type==="form"?ff(t):ua.r(e)}var ni=typeof document>"u"?null:document;function Jh(e,t,n){var a=ni;if(a&&typeof t=="string"&&t){var l=It(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Kh.has(l)||(Kh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),_t(t,"link",e),st(t),a.head.appendChild(t)))}}function qg(e){ua.D(e),Jh("dns-prefetch",e,null)}function Yg(e,t){ua.C(e,t),Jh("preconnect",e,t)}function Xg(e,t,n){ua.L(e,t,n);var a=ni;if(a&&e&&t){var l='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+It(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+It(n.imageSizes)+'"]')):l+='[href="'+It(e)+'"]';var i=l;switch(t){case"style":i=ai(e);break;case"script":i=li(e)}zn.has(i)||(e=$({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),zn.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Ii(i))||t==="script"&&a.querySelector(Pi(i))||(t=a.createElement("link"),_t(t,"link",e),st(t),a.head.appendChild(t)))}}function Gg(e,t){ua.m(e,t);var n=ni;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+It(a)+'"][href="'+It(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=li(e)}if(!zn.has(i)&&(e=$({rel:"modulepreload",href:e},t),zn.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pi(i)))return}a=n.createElement("link"),_t(a,"link",e),st(a),n.head.appendChild(a)}}}function Vg(e,t,n){ua.S(e,t,n);var a=ni;if(a&&e){var l=dn(a).hoistableStyles,i=ai(e);t=t||"default";var o=l.get(i);if(!o){var u={loading:0,preload:null};if(o=a.querySelector(Ii(i)))u.loading=5;else{e=$({rel:"stylesheet",href:e,"data-precedence":t},n),(n=zn.get(i))&&Yc(e,n);var y=o=a.createElement("link");st(y),_t(y,"link",e),y._p=new Promise(function(C,O){y.onload=C,y.onerror=O}),y.addEventListener("load",function(){u.loading|=1}),y.addEventListener("error",function(){u.loading|=2}),u.loading|=4,mo(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(i,o)}}}function Qg(e,t){ua.X(e,t);var n=ni;if(n&&e){var a=dn(n).hoistableScripts,l=li(e),i=a.get(l);i||(i=n.querySelector(Pi(l)),i||(e=$({src:e,async:!0},t),(t=zn.get(l))&&Xc(e,t),i=n.createElement("script"),st(i),_t(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Zg(e,t){ua.M(e,t);var n=ni;if(n&&e){var a=dn(n).hoistableScripts,l=li(e),i=a.get(l);i||(i=n.querySelector(Pi(l)),i||(e=$({src:e,async:!0,type:"module"},t),(t=zn.get(l))&&Xc(e,t),i=n.createElement("script"),st(i),_t(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Wh(e,t,n,a){var l=(l=ft.current)?ho(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ai(n.href),n=dn(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ai(n.href);var i=dn(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Ii(e)))&&!i._p&&(o.instance=i,o.state.loading=5),zn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},zn.set(e,n),i||Fg(l,e,n,o.state))),t&&a===null)throw Error(c(528,""));return o}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=li(n),n=dn(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ai(e){return'href="'+It(e)+'"'}function Ii(e){return'link[rel="stylesheet"]['+e+"]"}function Ih(e){return $({},e,{"data-precedence":e.precedence,precedence:null})}function Fg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),_t(t,"link",n),st(t),e.head.appendChild(t))}function li(e){return'[src="'+It(e)+'"]'}function Pi(e){return"script[async]"+e}function Ph(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(a)return t.instance=a,st(a),a;var l=$({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),st(a),_t(a,"style",l),mo(a,n.precedence,e),t.instance=a;case"stylesheet":l=ai(n.href);var i=e.querySelector(Ii(l));if(i)return t.state.loading|=4,t.instance=i,st(i),i;a=Ih(n),(l=zn.get(l))&&Yc(a,l),i=(e.ownerDocument||e).createElement("link"),st(i);var o=i;return o._p=new Promise(function(u,y){o.onload=u,o.onerror=y}),_t(i,"link",a),t.state.loading|=4,mo(i,n.precedence,e),t.instance=i;case"script":return i=li(n.src),(l=e.querySelector(Pi(i)))?(t.instance=l,st(l),l):(a=n,(l=zn.get(i))&&(a=$({},n),Xc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),st(l),_t(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,mo(a,n.precedence,e));return t.instance}function mo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var u=a[o];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var po=null;function em(e,t,n){if(po===null){var a=new Map,l=po=new Map;l.set(n,a)}else l=po,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[pa]||i[St]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=a.get(o);u?u.push(i):a.set(o,[i])}}return a}function tm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Kg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ai(a.href),i=t.querySelector(Ii(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=go.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,st(i);return}i=t.ownerDocument||t,a=Ih(a),(l=zn.get(l))&&Yc(a,l),i=i.createElement("link"),st(i);var o=i;o._p=new Promise(function(u,y){o.onload=u,o.onerror=y}),_t(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=go.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Gc=0;function Wg(e,t){return e.stylesheets&&e.count===0&&yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Gc===0&&(Gc=62500*zg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Gc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function yo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,t.forEach(Ig,e),bo=null,go.call(e))}function Ig(e,t){if(!(t.state.loading&4)){var n=bo.get(e);if(n)var a=n.get(null);else{n=new Map,bo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=go.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var es={$$typeof:se,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Pg(e,t,n,a,l,i,o,u,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=di(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.hiddenUpdates=di(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function am(e,t,n,a,l,i,o,u,y,C,O,Y){return e=new Pg(e,t,n,o,y,C,O,Y,u),t=1,i===!0&&(t|=24),i=mn(3,null,null,t),e.current=i,i.stateNode=e,t=Tr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Mr(i),e}function lm(e){return e?(e=_l,e):_l}function im(e,t,n,a,l,i){l=lm(l),a.context===null?a.context=l:a.pendingContext=l,a=Ma(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Ca(e,a,t),n!==null&&(ln(n,e,t),Li(n,e,t))}function sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vc(e,t){sm(e,t),(e=e.alternate)&&sm(e,t)}function om(e){if(e.tag===13||e.tag===31){var t=sl(e,67108864);t!==null&&ln(t,e,67108864),Vc(e,67108864)}}function rm(e){if(e.tag===13||e.tag===31){var t=vn();t=ma(t);var n=sl(e,t);n!==null&&ln(n,e,t),Vc(e,t)}}var vo=!0;function eb(e,t,n,a){var l=_.T;_.T=null;var i=R.p;try{R.p=2,Qc(e,t,n,a)}finally{R.p=i,_.T=l}}function tb(e,t,n,a){var l=_.T;_.T=null;var i=R.p;try{R.p=8,Qc(e,t,n,a)}finally{R.p=i,_.T=l}}function Qc(e,t,n,a){if(vo){var l=Zc(a);if(l===null)Lc(e,t,a,xo,n),um(e,a);else if(ab(l,e,t,n,a))a.stopPropagation();else if(um(e,a),t&4&&-1<nb.indexOf(e)){for(;l!==null;){var i=ba(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=De(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var y=1<<31-Ae(o);u.entanglements[1]|=y,o&=~y}Qn(i),(qe&6)===0&&(to=Ie()+500,Fi(0))}}break;case 31:case 13:u=sl(i,2),u!==null&&ln(u,i,2),ao(),Vc(i,2)}if(i=Zc(a),i===null&&Lc(e,t,a,xo,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Lc(e,t,a,null,n)}}function Zc(e){return e=Ko(e),Fc(e)}var xo=null;function Fc(e){if(xo=null,e=ga(e),e!==null){var t=b(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xo=e,null}function cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case Ja:return 2;case rn:return 8;case cn:case Hn:return 32;case ve:return 268435456;default:return 32}default:return 32}}var Kc=!1,Ba=null,Ua=null,qa=null,ts=new Map,ns=new Map,Ya=[],nb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function um(e,t){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":ts.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(t.pointerId)}}function as(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ba(t),t!==null&&om(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ab(e,t,n,a,l){switch(t){case"focusin":return Ba=as(Ba,e,t,n,a,l),!0;case"dragenter":return Ua=as(Ua,e,t,n,a,l),!0;case"mouseover":return qa=as(qa,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return ts.set(i,as(ts.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,ns.set(i,as(ns.get(i)||null,e,t,n,a,l)),!0}return!1}function dm(e){var t=ga(e.target);if(t!==null){var n=b(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,kl(e.priority,function(){rm(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,kl(e.priority,function(){rm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);gi=a,n.target.dispatchEvent(a),gi=null}else return t=ba(n),t!==null&&om(t),e.blockedOn=n,!1;t.shift()}return!0}function fm(e,t,n){So(e)&&n.delete(t)}function lb(){Kc=!1,Ba!==null&&So(Ba)&&(Ba=null),Ua!==null&&So(Ua)&&(Ua=null),qa!==null&&So(qa)&&(qa=null),ts.forEach(fm),ns.forEach(fm)}function wo(e,t){e.blockedOn===t&&(e.blockedOn=null,Kc||(Kc=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,lb)))}var To=null;function hm(e){To!==e&&(To=e,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){To===e&&(To=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Fc(a||n)===null)continue;break}var i=ba(n);i!==null&&(e.splice(t,3),t-=3,Zr(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function ii(e){function t(y){return wo(y,e)}Ba!==null&&wo(Ba,e),Ua!==null&&wo(Ua,e),qa!==null&&wo(qa,e),ts.forEach(t),ns.forEach(t);for(var n=0;n<Ya.length;n++){var a=Ya[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ya.length&&(n=Ya[0],n.blockedOn===null);)dm(n),n.blockedOn===null&&Ya.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[zt]||null;if(typeof i=="function")o||hm(n);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[zt]||null)u=o.formAction;else if(Fc(l)!==null)continue}else u=o.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),hm(n)}}}function mm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Jc(e){this._internalRoot=e}Eo.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=vn();im(n,a,e,t,null,null)},Eo.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;im(e.current,2,null,e,null,null),ao(),t[Un]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=jl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ya.length&&t!==0&&t<Ya[n].priority;n++);Ya.splice(n,0,e),n===0&&dm(e)}};var pm=r.version;if(pm!=="19.2.4")throw Error(c(527,pm,"19.2.4"));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=X(t),e=e!==null?H(e):null,e=e===null?null:e.stateNode,e};var ib={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Pe=jo.inject(ib),ye=jo}catch{}}return is.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,a="",l=wf,i=Tf,o=Ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=am(e,1,!1,null,null,n,a,null,l,i,o,mm),e[Un]=t.current,zc(e),new Jc(t)},is.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var a=!1,l="",i=wf,o=Tf,u=Ef,y=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),t=am(e,1,!0,t,n??null,a,l,y,i,o,u,mm),t.context=lm(null),n=t.current,a=vn(),a=ma(a),l=Ma(a),l.callback=null,Ca(n,l,a),n=a,t.current.lanes=n,Ia(t,n),Qn(t),e[Un]=t.current,zc(e),new Eo(t)},is.version="19.2.4",is}var jm;function ly(){if(jm)return tu.exports;jm=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(r){console.error(r)}}return m(),tu.exports=ay(),tu.exports}var iy=ly();const sy=Cu(iy);function oy({onNew:m,onOpen:r,onSave:d,onPreviewChange:c,currentPreviewMode:f,onImport:b,onExport:p,onAbout:v,onMarkdownHelp:j,onSettings:X,onWritingMode:H,currentWritingMode:$,hasCurrentFile:k,hasUnsavedChanges:V,hasTextSelected:B,hasFiles:F,fileCount:G,onStyleChange:x,onEditAction:W,files:se,currentFileId:A,onSwitchFile:U,onCloseFile:T,onShowCommandPalette:L,showLintGutter:Q,onLinterToggle:I,showLineNumbers:le,onLineNumbersToggle:te,showHeadingGutter:ce,onHeadingGutterToggle:de,appMode:J,onAppModeChange:P,activeRightTab:_,onTogglePanel:R,showWritingStats:ae,onWritingStatsToggle:Se,floatingPanels:be=[],dockedPanels:pe=[],canUndo:ke=!1,canRedo:fe=!1,showCommandPalette:we,showMarkdownHelp:Ot}){const[ft,vt]=g.useState(!1),[lt,xt]=g.useState(!1),[Ee,ht]=g.useState({topLine:!1,bottomLine:!1,titleBar:!1}),[qt,wl]=g.useState({topLine:[],bottomLine:[],titleBar:[]}),At=g.useRef(null),Yt=g.useRef(null),Ft=g.useRef(null);g.useEffect(()=>{if(!ft)return;const xe=Xe=>{At.current&&!At.current.contains(Xe.target)&&vt(!1)};return document.addEventListener("mousedown",xe),()=>document.removeEventListener("mousedown",xe)},[ft]),g.useEffect(()=>{if(!Yt.current)return;const xe=()=>{if(!Yt.current)return;const Dt=Yt.current.querySelector(".ribbon-title-bar"),Ja=Yt.current.querySelector(".ribbon-top-line"),rn=Yt.current.querySelector(".ribbon-bottom-line"),cn={titleBar:!1,topLine:!1,bottomLine:!1},Hn={titleBar:[],topLine:[],bottomLine:[]};if(Dt){const ve=Dt.querySelector(".ribbon-title-left");if(ve){ve.querySelectorAll("button[aria-label], .fui-ToolbarDivider").forEach($e=>{$e.style.display=""});const mt=ve.querySelector(".ribbon-file-pill"),Pe=mt?.querySelector(".ribbon-file-pill-name");mt&&mt.classList.remove("compact"),Pe&&(Pe.style.setProperty("display","inline-block","important"),Pe.style.setProperty("visibility","visible","important"),Pe.style.setProperty("max-width","none","important"));const ye=ve.style.width,Bt=ve.style.flex,Ae=ve.style.overflow,Jt=ve.clientWidth;ve.style.flex="0 0 auto",ve.style.width="max-content",ve.style.overflow="visible";const un=ve.offsetWidth;ve.style.flex=Bt,ve.style.width=ye,ve.style.overflow=Ae;const Xt=un>Jt-5;Xt!==lt&&xt(Xt),Xt?(mt&&mt.classList.add("compact"),Pe&&(Pe.style.display="none")):(mt&&mt.classList.remove("compact"),Pe&&(Pe.style.display=""));const he=ve.scrollWidth>ve.clientWidth+2;if(cn.titleBar=he,he){const $e=Array.from(ve.querySelectorAll("button[aria-label]")).filter(Oe=>Oe.getAttribute("aria-label")!=="More options"),De=ve.getBoundingClientRect().right-100;for(let Oe=$e.length-1;Oe>=0;Oe--){const Ue=$e[Oe],jt=Ue.getBoundingClientRect(),Wa=Ue.getAttribute("aria-label");Wa&&jt.right>De&&(Hn.titleBar.unshift({ariaLabel:Wa,type:"title"}),Ue.style.display="none")}}}}if(Ja){const ve=Ja.querySelector(".ribbon-section-content");if(ve){ve.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]').forEach(he=>{he.style.display=""});const mt=ve.querySelectorAll(".ribbon-group");mt.forEach(he=>{const $e=he.querySelectorAll("button[aria-label], select"),it=Array.from($e).some(De=>De.style.display!=="none");he.style.display=it?"":"none"});const Pe=ve.style.overflow;ve.style.overflow="visible";const ye=ve.scrollWidth,Bt=ve.clientWidth,Ae=ye>Bt+2;if(cn.topLine=Ae,Ae){const he=Array.from(ve.querySelectorAll("button[aria-label], .ribbon-group select")).filter(De=>De.getAttribute("aria-label")!=="More options"),it=ve.getBoundingClientRect().right-80;for(let De=he.length-1;De>=0;De--){const Oe=he[De],Ue=Oe.getBoundingClientRect(),jt=Oe.getAttribute("aria-label");jt&&Ue.right>it&&(Hn.topLine.unshift({ariaLabel:jt,type:"top"}),Oe.style.display="none")}mt.forEach(De=>{const Oe=De.querySelectorAll("button[aria-label], select"),Ue=Array.from(Oe).some(jt=>jt.style.display!=="none");De.style.display=Ue?"":"none"})}const Jt=Array.from(ve.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]')).filter(he=>he.getAttribute("aria-label")!=="More options"&&he.offsetParent!==null);let un=!1;for(let he=Jt.length-1;he>=0;he--){const $e=Jt[he];$e.classList.contains("fui-ToolbarDivider")||$e.getAttribute("role")==="separator"||$e.classList.contains("ribbon-divider")?un||($e.style.display="none"):$e.style.display!=="none"&&(un=!0)}let Xt=!0;Jt.forEach(he=>{if(he.style.display==="none")return;he.classList.contains("fui-ToolbarDivider")||he.getAttribute("role")==="separator"||he.classList.contains("ribbon-divider")?Xt?he.style.display="none":Xt=!0:Xt=!1}),ve.style.overflow=Pe}}if(rn){const ve=rn.querySelector(".ribbon-section-content");if(ve){ve.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]').forEach(he=>{he.style.display=""});const mt=ve.querySelectorAll(".ribbon-group");mt.forEach(he=>{const $e=he.querySelectorAll("button[aria-label], select"),it=Array.from($e).some(De=>De.style.display!=="none");he.style.display=it?"":"none"});const Pe=ve.style.overflow;ve.style.overflow="visible";const ye=ve.scrollWidth,Bt=ve.clientWidth,Ae=ye>Bt+2;if(cn.bottomLine=Ae,Ae){const he=Array.from(ve.querySelectorAll("button[aria-label], .ribbon-group select")).filter(De=>De.getAttribute("aria-label")!=="More options"),it=ve.getBoundingClientRect().right-80;for(let De=he.length-1;De>=0;De--){const Oe=he[De],Ue=Oe.getBoundingClientRect(),jt=Oe.getAttribute("aria-label")||(Oe.tagName==="SELECT"?"Heading Style":null);jt&&Ue.right>it&&(Hn.bottomLine.unshift({ariaLabel:jt,type:"bottom"}),Oe.style.display="none")}mt.forEach(De=>{const Oe=De.querySelectorAll("button[aria-label], select"),Ue=Array.from(Oe).some(jt=>jt.style.display!=="none");De.style.display=Ue?"":"none"})}const Jt=Array.from(ve.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]')).filter(he=>he.getAttribute("aria-label")!=="More options"&&he.offsetParent!==null);let un=!1;for(let he=Jt.length-1;he>=0;he--){const $e=Jt[he];$e.classList.contains("fui-ToolbarDivider")||$e.getAttribute("role")==="separator"||$e.classList.contains("ribbon-divider")?un||($e.style.display="none"):$e.style.display!=="none"&&(un=!0)}let Xt=!0;Jt.forEach(he=>{if(he.style.display==="none")return;he.classList.contains("fui-ToolbarDivider")||he.getAttribute("role")==="separator"||he.classList.contains("ribbon-divider")?Xt?he.style.display="none":Xt=!0:Xt=!1}),ve.style.overflow=Pe}}ht(cn),wl(Hn)};xe();const Xe=[setTimeout(xe,100),setTimeout(xe,300),setTimeout(xe,1e3)];Ft.current=new ResizeObserver(()=>{requestAnimationFrame(xe)}),Ft.current.observe(Yt.current),Yt.current.querySelectorAll(".ribbon-section-content").forEach(Dt=>{Ft.current.observe(Dt)});const Et=Yt.current.querySelector(".ribbon-title-left");Et&&Ft.current.observe(Et);const Ie=()=>{requestAnimationFrame(xe)};return window.addEventListener("resize",Ie),()=>{Xe.forEach(Dt=>clearTimeout(Dt)),Ft.current&&Ft.current.disconnect(),window.removeEventListener("resize",Ie)}},[F,k,se,A,G,lt,J,f,Q,be,pe,B]);const ha=se?.find(xe=>xe.id===A),Tl=xe=>{const Xe={New:{icon:s.jsx(oi,{}),onClick:()=>m("empty"),disabled:!1,toggleable:!1},"Open File":{icon:s.jsx(si,{}),onClick:r,disabled:!1,toggleable:!1},Open:{icon:s.jsx(si,{}),onClick:r,disabled:!1,toggleable:!1},Save:{icon:s.jsx(lu,{}),onClick:d,disabled:!V,toggleable:!1},Import:{icon:s.jsx(iu,{}),onClick:b,disabled:!1,toggleable:!1},Export:{icon:s.jsx(Ka,{}),onClick:()=>{},disabled:!F,toggleable:!1},About:{icon:s.jsx(Lo,{}),onClick:v,disabled:!1,toggleable:!1},"Markdown Syntax Reference":{icon:s.jsx(bm,{}),onClick:j,disabled:!1,toggleable:!0,checked:Ot},Settings:{icon:s.jsx(su,{}),onClick:X,disabled:!1,toggleable:!1},"Command Palette":{icon:s.jsx(Ic,{}),onClick:L,disabled:!1,toggleable:!0,checked:we},"Edit Mode":{icon:s.jsx(ko,{}),onClick:()=>P("edit"),disabled:!k,toggleable:!0,checked:J==="edit"},"Read Mode":{icon:s.jsx(gm,{}),onClick:()=>P("view"),disabled:!k,toggleable:!0,checked:J==="view"}},Ht={Undo:{icon:s.jsx(rs,{}),onClick:()=>W&&W("undo"),disabled:!k||!ke,toggleable:!1},Redo:{icon:s.jsx(No,{}),onClick:()=>W&&W("redo"),disabled:!k||!fe,toggleable:!1},Cut:{icon:s.jsx(ou,{}),onClick:()=>W&&W("cut"),disabled:!B,toggleable:!1},Copy:{icon:s.jsx(ru,{}),onClick:()=>W&&W("copy"),disabled:!B,toggleable:!1},Paste:{icon:s.jsx(cu,{}),onClick:()=>W&&W("paste"),disabled:!k,toggleable:!1},Find:{icon:s.jsx(uu,{}),onClick:()=>W&&W("find"),disabled:!k,toggleable:!1},Replace:{icon:s.jsx(Ro,{}),onClick:()=>W&&W("replace"),disabled:!k,toggleable:!1},Linter:{icon:s.jsx(vm,{}),onClick:()=>I&&I(),disabled:!k,toggleable:!0,checked:Q},"Toggle Line#":{icon:s.jsx(ym,{}),onClick:()=>te&&te(),disabled:!k,toggleable:!0,checked:le},"Toggle Fold Gutter":{icon:s.jsx(Wc,{}),onClick:()=>de&&de(),disabled:!k,toggleable:!0,checked:ce},"Toggle Preview":{icon:s.jsx(xm,{}),onClick:()=>R("preview"),disabled:!k,toggleable:!0,checked:be.includes("preview")||pe.includes("preview")},"Toggle Outline":{icon:s.jsx(xl,{}),onClick:()=>R("outline"),disabled:!k,toggleable:!0,checked:be.includes("outline")||pe.includes("outline")},"Toggle Property":{icon:s.jsx(Ao,{}),onClick:()=>R("property"),disabled:!k,toggleable:!0,checked:be.includes("property")||pe.includes("property")},"Toggle MetaData":{icon:s.jsx(Ao,{}),onClick:()=>R("metadata"),disabled:!k,toggleable:!0,checked:be.includes("metadata")||pe.includes("metadata")},"Toggle History":{icon:s.jsx(_o,{}),onClick:()=>R("history"),disabled:!k,toggleable:!0,checked:be.includes("history")||pe.includes("history")},"Toggle Snippet":{icon:s.jsx(ci,{}),onClick:()=>R("snippet"),disabled:!k,toggleable:!0,checked:be.includes("snippet")||pe.includes("snippet")},"Zen Mode":{icon:s.jsx(fu,{}),onClick:()=>H("zen"),disabled:!k,toggleable:!0,checked:$.zen.enabled},"Focus Mode":{icon:s.jsx(hu,{}),onClick:()=>H("focus"),disabled:!k,toggleable:!0,checked:$.focus.enabled},"Typewriter Mode":{icon:s.jsx(mu,{}),onClick:()=>H("typewriter"),disabled:!k,toggleable:!0,checked:$.typewriter.enabled},"Toggle Stats":{icon:s.jsx(du,{}),onClick:()=>Se&&Se(),disabled:!k,toggleable:!0,checked:ae},"WYSIWYG Mode":{icon:s.jsx(Sm,{}),onClick:()=>H("wysiwyg"),disabled:!k,toggleable:!0,checked:$.wysiwyg}},Et={"Heading Style":{icon:s.jsx(ko,{}),onClick:()=>{},disabled:!B,toggleable:!1},Bold:{icon:s.jsx(fa,{}),onClick:()=>x&&x("bold"),disabled:!B,toggleable:!1},Italic:{icon:s.jsx(pu,{}),onClick:()=>x&&x("italic"),disabled:!B,toggleable:!1},Code:{icon:s.jsx(ri,{}),onClick:()=>x&&x("code"),disabled:!B,toggleable:!1},Strikethrough:{icon:s.jsx(gu,{}),onClick:()=>x&&x("strikethrough"),disabled:!B,toggleable:!1},"Bullet List":{icon:s.jsx($o,{}),onClick:()=>x&&x("bullet"),disabled:!B,toggleable:!1},"Numbered List":{icon:s.jsx(xl,{}),onClick:()=>x&&x("numbered"),disabled:!B,toggleable:!1},Quote:{icon:s.jsx(vu,{}),onClick:()=>x&&x("quote"),disabled:!B,toggleable:!1},Link:{icon:s.jsx(xu,{}),onClick:()=>x&&x("link"),disabled:!B,toggleable:!1},Image:{icon:s.jsx(Su,{}),onClick:()=>x&&x("image"),disabled:!B,toggleable:!1},Table:{icon:s.jsx(wu,{}),onClick:()=>x&&x("table"),disabled:!k,toggleable:!1},"Code Block":{icon:s.jsx(ri,{}),onClick:()=>x&&x("codeblock"),disabled:!k,toggleable:!1},HR:{icon:s.jsx(ju,{}),onClick:()=>x&&x("hr"),disabled:!k,toggleable:!1},"Task List":{icon:s.jsx(Eu,{}),onClick:()=>x&&x("tasklist"),disabled:!k,toggleable:!1},Footnote:{icon:s.jsx(Tu,{}),onClick:()=>x&&x("footnote"),disabled:!k,toggleable:!1},Highlight:{icon:s.jsx(Ic,{}),onClick:()=>x&&x("highlight"),disabled:!B,toggleable:!1},Subscript:{icon:s.jsx(bu,{}),onClick:()=>x&&x("subscript"),disabled:!B,toggleable:!1},Superscript:{icon:s.jsx(yu,{}),onClick:()=>x&&x("superscript"),disabled:!B,toggleable:!1},Snippet:{icon:s.jsx(ci,{}),onClick:()=>R("snippet"),disabled:!k,toggleable:!0,checked:be.includes("snippet")||pe.includes("snippet")}},Ie={...Xe[xe],...Ht[xe],...Et[xe]};return Object.keys(Ie).length>0?Ie:null},Kt=(xe,Xe)=>{if(xe.ariaLabel==="Open File"&&se)return s.jsxs(_m.Fragment,{children:[s.jsx(Mo,{}),s.jsx(Je,{icon:s.jsx(si,{}),onClick:r,children:"Open File from Computer..."}),se.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(Mo,{}),s.jsx("div",{className:"menu-section-header",style:{padding:"4px 12px",fontSize:"11px",fontWeight:"bold",color:"var(--colorNeutralForeground3)",textTransform:"uppercase"},children:"Opened Files"}),se.map(Et=>s.jsx(Je,{icon:s.jsx($m,{}),className:Et.id===A?"ribbon-overflow-checked":"",onClick:()=>U&&U(Et.id),children:Et.name},`file-${Et.id}`))]}),s.jsx(Mo,{})]},`files-group-${Xe}`);if(xe.ariaLabel==="Heading Style")return s.jsxs(Ga,{children:[s.jsx(Va,{children:s.jsx(Je,{icon:s.jsx(ko,{}),disabled:!B,children:"Heading Style"})}),s.jsx(Qa,{children:s.jsxs(Za,{children:[s.jsx(Je,{onClick:()=>x&&x("h1"),children:"Heading 1"}),s.jsx(Je,{onClick:()=>x&&x("h2"),children:"Heading 2"}),s.jsx(Je,{onClick:()=>x&&x("h3"),children:"Heading 3"}),s.jsx(Je,{onClick:()=>x&&x("h4"),children:"Heading 4"}),s.jsx(Je,{onClick:()=>x&&x("h5"),children:"Heading 5"}),s.jsx(Je,{onClick:()=>x&&x("h6"),children:"Heading 6"})]})})]},Xe);const Ht=Tl(xe.ariaLabel);return Ht?s.jsx(Je,{icon:Ht.icon,"aria-label":xe.ariaLabel,className:Ht.toggleable&&Ht.checked?"ribbon-overflow-checked":"",onClick:Ht.onClick,disabled:Ht.disabled,children:xe.ariaLabel},Xe):null};return s.jsxs("div",{className:"ribbon-menu",ref:Yt,children:[s.jsxs("div",{className:"ribbon-title-bar",children:[s.jsxs("div",{className:"ribbon-title-left",children:[s.jsx("div",{className:"ribbon-title-file-ops",children:s.jsxs(Ln,{children:[s.jsxs(Ga,{children:[s.jsx(re,{content:"Create a new markdown document",relationship:"label",children:s.jsx(Va,{disableButtonEnhancement:!0,children:s.jsx(Ne,{"aria-label":"New",icon:s.jsx(oi,{}),appearance:"secondary"})})}),s.jsx(Qa,{children:s.jsxs(Za,{children:[s.jsx(Je,{onClick:()=>m("empty"),children:"Blank Document"}),s.jsx(Je,{onClick:()=>m("meeting"),children:"Meeting Notes Template"}),s.jsx(Je,{onClick:()=>m("blog"),children:"Blog Post Template"}),s.jsx(Je,{onClick:()=>m("readme"),children:"README Template"})]})})]}),k&&s.jsx(re,{content:V?"Save current file":"No changes to save",relationship:"label",children:s.jsx(Ne,{"aria-label":"Save",icon:s.jsx(lu,{}),onClick:d,appearance:"secondary",disabled:!V})}),s.jsx(re,{content:"Import markdown files",relationship:"label",children:s.jsx(Ne,{"aria-label":"Import",icon:s.jsx(iu,{}),onClick:b,appearance:"secondary"})}),F&&s.jsxs(Ga,{children:[s.jsx(re,{content:"Export document",relationship:"label",children:s.jsx(Va,{children:s.jsx(Ne,{"aria-label":"Export",icon:s.jsx(Ka,{}),appearance:"secondary"})})}),s.jsx(Qa,{children:s.jsxs(Za,{children:[s.jsx(Je,{onClick:()=>p("md"),children:"Export as Markdown (.md)"}),s.jsx(Je,{onClick:()=>p("html"),children:"Export as HTML (.html)"}),s.jsx(Je,{onClick:()=>p("pdf"),children:"Print / Export as PDF"}),s.jsx(Je,{onClick:()=>p("doc"),children:"Export as Word (.doc)"}),s.jsx(Je,{onClick:()=>p("epub"),children:"Export as EPUB (.epub)"}),s.jsx(Je,{onClick:()=>p("pptx"),children:"Export as PowerPoint (.pptx)"})]})})]})]})}),s.jsx(Nn,{}),s.jsxs("div",{className:"ribbon-file-breadcrumb",ref:At,children:[s.jsxs("button",{className:`ribbon-file-pill ${lt?"compact":""}`,onClick:()=>vt(xe=>!xe),"aria-haspopup":"listbox","aria-expanded":ft,"aria-label":"Open File",children:[s.jsx(si,{style:{fontSize:"16px",opacity:.8}}),s.jsx("span",{className:"ribbon-file-pill-name",children:ha?ha.name:"Open File"}),V&&s.jsx("span",{className:"ribbon-file-unsaved-dot","aria-label":"Unsaved changes"}),s.jsx(Wc,{className:`ribbon-file-chevron ${ft?"open":""}`})]}),ft&&s.jsxs("div",{className:"ribbon-file-dropdown",role:"listbox","aria-label":"Open files",style:{position:"fixed",top:At.current?At.current.getBoundingClientRect().bottom+4:0,left:At.current?At.current.getBoundingClientRect().left:0,zIndex:99999},children:[s.jsxs("div",{className:"ribbon-file-dropdown-item",onClick:()=>{r(),vt(!1)},children:[s.jsx(si,{style:{fontSize:"16px"}}),s.jsx("span",{className:"ribbon-file-dropdown-item-name",children:"Open file from computer..."})]}),se&&se.length>0&&s.jsx("div",{className:"ribbon-file-dropdown-header",children:"Opened Files"}),se&&se.length>0?se.map(xe=>s.jsxs("div",{className:`ribbon-file-dropdown-item ${xe.id===A?"active":""}`,role:"option","aria-selected":xe.id===A,onClick:()=>{U&&U(xe.id),vt(!1)},children:[s.jsx("span",{className:"ribbon-file-dropdown-item-name",children:xe.name}),s.jsx("button",{className:"ribbon-file-dropdown-close","aria-label":`Close ${xe.name}`,onClick:Xe=>{Xe.stopPropagation(),T&&T(xe.id),se.length<=1&&vt(!1)},children:s.jsx(Ho,{})})]},xe.id)):s.jsx("div",{className:"ribbon-file-dropdown-empty",children:"No open files"})]})]})]}),s.jsxs("div",{className:"ribbon-title-actions",children:[s.jsxs(Ln,{children:[k&&s.jsx(re,{content:J==="view"?"Switch to Edit Mode":"Switch to Read Mode",relationship:"label",children:s.jsx(Ne,{"aria-label":J==="view"?"Edit Mode":"Read Mode",icon:J==="view"?s.jsx(ko,{}):s.jsx(gm,{}),onClick:()=>P(J==="view"?"edit":"view"),appearance:"secondary"})}),s.jsx(re,{content:"Command Palette (Ctrl+P)",relationship:"label",children:s.jsx(Qt,{"aria-label":"Command Palette",icon:s.jsx(Ic,{}),onClick:L,checked:we,appearance:"secondary"})}),s.jsx(re,{content:"Editor settings",relationship:"label",children:s.jsx(Ne,{"aria-label":"Settings",icon:s.jsx(su,{}),onClick:X,appearance:"secondary"})}),s.jsx(re,{content:"Markdown Syntax Reference",relationship:"label",children:s.jsx(Qt,{"aria-label":"Markdown Syntax Reference",icon:s.jsx(bm,{}),onClick:j,checked:Ot,appearance:"secondary"})}),s.jsx(re,{content:"About MarkdownStudio",relationship:"label",children:s.jsx(Ne,{"aria-label":"About",icon:s.jsx(Lo,{}),onClick:v,appearance:"secondary"})})]}),Ee.titleBar&&qt.titleBar.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(Nn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ga,{children:[s.jsx(Va,{children:s.jsx(Ne,{"aria-label":"More options",icon:s.jsx(Pc,{}),appearance:"secondary"})}),s.jsx(Qa,{children:s.jsx(Za,{children:qt.titleBar.map(Kt)})})]})})]})]})]}),k&&s.jsx("div",{className:"ribbon-section ribbon-top-line",children:s.jsxs("div",{className:"ribbon-section-content",children:[J==="edit"&&s.jsxs("div",{className:"ribbon-group",children:[s.jsxs(Ln,{children:[s.jsx(re,{content:"Undo (Ctrl+Z)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Undo",icon:s.jsx(rs,{}),onClick:()=>W&&W("undo"),appearance:"secondary",disabled:!k||!ke})}),s.jsx(re,{content:"Redo (Ctrl+Y)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Redo",icon:s.jsx(No,{}),onClick:()=>W&&W("redo"),appearance:"secondary",disabled:!k||!fe})})]}),s.jsxs(Ln,{children:[s.jsx(re,{content:"Cut (Ctrl+X)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Cut",icon:s.jsx(ou,{}),onClick:()=>W&&W("cut"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Copy (Ctrl+C)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Copy",icon:s.jsx(ru,{}),onClick:()=>W&&W("copy"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Paste (Ctrl+V)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Paste",icon:s.jsx(cu,{}),onClick:()=>W&&W("paste"),appearance:"secondary",disabled:!k})})]}),s.jsx(Nn,{}),s.jsxs(Ln,{children:[s.jsx(re,{content:"Find (Ctrl+F)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Find",icon:s.jsx(uu,{}),onClick:()=>W&&W("find"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Find & Replace (Ctrl+H)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Replace",icon:s.jsx(Ro,{}),onClick:()=>W&&W("replace"),appearance:"secondary",disabled:!k})})]})]}),J==="edit"&&s.jsx(Nn,{}),J==="edit"&&s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ln,{children:[s.jsx(re,{content:"Toggle rendering line number",relationship:"label",children:s.jsx(Qt,{"aria-label":"Toggle Line#",icon:s.jsx(ym,{}),checked:le,onClick:()=>te&&te(),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Toggle fold gutter (expand/collapse heading)",relationship:"label",children:s.jsx(Qt,{"aria-label":"Toggle Fold Gutter",icon:s.jsx(Wc,{}),checked:ce,onClick:()=>de&&de(),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Toggle linter gutter",relationship:"label",children:s.jsx(Qt,{"aria-label":"Linter",icon:s.jsx(vm,{}),checked:Q,onClick:()=>I&&I(),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:k?"Toggle writing statistics line":"No file open",relationship:"label",children:s.jsx(Qt,{"aria-label":"Toggle Stats",icon:s.jsx(du,{}),checked:ae,onClick:()=>Se&&Se(),appearance:"secondary",disabled:!k})}),s.jsx(Nn,{}),s.jsx(re,{content:"Toggle Preview",relationship:"label",children:s.jsx(Qt,{"aria-label":"Toggle Preview",icon:s.jsx(xm,{}),checked:be.includes("preview")||pe.includes("preview"),onClick:()=>R("preview"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Toggle Outline",relationship:"label",children:s.jsx(Qt,{"aria-label":"Toggle Outline",icon:s.jsx(xl,{}),checked:be.includes("outline")||pe.includes("outline"),onClick:()=>R("outline"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Toggle Property",relationship:"label",children:s.jsx(Qt,{"aria-label":"Toggle Property",icon:s.jsx(Ao,{}),checked:be.includes("property")||pe.includes("property"),onClick:()=>R("property"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Toggle History",relationship:"label",children:s.jsx(Qt,{"aria-label":"Toggle History",icon:s.jsx(_o,{}),checked:be.includes("history")||pe.includes("history"),onClick:()=>R("history"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Toggle Snippet",relationship:"label",children:s.jsx(Qt,{"aria-label":"Toggle Snippet",icon:s.jsx(ci,{}),checked:be.includes("snippet")||pe.includes("snippet"),onClick:()=>R("snippet"),appearance:"secondary",disabled:!k})})]})}),J==="edit"&&s.jsx(Nn,{}),J==="edit"&&s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ln,{children:[s.jsx(re,{content:k?"Zen mode - hide all UI distractions":"No file open",relationship:"label",children:s.jsx(Qt,{"aria-label":"Zen Mode",icon:s.jsx(fu,{}),checked:$.zen,onClick:()=>H("zen"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:k?"Focus mode - minimize distractions":"No file open",relationship:"label",children:s.jsx(Qt,{"aria-label":"Focus Mode",icon:s.jsx(hu,{}),checked:$.focus,onClick:()=>H("focus"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:k?"Typewriter mode - keep current line centered":"No file open",relationship:"label",children:s.jsx(Qt,{"aria-label":"Typewriter Mode",icon:s.jsx(mu,{}),checked:$.typewriter.enabled,onClick:()=>H("typewriter"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:k?"WYSIWYG Mode - render markdown in place":"No file open",relationship:"label",children:s.jsx(Qt,{"aria-label":"WYSIWYG Mode",icon:s.jsx(Sm,{}),checked:$.wysiwyg,onClick:()=>H("wysiwyg"),appearance:"secondary",disabled:!k})})]})}),Ee.topLine&&qt.topLine.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(Nn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ga,{children:[s.jsx(Va,{children:s.jsx(Ne,{"aria-label":"More options",icon:s.jsx(Pc,{}),appearance:"secondary"})}),s.jsx(Qa,{children:s.jsx(Za,{children:qt.topLine.map(Kt)})})]})})]})]})}),k&&J==="edit"&&s.jsx("div",{className:"ribbon-section ribbon-bottom-line",children:s.jsxs("div",{className:"ribbon-section-content",children:[s.jsxs("div",{className:"ribbon-group",children:[s.jsxs(Ln,{children:[s.jsx(re,{content:"Bold (Ctrl+B)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Bold",icon:s.jsx(fa,{}),onClick:()=>x&&x("bold"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Italic (Ctrl+I)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Italic",icon:s.jsx(pu,{}),onClick:()=>x&&x("italic"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Strikethrough (Alt+S)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Strikethrough",icon:s.jsx(gu,{}),onClick:()=>x&&x("strikethrough"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Subscript",relationship:"label",children:s.jsx(Ne,{"aria-label":"Subscript",icon:s.jsx(bu,{}),onClick:()=>x&&x("subscript"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Superscript",relationship:"label",children:s.jsx(Ne,{"aria-label":"Superscript",icon:s.jsx(yu,{}),onClick:()=>x&&x("superscript"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Code (Ctrl+`)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Code",icon:s.jsx(ri,{}),onClick:()=>x&&x("code"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Highlight Text",relationship:"label",children:s.jsx(Ne,{"aria-label":"Highlight",icon:s.jsx(Rm,{}),onClick:()=>x&&x("highlight"),appearance:"secondary",disabled:!B})})]}),s.jsx(Ln,{children:s.jsxs(Ga,{children:[s.jsx(re,{content:"Text Transformations",relationship:"label",children:s.jsx(Va,{children:s.jsx(Ne,{"aria-label":"Transform",icon:s.jsx(ss,{}),appearance:"secondary",disabled:!B})})}),s.jsx(Qa,{children:s.jsxs(Za,{children:[s.jsx(Je,{onClick:()=>x&&x("transform-upper"),children:"UPPERCASE"}),s.jsx(Je,{onClick:()=>x&&x("transform-lower"),children:"lowercase"}),s.jsx(Je,{onClick:()=>x&&x("transform-sentence"),children:"Sentence case"}),s.jsx(Mo,{}),s.jsx(Je,{onClick:()=>x&&x("remove-formatting"),children:"Remove Formatting"})]})})]})})]}),s.jsx(Nn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsx(Ln,{children:s.jsxs("select",{"aria-label":"Heading Style",disabled:!B,onChange:xe=>{const Xe=xe.target.value;Xe&&x&&x(Xe)},style:{backgroundColor:"var(--color-neutral-background3)",border:"1px solid var(--color-neutral-stroke2)",borderRadius:"4px",padding:"4px 8px",color:"var(--color-neutral-foreground2)",fontSize:"12px",cursor:"pointer"},children:[s.jsx("option",{value:"",children:"Heading"}),s.jsx("option",{value:"h1",children:"Heading 1"}),s.jsx("option",{value:"h2",children:"Heading 2"}),s.jsx("option",{value:"h3",children:"Heading 3"}),s.jsx("option",{value:"h4",children:"Heading 4"}),s.jsx("option",{value:"h5",children:"Heading 5"}),s.jsx("option",{value:"h6",children:"Heading 6"})]})})}),s.jsx(Nn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ln,{children:[s.jsx(re,{content:"Bullet List (Ctrl+Shift+8)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Bullet List",icon:s.jsx($o,{}),onClick:()=>x&&x("bullet"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Numbered List (Ctrl+Shift+9)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Numbered List",icon:s.jsx(xl,{}),onClick:()=>x&&x("numbered"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Quote (Ctrl+Shift+>)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Quote",icon:s.jsx(vu,{}),onClick:()=>x&&x("quote"),appearance:"secondary",disabled:!B})})]})}),s.jsx(Nn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ln,{children:[s.jsx(re,{content:"Link (Ctrl+K)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Link",icon:s.jsx(xu,{}),onClick:()=>x&&x("link"),appearance:"secondary",disabled:!B})}),s.jsx(re,{content:"Image (Ctrl+Shift+I)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Image",icon:s.jsx(Su,{}),onClick:()=>x&&x("image"),appearance:"secondary",disabled:!B})}),s.jsx(Nn,{}),s.jsx(re,{content:"Insert Table (Ctrl+Shift+T)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Table",icon:s.jsx(wu,{}),onClick:()=>x&&x("table"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Insert Code Block (Ctrl+Shift+C)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Code Block",icon:s.jsx(ri,{}),onClick:()=>x&&x("codeblock"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Insert Footnote",relationship:"label",children:s.jsx(Ne,{"aria-label":"Footnote",icon:s.jsx(Tu,{}),onClick:()=>x&&x("footnote"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Task List",relationship:"label",children:s.jsx(Ne,{"aria-label":"Task List",icon:s.jsx(Eu,{}),onClick:()=>x&&x("tasklist"),appearance:"secondary",disabled:!k})}),s.jsx(re,{content:"Horizontal Rule (Ctrl+Shift+-)",relationship:"label",children:s.jsx(Ne,{"aria-label":"HR",icon:s.jsx(ju,{}),onClick:()=>x&&x("hr"),appearance:"secondary",disabled:!k})}),s.jsxs(Ga,{children:[s.jsx(re,{content:"Insert Callout",relationship:"label",children:s.jsx(Va,{children:s.jsx(Ne,{"aria-label":"Callout",icon:s.jsx(os,{}),appearance:"secondary",disabled:!k})})}),s.jsx(Qa,{children:s.jsxs(Za,{children:[s.jsx(Je,{onClick:()=>x&&x("callout-note"),children:"Note"}),s.jsx(Je,{onClick:()=>x&&x("callout-tip"),children:"Tip"}),s.jsx(Je,{onClick:()=>x&&x("callout-warning"),children:"Warning"}),s.jsx(Je,{onClick:()=>x&&x("callout-error"),children:"Error"})]})})]})]})}),Ee.bottomLine&&qt.bottomLine.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(Nn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ga,{children:[s.jsx(Va,{children:s.jsx(Ne,{"aria-label":"More options",icon:s.jsx(Pc,{}),appearance:"secondary"})}),s.jsx(Qa,{children:s.jsx(Za,{children:qt.bottomLine.map(Kt)})})]})})]})]})})]})}class ry{static getLintDiagnostics(){return r=>{const d=[],c=r.state.doc,b=c.toString().split(`
`),p=new Set;let v=null;return b.forEach((j,X)=>{const H=j.trim();if(H.startsWith("```")||H.startsWith("~~~~")||H.startsWith("> ```")||H.startsWith("> ~~~~")||H.match(/^(\s*>)+\s*```/)||H.match(/^(\s*>)+\s*~~~~/))if(v===null)v=X;else{for(let $=v;$<=X;$++)p.add($);v=null}}),b.forEach((j,X)=>{if(p.has(X))return;const H=/^(\s*)[-*_]{3,}\s*$/.test(j);if(H)return;const $=c.line(X+1).from,k=c.line(X+1).to,V=j.replace(/\\\*/g,"").replace(/\\\#/g,"").replace(/\\\[/g,"").replace(/\\\]/g,"").replace(/\\\`/g,""),B=V.match(/\[/g)||[],F=V.match(/\]/g)||[];if(B.length>F.length){const te=V.lastIndexOf("["),ce=V.substring(te+1),de=V.includes("[[")||V.includes("]]")||V.match(/\[\s*\[/)||V.match(/\]\s*\]/),J=/\[\s*\d+[\s,\d]*\s*\]/.test(V)||/\[\s*[a-zA-Z]+\s*=\s*[a-zA-Z0-9]+\s*\]/.test(V),P=/[\+\-\*\/=]/.test(ce);ce.trim().length>0&&!ce.startsWith(" ")&&!ce.match(/^[\s\[\]]*$/)&&!de&&!J&&!P&&d.push({from:$+te,to:k,severity:"error",message:"Unclosed link bracket"})}if((V.match(/\*\*/g)||[]).length%2===1){(V.match(/`/g)||[]).length>=2;const ce=V.lastIndexOf("**");d.push({from:$+ce,to:k,severity:"warning",message:"Unclosed bold formatting"})}const x=V.split("**").join("").match(/\*/g)||[];if(x.length%2===1){const te=/^(\s*)[\*\-\+]\s/.test(V),ce=V.trim()[0],de=/\d+\s*\*\s*\d+/.test(V)||/\d+\s*\*\s*[a-zA-Z]/.test(V)||/[a-zA-Z]\s*\*\s*\d+/.test(V)||/\*\s*[=\+\/]/.test(V)||/[=\+\/]\s*\*/.test(V);if(!(te&&ce==="*"&&x.length===1||de)){const J=V.split("**").join("").lastIndexOf("*");let P=0,_=J;const R=V.split("**");for(let ae=0;ae<R.length;ae++){if(_<=R[ae].length){P+=_;break}_-=R[ae].length,P+=R[ae].length+2}d.push({from:$+P,to:k,severity:"warning",message:"Unclosed italic formatting"})}}const W=(V.match(/`/g)||[]).length;if(W%2===1&&(V.match(/`[^`]*`[^`]*`/)&&(V.match(/`/g)||[]).length===3&&V.endsWith("`")&&V.includes("**"),W!==3)){if(W!==4){const te=V.lastIndexOf("`");d.push({from:$+te,to:k,severity:"error",message:"Unclosed code formatting"})}}const se=/^(\s*)(#{1,6})([^\s\#])/,A=V.match(se);if(A){const te=A[1],ce=A[2];A[3]!==""&&te.length<4&&!j.includes("\\#")&&d.push({from:$+A.index+te.length+ce.length,to:$+A.index+te.length+ce.length+1,severity:"warning",message:"Header should have a space after #"})}const U=/^(\s*)([-=]{3,})\s*$/.test(V),T=V.includes("**")||V.includes("`");if(!H&&!U&&!T&&!(j.includes("\\*")||j.includes("\\#")||j.includes("\\`")||j.includes("\\[")||j.includes("\\]"))){const ce=/^(\s*)([*\-+])([^\s\*\-\+])/,de=V.match(ce);if(de){const _=de[1],R=de[2];de[3]!==" "&&_.length<4&&d.push({from:$+de.index+_.length+R.length,to:$+de.index+_.length+R.length+1,severity:"warning",message:"List Items Without Proper Spacing"})}const J=/^(\s*)(\d+)([\.\s])/,P=V.match(J);if(P){const _=P[1],R=P[2],ae=P[3],Se=V.substring(P[0].length);ae==="."&&Se.length>0&&!Se.startsWith(" ")?d.push({from:$+P.index+_.length+R.length+1,to:$+P.index+_.length+R.length+2,severity:"warning",message:"List Items Without Proper Spacing"}):ae!=="."&&ae!==" "&&_.length<4&&d.push({from:$+P.index+_.length+R.length,to:$+P.index+_.length+R.length+1,severity:"warning",message:"Ordered list items should have a space or period after the number"})}}const L=j.match(/\(/g)||[],Q=j.match(/\)/g)||[];if(j.includes("[")&&j.includes("](")&&L.length>Q.length){const te=j.lastIndexOf("("),ce=j.substring(0,te).includes("![");d.push({from:$+te,to:k,severity:"error",message:ce?"Unclosed image link":"Unclosed link"})}if(j.includes("![](")){const te=j.indexOf("![");d.push({from:$+te,to:$+te+4,severity:"warning",message:"Image is missing alt text (accessibility)"})}const I=j.match(/^(\s*)(#{1,6})\s/);if(I&&!p.has(X)){const te=I[2].length;te===1&&(this.h1Count===void 0&&(this.h1Count=0),this.h1Count++,this.h1Count>1&&d.push({from:$+I[1].length,to:$+I[1].length+I[2].length,severity:"warning",message:"Multiple H1 headers detected. Document should have only one primary title."})),this.lastHeadingLevel!==void 0&&te>this.lastHeadingLevel+1&&d.push({from:$+I[1].length,to:$+I[1].length+I[2].length,severity:"warning",message:`Heading level jump: H${this.lastHeadingLevel} to H${te}`}),this.lastHeadingLevel=te}j.trim().split(/\s+/).filter(te=>te.length>0).length>200&&!I&&!p.has(X)&&d.push({from:$,to:k,severity:"info",message:"Long paragraph detected. Consider breaking it up for better readability."})}),this.lastHeadingLevel=void 0,this.h1Count=0,d}}}class cy{constructor(){this.editorView=null,this.settings={focus:{enabled:!1,opacity:.3,lineHeight:1.6},typewriter:{enabled:!1,centerOffset:.4,scrollBehavior:"smooth"},wysiwyg:{enabled:!1},zen:{enabled:!1,hideUI:!0,minimalMode:!1}},this.wordCount=0,this.characterCount=0,this.readabilityScore=0,this.readingTime=0,this.statistics={wordsToday:0,wordsThisWeek:0,writingStreak:0,lastWritingDate:null},this.listeners=[],this.loadSettings(),this.loadStatistics()}loadSettings(){try{const r=localStorage.getItem("markdownstudio_writing_modes");if(r){const d=JSON.parse(r);Object.keys(this.settings).forEach(c=>{d[c]&&typeof d[c]=="object"&&(this.settings[c]={...this.settings[c],...d[c]})}),this.settings.zen.enabled=!1}}catch(r){console.warn("Failed to load writing mode settings:",r)}}saveSettings(){localStorage.setItem("markdownstudio_writing_modes",JSON.stringify(this.settings))}loadStatistics(){const r=localStorage.getItem("markdownstudio_writing_stats");r&&(this.statistics={...this.statistics,...JSON.parse(r)})}saveStatistics(){localStorage.setItem("markdownstudio_writing_stats",JSON.stringify(this.statistics))}addModeChangeListener(r){this.listeners.push(r)}removeModeChangeListener(r){this.listeners=this.listeners.filter(d=>d!==r)}emitModeChange(){const r=this.getActiveModes();this.listeners.forEach(d=>{try{d(r)}catch(c){console.error("Error in mode change listener:",c)}})}toggleMode(r,d=!1){const c=this.isModeEnabled(r);d||!c?this.enableMode(r):this.disableMode(r)}enableMode(r){switch(r){case"focus":this.settings.focus.enabled=!0,this.applyFocusMode();break;case"typewriter":this.settings.typewriter.enabled=!0,this.applyTypewriterMode();break;case"wysiwyg":this.settings.wysiwyg.enabled=!0;break;case"zen":this.settings.zen.enabled=!0,this.applyZenMode();break}this.saveSettings(),this.emitModeChange()}disableMode(r){switch(r){case"focus":this.settings.focus.enabled=!1,this.removeFocusMode();break;case"typewriter":this.settings.typewriter.enabled=!1,this.removeTypewriterMode();break;case"wysiwyg":this.settings.wysiwyg.enabled=!1;break;case"zen":this.settings.zen.enabled=!1,this.removeZenMode();break}this.saveSettings(),this.emitModeChange()}applyFocusMode(){}removeFocusMode(){}applyTypewriterMode(){}removeTypewriterMode(){}applyZenMode(){this.zenKeyListener=r=>{r.key==="Escape"&&this.toggleMode("zen")},document.addEventListener("keydown",this.zenKeyListener)}removeZenMode(){this.zenKeyListener&&(document.removeEventListener("keydown",this.zenKeyListener),this.zenKeyListener=null)}calculateWordCount(r){return r?r.replace(/#+\s+/g,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[([^\]]*)\]\([^)]+\)/g,"$1").replace(/^\s*[-*+]\s+/gm,"").replace(/^\s*\d+\.\s+/gm,"").replace(/^\s*>\s+/gm,"").replace(/^[>-]+/gm,"").replace(/\n{3,}/g,`

`).trim().split(/\s+/).filter(f=>f.length>0).length:0}calculateReadingTime(r){return Math.ceil(r/225)}updateWritingStats(r){const d=this.calculateWordCount(r);if(this.wordCount=d,this.characterCount=r?r.length:0,this.readingTime=this.calculateReadingTime(d),d>5){const b=r.split(/[.!?]+/).filter(j=>j.trim().length>0).length||1,v=4.71*(r.replace(/\s+/g,"").length/d)+.5*(d/b)-21.43;this.readabilityScore=Math.max(0,Math.min(22,Math.round(v)))}else this.readabilityScore=0;const c=new Date().toDateString(),f=this.statistics.lastWritingDate;if(f!==c){const b=new Date(Date.now()-864e5).toDateString();f===b?this.statistics.writingStreak+=1:this.statistics.writingStreak=1,this.statistics.wordsToday=0,this.statistics.lastWritingDate=c}this.statistics.wordsToday=Math.max(this.statistics.wordsToday,d),this.statistics.wordsThisWeek=this.statistics.wordsToday,this.saveStatistics()}getWritingStatistics(){return{wordCount:this.wordCount,characterCount:this.characterCount,readabilityScore:this.readabilityScore,readingTime:this.readingTime,...this.statistics}}getActiveModes(){return{focus:this.settings.focus.enabled,typewriter:{enabled:this.settings.typewriter.enabled,centerOffset:this.settings.typewriter.centerOffset,scrollBehavior:this.settings.typewriter.scrollBehavior},wysiwyg:this.settings.wysiwyg.enabled,zen:this.settings.zen.enabled}}getCurrentMode(){return this.settings.zen.enabled?"zen":this.settings.focus.enabled?"focus":this.settings.typewriter.enabled?"typewriter":this.settings.wysiwyg.enabled?"wysiwyg":"normal"}isModeEnabled(r){return this.settings[r]?.enabled||!1}setEditorView(r){this.editorView=r}cleanup(){this.removeFocusMode(),this.removeTypewriterMode(),this.removeZenMode()}}const Sn=new cy;Go().use(Vo).use(Mb).use(Ym).use(Du).use(zu).use(Xm).use(Qo,{allowDangerousHtml:!0}).use(Lu).use(Gm,{ignoreMissing:!0}).use(Zo,{allowDangerousHtml:!0});const uy=m=>{if(!m||!m.includes("|"))return m;const r=m.trim().split(`
`);if(r.length<2)return m;const d=r.map(f=>f.replace(/^\||\|$/g,"").split("|").map(p=>p.trim())),c=[];return d.forEach(f=>{f.forEach((b,p)=>{c[p]=Math.max(c[p]||0,b.length)})}),d.map((f,b)=>{const p=b===1&&f.every(j=>/^:?-+:?$/.test(j));return`|${f.map((j,X)=>{const H=c[X];if(p){const $=j.startsWith(":"),k=j.endsWith(":");let V="-".repeat(H+2);return $&&k?V=":"+"-".repeat(H)+":":$?V=":"+"-".repeat(H+1):k&&(V="-".repeat(H+1)+":"),V}else return" "+j.padEnd(H)+" "}).join("|")}|`}).join(`
`)},dy=wn.inputHandler.of((m,r,d,c)=>(c!=="|"||setTimeout(()=>{const{state:f}=m,b=m.state.selection.main.head,p=m.state.doc.lineAt(b);if(p.text.includes("|")){let v=p.number;for(;v>1&&m.state.doc.line(v-1).text.includes("|");)v--;let j=p.number;for(;j<m.state.doc.lines&&m.state.doc.line(j+1).text.includes("|");)j++;if(j-v>=2){const X={from:m.state.doc.line(v).from,to:m.state.doc.line(j).to},H=m.state.doc.sliceString(X.from,X.to),$=uy(H);$!==H&&m.dispatch({changes:{from:X.from,to:X.to,insert:$},selection:{anchor:b}})}}},10),!1)),fy=Fo.line({class:"cm-activeBlock"}),hy=Cb.define({create(m){return km(m)},update(m,r){return r.docChanged||r.selection?km(r.state):m},provide:m=>wn.decorations.from(m)});function km(m){const r=m.selection.main.head;let d=m.doc.lineAt(r).number,c=d;for(;d>1&&m.doc.line(d-1).text.trim();)d--;for(;c<m.doc.lines&&m.doc.line(c+1).text.trim();)c++;const f=[];for(let b=d;b<=c;b++)f.push(fy.range(m.doc.line(b).from));return Fo.set(f)}const my=Fo.mark({class:"cm-wysiwyg-hidden",attributes:{style:"opacity: 0.3; font-style: italic; user-select: text;"}}),Mm=m=>{const r=[],d=m.state.selection.main,c=m.state.doc.lineAt(d.head).from,f=m.state.doc.lineAt(d.head).to;for(let{from:b,to:p}of m.visibleRanges)Hb(m.state).iterate({from:b,to:p,enter:v=>{v.from>=c&&v.to<=f||(v.name.includes("Mark")||v.name==="URL"||v.name==="LinkTitle"||v.name==="CodeInfo")&&r.push(my.range(v.from,v.to))}});return r.sort((b,p)=>b.from-p.from),Fo.set(r,!0)},py=Ab.fromClass(class{constructor(m){this.decorations=Mm(m)}update(m){(m.docChanged||m.selectionSet||m.viewportChanged)&&(this.decorations=Mm(m.view))}},{decorations:m=>m.decorations}),gy=m=>{let r=m.matchBefore(/\/\w*/);if(!r)return null;if(r.from>0){let d=m.state.sliceDoc(r.from-1,r.from);if(!/\s/.test(d)&&d!==`
`)return null}return r.from===r.to&&!m.explicit?null:{from:r.from,options:[Ye("**${}**",{label:"/bold",detail:"Bold Text",type:"text"}),Ye("*${}*",{label:"/italic",detail:"Italic Text",type:"text"}),Ye("~~${}~~",{label:"/strike",detail:"Strikethrough",type:"text"}),Ye("==${}==",{label:"/highlight",detail:"Highlight",type:"text"}),Ye("~${}~",{label:"/subscript",detail:"Subscript",type:"text"}),Ye("^${}^",{label:"/superscript",detail:"Superscript",type:"text"}),Ye("# ${}",{label:"/h1",detail:"Heading 1",type:"text"}),Ye("## ${}",{label:"/h2",detail:"Heading 2",type:"text"}),Ye("### ${}",{label:"/h3",detail:"Heading 3",type:"text"}),Ye("#### ${}",{label:"/h4",detail:"Heading 4",type:"text"}),Ye("##### ${}",{label:"/h5",detail:"Heading 5",type:"text"}),Ye("###### ${}",{label:"/h6",detail:"Heading 6",type:"text"}),Ye("> ${}",{label:"/quote",detail:"Blockquote",type:"text"}),Ye("`${}`",{label:"/inlinecode",detail:"Inline Code",type:"text"}),Ye("```${language}\n${}\n```",{label:"/code",detail:"Code Block",type:"text"}),Ye(`| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |`,{label:"/table",detail:"Table",type:"text"}),Ye(`---
`,{label:"/divider",detail:"Horizontal Rule",type:"text"}),Ye("- ${}",{label:"/bullet",detail:"Bullet List",type:"text"}),Ye("1. ${}",{label:"/numbered",detail:"Numbered List",type:"text"}),Ye("- [ ] ${}",{label:"/todo",detail:"Task List",type:"text"}),Ye("[${text}](url)",{label:"/link",detail:"Link",type:"text"}),Ye("![${alt}](url)",{label:"/image",detail:"Image",type:"text"}),Ye("Here is some text with a footnote[^${1}].\n\n[^${1}]: This is the footnote content.",{label:"/footnote",detail:"Footnote",type:"text"}),Ye("> [!NOTE]\n> ${}",{label:"/note",detail:"Note Callout",type:"text"}),Ye("> [!TIP]\n> ${}",{label:"/tip",detail:"Tip Callout",type:"text"}),Ye("> [!WARNING]\n> ${}",{label:"/warning",detail:"Warning Callout",type:"text"}),Ye("> [!ERROR]\n> ${}",{label:"/error",detail:"Error Callout",type:"text"}),Ye(`$$
\${}
$$`,{label:"/math",detail:"Math Block",type:"text"}),Ye("```mermaid\ngraph TD\n    A[Start] --> B[End]\n```",{label:"/mermaid",detail:"Mermaid",type:"text"}),Ye(`---
title: \${}
date: 
tags: []
---
`,{label:"/frontmatter",detail:"YAML Frontmatter",type:"text"})]}},by=Vm.data.of({autocomplete:gy}),yy=[{key:"Tab",run:Db},...zb],vy=Lb((m,r)=>{const{state:d}=m,c=d.doc.lineAt(r),f=c.text,b=c.from,p=/\[([^\]]+)\]\(([^)]+)\)/g;let v;for(;(v=p.exec(f))!==null;){const H=b+v.index,$=H+v[0].length;if(r>=H&&r<=$){const k=v[1],V=v[2];return{pos:H,end:$,above:!0,create:()=>{const B=document.createElement("div");return B.style.padding="4px 8px",B.style.backgroundColor="#333",B.style.color="#fff",B.style.borderRadius="4px",B.style.fontSize="12px",B.style.maxWidth="300px",B.style.wordBreak="break-word",V.startsWith("http://")||V.startsWith("https://")?B.innerHTML=`
              <div style="font-weight: bold; margin-bottom: 2px;">Link</div>
              <div>Text: ${k}</div>
              <div style="color: #4fc3f7;">URL: ${V}</div>
            `:B.innerHTML=`
              <div style="font-weight: bold; margin-bottom: 2px;">Internal Link</div>
              <div>Text: ${k}</div>
              <div style="color: #81c784;">File: ${V}</div>
            `,{dom:B}}}}}const j=/!\[([^\]]*)\]\(([^)]+)\)/g;for(;(v=j.exec(f))!==null;){const H=b+v.index,$=H+v[0].length;if(r>=H&&r<=$){const k=v[1]||"image",V=v[2];return{pos:H,end:$,above:!0,create:()=>{const B=document.createElement("div");return B.style.padding="4px 8px",B.style.backgroundColor="#333",B.style.color="#fff",B.style.borderRadius="4px",B.style.fontSize="12px",B.style.maxWidth="300px",B.innerHTML=`
            <div style="font-weight: bold; margin-bottom: 2px;">Image</div>
            <div>Alt: ${k}</div>
            <div style="color: #ff9800;">Source: ${V}</div>
          `,{dom:B}}}}}const X=/\[([^\]]+)\]/g;for(;(v=X.exec(f))!==null;){const H=b+v.index,$=H+v[0].length,k=f[v.index-1],V=f[v.index+v[0].length];if(!(k==="!"||V==="(")&&r>=H&&r<=$){const B=v[1];return{pos:H,end:$,above:!0,create:()=>{const F=document.createElement("div");return F.style.padding="4px 8px",F.style.backgroundColor="#333",F.style.color="#fff",F.style.borderRadius="4px",F.style.fontSize="12px",F.innerHTML=`
            <div style="font-weight: bold; margin-bottom: 2px;">Reference</div>
            <div style="color: #ba68c8;">[${B}]</div>
          `,{dom:F}}}}}return null}),xy=wn.domEventHandlers({touchstart:(m,r)=>{if(!("ontouchstart"in window)||m.touches.length>1)return;const d=m.touches[0];r._touchStart={x:d.clientX,y:d.clientY},r._touchTimer&&clearTimeout(r._touchTimer),r._touchTimer=setTimeout(()=>{const c=r.posAtCoords({x:d.clientX,y:d.clientY});if(c!==null){const f=r.state.wordAt(c);f&&(r.dispatch({selection:{anchor:f.from,head:f.to},userEvent:"select.touch"}),window.navigator&&window.navigator.vibrate&&window.navigator.vibrate(50))}r._touchTimer=null},600)},touchmove:(m,r)=>{if(!("ontouchstart"in window)||!r._touchStart)return;const d=m.touches[0],c=d.clientX-r._touchStart.x,f=d.clientY-r._touchStart.y;(Math.abs(c)>10||Math.abs(f)>10)&&(r._touchTimer&&(clearTimeout(r._touchTimer),r._touchTimer=null),r._touchStart=null)},touchend:(m,r)=>{!("ontouchstart"in window)||!r._touchTimer||(clearTimeout(r._touchTimer),r._touchTimer=null,r._touchStart=null)},touchcancel:(m,r)=>{!("ontouchstart"in window)||!r._touchTimer||(clearTimeout(r._touchTimer),r._touchTimer=null,r._touchStart=null)}}),Sy=wn.theme({"&":{fontSize:"0.875rem",backgroundColor:"#ffffff",color:"#1e1e1e"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground, .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"rgba(0, 120, 212, 0.3) !important",borderRadius:"2px"},".cm-selectionMatch":{backgroundColor:"rgba(0, 120, 212, 0.15) !important"},".cm-activeLine":{backgroundColor:"rgba(0, 120, 212, 0.06)"},".cm-activeLineGutter":{backgroundColor:"rgba(0, 120, 212, 0.1)"}},{dark:!1}),wy=wn.theme({"&":{fontSize:"0.875rem",backgroundColor:"#1e1e1e",color:"#d4d4d4"},".cm-content":{caretColor:"#aeafad"},".cm-gutters":{backgroundColor:"#252526",color:"#858585",borderRight:"1px solid rgba(255,255,255,0.08)"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground, .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"rgba(0, 120, 212, 0.6) !important",borderRadius:"2px"},".cm-selectionMatch":{backgroundColor:"rgba(0, 120, 212, 0.3) !important"},".cm-activeLine":{backgroundColor:"rgba(255, 255, 255, 0.05)"},".cm-activeLineGutter":{backgroundColor:"rgba(255, 255, 255, 0.07)"},".cm-cursor":{borderLeftColor:"#aeafad"}},{dark:!0}),Ty=[Nb({base:Vm,codeLanguages:Bb}),Rb.of(yy),hy,by,_b(),$b(),vy,xy,dy],Ey=(m,r,d)=>{const c=[Vb.highest(d?wy:Sy)];return r?.typewriter?.enabled&&c.push(wn.updateListener.of(f=>{if(f.docChanged||f.selectionSet){if(!f.state.selection.main.empty)return;f.view.dispatch({effects:wn.scrollIntoView(f.state.selection.main.head,{y:"center",behavior:r.typewriter.scrollBehavior||"auto"})})}})),r?.wysiwyg&&c.push(py),m?.highlightSpecialChars&&c.push(Ub()),m?.scrollPastEnd&&c.push(qb()),m?.showLintGutter&&c.push(Yb(ry.getLintDiagnostics()),Xb({markerFilter:f=>f,tooltipFilter:f=>f,markerTooltip:f=>f.length===1?f[0].message:f.map(b=>b.message).join(`
`)})),m?.showPlaceholder&&c.push(Gb("Start typing your markdown here...")),c},jy=g.memo(function({content:r,onChange:d,visible:c,onTextSelection:f,scrollRef:b,onEditorReady:p,settings:v,writingMode:j,isDark:X,onCursorActivity:H,onHistoryChange:$}){const[k,V]=g.useState(null),B=g.useRef(null),F=g.useRef(!1),G=g.useRef({canUndo:!1,canRedo:!1}),x=g.useRef(0),W=g.useRef({undo:0,redo:0});g.useEffect(()=>{k&&(Sn.setEditorView(k),p&&p(k))},[k,p]),g.useEffect(()=>{if(b&&k){const T=k.dom.querySelector(".cm-scroller");T&&(b.current=T)}},[k,b]);const se=g.useMemo(()=>wn.updateListener.of(T=>{if(T.selectionSet||T.docChanged){const L=!T.state.selection.main.empty;if(F.current!==L&&(F.current=L,f&&f(L)),H){const Q=T.state.selection.main.head,I=T.state.doc.lineAt(Q),le=Q-I.from+1;H({line:I.number,column:le})}if(T.docChanged&&(x.current++,x.current===1&&(W.current={undo:Tm(T.state),redo:wm(T.state)})),$){const Q=Tm(T.state)>W.current.undo,I=wm(T.state)>W.current.redo;(Q!==G.current.canUndo||I!==G.current.canRedo)&&(G.current={canUndo:Q,canRedo:I},$({canUndo:Q,canRedo:I}))}}}),[f,H,$]),A=g.useMemo(()=>wn.domEventHandlers({paste:(T,L)=>{const Q=T.clipboardData?.getData("text/html");return Q?(T.preventDefault(),$t(()=>import("./vendor-processing.BXrOsedG.js").then(I=>I.aa),__vite__mapDeps([0,1])).then(I=>{const le=I.default,ce=new le({headingStyle:"atx",codeBlockStyle:"fenced"}).turndown(Q),{state:de}=L,J=de.selection.main;L.dispatch({changes:{from:J.from,to:J.to,insert:ce},selection:{anchor:J.from+ce.length}}),L.focus()}).catch(I=>console.error("Turndown failed",I)),!0):!1}}),[]),U=g.useMemo(()=>[...Ty,...Ey(v,j,X),se,A],[se,A,v,j,X]);return c?s.jsx("div",{className:`editor-pane ${X?"dark-theme":"light-theme"}`,"data-theme":X?"dark":"light",role:"textbox","aria-label":"Markdown editor",children:s.jsx(Ob,{ref:B,value:r,height:"100%",width:"100%",extensions:U,onChange:T=>d(T),className:`codemirror-editor ${X?"dark-theme":"light-theme"} ${v?.showLineNumbers?"":"hide-line-numbers"} ${v?.showFoldGutter?"":"hide-fold-gutter"} ${j.zen?"zen-mode":""} ${j.focus?"focus-mode-active":""}`,onCreateEditor:T=>{V(T)}})}):null}),Zm=new Map;let ku="default";function ky(){return m=>{Nu(m,r=>{r.position&&r.type!=="text"&&r.type!=="inlineCode"&&(r.data=r.data||{},r.data.hProperties=r.data.hProperties||{},r.data.hProperties["data-line"]=r.position.start.line)})}}function My(){return m=>{Nu(m,"code",r=>{if(r.lang==="mermaid"){r.type="html";const d=r.value,c=d.replace(/</g,"&lt;").replace(/>/g,"&gt;"),f=Zm.get(d);f&&f.theme===ku&&f.svg?r.value=`<div class="mermaid-container" style="display:flex; justify-content:center; margin:1.5rem 0; padding:1rem; background-color:var(--color-neutral-background2); border-radius:6px; border:1px solid rgba(0,0,0,0.1);"><div class="mermaid-src" style="display:none;">${c}</div><div class="mermaid-result" data-rendered="true" data-theme="${ku}">${f.svg}</div></div>`:r.value=`<div class="mermaid-container" style="display:flex; justify-content:center; margin:1.5rem 0; padding:1rem; background-color:var(--color-neutral-background2); border-radius:6px; border:1px solid rgba(0,0,0,0.1);"><div class="mermaid-src" style="display:none;">${c}</div><div class="mermaid-result">Loading diagram...</div></div>`}})}}function Cy(){return m=>{Nu(m,r=>{if(r.type==="text"){if(r.value&&typeof r.value=="string"){const d=r.value.split(/(==(.*?)==)/);if(d.length>1){const c=[];for(let f=0;f<d.length;f++){const b=d[f];if(b.startsWith("==")&&b.endsWith("==")){const p=b.slice(2,-2);c.push({type:"element",tagName:"mark",properties:{className:"highlighted-text"},children:[{type:"text",value:p}]})}else b&&c.push({type:"text",value:b})}r.type="element",r.tagName="span",r.properties={},r.children=c}}}else r.children&&Array.isArray(r.children)&&r.children.forEach(d=>{if(d.type==="text"&&d.value&&typeof d.value=="string"){const c=d.value.split(/(==(.*?)==)/);if(c.length>1){const f=[];for(let b=0;b<c.length;b++){const p=c[b];if(p.startsWith("==")&&p.endsWith("==")){const v=p.slice(2,-2);f.push({type:"element",tagName:"mark",properties:{className:"highlighted-text"},children:[{type:"text",value:v}]})}else p&&f.push({type:"text",value:p})}d.type="element",d.tagName="span",d.properties={},d.children=f}}})})}}const Ay=Go().use(Vo).use(Ym).use(ky).use(My).use(Cy).use(Du).use(zu).use(Xm).use(Qo,{allowDangerousHtml:!0}).use(Lu).use(Gm,{ignoreMissing:!0}).use(Zo,{allowDangerousHtml:!0}),Dy=m=>{if(!m)return{html:"",offset:0};const r=m.match(/^---\s*\n([\s\S]*?)\n---\s*\n/),d=r?r[0].split(`
`).length-1:0;let c=m;r&&(c=m.slice(r[0].length));const f={note:"ℹ️",tip:"💡",important:"🔔",warning:"⚠️",caution:"⚡",error:"❌"};c=c.replace(/(^|\r?\n)((?:>\s*)+)\[!(\w+)\] ?(.*)/g,(b,p,v,j,X)=>{const H=j.toLowerCase(),$=f[H]||"ℹ️",k=X.trim()||j.charAt(0).toUpperCase()+j.slice(1);return`${p}${v}<div class="callout-header callout-${H}">${$} ${k}</div>
${v}`});try{const b=Ay.processSync(c);return{html:String(b),offset:d}}catch(b){return console.error("Markdown rendering error:",b),{html:m,offset:0}}},cs=g.memo(({content:m,visible:r=!0,scrollRef:d,scrollStateRef:c,rememberScrollPosition:f=!0,onJumpToLine:b,activeLine:p=0})=>{const v=g.useRef(null);g.useRef(!1);const[j,X]=g.useState(m||""),[H,$]=g.useState(0),[k,V]=g.useState({visible:!1,content:"",target:null}),B=g.useRef(null),F=g.useRef(null);g.useEffect(()=>{const T=document.querySelector(".app");if(!T)return;const L=new MutationObserver(Q=>{for(const I of Q)I.attributeName==="class"&&$(le=>le+1)});return L.observe(T,{attributes:!0,attributeFilter:["class"]}),()=>L.disconnect()},[]);const G=g.useCallback(T=>{const L=T.target,Q=L.closest("[data-line]");if(Q&&b){const I=Q.getAttribute("data-line");if(I){b(parseInt(I));return}}if(L.tagName==="A"&&L.hash){T.preventDefault();const I=document.querySelector(L.hash);I&&I.scrollIntoView({behavior:"smooth"});return}if(["H1","H2","H3","H4","H5","H6"].includes(L.tagName)){const I=L.id;I&&b&&b(I)}},[b]),x=g.useCallback(T=>{const L=T.target;if(L.tagName==="A"&&L.id?.startsWith("fnref-")||L.getAttribute("href")?.startsWith("#fn-")){const Q=L.getAttribute("href").substring(1),I=document.getElementById(Q);I&&V({visible:!0,content:I.innerHTML,target:L})}else k.visible&&!L.closest(".footnote-tooltip-surface")&&V(Q=>({...Q,visible:!1}))},[k.visible]);g.useEffect(()=>{if(!r||!v.current)return;const T=v.current;return T.addEventListener("click",G),T.addEventListener("mouseover",x),()=>{T.removeEventListener("click",G),T.removeEventListener("mouseover",x)}},[r,G,x]);const W=g.useCallback(()=>{const T=v.current;if(!T||!c)return;const L=T.scrollHeight-T.clientHeight;c.current={ratio:L>0?T.scrollTop/L:0,pixel:T.scrollTop}},[]);g.useEffect(()=>{if(!r)return;W();const T=()=>X(m||"");return typeof window<"u"&&"requestIdleCallback"in window?(B.current&&window.cancelIdleCallback(B.current),B.current=window.requestIdleCallback(T,{timeout:700}),()=>{B.current&&(window.cancelIdleCallback(B.current),B.current=null)}):(F.current&&clearTimeout(F.current),F.current=setTimeout(T,500),()=>{F.current&&(clearTimeout(F.current),F.current=null)})},[m,r,W]),g.useLayoutEffect(()=>{if(!r||!v.current||!c)return;const T=v.current,L=T.scrollHeight-T.clientHeight,{ratio:Q,pixel:I}=c.current||{ratio:0,pixel:0},le=L>0?Q*L:I;Number.isFinite(le)&&(T.scrollTop=Math.max(0,Math.min(L,le)))},[j,r]);const{htmlContent:se,frontmatterOffset:A}=g.useMemo(()=>{ku=document.querySelector(".app.dark-theme")!==null?"dark":"default";const L=Dy(j);return{htmlContent:L.html,frontmatterOffset:L.offset}},[j,H]),U=g.useRef(null);return g.useEffect(()=>{if(!r||!v.current||p<=0)return;const T=p-A;if(T<=0){v.current.scrollTo({top:0,behavior:"auto"});return}const L=v.current.querySelectorAll("[data-line]");let Q=null,I=-1;for(let le=0;le<L.length;le++){const te=parseInt(L[le].getAttribute("data-line"));if(te<=T&&te>I)I=te,Q=L[le];else if(te>T)break}if(Q){U.current&&U.current.classList.remove("sync-highlight"),Q.scrollIntoView({behavior:"auto",block:"center"}),Q.classList.add("sync-highlight"),U.current=Q;const le=setTimeout(()=>{U.current===Q&&(Q.classList.remove("sync-highlight"),U.current=null)},1500);return()=>clearTimeout(le)}},[p,r,A]),g.useEffect(()=>{d&&v.current&&(d.current=v.current)},[d,r]),g.useEffect(()=>{if(!r||!v.current)return;const L=setTimeout(async()=>{try{const Q=v.current,I=Q.querySelectorAll(".mermaid-container");if(I.length>0){const{default:te}=await $t(async()=>{const{default:de}=await import("./vendor-visual.Drt-dmtb.js").then(J=>J.bC);return{default:de}},__vite__mapDeps([2,0,1])),ce=document.querySelector(".app.dark-theme")!==null;te.initialize({startOnLoad:!1,theme:ce?"dark":"default",fontFamily:"'Outfit', 'Inter', -apple-system, sans-serif"});for(let de=0;de<I.length;de++){const J=I[de],P=J.querySelector(".mermaid-src"),_=J.querySelector(".mermaid-result");if(!P||!_)continue;const R=ce?"dark":"default",ae=_.getAttribute("data-theme");if(_.hasAttribute("data-rendered")&&ae===R)continue;const Se=P.textContent||P.innerText,be=`mermaid-svg-${Date.now()}-${de}`;try{const{svg:pe}=await te.render(be,Se);_.innerHTML=pe,_.setAttribute("data-rendered","true"),_.setAttribute("data-theme",R),Zm.set(Se,{theme:R,svg:pe})}catch(pe){const ke=pe.message||"Syntax Error";console.warn("Mermaid render error:",ke),_.innerHTML="",_.setAttribute("data-rendered","error")}}}Q.querySelectorAll("pre code.language-js, pre code.language-javascript").forEach(te=>{const ce=te.parentElement;if(ce.querySelector(".run-btn"))return;const de=document.createElement("button");de.className="run-btn",de.innerHTML="▶ Run",de.title="Run JavaScript code";const J=document.createElement("div");J.className="code-output",J.style.cssText="display:none; padding:8px; margin-top:-1rem; margin-bottom:1rem; border-radius:0 0 6px 6px; font-family:monospace; font-size:12px; background:rgba(0,0,0,0.05); border-top:1px solid rgba(0,0,0,0.1); white-space:pre-wrap;",ce.style.position="relative",ce.appendChild(de),ce.after(J),de.onclick=P=>{P.stopPropagation(),J.style.display="block",J.textContent="Executing...",J.style.color="var(--color-neutral-foreground2)";const _=te.textContent,R=[],ae=console.log;console.log=(...Se)=>R.push(Se.map(be=>typeof be=="object"?JSON.stringify(be):String(be)).join(" "));try{const Se=new Function(_)();console.log=ae,J.textContent=R.length>0?R.join(`
`):Se!==void 0?String(Se):"Execution finished (no output)"}catch(Se){console.log=ae,J.textContent=`Error: ${Se.message}`,J.style.color="var(--color-status-error-foreground1)"}}})}catch(Q){console.error("Error in preview enrichment:",Q)}},100);return()=>clearTimeout(L)},[se,r,H]),r?s.jsxs("div",{className:"preview-pane",role:"document","aria-label":"Markdown preview",ref:v,children:[s.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:se}}),k.visible&&s.jsxs(Om,{open:!0,positioning:{target:k.target,position:"above",align:"start"},children:[s.jsx(Hm,{disableButtonEnhancement:!0,children:s.jsx("div",{style:{position:"fixed",left:-9999}})}),s.jsx(Bm,{className:"footnote-tooltip-surface",style:{maxWidth:"300px",fontSize:"13px"},children:s.jsx("div",{dangerouslySetInnerHTML:{__html:k.content}})})]})]}):null}),Cm={setItem:(m,r)=>{try{return localStorage.setItem(m,r),!0}catch(d){if(d.name==="QuotaExceededError")return console.warn("localStorage quota exceeded, unable to save:",m),!1;throw d}},getItem:m=>{try{return localStorage.getItem(m)}catch(r){return console.warn("Error reading from localStorage:",r),null}}};function Fm({content:m,visible:r,cursorLine:d=1,cursorColumn:c=1}){const[f,b]=g.useState({wordCount:0,readingTime:0,wordsToday:0,wordsThisWeek:0,writingStreak:0,lastWritingDate:null}),[p,v]=g.useState(()=>{const F=Cm.getItem("markdownstudio_writing_goal");return F?parseInt(F):500}),[j,X]=g.useState(!1);if(g.useEffect(()=>{m&&m.trim()&&(Sn.updateWritingStats(m),b(Sn.getWritingStatistics()))},[m]),g.useEffect(()=>{Cm.setItem("markdownstudio_writing_goal",p.toString())},[p]),!r||!m||!m.trim())return null;const H=Math.min(1,f.wordsToday/p),$=Math.round(H*100),k=F=>{if(F<60)return`${F} min read`;const G=Math.floor(F/60),x=F%60;return`${G}h ${x}m read`},V=F=>F===0||F<=3?"🔥":F<=7?"🔥🔥":F<=14?"🔥🔥🔥":"🔥🔥🔥🔥",B=F=>new Intl.NumberFormat().format(F||0);return s.jsxs("div",{className:"writing-stats compact",children:[s.jsxs("div",{className:"stats-line",children:[s.jsx("div",{className:"goal-container",children:s.jsxs(Om,{open:j,onOpenChange:(F,G)=>X(G.open),children:[s.jsx(Hm,{disableButtonEnhancement:!0,children:s.jsxs("div",{className:"goal-progress-wrapper",title:`Daily Goal: ${$}% (${f.wordsToday}/${p} words)`,children:[s.jsx("div",{className:"goal-progress-bar",style:{width:`${$}%`}}),s.jsxs("span",{className:"goal-text",children:[s.jsx(ub,{style:{fontSize:"12px",marginRight:"4px"}})," ",$,"%"]})]})}),s.jsx(Bm,{style:{padding:"12px",width:"200px"},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[s.jsx("span",{style:{fontSize:"12px",fontWeight:"bold"},children:"Set Daily Word Goal"}),s.jsx(ui,{type:"number",value:p,onChange:(F,G)=>v(parseInt(G.value)||0),size:"small",contentAfter:"words"}),s.jsx(Zt,{size:"small",appearance:"primary",onClick:()=>X(!1),children:"Apply"})]})})]})}),s.jsx(re,{content:"Word Count",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Words: ",B(f.wordCount)]})})}),s.jsx(re,{content:"Reading Time",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Read: ",k(f.readingTime)]})})}),s.jsx(re,{content:"Words Today",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Today: ",B(f.wordsToday)]})})}),f.writingStreak>0&&s.jsx(re,{content:`Streak: ${f.writingStreak} days`,relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:[V(f.writingStreak)," ",f.writingStreak," Days"]})})})]}),s.jsxs("div",{className:"stats-line stats-right",children:[s.jsx(re,{content:"Cursor Position",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Ln ",d,", Col ",c]})})}),s.jsx("div",{className:"stat-item",children:s.jsx("span",{className:"stat-text",children:"UTF-8"})}),s.jsx("div",{className:"stat-item",children:s.jsx("span",{className:"stat-text",children:"Markdown"})})]})]})}const zy=Object.freeze(Object.defineProperty({__proto__:null,default:Fm},Symbol.toStringTag,{value:"Module"})),Ly=`# MarkdownStudio User Manual\r
\r
## Table of Contents\r
\r
1. [Getting Started](#getting-started)\r
2. [File Management](#file-management)\r
3. [Editing Features](#editing-features)\r
4. [View Modes & Layouts](#view-modes--layouts)\r
5. [Panels & Functionality](#panels--functionality)\r
6. [Search & Navigation](#search--navigation)\r
7. [Accessibility](#accessibility)\r
8. [Writing Statistics](#writing-statistics)\r
9. [Advanced Features](#advanced-features)\r
10. [Troubleshooting](#troubleshooting)\r
\r
---\r
\r
## Getting Started\r
\r
Welcome to MarkdownStudio, a distraction-free markdown writing tool designed for the Nexus personal productivity suite. It provides a clean, efficient environment for creating and managing your markdown documents.\r
\r
### Quick Start\r
\r
1. **Create a New File:** Click the "New" button in the ribbon menu to create a new markdown document\r
2. **Open Existing Files:** Click "Open" to import markdown files from your device\r
3. **Start Writing:** Begin typing in the editor pane and see your formatted content in the preview pane\r
4. **Save Your Work:** Click "Save" to save changes to your file\r
\r
### Interface Overview\r
\r
The interface consists of three main areas:\r
\r
- **Ribbon Menu:** Top toolbar with all file operations and settings.\r
- **File Tabs:** Switch between open documents.\r
- **Workspace:** The main area containing your editor, preview, and floating/docked functionality panels.\r
\r
---\r
\r
## File Management\r
\r
### Working with Files\r
\r
#### Creating New Files\r
\r
Click the "New" button (📄) in the ribbon menu to create a new markdown document. You can open a standard blank document, or explicitly pick from built-in templates like Meeting Notes, Blog Posts, or READMEs. \r
\r
#### Opening Files\r
\r
Use the "Open" button (📁) to browse and open existing markdown files from your device. The app uses the File System Access API for direct file access, meaning your changes stay synced locally.\r
\r
#### Saving Files\r
\r
Click "Save" (💾) to save your changes:\r
\r
- **First Save:** You'll be prompted to choose a location and filename.\r
- **Subsequent Saves:** Changes are saved directly to the original file.\r
- **Auto-save:** The background service will routinely stash your document changes so you don't lose data.\r
- **Auto-indicator:** The file name pill in the top header features a glowing dot when unsaved changes are present.\r
\r
#### File Tabs Breadcrumb\r
\r
Multiple files can be open simultaneously:\r
\r
- Click the file name dropdown pill in the center of the menu bar to see your open files.\r
- Click on any file name to switch between files.\r
- Click the × button next to a file name to close it.\r
\r
#### Import & Export\r
\r
**Import:** Use the import button (⬇️) to bring multiple files into your workspace at once. The editor supports importing \`.md\`, \`.txt\`, \`.docx\`, \`.csv\`, \`.xlsx\`, \`.pdf\`, and \`.epub\` files.\r
\r
**Export:** Use the export button (⬆️) to generate standalone files from your current markdown document. The supported formats are:\r
- Markdown (.md)\r
- HTML web page (.html)\r
- Word Document (.doc)\r
- EPUB eBook (.epub)\r
- PowerPoint presentation (.pptx)\r
- PDF (via your browser's print dialog)\r
\r
---\r
\r
## Editing Features\r
\r
### Editor Features\r
\r
The editor is powered by CodeMirror 6 and includes:\r
\r
- **Syntax Highlighting:** Color-coded markdown syntax.\r
- **Auto-completion:** Suggestions for markdown syntax.\r
- **Bracket Matching:** Visual pairing of brackets and parentheses.\r
- **Real-Time Linter:** Instantly detects broken formatting or structure warnings directly on the line numbers gutter.\r
- **Search & Replace:** Find and replace text (Ctrl+F/Ctrl+H).\r
\r
### Command Palette\r
Press **Ctrl+P** (or click the lightning bolt icon) to open the Command Palette. This fuzzy-searchable interface allows you to instantly invoke almost any command, format, or layout toggle in the app without letting your hands leave the keyboard.\r
\r
### Slash Commands\r
Type \`/\` at the beginning of an empty line (or after a space) to open the in-line **Slash Commands** popup. This menu allows you to rapidly insert rich structural blocks—such as tables (\`/table\`), KaTeX math (\`/math\`), Mermaid diagrams (\`/mermaid\`), callouts (\`/note\`), or headings (\`/h2\`)—instantly without lifting your hands from the keyboard.\r
\r
### Quick Formatting\r
\r
Highlight text and use the right-click Context Menu, Ribbon Menu buttons, or keyboard shortcuts:\r
\r
- **Bold:** Ctrl+B\r
- **Italic:** Ctrl+I\r
- **Code:** Ctrl+\`\r
- **Link:** Ctrl+K\r
- **Strikethrough:** Alt+S\r
\r
### Structural Editing\r
\r
Take control of your document layout with structural selection. Use the Command Palette to:\r
- **Select Current Section:** Automatically highlight all text in the current header's block.\r
- **Move Section Up/Down:** Shift an entire header and all of its accompanying paragraphs up or down in the document structure.\r
- **Select All Headings / Lists:** Multicursor grab all lists or headings in the document.\r
\r
### Wikilinks\r
\r
Create connections between notes using double-bracket syntax. The app automatically detects and highlights wikilinks:\r
- \`[[Note Title]]\`\r
- \`[[Note Title|Display Text]]\`\r
\r
---\r
\r
## View Modes & Layouts\r
\r
Use the View sections in the ribbon menu or the command palette to adjust your workspace.\r
\r
### Core Layouts\r
- **Split View:** Editor and live preview side-by-side (default).\r
- **Editor Only:** Full-width markdown editor.\r
- **Preview Only:** Switch the toggle switch in the top right to exclusively read the document. Editing commands are safely disabled in this mode.\r
\r
### Writing Modes\r
Specialized writing environments for different tasks:\r
- **Zen Mode (🧘):** Fades out the entire ribbon and interface, leaving you with just the bare editor.\r
- **Focus Mode (🎯):** An enhanced distraction-free mode that fades out the background and brilliantly illuminates the specific paragraph or Markdown block your cursor is actively inside, keeping you entirely focused on your current thought.\r
- **Typewriter Mode (⌨️):** Keeps the line you are currently typing vertically centered on your screen, preventing neck strain.\r
- **WYSIWYG Mode (🛗):** Hides markdown formatting characters (like \`**\` or \`#\`) when your cursor is not on the line, rendering the text in place and providing a cleaner, read-focused editing experience similar to a pure WYSIWYG editor.\r
\r
### UI Themes\r
- **Light Theme (☀️):** Bright, clean interface for daytime use.\r
- **Dark Theme (🌙):** Dark interface for reduced eye strain and late-night coding.\r
- **High Contrast:** Available in Settings for WCAG compliance and vivid borders.\r
\r
---\r
\r
## Panels & Functionality\r
\r
MarkdownStudio offers powerful panels that can be docked to the side of the screen or dragged out as floating windows.\r
\r
### Live Preview\r
See a real-time rendered version of your markdown. Standard HTML, styled code blocks, mathematical equations ($KaTeX$), and even Mermaid flowcharts (\`\`\`mermaid) are fully supported and rendered securely.\r
\r
### Outline View\r
Generates a clickable, nested table of contents based on the headers currently present in your document. Easily jump around large files.\r
\r
### Property (Metadata)\r
An interactive viewer and editor for the YAML frontmatter of your markdown document. Add key-value pairs like \`author\`, \`date\`, or custom variables, which update live at the very top of your raw markdown document.\r
\r
### History\r
Browse local snapshots of your current document and restore to a previous state if you accidentally deleted critical text.\r
\r
### Snippets\r
A floating toolbox equipped with useful Markdown, Math, HTML, and Mermaid templates. Click on a snippet to instantly drop its code directly into your editor where your cursor is resting.\r
\r
---\r
\r
## Accessibility\r
\r
MarkdownStudio is highly committed to WCAG 2.1 AAA compliance.\r
\r
### Visual Accessibility\r
- **High Contrast Mode:** Enhanced text contrast, vivid outlines, and disabled gradients.\r
- **Adaptive Sizing:** Fully respects browser/device text scaling and zoom increments.\r
- **Clear Focus:** Generous visual focus states on all interactive elements.\r
\r
### Keyboard Navigation\r
All primary features are fully accessible via keyboard:\r
- Command Palette (Ctrl+P) makes every sub-feature discoverable instantly without a mouse.\r
- Arrow keys navigate through lists, and the Escape key gracefully backs out of any open dialog or menu.\r
\r
### Screen Reader Support\r
The application utilizes Semantic HTML, highly-detailed ARIA labeling, and dynamic context updates internally so screen readers stay informed about the interface state.\r
\r
---\r
\r
## Writing Statistics\r
\r
Toggle the stats panel (📊) running along the bottom bar to see real-time writing metrics:\r
- **Word & Character Count:** Including or excluding spaces.\r
- **Reading Time:** Estimated time reading based on standard WPM bounds.\r
- **Writing Time:** Active time tracked inside the current file block.\r
\r
---\r
\r
## Advanced Features\r
\r
### Export & Presentation\r
Because MarkdownStudio runs purely in the browser and connects directly to your local file system, its extraction ecosystem is robust.\r
- Transform your markup into styling-preserved Word Documents or standalone HTML files.\r
- **eBook ready:** Auto-generates EPUB directories directly from your headings, instantly ready for an e-reader.\r
- **Presentation mode:** Compiles H1/H2 chunks into a structured PowerPoint Presentation without requiring Office installed.\r
\r
### Developer Tooling\r
- **Component Architecture:** Modern React 19 + Fluent UI.\r
- **Extensible File Layer:** Services cleanly separate the File System Access API from the editor layout.\r
- **Performant CodeMirror:** Handlers implemented for smooth scrolling in 10,000+ word monolithic documents.\r
\r
---\r
\r
## Troubleshooting\r
\r
### Common Issues & Solutions\r
\r
**Problem: Can't open or save files**\r
*Solution:* Ensure your browser supports the File System Access API. Chrome, Edge, and Opera represent the most secure and supported environments for direct file manipulation.\r
\r
**Problem: Exported PowerPoint limits images**\r
*Solution:* At this time, PPTX generation parses textual headers and lists to automatically design structural slides. Raw inline embedded images are not natively transformed in the initial pass.\r
\r
**Problem: Keyboard commands don't work in View Mode**\r
*Solution:* This is expected. Destructive file operations and structural layout actions are intentionally blocked when editing functionality is disabled to prevent accidental state mismatches.\r
\r
### Getting Help\r
If you encounter issues not covered here:\r
- Open your Browser Developer Tools (\`F12\`) to check for runtime or parsing errors.\r
- Ensure all third-party browser extensions (like spellcheckers) are not conflicting with CodeMirror's DOM structure.\r
- Try clearing your browser cache and triggering a hard refresh.\r
`;function Mu({isOpen:m=!0,onClose:r=()=>{},isDarkTheme:d=!1,isDialog:c=!1}){const[f,b]=g.useState("");return g.useEffect(()=>{b(Ly)},[]),c?s.jsx(Bo,{open:m,onOpenChange:(p,v)=>!v.open&&r(),children:s.jsx(Uo,{className:d?"dark-theme":"light-theme",style:{maxWidth:"750px",width:"95vw",maxHeight:"80vh"},children:s.jsxs(qo,{children:[s.jsx(Yo,{children:"User Manual"}),s.jsx("div",{style:{maxHeight:"calc(80vh - 100px)",overflow:"auto"},children:s.jsx(cs,{content:f,visible:!0})}),s.jsx(Xo,{children:s.jsx(Zt,{appearance:"primary",onClick:r,children:"Close"})})]})})}):s.jsx("div",{className:"user-manual-container user-manual-full-window",style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",border:"none",margin:0,padding:0,backgroundColor:"var(--color-neutral-background1)"},children:s.jsx("div",{className:"user-manual-content user-manual-full-window",style:{flex:1,overflow:"auto",border:"none",margin:0,padding:"20px"},children:s.jsx(cs,{content:f,visible:!0})})})}const Ny=Object.freeze(Object.defineProperty({__proto__:null,default:Mu},Symbol.toStringTag,{value:"Module"})),Ru=(m,r)=>{g.useEffect(()=>{if(!m.current||!r)return;const d=m.current;d.style.setProperty("max-height","80vh","important"),d.style.setProperty("overflow-y","auto","important"),d.style.setProperty("user-select","none","important"),d.querySelectorAll('input, textarea, select, [contenteditable="true"]').forEach(k=>{k.style.setProperty("user-select","auto","important")});let f=!1,b,p;const v=window.innerWidth>768,j=()=>{const k=d.getBoundingClientRect(),V=window.innerWidth,B=window.innerHeight,F=Math.max(10,(V-k.width)/2),G=Math.max(10,(B-k.height)/2);d.style.setProperty("transform","none","important"),d.style.setProperty("left",`${F}px`,"important"),d.style.setProperty("top",`${G}px`,"important"),d.style.setProperty("margin","0","important"),d.style.setProperty("position","fixed","important")},X=setTimeout(j,50);let H=!1;const $=new ResizeObserver(k=>{!H&&k.length>0&&k[0].contentRect.width>0&&(j(),H=!0)});if($.observe(d),v){const k=F=>{const G=F.target.closest(".fui-DialogTitle")||F.target.closest(".dialog-header")||F.target===d,x=F.target.closest('button, input, textarea, a, [role="button"]');if(G&&!x&&F.button===0){f=!0;const W=d.getBoundingClientRect();b=F.clientX-W.left,p=F.clientY-W.top,d.style.transition="none",F.preventDefault()}},V=F=>{if(!f)return;const G=window.innerWidth,x=window.innerHeight,W=d.offsetWidth,se=d.offsetHeight,A=10;let U=F.clientX-b,T=F.clientY-p;U=Math.min(Math.max(A,U),G-W-A),T=Math.min(Math.max(A,T),x-se-A),d.style.left=`${U}px`,d.style.top=`${T}px`},B=()=>{f&&(f=!1,d.style.transition="")};return d.addEventListener("mousedown",k),window.addEventListener("mousemove",V),window.addEventListener("mouseup",B),()=>{clearTimeout(X),$.disconnect(),d.removeEventListener("mousedown",k),window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",B)}}return()=>{clearTimeout(X),$.disconnect()}},[r,m])};function Km({isOpen:m,onClose:r,isDarkTheme:d}){const c=g.useRef(null);return Ru(c,m),s.jsx(Bo,{open:m,onOpenChange:r,children:s.jsx(Uo,{ref:c,className:`about-dialog-surface ${d?"dark-theme":"light-theme"}`,children:s.jsxs(qo,{children:[s.jsx(Yo,{children:s.jsx("div",{className:"about-dialog-header",children:"About"})}),s.jsx(Au,{className:"about-dialog-content",children:s.jsxs("div",{className:"about-app-info",children:[s.jsx("h2",{children:"MarkdownStudio v1.0.0"}),s.jsx("p",{className:"about-description",children:"A modern, intuitive, and cross-platform markdown editor application."}),s.jsx("hr",{className:"about-divider"}),s.jsx("p",{className:"about-details",children:"Built with productivity in mind. All your markdown files are organized efficiently."}),s.jsx("p",{className:"about-copyright",children:"© 2026 @platohe. All rights reserved."})]})}),s.jsx(Xo,{children:s.jsx(Zt,{appearance:"primary",onClick:r,children:"Close"})})]})})})}const Ry=Object.freeze(Object.defineProperty({__proto__:null,default:Km},Symbol.toStringTag,{value:"Module"})),_y=({onExitZen:m})=>s.jsx("button",{className:"zen-exit-button",onClick:m,title:"Exit Zen Mode (Esc)","aria-label":"Exit Zen Mode",children:"Exit"}),$y=(m,r={x:100,y:100},d=null)=>{try{const c=localStorage.getItem(`window-state-${m}`);if(c){const f=JSON.parse(c),b=f.x>=0&&f.x<=window.innerWidth-100,p=f.y>=0&&f.y<=window.innerHeight-100;if(!b||!p)return{position:r,size:d};const v={position:{x:f.x,y:f.y}};if(d&&f.width&&f.height){const j=f.width>=300&&f.width<=window.innerWidth-100,X=f.height>=200&&f.height<=window.innerHeight-100;j&&X?v.size={width:f.width,height:f.height}:v.size=d}return v}}catch{}return{position:r,size:d}},Oy=(m,r,d=null)=>{try{const c={x:r.x,y:r.y};d&&(c.width=d.width,c.height=d.height),localStorage.setItem(`window-state-${m}`,JSON.stringify(c))}catch{}},Sl=(m,r,d=null)=>{const f=$y(m,r,d),[b,p]=g.useState(f.position),[v,j]=g.useState(f.size);return g.useEffect(()=>{Oy(m,b,v)},[m,b,v]),{position:b,setPosition:p,size:v,setSize:j}};function Jm({editorView:m,onClose:r,isVisible:d,mode:c="find"}){const[f,b]=g.useState(""),[p,v]=g.useState(""),[j,X]=g.useState(!1),[H,$]=g.useState(!1),[k,V]=g.useState(!1),[B,F]=g.useState(0),[G,x]=g.useState(0),{position:W,setPosition:se}=Sl("find-bar",{x:window.innerWidth/2-200,y:150}),[A,U]=g.useState(!1),T=g.useRef({x:0,y:0}),L=c==="findReplace",Q=g.useRef(null),I=g.useRef(null),le=g.useRef(null);g.useEffect(()=>{d&&setTimeout(()=>Q.current?.focus(),100)},[d,c]);const te=R=>{R.target.closest("button")||R.target.closest("input")||R.target.closest("label")||(U(!0),T.current={x:R.clientX-W.x,y:R.clientY-W.y},R.preventDefault())},ce=R=>{if(R.target.closest("button")||R.target.closest("input")||R.target.closest("label"))return;const ae=R.touches[0];U(!0),T.current={x:ae.clientX-W.x,y:ae.clientY-W.y}};g.useEffect(()=>{const R=Se=>{if(!A)return;const be=Se.type==="touchmove"?Se.touches[0].clientX:Se.clientX,pe=Se.type==="touchmove"?Se.touches[0].clientY:Se.clientY,ke=be-T.current.x,fe=pe-T.current.y;se({x:Math.max(0,Math.min(ke,window.innerWidth-100)),y:Math.max(0,Math.min(fe,window.innerHeight-100))})},ae=()=>{U(!1)};return A&&(window.addEventListener("mousemove",R),window.addEventListener("mouseup",ae),window.addEventListener("touchmove",R,{passive:!1}),window.addEventListener("touchend",ae),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",ae),window.removeEventListener("touchmove",R),window.removeEventListener("touchend",ae),document.body.style.userSelect=""}},[A]),g.useEffect(()=>{f.trim()&&de(f)},[j,H,k]);const de=(R,ae="next")=>{if(!m||!R.trim())return;const Se=m.state;let be=Se.selection.main.head;try{let pe;if(k){const lt=j?"g":"gi",xt=H?`\\b${R}\\b`:R;pe=new RegExp(xt,lt)}else{const lt=R.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),xt=j?"g":"gi",Ee=H?`\\b${lt}\\b`:lt;pe=new RegExp(Ee,xt)}const ke=Se.doc.toString(),fe=[];let we;for(;(we=pe.exec(ke))!==null;)fe.push({from:we.index,to:we.index+we[0].length,text:we[0]}),we.index===pe.lastIndex&&pe.lastIndex++;if(x(fe.length),fe.length===0){F(0);return}let Ot;ae==="next"?Ot=fe.find(lt=>lt.from>be)||fe[0]:Ot=[...fe].reverse().find(lt=>lt.from<be)||fe[fe.length-1];const ft=fe.findIndex(lt=>lt.from===Ot.from);F(ft+1);const vt=Se.update({selection:{anchor:Ot.from,head:Ot.to},scrollIntoView:!0});m.dispatch(vt)}catch{x(0),F(0)}},J=R=>{R.key==="Enter"?(R.preventDefault(),R.shiftKey?de(f,"previous"):de(f,"next")):R.key==="Escape"&&r()},P=()=>{if(!m||!f.trim())return;const R=m.state,ae=R.selection.main;if(!ae.empty){const Se=R.update({changes:{from:ae.from,to:ae.to,insert:p},selection:{anchor:ae.from,head:ae.from+p.length}});m.dispatch(Se),setTimeout(()=>de(f,"next"),0)}},_=()=>{if(!m||!f.trim())return;let R;try{if(k){const ke=j?"g":"gi",fe=H?`\\b${f}\\b`:f;R=new RegExp(fe,ke)}else{const ke=f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),fe=j?"g":"gi",we=H?`\\b${ke}\\b`:ke;R=new RegExp(we,fe)}const Se=m.state.doc.toString(),be=[];let pe;for(;(pe=R.exec(Se))!==null;)be.push({from:pe.index,to:pe.index+pe[0].length,insert:p}),pe.index===R.lastIndex&&R.lastIndex++;be.length>0&&(m.dispatch({changes:be}),x(0),F(0))}catch(ae){console.error("Replace all error:",ae)}};return d?s.jsxs("div",{ref:le,className:`find-bar ${A?"dragging":""}`,style:{left:`${W.x}px`,top:`${W.y}px`,right:"auto"},children:[s.jsxs("div",{className:"find-bar-title-bar",onMouseDown:te,onTouchStart:ce,children:[s.jsxs("div",{className:"find-bar-title",children:[s.jsx(db,{className:"title-icon"}),s.jsx("span",{children:L?"Find & Replace":"Find"})]}),s.jsx("button",{className:"find-close-btn",onClick:r,children:s.jsx(Ho,{})})]}),s.jsxs("div",{className:"find-bar-content",children:[s.jsxs("div",{className:"find-inputs-group",children:[s.jsxs("div",{className:"find-input-wrapper",children:[s.jsx("input",{ref:Q,type:"text",className:"find-input",placeholder:"Find...",value:f,onChange:R=>{b(R.target.value),R.target.value?de(R.target.value):(x(0),F(0))},onKeyDown:J}),s.jsxs("div",{className:"find-nav-group",children:[s.jsx("button",{className:"find-nav-btn",onClick:()=>de(f,"previous"),disabled:!G,children:s.jsx(fb,{})}),s.jsx("button",{className:"find-nav-btn",onClick:()=>de(f,"next"),disabled:!G,children:s.jsx(hb,{})})]})]}),L&&s.jsx("div",{className:"replace-section",children:s.jsxs("div",{className:"find-input-wrapper",children:[s.jsx("input",{ref:I,type:"text",className:"find-input",placeholder:"Replace with...",value:p,onChange:R=>v(R.target.value),onKeyDown:J}),s.jsxs("div",{className:"find-nav-group",children:[s.jsx("button",{className:"replace-btn",onClick:P,title:"Replace",disabled:!G,children:s.jsx(Ro,{})}),s.jsx("button",{className:"replace-btn",onClick:_,title:"Replace All",disabled:!G,children:s.jsx(mb,{})})]})]})})]}),s.jsxs("div",{className:"find-info-row",children:[s.jsx("span",{className:"match-count",children:G>0?`${B} of ${G}`:f.trim()?"No matches":""}),s.jsxs("div",{className:"find-options-list",children:[s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:j,onChange:R=>X(R.target.checked)}),s.jsx("span",{className:`checkbox-custom ${j?"checked":""}`,children:j&&s.jsx(eu,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Match case"})]}),s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:H,onChange:R=>$(R.target.checked)}),s.jsx("span",{className:`checkbox-custom ${H?"checked":""}`,children:H&&s.jsx(eu,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Whole word"})]}),s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:k,onChange:R=>V(R.target.checked)}),s.jsx("span",{className:`checkbox-custom ${k?"checked":""}`,children:k&&s.jsx(eu,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Regex"})]})]})]})]})]}):null}const Hy=Object.freeze(Object.defineProperty({__proto__:null,default:Jm},Symbol.toStringTag,{value:"Module"}));class By{constructor(){this.settings={fontSize:100,highContrast:!1,reducedMotion:!1,screenReaderOptimized:!1,keyboardNavigation:!0,focusVisible:!0,dyslexiaFont:!1,largeTargets:!1},this.loadSettings(),this.applySettings(),this.setupEventListeners(),this.dispatchSettingsChange()}dispatchSettingsChange(){typeof document<"u"&&document.dispatchEvent(new CustomEvent("accessibilitySettingsChange",{detail:this.getSettings()}))}loadSettings(){try{const r=localStorage.getItem("markdownstudio_accessibility");r&&(this.settings={...this.settings,...JSON.parse(r)})}catch(r){console.warn("Failed to load accessibility settings:",r)}}saveSettings(){try{localStorage.setItem("markdownstudio_accessibility",JSON.stringify(this.settings))}catch(r){console.warn("Failed to save accessibility settings:",r)}}applySettings(){this.applyFontSize(),this.applyHighContrast(),this.applyReducedMotion(),this.applyScreenReaderOptimizations(),this.applyKeyboardNavigation(),this.applyFocusVisible(),this.applyDyslexiaFont(),this.applyLargeTargets()}setFontSize(r){this.settings.fontSize=Math.max(100,Math.min(200,r)),this.applyFontSize(),this.saveSettings(),this.dispatchSettingsChange()}applyFontSize(){const r=document.documentElement;r.style.fontSize=`${this.settings.fontSize}%`,r.style.setProperty("--base-font-size",`${this.settings.fontSize}%`)}setHighContrast(r){this.settings.highContrast=r,this.applyHighContrast(),this.saveSettings(),this.dispatchSettingsChange()}applyHighContrast(){const r=document.body;this.settings.highContrast?(r.classList.add("high-contrast"),document.documentElement.style.setProperty("--text-contrast-ratio","7:1"),document.documentElement.style.setProperty("--border-contrast","black")):(r.classList.remove("high-contrast"),document.documentElement.style.removeProperty("--text-contrast-ratio"),document.documentElement.style.removeProperty("--border-contrast"))}setReducedMotion(r){this.settings.reducedMotion=r,this.applyReducedMotion(),this.saveSettings(),this.dispatchSettingsChange()}applyReducedMotion(){const r=window.matchMedia("(prefers-reduced-motion: reduce)");this.settings.reducedMotion||r.matches?(document.documentElement.style.setProperty("--transition-duration","0ms"),document.documentElement.style.setProperty("--animation-duration","0ms"),document.body.classList.add("reduced-motion")):(document.documentElement.style.removeProperty("--transition-duration"),document.documentElement.style.removeProperty("--animation-duration"),document.body.classList.remove("reduced-motion"))}setScreenReaderOptimized(r){this.settings.screenReaderOptimized=r,this.applyScreenReaderOptimizations(),this.saveSettings(),this.dispatchSettingsChange()}applyScreenReaderOptimizations(){this.settings.screenReaderOptimized?(document.body.classList.add("screen-reader-optimized"),this.addScreenReaderAnnouncements(),this.improveSemanticStructure()):(document.body.classList.remove("screen-reader-optimized"),this.removeScreenReaderAnnouncements())}setKeyboardNavigation(r){this.settings.keyboardNavigation=r,this.applyKeyboardNavigation(),this.saveSettings(),this.dispatchSettingsChange()}applyKeyboardNavigation(){this.settings.keyboardNavigation?(this.setupKeyboardShortcuts(),this.improveTabOrder()):this.removeKeyboardShortcuts()}setFocusVisible(r){this.settings.focusVisible=r,this.applyFocusVisible(),this.saveSettings(),this.dispatchSettingsChange()}applyFocusVisible(){this.settings.focusVisible?(document.documentElement.style.setProperty("--focus-outline-width","3px"),document.documentElement.style.setProperty("--focus-outline-style","solid"),document.documentElement.style.setProperty("--focus-outline-color","#2196F3")):(document.documentElement.style.removeProperty("--focus-outline-width"),document.documentElement.style.removeProperty("--focus-outline-style"),document.documentElement.style.removeProperty("--focus-outline-color"))}setDyslexiaFont(r){this.settings.dyslexiaFont=r,this.applyDyslexiaFont(),this.saveSettings(),this.dispatchSettingsChange()}applyDyslexiaFont(){this.settings.dyslexiaFont?(document.body.classList.add("dyslexia-font"),document.documentElement.style.setProperty("--font-family-primary",'"OpenDyslexic", "Lexie Readable", Arial, sans-serif')):(document.body.classList.remove("dyslexia-font"),document.documentElement.style.removeProperty("--font-family-primary"))}setLargeTargets(r){this.settings.largeTargets=r,this.applyLargeTargets(),this.saveSettings(),this.dispatchSettingsChange()}applyLargeTargets(){this.settings.largeTargets?(document.documentElement.style.setProperty("--touch-target-min-size","44px"),document.body.classList.add("large-targets")):(document.documentElement.style.removeProperty("--touch-target-min-size"),document.body.classList.remove("large-targets"))}setupEventListeners(){window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{this.applyReducedMotion()}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{this.updateColorScheme()});const c=window.matchMedia("(prefers-contrast: high)");c.addEventListener("change",()=>{c.matches&&this.setHighContrast(!0)})}addScreenReaderAnnouncements(){if(!document.getElementById("accessibility-announcements")){const r=document.createElement("div");r.id="accessibility-announcements",r.setAttribute("aria-live","polite"),r.setAttribute("aria-atomic","true"),r.className="sr-only",document.body.appendChild(r)}}removeScreenReaderAnnouncements(){const r=document.getElementById("accessibility-announcements");r&&r.remove()}announce(r,d="polite"){const c=document.getElementById("accessibility-announcements");c&&(c.setAttribute("aria-live",d),c.textContent=r,setTimeout(()=>{c.textContent=""},1e3))}improveSemanticStructure(){this.ensureLandmarks(),this.ensureHeadingStructure(),this.addAriaLabels()}ensureLandmarks(){[{selector:"header",role:"banner"},{selector:"nav",role:"navigation"},{selector:"main",role:"main"},{selector:"aside",role:"complementary"},{selector:"footer",role:"contentinfo"}].forEach(({selector:d,role:c})=>{document.querySelectorAll(d).forEach(b=>{b.getAttribute("role")||b.setAttribute("role",c)})})}ensureHeadingStructure(){const r=document.querySelectorAll("h1, h2, h3, h4, h5, h6");let d=0;r.forEach(c=>{const f=parseInt(c.tagName.charAt(1));f>d+1&&console.warn("Heading level skipped:",c.textContent),d=f})}addAriaLabels(){document.querySelectorAll("button[title], input[title], a[title]").forEach(d=>{const c=d.getAttribute("title");c&&!d.getAttribute("aria-label")&&d.setAttribute("aria-label",c)})}setupKeyboardShortcuts(){document.addEventListener("keydown",this.handleKeyboardShortcut.bind(this))}removeKeyboardShortcuts(){document.removeEventListener("keydown",this.handleKeyboardShortcut.bind(this))}handleKeyboardShortcut(r){if(r.target.matches("input, textarea, [contenteditable]"))return;const{ctrlKey:d,metaKey:c,altKey:f,shiftKey:b,key:p}=r;(d||c)&&p==="="?(r.preventDefault(),this.setFontSize(this.settings.fontSize+10),this.announce(`Font size increased to ${this.settings.fontSize}%`)):(d||c)&&p==="-"?(r.preventDefault(),this.setFontSize(this.settings.fontSize-10),this.announce(`Font size decreased to ${this.settings.fontSize}%`)):(d||c)&&p==="0"?(r.preventDefault(),this.setFontSize(100),this.announce("Font size reset to 100%")):f&&p==="h"&&(r.preventDefault(),this.setHighContrast(!this.settings.highContrast),this.announce(`High contrast ${this.settings.highContrast?"enabled":"disabled"}`))}improveTabOrder(){document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach((d,c)=>{d.hasAttribute("tabindex")||d.setAttribute("tabindex","0")})}updateColorScheme(){const r=window.matchMedia("(prefers-color-scheme: dark)").matches,d=new CustomEvent("systemColorSchemeChange",{detail:{prefersDark:r}});document.dispatchEvent(d)}validateAccessibility(){const r=[];return this.checkColorContrast(r),this.checkFocusIndicators(r),this.checkAltText(r),this.checkFormLabels(r),{compliant:r.length===0,issues:r}}checkColorContrast(r){this.settings.highContrast&&document.querySelectorAll("p, span, div, h1, h2, h3, h4, h5, h6").forEach(c=>{const f=window.getComputedStyle(c),b=f.color,p=f.backgroundColor;(b===p||p==="rgba(0, 0, 0, 0)")&&r.push({type:"contrast",element:c,message:"Element may have insufficient color contrast"})})}checkFocusIndicators(r){document.querySelectorAll("button, [href], input, select, textarea").forEach(c=>{const b=window.getComputedStyle(c).outline;(b==="none"||b==="")&&r.push({type:"focus",element:c,message:"Element lacks visible focus indicator"})})}checkAltText(r){document.querySelectorAll("img").forEach(c=>{!c.alt&&!c.getAttribute("aria-label")&&r.push({type:"alt-text",element:c,message:"Image missing alt text or aria-label"})})}checkFormLabels(r){document.querySelectorAll("input, select, textarea").forEach(c=>{!(document.querySelector(`label[for="${c.id}"]`)||c.getAttribute("aria-label")||c.getAttribute("aria-labelledby"))&&c.type!=="hidden"&&r.push({type:"form-label",element:c,message:"Form input missing associated label"})})}getSettings(){return{...this.settings}}resetSettings(){this.settings={fontSize:100,highContrast:!1,reducedMotion:!1,screenReaderOptimized:!1,keyboardNavigation:!0,focusVisible:!0,dyslexiaFont:!1,largeTargets:!1},this.applySettings(),this.saveSettings(),this.dispatchSettingsChange(),this.announce("Accessibility settings reset to defaults")}}const xn=new By,nu={highlightSpecialChars:!1,tabSize:4,indentUnit:2,lineSeparator:"auto",theme:"light",scrollPastEnd:!1,showLintGutter:!1,showLineNumbers:!0,showFoldGutter:!0,showWritingStats:!0,showPlaceholder:!1},Uy=[{value:"auto",label:"Auto (system default)"},{value:`
`,label:"LF (Unix/Linux)"},{value:`\r
`,label:"CRLF (Windows)"}],Am=[{value:"light",label:"Light"},{value:"dark",label:"Dark"}];function Wm({isOpen:m,onClose:r,settings:d,onSettingsChange:c}){const f=g.useRef(null);Ru(f,m);const[b,p]=g.useState("general"),[v,j]=g.useState(()=>{const G=d||nu;return{...G,theme:G.theme||"light"}}),[X,H]=g.useState(()=>xn.getSettings()),$=()=>{c(v),Object.entries(X).forEach(([G,x])=>{F(G,x)}),r()},k=()=>{const G=d||nu;j({...G,theme:G.theme||"light"}),r()},V=()=>{j(nu),xn.resetSettings(),H(xn.getSettings())},B=(G,x)=>{G==="theme"&&(Am.map(se=>se.value).includes(x)||(x="light")),j(W=>({...W,[G]:x}))},F=(G,x)=>{const W={...X,[G]:x};switch(H(W),G){case"fontSize":xn.setFontSize(x);break;case"highContrast":xn.setHighContrast(x);break;case"reducedMotion":xn.setReducedMotion(x);break;case"screenReaderOptimized":xn.setScreenReaderOptimized(x);break;case"keyboardNavigation":xn.setKeyboardNavigation(x);break;case"focusVisible":xn.setFocusVisible(x);break;case"dyslexiaFont":xn.setDyslexiaFont(x);break;case"largeTargets":xn.setLargeTargets(x);break}};return s.jsx(Bo,{open:m,onOpenChange:r,children:s.jsx(Uo,{ref:f,className:`settings-dialog-surface ${(v.theme||d?.theme||"light")==="dark"?"dark-theme":"light-theme"}`,children:s.jsxs(qo,{className:"settings-dialog-body",children:[s.jsx(Yo,{children:"Settings"}),s.jsx("div",{className:"settings-fixed-header",children:s.jsxs("div",{className:"custom-tabs",children:[s.jsx("button",{className:`tab-button ${b==="general"?"active":""}`,onClick:()=>p("general"),children:"General"}),s.jsx("button",{className:`tab-button ${b==="accessibility"?"active":""}`,onClick:()=>p("accessibility"),children:"Accessibility"})]})}),s.jsx(Au,{className:"settings-dialog-scroll-content",children:s.jsxs("div",{className:"settings-tab-content",children:[b==="general"&&s.jsxs("div",{className:"tab-panel",children:[s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Display"}),s.jsx(Ct,{label:"Theme",children:s.jsx("select",{value:v.theme||"light",onChange:G=>B("theme",G.target.value),className:"theme-select",children:Am.map(G=>s.jsx("option",{value:G.value,children:G.label},G.value))})}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Highlight Special Characters"}),s.jsx(on,{checked:v.highlightSpecialChars,onChange:(G,x)=>B("highlightSpecialChars",x.checked),label:"Show whitespace and non-printable characters"})]}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Scroll Past End"}),s.jsx(on,{checked:v.scrollPastEnd,onChange:(G,x)=>B("scrollPastEnd",x.checked),label:"Allow scrolling beyond the last line"})]})]}),s.jsx(vl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Indentation"}),s.jsx(Ct,{label:"Tab Size",children:s.jsx(ui,{type:"number",min:"1",max:"8",value:v.tabSize,onChange:(G,x)=>B("tabSize",parseInt(x.value)||4)})}),s.jsx(Ct,{label:"Indent Unit",children:s.jsx(ui,{type:"number",min:"1",max:"8",value:v.indentUnit,onChange:(G,x)=>B("indentUnit",parseInt(x.value)||2)})}),s.jsx(Ct,{label:"Line Separator",children:s.jsx("select",{value:v.lineSeparator,onChange:G=>B("lineSeparator",G.target.value),className:"line-separator-select",children:Uy.map(G=>s.jsx("option",{value:G.value,children:G.label},G.value))})})]}),s.jsx(vl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Editor Features"}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Writing Statistics"}),s.jsx(on,{checked:v.showWritingStats,onChange:(G,x)=>B("showWritingStats",x.checked),label:"Display word count, reading time, and other writing metrics"})]})]}),s.jsx(vl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Gutters"}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Line Numbers"}),s.jsx(on,{checked:v.showLineNumbers,onChange:(G,x)=>B("showLineNumbers",x.checked),label:"Show line numbers in the gutter"})]}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Fold Gutter"}),s.jsx(on,{checked:v.showFoldGutter,onChange:(G,x)=>B("showFoldGutter",x.checked),label:"Show expand/collapse controls for headings"})]}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Lint Gutter"}),s.jsx(on,{checked:v.showLintGutter,onChange:(G,x)=>B("showLintGutter",x.checked),label:"Show syntax errors and warnings in the gutter"})]}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Placeholder"}),s.jsx(on,{checked:v.showPlaceholder,onChange:(G,x)=>B("showPlaceholder",x.checked),label:"Show placeholder text when editor is empty"})]})]})]}),b==="accessibility"&&s.jsxs("div",{className:"tab-panel",children:[s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Visual"}),s.jsxs("div",{className:"setting-item",children:[s.jsxs("label",{htmlFor:"font-size",children:["Font Size: ",X.fontSize,"%"]}),s.jsx("input",{id:"font-size",type:"range",min:"100",max:"200",step:"10",value:X.fontSize,onChange:G=>F("fontSize",parseInt(G.target.value)),"aria-describedby":"font-size-description",className:"accessibility-range"}),s.jsx("div",{id:"font-size-description",className:"setting-description",children:"Adjust text size up to 200% for better readability"})]}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"High Contrast Mode"}),s.jsx(on,{checked:X.highContrast,onChange:(G,x)=>F("highContrast",x.checked),label:"Increase contrast ratios to meet WCAG AAA standards (4.5:1 or better)"})]}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Dyslexia-Friendly Font"}),s.jsx(on,{checked:X.dyslexiaFont,onChange:(G,x)=>F("dyslexiaFont",x.checked),label:"Use OpenDyslexic font for improved readability"})]})]}),s.jsx(vl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Motion"}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Reduced Motion"}),s.jsx(on,{checked:X.reducedMotion,onChange:(G,x)=>F("reducedMotion",x.checked),label:"Minimize animations and transitions for users with vestibular disorders"})]})]}),s.jsx(vl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Interaction"}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Enhanced Keyboard Navigation"}),s.jsx(on,{checked:X.keyboardNavigation,onChange:(G,x)=>F("keyboardNavigation",x.checked),label:"Enable keyboard shortcuts and improve tab navigation"})]}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Visible Focus Indicators"}),s.jsx(on,{checked:X.focusVisible,onChange:(G,x)=>F("focusVisible",x.checked),label:"Show clear 3px focus outlines for keyboard navigation"})]}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Large Touch Targets"}),s.jsx(on,{checked:X.largeTargets,onChange:(G,x)=>F("largeTargets",x.checked),label:"Ensure all interactive elements are at least 44px for motor accessibility"})]})]}),s.jsx(vl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Screen Reader"}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Screen Reader Optimizations"}),s.jsx(on,{checked:X.screenReaderOptimized,onChange:(G,x)=>F("screenReaderOptimized",x.checked),label:"Improve semantic structure and add ARIA labels for screen readers"})]})]}),s.jsx(vl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Keyboard Shortcuts"}),s.jsxs("div",{className:"shortcuts-list",children:[s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"+"}),s.jsx("span",{children:"Increase font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"-"}),s.jsx("span",{children:"Decrease font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"0"}),s.jsx("span",{children:"Reset font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Alt"})," + ",s.jsx("kbd",{children:"H"}),s.jsx("span",{children:"Toggle high contrast"})]})]})]})]})]})}),s.jsxs(Xo,{children:[s.jsx(Zt,{appearance:"secondary",onClick:V,children:"Reset to Defaults"}),s.jsx(Zt,{appearance:"secondary",onClick:k,children:"Cancel"}),s.jsx(Zt,{appearance:"primary",onClick:$,children:"Save"})]})]})})})}const qy=Object.freeze(Object.defineProperty({__proto__:null,default:Wm},Symbol.toStringTag,{value:"Module"}));g.lazy(()=>$t(()=>Promise.resolve().then(()=>Ry),void 0));g.lazy(()=>$t(()=>Promise.resolve().then(()=>qy),void 0));g.lazy(()=>$t(()=>Promise.resolve().then(()=>Ny),void 0));g.lazy(()=>$t(()=>Promise.resolve().then(()=>Zy),void 0));const Yy=g.lazy(()=>$t(()=>Promise.resolve().then(()=>av),void 0));g.lazy(()=>$t(()=>Promise.resolve().then(()=>lv),void 0));const Xy=g.lazy(()=>$t(()=>Promise.resolve().then(()=>iv),void 0)),Gy=g.lazy(()=>$t(()=>Promise.resolve().then(()=>cv),void 0)),Vy=g.lazy(()=>$t(()=>Promise.resolve().then(()=>dv),void 0));g.lazy(()=>$t(()=>Promise.resolve().then(()=>Hy),void 0));g.lazy(()=>$t(()=>import("./AccessibilityPanel.DqvEOJ0q.js"),__vite__mapDeps([3,1,0,4,5,6])));g.lazy(()=>$t(()=>Promise.resolve().then(()=>zy),void 0));const Qy=({appMode:m,content:r,editorView:d,fileId:c,visible:f,activeTab:b,onTabChange:p,onUndockPanel:v,dockedPanels:j=["preview","outline","property","history","snippet"],onNavigate:X,onUpdateProperty:H,onRestoreHistory:$,onMoveSection:k,onInsertSnippet:V,isDarkTheme:B,activeLine:F=0})=>{const G=g.useRef({ratio:0,pixel:0}),x=g.useRef({tabId:null,startY:0,startTime:0}),W=g.useRef(null),se=g.useRef(null),A=(L,Q)=>{const I=L.touches[0];x.current={tabId:Q,startY:I.clientY,startTime:Date.now()},W.current&&clearTimeout(W.current),W.current=setTimeout(()=>{v&&x.current.tabId&&(v(x.current.tabId),x.current.tabId=null)},600)},U=L=>{if(!x.current.tabId)return;const I=L.touches[0].clientY-x.current.startY;Math.abs(I)>10&&W.current&&(clearTimeout(W.current),W.current=null),Math.abs(I)>50&&v&&(v(x.current.tabId),x.current.tabId=null,W.current&&(clearTimeout(W.current),W.current=null))},T=()=>{W.current&&(clearTimeout(W.current),W.current=null),x.current.tabId=null};return f?s.jsxs("div",{className:"right-panel-container",children:[m==="edit"&&s.jsx("div",{className:"right-panel-tabs",ref:se,onDragOver:L=>{L.preventDefault(),L.stopPropagation()},onDrop:L=>{L.stopPropagation()},onTouchMove:U,onTouchEnd:T,children:s.jsxs(pb,{selectedValue:b,onTabSelect:(L,Q)=>p(Q.value),children:[j.includes("preview")&&s.jsx(ls,{value:"preview",draggable:!0,onDragStart:L=>{L.dataTransfer.setData("tabId","preview"),L.dataTransfer.effectAllowed="move"},onTouchStart:L=>A(L,"preview"),children:"Preview"}),j.includes("outline")&&s.jsx(ls,{value:"outline",draggable:!0,onDragStart:L=>{L.dataTransfer.setData("tabId","outline"),L.dataTransfer.effectAllowed="move"},onTouchStart:L=>A(L,"outline"),children:"Outline"}),j.includes("property")&&s.jsx(ls,{value:"property",draggable:!0,onDragStart:L=>{L.dataTransfer.setData("tabId","property"),L.dataTransfer.effectAllowed="move"},onTouchStart:L=>A(L,"property"),children:"Property"}),j.includes("history")&&s.jsx(ls,{value:"history",draggable:!0,onDragStart:L=>{L.dataTransfer.setData("tabId","history"),L.dataTransfer.effectAllowed="move"},onTouchStart:L=>A(L,"history"),children:"History"}),j.includes("snippet")&&s.jsx(ls,{value:"snippet",draggable:!0,onDragStart:L=>{L.dataTransfer.setData("tabId","snippet"),L.dataTransfer.effectAllowed="move"},onTouchStart:L=>A(L,"snippet"),children:"Snippets"})]})}),s.jsxs("div",{className:"right-panel-content",children:[j.includes("preview")&&s.jsx("div",{className:`tab-panel ${m==="view"||b==="preview"?"active":""}`,children:s.jsx(cs,{content:r,visible:m==="view"||b==="preview",scrollStateRef:G,onJumpToLine:X,activeLine:F})}),j.includes("outline")&&s.jsx("div",{className:`tab-panel ${b==="outline"?"active":""}`,children:s.jsx(g.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Outline..."}),children:s.jsx(Xy,{content:r,visible:b==="outline",onNavigate:X,onMoveSection:k,inline:!0,activeLine:F})})}),j.includes("property")&&s.jsx("div",{className:`tab-panel ${b==="property"?"active":""}`,children:s.jsx(g.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Properties..."}),children:s.jsx(Gy,{content:r,visible:b==="property",inline:!0,onUpdate:H})})}),j.includes("history")&&s.jsx("div",{className:`tab-panel ${b==="history"?"active":""}`,children:s.jsx(g.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading History..."}),children:s.jsx(Vy,{fileId:c,visible:b==="history",inline:!0,onRestore:$})})}),j.includes("snippet")&&s.jsx("div",{className:`tab-panel ${b==="snippet"?"active":""}`,children:s.jsx(g.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Snippets..."}),children:s.jsx(Yy,{visible:b==="snippet",inline:!0,onInsert:V,isDarkTheme:B})})})]})]}):null},Im=({isOpen:m,onClose:r,actions:d,isDark:c})=>{const[f,b]=g.useState(""),[p,v]=g.useState(0),{position:j,setPosition:X}=Sl("command-palette",{x:window.innerWidth/2-250,y:100}),[H,$]=g.useState(!1),k=g.useRef({x:0,y:0}),V=g.useRef(null),B=g.useRef(null),F=g.useRef(null),G=g.useMemo(()=>{let A=d.filter(T=>!T.disabled);if(!f)return A;const U=f.toLowerCase();return A.filter(T=>T.label.toLowerCase().includes(U)||T.id.toLowerCase().includes(U))},[d,f]);g.useEffect(()=>{m&&(b(""),v(0),setTimeout(()=>V.current?.focus(),100))},[m]),g.useEffect(()=>{v(0)},[f]);const x=A=>{A.key==="ArrowDown"?(A.preventDefault(),v(U=>(U+1)%G.length)):A.key==="ArrowUp"?(A.preventDefault(),v(U=>(U-1+G.length)%G.length)):A.key==="Enter"?(A.preventDefault(),G[p]&&(G[p].onExecute(),r())):A.key==="Escape"&&r()},W=A=>{A.target.closest(".command-palette-close")||A.target.closest(".command-palette-search-wrapper")||A.target.closest(".command-palette-content")||($(!0),k.current={x:A.clientX-j.x,y:A.clientY-j.y},A.preventDefault())},se=A=>{if(A.target.closest(".command-palette-close")||A.target.closest(".command-palette-search-wrapper")||A.target.closest(".command-palette-content"))return;const U=A.touches[0];$(!0),k.current={x:U.clientX-j.x,y:U.clientY-j.y}};return g.useEffect(()=>{const A=T=>{if(!H)return;const L=T.type==="touchmove"?T.touches[0].clientX:T.clientX,Q=T.type==="touchmove"?T.touches[0].clientY:T.clientY,I=L-k.current.x,le=Q-k.current.y;X({x:Math.max(0,Math.min(I,window.innerWidth-100)),y:Math.max(0,Math.min(le,window.innerHeight-100))})},U=()=>{$(!1)};return H&&(window.addEventListener("mousemove",A),window.addEventListener("mouseup",U),window.addEventListener("touchmove",A,{passive:!1}),window.addEventListener("touchend",U),window.addEventListener("touchcancel",U),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",U),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",U),window.removeEventListener("touchcancel",U),document.body.style.userSelect=""}},[H]),g.useEffect(()=>{if(!m)return;const A=U=>{if(F.current&&!F.current.contains(U.target)){if(U.target.closest('[aria-label="Command Palette"]'))return;r()}};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[m,r]),g.useEffect(()=>{const A=B.current?.querySelector(".command-item.selected");A&&A.scrollIntoView({block:"nearest"})},[p]),m?s.jsx("div",{className:"command-palette-overlay",children:s.jsxs("div",{ref:F,className:`command-palette-surface ${H?"dragging":""} ${c?"dark-theme":"light-theme"}`,style:{left:`${j.x}px`,top:`${j.y}px`},children:[s.jsxs("div",{className:"command-palette-title-bar",onMouseDown:W,onTouchStart:se,children:[s.jsxs("div",{className:"command-palette-title",children:[s.jsx(gb,{className:"title-icon"}),s.jsx("span",{children:"Command Palette"})]}),s.jsx("button",{className:"command-palette-close",onClick:r,children:s.jsx(Ho,{})})]}),s.jsxs("div",{className:"command-palette-search-wrapper",children:[s.jsx(Um,{className:"command-palette-icon"}),s.jsx("input",{ref:V,className:"command-palette-input",placeholder:"Type a command or search...",value:f,onChange:A=>b(A.target.value),onKeyDown:x})]}),s.jsx("div",{className:"command-palette-content",children:s.jsx("div",{className:"command-list",ref:B,children:G.length>0?G.map((A,U)=>s.jsxs("div",{className:`command-item ${U===p?"selected":""}`,onClick:()=>{A.onExecute(),r()},onMouseEnter:()=>v(U),children:[s.jsx("span",{className:"command-item-icon",children:A.icon}),s.jsx("span",{className:"command-item-label",children:A.label}),A.shortcut&&s.jsx("span",{className:"command-item-shortcut",children:A.shortcut})]},A.id)):s.jsx("div",{className:"command-no-results",children:"No commands found"})})})]})}):null},Zy=Object.freeze(Object.defineProperty({__proto__:null,default:Im},Symbol.toStringTag,{value:"Module"})),Fy=`# Comprehensive Math Formula Test Suite

This file contains extensive test cases for mathematical formula rendering in Markdown, covering basic arithmetic, algebra, calculus, linear algebra, statistics, physics, and advanced mathematical concepts.


### Simple Equations
$1 + 1 = 2$

$x + y = z$

$a - b = c$

### Fractions
$\\frac{1}{2}$

$\\frac{a}{b}$

$\\frac{x^2 + 2x + 1}{x - 1}$

### Mixed Numbers
$2\\frac{1}{2}$

$3\\frac{3}{4}$

### Linear Equations
$ax + b = c$

$2x + 3 = 7$

$y = mx + b$

### Quadratic Equations
$x^2 + 2x + 1 = 0$

$ax^2 + bx + c = 0$

$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$

### Polynomials
$x^3 + 2x^2 - x + 5 = 0$

$(x + 1)(x - 2)(x + 3) = x^3 + 2x^2 - 5x - 6$

### Exponents and Roots
$x^2$

$x^{2n}$

$\\sqrt{x}$

$\\sqrt[3]{x}$

$\\sqrt[n]{x^n}$

$x^{\\frac{1}{2}}$


### Limits
$\\lim_{x \\to \\infty} \\frac{1}{x} = 0$

$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$

$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$

### Derivatives
$\\frac{d}{dx} x^n = nx^{n-1}$

$\\frac{d}{dx} \\sin x = \\cos x$

$\\frac{d}{dx} e^x = e^x$

$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$

### Integrals
$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$

$\\int_0^1 x^2 dx = \\frac{1}{3}$

$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$

$\\int_a^b f(x) dx = F(b) - F(a)$

### Partial Derivatives
$\\frac{\\partial f}{\\partial x}$

$\\frac{\\partial^2 f}{\\partial x \\partial y}$

$\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z}\\right)$


### Vectors
$\\vec{v} = (v_1, v_2, v_3)$

$\\mathbf{v} = \\begin{pmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{pmatrix}$

$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$

### Matrices
$A = \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix}$

$A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{bmatrix}$

$A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$

### Matrix Operations
$AB = C$

$A^T$

$\\det(A)$

$\\text{tr}(A)$

### Systems of Linear Equations
$\\begin{cases} 2x + 3y = 7 \\\\ x - y = 1 \\end{cases}$

$Ax = b$


### Statistical Measures
$\\mu = \\frac{1}{n}\\sum_{i=1}^{n} x_i$

$\\sigma^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\mu)^2$

$\\sigma = \\sqrt{\\sigma^2}$

### Probability
$P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}}$

$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$

$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$

### Distributions
$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$

$P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}$


### Basic Functions
$\\sin \\theta$

$\\cos \\theta$

$\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$

### Identities
$\\sin^2 \\theta + \\cos^2 \\theta = 1$

$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$

$\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$

### Inverse Functions
$\\arcsin x$

$\\arccos x$

$\\arctan x$


### Basic Hyperbolic Functions
$\\sinh x = \\frac{e^x - e^{-x}}{2}$

$\\cosh x = \\frac{e^x + e^{-x}}{2}$

$\\tanh x = \\frac{\\sinh x}{\\cosh x}$

$\\coth x = \\frac{\\cosh x}{\\sinh x}$

$\\text{sech } x = \\frac{1}{\\cosh x}$

$\\text{csch } x = \\frac{1}{\\sinh x}$

### Inverse Hyperbolic Functions
$\\arcsinh x = \\ln(x + \\sqrt{x^2 + 1})$

$\\arccosh x = \\ln(x + \\sqrt{x^2 - 1})$

$\\arctanh x = \\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)$


### Basic Forms
$z = a + bi$

$z = re^{i\\theta}$

$z = r(\\cos\\theta + i\\sin\\theta)$

### Operations
$z_1 + z_2 = (a_1 + a_2) + i(b_1 + b_2)$

$z_1 \\cdot z_2 = r_1r_2e^{i(\\theta_1 + \\theta_2)}$

$\\bar{z} = a - bi$

$|z| = \\sqrt{a^2 + b^2}$

### Euler's Formula
$e^{i\\pi} + 1 = 0$

$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$


### Basic Operations
$A \\cup B$

$A \\cap B$

$A \\setminus B$

$A^c$

### Set Relations
$A \\subseteq B$

$A \\subset B$

$A = B$

$|A|$ (cardinality)

### Special Sets
$\\emptyset$

$\\mathbb{N}$ (natural numbers)

$\\mathbb{Z}$ (integers)

$\\mathbb{Q}$ (rational numbers)

$\\mathbb{R}$ (real numbers)

$\\mathbb{C}$ (complex numbers)


### Logical Operators
$p \\land q$

$p \\lor q$

$\\lnot p$

$p \\implies q$

$p \\iff q$

### Quantifiers
$\\forall x \\in S, P(x)$

$\\exists x \\in S, P(x)$

$\\forall x \\exists y, P(x,y)$


### Area and Volume
$A = \\pi r^2$ (circle)

$V = \\frac{4}{3}\\pi r^3$ (sphere)

$A = 2\\pi rh$ (cylinder surface)

$V = \\pi r^2 h$ (cylinder volume)

### Distance Formula
$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$


### Mechanics
$F = ma$

$W = Fd$

$KE = \\frac{1}{2}mv^2$

$PE = mgh$

$p = mv$

### Waves and Optics
$v = f\\lambda$

$c = \\frac{1}{\\sqrt{\\mu_0\\epsilon_0}}$

$E = h\\nu$

### Thermodynamics
$PV = nRT$

$\\Delta U = Q - W$

$S = k_B \\ln W$


### Matrix Operations
$\\det(A)$ (determinant)

$\\text{tr}(A)$ (trace)

$\\|A\\|_2$ (spectral norm)

$\\|A\\|_F$ (Frobenius norm)

$A^\\dagger$ (Hermitian adjoint)

$A^+$ (Moore-Penrose pseudoinverse)

### Eigenvalues and Eigenvectors
$A\\mathbf{v} = \\lambda\\mathbf{v}$

$\\text{spec}(A) = \\{\\lambda_1, \\lambda_2, \\ldots, \\lambda_n\\}$

$\\rho(A) = \\max\\{|\\lambda| : \\lambda \\in \\text{spec}(A)\\}$ (spectral radius)

### Special Matrices
$I_n$ (identity matrix)

$J_n$ (all-ones matrix)

$0_{m \\times n}$ (zero matrix)

$\\text{diag}(a_1, a_2, \\ldots, a_n)$ (diagonal matrix)


### Vector Calculus Operators
$\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z}\\right)$ (gradient)

$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$ (divergence)

$\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix}$ (curl)

$\\Delta f = \\nabla^2 f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\frac{\\partial^2 f}{\\partial z^2}$ (Laplacian)

### Vector Identities
$\\nabla \\times (\\nabla f) = \\mathbf{0}$

$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$

$\\nabla \\cdot (\\nabla f) = \\Delta f$

### Integral Theorems
$\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$ (Stokes' theorem)

$\\oint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F}) dV$ (Divergence theorem)


### Differential Equations
$\\frac{dy}{dt} = ky$

$\\frac{d^2y}{dt^2} + \\omega^2 y = 0$

$\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$

### Fourier Series
$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left(a_n\\cos\\frac{n\\pi x}{L} + b_n\\sin\\frac{n\\pi x}{L}\\right)$

$a_n = \\frac{1}{L}\\int_{-L}^{L} f(x)\\cos\\frac{n\\pi x}{L}dx$

### Taylor Series
$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$

$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$

$\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$


### Gamma Function
$\\Gamma(z) = \\int_0^{\\infty} t^{z-1}e^{-t}dt$

$\\Gamma(n) = (n-1)!$

### Beta Function
$B(x,y) = \\int_0^1 t^{x-1}(1-t)^{y-1}dt$

$B(x,y) = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}$

### Error Function
$\\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_0^x e^{-t^2}dt$


### Prime Numbers
$p$ is prime if $p > 1$ and $\\forall d \\in \\mathbb{N}, d|p \\implies d = 1 \\text{ or } d = p$

### Modular Arithmetic
$a \\equiv b \\pmod{n}$

$a^k \\equiv b^k \\pmod{n}$

Fermat's Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ for prime $p$

### Euler's Totient Function
$\\phi(n) = |\\{k \\in \\mathbb{N} : 1 \\leq k \\leq n, \\gcd(k,n) = 1\\}|$

### Advanced Number Theory
Legendre symbol: $\\left(\\frac{a}{p}\\right) = \\begin{cases} 1 & \\text{if } a \\text{ is quadratic residue mod } p \\\\ -1 & \\text{if } a \\text{ is quadratic non-residue mod } p \\\\ 0 & \\text{if } p \\mid a \\end{cases}$

Jacobi symbol: $\\left(\\frac{a}{n}\\right) = \\left(\\frac{a}{p_1}\\right)^{\\alpha_1} \\left(\\frac{a}{p_2}\\right)^{\\alpha_2} \\cdots \\left(\\frac{a}{p_k}\\right)^{\\alpha_k}$

Möbius function: $\\mu(n) = \\begin{cases} 1 & \\text{if } n = 1 \\\\ (-1)^k & \\text{if } n \\text{ is product of } k \\text{ distinct primes} \\\\ 0 & \\text{if } n \\text{ has squared prime factor} \\end{cases}$

Riemann zeta function: $\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}$

### Logical Connectives
$p \\oplus q$ (exclusive OR)

$p \\uparrow q$ (NAND - Sheffer stroke)

$p \\downarrow q$ (NOR - Peirce arrow)

$p \\rightarrow q$ (material implication)

$p \\leftrightarrow q$ (biconditional)

### Quantifiers with Restrictions
$\\forall x \\in S, P(x)$ (universal quantifier)

$\\exists x \\in S, P(x)$ (existential quantifier)

$\\exists! x \\in S, P(x)$ (unique existence)

$\\forall x \\exists y, P(x,y)$ (mixed quantifiers)

### Logical Equivalences
$p \\rightarrow q \\equiv \\lnot p \\lor q$

$p \\leftrightarrow q \\equiv (p \\rightarrow q) \\land (q \\rightarrow p)$

De Morgan's laws: $\\lnot(p \\land q) \\equiv \\lnot p \\lor \\lnot q$ and $\\lnot(p \\lor q) \\equiv \\lnot p \\land \\lnot q$


### Quantum Mechanics
Hamiltonian: $H = -\\frac{\\hbar^2}{2m}\\nabla^2 + V(\\mathbf{r})$

Schrödinger equation: $i\\hbar\\frac{\\partial \\psi}{\\partial t} = H\\psi$

Momentum operator: $\\hat{p} = -i\\hbar\\nabla$

Angular momentum: $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$

### Relativity
Four-vector: $x^\\mu = (ct, x, y, z)$

Minkowski metric: $\\eta_{\\mu\\nu} = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & -1 & 0 & 0 \\\\ 0 & 0 & -1 & 0 \\\\ 0 & 0 & 0 & -1 \\end{pmatrix}$

Lorentz transformation: $x'^\\mu = \\Lambda^\\mu_{\\ \\nu} x^\\nu$

### Electromagnetism
Field strength tensor: $F_{\\mu\\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu$

Maxwell's equations: $\\partial_\\mu F^{\\mu\\nu} = \\mu_0 J^\\nu$

Lagrangian density: $\\mathcal{L} = -\\frac{1}{4\\mu_0}F_{\\mu\\nu}F^{\\mu\\nu} - J_\\mu A^\\mu$

### Chemical Equations
Water formation: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$

Photosynthesis: $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$

### Isotopes and Atomic Mass
Carbon-14: $^{14}\\text{C}$

Uranium-235: $^{235}\\text{U}$

Atomic mass unit: $1 \\text{ u} = 1.66054 \\times 10^{-27} \\text{ kg}$

### Chemical Equilibrium
Equilibrium constant: $K = \\frac{[\\text{products}]}{[\\text{reactants}]}$

Gibbs free energy: $\\Delta G = \\Delta G^\\circ + RT\\ln Q$

### Alignat Environment
\\begin{alignat}
f(x) &= x^2 + 2x + 1 & g(x) &= x^3 - x \\\\
f'(x) &= 2x + 2 & g'(x) &= 3x^2 - 1
\\end{alignat}

### Gather Environment
\\begin{gather}
\\int_0^1 x^2 dx = \\frac{1}{3} \\\\
\\int_0^{\\pi/2} \\sin x dx = 1 \\\\
\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}
\\end{gather}

### Multline Environment
\\begin{multline}
\\int_{-\\infty}^{\\infty} e^{-x^2} dx \\\\
= \\sqrt{\\pi} \\\\
= 1.772453850905516027298167483341145182797549456122387128213807789852911284591032181374950656738544665\\ldots
\\end{multline}


### Advanced Combinatorics
Multinomial coefficients: $\\binom{n}{k_1,k_2,\\ldots,k_m} = \\frac{n!}{k_1!k_2!\\cdots k_m!}$

Stirling numbers of the first kind: $\\left[{n \\atop k}\\right]$

Stirling numbers of the second kind: $\\left\\{n \\atop k\\right\\}$

Bell numbers: $B_n = \\sum_{k=0}^{n} \\left\\{n \\atop k\\right\\}$

Catalan numbers: $C_n = \\frac{1}{n+1}\\binom{2n}{n}$

### Special Functions
Airy functions: $\\text{Ai}(x), \\text{Bi}(x)$

Bessel functions: $J_n(x), Y_n(x)$

Legendre polynomials: $P_n(x)$

Hermite polynomials: $H_n(x)$

Laguerre polynomials: $L_n(x)$

Chebyshev polynomials: $T_n(x), U_n(x)$

### Continued Fractions
Simple continued fraction: $x = a_0 + \\cfrac{1}{a_1 + \\cfrac{1}{a_2 + \\cfrac{1}{a_3 + \\ddots}}}$

General continued fraction: $x = a_0 + \\cfrac{b_1}{a_1 + \\cfrac{b_2}{a_2 + \\cfrac{b_3}{a_3 + \\ddots}}}$

### Asymptotic Notation
Big O: $f(n) = O(g(n))$

Little o: $f(n) = o(g(n))$

Big Omega: $f(n) = \\Omega(g(n))$

Big Theta: $f(n) = \\Theta(g(n))$

### Permutations
$P(n,k) = \\frac{n!}{(n-k)!}$

$n! = n \\times (n-1) \\times \\cdots \\times 1$

### Combinations
$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$

$\\binom{n}{k} = \\binom{n}{n-k}$

### Binomial Theorem
$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k}a^{n-k}b^k$

### Math Fraktur (Gothic)
$\\mathfrak{A}, \\mathfrak{B}, \\mathfrak{C}, \\mathfrak{D}, \\mathfrak{E}, \\mathfrak{F}, \\mathfrak{G}, \\mathfrak{H}$

$\\mathfrak{a}, \\mathfrak{b}, \\mathfrak{c}, \\mathfrak{d}, \\mathfrak{e}, \\mathfrak{f}, \\mathfrak{g}, \\mathfrak{h}$

### Math Sans-serif
$\\mathsf{A}, \\mathsf{B}, \\mathsf{C}, \\mathsf{D}, \\mathsf{E}, \\mathsf{F}, \\mathsf{G}, \\mathsf{H}$

$\\mathsf{a}, \\mathsf{b}, \\mathsf{c}, \\mathsf{d}, \\mathsf{e}, \\mathsf{f}, \\mathsf{g}, \\mathsf{h}$

### Math Bold
$\\mathbf{A}, \\mathbf{B}, \\mathbf{C}, \\mathbf{D}, \\mathbf{E}, \\mathbf{F}, \\mathbf{G}, \\mathbf{H}$

$\\mathbf{a}, \\mathbf{b}, \\mathbf{c}, \\mathbf{d}, \\mathbf{e}, \\mathbf{f}, \\mathbf{g}, \\mathbf{h}$

### Math Calligraphic
$\\mathcal{A}, \\mathcal{B}, \\mathcal{C}, \\mathcal{D}, \\mathcal{E}, \\mathcal{F}, \\mathcal{G}, \\mathcal{H}$

$\\mathcal{L}, \\mathcal{R}, \\mathcal{P}, \\mathcal{Q}, \\mathcal{S}, \\mathcal{T}, \\mathcal{U}, \\mathcal{V}$

### Math Typewriter
$\\mathtt{A}, \\mathtt{B}, \\mathtt{C}, \\mathtt{D}, \\mathtt{E}, \\mathtt{F}, \\mathtt{G}, \\mathtt{H}$

$\\mathtt{a}, \\mathtt{b}, \\mathtt{c}, \\mathtt{d}, \\mathtt{e}, \\mathtt{f}, \\mathtt{g}, \\mathtt{h}$

### Blackboard Bold
$\\mathbb{A}, \\mathbb{B}, \\mathbb{C}, \\mathbb{D}, \\mathbb{E}, \\mathbb{F}, \\mathbb{G}, \\mathbb{H}$

$\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}, \\mathbb{H}, \\mathbb{O}$


### Common Greek Letters
$\\alpha, \\beta, \\gamma, \\delta, \\epsilon, \\zeta, \\eta, \\theta, \\iota, \\kappa, \\lambda, \\mu$

$\\nu, \\xi, \\pi, \\rho, \\sigma, \\tau, \\upsilon, \\phi, \\chi, \\psi, \\omega$

### Capital Greek Letters
$A, B, \\Gamma, \\Delta, E, Z, H, \\Theta, I, K, \\Lambda, M$

$N, \\Xi, \\Pi, P, \\Sigma, T, \\Upsilon, \\Phi, X, \\Psi, \\Omega$

### Mathematical Symbols
$\\infty$ (infinity)

$\\partial$ (partial derivative)

$\\nabla$ (nabla/del)

$\\sum$ (summation)

$\\prod$ (product)

$\\int$ (integral)

$\\oint$ (contour integral)


### Equality and Inequality
$\\leq, \\geq, \\neq, \\approx, \\equiv, \\sim, \\cong, \\simeq, \\asymp$

$\\prec, \\succ, \\preceq, \\succeq, \\ll, \\gg, \\subset, \\supset, \\subseteq, \\supseteq$

### Set Relations
$\\in, \\notin, \\ni, \\owns, \\infty, \\propto, \\parallel, \\perp, \\mid, \\nmid$

$\\vdash, \\dashv, \\models, \\vDash, \\Leftarrow, \\Rightarrow, \\Leftrightarrow$


### Basic Operations
$\\times, \\div, \\pm, \\mp, \\cdot, \\circ, \\star, \\ast, \\bullet$

$\\oplus, \\ominus, \\otimes, \\oslash, \\odot, \\circledcirc, \\boxplus, \\boxminus$

### Logical Operations
$\\wedge, \\vee, \\cap, \\cup, \\setminus, \\triangle, \\triangledown, \\triangleleft$

$\\uparrow, \\downarrow, \\updownarrow, \\Uparrow, \\Downarrow, \\Updownarrow$


### Multi-line Equations
\\begin{align}
f(x) &= x^2 + 2x + 1 \\\\
&= (x + 1)^2 \\\\
&= x^2 + 2x + 1
\\end{align}

### Piecewise Functions
f(x) = \\begin{cases}
x^2 & \\text{if } x \\geq 0 \\\\
-x & \\text{if } x < 0
\\end{cases}

### Cases Environment
\\begin{cases}
ax + by = c \\\\
dx + ey = f
\\end{cases}


### Subscripts and Superscripts
$x_1, x_2, x_{i,j}$

$x^2, x^{2n}, x^{i+j}$

$x_1^2, x_{i,j}^{k+l}$

### Brackets and Delimiters
$\\left( \\frac{a}{b} \\right)$

$\\left[ \\frac{a}{b} \\right]$

$\\left\\{ \\frac{a}{b} \\right\\}$

$\\left| \\frac{a}{b} \\right|$

$\\left\\lfloor \\frac{a}{b} \\right\\rfloor$

$\\left\\lceil \\frac{a}{b} \\right\\rceil$

### Large Operators
$\\sum_{i=1}^{n} a_i$

$\\prod_{i=1}^{n} a_i$

$\\bigcup_{i=1}^{n} A_i$

$\\bigcap_{i=1}^{n} A_i$


### Empty Fractions
$\\frac{}{}$

### Complex Nested Structures
$\\frac{\\frac{a}{b}}{\\frac{c}{d}}$

### Very Long Expressions
$\\frac{x^2 + 2xy + y^2 + 2xz + 2yz + z^2}{(x + y + z)^2}$

### Special Characters
$\\hbar$ (h-bar)

$\\Re$ (real part)

$\\Im$ (imaginary part)

$\\aleph$ (aleph)

$\\beth$ (beth)


### Mathematical Operators
± × ÷ ≠ ≤ ≥ ≈ ≡ ∈ ∉ ∪ ∩ ⊂ ⊃ ⊆ ⊇

### Superscripts and Subscripts
⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ⁽ ⁾

₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₌ ₍ ₎

### Fractions
½ ⅓ ⅔ ¼ ¾ ⅕ ⅖ ⅗ ⅘ ⅙ ⅚ ⅐ ⅛ ⅜ ⅝ ⅞


### Text with Math
The equation $E = mc^2$ is famous.

When $x = 5$, then $x^2 = 25$.

### Multiple Equations in One Line
$a + b = c$, $c - d = e$, and $e \\times f = g$.

### Math in Lists
- First term: $a_1$
- Second term: $a_2$
- Sum: $S = \\sum_{i=1}^{2} a_i$


### Large Matrices
$\\begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\\\ 6 & 7 & 8 & 9 & 10 \\\\ 11 & 12 & 13 & 14 & 15 \\\\ 16 & 17 & 18 & 19 & 20 \\\\ 21 & 22 & 23 & 24 & 25 \\end{pmatrix}$

### Complex Integrals
$\\int_0^{\\infty} \\int_0^{\\infty} e^{-x^2 - y^2} dx dy = \\frac{\\pi}{4}$

### Nested Fractions
$\\frac{\\frac{\\frac{a}{b}}{\\frac{c}{d}}}{\\frac{\\frac{e}{f}}{\\frac{g}{h}}}$

`,Ky=`# Comprehensive Mermaid Test Suite\r
\r
This document contains a variety of Mermaid.js diagrams to test the editor's rendering capabilities, error handling, CSS sandboxing, and theme awareness.\r
\r
### Standard Flowchart (graph)\r
Testing basic node shapes, edge types, and subgraphs.\r
\r
\`\`\`mermaid\r
graph TD\r
    A[Start Node] -->|Standard edge| B(Rounded Node)\r
    B --> C{Decision}\r
    C -->|Yes| D[Result 1]\r
    C -.No.-> E[/Result 2/]\r
    \r
    subgraph Data Processing\r
        D\r
        E\r
        F[(Database)]\r
        D ==> F\r
        E <--> F\r
    end\r
    \r
    F --> G(((End)))\r
\`\`\`\r
\r
### Sequence Diagram\r
Testing participant interactions, activations, and notes.\r
\r
\`\`\`mermaid\r
sequenceDiagram\r
    autonumber\r
    actor User\r
    participant App as Frontend App\r
    participant API as Backend Service\r
    participant DB as Main Database\r
    \r
    User->>App: Clicks "Login"\r
    activate App\r
    App->>API: POST /auth\r
    activate API\r
    API->>DB: Query User\r
    activate DB\r
    Note right of DB: Checks hashed<br>password\r
    DB-->>API: Returning Token\r
    deactivate DB\r
    API-->>App: 200 OK + JWT\r
    deactivate API\r
    App-->>User: Renders Dashboard\r
    deactivate App\r
\`\`\`\r
\r
### Gantt Chart\r
Testing temporal data rendering and task dependencies.\r
\r
\`\`\`mermaid\r
gantt\r
    title Markdown Editor Development Phase 2\r
    dateFormat  YYYY-MM-DD\r
    section Foundation\r
    Architecture Review :done,    des1, 2026-03-01,2026-03-03\r
    Install Turndown    :done,    des2, 2026-03-04, 1d\r
    section Advanced Features\r
    Mermaid Integration :active,  des3, 2026-03-05, 3d\r
    Scroll Sync         :done,    des4, after des1, 2d\r
    section Polish\r
    Typography Updates  :         des5, after des4, 2d\r
    Testing & QA        :         des6, after des3, 5d\r
\`\`\`\r
\r
### Class Diagram\r
Testing object-oriented design structures and relationships.\r
\r
\`\`\`mermaid\r
classDiagram\r
    class Document {\r
        +String title\r
        +String content\r
        +Date lastModified\r
        +save()\r
        +export(format)\r
    }\r
    class Editor {\r
        -CodeMirror view\r
        +render()\r
        +applyFormat(type)\r
    }\r
    class Preview {\r
        -Unified processor\r
        +syncScroll()\r
        +renderMermaid()\r
    }\r
    \r
    Document <|-- Editor : Edits\r
    Document <|-- Preview : Renders\r
    Editor <..> Preview : Bidirectional Sync\r
\`\`\`\r
\r
### State Diagram\r
Testing state transitions and concurrency.\r
\r
\`\`\`mermaid\r
stateDiagram-v2\r
    [*] --> Editing\r
    \r
    state Editing {\r
        [*] --> Typing\r
        Typing --> Paused : 500ms inactivity\r
        Paused --> Parsing : debounce fired\r
        Parsing --> Rendered\r
        Rendered --> Typing : User types\r
    }\r
    \r
    Editing --> Saving : Ctrl+S\r
    Saving --> Editing : Success\r
    Saving --> ErrorBox : Failure\r
    \r
    ErrorBox --> Editing : Dismiss\r
\`\`\`\r
\r
### Pie Chart\r
Testing simple data visualization.\r
\r
\`\`\`mermaid\r
pie title Markdown Editor File Types\r
    "Markdown (.md)" : 85\r
    "MDX (.mdx)" : 10\r
    "Text (.txt)" : 5\r
\`\`\`\r
\r
### Mindmap\r
Testing the newer Mermaid mindmap syntax and layout capabilities.\r
\r
\`\`\`mermaid\r
mindmap\r
  root((Markdown<br>Editor))\r
    Core\r
      [Syntax Highlighting]\r
      [Live Preview]\r
      (File Management)\r
    Advanced\r
      {{Mermaid Diagrams}}\r
      {{Smart Paste}}\r
      {{Scroll Sync}}\r
    Themes\r
      Dark Mode\r
      Light Mode\r
      High Contrast\r
\`\`\`\r
\r
### Entity Relationship Diagram\r
Testing database schema modeling with relationships and cardinality.\r
\r
\`\`\`mermaid\r
erDiagram\r
    CUSTOMER ||--o{ ORDER : places\r
    CUSTOMER {\r
        int id PK\r
        string name\r
        string email\r
        date created_at\r
    }\r
    ORDER ||--|{ LINE_ITEM : contains\r
    ORDER {\r
        int id PK\r
        int customer_id FK\r
        date order_date\r
        decimal total\r
    }\r
    PRODUCT ||--o{ LINE_ITEM : "appears in"\r
    PRODUCT {\r
        int id PK\r
        string name\r
        decimal price\r
        int stock\r
    }\r
    LINE_ITEM {\r
        int order_id FK\r
        int product_id FK\r
        int quantity\r
        decimal unit_price\r
    }\r
\`\`\`\r
\r
### User Journey Diagram\r
Testing UX flow mapping with satisfaction scores and actor assignments.\r
\r
\`\`\`mermaid\r
journey\r
    title Online Shopping Experience\r
    section Browse\r
      Search Products: 5: Customer\r
      View Details: 4: Customer\r
      Add to Cart: 5: Customer\r
    section Checkout\r
      Enter Shipping: 3: Customer\r
      Select Payment: 2: Customer\r
      Confirm Order: 4: Customer\r
    section Post-Purchase\r
      Order Confirmation: 5: Customer, System\r
      Track Package: 4: Customer\r
      Receive Delivery: 5: Customer\r
\`\`\`\r
\r
### Timeline\r
Testing chronological event visualization with time periods.\r
\r
\`\`\`mermaid\r
timeline\r
    title Project Development Timeline\r
    section Q1 2026\r
      January : Project Kickoff\r
      February : Requirements Analysis\r
      March : Design Phase\r
    section Q2 2026\r
      April : Development Start\r
      May : Core Features\r
      June : Testing Phase\r
    section Q3 2026\r
      July : Beta Release\r
      August : User Feedback\r
      September : Final Release\r
\`\`\`\r
\r
### XY Chart (Beta)\r
Testing quantitative data visualization with multiple series.\r
\r
\`\`\`mermaid\r
xychart-beta\r
    title "Performance Metrics Over Time"\r
    x-axis ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]\r
    y-axis "Response Time (ms)" 0 --> 200\r
    line [50, 65, 45, 70, 55, 60]\r
    bar [30, 40, 35, 45, 38, 42]\r
\`\`\`\r
\r
### Quadrant Chart\r
Testing 2D categorization matrices.\r
\r
\`\`\`mermaid\r
quadrantChart\r
    title Feature Priority Matrix\r
    x-axis "Low Impact" --> "High Impact"\r
    y-axis "Low Effort" --> "High Effort"\r
    quadrant-1 "Quick Wins"\r
    quadrant-2 "Major Projects"\r
    quadrant-3 "Fill-ins"\r
    quadrant-4 "Thankless Tasks"\r
    "Dark Mode": [0.8, 0.2]\r
    "AI Assistant": [0.9, 0.8]\r
    "Bug Fixes": [0.3, 0.1]\r
    "Redesign": [0.7, 0.9]\r
\`\`\`\r
\r
### C4 Context Diagram\r
Testing software architecture modeling at context level.\r
\r
\`\`\`mermaid\r
C4Context\r
    title System Context for Markdown Editor\r
    \r
    Person(user, "User", "Uses the markdown editor")\r
    System(editor, "Markdown Editor", "Web-based markdown editing tool")\r
    System_Ext(github, "GitHub", "Version control platform")\r
    \r
    Rel(user, editor, "Edits documents")\r
    Rel(editor, github, "Syncs files")\r
\`\`\`\r
\r
### C4 Container Diagram\r
Testing software architecture modeling at container level.\r
\r
\`\`\`mermaid\r
C4Container\r
    title Container Diagram for Markdown Editor\r
    \r
    Person(user, "User")\r
    Container(webapp, "Web Application", "React", "Main editor interface")\r
    ContainerDb(database, "Document DB", "SQLite", "Stores markdown documents")\r
    \r
    Rel(user, webapp, "Uses")\r
    Rel(webapp, database, "Reads/Writes")\r
\`\`\`\r
\r
### Kanban Diagram\r
Testing workflow and task management visualization.\r
\r
\`\`\`mermaid\r
kanban\r
    title Development Workflow\r
    section Backlog\r
        Task 1: Implement user auth\r
        Task 2: Design database schema\r
    section In Progress\r
        Task 3: Build API endpoints\r
    section Testing\r
        Task 4: Write unit tests\r
    section Done\r
        Task 5: Setup CI/CD\r
\`\`\`\r
\r
### Graceful Error Handling Test\r
This block deliberately contains a syntax error to ensure the application catches it gracefully without crashing, and displays the red syntax error block.\r
\r
\`\`\`mermaid\r
graph TD\r
    A --> B\r
    B -- What if I forget the arrow? C\r
    C --> D\r
\`\`\`\r
\r
### Complex Multi-Feature Test\r
Testing multiple advanced features in one diagram.\r
\r
\`\`\`mermaid\r
flowchart TD\r
    subgraph "Input Processing"\r
        A[Start] --> B{Validate Input}\r
        B -->|Valid| C[Process Data]\r
        B -->|Invalid| D[Show Error]\r
    end\r
    \r
    subgraph "Data Transformation"\r
        C --> E[Transform]\r
        E --> F[Normalize]\r
        F --> G[Aggregate]\r
    end\r
    \r
    subgraph "Output Generation"\r
        G --> H{Format Type}\r
        H -->|JSON| I[JSON Output]\r
        H -->|XML| J[XML Output]\r
        H -->|CSV| K[CSV Output]\r
    end\r
    \r
    D --> L[Log Error]\r
    I --> M[Store Result]\r
    J --> M\r
    K --> M\r
    \r
    style A fill:#90EE90,stroke:#333,stroke-width:2px\r
    style D fill:#FFB6C1,stroke:#333,stroke-width:2px\r
    style M fill:#87CEEB,stroke:#333,stroke-width:2px\r
\`\`\`\r
`,Pm=(m,r)=>{if(!m)return[];const d=[];return m.split(/\n### |^### /m).slice(1).forEach((f,b)=>{if(!f.trim())return;const p=f.split(`
`),v=p[0].trim();if(!v)return;let j=p.slice(1).join(`
`).trim();if(r==="mermaid"){const X=j.match(/```mermaid[\s\S]*?```/);X&&(j=X[0])}d.push({id:`${r}-file-${b}`,name:v,content:j,type:r})}),d},Jy=Pm(Fy,"math"),Wy=Pm(Ky,"mermaid"),Iy=[{id:"alert-note",name:"Note",content:`> [!NOTE]
> Highlights information that users should take into account.`},{id:"alert-tip",name:"Tip",content:`> [!TIP]
> Optional information to help a user be more successful.`},{id:"alert-important",name:"Important",content:`> [!IMPORTANT]
> Crucial information users need to know.`},{id:"alert-warning",name:"Warning",content:`> [!WARNING]
> Critical content demanding immediate user attention.`},{id:"alert-caution",name:"Caution",content:`> [!CAUTION]
> Negative potential consequences of an action.`}].map(m=>({...m,type:"alert"})),Py=[{id:"util-table",name:"Table",content:`| Header 1 | Header 2 |
| :--- | :--- |
| Cell 1 | Cell 2 |`},{id:"util-task",name:"Task List",content:`- [ ] Task 1
- [x] Completed task
- [ ] Task 2`},{id:"util-details",name:"Collapsible",content:`<details>
  <summary>Click to expand</summary>
  
  This is hidden content.
</details>`},{id:"util-footnote",name:"Footnote",content:`Here is a simple footnote[^1].

[^1]: This is the footnote content.`},{id:"util-link",name:"Link (Title)",content:'[Google](https://google.com "Search Engine")'}].map(m=>({...m,type:"utility"})),ev=[{id:"code-py",name:"Python",content:'```python\ndef hello_world():\n    print("Hello, World!")\n```'},{id:"code-js",name:"Javascript",content:'```javascript\nfunction helloWorld() {\n  console.log("Hello, World!");\n}\n```'},{id:"code-css",name:"CSS",content:"```css\n.container {\n  display: flex;\n  justify-content: center;\n}\n```"},{id:"code-html",name:"HTML",content:'```html\n<div class="card">\n  <h1>Title</h1>\n  <p>Description</p>\n</div>\n```'}].map(m=>({...m,type:"code"})),Fa=[...Jy,...Wy,...Iy,...Py,...ev],tv=Go().use(Vo).use(zu).use(Qo).use(Lu).use(Zo),nv=Go().use(Vo).use(Du).use(Qo,{allowDangerousHtml:!0}).use(Zo,{allowDangerousHtml:!0});function Dm({snippet:m,isSelected:r,onSelect:d,isDarkTheme:c,onDoubleClick:f}){const[b,p]=g.useState("");return g.useEffect(()=>{let v=!0;return(async()=>{if(m.type==="math"){const X=tv.processSync(m.content);v&&p(String(X))}else if(m.type==="mermaid")try{const{default:X}=await $t(async()=>{const{default:V}=await import("./vendor-visual.Drt-dmtb.js").then(B=>B.bC);return{default:V}},__vite__mapDeps([2,0,1]));X.initialize({startOnLoad:!1,theme:c?"dark":"default",securityLevel:"loose",fontFamily:"inherit"});const H=m.content.replace(/^```mermaid\s*/,"").replace(/\s*```$/,""),$=`mermaid-tile-${m.id.replace(/-/g,"_")}-${Math.random().toString(36).substr(2,9)}`,{svg:k}=await X.render($,H);v&&p(k)}catch(X){console.error("Tile rendering failed:",X),v&&p('<div class="error">Error</div>')}else{let X=m.content;if(m.type==="alert"){const H={note:"ℹ️",tip:"💡",important:"🔔",warning:"⚠️",caution:"⚡"},$=X.match(/\[!(\w+)\]/);if($){const k=$[1].toLowerCase(),V=H[k]||"ℹ️",B=k.charAt(0).toUpperCase()+k.slice(1);X=X.replace(/> \[!(\w+)\](.*)/,`> **${V} ${B}**`)}}try{const H=nv.processSync(X);v&&p(String(H))}catch(H){console.error("Markdown rendering failed:",H),v&&p('<div class="error">Error</div>')}}})(),()=>{v=!1}},[m,c]),s.jsxs("div",{className:`snippet-tile snippet-tile-${m.type} ${r?"active":""}`,onClick:d,onDoubleClick:f,children:[s.jsx("div",{className:"tile-preview",dangerouslySetInnerHTML:{__html:b}}),s.jsxs("div",{className:"tile-info",children:[s.jsx("span",{className:"tile-type",children:m.type}),s.jsx("span",{className:"tile-name",children:m.name})]})]})}const ep=g.memo(({visible:m,onClose:r,onDock:d,onInsert:c,isDarkTheme:f,inline:b=!1})=>{const[p,v]=g.useState(0),{position:j,setPosition:X}=Sl("snippet-panel",{x:window.innerWidth-450,y:70}),[H,$]=g.useState(!1),k=g.useRef({x:0,y:0}),V=g.useRef(null),F=g.useRef(null);Ru(F,m&&!b),g.useEffect(()=>{m&&setTimeout(()=>V.current?.focus(),100)},[m]);const G=A=>{let U=b?2:5;if(V.current){const L=window.getComputedStyle(V.current).getPropertyValue("grid-template-columns");L&&(U=L.split(" ").filter(Q=>Q.length>0).length)}A.key==="ArrowRight"?(A.preventDefault(),v(T=>(T+1)%Fa.length)):A.key==="ArrowLeft"?(A.preventDefault(),v(T=>(T-1+Fa.length)%Fa.length)):A.key==="ArrowDown"?(A.preventDefault(),v(T=>Math.min(Fa.length-1,T+U))):A.key==="ArrowUp"?(A.preventDefault(),v(T=>Math.max(0,T-U))):A.key==="Enter"&&(A.preventDefault(),x())};g.useEffect(()=>{const A=V.current?.querySelector(".snippet-tile.active");A&&A.scrollIntoView({block:"nearest",behavior:"smooth"})},[p]);const x=()=>{Fa[p]&&c(Fa[p].content)},W=A=>{b||A.target.closest(".snippet-panel-close")||A.target.closest(".snippet-dialog-content")||($(!0),k.current={x:A.clientX-j.x,y:A.clientY-j.y},A.preventDefault())},se=A=>{if(b||A.target.closest(".snippet-panel-close")||A.target.closest(".snippet-dialog-content"))return;const U=A.touches[0];$(!0),k.current={x:U.clientX-j.x,y:U.clientY-j.y}};return g.useEffect(()=>{const A=T=>{if(!H)return;const L=T.type==="touchmove"?T.touches[0].clientX:T.clientX,Q=T.type==="touchmove"?T.touches[0].clientY:T.clientY,I=L-k.current.x,le=Q-k.current.y,te=window.innerWidth-100,ce=window.innerHeight-100;X({x:Math.max(0,Math.min(I,te)),y:Math.max(0,Math.min(le,ce))})},U=T=>{if(H){$(!1);const L=T.type==="touchend"||T.type==="touchcancel"?T.changedTouches?T.changedTouches[0].clientX:0:T.clientX,Q=T.type==="touchend"||T.type==="touchcancel"?T.changedTouches?T.changedTouches[0].clientY:0:T.clientY;document.elementsFromPoint(L,Q).some(le=>le.classList.contains("right-panel-tabs"))&&d&&d()}};return H&&(window.addEventListener("mousemove",A),window.addEventListener("mouseup",U),window.addEventListener("touchmove",A,{passive:!1}),window.addEventListener("touchend",U),window.addEventListener("touchcancel",U),document.body.style.userSelect="none",document.body.classList.add("resizing-panel")),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",U),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",U),window.removeEventListener("touchcancel",U),document.body.style.userSelect="",document.body.classList.remove("resizing-panel")}},[H,d]),m?b?s.jsxs("div",{className:`snippet-panel-container ${f?"dark-theme":"light-theme"}`,children:[s.jsx("div",{className:"snippet-panel-header",onMouseDown:W,onTouchStart:se,children:s.jsxs("div",{className:"title-area",children:[s.jsx(ci,{}),s.jsx("span",{children:"Snippets"})]})}),s.jsx("div",{className:"snippet-dialog-content",children:s.jsx("div",{ref:V,className:"snippet-grid",tabIndex:0,onKeyDown:G,children:Fa.map((A,U)=>s.jsx(Dm,{snippet:A,isSelected:p===U,isDarkTheme:f,onSelect:()=>v(U),onDoubleClick:x},A.id))})}),s.jsx("div",{className:"snippet-panel-footer",children:s.jsx(Zt,{appearance:"primary",onClick:x,children:"Insert"})})]}):s.jsx(Bo,{open:m,onOpenChange:(A,U)=>!U.open&&r(),children:s.jsx(Uo,{className:`snippet-panel ${f?"dark-theme":"light-theme"}`,children:s.jsxs(qo,{children:[s.jsx(Yo,{children:s.jsxs("div",{className:"title-area",children:[s.jsx(ci,{}),s.jsx("span",{children:"Snippets"})]})}),s.jsx(Au,{className:"snippet-dialog-content",children:s.jsx("div",{ref:V,className:"snippet-grid",tabIndex:0,onKeyDown:G,children:Fa.map((A,U)=>s.jsx(Dm,{snippet:A,isSelected:p===U,isDarkTheme:f,onSelect:()=>v(U),onDoubleClick:x},A.id))})}),s.jsxs(Xo,{children:[s.jsx(Zt,{appearance:"secondary",onClick:r,children:"Cancel"}),s.jsx(Zt,{appearance:"primary",onClick:x,children:"Insert"})]})]})})}):null}),av=Object.freeze(Object.defineProperty({__proto__:null,default:ep},Symbol.toStringTag,{value:"Module"})),zm=`# Markdown Syntax Reference Guide

## Table of Contents

1. [Basic Syntax](#basic-syntax)
2. [Headings](#headings)
3. [Text Formatting](#text-formatting)
4. [Links](#links)
5. [Advanced Link Features](#advanced-link-features)
6. [Advanced Autolinks](#advanced-autolinks)
7. [Images](#images)
8. [Advanced Image Features](#advanced-image-features)
9. [Lists](#lists)
10. [Advanced List Features](#advanced-list-features)
11. [Code](#code)
12. [Advanced Code Features](#advanced-code-features)
13. [Blockquotes](#blockquotes)
14. [Callouts](#callouts)
15. [Horizontal Rules](#horizontal-rules)
16. [Tables](#tables)
17. [Advanced Table Features](#advanced-table-features)
18. [Task Lists](#task-lists)
19. [Footnotes](#footnotes)
20. [Strikethrough](#strikethrough)
21. [Highlighting](#highlighting)
22. [Subscript and Superscript](#subscript-and-superscript)
23. [Advanced Emphasis Rules](#advanced-emphasis-rules)
24. [Emoji](#emoji)
25. [HTML](#html)
26. [Advanced HTML Integration](#advanced-html-integration)
27. [Advanced Extensions](#advanced-extensions)
28. [Security and Performance](#security-and-performance)
29. [Escaping Characters](#escaping-characters)
30. [Advanced Features](#advanced-features)
31. [Quick Reference](#quick-reference)

---

## Basic Syntax

### Paragraphs
Paragraphs are simply one or more consecutive lines of text, separated by one or more blank lines.

\`\`\`markdown
This is the first paragraph.

This is the second paragraph.
\`\`\`

### Line Breaks
To create a line break, end a line with two or more spaces, or press Enter twice.

\`\`\`markdown
This is the first line.␣␣
This is the second line.

Or press Enter twice for a new paragraph.
\`\`\`

---

## Headings

Headings are created using hash symbols (\`#\`). The number of hashes indicates the heading level (1-6).

\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
\`\`\`

### Alternative Heading Syntax
You can also use underlines for H1 and H2:

\`\`\`markdown
Heading 1
=========

Heading 2
---------
\`\`\`

---

## Text Formatting

### Bold
Wrap text with two asterisks \`**\` or two underscores \`__\`.

\`\`\`markdown
**This is bold text**
__This is also bold text__
\`\`\`

### Italic
Wrap text with one asterisk \`*\` or one underscore \`_\`.

\`\`\`markdown
*This is italic text*
_This is also italic text_
\`\`\`

### Bold and Italic
Combine both for bold italic text.

\`\`\`markdown
***This is bold and italic***
**_This is also bold and italic_**
\`\`\`

---

## Links

### Inline Links
\`\`\`markdown
[Link text](https://www.example.com)
[Link text](https://www.example.com "Optional tooltip")
\`\`\`

### Reference Links
\`\`\`markdown
[Link text][reference-id]
[reference-id]: https://www.example.com "Optional tooltip"
\`\`\`

### Email Links
\`\`\`markdown
<email@example.com>
\`\`\`

### URL Links
\`\`\`markdown
<https://www.example.com>
\`\`\`

### Relative Links
\`\`\`markdown
[About page](about.md)
[Contact form](./contact.html)
\`\`\`

### Anchor Links
\`\`\`markdown
[Jump to headings](#headings)
\`\`\`

---

## Images

### Basic Images
\`\`\`markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Optional title")
\`\`\`

### Images with Links
\`\`\`markdown
[![Alt text](image.jpg)](https://www.example.com)
\`\`\`

### Reference-style Images
\`\`\`markdown
![Alt text][image-id]
[image-id]: image.jpg "Optional title"
\`\`\`

---

## Lists

### Unordered Lists
Use asterisks, pluses, or hyphens.

\`\`\`markdown
* Item 1
* Item 2
  * Nested item 2.1
  * Nested item 2.2
* Item 3

+ Item 1
+ Item 2

- Item 1
- Item 2
\`\`\`

### Ordered Lists
Use numbers followed by periods.

\`\`\`markdown
1. First item
2. Second item
3. Third item
   1. Nested item 3.1
   2. Nested item 3.2
\`\`\`

### Loose Lists
Add blank lines between list items for spacing.

\`\`\`markdown
- Item 1

- Item 2

- Item 3
\`\`\`

### Definition Lists (Extended Syntax)
\`\`\`markdown
Term 1
: Definition 1

Term 2
: Definition 2
: Definition 2.1
\`\`\`

---

## Code

### Inline Code
Wrap text with backticks.

\`\`\`markdown
Use \`console.log()\` for debugging.
\`\`\`

### Fenced Code Blocks
Use three backticks or tildes with optional language identifier.

\`\`\`markdown
\`\`\`javascript
function greet(name) {
    console.log(\`Hello, \${name}!\`);
}
\`\`\`

~~~python
def greet(name):
    print(f"Hello, {name}!")
~~~
\`\`\`

### Indented Code Blocks
Indent with four spaces or one tab.

\`\`\`markdown
    <html>
        <head>
            <title>Example</title>
        </head>
    </html>
\`\`\`

### Syntax Highlighting
Add language identifier for syntax highlighting.

\`\`\`markdown
\`\`\`javascript
const message = "Hello, World!";
console.log(message);
\`\`\`

\`\`\`css
body {
    font-family: Arial, sans-serif;
}
\`\`\`

\`\`\`html
<h1>Hello, World!</h1>
\`\`\`
\`\`\`

---

## Blockquotes

### Basic Blockquotes
Use \`>\` at the beginning of a line.

\`\`\`markdown
> This is a blockquote.
> It can span multiple lines.
\`\`\`

### Nested Blockquotes

\`\`\`markdown
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
\`\`\`

### Blockquotes with Other Elements

\`\`\`markdown
> ## This is a heading in a blockquote
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
> \`\`\`javascript
> return shell.exec("code .");
> \`\`\`
>
> ---
>
> ## Callouts
>
> Callouts (also known as Admonitions) are stylized blockquotes used to highlight specific information like notes, tips, and warnings.
>
> ### Callout Syntax
> Use \`> [!TYPE] Optional Title\` at the beginning of a blockquote.
>
> \`\`\`markdown
> > [!NOTE]
> > This is a simple note callout.
>
> > [!TIP] Pro Tip
> > You can add a custom title after the type.
> \`\`\`
>
> ### Supported Types
>
> | Type | Appearance | Usage |
> |------|------------|-------|
> | \`[!NOTE]\` | Blue | General information or side notes. |
> | \`[!TIP]\` | Green | Helpful advice, shortcuts, or suggestions. |
> | \`[!IMPORTANT]\` | Purple | Critical information that shouldn't be missed. |
> | \`[!WARNING]\` | Orange | Potential pitfalls or things to be careful about. |
> | \`[!CAUTION]\` | Red | High-risk warnings or destructive actions. |
> | \`[!ERROR]\` | Red | Critical errors or failure conditions. |
\`\`\`

---

## Horizontal Rules

Create horizontal rules with three or more hyphens, asterisks, or underscores.

\`\`\`markdown
---

***

___
\`\`\`

---

## Tables

### Basic Tables
Use pipes \`|\` to separate columns and hyphens \`-\` for the header row.

\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
\`\`\`

### Table Alignment
Use colons \`:\` to specify column alignment.

\`\`\`markdown
| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|--------------:|
| Content      |    Content     |        Content|
| Cell         |      Cell      |           Cell|
\`\`\`

### Simplified Table Syntax
You don't need the outer pipes.

\`\`\`markdown
Header 1 | Header 2 | Header 3
---|---|---
Cell 1 | Cell 2 | Cell 3
Cell 4 | Cell 5 | Cell 6
\`\`\`

---

## Task Lists

Create task lists with brackets \`[ ]\` for unchecked and \`[x]\` for checked items.

\`\`\`markdown
- [x] Finish the report
- [ ] Send the email
- [ ] Call the client
- [x] Review the presentation

### Nested tasks
- [ ] Project A
  - [x] Research phase
  - [ ] Development phase
  - [ ] Testing phase
- [x] Project B
  - [x] Planning
  - [x] Execution
\`\`\`

---

## Footnotes

Create footnotes using \`[^identifier]\` syntax.

\`\`\`markdown
Here is some text with a footnote[^1].

This is another footnote reference[^note].

[^1]: This is the first footnote.
[^note]: This is the second footnote with more detail.
\`\`\`

### Footnotes with Multiple Paragraphs

\`\`\`markdown
Here's a sentence with a footnote[^long-footnote].

[^long-footnote]: This is the first paragraph of the footnote.

    This is the second paragraph, indented to be part of the footnote.
    
    - You can even have lists in footnotes
    - Like this one
\`\`\`

---

## Strikethrough

Wrap text with double tildes \`~~\`.

\`\`\`markdown
~~This text is struck through~~
~~Mistake~~Correction
\`\`\`

---

## Highlighting

Some markdown processors support highlighting with double equals signs \`==\`.

\`\`\`markdown
==This text is highlighted==
\`\`\`

---

## Subscript and Superscript

Extended syntax may support subscript \`~\` and superscript \`^\`.

\`\`\`markdown
H~2~O is water.
E = mc^2^
\`\`\`

---

## Emoji

Use shortcodes or Unicode emoji.

\`\`\`markdown
:smile: :heart: :thumbsup:

Or use emoji directly: 😊 ❤️ 👍
\`\`\`

---

## HTML

You can use most HTML tags in markdown.

### Inline HTML
\`\`\`markdown
This is <em>HTML emphasis</em> and this is <strong>HTML strong</strong>.
\`\`\`

### Block-level HTML
\`\`\`markdown
<div style="border: 1px solid #ccc; padding: 10px;">
    This is a div with custom styling.
    <p>And this is a paragraph inside it.</p>
</div>
\`\`\`

### HTML Tables
\`\`\`markdown
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
</table>
\`\`\`

---

## Escaping Characters

To display literal characters that would otherwise be formatted, use backslashes.

\`\`\`markdown
\\*Not italic\\*
\\**Not bold\\**
\\\`Not code\\\`
\\[Not a link\\](not-a-link)
\`\`\`

### Characters That Need Escaping
\`\`\`
\\   backslash
\`   backtick
*   asterisk
_   underscore
{ } curly braces
[ ] square brackets
( ) parentheses
#   hash
+   plus
-   minus
.   dot
!   exclamation mark
|   pipe
\`\`\`

---

## Advanced Link Features

### Implicit Reference Links
Use empty brackets to reference the next available link definition.

\`\`\`markdown
This is an [implicit][] reference link.

[implicit]: https://www.example.com
\`\`\`

### Shortcut Reference Links
Omit the reference ID entirely for the first matching link text.

\`\`\`markdown
This is a [shortcut] reference link.

[shortcut]: https://www.example.com
\`\`\`

### Link Reference Precedence
When multiple definitions exist, the last one takes precedence.

\`\`\`markdown
[link]: /first-url
[link]: /second-url
[link]: /third-url

This uses /third-url: [link]
\`\`\`

### Link Title Variations
Multiple ways to specify link titles.

\`\`\`markdown
[Single quotes](url 'Title in single quotes')
[Double quotes](url "Title in double quotes")
[Parentheses](url (Title in parentheses))
\`\`\`

---

## Advanced Autolinks

### Extended WWW Autolinks
Automatically link URLs starting with \`www.\` without explicit protocol.

\`\`\`markdown
Visit www.example.com for more information.
www.commonmark.org/help for documentation.
\`\`\`

### Email Autolinks
Email addresses are automatically converted to mailto links.

\`\`\`markdown
Contact us at support@example.com
Email john.doe@company.org for help
\`\`\`

### Protocol-Relative URLs
Use \`//\` for protocol-relative URLs that inherit the current page's protocol.

\`\`\`markdown
Link to //cdn.example.com/script.js
Visit //assets.example.com/images/
\`\`\`

### Autolink Validation
Autolinks follow strict validation rules for domains and paths.

\`\`\`markdown
Valid: www.example.com/path?query=value#anchor
Valid: user@domain.com
Invalid: www.invalid_domain
\`\`\`

---

## Advanced List Features

### Lazy Numbering
Numbers don't need to be sequential - they're auto-corrected.

\`\`\`markdown
1. First item
1. Second item  (renders as 2.)
1. Third item   (renders as 3.)
\`\`\`

### Mixed List Markers
Different bullet types can be used in the same list.

\`\`\`markdown
* Item with asterisk
+ Item with plus
- Item with hyphen
\`\`\`

### List Continuation
Paragraphs in list items require proper indentation.

\`\`\`markdown
1. First item with continuation

   This paragraph is part of item 1.
   
   This is also part of item 1.

2. Second item
\`\`\`

### Nested List Complexity
Complex nesting with different list types.

\`\`\`markdown
1. First ordered item
   * Nested unordered
   * Another nested
   1. Nested ordered
      1. Double nested
2. Second ordered item
\`\`\`

---

## Advanced Code Features

### Multiple Backtick Code Spans
Use multiple backticks to embed backticks in code.

\`\`\`markdown
\`\`Use \`code\` with backticks\`\`
\`\`Use single backtick: \` and multiple: \`\`
\`\`\`

### Tilde Fenced Code Blocks
Use tildes instead of backticks for fenced blocks.

\`\`\`markdown
~~~
echo "Hello, World!"
~~~
\`\`\`

### Info Strings and Metadata
Add language-specific metadata to code blocks.

\`\`\`markdown
\`\`\`javascript {data-line="1,3-5"}
function example() {
    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");
}
\`\`\`
\`\`\`

### Code Block Attributes
Some processors support attributes on code blocks.

\`\`\`markdown
\`\`\`python {.line-numbers}
def hello():
    print("Hello, World!")
\`\`\`
\`\`\`

---

## Advanced Emphasis Rules

### Emphasis Precedence
How nested emphasis is resolved according to rules.

\`\`\`markdown
*This is *emphasized* text*
**This is *emphasized in bold* text**
***This is bold and italic***
\`\`\`

### Multiple Underscore Emphasis
Different underscore combinations for emphasis levels.

\`\`\`markdown
_italic text_
__bold text__
___bold and italic___
\`\`\`

### Emphasis Boundaries
Rules for what can and cannot be emphasized.

\`\`\`markdown
*This works* (emphasis within word)
This*doesn't*work (emphasis crossing word boundary)
a*b*c (emphasis spanning multiple characters)
\`\`\`

### Strong Emphasis Variants
Multiple ways to create strong emphasis.

\`\`\`markdown
**Double asterisks**
__Double underscores__
\`\`\`

---

## Advanced Table Features

### Table Cell Attributes
Add classes and styles to table cells.

\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|-----------|-----------|-----------|
| Cell 1 {.class} | Cell 2 {style="color:red"} | Cell 3 |
\`\`\`

### Table Footers
Some processors support table footer sections.

\`\`\`markdown
| Header 1 | Header 2 |
|-----------|-----------|
| Data 1   | Data 2   |
| Footer 1  | Footer 2  |
|===========|===========|
\`\`\`

### Complex Table Alignment
Multiple alignment options per column.

\`\`\`markdown
| Left | Center | Right | Default |
|:-----|:------:|------:|---------|
| Text | Center | Right | Normal |
\`\`\`

---

## Advanced Image Features

### Image Dimensions
Specify width and height for images.

\`\`\`markdown
![Alt text](image.jpg =100x50)
![Logo](logo.png =200x100 "Scaled logo")
\`\`\`

### Image Classes and Attributes
Add CSS classes to images.

\`\`\`markdown
![Alt text](image.jpg){.responsive .shadow}
![Thumbnail](thumb.jpg){#thumbnail}
\`\`\`

### Figure Captions
Extended syntax for figures with captions.

\`\`\`markdown
![Alt text](image.jpg "Title")
*Figure 1: This is the caption for the image.*
\`\`\`

---

## Advanced HTML Integration

### HTML Comments
Use HTML comments that won't appear in rendered output.

\`\`\`markdown
<!-- This is a comment -->
<!-- 
    Multi-line comment
    with details
-->
\`\`\`

### HTML Attributes on Markdown
Add attributes to markdown elements.

\`\`\`markdown
### Header {#custom-id}
This paragraph has {.custom-class #custom-id}

![Alt](image.jpg){width="300" height="200"}
\`\`\`

### Raw HTML Restrictions
What HTML is allowed and sanitized.

\`\`\`markdown
<!-- Allowed: semantic tags -->
<div>Content</div>
<span>Highlight</span>

<!-- Often disallowed: script tags -->
<script>alert("XSS")<\/script> <!-- Usually stripped -->

<!-- Sanitized attributes -->
<img src="javascript:alert('XSS')" /> <!-- Usually cleaned -->
\`\`\`

---

## Advanced Extensions

### Abbreviations
Define abbreviations that are automatically linked.

\`\`\`markdown
HTML is the standard for web content.

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[JS]: JavaScript
\`\`\`

### Citations
Academic citation syntax for references.

\`\`\`markdown
This is a claim that needs citation [@smith2020].

Multiple citations can be combined [@smith2020; @johnson2019].

See the bibliography for full details [@smith2020, pp. 45-48].
\`\`\`

### Definition Lists (Complete)
Term and definition pairs with multiple definitions.

\`\`\`markdown
Apple
: A fruit that keeps the doctor away
: A technology company
: A type of pie

Orange
: A citrus fruit
: A color between red and yellow
\`\`\`

### Footnote Variants
Different footnote syntax styles.

\`\`\`markdown
Inline footnote^[This is an inline footnote]

Reference footnote[^1]

[^1]: This is a reference footnote
\`\`\`

---

## Security and Performance

### HTML Sanitization
Understanding what HTML is stripped for security.

\`\`\`markdown
<!-- Safe: Basic formatting -->
<strong>Bold</strong>
<em>Italic</em>

<!-- Stripped: Dangerous tags -->
<script>alert('XSS')<\/script>
<iframe src="malicious.com"></iframe>

<!-- Cleaned: Dangerous attributes -->
<img src="javascript:alert('XSS')" />
<a href="javascript:void(0)">Click me</a>
\`\`\`

### XSS Prevention
Best practices for safe markdown rendering.

\`\`\`markdown
<!-- Safe image -->
![Alt text](image.jpg)

<!-- Potentially unsafe -->
![Alt](javascript:alert('XSS'))

<!-- Safe link -->
[Safe](https://example.com)

<!-- Potentially unsafe -->
[Unsafe](javascript:alert('XSS'))
\`\`\`

### Performance Considerations
Optimizing large markdown documents.

\`\`\`markdown
<!-- Use efficient list structures -->
- Item 1
- Item 2
- Item 3

<!-- Avoid excessive nesting -->
> > > > > Too deep nesting hurts performance

<!-- Use appropriate code blocks -->
\`\`\`python
# Efficient code highlighting
\`\`\`
\`\`\`

---

## Advanced Features

### Front Matter (YAML)
Some markdown processors support YAML front matter.

\`\`\`markdown
---
title: "My Document"
author: "John Doe"
date: "2023-01-01"
tags: ["markdown", "documentation"]
---

# Content starts here
\`\`\`

### Math Expressions (LaTeX)
Some processors support math with dollar signs.

\`\`\`markdown
Inline math: $E = mc^2$

Block math:
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$
\`\`\`

### Diagrams and Charts
Extended syntax may support mermaid diagrams.

\`\`\`markdown
\`\`\`mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
\`\`\`
\`\`\`

### Alerts and Admonitions
Some processors support special block elements.

\`\`\`markdown
> **Note:** This is important information.
>
> **Warning:** Be careful with this action.
>
> **Tip:** Here's a helpful suggestion.
\`\`\`

---

## Quick Reference

| Element | Syntax | Example |
|---------|--------|---------|
| Heading | \`# Heading\` | \`# H1\` \`## H2\` |
| Bold | \`**text**\` or \`__text__\` | \`**bold**\` |
| Italic | \`*text*\` or \`_text_\` | \`*italic*\` |
| Link | \`[text](url)\` | \`[Google](https://google.com)\` |
| Image | \`![alt](url)\` | \`![Logo](logo.png)\` |
| Code | \`\` \`code\` \`\` | \`\` \`console.log()\` \`\` |
| Code Block | \` \`\`\` \` | \`\`\`javascript\` |
| List | \`- item\` or \`1. item\` | \`- Item 1\` |
| Blockquote | \`> text\` | \`> Quote\` |
| Horizontal Rule | \`---\` | \`---\` |
| Table | \`|col|col|\` | \`|A|B|\` |
| Task List | \`- [x] done\` | \`- [x] Complete\` |
| Callout | \`> [!NOTE]\` | \`> [!TIP] Pro Tip\` |
| Footnote | \`[^1]\` | \`Text[^1]\` |
| Strikethrough | \`~~text~~\` | \`~~deleted~~\` |

### Common Keyboard Shortcuts (in Editors)

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Bold | Ctrl+B | Cmd+B |
| Italic | Ctrl+I | Cmd+I |
| Strikethrough | Alt+S | Opt+S |
| Link | Ctrl+K | Cmd+K |
| Image | Ctrl+Shift+I | Cmd+Shift+I |
| Code | Ctrl+\\\` | Cmd+\\\` |
| Code Block | Ctrl+Shift+C | Cmd+Shift+C |
| Heading 1-6 | Ctrl+1 to 6 | Cmd+1 to 6 |
| Bullet List | Ctrl+Shift+8 | Cmd+Shift+8 |
| Numbered List | Ctrl+Shift+9 | Cmd+Shift+9 |
| Table | Ctrl+Shift+T | Cmd+Shift+T |
| Horizontal Rule | Ctrl+Shift+- | Cmd+Shift+- |
| Undo | Ctrl+Z | Cmd+Z |
| Redo | Ctrl+Y | Cmd+Y |
| Find | Ctrl+F | Cmd+F |
| Replace | Ctrl+H | Cmd+H |
| Command Palette | Ctrl+P | Cmd+P |
| Save | Ctrl+S | Cmd+S |

### Best Practices

1. **Be Consistent**: Use the same syntax patterns throughout your document
2. **Use Semantic Headings**: Don't skip heading levels (H1 → H3)
3. **Add Alt Text**: Always include descriptive alt text for images
4. **Use Links Wisely**: Make link text descriptive, not "click here"
5. **Keep Lines Short**: Break long lines for better readability
6. **Use Code Blocks**: For code examples, always specify the language
7. **Test Your Markdown**: Preview your document to ensure proper rendering
8. **Use Footnotes Sparingly**: Don't overuse footnotes in technical documentation
9. **Maintain List Formatting**: Keep list items aligned for readability
10. **Escape When Needed**: Use backslashes to display special characters literally
11. **Consider Security**: Be aware of XSS risks with user-generated content
12. **Optimize Performance**: Use efficient structures for large documents
13. **Validate Links**: Ensure all links and references are properly defined
14. **Use Semantic HTML**: When mixing HTML, use appropriate tags
15. **Test Cross-Platform**: Verify rendering across different markdown processors

---

## Markdown Flavors

### Common Markdown Variants

| Flavor | Features | Common Uses |
|--------|----------|-------------|
| **GitHub Flavored Markdown (GFM)** | Tables, task lists, strikethrough, autolinks | GitHub, GitLab |
| **CommonMark** | Standardized specification | Documentation tools |
| **Markdown Extra** | Footnotes, tables, definition lists | PHP Markdown |
| **MultiMarkdown** | Citations, math, tables | Academic writing |
| **R Markdown** | R code chunks, LaTeX integration | Data science |

### Feature Compatibility

| Feature | CommonMark | GFM | Markdown Extra | MultiMarkdown |
|---------|------------|-----|----------------|---------------|
| Tables | ❌ | ✅ | ✅ | ✅ |
| Task Lists | ❌ | ✅ | ❌ | ❌ |
| Footnotes | ❌ | ❌ | ✅ | ✅ |
| Strikethrough | ❌ | ✅ | ✅ | ✅ |
| Math | ❌ | ❌ | ❌ | ✅ |
| Definition Lists | ❌ | ❌ | ✅ | ✅ |

---

## Tips and Tricks

### Linking Within Documents
\`\`\`markdown
[Link to section](#section-name)
[Link to heading](#headings)
\`\`\`

### Creating Buttons (HTML)
\`\`\`markdown
<a href="#" class="button">Click Me</a>
\`\`\`

### Embedding Videos
\`\`\`markdown
[![Video Thumbnail](thumbnail.jpg)](video-url)
\`\`\`

### Creating Badges
\`\`\`markdown
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
\`\`\`

### Using Emojis in Headers
\`\`\`markdown
## 🚀 Getting Started
## 📚 Documentation
## ⚠️ Important Notes
\`\`\`

### Combining Elements
\`\`\`markdown
> **💡 Tip:** You can combine \`**bold**\`, \`*italic*\`, and \`~~strikethrough~~\` in blockquotes.
\`\`\`

### Creating TOC (Table of Contents)
\`\`\`markdown
## Table of Contents
1. [Section 1](#section-1)
2. [Section 2](#section-2)
3. [Section 3](#section-3)
\`\`\`

---

## Resources

### Official Documentation
- [CommonMark Specification](https://commonmark.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Markdown Guide](https://www.markdownguide.org/)

### Tools and Editors
- [Typora](https://typora.io/) - Beautiful markdown editor
- [Mark Text](https://marktext.app/) - Open-source editor
- [Obsidian](https://obsidian.md/) - Knowledge base
- [Notion](https://www.notion.so/) - All-in-one workspace

### Online Converters
- [Dillinger](https://dillinger.io/) - Online markdown editor
- [StackEdit](https://stackedit.io/) - In-browser markdown editor
- [Markdown to HTML](https://markdown-it.github.io/) - Live converter

### Cheatsheets
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [GitHub Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

---

*This reference guide covers the most common markdown syntax and extensions. Specific features may vary depending on the markdown processor you're using.*
`,tp=({isVisible:m,onClose:r,isDarkTheme:d})=>{const[c,f]=g.useState(""),{position:b,setPosition:p,size:v,setSize:j}=Sl("markdown-help-window",{x:100,y:100},{width:500,height:600}),[X,H]=g.useState(!1),[$,k]=g.useState(!1),[V,B]=g.useState({x:0,y:0}),[F,G]=g.useState({x:0,y:0,width:0,height:0}),x=g.useRef(null);g.useEffect(()=>{m&&f("")},[m]);const W=U=>{U.target.closest(".help-window-header")?(H(!0),B({x:U.clientX-b.x,y:U.clientY-b.y}),U.preventDefault()):U.target.closest(".help-window-resize-handle")&&(k(!0),G({x:U.clientX,y:U.clientY,width:v.width,height:v.height}),U.preventDefault())},se=U=>{const T=U.touches[0];U.target.closest(".help-window-header")?(H(!0),B({x:T.clientX-b.x,y:T.clientY-b.y})):U.target.closest(".help-window-resize-handle")&&(k(!0),G({x:T.clientX,y:T.clientY,width:v.width,height:v.height}))};g.useEffect(()=>{const U=L=>{const Q=L.type==="touchmove"?L.touches[0].clientX:L.clientX,I=L.type==="touchmove"?L.touches[0].clientY:L.clientY;if(X){const le=Q-V.x,te=I-V.y,ce=window.innerWidth-100,de=window.innerHeight-100;p({x:Math.max(0,Math.min(le,ce)),y:Math.max(0,Math.min(te,de))})}else if($){const le=Q-F.x,te=I-F.y,ce=Math.max(300,F.width+le),de=Math.max(200,F.height+te);j({width:Math.min(ce,window.innerWidth-b.x-20),height:Math.min(de,window.innerHeight-b.y-20)})}},T=()=>{H(!1),k(!1)};if(X||$)return document.addEventListener("mousemove",U),document.addEventListener("mouseup",T),document.addEventListener("touchmove",U,{passive:!1}),document.addEventListener("touchend",T),document.addEventListener("touchcancel",T),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",U),document.removeEventListener("touchend",T),document.removeEventListener("touchcancel",T)}},[X,$,V,F,b]);const A=g.useMemo(()=>{if(!c.trim())return zm;const U=zm.split(/\n(?=## )/),T=c.toLowerCase(),L=U.filter((Q,I)=>I===0&&!Q.toLowerCase().includes(T)?!1:Q.toLowerCase().includes(T));return L.length===0?`## No results found
Try a different search term.`:L.join(`

`)},[c]);return m?s.jsxs("div",{ref:x,onMouseDown:W,onTouchStart:se,style:{position:"fixed",left:b.x,top:b.y,width:`${v.width}px`,height:`${v.height}px`,backgroundColor:"var(--color-neutral-background1)",boxShadow:"0 8px 32px rgba(0,0,0,0.25)",border:"1px solid var(--color-neutral-stroke1)",zIndex:9999,display:"flex",flexDirection:"column",borderRadius:"8px",overflow:"hidden",resize:"none"},children:[s.jsxs("div",{className:"help-window-header",style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke1)",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:X?"grabbing":"grab",backgroundColor:"var(--color-neutral-background2)",userSelect:"none"},children:[s.jsxs("span",{style:{fontWeight:600,fontSize:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[s.jsx(bb,{})," Markdown Syntax Help"]}),s.jsx(Zt,{appearance:"subtle",icon:s.jsx(Ho,{}),onClick:r,size:"small"})]}),s.jsx("div",{style:{padding:"12px",borderBottom:"1px solid var(--color-neutral-stroke1)",backgroundColor:"var(--color-neutral-background1)"},children:s.jsx(ui,{contentBefore:s.jsx(Um,{}),placeholder:"Search syntax (e.g., 'table', 'bold', 'image')...",value:c,onChange:(U,T)=>f(T.value),style:{width:"100%"}})}),s.jsx("div",{style:{flex:1,overflow:"auto",padding:"16px",backgroundColor:"var(--color-neutral-background1)"},children:s.jsx("div",{className:"help-preview-container",children:s.jsx(cs,{content:A,visible:!0,inline:!0})})}),s.jsx("div",{className:"help-window-resize-handle",style:{position:"absolute",bottom:0,right:0,width:"20px",height:"20px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, var(--color-neutral-stroke1) 50%)",borderRadius:"0 0 8px 0"}})]}):null},lv=Object.freeze(Object.defineProperty({__proto__:null,default:tp},Symbol.toStringTag,{value:"Module"})),np=g.memo(({content:m,visible:r,onClose:d,onDock:c,onNavigate:f,onMoveSection:b,inline:p=!1,activeLine:v=0})=>{const{position:j,setPosition:X}=Sl("outline-panel",{x:window.innerWidth-300,y:70}),[H,$]=g.useState(!1),[k,V]=g.useState(null),B=g.useRef({x:0,y:0}),F=g.useRef(null),G=g.useMemo(()=>m?m.split(`
`).map((P,_)=>{const ae=P.trim().match(/^(#{1,6})\s+(.*)$/);return ae?{level:ae[1].length,text:ae[2].trim(),line:_+1}:null}).filter(Boolean):[],[m]),x=g.useMemo(()=>{if(!G.length||v<=0)return-1;let J=-1;for(let P=0;P<G.length&&G[P].line<=v;P++)J=P;return J},[G,v]),W=g.useRef(null);g.useEffect(()=>{W.current&&W.current.scrollIntoView({behavior:"smooth",block:"nearest"})},[x]);const se=J=>{p||J.target.closest(".outline-close")||J.target.closest(".outline-content")||($(!0),B.current={x:J.clientX-j.x,y:J.clientY-j.y},J.preventDefault())},A=J=>{if(p||J.target.closest(".outline-close")||J.target.closest(".outline-content"))return;const P=J.touches[0];$(!0),B.current={x:P.clientX-j.x,y:P.clientY-j.y}};g.useEffect(()=>{const J=_=>{if(!H)return;const R=_.type==="touchmove"?_.touches[0].clientX:_.clientX,ae=_.type==="touchmove"?_.touches[0].clientY:_.clientY,Se=R-B.current.x,be=ae-B.current.y,pe=window.innerWidth-50,ke=window.innerHeight-50;X({x:Math.max(0,Math.min(Se,pe)),y:Math.max(0,Math.min(be,ke))})},P=_=>{if(H){$(!1);const R=_.type==="touchend"||_.type==="touchcancel"?_.changedTouches?_.changedTouches[0].clientX:0:_.clientX,ae=_.type==="touchend"||_.type==="touchcancel"?_.changedTouches?_.changedTouches[0].clientY:0:_.clientY;document.elementsFromPoint(R,ae).some(be=>be.classList.contains("right-panel-tabs"))&&c&&c()}};return H&&(window.addEventListener("mousemove",J),window.addEventListener("mouseup",P),window.addEventListener("touchmove",J,{passive:!1}),window.addEventListener("touchend",P),window.addEventListener("touchcancel",P),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",P),window.removeEventListener("touchmove",J),window.removeEventListener("touchend",P),window.removeEventListener("touchcancel",P),document.body.style.userSelect=""}},[H,c]);const U=(J,P)=>{V(P),J.dataTransfer.effectAllowed="move",J.currentTarget.classList.add("is-being-dragged")},T=J=>{V(null),J.currentTarget.classList.remove("is-being-dragged")},L=(J,P)=>{J.preventDefault(),!(k===null||k===P)&&J.currentTarget.classList.add("drag-over")},Q=J=>{J.currentTarget.classList.remove("drag-over")},I=(J,P)=>{if(J.preventDefault(),J.currentTarget.classList.remove("drag-over"),k===null||k===P)return;const _=G[k],R=G[P];b&&_&&R&&b(_.line,R.line)},le=g.useRef({startIndex:null,currentIndex:null,lastY:0,startTime:0}),te=(J,P)=>{const _=J.touches[0];le.current={startIndex:P,currentIndex:P,lastY:_.clientY,startTime:Date.now()}},ce=J=>{if(le.current.startIndex===null)return;const P=J.touches[0],_=Math.abs(P.clientY-le.current.lastY);if(k===null&&(_>10||Date.now()-le.current.startTime>200)&&(V(le.current.startIndex),J.cancelable&&J.preventDefault()),k!==null){J.cancelable&&J.preventDefault();const ae=document.elementFromPoint(P.clientX,P.clientY)?.closest(".outline-item");if(ae){const Se=Array.from(F.current.querySelectorAll(".outline-item")),be=Se.indexOf(ae);be!==-1&&be!==le.current.currentIndex&&(Se.forEach(pe=>pe.classList.remove("drag-over")),ae.classList.add("drag-over"),le.current.currentIndex=be)}}},de=J=>{if(k!==null){const P=le.current.currentIndex;if(P!==null&&P!==k){const _=G[k],R=G[P];b&&_&&R&&b(_.line,R.line)}}V(null),le.current={startIndex:null,currentIndex:null,lastY:0,startTime:0},F.current?.querySelectorAll(".outline-item").forEach(P=>P.classList.remove("drag-over"))};return r?s.jsxs("div",{className:`outline-view ${H?"dragging":""} ${p?"inline-mode":""}`,style:p?{}:{left:`${j.x}px`,top:`${j.y}px`,right:"auto"},ref:F,children:[s.jsxs("div",{className:"outline-header",onMouseDown:p?void 0:se,onTouchStart:p?void 0:A,children:[s.jsx("h3",{children:"Outline"}),s.jsx("span",{className:"outline-hint",children:"Drag to rearrange"}),!p&&s.jsx("button",{className:"outline-close",onClick:d,children:"×"})]}),s.jsx("div",{className:"outline-content",children:G.length>0?s.jsx("ul",{className:"outline-list",children:G.map((J,P)=>s.jsxs("li",{className:`outline-item level-${J.level} ${P===x?"active":""}`,onClick:()=>f(J.line),ref:P===x?W:null,draggable:!0,onDragStart:_=>U(_,P),onDragEnd:T,onDragOver:_=>L(_,P),onDragLeave:Q,onDrop:_=>I(_,P),onTouchStart:_=>te(_,P),onTouchMove:ce,onTouchEnd:de,title:"Drag to rearrange document section",children:[s.jsxs("span",{className:"outline-level",children:["H",J.level]}),s.jsx("span",{className:"outline-text",children:J.text})]},`${P}-${J.line}`))}):s.jsx("p",{className:"outline-empty",children:"No headings found."})})]}):null}),iv=Object.freeze(Object.defineProperty({__proto__:null,default:np},Symbol.toStringTag,{value:"Module"})),sv=m=>{if(!m)return null;const r=m.match(/^(---\r?\n([\s\S]*?)\r?\n---|\+\+\+\r?\n([\s\S]*?)\r?\n\+\+\+)\r?\n/);if(!r)return null;const d=r[2]||r[3];try{const c=Qm.load(d);return c&&typeof c=="object"&&Object.keys(c).length>0?c:null}catch(c){return console.error("YAML parsing error:",c),null}},ov=m=>{if(!m||Object.keys(m).length===0)return"";try{return`---
${Qm.dump(m)}---
`}catch(r){return console.error("YAML stringify error:",r),""}},rv=(m,r)=>{const d=/^(---\r?\n[\s\S]*?\r?\n---|\+\+\+\r?\n[\s\S]*?\r?\n\+\+\+)\r?\n?/,c=ov(r);return m.match(d)?m.replace(d,c):c?`${c}${m}`:m},ap=({content:m,visible:r,onClose:d,onUpdate:c,onDock:f,inline:b=!1})=>{const{position:p,setPosition:v}=Sl("metadata-panel",{x:window.innerWidth-340,y:70}),[j,X]=g.useState(!1),H=g.useRef({x:0,y:0}),$=g.useRef(null),k=g.useMemo(()=>sv(m)||{},[m]),[V,B]=g.useState(k);g.useEffect(()=>{B(k)},[k]);const F=(A,U)=>{const T={...V,[A]:U};B(T),c&&c(T)},G=A=>{const U={...V};delete U[A],B(U),c&&c(U)},x=()=>{const A=`key_${Object.keys(V).length+1}`;F(A,"value")},W=A=>{b||A.target.closest(".metadata-close")||A.target.closest(".metadata-content")||(X(!0),H.current={x:A.clientX-p.x,y:A.clientY-p.y},A.preventDefault())},se=A=>{if(b||A.target.closest(".metadata-close")||A.target.closest(".metadata-content"))return;const U=A.touches[0];X(!0),H.current={x:U.clientX-p.x,y:U.clientY-p.y}};return g.useEffect(()=>{const A=T=>{if(!j)return;const L=T.type==="touchmove"?T.touches[0].clientX:T.clientX,Q=T.type==="touchmove"?T.touches[0].clientY:T.clientY,I=L-H.current.x,le=Q-H.current.y,te=window.innerWidth-50,ce=window.innerHeight-50;v({x:Math.max(0,Math.min(I,te)),y:Math.max(0,Math.min(le,ce))})},U=T=>{if(j){X(!1);const L=T.type==="touchend"||T.type==="touchcancel"?T.changedTouches?T.changedTouches[0].clientX:0:T.clientX,Q=T.type==="touchend"||T.type==="touchcancel"?T.changedTouches?T.changedTouches[0].clientY:0:T.clientY;document.elementsFromPoint(L,Q).some(le=>le.classList.contains("right-panel-tabs"))&&f&&f()}};return j&&(window.addEventListener("mousemove",A),window.addEventListener("mouseup",U),window.addEventListener("touchmove",A,{passive:!1}),window.addEventListener("touchend",U),window.addEventListener("touchcancel",U),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",U),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",U),window.removeEventListener("touchcancel",U),document.body.style.userSelect=""}},[j,f]),r?s.jsxs("div",{className:`metadata-panel ${j?"dragging":""} ${b?"inline-mode":""}`,style:b?{}:{left:`${p.x}px`,top:`${p.y}px`,right:"auto"},ref:$,children:[s.jsxs("div",{className:"metadata-header",onMouseDown:b?void 0:W,onTouchStart:b?void 0:se,children:[s.jsx("h3",{children:"Document Property"}),s.jsxs("div",{className:"metadata-header-actions",children:[s.jsx(Zt,{icon:s.jsx(yb,{}),appearance:"subtle",size:"small",onClick:x,title:"Add property key"}),!b&&s.jsx("button",{className:"metadata-close",onClick:d,children:"×"})]})]}),s.jsx("div",{className:"metadata-content",children:Object.keys(V).length>0?s.jsxs("table",{className:"metadata-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Key"}),s.jsx("th",{children:"Value"}),s.jsx("th",{style:{width:"32px"}})]})}),s.jsx("tbody",{children:Object.entries(V).map(([A,U])=>s.jsxs("tr",{children:[s.jsx("td",{className:"metadata-key",children:s.jsx(ui,{value:A,appearance:"underline",fluid:!0,onChange:(T,L)=>{const Q={...V};delete Q[A],Q[L.value]=U,B(Q),c&&c(Q)}})}),s.jsx("td",{className:"metadata-value",children:s.jsx(ui,{value:String(U),appearance:"underline",fluid:!0,onChange:(T,L)=>F(A,L.value)})}),s.jsx("td",{children:s.jsx(Zt,{icon:s.jsx(qm,{}),appearance:"subtle",size:"small",onClick:()=>G(A)})})]},A))})]}):s.jsx("div",{className:"metadata-empty",children:s.jsx("p",{children:"No property found."})})})]}):null},cv=Object.freeze(Object.defineProperty({__proto__:null,default:ap},Symbol.toStringTag,{value:"Module"}));class uv{constructor(){this.dbName="MarkdownStudio_History",this.storeName="snapshots",this.db=null,this.initDB()}async initDB(){return new Promise((r,d)=>{const c=indexedDB.open(this.dbName,1);c.onerror=()=>d(c.error),c.onsuccess=()=>{this.db=c.result,r(this.db)},c.onupgradeneeded=f=>{const b=f.target.result;if(!b.objectStoreNames.contains(this.storeName)){const p=b.createObjectStore(this.storeName,{keyPath:"id"});p.createIndex("fileId","fileId",{unique:!1}),p.createIndex("timestamp","timestamp",{unique:!1})}}})}async ensureDB(){return this.db||await this.initDB(),this.db}async createSnapshot(r,d){if(!r||d===void 0)return;const c=await this.ensureDB(),f={id:Do(),fileId:r,content:d,timestamp:Date.now()};return new Promise((b,p)=>{const X=c.transaction([this.storeName],"readwrite").objectStore(this.storeName).add(f);X.onsuccess=()=>b(f),X.onerror=()=>p(X.error)})}async getSnapshots(r){const d=await this.ensureDB();return new Promise((c,f)=>{const j=d.transaction([this.storeName],"readonly").objectStore(this.storeName).index("fileId").getAll(IDBKeyRange.only(r));j.onsuccess=()=>{const X=j.result.sort((H,$)=>$.timestamp-H.timestamp);c(X)},j.onerror=()=>f(j.error)})}async deleteSnapshot(r){const d=await this.ensureDB();return new Promise((c,f)=>{const v=d.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(r);v.onsuccess=()=>c(),v.onerror=()=>f(v.error)})}async clearHistory(r){const d=await this.ensureDB(),c=await this.getSnapshots(r),b=d.transaction([this.storeName],"readwrite").objectStore(this.storeName);c.forEach(p=>b.delete(p.id))}}const Oo=new uv,lp=({fileId:m,onRestore:r,visible:d,onClose:c,onDock:f,inline:b=!1})=>{const[p,v]=g.useState([]),[j,X]=g.useState(!1),{position:H,setPosition:$}=Sl("history-panel",{x:window.innerWidth-300,y:70}),[k,V]=g.useState(!1),B=g.useRef({x:0,y:0}),F=g.useRef(null);g.useEffect(()=>{d&&m&&W()},[d,m]);const G=T=>{b||T.target.closest(".history-close")||T.target.closest(".history-list-container")||(V(!0),B.current={x:T.clientX-H.x,y:T.clientY-H.y},T.preventDefault())},x=T=>{if(b||T.target.closest(".history-close")||T.target.closest(".history-list-container"))return;const L=T.touches[0];V(!0),B.current={x:L.clientX-H.x,y:L.clientY-H.y}};g.useEffect(()=>{const T=Q=>{if(!k)return;const I=Q.type==="touchmove"?Q.touches[0].clientX:Q.clientX,le=Q.type==="touchmove"?Q.touches[0].clientY:Q.clientY,te=I-B.current.x,ce=le-B.current.y,de=window.innerWidth-50,J=window.innerHeight-50;$({x:Math.max(0,Math.min(te,de)),y:Math.max(0,Math.min(ce,J))})},L=Q=>{if(k){V(!1);const I=Q.type==="touchend"||Q.type==="touchcancel"?Q.changedTouches?Q.changedTouches[0].clientX:0:Q.clientX,le=Q.type==="touchend"||Q.type==="touchcancel"?Q.changedTouches?Q.changedTouches[0].clientY:0:Q.clientY;document.elementsFromPoint(I,le).some(ce=>ce.classList.contains("right-panel-tabs"))&&f&&f()}};return k&&(window.addEventListener("mousemove",T),window.addEventListener("mouseup",L),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",L),window.addEventListener("touchcancel",L),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",L),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",L),window.removeEventListener("touchcancel",L),document.body.style.userSelect=""}},[k,f]);const W=async()=>{X(!0);try{const T=await Oo.getSnapshots(m);v(T)}catch(T){console.error("Failed to load snapshots:",T)}finally{X(!1)}},se=T=>{window.confirm(`Restore this version from ${new Date(T.timestamp).toLocaleString()}? Current unsaved changes will be lost.`)&&r(T.content)},A=async(T,L)=>{L.stopPropagation();try{await Oo.deleteSnapshot(T),v(Q=>Q.filter(I=>I.id!==T))}catch(Q){console.error("Failed to delete snapshot:",Q)}},U=T=>{const L=new Date(T),I=new Date-L;return I<6e4?"Just now":I<36e5?`${Math.floor(I/6e4)}m ago`:I<864e5?`${Math.floor(I/36e5)}h ago`:L.toLocaleDateString()+" "+L.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return d?s.jsxs("div",{className:`history-panel ${k?"dragging":""} ${b?"inline-mode":""}`,style:b?{}:{left:`${H.x}px`,top:`${H.y}px`,right:"auto"},ref:F,children:[s.jsxs("div",{className:"history-header",onMouseDown:b?void 0:G,onTouchStart:b?void 0:x,children:[s.jsxs("div",{className:"history-header-title",children:[s.jsx(_o,{}),s.jsx("span",{children:"Version History"}),s.jsx(vb,{appearance:"outline",color:"brand",children:p.length})]}),!b&&s.jsx("button",{className:"history-close",onClick:c,children:"×"})]}),s.jsx("div",{className:"history-list-container",children:j?s.jsx("div",{className:"history-status",children:"Loading history..."}):p.length===0?s.jsx("div",{className:"history-empty",children:" No historical snapshots yet. "}):s.jsx("div",{className:"history-list",children:p.map(T=>s.jsxs("div",{className:"history-item",onClick:()=>se(T),children:[s.jsxs("div",{className:"history-item-info",children:[s.jsx("span",{className:"history-time",children:U(T.timestamp)}),s.jsxs("span",{className:"history-preview",children:[T.content.substring(0,50).replace(/\n/g," "),"..."]})]}),s.jsxs("div",{className:"history-item-actions",children:[s.jsx(re,{content:"Restore this version",relationship:"label",children:s.jsx(Zt,{size:"small",icon:s.jsx(rs,{}),onClick:L=>{L.stopPropagation(),se(T)},appearance:"subtle"})}),s.jsx(re,{content:"Delete snapshot",relationship:"label",children:s.jsx(Zt,{size:"small",icon:s.jsx(qm,{}),onClick:L=>A(T.id,L),appearance:"subtle"})})]})]},T.id))})}),s.jsx("div",{className:"history-footer",children:s.jsx(Zt,{size:"small",onClick:W,children:"Refresh History"})})]}):null},dv=Object.freeze(Object.defineProperty({__proto__:null,default:lp},Symbol.toStringTag,{value:"Module"}));class fv{constructor(){this.isDevelopment=!1,this.levels={error:0,warn:1,info:2,debug:3},this.currentLevel=this.isDevelopment?this.levels.debug:this.levels.error}error(r,...d){this.currentLevel>=this.levels.error&&console.error(`[ERROR] ${r}`,...d)}warn(r,...d){this.currentLevel>=this.levels.warn&&console.warn(`[WARN] ${r}`,...d)}info(r,...d){this.currentLevel>=this.levels.info&&console.info(`[INFO] ${r}`,...d)}debug(r,...d){this.currentLevel>=this.levels.debug&&console.log(`[DEBUG] ${r}`,...d)}log(r,...d){this.debug(r,...d)}component(r,d,...c){this.debug(`[${r}] ${d}`,...c)}service(r,d,...c){this.debug(`[${r}] ${d}`,...c)}}const da=new fv;function hv(){const m=g.useRef(null),r=g.useRef(!1),d=g.useCallback(p=>{p&&(m.current=p,da.component("FocusManager","Editor view registered:",!!p))},[]),c=g.useCallback(()=>{r.current=!0,da.component("FocusManager","Preparing for focus restoration")},[]),f=g.useCallback((p=!1)=>{if(da.component("FocusManager","restoreFocus called, editorView:",!!m.current,"shouldRestore:",r.current,"force:",p),!r.current&&!p)return da.component("FocusManager","Not restoring - not prepared"),!1;try{if(m.current&&m.current.focus)return da.component("FocusManager","Using CodeMirror view.focus()"),m.current.focus(),r.current=!1,!0;const v=document.querySelector(".cm-content");return v?(da.component("FocusManager","Using fallback - focusing .cm-content"),v.focus(),r.current=!1,!0):m.current&&m.current.dom?(da.component("FocusManager","Using fallback - focusing editor.dom"),m.current.dom.focus(),r.current=!1,!0):(da.component("FocusManager","No focusable element found"),!1)}catch(v){return da.warn("Failed to restore focus:",v),!1}},[]),b=g.useCallback((p,v=!0)=>(...j)=>{v&&c();const X=p(...j);return v&&setTimeout(()=>f(),100),X},[c,f]);return g.useEffect(()=>()=>{r.current=!1},[]),{registerEditor:d,restoreFocus:f,prepareFocusLoss:c,withFocusRestore:b}}var mv=Fb();const pv=Cu(mv);class gv{constructor(){this.db=null,this.isInitialized=!1}async initialize(){if(!this.isInitialized)try{const r=await pv({locateFile:c=>c.endsWith(".wasm")?"/mdstudio/sql-wasm.wasm":c}),d=localStorage.getItem("markdownstudio_db");if(d){const c=new Uint8Array(JSON.parse(d));this.db=new r.Database(c)}else this.db=new r.Database,this.createTables();this.isInitialized=!0}catch(r){throw console.error("Failed to initialize database:",r),r}}createTables(){const r=`
      CREATE TABLE IF NOT EXISTS files (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        content TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        modified_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        tags TEXT,
        metadata TEXT
      )
    `,d=`
      CREATE TABLE IF NOT EXISTS links (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        source_file_id TEXT NOT NULL,
        target_file_id TEXT,
        link_text TEXT NOT NULL,
        link_type TEXT DEFAULT 'wikilink',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (source_file_id) REFERENCES files (id),
        FOREIGN KEY (target_file_id) REFERENCES files (id)
      )
    `;this.db.run(r),this.db.run(d)}async saveFile(r){await this.initialize();const d=this.db.prepare(`
      INSERT OR REPLACE INTO files (id, name, content, created_at, modified_at, tags, metadata)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);d.run([r.id,r.name,r.content||"",r.createdAt||new Date().toISOString(),r.modifiedAt||new Date().toISOString(),JSON.stringify(r.tags||[]),JSON.stringify(r.metadata||{})]),d.free(),this.updateSearchIndex(r),this.saveToLocalStorage()}async getFile(r){await this.initialize();const d=this.db.prepare("SELECT * FROM files WHERE id = ?"),c=d.get(r);return d.free(),c?{id:c.id,name:c.name,content:c.content,createdAt:c.created_at,modifiedAt:c.modified_at,tags:JSON.parse(c.tags||"[]"),metadata:JSON.parse(c.metadata||"{}")}:null}async getAllFiles(){await this.initialize();const r=this.db.prepare("SELECT * FROM files ORDER BY modified_at DESC"),d=r.getAsObject([]);return r.free(),d.map(c=>({id:c.id,name:c.name,content:c.content,createdAt:c.created_at,modifiedAt:c.modified_at,tags:JSON.parse(c.tags||"[]"),metadata:JSON.parse(c.metadata||"{}")}))}async deleteFile(r){await this.initialize();const d=this.db.prepare("DELETE FROM files WHERE id = ?");d.run(r),d.free(),this.saveToLocalStorage()}async searchFiles(r,d={}){await this.initialize();let c="SELECT * FROM files_fts WHERE files_fts MATCH ?";const f=[r];d.tags&&d.tags.length>0&&(c+=" AND tags LIKE ?",f.push(`%${d.tags[0]}%`));const b=this.db.prepare(c),p=b.getAsObject(f);return b.free(),p.map(v=>({id:v.id,name:v.name,content:v.content,tags:JSON.parse(v.tags||"[]"),rank:v.rank}))}updateSearchIndex(r){$t(()=>import("./SearchService.BNhrLmuw.js"),__vite__mapDeps([7,1,4])).then(d=>{const c=d.default;c.isInitialized?c.addDocument(r):c.initialize([r])})}saveToLocalStorage(){const r=this.db.export();localStorage.setItem("markdownstudio_db",JSON.stringify(Array.from(r)))}async extractLinks(r){const d=/\[\[([^\]|]+)(?:\|([^\]]+))?(?:#([^\]]+))?\]\]/g,c=[];let f;for(;(f=d.exec(r))!==null;)c.push({text:f[0],target:f[1],displayText:f[2]||f[1],heading:f[3]||null,type:"wikilink"});return c}async updateLinks(r,d){await this.initialize(),this.db.run("DELETE FROM links WHERE source_file_id = ?",[r]);const c=await this.extractLinks(d),f=this.db.prepare(`
      INSERT INTO links (source_file_id, target_file_id, link_text, link_type)
      VALUES (?, ?, ?, ?)
    `);for(const b of c)f.run([r,b.target,b.text,b.type]);f.free()}async close(){this.db&&(this.saveToLocalStorage(),this.db.close(),this.db=null,this.isInitialized=!1)}}const bv=new gv,Zn={getSectionRange:(m,r)=>{const d=m.split(`
`),c=r-1;let f=-1,b=7;for(let v=c;v>=0;v--){const j=d[v].match(/^(#{1,6})\s+/);if(j){f=v,b=j[1].length;break}}if(f===-1){let v=d.findIndex(j=>j.match(/^#{1,6}\s+/));return{start:1,end:v===-1?d.length:v,level:0}}let p=-1;for(let v=f+1;v<d.length;v++){const j=d[v].match(/^(#{1,6})\s+/);if(j&&j[1].length<=b){p=v;break}}return{start:f+1,end:p===-1?d.length:p,level:b}},moveSection:(m,r,d,c)=>{const f=m.split(`
`),b=f.slice(r-1,d),p=[...f.slice(0,r-1),...f.slice(d)];let v=c;return c>d?v-=b.length:c>r&&(v=r),[...p.slice(0,v-1),...b,...p.slice(v-1)].join(`
`)},findBlockRanges:(m,r)=>{const d=m.split(`
`),c=[];return d.forEach((f,b)=>{let p=!1;r==="headings"&&f.match(/^#{1,6}\s+/)&&(p=!0),r==="list-items"&&f.match(/^\s*([-*+]|\d+\.)\s+/)&&(p=!0),r==="code-blocks"&&f.match(/^```/)&&(p=!0),p&&c.push({line:b+1,content:f})}),c}};var yv=Kb(),vv=Jb();const xv=Cu(vv);Ib.workerSrc=`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${Wb}/pdf.worker.min.js`;class Sv{constructor(){this.turndownService=null,this.turndownPromise=null}async getTurndownService(){return this.turndownService?this.turndownService:(this.turndownPromise||(this.turndownPromise=$t(()=>import("./vendor-processing.BXrOsedG.js").then(r=>r.aa),__vite__mapDeps([0,1])).then(r=>{const d=r.default;return this.turndownService=new d({headingStyle:"atx",codeBlockStyle:"fenced",hr:"---",bulletListMarker:"-",emDelimiter:"*",strongDelimiter:"**"}),this.turndownService.addRule("strikethrough",{filter:["del","s","strike"],replacement:c=>`~~${c}~~`}),this.turndownService})),this.turndownPromise)}async convertWordToMarkdown(r){try{const d=await r.arrayBuffer(),f=(await yv.convertToHtml({arrayBuffer:d})).value;return(await this.getTurndownService()).turndown(f)}catch(d){throw console.error("Error converting Word to Markdown:",d),new Error("Failed to convert Word document. Ensure it is a valid .docx file.")}}async convertPdfToMarkdown(r){try{const d=await r.arrayBuffer(),f=await Pb({data:d}).promise;let b="";for(let p=1;p<=f.numPages;p++){const j=await(await f.getPage(p)).getTextContent();let X,H="";for(const $ of j.items)X!==void 0&&Math.abs($.transform[5]-X)>5&&(H+=`  
`),H+=$.str,X=$.transform[5];b+=H+`

---

`}return b.trim()}catch(d){throw console.error("Error converting PDF to Markdown:",d),new Error("Failed to extract text from PDF.")}}async isBinaryFile(r){const c=await r.slice(0,4096).arrayBuffer(),f=new Uint8Array(c);for(let b=0;b<f.length;b++)if(f[b]===0)return!0;return!1}async convertPptxToMarkdown(r){try{const d=await r.arrayBuffer(),c=await zo.loadAsync(d),f=[];c.folder("ppt/slides").forEach((p,v)=>{p.match(/^slide\d+\.xml$/)&&f.push(v)}),f.sort((p,v)=>{const j=parseInt(p.name.match(/slide(\d+)\.xml$/)[1],10),X=parseInt(v.name.match(/slide(\d+)\.xml$/)[1],10);return j-X});let b="";for(let p=0;p<f.length;p++){const X=((await f[p].async("string")).match(/<a:t.*?>(.*?)<\/a:t>/g)||[]).map(H=>H.replace(/<.*?>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'")).join(" ").trim();X?b+=`## Slide ${p+1}

${X}

---

`:b+=`## Slide ${p+1}

*(Empty slide or unsupported content)*

---

`}return b.trim()}catch(d){throw console.error("Error converting PPTX to Markdown:",d),new Error("Failed to convert PPTX document. Ensure it is a valid .pptx file.")}}async convertExcelToMarkdown(r){try{const d=await r.arrayBuffer(),c=ey(d,{type:"array"});let f="";for(const b of c.SheetNames){const p=c.Sheets[b],v=ty.sheet_to_csv(p);v.trim()&&(f+=`## ${b}

`,f+=this.convertCsvToMarkdown(v),f+=`

`)}return f.trim()}catch(d){throw console.error("Error converting Spreadsheet to Markdown:",d),new Error("Failed to convert spreadsheet. Ensure it is a valid Excel or ODS file.")}}async convertOdtToMarkdown(r){try{const d=await r.arrayBuffer(),f=await(await zo.loadAsync(d)).file("content.xml").async("string"),b=[],p=/<text:(p|h)[^>]*>(.*?)<\/text:\1>/g;let v;for(;(v=p.exec(f))!==null;){let j=v[2].replace(/<[^>]+>/g,"").trim();v[1]==="h"?b.push("### "+j):j&&b.push(j)}return b.join(`

`)}catch(d){throw console.error("Error converting ODT to Markdown:",d),new Error("Failed to convert OpenDocument Text. Ensure it is a valid .odt file.")}}async convertEpubToMarkdown(r){try{const d=await r.arrayBuffer(),c=await zo.loadAsync(d),f=[];c.forEach((p,v)=>{p.match(/\.(html|xhtml)$/i)&&f.push(v)}),f.sort((p,v)=>p.name.localeCompare(v.name));let b="";for(const p of f){const v=await p.async("string"),j=await this.getTurndownService();b+=j.turndown(v)+`

---

`}return b.trim()}catch(d){throw console.error("Error converting EPUB to Markdown:",d),new Error("Failed to convert EPUB document. Ensure it is a valid .epub file.")}}convertCsvToMarkdown(r){const d=xv.parse(r,{header:!1});if(d.errors.length>0&&d.data.length===0)return r;const c=d.data;if(c.length===0)return"";let f="";const b=c[0].map(v=>String(v).replace(/\|/g,"\\|"));f+="| "+b.join(" | ")+` |
`;const p=b.map(()=>"---");f+="| "+p.join(" | ")+` |
`;for(let v=1;v<c.length;v++){if(c[v].length===1&&c[v][0]==="")continue;const j=c[v].map(X=>String(X).replace(/\|/g,"\\|").replace(/\n/g,"<br>"));for(;j.length<b.length;)j.push("");f+="| "+j.join(" | ")+` |
`}return f}convertJsonToMarkdown(r){try{const d=JSON.parse(r);return"```json\n"+JSON.stringify(d,null,2)+"\n```"}catch{return"```json\n"+r+"\n```"}}async importFile(r){const d=r.name,c=d.split(".").pop().toLowerCase();let f="",b=d;if(c==="docx")f=await this.convertWordToMarkdown(r),b=d.replace(/\.docx$/,".md");else if(["xlsx","xls","ods"].includes(c))f=await this.convertExcelToMarkdown(r),b=d.replace(/\.(xlsx|xls|ods)$/,".md");else if(c==="odt")f=await this.convertOdtToMarkdown(r),b=d.replace(/\.odt$/,".md");else if(c==="epub")f=await this.convertEpubToMarkdown(r),b=d.replace(/\.epub$/,".md");else if(c==="pptx")f=await this.convertPptxToMarkdown(r),b=d.replace(/\.pptx$/,".md");else if(c==="pdf")f=await this.convertPdfToMarkdown(r),b=d.replace(/\.pdf$/,".md");else{if(await this.isBinaryFile(r))throw new Error(`File ${d} appears to be a binary file. Only .docx, .pdf, or text formats are supported.`);const p=await r.text();c==="csv"?(f=this.convertCsvToMarkdown(p),b=d.replace(/\.csv$/,".md")):c==="json"?(f=this.convertJsonToMarkdown(p),b=d.replace(/\.json$/,".md")):c==="html"||c==="htm"?(f=(await this.getTurndownService()).turndown(p),b=d.replace(/\.(html|htm)$/,".md")):["md","markdown"].includes(c)?f=p:(f=p.replace(/(\r?\n)/g,"  $1"),c!=="txt"?b=d+".md":b=d.replace(/\.txt$/,".md"))}return{name:b,content:f}}}const wv=new Sv,Tv={empty:"",meeting:`# Meeting Notes: [Topic]

Date: `+new Date().toLocaleDateString()+`

## Attendees
- 

## Agenda
- 

## Decisions
- 

## Action Items
- [ ] `,blog:`---
title: My Blog Post
date: `+new Date().toISOString().split("T")[0]+`
author: 
tags: []
---

# Introduction

Write your intro here...`,readme:`# Project Name

Short description of the project.

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

...

## License

MIT`},Ev=(m,r,d,c)=>({undo:f=>{Zb(f),f.focus()},redo:f=>{Qb(f),f.focus()},cut:async f=>{const b=f.state.selection.main,p=f.state.sliceDoc(b.from,b.to);p&&(await navigator.clipboard.writeText(p),f.dispatch({changes:{from:b.from,to:b.to,insert:""}})),f.focus()},copy:async f=>{const b=f.state.selection.main,p=f.state.sliceDoc(b.from,b.to);p&&await navigator.clipboard.writeText(p),f.focus()},paste:async f=>{try{const b=await navigator.clipboard.readText(),p=f.state.selection.main;f.dispatch({changes:{from:p.from,to:p.to,insert:b},selection:{anchor:p.from+b.length}})}catch{}f.focus()},find:f=>{m(b=>b&&c==="find"?!1:(r("find"),!0))},replace:f=>{m(b=>b&&c==="findReplace"?!1:(r("findReplace"),!0))}}),Lm={highlightSpecialChars:!1,tabSize:4,indentUnit:2,lineSeparator:"auto",theme:"light",scrollPastEnd:!1,showLintGutter:!1,showLineNumbers:!0,showFoldGutter:!0,showWritingStats:!0,showPlaceholder:!0},Co=.5,au=.2,Nm=.8,jv=240,kv=.45,Rn={getUsage:()=>{let m=0;for(let r in localStorage)localStorage.hasOwnProperty(r)&&(m+=localStorage[r].length+r.length);return m},getQuota:()=>5*1024*1024,compressFiles:m=>m.map(d=>({...d,content:d.content&&d.content.length>1e5?"[FILE_TOO_LARGE_TO_SAVE]":d.content})),setItem:(m,r)=>{try{if(m==="markdownstudio_files"){const d=JSON.parse(r),c=Rn.compressFiles(d),f=JSON.stringify(c),b=Rn.getUsage(),p=f.length+m.length,v=Rn.getQuota();return b+p>v*.9&&(console.warn("Approaching localStorage quota limit, clearing old data"),Rn.removeItem("markdownstudio_files"),Rn.removeItem("markdownstudio_settings")),localStorage.setItem(m,f),!0}else return localStorage.setItem(m,r),!0}catch(d){if(d.name==="QuotaExceededError"){if(console.warn("localStorage quota exceeded, unable to save:",m),m==="markdownstudio_files")try{localStorage.removeItem("markdownstudio_files");const c=JSON.parse(r),f=Rn.compressFiles(c);return localStorage.setItem(m,JSON.stringify(f)),console.warn("Saved compressed files to localStorage"),!0}catch(c){console.error("Failed to save even compressed files:",c)}return!1}throw d}},getItem:m=>{try{return localStorage.getItem(m)}catch(r){return console.warn("Error reading from localStorage:",r),null}},removeItem:m=>{try{return localStorage.removeItem(m),!0}catch(r){return console.warn("Error removing from localStorage:",r),!1}}};function Mv(){const[m,r]=g.useState([]),[d,c]=g.useState(null),[f,b]=g.useState("split"),[p,v]=g.useState("view"),[j,X]=g.useState(()=>{const h=localStorage.getItem("markdownstudio_theme");return h?h==="dark":!1}),[H,$]=g.useState(()=>localStorage.getItem("markdownstudio_high_contrast")==="true");g.useEffect(()=>{localStorage.setItem("markdownstudio_theme",j?"dark":"light")},[j]),g.useEffect(()=>{localStorage.setItem("markdownstudio_high_contrast",H.toString())},[H]);const[k,V]=g.useState(!1),[B,F]=g.useState(!1),[G,x]=g.useState(!1),[W,se]=g.useState("find"),[A,U]=g.useState(!1),[T,L]=g.useState(!1),[Q,I]=g.useState(!1),[le,te]=g.useState("preview"),[ce,de]=g.useState(!1),[J,P]=g.useState(()=>xn.getSettings()),[_,R]=g.useState(()=>{const h=Rn.getItem("markdownstudio_settings");return h?{...Lm,...JSON.parse(h)}:Lm}),[ae,Se]=g.useState(()=>Sn.getActiveModes()),[be,pe]=g.useState(_.showWritingStats),[ke,fe]=g.useState(!1),[we,Ot]=g.useState(!1),[ft,vt]=g.useState(!1),[lt,xt]=g.useState(!1),[Ee,ht]=g.useState(""),[qt,wl]=g.useState(1),[At,Yt]=g.useState(1),Ft=g.useRef(null),ha=g.useRef({line:1,column:1}),Tl=g.useCallback(h=>{const S=typeof h=="number"?{line:h,column:1}:h;ha.current=S,Ft.current||(Ft.current=setTimeout(()=>{wl(ha.current.line),Yt(ha.current.column),Ft.current=null},50))},[]),[Kt,xe]=g.useState(()=>{if(typeof window<"u"){const h=parseFloat(Rn.getItem("markdownstudio_split_ratio"));if(Number.isFinite(h))return Math.min(Nm,Math.max(au,h))}return Co}),[Xe,Ht]=g.useState([]),[Et,Ie]=g.useState(["preview"]),[Dt,Ja]=g.useState({x:window.innerWidth-450,y:70}),[rn,cn]=g.useState(!1),[Hn,ve]=g.useState({x:0,y:0}),Bn=g.useDeferredValue(Ee),mt=g.useRef(null),Pe=g.useRef(null),ye=g.useRef(null),{registerEditor:Bt,withFocusRestore:Ae}=hv(),Jt=g.useRef(null),un=g.useRef(null),Xt=g.useRef({ratio:0,pixel:0}),he=g.useRef(null),$e=g.useRef(!1),it=g.useRef({fromEditor:!1,fromPreview:!1});g.useEffect(()=>{const h=Jt.current,S=un.current;if(!h||!S||f!=="split")return;const N=()=>{if(it.current.fromPreview){it.current.fromPreview=!1;return}it.current.fromEditor=!0;const K=h.scrollHeight-h.clientHeight,ue=K>0?h.scrollTop/K:0,me=S.scrollHeight-S.clientHeight;me>0&&(S.scrollTop=ue*me)},Z=()=>{if(it.current.fromEditor){it.current.fromEditor=!1;return}it.current.fromPreview=!0;const K=S.scrollHeight-S.clientHeight,ue=K>0?S.scrollTop/K:0,me=h.scrollHeight-h.clientHeight;me>0&&(h.scrollTop=ue*me)};return h.addEventListener("scroll",N,{passive:!0}),S.addEventListener("scroll",Z,{passive:!0}),()=>{h.removeEventListener("scroll",N),S.removeEventListener("scroll",Z)}},[f,d]);const De=g.useRef("");g.useEffect(()=>{if(!d||!Ee)return;const h=setTimeout(()=>{Ee!==De.current&&(Oo.createSnapshot(d,Ee),De.current=Ee)},3e4),S=setInterval(()=>{Ee!==De.current&&(Oo.createSnapshot(d,Ee),De.current=Ee)},120*1e3);return()=>{clearTimeout(h),clearInterval(S)}},[d,Ee]);const Oe=g.useCallback(()=>he.current?.getBoundingClientRect().width||null,[]),Ue=g.useCallback((h,S)=>{if(!Number.isFinite(h))return Co;if(!S)return Math.min(Nm,Math.max(au,h));const N=jv/S,Z=Math.min(kv,Math.max(au,N)),K=1-Z;return Math.min(K,Math.max(Z,h))},[]),jt=g.useCallback(()=>{$e.current&&(typeof document<"u"&&document.body.classList.remove("resizing-horizontal"),$e.current=!1)},[]),Wa=g.useCallback(h=>{f==="split"&&($e.current=!0,typeof document<"u"&&document.body.classList.add("resizing-horizontal"),h.preventDefault())},[f]),di=g.useCallback(()=>{const h=Oe();xe(S=>Ue(Co,h??void 0))},[Ue,Oe]),Ia=g.useCallback(h=>{if(f!=="split")return;const S=Oe()??void 0;if(h.key==="ArrowLeft"||h.key==="ArrowRight"){h.preventDefault();const N=h.key==="ArrowLeft"?-.02:.02;xe(Z=>Ue(Z+N,S))}else h.key==="Home"?(h.preventDefault(),xe(()=>Ue(0,S))):h.key==="End"?(h.preventDefault(),xe(()=>Ue(1,S))):(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),xe(()=>Ue(Co,S)))},[Ue,Oe,f]);g.useEffect(()=>{const h=Rn.getItem("markdownstudio_files");if(h)try{const S=JSON.parse(h),N=S.filter(Z=>Z.content==="[FILE_TOO_LARGE_TO_SAVE]");N.length>0&&console.warn(`${N.length} files were too large to save and will be empty`),r(S)}catch(S){console.warn("Error parsing saved files:",S),r([])}},[]),g.useEffect(()=>{const h=JSON.stringify(m);Rn.setItem("markdownstudio_files",h)||console.warn("Unable to save files to localStorage due to quota limits")},[m]),g.useEffect(()=>{Rn.setItem("markdownstudio_settings",JSON.stringify(_))},[_]),g.useEffect(()=>{pe(_.showWritingStats)},[_.showWritingStats]),g.useEffect(()=>{_.theme==="dark"?X(!0):_.theme==="light"&&X(!1)},[_.theme]),g.useEffect(()=>{const h=N=>{const Z=N.detail;P(Z),$(Z.highContrast)};document.addEventListener("accessibilitySettingsChange",h);const S=xn.getSettings();return P(S),$(S.highContrast),()=>{document.removeEventListener("accessibilitySettingsChange",h)}},[]),g.useEffect(()=>{typeof window<"u"&&Rn.setItem("markdownstudio_split_ratio",Kt.toString())},[Kt]),g.useEffect(()=>{typeof document<"u"&&document.body.classList.remove("resizing-horizontal")},[]);const ee=m.find(h=>h.id===d);g.useEffect(()=>{if(!ee)return;const h=Oe();h&&xe(S=>Ue(S,h))},[ee,Ue,Oe]),g.useEffect(()=>{f!=="split"&&jt()},[f,jt]),g.useEffect(()=>{const h=()=>{const S=Oe();xe(N=>Ue(N,S))};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[Ue,Oe]),g.useEffect(()=>{const h=N=>{if(!$e.current||f!=="split")return;const Z=he.current;if(!Z)return;const K=Z.getBoundingClientRect();if(!K.width)return;const ue=(N.clientX-K.left)/K.width,me=Ue(ue,K.width);xe(me),N.preventDefault()},S=()=>{jt()};return window.addEventListener("pointermove",h),window.addEventListener("pointerup",S),window.addEventListener("pointercancel",S),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S)}},[Ue,f,jt]);const us=p==="edit"&&(f==="split"||f==="editor"),fi=p==="view"||f==="split"||f==="preview",Fn=g.useCallback((h="empty")=>{const S=Tv[h]||"",N={id:Do(),name:`Untitled-${Date.now()}.md`,content:S,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString()};r(Z=>[...Z,N]),ht(S),fe(h!=="empty"),vt(!1),xt(!1),c(N.id),v("edit"),Sn.disableMode("zen")},[]),ma=g.useCallback(()=>{!d||mt.current===null||(r(h=>h.map(S=>S.id===d?{...S,content:mt.current,modifiedAt:new Date().toISOString()}:S)),mt.current=null,Pe.current&&(clearTimeout(Pe.current),Pe.current=null))},[d,r]),El=g.useCallback(()=>{Pe.current&&clearTimeout(Pe.current),Pe.current=setTimeout(()=>{ma()},350)},[ma]),jl=async()=>{try{const[h]=await window.showOpenFilePicker({types:[{description:"Markdown files",accept:{"text/markdown":[".md"]}}]}),S=await h.getFile(),N=await S.text(),Z=m.find(ue=>ue.name===S.name);if(Z){ht(Z.content||""),fe(!1),vt(!1),xt(!1),c(Z.id),v("view"),Sn.disableMode("zen");return}const K={id:Do(),name:S.name,content:N,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString(),fileHandle:h};r([...m,K]),ht(N),fe(!1),vt(!1),xt(!1),c(K.id),v("view"),Sn.disableMode("zen")}catch(h){console.error("Error opening file:",h)}},kl=async()=>{if(ee){ma();try{if(ee.fileHandle){const h=await ee.fileHandle.createWritable();await h.write(Ee),await h.close()}else{const h=await window.showSaveFilePicker({suggestedName:ee.name,types:[{description:"Markdown files",accept:{"text/markdown":[".md"]}}]}),S=await h.createWritable();await S.write(Ee),await S.close();const N=m.map(Z=>Z.id===ee.id?{...Z,fileHandle:h}:Z);r(N)}fe(!1)}catch(h){console.error("Error saving file:",h)}}},kt=g.useCallback(h=>{if(!d)return;mt.current=h,ht(h);const S=ee?.content??"";fe(S!==h),Sn.updateWritingStats(h),El()},[d,ee,El]),St=g.useCallback(h=>{let S=d;if(d===h){const N=m.filter(K=>K.id!==h);S=N.length>0?N[0].id:null;const Z=N.length>0?N[0]:null;ht(Z?Z.content:""),fe(!1),vt(!1),xt(!1)}r(N=>N.filter(Z=>Z.id!==h)),c(S)},[m,d]);g.useCallback((h,S)=>{r(N=>N.map(Z=>Z.id===h?{...Z,name:S}:Z))},[]);const zt=g.useCallback(Ae(()=>{const h=!j;X(h),R(S=>({...S,theme:h?"dark":"light"}))}),[Ae,j]),Un=g.useCallback(()=>{F(!0)},[]),Pa=g.useCallback(()=>{U(!0)},[]),ds=g.useCallback(()=>{L(!0)},[]),fs=g.useCallback(h=>{const S=ye.current;if(!S||h===void 0||h===null)return;const N=S.state.doc;if(typeof h=="number")try{const Qe=Math.min(Math.max(1,h),N.lines),ot=N.line(Qe).from;S.dispatch({selection:{anchor:ot,head:ot},effects:wn.scrollIntoView(ot,{y:"center"})}),S.focus();return}catch(Qe){console.error("Line jump error:",Qe)}const Z=h;let K=Ee;if(!K)return;const ue=/^---\s*\n[\s\S]*?\n---\s*\n/;K=K.replace(ue,"");let me=1;const fn=K.split(`
`);let nt=!1;for(let Qe=0;Qe<fn.length;Qe++){const ot=fn[Qe].trim();if(ot.startsWith("#")&&ot.replace(/^#+\s*/,"").trim().toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")===Z){const Tn=Ee.match(/^---\s*\n[\s\S]*?\n---\s*\n/),gi=Tn?Tn[0].split(`
`).length-1:0;me=Qe+1+gi,nt=!0;break}}if(nt){const Qe=N.line(me).from;S.dispatch({selection:{anchor:Qe,head:Qe},effects:wn.scrollIntoView(Qe,{y:"center"})}),S.focus()}},[Ee]),Ml=g.useCallback(h=>{if(!h)return;const S=h.getBoundingClientRect(),N=window.innerWidth,Z=window.innerHeight,K=10,ue=60;if(S.top>=K&&S.left>=K&&S.right<=N-K&&S.bottom<=Z-K)return;let fn=S.left,nt=S.top;S.width>N-2*K||S.left<K?fn=K:S.right>N-K&&(fn=N-S.width-K),S.height>Z-2*K||S.top<K?nt=K:S.bottom>Z-K&&(nt=Z-S.height-K),nt>Z-ue&&(nt=Math.max(K,Z-ue)),(fn!==S.left||nt!==S.top)&&(h.style.setProperty("left",`${fn}px`,"important"),h.style.setProperty("top",`${nt}px`,"important"),h.style.setProperty("transform","none","important"),h.style.setProperty("margin","0","important"))},[]);g.useEffect(()=>{const h=()=>{setTimeout(()=>{document.querySelectorAll('[role="dialog"], .fui-Dialog__surface, .fui-DialogSurface').forEach(K=>{K.style.setProperty("max-height","80vh","important"),K.style.setProperty("overflow-y","auto","important"),K.style.setProperty("user-select","none","important"),K.querySelectorAll('input, textarea, select, [contenteditable="true"]').forEach(me=>me.style.setProperty("user-select","auto","important")),K.offsetParent!==null&&Ml(K)})},100)},S=new MutationObserver(h);S.observe(document.body,{childList:!0,subtree:!0});const N=()=>{document.querySelectorAll('[role="dialog"], .fui-Dialog__surface, .fui-DialogSurface').forEach(K=>{K.offsetParent!==null&&Ml(K)})};return window.addEventListener("resize",N),()=>{S.disconnect(),window.removeEventListener("resize",N)}},[Ml]);const pa=g.useCallback((h,S)=>{const N=ye.current;if(!N)return;const Z=Zn.getSectionRange(Ee,h),K=Zn.moveSection(Ee,Z.start,Z.end,S);kt(K),ht(K),N.dispatch({changes:{from:0,to:N.state.doc.length,insert:K}}),setTimeout(()=>N.focus(),50)},[Ee,kt]),Cl=g.useCallback(Ae(()=>{R(h=>({...h,showLintGutter:!h.showLintGutter}))}),[Ae]),ga=g.useCallback(Ae(()=>{R(h=>({...h,showLineNumbers:!h.showLineNumbers}))}),[Ae]),ba=g.useCallback(Ae(()=>{R(h=>({...h,showFoldGutter:!h.showFoldGutter}))}),[Ae]),ya=g.useCallback(Ae(()=>{R(h=>({...h,showWritingStats:!h.showWritingStats}))}),[Ae]),dn=g.useCallback(Ae(h=>{Sn.toggleMode(h)}),[Ae]),st=g.useCallback(()=>{Sn.toggleMode("zen")},[]);g.useEffect(()=>{if(p==="edit"){const h=setTimeout(()=>{ye.current&&ye.current.focus()},50);return()=>clearTimeout(h)}},[p,d]),g.useEffect(()=>{const h=S=>{if((S.ctrlKey||S.metaKey)&&(S.key==="p"||S.key==="P")){S.preventDefault(),de(N=>!N);return}if((S.ctrlKey||S.metaKey)&&(S.key==="f"||S.key==="F")){S.preventDefault(),G&&W==="find"?x(!1):(se("find"),x(!0));return}if((S.ctrlKey||S.metaKey)&&(S.key==="h"||S.key==="H")){S.preventDefault(),G&&W==="findReplace"?x(!1):(se("findReplace"),x(!0));return}S.key==="Escape"&&ae.zen&&st()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[ae,st,G,W]);const hs=g.useCallback(h=>{Ot(h)},[]),ms=g.useCallback(({canUndo:h,canRedo:S})=>{vt(h),xt(S)},[]),qn=g.useMemo(()=>Ev(x,se,G,W),[x,se,G,W]),Ut=g.useCallback(h=>{const S=ye.current;if(!S)return;const N=qn[h];N&&N(S)},[qn]),Re=g.useCallback(h=>{if(!ye.current)return;const S=ye.current,{state:N}=S,Z=N.selection.main,K=N.sliceDoc(Z.from,Z.to),me={bold:{wrap:["**","**"],offset:2},italic:{wrap:["*","*"],offset:1},code:{wrap:["`","`"],offset:1},strikethrough:{wrap:["~~","~~"],offset:2},h1:{prefix:"# ",offset:2},h2:{prefix:"## ",offset:3},h3:{prefix:"### ",offset:4},h4:{prefix:"#### ",offset:5},h5:{prefix:"##### ",offset:6},h6:{prefix:"###### ",offset:7},bullet:{prefix:"- ",offset:2},numbered:{prefix:"1. ",offset:3},quote:{prefix:"> ",offset:2},link:{transform:ot=>ot?`[${ot}](url)`:"[text](url)",offset:ot=>ot?ot.length+3:1},image:{transform:ot=>ot?`![${ot}](url)`:"![alt](url)",offset:ot=>ot?ot.length+4:2},"callout-note":{prefix:`> [!NOTE]
> `,offset:11},"callout-tip":{prefix:`> [!TIP]
> `,offset:10},"callout-warning":{prefix:`> [!WARNING]
> `,offset:14},"callout-error":{prefix:`> [!ERROR]
> `,offset:12},table:{transform:()=>`| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |`,offset:87},codeblock:{transform:()=>"```\n// Your code here\n```",offset:4},hr:{transform:()=>`
---
`,offset:2},tasklist:{transform:()=>`- [ ] Task item
- [ ] Another task`,offset:4},footnote:{transform:()=>`Here is some text with a footnote[^1].

[^1]: This is the footnote content.`,offset:32},highlight:{prefix:"==",suffix:"==",offset:2},subscript:{prefix:"~",suffix:"~",offset:1},superscript:{prefix:"^",suffix:"^",offset:1},math:{transform:()=>`$E = mc^2$

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$`,offset:11},mermaid:{transform:()=>`\`\`\`mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
\`\`\``,offset:4}}[h];if(!me||!K&&!["link","image","callout-note","callout-tip","callout-warning","callout-error","table","codeblock","hr","tasklist","footnote","math","mermaid","h1","h2","h3","h4","h5","h6"].includes(h))return;let nt,Qe;me.transform?(nt=me.transform(K),Qe=typeof me.offset=="function"?me.offset(K):me.offset):me.wrap?(nt=`${me.wrap[0]}${K}${me.wrap[1]}`,Qe=K?0:me.offset):me.suffix?(nt=`${me.prefix}${K}${me.suffix}`,Qe=K?me.suffix.length:me.offset):(nt=`${me.prefix}${K}`,Qe=K?0:me.offset),S.dispatch({changes:{from:Z.from,to:Z.to,insert:nt},selection:{anchor:Z.from+nt.length-Qe,head:Z.from+nt.length-Qe}}),S.focus()},[]),hi=g.useCallback(h=>{const S=ye.current;if(!S)return;const{state:N}=S,Z=N.selection.main;S.dispatch({changes:{from:Z.from,to:Z.to,insert:h},selection:{anchor:Z.from+h.length,head:Z.from+h.length}}),S.focus()},[]),wt=g.useCallback(Ae(h=>{b(S=>{const N=S===h?S:h;return N==="split"&&Et.length===0&&(Ie(["preview"]),te("preview")),N})}),[Ae,Et]),va=g.useCallback(h=>{Ht(S=>S.filter(N=>N!==h)),Ie(S=>Array.from(new Set([...S,h]))),te(h),f!=="split"&&wt("split")},[f,wt]),el=g.useCallback(h=>{Xe.includes(h)||(Ht(S=>[...S,h]),Ie(S=>{const N=S.filter(Z=>Z!==h);return le===h&&(N.length>0?te(N[0]):wt("editor")),N}))},[Xe,le,wt]),tl=g.useCallback(h=>{const S=Xe.includes(h),N=Et.includes(h);S?Ht(K=>K.filter(ue=>ue!==h)):le===h&&f==="split"?Ie(K=>{const ue=K.filter(me=>me!==h);return le===h&&(ue.length>0?te(ue[0]):wt("editor")),ue}):N?(te(h),f!=="split"&&wt("split")):(Ie(K=>Array.from(new Set([...K,h]))),te(h),f!=="split"&&wt("split"))},[Xe,Et,le,f,wt]),Gt=g.useCallback(h=>{Ht(S=>S.filter(N=>N!==h)),Ie(S=>{const N=S.filter(Z=>Z!==h);return le===h&&(N.length>0?te(N[0]):wt("editor")),N})},[le,wt]);tl.bind(null,"snippet");const Wt=g.useCallback(h=>{cn(!0),ve({x:h.clientX-Dt.x,y:h.clientY-Dt.y}),h.preventDefault()},[Dt]),ps=g.useCallback(h=>{const S=h.touches[0];cn(!0),ve({x:S.clientX-Dt.x,y:S.clientY-Dt.y})},[Dt]),gs=g.useCallback(h=>{if(!rn)return;const S=h.type==="touchmove"?h.touches[0].clientX:h.clientX,N=h.type==="touchmove"?h.touches[0].clientY:h.clientY,Z=S-Hn.x,K=N-Hn.y,ue=window.innerWidth-400,me=window.innerHeight-500;Ja({x:Math.max(0,Math.min(Z,ue)),y:Math.max(0,Math.min(K,me))})},[rn,Hn]),xa=g.useCallback(h=>{if(rn){cn(!1);const S=h.type==="touchend"||h.type==="touchcancel"?h.changedTouches?h.changedTouches[0].clientX:0:h.clientX,N=h.type==="touchend"||h.type==="touchcancel"?h.changedTouches?h.changedTouches[0].clientY:0:h.clientY;document.elementsFromPoint(S,N).some(K=>K.classList.contains("right-panel-tabs"))&&va("preview")}},[rn,va]);g.useEffect(()=>{if(!ee||!Ee)return;const h=setTimeout(()=>{bv.saveFile({...ee,content:Ee,modifiedAt:new Date().toISOString()}).catch(S=>console.error("Auto-save failed:",S))},2e3);return()=>clearTimeout(h)},[Ee,ee]),g.useEffect(()=>{const h=S=>{Se(S)};return Sn.addModeChangeListener(h),()=>{Sn.removeModeChangeListener(h)}},[]),g.useEffect(()=>{const h=N=>{gs(N)},S=N=>{xa(N)};if(rn)return document.addEventListener("mousemove",h),document.addEventListener("mouseup",S),document.addEventListener("touchmove",h,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",S),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)}},[rn,gs,xa]);const mi=async()=>{try{const h=await window.showOpenFilePicker({types:[{description:"Text-based files",accept:{"text/markdown":[".md",".markdown"],"text/plain":[".txt"],"text/html":[".html",".htm"],"text/csv":[".csv"],"application/json":[".json"]}},{description:"Word Documents",accept:{"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"]}},{description:"Spreadsheets",accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel":[".xls"],"application/vnd.oasis.opendocument.spreadsheet":[".ods"]}},{description:"OpenDocument Text",accept:{"application/vnd.oasis.opendocument.text":[".odt"]}},{description:"PowerPoint Documents",accept:{"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]}},{description:"PDF Documents",accept:{"application/pdf":[".pdf"]}},{description:"E-books",accept:{"application/epub+zip":[".epub"]}}],multiple:!0});for(const S of h){const N=await S.getFile(),{name:Z,content:K}=await wv.importFile(N),ue={id:Do(),name:Z,content:K,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString()};r(me=>[...me,ue]),c(ue.id),ht(K),v("edit")}}catch(h){h.name!=="AbortError"&&(console.error("Error importing files:",h),alert(h.message||"Error importing files"))}},nl=g.useCallback(h=>{const S=rv(Ee,h);kt(S),ht(S),ye.current&&ye.current.dispatch({changes:{from:0,to:ye.current.state.doc.length,insert:S}})},[Ee,kt]),Yn=(h="md")=>{if(!ee){alert("No active file to export");return}if(h==="md"){const S=new Blob([ee.content],{type:"text/markdown"}),N=URL.createObjectURL(S),Z=document.createElement("a");Z.href=N,Z.download=ee.name,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(N)}else if(h==="html"){const S=document.querySelector(".markdown-content")?.innerHTML||"",N=`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${ee.name}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 30px; max-width: 800px; margin: 0 auto; line-height: 1.6; color: #333; }
  pre { background: #f6f8fa; padding: 16px; border-radius: 6px; overflow-x: auto; }
  code { background: #eff1f3; padding: 0.2em 0.4em; border-radius: 3px; font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace; font-size: 85%; }
  pre code { background: transparent; padding: 0; }
  blockquote { border-left: 4px solid #dfe2e5; margin: 0; padding: 0 1em; color: #6a737d; }
  img { max-width: 100%; border-radius: 6px; }
  table { border-collapse: collapse; width: 100%; margin-bottom: 1em; }
  th, td { border: 1px solid #dfe2e5; padding: 6px 13px; text-align: left; }
  th { background-color: #f6f8fa; font-weight: 600; }
  a { color: #0366d6; text-decoration: none; }
  a:hover { text-decoration: underline; }
  h1, h2 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
</style>
</head>
<body>
${S}
</body>
</html>`,Z=new Blob([N],{type:"text/html"}),K=URL.createObjectURL(Z),ue=document.createElement("a");ue.href=K,ue.download=ee.name.replace(/\.md$/,".html"),document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),URL.revokeObjectURL(K)}else if(h==="pdf"){const S=document.querySelector(".markdown-content")?.innerHTML||"",N=window.open("","","width=800,height=900");N.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${ee.name}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 20px; color: #000; line-height: 1.5; }
  pre { background: #f5f5f5; padding: 10px; break-inside: avoid; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word; }
  code { font-family: monospace; font-size: 90%; }
  blockquote { border-left: 4px solid #ccc; margin: 0; padding-left: 10px; color: #444; }
  img { max-width: 100%; break-inside: avoid; }
  table { border-collapse: collapse; width: 100%; margin-bottom: 1em; break-inside: auto; }
  tr { break-inside: avoid; break-after: auto; }
  th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
  @media print {
    body { padding: 0; }
  }
</style>
</head>
<body>
${S}
<script>
  window.onload = () => { setTimeout(() => { window.print(); window.close(); }, 500); }
<\/script>
</body>
</html>`),N.document.close()}else if(h==="doc"){const S=document.querySelector(".markdown-content")?.innerHTML||"",N=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${ee.name}</title></head>
<body>${S}</body></html>`,Z=new Blob(["\uFEFF",N],{type:"application/msword"}),K=URL.createObjectURL(Z),ue=document.createElement("a");ue.href=K,ue.download=ee.name.replace(/\.md$/,".doc"),document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),URL.revokeObjectURL(K)}else if(h==="epub"){const S=document.querySelector(".markdown-content")?.innerHTML||"",N=new zo;N.file("mimetype","application/epub+zip"),N.file("META-INF/container.xml",`<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);const K=`<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookID" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:title>${ee.name}</dc:title>
    <dc:language>en</dc:language>
  </metadata>
  <manifest>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="content" href="content.html" media-type="application/xhtml+xml"/>
  </manifest>
  <spine toc="ncx">
    <itemref idref="content"/>
  </spine>
</package>`;N.file("OEBPS/content.opf",K);const ue=`<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="BookID"/>
  </head>
  <docTitle>
    <text>${ee.name}</text>
  </docTitle>
  <navMap>
    <navPoint id="navPoint-1" playOrder="1">
      <navLabel><text>Content</text></navLabel>
      <content src="content.html"/>
    </navPoint>
  </navMap>
</ncx>`;N.file("OEBPS/toc.ncx",ue);const me=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${ee.name}</title>
</head>
<body>
  ${S.replace(/<br>/g,"<br/>").replace(/<hr>/g,"<hr/>").replace(/<img(.*?)>/g,"<img$1/>")}
</body>
</html>`;N.file("OEBPS/content.html",me),N.generateAsync({type:"blob",mimeType:"application/epub+zip"}).then(fn=>{const nt=URL.createObjectURL(fn),Qe=document.createElement("a");Qe.href=nt,Qe.download=ee.name.replace(/\.md$/,".epub"),document.body.appendChild(Qe),Qe.click(),document.body.removeChild(Qe),URL.revokeObjectURL(nt)})}else if(h==="pptx"){const S=document.querySelector(".markdown-content")?.innerHTML||"",N=document.createElement("div");N.innerHTML=S;const Z=new ny;let K=Z.addSlide();K.addText(ee.name.replace(/\.md$/,""),{x:.5,y:.5,fontSize:28,bold:!0});let ue=1.5;Array.from(N.children).forEach(me=>{me.tagName.match(/^H[1-3]$/)?(K=Z.addSlide(),K.addText(me.innerText,{x:.5,y:.5,w:9,h:1,fontSize:24,bold:!0}),ue=1.5):(me.tagName==="P"||me.tagName==="UL"||me.tagName==="OL")&&(ue>4.5&&(K=Z.addSlide(),ue=.5),K.addText(me.innerText,{x:.5,y:ue,w:9,h:1}),ue+=1)}),Z.writeFile({fileName:ee.name.replace(/\.md$/,".pptx")})}},It=g.useMemo(()=>[{id:"new",label:"New Blank Document",icon:s.jsx(oi,{}),onExecute:()=>Fn("empty")},{id:"new-meeting",label:"New Meeting Notes Template",icon:s.jsx(oi,{}),onExecute:()=>Fn("meeting")},{id:"new-blog",label:"New Blog Post Template",icon:s.jsx(oi,{}),onExecute:()=>Fn("blog")},{id:"new-readme",label:"New README Template",icon:s.jsx(oi,{}),onExecute:()=>Fn("readme")},{id:"open",label:"Open File",icon:s.jsx(si,{}),onExecute:()=>jl(),shortcut:"Ctrl+O"},{id:"save",label:"Save File",icon:s.jsx(lu,{}),onExecute:()=>kl(),shortcut:"Ctrl+S",disabled:!ee||!ke},{id:"import",label:"Import File",icon:s.jsx(iu,{}),onExecute:()=>mi()},{id:"export-md",label:"Export as Markdown (.md)",icon:s.jsx(Ka,{}),onExecute:()=>Yn("md"),disabled:!ee},{id:"export-html",label:"Export as HTML (.html)",icon:s.jsx(Ka,{}),onExecute:()=>Yn("html"),disabled:!ee},{id:"export-pdf",label:"Export as PDF",icon:s.jsx(Ka,{}),onExecute:()=>Yn("pdf"),disabled:!ee},{id:"export-doc",label:"Export as Word (.doc)",icon:s.jsx(Ka,{}),onExecute:()=>Yn("doc"),disabled:!ee},{id:"export-epub",label:"Export as EPUB (.epub)",icon:s.jsx(Ka,{}),onExecute:()=>Yn("epub"),disabled:!ee},{id:"export-pptx",label:"Export as PowerPoint (.pptx)",icon:s.jsx(Ka,{}),onExecute:()=>Yn("pptx"),disabled:!ee},{id:"undo",label:"Undo",icon:s.jsx(rs,{}),onExecute:()=>Ut("undo"),shortcut:"Ctrl+Z",disabled:!ee||!ft||p==="view"},{id:"redo",label:"Redo",icon:s.jsx(No,{}),onExecute:()=>Ut("redo"),shortcut:"Ctrl+Y",disabled:!ee||!lt||p==="view"},{id:"cut",label:"Cut",icon:s.jsx(ou,{}),onExecute:()=>Ut("cut"),shortcut:"Ctrl+X",disabled:!we||p==="view"},{id:"copy",label:"Copy",icon:s.jsx(ru,{}),onExecute:()=>Ut("copy"),shortcut:"Ctrl+C",disabled:!we||p==="view"},{id:"paste",label:"Paste",icon:s.jsx(cu,{}),onExecute:()=>Ut("paste"),shortcut:"Ctrl+V",disabled:!ee||p==="view"},{id:"find",label:"Find",icon:s.jsx(uu,{}),onExecute:()=>Ut("find"),shortcut:"Ctrl+F",disabled:!ee||p==="view"},{id:"replace",label:"Find & Replace",icon:s.jsx(Ro,{}),onExecute:()=>Ut("replace"),shortcut:"Ctrl+H",disabled:!ee||p==="view"},{id:"bold",label:"Format Bold",icon:s.jsx(fa,{}),onExecute:()=>Re("bold"),shortcut:"Ctrl+B",disabled:!we||p==="view"},{id:"italic",label:"Format Italic",icon:s.jsx(pu,{}),onExecute:()=>Re("italic"),shortcut:"Ctrl+I",disabled:!we||p==="view"},{id:"strikethrough",label:"Format Strikethrough",icon:s.jsx(gu,{}),onExecute:()=>Re("strikethrough"),shortcut:"Alt+S",disabled:!we||p==="view"},{id:"code",label:"Format Code",icon:s.jsx(ri,{}),onExecute:()=>Re("code"),shortcut:"Ctrl+`",disabled:!we||p==="view"},{id:"bullet",label:"Bullet List",icon:s.jsx($o,{}),onExecute:()=>Re("bullet"),shortcut:"Ctrl+Shift+8",disabled:!we||p==="view"},{id:"numbered",label:"Numbered List",icon:s.jsx(xl,{}),onExecute:()=>Re("numbered"),shortcut:"Ctrl+Shift+9",disabled:!we||p==="view"},{id:"quote",label:"Blockquote",icon:s.jsx(vu,{}),onExecute:()=>Re("quote"),disabled:!we||p==="view"},{id:"link",label:"Insert Link",icon:s.jsx(xu,{}),onExecute:()=>Re("link"),shortcut:"Ctrl+K",disabled:!we||p==="view"},{id:"image",label:"Insert Image",icon:s.jsx(Su,{}),onExecute:()=>Re("image"),shortcut:"Ctrl+Shift+I",disabled:!we||p==="view"},{id:"subscript",label:"Format Subscript",icon:s.jsx(bu,{}),onExecute:()=>Re("subscript"),disabled:!we||p==="view"},{id:"superscript",label:"Format Superscript",icon:s.jsx(yu,{}),onExecute:()=>Re("superscript"),disabled:!we||p==="view"},{id:"highlight",label:"Highlight Text",icon:s.jsx(Rm,{}),onExecute:()=>Re("highlight"),disabled:!we||p==="view"},{id:"transform-upper",label:"Transform UPPERCASE",icon:s.jsx(ss,{}),onExecute:()=>Re("transform-upper"),disabled:!we||p==="view"},{id:"transform-lower",label:"Transform lowercase",icon:s.jsx(ss,{}),onExecute:()=>Re("transform-lower"),disabled:!we||p==="view"},{id:"transform-sentence",label:"Transform Sentence case",icon:s.jsx(ss,{}),onExecute:()=>Re("transform-sentence"),disabled:!we||p==="view"},{id:"remove-formatting",label:"Remove Formatting",icon:s.jsx(ss,{}),onExecute:()=>Re("remove-formatting"),disabled:!we||p==="view"},{id:"heading1",label:"Insert Heading 1",icon:s.jsx(fa,{}),onExecute:()=>Re("h1"),shortcut:"Ctrl+1",disabled:!ee||p==="view"},{id:"heading2",label:"Insert Heading 2",icon:s.jsx(fa,{}),onExecute:()=>Re("h2"),shortcut:"Ctrl+2",disabled:!ee||p==="view"},{id:"heading3",label:"Insert Heading 3",icon:s.jsx(fa,{}),onExecute:()=>Re("h3"),shortcut:"Ctrl+3",disabled:!ee||p==="view"},{id:"heading4",label:"Insert Heading 4",icon:s.jsx(fa,{}),onExecute:()=>Re("h4"),shortcut:"Ctrl+4",disabled:!ee||p==="view"},{id:"heading5",label:"Insert Heading 5",icon:s.jsx(fa,{}),onExecute:()=>Re("h5"),shortcut:"Ctrl+5",disabled:!ee||p==="view"},{id:"heading6",label:"Insert Heading 6",icon:s.jsx(fa,{}),onExecute:()=>Re("h6"),shortcut:"Ctrl+6",disabled:!ee||p==="view"},{id:"table",label:"Insert Table",icon:s.jsx(wu,{}),onExecute:()=>Re("table"),shortcut:"Ctrl+Shift+T",disabled:!ee||p==="view"},{id:"codeblock",label:"Insert Code Block",icon:s.jsx(ri,{}),onExecute:()=>Re("codeblock"),shortcut:"Ctrl+Shift+C",disabled:!ee||p==="view"},{id:"hr",label:"Insert Horizontal Rule",icon:s.jsx(ju,{}),onExecute:()=>Re("hr"),shortcut:"Ctrl+Shift+-",disabled:!ee||p==="view"},{id:"tasklist",label:"Insert Task List",icon:s.jsx(Eu,{}),onExecute:()=>Re("tasklist"),disabled:!ee||p==="view"},{id:"footnote",label:"Insert Footnote",icon:s.jsx(Tu,{}),onExecute:()=>Re("footnote"),disabled:!ee||p==="view"},{id:"callout-note",label:"Insert Note Callout",icon:s.jsx(os,{}),onExecute:()=>Re("callout-note"),disabled:!ee||p==="view"},{id:"callout-tip",label:"Insert Tip Callout",icon:s.jsx(os,{}),onExecute:()=>Re("callout-tip"),disabled:!ee||p==="view"},{id:"callout-warning",label:"Insert Warning Callout",icon:s.jsx(os,{}),onExecute:()=>Re("callout-warning"),disabled:!ee||p==="view"},{id:"callout-error",label:"Insert Error Callout",icon:s.jsx(os,{}),onExecute:()=>Re("callout-error"),disabled:!ee||p==="view"},{id:"select-current-section",label:"Select Current Section",icon:s.jsx(xb,{}),disabled:!ee||p==="view",onExecute:()=>{const h=ye.current;if(!h)return;const S=h.state.selection.main.head,N=h.state.doc.lineAt(S).number,Z=Zn.getSectionRange(Ee,N),K=h.state.doc.line(Z.start).from,ue=h.state.doc.line(Z.end).to;h.dispatch({selection:{anchor:K,head:ue}}),h.focus()}},{id:"select-all-headings",label:"Select All Headings",icon:s.jsx(xl,{}),disabled:!ee||p==="view",onExecute:()=>{const h=ye.current;if(!h)return;const S=Zn.findBlockRanges(Ee,"headings").map(N=>({anchor:h.state.doc.line(N.line).from,head:h.state.doc.line(N.line).to}));S.length&&(h.dispatch({selection:{ranges:S,main:0}}),h.focus())}},{id:"select-all-lists",label:"Select All List Items",icon:s.jsx($o,{}),disabled:!ee||p==="view",onExecute:()=>{const h=ye.current;if(!h)return;const S=Zn.findBlockRanges(Ee,"list-items").map(N=>({anchor:h.state.doc.line(N.line).from,head:h.state.doc.line(N.line).to}));S.length&&(h.dispatch({selection:{ranges:S,main:0}}),h.focus())}},{id:"move-section-up",label:"Move Current Section Up",icon:s.jsx(rs,{}),disabled:!ee||p==="view",onExecute:()=>{const h=ye.current;if(!h)return;const S=h.state.selection.main.head,N=h.state.doc.lineAt(S).number,Z=Zn.getSectionRange(Ee,N);if(Z.start<=1)return;const K=Zn.moveSection(Ee,Z.start,Z.end,Z.start-1);kt(K),ht(K),h.dispatch({changes:{from:0,to:h.state.doc.length,insert:K}})}},{id:"move-section-down",label:"Move Current Section Down",icon:s.jsx(No,{}),disabled:!ee||p==="view",onExecute:()=>{const h=ye.current;if(!h)return;const S=h.state.selection.main.head,N=h.state.doc.lineAt(S).number,Z=Zn.getSectionRange(Ee,N);if(Z.end>=h.state.doc.lines)return;const K=Zn.getSectionRange(Ee,Z.end+1),ue=Zn.moveSection(Ee,Z.start,Z.end,K.end+1);kt(ue),ht(ue),h.dispatch({changes:{from:0,to:h.state.doc.length,insert:ue}})}},{id:"outline",label:"Toggle Outline",icon:s.jsx(xl,{}),onExecute:()=>{wt("split"),te("outline")},disabled:!ee||p==="view"},{id:"property",label:"Toggle Property",icon:s.jsx(Ao,{}),onExecute:()=>{wt("split"),te("property")},disabled:!ee||p==="view"},{id:"history",label:"Toggle History",icon:s.jsx(_o,{}),onExecute:()=>{wt("split"),te("history")},disabled:!ee||p==="view"},{id:"snippet",label:"Toggle Snippets",icon:s.jsx(ci,{}),onExecute:()=>{wt("split"),te("snippet")},disabled:!ee||p==="view"},{id:"zen",label:"Toggle Zen Mode",icon:s.jsx(fu,{}),onExecute:()=>dn("zen"),disabled:!ee||p==="view"},{id:"focus",label:"Toggle Focus Mode",icon:s.jsx(hu,{}),onExecute:()=>dn("focus"),disabled:!ee||p==="view"},{id:"typewriter",label:"Toggle Typewriter Mode",icon:s.jsx(mu,{}),onExecute:()=>dn("typewriter"),disabled:!ee||p==="view"},{id:"wysiwyg",label:"Toggle WYSIWYG Mode",icon:s.jsx($m,{}),onExecute:()=>dn("wysiwyg"),disabled:!ee||p==="view"},{id:"linter",label:`${_.showLintGutter?"Hide":"Show"} Linter Gutter`,icon:s.jsx(Sb,{}),onExecute:()=>Cl(),disabled:!ee},{id:"theme",label:`Switch to ${j?"Light":"Dark"} Theme`,icon:j?s.jsx(wb,{}):s.jsx(Tb,{}),onExecute:()=>zt()},{id:"stats",label:"Toggle Writing Stats",icon:s.jsx(du,{}),onExecute:()=>ya(),disabled:!ee},{id:"settings",label:"Settings",icon:s.jsx(su,{}),onExecute:()=>Pa()},{id:"about",label:"About",icon:s.jsx(Lo,{}),onExecute:()=>Un()},{id:"usermanual",label:"User Manual",icon:s.jsx(Lo,{}),onExecute:()=>ds()}],[Fn,jl,kl,Yn,Ut,Re,wt,dn,j,zt,Pa,Un,ds,be,pe,we,ee,ke,_,p,ft,lt]);return s.jsx(Eb,{theme:j?jb:kb,children:s.jsxs("div",{className:`app ${j?"dark-theme":"light-theme"} ${H?"high-contrast":""} ${J.dyslexiaFont?"dyslexia-font":""} ${p==="edit"&&be&&ee?"show-stats":""} ${ae.zen?"zen-mode":""}`,onDragOver:h=>{h.preventDefault()},onDrop:h=>{const S=h.dataTransfer.getData("tabId");S&&el(S)},children:[s.jsx(oy,{onNew:Fn,onOpen:jl,onSave:kl,onPreviewChange:wt,currentPreviewMode:f,onImport:mi,onExport:Yn,onAbout:Un,onMarkdownHelp:()=>I(h=>!h),showMarkdownHelp:Q,onSettings:Pa,showHighContrast:H,onWritingMode:dn,currentWritingMode:ae,hasCurrentFile:!!ee,hasUnsavedChanges:ke,hasTextSelected:we,hasFiles:m.length>0,fileCount:m.length,onStyleChange:Re,onEditAction:Ut,files:m,currentFileId:d,onSwitchFile:h=>{const S=m.find(N=>N.id===h);S&&(ma(),ht(S.content||""),fe(!1),vt(!1),xt(!1),c(h),Sn.disableMode("zen"))},onCloseFile:St,onShowCommandPalette:()=>de(h=>!h),showCommandPalette:ce,showLintGutter:_.showLintGutter,onLinterToggle:Cl,showLineNumbers:_.showLineNumbers,onLineNumbersToggle:ga,showHeadingGutter:_.showFoldGutter,onHeadingGutterToggle:ba,appMode:p,onAppModeChange:v,activeRightTab:le,onTogglePanel:tl,showWritingStats:be,onWritingStatsToggle:ya,floatingPanels:Xe,dockedPanels:Et,canUndo:ft,canRedo:lt}),s.jsx("div",{className:"editor-scroll-container",children:s.jsx("div",{id:"editor-container",className:"editor-container",children:ee?s.jsxs("div",{className:`editor-split ${p==="view"?"preview":f}`,style:p==="edit"&&f==="split"?{"--editor-pane-width":`${(Kt*100).toFixed(2)}%`,"--preview-pane-width":`${((1-Kt)*100).toFixed(2)}%`}:void 0,ref:he,children:[s.jsx(jy,{content:Ee,onChange:kt,visible:p==="edit"&&us,onTextSelection:hs,scrollRef:Jt,settings:_,writingMode:ae,isDark:j,onEditorReady:h=>{Bt(h),ye.current=h},onCursorActivity:Tl,onHistoryChange:ms},d),p==="edit"&&f==="split"&&s.jsx("div",{className:"splitter-handle",role:"separator","aria-label":"Resize editor and preview panes","aria-orientation":"vertical","aria-valuemin":20,"aria-valuemax":80,"aria-valuenow":Math.round(Kt*100),"aria-valuetext":`${Math.round(Kt*100)}% editor width`,tabIndex:0,onPointerDown:Wa,onKeyDown:Ia,onDoubleClick:di,children:s.jsx("span",{className:"splitter-grip"})}),fi&&s.jsx("div",{className:"right-panel-wrapper",style:{height:"100%",width:"100%",minWidth:0,overflow:"hidden",display:"flex"},children:s.jsx(Qy,{appMode:p,content:Bn,editorView:ye.current,fileId:d,visible:fi,activeTab:le,dockedPanels:Et,onTabChange:te,onUndockPanel:el,onMoveSection:pa,previewScrollRef:un,onUpdateProperty:nl,onRestoreHistory:h=>{kt(h),ht(h),ye.current&&ye.current.dispatch({changes:{from:0,to:ye.current.state.doc.length,insert:h}})},onInsertSnippet:hi,isDarkTheme:j,activeLine:qt,onNavigate:h=>{if(ye.current){const S=ye.current;if(typeof h=="string")fs(h);else{const N=S.state.doc.line(h).from;S.dispatch({selection:{anchor:N,head:N},effects:wn.scrollIntoView(N,{y:"center"})}),S.focus()}}}})})]}):s.jsx("div",{className:"empty-state",children:s.jsx(Mu,{})})})}),p==="edit"&&be&&ee&&s.jsx("div",{className:"writing-stats-wrapper",children:s.jsx(Fm,{content:Bn,visible:be,cursorLine:qt,cursorColumn:At})}),ae.zen&&s.jsx(_y,{onExitZen:st}),s.jsx(Km,{isOpen:B,onClose:()=>F(!1),isDarkTheme:j}),s.jsx(Wm,{isOpen:A,onClose:()=>U(!1),settings:_,onSettingsChange:R}),s.jsx(Mu,{isOpen:T,onClose:()=>L(!1),isDarkTheme:j,isDialog:!0}),s.jsx(tp,{isVisible:Q,onClose:()=>I(!1),isDarkTheme:j}),s.jsx(Jm,{editorView:ye.current,isVisible:G,onClose:()=>x(!1),mode:W}),s.jsx(Im,{isOpen:ce,onClose:()=>de(!1),actions:It,isDark:j}),Xe.includes("outline")&&s.jsx(np,{content:Bn,visible:!0,inline:!1,activeLine:qt,onClose:()=>Gt("outline"),onDock:()=>va("outline"),onMoveSection:pa,onNavigate:h=>{if(ye.current){const S=ye.current,N=S.state.doc.line(h).from;S.dispatch({selection:{anchor:N,head:N},effects:wn.scrollIntoView(N,{y:"center"})}),S.focus()}}}),Xe.includes("property")&&s.jsx(ap,{content:Bn,visible:!0,inline:!1,onClose:()=>Gt("property"),onDock:()=>va("property"),onUpdate:nl}),Xe.includes("history")&&s.jsx(lp,{fileId:d,visible:!0,onRestore:h=>{kt(h),ht(h),ye.current&&ye.current.dispatch({changes:{from:0,to:ye.current.state.doc.length,insert:h}})},onClose:()=>Gt("history"),onDock:()=>va("history")}),Xe.includes("snippet")&&s.jsx(ep,{visible:!0,inline:!1,onClose:()=>Gt("snippet"),onDock:()=>va("snippet"),onInsert:hi,isDarkTheme:j}),Xe.includes("preview")&&s.jsxs("div",{style:{position:"fixed",left:Dt.x,top:Dt.y,width:"400px",height:"500px",backgroundColor:"var(--color-neutral-background1)",boxShadow:"0 4px 16px rgba(0,0,0,0.15)",border:"1px solid var(--color-neutral-stroke1)",zIndex:1e3,display:"flex",flexDirection:"column",borderRadius:"4px"},children:[s.jsxs("div",{style:{padding:"8px",borderBottom:"1px solid var(--color-neutral-stroke1)",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:rn?"grabbing":"grab",backgroundColor:"var(--color-neutral-background2)",userSelect:"none"},onMouseDown:Wt,onTouchStart:ps,onMouseUp:xa,onTouchEnd:xa,children:[s.jsx("span",{style:{fontWeight:600,fontSize:"14px"},children:"Preview"}),s.jsx("button",{onClick:()=>Gt("preview"),style:{background:"none",border:"none",cursor:"pointer",fontSize:"16px"},children:"×"})]}),s.jsx("div",{style:{flex:1,backgroundColor:"var(--color-neutral-background1)",overflow:"hidden"},children:s.jsx(cs,{content:Bn,visible:!0,scrollRef:un,scrollStateRef:Xt,inline:!1,onJumpToLine:fs,activeLine:qt})})]})]})})}sy.createRoot(document.getElementById("root")).render(s.jsx(_m.StrictMode,{children:s.jsx(Mv,{})}));export{xn as A};
