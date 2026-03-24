const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["vendor-processing.CmTeLQxv.js","vendor-core.DUXhECUu.js","vendor-visual.B_Q0hmov.js","AccessibilityPanel.DnxQOkmq.js","vendor-utils.AceBcgTx.js","vendor-documents.BFWVzoxS.js","AccessibilityPanel.HUr2SpIBcss","SearchService.D1nxONAv.js"])))=>i.map(i=>d[i]);
import{e as rb,f as cb,h as ub,g as ku,r as p,j as s,T as Nn,M as Ka,i as he,k as Fa,l as Ne,D as oi,m as Ja,n as Wa,o as Ke,F as Co,S as au,A as Pa,p as Rn,C as Jc,q as cs,E as ko,R as mm,t as Ft,K as db,u as lu,Q as pm,I as Lo,v as Wc,w as os,x as No,y as iu,z as su,B as ou,G as ru,H as Ro,J as gm,L as bm,N as cu,O as ym,P as Sl,U as Ao,V as _o,W as ci,X as uu,Y as du,Z as fu,_ as vm,$ as ba,a0 as hu,a1 as mu,a2 as pu,a3 as gu,a4 as ri,a5 as Nm,a6 as is,a7 as Ic,a8 as $o,a9 as bu,aa as yu,ab as vu,ac as xu,ad as wu,ae as Su,af as Tu,ag as ss,ah as Rm,ai as _m,aj as xm,ak as $m,al as Om,am as Hm,an as Bm,ao as fb,ap as ui,aq as _t,ar as Ho,as as Bo,at as Uo,au as qo,av as Yo,aw as Mu,ax as hb,ay as mb,az as pb,aA as gb,aB as Pc,aC as Mt,aD as sn,aE as on,aF as wl,aG as bb,aH as as,aI as yb,aJ as Um,aK as qm,aL as vb,aM as wm,aN as Ym,aO as xb,aP as wb,aQ as Sb,aR as Tb,aS as Eb,aT as jb,aU as kb,aV as Mb}from"./vendor-core.DUXhECUu.js";import{w as Xo,x as Go,y as Cb,z as Xm,A as Cu,B as Au,D as Gm,F as Vo,G as Du,H as Vm,J as Qo,h as $n,K as Zo,S as Ab,V as Db,M as Qm,O as zb,P as Lb,Q as Nb,R as Rb,T as _b,U as $b,W as Ob,X as Hb,Y as Bb,Z as Sm,$ as Tm,_ as $t,a0 as Ub,g as qb,u as qe,a1 as Yb,a2 as Xb,a3 as Gb,a4 as Vb,a5 as Qb,a6 as Zb,a7 as Kb,a8 as zu,a9 as Fb,aa as Jb}from"./vendor-processing.CmTeLQxv.js";import{j as Zm,v as Do,a as Wb}from"./vendor-utils.AceBcgTx.js";import{r as Ib,a as Pb,v as ey,G as ty,g as ny,J as zo,b as ay,u as ly,P as iy}from"./vendor-documents.BFWVzoxS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const b of f)if(b.type==="childList")for(const g of b.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function d(f){const b={};return f.integrity&&(b.integrity=f.integrity),f.referrerPolicy&&(b.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?b.credentials="include":f.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function c(f){if(f.ep)return;f.ep=!0;const b=d(f);fetch(f.href,b)}})();var eu={exports:{}},ls={};var Em;function sy(){if(Em)return ls;Em=1;var m=rb(),r=cb(),d=ub();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(b(e)!==e)throw Error(c(188))}function X(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return k(l),e;if(i===a)return k(l),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,a=i;break}if(u===a){o=!0,a=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,a=l;break}if(u===a){o=!0,a=i,n=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var $=Object.assign,M=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),me=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case w:return"Profiler";case V:return"StrictMode";case I:return"Suspense";case T:return"SuspenseList";case q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case me:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return t=e.displayName||null,t!==null?t:K(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return K(e(t))}catch{}}return null}var P=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},we=[],ye=-1;function ge(e){return{current:e}}function Me(e){0>ye||(e.current=we[ye],we[ye]=null,ye--)}function pe(e,t){ye++,we[ye]=e.current,e.current=t}var Se=ge(null),Ot=ge(null),ft=ge(null),St=ge(null);function tt(e,t){switch(pe(ft,t),pe(Ot,e),pe(Se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Oh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Oh(t),e=Hh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Me(Se),pe(Se,e)}function yt(){Me(Se),Me(Ot),Me(ft)}function je(e){e.memoizedState!==null&&pe(St,e);var t=Se.current,n=Hh(t,e.type);t!==n&&(pe(Ot,e),pe(Se,n))}function ht(e){Ot.current===e&&(Me(Se),Me(Ot)),St.current===e&&(Me(St),Pi._currentValue=le)}var Xt,El;function Ct(e){if(Xt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xt=t&&t[1]||"",El=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+e+El}var Gt=!1;function Jt(e,t){if(!e||Gt)return"";Gt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(z){var D=z}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(z){D=z}e.call(Y.prototype)}}else{try{throw Error()}catch(z){D=z}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(z){if(z&&D&&typeof z.stack=="string")return[z.stack,D.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var y=o.split(`
`),A=u.split(`
`);for(l=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===y.length||l===A.length)for(a=y.length-1,l=A.length-1;1<=a&&0<=l&&y[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(y[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||y[a]!==A[l]){var H=`
`+y[a].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=a&&0<=l);break}}}finally{Gt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ct(n):""}function Tt(e,t){switch(e.tag){case 26:case 27:case 5:return Ct(e.type);case 16:return Ct("Lazy");case 13:return e.child!==t&&t!==null?Ct("Suspense Fallback"):Ct("Suspense");case 19:return Ct("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return Ct("Activity");default:return""}}function el(e){try{var t="",n=null;do t+=Tt(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var wn=Object.prototype.hasOwnProperty,Ht=m.unstable_scheduleCallback,xe=m.unstable_cancelCallback,nt=m.unstable_shouldYield,Et=m.unstable_requestPaint,Ue=m.unstable_now,Bt=m.unstable_getCurrentPriorityLevel,On=m.unstable_ImmediatePriority,rn=m.unstable_UserBlockingPriority,Hn=m.unstable_NormalPriority,Sn=m.unstable_LowPriority,Yn=m.unstable_IdlePriority,Tn=m.log,ve=m.unstable_setDisableYieldValue,Vt=null,re=null;function at(e){if(typeof Tn=="function"&&ve(e),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(Vt,e)}catch{}}var $e=Math.clz32?Math.clz32:un,Xn=Math.log,cn=Math.LN2;function un(e){return e>>>=0,e===0?32:31-(Xn(e)/cn|0)|0}var Ut=256,ct=262144,ue=4194304;function Ce(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ie(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=Ce(a):(o&=u,o!==0?l=Ce(o):n||(n=u&~e,n!==0&&(l=Ce(n))))):(u=a&~i,u!==0?l=Ce(u):o!==0?l=Ce(o):n||(n=a&~e,n!==0&&(l=Ce(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Te(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qt(){var e=ue;return ue<<=1,(ue&62914560)===0&&(ue=4194304),e}function At(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function te(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,y=e.expirationTimes,A=e.hiddenUpdates;for(n=o&~n;0<n;){var H=31-$e(n),Y=1<<H;u[H]=0,y[H]=-1;var D=A[H];if(D!==null)for(A[H]=null,H=0;H<D.length;H++){var z=D[H];z!==null&&(z.lane&=-536870913)}n&=~Y}a!==0&&us(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function us(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-$e(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-$e(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Pn(e,t){var n=t&-t;return n=(n&42)!==0?1:ya(n),(n&(e.suspendedLanes|t))!==0?0:n}function ya(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kl(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:om(e.type))}function Ml(e,t){var n=R.p;try{return R.p=e,t()}finally{R.p=n}}var jt=Math.random().toString(36).slice(2),vt="__reactFiber$"+jt,Dt="__reactProps$"+jt,Vn="__reactContainer$"+jt,tl="__reactEvents$"+jt,ds="__reactListeners$"+jt,fs="__reactHandles$"+jt,Cl="__reactResources$"+jt,va="__reactMarker$"+jt;function Al(e){delete e[vt],delete e[Dt],delete e[tl],delete e[ds],delete e[fs]}function xa(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vn]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vh(e);e!==null;){if(n=e[vt])return n;e=Vh(e)}return t}e=n,n=e.parentNode}return null}function wa(e){if(e=e[vt]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Sa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function dn(e){var t=e[Cl];return t||(t=e[Cl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[va]=!0}var hs=new Set,ms={};function Qn(e,t){Yt(e,t),Yt(e+"Capture",t)}function Yt(e,t){for(ms[e]=t,e=0;e<t.length;e++)hs.add(t[e])}var Re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fi={},xt={};function Ta(e){return wn.call(xt,e)?!0:wn.call(fi,e)?!1:Re.test(e)?xt[e]=!0:(fi[e]=!0,!1)}function nl(e,t,n){if(Ta(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function al(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Qt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gs(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ea(e){if(!e._valueTracker){var t=ps(e)?"checked":"value";e._valueTracker=gs(e,t,""+e[t])}}function hi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ps(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zn=/[\n"\\]/g;function It(e){return e.replace(Zn,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function h(e,t,n,a,l,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wt(t)):e.value!==""+Wt(t)&&(e.value=""+Wt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?N(e,o,Wt(t)):n!=null?N(e,o,Wt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Wt(u):e.removeAttribute("name")}function x(e,t,n,a,l,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ea(e);return}n=n!=null?""+Wt(n):"",t=t!=null?""+Wt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ea(e)}function N(e,t,n){t==="number"&&ll(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Z(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function F(e,t,n){if(t!=null&&(t=""+Wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Wt(n):""}function de(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(P(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Wt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Ea(e)}function ce(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pe(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Zt.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function it(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Pe(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&Pe(e,i,t[i])}function st(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ru=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mi(e){return Ru.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function En(){}var pi=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,zl=null;function _u(e){var t=wa(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(h(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Dt]||null;if(!l)throw Error(c(90));h(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&hi(a)}break e;case"textarea":F(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Z(e,!!n.multiple,t,!1)}}}var Fo=!1;function $u(e,t,n){if(Fo)return e(t,n);Fo=!0;try{var a=e(t);return a}finally{if(Fo=!1,(Dl!==null||zl!==null)&&(ao(),Dl&&(t=Dl,e=zl,zl=Dl=null,_u(t),e)))for(t=0;t<e.length;t++)_u(e[t])}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Dt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jo=!1;if(ea)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Jo=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Jo=!1}var ja=null,Wo=null,bs=null;function Ou(){if(bs)return bs;var e,t=Wo,n=t.length,a,l="value"in ja?ja.value:ja.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return bs=l.slice(e,1<a?1-a:void 0)}function ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vs(){return!0}function Hu(){return!1}function Pt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vs:Hu,this.isPropagationStopped=Hu,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),t}var il={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=Pt(il),yi=$({},il,{view:0,detail:0}),sp=Pt(yi),Io,Po,vi,ws=$({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(Io=e.screenX-vi.screenX,Po=e.screenY-vi.screenY):Po=Io=0,vi=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:Po}}),Bu=Pt(ws),op=$({},ws,{dataTransfer:0}),rp=Pt(op),cp=$({},yi,{relatedTarget:0}),er=Pt(cp),up=$({},il,{animationName:0,elapsedTime:0,pseudoElement:0}),dp=Pt(up),fp=$({},il,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=Pt(fp),mp=$({},il,{data:0}),Uu=Pt(mp),pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bp[e])?!!t[e]:!1}function tr(){return yp}var vp=$({},yi,{key:function(e){if(e.key){var t=pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(e){return e.type==="keypress"?ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xp=Pt(vp),wp=$({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qu=Pt(wp),Sp=$({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),Tp=Pt(Sp),Ep=$({},il,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=Pt(Ep),kp=$({},ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=Pt(kp),Cp=$({},il,{newState:0,oldState:0}),Ap=Pt(Cp),Dp=[9,13,27,32],nr=ea&&"CompositionEvent"in window,xi=null;ea&&"documentMode"in document&&(xi=document.documentMode);var zp=ea&&"TextEvent"in window&&!xi,Yu=ea&&(!nr||xi&&8<xi&&11>=xi),Xu=" ",Gu=!1;function Vu(e,t){switch(e){case"keyup":return Dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ll=!1;function Lp(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(Gu=!0,Xu);case"textInput":return e=t.data,e===Xu&&Gu?null:e;default:return null}}function Np(e,t){if(Ll)return e==="compositionend"||!nr&&Vu(e,t)?(e=Ou(),bs=Wo=ja=null,Ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var Rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rp[e.type]:t==="textarea"}function Ku(e,t,n,a){Dl?zl?zl.push(a):zl=[a]:Dl=a,t=uo(t,"onChange"),0<t.length&&(n=new xs("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var wi=null,Si=null;function _p(e){zh(e,0)}function Ss(e){var t=Sa(e);if(hi(t))return e}function Fu(e,t){if(e==="change")return t}var Ju=!1;if(ea){var ar;if(ea){var lr="oninput"in document;if(!lr){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),lr=typeof Wu.oninput=="function"}ar=lr}else ar=!1;Ju=ar&&(!document.documentMode||9<document.documentMode)}function Iu(){wi&&(wi.detachEvent("onpropertychange",Pu),Si=wi=null)}function Pu(e){if(e.propertyName==="value"&&Ss(Si)){var t=[];Ku(t,Si,e,Ko(e)),$u(_p,t)}}function $p(e,t,n){e==="focusin"?(Iu(),wi=t,Si=n,wi.attachEvent("onpropertychange",Pu)):e==="focusout"&&Iu()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(Si)}function Hp(e,t){if(e==="click")return Ss(t)}function Bp(e,t){if(e==="input"||e==="change")return Ss(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:Up;function Ti(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!wn.call(t,l)||!fn(e[l],t[l]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ll(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ll(e.document)}return t}function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qp=ea&&"documentMode"in document&&11>=document.documentMode,Nl=null,sr=null,Ei=null,or=!1;function ld(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;or||Nl==null||Nl!==ll(a)||(a=Nl,"selectionStart"in a&&ir(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ei&&Ti(Ei,a)||(Ei=a,a=uo(sr,"onSelect"),0<a.length&&(t=new xs("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Nl)))}function sl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rl={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionrun:sl("Transition","TransitionRun"),transitionstart:sl("Transition","TransitionStart"),transitioncancel:sl("Transition","TransitionCancel"),transitionend:sl("Transition","TransitionEnd")},rr={},id={};ea&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function ol(e){if(rr[e])return rr[e];if(!Rl[e])return e;var t=Rl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in id)return rr[e]=t[n];return e}var sd=ol("animationend"),od=ol("animationiteration"),rd=ol("animationstart"),Yp=ol("transitionrun"),Xp=ol("transitionstart"),Gp=ol("transitioncancel"),cd=ol("transitionend"),ud=new Map,cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cr.push("scrollEnd");function Bn(e,t){ud.set(e,t),Qn(t,[e])}var Ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jn=[],_l=0,ur=0;function Es(){for(var e=_l,t=ur=_l=0;t<e;){var n=jn[t];jn[t++]=null;var a=jn[t];jn[t++]=null;var l=jn[t];jn[t++]=null;var i=jn[t];if(jn[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&dd(n,l,i)}}function js(e,t,n,a){jn[_l++]=e,jn[_l++]=t,jn[_l++]=n,jn[_l++]=a,ur|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function dr(e,t,n,a){return js(e,t,n,a),ks(e)}function rl(e,t){return js(e,null,null,t),ks(e)}function dd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-$e(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function ks(e){if(50<Qi)throw Qi=0,xc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $l={};function Vp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,t,n,a){return new Vp(e,t,n,a)}function fr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,t){var n=e.alternate;return n===null?(n=hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ms(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")fr(e)&&(o=1);else if(typeof e=="string")o=Jg(e,n,Se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case q:return e=hn(31,n,t,l),e.elementType=q,e.lanes=i,e;case Q:return cl(n.children,l,i,t);case V:o=8,l|=24;break;case w:return e=hn(12,n,t,l|2),e.elementType=w,e.lanes=i,e;case I:return e=hn(13,n,t,l),e.elementType=I,e.lanes=i,e;case T:return e=hn(19,n,t,l),e.elementType=T,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:o=10;break e;case J:o=9;break e;case W:o=11;break e;case j:o=14;break e;case L:o=16,a=null;break e}o=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=hn(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function cl(e,t,n,a){return e=hn(7,e,a,t),e.lanes=n,e}function hr(e,t,n){return e=hn(6,e,null,t),e.lanes=n,e}function hd(e){var t=hn(18,null,null,0);return t.stateNode=e,t}function mr(e,t,n){return t=hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var md=new WeakMap;function kn(e,t){if(typeof e=="object"&&e!==null){var n=md.get(e);return n!==void 0?n:(t={value:e,source:t,stack:el(t)},md.set(e,t),t)}return{value:e,source:t,stack:el(t)}}var Ol=[],Hl=0,Cs=null,ji=0,Mn=[],Cn=0,ka=null,Kn=1,Fn="";function na(e,t){Ol[Hl++]=ji,Ol[Hl++]=Cs,Cs=e,ji=t}function pd(e,t,n){Mn[Cn++]=Kn,Mn[Cn++]=Fn,Mn[Cn++]=ka,ka=e;var a=Kn;e=Fn;var l=32-$e(a)-1;a&=~(1<<l),n+=1;var i=32-$e(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Kn=1<<32-$e(t)+l|n<<l|a,Fn=i+e}else Kn=1<<i|n<<l|a,Fn=e}function pr(e){e.return!==null&&(na(e,1),pd(e,1,0))}function gr(e){for(;e===Cs;)Cs=Ol[--Hl],Ol[Hl]=null,ji=Ol[--Hl],Ol[Hl]=null;for(;e===ka;)ka=Mn[--Cn],Mn[Cn]=null,Fn=Mn[--Cn],Mn[Cn]=null,Kn=Mn[--Cn],Mn[Cn]=null}function gd(e,t){Mn[Cn++]=Kn,Mn[Cn++]=Fn,Mn[Cn++]=ka,Kn=t.id,Fn=t.overflow,ka=e}var zt=null,Je=null,_e=!1,Ma=null,An=!1,br=Error(c(519));function Ca(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ki(kn(t,e)),br}function bd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[vt]=e,t[Dt]=a,n){case"dialog":De("cancel",t),De("close",t);break;case"iframe":case"object":case"embed":De("load",t);break;case"video":case"audio":for(n=0;n<Ki.length;n++)De(Ki[n],t);break;case"source":De("error",t);break;case"img":case"image":case"link":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"input":De("invalid",t),x(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":De("invalid",t);break;case"textarea":De("invalid",t),de(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||_h(t.textContent,n)?(a.popover!=null&&(De("beforetoggle",t),De("toggle",t)),a.onScroll!=null&&De("scroll",t),a.onScrollEnd!=null&&De("scrollend",t),a.onClick!=null&&(t.onclick=En),t=!0):t=!1,t||Ca(e,!0)}function yd(e){for(zt=e.return;zt;)switch(zt.tag){case 5:case 31:case 13:An=!1;return;case 27:case 3:An=!0;return;default:zt=zt.return}}function Bl(e){if(e!==zt)return!1;if(!_e)return yd(e),_e=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||_c(e.type,e.memoizedProps)),n=!n),n&&Je&&Ca(e),yd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Je=Gh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Je=Gh(e)}else t===27?(t=Je,Ya(e.type)?(e=Uc,Uc=null,Je=e):Je=t):Je=zt?zn(e.stateNode.nextSibling):null;return!0}function ul(){Je=zt=null,_e=!1}function yr(){var e=Ma;return e!==null&&(an===null?an=e:an.push.apply(an,e),Ma=null),e}function ki(e){Ma===null?Ma=[e]:Ma.push(e)}var vr=ge(null),dl=null,aa=null;function Aa(e,t,n){pe(vr,t._currentValue),t._currentValue=n}function la(e){e._currentValue=vr.current,Me(vr)}function xr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function wr(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var y=0;y<t.length;y++)if(u.context===t[y]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),xr(i.return,n,e),a||(o=null);break e}i=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),xr(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function Ul(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=l.type;fn(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===St.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Pi):e=[Pi])}l=l.return}e!==null&&wr(t,e,n,a),t.flags|=262144}function As(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fl(e){dl=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Lt(e){return vd(dl,e)}function Ds(e,t){return dl===null&&fl(e),vd(e,t)}function vd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},aa===null){if(e===null)throw Error(c(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return n}var Qp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Zp=m.unstable_scheduleCallback,Kp=m.unstable_NormalPriority,mt={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sr(){return{controller:new Qp,data:new Map,refCount:0}}function Mi(e){e.refCount--,e.refCount===0&&Zp(Kp,function(){e.controller.abort()})}var Ci=null,Tr=0,ql=0,Yl=null;function Fp(e,t){if(Ci===null){var n=Ci=[];Tr=0,ql=kc(),Yl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Tr++,t.then(xd,xd),t}function xd(){if(--Tr===0&&Ci!==null){Yl!==null&&(Yl.status="fulfilled");var e=Ci;Ci=null,ql=0,Yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var wd=_.S;_.S=function(e,t){ih=Ue(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fp(e,t),wd!==null&&wd(e,t)};var hl=ge(null);function Er(){var e=hl.current;return e!==null?e:Ze.pooledCache}function zs(e,t){t===null?pe(hl,hl.current):pe(hl,t.pool)}function Sd(){var e=Er();return e===null?null:{parent:mt._currentValue,pool:e}}var Xl=Error(c(460)),jr=Error(c(474)),Ls=Error(c(542)),Ns={then:function(){}};function Td(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ed(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(En,En),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kd(e),e;default:if(typeof t.status=="string")t.then(En,En);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kd(e),e}throw pl=t,Xl}}function ml(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(pl=n,Xl):n}}var pl=null;function jd(){if(pl===null)throw Error(c(459));var e=pl;return pl=null,e}function kd(e){if(e===Xl||e===Ls)throw Error(c(483))}var Gl=null,Ai=0;function Rs(e){var t=Ai;return Ai+=1,Gl===null&&(Gl=[]),Ed(Gl,e,t)}function Di(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _s(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Md(e){function t(E,S){if(e){var C=E.deletions;C===null?(E.deletions=[S],E.flags|=16):C.push(S)}}function n(E,S){if(!e)return null;for(;S!==null;)t(E,S),S=S.sibling;return null}function a(E){for(var S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function l(E,S){return E=ta(E,S),E.index=0,E.sibling=null,E}function i(E,S,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<S?(E.flags|=67108866,S):C):(E.flags|=67108866,S)):(E.flags|=1048576,S)}function o(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function u(E,S,C,U){return S===null||S.tag!==6?(S=hr(C,E.mode,U),S.return=E,S):(S=l(S,C),S.return=E,S)}function y(E,S,C,U){var fe=C.type;return fe===Q?H(E,S,C.props.children,U,C.key):S!==null&&(S.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===L&&ml(fe)===S.type)?(S=l(S,C.props),Di(S,C),S.return=E,S):(S=Ms(C.type,C.key,C.props,null,E.mode,U),Di(S,C),S.return=E,S)}function A(E,S,C,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=mr(C,E.mode,U),S.return=E,S):(S=l(S,C.children||[]),S.return=E,S)}function H(E,S,C,U,fe){return S===null||S.tag!==7?(S=cl(C,E.mode,U,fe),S.return=E,S):(S=l(S,C),S.return=E,S)}function Y(E,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=hr(""+S,E.mode,C),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case G:return C=Ms(S.type,S.key,S.props,null,E.mode,C),Di(C,S),C.return=E,C;case O:return S=mr(S,E.mode,C),S.return=E,S;case L:return S=ml(S),Y(E,S,C)}if(P(S)||oe(S))return S=cl(S,E.mode,C,null),S.return=E,S;if(typeof S.then=="function")return Y(E,Rs(S),C);if(S.$$typeof===me)return Y(E,Ds(E,S),C);_s(E,S)}return null}function D(E,S,C,U){var fe=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return fe!==null?null:u(E,S,""+C,U);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case G:return C.key===fe?y(E,S,C,U):null;case O:return C.key===fe?A(E,S,C,U):null;case L:return C=ml(C),D(E,S,C,U)}if(P(C)||oe(C))return fe!==null?null:H(E,S,C,U,null);if(typeof C.then=="function")return D(E,S,Rs(C),U);if(C.$$typeof===me)return D(E,S,Ds(E,C),U);_s(E,C)}return null}function z(E,S,C,U,fe){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return E=E.get(C)||null,u(S,E,""+U,fe);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case G:return E=E.get(U.key===null?C:U.key)||null,y(S,E,U,fe);case O:return E=E.get(U.key===null?C:U.key)||null,A(S,E,U,fe);case L:return U=ml(U),z(E,S,C,U,fe)}if(P(U)||oe(U))return E=E.get(C)||null,H(S,E,U,fe,null);if(typeof U.then=="function")return z(E,S,C,Rs(U),fe);if(U.$$typeof===me)return z(E,S,C,Ds(S,U),fe);_s(S,U)}return null}function ae(E,S,C,U){for(var fe=null,Oe=null,ie=S,ke=S=0,Le=null;ie!==null&&ke<C.length;ke++){ie.index>ke?(Le=ie,ie=null):Le=ie.sibling;var He=D(E,ie,C[ke],U);if(He===null){ie===null&&(ie=Le);break}e&&ie&&He.alternate===null&&t(E,ie),S=i(He,S,ke),Oe===null?fe=He:Oe.sibling=He,Oe=He,ie=Le}if(ke===C.length)return n(E,ie),_e&&na(E,ke),fe;if(ie===null){for(;ke<C.length;ke++)ie=Y(E,C[ke],U),ie!==null&&(S=i(ie,S,ke),Oe===null?fe=ie:Oe.sibling=ie,Oe=ie);return _e&&na(E,ke),fe}for(ie=a(ie);ke<C.length;ke++)Le=z(ie,E,ke,C[ke],U),Le!==null&&(e&&Le.alternate!==null&&ie.delete(Le.key===null?ke:Le.key),S=i(Le,S,ke),Oe===null?fe=Le:Oe.sibling=Le,Oe=Le);return e&&ie.forEach(function(Za){return t(E,Za)}),_e&&na(E,ke),fe}function be(E,S,C,U){if(C==null)throw Error(c(151));for(var fe=null,Oe=null,ie=S,ke=S=0,Le=null,He=C.next();ie!==null&&!He.done;ke++,He=C.next()){ie.index>ke?(Le=ie,ie=null):Le=ie.sibling;var Za=D(E,ie,He.value,U);if(Za===null){ie===null&&(ie=Le);break}e&&ie&&Za.alternate===null&&t(E,ie),S=i(Za,S,ke),Oe===null?fe=Za:Oe.sibling=Za,Oe=Za,ie=Le}if(He.done)return n(E,ie),_e&&na(E,ke),fe;if(ie===null){for(;!He.done;ke++,He=C.next())He=Y(E,He.value,U),He!==null&&(S=i(He,S,ke),Oe===null?fe=He:Oe.sibling=He,Oe=He);return _e&&na(E,ke),fe}for(ie=a(ie);!He.done;ke++,He=C.next())He=z(ie,E,ke,He.value,U),He!==null&&(e&&He.alternate!==null&&ie.delete(He.key===null?ke:He.key),S=i(He,S,ke),Oe===null?fe=He:Oe.sibling=He,Oe=He);return e&&ie.forEach(function(ob){return t(E,ob)}),_e&&na(E,ke),fe}function Qe(E,S,C,U){if(typeof C=="object"&&C!==null&&C.type===Q&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case G:e:{for(var fe=C.key;S!==null;){if(S.key===fe){if(fe=C.type,fe===Q){if(S.tag===7){n(E,S.sibling),U=l(S,C.props.children),U.return=E,E=U;break e}}else if(S.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===L&&ml(fe)===S.type){n(E,S.sibling),U=l(S,C.props),Di(U,C),U.return=E,E=U;break e}n(E,S);break}else t(E,S);S=S.sibling}C.type===Q?(U=cl(C.props.children,E.mode,U,C.key),U.return=E,E=U):(U=Ms(C.type,C.key,C.props,null,E.mode,U),Di(U,C),U.return=E,E=U)}return o(E);case O:e:{for(fe=C.key;S!==null;){if(S.key===fe)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){n(E,S.sibling),U=l(S,C.children||[]),U.return=E,E=U;break e}else{n(E,S);break}else t(E,S);S=S.sibling}U=mr(C,E.mode,U),U.return=E,E=U}return o(E);case L:return C=ml(C),Qe(E,S,C,U)}if(P(C))return ae(E,S,C,U);if(oe(C)){if(fe=oe(C),typeof fe!="function")throw Error(c(150));return C=fe.call(C),be(E,S,C,U)}if(typeof C.then=="function")return Qe(E,S,Rs(C),U);if(C.$$typeof===me)return Qe(E,S,Ds(E,C),U);_s(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(n(E,S.sibling),U=l(S,C),U.return=E,E=U):(n(E,S),U=hr(C,E.mode,U),U.return=E,E=U),o(E)):n(E,S)}return function(E,S,C,U){try{Ai=0;var fe=Qe(E,S,C,U);return Gl=null,fe}catch(ie){if(ie===Xl||ie===Ls)throw ie;var Oe=hn(29,ie,null,E.mode);return Oe.lanes=U,Oe.return=E,Oe}}}var gl=Md(!0),Cd=Md(!1),Da=!1;function kr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Be&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ks(e),dd(e,null,n),t}return js(e,a,t,n),ks(e)}function zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,di(e,n)}}function Cr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ar=!1;function Li(){if(Ar){var e=Yl;if(e!==null)throw e}}function Ni(e,t,n,a){Ar=!1;var l=e.updateQueue;Da=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var y=u,A=y.next;y.next=null,o===null?i=A:o.next=A,o=y;var H=e.alternate;H!==null&&(H=H.updateQueue,u=H.lastBaseUpdate,u!==o&&(u===null?H.firstBaseUpdate=A:u.next=A,H.lastBaseUpdate=y))}if(i!==null){var Y=l.baseState;o=0,H=A=y=null,u=i;do{var D=u.lane&-536870913,z=D!==u.lane;if(z?(ze&D)===D:(a&D)===D){D!==0&&D===ql&&(Ar=!0),H!==null&&(H=H.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var ae=e,be=u;D=t;var Qe=n;switch(be.tag){case 1:if(ae=be.payload,typeof ae=="function"){Y=ae.call(Qe,Y,D);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=be.payload,D=typeof ae=="function"?ae.call(Qe,Y,D):ae,D==null)break e;Y=$({},Y,D);break e;case 2:Da=!0}}D=u.callback,D!==null&&(e.flags|=64,z&&(e.flags|=8192),z=l.callbacks,z===null?l.callbacks=[D]:z.push(D))}else z={lane:D,tag:u.tag,payload:u.payload,callback:u.callback,next:null},H===null?(A=H=z,y=Y):H=H.next=z,o|=D;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;z=u,u=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);H===null&&(y=Y),l.baseState=y,l.firstBaseUpdate=A,l.lastBaseUpdate=H,i===null&&(l.shared.lanes=0),Oa|=o,e.lanes=o,e.memoizedState=Y}}function Ad(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Dd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ad(n[e],t)}var Vl=ge(null),$s=ge(0);function zd(e,t){e=ha,pe($s,e),pe(Vl,t),ha=e|t.baseLanes}function Dr(){pe($s,ha),pe(Vl,Vl.current)}function zr(){ha=$s.current,Me(Vl),Me($s)}var mn=ge(null),Dn=null;function Na(e){var t=e.alternate;pe(ut,ut.current&1),pe(mn,e),Dn===null&&(t===null||Vl.current!==null||t.memoizedState!==null)&&(Dn=e)}function Lr(e){pe(ut,ut.current),pe(mn,e),Dn===null&&(Dn=e)}function Ld(e){e.tag===22?(pe(ut,ut.current),pe(mn,e),Dn===null&&(Dn=e)):Ra()}function Ra(){pe(ut,ut.current),pe(mn,mn.current)}function pn(e){Me(mn),Dn===e&&(Dn=null),Me(ut)}var ut=ge(0);function Os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Hc(n)||Bc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,Ee=null,Ge=null,pt=null,Hs=!1,Ql=!1,bl=!1,Bs=0,Ri=0,Zl=null,Wp=0;function ot(){throw Error(c(321))}function Nr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function Rr(e,t,n,a,l,i){return ia=i,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?gf:Fr,bl=!1,i=n(a,l),bl=!1,Ql&&(i=Rd(t,n,a,l)),Nd(e),i}function Nd(e){_.H=Oi;var t=Ge!==null&&Ge.next!==null;if(ia=0,pt=Ge=Ee=null,Hs=!1,Ri=0,Zl=null,t)throw Error(c(300));e===null||gt||(e=e.dependencies,e!==null&&As(e)&&(gt=!0))}function Rd(e,t,n,a){Ee=e;var l=0;do{if(Ql&&(Zl=null),Ri=0,Ql=!1,25<=l)throw Error(c(301));if(l+=1,pt=Ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=bf,i=t(n,a)}while(Ql);return i}function Ip(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?_i(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(Ee.flags|=1024),t}function _r(){var e=Bs!==0;return Bs=0,e}function $r(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Or(e){if(Hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hs=!1}ia=0,pt=Ge=Ee=null,Ql=!1,Ri=Bs=0,Zl=null}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ee.memoizedState=pt=e:pt=pt.next=e,pt}function dt(){if(Ge===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=pt===null?Ee.memoizedState:pt.next;if(t!==null)pt=t,Ge=e;else{if(e===null)throw Ee.alternate===null?Error(c(467)):Error(c(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},pt===null?Ee.memoizedState=pt=e:pt=pt.next=e}return pt}function Us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _i(e){var t=Ri;return Ri+=1,Zl===null&&(Zl=[]),e=Ed(Zl,e,t),t=Ee,(pt===null?t.memoizedState:pt.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?gf:Fr),e}function qs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _i(e);if(e.$$typeof===me)return Lt(e)}throw Error(c(438,String(e)))}function Hr(e){var t=null,n=Ee.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Ee.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Us(),Ee.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ne;return t.index++,n}function sa(e,t){return typeof t=="function"?t(e):t}function Ys(e){var t=dt();return Br(t,Ge,e)}function Br(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=o=null,y=null,A=t,H=!1;do{var Y=A.lane&-536870913;if(Y!==A.lane?(ze&Y)===Y:(ia&Y)===Y){var D=A.revertLane;if(D===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),Y===ql&&(H=!0);else if((ia&D)===D){A=A.next,D===ql&&(H=!0);continue}else Y={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},y===null?(u=y=Y,o=i):y=y.next=Y,Ee.lanes|=D,Oa|=D;Y=A.action,bl&&n(i,Y),i=A.hasEagerState?A.eagerState:n(i,Y)}else D={lane:Y,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},y===null?(u=y=D,o=i):y=y.next=D,Ee.lanes|=Y,Oa|=Y;A=A.next}while(A!==null&&A!==t);if(y===null?o=i:y.next=u,!fn(i,e.memoizedState)&&(gt=!0,H&&(n=Yl,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=y,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ur(e){var t=dt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);fn(i,t.memoizedState)||(gt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function _d(e,t,n){var a=Ee,l=dt(),i=_e;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var o=!fn((Ge||l).memoizedState,n);if(o&&(l.memoizedState=n,gt=!0),l=l.queue,Xr(Hd.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||pt!==null&&pt.memoizedState.tag&1){if(a.flags|=2048,Kl(9,{destroy:void 0},Od.bind(null,a,l,n,t),null),Ze===null)throw Error(c(349));i||(ia&127)!==0||$d(a,t,n)}return n}function $d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t=Us(),Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Od(e,t,n,a){t.value=n,t.getSnapshot=a,Bd(t)&&Ud(e)}function Hd(e,t,n){return n(function(){Bd(t)&&Ud(e)})}function Bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function Ud(e){var t=rl(e,2);t!==null&&ln(t,e,2)}function qr(e){var t=Kt();if(typeof e=="function"){var n=e;if(e=n(),bl){at(!0);try{n()}finally{at(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function qd(e,t,n,a){return e.baseState=n,Br(e,Ge,typeof a=="function"?a:sa)}function Pp(e,t,n,a,l){if(Vs(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};_.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Yd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Yd(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=_.T,o={};_.T=o;try{var u=n(l,a),y=_.S;y!==null&&y(o,u),Xd(e,t,u)}catch(A){Yr(e,t,A)}finally{i!==null&&o.types!==null&&(i.types=o.types),_.T=i}}else try{i=n(l,a),Xd(e,t,i)}catch(A){Yr(e,t,A)}}function Xd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Gd(e,t,a)},function(a){return Yr(e,t,a)}):Gd(e,t,n)}function Gd(e,t,n){t.status="fulfilled",t.value=n,Vd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yd(e,n)))}function Yr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Vd(t),t=t.next;while(t!==a)}e.action=null}function Vd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qd(e,t){return t}function Zd(e,t){if(_e){var n=Ze.formState;if(n!==null){e:{var a=Ee;if(_e){if(Je){t:{for(var l=Je,i=An;l.nodeType!==8;){if(!i){l=null;break t}if(l=zn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Je=zn(l.nextSibling),a=l.data==="F!";break e}}Ca(a)}a=!1}a&&(t=n[0])}}return n=Kt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:t},n.queue=a,n=hf.bind(null,Ee,a),a.dispatch=n,a=qr(!1),i=Kr.bind(null,Ee,!1,a.queue),a=Kt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Pp.bind(null,Ee,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Kd(e){var t=dt();return Fd(t,Ge,e)}function Fd(e,t,n){if(t=Br(e,t,Qd)[0],e=Ys(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=_i(t)}catch(o){throw o===Xl?Ls:o}else a=t;t=dt();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(Ee.flags|=2048,Kl(9,{destroy:void 0},eg.bind(null,l,n),null)),[a,i,e]}function eg(e,t){e.action=t}function Jd(e){var t=dt(),n=Ge;if(n!==null)return Fd(t,n,e);dt(),t=t.memoizedState,n=dt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Kl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Ee.updateQueue,t===null&&(t=Us(),Ee.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Wd(){return dt().memoizedState}function Xs(e,t,n,a){var l=Kt();Ee.flags|=e,l.memoizedState=Kl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Gs(e,t,n,a){var l=dt();a=a===void 0?null:a;var i=l.memoizedState.inst;Ge!==null&&a!==null&&Nr(a,Ge.memoizedState.deps)?l.memoizedState=Kl(t,i,n,a):(Ee.flags|=e,l.memoizedState=Kl(1|t,i,n,a))}function Id(e,t){Xs(8390656,8,e,t)}function Xr(e,t){Gs(2048,8,e,t)}function tg(e){Ee.flags|=4;var t=Ee.updateQueue;if(t===null)t=Us(),Ee.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Pd(e){var t=dt().memoizedState;return tg({ref:t,nextImpl:e}),function(){if((Be&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function ef(e,t){return Gs(4,2,e,t)}function tf(e,t){return Gs(4,4,e,t)}function nf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){n=n!=null?n.concat([e]):null,Gs(4,4,nf.bind(null,t,e),n)}function Gr(){}function lf(e,t){var n=dt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Nr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function sf(e,t){var n=dt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Nr(t,a[1]))return a[0];if(a=e(),bl){at(!0);try{e()}finally{at(!1)}}return n.memoizedState=[a,t],a}function Vr(e,t,n){return n===void 0||(ia&1073741824)!==0&&(ze&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=oh(),Ee.lanes|=e,Oa|=e,n)}function of(e,t,n,a){return fn(n,t)?n:Vl.current!==null?(e=Vr(e,n,a),fn(e,t)||(gt=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(ze&261930)===0?(gt=!0,e.memoizedState=n):(e=oh(),Ee.lanes|=e,Oa|=e,t)}function rf(e,t,n,a,l){var i=R.p;R.p=i!==0&&8>i?i:8;var o=_.T,u={};_.T=u,Kr(e,!1,t,n);try{var y=l(),A=_.S;if(A!==null&&A(u,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var H=Jp(y,a);$i(e,t,H,yn(e))}else $i(e,t,a,yn(e))}catch(Y){$i(e,t,{then:function(){},status:"rejected",reason:Y},yn())}finally{R.p=i,o!==null&&u.types!==null&&(o.types=u.types),_.T=o}}function ng(){}function Qr(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=cf(e).queue;rf(e,l,t,le,n===null?ng:function(){return uf(e),n(a)})}function cf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uf(e){var t=cf(e);t.next===null&&(t=e.alternate.memoizedState),$i(e,t.next.queue,{},yn())}function Zr(){return Lt(Pi)}function df(){return dt().memoizedState}function ff(){return dt().memoizedState}function ag(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yn();e=za(n);var a=La(t,e,n);a!==null&&(ln(a,t,n),zi(a,t,n)),t={cache:Sr()},e.payload=t;return}t=t.return}}function lg(e,t,n){var a=yn();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vs(e)?mf(t,n):(n=dr(e,t,n,a),n!==null&&(ln(n,e,a),pf(n,t,a)))}function hf(e,t,n){var a=yn();$i(e,t,n,a)}function $i(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vs(e))mf(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,fn(u,o))return js(e,t,l,0),Ze===null&&Es(),!1}catch{}if(n=dr(e,t,l,a),n!==null)return ln(n,e,a),pf(n,t,a),!0}return!1}function Kr(e,t,n,a){if(a={lane:2,revertLane:kc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vs(e)){if(t)throw Error(c(479))}else t=dr(e,n,a,2),t!==null&&ln(t,e,2)}function Vs(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function mf(e,t){Ql=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,di(e,n)}}var Oi={readContext:Lt,use:qs,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};Oi.useEffectEvent=ot;var gf={readContext:Lt,use:qs,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:Id,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xs(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){Xs(4,2,e,t)},useMemo:function(e,t){var n=Kt();t=t===void 0?null:t;var a=e();if(bl){at(!0);try{e()}finally{at(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Kt();if(n!==void 0){var l=n(t);if(bl){at(!0);try{n(t)}finally{at(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=lg.bind(null,Ee,e),[a.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:function(e){e=qr(e);var t=e.queue,n=hf.bind(null,Ee,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Gr,useDeferredValue:function(e,t){var n=Kt();return Vr(n,e,t)},useTransition:function(){var e=qr(!1);return e=rf.bind(null,Ee,e.queue,!0,!1),Kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Ee,l=Kt();if(_e){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ze===null)throw Error(c(349));(ze&127)!==0||$d(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Id(Hd.bind(null,a,i,e),[e]),a.flags|=2048,Kl(9,{destroy:void 0},Od.bind(null,a,i,n,t),null),n},useId:function(){var e=Kt(),t=Ze.identifierPrefix;if(_e){var n=Fn,a=Kn;n=(a&~(1<<32-$e(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Bs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Wp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zr,useFormState:Zd,useActionState:Zd,useOptimistic:function(e){var t=Kt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Kr.bind(null,Ee,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hr,useCacheRefresh:function(){return Kt().memoizedState=ag.bind(null,Ee)},useEffectEvent:function(e){var t=Kt(),n={impl:e};return t.memoizedState=n,function(){if((Be&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Fr={readContext:Lt,use:qs,useCallback:lf,useContext:Lt,useEffect:Xr,useImperativeHandle:af,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:sf,useReducer:Ys,useRef:Wd,useState:function(){return Ys(sa)},useDebugValue:Gr,useDeferredValue:function(e,t){var n=dt();return of(n,Ge.memoizedState,e,t)},useTransition:function(){var e=Ys(sa)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:_i(e),t]},useSyncExternalStore:_d,useId:df,useHostTransitionStatus:Zr,useFormState:Kd,useActionState:Kd,useOptimistic:function(e,t){var n=dt();return qd(n,Ge,e,t)},useMemoCache:Hr,useCacheRefresh:ff};Fr.useEffectEvent=Pd;var bf={readContext:Lt,use:qs,useCallback:lf,useContext:Lt,useEffect:Xr,useImperativeHandle:af,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:sf,useReducer:Ur,useRef:Wd,useState:function(){return Ur(sa)},useDebugValue:Gr,useDeferredValue:function(e,t){var n=dt();return Ge===null?Vr(n,e,t):of(n,Ge.memoizedState,e,t)},useTransition:function(){var e=Ur(sa)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:_i(e),t]},useSyncExternalStore:_d,useId:df,useHostTransitionStatus:Zr,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=dt();return Ge!==null?qd(n,Ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hr,useCacheRefresh:ff};bf.useEffectEvent=Pd;function Jr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yn(),l=za(a);l.payload=t,n!=null&&(l.callback=n),t=La(e,l,a),t!==null&&(ln(t,e,a),zi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yn(),l=za(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=La(e,l,a),t!==null&&(ln(t,e,a),zi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yn(),a=za(n);a.tag=2,t!=null&&(a.callback=t),t=La(e,a,n),t!==null&&(ln(t,e,n),zi(t,e,n))}};function yf(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,a)||!Ti(l,i):!0}function vf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Wr.enqueueReplaceState(t,t.state,null)}function yl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=$({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function xf(e){Ts(e)}function wf(e){console.error(e)}function Sf(e){Ts(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Tf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ir(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function Ef(e){return e=za(e),e.tag=3,e}function jf(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Tf(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Tf(t,n,a),typeof l!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function ig(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ul(t,n,l,!0),n=mn.current,n!==null){switch(n.tag){case 31:case 13:return Dn===null?lo():n.alternate===null&&rt===0&&(rt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Ns?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Tc(e,a,l)),!1;case 22:return n.flags|=65536,a===Ns?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Tc(e,a,l)),!1}throw Error(c(435,n.tag))}return Tc(e,a,l),lo(),!1}if(_e)return t=mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==br&&(e=Error(c(422),{cause:a}),ki(kn(e,n)))):(a!==br&&(t=Error(c(423),{cause:a}),ki(kn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=kn(a,n),l=Ir(e.stateNode,a,l),Cr(e,l),rt!==4&&(rt=2)),!1;var i=Error(c(520),{cause:a});if(i=kn(i,n),Vi===null?Vi=[i]:Vi.push(i),rt!==4&&(rt=2),t===null)return!0;a=kn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ir(n.stateNode,a,e),Cr(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ha===null||!Ha.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Ef(l),jf(l,e,n,a),Cr(n,l),!1}n=n.return}while(n!==null);return!1}var Pr=Error(c(461)),gt=!1;function Nt(e,t,n,a){t.child=e===null?Cd(t,null,n,a):gl(t,e.child,n,a)}function kf(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}else o=a;return fl(t),a=Rr(e,t,n,o,i,l),u=_r(),e!==null&&!gt?($r(e,t,l),oa(e,t,l)):(_e&&u&&pr(t),t.flags|=1,Nt(e,t,a,l),t.child)}function Mf(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!fr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Cf(e,t,i,a,l)):(e=Ms(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!oc(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(o,a)&&e.ref===t.ref)return oa(e,t,l)}return t.flags|=1,e=ta(i,a),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Ti(i,a)&&e.ref===t.ref)if(gt=!1,t.pendingProps=a=i,oc(e,l))(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,oa(e,t,l)}return ec(e,t,n,a,l)}function Af(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Df(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zs(t,i!==null?i.cachePool:null),i!==null?zd(t,i):Dr(),Ld(t);else return a=t.lanes=536870912,Df(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(zs(t,i.cachePool),zd(t,i),Ra(),t.memoizedState=null):(e!==null&&zs(t,null),Dr(),Ra());return Nt(e,t,l,n),t.child}function Hi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Df(e,t,n,a,l){var i=Er();return i=i===null?null:{parent:mt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&zs(t,null),Dr(),Ld(t),e!==null&&Ul(e,t,a,!0),t.childLanes=l,null}function Zs(e,t){return t=Fs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zf(e,t,n){return gl(t,e.child,null,n),e=Zs(t,t.pendingProps),e.flags|=2,pn(t),t.memoizedState=null,e}function sg(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(a.mode==="hidden")return e=Zs(t,a),t.lanes=536870912,Hi(null,e);if(Lr(t),(e=Je)?(e=Xh(e,An),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Kn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},n=hd(e),n.return=t,t.child=n,zt=t,Je=null)):e=null,e===null)throw Ca(t);return t.lanes=536870912,null}return Zs(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Lr(t),l)if(t.flags&256)t.flags&=-257,t=zf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(gt||Ul(e,t,n,!1),l=(n&e.childLanes)!==0,gt||l){if(a=Ze,a!==null&&(o=Pn(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,rl(e,o),ln(a,e,o),Pr;lo(),t=zf(e,t,n)}else e=i.treeContext,Je=zn(o.nextSibling),zt=t,_e=!0,Ma=null,An=!1,e!==null&&gd(t,e),t=Zs(t,a),t.flags|=4096;return t}return e=ta(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ks(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ec(e,t,n,a,l){return fl(t),n=Rr(e,t,n,a,void 0,l),a=_r(),e!==null&&!gt?($r(e,t,l),oa(e,t,l)):(_e&&a&&pr(t),t.flags|=1,Nt(e,t,n,l),t.child)}function Lf(e,t,n,a,l,i){return fl(t),t.updateQueue=null,n=Rd(t,a,n,l),Nd(e),a=_r(),e!==null&&!gt?($r(e,t,i),oa(e,t,i)):(_e&&a&&pr(t),t.flags|=1,Nt(e,t,n,i),t.child)}function Nf(e,t,n,a,l){if(fl(t),t.stateNode===null){var i=$l,o=n.contextType;typeof o=="object"&&o!==null&&(i=Lt(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},kr(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Lt(o):$l,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Jr(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Wr.enqueueReplaceState(i,i.state,null),Ni(t,a,i,l),Li(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,y=yl(n,u);i.props=y;var A=i.context,H=n.contextType;o=$l,typeof H=="object"&&H!==null&&(o=Lt(H));var Y=n.getDerivedStateFromProps;H=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||A!==o)&&vf(t,i,a,o),Da=!1;var D=t.memoizedState;i.state=D,Ni(t,a,i,l),Li(),A=t.memoizedState,u||D!==A||Da?(typeof Y=="function"&&(Jr(t,n,Y,a),A=t.memoizedState),(y=Da||yf(t,n,y,a,D,A,o))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=o,a=y):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Mr(e,t),o=t.memoizedProps,H=yl(n,o),i.props=H,Y=t.pendingProps,D=i.context,A=n.contextType,y=$l,typeof A=="object"&&A!==null&&(y=Lt(A)),u=n.getDerivedStateFromProps,(A=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==Y||D!==y)&&vf(t,i,a,y),Da=!1,D=t.memoizedState,i.state=D,Ni(t,a,i,l),Li();var z=t.memoizedState;o!==Y||D!==z||Da||e!==null&&e.dependencies!==null&&As(e.dependencies)?(typeof u=="function"&&(Jr(t,n,u,a),z=t.memoizedState),(H=Da||yf(t,n,H,a,D,z,y)||e!==null&&e.dependencies!==null&&As(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,z,y),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,z,y)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=z),i.props=a,i.state=z,i.context=y,a=H):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Ks(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=gl(t,e.child,null,l),t.child=gl(t,null,n,l)):Nt(e,t,n,l),t.memoizedState=i.state,e=t.child):e=oa(e,t,l),e}function Rf(e,t,n,a){return ul(),t.flags|=256,Nt(e,t,n,a),t.child}var tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nc(e){return{baseLanes:e,cachePool:Sd()}}function ac(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=bn),e}function _f(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(l?Na(t):Ra(),(e=Je)?(e=Xh(e,An),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Kn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},n=hd(e),n.return=t,t.child=n,zt=t,Je=null)):e=null,e===null)throw Ca(t);return Bc(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(Ra(),l=t.mode,u=Fs({mode:"hidden",children:u},l),a=cl(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=nc(n),a.childLanes=ac(e,o,n),t.memoizedState=tc,Hi(null,a)):(Na(t),lc(t,u))}var y=e.memoizedState;if(y!==null&&(u=y.dehydrated,u!==null)){if(i)t.flags&256?(Na(t),t.flags&=-257,t=ic(e,t,n)):t.memoizedState!==null?(Ra(),t.child=e.child,t.flags|=128,t=null):(Ra(),u=a.fallback,l=t.mode,a=Fs({mode:"visible",children:a.children},l),u=cl(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,gl(t,e.child,null,n),a=t.child,a.memoizedState=nc(n),a.childLanes=ac(e,o,n),t.memoizedState=tc,t=Hi(null,a));else if(Na(t),Bc(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var A=o.dgst;o=A,a=Error(c(419)),a.stack="",a.digest=o,ki({value:a,source:null,stack:null}),t=ic(e,t,n)}else if(gt||Ul(e,t,n,!1),o=(n&e.childLanes)!==0,gt||o){if(o=Ze,o!==null&&(a=Pn(o,n),a!==0&&a!==y.retryLane))throw y.retryLane=a,rl(e,a),ln(o,e,a),Pr;Hc(u)||lo(),t=ic(e,t,n)}else Hc(u)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Je=zn(u.nextSibling),zt=t,_e=!0,Ma=null,An=!1,e!==null&&gd(t,e),t=lc(t,a.children),t.flags|=4096);return t}return l?(Ra(),u=a.fallback,l=t.mode,y=e.child,A=y.sibling,a=ta(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,A!==null?u=ta(A,u):(u=cl(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,Hi(null,a),a=t.child,u=e.child.memoizedState,u===null?u=nc(n):(l=u.cachePool,l!==null?(y=mt._currentValue,l=l.parent!==y?{parent:y,pool:y}:l):l=Sd(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=ac(e,o,n),t.memoizedState=tc,Hi(e.child,a)):(Na(t),n=e.child,e=n.sibling,n=ta(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function lc(e,t){return t=Fs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fs(e,t){return e=hn(22,e,null,t),e.lanes=0,e}function ic(e,t,n){return gl(t,e.child,null,n),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),xr(e.return,t,n)}function sc(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function Of(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=ut.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,pe(ut,o),Nt(e,t,a,n),a=_e?ji:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$f(e,n,t);else if(e.tag===19)$f(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),sc(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Os(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}sc(t,!0,n,null,i,a);break;case"together":sc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function oa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Oa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ul(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=ta(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ta(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&As(e)))}function og(e,t,n){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),Aa(t,mt,e.memoizedState.cache),ul();break;case 27:case 5:je(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:Aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Na(t),t.flags|=128,null):(n&t.child.childLanes)!==0?_f(e,t,n):(Na(t),e=oa(e,t,n),e!==null?e.sibling:null);Na(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ul(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Of(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pe(ut,ut.current),a)break;return null;case 22:return t.lanes=0,Af(e,t,n,t.pendingProps);case 24:Aa(t,mt,e.memoizedState.cache)}return oa(e,t,n)}function Hf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)gt=!0;else{if(!oc(e,n)&&(t.flags&128)===0)return gt=!1,og(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,_e&&(t.flags&1048576)!==0&&pd(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ml(t.elementType),t.type=e,typeof e=="function")fr(e)?(a=yl(e,a),t.tag=1,t=Nf(null,t,e,a,n)):(t.tag=0,t=ec(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===W){t.tag=11,t=kf(null,t,e,a,n);break e}else if(l===j){t.tag=14,t=Mf(null,t,e,a,n);break e}}throw t=K(e)||e,Error(c(306,t,""))}}return t;case 0:return ec(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=yl(a,t.pendingProps),Nf(e,t,a,l,n);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Mr(e,t),Ni(t,a,null,n);var o=t.memoizedState;if(a=o.cache,Aa(t,mt,a),a!==i.cache&&wr(t,[mt],n,!0),Li(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Rf(e,t,a,n);break e}else if(a!==l){l=kn(Error(c(424)),t),ki(l),t=Rf(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Je=zn(e.firstChild),zt=t,_e=!0,Ma=null,An=!0,n=Cd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ul(),a===l){t=oa(e,t,n);break e}Nt(e,t,a,n)}t=t.child}return t;case 26:return Ks(e,t),e===null?(n=Fh(t.type,null,t.pendingProps,null))?t.memoizedState=n:_e||(n=t.type,e=t.pendingProps,a=fo(ft.current).createElement(n),a[vt]=t,a[Dt]=e,Rt(a,n,e),lt(a),t.stateNode=a):t.memoizedState=Fh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return je(t),e===null&&_e&&(a=t.stateNode=Qh(t.type,t.pendingProps,ft.current),zt=t,An=!0,l=Je,Ya(t.type)?(Uc=l,Je=zn(a.firstChild)):Je=l),Nt(e,t,t.pendingProps.children,n),Ks(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((l=a=Je)&&(a=Og(a,t.type,t.pendingProps,An),a!==null?(t.stateNode=a,zt=t,Je=zn(a.firstChild),An=!1,l=!0):l=!1),l||Ca(t)),je(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_c(l,i)?a=null:o!==null&&_c(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=Rr(e,t,Ip,null,null,n),Pi._currentValue=l),Ks(e,t),Nt(e,t,a,n),t.child;case 6:return e===null&&_e&&((e=n=Je)&&(n=Hg(n,t.pendingProps,An),n!==null?(t.stateNode=n,zt=t,Je=null,e=!0):e=!1),e||Ca(t)),null;case 13:return _f(e,t,n);case 4:return tt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=gl(t,null,a,n):Nt(e,t,a,n),t.child;case 11:return kf(e,t,t.type,t.pendingProps,n);case 7:return Nt(e,t,t.pendingProps,n),t.child;case 8:return Nt(e,t,t.pendingProps.children,n),t.child;case 12:return Nt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Aa(t,t.type,a.value),Nt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,fl(t),l=Lt(l),a=a(l),t.flags|=1,Nt(e,t,a,n),t.child;case 14:return Mf(e,t,t.type,t.pendingProps,n);case 15:return Cf(e,t,t.type,t.pendingProps,n);case 19:return Of(e,t,n);case 31:return sg(e,t,n);case 22:return Af(e,t,n,t.pendingProps);case 24:return fl(t),a=Lt(mt),e===null?(l=Er(),l===null&&(l=Ze,i=Sr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},kr(t),Aa(t,mt,l)):((e.lanes&n)!==0&&(Mr(e,t),Ni(t,null,null,n),Li()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Aa(t,mt,a)):(a=i.cache,Aa(t,mt,a),a!==l.cache&&wr(t,[mt],n,!0))),Nt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ra(e){e.flags|=4}function rc(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(dh())e.flags|=8192;else throw pl=Ns,jr}else e.flags&=-16777217}function Bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!em(t))if(dh())e.flags|=8192;else throw pl=Ns,jr}function Js(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qt():536870912,e.lanes|=t,Il|=t)}function Bi(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function rg(e,t,n){var a=t.pendingProps;switch(gr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return We(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),la(mt),yt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bl(t)?ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yr())),We(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(ra(t),i!==null?(We(t),Bf(t,i)):(We(t),rc(t,l,null,a,n))):i?i!==e.memoizedState?(ra(t),We(t),Bf(t,i)):(We(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&ra(t),We(t),rc(t,l,e,a,n)),null;case 27:if(ht(t),n=ft.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ra(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return We(t),null}e=Se.current,Bl(t)?bd(t):(e=Qh(l,a,n),t.stateNode=e,ra(t))}return We(t),null;case 5:if(ht(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ra(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return We(t),null}if(i=Se.current,Bl(t))bd(t);else{var o=fo(ft.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[vt]=t,i[Dt]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Rt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&ra(t)}}return We(t),rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ra(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ft.current,Bl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=zt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||_h(e.nodeValue,n)),e||Ca(t,!0)}else e=fo(e).createTextNode(a),e[vt]=t,t.stateNode=e}return We(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Bl(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[vt]=t}else ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),e=!1}else n=yr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pn(t),t):(pn(t),null);if((t.flags&128)!==0)throw Error(c(558))}return We(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Bl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[vt]=t}else ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),l=!1}else l=yr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(pn(t),t):(pn(t),null)}return pn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Js(t,t.updateQueue),We(t),null);case 4:return yt(),e===null&&Dc(t.stateNode.containerInfo),We(t),null;case 10:return la(t.type),We(t),null;case 19:if(Me(ut),a=t.memoizedState,a===null)return We(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Bi(a,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Os(e),i!==null){for(t.flags|=128,Bi(a,!1),e=i.updateQueue,t.updateQueue=e,Js(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fd(n,e),n=n.sibling;return pe(ut,ut.current&1|2),_e&&na(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Ue()>to&&(t.flags|=128,l=!0,Bi(a,!1),t.lanes=4194304)}else{if(!l)if(e=Os(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Js(t,e),Bi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!_e)return We(t),null}else 2*Ue()-a.renderingStartTime>to&&n!==536870912&&(t.flags|=128,l=!0,Bi(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ue(),e.sibling=null,n=ut.current,pe(ut,l?n&1|2:n&1),_e&&na(t,a.treeForkCount),e):(We(t),null);case 22:case 23:return pn(t),zr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),n=t.updateQueue,n!==null&&Js(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Me(hl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(mt),We(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function cg(e,t){switch(gr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(mt),yt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ht(t),null;case 31:if(t.memoizedState!==null){if(pn(t),t.alternate===null)throw Error(c(340));ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(ut),null;case 4:return yt(),null;case 10:return la(t.type),null;case 22:case 23:return pn(t),zr(),e!==null&&Me(hl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(mt),null;case 25:return null;default:return null}}function Uf(e,t){switch(gr(t),t.tag){case 3:la(mt),yt();break;case 26:case 27:case 5:ht(t);break;case 4:yt();break;case 31:t.memoizedState!==null&&pn(t);break;case 13:pn(t);break;case 19:Me(ut);break;case 10:la(t.type);break;case 22:case 23:pn(t),zr(),e!==null&&Me(hl);break;case 24:la(mt)}}function Ui(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(u){Xe(t,t.return,u)}}function _a(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var y=n,A=u;try{A()}catch(H){Xe(l,y,H)}}}a=a.next}while(a!==i)}}catch(H){Xe(t,t.return,H)}}function qf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Dd(t,n)}catch(a){Xe(e,e.return,a)}}}function Yf(e,t,n){n.props=yl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Xe(e,t,a)}}function qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Xe(e,t,l)}}function Jn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Xe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Xe(e,t,l)}else n.current=null}function Xf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Xe(e,e.return,l)}}function cc(e,t,n){try{var a=e.stateNode;zg(a,e.type,n,t),a[Dt]=t}catch(l){Xe(e,e.return,l)}}function Gf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=En));else if(a!==4&&(a===27&&Ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(dc(e,t,n),e=e.sibling;e!==null;)dc(e,t,n),e=e.sibling}function Ws(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}function Vf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Rt(t,a,n),t[vt]=e,t[Dt]=n}catch(i){Xe(e,e.return,i)}}var ca=!1,bt=!1,fc=!1,Qf=typeof WeakSet=="function"?WeakSet:Set,kt=null;function ug(e,t){if(e=e.containerInfo,Nc=vo,e=ad(e),ir(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,y=-1,A=0,H=0,Y=e,D=null;t:for(;;){for(var z;Y!==n||l!==0&&Y.nodeType!==3||(u=o+l),Y!==i||a!==0&&Y.nodeType!==3||(y=o+a),Y.nodeType===3&&(o+=Y.nodeValue.length),(z=Y.firstChild)!==null;)D=Y,Y=z;for(;;){if(Y===e)break t;if(D===n&&++A===l&&(u=o),D===i&&++H===a&&(y=o),(z=Y.nextSibling)!==null)break;Y=D,D=Y.parentNode}Y=z}n=u===-1||y===-1?null:{start:u,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:e,selectionRange:n},vo=!1,kt=t;kt!==null;)if(t=kt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,kt=e;else for(;kt!==null;){switch(t=kt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var ae=yl(n.type,l);e=a.getSnapshotBeforeUpdate(ae,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(be){Xe(n,n.return,be)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Oc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,kt=e;break}kt=t.return}}function Zf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:da(e,n),a&4&&Ui(5,n);break;case 1:if(da(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Xe(n,n.return,o)}else{var l=yl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Xe(n,n.return,o)}}a&64&&qf(n),a&512&&qi(n,n.return);break;case 3:if(da(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Dd(e,t)}catch(o){Xe(n,n.return,o)}}break;case 27:t===null&&a&4&&Vf(n);case 26:case 5:da(e,n),t===null&&a&4&&Xf(n),a&512&&qi(n,n.return);break;case 12:da(e,n);break;case 31:da(e,n),a&4&&Jf(e,n);break;case 13:da(e,n),a&4&&Wf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vg.bind(null,n),Bg(e,n))));break;case 22:if(a=n.memoizedState!==null||ca,!a){t=t!==null&&t.memoizedState!==null||bt,l=ca;var i=bt;ca=a,(bt=t)&&!i?fa(e,n,(n.subtreeFlags&8772)!==0):da(e,n),ca=l,bt=i}break;case 30:break;default:da(e,n)}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Al(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var et=null,en=!1;function ua(e,t,n){for(n=n.child;n!==null;)Ff(e,t,n),n=n.sibling}function Ff(e,t,n){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(Vt,n)}catch{}switch(n.tag){case 26:bt||Jn(n,t),ua(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:bt||Jn(n,t);var a=et,l=en;Ya(n.type)&&(et=n.stateNode,en=!1),ua(e,t,n),Ji(n.stateNode),et=a,en=l;break;case 5:bt||Jn(n,t);case 6:if(a=et,l=en,et=null,ua(e,t,n),et=a,en=l,et!==null)if(en)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(n.stateNode)}catch(i){Xe(n,t,i)}else try{et.removeChild(n.stateNode)}catch(i){Xe(n,t,i)}break;case 18:et!==null&&(en?(e=et,qh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),si(e)):qh(et,n.stateNode));break;case 4:a=et,l=en,et=n.stateNode.containerInfo,en=!0,ua(e,t,n),et=a,en=l;break;case 0:case 11:case 14:case 15:_a(2,n,t),bt||_a(4,n,t),ua(e,t,n);break;case 1:bt||(Jn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Yf(n,t,a)),ua(e,t,n);break;case 21:ua(e,t,n);break;case 22:bt=(a=bt)||n.memoizedState!==null,ua(e,t,n),bt=a;break;default:ua(e,t,n)}}function Jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(n){Xe(t,t.return,n)}}}function Wf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(n){Xe(t,t.return,n)}}function dg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qf),t;default:throw Error(c(435,e.tag))}}function Is(e,t){var n=dg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=xg.bind(null,e,a);a.then(l,l)}})}function tn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(Ya(u.type)){et=u.stateNode,en=!1;break e}break;case 5:et=u.stateNode,en=!1;break e;case 3:case 4:et=u.stateNode.containerInfo,en=!0;break e}u=u.return}if(et===null)throw Error(c(160));Ff(i,o,l),et=null,en=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)If(t,e),t=t.sibling}var Un=null;function If(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tn(t,e),nn(e),a&4&&(_a(3,e,e.return),Ui(3,e),_a(5,e,e.return));break;case 1:tn(t,e),nn(e),a&512&&(bt||n===null||Jn(n,n.return)),a&64&&ca&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Un;if(tn(t,e),nn(e),a&512&&(bt||n===null||Jn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[va]||i[vt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Rt(i,a,n),i[vt]=e,lt(i),a=i;break e;case"link":var o=Ih("link","href",l).get(a+(n.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break t}}i=l.createElement(a),Rt(i,a,n),l.head.appendChild(i);break;case"meta":if(o=Ih("meta","content",l).get(a+(n.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break t}}i=l.createElement(a),Rt(i,a,n),l.head.appendChild(i);break;default:throw Error(c(468,a))}i[vt]=e,lt(i),a=i}e.stateNode=a}else Ph(l,e.type,e.stateNode);else e.stateNode=Wh(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Ph(l,e.type,e.stateNode):Wh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&cc(e,e.memoizedProps,n.memoizedProps)}break;case 27:tn(t,e),nn(e),a&512&&(bt||n===null||Jn(n,n.return)),n!==null&&a&4&&cc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tn(t,e),nn(e),a&512&&(bt||n===null||Jn(n,n.return)),e.flags&32){l=e.stateNode;try{ce(l,"")}catch(ae){Xe(e,e.return,ae)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,cc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(fc=!0);break;case 6:if(tn(t,e),nn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ae){Xe(e,e.return,ae)}}break;case 3:if(po=null,l=Un,Un=ho(t.containerInfo),tn(t,e),Un=l,nn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(ae){Xe(e,e.return,ae)}fc&&(fc=!1,Pf(e));break;case 4:a=Un,Un=ho(e.stateNode.containerInfo),tn(t,e),nn(e),Un=a;break;case 12:tn(t,e),nn(e);break;case 31:tn(t,e),nn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 13:tn(t,e),nn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eo=Ue()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 22:l=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,A=ca,H=bt;if(ca=A||l,bt=H||y,tn(t,e),bt=H,ca=A,nn(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||y||ca||bt||vl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(i=y.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=y.stateNode;var Y=y.memoizedProps.style,D=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;u.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(ae){Xe(y,y.return,ae)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=l?"":y.memoizedProps}catch(ae){Xe(y,y.return,ae)}}}else if(t.tag===18){if(n===null){y=t;try{var z=y.stateNode;l?Yh(z,!0):Yh(y.stateNode,!1)}catch(ae){Xe(y,y.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Is(e,n))));break;case 19:tn(t,e),nn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 30:break;case 21:break;default:tn(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Gf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,i=uc(e);Ws(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(ce(o,""),n.flags&=-33);var u=uc(e);Ws(e,u,o);break;case 3:case 4:var y=n.stateNode.containerInfo,A=uc(e);dc(e,A,y);break;default:throw Error(c(161))}}catch(H){Xe(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zf(e,t.alternate,t),t=t.sibling}function vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_a(4,t,t.return),vl(t);break;case 1:Jn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yf(t,t.return,n),vl(t);break;case 27:Ji(t.stateNode);case 26:case 5:Jn(t,t.return),vl(t);break;case 22:t.memoizedState===null&&vl(t);break;case 30:vl(t);break;default:vl(t)}e=e.sibling}}function fa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:fa(l,i,n),Ui(4,i);break;case 1:if(fa(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Xe(a,a.return,A)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)Ad(y[l],u)}catch(A){Xe(a,a.return,A)}}n&&o&64&&qf(i),qi(i,i.return);break;case 27:Vf(i);case 26:case 5:fa(l,i,n),n&&a===null&&o&4&&Xf(i),qi(i,i.return);break;case 12:fa(l,i,n);break;case 31:fa(l,i,n),n&&o&4&&Jf(l,i);break;case 13:fa(l,i,n),n&&o&4&&Wf(l,i);break;case 22:i.memoizedState===null&&fa(l,i,n),qi(i,i.return);break;case 30:break;default:fa(l,i,n)}t=t.sibling}}function hc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Mi(n))}function mc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Mi(e))}function qn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eh(e,t,n,a),t=t.sibling}function eh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:qn(e,t,n,a),l&2048&&Ui(9,t);break;case 1:qn(e,t,n,a);break;case 3:qn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Mi(e)));break;case 12:if(l&2048){qn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Xe(t,t.return,y)}}else qn(e,t,n,a);break;case 31:qn(e,t,n,a);break;case 13:qn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?qn(e,t,n,a):Yi(e,t):i._visibility&2?qn(e,t,n,a):(i._visibility|=2,Fl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&hc(o,t);break;case 24:qn(e,t,n,a),l&2048&&mc(t.alternate,t);break;default:qn(e,t,n,a)}}function Fl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=n,y=a,A=o.flags;switch(o.tag){case 0:case 11:case 15:Fl(i,o,u,y,l),Ui(8,o);break;case 23:break;case 22:var H=o.stateNode;o.memoizedState!==null?H._visibility&2?Fl(i,o,u,y,l):Yi(i,o):(H._visibility|=2,Fl(i,o,u,y,l)),l&&A&2048&&hc(o.alternate,o);break;case 24:Fl(i,o,u,y,l),l&&A&2048&&mc(o.alternate,o);break;default:Fl(i,o,u,y,l)}t=t.sibling}}function Yi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Yi(n,a),l&2048&&hc(a.alternate,a);break;case 24:Yi(n,a),l&2048&&mc(a.alternate,a);break;default:Yi(n,a)}t=t.sibling}}var Xi=8192;function Jl(e,t,n){if(e.subtreeFlags&Xi)for(e=e.child;e!==null;)th(e,t,n),e=e.sibling}function th(e,t,n){switch(e.tag){case 26:Jl(e,t,n),e.flags&Xi&&e.memoizedState!==null&&Wg(n,Un,e.memoizedState,e.memoizedProps);break;case 5:Jl(e,t,n);break;case 3:case 4:var a=Un;Un=ho(e.stateNode.containerInfo),Jl(e,t,n),Un=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Xi,Xi=16777216,Jl(e,t,n),Xi=a):Jl(e,t,n));break;default:Jl(e,t,n)}}function nh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];kt=a,lh(a,e)}nh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ah(e),e=e.sibling}function ah(e){switch(e.tag){case 0:case 11:case 15:Gi(e),e.flags&2048&&_a(9,e,e.return);break;case 3:Gi(e);break;case 12:Gi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ps(e)):Gi(e);break;default:Gi(e)}}function Ps(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];kt=a,lh(a,e)}nh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_a(8,t,t.return),Ps(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ps(t));break;default:Ps(t)}e=e.sibling}}function lh(e,t){for(;kt!==null;){var n=kt;switch(n.tag){case 0:case 11:case 15:_a(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Mi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,kt=a;else e:for(n=e;kt!==null;){a=kt;var l=a.sibling,i=a.return;if(Kf(a),a===n){kt=null;break e}if(l!==null){l.return=i,kt=l;break e}kt=i}}}var fg={getCacheForType:function(e){var t=Lt(mt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Lt(mt).controller.signal}},hg=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,Ae=null,ze=0,Ye=0,gn=null,$a=!1,Wl=!1,pc=!1,ha=0,rt=0,Oa=0,xl=0,gc=0,bn=0,Il=0,Vi=null,an=null,bc=!1,eo=0,ih=0,to=1/0,no=null,Ha=null,wt=0,Ba=null,Pl=null,ma=0,yc=0,vc=null,sh=null,Qi=0,xc=null;function yn(){return(Be&2)!==0&&ze!==0?ze&-ze:_.T!==null?kc():kl()}function oh(){if(bn===0)if((ze&536870912)===0||_e){var e=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),bn=e}else bn=536870912;return e=mn.current,e!==null&&(e.flags|=32),bn}function ln(e,t,n){(e===Ze&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(ei(e,0),Ua(e,ze,bn,!1)),Gn(e,n),((Be&2)===0||e!==Ze)&&(e===Ze&&((Be&2)===0&&(xl|=n),rt===4&&Ua(e,ze,bn,!1)),Wn(e))}function rh(e,t,n){if((Be&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Te(e,t),l=a?gg(e,t):Sc(e,t,!0),i=a;do{if(l===0){Wl&&!a&&Ua(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!mg(n)){l=Sc(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=Vi;var y=u.current.memoizedState.isDehydrated;if(y&&(ei(u,o).flags|=256),o=Sc(u,o,!1),o!==2){if(pc&&!y){u.errorRecoveryDisabledLanes|=i,xl|=i,l=4;break e}i=an,an=l,i!==null&&(an===null?an=i:an.push.apply(an,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){ei(e,0),Ua(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ua(a,t,bn,!$a);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=eo+300-Ue(),10<l)){if(Ua(a,t,bn,!$a),Ie(a,0,!0)!==0)break e;ma=t,a.timeoutHandle=Bh(ch.bind(null,a,n,an,no,bc,t,bn,xl,Il,$a,i,"Throttled",-0,0),l);break e}ch(a,n,an,no,bc,t,bn,xl,Il,$a,i,null,-0,0)}}break}while(!0);Wn(e)}function ch(e,t,n,a,l,i,o,u,y,A,H,Y,D,z){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:En},th(t,i,Y);var ae=(i&62914560)===i?eo-Ue():(i&4194048)===i?ih-Ue():0;if(ae=Ig(Y,ae),ae!==null){ma=i,e.cancelPendingCommit=ae(bh.bind(null,e,t,i,n,a,l,o,u,y,H,Y,null,D,z)),Ua(e,i,o,!A);return}}bh(e,t,i,n,a,l,o,u,y)}function mg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!fn(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ua(e,t,n,a){t&=~gc,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-$e(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&us(e,n,t)}function ao(){return(Be&6)===0?(Zi(0),!1):!0}function wc(){if(Ae!==null){if(Ye===0)var e=Ae.return;else e=Ae,aa=dl=null,Or(e),Gl=null,Ai=0,e=Ae;for(;e!==null;)Uf(e.alternate,e),e=e.return;Ae=null}}function ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Rg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ma=0,wc(),Ze=e,Ae=n=ta(e.current,null),ze=t,Ye=0,gn=null,$a=!1,Wl=Te(e,t),pc=!1,Il=bn=gc=xl=Oa=rt=0,an=Vi=null,bc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-$e(a),i=1<<l;t|=e[l],a&=~i}return ha=t,Es(),n}function uh(e,t){Ee=null,_.H=Oi,t===Xl||t===Ls?(t=jd(),Ye=3):t===jr?(t=jd(),Ye=4):Ye=t===Pr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gn=t,Ae===null&&(rt=1,Qs(e,kn(t,e.current)))}function dh(){var e=mn.current;return e===null?!0:(ze&4194048)===ze?Dn===null:(ze&62914560)===ze||(ze&536870912)!==0?e===Dn:!1}function fh(){var e=_.H;return _.H=Oi,e===null?Oi:e}function hh(){var e=_.A;return _.A=fg,e}function lo(){rt=4,$a||(ze&4194048)!==ze&&mn.current!==null||(Wl=!0),(Oa&134217727)===0&&(xl&134217727)===0||Ze===null||Ua(Ze,ze,bn,!1)}function Sc(e,t,n){var a=Be;Be|=2;var l=fh(),i=hh();(Ze!==e||ze!==t)&&(no=null,ei(e,t)),t=!1;var o=rt;e:do try{if(Ye!==0&&Ae!==null){var u=Ae,y=gn;switch(Ye){case 8:wc(),o=6;break e;case 3:case 2:case 9:case 6:mn.current===null&&(t=!0);var A=Ye;if(Ye=0,gn=null,ti(e,u,y,A),n&&Wl){o=0;break e}break;default:A=Ye,Ye=0,gn=null,ti(e,u,y,A)}}pg(),o=rt;break}catch(H){uh(e,H)}while(!0);return t&&e.shellSuspendCounter++,aa=dl=null,Be=a,_.H=l,_.A=i,Ae===null&&(Ze=null,ze=0,Es()),o}function pg(){for(;Ae!==null;)mh(Ae)}function gg(e,t){var n=Be;Be|=2;var a=fh(),l=hh();Ze!==e||ze!==t?(no=null,to=Ue()+500,ei(e,t)):Wl=Te(e,t);e:do try{if(Ye!==0&&Ae!==null){t=Ae;var i=gn;t:switch(Ye){case 1:Ye=0,gn=null,ti(e,t,i,1);break;case 2:case 9:if(Td(i)){Ye=0,gn=null,ph(t);break}t=function(){Ye!==2&&Ye!==9||Ze!==e||(Ye=7),Wn(e)},i.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Td(i)?(Ye=0,gn=null,ph(t)):(Ye=0,gn=null,ti(e,t,i,7));break;case 5:var o=null;switch(Ae.tag){case 26:o=Ae.memoizedState;case 5:case 27:var u=Ae;if(o?em(o):u.stateNode.complete){Ye=0,gn=null;var y=u.sibling;if(y!==null)Ae=y;else{var A=u.return;A!==null?(Ae=A,io(A)):Ae=null}break t}}Ye=0,gn=null,ti(e,t,i,5);break;case 6:Ye=0,gn=null,ti(e,t,i,6);break;case 8:wc(),rt=6;break e;default:throw Error(c(462))}}bg();break}catch(H){uh(e,H)}while(!0);return aa=dl=null,_.H=a,_.A=l,Be=n,Ae!==null?0:(Ze=null,ze=0,Es(),rt)}function bg(){for(;Ae!==null&&!nt();)mh(Ae)}function mh(e){var t=Hf(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?io(e):Ae=t}function ph(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Lf(n,t,t.pendingProps,t.type,void 0,ze);break;case 11:t=Lf(n,t,t.pendingProps,t.type.render,t.ref,ze);break;case 5:Or(t);default:Uf(n,t),t=Ae=fd(t,ha),t=Hf(n,t,ha)}e.memoizedProps=e.pendingProps,t===null?io(e):Ae=t}function ti(e,t,n,a){aa=dl=null,Or(t),Gl=null,Ai=0;var l=t.return;try{if(ig(e,l,t,n,ze)){rt=1,Qs(e,kn(n,e.current)),Ae=null;return}}catch(i){if(l!==null)throw Ae=l,i;rt=1,Qs(e,kn(n,e.current)),Ae=null;return}t.flags&32768?(_e||a===1?e=!0:Wl||(ze&536870912)!==0?e=!1:($a=e=!0,(a===2||a===9||a===3||a===6)&&(a=mn.current,a!==null&&a.tag===13&&(a.flags|=16384))),gh(t,e)):io(t)}function io(e){var t=e;do{if((t.flags&32768)!==0){gh(t,$a);return}e=t.return;var n=rg(t.alternate,t,ha);if(n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);rt===0&&(rt=5)}function gh(e,t){do{var n=cg(e.alternate,e);if(n!==null){n.flags&=32767,Ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=n}while(e!==null);rt=6,Ae=null}function bh(e,t,n,a,l,i,o,u,y){e.cancelPendingCommit=null;do so();while(wt!==0);if((Be&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=ur,te(e,n,i,o,u,y),e===Ze&&(Ae=Ze=null,ze=0),Pl=t,Ba=e,ma=n,yc=i,vc=l,sh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wg(Hn,function(){return Sh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,l=R.p,R.p=2,o=Be,Be|=4;try{ug(e,t,n)}finally{Be=o,R.p=l,_.T=a}}wt=1,yh(),vh(),xh()}}function yh(){if(wt===1){wt=0;var e=Ba,t=Pl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var a=R.p;R.p=2;var l=Be;Be|=4;try{If(t,e);var i=Rc,o=ad(e.containerInfo),u=i.focusedElem,y=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&nd(u.ownerDocument.documentElement,u)){if(y!==null&&ir(u)){var A=y.start,H=y.end;if(H===void 0&&(H=A),"selectionStart"in u)u.selectionStart=A,u.selectionEnd=Math.min(H,u.value.length);else{var Y=u.ownerDocument||document,D=Y&&Y.defaultView||window;if(D.getSelection){var z=D.getSelection(),ae=u.textContent.length,be=Math.min(y.start,ae),Qe=y.end===void 0?be:Math.min(y.end,ae);!z.extend&&be>Qe&&(o=Qe,Qe=be,be=o);var E=td(u,be),S=td(u,Qe);if(E&&S&&(z.rangeCount!==1||z.anchorNode!==E.node||z.anchorOffset!==E.offset||z.focusNode!==S.node||z.focusOffset!==S.offset)){var C=Y.createRange();C.setStart(E.node,E.offset),z.removeAllRanges(),be>Qe?(z.addRange(C),z.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),z.addRange(C))}}}}for(Y=[],z=u;z=z.parentNode;)z.nodeType===1&&Y.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<Y.length;u++){var U=Y[u];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}vo=!!Nc,Rc=Nc=null}finally{Be=l,R.p=a,_.T=n}}e.current=t,wt=2}}function vh(){if(wt===2){wt=0;var e=Ba,t=Pl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var a=R.p;R.p=2;var l=Be;Be|=4;try{Zf(e,t.alternate,t)}finally{Be=l,R.p=a,_.T=n}}wt=3}}function xh(){if(wt===4||wt===3){wt=0,Et();var e=Ba,t=Pl,n=ma,a=sh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?wt=5:(wt=0,Pl=Ba=null,wh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ha=null),jl(n),t=t.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(Vt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,l=R.p,R.p=2,_.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var u=a[o];i(u.value,{componentStack:u.stack})}}finally{_.T=t,R.p=l}}(ma&3)!==0&&so(),Wn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===xc?Qi++:(Qi=0,xc=e):Qi=0,Zi(0)}}function wh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Mi(t)))}function so(){return yh(),vh(),xh(),Sh()}function Sh(){if(wt!==5)return!1;var e=Ba,t=yc;yc=0;var n=jl(ma),a=_.T,l=R.p;try{R.p=32>n?32:n,_.T=null,n=vc,vc=null;var i=Ba,o=ma;if(wt=0,Pl=Ba=null,ma=0,(Be&6)!==0)throw Error(c(331));var u=Be;if(Be|=4,ah(i.current),eh(i,i.current,o,n),Be=u,Zi(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(Vt,i)}catch{}return!0}finally{R.p=l,_.T=a,wh(e,t)}}function Th(e,t,n){t=kn(n,t),t=Ir(e.stateNode,t,2),e=La(e,t,2),e!==null&&(Gn(e,2),Wn(e))}function Xe(e,t,n){if(e.tag===3)Th(e,e,n);else for(;t!==null;){if(t.tag===3){Th(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ha===null||!Ha.has(a))){e=kn(n,e),n=Ef(2),a=La(t,n,2),a!==null&&(jf(n,a,t,e),Gn(a,2),Wn(a));break}}t=t.return}}function Tc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new hg;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(pc=!0,l.add(n),e=yg.bind(null,e,t,n),t.then(e,e))}function yg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ze===e&&(ze&n)===n&&(rt===4||rt===3&&(ze&62914560)===ze&&300>Ue()-eo?(Be&2)===0&&ei(e,0):gc|=n,Il===ze&&(Il=0)),Wn(e)}function Eh(e,t){t===0&&(t=qt()),e=rl(e,t),e!==null&&(Gn(e,t),Wn(e))}function vg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Eh(e,n)}function xg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Eh(e,n)}function wg(e,t){return Ht(e,t)}var oo=null,ni=null,Ec=!1,ro=!1,jc=!1,qa=0;function Wn(e){e!==ni&&e.next===null&&(ni===null?oo=ni=e:ni=ni.next=e),ro=!0,Ec||(Ec=!0,Tg())}function Zi(e,t){if(!jc&&ro){jc=!0;do for(var n=!1,a=oo;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=l&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Ch(a,i))}else i=ze,i=Ie(a,a===Ze?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Te(a,i)||(n=!0,Ch(a,i));a=a.next}while(n);jc=!1}}function Sg(){jh()}function jh(){ro=Ec=!1;var e=0;qa!==0&&Ng()&&(e=qa);for(var t=Ue(),n=null,a=oo;a!==null;){var l=a.next,i=kh(a,t);i===0?(a.next=null,n===null?oo=l:n.next=l,l===null&&(ni=n)):(n=a,(e!==0||(i&3)!==0)&&(ro=!0)),a=l}wt!==0&&wt!==5||Zi(e),qa!==0&&(qa=0)}function kh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-$e(i),u=1<<o,y=l[o];y===-1?((u&n)===0||(u&a)!==0)&&(l[o]=Fe(u,t)):y<=t&&(e.expiredLanes|=u),i&=~u}if(t=Ze,n=ze,n=Ie(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&xe(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Te(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&xe(a),jl(n)){case 2:case 8:n=rn;break;case 32:n=Hn;break;case 268435456:n=Yn;break;default:n=Hn}return a=Mh.bind(null,e),n=Ht(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&xe(a),e.callbackPriority=2,e.callbackNode=null,2}function Mh(e,t){if(wt!==0&&wt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var a=ze;return a=Ie(e,e===Ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(rh(e,a,t),kh(e,Ue()),e.callbackNode!=null&&e.callbackNode===n?Mh.bind(null,e):null)}function Ch(e,t){if(so())return null;rh(e,t,!0)}function Tg(){_g(function(){(Be&6)!==0?Ht(On,Sg):jh()})}function kc(){if(qa===0){var e=ql;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),qa=e}return qa}function Ah(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mi(""+e)}function Dh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Eg(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Ah((l[Dt]||null).action),o=a.submitter;o&&(t=(t=o[Dt]||null)?Ah(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new xs("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(qa!==0){var y=o?Dh(l,o):new FormData(l);Qr(n,{pending:!0,data:y,method:l.method,action:i},null,y)}}else typeof i=="function"&&(u.preventDefault(),y=o?Dh(l,o):new FormData(l),Qr(n,{pending:!0,data:y,method:l.method,action:i},i,y))},currentTarget:l}]})}}for(var Mc=0;Mc<cr.length;Mc++){var Cc=cr[Mc],jg=Cc.toLowerCase(),kg=Cc[0].toUpperCase()+Cc.slice(1);Bn(jg,"on"+kg)}Bn(sd,"onAnimationEnd"),Bn(od,"onAnimationIteration"),Bn(rd,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Yp,"onTransitionRun"),Bn(Xp,"onTransitionStart"),Bn(Gp,"onTransitionCancel"),Bn(cd,"onTransitionEnd"),Yt("onMouseEnter",["mouseout","mouseover"]),Yt("onMouseLeave",["mouseout","mouseover"]),Yt("onPointerEnter",["pointerout","pointerover"]),Yt("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki));function zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var u=a[o],y=u.instance,A=u.currentTarget;if(u=u.listener,y!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=A;try{i(l)}catch(H){Ts(H)}l.currentTarget=null,i=y}else for(o=0;o<a.length;o++){if(u=a[o],y=u.instance,A=u.currentTarget,u=u.listener,y!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=A;try{i(l)}catch(H){Ts(H)}l.currentTarget=null,i=y}}}}function De(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var a=e+"__bubble";n.has(a)||(Lh(t,e,2,!1),n.add(a))}function Ac(e,t,n){var a=0;t&&(a|=4),Lh(n,e,a,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[co]){e[co]=!0,hs.forEach(function(n){n!=="selectionchange"&&(Mg.has(n)||Ac(n,!1,e),Ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Ac("selectionchange",!1,t))}}function Lh(e,t,n,a){switch(om(t)){case 2:var l=tb;break;case 8:l=nb;break;default:l=Vc}n=l.bind(null,t,n,e),l=void 0,!Jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function zc(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var u=a.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=a.return;o!==null;){var y=o.tag;if((y===3||y===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=xa(u),o===null)return;if(y=o.tag,y===5||y===6||y===26||y===27){a=i=o;continue e}u=u.parentNode}}a=a.return}$u(function(){var A=i,H=Ko(n),Y=[];e:{var D=ud.get(e);if(D!==void 0){var z=xs,ae=e;switch(e){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":z=xp;break;case"focusin":ae="focus",z=er;break;case"focusout":ae="blur",z=er;break;case"beforeblur":case"afterblur":z=er;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Tp;break;case sd:case od:case rd:z=dp;break;case cd:z=jp;break;case"scroll":case"scrollend":z=sp;break;case"wheel":z=Mp;break;case"copy":case"cut":case"paste":z=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=qu;break;case"toggle":case"beforetoggle":z=Ap}var be=(t&4)!==0,Qe=!be&&(e==="scroll"||e==="scrollend"),E=be?D!==null?D+"Capture":null:D;be=[];for(var S=A,C;S!==null;){var U=S;if(C=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||C===null||E===null||(U=gi(S,E),U!=null&&be.push(Fi(S,U,C))),Qe)break;S=S.return}0<be.length&&(D=new z(D,ae,null,n,H),Y.push({event:D,listeners:be}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",D&&n!==pi&&(ae=n.relatedTarget||n.fromElement)&&(xa(ae)||ae[Vn]))break e;if((z||D)&&(D=H.window===H?H:(D=H.ownerDocument)?D.defaultView||D.parentWindow:window,z?(ae=n.relatedTarget||n.toElement,z=A,ae=ae?xa(ae):null,ae!==null&&(Qe=b(ae),be=ae.tag,ae!==Qe||be!==5&&be!==27&&be!==6)&&(ae=null)):(z=null,ae=A),z!==ae)){if(be=Bu,U="onMouseLeave",E="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(be=qu,U="onPointerLeave",E="onPointerEnter",S="pointer"),Qe=z==null?D:Sa(z),C=ae==null?D:Sa(ae),D=new be(U,S+"leave",z,n,H),D.target=Qe,D.relatedTarget=C,U=null,xa(H)===A&&(be=new be(E,S+"enter",ae,n,H),be.target=C,be.relatedTarget=Qe,U=be),Qe=U,z&&ae)t:{for(be=Cg,E=z,S=ae,C=0,U=E;U;U=be(U))C++;U=0;for(var fe=S;fe;fe=be(fe))U++;for(;0<C-U;)E=be(E),C--;for(;0<U-C;)S=be(S),U--;for(;C--;){if(E===S||S!==null&&E===S.alternate){be=E;break t}E=be(E),S=be(S)}be=null}else be=null;z!==null&&Nh(Y,D,z,be,!1),ae!==null&&Qe!==null&&Nh(Y,Qe,ae,be,!0)}}e:{if(D=A?Sa(A):window,z=D.nodeName&&D.nodeName.toLowerCase(),z==="select"||z==="input"&&D.type==="file")var Oe=Fu;else if(Zu(D))if(Ju)Oe=Bp;else{Oe=Op;var ie=$p}else z=D.nodeName,!z||z.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?A&&st(A.elementType)&&(Oe=Fu):Oe=Hp;if(Oe&&(Oe=Oe(e,A))){Ku(Y,Oe,n,H);break e}ie&&ie(e,D,A),e==="focusout"&&A&&D.type==="number"&&A.memoizedProps.value!=null&&N(D,"number",D.value)}switch(ie=A?Sa(A):window,e){case"focusin":(Zu(ie)||ie.contentEditable==="true")&&(Nl=ie,sr=A,Ei=null);break;case"focusout":Ei=sr=Nl=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,ld(Y,n,H);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":ld(Y,n,H)}var ke;if(nr)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Ll?Vu(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(Yu&&n.locale!=="ko"&&(Ll||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Ll&&(ke=Ou()):(ja=H,Wo="value"in ja?ja.value:ja.textContent,Ll=!0)),ie=uo(A,Le),0<ie.length&&(Le=new Uu(Le,e,null,n,H),Y.push({event:Le,listeners:ie}),ke?Le.data=ke:(ke=Qu(n),ke!==null&&(Le.data=ke)))),(ke=zp?Lp(e,n):Np(e,n))&&(Le=uo(A,"onBeforeInput"),0<Le.length&&(ie=new Uu("onBeforeInput","beforeinput",null,n,H),Y.push({event:ie,listeners:Le}),ie.data=ke)),Eg(Y,e,A,n,H)}zh(Y,t)})}function Fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=gi(e,n),l!=null&&a.unshift(Fi(e,l,i)),l=gi(e,t),l!=null&&a.push(Fi(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Cg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nh(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var u=n,y=u.alternate,A=u.stateNode;if(u=u.tag,y!==null&&y===a)break;u!==5&&u!==26&&u!==27||A===null||(y=A,l?(A=gi(n,i),A!=null&&o.unshift(Fi(n,A,y))):l||(A=gi(n,i),A!=null&&o.push(Fi(n,A,y)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ag=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function Rh(e){return(typeof e=="string"?e:""+e).replace(Ag,`
`).replace(Dg,"")}function _h(e,t){return t=Rh(t),Rh(e)===t}function Ve(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ce(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ce(e,""+a);break;case"className":al(e,"class",a);break;case"tabIndex":al(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":al(e,n,a);break;case"style":it(e,a,i);break;case"data":if(t!=="object"){al(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=mi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ve(e,t,"name",l.name,l,null),Ve(e,t,"formEncType",l.formEncType,l,null),Ve(e,t,"formMethod",l.formMethod,l,null),Ve(e,t,"formTarget",l.formTarget,l,null)):(Ve(e,t,"encType",l.encType,l,null),Ve(e,t,"method",l.method,l,null),Ve(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=mi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=En);break;case"onScroll":a!=null&&De("scroll",e);break;case"onScrollEnd":a!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=mi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":De("beforetoggle",e),De("toggle",e),nl(e,"popover",a);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":nl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Nu.get(n)||n,nl(e,n,a))}}function Lc(e,t,n,a,l,i){switch(n){case"style":it(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ce(e,a):(typeof a=="number"||typeof a=="bigint")&&ce(e,""+a);break;case"onScroll":a!=null&&De("scroll",e);break;case"onScrollEnd":a!=null&&De("scrollend",e);break;case"onClick":a!=null&&(e.onclick=En);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ms.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Dt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):nl(e,n,a)}}}function Rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ve(e,t,i,o,n,null)}}l&&Ve(e,t,"srcSet",n.srcSet,n,null),a&&Ve(e,t,"src",n.src,n,null);return;case"input":De("invalid",e);var u=i=o=l=null,y=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var H=n[a];if(H!=null)switch(a){case"name":l=H;break;case"type":o=H;break;case"checked":y=H;break;case"defaultChecked":A=H;break;case"value":i=H;break;case"defaultValue":u=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:Ve(e,t,a,H,n,null)}}x(e,i,u,y,A,o,l,!1);return;case"select":De("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:Ve(e,t,l,u,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Z(e,!!a,t,!1):n!=null&&Z(e,!!a,n,!0);return;case"textarea":De("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:Ve(e,t,o,u,n,null)}de(e,a,l,i);return;case"option":for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null)&&(y==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ve(e,t,y,a,n,null));return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(a=0;a<Ki.length;a++)De(Ki[a],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ve(e,t,A,a,n,null)}return;default:if(st(t)){for(H in n)n.hasOwnProperty(H)&&(a=n[H],a!==void 0&&Lc(e,t,H,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&Ve(e,t,u,a,n,null))}function zg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,u=null,y=null,A=null,H=null;for(z in n){var Y=n[z];if(n.hasOwnProperty(z)&&Y!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":y=Y;default:a.hasOwnProperty(z)||Ve(e,t,z,null,a,Y)}}for(var D in a){var z=a[D];if(Y=n[D],a.hasOwnProperty(D)&&(z!=null||Y!=null))switch(D){case"type":i=z;break;case"name":l=z;break;case"checked":A=z;break;case"defaultChecked":H=z;break;case"value":o=z;break;case"defaultValue":u=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:z!==Y&&Ve(e,t,D,z,a,Y)}}h(e,o,u,y,A,H,i,l);return;case"select":z=o=u=D=null;for(i in n)if(y=n[i],n.hasOwnProperty(i)&&y!=null)switch(i){case"value":break;case"multiple":z=y;default:a.hasOwnProperty(i)||Ve(e,t,i,null,a,y)}for(l in a)if(i=a[l],y=n[l],a.hasOwnProperty(l)&&(i!=null||y!=null))switch(l){case"value":D=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==y&&Ve(e,t,l,i,a,y)}t=u,n=o,a=z,D!=null?Z(e,!!n,D,!1):!!a!=!!n&&(t!=null?Z(e,!!n,t,!0):Z(e,!!n,n?[]:"",!1));return;case"textarea":z=D=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Ve(e,t,u,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":D=l;break;case"defaultValue":z=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&Ve(e,t,o,l,a,i)}F(e,D,z);return;case"option":for(var ae in n)D=n[ae],n.hasOwnProperty(ae)&&D!=null&&!a.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:Ve(e,t,ae,null,a,D));for(y in a)D=a[y],z=n[y],a.hasOwnProperty(y)&&D!==z&&(D!=null||z!=null)&&(y==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":Ve(e,t,y,D,a,z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in n)D=n[be],n.hasOwnProperty(be)&&D!=null&&!a.hasOwnProperty(be)&&Ve(e,t,be,null,a,D);for(A in a)if(D=a[A],z=n[A],a.hasOwnProperty(A)&&D!==z&&(D!=null||z!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Ve(e,t,A,D,a,z)}return;default:if(st(t)){for(var Qe in n)D=n[Qe],n.hasOwnProperty(Qe)&&D!==void 0&&!a.hasOwnProperty(Qe)&&Lc(e,t,Qe,void 0,a,D);for(H in a)D=a[H],z=n[H],!a.hasOwnProperty(H)||D===z||D===void 0&&z===void 0||Lc(e,t,H,D,a,z);return}}for(var E in n)D=n[E],n.hasOwnProperty(E)&&D!=null&&!a.hasOwnProperty(E)&&Ve(e,t,E,null,a,D);for(Y in a)D=a[Y],z=n[Y],!a.hasOwnProperty(Y)||D===z||D==null&&z==null||Ve(e,t,Y,D,a,z)}function $h(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,u=l.duration;if(i&&u&&$h(o)){for(o=0,u=l.responseEnd,a+=1;a<n.length;a++){var y=n[a],A=y.startTime;if(A>u)break;var H=y.transferSize,Y=y.initiatorType;H&&$h(Y)&&(y=y.responseEnd,o+=H*(y<u?1:(u-A)/(y-A)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nc=null,Rc=null;function fo(e){return e.nodeType===9?e:e.ownerDocument}function Oh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $c=null;function Ng(){var e=window.event;return e&&e.type==="popstate"?e===$c?!1:($c=e,!0):($c=null,!1)}var Bh=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,_g=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(e){return Uh.resolve(null).then(e).catch($g)}:Bh;function $g(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function qh(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),si(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ji(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ji(n);for(var i=n.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[va]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Ji(e.ownerDocument.body);n=l}while(n);si(t)}function Yh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Oc(n),Al(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Og(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[va])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function Hg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zn(e.nextSibling),e===null))return null;return e}function Xh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zn(e.nextSibling),e===null))return null;return e}function Hc(e){return e.data==="$?"||e.data==="$~"}function Bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Bg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Uc=null;function Gh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Vh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Qh(e,t,n){switch(t=fo(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ji(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Al(e)}var Ln=new Map,Zh=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=R.d;R.d={f:Ug,r:qg,D:Yg,C:Xg,L:Gg,m:Vg,X:Zg,S:Qg,M:Kg};function Ug(){var e=pa.f(),t=ao();return e||t}function qg(e){var t=wa(e);t!==null&&t.tag===5&&t.type==="form"?uf(t):pa.r(e)}var ai=typeof document>"u"?null:document;function Kh(e,t,n){var a=ai;if(a&&typeof t=="string"&&t){var l=It(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Zh.has(l)||(Zh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Rt(t,"link",e),lt(t),a.head.appendChild(t)))}}function Yg(e){pa.D(e),Kh("dns-prefetch",e,null)}function Xg(e,t){pa.C(e,t),Kh("preconnect",e,t)}function Gg(e,t,n){pa.L(e,t,n);var a=ai;if(a&&e&&t){var l='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+It(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+It(n.imageSizes)+'"]')):l+='[href="'+It(e)+'"]';var i=l;switch(t){case"style":i=li(e);break;case"script":i=ii(e)}Ln.has(i)||(e=$({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ln.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Wi(i))||t==="script"&&a.querySelector(Ii(i))||(t=a.createElement("link"),Rt(t,"link",e),lt(t),a.head.appendChild(t)))}}function Vg(e,t){pa.m(e,t);var n=ai;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+It(a)+'"][href="'+It(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ii(e)}if(!Ln.has(i)&&(e=$({rel:"modulepreload",href:e},t),Ln.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ii(i)))return}a=n.createElement("link"),Rt(a,"link",e),lt(a),n.head.appendChild(a)}}}function Qg(e,t,n){pa.S(e,t,n);var a=ai;if(a&&e){var l=dn(a).hoistableStyles,i=li(e);t=t||"default";var o=l.get(i);if(!o){var u={loading:0,preload:null};if(o=a.querySelector(Wi(i)))u.loading=5;else{e=$({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ln.get(i))&&qc(e,n);var y=o=a.createElement("link");lt(y),Rt(y,"link",e),y._p=new Promise(function(A,H){y.onload=A,y.onerror=H}),y.addEventListener("load",function(){u.loading|=1}),y.addEventListener("error",function(){u.loading|=2}),u.loading|=4,mo(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(i,o)}}}function Zg(e,t){pa.X(e,t);var n=ai;if(n&&e){var a=dn(n).hoistableScripts,l=ii(e),i=a.get(l);i||(i=n.querySelector(Ii(l)),i||(e=$({src:e,async:!0},t),(t=Ln.get(l))&&Yc(e,t),i=n.createElement("script"),lt(i),Rt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Kg(e,t){pa.M(e,t);var n=ai;if(n&&e){var a=dn(n).hoistableScripts,l=ii(e),i=a.get(l);i||(i=n.querySelector(Ii(l)),i||(e=$({src:e,async:!0,type:"module"},t),(t=Ln.get(l))&&Yc(e,t),i=n.createElement("script"),lt(i),Rt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Fh(e,t,n,a){var l=(l=ft.current)?ho(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=li(n.href),n=dn(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=li(n.href);var i=dn(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Wi(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ln.set(e,n),i||Fg(l,e,n,o.state))),t&&a===null)throw Error(c(528,""));return o}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ii(n),n=dn(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function li(e){return'href="'+It(e)+'"'}function Wi(e){return'link[rel="stylesheet"]['+e+"]"}function Jh(e){return $({},e,{"data-precedence":e.precedence,precedence:null})}function Fg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Rt(t,"link",n),lt(t),e.head.appendChild(t))}function ii(e){return'[src="'+It(e)+'"]'}function Ii(e){return"script[async]"+e}function Wh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(a)return t.instance=a,lt(a),a;var l=$({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),lt(a),Rt(a,"style",l),mo(a,n.precedence,e),t.instance=a;case"stylesheet":l=li(n.href);var i=e.querySelector(Wi(l));if(i)return t.state.loading|=4,t.instance=i,lt(i),i;a=Jh(n),(l=Ln.get(l))&&qc(a,l),i=(e.ownerDocument||e).createElement("link"),lt(i);var o=i;return o._p=new Promise(function(u,y){o.onload=u,o.onerror=y}),Rt(i,"link",a),t.state.loading|=4,mo(i,n.precedence,e),t.instance=i;case"script":return i=ii(n.src),(l=e.querySelector(Ii(i)))?(t.instance=l,lt(l),l):(a=n,(l=Ln.get(i))&&(a=$({},n),Yc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),lt(l),Rt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,mo(a,n.precedence,e));return t.instance}function mo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var u=a[o];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var po=null;function Ih(e,t,n){if(po===null){var a=new Map,l=po=new Map;l.set(n,a)}else l=po,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[va]||i[vt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=a.get(o);u?u.push(i):a.set(o,[i])}}return a}function Ph(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Jg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function em(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Wg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=li(a.href),i=t.querySelector(Wi(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=go.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,lt(i);return}i=t.ownerDocument||t,a=Jh(a),(l=Ln.get(l))&&qc(a,l),i=i.createElement("link"),lt(i);var o=i;o._p=new Promise(function(u,y){o.onload=u,o.onerror=y}),Rt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=go.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Xc=0;function Ig(e,t){return e.stylesheets&&e.count===0&&yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Xc===0&&(Xc=62500*Lg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Xc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function yo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,t.forEach(Pg,e),bo=null,go.call(e))}function Pg(e,t){if(!(t.state.loading&4)){var n=bo.get(e);if(n)var a=n.get(null);else{n=new Map,bo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=go.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Pi={$$typeof:me,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function eb(e,t,n,a,l,i,o,u,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function tm(e,t,n,a,l,i,o,u,y,A,H,Y){return e=new eb(e,t,n,o,y,A,H,Y,u),t=1,i===!0&&(t|=24),i=hn(3,null,null,t),e.current=i,i.stateNode=e,t=Sr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},kr(i),e}function nm(e){return e?(e=$l,e):$l}function am(e,t,n,a,l,i){l=nm(l),a.context===null?a.context=l:a.pendingContext=l,a=za(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=La(e,a,t),n!==null&&(ln(n,e,t),zi(n,e,t))}function lm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gc(e,t){lm(e,t),(e=e.alternate)&&lm(e,t)}function im(e){if(e.tag===13||e.tag===31){var t=rl(e,67108864);t!==null&&ln(t,e,67108864),Gc(e,67108864)}}function sm(e){if(e.tag===13||e.tag===31){var t=yn();t=ya(t);var n=rl(e,t);n!==null&&ln(n,e,t),Gc(e,t)}}var vo=!0;function tb(e,t,n,a){var l=_.T;_.T=null;var i=R.p;try{R.p=2,Vc(e,t,n,a)}finally{R.p=i,_.T=l}}function nb(e,t,n,a){var l=_.T;_.T=null;var i=R.p;try{R.p=8,Vc(e,t,n,a)}finally{R.p=i,_.T=l}}function Vc(e,t,n,a){if(vo){var l=Qc(a);if(l===null)zc(e,t,a,xo,n),rm(e,a);else if(lb(l,e,t,n,a))a.stopPropagation();else if(rm(e,a),t&4&&-1<ab.indexOf(e)){for(;l!==null;){var i=wa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ce(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var y=1<<31-$e(o);u.entanglements[1]|=y,o&=~y}Wn(i),(Be&6)===0&&(to=Ue()+500,Zi(0))}}break;case 31:case 13:u=rl(i,2),u!==null&&ln(u,i,2),ao(),Gc(i,2)}if(i=Qc(a),i===null&&zc(e,t,a,xo,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else zc(e,t,a,null,n)}}function Qc(e){return e=Ko(e),Zc(e)}var xo=null;function Zc(e){if(xo=null,e=xa(e),e!==null){var t=b(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xo=e,null}function om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bt()){case On:return 2;case rn:return 8;case Hn:case Sn:return 32;case Yn:return 268435456;default:return 32}default:return 32}}var Kc=!1,Xa=null,Ga=null,Va=null,es=new Map,ts=new Map,Qa=[],ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rm(e,t){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function ns(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=wa(t),t!==null&&im(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lb(e,t,n,a,l){switch(t){case"focusin":return Xa=ns(Xa,e,t,n,a,l),!0;case"dragenter":return Ga=ns(Ga,e,t,n,a,l),!0;case"mouseover":return Va=ns(Va,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return es.set(i,ns(es.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,ts.set(i,ns(ts.get(i)||null,e,t,n,a,l)),!0}return!1}function cm(e){var t=xa(e.target);if(t!==null){var n=b(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Ml(e.priority,function(){sm(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,Ml(e.priority,function(){sm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);pi=a,n.target.dispatchEvent(a),pi=null}else return t=wa(n),t!==null&&im(t),e.blockedOn=n,!1;t.shift()}return!0}function um(e,t,n){wo(e)&&n.delete(t)}function ib(){Kc=!1,Xa!==null&&wo(Xa)&&(Xa=null),Ga!==null&&wo(Ga)&&(Ga=null),Va!==null&&wo(Va)&&(Va=null),es.forEach(um),ts.forEach(um)}function So(e,t){e.blockedOn===t&&(e.blockedOn=null,Kc||(Kc=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,ib)))}var To=null;function dm(e){To!==e&&(To=e,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){To===e&&(To=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Zc(a||n)===null)continue;break}var i=wa(n);i!==null&&(e.splice(t,3),t-=3,Qr(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function si(e){function t(y){return So(y,e)}Xa!==null&&So(Xa,e),Ga!==null&&So(Ga,e),Va!==null&&So(Va,e),es.forEach(t),ts.forEach(t);for(var n=0;n<Qa.length;n++){var a=Qa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Qa.length&&(n=Qa[0],n.blockedOn===null);)cm(n),n.blockedOn===null&&Qa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Dt]||null;if(typeof i=="function")o||dm(n);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Dt]||null)u=o.formAction;else if(Zc(l)!==null)continue}else u=o.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),dm(n)}}}function fm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Fc(e){this._internalRoot=e}Eo.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=yn();am(n,a,e,t,null,null)},Eo.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;am(e.current,2,null,e,null,null),ao(),t[Vn]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=kl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qa.length&&t!==0&&t<Qa[n].priority;n++);Qa.splice(n,0,e),n===0&&cm(e)}};var hm=r.version;if(hm!=="19.2.4")throw Error(c(527,hm,"19.2.4"));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=X(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var sb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Vt=jo.inject(sb),re=jo}catch{}}return ls.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,a="",l=xf,i=wf,o=Sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tm(e,1,!1,null,null,n,a,null,l,i,o,fm),e[Vn]=t.current,Dc(e),new Fc(t)},ls.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var a=!1,l="",i=xf,o=wf,u=Sf,y=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),t=tm(e,1,!0,t,n??null,a,l,y,i,o,u,fm),t.context=nm(null),n=t.current,a=yn(),a=ya(a),l=za(a),l.callback=null,La(n,l,a),n=a,t.current.lanes=n,Gn(t,n),Wn(t),e[Vn]=t.current,Dc(e),new Eo(t)},ls.version="19.2.4",ls}var jm;function oy(){if(jm)return eu.exports;jm=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(r){console.error(r)}}return m(),eu.exports=sy(),eu.exports}var ry=oy();const cy=ku(ry);function uy({onNew:m,onOpen:r,onSave:d,onPreviewChange:c,currentPreviewMode:f,onImport:b,onExport:g,onAbout:v,onMarkdownHelp:k,onSettings:X,onWritingMode:B,currentWritingMode:$,hasCurrentFile:M,hasUnsavedChanges:G,hasTextSelected:O,hasFiles:Q,fileCount:V,onStyleChange:w,onEditAction:J,files:me,currentFileId:W,onSwitchFile:I,onCloseFile:T,onShowCommandPalette:j,showLintGutter:L,onLinterToggle:q,showLineNumbers:ne,onLineNumbersToggle:ee,showHeadingGutter:oe,onHeadingGutterToggle:se,appMode:K,onAppModeChange:P,activeRightTab:_,onTogglePanel:R,showWritingStats:le,onWritingStatsToggle:we,floatingPanels:ye=[],dockedPanels:ge=[],canUndo:Me=!1,canRedo:pe=!1,showCommandPalette:Se,showMarkdownHelp:Ot}){const[ft,St]=p.useState(!1),[tt,yt]=p.useState(!1),[je,ht]=p.useState({topLine:!1,bottomLine:!1,titleBar:!1}),[Xt,El]=p.useState({topLine:[],bottomLine:[],titleBar:[]}),Ct=p.useRef(null),Gt=p.useRef(null),Jt=p.useRef(null),Tt={flexWrap:"nowrap",flexShrink:0,display:"flex",alignItems:"center"};p.useEffect(()=>{if(!ft)return;const xe=nt=>{Ct.current&&!Ct.current.contains(nt.target)&&St(!1)};return document.addEventListener("mousedown",xe),()=>document.removeEventListener("mousedown",xe)},[ft]),p.useEffect(()=>{if(!Gt.current)return;const xe=()=>{if(!Gt.current)return;const On=Gt.current.querySelector(".ribbon-title-bar"),rn=Gt.current.querySelector(".ribbon-top-line"),Hn=Gt.current.querySelector(".ribbon-bottom-line"),Sn=window.innerWidth<=768,Yn={titleBar:!1,topLine:!1,bottomLine:!1},Tn={titleBar:[],topLine:[],bottomLine:[]};if(On){const ve=On.querySelector(".ribbon-title-left");if(ve){ve.querySelectorAll("button[aria-label], .fui-ToolbarDivider").forEach(Ce=>{Ce.style.display=""});const re=ve.querySelector(".ribbon-file-pill"),at=re?.querySelector(".ribbon-file-pill-name");re&&re.classList.remove("compact"),at&&(at.style.setProperty("display","inline-block","important"),at.style.setProperty("visibility","visible","important"),at.style.setProperty("max-width","none","important"));const $e=ve.style.width,Xn=ve.style.flex,cn=ve.style.overflow,un=ve.clientWidth;ve.style.flex="0 0 auto",ve.style.width="max-content",ve.style.overflow="visible";const Ut=ve.offsetWidth;ve.style.flex=Xn,ve.style.width=$e,ve.style.overflow=cn;const ct=Ut>un-5;ct!==tt&&yt(ct),ct?(re&&re.classList.add("compact"),at&&(at.style.display="none")):(re&&re.classList.remove("compact"),at&&(at.style.display=""));const ue=ve.scrollWidth>ve.clientWidth+2;if(Yn.titleBar=ue&&!Sn,ue&&!Sn){const Ce=Array.from(ve.querySelectorAll("button[aria-label]")).filter(Fe=>Fe.getAttribute("aria-label")!=="More options"),Te=ve.getBoundingClientRect().right-100;for(let Fe=Ce.length-1;Fe>=0;Fe--){const qt=Ce[Fe],At=qt.getBoundingClientRect(),Gn=qt.getAttribute("aria-label");Gn&&At.right>Te&&(Tn.titleBar.unshift({ariaLabel:Gn,type:"title"}),qt.style.display="none")}}}}if(rn){const ve=rn.querySelector(".ribbon-section-content");if(ve){ve.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]').forEach(ue=>{ue.style.display=""});const re=ve.querySelectorAll(".ribbon-group");re.forEach(ue=>{const Ce=ue.querySelectorAll("button[aria-label], select"),Ie=Array.from(Ce).some(Te=>Te.style.display!=="none");ue.style.display=Ie?"":"none"});const at=ve.style.overflow;ve.style.overflow="visible";const $e=ve.scrollWidth,Xn=ve.clientWidth,cn=$e>Xn+2;if(Yn.topLine=cn&&!Sn,cn&&!Sn){const ue=Array.from(ve.querySelectorAll("button[aria-label], .ribbon-group select")).filter(Te=>Te.getAttribute("aria-label")!=="More options"),Ie=ve.getBoundingClientRect().right-80;for(let Te=ue.length-1;Te>=0;Te--){const Fe=ue[Te],qt=Fe.getBoundingClientRect(),At=Fe.getAttribute("aria-label");At&&qt.right>Ie&&(Tn.topLine.unshift({ariaLabel:At,type:"top"}),Fe.style.display="none")}re.forEach(Te=>{const Fe=Te.querySelectorAll("button[aria-label], select"),qt=Array.from(Fe).some(At=>At.style.display!=="none");Te.style.display=qt?"":"none"})}const un=Array.from(ve.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]')).filter(ue=>ue.getAttribute("aria-label")!=="More options"&&ue.offsetParent!==null);let Ut=!1;for(let ue=un.length-1;ue>=0;ue--){const Ce=un[ue];Ce.classList.contains("fui-ToolbarDivider")||Ce.getAttribute("role")==="separator"||Ce.classList.contains("ribbon-divider")?Ut||(Ce.style.display="none"):Ce.style.display!=="none"&&(Ut=!0)}let ct=!0;un.forEach(ue=>{if(ue.style.display==="none")return;ue.classList.contains("fui-ToolbarDivider")||ue.getAttribute("role")==="separator"||ue.classList.contains("ribbon-divider")?ct?ue.style.display="none":ct=!0:ct=!1}),ve.style.overflow=at}}if(Hn){const ve=Hn.querySelector(".ribbon-section-content");if(ve){ve.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]').forEach(ue=>{ue.style.display=""});const re=ve.querySelectorAll(".ribbon-group");re.forEach(ue=>{const Ce=ue.querySelectorAll("button[aria-label], select"),Ie=Array.from(Ce).some(Te=>Te.style.display!=="none");ue.style.display=Ie?"":"none"});const at=ve.style.overflow;ve.style.overflow="visible";const $e=ve.scrollWidth,Xn=ve.clientWidth,cn=$e>Xn+2;if(Yn.bottomLine=cn&&!Sn,cn&&!Sn){const ue=Array.from(ve.querySelectorAll("button[aria-label], .ribbon-group select")).filter(Te=>Te.getAttribute("aria-label")!=="More options"),Ie=ve.getBoundingClientRect().right-80;for(let Te=ue.length-1;Te>=0;Te--){const Fe=ue[Te],qt=Fe.getBoundingClientRect(),At=Fe.getAttribute("aria-label")||(Fe.tagName==="SELECT"?"Heading Style":null);At&&qt.right>Ie&&(Tn.bottomLine.unshift({ariaLabel:At,type:"bottom"}),Fe.style.display="none")}re.forEach(Te=>{const Fe=Te.querySelectorAll("button[aria-label], select"),qt=Array.from(Fe).some(At=>At.style.display!=="none");Te.style.display=qt?"":"none"})}const un=Array.from(ve.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]')).filter(ue=>ue.getAttribute("aria-label")!=="More options"&&ue.offsetParent!==null);let Ut=!1;for(let ue=un.length-1;ue>=0;ue--){const Ce=un[ue];Ce.classList.contains("fui-ToolbarDivider")||Ce.getAttribute("role")==="separator"||Ce.classList.contains("ribbon-divider")?Ut||(Ce.style.display="none"):Ce.style.display!=="none"&&(Ut=!0)}let ct=!0;un.forEach(ue=>{if(ue.style.display==="none")return;ue.classList.contains("fui-ToolbarDivider")||ue.getAttribute("role")==="separator"||ue.classList.contains("ribbon-divider")?ct?ue.style.display="none":ct=!0:ct=!1}),ve.style.overflow=at}}ht(Yn),El(Tn)};xe();const nt=[setTimeout(xe,100),setTimeout(xe,300),setTimeout(xe,1e3)];Jt.current=new ResizeObserver(()=>{requestAnimationFrame(xe)}),Jt.current.observe(Gt.current),Gt.current.querySelectorAll(".ribbon-section-content").forEach(On=>{Jt.current.observe(On)});const Ue=Gt.current.querySelector(".ribbon-title-left");Ue&&Jt.current.observe(Ue);const Bt=()=>{requestAnimationFrame(xe)};return window.addEventListener("resize",Bt),()=>{nt.forEach(On=>clearTimeout(On)),Jt.current&&Jt.current.disconnect(),window.removeEventListener("resize",Bt)}},[Q,M,me,W,V,tt,K,f,L,ye,ge,O]);const el=me?.find(xe=>xe.id===W),wn=xe=>{const nt={New:{icon:s.jsx(oi,{}),onClick:()=>m("empty"),disabled:!1,toggleable:!1},"Open File":{icon:s.jsx(Co,{}),onClick:r,disabled:!1,toggleable:!1},Open:{icon:s.jsx(Co,{}),onClick:r,disabled:!1,toggleable:!1},Save:{icon:s.jsx(au,{}),onClick:d,disabled:!G,toggleable:!1},Import:{icon:s.jsx($m,{}),onClick:b,disabled:!1,toggleable:!1},Export:{icon:s.jsx(Pa,{}),onClick:()=>{},disabled:!Q,toggleable:!1},About:{icon:s.jsx(Lo,{}),onClick:v,disabled:!1,toggleable:!1},"Markdown Syntax Reference":{icon:s.jsx(pm,{}),onClick:k,disabled:!1,toggleable:!0,checked:Ot},Settings:{icon:s.jsx(lu,{}),onClick:X,disabled:!1,toggleable:!1},"Command Palette":{icon:s.jsx(xm,{}),onClick:j,disabled:!1,toggleable:!0,checked:Se},"Edit Mode":{icon:s.jsx(ko,{}),onClick:()=>P("edit"),disabled:!M,toggleable:!0,checked:K==="edit"},"Read Mode":{icon:s.jsx(mm,{}),onClick:()=>P("view"),disabled:!M,toggleable:!0,checked:K==="view"}},Et={Undo:{icon:s.jsx(os,{}),onClick:()=>J&&J("undo"),disabled:!M||!Me,toggleable:!1},Redo:{icon:s.jsx(No,{}),onClick:()=>J&&J("redo"),disabled:!M||!pe,toggleable:!1},Cut:{icon:s.jsx(iu,{}),onClick:()=>J&&J("cut"),disabled:!O,toggleable:!1},Copy:{icon:s.jsx(su,{}),onClick:()=>J&&J("copy"),disabled:!O,toggleable:!1},Paste:{icon:s.jsx(ou,{}),onClick:()=>J&&J("paste"),disabled:!M,toggleable:!1},Find:{icon:s.jsx(ru,{}),onClick:()=>J&&J("find"),disabled:!M,toggleable:!1},Replace:{icon:s.jsx(Ro,{}),onClick:()=>J&&J("replace"),disabled:!M,toggleable:!1},Linter:{icon:s.jsx(bm,{}),onClick:()=>q&&q(),disabled:!M,toggleable:!0,checked:L},"Toggle Line#":{icon:s.jsx(gm,{}),onClick:()=>ee&&ee(),disabled:!M,toggleable:!0,checked:ne},"Toggle Fold Gutter":{icon:s.jsx(Jc,{}),onClick:()=>se&&se(),disabled:!M,toggleable:!0,checked:oe},"Toggle Preview":{icon:s.jsx(ym,{}),onClick:()=>R("preview"),disabled:!M,toggleable:!0,checked:ye.includes("preview")||ge.includes("preview")},"Toggle Outline":{icon:s.jsx(Sl,{}),onClick:()=>R("outline"),disabled:!M,toggleable:!0,checked:ye.includes("outline")||ge.includes("outline")},"Toggle Property":{icon:s.jsx(Ao,{}),onClick:()=>R("property"),disabled:!M,toggleable:!0,checked:ye.includes("property")||ge.includes("property")},"Toggle MetaData":{icon:s.jsx(Ao,{}),onClick:()=>R("metadata"),disabled:!M,toggleable:!0,checked:ye.includes("metadata")||ge.includes("metadata")},"Toggle History":{icon:s.jsx(_o,{}),onClick:()=>R("history"),disabled:!M,toggleable:!0,checked:ye.includes("history")||ge.includes("history")},"Toggle Snippet":{icon:s.jsx(ci,{}),onClick:()=>R("snippet"),disabled:!M,toggleable:!0,checked:ye.includes("snippet")||ge.includes("snippet")},"Zen Mode":{icon:s.jsx(uu,{}),onClick:()=>B("zen"),disabled:!M,toggleable:!0,checked:$.zen.enabled},"Focus Mode":{icon:s.jsx(du,{}),onClick:()=>B("focus"),disabled:!M,toggleable:!0,checked:$.focus.enabled},"Typewriter Mode":{icon:s.jsx(fu,{}),onClick:()=>B("typewriter"),disabled:!M,toggleable:!0,checked:$.typewriter.enabled},"Toggle Stats":{icon:s.jsx(cu,{}),onClick:()=>we&&we(),disabled:!M,toggleable:!0,checked:le},"WYSIWYG Mode":{icon:s.jsx(vm,{}),onClick:()=>B("wysiwyg"),disabled:!M,toggleable:!0,checked:$.wysiwyg}},Ue={"Heading Style":{icon:s.jsx(ko,{}),onClick:()=>{},disabled:!O,toggleable:!1},Bold:{icon:s.jsx(ba,{}),onClick:()=>w&&w("bold"),disabled:!O,toggleable:!1},Italic:{icon:s.jsx(hu,{}),onClick:()=>w&&w("italic"),disabled:!O,toggleable:!1},Code:{icon:s.jsx(ri,{}),onClick:()=>w&&w("code"),disabled:!O,toggleable:!1},Strikethrough:{icon:s.jsx(mu,{}),onClick:()=>w&&w("strikethrough"),disabled:!O,toggleable:!1},"Bullet List":{icon:s.jsx($o,{}),onClick:()=>w&&w("bullet"),disabled:!O,toggleable:!1},"Numbered List":{icon:s.jsx(Sl,{}),onClick:()=>w&&w("numbered"),disabled:!O,toggleable:!1},Quote:{icon:s.jsx(bu,{}),onClick:()=>w&&w("quote"),disabled:!O,toggleable:!1},Link:{icon:s.jsx(yu,{}),onClick:()=>w&&w("link"),disabled:!O,toggleable:!1},Image:{icon:s.jsx(vu,{}),onClick:()=>w&&w("image"),disabled:!O,toggleable:!1},Table:{icon:s.jsx(xu,{}),onClick:()=>w&&w("table"),disabled:!M,toggleable:!1},"Code Block":{icon:s.jsx(ri,{}),onClick:()=>w&&w("codeblock"),disabled:!M,toggleable:!1},HR:{icon:s.jsx(Tu,{}),onClick:()=>w&&w("hr"),disabled:!M,toggleable:!1},"Task List":{icon:s.jsx(Su,{}),onClick:()=>w&&w("tasklist"),disabled:!M,toggleable:!1},Footnote:{icon:s.jsx(wu,{}),onClick:()=>w&&w("footnote"),disabled:!M,toggleable:!1},Highlight:{icon:s.jsx(xm,{}),onClick:()=>w&&w("highlight"),disabled:!O,toggleable:!1},Subscript:{icon:s.jsx(pu,{}),onClick:()=>w&&w("subscript"),disabled:!O,toggleable:!1},Superscript:{icon:s.jsx(gu,{}),onClick:()=>w&&w("superscript"),disabled:!O,toggleable:!1},Snippet:{icon:s.jsx(ci,{}),onClick:()=>R("snippet"),disabled:!M,toggleable:!0,checked:ye.includes("snippet")||ge.includes("snippet")}},Bt={...nt[xe],...Et[xe],...Ue[xe]};return Object.keys(Bt).length>0?Bt:null},Ht=(xe,nt)=>{if(xe.ariaLabel==="Open File"&&me&&me.length>0)return s.jsxs(Rm.Fragment,{children:[s.jsx(Ic,{}),me.map(Ue=>s.jsx(Ke,{icon:s.jsx(_m,{}),className:Ue.id===W?"ribbon-overflow-checked":"",onClick:()=>I&&I(Ue.id),children:Ue.name},`file-${Ue.id}`)),s.jsx(Ic,{})]},`files-group-${nt}`);if(xe.ariaLabel==="Heading Style")return s.jsxs(Ka,{children:[s.jsx(Fa,{children:s.jsx(Ke,{icon:s.jsx(ko,{}),disabled:!O,children:"Heading Style"})}),s.jsx(Ja,{children:s.jsxs(Wa,{children:[s.jsx(Ke,{onClick:()=>w&&w("h1"),children:"Heading 1"}),s.jsx(Ke,{onClick:()=>w&&w("h2"),children:"Heading 2"}),s.jsx(Ke,{onClick:()=>w&&w("h3"),children:"Heading 3"}),s.jsx(Ke,{onClick:()=>w&&w("h4"),children:"Heading 4"}),s.jsx(Ke,{onClick:()=>w&&w("h5"),children:"Heading 5"}),s.jsx(Ke,{onClick:()=>w&&w("h6"),children:"Heading 6"})]})})]},nt);const Et=wn(xe.ariaLabel);return Et?s.jsx(Ke,{icon:Et.icon,"aria-label":xe.ariaLabel,className:Et.toggleable&&Et.checked?"ribbon-overflow-checked":"",onClick:Et.onClick,disabled:Et.disabled,children:xe.ariaLabel},nt):null};return s.jsxs("div",{className:"ribbon-menu",ref:Gt,children:[s.jsxs("div",{className:"ribbon-title-bar",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch"},children:[s.jsxs("div",{className:"ribbon-title-left",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flex:1,minWidth:0},children:[s.jsx("div",{className:"ribbon-title-file-ops",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Nn,{style:Tt,children:[s.jsxs(Ka,{children:[s.jsx(he,{content:"Create a new markdown document",relationship:"label",children:s.jsx(Fa,{disableButtonEnhancement:!0,children:s.jsx(Ne,{"aria-label":"New",icon:s.jsx(oi,{}),appearance:"secondary"})})}),s.jsx(Ja,{children:s.jsxs(Wa,{children:[s.jsx(Ke,{onClick:()=>m("empty"),children:"Blank Document"}),s.jsx(Ke,{onClick:()=>m("meeting"),children:"Meeting Notes Template"}),s.jsx(Ke,{onClick:()=>m("blog"),children:"Blog Post Template"}),s.jsx(Ke,{onClick:()=>m("readme"),children:"README Template"})]})})]}),s.jsx(he,{content:"Open file from computer",relationship:"label",children:s.jsx(Ne,{"aria-label":"Open",icon:s.jsx(Co,{}),onClick:r,appearance:"secondary"})}),M&&s.jsx(he,{content:G?"Save current file":"No changes to save",relationship:"label",children:s.jsx(Ne,{"aria-label":"Save",icon:s.jsx(au,{}),onClick:d,appearance:"secondary",disabled:!G})}),Q&&s.jsxs(Ka,{children:[s.jsx(he,{content:"Export document",relationship:"label",children:s.jsx(Fa,{children:s.jsx(Ne,{"aria-label":"Export",icon:s.jsx(Pa,{}),appearance:"secondary"})})}),s.jsx(Ja,{children:s.jsxs(Wa,{children:[s.jsx(Ke,{onClick:()=>g("md"),children:"Export as Markdown (.md)"}),s.jsx(Ke,{onClick:()=>g("html"),children:"Export as HTML (.html)"}),s.jsx(Ke,{onClick:()=>g("pdf"),children:"Print / Export as PDF"}),s.jsx(Ke,{onClick:()=>g("doc"),children:"Export as Word (.doc)"}),s.jsx(Ke,{onClick:()=>g("epub"),children:"Export as EPUB (.epub)"}),s.jsx(Ke,{onClick:()=>g("pptx"),children:"Export as PowerPoint (.pptx)"})]})})]})]})}),s.jsx(Rn,{}),s.jsxs("div",{className:"ribbon-file-breadcrumb",ref:Ct,children:[s.jsxs("button",{className:`ribbon-file-pill ${tt?"compact":""}`,onClick:()=>St(xe=>!xe),"aria-haspopup":"listbox","aria-expanded":ft,"aria-label":"Open File",children:[s.jsx("span",{className:"ribbon-file-pill-name",children:el?el.name:"Open File"}),G&&s.jsx("span",{className:"ribbon-file-unsaved-dot","aria-label":"Unsaved changes"}),s.jsx(Jc,{className:`ribbon-file-chevron ${ft?"open":""}`})]}),ft&&s.jsx("div",{className:"ribbon-file-dropdown",role:"listbox","aria-label":"Open files",style:{position:"fixed",top:Ct.current?Ct.current.getBoundingClientRect().bottom+4:0,left:Ct.current?Ct.current.getBoundingClientRect().left:0,zIndex:99999},children:me&&me.length>0?me.map(xe=>s.jsxs("div",{className:`ribbon-file-dropdown-item ${xe.id===W?"active":""}`,role:"option","aria-selected":xe.id===W,onClick:()=>{I&&I(xe.id),St(!1)},children:[s.jsx("span",{className:"ribbon-file-dropdown-item-name",children:xe.name}),s.jsx("button",{className:"ribbon-file-dropdown-close","aria-label":`Close ${xe.name}`,onClick:nt=>{nt.stopPropagation(),T&&T(xe.id),me.length<=1&&St(!1)},children:s.jsx(cs,{})})]},xe.id)):s.jsx("div",{className:"ribbon-file-dropdown-empty",children:"No open files"})})]})]}),s.jsxs("div",{className:"ribbon-title-actions",children:[s.jsxs(Nn,{style:Tt,children:[M&&s.jsx(he,{content:K==="view"?"Switch to Edit Mode":"Switch to Read Mode",relationship:"label",children:s.jsx(Ne,{"aria-label":K==="view"?"Edit Mode":"Read Mode",icon:K==="view"?s.jsx(ko,{}):s.jsx(mm,{}),onClick:()=>P(K==="view"?"edit":"view"),appearance:"secondary"})}),s.jsx(he,{content:"Command Palette (Ctrl+P)",relationship:"label",children:s.jsx(Ft,{"aria-label":"Command Palette",icon:s.jsx(db,{}),onClick:j,checked:Se,appearance:"secondary"})}),s.jsx(he,{content:"Editor settings",relationship:"label",children:s.jsx(Ne,{"aria-label":"Settings",icon:s.jsx(lu,{}),onClick:X,appearance:"secondary"})}),s.jsx(he,{content:"Markdown Syntax Reference",relationship:"label",children:s.jsx(Ft,{"aria-label":"Markdown Syntax Reference",icon:s.jsx(pm,{}),onClick:k,checked:Ot,appearance:"secondary"})}),s.jsx(he,{content:"About MarkdownStudio",relationship:"label",children:s.jsx(Ne,{"aria-label":"About",icon:s.jsx(Lo,{}),onClick:v,appearance:"secondary"})})]}),je.titleBar&&Xt.titleBar.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(Rn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ka,{children:[s.jsx(Fa,{children:s.jsx(Ne,{"aria-label":"More options",icon:s.jsx(Wc,{}),appearance:"secondary"})}),s.jsx(Ja,{children:s.jsx(Wa,{children:Xt.titleBar.map(Ht)})})]})})]})]})]}),M&&s.jsx("div",{className:"ribbon-section ribbon-top-line",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%"},children:s.jsxs("div",{className:"ribbon-section-content",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch",alignItems:"center",flex:1},children:[K==="edit"&&s.jsxs("div",{className:"ribbon-group",children:[s.jsxs(Nn,{style:Tt,children:[s.jsx(he,{content:"Undo (Ctrl+Z)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Undo",icon:s.jsx(os,{}),onClick:()=>J&&J("undo"),appearance:"secondary",disabled:!M||!Me})}),s.jsx(he,{content:"Redo (Ctrl+Y)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Redo",icon:s.jsx(No,{}),onClick:()=>J&&J("redo"),appearance:"secondary",disabled:!M||!pe})})]}),s.jsxs(Nn,{style:Tt,children:[s.jsx(he,{content:"Cut (Ctrl+X)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Cut",icon:s.jsx(iu,{}),onClick:()=>J&&J("cut"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Copy (Ctrl+C)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Copy",icon:s.jsx(su,{}),onClick:()=>J&&J("copy"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Paste (Ctrl+V)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Paste",icon:s.jsx(ou,{}),onClick:()=>J&&J("paste"),appearance:"secondary",disabled:!M})})]}),s.jsx(Rn,{}),s.jsxs(Nn,{style:Tt,children:[s.jsx(he,{content:"Find (Ctrl+F)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Find",icon:s.jsx(ru,{}),onClick:()=>J&&J("find"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Find & Replace (Ctrl+H)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Replace",icon:s.jsx(Ro,{}),onClick:()=>J&&J("replace"),appearance:"secondary",disabled:!M})})]})]}),K==="edit"&&s.jsx(Rn,{}),K==="edit"&&s.jsx("div",{className:"ribbon-group",children:s.jsxs(Nn,{style:Tt,children:[s.jsx(he,{content:"Toggle rendering line number",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Line#",icon:s.jsx(gm,{}),checked:ne,onClick:()=>ee&&ee(),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Toggle fold gutter (expand/collapse heading)",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Fold Gutter",icon:s.jsx(Jc,{}),checked:oe,onClick:()=>se&&se(),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Toggle linter gutter",relationship:"label",children:s.jsx(Ft,{"aria-label":"Linter",icon:s.jsx(bm,{}),checked:L,onClick:()=>q&&q(),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:M?"Toggle writing statistics line":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Stats",icon:s.jsx(cu,{}),checked:le,onClick:()=>we&&we(),appearance:"secondary",disabled:!M})}),s.jsx(Rn,{}),s.jsx(he,{content:"Toggle Preview",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Preview",icon:s.jsx(ym,{}),checked:ye.includes("preview")||ge.includes("preview"),onClick:()=>R("preview"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Toggle Outline",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Outline",icon:s.jsx(Sl,{}),checked:ye.includes("outline")||ge.includes("outline"),onClick:()=>R("outline"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Toggle Property",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Property",icon:s.jsx(Ao,{}),checked:ye.includes("property")||ge.includes("property"),onClick:()=>R("property"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Toggle History",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle History",icon:s.jsx(_o,{}),checked:ye.includes("history")||ge.includes("history"),onClick:()=>R("history"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Toggle Snippet",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Snippet",icon:s.jsx(ci,{}),checked:ye.includes("snippet")||ge.includes("snippet"),onClick:()=>R("snippet"),appearance:"secondary",disabled:!M})})]})}),K==="edit"&&s.jsx(Rn,{}),K==="edit"&&s.jsx("div",{className:"ribbon-group",children:s.jsxs(Nn,{style:Tt,children:[s.jsx(he,{content:M?"Zen mode - hide all UI distractions":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"Zen Mode",icon:s.jsx(uu,{}),checked:$.zen,onClick:()=>B("zen"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:M?"Focus mode - minimize distractions":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"Focus Mode",icon:s.jsx(du,{}),checked:$.focus,onClick:()=>B("focus"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:M?"Typewriter mode - keep current line centered":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"Typewriter Mode",icon:s.jsx(fu,{}),checked:$.typewriter.enabled,onClick:()=>B("typewriter"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:M?"WYSIWYG Mode - render markdown in place":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"WYSIWYG Mode",icon:s.jsx(vm,{}),checked:$.wysiwyg,onClick:()=>B("wysiwyg"),appearance:"secondary",disabled:!M})})]})}),je.topLine&&Xt.topLine.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(Rn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ka,{children:[s.jsx(Fa,{children:s.jsx(Ne,{"aria-label":"More options",icon:s.jsx(Wc,{}),appearance:"secondary"})}),s.jsx(Ja,{children:s.jsx(Wa,{children:Xt.topLine.map(Ht)})})]})})]})]})}),M&&K==="edit"&&s.jsx("div",{className:"ribbon-section ribbon-bottom-line",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%"},children:s.jsxs("div",{className:"ribbon-section-content",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch",alignItems:"center",flex:1},children:[s.jsxs("div",{className:"ribbon-group",children:[s.jsxs(Nn,{style:Tt,children:[s.jsx(he,{content:"Bold (Ctrl+B)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Bold",icon:s.jsx(ba,{}),onClick:()=>w&&w("bold"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Italic (Ctrl+I)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Italic",icon:s.jsx(hu,{}),onClick:()=>w&&w("italic"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Strikethrough (Alt+S)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Strikethrough",icon:s.jsx(mu,{}),onClick:()=>w&&w("strikethrough"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Subscript",relationship:"label",children:s.jsx(Ne,{"aria-label":"Subscript",icon:s.jsx(pu,{}),onClick:()=>w&&w("subscript"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Superscript",relationship:"label",children:s.jsx(Ne,{"aria-label":"Superscript",icon:s.jsx(gu,{}),onClick:()=>w&&w("superscript"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Code (Ctrl+`)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Code",icon:s.jsx(ri,{}),onClick:()=>w&&w("code"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Highlight Text",relationship:"label",children:s.jsx(Ne,{"aria-label":"Highlight",icon:s.jsx(Nm,{}),onClick:()=>w&&w("highlight"),appearance:"secondary",disabled:!O})})]}),s.jsx(Nn,{style:Tt,children:s.jsxs(Ka,{children:[s.jsx(he,{content:"Text Transformations",relationship:"label",children:s.jsx(Fa,{children:s.jsx(Ne,{"aria-label":"Transform",icon:s.jsx(is,{}),appearance:"secondary",disabled:!O})})}),s.jsx(Ja,{children:s.jsxs(Wa,{children:[s.jsx(Ke,{onClick:()=>w&&w("transform-upper"),children:"UPPERCASE"}),s.jsx(Ke,{onClick:()=>w&&w("transform-lower"),children:"lowercase"}),s.jsx(Ke,{onClick:()=>w&&w("transform-sentence"),children:"Sentence case"}),s.jsx(Ic,{}),s.jsx(Ke,{onClick:()=>w&&w("remove-formatting"),children:"Remove Formatting"})]})})]})})]}),s.jsx(Rn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsx(Nn,{style:Tt,children:s.jsxs("select",{"aria-label":"Heading Style",disabled:!O,onChange:xe=>{const nt=xe.target.value;nt&&w&&w(nt)},style:{backgroundColor:"var(--color-neutral-background3)",border:"1px solid var(--color-neutral-stroke2)",borderRadius:"4px",padding:"4px 8px",color:"var(--color-neutral-foreground2)",fontSize:"12px",cursor:"pointer"},children:[s.jsx("option",{value:"",children:"Heading"}),s.jsx("option",{value:"h1",children:"Heading 1"}),s.jsx("option",{value:"h2",children:"Heading 2"}),s.jsx("option",{value:"h3",children:"Heading 3"}),s.jsx("option",{value:"h4",children:"Heading 4"}),s.jsx("option",{value:"h5",children:"Heading 5"}),s.jsx("option",{value:"h6",children:"Heading 6"})]})})}),s.jsx(Rn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Nn,{style:Tt,children:[s.jsx(he,{content:"Bullet List (Ctrl+Shift+8)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Bullet List",icon:s.jsx($o,{}),onClick:()=>w&&w("bullet"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Numbered List (Ctrl+Shift+9)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Numbered List",icon:s.jsx(Sl,{}),onClick:()=>w&&w("numbered"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Quote (Ctrl+Shift+>)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Quote",icon:s.jsx(bu,{}),onClick:()=>w&&w("quote"),appearance:"secondary",disabled:!O})})]})}),s.jsx(Rn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Nn,{style:Tt,children:[s.jsx(he,{content:"Link (Ctrl+K)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Link",icon:s.jsx(yu,{}),onClick:()=>w&&w("link"),appearance:"secondary",disabled:!O})}),s.jsx(he,{content:"Image (Ctrl+Shift+I)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Image",icon:s.jsx(vu,{}),onClick:()=>w&&w("image"),appearance:"secondary",disabled:!O})}),s.jsx(Rn,{}),s.jsx(he,{content:"Insert Table (Ctrl+Shift+T)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Table",icon:s.jsx(xu,{}),onClick:()=>w&&w("table"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Insert Code Block (Ctrl+Shift+C)",relationship:"label",children:s.jsx(Ne,{"aria-label":"Code Block",icon:s.jsx(ri,{}),onClick:()=>w&&w("codeblock"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Insert Footnote",relationship:"label",children:s.jsx(Ne,{"aria-label":"Footnote",icon:s.jsx(wu,{}),onClick:()=>w&&w("footnote"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Task List",relationship:"label",children:s.jsx(Ne,{"aria-label":"Task List",icon:s.jsx(Su,{}),onClick:()=>w&&w("tasklist"),appearance:"secondary",disabled:!M})}),s.jsx(he,{content:"Horizontal Rule (Ctrl+Shift+-)",relationship:"label",children:s.jsx(Ne,{"aria-label":"HR",icon:s.jsx(Tu,{}),onClick:()=>w&&w("hr"),appearance:"secondary",disabled:!M})}),s.jsxs(Ka,{children:[s.jsx(he,{content:"Insert Callout",relationship:"label",children:s.jsx(Fa,{children:s.jsx(Ne,{"aria-label":"Callout",icon:s.jsx(ss,{}),appearance:"secondary",disabled:!M})})}),s.jsx(Ja,{children:s.jsxs(Wa,{children:[s.jsx(Ke,{onClick:()=>w&&w("callout-note"),children:"Note"}),s.jsx(Ke,{onClick:()=>w&&w("callout-tip"),children:"Tip"}),s.jsx(Ke,{onClick:()=>w&&w("callout-warning"),children:"Warning"}),s.jsx(Ke,{onClick:()=>w&&w("callout-error"),children:"Error"})]})})]})]})}),je.bottomLine&&Xt.bottomLine.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(Rn,{}),s.jsx("div",{className:"ribbon-group",children:s.jsxs(Ka,{children:[s.jsx(Fa,{children:s.jsx(Ne,{"aria-label":"More options",icon:s.jsx(Wc,{}),appearance:"secondary"})}),s.jsx(Ja,{children:s.jsx(Wa,{children:Xt.bottomLine.map(Ht)})})]})})]})]})})]})}class dy{static getLintDiagnostics(){return r=>{const d=[],c=r.state.doc,b=c.toString().split(`
`),g=new Set;let v=null;return b.forEach((k,X)=>{const B=k.trim();if(B.startsWith("```")||B.startsWith("~~~~")||B.startsWith("> ```")||B.startsWith("> ~~~~")||B.match(/^(\s*>)+\s*```/)||B.match(/^(\s*>)+\s*~~~~/))if(v===null)v=X;else{for(let $=v;$<=X;$++)g.add($);v=null}}),b.forEach((k,X)=>{if(g.has(X))return;const B=/^(\s*)[-*_]{3,}\s*$/.test(k);if(B)return;const $=c.line(X+1).from,M=c.line(X+1).to,G=k.replace(/\\\*/g,"").replace(/\\\#/g,"").replace(/\\\[/g,"").replace(/\\\]/g,"").replace(/\\\`/g,""),O=G.match(/\[/g)||[],Q=G.match(/\]/g)||[];if(O.length>Q.length){const ee=G.lastIndexOf("["),oe=G.substring(ee+1),se=G.includes("[[")||G.includes("]]")||G.match(/\[\s*\[/)||G.match(/\]\s*\]/),K=/\[\s*\d+[\s,\d]*\s*\]/.test(G)||/\[\s*[a-zA-Z]+\s*=\s*[a-zA-Z0-9]+\s*\]/.test(G),P=/[\+\-\*\/=]/.test(oe);oe.trim().length>0&&!oe.startsWith(" ")&&!oe.match(/^[\s\[\]]*$/)&&!se&&!K&&!P&&d.push({from:$+ee,to:M,severity:"error",message:"Unclosed link bracket"})}if((G.match(/\*\*/g)||[]).length%2===1){(G.match(/`/g)||[]).length>=2;const oe=G.lastIndexOf("**");d.push({from:$+oe,to:M,severity:"warning",message:"Unclosed bold formatting"})}const w=G.split("**").join("").match(/\*/g)||[];if(w.length%2===1){const ee=/^(\s*)[\*\-\+]\s/.test(G),oe=G.trim()[0],se=/\d+\s*\*\s*\d+/.test(G)||/\d+\s*\*\s*[a-zA-Z]/.test(G)||/[a-zA-Z]\s*\*\s*\d+/.test(G)||/\*\s*[=\+\/]/.test(G)||/[=\+\/]\s*\*/.test(G);if(!(ee&&oe==="*"&&w.length===1||se)){const K=G.split("**").join("").lastIndexOf("*");let P=0,_=K;const R=G.split("**");for(let le=0;le<R.length;le++){if(_<=R[le].length){P+=_;break}_-=R[le].length,P+=R[le].length+2}d.push({from:$+P,to:M,severity:"warning",message:"Unclosed italic formatting"})}}const J=(G.match(/`/g)||[]).length;if(J%2===1&&(G.match(/`[^`]*`[^`]*`/)&&(G.match(/`/g)||[]).length===3&&G.endsWith("`")&&G.includes("**"),J!==3)){if(J!==4){const ee=G.lastIndexOf("`");d.push({from:$+ee,to:M,severity:"error",message:"Unclosed code formatting"})}}const me=/^(\s*)(#{1,6})([^\s\#])/,W=G.match(me);if(W){const ee=W[1],oe=W[2];W[3]!==""&&ee.length<4&&!k.includes("\\#")&&d.push({from:$+W.index+ee.length+oe.length,to:$+W.index+ee.length+oe.length+1,severity:"warning",message:"Header should have a space after #"})}const I=/^(\s*)([-=]{3,})\s*$/.test(G),T=G.includes("**")||G.includes("`");if(!B&&!I&&!T&&!(k.includes("\\*")||k.includes("\\#")||k.includes("\\`")||k.includes("\\[")||k.includes("\\]"))){const oe=/^(\s*)([*\-+])([^\s\*\-\+])/,se=G.match(oe);if(se){const _=se[1],R=se[2];se[3]!==" "&&_.length<4&&d.push({from:$+se.index+_.length+R.length,to:$+se.index+_.length+R.length+1,severity:"warning",message:"List Items Without Proper Spacing"})}const K=/^(\s*)(\d+)([\.\s])/,P=G.match(K);if(P){const _=P[1],R=P[2],le=P[3],we=G.substring(P[0].length);le==="."&&we.length>0&&!we.startsWith(" ")?d.push({from:$+P.index+_.length+R.length+1,to:$+P.index+_.length+R.length+2,severity:"warning",message:"List Items Without Proper Spacing"}):le!=="."&&le!==" "&&_.length<4&&d.push({from:$+P.index+_.length+R.length,to:$+P.index+_.length+R.length+1,severity:"warning",message:"Ordered list items should have a space or period after the number"})}}const j=k.match(/\(/g)||[],L=k.match(/\)/g)||[];if(k.includes("[")&&k.includes("](")&&j.length>L.length){const ee=k.lastIndexOf("("),oe=k.substring(0,ee).includes("![");d.push({from:$+ee,to:M,severity:"error",message:oe?"Unclosed image link":"Unclosed link"})}if(k.includes("![](")){const ee=k.indexOf("![");d.push({from:$+ee,to:$+ee+4,severity:"warning",message:"Image is missing alt text (accessibility)"})}const q=k.match(/^(\s*)(#{1,6})\s/);if(q&&!g.has(X)){const ee=q[2].length;ee===1&&(this.h1Count===void 0&&(this.h1Count=0),this.h1Count++,this.h1Count>1&&d.push({from:$+q[1].length,to:$+q[1].length+q[2].length,severity:"warning",message:"Multiple H1 headers detected. Document should have only one primary title."})),this.lastHeadingLevel!==void 0&&ee>this.lastHeadingLevel+1&&d.push({from:$+q[1].length,to:$+q[1].length+q[2].length,severity:"warning",message:`Heading level jump: H${this.lastHeadingLevel} to H${ee}`}),this.lastHeadingLevel=ee}k.trim().split(/\s+/).filter(ee=>ee.length>0).length>200&&!q&&!g.has(X)&&d.push({from:$,to:M,severity:"info",message:"Long paragraph detected. Consider breaking it up for better readability."})}),this.lastHeadingLevel=void 0,this.h1Count=0,d}}}class fy{constructor(){this.editorView=null,this.settings={focus:{enabled:!1,opacity:.3,lineHeight:1.6},typewriter:{enabled:!1,centerOffset:.4,scrollBehavior:"smooth"},wysiwyg:{enabled:!1},zen:{enabled:!1,hideUI:!0,minimalMode:!1}},this.wordCount=0,this.characterCount=0,this.readabilityScore=0,this.readingTime=0,this.statistics={wordsToday:0,wordsThisWeek:0,writingStreak:0,lastWritingDate:null},this.listeners=[],this.loadSettings(),this.loadStatistics()}loadSettings(){try{const r=localStorage.getItem("markdownstudio_writing_modes");if(r){const d=JSON.parse(r);Object.keys(this.settings).forEach(c=>{d[c]&&typeof d[c]=="object"&&(this.settings[c]={...this.settings[c],...d[c]})}),this.settings.zen.enabled=!1}}catch(r){console.warn("Failed to load writing mode settings:",r)}}saveSettings(){localStorage.setItem("markdownstudio_writing_modes",JSON.stringify(this.settings))}loadStatistics(){const r=localStorage.getItem("markdownstudio_writing_stats");r&&(this.statistics={...this.statistics,...JSON.parse(r)})}saveStatistics(){localStorage.setItem("markdownstudio_writing_stats",JSON.stringify(this.statistics))}addModeChangeListener(r){this.listeners.push(r)}removeModeChangeListener(r){this.listeners=this.listeners.filter(d=>d!==r)}emitModeChange(){const r=this.getActiveModes();this.listeners.forEach(d=>{try{d(r)}catch(c){console.error("Error in mode change listener:",c)}})}toggleMode(r,d=!1){const c=this.isModeEnabled(r);d||!c?this.enableMode(r):this.disableMode(r)}enableMode(r){switch(r){case"focus":this.settings.focus.enabled=!0,this.applyFocusMode();break;case"typewriter":this.settings.typewriter.enabled=!0,this.applyTypewriterMode();break;case"wysiwyg":this.settings.wysiwyg.enabled=!0;break;case"zen":this.settings.zen.enabled=!0,this.applyZenMode();break}this.saveSettings(),this.emitModeChange()}disableMode(r){switch(r){case"focus":this.settings.focus.enabled=!1,this.removeFocusMode();break;case"typewriter":this.settings.typewriter.enabled=!1,this.removeTypewriterMode();break;case"wysiwyg":this.settings.wysiwyg.enabled=!1;break;case"zen":this.settings.zen.enabled=!1,this.removeZenMode();break}this.saveSettings(),this.emitModeChange()}applyFocusMode(){}removeFocusMode(){}applyTypewriterMode(){}removeTypewriterMode(){}applyZenMode(){this.zenKeyListener=r=>{r.key==="Escape"&&this.toggleMode("zen")},document.addEventListener("keydown",this.zenKeyListener)}removeZenMode(){this.zenKeyListener&&(document.removeEventListener("keydown",this.zenKeyListener),this.zenKeyListener=null)}calculateWordCount(r){return r?r.replace(/#+\s+/g,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[([^\]]*)\]\([^)]+\)/g,"$1").replace(/^\s*[-*+]\s+/gm,"").replace(/^\s*\d+\.\s+/gm,"").replace(/^\s*>\s+/gm,"").replace(/^[>-]+/gm,"").replace(/\n{3,}/g,`

`).trim().split(/\s+/).filter(f=>f.length>0).length:0}calculateReadingTime(r){return Math.ceil(r/225)}updateWritingStats(r){const d=this.calculateWordCount(r);if(this.wordCount=d,this.characterCount=r?r.length:0,this.readingTime=this.calculateReadingTime(d),d>5){const b=r.split(/[.!?]+/).filter(k=>k.trim().length>0).length||1,v=4.71*(r.replace(/\s+/g,"").length/d)+.5*(d/b)-21.43;this.readabilityScore=Math.max(0,Math.min(22,Math.round(v)))}else this.readabilityScore=0;const c=new Date().toDateString(),f=this.statistics.lastWritingDate;if(f!==c){const b=new Date(Date.now()-864e5).toDateString();f===b?this.statistics.writingStreak+=1:this.statistics.writingStreak=1,this.statistics.wordsToday=0,this.statistics.lastWritingDate=c}this.statistics.wordsToday=Math.max(this.statistics.wordsToday,d),this.statistics.wordsThisWeek=this.statistics.wordsToday,this.saveStatistics()}getWritingStatistics(){return{wordCount:this.wordCount,characterCount:this.characterCount,readabilityScore:this.readabilityScore,readingTime:this.readingTime,...this.statistics}}getActiveModes(){return{focus:this.settings.focus.enabled,typewriter:{enabled:this.settings.typewriter.enabled,centerOffset:this.settings.typewriter.centerOffset,scrollBehavior:this.settings.typewriter.scrollBehavior},wysiwyg:this.settings.wysiwyg.enabled,zen:this.settings.zen.enabled}}getCurrentMode(){return this.settings.zen.enabled?"zen":this.settings.focus.enabled?"focus":this.settings.typewriter.enabled?"typewriter":this.settings.wysiwyg.enabled?"wysiwyg":"normal"}isModeEnabled(r){return this.settings[r]?.enabled||!1}setEditorView(r){this.editorView=r}cleanup(){this.removeFocusMode(),this.removeTypewriterMode(),this.removeZenMode()}}const xn=new fy;Xo().use(Go).use(Cb).use(Xm).use(Cu).use(Au).use(Gm).use(Vo,{allowDangerousHtml:!0}).use(Du).use(Vm,{ignoreMissing:!0}).use(Qo,{allowDangerousHtml:!0});const hy=m=>{if(!m||!m.includes("|"))return m;const r=m.trim().split(`
`);if(r.length<2)return m;const d=r.map(f=>f.replace(/^\||\|$/g,"").split("|").map(g=>g.trim())),c=[];return d.forEach(f=>{f.forEach((b,g)=>{c[g]=Math.max(c[g]||0,b.length)})}),d.map((f,b)=>{const g=b===1&&f.every(k=>/^:?-+:?$/.test(k));return`|${f.map((k,X)=>{const B=c[X];if(g){const $=k.startsWith(":"),M=k.endsWith(":");let G="-".repeat(B+2);return $&&M?G=":"+"-".repeat(B)+":":$?G=":"+"-".repeat(B+1):M&&(G="-".repeat(B+1)+":"),G}else return" "+k.padEnd(B)+" "}).join("|")}|`}).join(`
`)},my=$n.inputHandler.of((m,r,d,c)=>(c!=="|"||setTimeout(()=>{const{state:f}=m,b=m.state.selection.main.head,g=m.state.doc.lineAt(b);if(g.text.includes("|")){let v=g.number;for(;v>1&&m.state.doc.line(v-1).text.includes("|");)v--;let k=g.number;for(;k<m.state.doc.lines&&m.state.doc.line(k+1).text.includes("|");)k++;if(k-v>=2){const X={from:m.state.doc.line(v).from,to:m.state.doc.line(k).to},B=m.state.doc.sliceString(X.from,X.to),$=hy(B);$!==B&&m.dispatch({changes:{from:X.from,to:X.to,insert:$},selection:{anchor:b}})}}},10),!1)),py=Zo.line({class:"cm-activeBlock"}),gy=Ab.define({create(m){return km(m)},update(m,r){return r.docChanged||r.selection?km(r.state):m},provide:m=>$n.decorations.from(m)});function km(m){const r=m.selection.main.head;let d=m.doc.lineAt(r).number,c=d;for(;d>1&&m.doc.line(d-1).text.trim();)d--;for(;c<m.doc.lines&&m.doc.line(c+1).text.trim();)c++;const f=[];for(let b=d;b<=c;b++)f.push(py.range(m.doc.line(b).from));return Zo.set(f)}const by=Zo.mark({class:"cm-wysiwyg-hidden",attributes:{style:"opacity: 0.3; font-style: italic; user-select: text;"}}),Mm=m=>{const r=[],d=m.state.selection.main,c=m.state.doc.lineAt(d.head).from,f=m.state.doc.lineAt(d.head).to;for(let{from:b,to:g}of m.visibleRanges)qb(m.state).iterate({from:b,to:g,enter:v=>{v.from>=c&&v.to<=f||(v.name.includes("Mark")||v.name==="URL"||v.name==="LinkTitle"||v.name==="CodeInfo")&&r.push(by.range(v.from,v.to))}});return r.sort((b,g)=>b.from-g.from),Zo.set(r,!0)},yy=Db.fromClass(class{constructor(m){this.decorations=Mm(m)}update(m){(m.docChanged||m.selectionSet||m.viewportChanged)&&(this.decorations=Mm(m.view))}},{decorations:m=>m.decorations}),vy=m=>{let r=m.matchBefore(/\/\w*/);if(!r)return null;if(r.from>0){let d=m.state.sliceDoc(r.from-1,r.from);if(!/\s/.test(d)&&d!==`
`)return null}return r.from===r.to&&!m.explicit?null:{from:r.from,options:[qe("**${}**",{label:"/bold",detail:"Bold Text",type:"text"}),qe("*${}*",{label:"/italic",detail:"Italic Text",type:"text"}),qe("~~${}~~",{label:"/strike",detail:"Strikethrough",type:"text"}),qe("==${}==",{label:"/highlight",detail:"Highlight",type:"text"}),qe("~${}~",{label:"/subscript",detail:"Subscript",type:"text"}),qe("^${}^",{label:"/superscript",detail:"Superscript",type:"text"}),qe("# ${}",{label:"/h1",detail:"Heading 1",type:"text"}),qe("## ${}",{label:"/h2",detail:"Heading 2",type:"text"}),qe("### ${}",{label:"/h3",detail:"Heading 3",type:"text"}),qe("#### ${}",{label:"/h4",detail:"Heading 4",type:"text"}),qe("##### ${}",{label:"/h5",detail:"Heading 5",type:"text"}),qe("###### ${}",{label:"/h6",detail:"Heading 6",type:"text"}),qe("> ${}",{label:"/quote",detail:"Blockquote",type:"text"}),qe("`${}`",{label:"/inlinecode",detail:"Inline Code",type:"text"}),qe("```${language}\n${}\n```",{label:"/code",detail:"Code Block",type:"text"}),qe(`| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |`,{label:"/table",detail:"Table",type:"text"}),qe(`---
`,{label:"/divider",detail:"Horizontal Rule",type:"text"}),qe("- ${}",{label:"/bullet",detail:"Bullet List",type:"text"}),qe("1. ${}",{label:"/numbered",detail:"Numbered List",type:"text"}),qe("- [ ] ${}",{label:"/todo",detail:"Task List",type:"text"}),qe("[${text}](url)",{label:"/link",detail:"Link",type:"text"}),qe("![${alt}](url)",{label:"/image",detail:"Image",type:"text"}),qe("Here is some text with a footnote[^${1}].\n\n[^${1}]: This is the footnote content.",{label:"/footnote",detail:"Footnote",type:"text"}),qe("> [!NOTE]\n> ${}",{label:"/note",detail:"Note Callout",type:"text"}),qe("> [!TIP]\n> ${}",{label:"/tip",detail:"Tip Callout",type:"text"}),qe("> [!WARNING]\n> ${}",{label:"/warning",detail:"Warning Callout",type:"text"}),qe("> [!ERROR]\n> ${}",{label:"/error",detail:"Error Callout",type:"text"}),qe(`$$
\${}
$$`,{label:"/math",detail:"Math Block",type:"text"}),qe("```mermaid\ngraph TD\n    A[Start] --> B[End]\n```",{label:"/mermaid",detail:"Mermaid",type:"text"}),qe(`---
title: \${}
date: 
tags: []
---
`,{label:"/frontmatter",detail:"YAML Frontmatter",type:"text"})]}},xy=Qm.data.of({autocomplete:vy}),wy=[{key:"Tab",run:zb},...Lb],Sy=Nb((m,r)=>{const{state:d}=m,c=d.doc.lineAt(r),f=c.text,b=c.from,g=/\[([^\]]+)\]\(([^)]+)\)/g;let v;for(;(v=g.exec(f))!==null;){const B=b+v.index,$=B+v[0].length;if(r>=B&&r<=$){const M=v[1],G=v[2];return{pos:B,end:$,above:!0,create:()=>{const O=document.createElement("div");return O.style.padding="4px 8px",O.style.backgroundColor="#333",O.style.color="#fff",O.style.borderRadius="4px",O.style.fontSize="12px",O.style.maxWidth="300px",O.style.wordBreak="break-word",G.startsWith("http://")||G.startsWith("https://")?O.innerHTML=`
              <div style="font-weight: bold; margin-bottom: 2px;">Link</div>
              <div>Text: ${M}</div>
              <div style="color: #4fc3f7;">URL: ${G}</div>
            `:O.innerHTML=`
              <div style="font-weight: bold; margin-bottom: 2px;">Internal Link</div>
              <div>Text: ${M}</div>
              <div style="color: #81c784;">File: ${G}</div>
            `,{dom:O}}}}}const k=/!\[([^\]]*)\]\(([^)]+)\)/g;for(;(v=k.exec(f))!==null;){const B=b+v.index,$=B+v[0].length;if(r>=B&&r<=$){const M=v[1]||"image",G=v[2];return{pos:B,end:$,above:!0,create:()=>{const O=document.createElement("div");return O.style.padding="4px 8px",O.style.backgroundColor="#333",O.style.color="#fff",O.style.borderRadius="4px",O.style.fontSize="12px",O.style.maxWidth="300px",O.innerHTML=`
            <div style="font-weight: bold; margin-bottom: 2px;">Image</div>
            <div>Alt: ${M}</div>
            <div style="color: #ff9800;">Source: ${G}</div>
          `,{dom:O}}}}}const X=/\[([^\]]+)\]/g;for(;(v=X.exec(f))!==null;){const B=b+v.index,$=B+v[0].length,M=f[v.index-1],G=f[v.index+v[0].length];if(!(M==="!"||G==="(")&&r>=B&&r<=$){const O=v[1];return{pos:B,end:$,above:!0,create:()=>{const Q=document.createElement("div");return Q.style.padding="4px 8px",Q.style.backgroundColor="#333",Q.style.color="#fff",Q.style.borderRadius="4px",Q.style.fontSize="12px",Q.innerHTML=`
            <div style="font-weight: bold; margin-bottom: 2px;">Reference</div>
            <div style="color: #ba68c8;">[${O}]</div>
          `,{dom:Q}}}}}return null}),Ty=$n.domEventHandlers({touchstart:(m,r)=>{if(!("ontouchstart"in window)||m.touches.length>1)return;const d=m.touches[0];r._touchStart={x:d.clientX,y:d.clientY},r._touchTimer&&clearTimeout(r._touchTimer),r._touchTimer=setTimeout(()=>{const c=r.posAtCoords({x:d.clientX,y:d.clientY});if(c!==null){const f=r.state.wordAt(c);f&&(r.dispatch({selection:{anchor:f.from,head:f.to},userEvent:"select.touch"}),window.navigator&&window.navigator.vibrate&&window.navigator.vibrate(50))}r._touchTimer=null},600)},touchmove:(m,r)=>{if(!("ontouchstart"in window)||!r._touchStart)return;const d=m.touches[0],c=d.clientX-r._touchStart.x,f=d.clientY-r._touchStart.y;(Math.abs(c)>10||Math.abs(f)>10)&&(r._touchTimer&&(clearTimeout(r._touchTimer),r._touchTimer=null),r._touchStart=null)},touchend:(m,r)=>{!("ontouchstart"in window)||!r._touchTimer||(clearTimeout(r._touchTimer),r._touchTimer=null,r._touchStart=null)},touchcancel:(m,r)=>{!("ontouchstart"in window)||!r._touchTimer||(clearTimeout(r._touchTimer),r._touchTimer=null,r._touchStart=null)}}),Ey=$n.theme({"&":{fontSize:"0.875rem",backgroundColor:"#ffffff",color:"#1e1e1e"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground, .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"rgba(0, 120, 212, 0.35) !important",borderRadius:"1px"},".cm-selectionMatch":{backgroundColor:"rgba(0, 120, 212, 0.2) !important"},".cm-activeLine":{backgroundColor:"rgba(0, 120, 212, 0.08)"},".cm-activeLineGutter":{backgroundColor:"rgba(0, 120, 212, 0.12)"}},{dark:!1}),jy=$n.theme({"&":{fontSize:"0.875rem",backgroundColor:"#1e1e1e",color:"#d4d4d4"},".cm-content":{caretColor:"#aeafad"},".cm-gutters":{backgroundColor:"#252526",color:"#858585",borderRight:"1px solid rgba(255,255,255,0.08)"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground, .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"rgba(0, 120, 212, 0.55) !important",borderRadius:"1px"},".cm-selectionMatch":{backgroundColor:"rgba(0, 120, 212, 0.35) !important"},".cm-activeLine":{backgroundColor:"rgba(255, 255, 255, 0.08)"},".cm-activeLineGutter":{backgroundColor:"rgba(255, 255, 255, 0.1)"},".cm-cursor":{borderLeftColor:"#aeafad"}},{dark:!0}),ky=[Rb({base:Qm,codeLanguages:Yb}),_b.of(wy),gy,xy,$b(),Ob(),Hb(),Bb(),Sy,Ty,my],My=(m,r,d)=>{const c=[Kb.highest(d?jy:Ey)];return r?.typewriter?.enabled&&c.push($n.updateListener.of(f=>{if(f.docChanged||f.selectionSet){if(!f.state.selection.main.empty)return;f.view.dispatch({effects:$n.scrollIntoView(f.state.selection.main.head,{y:"center",behavior:r.typewriter.scrollBehavior||"auto"})})}})),r?.wysiwyg&&c.push(yy),m?.highlightSpecialChars&&c.push(Xb()),m?.scrollPastEnd&&c.push(Gb()),m?.showLintGutter&&c.push(Vb(dy.getLintDiagnostics()),Qb({markerFilter:f=>f,tooltipFilter:f=>f,markerTooltip:f=>f.length===1?f[0].message:f.map(b=>b.message).join(`
`)})),m?.showPlaceholder&&c.push(Zb("Start typing your markdown here...")),c},Cy=p.memo(function({content:r,onChange:d,visible:c,onTextSelection:f,scrollRef:b,onEditorReady:g,settings:v,writingMode:k,isDark:X,onCursorActivity:B,onHistoryChange:$}){const[M,G]=p.useState(null),O=p.useRef(null),Q=p.useRef(!1),V=p.useRef({canUndo:!1,canRedo:!1}),w=p.useRef(0),J=p.useRef({undo:0,redo:0});p.useEffect(()=>{M&&(xn.setEditorView(M),g&&g(M))},[M,g]),p.useEffect(()=>{if(b&&M){const T=M.dom.querySelector(".cm-scroller");T&&(b.current=T)}},[M,b]);const me=p.useMemo(()=>$n.updateListener.of(T=>{if(T.selectionSet||T.docChanged){const j=!T.state.selection.main.empty;if(Q.current!==j&&(Q.current=j,f&&f(j)),B){const L=T.state.selection.main.head,q=T.state.doc.lineAt(L),ne=L-q.from+1;B({line:q.number,column:ne})}if(T.docChanged&&(w.current++,w.current===1&&(J.current={undo:Tm(T.state),redo:Sm(T.state)})),$){const L=Tm(T.state)>J.current.undo,q=Sm(T.state)>J.current.redo;(L!==V.current.canUndo||q!==V.current.canRedo)&&(V.current={canUndo:L,canRedo:q},$({canUndo:L,canRedo:q}))}}}),[f,B,$]),W=p.useMemo(()=>$n.domEventHandlers({paste:(T,j)=>{const L=T.clipboardData?.getData("text/html");return L?(T.preventDefault(),$t(()=>import("./vendor-processing.CmTeLQxv.js").then(q=>q.ac),__vite__mapDeps([0,1])).then(q=>{const ne=q.default,oe=new ne({headingStyle:"atx",codeBlockStyle:"fenced"}).turndown(L),{state:se}=j,K=se.selection.main;j.dispatch({changes:{from:K.from,to:K.to,insert:oe},selection:{anchor:K.from+oe.length}}),j.focus()}).catch(q=>console.error("Turndown failed",q)),!0):!1}}),[]),I=p.useMemo(()=>[...ky,...My(v,k,X),me,W],[me,W,v,k,X]);return c?s.jsx("div",{className:`editor-pane selectable-content ${X?"dark-theme":"light-theme"}`,"data-theme":X?"dark":"light",role:"textbox","aria-label":"Markdown editor",children:s.jsx(Ub,{ref:O,value:r,height:"100%",width:"100%",extensions:I,onChange:T=>d(T),className:`codemirror-editor ${X?"dark-theme":"light-theme"} ${v?.showLineNumbers?"":"hide-line-numbers"} ${v?.showFoldGutter?"":"hide-fold-gutter"} ${k.zen?"zen-mode":""} ${k.focus?"focus-mode-active":""}`,onCreateEditor:T=>{G(T)}})}):null}),Km=new Map;let Eu="default";function Ay(){return m=>{zu(m,r=>{r.position&&r.type!=="text"&&r.type!=="inlineCode"&&(r.data=r.data||{},r.data.hProperties=r.data.hProperties||{},r.data.hProperties["data-line"]=r.position.start.line)})}}function Dy(){return m=>{zu(m,"code",r=>{if(r.lang==="mermaid"){r.type="html";const d=r.value,c=d.replace(/</g,"&lt;").replace(/>/g,"&gt;"),f=Km.get(d);f&&f.theme===Eu&&f.svg?r.value=`<div class="mermaid-container" style="display:flex; justify-content:center; margin:1.5rem 0; padding:1rem; background-color:var(--color-neutral-background2); border-radius:6px; border:1px solid rgba(0,0,0,0.1);"><div class="mermaid-src" style="display:none;">${c}</div><div class="mermaid-result" data-rendered="true" data-theme="${Eu}">${f.svg}</div></div>`:r.value=`<div class="mermaid-container" style="display:flex; justify-content:center; margin:1.5rem 0; padding:1rem; background-color:var(--color-neutral-background2); border-radius:6px; border:1px solid rgba(0,0,0,0.1);"><div class="mermaid-src" style="display:none;">${c}</div><div class="mermaid-result">Loading diagram...</div></div>`}})}}function zy(){return m=>{zu(m,r=>{if(r.type==="text"){if(r.value&&typeof r.value=="string"){const d=r.value.split(/(==(.*?)==)/);if(d.length>1){const c=[];for(let f=0;f<d.length;f++){const b=d[f];if(b.startsWith("==")&&b.endsWith("==")){const g=b.slice(2,-2);c.push({type:"element",tagName:"mark",properties:{className:"highlighted-text"},children:[{type:"text",value:g}]})}else b&&c.push({type:"text",value:b})}r.type="element",r.tagName="span",r.properties={},r.children=c}}}else r.children&&Array.isArray(r.children)&&r.children.forEach(d=>{if(d.type==="text"&&d.value&&typeof d.value=="string"){const c=d.value.split(/(==(.*?)==)/);if(c.length>1){const f=[];for(let b=0;b<c.length;b++){const g=c[b];if(g.startsWith("==")&&g.endsWith("==")){const v=g.slice(2,-2);f.push({type:"element",tagName:"mark",properties:{className:"highlighted-text"},children:[{type:"text",value:v}]})}else g&&f.push({type:"text",value:g})}d.type="element",d.tagName="span",d.properties={},d.children=f}}})})}}const Ly=Xo().use(Go).use(Xm).use(Ay).use(Dy).use(zy).use(Cu).use(Au).use(Gm).use(Vo,{allowDangerousHtml:!0}).use(Du).use(Vm,{ignoreMissing:!0}).use(Qo,{allowDangerousHtml:!0}),Ny=m=>{if(!m)return{html:"",offset:0};const r=m.match(/^---\s*\n([\s\S]*?)\n---\s*\n/),d=r?r[0].split(`
`).length-1:0;let c=m;r&&(c=m.slice(r[0].length));const f={note:"ℹ️",tip:"💡",important:"🔔",warning:"⚠️",caution:"⚡",error:"❌"};c=c.replace(/(^|\r?\n)((?:>\s*)+)\[!(\w+)\] ?(.*)/g,(b,g,v,k,X)=>{const B=k.toLowerCase(),$=f[B]||"ℹ️",M=X.trim()||k.charAt(0).toUpperCase()+k.slice(1);return`${g}${v}<div class="callout-header callout-${B}">${$} ${M}</div>
${v}`});try{const b=Ly.processSync(c);return{html:String(b),offset:d}}catch(b){return console.error("Markdown rendering error:",b),{html:m,offset:0}}},rs=p.memo(({content:m,visible:r=!0,scrollRef:d,scrollStateRef:c,rememberScrollPosition:f=!0,onJumpToLine:b,activeLine:g=0})=>{const v=p.useRef(null);p.useRef(!1);const[k,X]=p.useState(m||""),[B,$]=p.useState(0),[M,G]=p.useState({visible:!1,content:"",target:null}),O=p.useRef(null),Q=p.useRef(null);p.useEffect(()=>{const T=document.querySelector(".app");if(!T)return;const j=new MutationObserver(L=>{for(const q of L)q.attributeName==="class"&&$(ne=>ne+1)});return j.observe(T,{attributes:!0,attributeFilter:["class"]}),()=>j.disconnect()},[]);const V=p.useCallback(T=>{const j=T.target,L=j.closest("[data-line]");if(L&&b){const q=L.getAttribute("data-line");if(q){b(parseInt(q));return}}if(j.tagName==="A"&&j.hash){T.preventDefault();const q=document.querySelector(j.hash);q&&q.scrollIntoView({behavior:"smooth"});return}if(["H1","H2","H3","H4","H5","H6"].includes(j.tagName)){const q=j.id;q&&b&&b(q)}},[b]),w=p.useCallback(T=>{const j=T.target;if(j.tagName==="A"&&j.id?.startsWith("fnref-")||j.getAttribute("href")?.startsWith("#fn-")){const L=j.getAttribute("href").substring(1),q=document.getElementById(L);q&&G({visible:!0,content:q.innerHTML,target:j})}else M.visible&&!j.closest(".footnote-tooltip-surface")&&G(L=>({...L,visible:!1}))},[M.visible]);p.useEffect(()=>{if(!r||!v.current)return;const T=v.current;return T.addEventListener("click",V),T.addEventListener("mouseover",w),()=>{T.removeEventListener("click",V),T.removeEventListener("mouseover",w)}},[r,V,w]);const J=p.useCallback(()=>{const T=v.current;if(!T||!c)return;const j=T.scrollHeight-T.clientHeight;c.current={ratio:j>0?T.scrollTop/j:0,pixel:T.scrollTop}},[]);p.useEffect(()=>{if(!r)return;J();const T=()=>X(m||"");return typeof window<"u"&&"requestIdleCallback"in window?(O.current&&window.cancelIdleCallback(O.current),O.current=window.requestIdleCallback(T,{timeout:700}),()=>{O.current&&(window.cancelIdleCallback(O.current),O.current=null)}):(Q.current&&clearTimeout(Q.current),Q.current=setTimeout(T,500),()=>{Q.current&&(clearTimeout(Q.current),Q.current=null)})},[m,r,J]),p.useLayoutEffect(()=>{if(!r||!v.current||!c)return;const T=v.current,j=T.scrollHeight-T.clientHeight,{ratio:L,pixel:q}=c.current||{ratio:0,pixel:0},ne=j>0?L*j:q;Number.isFinite(ne)&&(T.scrollTop=Math.max(0,Math.min(j,ne)))},[k,r]);const{htmlContent:me,frontmatterOffset:W}=p.useMemo(()=>{Eu=document.querySelector(".app.dark-theme")!==null?"dark":"default";const j=Ny(k);return{htmlContent:j.html,frontmatterOffset:j.offset}},[k,B]),I=p.useRef(null);return p.useEffect(()=>{if(!r||!v.current||g<=0)return;const T=g-W;if(T<=0){v.current.scrollTo({top:0,behavior:"auto"});return}const j=v.current.querySelectorAll("[data-line]");let L=null,q=-1;for(let ne=0;ne<j.length;ne++){const ee=parseInt(j[ne].getAttribute("data-line"));if(ee<=T&&ee>q)q=ee,L=j[ne];else if(ee>T)break}if(L){I.current&&I.current.classList.remove("sync-highlight"),L.scrollIntoView({behavior:"auto",block:"center"}),L.classList.add("sync-highlight"),I.current=L;const ne=setTimeout(()=>{I.current===L&&(L.classList.remove("sync-highlight"),I.current=null)},1500);return()=>clearTimeout(ne)}},[g,r,W]),p.useEffect(()=>{d&&v.current&&(d.current=v.current)},[d,r]),p.useEffect(()=>{if(!r||!v.current)return;const j=setTimeout(async()=>{try{const L=v.current,q=L.querySelectorAll(".mermaid-container");if(q.length>0){const{default:ee}=await $t(async()=>{const{default:se}=await import("./vendor-visual.B_Q0hmov.js").then(K=>K.bC);return{default:se}},__vite__mapDeps([2,0,1])),oe=document.querySelector(".app.dark-theme")!==null;ee.initialize({startOnLoad:!1,theme:oe?"dark":"default",fontFamily:"'Outfit', 'Inter', -apple-system, sans-serif"});for(let se=0;se<q.length;se++){const K=q[se],P=K.querySelector(".mermaid-src"),_=K.querySelector(".mermaid-result");if(!P||!_)continue;const R=oe?"dark":"default",le=_.getAttribute("data-theme");if(_.hasAttribute("data-rendered")&&le===R)continue;const we=P.textContent||P.innerText,ye=`mermaid-svg-${Date.now()}-${se}`;try{const{svg:ge}=await ee.render(ye,we);_.innerHTML=ge,_.setAttribute("data-rendered","true"),_.setAttribute("data-theme",R),Km.set(we,{theme:R,svg:ge})}catch(ge){const Me=ge.message||"Syntax Error";console.warn("Mermaid render error:",Me),_.innerHTML="",_.setAttribute("data-rendered","error")}}}L.querySelectorAll("pre code.language-js, pre code.language-javascript").forEach(ee=>{const oe=ee.parentElement;if(oe.querySelector(".run-btn"))return;const se=document.createElement("button");se.className="run-btn",se.innerHTML="▶ Run",se.title="Run JavaScript code";const K=document.createElement("div");K.className="code-output",K.style.cssText="display:none; padding:8px; margin-top:-1rem; margin-bottom:1rem; border-radius:0 0 6px 6px; font-family:monospace; font-size:12px; background:rgba(0,0,0,0.05); border-top:1px solid rgba(0,0,0,0.1); white-space:pre-wrap;",oe.style.position="relative",oe.appendChild(se),oe.after(K),se.onclick=P=>{P.stopPropagation(),K.style.display="block",K.textContent="Executing...",K.style.color="var(--color-neutral-foreground2)";const _=ee.textContent,R=[],le=console.log;console.log=(...we)=>R.push(we.map(ye=>typeof ye=="object"?JSON.stringify(ye):String(ye)).join(" "));try{const we=new Function(_)();console.log=le,K.textContent=R.length>0?R.join(`
`):we!==void 0?String(we):"Execution finished (no output)"}catch(we){console.log=le,K.textContent=`Error: ${we.message}`,K.style.color="var(--color-status-error-foreground1)"}}})}catch(L){console.error("Error in preview enrichment:",L)}},100);return()=>clearTimeout(j)},[me,r,B]),r?s.jsxs("div",{className:"preview-pane",role:"document","aria-label":"Markdown preview",ref:v,children:[s.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:me}}),M.visible&&s.jsxs(Om,{open:!0,positioning:{target:M.target,position:"above",align:"start"},children:[s.jsx(Hm,{disableButtonEnhancement:!0,children:s.jsx("div",{style:{position:"fixed",left:-9999}})}),s.jsx(Bm,{className:"footnote-tooltip-surface",style:{maxWidth:"300px",fontSize:"13px"},children:s.jsx("div",{dangerouslySetInnerHTML:{__html:M.content}})})]})]}):null}),Cm={setItem:(m,r)=>{try{return localStorage.setItem(m,r),!0}catch(d){if(d.name==="QuotaExceededError")return console.warn("localStorage quota exceeded, unable to save:",m),!1;throw d}},getItem:m=>{try{return localStorage.getItem(m)}catch(r){return console.warn("Error reading from localStorage:",r),null}}};function Fm({content:m,visible:r,cursorLine:d=1,cursorColumn:c=1}){const[f,b]=p.useState({wordCount:0,readingTime:0,wordsToday:0,wordsThisWeek:0,writingStreak:0,lastWritingDate:null}),[g,v]=p.useState(()=>{const Q=Cm.getItem("markdownstudio_writing_goal");return Q?parseInt(Q):500}),[k,X]=p.useState(!1);if(p.useEffect(()=>{m&&m.trim()&&(xn.updateWritingStats(m),b(xn.getWritingStatistics()))},[m]),p.useEffect(()=>{Cm.setItem("markdownstudio_writing_goal",g.toString())},[g]),!r||!m||!m.trim())return null;const B=Math.min(1,f.wordsToday/g),$=Math.round(B*100),M=Q=>{if(Q<60)return`${Q} min read`;const V=Math.floor(Q/60),w=Q%60;return`${V}h ${w}m read`},G=Q=>Q===0||Q<=3?"🔥":Q<=7?"🔥🔥":Q<=14?"🔥🔥🔥":"🔥🔥🔥🔥",O=Q=>new Intl.NumberFormat().format(Q||0);return s.jsxs("div",{className:"writing-stats compact",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",overflow:"hidden"},children:[s.jsxs("div",{className:"stats-line",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:[s.jsx("div",{className:"goal-container",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Om,{open:k,onOpenChange:(Q,V)=>X(V.open),children:[s.jsx(Hm,{disableButtonEnhancement:!0,children:s.jsxs("div",{className:"goal-progress-wrapper",title:`Daily Goal: ${$}% (${f.wordsToday}/${g} words)`,children:[s.jsx("div",{className:"goal-progress-bar",style:{width:`${$}%`}}),s.jsxs("span",{className:"goal-text",children:[s.jsx(fb,{style:{fontSize:"12px",marginRight:"4px"}})," ",$,"%"]})]})}),s.jsx(Bm,{style:{padding:"12px",width:"200px"},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[s.jsx("span",{style:{fontSize:"12px",fontWeight:"bold"},children:"Set Daily Word Goal"}),s.jsx(ui,{type:"number",value:g,onChange:(Q,V)=>v(parseInt(V.value)||0),size:"small",contentAfter:"words"}),s.jsx(_t,{size:"small",appearance:"primary",onClick:()=>X(!1),children:"Apply"})]})})]})}),s.jsx(he,{content:"Word Count",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Words: ",O(f.wordCount)]})})}),s.jsx(he,{content:"Reading Time",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Read: ",M(f.readingTime)]})})}),s.jsx(he,{content:"Words Today",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Today: ",O(f.wordsToday)]})})}),f.writingStreak>0&&s.jsx(he,{content:`Streak: ${f.writingStreak} days`,relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:[G(f.writingStreak)," ",f.writingStreak," Days"]})})})]}),s.jsxs("div",{className:"stats-line stats-right",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:[s.jsx(he,{content:"Cursor Position",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Ln ",d,", Col ",c]})})}),s.jsx("div",{className:"stat-item",children:s.jsx("span",{className:"stat-text",children:"UTF-8"})}),s.jsx("div",{className:"stat-item",children:s.jsx("span",{className:"stat-text",children:"Markdown"})})]})]})}const Ry=Object.freeze(Object.defineProperty({__proto__:null,default:Fm},Symbol.toStringTag,{value:"Module"})),_y=`# MarkdownStudio User Manual\r
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
`;function ju({isOpen:m=!0,onClose:r=()=>{},isDarkTheme:d=!1,isDialog:c=!1}){const[f,b]=p.useState("");return p.useEffect(()=>{b(_y)},[]),c?s.jsx(Ho,{open:m,onOpenChange:(g,v)=>!v.open&&r(),children:s.jsx(Bo,{className:d?"dark-theme":"light-theme",style:{maxWidth:"750px",width:"95vw",maxHeight:"80vh"},children:s.jsxs(Uo,{children:[s.jsx(qo,{children:"User Manual"}),s.jsx("div",{style:{maxHeight:"calc(80vh - 100px)",overflow:"auto"},children:s.jsx(rs,{content:f,visible:!0})}),s.jsx(Yo,{children:s.jsx(_t,{appearance:"primary",onClick:r,children:"Close"})})]})})}):s.jsx("div",{className:"user-manual-container user-manual-full-window",style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",border:"none",margin:0,padding:0,backgroundColor:"var(--color-neutral-background1)"},children:s.jsx("div",{className:"user-manual-content user-manual-full-window",style:{flex:1,overflow:"auto",border:"none",margin:0,padding:"20px"},children:s.jsx(rs,{content:f,visible:!0})})})}const $y=Object.freeze(Object.defineProperty({__proto__:null,default:ju},Symbol.toStringTag,{value:"Module"})),Lu=(m,r)=>{p.useEffect(()=>{if(!m.current||!r)return;const d=m.current;d.style.setProperty("max-height","80vh","important"),d.style.setProperty("overflow-y","auto","important"),d.style.setProperty("user-select","none","important"),d.querySelectorAll('input, textarea, select, [contenteditable="true"]').forEach(M=>{M.style.setProperty("user-select","auto","important")});let f=!1,b,g;const v=window.innerWidth>768,k=()=>{const M=d.getBoundingClientRect(),G=window.innerWidth,O=window.innerHeight,Q=Math.max(10,(G-M.width)/2),V=Math.max(10,(O-M.height)/2);d.style.setProperty("transform","none","important"),d.style.setProperty("left",`${Q}px`,"important"),d.style.setProperty("top",`${V}px`,"important"),d.style.setProperty("margin","0","important"),d.style.setProperty("position","fixed","important")},X=setTimeout(k,50);let B=!1;const $=new ResizeObserver(M=>{!B&&M.length>0&&M[0].contentRect.width>0&&(k(),B=!0)});if($.observe(d),v){const M=Q=>{const V=Q.target.closest(".fui-DialogTitle")||Q.target.closest(".dialog-header")||Q.target===d,w=Q.target.closest('button, input, textarea, a, [role="button"]');if(V&&!w&&Q.button===0){f=!0;const J=d.getBoundingClientRect();b=Q.clientX-J.left,g=Q.clientY-J.top,d.style.transition="none",Q.preventDefault()}},G=Q=>{if(!f)return;const V=window.innerWidth,w=window.innerHeight,J=d.offsetWidth,me=d.offsetHeight,W=10;let I=Q.clientX-b,T=Q.clientY-g;I=Math.min(Math.max(W,I),V-J-W),T=Math.min(Math.max(W,T),w-me-W),d.style.left=`${I}px`,d.style.top=`${T}px`},O=()=>{f&&(f=!1,d.style.transition="")};return d.addEventListener("mousedown",M),window.addEventListener("mousemove",G),window.addEventListener("mouseup",O),()=>{clearTimeout(X),$.disconnect(),d.removeEventListener("mousedown",M),window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",O)}}return()=>{clearTimeout(X),$.disconnect()}},[r,m])};function Jm({isOpen:m,onClose:r,isDarkTheme:d}){const c=p.useRef(null);return Lu(c,m),s.jsx(Ho,{open:m,onOpenChange:r,children:s.jsx(Bo,{ref:c,className:`about-dialog-surface ${d?"dark-theme":"light-theme"}`,children:s.jsxs(Uo,{children:[s.jsx(qo,{children:s.jsx("div",{className:"about-dialog-header",children:"About"})}),s.jsx(Mu,{className:"about-dialog-content",children:s.jsxs("div",{className:"about-app-info",children:[s.jsx("h2",{children:"MarkdownStudio v1.0.0"}),s.jsx("p",{className:"about-description",children:"A modern, intuitive, and cross-platform markdown editor application."}),s.jsx("hr",{className:"about-divider"}),s.jsx("p",{className:"about-details",children:"Built with productivity in mind. All your markdown files are organized efficiently."}),s.jsx("p",{className:"about-copyright",children:"© 2026 @platohe. All rights reserved."})]})}),s.jsx(Yo,{children:s.jsx(_t,{appearance:"primary",onClick:r,children:"Close"})})]})})})}const Oy=Object.freeze(Object.defineProperty({__proto__:null,default:Jm},Symbol.toStringTag,{value:"Module"})),Hy=({onExitZen:m})=>s.jsx("button",{className:"zen-exit-button",onClick:m,title:"Exit Zen Mode (Esc)","aria-label":"Exit Zen Mode",children:"Exit"}),By=(m,r={x:100,y:100},d=null)=>{try{const c=localStorage.getItem(`window-state-${m}`);if(c){const f=JSON.parse(c),b=f.x>=0&&f.x<=window.innerWidth-100,g=f.y>=0&&f.y<=window.innerHeight-100;if(!b||!g)return{position:r,size:d};const v={position:{x:f.x,y:f.y}};if(d&&f.width&&f.height){const k=f.width>=300&&f.width<=window.innerWidth-100,X=f.height>=200&&f.height<=window.innerHeight-100;k&&X?v.size={width:f.width,height:f.height}:v.size=d}return v}}catch{}return{position:r,size:d}},Uy=(m,r,d=null)=>{try{const c={x:r.x,y:r.y};d&&(c.width=d.width,c.height=d.height),localStorage.setItem(`window-state-${m}`,JSON.stringify(c))}catch{}},Tl=(m,r,d=null)=>{const f=By(m,r,d),[b,g]=p.useState(f.position),[v,k]=p.useState(f.size);return p.useEffect(()=>{Uy(m,b,v)},[m,b,v]),{position:b,setPosition:g,size:v,setSize:k}};function Wm({editorView:m,onClose:r,isVisible:d,mode:c="find"}){const[f,b]=p.useState(""),[g,v]=p.useState(""),[k,X]=p.useState(!1),[B,$]=p.useState(!1),[M,G]=p.useState(!1),[O,Q]=p.useState(0),[V,w]=p.useState(0),{position:J,setPosition:me}=Tl("find-bar",{x:window.innerWidth/2-200,y:150}),[W,I]=p.useState(!1),T=p.useRef({x:0,y:0}),j=c==="findReplace",L=p.useRef(null),q=p.useRef(null),ne=p.useRef(null);p.useEffect(()=>{d&&setTimeout(()=>L.current?.focus(),100)},[d,c]);const ee=R=>{R.target.closest("button")||R.target.closest("input")||R.target.closest("label")||(I(!0),T.current={x:R.clientX-J.x,y:R.clientY-J.y},R.preventDefault())},oe=R=>{if(R.target.closest("button")||R.target.closest("input")||R.target.closest("label"))return;const le=R.touches[0];I(!0),T.current={x:le.clientX-J.x,y:le.clientY-J.y}};p.useEffect(()=>{const R=we=>{if(!W)return;const ye=we.type==="touchmove"?we.touches[0].clientX:we.clientX,ge=we.type==="touchmove"?we.touches[0].clientY:we.clientY,Me=ye-T.current.x,pe=ge-T.current.y;me({x:Math.max(0,Math.min(Me,window.innerWidth-100)),y:Math.max(0,Math.min(pe,window.innerHeight-100))})},le=()=>{I(!1)};return W&&(window.addEventListener("mousemove",R),window.addEventListener("mouseup",le),window.addEventListener("touchmove",R,{passive:!1}),window.addEventListener("touchend",le),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",le),window.removeEventListener("touchmove",R),window.removeEventListener("touchend",le),document.body.style.userSelect=""}},[W]),p.useEffect(()=>{f.trim()&&se(f)},[k,B,M]);const se=(R,le="next")=>{if(!m||!R.trim())return;const we=m.state;let ye=we.selection.main.head;try{let ge;if(M){const tt=k?"g":"gi",yt=B?`\\b${R}\\b`:R;ge=new RegExp(yt,tt)}else{const tt=R.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),yt=k?"g":"gi",je=B?`\\b${tt}\\b`:tt;ge=new RegExp(je,yt)}const Me=we.doc.toString(),pe=[];let Se;for(;(Se=ge.exec(Me))!==null;)pe.push({from:Se.index,to:Se.index+Se[0].length,text:Se[0]}),Se.index===ge.lastIndex&&ge.lastIndex++;if(w(pe.length),pe.length===0){Q(0);return}let Ot;le==="next"?Ot=pe.find(tt=>tt.from>ye)||pe[0]:Ot=[...pe].reverse().find(tt=>tt.from<ye)||pe[pe.length-1];const ft=pe.findIndex(tt=>tt.from===Ot.from);Q(ft+1);const St=we.update({selection:{anchor:Ot.from,head:Ot.to},scrollIntoView:!0});m.dispatch(St)}catch{w(0),Q(0)}},K=R=>{R.key==="Enter"?(R.preventDefault(),R.shiftKey?se(f,"previous"):se(f,"next")):R.key==="Escape"&&r()},P=()=>{if(!m||!f.trim())return;const R=m.state,le=R.selection.main;if(!le.empty){const we=R.update({changes:{from:le.from,to:le.to,insert:g},selection:{anchor:le.from,head:le.from+g.length}});m.dispatch(we),setTimeout(()=>se(f,"next"),0)}},_=()=>{if(!m||!f.trim())return;let R;try{if(M){const Me=k?"g":"gi",pe=B?`\\b${f}\\b`:f;R=new RegExp(pe,Me)}else{const Me=f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),pe=k?"g":"gi",Se=B?`\\b${Me}\\b`:Me;R=new RegExp(Se,pe)}const we=m.state.doc.toString(),ye=[];let ge;for(;(ge=R.exec(we))!==null;)ye.push({from:ge.index,to:ge.index+ge[0].length,insert:g}),ge.index===R.lastIndex&&R.lastIndex++;ye.length>0&&(m.dispatch({changes:ye}),w(0),Q(0))}catch(le){console.error("Replace all error:",le)}};return d?s.jsxs("div",{ref:ne,className:`find-bar ${W?"dragging":""}`,style:{left:`${J.x}px`,top:`${J.y}px`,right:"auto"},children:[s.jsxs("div",{className:"find-bar-title-bar",onMouseDown:ee,onTouchStart:oe,children:[s.jsxs("div",{className:"find-bar-title",children:[s.jsx(hb,{className:"title-icon"}),s.jsx("span",{children:j?"Find & Replace":"Find"})]}),s.jsx("button",{className:"find-close-btn",onClick:r,children:s.jsx(cs,{})})]}),s.jsxs("div",{className:"find-bar-content",children:[s.jsxs("div",{className:"find-inputs-group",children:[s.jsxs("div",{className:"find-input-wrapper",children:[s.jsx("input",{ref:L,type:"text",className:"find-input",placeholder:"Find...",value:f,onChange:R=>{b(R.target.value),R.target.value?se(R.target.value):(w(0),Q(0))},onKeyDown:K}),s.jsxs("div",{className:"find-nav-group",children:[s.jsx("button",{className:"find-nav-btn",onClick:()=>se(f,"previous"),disabled:!V,children:s.jsx(mb,{})}),s.jsx("button",{className:"find-nav-btn",onClick:()=>se(f,"next"),disabled:!V,children:s.jsx(pb,{})})]})]}),j&&s.jsx("div",{className:"replace-section",children:s.jsxs("div",{className:"find-input-wrapper",children:[s.jsx("input",{ref:q,type:"text",className:"find-input",placeholder:"Replace with...",value:g,onChange:R=>v(R.target.value),onKeyDown:K}),s.jsxs("div",{className:"find-nav-group",children:[s.jsx("button",{className:"replace-btn",onClick:P,title:"Replace",disabled:!V,children:s.jsx(Ro,{})}),s.jsx("button",{className:"replace-btn",onClick:_,title:"Replace All",disabled:!V,children:s.jsx(gb,{})})]})]})})]}),s.jsxs("div",{className:"find-info-row",children:[s.jsx("span",{className:"match-count",children:V>0?`${O} of ${V}`:f.trim()?"No matches":""}),s.jsxs("div",{className:"find-options-list",children:[s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:k,onChange:R=>X(R.target.checked)}),s.jsx("span",{className:`checkbox-custom ${k?"checked":""}`,children:k&&s.jsx(Pc,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Match case"})]}),s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:B,onChange:R=>$(R.target.checked)}),s.jsx("span",{className:`checkbox-custom ${B?"checked":""}`,children:B&&s.jsx(Pc,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Whole word"})]}),s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:M,onChange:R=>G(R.target.checked)}),s.jsx("span",{className:`checkbox-custom ${M?"checked":""}`,children:M&&s.jsx(Pc,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Regex"})]})]})]})]})]}):null}const qy=Object.freeze(Object.defineProperty({__proto__:null,default:Wm},Symbol.toStringTag,{value:"Module"}));class Yy{constructor(){this.settings={fontSize:100,highContrast:!1,reducedMotion:!1,screenReaderOptimized:!1,keyboardNavigation:!0,focusVisible:!0,dyslexiaFont:!1,largeTargets:!1},this.loadSettings(),this.applySettings(),this.setupEventListeners(),this.dispatchSettingsChange()}dispatchSettingsChange(){typeof document<"u"&&document.dispatchEvent(new CustomEvent("accessibilitySettingsChange",{detail:this.getSettings()}))}loadSettings(){try{const r=localStorage.getItem("markdownstudio_accessibility");r&&(this.settings={...this.settings,...JSON.parse(r)})}catch(r){console.warn("Failed to load accessibility settings:",r)}}saveSettings(){try{localStorage.setItem("markdownstudio_accessibility",JSON.stringify(this.settings))}catch(r){console.warn("Failed to save accessibility settings:",r)}}applySettings(){this.applyFontSize(),this.applyHighContrast(),this.applyReducedMotion(),this.applyScreenReaderOptimizations(),this.applyKeyboardNavigation(),this.applyFocusVisible(),this.applyDyslexiaFont(),this.applyLargeTargets()}setFontSize(r){this.settings.fontSize=Math.max(100,Math.min(200,r)),this.applyFontSize(),this.saveSettings(),this.dispatchSettingsChange()}applyFontSize(){const r=document.documentElement;r.style.fontSize=`${this.settings.fontSize}%`,r.style.setProperty("--base-font-size",`${this.settings.fontSize}%`)}setHighContrast(r){this.settings.highContrast=r,this.applyHighContrast(),this.saveSettings(),this.dispatchSettingsChange()}applyHighContrast(){const r=document.body;this.settings.highContrast?(r.classList.add("high-contrast"),document.documentElement.style.setProperty("--text-contrast-ratio","7:1"),document.documentElement.style.setProperty("--border-contrast","black")):(r.classList.remove("high-contrast"),document.documentElement.style.removeProperty("--text-contrast-ratio"),document.documentElement.style.removeProperty("--border-contrast"))}setReducedMotion(r){this.settings.reducedMotion=r,this.applyReducedMotion(),this.saveSettings(),this.dispatchSettingsChange()}applyReducedMotion(){const r=window.matchMedia("(prefers-reduced-motion: reduce)");this.settings.reducedMotion||r.matches?(document.documentElement.style.setProperty("--transition-duration","0ms"),document.documentElement.style.setProperty("--animation-duration","0ms"),document.body.classList.add("reduced-motion")):(document.documentElement.style.removeProperty("--transition-duration"),document.documentElement.style.removeProperty("--animation-duration"),document.body.classList.remove("reduced-motion"))}setScreenReaderOptimized(r){this.settings.screenReaderOptimized=r,this.applyScreenReaderOptimizations(),this.saveSettings(),this.dispatchSettingsChange()}applyScreenReaderOptimizations(){this.settings.screenReaderOptimized?(document.body.classList.add("screen-reader-optimized"),this.addScreenReaderAnnouncements(),this.improveSemanticStructure()):(document.body.classList.remove("screen-reader-optimized"),this.removeScreenReaderAnnouncements())}setKeyboardNavigation(r){this.settings.keyboardNavigation=r,this.applyKeyboardNavigation(),this.saveSettings(),this.dispatchSettingsChange()}applyKeyboardNavigation(){this.settings.keyboardNavigation?(this.setupKeyboardShortcuts(),this.improveTabOrder()):this.removeKeyboardShortcuts()}setFocusVisible(r){this.settings.focusVisible=r,this.applyFocusVisible(),this.saveSettings(),this.dispatchSettingsChange()}applyFocusVisible(){this.settings.focusVisible?(document.documentElement.style.setProperty("--focus-outline-width","3px"),document.documentElement.style.setProperty("--focus-outline-style","solid"),document.documentElement.style.setProperty("--focus-outline-color","#2196F3")):(document.documentElement.style.removeProperty("--focus-outline-width"),document.documentElement.style.removeProperty("--focus-outline-style"),document.documentElement.style.removeProperty("--focus-outline-color"))}setDyslexiaFont(r){this.settings.dyslexiaFont=r,this.applyDyslexiaFont(),this.saveSettings(),this.dispatchSettingsChange()}applyDyslexiaFont(){this.settings.dyslexiaFont?(document.body.classList.add("dyslexia-font"),document.documentElement.style.setProperty("--font-family-primary",'"OpenDyslexic", "Lexie Readable", Arial, sans-serif')):(document.body.classList.remove("dyslexia-font"),document.documentElement.style.removeProperty("--font-family-primary"))}setLargeTargets(r){this.settings.largeTargets=r,this.applyLargeTargets(),this.saveSettings(),this.dispatchSettingsChange()}applyLargeTargets(){this.settings.largeTargets?(document.documentElement.style.setProperty("--touch-target-min-size","44px"),document.body.classList.add("large-targets")):(document.documentElement.style.removeProperty("--touch-target-min-size"),document.body.classList.remove("large-targets"))}setupEventListeners(){window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{this.applyReducedMotion()}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{this.updateColorScheme()});const c=window.matchMedia("(prefers-contrast: high)");c.addEventListener("change",()=>{c.matches&&this.setHighContrast(!0)})}addScreenReaderAnnouncements(){if(!document.getElementById("accessibility-announcements")){const r=document.createElement("div");r.id="accessibility-announcements",r.setAttribute("aria-live","polite"),r.setAttribute("aria-atomic","true"),r.className="sr-only",document.body.appendChild(r)}}removeScreenReaderAnnouncements(){const r=document.getElementById("accessibility-announcements");r&&r.remove()}announce(r,d="polite"){const c=document.getElementById("accessibility-announcements");c&&(c.setAttribute("aria-live",d),c.textContent=r,setTimeout(()=>{c.textContent=""},1e3))}improveSemanticStructure(){this.ensureLandmarks(),this.ensureHeadingStructure(),this.addAriaLabels()}ensureLandmarks(){[{selector:"header",role:"banner"},{selector:"nav",role:"navigation"},{selector:"main",role:"main"},{selector:"aside",role:"complementary"},{selector:"footer",role:"contentinfo"}].forEach(({selector:d,role:c})=>{document.querySelectorAll(d).forEach(b=>{b.getAttribute("role")||b.setAttribute("role",c)})})}ensureHeadingStructure(){const r=document.querySelectorAll("h1, h2, h3, h4, h5, h6");let d=0;r.forEach(c=>{const f=parseInt(c.tagName.charAt(1));f>d+1&&console.warn("Heading level skipped:",c.textContent),d=f})}addAriaLabels(){document.querySelectorAll("button[title], input[title], a[title]").forEach(d=>{const c=d.getAttribute("title");c&&!d.getAttribute("aria-label")&&d.setAttribute("aria-label",c)})}setupKeyboardShortcuts(){document.addEventListener("keydown",this.handleKeyboardShortcut.bind(this))}removeKeyboardShortcuts(){document.removeEventListener("keydown",this.handleKeyboardShortcut.bind(this))}handleKeyboardShortcut(r){if(r.target.matches("input, textarea, [contenteditable]"))return;const{ctrlKey:d,metaKey:c,altKey:f,shiftKey:b,key:g}=r;(d||c)&&g==="="?(r.preventDefault(),this.setFontSize(this.settings.fontSize+10),this.announce(`Font size increased to ${this.settings.fontSize}%`)):(d||c)&&g==="-"?(r.preventDefault(),this.setFontSize(this.settings.fontSize-10),this.announce(`Font size decreased to ${this.settings.fontSize}%`)):(d||c)&&g==="0"?(r.preventDefault(),this.setFontSize(100),this.announce("Font size reset to 100%")):f&&g==="h"&&(r.preventDefault(),this.setHighContrast(!this.settings.highContrast),this.announce(`High contrast ${this.settings.highContrast?"enabled":"disabled"}`))}improveTabOrder(){document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach((d,c)=>{d.hasAttribute("tabindex")||d.setAttribute("tabindex","0")})}updateColorScheme(){const r=window.matchMedia("(prefers-color-scheme: dark)").matches,d=new CustomEvent("systemColorSchemeChange",{detail:{prefersDark:r}});document.dispatchEvent(d)}validateAccessibility(){const r=[];return this.checkColorContrast(r),this.checkFocusIndicators(r),this.checkAltText(r),this.checkFormLabels(r),{compliant:r.length===0,issues:r}}checkColorContrast(r){this.settings.highContrast&&document.querySelectorAll("p, span, div, h1, h2, h3, h4, h5, h6").forEach(c=>{const f=window.getComputedStyle(c),b=f.color,g=f.backgroundColor;(b===g||g==="rgba(0, 0, 0, 0)")&&r.push({type:"contrast",element:c,message:"Element may have insufficient color contrast"})})}checkFocusIndicators(r){document.querySelectorAll("button, [href], input, select, textarea").forEach(c=>{const b=window.getComputedStyle(c).outline;(b==="none"||b==="")&&r.push({type:"focus",element:c,message:"Element lacks visible focus indicator"})})}checkAltText(r){document.querySelectorAll("img").forEach(c=>{!c.alt&&!c.getAttribute("aria-label")&&r.push({type:"alt-text",element:c,message:"Image missing alt text or aria-label"})})}checkFormLabels(r){document.querySelectorAll("input, select, textarea").forEach(c=>{!(document.querySelector(`label[for="${c.id}"]`)||c.getAttribute("aria-label")||c.getAttribute("aria-labelledby"))&&c.type!=="hidden"&&r.push({type:"form-label",element:c,message:"Form input missing associated label"})})}getSettings(){return{...this.settings}}resetSettings(){this.settings={fontSize:100,highContrast:!1,reducedMotion:!1,screenReaderOptimized:!1,keyboardNavigation:!0,focusVisible:!0,dyslexiaFont:!1,largeTargets:!1},this.applySettings(),this.saveSettings(),this.dispatchSettingsChange(),this.announce("Accessibility settings reset to defaults")}}const vn=new Yy,tu={highlightSpecialChars:!1,tabSize:4,indentUnit:2,lineSeparator:"auto",theme:"light",scrollPastEnd:!1,showLintGutter:!1,showLineNumbers:!0,showFoldGutter:!0,showWritingStats:!0,showPlaceholder:!1},Xy=[{value:"auto",label:"Auto (system default)"},{value:`
`,label:"LF (Unix/Linux)"},{value:`\r
`,label:"CRLF (Windows)"}],Am=[{value:"light",label:"Light"},{value:"dark",label:"Dark"}];function Im({isOpen:m,onClose:r,settings:d,onSettingsChange:c}){const f=p.useRef(null);Lu(f,m);const[b,g]=p.useState("general"),[v,k]=p.useState(()=>{const V=d||tu;return{...V,theme:V.theme||"light"}}),[X,B]=p.useState(()=>vn.getSettings()),$=()=>{c(v),Object.entries(X).forEach(([V,w])=>{Q(V,w)}),r()},M=()=>{const V=d||tu;k({...V,theme:V.theme||"light"}),r()},G=()=>{k(tu),vn.resetSettings(),B(vn.getSettings())},O=(V,w)=>{V==="theme"&&(Am.map(me=>me.value).includes(w)||(w="light")),k(J=>({...J,[V]:w}))},Q=(V,w)=>{const J={...X,[V]:w};switch(B(J),V){case"fontSize":vn.setFontSize(w);break;case"highContrast":vn.setHighContrast(w);break;case"reducedMotion":vn.setReducedMotion(w);break;case"screenReaderOptimized":vn.setScreenReaderOptimized(w);break;case"keyboardNavigation":vn.setKeyboardNavigation(w);break;case"focusVisible":vn.setFocusVisible(w);break;case"dyslexiaFont":vn.setDyslexiaFont(w);break;case"largeTargets":vn.setLargeTargets(w);break}};return s.jsx(Ho,{open:m,onOpenChange:r,children:s.jsx(Bo,{ref:f,className:`settings-dialog-surface ${(v.theme||d?.theme||"light")==="dark"?"dark-theme":"light-theme"}`,children:s.jsxs(Uo,{className:"settings-dialog-body",children:[s.jsx(qo,{children:"Settings"}),s.jsx("div",{className:"settings-fixed-header",children:s.jsxs("div",{className:"custom-tabs",children:[s.jsx("button",{className:`tab-button ${b==="general"?"active":""}`,onClick:()=>g("general"),children:"General"}),s.jsx("button",{className:`tab-button ${b==="accessibility"?"active":""}`,onClick:()=>g("accessibility"),children:"Accessibility"})]})}),s.jsx(Mu,{className:"settings-dialog-scroll-content",children:s.jsxs("div",{className:"settings-tab-content",children:[b==="general"&&s.jsxs("div",{className:"tab-panel",children:[s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Display"}),s.jsx(Mt,{label:"Theme",children:s.jsx("select",{value:v.theme||"light",onChange:V=>O("theme",V.target.value),className:"theme-select",children:Am.map(V=>s.jsx("option",{value:V.value,children:V.label},V.value))})}),s.jsxs(Mt,{children:[s.jsx(sn,{children:"Highlight Special Characters"}),s.jsx(on,{checked:v.highlightSpecialChars,onChange:(V,w)=>O("highlightSpecialChars",w.checked),label:"Show whitespace and non-printable characters"})]}),s.jsxs(Mt,{children:[s.jsx(sn,{children:"Scroll Past End"}),s.jsx(on,{checked:v.scrollPastEnd,onChange:(V,w)=>O("scrollPastEnd",w.checked),label:"Allow scrolling beyond the last line"})]})]}),s.jsx(wl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Indentation"}),s.jsx(Mt,{label:"Tab Size",children:s.jsx(ui,{type:"number",min:"1",max:"8",value:v.tabSize,onChange:(V,w)=>O("tabSize",parseInt(w.value)||4)})}),s.jsx(Mt,{label:"Indent Unit",children:s.jsx(ui,{type:"number",min:"1",max:"8",value:v.indentUnit,onChange:(V,w)=>O("indentUnit",parseInt(w.value)||2)})}),s.jsx(Mt,{label:"Line Separator",children:s.jsx("select",{value:v.lineSeparator,onChange:V=>O("lineSeparator",V.target.value),className:"line-separator-select",children:Xy.map(V=>s.jsx("option",{value:V.value,children:V.label},V.value))})})]}),s.jsx(wl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Editor Features"}),s.jsxs(Mt,{children:[s.jsx(sn,{children:"Show Writing Statistics"}),s.jsx(on,{checked:v.showWritingStats,onChange:(V,w)=>O("showWritingStats",w.checked),label:"Display word count, reading time, and other writing metrics"})]})]}),s.jsx(wl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Gutters"}),s.jsxs(Mt,{children:[s.jsx(sn,{children:"Show Line Numbers"}),s.jsx(on,{checked:v.showLineNumbers,onChange:(V,w)=>O("showLineNumbers",w.checked),label:"Show line numbers in the gutter"})]}),s.jsxs(Mt,{children:[s.jsx(sn,{children:"Show Fold Gutter"}),s.jsx(on,{checked:v.showFoldGutter,onChange:(V,w)=>O("showFoldGutter",w.checked),label:"Show expand/collapse controls for headings"})]}),s.jsxs(Mt,{children:[s.jsx(sn,{children:"Show Lint Gutter"}),s.jsx(on,{checked:v.showLintGutter,onChange:(V,w)=>O("showLintGutter",w.checked),label:"Show syntax errors and warnings in the gutter"})]}),s.jsxs(Mt,{children:[s.jsx(sn,{children:"Show Placeholder"}),s.jsx(on,{checked:v.showPlaceholder,onChange:(V,w)=>O("showPlaceholder",w.checked),label:"Show placeholder text when editor is empty"})]})]})]}),b==="accessibility"&&s.jsxs("div",{className:"tab-panel",children:[s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Visual"}),s.jsxs("div",{className:"setting-item",children:[s.jsxs("label",{htmlFor:"font-size",children:["Font Size: ",X.fontSize,"%"]}),s.jsx("input",{id:"font-size",type:"range",min:"100",max:"200",step:"10",value:X.fontSize,onChange:V=>Q("fontSize",parseInt(V.target.value)),"aria-describedby":"font-size-description",className:"accessibility-range"}),s.jsx("div",{id:"font-size-description",className:"setting-description",children:"Adjust text size up to 200% for better readability"})]}),s.jsxs(Mt,{className:"setting-item",children:[s.jsx(sn,{children:"High Contrast Mode"}),s.jsx(on,{checked:X.highContrast,onChange:(V,w)=>Q("highContrast",w.checked),label:"Increase contrast ratios to meet WCAG AAA standards (4.5:1 or better)"})]}),s.jsxs(Mt,{className:"setting-item",children:[s.jsx(sn,{children:"Dyslexia-Friendly Font"}),s.jsx(on,{checked:X.dyslexiaFont,onChange:(V,w)=>Q("dyslexiaFont",w.checked),label:"Use OpenDyslexic font for improved readability"})]})]}),s.jsx(wl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Motion"}),s.jsxs(Mt,{className:"setting-item",children:[s.jsx(sn,{children:"Reduced Motion"}),s.jsx(on,{checked:X.reducedMotion,onChange:(V,w)=>Q("reducedMotion",w.checked),label:"Minimize animations and transitions for users with vestibular disorders"})]})]}),s.jsx(wl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Interaction"}),s.jsxs(Mt,{className:"setting-item",children:[s.jsx(sn,{children:"Enhanced Keyboard Navigation"}),s.jsx(on,{checked:X.keyboardNavigation,onChange:(V,w)=>Q("keyboardNavigation",w.checked),label:"Enable keyboard shortcuts and improve tab navigation"})]}),s.jsxs(Mt,{className:"setting-item",children:[s.jsx(sn,{children:"Visible Focus Indicators"}),s.jsx(on,{checked:X.focusVisible,onChange:(V,w)=>Q("focusVisible",w.checked),label:"Show clear 3px focus outlines for keyboard navigation"})]}),s.jsxs(Mt,{className:"setting-item",children:[s.jsx(sn,{children:"Large Touch Targets"}),s.jsx(on,{checked:X.largeTargets,onChange:(V,w)=>Q("largeTargets",w.checked),label:"Ensure all interactive elements are at least 44px for motor accessibility"})]})]}),s.jsx(wl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Screen Reader"}),s.jsxs(Mt,{className:"setting-item",children:[s.jsx(sn,{children:"Screen Reader Optimizations"}),s.jsx(on,{checked:X.screenReaderOptimized,onChange:(V,w)=>Q("screenReaderOptimized",w.checked),label:"Improve semantic structure and add ARIA labels for screen readers"})]})]}),s.jsx(wl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Keyboard Shortcuts"}),s.jsxs("div",{className:"shortcuts-list",children:[s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"+"}),s.jsx("span",{children:"Increase font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"-"}),s.jsx("span",{children:"Decrease font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"0"}),s.jsx("span",{children:"Reset font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Alt"})," + ",s.jsx("kbd",{children:"H"}),s.jsx("span",{children:"Toggle high contrast"})]})]})]})]})]})}),s.jsxs(Yo,{children:[s.jsx(_t,{appearance:"secondary",onClick:G,children:"Reset to Defaults"}),s.jsx(_t,{appearance:"secondary",onClick:M,children:"Cancel"}),s.jsx(_t,{appearance:"primary",onClick:$,children:"Save"})]})]})})})}const Gy=Object.freeze(Object.defineProperty({__proto__:null,default:Im},Symbol.toStringTag,{value:"Module"}));p.lazy(()=>$t(()=>Promise.resolve().then(()=>Oy),void 0));p.lazy(()=>$t(()=>Promise.resolve().then(()=>Gy),void 0));p.lazy(()=>$t(()=>Promise.resolve().then(()=>$y),void 0));p.lazy(()=>$t(()=>Promise.resolve().then(()=>Jy),void 0));const Vy=p.lazy(()=>$t(()=>Promise.resolve().then(()=>sv),void 0));p.lazy(()=>$t(()=>Promise.resolve().then(()=>ov),void 0));const Qy=p.lazy(()=>$t(()=>Promise.resolve().then(()=>rv),void 0)),Zy=p.lazy(()=>$t(()=>Promise.resolve().then(()=>fv),void 0)),Ky=p.lazy(()=>$t(()=>Promise.resolve().then(()=>mv),void 0));p.lazy(()=>$t(()=>Promise.resolve().then(()=>qy),void 0));p.lazy(()=>$t(()=>import("./AccessibilityPanel.DnxQOkmq.js"),__vite__mapDeps([3,1,0,4,5,6])));p.lazy(()=>$t(()=>Promise.resolve().then(()=>Ry),void 0));const Fy=({appMode:m,content:r,editorView:d,fileId:c,visible:f,activeTab:b,onTabChange:g,onUndockPanel:v,dockedPanels:k=["preview","outline","property","history","snippet"],onNavigate:X,onUpdateProperty:B,onRestoreHistory:$,onMoveSection:M,onInsertSnippet:G,isDarkTheme:O,activeLine:Q=0})=>{const V=p.useRef({ratio:0,pixel:0}),w=p.useRef({tabId:null,startY:0,startTime:0}),J=p.useRef(null),me=p.useRef(null),W=(j,L)=>{const q=j.touches[0];w.current={tabId:L,startY:q.clientY,startTime:Date.now()},J.current&&clearTimeout(J.current),J.current=setTimeout(()=>{v&&w.current.tabId&&(v(w.current.tabId),w.current.tabId=null)},600)},I=j=>{if(!w.current.tabId)return;const q=j.touches[0].clientY-w.current.startY;Math.abs(q)>10&&J.current&&(clearTimeout(J.current),J.current=null),Math.abs(q)>50&&v&&(v(w.current.tabId),w.current.tabId=null,J.current&&(clearTimeout(J.current),J.current=null))},T=()=>{J.current&&(clearTimeout(J.current),J.current=null),w.current.tabId=null};return f?s.jsxs("div",{className:"right-panel-container",children:[m==="edit"&&s.jsx("div",{className:"right-panel-tabs",ref:me,onDragOver:j=>{j.preventDefault(),j.stopPropagation()},onDrop:j=>{j.stopPropagation()},onTouchMove:I,onTouchEnd:T,children:s.jsxs(bb,{selectedValue:b,onTabSelect:(j,L)=>g(L.value),children:[k.includes("preview")&&s.jsx(as,{value:"preview",draggable:!0,onDragStart:j=>{j.dataTransfer.setData("tabId","preview"),j.dataTransfer.effectAllowed="move"},onTouchStart:j=>W(j,"preview"),children:"Preview"}),k.includes("outline")&&s.jsx(as,{value:"outline",draggable:!0,onDragStart:j=>{j.dataTransfer.setData("tabId","outline"),j.dataTransfer.effectAllowed="move"},onTouchStart:j=>W(j,"outline"),children:"Outline"}),k.includes("property")&&s.jsx(as,{value:"property",draggable:!0,onDragStart:j=>{j.dataTransfer.setData("tabId","property"),j.dataTransfer.effectAllowed="move"},onTouchStart:j=>W(j,"property"),children:"Property"}),k.includes("history")&&s.jsx(as,{value:"history",draggable:!0,onDragStart:j=>{j.dataTransfer.setData("tabId","history"),j.dataTransfer.effectAllowed="move"},onTouchStart:j=>W(j,"history"),children:"History"}),k.includes("snippet")&&s.jsx(as,{value:"snippet",draggable:!0,onDragStart:j=>{j.dataTransfer.setData("tabId","snippet"),j.dataTransfer.effectAllowed="move"},onTouchStart:j=>W(j,"snippet"),children:"Snippets"})]})}),s.jsxs("div",{className:"right-panel-content",children:[(k.includes("preview")||m==="view")&&s.jsx("div",{className:`tab-panel ${m==="view"||b==="preview"?"active":""}`,children:s.jsx(rs,{content:r,visible:m==="view"||b==="preview",scrollStateRef:V,onJumpToLine:X,activeLine:Q})}),k.includes("outline")&&s.jsx("div",{className:`tab-panel ${b==="outline"?"active":""}`,children:s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Outline..."}),children:s.jsx(Qy,{content:r,visible:b==="outline",onNavigate:X,onMoveSection:M,inline:!0,activeLine:Q})})}),k.includes("property")&&s.jsx("div",{className:`tab-panel ${b==="property"?"active":""}`,children:s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Properties..."}),children:s.jsx(Zy,{content:r,visible:b==="property",inline:!0,onUpdate:B})})}),k.includes("history")&&s.jsx("div",{className:`tab-panel ${b==="history"?"active":""}`,children:s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading History..."}),children:s.jsx(Ky,{fileId:c,visible:b==="history",inline:!0,onRestore:$})})}),k.includes("snippet")&&s.jsx("div",{className:`tab-panel ${b==="snippet"?"active":""}`,children:s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Snippets..."}),children:s.jsx(Vy,{visible:b==="snippet",inline:!0,onInsert:G,isDarkTheme:O})})})]})]}):null},Pm=({isOpen:m,onClose:r,actions:d,isDark:c})=>{const[f,b]=p.useState(""),[g,v]=p.useState(0),{position:k,setPosition:X}=Tl("command-palette",{x:window.innerWidth/2-250,y:100}),[B,$]=p.useState(!1),M=p.useRef({x:0,y:0}),G=p.useRef(null),O=p.useRef(null),Q=p.useRef(null),V=p.useMemo(()=>{let W=d.filter(T=>!T.disabled);if(!f)return W;const I=f.toLowerCase();return W.filter(T=>T.label.toLowerCase().includes(I)||T.id.toLowerCase().includes(I))},[d,f]);p.useEffect(()=>{m&&(b(""),v(0),setTimeout(()=>G.current?.focus(),100))},[m]),p.useEffect(()=>{v(0)},[f]);const w=W=>{W.key==="ArrowDown"?(W.preventDefault(),v(I=>(I+1)%V.length)):W.key==="ArrowUp"?(W.preventDefault(),v(I=>(I-1+V.length)%V.length)):W.key==="Enter"?(W.preventDefault(),V[g]&&(V[g].onExecute(),r())):W.key==="Escape"&&r()},J=W=>{W.target.closest(".command-palette-close")||W.target.closest(".command-palette-search-wrapper")||W.target.closest(".command-palette-content")||($(!0),M.current={x:W.clientX-k.x,y:W.clientY-k.y},W.preventDefault())},me=W=>{if(W.target.closest(".command-palette-close")||W.target.closest(".command-palette-search-wrapper")||W.target.closest(".command-palette-content"))return;const I=W.touches[0];$(!0),M.current={x:I.clientX-k.x,y:I.clientY-k.y}};return p.useEffect(()=>{const W=T=>{if(!B)return;const j=T.type==="touchmove"?T.touches[0].clientX:T.clientX,L=T.type==="touchmove"?T.touches[0].clientY:T.clientY,q=j-M.current.x,ne=L-M.current.y;X({x:Math.max(0,Math.min(q,window.innerWidth-100)),y:Math.max(0,Math.min(ne,window.innerHeight-100))})},I=()=>{$(!1)};return B&&(window.addEventListener("mousemove",W),window.addEventListener("mouseup",I),window.addEventListener("touchmove",W,{passive:!1}),window.addEventListener("touchend",I),window.addEventListener("touchcancel",I),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",W),window.removeEventListener("mouseup",I),window.removeEventListener("touchmove",W),window.removeEventListener("touchend",I),window.removeEventListener("touchcancel",I),document.body.style.userSelect=""}},[B]),p.useEffect(()=>{if(!m)return;const W=I=>{if(Q.current&&!Q.current.contains(I.target)){if(I.target.closest('[aria-label="Command Palette"]'))return;r()}};return document.addEventListener("mousedown",W),()=>document.removeEventListener("mousedown",W)},[m,r]),p.useEffect(()=>{const W=O.current?.querySelector(".command-item.selected");W&&W.scrollIntoView({block:"nearest"})},[g]),m?s.jsx("div",{className:"command-palette-overlay",children:s.jsxs("div",{ref:Q,className:`command-palette-surface ${B?"dragging":""} ${c?"dark-theme":"light-theme"}`,style:{left:`${k.x}px`,top:`${k.y}px`},children:[s.jsxs("div",{className:"command-palette-title-bar",onMouseDown:J,onTouchStart:me,children:[s.jsxs("div",{className:"command-palette-title",children:[s.jsx(yb,{className:"title-icon"}),s.jsx("span",{children:"Command Palette"})]}),s.jsx("button",{className:"command-palette-close",onClick:r,children:s.jsx(cs,{})})]}),s.jsxs("div",{className:"command-palette-search-wrapper",children:[s.jsx(Um,{className:"command-palette-icon"}),s.jsx("input",{ref:G,className:"command-palette-input",placeholder:"Type a command or search...",value:f,onChange:W=>b(W.target.value),onKeyDown:w})]}),s.jsx("div",{className:"command-palette-content",children:s.jsx("div",{className:"command-list",ref:O,children:V.length>0?V.map((W,I)=>s.jsxs("div",{className:`command-item ${I===g?"selected":""}`,onClick:()=>{W.onExecute(),r()},onMouseEnter:()=>v(I),children:[s.jsx("span",{className:"command-item-icon",children:W.icon}),s.jsx("span",{className:"command-item-label",children:W.label}),W.shortcut&&s.jsx("span",{className:"command-item-shortcut",children:W.shortcut})]},W.id)):s.jsx("div",{className:"command-no-results",children:"No commands found"})})})]})}):null},Jy=Object.freeze(Object.defineProperty({__proto__:null,default:Pm},Symbol.toStringTag,{value:"Module"})),Wy=`# Comprehensive Math Formula Test Suite

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

`,Iy=`# Comprehensive Mermaid Test Suite\r
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
`,ep=(m,r)=>{if(!m)return[];const d=[];return m.split(/\n### |^### /m).slice(1).forEach((f,b)=>{if(!f.trim())return;const g=f.split(`
`),v=g[0].trim();if(!v)return;let k=g.slice(1).join(`
`).trim();if(r==="mermaid"){const X=k.match(/```mermaid[\s\S]*?```/);X&&(k=X[0])}d.push({id:`${r}-file-${b}`,name:v,content:k,type:r})}),d},Py=ep(Wy,"math"),ev=ep(Iy,"mermaid"),tv=[{id:"alert-note",name:"Note",content:`> [!NOTE]
> Highlights information that users should take into account.`},{id:"alert-tip",name:"Tip",content:`> [!TIP]
> Optional information to help a user be more successful.`},{id:"alert-important",name:"Important",content:`> [!IMPORTANT]
> Crucial information users need to know.`},{id:"alert-warning",name:"Warning",content:`> [!WARNING]
> Critical content demanding immediate user attention.`},{id:"alert-caution",name:"Caution",content:`> [!CAUTION]
> Negative potential consequences of an action.`}].map(m=>({...m,type:"alert"})),nv=[{id:"util-table",name:"Table",content:`| Header 1 | Header 2 |
| :--- | :--- |
| Cell 1 | Cell 2 |`},{id:"util-task",name:"Task List",content:`- [ ] Task 1
- [x] Completed task
- [ ] Task 2`},{id:"util-details",name:"Collapsible",content:`<details>
  <summary>Click to expand</summary>
  
  This is hidden content.
</details>`},{id:"util-footnote",name:"Footnote",content:`Here is a simple footnote[^1].

[^1]: This is the footnote content.`},{id:"util-link",name:"Link (Title)",content:'[Google](https://google.com "Search Engine")'}].map(m=>({...m,type:"utility"})),av=[{id:"code-py",name:"Python",content:'```python\ndef hello_world():\n    print("Hello, World!")\n```'},{id:"code-js",name:"Javascript",content:'```javascript\nfunction helloWorld() {\n  console.log("Hello, World!");\n}\n```'},{id:"code-css",name:"CSS",content:"```css\n.container {\n  display: flex;\n  justify-content: center;\n}\n```"},{id:"code-html",name:"HTML",content:'```html\n<div class="card">\n  <h1>Title</h1>\n  <p>Description</p>\n</div>\n```'}].map(m=>({...m,type:"code"})),Ia=[...Py,...ev,...tv,...nv,...av],lv=Xo().use(Go).use(Au).use(Vo).use(Du).use(Qo),iv=Xo().use(Go).use(Cu).use(Vo,{allowDangerousHtml:!0}).use(Qo,{allowDangerousHtml:!0});function Dm({snippet:m,isSelected:r,onSelect:d,isDarkTheme:c,onDoubleClick:f}){const[b,g]=p.useState("");return p.useEffect(()=>{let v=!0;return(async()=>{if(m.type==="math"){const X=lv.processSync(m.content);v&&g(String(X))}else if(m.type==="mermaid")try{const{default:X}=await $t(async()=>{const{default:G}=await import("./vendor-visual.B_Q0hmov.js").then(O=>O.bC);return{default:G}},__vite__mapDeps([2,0,1]));X.initialize({startOnLoad:!1,theme:c?"dark":"default",securityLevel:"loose",fontFamily:"inherit"});const B=m.content.replace(/^```mermaid\s*/,"").replace(/\s*```$/,""),$=`mermaid-tile-${m.id.replace(/-/g,"_")}-${Math.random().toString(36).substr(2,9)}`,{svg:M}=await X.render($,B);v&&g(M)}catch(X){console.error("Tile rendering failed:",X),v&&g('<div class="error">Error</div>')}else{let X=m.content;if(m.type==="alert"){const B={note:"ℹ️",tip:"💡",important:"🔔",warning:"⚠️",caution:"⚡"},$=X.match(/\[!(\w+)\]/);if($){const M=$[1].toLowerCase(),G=B[M]||"ℹ️",O=M.charAt(0).toUpperCase()+M.slice(1);X=X.replace(/> \[!(\w+)\](.*)/,`> **${G} ${O}**`)}}try{const B=iv.processSync(X);v&&g(String(B))}catch(B){console.error("Markdown rendering failed:",B),v&&g('<div class="error">Error</div>')}}})(),()=>{v=!1}},[m,c]),s.jsxs("div",{className:`snippet-tile snippet-tile-${m.type} ${r?"active":""}`,onClick:d,onDoubleClick:f,children:[s.jsx("div",{className:"tile-preview",dangerouslySetInnerHTML:{__html:b}}),s.jsxs("div",{className:"tile-info",children:[s.jsx("span",{className:"tile-type",children:m.type}),s.jsx("span",{className:"tile-name",children:m.name})]})]})}const tp=p.memo(({visible:m,onClose:r,onDock:d,onInsert:c,isDarkTheme:f,inline:b=!1})=>{const[g,v]=p.useState(0),{position:k,setPosition:X}=Tl("snippet-panel",{x:window.innerWidth-450,y:70}),[B,$]=p.useState(!1),M=p.useRef({x:0,y:0}),G=p.useRef(null),O=p.useRef(null),Q=typeof window<"u"&&window.innerWidth<=768;Lu(O,m&&!b&&!Q),p.useEffect(()=>{m&&setTimeout(()=>G.current?.focus(),100)},[m]);const w=T=>{let j=b?2:5;if(G.current){const q=window.getComputedStyle(G.current).getPropertyValue("grid-template-columns");q&&(j=q.split(" ").filter(ne=>ne.length>0).length)}T.key==="ArrowRight"?(T.preventDefault(),v(L=>(L+1)%Ia.length)):T.key==="ArrowLeft"?(T.preventDefault(),v(L=>(L-1+Ia.length)%Ia.length)):T.key==="ArrowDown"?(T.preventDefault(),v(L=>Math.min(Ia.length-1,L+j))):T.key==="ArrowUp"?(T.preventDefault(),v(L=>Math.max(0,L-j))):T.key==="Enter"&&(T.preventDefault(),J())};p.useEffect(()=>{const T=G.current?.querySelector(".snippet-tile.active");T&&T.scrollIntoView({block:"nearest",behavior:"smooth"})},[g]);const J=()=>{Ia[g]&&c(Ia[g].content)},me=T=>{b||T.target.closest(".snippet-panel-close")||T.target.closest(".snippet-dialog-content")||($(!0),M.current={x:T.clientX-k.x,y:T.clientY-k.y},T.preventDefault())},W=T=>{if(b||T.target.closest(".snippet-panel-close")||T.target.closest(".snippet-dialog-content"))return;const j=T.touches[0];$(!0),M.current={x:j.clientX-k.x,y:j.clientY-k.y}};if(p.useEffect(()=>{const T=L=>{if(!B)return;const q=L.type==="touchmove"?L.touches[0].clientX:L.clientX,ne=L.type==="touchmove"?L.touches[0].clientY:L.clientY,ee=q-M.current.x,oe=ne-M.current.y,se=window.innerWidth-100,K=window.innerHeight-100;X({x:Math.max(0,Math.min(ee,se)),y:Math.max(0,Math.min(oe,K))})},j=L=>{if(B){$(!1);const q=L.type==="touchend"||L.type==="touchcancel"?L.changedTouches?L.changedTouches[0].clientX:0:L.clientX,ne=L.type==="touchend"||L.type==="touchcancel"?L.changedTouches?L.changedTouches[0].clientY:0:L.clientY;document.elementsFromPoint(q,ne).some(oe=>oe.classList.contains("right-panel-tabs"))&&d&&d()}};return B&&(window.addEventListener("mousemove",T),window.addEventListener("mouseup",j),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",j),window.addEventListener("touchcancel",j),document.body.style.userSelect="none",document.body.classList.add("resizing-panel")),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",j),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",j),window.removeEventListener("touchcancel",j),document.body.style.userSelect="",document.body.classList.remove("resizing-panel")}},[B,d]),p.useEffect(()=>{if(!(!m||!(typeof window<"u"&&window.innerWidth<=768)||b))return document.body.classList.add("mobile-panel-open"),()=>document.body.classList.remove("mobile-panel-open")},[m,b]),!m)return null;if(!b&&!Q)return s.jsx(Ho,{open:m,onOpenChange:(T,j)=>!j.open&&r(),children:s.jsx(Bo,{className:`snippet-panel ${f?"dark-theme":"light-theme"}`,children:s.jsxs(Uo,{children:[s.jsx(qo,{children:s.jsx("div",{className:"title-area",style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[s.jsx(ci,{}),s.jsx("span",{children:"Snippets"})]})})}),s.jsx(Mu,{className:"snippet-dialog-content",children:s.jsx("div",{ref:G,className:"snippet-grid",tabIndex:0,onKeyDown:w,children:Ia.map((T,j)=>s.jsx(Dm,{snippet:T,isSelected:g===j,isDarkTheme:f,onSelect:()=>v(j),onDoubleClick:J},T.id))})}),s.jsxs(Yo,{children:[s.jsx(_t,{appearance:"secondary",onClick:r,children:"Cancel"}),s.jsx(_t,{appearance:"primary",onClick:J,children:"Insert"})]})]})})});const I=s.jsxs("div",{className:`snippet-panel-container ${f?"dark-theme":"light-theme"} ${Q?"is-mobile":""} ${b?"inline-mode":""}`,ref:O,style:b?{}:Q?{}:{left:`${k.x}px`,top:`${k.y}px`,right:"auto"},children:[s.jsxs("div",{className:"snippet-panel-header",onMouseDown:b?void 0:me,onTouchStart:b?void 0:W,children:[s.jsxs("div",{className:"title-area",children:[s.jsx(ci,{}),s.jsx("span",{children:"Snippets"})]}),!b&&s.jsx(_t,{appearance:"subtle",icon:s.jsx(cs,{}),onClick:r,"aria-label":"Close",className:"snippet-dialog-close"})]}),s.jsx("div",{className:"snippet-dialog-content",children:s.jsx("div",{ref:G,className:"snippet-grid",tabIndex:0,onKeyDown:w,children:Ia.map((T,j)=>s.jsx(Dm,{snippet:T,isSelected:g===j,isDarkTheme:f,onSelect:()=>v(j),onDoubleClick:J},T.id))})}),s.jsx("div",{className:"snippet-panel-footer",children:s.jsx(_t,{appearance:"primary",onClick:J,children:"Insert"})})]});return Q&&!b?qm.createPortal(I,document.body):I}),sv=Object.freeze(Object.defineProperty({__proto__:null,default:tp},Symbol.toStringTag,{value:"Module"})),zm=`# Markdown Syntax Reference Guide

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
`,np=({isVisible:m,onClose:r,isDarkTheme:d})=>{const[c,f]=p.useState(""),{position:b,setPosition:g,size:v,setSize:k}=Tl("markdown-help-window",{x:100,y:100},{width:500,height:600}),[X,B]=p.useState(!1),[$,M]=p.useState(!1),[G,O]=p.useState({x:0,y:0}),[Q,V]=p.useState({x:0,y:0,width:0,height:0}),w=p.useRef(null);p.useEffect(()=>{m&&f("")},[m]);const J=I=>{I.target.closest(".help-window-header")?(B(!0),O({x:I.clientX-b.x,y:I.clientY-b.y}),I.preventDefault()):I.target.closest(".help-window-resize-handle")&&(M(!0),V({x:I.clientX,y:I.clientY,width:v.width,height:v.height}),I.preventDefault())},me=I=>{const T=I.touches[0];I.target.closest(".help-window-header")?(B(!0),O({x:T.clientX-b.x,y:T.clientY-b.y})):I.target.closest(".help-window-resize-handle")&&(M(!0),V({x:T.clientX,y:T.clientY,width:v.width,height:v.height}))};p.useEffect(()=>{const I=j=>{const L=j.type==="touchmove"?j.touches[0].clientX:j.clientX,q=j.type==="touchmove"?j.touches[0].clientY:j.clientY;if(X){const ne=L-G.x,ee=q-G.y,oe=window.innerWidth-100,se=window.innerHeight-100;g({x:Math.max(0,Math.min(ne,oe)),y:Math.max(0,Math.min(ee,se))})}else if($){const ne=L-Q.x,ee=q-Q.y,oe=Math.max(300,Q.width+ne),se=Math.max(200,Q.height+ee);k({width:Math.min(oe,window.innerWidth-b.x-20),height:Math.min(se,window.innerHeight-b.y-20)})}},T=()=>{B(!1),M(!1)};if(X||$)return document.addEventListener("mousemove",I),document.addEventListener("mouseup",T),document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",T),document.addEventListener("touchcancel",T),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",T),document.removeEventListener("touchcancel",T)}},[X,$,G,Q,b]);const W=p.useMemo(()=>{if(!c.trim())return zm;const I=zm.split(/\n(?=## )/),T=c.toLowerCase(),j=I.filter((L,q)=>q===0&&!L.toLowerCase().includes(T)?!1:L.toLowerCase().includes(T));return j.length===0?`## No results found
Try a different search term.`:j.join(`

`)},[c]);return m?s.jsxs("div",{ref:w,onMouseDown:J,onTouchStart:me,style:{position:"fixed",left:b.x,top:b.y,width:`${v.width}px`,height:`${v.height}px`,backgroundColor:"var(--color-neutral-background1)",boxShadow:"0 8px 32px rgba(0,0,0,0.25)",border:"1px solid var(--color-neutral-stroke1)",zIndex:9999,display:"flex",flexDirection:"column",borderRadius:"8px",overflow:"hidden",resize:"none"},children:[s.jsxs("div",{className:"help-window-header",style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke1)",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:X?"grabbing":"grab",backgroundColor:"var(--color-neutral-background2)",userSelect:"none"},children:[s.jsxs("span",{style:{fontWeight:600,fontSize:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[s.jsx(vb,{})," Markdown Syntax Help"]}),s.jsx(_t,{appearance:"subtle",icon:s.jsx(cs,{}),onClick:r,size:"small"})]}),s.jsx("div",{style:{padding:"12px",borderBottom:"1px solid var(--color-neutral-stroke1)",backgroundColor:"var(--color-neutral-background1)"},children:s.jsx(ui,{contentBefore:s.jsx(Um,{}),placeholder:"Search syntax (e.g., 'table', 'bold', 'image')...",value:c,onChange:(I,T)=>f(T.value),style:{width:"100%"}})}),s.jsx("div",{style:{flex:1,overflow:"auto",padding:"16px",backgroundColor:"var(--color-neutral-background1)"},children:s.jsx("div",{className:"help-preview-container",children:s.jsx(rs,{content:W,visible:!0,inline:!0})})}),s.jsx("div",{className:"help-window-resize-handle",style:{position:"absolute",bottom:0,right:0,width:"20px",height:"20px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, var(--color-neutral-stroke1) 50%)",borderRadius:"0 0 8px 0"}})]}):null},ov=Object.freeze(Object.defineProperty({__proto__:null,default:np},Symbol.toStringTag,{value:"Module"})),ap=p.memo(({content:m,visible:r,onClose:d,onDock:c,onNavigate:f,onMoveSection:b,inline:g=!1,activeLine:v=0})=>{const{position:k,setPosition:X}=Tl("outline-panel",{x:window.innerWidth-300,y:70}),[B,$]=p.useState(!1),[M,G]=p.useState(null),O=p.useRef({x:0,y:0}),Q=p.useRef(null),V=p.useMemo(()=>m?m.split(`
`).map((P,_)=>{const le=P.trim().match(/^(#{1,6})\s+(.*)$/);return le?{level:le[1].length,text:le[2].trim(),line:_+1}:null}).filter(Boolean):[],[m]),w=p.useMemo(()=>{if(!V.length||v<=0)return-1;let K=-1;for(let P=0;P<V.length&&V[P].line<=v;P++)K=P;return K},[V,v]),J=p.useRef(null);p.useEffect(()=>{J.current&&J.current.scrollIntoView({behavior:"smooth",block:"nearest"})},[w]);const me=K=>{g||K.target.closest(".outline-close")||K.target.closest(".outline-content")||($(!0),O.current={x:K.clientX-k.x,y:K.clientY-k.y},K.preventDefault())},W=K=>{if(g||K.target.closest(".outline-close")||K.target.closest(".outline-content"))return;const P=K.touches[0];$(!0),O.current={x:P.clientX-k.x,y:P.clientY-k.y}};p.useEffect(()=>{const K=_=>{if(!B)return;const R=_.type==="touchmove"?_.touches[0].clientX:_.clientX,le=_.type==="touchmove"?_.touches[0].clientY:_.clientY,we=R-O.current.x,ye=le-O.current.y,ge=window.innerWidth-50,Me=window.innerHeight-50;X({x:Math.max(0,Math.min(we,ge)),y:Math.max(0,Math.min(ye,Me))})},P=_=>{if(B){$(!1);const R=_.type==="touchend"||_.type==="touchcancel"?_.changedTouches?_.changedTouches[0].clientX:0:_.clientX,le=_.type==="touchend"||_.type==="touchcancel"?_.changedTouches?_.changedTouches[0].clientY:0:_.clientY;document.elementsFromPoint(R,le).some(ye=>ye.classList.contains("right-panel-tabs"))&&c&&c()}};return B&&(window.addEventListener("mousemove",K),window.addEventListener("mouseup",P),window.addEventListener("touchmove",K,{passive:!1}),window.addEventListener("touchend",P),window.addEventListener("touchcancel",P),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",P),window.removeEventListener("touchmove",K),window.removeEventListener("touchend",P),window.removeEventListener("touchcancel",P),document.body.style.userSelect=""}},[B,c]);const I=(K,P)=>{G(P),K.dataTransfer.effectAllowed="move",K.currentTarget.classList.add("is-being-dragged")},T=K=>{G(null),K.currentTarget.classList.remove("is-being-dragged")},j=(K,P)=>{K.preventDefault(),!(M===null||M===P)&&K.currentTarget.classList.add("drag-over")},L=K=>{K.currentTarget.classList.remove("drag-over")},q=(K,P)=>{if(K.preventDefault(),K.currentTarget.classList.remove("drag-over"),M===null||M===P)return;const _=V[M],R=V[P];b&&_&&R&&b(_.line,R.line)},ne=p.useRef({startIndex:null,currentIndex:null,lastY:0,startTime:0}),ee=(K,P)=>{const _=K.touches[0];ne.current={startIndex:P,currentIndex:P,lastY:_.clientY,startTime:Date.now()}},oe=K=>{if(ne.current.startIndex===null)return;const P=K.touches[0],_=Math.abs(P.clientY-ne.current.lastY);if(M===null&&(_>10||Date.now()-ne.current.startTime>200)&&(G(ne.current.startIndex),K.cancelable&&K.preventDefault()),M!==null){K.cancelable&&K.preventDefault();const le=document.elementFromPoint(P.clientX,P.clientY)?.closest(".outline-item");if(le){const we=Array.from(Q.current.querySelectorAll(".outline-item")),ye=we.indexOf(le);ye!==-1&&ye!==ne.current.currentIndex&&(we.forEach(ge=>ge.classList.remove("drag-over")),le.classList.add("drag-over"),ne.current.currentIndex=ye)}}},se=K=>{if(M!==null){const P=ne.current.currentIndex;if(P!==null&&P!==M){const _=V[M],R=V[P];b&&_&&R&&b(_.line,R.line)}}G(null),ne.current={startIndex:null,currentIndex:null,lastY:0,startTime:0},Q.current?.querySelectorAll(".outline-item").forEach(P=>P.classList.remove("drag-over"))};return r?s.jsxs("div",{className:`outline-view ${B?"dragging":""} ${g?"inline-mode":""}`,style:g?{}:{left:`${k.x}px`,top:`${k.y}px`,right:"auto"},ref:Q,children:[s.jsxs("div",{className:"outline-header",onMouseDown:g?void 0:me,onTouchStart:g?void 0:W,children:[s.jsx("h3",{children:"Outline"}),s.jsx("span",{className:"outline-hint",children:"Drag to rearrange"}),!g&&s.jsx("button",{className:"outline-close",onClick:d,children:"×"})]}),s.jsx("div",{className:"outline-content",children:V.length>0?s.jsx("ul",{className:"outline-list",children:V.map((K,P)=>s.jsxs("li",{className:`outline-item level-${K.level} ${P===w?"active":""}`,onClick:()=>f(K.line),ref:P===w?J:null,draggable:!0,onDragStart:_=>I(_,P),onDragEnd:T,onDragOver:_=>j(_,P),onDragLeave:L,onDrop:_=>q(_,P),onTouchStart:_=>ee(_,P),onTouchMove:oe,onTouchEnd:se,title:"Drag to rearrange document section",children:[s.jsxs("span",{className:"outline-level",children:["H",K.level]}),s.jsx("span",{className:"outline-text",children:K.text})]},`${P}-${K.line}`))}):s.jsx("p",{className:"outline-empty",children:"No headings found."})})]}):null}),rv=Object.freeze(Object.defineProperty({__proto__:null,default:ap},Symbol.toStringTag,{value:"Module"})),cv=m=>{if(!m)return null;const r=m.match(/^(---\r?\n([\s\S]*?)\r?\n---|\+\+\+\r?\n([\s\S]*?)\r?\n\+\+\+)\r?\n/);if(!r)return null;const d=r[2]||r[3];try{const c=Zm.load(d);return c&&typeof c=="object"&&Object.keys(c).length>0?c:null}catch(c){return console.error("YAML parsing error:",c),null}},uv=m=>{if(!m||Object.keys(m).length===0)return"";try{return`---
${Zm.dump(m)}---
`}catch(r){return console.error("YAML stringify error:",r),""}},dv=(m,r)=>{const d=/^(---\r?\n[\s\S]*?\r?\n---|\+\+\+\r?\n[\s\S]*?\r?\n\+\+\+)\r?\n?/,c=uv(r);return m.match(d)?m.replace(d,c):c?`${c}${m}`:m},lp=({content:m,visible:r,onClose:d,onUpdate:c,onDock:f,inline:b=!1})=>{const{position:g,setPosition:v}=Tl("metadata-panel",{x:window.innerWidth-340,y:70}),[k,X]=p.useState(!1),B=p.useRef({x:0,y:0}),$=p.useRef(null),M=p.useMemo(()=>cv(m)||{},[m]),[G,O]=p.useState(M);p.useEffect(()=>{O(M)},[M]);const Q=(j,L)=>{const q={...G,[j]:L};O(q),c&&c(q)},V=j=>{const L={...G};delete L[j],O(L),c&&c(L)},w=()=>{const j=`key_${Object.keys(G).length+1}`;Q(j,"value")},J=j=>{b||j.target.closest(".metadata-close")||j.target.closest(".metadata-content")||(X(!0),B.current={x:j.clientX-g.x,y:j.clientY-g.y},j.preventDefault())},me=j=>{if(b||j.target.closest(".metadata-close")||j.target.closest(".metadata-content"))return;const L=j.touches[0];X(!0),B.current={x:L.clientX-g.x,y:L.clientY-g.y}};if(p.useEffect(()=>{const j=q=>{if(!k)return;const ne=q.type==="touchmove"?q.touches[0].clientX:q.clientX,ee=q.type==="touchmove"?q.touches[0].clientY:q.clientY,oe=ne-B.current.x,se=ee-B.current.y,K=window.innerWidth-50,P=window.innerHeight-50;v({x:Math.max(0,Math.min(oe,K)),y:Math.max(0,Math.min(se,P))})},L=q=>{if(k){X(!1);const ne=q.type==="touchend"||q.type==="touchcancel"?q.changedTouches?q.changedTouches[0].clientX:0:q.clientX,ee=q.type==="touchend"||q.type==="touchcancel"?q.changedTouches?q.changedTouches[0].clientY:0:q.clientY;document.elementsFromPoint(ne,ee).some(se=>se.classList.contains("right-panel-tabs"))&&f&&f()}};return k&&(window.addEventListener("mousemove",j),window.addEventListener("mouseup",L),window.addEventListener("touchmove",j,{passive:!1}),window.addEventListener("touchend",L),window.addEventListener("touchcancel",L),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",L),window.removeEventListener("touchmove",j),window.removeEventListener("touchend",L),window.removeEventListener("touchcancel",L),document.body.style.userSelect=""}},[k,f]),p.useEffect(()=>{if(!(!r||!(typeof window<"u"&&window.innerWidth<=768)||b))return document.body.classList.add("mobile-panel-open"),()=>document.body.classList.remove("mobile-panel-open")},[r,b]),!r)return null;const W=typeof window<"u"&&window.innerWidth<=768,I=typeof document<"u"&&document.querySelector(".dark-theme")!==null,T=s.jsxs("div",{className:`metadata-panel ${k?"dragging":""} ${b?"inline-mode":""} ${W&&!b?"is-mobile":""} ${I?"dark-theme-panel":""}`,style:b?{}:W?{}:{left:`${g.x}px`,top:`${g.y}px`,right:"auto"},ref:$,children:[s.jsxs("div",{className:"metadata-header",onMouseDown:b?void 0:J,onTouchStart:b?void 0:me,children:[s.jsx("h3",{children:"Document Property"}),s.jsxs("div",{className:"metadata-header-actions",children:[!W&&s.jsx(_t,{icon:s.jsx(wm,{}),appearance:"subtle",size:"small",onClick:w,title:"Add property key"}),!b&&s.jsx("button",{className:"metadata-close",onClick:d,children:"×"})]})]}),s.jsx("div",{className:"metadata-content",children:Object.keys(G).length>0?s.jsxs("table",{className:"metadata-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Key"}),s.jsx("th",{children:"Value"}),s.jsx("th",{style:{width:"32px"}})]})}),s.jsx("tbody",{children:Object.entries(G).map(([j,L])=>s.jsxs("tr",{children:[s.jsx("td",{className:"metadata-key",children:s.jsx(ui,{value:j,appearance:"underline",fluid:!0,onChange:(q,ne)=>{const ee={...G};delete ee[j],ee[ne.value]=L,O(ee),c&&c(ee)}})}),s.jsx("td",{className:"metadata-value",children:s.jsx(ui,{value:String(L),appearance:"underline",fluid:!0,onChange:(q,ne)=>Q(j,ne.value)})}),s.jsx("td",{children:s.jsx(_t,{icon:s.jsx(Ym,{}),appearance:"subtle",size:"small",onClick:()=>V(j)})})]},j))})]}):s.jsx("div",{className:"metadata-empty",children:s.jsx("p",{children:"No property found."})})}),W&&!b&&s.jsx("div",{className:"metadata-footer",children:s.jsx(_t,{icon:s.jsx(wm,{}),appearance:"primary",onClick:w,children:"Add Property"})})]});return W&&!b?qm.createPortal(T,document.body):T},fv=Object.freeze(Object.defineProperty({__proto__:null,default:lp},Symbol.toStringTag,{value:"Module"}));class hv{constructor(){this.dbName="MarkdownStudio_History",this.storeName="snapshots",this.db=null,this.initDB()}async initDB(){return new Promise((r,d)=>{const c=indexedDB.open(this.dbName,1);c.onerror=()=>d(c.error),c.onsuccess=()=>{this.db=c.result,r(this.db)},c.onupgradeneeded=f=>{const b=f.target.result;if(!b.objectStoreNames.contains(this.storeName)){const g=b.createObjectStore(this.storeName,{keyPath:"id"});g.createIndex("fileId","fileId",{unique:!1}),g.createIndex("timestamp","timestamp",{unique:!1})}}})}async ensureDB(){return this.db||await this.initDB(),this.db}async createSnapshot(r,d){if(!r||d===void 0)return;const c=await this.ensureDB(),f={id:Do(),fileId:r,content:d,timestamp:Date.now()};return new Promise((b,g)=>{const X=c.transaction([this.storeName],"readwrite").objectStore(this.storeName).add(f);X.onsuccess=()=>b(f),X.onerror=()=>g(X.error)})}async getSnapshots(r){const d=await this.ensureDB();return new Promise((c,f)=>{const k=d.transaction([this.storeName],"readonly").objectStore(this.storeName).index("fileId").getAll(IDBKeyRange.only(r));k.onsuccess=()=>{const X=k.result.sort((B,$)=>$.timestamp-B.timestamp);c(X)},k.onerror=()=>f(k.error)})}async deleteSnapshot(r){const d=await this.ensureDB();return new Promise((c,f)=>{const v=d.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(r);v.onsuccess=()=>c(),v.onerror=()=>f(v.error)})}async clearHistory(r){const d=await this.ensureDB(),c=await this.getSnapshots(r),b=d.transaction([this.storeName],"readwrite").objectStore(this.storeName);c.forEach(g=>b.delete(g.id))}}const Oo=new hv,ip=({fileId:m,onRestore:r,visible:d,onClose:c,onDock:f,inline:b=!1})=>{const[g,v]=p.useState([]),[k,X]=p.useState(!1),{position:B,setPosition:$}=Tl("history-panel",{x:window.innerWidth-300,y:70}),[M,G]=p.useState(!1),O=p.useRef({x:0,y:0}),Q=p.useRef(null);p.useEffect(()=>{d&&m&&J()},[d,m]);const V=T=>{b||T.target.closest(".history-close")||T.target.closest(".history-list-container")||(G(!0),O.current={x:T.clientX-B.x,y:T.clientY-B.y},T.preventDefault())},w=T=>{if(b||T.target.closest(".history-close")||T.target.closest(".history-list-container"))return;const j=T.touches[0];G(!0),O.current={x:j.clientX-B.x,y:j.clientY-B.y}};p.useEffect(()=>{const T=L=>{if(!M)return;const q=L.type==="touchmove"?L.touches[0].clientX:L.clientX,ne=L.type==="touchmove"?L.touches[0].clientY:L.clientY,ee=q-O.current.x,oe=ne-O.current.y,se=window.innerWidth-50,K=window.innerHeight-50;$({x:Math.max(0,Math.min(ee,se)),y:Math.max(0,Math.min(oe,K))})},j=L=>{if(M){G(!1);const q=L.type==="touchend"||L.type==="touchcancel"?L.changedTouches?L.changedTouches[0].clientX:0:L.clientX,ne=L.type==="touchend"||L.type==="touchcancel"?L.changedTouches?L.changedTouches[0].clientY:0:L.clientY;document.elementsFromPoint(q,ne).some(oe=>oe.classList.contains("right-panel-tabs"))&&f&&f()}};return M&&(window.addEventListener("mousemove",T),window.addEventListener("mouseup",j),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",j),window.addEventListener("touchcancel",j),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",j),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",j),window.removeEventListener("touchcancel",j),document.body.style.userSelect=""}},[M,f]);const J=async()=>{X(!0);try{const T=await Oo.getSnapshots(m);v(T)}catch(T){console.error("Failed to load snapshots:",T)}finally{X(!1)}},me=T=>{window.confirm(`Restore this version from ${new Date(T.timestamp).toLocaleString()}? Current unsaved changes will be lost.`)&&r(T.content)},W=async(T,j)=>{j.stopPropagation();try{await Oo.deleteSnapshot(T),v(L=>L.filter(q=>q.id!==T))}catch(L){console.error("Failed to delete snapshot:",L)}},I=T=>{const j=new Date(T),q=new Date-j;return q<6e4?"Just now":q<36e5?`${Math.floor(q/6e4)}m ago`:q<864e5?`${Math.floor(q/36e5)}h ago`:j.toLocaleDateString()+" "+j.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return d?s.jsxs("div",{className:`history-panel ${M?"dragging":""} ${b?"inline-mode":""}`,style:b?{}:{left:`${B.x}px`,top:`${B.y}px`,right:"auto"},ref:Q,children:[s.jsxs("div",{className:"history-header",onMouseDown:b?void 0:V,onTouchStart:b?void 0:w,children:[s.jsxs("div",{className:"history-header-title",children:[s.jsx(_o,{}),s.jsx("span",{children:"Version History"}),s.jsx(xb,{appearance:"outline",color:"brand",children:g.length})]}),!b&&s.jsx("button",{className:"history-close",onClick:c,children:"×"})]}),s.jsx("div",{className:"history-list-container",children:k?s.jsx("div",{className:"history-status",children:"Loading history..."}):g.length===0?s.jsx("div",{className:"history-empty",children:" No historical snapshots yet. "}):s.jsx("div",{className:"history-list",children:g.map(T=>s.jsxs("div",{className:"history-item",onClick:()=>me(T),children:[s.jsxs("div",{className:"history-item-info",children:[s.jsx("span",{className:"history-time",children:I(T.timestamp)}),s.jsxs("span",{className:"history-preview",children:[T.content.substring(0,50).replace(/\n/g," "),"..."]})]}),s.jsxs("div",{className:"history-item-actions",children:[s.jsx(he,{content:"Restore this version",relationship:"label",children:s.jsx(_t,{size:"small",icon:s.jsx(os,{}),onClick:j=>{j.stopPropagation(),me(T)},appearance:"subtle"})}),s.jsx(he,{content:"Delete snapshot",relationship:"label",children:s.jsx(_t,{size:"small",icon:s.jsx(Ym,{}),onClick:j=>W(T.id,j),appearance:"subtle"})})]})]},T.id))})}),s.jsx("div",{className:"history-footer",children:s.jsx(_t,{size:"small",onClick:J,children:"Refresh History"})})]}):null},mv=Object.freeze(Object.defineProperty({__proto__:null,default:ip},Symbol.toStringTag,{value:"Module"}));class pv{constructor(){this.isDevelopment=!1,this.levels={error:0,warn:1,info:2,debug:3},this.currentLevel=this.isDevelopment?this.levels.debug:this.levels.error}error(r,...d){this.currentLevel>=this.levels.error&&console.error(`[ERROR] ${r}`,...d)}warn(r,...d){this.currentLevel>=this.levels.warn&&console.warn(`[WARN] ${r}`,...d)}info(r,...d){this.currentLevel>=this.levels.info&&console.info(`[INFO] ${r}`,...d)}debug(r,...d){this.currentLevel>=this.levels.debug&&console.log(`[DEBUG] ${r}`,...d)}log(r,...d){this.debug(r,...d)}component(r,d,...c){this.debug(`[${r}] ${d}`,...c)}service(r,d,...c){this.debug(`[${r}] ${d}`,...c)}}const ga=new pv;function gv(){const m=p.useRef(null),r=p.useRef(!1),d=p.useCallback(g=>{g&&(m.current=g,ga.component("FocusManager","Editor view registered:",!!g))},[]),c=p.useCallback(()=>{r.current=!0,ga.component("FocusManager","Preparing for focus restoration")},[]),f=p.useCallback((g=!1)=>{if(ga.component("FocusManager","restoreFocus called, editorView:",!!m.current,"shouldRestore:",r.current,"force:",g),!r.current&&!g)return ga.component("FocusManager","Not restoring - not prepared"),!1;try{if(m.current&&m.current.focus)return ga.component("FocusManager","Using CodeMirror view.focus()"),m.current.focus(),r.current=!1,!0;const v=document.querySelector(".cm-content");return v?(ga.component("FocusManager","Using fallback - focusing .cm-content"),v.focus(),r.current=!1,!0):m.current&&m.current.dom?(ga.component("FocusManager","Using fallback - focusing editor.dom"),m.current.dom.focus(),r.current=!1,!0):(ga.component("FocusManager","No focusable element found"),!1)}catch(v){return ga.warn("Failed to restore focus:",v),!1}},[]),b=p.useCallback((g,v=!0)=>(...k)=>{v&&c();const X=g(...k);return v&&setTimeout(()=>f(),100),X},[c,f]);return p.useEffect(()=>()=>{r.current=!1},[]),{registerEditor:d,restoreFocus:f,prepareFocusLoss:c,withFocusRestore:b}}var bv=Wb();const yv=ku(bv);class vv{constructor(){this.db=null,this.isInitialized=!1}async initialize(){if(!this.isInitialized)try{const r=await yv({locateFile:c=>c.endsWith(".wasm")?"/mdstudio/sql-wasm.wasm":c}),d=localStorage.getItem("markdownstudio_db");if(d){const c=new Uint8Array(JSON.parse(d));this.db=new r.Database(c)}else this.db=new r.Database,this.createTables();this.isInitialized=!0}catch(r){throw console.error("Failed to initialize database:",r),r}}createTables(){const r=`
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
    `);d.run([r.id,r.name,r.content||"",r.createdAt||new Date().toISOString(),r.modifiedAt||new Date().toISOString(),JSON.stringify(r.tags||[]),JSON.stringify(r.metadata||{})]),d.free(),this.updateSearchIndex(r),this.saveToLocalStorage()}async getFile(r){await this.initialize();const d=this.db.prepare("SELECT * FROM files WHERE id = ?"),c=d.get(r);return d.free(),c?{id:c.id,name:c.name,content:c.content,createdAt:c.created_at,modifiedAt:c.modified_at,tags:JSON.parse(c.tags||"[]"),metadata:JSON.parse(c.metadata||"{}")}:null}async getAllFiles(){await this.initialize();const r=this.db.prepare("SELECT * FROM files ORDER BY modified_at DESC"),d=r.getAsObject([]);return r.free(),d.map(c=>({id:c.id,name:c.name,content:c.content,createdAt:c.created_at,modifiedAt:c.modified_at,tags:JSON.parse(c.tags||"[]"),metadata:JSON.parse(c.metadata||"{}")}))}async deleteFile(r){await this.initialize();const d=this.db.prepare("DELETE FROM files WHERE id = ?");d.run(r),d.free(),this.saveToLocalStorage()}async searchFiles(r,d={}){await this.initialize();let c="SELECT * FROM files_fts WHERE files_fts MATCH ?";const f=[r];d.tags&&d.tags.length>0&&(c+=" AND tags LIKE ?",f.push(`%${d.tags[0]}%`));const b=this.db.prepare(c),g=b.getAsObject(f);return b.free(),g.map(v=>({id:v.id,name:v.name,content:v.content,tags:JSON.parse(v.tags||"[]"),rank:v.rank}))}updateSearchIndex(r){$t(()=>import("./SearchService.D1nxONAv.js"),__vite__mapDeps([7,1,4])).then(d=>{const c=d.default;c.isInitialized?c.addDocument(r):c.initialize([r])})}saveToLocalStorage(){const r=this.db.export();localStorage.setItem("markdownstudio_db",JSON.stringify(Array.from(r)))}async extractLinks(r){const d=/\[\[([^\]|]+)(?:\|([^\]]+))?(?:#([^\]]+))?\]\]/g,c=[];let f;for(;(f=d.exec(r))!==null;)c.push({text:f[0],target:f[1],displayText:f[2]||f[1],heading:f[3]||null,type:"wikilink"});return c}async updateLinks(r,d){await this.initialize(),this.db.run("DELETE FROM links WHERE source_file_id = ?",[r]);const c=await this.extractLinks(d),f=this.db.prepare(`
      INSERT INTO links (source_file_id, target_file_id, link_text, link_type)
      VALUES (?, ?, ?, ?)
    `);for(const b of c)f.run([r,b.target,b.text,b.type]);f.free()}async close(){this.db&&(this.saveToLocalStorage(),this.db.close(),this.db=null,this.isInitialized=!1)}}const xv=new vv,In={getSectionRange:(m,r)=>{const d=m.split(`
`),c=r-1;let f=-1,b=7;for(let v=c;v>=0;v--){const k=d[v].match(/^(#{1,6})\s+/);if(k){f=v,b=k[1].length;break}}if(f===-1){let v=d.findIndex(k=>k.match(/^#{1,6}\s+/));return{start:1,end:v===-1?d.length:v,level:0}}let g=-1;for(let v=f+1;v<d.length;v++){const k=d[v].match(/^(#{1,6})\s+/);if(k&&k[1].length<=b){g=v;break}}return{start:f+1,end:g===-1?d.length:g,level:b}},moveSection:(m,r,d,c)=>{const f=m.split(`
`),b=f.slice(r-1,d),g=[...f.slice(0,r-1),...f.slice(d)];let v=c;return c>d?v-=b.length:c>r&&(v=r),[...g.slice(0,v-1),...b,...g.slice(v-1)].join(`
`)},findBlockRanges:(m,r)=>{const d=m.split(`
`),c=[];return d.forEach((f,b)=>{let g=!1;r==="headings"&&f.match(/^#{1,6}\s+/)&&(g=!0),r==="list-items"&&f.match(/^\s*([-*+]|\d+\.)\s+/)&&(g=!0),r==="code-blocks"&&f.match(/^```/)&&(g=!0),g&&c.push({line:b+1,content:f})}),c}};var wv=Ib(),Sv=Pb();const Tv=ku(Sv);ty.workerSrc=`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ey}/pdf.worker.min.js`;class Ev{constructor(){this.turndownService=null,this.turndownPromise=null}async getTurndownService(){return this.turndownService?this.turndownService:(this.turndownPromise||(this.turndownPromise=$t(()=>import("./vendor-processing.CmTeLQxv.js").then(r=>r.ac),__vite__mapDeps([0,1])).then(r=>{const d=r.default;return this.turndownService=new d({headingStyle:"atx",codeBlockStyle:"fenced",hr:"---",bulletListMarker:"-",emDelimiter:"*",strongDelimiter:"**"}),this.turndownService.addRule("strikethrough",{filter:["del","s","strike"],replacement:c=>`~~${c}~~`}),this.turndownService})),this.turndownPromise)}async convertWordToMarkdown(r){try{const d=await r.arrayBuffer(),f=(await wv.convertToHtml({arrayBuffer:d})).value;return(await this.getTurndownService()).turndown(f)}catch(d){throw console.error("Error converting Word to Markdown:",d),new Error("Failed to convert Word document. Ensure it is a valid .docx file.")}}async convertPdfToMarkdown(r){try{const d=await r.arrayBuffer(),f=await ny({data:d}).promise;let b="";for(let g=1;g<=f.numPages;g++){const k=await(await f.getPage(g)).getTextContent();let X,B="";for(const $ of k.items)X!==void 0&&Math.abs($.transform[5]-X)>5&&(B+=`  
`),B+=$.str,X=$.transform[5];b+=B+`

---

`}return b.trim()}catch(d){throw console.error("Error converting PDF to Markdown:",d),new Error("Failed to extract text from PDF.")}}async isBinaryFile(r){const c=await r.slice(0,4096).arrayBuffer(),f=new Uint8Array(c);for(let b=0;b<f.length;b++)if(f[b]===0)return!0;return!1}async convertPptxToMarkdown(r){try{const d=await r.arrayBuffer(),c=await zo.loadAsync(d),f=[];c.folder("ppt/slides").forEach((g,v)=>{g.match(/^slide\d+\.xml$/)&&f.push(v)}),f.sort((g,v)=>{const k=parseInt(g.name.match(/slide(\d+)\.xml$/)[1],10),X=parseInt(v.name.match(/slide(\d+)\.xml$/)[1],10);return k-X});let b="";for(let g=0;g<f.length;g++){const X=((await f[g].async("string")).match(/<a:t.*?>(.*?)<\/a:t>/g)||[]).map(B=>B.replace(/<.*?>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'")).join(" ").trim();X?b+=`## Slide ${g+1}

${X}

---

`:b+=`## Slide ${g+1}

*(Empty slide or unsupported content)*

---

`}return b.trim()}catch(d){throw console.error("Error converting PPTX to Markdown:",d),new Error("Failed to convert PPTX document. Ensure it is a valid .pptx file.")}}async convertExcelToMarkdown(r){try{const d=await r.arrayBuffer(),c=ay(d,{type:"array"});let f="";for(const b of c.SheetNames){const g=c.Sheets[b],v=ly.sheet_to_csv(g);v.trim()&&(f+=`## ${b}

`,f+=this.convertCsvToMarkdown(v),f+=`

`)}return f.trim()}catch(d){throw console.error("Error converting Spreadsheet to Markdown:",d),new Error("Failed to convert spreadsheet. Ensure it is a valid Excel or ODS file.")}}async convertOdtToMarkdown(r){try{const d=await r.arrayBuffer(),f=await(await zo.loadAsync(d)).file("content.xml").async("string"),b=[],g=/<text:(p|h)[^>]*>(.*?)<\/text:\1>/g;let v;for(;(v=g.exec(f))!==null;){let k=v[2].replace(/<[^>]+>/g,"").trim();v[1]==="h"?b.push("### "+k):k&&b.push(k)}return b.join(`

`)}catch(d){throw console.error("Error converting ODT to Markdown:",d),new Error("Failed to convert OpenDocument Text. Ensure it is a valid .odt file.")}}async convertEpubToMarkdown(r){try{const d=await r.arrayBuffer(),c=await zo.loadAsync(d),f=[];c.forEach((g,v)=>{g.match(/\.(html|xhtml)$/i)&&f.push(v)}),f.sort((g,v)=>g.name.localeCompare(v.name));let b="";for(const g of f){const v=await g.async("string"),k=await this.getTurndownService();b+=k.turndown(v)+`

---

`}return b.trim()}catch(d){throw console.error("Error converting EPUB to Markdown:",d),new Error("Failed to convert EPUB document. Ensure it is a valid .epub file.")}}convertCsvToMarkdown(r){const d=Tv.parse(r,{header:!1});if(d.errors.length>0&&d.data.length===0)return r;const c=d.data;if(c.length===0)return"";let f="";const b=c[0].map(v=>String(v).replace(/\|/g,"\\|"));f+="| "+b.join(" | ")+` |
`;const g=b.map(()=>"---");f+="| "+g.join(" | ")+` |
`;for(let v=1;v<c.length;v++){if(c[v].length===1&&c[v][0]==="")continue;const k=c[v].map(X=>String(X).replace(/\|/g,"\\|").replace(/\n/g,"<br>"));for(;k.length<b.length;)k.push("");f+="| "+k.join(" | ")+` |
`}return f}convertJsonToMarkdown(r){try{const d=JSON.parse(r);return"```json\n"+JSON.stringify(d,null,2)+"\n```"}catch{return"```json\n"+r+"\n```"}}async importFile(r){const d=r.name,c=d.split(".").pop().toLowerCase();let f="",b=d;if(c==="docx")f=await this.convertWordToMarkdown(r),b=d.replace(/\.docx$/,".md");else if(["xlsx","xls","ods"].includes(c))f=await this.convertExcelToMarkdown(r),b=d.replace(/\.(xlsx|xls|ods)$/,".md");else if(c==="odt")f=await this.convertOdtToMarkdown(r),b=d.replace(/\.odt$/,".md");else if(c==="epub")f=await this.convertEpubToMarkdown(r),b=d.replace(/\.epub$/,".md");else if(c==="pptx")f=await this.convertPptxToMarkdown(r),b=d.replace(/\.pptx$/,".md");else if(c==="pdf")f=await this.convertPdfToMarkdown(r),b=d.replace(/\.pdf$/,".md");else{if(await this.isBinaryFile(r))throw new Error(`File ${d} appears to be a binary file. Only .docx, .pdf, or text formats are supported.`);const g=await r.text();c==="csv"?(f=this.convertCsvToMarkdown(g),b=d.replace(/\.csv$/,".md")):c==="json"?(f=this.convertJsonToMarkdown(g),b=d.replace(/\.json$/,".md")):c==="html"||c==="htm"?(f=(await this.getTurndownService()).turndown(g),b=d.replace(/\.(html|htm)$/,".md")):["md","markdown"].includes(c)?f=g:(f=g.replace(/(\r?\n)/g,"  $1"),c!=="txt"?b=d+".md":b=d.replace(/\.txt$/,".md"))}return{name:b,content:f}}}const jv=new Ev,kv={empty:"",meeting:`# Meeting Notes: [Topic]

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

MIT`},Mv=(m,r,d,c)=>({undo:f=>{Jb(f),f.focus()},redo:f=>{Fb(f),f.focus()},cut:async f=>{const b=f.state.selection.main,g=f.state.sliceDoc(b.from,b.to);g&&(await navigator.clipboard.writeText(g),f.dispatch({changes:{from:b.from,to:b.to,insert:""}})),f.focus()},copy:async f=>{const b=f.state.selection.main,g=f.state.sliceDoc(b.from,b.to);g&&await navigator.clipboard.writeText(g),f.focus()},paste:async f=>{try{const b=await navigator.clipboard.readText(),g=f.state.selection.main;f.dispatch({changes:{from:g.from,to:g.to,insert:b},selection:{anchor:g.from+b.length}})}catch{}f.focus()},find:f=>{m(b=>b&&c==="find"?!1:(r("find"),!0))},replace:f=>{m(b=>b&&c==="findReplace"?!1:(r("findReplace"),!0))}}),Cv={highlightSpecialChars:!1,tabSize:4,indentUnit:2,lineSeparator:"auto",theme:"light",scrollPastEnd:!1,showLintGutter:!1,showLineNumbers:!0,showFoldGutter:!0,showWritingStats:!0,showPlaceholder:!0},Mo=.5,nu=.2,Lm=.8,Av=240,Dv=.45,_n={getUsage:()=>{let m=0;for(let r in localStorage)localStorage.hasOwnProperty(r)&&(m+=localStorage[r].length+r.length);return m},getQuota:()=>5*1024*1024,compressFiles:m=>m.map(d=>({...d,content:d.content&&d.content.length>1e5?"[FILE_TOO_LARGE_TO_SAVE]":d.content})),setItem:(m,r)=>{try{if(m==="markdownstudio_files"){const d=JSON.parse(r),c=_n.compressFiles(d),f=JSON.stringify(c),b=_n.getUsage(),g=f.length+m.length,v=_n.getQuota();return b+g>v*.9&&(console.warn("Approaching localStorage quota limit, clearing old data"),_n.removeItem("markdownstudio_files"),_n.removeItem("markdownstudio_settings")),localStorage.setItem(m,f),!0}else return localStorage.setItem(m,r),!0}catch(d){if(d.name==="QuotaExceededError"){if(console.warn("localStorage quota exceeded, unable to save:",m),m==="markdownstudio_files")try{localStorage.removeItem("markdownstudio_files");const c=JSON.parse(r),f=_n.compressFiles(c);return localStorage.setItem(m,JSON.stringify(f)),console.warn("Saved compressed files to localStorage"),!0}catch(c){console.error("Failed to save even compressed files:",c)}return!1}throw d}},getItem:m=>{try{return localStorage.getItem(m)}catch(r){return console.warn("Error reading from localStorage:",r),null}},removeItem:m=>{try{return localStorage.removeItem(m),!0}catch(r){return console.warn("Error removing from localStorage:",r),!1}}};function zv(){const[m,r]=p.useState([]),[d,c]=p.useState(null),[f,b]=p.useState(()=>typeof window<"u"&&window.innerWidth<=768?"editor":"split"),[g,v]=p.useState(()=>typeof window<"u"&&window.innerWidth<=768?"edit":"view"),[k,X]=p.useState(()=>{const h=localStorage.getItem("markdownstudio_theme");return h?h==="dark":!1}),[B,$]=p.useState(()=>localStorage.getItem("markdownstudio_high_contrast")==="true");p.useEffect(()=>{localStorage.setItem("markdownstudio_theme",k?"dark":"light")},[k]),p.useEffect(()=>{localStorage.setItem("markdownstudio_high_contrast",B.toString())},[B]);const[M,G]=p.useState(!1),[O,Q]=p.useState(!1),[V,w]=p.useState(!1),[J,me]=p.useState("find"),[W,I]=p.useState(!1),[T,j]=p.useState(!1),[L,q]=p.useState(!1),[ne,ee]=p.useState("preview"),[oe,se]=p.useState(!1),[K,P]=p.useState(()=>vn.getSettings()),[_,R]=p.useState(()=>{const h=_n.getItem("markdownstudio_settings"),x={...Cv};return!h&&typeof window<"u"&&window.innerWidth<=768&&(x.showLineNumbers=!1,x.showFoldGutter=!1,x.showLintGutter=!1,x.showWritingStats=!1),h?{...x,...JSON.parse(h)}:x}),[le,we]=p.useState(()=>xn.getActiveModes()),[ye,ge]=p.useState(_.showWritingStats),[Me,pe]=p.useState(!1),[Se,Ot]=p.useState(!1),[ft,St]=p.useState(!1),[tt,yt]=p.useState(!1),[je,ht]=p.useState(""),[Xt,El]=p.useState(1),[Ct,Gt]=p.useState(1),Jt=p.useRef(null),Tt=p.useRef({line:1,column:1}),el=p.useCallback(h=>{const x=typeof h=="number"?{line:h,column:1}:h;Tt.current=x,Jt.current||(Jt.current=setTimeout(()=>{El(Tt.current.line),Gt(Tt.current.column),Jt.current=null},50))},[]),[wn,Ht]=p.useState(()=>{if(typeof window<"u"){const h=parseFloat(_n.getItem("markdownstudio_split_ratio"));if(Number.isFinite(h))return Math.min(Lm,Math.max(nu,h))}return Mo}),[xe,nt]=p.useState([]),[Et,Ue]=p.useState(()=>typeof window<"u"&&window.innerWidth<=768?[]:["preview"]),[Bt,On]=p.useState({x:window.innerWidth-450,y:70}),[rn,Hn]=p.useState(!1),[Sn,Yn]=p.useState({x:0,y:0}),Tn=p.useDeferredValue(je),ve=p.useRef(null),Vt=p.useRef(null),re=p.useRef(null),{registerEditor:at,withFocusRestore:$e}=gv(),Xn=p.useRef(null),cn=p.useRef(null),un=p.useRef({ratio:0,pixel:0}),Ut=p.useRef(null),ct=p.useRef(!1),ue=p.useRef({fromEditor:!1,fromPreview:!1});p.useEffect(()=>{const h=Xn.current,x=cn.current;if(!h||!x||f!=="split")return;const N=()=>{if(ue.current.fromPreview){ue.current.fromPreview=!1;return}ue.current.fromEditor=!0;const F=h.scrollHeight-h.clientHeight,de=F>0?h.scrollTop/F:0,ce=x.scrollHeight-x.clientHeight;ce>0&&(x.scrollTop=de*ce)},Z=()=>{if(ue.current.fromEditor){ue.current.fromEditor=!1;return}ue.current.fromPreview=!0;const F=x.scrollHeight-x.clientHeight,de=F>0?x.scrollTop/F:0,ce=h.scrollHeight-h.clientHeight;ce>0&&(h.scrollTop=de*ce)};return h.addEventListener("scroll",N,{passive:!0}),x.addEventListener("scroll",Z,{passive:!0}),()=>{h.removeEventListener("scroll",N),x.removeEventListener("scroll",Z)}},[f,d]);const Ce=p.useRef("");p.useEffect(()=>{if(!d||!je)return;const h=setTimeout(()=>{je!==Ce.current&&(Oo.createSnapshot(d,je),Ce.current=je)},3e4),x=setInterval(()=>{je!==Ce.current&&(Oo.createSnapshot(d,je),Ce.current=je)},120*1e3);return()=>{clearTimeout(h),clearInterval(x)}},[d,je]);const Ie=p.useCallback(()=>Ut.current?.getBoundingClientRect().width||null,[]),Te=p.useCallback((h,x)=>{if(!Number.isFinite(h))return Mo;if(!x)return Math.min(Lm,Math.max(nu,h));const N=Av/x,Z=Math.min(Dv,Math.max(nu,N)),F=1-Z;return Math.min(F,Math.max(Z,h))},[]),Fe=p.useCallback(()=>{ct.current&&(typeof document<"u"&&document.body.classList.remove("resizing-horizontal"),ct.current=!1)},[]),qt=p.useCallback(h=>{f==="split"&&(ct.current=!0,typeof document<"u"&&document.body.classList.add("resizing-horizontal"),h.preventDefault())},[f]),At=p.useCallback(()=>{const h=Ie();Ht(x=>Te(Mo,h??void 0))},[Te,Ie]),Gn=p.useCallback(h=>{if(f!=="split")return;const x=Ie()??void 0;if(h.key==="ArrowLeft"||h.key==="ArrowRight"){h.preventDefault();const N=h.key==="ArrowLeft"?-.02:.02;Ht(Z=>Te(Z+N,x))}else h.key==="Home"?(h.preventDefault(),Ht(()=>Te(0,x))):h.key==="End"?(h.preventDefault(),Ht(()=>Te(1,x))):(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),Ht(()=>Te(Mo,x)))},[Te,Ie,f]);p.useEffect(()=>{const h=_n.getItem("markdownstudio_files");if(h)try{const x=JSON.parse(h),N=x.filter(Z=>Z.content==="[FILE_TOO_LARGE_TO_SAVE]");N.length>0&&console.warn(`${N.length} files were too large to save and will be empty`),r(x)}catch(x){console.warn("Error parsing saved files:",x),r([])}},[]),p.useEffect(()=>{const h=JSON.stringify(m);_n.setItem("markdownstudio_files",h)||console.warn("Unable to save files to localStorage due to quota limits")},[m]),p.useEffect(()=>{_n.setItem("markdownstudio_settings",JSON.stringify(_))},[_]),p.useEffect(()=>{ge(_.showWritingStats)},[_.showWritingStats]),p.useEffect(()=>{_.theme==="dark"?X(!0):_.theme==="light"&&X(!1)},[_.theme]),p.useEffect(()=>{const h=N=>{const Z=N.detail;P(Z),$(Z.highContrast)};document.addEventListener("accessibilitySettingsChange",h);const x=vn.getSettings();return P(x),$(x.highContrast),()=>{document.removeEventListener("accessibilitySettingsChange",h)}},[]),p.useEffect(()=>{typeof window<"u"&&_n.setItem("markdownstudio_split_ratio",wn.toString())},[wn]),p.useEffect(()=>{typeof document<"u"&&document.body.classList.remove("resizing-horizontal")},[]);const te=m.find(h=>h.id===d);p.useEffect(()=>{if(!te)return;const h=Ie();h&&Ht(x=>Te(x,h))},[te,Te,Ie]),p.useEffect(()=>{f!=="split"&&Fe()},[f,Fe]),p.useEffect(()=>{const h=()=>{const x=Ie();Ht(N=>Te(N,x))};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[Te,Ie]),p.useEffect(()=>{const h=N=>{if(!ct.current||f!=="split")return;const Z=Ut.current;if(!Z)return;const F=Z.getBoundingClientRect();if(!F.width)return;const de=(N.clientX-F.left)/F.width,ce=Te(de,F.width);Ht(ce),N.preventDefault()},x=()=>{Fe()};return window.addEventListener("pointermove",h),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x)}},[Te,f,Fe]);const us=g==="edit"&&(f==="split"||f==="editor"),di=g==="view"||f==="split"||f==="preview",Pn=p.useCallback((h="empty")=>{const x=kv[h]||"",N={id:Do(),name:`Untitled-${Date.now()}.md`,content:x,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString()};r(Z=>[...Z,N]),ht(x),pe(h!=="empty"),St(!1),yt(!1),c(N.id),v("edit"),xn.disableMode("zen")},[]),ya=p.useCallback(()=>{!d||ve.current===null||(r(h=>h.map(x=>x.id===d?{...x,content:ve.current,modifiedAt:new Date().toISOString()}:x)),ve.current=null,Vt.current&&(clearTimeout(Vt.current),Vt.current=null))},[d,r]),jl=p.useCallback(()=>{Vt.current&&clearTimeout(Vt.current),Vt.current=setTimeout(()=>{ya()},350)},[ya]),kl=async()=>{try{const[h]=await window.showOpenFilePicker({types:[{description:"Markdown files",accept:{"text/markdown":[".md"]}}]}),x=await h.getFile(),N=await x.text(),Z=m.find(de=>de.name===x.name);if(Z){ht(Z.content||""),pe(!1),St(!1),yt(!1),c(Z.id),v(window.innerWidth<=768?"edit":"view"),xn.disableMode("zen");return}const F={id:Do(),name:x.name,content:N,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString(),fileHandle:h};r([...m,F]),ht(N),pe(!1),St(!1),yt(!1),c(F.id),v(window.innerWidth<=768?"edit":"view"),xn.disableMode("zen")}catch(h){console.error("Error opening file:",h)}},Ml=async()=>{if(te){ya();try{if(te.fileHandle){const h=await te.fileHandle.createWritable();await h.write(je),await h.close()}else{const h=await window.showSaveFilePicker({suggestedName:te.name,types:[{description:"Markdown files",accept:{"text/markdown":[".md"]}}]}),x=await h.createWritable();await x.write(je),await x.close();const N=m.map(Z=>Z.id===te.id?{...Z,fileHandle:h}:Z);r(N)}pe(!1)}catch(h){console.error("Error saving file:",h)}}},jt=p.useCallback(h=>{if(!d)return;ve.current=h,ht(h);const x=te?.content??"";pe(x!==h),xn.updateWritingStats(h),jl()},[d,te,jl]),vt=p.useCallback(h=>{let x=d;if(d===h){const N=m.filter(F=>F.id!==h);x=N.length>0?N[0].id:null;const Z=N.length>0?N[0]:null;ht(Z?Z.content:""),pe(!1),St(!1),yt(!1)}r(N=>N.filter(Z=>Z.id!==h)),c(x)},[m,d]);p.useCallback((h,x)=>{r(N=>N.map(Z=>Z.id===h?{...Z,name:x}:Z))},[]);const Dt=p.useCallback($e(()=>{const h=!k;X(h),R(x=>({...x,theme:h?"dark":"light"}))}),[$e,k]),Vn=p.useCallback(()=>{Q(!0)},[]),tl=p.useCallback(()=>{I(!0)},[]),ds=p.useCallback(()=>{j(!0)},[]),fs=p.useCallback(h=>{const x=re.current;if(!x||h===void 0||h===null)return;const N=x.state.doc,Z=h;let F=je;if(!F)return;const de=/^---\s*\n[\s\S]*?\n---\s*\n/;F=F.replace(de,"");let ce=1;const Zt=F.split(`
`);let Pe=!1;for(let it=0;it<Zt.length;it++){const st=Zt[it].trim();if(st.startsWith("#")&&st.replace(/^#+\s*/,"").trim().toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")===Z){const En=je.match(/^---\s*\n[\s\S]*?\n---\s*\n/),pi=En?En[0].split(`
`).length-1:0;ce=it+1+pi,Pe=!0;break}}if(Pe||typeof h=="number"){const it=typeof h=="number"?Math.min(Math.max(1,h),N.lines):ce,st=N.line(it).from;x.dispatch({selection:{anchor:st,head:st},effects:$n.scrollIntoView(st,{y:"center"})}),x.focus(),typeof window<"u"&&window.innerWidth<=768&&(b("editor"),v("edit"))}},[je]),Cl=p.useCallback(h=>{if(!h)return;const x=h.getBoundingClientRect(),N=window.innerWidth,Z=window.innerHeight,F=10,de=60;if(x.top>=F&&x.left>=F&&x.right<=N-F&&x.bottom<=Z-F)return;let Zt=x.left,Pe=x.top;x.width>N-2*F||x.left<F?Zt=F:x.right>N-F&&(Zt=N-x.width-F),x.height>Z-2*F||x.top<F?Pe=F:x.bottom>Z-F&&(Pe=Z-x.height-F),Pe>Z-de&&(Pe=Math.max(F,Z-de)),(Zt!==x.left||Pe!==x.top)&&(h.style.setProperty("left",`${Zt}px`,"important"),h.style.setProperty("top",`${Pe}px`,"important"),h.style.setProperty("transform","none","important"),h.style.setProperty("margin","0","important"))},[]);p.useEffect(()=>{const h=()=>{setTimeout(()=>{document.querySelectorAll('[role="dialog"], .fui-Dialog__surface, .fui-DialogSurface').forEach(F=>{F.style.setProperty("max-height","80vh","important"),F.style.setProperty("overflow-y","auto","important"),F.style.setProperty("user-select","none","important"),F.querySelectorAll('input, textarea, select, [contenteditable="true"]').forEach(ce=>ce.style.setProperty("user-select","auto","important")),F.offsetParent!==null&&Cl(F)})},100)},x=new MutationObserver(h);x.observe(document.body,{childList:!0,subtree:!0});const N=()=>{document.querySelectorAll('[role="dialog"], .fui-Dialog__surface, .fui-DialogSurface').forEach(F=>{F.offsetParent!==null&&Cl(F)})};return window.addEventListener("resize",N),()=>{x.disconnect(),window.removeEventListener("resize",N)}},[Cl]);const va=p.useCallback((h,x)=>{const N=re.current;if(!N)return;const Z=In.getSectionRange(je,h),F=In.moveSection(je,Z.start,Z.end,x);jt(F),ht(F),N.dispatch({changes:{from:0,to:N.state.doc.length,insert:F}}),setTimeout(()=>N.focus(),50)},[je,jt]),Al=p.useCallback($e(()=>{R(h=>({...h,showLintGutter:!h.showLintGutter}))}),[$e]),xa=p.useCallback($e(()=>{R(h=>({...h,showLineNumbers:!h.showLineNumbers}))}),[$e]),wa=p.useCallback($e(()=>{R(h=>({...h,showFoldGutter:!h.showFoldGutter}))}),[$e]),Sa=p.useCallback($e(()=>{R(h=>({...h,showWritingStats:!h.showWritingStats}))}),[$e]),dn=p.useCallback($e(h=>{xn.toggleMode(h)}),[$e]),lt=p.useCallback(()=>{xn.toggleMode("zen")},[]);p.useEffect(()=>{if(g==="edit"){const h=setTimeout(()=>{re.current&&re.current.focus()},50);return()=>clearTimeout(h)}},[g,d]),p.useEffect(()=>{const h=x=>{if((x.ctrlKey||x.metaKey)&&(x.key==="p"||x.key==="P")){x.preventDefault(),se(N=>!N);return}if((x.ctrlKey||x.metaKey)&&(x.key==="f"||x.key==="F")){x.preventDefault(),V&&J==="find"?w(!1):(me("find"),w(!0));return}if((x.ctrlKey||x.metaKey)&&(x.key==="h"||x.key==="H")){x.preventDefault(),V&&J==="findReplace"?w(!1):(me("findReplace"),w(!0));return}x.key==="Escape"&&le.zen&&lt()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[le,lt,V,J]);const hs=p.useCallback(h=>{Ot(h)},[]),ms=p.useCallback(({canUndo:h,canRedo:x})=>{St(h),yt(x)},[]),Qn=p.useMemo(()=>Mv(w,me,V,J),[w,me,V,J]),Yt=p.useCallback(h=>{const x=re.current;if(!x)return;const N=Qn[h];N&&N(x)},[Qn]),Re=p.useCallback(h=>{if(!re.current)return;const x=re.current,{state:N}=x,Z=N.selection.main,F=N.sliceDoc(Z.from,Z.to),ce={bold:{wrap:["**","**"],offset:2},italic:{wrap:["*","*"],offset:1},code:{wrap:["`","`"],offset:1},strikethrough:{wrap:["~~","~~"],offset:2},h1:{prefix:"# ",offset:2},h2:{prefix:"## ",offset:3},h3:{prefix:"### ",offset:4},h4:{prefix:"#### ",offset:5},h5:{prefix:"##### ",offset:6},h6:{prefix:"###### ",offset:7},bullet:{prefix:"- ",offset:2},numbered:{prefix:"1. ",offset:3},quote:{prefix:"> ",offset:2},link:{transform:st=>st?`[${st}](url)`:"[text](url)",offset:st=>st?st.length+3:1},image:{transform:st=>st?`![${st}](url)`:"![alt](url)",offset:st=>st?st.length+4:2},"callout-note":{prefix:`> [!NOTE]
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
\`\`\``,offset:4}}[h];if(!ce||!F&&!["link","image","callout-note","callout-tip","callout-warning","callout-error","table","codeblock","hr","tasklist","footnote","math","mermaid","h1","h2","h3","h4","h5","h6"].includes(h))return;let Pe,it;ce.transform?(Pe=ce.transform(F),it=typeof ce.offset=="function"?ce.offset(F):ce.offset):ce.wrap?(Pe=`${ce.wrap[0]}${F}${ce.wrap[1]}`,it=F?0:ce.offset):ce.suffix?(Pe=`${ce.prefix}${F}${ce.suffix}`,it=F?ce.suffix.length:ce.offset):(Pe=`${ce.prefix}${F}`,it=F?0:ce.offset),x.dispatch({changes:{from:Z.from,to:Z.to,insert:Pe},selection:{anchor:Z.from+Pe.length-it,head:Z.from+Pe.length-it}}),x.focus()},[]),fi=p.useCallback(h=>{const x=re.current;if(!x)return;const{state:N}=x,Z=N.selection.main;x.dispatch({changes:{from:Z.from,to:Z.to,insert:h},selection:{anchor:Z.from+h.length,head:Z.from+h.length}}),x.focus()},[]),xt=p.useCallback($e(h=>{b(x=>{let N=x===h?x:h;return typeof window<"u"&&window.innerWidth<=768&&(N==="preview"||N==="split")?(nt(F=>Array.from(new Set([...F,"preview"]))),"editor"):(N==="split"&&Et.length===0&&(Ue(["preview"]),ee("preview")),N)})}),[$e,Et]),Ta=p.useCallback(h=>{nt(x=>x.filter(N=>N!==h)),Ue(x=>Array.from(new Set([...x,h]))),ee(h),f!=="split"&&xt("split")},[f,xt]),nl=p.useCallback(h=>{xe.includes(h)||(nt(x=>[...x,h]),Ue(x=>{const N=x.filter(Z=>Z!==h);return ne===h&&(N.length>0?ee(N[0]):xt("editor")),N}))},[xe,ne,xt]),al=p.useCallback(h=>{const x=typeof window<"u"&&window.innerWidth<=768,N=xe.includes(h),Z=Et.includes(h);N?nt(de=>de.filter(ce=>ce!==h)):x?nt(de=>Array.from(new Set([...de,h]))):ne===h&&(f==="split"||f==="preview")?Ue(de=>{const ce=de.filter(Zt=>Zt!==h);return ne===h&&(ce.length>0?ee(ce[0]):xt("editor")),ce}):Z?(ee(h),f!=="split"&&f!=="preview"&&xt(x?"preview":"split")):(Ue(de=>Array.from(new Set([...de,h]))),ee(h),f!=="split"&&f!=="preview"&&xt(x?"preview":"split"))},[xe,Et,ne,f,xt]),Qt=p.useCallback(h=>{nt(x=>x.filter(N=>N!==h)),Ue(x=>{const N=x.filter(Z=>Z!==h);return ne===h&&(N.length>0?ee(N[0]):xt("editor")),N})},[ne,xt]);al.bind(null,"snippet");const Wt=p.useCallback(h=>{Hn(!0),Yn({x:h.clientX-Bt.x,y:h.clientY-Bt.y}),h.preventDefault()},[Bt]),ps=p.useCallback(h=>{const x=h.touches[0];Hn(!0),Yn({x:x.clientX-Bt.x,y:x.clientY-Bt.y})},[Bt]),gs=p.useCallback(h=>{if(!rn)return;const x=h.type==="touchmove"?h.touches[0].clientX:h.clientX,N=h.type==="touchmove"?h.touches[0].clientY:h.clientY,Z=x-Sn.x,F=N-Sn.y,de=window.innerWidth-400,ce=window.innerHeight-500;On({x:Math.max(0,Math.min(Z,de)),y:Math.max(0,Math.min(F,ce))})},[rn,Sn]),Ea=p.useCallback(h=>{if(rn){Hn(!1);const x=h.type==="touchend"||h.type==="touchcancel"?h.changedTouches?h.changedTouches[0].clientX:0:h.clientX,N=h.type==="touchend"||h.type==="touchcancel"?h.changedTouches?h.changedTouches[0].clientY:0:h.clientY;document.elementsFromPoint(x,N).some(F=>F.classList.contains("right-panel-tabs"))&&Ta("preview")}},[rn,Ta]);p.useEffect(()=>{if(!te||!je)return;const h=setTimeout(()=>{xv.saveFile({...te,content:je,modifiedAt:new Date().toISOString()}).catch(x=>console.error("Auto-save failed:",x))},2e3);return()=>clearTimeout(h)},[je,te]),p.useEffect(()=>{const h=x=>{we(x)};return xn.addModeChangeListener(h),()=>{xn.removeModeChangeListener(h)}},[]),p.useEffect(()=>{const h=N=>{gs(N)},x=N=>{Ea(N)};if(rn)return document.addEventListener("mousemove",h),document.addEventListener("mouseup",x),document.addEventListener("touchmove",h,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)}},[rn,gs,Ea]);const hi=async()=>{try{const h=await window.showOpenFilePicker({types:[{description:"Text-based files",accept:{"text/markdown":[".md",".markdown"],"text/plain":[".txt"],"text/html":[".html",".htm"],"text/csv":[".csv"],"application/json":[".json"]}},{description:"Word Documents",accept:{"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"]}},{description:"Spreadsheets",accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel":[".xls"],"application/vnd.oasis.opendocument.spreadsheet":[".ods"]}},{description:"OpenDocument Text",accept:{"application/vnd.oasis.opendocument.text":[".odt"]}},{description:"PowerPoint Documents",accept:{"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]}},{description:"PDF Documents",accept:{"application/pdf":[".pdf"]}},{description:"E-books",accept:{"application/epub+zip":[".epub"]}}],multiple:!0});for(const x of h){const N=await x.getFile(),{name:Z,content:F}=await jv.importFile(N),de={id:Do(),name:Z,content:F,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString()};r(ce=>[...ce,de]),c(de.id),ht(F),v("edit")}}catch(h){h.name!=="AbortError"&&(console.error("Error importing files:",h),alert(h.message||"Error importing files"))}},ll=p.useCallback(h=>{const x=dv(je,h);jt(x),ht(x),re.current&&re.current.dispatch({changes:{from:0,to:re.current.state.doc.length,insert:x}})},[je,jt]),Zn=(h="md")=>{if(!te){alert("No active file to export");return}if(h==="md"){const x=new Blob([te.content],{type:"text/markdown"}),N=URL.createObjectURL(x),Z=document.createElement("a");Z.href=N,Z.download=te.name,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(N)}else if(h==="html"){const x=document.querySelector(".markdown-content")?.innerHTML||"",N=`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${te.name}</title>
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
${x}
</body>
</html>`,Z=new Blob([N],{type:"text/html"}),F=URL.createObjectURL(Z),de=document.createElement("a");de.href=F,de.download=te.name.replace(/\.md$/,".html"),document.body.appendChild(de),de.click(),document.body.removeChild(de),URL.revokeObjectURL(F)}else if(h==="pdf"){const x=document.querySelector(".markdown-content")?.innerHTML||"",N=window.open("","","width=800,height=900");N.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${te.name}</title>
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
${x}
<script>
  window.onload = () => { setTimeout(() => { window.print(); window.close(); }, 500); }
<\/script>
</body>
</html>`),N.document.close()}else if(h==="doc"){const x=document.querySelector(".markdown-content")?.innerHTML||"",N=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${te.name}</title></head>
<body>${x}</body></html>`,Z=new Blob(["\uFEFF",N],{type:"application/msword"}),F=URL.createObjectURL(Z),de=document.createElement("a");de.href=F,de.download=te.name.replace(/\.md$/,".doc"),document.body.appendChild(de),de.click(),document.body.removeChild(de),URL.revokeObjectURL(F)}else if(h==="epub"){const x=document.querySelector(".markdown-content")?.innerHTML||"",N=new zo;N.file("mimetype","application/epub+zip"),N.file("META-INF/container.xml",`<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);const F=`<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookID" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:title>${te.name}</dc:title>
    <dc:language>en</dc:language>
  </metadata>
  <manifest>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="content" href="content.html" media-type="application/xhtml+xml"/>
  </manifest>
  <spine toc="ncx">
    <itemref idref="content"/>
  </spine>
</package>`;N.file("OEBPS/content.opf",F);const de=`<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="BookID"/>
  </head>
  <docTitle>
    <text>${te.name}</text>
  </docTitle>
  <navMap>
    <navPoint id="navPoint-1" playOrder="1">
      <navLabel><text>Content</text></navLabel>
      <content src="content.html"/>
    </navPoint>
  </navMap>
</ncx>`;N.file("OEBPS/toc.ncx",de);const ce=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${te.name}</title>
</head>
<body>
  ${x.replace(/<br>/g,"<br/>").replace(/<hr>/g,"<hr/>").replace(/<img(.*?)>/g,"<img$1/>")}
</body>
</html>`;N.file("OEBPS/content.html",ce),N.generateAsync({type:"blob",mimeType:"application/epub+zip"}).then(Zt=>{const Pe=URL.createObjectURL(Zt),it=document.createElement("a");it.href=Pe,it.download=te.name.replace(/\.md$/,".epub"),document.body.appendChild(it),it.click(),document.body.removeChild(it),URL.revokeObjectURL(Pe)})}else if(h==="pptx"){const x=document.querySelector(".markdown-content")?.innerHTML||"",N=document.createElement("div");N.innerHTML=x;const Z=new iy;let F=Z.addSlide();F.addText(te.name.replace(/\.md$/,""),{x:.5,y:.5,fontSize:28,bold:!0});let de=1.5;Array.from(N.children).forEach(ce=>{ce.tagName.match(/^H[1-3]$/)?(F=Z.addSlide(),F.addText(ce.innerText,{x:.5,y:.5,w:9,h:1,fontSize:24,bold:!0}),de=1.5):(ce.tagName==="P"||ce.tagName==="UL"||ce.tagName==="OL")&&(de>4.5&&(F=Z.addSlide(),de=.5),F.addText(ce.innerText,{x:.5,y:de,w:9,h:1}),de+=1)}),Z.writeFile({fileName:te.name.replace(/\.md$/,".pptx")})}},It=p.useMemo(()=>[{id:"new",label:"New Blank Document",icon:s.jsx(oi,{}),onExecute:()=>Pn("empty")},{id:"new-meeting",label:"New Meeting Notes Template",icon:s.jsx(oi,{}),onExecute:()=>Pn("meeting")},{id:"new-blog",label:"New Blog Post Template",icon:s.jsx(oi,{}),onExecute:()=>Pn("blog")},{id:"new-readme",label:"New README Template",icon:s.jsx(oi,{}),onExecute:()=>Pn("readme")},{id:"open",label:"Open File",icon:s.jsx(Co,{}),onExecute:()=>kl(),shortcut:"Ctrl+O"},{id:"save",label:"Save File",icon:s.jsx(au,{}),onExecute:()=>Ml(),shortcut:"Ctrl+S",disabled:!te||!Me},{id:"import",label:"Import File",icon:s.jsx($m,{}),onExecute:()=>hi()},{id:"export-md",label:"Export as Markdown (.md)",icon:s.jsx(Pa,{}),onExecute:()=>Zn("md"),disabled:!te},{id:"export-html",label:"Export as HTML (.html)",icon:s.jsx(Pa,{}),onExecute:()=>Zn("html"),disabled:!te},{id:"export-pdf",label:"Export as PDF",icon:s.jsx(Pa,{}),onExecute:()=>Zn("pdf"),disabled:!te},{id:"export-doc",label:"Export as Word (.doc)",icon:s.jsx(Pa,{}),onExecute:()=>Zn("doc"),disabled:!te},{id:"export-epub",label:"Export as EPUB (.epub)",icon:s.jsx(Pa,{}),onExecute:()=>Zn("epub"),disabled:!te},{id:"export-pptx",label:"Export as PowerPoint (.pptx)",icon:s.jsx(Pa,{}),onExecute:()=>Zn("pptx"),disabled:!te},{id:"undo",label:"Undo",icon:s.jsx(os,{}),onExecute:()=>Yt("undo"),shortcut:"Ctrl+Z",disabled:!te||!ft||g==="view"},{id:"redo",label:"Redo",icon:s.jsx(No,{}),onExecute:()=>Yt("redo"),shortcut:"Ctrl+Y",disabled:!te||!tt||g==="view"},{id:"cut",label:"Cut",icon:s.jsx(iu,{}),onExecute:()=>Yt("cut"),shortcut:"Ctrl+X",disabled:!Se||g==="view"},{id:"copy",label:"Copy",icon:s.jsx(su,{}),onExecute:()=>Yt("copy"),shortcut:"Ctrl+C",disabled:!Se||g==="view"},{id:"paste",label:"Paste",icon:s.jsx(ou,{}),onExecute:()=>Yt("paste"),shortcut:"Ctrl+V",disabled:!te||g==="view"},{id:"find",label:"Find",icon:s.jsx(ru,{}),onExecute:()=>Yt("find"),shortcut:"Ctrl+F",disabled:!te||g==="view"},{id:"replace",label:"Find & Replace",icon:s.jsx(Ro,{}),onExecute:()=>Yt("replace"),shortcut:"Ctrl+H",disabled:!te||g==="view"},{id:"bold",label:"Format Bold",icon:s.jsx(ba,{}),onExecute:()=>Re("bold"),shortcut:"Ctrl+B",disabled:!Se||g==="view"},{id:"italic",label:"Format Italic",icon:s.jsx(hu,{}),onExecute:()=>Re("italic"),shortcut:"Ctrl+I",disabled:!Se||g==="view"},{id:"strikethrough",label:"Format Strikethrough",icon:s.jsx(mu,{}),onExecute:()=>Re("strikethrough"),shortcut:"Alt+S",disabled:!Se||g==="view"},{id:"code",label:"Format Code",icon:s.jsx(ri,{}),onExecute:()=>Re("code"),shortcut:"Ctrl+`",disabled:!Se||g==="view"},{id:"bullet",label:"Bullet List",icon:s.jsx($o,{}),onExecute:()=>Re("bullet"),shortcut:"Ctrl+Shift+8",disabled:!Se||g==="view"},{id:"numbered",label:"Numbered List",icon:s.jsx(Sl,{}),onExecute:()=>Re("numbered"),shortcut:"Ctrl+Shift+9",disabled:!Se||g==="view"},{id:"quote",label:"Blockquote",icon:s.jsx(bu,{}),onExecute:()=>Re("quote"),disabled:!Se||g==="view"},{id:"link",label:"Insert Link",icon:s.jsx(yu,{}),onExecute:()=>Re("link"),shortcut:"Ctrl+K",disabled:!Se||g==="view"},{id:"image",label:"Insert Image",icon:s.jsx(vu,{}),onExecute:()=>Re("image"),shortcut:"Ctrl+Shift+I",disabled:!Se||g==="view"},{id:"subscript",label:"Format Subscript",icon:s.jsx(pu,{}),onExecute:()=>Re("subscript"),disabled:!Se||g==="view"},{id:"superscript",label:"Format Superscript",icon:s.jsx(gu,{}),onExecute:()=>Re("superscript"),disabled:!Se||g==="view"},{id:"highlight",label:"Highlight Text",icon:s.jsx(Nm,{}),onExecute:()=>Re("highlight"),disabled:!Se||g==="view"},{id:"transform-upper",label:"Transform UPPERCASE",icon:s.jsx(is,{}),onExecute:()=>Re("transform-upper"),disabled:!Se||g==="view"},{id:"transform-lower",label:"Transform lowercase",icon:s.jsx(is,{}),onExecute:()=>Re("transform-lower"),disabled:!Se||g==="view"},{id:"transform-sentence",label:"Transform Sentence case",icon:s.jsx(is,{}),onExecute:()=>Re("transform-sentence"),disabled:!Se||g==="view"},{id:"remove-formatting",label:"Remove Formatting",icon:s.jsx(is,{}),onExecute:()=>Re("remove-formatting"),disabled:!Se||g==="view"},{id:"heading1",label:"Insert Heading 1",icon:s.jsx(ba,{}),onExecute:()=>Re("h1"),shortcut:"Ctrl+1",disabled:!te||g==="view"},{id:"heading2",label:"Insert Heading 2",icon:s.jsx(ba,{}),onExecute:()=>Re("h2"),shortcut:"Ctrl+2",disabled:!te||g==="view"},{id:"heading3",label:"Insert Heading 3",icon:s.jsx(ba,{}),onExecute:()=>Re("h3"),shortcut:"Ctrl+3",disabled:!te||g==="view"},{id:"heading4",label:"Insert Heading 4",icon:s.jsx(ba,{}),onExecute:()=>Re("h4"),shortcut:"Ctrl+4",disabled:!te||g==="view"},{id:"heading5",label:"Insert Heading 5",icon:s.jsx(ba,{}),onExecute:()=>Re("h5"),shortcut:"Ctrl+5",disabled:!te||g==="view"},{id:"heading6",label:"Insert Heading 6",icon:s.jsx(ba,{}),onExecute:()=>Re("h6"),shortcut:"Ctrl+6",disabled:!te||g==="view"},{id:"table",label:"Insert Table",icon:s.jsx(xu,{}),onExecute:()=>Re("table"),shortcut:"Ctrl+Shift+T",disabled:!te||g==="view"},{id:"codeblock",label:"Insert Code Block",icon:s.jsx(ri,{}),onExecute:()=>Re("codeblock"),shortcut:"Ctrl+Shift+C",disabled:!te||g==="view"},{id:"hr",label:"Insert Horizontal Rule",icon:s.jsx(Tu,{}),onExecute:()=>Re("hr"),shortcut:"Ctrl+Shift+-",disabled:!te||g==="view"},{id:"tasklist",label:"Insert Task List",icon:s.jsx(Su,{}),onExecute:()=>Re("tasklist"),disabled:!te||g==="view"},{id:"footnote",label:"Insert Footnote",icon:s.jsx(wu,{}),onExecute:()=>Re("footnote"),disabled:!te||g==="view"},{id:"callout-note",label:"Insert Note Callout",icon:s.jsx(ss,{}),onExecute:()=>Re("callout-note"),disabled:!te||g==="view"},{id:"callout-tip",label:"Insert Tip Callout",icon:s.jsx(ss,{}),onExecute:()=>Re("callout-tip"),disabled:!te||g==="view"},{id:"callout-warning",label:"Insert Warning Callout",icon:s.jsx(ss,{}),onExecute:()=>Re("callout-warning"),disabled:!te||g==="view"},{id:"callout-error",label:"Insert Error Callout",icon:s.jsx(ss,{}),onExecute:()=>Re("callout-error"),disabled:!te||g==="view"},{id:"select-current-section",label:"Select Current Section",icon:s.jsx(wb,{}),disabled:!te||g==="view",onExecute:()=>{const h=re.current;if(!h)return;const x=h.state.selection.main.head,N=h.state.doc.lineAt(x).number,Z=In.getSectionRange(je,N),F=h.state.doc.line(Z.start).from,de=h.state.doc.line(Z.end).to;h.dispatch({selection:{anchor:F,head:de}}),h.focus()}},{id:"select-all-headings",label:"Select All Headings",icon:s.jsx(Sl,{}),disabled:!te||g==="view",onExecute:()=>{const h=re.current;if(!h)return;const x=In.findBlockRanges(je,"headings").map(N=>({anchor:h.state.doc.line(N.line).from,head:h.state.doc.line(N.line).to}));x.length&&(h.dispatch({selection:{ranges:x,main:0}}),h.focus())}},{id:"select-all-lists",label:"Select All List Items",icon:s.jsx($o,{}),disabled:!te||g==="view",onExecute:()=>{const h=re.current;if(!h)return;const x=In.findBlockRanges(je,"list-items").map(N=>({anchor:h.state.doc.line(N.line).from,head:h.state.doc.line(N.line).to}));x.length&&(h.dispatch({selection:{ranges:x,main:0}}),h.focus())}},{id:"move-section-up",label:"Move Current Section Up",icon:s.jsx(os,{}),disabled:!te||g==="view",onExecute:()=>{const h=re.current;if(!h)return;const x=h.state.selection.main.head,N=h.state.doc.lineAt(x).number,Z=In.getSectionRange(je,N);if(Z.start<=1)return;const F=In.moveSection(je,Z.start,Z.end,Z.start-1);jt(F),ht(F),h.dispatch({changes:{from:0,to:h.state.doc.length,insert:F}})}},{id:"move-section-down",label:"Move Current Section Down",icon:s.jsx(No,{}),disabled:!te||g==="view",onExecute:()=>{const h=re.current;if(!h)return;const x=h.state.selection.main.head,N=h.state.doc.lineAt(x).number,Z=In.getSectionRange(je,N);if(Z.end>=h.state.doc.lines)return;const F=In.getSectionRange(je,Z.end+1),de=In.moveSection(je,Z.start,Z.end,F.end+1);jt(de),ht(de),h.dispatch({changes:{from:0,to:h.state.doc.length,insert:de}})}},{id:"outline",label:"Toggle Outline",icon:s.jsx(Sl,{}),onExecute:()=>{xt("split"),ee("outline")},disabled:!te||g==="view"},{id:"property",label:"Toggle Property",icon:s.jsx(Ao,{}),onExecute:()=>{xt("split"),ee("property")},disabled:!te||g==="view"},{id:"history",label:"Toggle History",icon:s.jsx(_o,{}),onExecute:()=>{xt("split"),ee("history")},disabled:!te||g==="view"},{id:"snippet",label:"Toggle Snippets",icon:s.jsx(ci,{}),onExecute:()=>{xt("split"),ee("snippet")},disabled:!te||g==="view"},{id:"zen",label:"Toggle Zen Mode",icon:s.jsx(uu,{}),onExecute:()=>dn("zen"),disabled:!te||g==="view"},{id:"focus",label:"Toggle Focus Mode",icon:s.jsx(du,{}),onExecute:()=>dn("focus"),disabled:!te||g==="view"},{id:"typewriter",label:"Toggle Typewriter Mode",icon:s.jsx(fu,{}),onExecute:()=>dn("typewriter"),disabled:!te||g==="view"},{id:"wysiwyg",label:"Toggle WYSIWYG Mode",icon:s.jsx(_m,{}),onExecute:()=>dn("wysiwyg"),disabled:!te||g==="view"},{id:"linter",label:`${_.showLintGutter?"Hide":"Show"} Linter Gutter`,icon:s.jsx(Sb,{}),onExecute:()=>Al(),disabled:!te},{id:"theme",label:`Switch to ${k?"Light":"Dark"} Theme`,icon:k?s.jsx(Tb,{}):s.jsx(Eb,{}),onExecute:()=>Dt()},{id:"stats",label:"Toggle Writing Stats",icon:s.jsx(cu,{}),onExecute:()=>Sa(),disabled:!te},{id:"settings",label:"Settings",icon:s.jsx(lu,{}),onExecute:()=>tl()},{id:"about",label:"About",icon:s.jsx(Lo,{}),onExecute:()=>Vn()},{id:"usermanual",label:"User Manual",icon:s.jsx(Lo,{}),onExecute:()=>ds()}],[Pn,kl,Ml,Zn,Yt,Re,xt,dn,k,Dt,tl,Vn,ds,ye,ge,Se,te,Me,_,g,ft,tt]);return s.jsx(jb,{theme:k?kb:Mb,children:s.jsxs("div",{className:`app ${k?"dark-theme":"light-theme"} ${B?"high-contrast":""} ${K.dyslexiaFont?"dyslexia-font":""} ${g==="edit"&&ye&&te?"show-stats":""} ${le.zen?"zen-mode":""}`,onDragOver:h=>{h.preventDefault()},onDrop:h=>{const x=h.dataTransfer.getData("tabId");x&&nl(x)},children:[s.jsx(uy,{onNew:Pn,onOpen:kl,onSave:Ml,onPreviewChange:xt,currentPreviewMode:f,onImport:hi,onExport:Zn,onAbout:Vn,onMarkdownHelp:()=>q(h=>!h),showMarkdownHelp:L,onSettings:tl,showHighContrast:B,onWritingMode:dn,currentWritingMode:le,hasCurrentFile:!!te,hasUnsavedChanges:Me,hasTextSelected:Se,hasFiles:m.length>0,fileCount:m.length,onStyleChange:Re,onEditAction:Yt,files:m,currentFileId:d,onSwitchFile:h=>{const x=m.find(N=>N.id===h);x&&(ya(),ht(x.content||""),pe(!1),St(!1),yt(!1),c(h),xn.disableMode("zen"))},onCloseFile:vt,onShowCommandPalette:()=>se(h=>!h),showCommandPalette:oe,showLintGutter:_.showLintGutter,onLinterToggle:Al,showLineNumbers:_.showLineNumbers,onLineNumbersToggle:xa,showHeadingGutter:_.showFoldGutter,onHeadingGutterToggle:wa,appMode:g,onAppModeChange:v,activeRightTab:ne,onTogglePanel:al,showWritingStats:ye,onWritingStatsToggle:Sa,floatingPanels:xe,dockedPanels:Et,canUndo:ft,canRedo:tt}),s.jsx("div",{className:"editor-scroll-container",children:s.jsx("div",{id:"editor-container",className:"editor-container",children:te?s.jsxs("div",{className:`editor-split ${g==="view"?"preview":f}`,style:g==="edit"&&f==="split"?{"--editor-pane-width":`${(wn*100).toFixed(2)}%`,"--preview-pane-width":`${((1-wn)*100).toFixed(2)}%`}:void 0,ref:Ut,children:[s.jsx(Cy,{content:je,onChange:jt,visible:g==="edit"&&us,onTextSelection:hs,scrollRef:Xn,settings:_,writingMode:le,isDark:k,onEditorReady:h=>{at(h),re.current=h},onCursorActivity:el,onHistoryChange:ms},d),g==="edit"&&f==="split"&&s.jsx("div",{className:"splitter-handle",role:"separator","aria-label":"Resize editor and preview panes","aria-orientation":"vertical","aria-valuemin":20,"aria-valuemax":80,"aria-valuenow":Math.round(wn*100),"aria-valuetext":`${Math.round(wn*100)}% editor width`,tabIndex:0,onPointerDown:qt,onKeyDown:Gn,onDoubleClick:At,children:s.jsx("span",{className:"splitter-grip"})}),di&&s.jsx("div",{className:"right-panel-wrapper",style:{height:"100%",width:"100%",minWidth:0,overflow:"hidden",display:"flex"},children:s.jsx(Fy,{appMode:g,content:Tn,editorView:re.current,fileId:d,visible:di,activeTab:ne,dockedPanels:Et,onTabChange:ee,onUndockPanel:nl,onMoveSection:va,previewScrollRef:cn,onUpdateProperty:ll,onRestoreHistory:h=>{jt(h),ht(h),re.current&&re.current.dispatch({changes:{from:0,to:re.current.state.doc.length,insert:h}})},onInsertSnippet:h=>{fi(h),window.innerWidth<=768&&(b("editor"),v("edit"))},isDarkTheme:k,activeLine:Xt,onNavigate:h=>{if(re.current){const x=re.current;if(typeof h=="string")fs(h);else{const N=x.state.doc.line(h).from;x.dispatch({selection:{anchor:N,head:N},effects:$n.scrollIntoView(N,{y:"center"})}),x.focus()}window.innerWidth<=768&&(b("editor"),v("edit"))}}})})]}):s.jsx("div",{className:"empty-state",children:s.jsx(ju,{})})})}),g==="edit"&&ye&&te&&s.jsx("div",{className:"writing-stats-wrapper",children:s.jsx(Fm,{content:Tn,visible:ye,cursorLine:Xt,cursorColumn:Ct})}),le.zen&&s.jsx(Hy,{onExitZen:lt}),s.jsx(Jm,{isOpen:O,onClose:()=>Q(!1),isDarkTheme:k}),s.jsx(Im,{isOpen:W,onClose:()=>I(!1),settings:_,onSettingsChange:R}),s.jsx(ju,{isOpen:T,onClose:()=>j(!1),isDarkTheme:k,isDialog:!0}),s.jsx(np,{isVisible:L,onClose:()=>q(!1),isDarkTheme:k}),s.jsx(Wm,{editorView:re.current,isVisible:V,onClose:()=>w(!1),mode:J}),s.jsx(Pm,{isOpen:oe,onClose:()=>se(!1),actions:It,isDark:k}),xe.includes("outline")&&s.jsx(ap,{content:Tn,visible:!0,inline:!1,activeLine:Xt,onClose:()=>Qt("outline"),onDock:()=>Ta("outline"),onMoveSection:va,onNavigate:h=>{if(re.current){const x=re.current,N=x.state.doc.line(h).from;x.dispatch({selection:{anchor:N,head:N},effects:$n.scrollIntoView(N,{y:"center"})}),x.focus(),window.innerWidth<=768&&(b("editor"),v("edit"))}}}),xe.includes("property")&&s.jsx(lp,{content:Tn,visible:!0,inline:!1,onClose:()=>Qt("property"),onDock:()=>Ta("property"),onUpdate:ll}),xe.includes("history")&&s.jsx(ip,{fileId:d,visible:!0,onRestore:h=>{jt(h),ht(h),re.current&&re.current.dispatch({changes:{from:0,to:re.current.state.doc.length,insert:h}})},onClose:()=>Qt("history"),onDock:()=>Ta("history")}),xe.includes("snippet")&&s.jsx(tp,{visible:!0,inline:!1,onClose:()=>Qt("snippet"),onDock:()=>Ta("snippet"),onInsert:h=>{fi(h),window.innerWidth<=768&&(b("editor"),v("edit"))},isDarkTheme:k}),xe.includes("preview")&&s.jsxs("div",{className:"floating-preview-panel",style:{position:"fixed",left:typeof window<"u"&&window.innerWidth<=768?0:Bt.x,top:typeof window<"u"&&window.innerWidth<=768?0:Bt.y,width:typeof window<"u"&&window.innerWidth<=768?"100%":"400px",height:typeof window<"u"&&window.innerWidth<=768?"100%":"500px",backgroundColor:"var(--color-neutral-background1)",boxShadow:"0 4px 16px rgba(0,0,0,0.15)",border:"1px solid var(--color-neutral-stroke1)",zIndex:1e3,display:"flex",flexDirection:"column",borderRadius:"4px"},children:[s.jsxs("div",{style:{padding:"8px",borderBottom:"1px solid var(--color-neutral-stroke1)",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:rn?"grabbing":"grab",backgroundColor:"var(--color-neutral-background2)",userSelect:"none"},onMouseDown:Wt,onTouchStart:ps,onMouseUp:Ea,onTouchEnd:Ea,children:[s.jsx("span",{style:{fontWeight:600,fontSize:"14px"},children:"Preview"}),s.jsx("button",{onClick:()=>Qt("preview"),style:{background:"none",border:"none",cursor:"pointer",fontSize:"16px"},children:"×"})]}),s.jsx("div",{style:{flex:1,backgroundColor:"var(--color-neutral-background1)",overflow:"hidden"},children:s.jsx(rs,{content:Tn,visible:!0,scrollRef:cn,scrollStateRef:un,inline:!1,onJumpToLine:fs,activeLine:Xt})})]})]})})}cy.createRoot(document.getElementById("root")).render(s.jsx(Rm.StrictMode,{children:s.jsx(zv,{})}));export{vn as A};
