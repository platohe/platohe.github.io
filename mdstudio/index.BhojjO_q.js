const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["vendor-processing.CmTeLQxv.js","vendor-core.DUXhECUu.js","vendor-visual.B_Q0hmov.js","AccessibilityPanel.BtOR5hMV.js","vendor-utils.AceBcgTx.js","vendor-documents.BFWVzoxS.js","AccessibilityPanel.HUr2SpIBcss","SearchService.D1nxONAv.js"])))=>i.map(i=>d[i]);
import{e as cb,f as rb,h as ub,g as ku,r as p,j as s,T as Nn,M as Fa,i as me,k as Ja,l as Le,D as oi,m as Wa,n as Ia,o as Je,F as Co,S as au,A as el,p as _n,C as Jr,q as rs,E as ko,R as mm,t as Ft,K as db,u as lu,Q as pm,I as Lo,v as Wr,w as os,x as No,y as iu,z as su,B as ou,G as cu,H as _o,J as gm,L as bm,N as ru,O as ym,P as El,U as Ao,V as Ro,W as ri,X as uu,Y as du,Z as fu,_ as vm,$ as ba,a0 as hu,a1 as mu,a2 as pu,a3 as gu,a4 as ci,a5 as Nm,a6 as is,a7 as Ir,a8 as $o,a9 as bu,aa as yu,ab as vu,ac as xu,ad as wu,ae as Su,af as Eu,ag as ss,ah as _m,ai as Rm,aj as xm,ak as $m,al as Om,am as Hm,an as Bm,ao as fb,ap as ui,aq as Ot,ar as Ho,as as Bo,at as Uo,au as qo,av as Yo,aw as Mu,ax as hb,ay as mb,az as pb,aA as gb,aB as Pr,aC as Ct,aD as sn,aE as on,aF as Sl,aG as bb,aH as as,aI as yb,aJ as Um,aK as qm,aL as vb,aM as wm,aN as Ym,aO as xb,aP as wb,aQ as Sb,aR as Eb,aS as Tb,aT as jb,aU as kb,aV as Mb}from"./vendor-core.DUXhECUu.js";import{w as Xo,x as Go,y as Cb,z as Xm,A as Cu,B as Au,D as Gm,F as Vo,G as Du,H as Vm,J as Qo,h as $n,K as Zo,S as Ab,V as Db,M as Qm,O as zb,P as Lb,Q as Nb,R as _b,T as Rb,U as $b,W as Ob,X as Hb,Y as Bb,Z as Sm,$ as Em,_ as Ht,a0 as Ub,g as qb,u as Xe,a1 as Yb,a2 as Xb,a3 as Gb,a4 as Vb,a5 as Qb,a6 as Zb,a7 as Kb,a8 as zu,a9 as Fb,aa as Jb}from"./vendor-processing.CmTeLQxv.js";import{j as Zm,v as Do,a as Wb}from"./vendor-utils.AceBcgTx.js";import{r as Ib,a as Pb,v as ey,G as ty,g as ny,J as zo,b as ay,u as ly,P as iy}from"./vendor-documents.BFWVzoxS.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const b of f)if(b.type==="childList")for(const g of b.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function d(f){const b={};return f.integrity&&(b.integrity=f.integrity),f.referrerPolicy&&(b.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?b.credentials="include":f.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function r(f){if(f.ep)return;f.ep=!0;const b=d(f);fetch(f.href,b)}})();var eu={exports:{}},ls={};var Tm;function sy(){if(Tm)return ls;Tm=1;var m=cb(),c=rb(),d=ub();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(b(e)!==e)throw Error(r(188))}function G(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return k(l),e;if(i===a)return k(l),t;i=i.sibling}throw Error(r(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,a=i;break}if(u===a){o=!0,a=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,a=l;break}if(u===a){o=!0,a=i,n=l;break}u=u.sibling}if(!o)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var $=Object.assign,M=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),se=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case S:return"Profiler";case X:return"StrictMode";case we:return"Suspense";case D:return"SuspenseList";case _:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case se:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case w:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}var W=Array.isArray,L=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve={pending:!1,data:null,method:null,action:null},Be=[],J=-1;function fe(e){return{current:e}}function Se(e){0>J||(e.current=Be[J],Be[J]=null,J--)}function xe(e,t){J++,Be[J]=e.current,e.current=t}var ge=fe(null),yt=fe(null),Re=fe(null),We=fe(null);function Et(e,t){switch(xe(Re,t),xe(yt,e),xe(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Oh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Oh(t),e=Hh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Se(ge),xe(ge,e)}function At(){Se(ge),Se(yt),Se(Re)}function je(e){e.memoizedState!==null&&xe(We,e);var t=ge.current,n=Hh(t,e.type);t!==n&&(xe(yt,e),xe(ge,n))}function Ue(e){yt.current===e&&(Se(ge),Se(yt)),We.current===e&&(Se(We),Pi._currentValue=ve)}var vt,ya;function Dt(e){if(vt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vt=t&&t[1]||"",ya=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+e+ya}var Gt=!1;function Jt(e,t){if(!e||Gt)return"";Gt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(N){var z=N}Reflect.construct(e,[],q)}else{try{q.call()}catch(N){z=N}e.call(q.prototype)}}else{try{throw Error()}catch(N){z=N}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(N){if(N&&z&&typeof N.stack=="string")return[N.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var v=o.split(`
`),A=u.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===A.length)for(a=v.length-1,l=A.length-1;1<=a&&0<=l&&v[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==A[l]){var H=`
`+v[a].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=a&&0<=l);break}}}finally{Gt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Dt(n):""}function Tt(e,t){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==t&&t!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return Dt("Activity");default:return""}}function tl(e){try{var t="",n=null;do t+=Tt(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var wn=Object.prototype.hasOwnProperty,Bt=m.unstable_scheduleCallback,ye=m.unstable_cancelCallback,lt=m.unstable_shouldYield,jt=m.unstable_requestPaint,Ye=m.unstable_now,Ut=m.unstable_getCurrentPriorityLevel,On=m.unstable_ImmediatePriority,cn=m.unstable_UserBlockingPriority,Hn=m.unstable_NormalPriority,Sn=m.unstable_LowPriority,Yn=m.unstable_IdlePriority,En=m.log,be=m.unstable_setDisableYieldValue,Vt=null,oe=null;function it(e){if(typeof En=="function"&&be(e),oe&&typeof oe.setStrictMode=="function")try{oe.setStrictMode(Vt,e)}catch{}}var $e=Math.clz32?Math.clz32:un,Xn=Math.log,rn=Math.LN2;function un(e){return e>>>=0,e===0?32:31-(Xn(e)/rn|0)|0}var qt=256,dt=262144,ue=4194304;function Me(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=Me(a):(o&=u,o!==0?l=Me(o):n||(n=u&~e,n!==0&&(l=Me(n))))):(u=a&~i,u!==0?l=Me(u):o!==0?l=Me(o):n||(n=a&~e,n!==0&&(l=Me(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Ee(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ie(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yt(){var e=ue;return ue<<=1,(ue&62914560)===0&&(ue=4194304),e}function zt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ee(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(n=o&~n;0<n;){var H=31-$e(n),q=1<<H;u[H]=0,v[H]=-1;var z=A[H];if(z!==null)for(A[H]=null,H=0;H<z.length;H++){var N=z[H];N!==null&&(N.lane&=-536870913)}n&=~q}a!==0&&us(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function us(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-$e(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-$e(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Pn(e,t){var n=t&-t;return n=(n&42)!==0?1:va(n),(n&(e.suspendedLanes|t))!==0?0:n}function va(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kl(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:om(e.type))}function Ml(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var kt=Math.random().toString(36).slice(2),xt="__reactFiber$"+kt,Lt="__reactProps$"+kt,Vn="__reactContainer$"+kt,nl="__reactEvents$"+kt,ds="__reactListeners$"+kt,fs="__reactHandles$"+kt,Cl="__reactResources$"+kt,xa="__reactMarker$"+kt;function Al(e){delete e[xt],delete e[Lt],delete e[nl],delete e[ds],delete e[fs]}function wa(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vn]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vh(e);e!==null;){if(n=e[xt])return n;e=Vh(e)}return t}e=n,n=e.parentNode}return null}function Sa(e){if(e=e[xt]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ea(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function dn(e){var t=e[Cl];return t||(t=e[Cl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[xa]=!0}var hs=new Set,ms={};function Qn(e,t){Xt(e,t),Xt(e+"Capture",t)}function Xt(e,t){for(ms[e]=t,e=0;e<t.length;e++)hs.add(t[e])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fi={},wt={};function Ta(e){return wn.call(wt,e)?!0:wn.call(fi,e)?!1:Ne.test(e)?wt[e]=!0:(fi[e]=!0,!1)}function al(e,t,n){if(Ta(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ll(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Qt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gs(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ja(e){if(!e._valueTracker){var t=ps(e)?"checked":"value";e._valueTracker=gs(e,t,""+e[t])}}function hi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ps(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zn=/[\n"\\]/g;function It(e){return e.replace(Zn,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function h(e,t,n,a,l,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wt(t)):e.value!==""+Wt(t)&&(e.value=""+Wt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?R(e,o,Wt(t)):n!=null?R(e,o,Wt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Wt(u):e.removeAttribute("name")}function x(e,t,n,a,l,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ja(e);return}n=n!=null?""+Wt(n):"",t=t!=null?""+Wt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ja(e)}function R(e,t,n){t==="number"&&il(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function V(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function F(e,t,n){if(t!=null&&(t=""+Wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Wt(n):""}function de(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(r(92));if(W(a)){if(1<a.length)throw Error(r(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Wt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ja(e)}function ce(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nt(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Zt.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ot(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&nt(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&nt(e,i,t[i])}function ct(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_u=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mi(e){return _u.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Tn(){}var pi=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,zl=null;function Ru(e){var t=Sa(e);if(t&&(e=t.stateNode)){var n=e[Lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(h(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Lt]||null;if(!l)throw Error(r(90));h(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&hi(a)}break e;case"textarea":F(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&V(e,!!n.multiple,t,!1)}}}var Fo=!1;function $u(e,t,n){if(Fo)return e(t,n);Fo=!0;try{var a=e(t);return a}finally{if(Fo=!1,(Dl!==null||zl!==null)&&(ao(),Dl&&(t=Dl,e=zl,zl=Dl=null,Ru(t),e)))for(t=0;t<e.length;t++)Ru(e[t])}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Lt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jo=!1;if(ea)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Jo=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Jo=!1}var ka=null,Wo=null,bs=null;function Ou(){if(bs)return bs;var e,t=Wo,n=t.length,a,l="value"in ka?ka.value:ka.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return bs=l.slice(e,1<a?1-a:void 0)}function ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vs(){return!0}function Hu(){return!1}function Pt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vs:Hu,this.isPropagationStopped=Hu,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),t}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=Pt(sl),yi=$({},sl,{view:0,detail:0}),sp=Pt(yi),Io,Po,vi,ws=$({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(Io=e.screenX-vi.screenX,Po=e.screenY-vi.screenY):Po=Io=0,vi=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:Po}}),Bu=Pt(ws),op=$({},ws,{dataTransfer:0}),cp=Pt(op),rp=$({},yi,{relatedTarget:0}),ec=Pt(rp),up=$({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),dp=Pt(up),fp=$({},sl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=Pt(fp),mp=$({},sl,{data:0}),Uu=Pt(mp),pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bp[e])?!!t[e]:!1}function tc(){return yp}var vp=$({},yi,{key:function(e){if(e.key){var t=pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xp=Pt(vp),wp=$({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qu=Pt(wp),Sp=$({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),Ep=Pt(Sp),Tp=$({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=Pt(Tp),kp=$({},ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=Pt(kp),Cp=$({},sl,{newState:0,oldState:0}),Ap=Pt(Cp),Dp=[9,13,27,32],nc=ea&&"CompositionEvent"in window,xi=null;ea&&"documentMode"in document&&(xi=document.documentMode);var zp=ea&&"TextEvent"in window&&!xi,Yu=ea&&(!nc||xi&&8<xi&&11>=xi),Xu=" ",Gu=!1;function Vu(e,t){switch(e){case"keyup":return Dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ll=!1;function Lp(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(Gu=!0,Xu);case"textInput":return e=t.data,e===Xu&&Gu?null:e;default:return null}}function Np(e,t){if(Ll)return e==="compositionend"||!nc&&Vu(e,t)?(e=Ou(),bs=Wo=ka=null,Ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var _p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_p[e.type]:t==="textarea"}function Ku(e,t,n,a){Dl?zl?zl.push(a):zl=[a]:Dl=a,t=uo(t,"onChange"),0<t.length&&(n=new xs("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var wi=null,Si=null;function Rp(e){zh(e,0)}function Ss(e){var t=Ea(e);if(hi(t))return e}function Fu(e,t){if(e==="change")return t}var Ju=!1;if(ea){var ac;if(ea){var lc="oninput"in document;if(!lc){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),lc=typeof Wu.oninput=="function"}ac=lc}else ac=!1;Ju=ac&&(!document.documentMode||9<document.documentMode)}function Iu(){wi&&(wi.detachEvent("onpropertychange",Pu),Si=wi=null)}function Pu(e){if(e.propertyName==="value"&&Ss(Si)){var t=[];Ku(t,Si,e,Ko(e)),$u(Rp,t)}}function $p(e,t,n){e==="focusin"?(Iu(),wi=t,Si=n,wi.attachEvent("onpropertychange",Pu)):e==="focusout"&&Iu()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(Si)}function Hp(e,t){if(e==="click")return Ss(t)}function Bp(e,t){if(e==="input"||e==="change")return Ss(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:Up;function Ei(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!wn.call(t,l)||!fn(e[l],t[l]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=il(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qp=ea&&"documentMode"in document&&11>=document.documentMode,Nl=null,sc=null,Ti=null,oc=!1;function ld(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||Nl==null||Nl!==il(a)||(a=Nl,"selectionStart"in a&&ic(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ti&&Ei(Ti,a)||(Ti=a,a=uo(sc,"onSelect"),0<a.length&&(t=new xs("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Nl)))}function ol(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _l={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionrun:ol("Transition","TransitionRun"),transitionstart:ol("Transition","TransitionStart"),transitioncancel:ol("Transition","TransitionCancel"),transitionend:ol("Transition","TransitionEnd")},cc={},id={};ea&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete _l.animationend.animation,delete _l.animationiteration.animation,delete _l.animationstart.animation),"TransitionEvent"in window||delete _l.transitionend.transition);function cl(e){if(cc[e])return cc[e];if(!_l[e])return e;var t=_l[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in id)return cc[e]=t[n];return e}var sd=cl("animationend"),od=cl("animationiteration"),cd=cl("animationstart"),Yp=cl("transitionrun"),Xp=cl("transitionstart"),Gp=cl("transitioncancel"),rd=cl("transitionend"),ud=new Map,rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rc.push("scrollEnd");function Bn(e,t){ud.set(e,t),Qn(t,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jn=[],Rl=0,uc=0;function Ts(){for(var e=Rl,t=uc=Rl=0;t<e;){var n=jn[t];jn[t++]=null;var a=jn[t];jn[t++]=null;var l=jn[t];jn[t++]=null;var i=jn[t];if(jn[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&dd(n,l,i)}}function js(e,t,n,a){jn[Rl++]=e,jn[Rl++]=t,jn[Rl++]=n,jn[Rl++]=a,uc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function dc(e,t,n,a){return js(e,t,n,a),ks(e)}function rl(e,t){return js(e,null,null,t),ks(e)}function dd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-$e(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function ks(e){if(50<Qi)throw Qi=0,xr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $l={};function Vp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,t,n,a){return new Vp(e,t,n,a)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,t){var n=e.alternate;return n===null?(n=hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ms(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")fc(e)&&(o=1);else if(typeof e=="string")o=Jg(e,n,ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _:return e=hn(31,n,t,l),e.elementType=_,e.lanes=i,e;case Q:return ul(n.children,l,i,t);case X:o=8,l|=24;break;case S:return e=hn(12,n,t,l|2),e.elementType=S,e.lanes=i,e;case we:return e=hn(13,n,t,l),e.elementType=we,e.lanes=i,e;case D:return e=hn(19,n,t,l),e.elementType=D,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case se:o=10;break e;case K:o=9;break e;case re:o=11;break e;case w:o=14;break e;case j:o=16,a=null;break e}o=29,n=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=hn(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function ul(e,t,n,a){return e=hn(7,e,a,t),e.lanes=n,e}function hc(e,t,n){return e=hn(6,e,null,t),e.lanes=n,e}function hd(e){var t=hn(18,null,null,0);return t.stateNode=e,t}function mc(e,t,n){return t=hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var md=new WeakMap;function kn(e,t){if(typeof e=="object"&&e!==null){var n=md.get(e);return n!==void 0?n:(t={value:e,source:t,stack:tl(t)},md.set(e,t),t)}return{value:e,source:t,stack:tl(t)}}var Ol=[],Hl=0,Cs=null,ji=0,Mn=[],Cn=0,Ma=null,Kn=1,Fn="";function na(e,t){Ol[Hl++]=ji,Ol[Hl++]=Cs,Cs=e,ji=t}function pd(e,t,n){Mn[Cn++]=Kn,Mn[Cn++]=Fn,Mn[Cn++]=Ma,Ma=e;var a=Kn;e=Fn;var l=32-$e(a)-1;a&=~(1<<l),n+=1;var i=32-$e(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Kn=1<<32-$e(t)+l|n<<l|a,Fn=i+e}else Kn=1<<i|n<<l|a,Fn=e}function pc(e){e.return!==null&&(na(e,1),pd(e,1,0))}function gc(e){for(;e===Cs;)Cs=Ol[--Hl],Ol[Hl]=null,ji=Ol[--Hl],Ol[Hl]=null;for(;e===Ma;)Ma=Mn[--Cn],Mn[Cn]=null,Fn=Mn[--Cn],Mn[Cn]=null,Kn=Mn[--Cn],Mn[Cn]=null}function gd(e,t){Mn[Cn++]=Kn,Mn[Cn++]=Fn,Mn[Cn++]=Ma,Kn=t.id,Fn=t.overflow,Ma=e}var Nt=null,Pe=null,_e=!1,Ca=null,An=!1,bc=Error(r(519));function Aa(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ki(kn(t,e)),bc}function bd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[xt]=e,t[Lt]=a,n){case"dialog":Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":case"embed":Ae("load",t);break;case"video":case"audio":for(n=0;n<Ki.length;n++)Ae(Ki[n],t);break;case"source":Ae("error",t);break;case"img":case"image":case"link":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"input":Ae("invalid",t),x(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ae("invalid",t);break;case"textarea":Ae("invalid",t),de(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Rh(t.textContent,n)?(a.popover!=null&&(Ae("beforetoggle",t),Ae("toggle",t)),a.onScroll!=null&&Ae("scroll",t),a.onScrollEnd!=null&&Ae("scrollend",t),a.onClick!=null&&(t.onclick=Tn),t=!0):t=!1,t||Aa(e,!0)}function yd(e){for(Nt=e.return;Nt;)switch(Nt.tag){case 5:case 31:case 13:An=!1;return;case 27:case 3:An=!0;return;default:Nt=Nt.return}}function Bl(e){if(e!==Nt)return!1;if(!_e)return yd(e),_e=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Rr(e.type,e.memoizedProps)),n=!n),n&&Pe&&Aa(e),yd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Pe=Gh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Pe=Gh(e)}else t===27?(t=Pe,Xa(e.type)?(e=Ur,Ur=null,Pe=e):Pe=t):Pe=Nt?zn(e.stateNode.nextSibling):null;return!0}function dl(){Pe=Nt=null,_e=!1}function yc(){var e=Ca;return e!==null&&(an===null?an=e:an.push.apply(an,e),Ca=null),e}function ki(e){Ca===null?Ca=[e]:Ca.push(e)}var vc=fe(null),fl=null,aa=null;function Da(e,t,n){xe(vc,t._currentValue),t._currentValue=n}function la(e){e._currentValue=vc.current,Se(vc)}function xc(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function wc(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var v=0;v<t.length;v++)if(u.context===t[v]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),xc(i.return,n,e),a||(o=null);break e}i=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(r(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),xc(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function Ul(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var u=l.type;fn(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===We.current){if(o=l.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Pi):e=[Pi])}l=l.return}e!==null&&wc(t,e,n,a),t.flags|=262144}function As(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hl(e){fl=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _t(e){return vd(fl,e)}function Ds(e,t){return fl===null&&hl(e),vd(e,t)}function vd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},aa===null){if(e===null)throw Error(r(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return n}var Qp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Zp=m.unstable_scheduleCallback,Kp=m.unstable_NormalPriority,mt={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sc(){return{controller:new Qp,data:new Map,refCount:0}}function Mi(e){e.refCount--,e.refCount===0&&Zp(Kp,function(){e.controller.abort()})}var Ci=null,Ec=0,ql=0,Yl=null;function Fp(e,t){if(Ci===null){var n=Ci=[];Ec=0,ql=kr(),Yl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ec++,t.then(xd,xd),t}function xd(){if(--Ec===0&&Ci!==null){Yl!==null&&(Yl.status="fulfilled");var e=Ci;Ci=null,ql=0,Yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var wd=L.S;L.S=function(e,t){ih=Ye(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fp(e,t),wd!==null&&wd(e,t)};var ml=fe(null);function Tc(){var e=ml.current;return e!==null?e:Fe.pooledCache}function zs(e,t){t===null?xe(ml,ml.current):xe(ml,t.pool)}function Sd(){var e=Tc();return e===null?null:{parent:mt._currentValue,pool:e}}var Xl=Error(r(460)),jc=Error(r(474)),Ls=Error(r(542)),Ns={then:function(){}};function Ed(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Td(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Tn,Tn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kd(e),e;default:if(typeof t.status=="string")t.then(Tn,Tn);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kd(e),e}throw gl=t,Xl}}function pl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(gl=n,Xl):n}}var gl=null;function jd(){if(gl===null)throw Error(r(459));var e=gl;return gl=null,e}function kd(e){if(e===Xl||e===Ls)throw Error(r(483))}var Gl=null,Ai=0;function _s(e){var t=Ai;return Ai+=1,Gl===null&&(Gl=[]),Td(Gl,e,t)}function Di(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Rs(e,t){throw t.$$typeof===M?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Md(e){function t(T,E){if(e){var C=T.deletions;C===null?(T.deletions=[E],T.flags|=16):C.push(E)}}function n(T,E){if(!e)return null;for(;E!==null;)t(T,E),E=E.sibling;return null}function a(T){for(var E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function l(T,E){return T=ta(T,E),T.index=0,T.sibling=null,T}function i(T,E,C){return T.index=C,e?(C=T.alternate,C!==null?(C=C.index,C<E?(T.flags|=67108866,E):C):(T.flags|=67108866,E)):(T.flags|=1048576,E)}function o(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function u(T,E,C,U){return E===null||E.tag!==6?(E=hc(C,T.mode,U),E.return=T,E):(E=l(E,C),E.return=T,E)}function v(T,E,C,U){var he=C.type;return he===Q?H(T,E,C.props.children,U,C.key):E!==null&&(E.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===j&&pl(he)===E.type)?(E=l(E,C.props),Di(E,C),E.return=T,E):(E=Ms(C.type,C.key,C.props,null,T.mode,U),Di(E,C),E.return=T,E)}function A(T,E,C,U){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=mc(C,T.mode,U),E.return=T,E):(E=l(E,C.children||[]),E.return=T,E)}function H(T,E,C,U,he){return E===null||E.tag!==7?(E=ul(C,T.mode,U,he),E.return=T,E):(E=l(E,C),E.return=T,E)}function q(T,E,C){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=hc(""+E,T.mode,C),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Y:return C=Ms(E.type,E.key,E.props,null,T.mode,C),Di(C,E),C.return=T,C;case O:return E=mc(E,T.mode,C),E.return=T,E;case j:return E=pl(E),q(T,E,C)}if(W(E)||le(E))return E=ul(E,T.mode,C,null),E.return=T,E;if(typeof E.then=="function")return q(T,_s(E),C);if(E.$$typeof===se)return q(T,Ds(T,E),C);Rs(T,E)}return null}function z(T,E,C,U){var he=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return he!==null?null:u(T,E,""+C,U);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Y:return C.key===he?v(T,E,C,U):null;case O:return C.key===he?A(T,E,C,U):null;case j:return C=pl(C),z(T,E,C,U)}if(W(C)||le(C))return he!==null?null:H(T,E,C,U,null);if(typeof C.then=="function")return z(T,E,_s(C),U);if(C.$$typeof===se)return z(T,E,Ds(T,C),U);Rs(T,C)}return null}function N(T,E,C,U,he){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return T=T.get(C)||null,u(E,T,""+U,he);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Y:return T=T.get(U.key===null?C:U.key)||null,v(E,T,U,he);case O:return T=T.get(U.key===null?C:U.key)||null,A(E,T,U,he);case j:return U=pl(U),N(T,E,C,U,he)}if(W(U)||le(U))return T=T.get(C)||null,H(E,T,U,he,null);if(typeof U.then=="function")return N(T,E,C,_s(U),he);if(U.$$typeof===se)return N(T,E,C,Ds(E,U),he);Rs(E,U)}return null}function ne(T,E,C,U){for(var he=null,Oe=null,ae=E,ke=E=0,ze=null;ae!==null&&ke<C.length;ke++){ae.index>ke?(ze=ae,ae=null):ze=ae.sibling;var He=z(T,ae,C[ke],U);if(He===null){ae===null&&(ae=ze);break}e&&ae&&He.alternate===null&&t(T,ae),E=i(He,E,ke),Oe===null?he=He:Oe.sibling=He,Oe=He,ae=ze}if(ke===C.length)return n(T,ae),_e&&na(T,ke),he;if(ae===null){for(;ke<C.length;ke++)ae=q(T,C[ke],U),ae!==null&&(E=i(ae,E,ke),Oe===null?he=ae:Oe.sibling=ae,Oe=ae);return _e&&na(T,ke),he}for(ae=a(ae);ke<C.length;ke++)ze=N(ae,T,ke,C[ke],U),ze!==null&&(e&&ze.alternate!==null&&ae.delete(ze.key===null?ke:ze.key),E=i(ze,E,ke),Oe===null?he=ze:Oe.sibling=ze,Oe=ze);return e&&ae.forEach(function(Ka){return t(T,Ka)}),_e&&na(T,ke),he}function pe(T,E,C,U){if(C==null)throw Error(r(151));for(var he=null,Oe=null,ae=E,ke=E=0,ze=null,He=C.next();ae!==null&&!He.done;ke++,He=C.next()){ae.index>ke?(ze=ae,ae=null):ze=ae.sibling;var Ka=z(T,ae,He.value,U);if(Ka===null){ae===null&&(ae=ze);break}e&&ae&&Ka.alternate===null&&t(T,ae),E=i(Ka,E,ke),Oe===null?he=Ka:Oe.sibling=Ka,Oe=Ka,ae=ze}if(He.done)return n(T,ae),_e&&na(T,ke),he;if(ae===null){for(;!He.done;ke++,He=C.next())He=q(T,He.value,U),He!==null&&(E=i(He,E,ke),Oe===null?he=He:Oe.sibling=He,Oe=He);return _e&&na(T,ke),he}for(ae=a(ae);!He.done;ke++,He=C.next())He=N(ae,T,ke,He.value,U),He!==null&&(e&&He.alternate!==null&&ae.delete(He.key===null?ke:He.key),E=i(He,E,ke),Oe===null?he=He:Oe.sibling=He,Oe=He);return e&&ae.forEach(function(ob){return t(T,ob)}),_e&&na(T,ke),he}function Ke(T,E,C,U){if(typeof C=="object"&&C!==null&&C.type===Q&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Y:e:{for(var he=C.key;E!==null;){if(E.key===he){if(he=C.type,he===Q){if(E.tag===7){n(T,E.sibling),U=l(E,C.props.children),U.return=T,T=U;break e}}else if(E.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===j&&pl(he)===E.type){n(T,E.sibling),U=l(E,C.props),Di(U,C),U.return=T,T=U;break e}n(T,E);break}else t(T,E);E=E.sibling}C.type===Q?(U=ul(C.props.children,T.mode,U,C.key),U.return=T,T=U):(U=Ms(C.type,C.key,C.props,null,T.mode,U),Di(U,C),U.return=T,T=U)}return o(T);case O:e:{for(he=C.key;E!==null;){if(E.key===he)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(T,E.sibling),U=l(E,C.children||[]),U.return=T,T=U;break e}else{n(T,E);break}else t(T,E);E=E.sibling}U=mc(C,T.mode,U),U.return=T,T=U}return o(T);case j:return C=pl(C),Ke(T,E,C,U)}if(W(C))return ne(T,E,C,U);if(le(C)){if(he=le(C),typeof he!="function")throw Error(r(150));return C=he.call(C),pe(T,E,C,U)}if(typeof C.then=="function")return Ke(T,E,_s(C),U);if(C.$$typeof===se)return Ke(T,E,Ds(T,C),U);Rs(T,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,E!==null&&E.tag===6?(n(T,E.sibling),U=l(E,C),U.return=T,T=U):(n(T,E),U=hc(C,T.mode,U),U.return=T,T=U),o(T)):n(T,E)}return function(T,E,C,U){try{Ai=0;var he=Ke(T,E,C,U);return Gl=null,he}catch(ae){if(ae===Xl||ae===Ls)throw ae;var Oe=hn(29,ae,null,T.mode);return Oe.lanes=U,Oe.return=T,Oe}}}var bl=Md(!0),Cd=Md(!1),za=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(qe&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ks(e),dd(e,null,n),t}return js(e,a,t,n),ks(e)}function zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,di(e,n)}}function Cc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ac=!1;function Li(){if(Ac){var e=Yl;if(e!==null)throw e}}function Ni(e,t,n,a){Ac=!1;var l=e.updateQueue;za=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var v=u,A=v.next;v.next=null,o===null?i=A:o.next=A,o=v;var H=e.alternate;H!==null&&(H=H.updateQueue,u=H.lastBaseUpdate,u!==o&&(u===null?H.firstBaseUpdate=A:u.next=A,H.lastBaseUpdate=v))}if(i!==null){var q=l.baseState;o=0,H=A=v=null,u=i;do{var z=u.lane&-536870913,N=z!==u.lane;if(N?(De&z)===z:(a&z)===z){z!==0&&z===ql&&(Ac=!0),H!==null&&(H=H.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var ne=e,pe=u;z=t;var Ke=n;switch(pe.tag){case 1:if(ne=pe.payload,typeof ne=="function"){q=ne.call(Ke,q,z);break e}q=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=pe.payload,z=typeof ne=="function"?ne.call(Ke,q,z):ne,z==null)break e;q=$({},q,z);break e;case 2:za=!0}}z=u.callback,z!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[z]:N.push(z))}else N={lane:z,tag:u.tag,payload:u.payload,callback:u.callback,next:null},H===null?(A=H=N,v=q):H=H.next=N,o|=z;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;N=u,u=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);H===null&&(v=q),l.baseState=v,l.firstBaseUpdate=A,l.lastBaseUpdate=H,i===null&&(l.shared.lanes=0),Ha|=o,e.lanes=o,e.memoizedState=q}}function Ad(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Dd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ad(n[e],t)}var Vl=fe(null),$s=fe(0);function zd(e,t){e=ha,xe($s,e),xe(Vl,t),ha=e|t.baseLanes}function Dc(){xe($s,ha),xe(Vl,Vl.current)}function zc(){ha=$s.current,Se(Vl),Se($s)}var mn=fe(null),Dn=null;function _a(e){var t=e.alternate;xe(ft,ft.current&1),xe(mn,e),Dn===null&&(t===null||Vl.current!==null||t.memoizedState!==null)&&(Dn=e)}function Lc(e){xe(ft,ft.current),xe(mn,e),Dn===null&&(Dn=e)}function Ld(e){e.tag===22?(xe(ft,ft.current),xe(mn,e),Dn===null&&(Dn=e)):Ra()}function Ra(){xe(ft,ft.current),xe(mn,mn.current)}function pn(e){Se(mn),Dn===e&&(Dn=null),Se(ft)}var ft=fe(0);function Os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Hr(n)||Br(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,Te=null,Qe=null,pt=null,Hs=!1,Ql=!1,yl=!1,Bs=0,_i=0,Zl=null,Wp=0;function rt(){throw Error(r(321))}function Nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function _c(e,t,n,a,l,i){return ia=i,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?gf:Fc,yl=!1,i=n(a,l),yl=!1,Ql&&(i=_d(t,n,a,l)),Nd(e),i}function Nd(e){L.H=Oi;var t=Qe!==null&&Qe.next!==null;if(ia=0,pt=Qe=Te=null,Hs=!1,_i=0,Zl=null,t)throw Error(r(300));e===null||gt||(e=e.dependencies,e!==null&&As(e)&&(gt=!0))}function _d(e,t,n,a){Te=e;var l=0;do{if(Ql&&(Zl=null),_i=0,Ql=!1,25<=l)throw Error(r(301));if(l+=1,pt=Qe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}L.H=bf,i=t(n,a)}while(Ql);return i}function Ip(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Ri(t):t,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(Te.flags|=1024),t}function Rc(){var e=Bs!==0;return Bs=0,e}function $c(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oc(e){if(Hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hs=!1}ia=0,pt=Qe=Te=null,Ql=!1,_i=Bs=0,Zl=null}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Te.memoizedState=pt=e:pt=pt.next=e,pt}function ht(){if(Qe===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=pt===null?Te.memoizedState:pt.next;if(t!==null)pt=t,Qe=e;else{if(e===null)throw Te.alternate===null?Error(r(467)):Error(r(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},pt===null?Te.memoizedState=pt=e:pt=pt.next=e}return pt}function Us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ri(e){var t=_i;return _i+=1,Zl===null&&(Zl=[]),e=Td(Zl,e,t),t=Te,(pt===null?t.memoizedState:pt.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?gf:Fc),e}function qs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ri(e);if(e.$$typeof===se)return _t(e)}throw Error(r(438,String(e)))}function Hc(e){var t=null,n=Te.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Us(),Te.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=te;return t.index++,n}function sa(e,t){return typeof t=="function"?t(e):t}function Ys(e){var t=ht();return Bc(t,Qe,e)}function Bc(e,t,n){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=o=null,v=null,A=t,H=!1;do{var q=A.lane&-536870913;if(q!==A.lane?(De&q)===q:(ia&q)===q){var z=A.revertLane;if(z===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),q===ql&&(H=!0);else if((ia&z)===z){A=A.next,z===ql&&(H=!0);continue}else q={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(u=v=q,o=i):v=v.next=q,Te.lanes|=z,Ha|=z;q=A.action,yl&&n(i,q),i=A.hasEagerState?A.eagerState:n(i,q)}else z={lane:q,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(u=v=z,o=i):v=v.next=z,Te.lanes|=q,Ha|=q;A=A.next}while(A!==null&&A!==t);if(v===null?o=i:v.next=u,!fn(i,e.memoizedState)&&(gt=!0,H&&(n=Yl,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=v,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Uc(e){var t=ht(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);fn(i,t.memoizedState)||(gt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Rd(e,t,n){var a=Te,l=ht(),i=_e;if(i){if(n===void 0)throw Error(r(407));n=n()}else n=t();var o=!fn((Qe||l).memoizedState,n);if(o&&(l.memoizedState=n,gt=!0),l=l.queue,Xc(Hd.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||pt!==null&&pt.memoizedState.tag&1){if(a.flags|=2048,Kl(9,{destroy:void 0},Od.bind(null,a,l,n,t),null),Fe===null)throw Error(r(349));i||(ia&127)!==0||$d(a,t,n)}return n}function $d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t=Us(),Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Od(e,t,n,a){t.value=n,t.getSnapshot=a,Bd(t)&&Ud(e)}function Hd(e,t,n){return n(function(){Bd(t)&&Ud(e)})}function Bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function Ud(e){var t=rl(e,2);t!==null&&ln(t,e,2)}function qc(e){var t=Kt();if(typeof e=="function"){var n=e;if(e=n(),yl){it(!0);try{n()}finally{it(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function qd(e,t,n,a){return e.baseState=n,Bc(e,Qe,typeof a=="function"?a:sa)}function Pp(e,t,n,a,l){if(Vs(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};L.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Yd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Yd(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=L.T,o={};L.T=o;try{var u=n(l,a),v=L.S;v!==null&&v(o,u),Xd(e,t,u)}catch(A){Yc(e,t,A)}finally{i!==null&&o.types!==null&&(i.types=o.types),L.T=i}}else try{i=n(l,a),Xd(e,t,i)}catch(A){Yc(e,t,A)}}function Xd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Gd(e,t,a)},function(a){return Yc(e,t,a)}):Gd(e,t,n)}function Gd(e,t,n){t.status="fulfilled",t.value=n,Vd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yd(e,n)))}function Yc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Vd(t),t=t.next;while(t!==a)}e.action=null}function Vd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qd(e,t){return t}function Zd(e,t){if(_e){var n=Fe.formState;if(n!==null){e:{var a=Te;if(_e){if(Pe){t:{for(var l=Pe,i=An;l.nodeType!==8;){if(!i){l=null;break t}if(l=zn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Pe=zn(l.nextSibling),a=l.data==="F!";break e}}Aa(a)}a=!1}a&&(t=n[0])}}return n=Kt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:t},n.queue=a,n=hf.bind(null,Te,a),a.dispatch=n,a=qc(!1),i=Kc.bind(null,Te,!1,a.queue),a=Kt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Pp.bind(null,Te,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Kd(e){var t=ht();return Fd(t,Qe,e)}function Fd(e,t,n){if(t=Bc(e,t,Qd)[0],e=Ys(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ri(t)}catch(o){throw o===Xl?Ls:o}else a=t;t=ht();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(Te.flags|=2048,Kl(9,{destroy:void 0},eg.bind(null,l,n),null)),[a,i,e]}function eg(e,t){e.action=t}function Jd(e){var t=ht(),n=Qe;if(n!==null)return Fd(t,n,e);ht(),t=t.memoizedState,n=ht();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Kl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Te.updateQueue,t===null&&(t=Us(),Te.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Wd(){return ht().memoizedState}function Xs(e,t,n,a){var l=Kt();Te.flags|=e,l.memoizedState=Kl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Gs(e,t,n,a){var l=ht();a=a===void 0?null:a;var i=l.memoizedState.inst;Qe!==null&&a!==null&&Nc(a,Qe.memoizedState.deps)?l.memoizedState=Kl(t,i,n,a):(Te.flags|=e,l.memoizedState=Kl(1|t,i,n,a))}function Id(e,t){Xs(8390656,8,e,t)}function Xc(e,t){Gs(2048,8,e,t)}function tg(e){Te.flags|=4;var t=Te.updateQueue;if(t===null)t=Us(),Te.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Pd(e){var t=ht().memoizedState;return tg({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function ef(e,t){return Gs(4,2,e,t)}function tf(e,t){return Gs(4,4,e,t)}function nf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){n=n!=null?n.concat([e]):null,Gs(4,4,nf.bind(null,t,e),n)}function Gc(){}function lf(e,t){var n=ht();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Nc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function sf(e,t){var n=ht();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Nc(t,a[1]))return a[0];if(a=e(),yl){it(!0);try{e()}finally{it(!1)}}return n.memoizedState=[a,t],a}function Vc(e,t,n){return n===void 0||(ia&1073741824)!==0&&(De&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=oh(),Te.lanes|=e,Ha|=e,n)}function of(e,t,n,a){return fn(n,t)?n:Vl.current!==null?(e=Vc(e,n,a),fn(e,t)||(gt=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(De&261930)===0?(gt=!0,e.memoizedState=n):(e=oh(),Te.lanes|=e,Ha|=e,t)}function cf(e,t,n,a,l){var i=I.p;I.p=i!==0&&8>i?i:8;var o=L.T,u={};L.T=u,Kc(e,!1,t,n);try{var v=l(),A=L.S;if(A!==null&&A(u,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var H=Jp(v,a);$i(e,t,H,yn(e))}else $i(e,t,a,yn(e))}catch(q){$i(e,t,{then:function(){},status:"rejected",reason:q},yn())}finally{I.p=i,o!==null&&u.types!==null&&(o.types=u.types),L.T=o}}function ng(){}function Qc(e,t,n,a){if(e.tag!==5)throw Error(r(476));var l=rf(e).queue;cf(e,l,t,ve,n===null?ng:function(){return uf(e),n(a)})}function rf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ve,baseState:ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:ve},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uf(e){var t=rf(e);t.next===null&&(t=e.alternate.memoizedState),$i(e,t.next.queue,{},yn())}function Zc(){return _t(Pi)}function df(){return ht().memoizedState}function ff(){return ht().memoizedState}function ag(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yn();e=La(n);var a=Na(t,e,n);a!==null&&(ln(a,t,n),zi(a,t,n)),t={cache:Sc()},e.payload=t;return}t=t.return}}function lg(e,t,n){var a=yn();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vs(e)?mf(t,n):(n=dc(e,t,n,a),n!==null&&(ln(n,e,a),pf(n,t,a)))}function hf(e,t,n){var a=yn();$i(e,t,n,a)}function $i(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vs(e))mf(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,fn(u,o))return js(e,t,l,0),Fe===null&&Ts(),!1}catch{}if(n=dc(e,t,l,a),n!==null)return ln(n,e,a),pf(n,t,a),!0}return!1}function Kc(e,t,n,a){if(a={lane:2,revertLane:kr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vs(e)){if(t)throw Error(r(479))}else t=dc(e,n,a,2),t!==null&&ln(t,e,2)}function Vs(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function mf(e,t){Ql=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,di(e,n)}}var Oi={readContext:_t,use:qs,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt};Oi.useEffectEvent=rt;var gf={readContext:_t,use:qs,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Id,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xs(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){Xs(4,2,e,t)},useMemo:function(e,t){var n=Kt();t=t===void 0?null:t;var a=e();if(yl){it(!0);try{e()}finally{it(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Kt();if(n!==void 0){var l=n(t);if(yl){it(!0);try{n(t)}finally{it(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=lg.bind(null,Te,e),[a.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:function(e){e=qc(e);var t=e.queue,n=hf.bind(null,Te,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Gc,useDeferredValue:function(e,t){var n=Kt();return Vc(n,e,t)},useTransition:function(){var e=qc(!1);return e=cf.bind(null,Te,e.queue,!0,!1),Kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Te,l=Kt();if(_e){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Fe===null)throw Error(r(349));(De&127)!==0||$d(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Id(Hd.bind(null,a,i,e),[e]),a.flags|=2048,Kl(9,{destroy:void 0},Od.bind(null,a,i,n,t),null),n},useId:function(){var e=Kt(),t=Fe.identifierPrefix;if(_e){var n=Fn,a=Kn;n=(a&~(1<<32-$e(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Bs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Wp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zc,useFormState:Zd,useActionState:Zd,useOptimistic:function(e){var t=Kt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Kc.bind(null,Te,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hc,useCacheRefresh:function(){return Kt().memoizedState=ag.bind(null,Te)},useEffectEvent:function(e){var t=Kt(),n={impl:e};return t.memoizedState=n,function(){if((qe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},Fc={readContext:_t,use:qs,useCallback:lf,useContext:_t,useEffect:Xc,useImperativeHandle:af,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:sf,useReducer:Ys,useRef:Wd,useState:function(){return Ys(sa)},useDebugValue:Gc,useDeferredValue:function(e,t){var n=ht();return of(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Ys(sa)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:Ri(e),t]},useSyncExternalStore:Rd,useId:df,useHostTransitionStatus:Zc,useFormState:Kd,useActionState:Kd,useOptimistic:function(e,t){var n=ht();return qd(n,Qe,e,t)},useMemoCache:Hc,useCacheRefresh:ff};Fc.useEffectEvent=Pd;var bf={readContext:_t,use:qs,useCallback:lf,useContext:_t,useEffect:Xc,useImperativeHandle:af,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:sf,useReducer:Uc,useRef:Wd,useState:function(){return Uc(sa)},useDebugValue:Gc,useDeferredValue:function(e,t){var n=ht();return Qe===null?Vc(n,e,t):of(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Uc(sa)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:Ri(e),t]},useSyncExternalStore:Rd,useId:df,useHostTransitionStatus:Zc,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=ht();return Qe!==null?qd(n,Qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hc,useCacheRefresh:ff};bf.useEffectEvent=Pd;function Jc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yn(),l=La(a);l.payload=t,n!=null&&(l.callback=n),t=Na(e,l,a),t!==null&&(ln(t,e,a),zi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yn(),l=La(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Na(e,l,a),t!==null&&(ln(t,e,a),zi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yn(),a=La(n);a.tag=2,t!=null&&(a.callback=t),t=Na(e,a,n),t!==null&&(ln(t,e,n),zi(t,e,n))}};function yf(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,a)||!Ei(l,i):!0}function vf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Wc.enqueueReplaceState(t,t.state,null)}function vl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=$({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function xf(e){Es(e)}function wf(e){console.error(e)}function Sf(e){Es(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ef(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ic(e,t,n){return n=La(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function Tf(e){return e=La(e),e.tag=3,e}function jf(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Ef(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ef(t,n,a),typeof l!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function ig(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ul(t,n,l,!0),n=mn.current,n!==null){switch(n.tag){case 31:case 13:return Dn===null?lo():n.alternate===null&&ut===0&&(ut=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Ns?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Er(e,a,l)),!1;case 22:return n.flags|=65536,a===Ns?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Er(e,a,l)),!1}throw Error(r(435,n.tag))}return Er(e,a,l),lo(),!1}if(_e)return t=mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==bc&&(e=Error(r(422),{cause:a}),ki(kn(e,n)))):(a!==bc&&(t=Error(r(423),{cause:a}),ki(kn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=kn(a,n),l=Ic(e.stateNode,a,l),Cc(e,l),ut!==4&&(ut=2)),!1;var i=Error(r(520),{cause:a});if(i=kn(i,n),Vi===null?Vi=[i]:Vi.push(i),ut!==4&&(ut=2),t===null)return!0;a=kn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ic(n.stateNode,a,e),Cc(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ba===null||!Ba.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Tf(l),jf(l,e,n,a),Cc(n,l),!1}n=n.return}while(n!==null);return!1}var Pc=Error(r(461)),gt=!1;function Rt(e,t,n,a){t.child=e===null?Cd(t,null,n,a):bl(t,e.child,n,a)}function kf(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}else o=a;return hl(t),a=_c(e,t,n,o,i,l),u=Rc(),e!==null&&!gt?($c(e,t,l),oa(e,t,l)):(_e&&u&&pc(t),t.flags|=1,Rt(e,t,a,l),t.child)}function Mf(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!fc(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Cf(e,t,i,a,l)):(e=Ms(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!or(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(o,a)&&e.ref===t.ref)return oa(e,t,l)}return t.flags|=1,e=ta(i,a),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Ei(i,a)&&e.ref===t.ref)if(gt=!1,t.pendingProps=a=i,or(e,l))(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,oa(e,t,l)}return er(e,t,n,a,l)}function Af(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Df(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zs(t,i!==null?i.cachePool:null),i!==null?zd(t,i):Dc(),Ld(t);else return a=t.lanes=536870912,Df(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(zs(t,i.cachePool),zd(t,i),Ra(),t.memoizedState=null):(e!==null&&zs(t,null),Dc(),Ra());return Rt(e,t,l,n),t.child}function Hi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Df(e,t,n,a,l){var i=Tc();return i=i===null?null:{parent:mt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&zs(t,null),Dc(),Ld(t),e!==null&&Ul(e,t,a,!0),t.childLanes=l,null}function Zs(e,t){return t=Fs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zf(e,t,n){return bl(t,e.child,null,n),e=Zs(t,t.pendingProps),e.flags|=2,pn(t),t.memoizedState=null,e}function sg(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(a.mode==="hidden")return e=Zs(t,a),t.lanes=536870912,Hi(null,e);if(Lc(t),(e=Pe)?(e=Xh(e,An),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Kn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},n=hd(e),n.return=t,t.child=n,Nt=t,Pe=null)):e=null,e===null)throw Aa(t);return t.lanes=536870912,null}return Zs(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Lc(t),l)if(t.flags&256)t.flags&=-257,t=zf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(gt||Ul(e,t,n,!1),l=(n&e.childLanes)!==0,gt||l){if(a=Fe,a!==null&&(o=Pn(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,rl(e,o),ln(a,e,o),Pc;lo(),t=zf(e,t,n)}else e=i.treeContext,Pe=zn(o.nextSibling),Nt=t,_e=!0,Ca=null,An=!1,e!==null&&gd(t,e),t=Zs(t,a),t.flags|=4096;return t}return e=ta(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ks(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function er(e,t,n,a,l){return hl(t),n=_c(e,t,n,a,void 0,l),a=Rc(),e!==null&&!gt?($c(e,t,l),oa(e,t,l)):(_e&&a&&pc(t),t.flags|=1,Rt(e,t,n,l),t.child)}function Lf(e,t,n,a,l,i){return hl(t),t.updateQueue=null,n=_d(t,a,n,l),Nd(e),a=Rc(),e!==null&&!gt?($c(e,t,i),oa(e,t,i)):(_e&&a&&pc(t),t.flags|=1,Rt(e,t,n,i),t.child)}function Nf(e,t,n,a,l){if(hl(t),t.stateNode===null){var i=$l,o=n.contextType;typeof o=="object"&&o!==null&&(i=_t(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},kc(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?_t(o):$l,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Jc(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Wc.enqueueReplaceState(i,i.state,null),Ni(t,a,i,l),Li(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,v=vl(n,u);i.props=v;var A=i.context,H=n.contextType;o=$l,typeof H=="object"&&H!==null&&(o=_t(H));var q=n.getDerivedStateFromProps;H=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||A!==o)&&vf(t,i,a,o),za=!1;var z=t.memoizedState;i.state=z,Ni(t,a,i,l),Li(),A=t.memoizedState,u||z!==A||za?(typeof q=="function"&&(Jc(t,n,q,a),A=t.memoizedState),(v=za||yf(t,n,v,a,z,A,o))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=o,a=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Mc(e,t),o=t.memoizedProps,H=vl(n,o),i.props=H,q=t.pendingProps,z=i.context,A=n.contextType,v=$l,typeof A=="object"&&A!==null&&(v=_t(A)),u=n.getDerivedStateFromProps,(A=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==q||z!==v)&&vf(t,i,a,v),za=!1,z=t.memoizedState,i.state=z,Ni(t,a,i,l),Li();var N=t.memoizedState;o!==q||z!==N||za||e!==null&&e.dependencies!==null&&As(e.dependencies)?(typeof u=="function"&&(Jc(t,n,u,a),N=t.memoizedState),(H=za||yf(t,n,H,a,z,N,v)||e!==null&&e.dependencies!==null&&As(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,N,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,N,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=N),i.props=a,i.state=N,i.context=v,a=H):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Ks(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=bl(t,e.child,null,l),t.child=bl(t,null,n,l)):Rt(e,t,n,l),t.memoizedState=i.state,e=t.child):e=oa(e,t,l),e}function _f(e,t,n,a){return dl(),t.flags|=256,Rt(e,t,n,a),t.child}var tr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nr(e){return{baseLanes:e,cachePool:Sd()}}function ar(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=bn),e}function Rf(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ft.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(l?_a(t):Ra(),(e=Pe)?(e=Xh(e,An),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Kn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},n=hd(e),n.return=t,t.child=n,Nt=t,Pe=null)):e=null,e===null)throw Aa(t);return Br(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(Ra(),l=t.mode,u=Fs({mode:"hidden",children:u},l),a=ul(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=nr(n),a.childLanes=ar(e,o,n),t.memoizedState=tr,Hi(null,a)):(_a(t),lr(t,u))}var v=e.memoizedState;if(v!==null&&(u=v.dehydrated,u!==null)){if(i)t.flags&256?(_a(t),t.flags&=-257,t=ir(e,t,n)):t.memoizedState!==null?(Ra(),t.child=e.child,t.flags|=128,t=null):(Ra(),u=a.fallback,l=t.mode,a=Fs({mode:"visible",children:a.children},l),u=ul(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,bl(t,e.child,null,n),a=t.child,a.memoizedState=nr(n),a.childLanes=ar(e,o,n),t.memoizedState=tr,t=Hi(null,a));else if(_a(t),Br(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var A=o.dgst;o=A,a=Error(r(419)),a.stack="",a.digest=o,ki({value:a,source:null,stack:null}),t=ir(e,t,n)}else if(gt||Ul(e,t,n,!1),o=(n&e.childLanes)!==0,gt||o){if(o=Fe,o!==null&&(a=Pn(o,n),a!==0&&a!==v.retryLane))throw v.retryLane=a,rl(e,a),ln(o,e,a),Pc;Hr(u)||lo(),t=ir(e,t,n)}else Hr(u)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Pe=zn(u.nextSibling),Nt=t,_e=!0,Ca=null,An=!1,e!==null&&gd(t,e),t=lr(t,a.children),t.flags|=4096);return t}return l?(Ra(),u=a.fallback,l=t.mode,v=e.child,A=v.sibling,a=ta(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,A!==null?u=ta(A,u):(u=ul(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,Hi(null,a),a=t.child,u=e.child.memoizedState,u===null?u=nr(n):(l=u.cachePool,l!==null?(v=mt._currentValue,l=l.parent!==v?{parent:v,pool:v}:l):l=Sd(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=ar(e,o,n),t.memoizedState=tr,Hi(e.child,a)):(_a(t),n=e.child,e=n.sibling,n=ta(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function lr(e,t){return t=Fs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fs(e,t){return e=hn(22,e,null,t),e.lanes=0,e}function ir(e,t,n){return bl(t,e.child,null,n),e=lr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),xc(e.return,t,n)}function sr(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function Of(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=ft.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,xe(ft,o),Rt(e,t,a,n),a=_e?ji:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$f(e,n,t);else if(e.tag===19)$f(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),sr(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Os(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}sr(t,!0,n,null,i,a);break;case"together":sr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function oa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ul(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=ta(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ta(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function or(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&As(e)))}function og(e,t,n){switch(t.tag){case 3:Et(t,t.stateNode.containerInfo),Da(t,mt,e.memoizedState.cache),dl();break;case 27:case 5:je(t);break;case 4:Et(t,t.stateNode.containerInfo);break;case 10:Da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(_a(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Rf(e,t,n):(_a(t),e=oa(e,t,n),e!==null?e.sibling:null);_a(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ul(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Of(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),xe(ft,ft.current),a)break;return null;case 22:return t.lanes=0,Af(e,t,n,t.pendingProps);case 24:Da(t,mt,e.memoizedState.cache)}return oa(e,t,n)}function Hf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)gt=!0;else{if(!or(e,n)&&(t.flags&128)===0)return gt=!1,og(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,_e&&(t.flags&1048576)!==0&&pd(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=pl(t.elementType),t.type=e,typeof e=="function")fc(e)?(a=vl(e,a),t.tag=1,t=Nf(null,t,e,a,n)):(t.tag=0,t=er(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===re){t.tag=11,t=kf(null,t,e,a,n);break e}else if(l===w){t.tag=14,t=Mf(null,t,e,a,n);break e}}throw t=Z(e)||e,Error(r(306,t,""))}}return t;case 0:return er(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=vl(a,t.pendingProps),Nf(e,t,a,l,n);case 3:e:{if(Et(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Mc(e,t),Ni(t,a,null,n);var o=t.memoizedState;if(a=o.cache,Da(t,mt,a),a!==i.cache&&wc(t,[mt],n,!0),Li(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=_f(e,t,a,n);break e}else if(a!==l){l=kn(Error(r(424)),t),ki(l),t=_f(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Pe=zn(e.firstChild),Nt=t,_e=!0,Ca=null,An=!0,n=Cd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dl(),a===l){t=oa(e,t,n);break e}Rt(e,t,a,n)}t=t.child}return t;case 26:return Ks(e,t),e===null?(n=Fh(t.type,null,t.pendingProps,null))?t.memoizedState=n:_e||(n=t.type,e=t.pendingProps,a=fo(Re.current).createElement(n),a[xt]=t,a[Lt]=e,$t(a,n,e),st(a),t.stateNode=a):t.memoizedState=Fh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return je(t),e===null&&_e&&(a=t.stateNode=Qh(t.type,t.pendingProps,Re.current),Nt=t,An=!0,l=Pe,Xa(t.type)?(Ur=l,Pe=zn(a.firstChild)):Pe=l),Rt(e,t,t.pendingProps.children,n),Ks(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((l=a=Pe)&&(a=Og(a,t.type,t.pendingProps,An),a!==null?(t.stateNode=a,Nt=t,Pe=zn(a.firstChild),An=!1,l=!0):l=!1),l||Aa(t)),je(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Rr(l,i)?a=null:o!==null&&Rr(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=_c(e,t,Ip,null,null,n),Pi._currentValue=l),Ks(e,t),Rt(e,t,a,n),t.child;case 6:return e===null&&_e&&((e=n=Pe)&&(n=Hg(n,t.pendingProps,An),n!==null?(t.stateNode=n,Nt=t,Pe=null,e=!0):e=!1),e||Aa(t)),null;case 13:return Rf(e,t,n);case 4:return Et(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=bl(t,null,a,n):Rt(e,t,a,n),t.child;case 11:return kf(e,t,t.type,t.pendingProps,n);case 7:return Rt(e,t,t.pendingProps,n),t.child;case 8:return Rt(e,t,t.pendingProps.children,n),t.child;case 12:return Rt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Da(t,t.type,a.value),Rt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,hl(t),l=_t(l),a=a(l),t.flags|=1,Rt(e,t,a,n),t.child;case 14:return Mf(e,t,t.type,t.pendingProps,n);case 15:return Cf(e,t,t.type,t.pendingProps,n);case 19:return Of(e,t,n);case 31:return sg(e,t,n);case 22:return Af(e,t,n,t.pendingProps);case 24:return hl(t),a=_t(mt),e===null?(l=Tc(),l===null&&(l=Fe,i=Sc(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},kc(t),Da(t,mt,l)):((e.lanes&n)!==0&&(Mc(e,t),Ni(t,null,null,n),Li()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Da(t,mt,a)):(a=i.cache,Da(t,mt,a),a!==l.cache&&wc(t,[mt],n,!0))),Rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function ca(e){e.flags|=4}function cr(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(dh())e.flags|=8192;else throw gl=Ns,jc}else e.flags&=-16777217}function Bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!em(t))if(dh())e.flags|=8192;else throw gl=Ns,jc}function Js(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yt():536870912,e.lanes|=t,Il|=t)}function Bi(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function cg(e,t,n){var a=t.pendingProps;switch(gc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),la(mt),At(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bl(t)?ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yc())),et(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(ca(t),i!==null?(et(t),Bf(t,i)):(et(t),cr(t,l,null,a,n))):i?i!==e.memoizedState?(ca(t),et(t),Bf(t,i)):(et(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&ca(t),et(t),cr(t,l,e,a,n)),null;case 27:if(Ue(t),n=Re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ca(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return et(t),null}e=ge.current,Bl(t)?bd(t):(e=Qh(l,a,n),t.stateNode=e,ca(t))}return et(t),null;case 5:if(Ue(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ca(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return et(t),null}if(i=ge.current,Bl(t))bd(t);else{var o=fo(Re.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[xt]=t,i[Lt]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch($t(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&ca(t)}}return et(t),cr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ca(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=Re.current,Bl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Nt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Rh(e.nodeValue,n)),e||Aa(t,!0)}else e=fo(e).createTextNode(a),e[xt]=t,t.stateNode=e}return et(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Bl(t),n!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[xt]=t}else dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),e=!1}else n=yc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pn(t),t):(pn(t),null);if((t.flags&128)!==0)throw Error(r(558))}return et(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Bl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[xt]=t}else dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),l=!1}else l=yc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(pn(t),t):(pn(t),null)}return pn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Js(t,t.updateQueue),et(t),null);case 4:return At(),e===null&&Dr(t.stateNode.containerInfo),et(t),null;case 10:return la(t.type),et(t),null;case 19:if(Se(ft),a=t.memoizedState,a===null)return et(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Bi(a,!1);else{if(ut!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Os(e),i!==null){for(t.flags|=128,Bi(a,!1),e=i.updateQueue,t.updateQueue=e,Js(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fd(n,e),n=n.sibling;return xe(ft,ft.current&1|2),_e&&na(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Ye()>to&&(t.flags|=128,l=!0,Bi(a,!1),t.lanes=4194304)}else{if(!l)if(e=Os(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Js(t,e),Bi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!_e)return et(t),null}else 2*Ye()-a.renderingStartTime>to&&n!==536870912&&(t.flags|=128,l=!0,Bi(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ye(),e.sibling=null,n=ft.current,xe(ft,l?n&1|2:n&1),_e&&na(t,a.treeForkCount),e):(et(t),null);case 22:case 23:return pn(t),zc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),n=t.updateQueue,n!==null&&Js(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Se(ml),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(mt),et(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function rg(e,t){switch(gc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(mt),At(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ue(t),null;case 31:if(t.memoizedState!==null){if(pn(t),t.alternate===null)throw Error(r(340));dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(ft),null;case 4:return At(),null;case 10:return la(t.type),null;case 22:case 23:return pn(t),zc(),e!==null&&Se(ml),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(mt),null;case 25:return null;default:return null}}function Uf(e,t){switch(gc(t),t.tag){case 3:la(mt),At();break;case 26:case 27:case 5:Ue(t);break;case 4:At();break;case 31:t.memoizedState!==null&&pn(t);break;case 13:pn(t);break;case 19:Se(ft);break;case 10:la(t.type);break;case 22:case 23:pn(t),zc(),e!==null&&Se(ml);break;case 24:la(mt)}}function Ui(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(u){Ve(t,t.return,u)}}function $a(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var v=n,A=u;try{A()}catch(H){Ve(l,v,H)}}}a=a.next}while(a!==i)}}catch(H){Ve(t,t.return,H)}}function qf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Dd(t,n)}catch(a){Ve(e,e.return,a)}}}function Yf(e,t,n){n.props=vl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ve(e,t,a)}}function qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Ve(e,t,l)}}function Jn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Ve(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ve(e,t,l)}else n.current=null}function Xf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Ve(e,e.return,l)}}function rr(e,t,n){try{var a=e.stateNode;zg(a,e.type,n,t),a[Lt]=t}catch(l){Ve(e,e.return,l)}}function Gf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function ur(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tn));else if(a!==4&&(a===27&&Xa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(dr(e,t,n),e=e.sibling;e!==null;)dr(e,t,n),e=e.sibling}function Ws(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Xa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}function Vf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);$t(t,a,n),t[xt]=e,t[Lt]=n}catch(i){Ve(e,e.return,i)}}var ra=!1,bt=!1,fr=!1,Qf=typeof WeakSet=="function"?WeakSet:Set,Mt=null;function ug(e,t){if(e=e.containerInfo,Nr=vo,e=ad(e),ic(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,v=-1,A=0,H=0,q=e,z=null;t:for(;;){for(var N;q!==n||l!==0&&q.nodeType!==3||(u=o+l),q!==i||a!==0&&q.nodeType!==3||(v=o+a),q.nodeType===3&&(o+=q.nodeValue.length),(N=q.firstChild)!==null;)z=q,q=N;for(;;){if(q===e)break t;if(z===n&&++A===l&&(u=o),z===i&&++H===a&&(v=o),(N=q.nextSibling)!==null)break;q=z,z=q.parentNode}q=N}n=u===-1||v===-1?null:{start:u,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(_r={focusedElem:e,selectionRange:n},vo=!1,Mt=t;Mt!==null;)if(t=Mt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Mt=e;else for(;Mt!==null;){switch(t=Mt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var ne=vl(n.type,l);e=a.getSnapshotBeforeUpdate(ne,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(pe){Ve(n,n.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Or(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Or(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Mt=e;break}Mt=t.return}}function Zf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:da(e,n),a&4&&Ui(5,n);break;case 1:if(da(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Ve(n,n.return,o)}else{var l=vl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ve(n,n.return,o)}}a&64&&qf(n),a&512&&qi(n,n.return);break;case 3:if(da(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Dd(e,t)}catch(o){Ve(n,n.return,o)}}break;case 27:t===null&&a&4&&Vf(n);case 26:case 5:da(e,n),t===null&&a&4&&Xf(n),a&512&&qi(n,n.return);break;case 12:da(e,n);break;case 31:da(e,n),a&4&&Jf(e,n);break;case 13:da(e,n),a&4&&Wf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vg.bind(null,n),Bg(e,n))));break;case 22:if(a=n.memoizedState!==null||ra,!a){t=t!==null&&t.memoizedState!==null||bt,l=ra;var i=bt;ra=a,(bt=t)&&!i?fa(e,n,(n.subtreeFlags&8772)!==0):da(e,n),ra=l,bt=i}break;case 30:break;default:da(e,n)}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Al(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,en=!1;function ua(e,t,n){for(n=n.child;n!==null;)Ff(e,t,n),n=n.sibling}function Ff(e,t,n){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(Vt,n)}catch{}switch(n.tag){case 26:bt||Jn(n,t),ua(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:bt||Jn(n,t);var a=at,l=en;Xa(n.type)&&(at=n.stateNode,en=!1),ua(e,t,n),Ji(n.stateNode),at=a,en=l;break;case 5:bt||Jn(n,t);case 6:if(a=at,l=en,at=null,ua(e,t,n),at=a,en=l,at!==null)if(en)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode)}catch(i){Ve(n,t,i)}else try{at.removeChild(n.stateNode)}catch(i){Ve(n,t,i)}break;case 18:at!==null&&(en?(e=at,qh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),si(e)):qh(at,n.stateNode));break;case 4:a=at,l=en,at=n.stateNode.containerInfo,en=!0,ua(e,t,n),at=a,en=l;break;case 0:case 11:case 14:case 15:$a(2,n,t),bt||$a(4,n,t),ua(e,t,n);break;case 1:bt||(Jn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Yf(n,t,a)),ua(e,t,n);break;case 21:ua(e,t,n);break;case 22:bt=(a=bt)||n.memoizedState!==null,ua(e,t,n),bt=a;break;default:ua(e,t,n)}}function Jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(n){Ve(t,t.return,n)}}}function Wf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(n){Ve(t,t.return,n)}}function dg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qf),t;default:throw Error(r(435,e.tag))}}function Is(e,t){var n=dg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=xg.bind(null,e,a);a.then(l,l)}})}function tn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(Xa(u.type)){at=u.stateNode,en=!1;break e}break;case 5:at=u.stateNode,en=!1;break e;case 3:case 4:at=u.stateNode.containerInfo,en=!0;break e}u=u.return}if(at===null)throw Error(r(160));Ff(i,o,l),at=null,en=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)If(t,e),t=t.sibling}var Un=null;function If(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tn(t,e),nn(e),a&4&&($a(3,e,e.return),Ui(3,e),$a(5,e,e.return));break;case 1:tn(t,e),nn(e),a&512&&(bt||n===null||Jn(n,n.return)),a&64&&ra&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Un;if(tn(t,e),nn(e),a&512&&(bt||n===null||Jn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[xa]||i[xt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),$t(i,a,n),i[xt]=e,st(i),a=i;break e;case"link":var o=Ih("link","href",l).get(a+(n.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break t}}i=l.createElement(a),$t(i,a,n),l.head.appendChild(i);break;case"meta":if(o=Ih("meta","content",l).get(a+(n.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break t}}i=l.createElement(a),$t(i,a,n),l.head.appendChild(i);break;default:throw Error(r(468,a))}i[xt]=e,st(i),a=i}e.stateNode=a}else Ph(l,e.type,e.stateNode);else e.stateNode=Wh(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Ph(l,e.type,e.stateNode):Wh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&rr(e,e.memoizedProps,n.memoizedProps)}break;case 27:tn(t,e),nn(e),a&512&&(bt||n===null||Jn(n,n.return)),n!==null&&a&4&&rr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tn(t,e),nn(e),a&512&&(bt||n===null||Jn(n,n.return)),e.flags&32){l=e.stateNode;try{ce(l,"")}catch(ne){Ve(e,e.return,ne)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,rr(e,l,n!==null?n.memoizedProps:l)),a&1024&&(fr=!0);break;case 6:if(tn(t,e),nn(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ne){Ve(e,e.return,ne)}}break;case 3:if(po=null,l=Un,Un=ho(t.containerInfo),tn(t,e),Un=l,nn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(ne){Ve(e,e.return,ne)}fr&&(fr=!1,Pf(e));break;case 4:a=Un,Un=ho(e.stateNode.containerInfo),tn(t,e),nn(e),Un=a;break;case 12:tn(t,e),nn(e);break;case 31:tn(t,e),nn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 13:tn(t,e),nn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eo=Ye()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,A=ra,H=bt;if(ra=A||l,bt=H||v,tn(t,e),bt=H,ra=A,nn(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||ra||bt||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(i=v.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=v.stateNode;var q=v.memoizedProps.style,z=q!=null&&q.hasOwnProperty("display")?q.display:null;u.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ne){Ve(v,v.return,ne)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(ne){Ve(v,v.return,ne)}}}else if(t.tag===18){if(n===null){v=t;try{var N=v.stateNode;l?Yh(N,!0):Yh(v.stateNode,!1)}catch(ne){Ve(v,v.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Is(e,n))));break;case 19:tn(t,e),nn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 30:break;case 21:break;default:tn(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Gf(a)){n=a;break}a=a.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var l=n.stateNode,i=ur(e);Ws(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(ce(o,""),n.flags&=-33);var u=ur(e);Ws(e,u,o);break;case 3:case 4:var v=n.stateNode.containerInfo,A=ur(e);dr(e,A,v);break;default:throw Error(r(161))}}catch(H){Ve(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zf(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:$a(4,t,t.return),xl(t);break;case 1:Jn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yf(t,t.return,n),xl(t);break;case 27:Ji(t.stateNode);case 26:case 5:Jn(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function fa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:fa(l,i,n),Ui(4,i);break;case 1:if(fa(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Ve(a,a.return,A)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Ad(v[l],u)}catch(A){Ve(a,a.return,A)}}n&&o&64&&qf(i),qi(i,i.return);break;case 27:Vf(i);case 26:case 5:fa(l,i,n),n&&a===null&&o&4&&Xf(i),qi(i,i.return);break;case 12:fa(l,i,n);break;case 31:fa(l,i,n),n&&o&4&&Jf(l,i);break;case 13:fa(l,i,n),n&&o&4&&Wf(l,i);break;case 22:i.memoizedState===null&&fa(l,i,n),qi(i,i.return);break;case 30:break;default:fa(l,i,n)}t=t.sibling}}function hr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Mi(n))}function mr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Mi(e))}function qn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eh(e,t,n,a),t=t.sibling}function eh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:qn(e,t,n,a),l&2048&&Ui(9,t);break;case 1:qn(e,t,n,a);break;case 3:qn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Mi(e)));break;case 12:if(l&2048){qn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ve(t,t.return,v)}}else qn(e,t,n,a);break;case 31:qn(e,t,n,a);break;case 13:qn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?qn(e,t,n,a):Yi(e,t):i._visibility&2?qn(e,t,n,a):(i._visibility|=2,Fl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&hr(o,t);break;case 24:qn(e,t,n,a),l&2048&&mr(t.alternate,t);break;default:qn(e,t,n,a)}}function Fl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=n,v=a,A=o.flags;switch(o.tag){case 0:case 11:case 15:Fl(i,o,u,v,l),Ui(8,o);break;case 23:break;case 22:var H=o.stateNode;o.memoizedState!==null?H._visibility&2?Fl(i,o,u,v,l):Yi(i,o):(H._visibility|=2,Fl(i,o,u,v,l)),l&&A&2048&&hr(o.alternate,o);break;case 24:Fl(i,o,u,v,l),l&&A&2048&&mr(o.alternate,o);break;default:Fl(i,o,u,v,l)}t=t.sibling}}function Yi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Yi(n,a),l&2048&&hr(a.alternate,a);break;case 24:Yi(n,a),l&2048&&mr(a.alternate,a);break;default:Yi(n,a)}t=t.sibling}}var Xi=8192;function Jl(e,t,n){if(e.subtreeFlags&Xi)for(e=e.child;e!==null;)th(e,t,n),e=e.sibling}function th(e,t,n){switch(e.tag){case 26:Jl(e,t,n),e.flags&Xi&&e.memoizedState!==null&&Wg(n,Un,e.memoizedState,e.memoizedProps);break;case 5:Jl(e,t,n);break;case 3:case 4:var a=Un;Un=ho(e.stateNode.containerInfo),Jl(e,t,n),Un=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Xi,Xi=16777216,Jl(e,t,n),Xi=a):Jl(e,t,n));break;default:Jl(e,t,n)}}function nh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Mt=a,lh(a,e)}nh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ah(e),e=e.sibling}function ah(e){switch(e.tag){case 0:case 11:case 15:Gi(e),e.flags&2048&&$a(9,e,e.return);break;case 3:Gi(e);break;case 12:Gi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ps(e)):Gi(e);break;default:Gi(e)}}function Ps(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Mt=a,lh(a,e)}nh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:$a(8,t,t.return),Ps(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ps(t));break;default:Ps(t)}e=e.sibling}}function lh(e,t){for(;Mt!==null;){var n=Mt;switch(n.tag){case 0:case 11:case 15:$a(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Mi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Mt=a;else e:for(n=e;Mt!==null;){a=Mt;var l=a.sibling,i=a.return;if(Kf(a),a===n){Mt=null;break e}if(l!==null){l.return=i,Mt=l;break e}Mt=i}}}var fg={getCacheForType:function(e){var t=_t(mt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _t(mt).controller.signal}},hg=typeof WeakMap=="function"?WeakMap:Map,qe=0,Fe=null,Ce=null,De=0,Ge=0,gn=null,Oa=!1,Wl=!1,pr=!1,ha=0,ut=0,Ha=0,wl=0,gr=0,bn=0,Il=0,Vi=null,an=null,br=!1,eo=0,ih=0,to=1/0,no=null,Ba=null,St=0,Ua=null,Pl=null,ma=0,yr=0,vr=null,sh=null,Qi=0,xr=null;function yn(){return(qe&2)!==0&&De!==0?De&-De:L.T!==null?kr():kl()}function oh(){if(bn===0)if((De&536870912)===0||_e){var e=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),bn=e}else bn=536870912;return e=mn.current,e!==null&&(e.flags|=32),bn}function ln(e,t,n){(e===Fe&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(ei(e,0),qa(e,De,bn,!1)),Gn(e,n),((qe&2)===0||e!==Fe)&&(e===Fe&&((qe&2)===0&&(wl|=n),ut===4&&qa(e,De,bn,!1)),Wn(e))}function ch(e,t,n){if((qe&6)!==0)throw Error(r(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ee(e,t),l=a?gg(e,t):Sr(e,t,!0),i=a;do{if(l===0){Wl&&!a&&qa(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!mg(n)){l=Sr(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=Vi;var v=u.current.memoizedState.isDehydrated;if(v&&(ei(u,o).flags|=256),o=Sr(u,o,!1),o!==2){if(pr&&!v){u.errorRecoveryDisabledLanes|=i,wl|=i,l=4;break e}i=an,an=l,i!==null&&(an===null?an=i:an.push.apply(an,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){ei(e,0),qa(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:qa(a,t,bn,!Oa);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=eo+300-Ye(),10<l)){if(qa(a,t,bn,!Oa),tt(a,0,!0)!==0)break e;ma=t,a.timeoutHandle=Bh(rh.bind(null,a,n,an,no,br,t,bn,wl,Il,Oa,i,"Throttled",-0,0),l);break e}rh(a,n,an,no,br,t,bn,wl,Il,Oa,i,null,-0,0)}}break}while(!0);Wn(e)}function rh(e,t,n,a,l,i,o,u,v,A,H,q,z,N){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tn},th(t,i,q);var ne=(i&62914560)===i?eo-Ye():(i&4194048)===i?ih-Ye():0;if(ne=Ig(q,ne),ne!==null){ma=i,e.cancelPendingCommit=ne(bh.bind(null,e,t,i,n,a,l,o,u,v,H,q,null,z,N)),qa(e,i,o,!A);return}}bh(e,t,i,n,a,l,o,u,v)}function mg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!fn(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qa(e,t,n,a){t&=~gr,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-$e(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&us(e,n,t)}function ao(){return(qe&6)===0?(Zi(0),!1):!0}function wr(){if(Ce!==null){if(Ge===0)var e=Ce.return;else e=Ce,aa=fl=null,Oc(e),Gl=null,Ai=0,e=Ce;for(;e!==null;)Uf(e.alternate,e),e=e.return;Ce=null}}function ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,_g(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ma=0,wr(),Fe=e,Ce=n=ta(e.current,null),De=t,Ge=0,gn=null,Oa=!1,Wl=Ee(e,t),pr=!1,Il=bn=gr=wl=Ha=ut=0,an=Vi=null,br=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-$e(a),i=1<<l;t|=e[l],a&=~i}return ha=t,Ts(),n}function uh(e,t){Te=null,L.H=Oi,t===Xl||t===Ls?(t=jd(),Ge=3):t===jc?(t=jd(),Ge=4):Ge=t===Pc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gn=t,Ce===null&&(ut=1,Qs(e,kn(t,e.current)))}function dh(){var e=mn.current;return e===null?!0:(De&4194048)===De?Dn===null:(De&62914560)===De||(De&536870912)!==0?e===Dn:!1}function fh(){var e=L.H;return L.H=Oi,e===null?Oi:e}function hh(){var e=L.A;return L.A=fg,e}function lo(){ut=4,Oa||(De&4194048)!==De&&mn.current!==null||(Wl=!0),(Ha&134217727)===0&&(wl&134217727)===0||Fe===null||qa(Fe,De,bn,!1)}function Sr(e,t,n){var a=qe;qe|=2;var l=fh(),i=hh();(Fe!==e||De!==t)&&(no=null,ei(e,t)),t=!1;var o=ut;e:do try{if(Ge!==0&&Ce!==null){var u=Ce,v=gn;switch(Ge){case 8:wr(),o=6;break e;case 3:case 2:case 9:case 6:mn.current===null&&(t=!0);var A=Ge;if(Ge=0,gn=null,ti(e,u,v,A),n&&Wl){o=0;break e}break;default:A=Ge,Ge=0,gn=null,ti(e,u,v,A)}}pg(),o=ut;break}catch(H){uh(e,H)}while(!0);return t&&e.shellSuspendCounter++,aa=fl=null,qe=a,L.H=l,L.A=i,Ce===null&&(Fe=null,De=0,Ts()),o}function pg(){for(;Ce!==null;)mh(Ce)}function gg(e,t){var n=qe;qe|=2;var a=fh(),l=hh();Fe!==e||De!==t?(no=null,to=Ye()+500,ei(e,t)):Wl=Ee(e,t);e:do try{if(Ge!==0&&Ce!==null){t=Ce;var i=gn;t:switch(Ge){case 1:Ge=0,gn=null,ti(e,t,i,1);break;case 2:case 9:if(Ed(i)){Ge=0,gn=null,ph(t);break}t=function(){Ge!==2&&Ge!==9||Fe!==e||(Ge=7),Wn(e)},i.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Ed(i)?(Ge=0,gn=null,ph(t)):(Ge=0,gn=null,ti(e,t,i,7));break;case 5:var o=null;switch(Ce.tag){case 26:o=Ce.memoizedState;case 5:case 27:var u=Ce;if(o?em(o):u.stateNode.complete){Ge=0,gn=null;var v=u.sibling;if(v!==null)Ce=v;else{var A=u.return;A!==null?(Ce=A,io(A)):Ce=null}break t}}Ge=0,gn=null,ti(e,t,i,5);break;case 6:Ge=0,gn=null,ti(e,t,i,6);break;case 8:wr(),ut=6;break e;default:throw Error(r(462))}}bg();break}catch(H){uh(e,H)}while(!0);return aa=fl=null,L.H=a,L.A=l,qe=n,Ce!==null?0:(Fe=null,De=0,Ts(),ut)}function bg(){for(;Ce!==null&&!lt();)mh(Ce)}function mh(e){var t=Hf(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?io(e):Ce=t}function ph(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Lf(n,t,t.pendingProps,t.type,void 0,De);break;case 11:t=Lf(n,t,t.pendingProps,t.type.render,t.ref,De);break;case 5:Oc(t);default:Uf(n,t),t=Ce=fd(t,ha),t=Hf(n,t,ha)}e.memoizedProps=e.pendingProps,t===null?io(e):Ce=t}function ti(e,t,n,a){aa=fl=null,Oc(t),Gl=null,Ai=0;var l=t.return;try{if(ig(e,l,t,n,De)){ut=1,Qs(e,kn(n,e.current)),Ce=null;return}}catch(i){if(l!==null)throw Ce=l,i;ut=1,Qs(e,kn(n,e.current)),Ce=null;return}t.flags&32768?(_e||a===1?e=!0:Wl||(De&536870912)!==0?e=!1:(Oa=e=!0,(a===2||a===9||a===3||a===6)&&(a=mn.current,a!==null&&a.tag===13&&(a.flags|=16384))),gh(t,e)):io(t)}function io(e){var t=e;do{if((t.flags&32768)!==0){gh(t,Oa);return}e=t.return;var n=cg(t.alternate,t,ha);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);ut===0&&(ut=5)}function gh(e,t){do{var n=rg(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);ut=6,Ce=null}function bh(e,t,n,a,l,i,o,u,v){e.cancelPendingCommit=null;do so();while(St!==0);if((qe&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=uc,ee(e,n,i,o,u,v),e===Fe&&(Ce=Fe=null,De=0),Pl=t,Ua=e,ma=n,yr=i,vr=l,sh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wg(Hn,function(){return Sh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null,l=I.p,I.p=2,o=qe,qe|=4;try{ug(e,t,n)}finally{qe=o,I.p=l,L.T=a}}St=1,yh(),vh(),xh()}}function yh(){if(St===1){St=0;var e=Ua,t=Pl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var a=I.p;I.p=2;var l=qe;qe|=4;try{If(t,e);var i=_r,o=ad(e.containerInfo),u=i.focusedElem,v=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&nd(u.ownerDocument.documentElement,u)){if(v!==null&&ic(u)){var A=v.start,H=v.end;if(H===void 0&&(H=A),"selectionStart"in u)u.selectionStart=A,u.selectionEnd=Math.min(H,u.value.length);else{var q=u.ownerDocument||document,z=q&&q.defaultView||window;if(z.getSelection){var N=z.getSelection(),ne=u.textContent.length,pe=Math.min(v.start,ne),Ke=v.end===void 0?pe:Math.min(v.end,ne);!N.extend&&pe>Ke&&(o=Ke,Ke=pe,pe=o);var T=td(u,pe),E=td(u,Ke);if(T&&E&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==E.node||N.focusOffset!==E.offset)){var C=q.createRange();C.setStart(T.node,T.offset),N.removeAllRanges(),pe>Ke?(N.addRange(C),N.extend(E.node,E.offset)):(C.setEnd(E.node,E.offset),N.addRange(C))}}}}for(q=[],N=u;N=N.parentNode;)N.nodeType===1&&q.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<q.length;u++){var U=q[u];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}vo=!!Nr,_r=Nr=null}finally{qe=l,I.p=a,L.T=n}}e.current=t,St=2}}function vh(){if(St===2){St=0;var e=Ua,t=Pl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var a=I.p;I.p=2;var l=qe;qe|=4;try{Zf(e,t.alternate,t)}finally{qe=l,I.p=a,L.T=n}}St=3}}function xh(){if(St===4||St===3){St=0,jt();var e=Ua,t=Pl,n=ma,a=sh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?St=5:(St=0,Pl=Ua=null,wh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ba=null),jl(n),t=t.stateNode,oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(Vt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=L.T,l=I.p,I.p=2,L.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var u=a[o];i(u.value,{componentStack:u.stack})}}finally{L.T=t,I.p=l}}(ma&3)!==0&&so(),Wn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===xr?Qi++:(Qi=0,xr=e):Qi=0,Zi(0)}}function wh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Mi(t)))}function so(){return yh(),vh(),xh(),Sh()}function Sh(){if(St!==5)return!1;var e=Ua,t=yr;yr=0;var n=jl(ma),a=L.T,l=I.p;try{I.p=32>n?32:n,L.T=null,n=vr,vr=null;var i=Ua,o=ma;if(St=0,Pl=Ua=null,ma=0,(qe&6)!==0)throw Error(r(331));var u=qe;if(qe|=4,ah(i.current),eh(i,i.current,o,n),qe=u,Zi(0,!1),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(Vt,i)}catch{}return!0}finally{I.p=l,L.T=a,wh(e,t)}}function Eh(e,t,n){t=kn(n,t),t=Ic(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(Gn(e,2),Wn(e))}function Ve(e,t,n){if(e.tag===3)Eh(e,e,n);else for(;t!==null;){if(t.tag===3){Eh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ba===null||!Ba.has(a))){e=kn(n,e),n=Tf(2),a=Na(t,n,2),a!==null&&(jf(n,a,t,e),Gn(a,2),Wn(a));break}}t=t.return}}function Er(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new hg;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(pr=!0,l.add(n),e=yg.bind(null,e,t,n),t.then(e,e))}function yg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fe===e&&(De&n)===n&&(ut===4||ut===3&&(De&62914560)===De&&300>Ye()-eo?(qe&2)===0&&ei(e,0):gr|=n,Il===De&&(Il=0)),Wn(e)}function Th(e,t){t===0&&(t=Yt()),e=rl(e,t),e!==null&&(Gn(e,t),Wn(e))}function vg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Th(e,n)}function xg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),Th(e,n)}function wg(e,t){return Bt(e,t)}var oo=null,ni=null,Tr=!1,co=!1,jr=!1,Ya=0;function Wn(e){e!==ni&&e.next===null&&(ni===null?oo=ni=e:ni=ni.next=e),co=!0,Tr||(Tr=!0,Eg())}function Zi(e,t){if(!jr&&co){jr=!0;do for(var n=!1,a=oo;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=l&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Ch(a,i))}else i=De,i=tt(a,a===Fe?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ee(a,i)||(n=!0,Ch(a,i));a=a.next}while(n);jr=!1}}function Sg(){jh()}function jh(){co=Tr=!1;var e=0;Ya!==0&&Ng()&&(e=Ya);for(var t=Ye(),n=null,a=oo;a!==null;){var l=a.next,i=kh(a,t);i===0?(a.next=null,n===null?oo=l:n.next=l,l===null&&(ni=n)):(n=a,(e!==0||(i&3)!==0)&&(co=!0)),a=l}St!==0&&St!==5||Zi(e),Ya!==0&&(Ya=0)}function kh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-$e(i),u=1<<o,v=l[o];v===-1?((u&n)===0||(u&a)!==0)&&(l[o]=Ie(u,t)):v<=t&&(e.expiredLanes|=u),i&=~u}if(t=Fe,n=De,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ye(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ee(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ye(a),jl(n)){case 2:case 8:n=cn;break;case 32:n=Hn;break;case 268435456:n=Yn;break;default:n=Hn}return a=Mh.bind(null,e),n=Bt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ye(a),e.callbackPriority=2,e.callbackNode=null,2}function Mh(e,t){if(St!==0&&St!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var a=De;return a=tt(e,e===Fe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(ch(e,a,t),kh(e,Ye()),e.callbackNode!=null&&e.callbackNode===n?Mh.bind(null,e):null)}function Ch(e,t){if(so())return null;ch(e,t,!0)}function Eg(){Rg(function(){(qe&6)!==0?Bt(On,Sg):jh()})}function kr(){if(Ya===0){var e=ql;e===0&&(e=qt,qt<<=1,(qt&261888)===0&&(qt=256)),Ya=e}return Ya}function Ah(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mi(""+e)}function Dh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Tg(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Ah((l[Lt]||null).action),o=a.submitter;o&&(t=(t=o[Lt]||null)?Ah(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new xs("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ya!==0){var v=o?Dh(l,o):new FormData(l);Qc(n,{pending:!0,data:v,method:l.method,action:i},null,v)}}else typeof i=="function"&&(u.preventDefault(),v=o?Dh(l,o):new FormData(l),Qc(n,{pending:!0,data:v,method:l.method,action:i},i,v))},currentTarget:l}]})}}for(var Mr=0;Mr<rc.length;Mr++){var Cr=rc[Mr],jg=Cr.toLowerCase(),kg=Cr[0].toUpperCase()+Cr.slice(1);Bn(jg,"on"+kg)}Bn(sd,"onAnimationEnd"),Bn(od,"onAnimationIteration"),Bn(cd,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Yp,"onTransitionRun"),Bn(Xp,"onTransitionStart"),Bn(Gp,"onTransitionCancel"),Bn(rd,"onTransitionEnd"),Xt("onMouseEnter",["mouseout","mouseover"]),Xt("onMouseLeave",["mouseout","mouseover"]),Xt("onPointerEnter",["pointerout","pointerover"]),Xt("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki));function zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var u=a[o],v=u.instance,A=u.currentTarget;if(u=u.listener,v!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=A;try{i(l)}catch(H){Es(H)}l.currentTarget=null,i=v}else for(o=0;o<a.length;o++){if(u=a[o],v=u.instance,A=u.currentTarget,u=u.listener,v!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=A;try{i(l)}catch(H){Es(H)}l.currentTarget=null,i=v}}}}function Ae(e,t){var n=t[nl];n===void 0&&(n=t[nl]=new Set);var a=e+"__bubble";n.has(a)||(Lh(t,e,2,!1),n.add(a))}function Ar(e,t,n){var a=0;t&&(a|=4),Lh(n,e,a,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[ro]){e[ro]=!0,hs.forEach(function(n){n!=="selectionchange"&&(Mg.has(n)||Ar(n,!1,e),Ar(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,Ar("selectionchange",!1,t))}}function Lh(e,t,n,a){switch(om(t)){case 2:var l=tb;break;case 8:l=nb;break;default:l=Vr}n=l.bind(null,t,n,e),l=void 0,!Jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function zr(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var u=a.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=a.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=wa(u),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){a=i=o;continue e}u=u.parentNode}}a=a.return}$u(function(){var A=i,H=Ko(n),q=[];e:{var z=ud.get(e);if(z!==void 0){var N=xs,ne=e;switch(e){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":N=xp;break;case"focusin":ne="focus",N=ec;break;case"focusout":ne="blur",N=ec;break;case"beforeblur":case"afterblur":N=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Ep;break;case sd:case od:case cd:N=dp;break;case rd:N=jp;break;case"scroll":case"scrollend":N=sp;break;case"wheel":N=Mp;break;case"copy":case"cut":case"paste":N=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=qu;break;case"toggle":case"beforetoggle":N=Ap}var pe=(t&4)!==0,Ke=!pe&&(e==="scroll"||e==="scrollend"),T=pe?z!==null?z+"Capture":null:z;pe=[];for(var E=A,C;E!==null;){var U=E;if(C=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||C===null||T===null||(U=gi(E,T),U!=null&&pe.push(Fi(E,U,C))),Ke)break;E=E.return}0<pe.length&&(z=new N(z,ne,null,n,H),q.push({event:z,listeners:pe}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",z&&n!==pi&&(ne=n.relatedTarget||n.fromElement)&&(wa(ne)||ne[Vn]))break e;if((N||z)&&(z=H.window===H?H:(z=H.ownerDocument)?z.defaultView||z.parentWindow:window,N?(ne=n.relatedTarget||n.toElement,N=A,ne=ne?wa(ne):null,ne!==null&&(Ke=b(ne),pe=ne.tag,ne!==Ke||pe!==5&&pe!==27&&pe!==6)&&(ne=null)):(N=null,ne=A),N!==ne)){if(pe=Bu,U="onMouseLeave",T="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(pe=qu,U="onPointerLeave",T="onPointerEnter",E="pointer"),Ke=N==null?z:Ea(N),C=ne==null?z:Ea(ne),z=new pe(U,E+"leave",N,n,H),z.target=Ke,z.relatedTarget=C,U=null,wa(H)===A&&(pe=new pe(T,E+"enter",ne,n,H),pe.target=C,pe.relatedTarget=Ke,U=pe),Ke=U,N&&ne)t:{for(pe=Cg,T=N,E=ne,C=0,U=T;U;U=pe(U))C++;U=0;for(var he=E;he;he=pe(he))U++;for(;0<C-U;)T=pe(T),C--;for(;0<U-C;)E=pe(E),U--;for(;C--;){if(T===E||E!==null&&T===E.alternate){pe=T;break t}T=pe(T),E=pe(E)}pe=null}else pe=null;N!==null&&Nh(q,z,N,pe,!1),ne!==null&&Ke!==null&&Nh(q,Ke,ne,pe,!0)}}e:{if(z=A?Ea(A):window,N=z.nodeName&&z.nodeName.toLowerCase(),N==="select"||N==="input"&&z.type==="file")var Oe=Fu;else if(Zu(z))if(Ju)Oe=Bp;else{Oe=Op;var ae=$p}else N=z.nodeName,!N||N.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?A&&ct(A.elementType)&&(Oe=Fu):Oe=Hp;if(Oe&&(Oe=Oe(e,A))){Ku(q,Oe,n,H);break e}ae&&ae(e,z,A),e==="focusout"&&A&&z.type==="number"&&A.memoizedProps.value!=null&&R(z,"number",z.value)}switch(ae=A?Ea(A):window,e){case"focusin":(Zu(ae)||ae.contentEditable==="true")&&(Nl=ae,sc=A,Ti=null);break;case"focusout":Ti=sc=Nl=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,ld(q,n,H);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":ld(q,n,H)}var ke;if(nc)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else Ll?Vu(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(Yu&&n.locale!=="ko"&&(Ll||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&Ll&&(ke=Ou()):(ka=H,Wo="value"in ka?ka.value:ka.textContent,Ll=!0)),ae=uo(A,ze),0<ae.length&&(ze=new Uu(ze,e,null,n,H),q.push({event:ze,listeners:ae}),ke?ze.data=ke:(ke=Qu(n),ke!==null&&(ze.data=ke)))),(ke=zp?Lp(e,n):Np(e,n))&&(ze=uo(A,"onBeforeInput"),0<ze.length&&(ae=new Uu("onBeforeInput","beforeinput",null,n,H),q.push({event:ae,listeners:ze}),ae.data=ke)),Tg(q,e,A,n,H)}zh(q,t)})}function Fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=gi(e,n),l!=null&&a.unshift(Fi(e,l,i)),l=gi(e,t),l!=null&&a.push(Fi(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Cg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nh(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var u=n,v=u.alternate,A=u.stateNode;if(u=u.tag,v!==null&&v===a)break;u!==5&&u!==26&&u!==27||A===null||(v=A,l?(A=gi(n,i),A!=null&&o.unshift(Fi(n,A,v))):l||(A=gi(n,i),A!=null&&o.push(Fi(n,A,v)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ag=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function _h(e){return(typeof e=="string"?e:""+e).replace(Ag,`
`).replace(Dg,"")}function Rh(e,t){return t=_h(t),_h(e)===t}function Ze(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ce(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ce(e,""+a);break;case"className":ll(e,"class",a);break;case"tabIndex":ll(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ll(e,n,a);break;case"style":ot(e,a,i);break;case"data":if(t!=="object"){ll(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=mi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",l.name,l,null),Ze(e,t,"formEncType",l.formEncType,l,null),Ze(e,t,"formMethod",l.formMethod,l,null),Ze(e,t,"formTarget",l.formTarget,l,null)):(Ze(e,t,"encType",l.encType,l,null),Ze(e,t,"method",l.method,l,null),Ze(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=mi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Tn);break;case"onScroll":a!=null&&Ae("scroll",e);break;case"onScrollEnd":a!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=mi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),al(e,"popover",a);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":al(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Nu.get(n)||n,al(e,n,a))}}function Lr(e,t,n,a,l,i){switch(n){case"style":ot(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ce(e,a):(typeof a=="number"||typeof a=="bigint")&&ce(e,""+a);break;case"onScroll":a!=null&&Ae("scroll",e);break;case"onScrollEnd":a!=null&&Ae("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ms.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Lt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):al(e,n,a)}}}function $t(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ze(e,t,i,o,n,null)}}l&&Ze(e,t,"srcSet",n.srcSet,n,null),a&&Ze(e,t,"src",n.src,n,null);return;case"input":Ae("invalid",e);var u=i=o=l=null,v=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var H=n[a];if(H!=null)switch(a){case"name":l=H;break;case"type":o=H;break;case"checked":v=H;break;case"defaultChecked":A=H;break;case"value":i=H;break;case"defaultValue":u=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,t));break;default:Ze(e,t,a,H,n,null)}}x(e,i,u,v,A,o,l,!1);return;case"select":Ae("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:Ze(e,t,l,u,n,null)}t=i,n=o,e.multiple=!!a,t!=null?V(e,!!a,t,!1):n!=null&&V(e,!!a,n,!0);return;case"textarea":Ae("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:Ze(e,t,o,u,n,null)}de(e,a,l,i);return;case"option":for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null)&&(v==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ze(e,t,v,a,n,null));return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(a=0;a<Ki.length;a++)Ae(Ki[a],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ze(e,t,A,a,n,null)}return;default:if(ct(t)){for(H in n)n.hasOwnProperty(H)&&(a=n[H],a!==void 0&&Lr(e,t,H,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&Ze(e,t,u,a,n,null))}function zg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,u=null,v=null,A=null,H=null;for(N in n){var q=n[N];if(n.hasOwnProperty(N)&&q!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=q;default:a.hasOwnProperty(N)||Ze(e,t,N,null,a,q)}}for(var z in a){var N=a[z];if(q=n[z],a.hasOwnProperty(z)&&(N!=null||q!=null))switch(z){case"type":i=N;break;case"name":l=N;break;case"checked":A=N;break;case"defaultChecked":H=N;break;case"value":o=N;break;case"defaultValue":u=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:N!==q&&Ze(e,t,z,N,a,q)}}h(e,o,u,v,A,H,i,l);return;case"select":N=o=u=z=null;for(i in n)if(v=n[i],n.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":N=v;default:a.hasOwnProperty(i)||Ze(e,t,i,null,a,v)}for(l in a)if(i=a[l],v=n[l],a.hasOwnProperty(l)&&(i!=null||v!=null))switch(l){case"value":z=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==v&&Ze(e,t,l,i,a,v)}t=u,n=o,a=N,z!=null?V(e,!!n,z,!1):!!a!=!!n&&(t!=null?V(e,!!n,t,!0):V(e,!!n,n?[]:"",!1));return;case"textarea":N=z=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Ze(e,t,u,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":z=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==i&&Ze(e,t,o,l,a,i)}F(e,z,N);return;case"option":for(var ne in n)z=n[ne],n.hasOwnProperty(ne)&&z!=null&&!a.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Ze(e,t,ne,null,a,z));for(v in a)z=a[v],N=n[v],a.hasOwnProperty(v)&&z!==N&&(z!=null||N!=null)&&(v==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":Ze(e,t,v,z,a,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in n)z=n[pe],n.hasOwnProperty(pe)&&z!=null&&!a.hasOwnProperty(pe)&&Ze(e,t,pe,null,a,z);for(A in a)if(z=a[A],N=n[A],a.hasOwnProperty(A)&&z!==N&&(z!=null||N!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:Ze(e,t,A,z,a,N)}return;default:if(ct(t)){for(var Ke in n)z=n[Ke],n.hasOwnProperty(Ke)&&z!==void 0&&!a.hasOwnProperty(Ke)&&Lr(e,t,Ke,void 0,a,z);for(H in a)z=a[H],N=n[H],!a.hasOwnProperty(H)||z===N||z===void 0&&N===void 0||Lr(e,t,H,z,a,N);return}}for(var T in n)z=n[T],n.hasOwnProperty(T)&&z!=null&&!a.hasOwnProperty(T)&&Ze(e,t,T,null,a,z);for(q in a)z=a[q],N=n[q],!a.hasOwnProperty(q)||z===N||z==null&&N==null||Ze(e,t,q,z,a,N)}function $h(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,u=l.duration;if(i&&u&&$h(o)){for(o=0,u=l.responseEnd,a+=1;a<n.length;a++){var v=n[a],A=v.startTime;if(A>u)break;var H=v.transferSize,q=v.initiatorType;H&&$h(q)&&(v=v.responseEnd,o+=H*(v<u?1:(u-A)/(v-A)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nr=null,_r=null;function fo(e){return e.nodeType===9?e:e.ownerDocument}function Oh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $r=null;function Ng(){var e=window.event;return e&&e.type==="popstate"?e===$r?!1:($r=e,!0):($r=null,!1)}var Bh=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(e){return Uh.resolve(null).then(e).catch($g)}:Bh;function $g(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function qh(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),si(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ji(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ji(n);for(var i=n.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[xa]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Ji(e.ownerDocument.body);n=l}while(n);si(t)}function Yh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Or(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Or(n),Al(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Og(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[xa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function Hg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zn(e.nextSibling),e===null))return null;return e}function Xh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zn(e.nextSibling),e===null))return null;return e}function Hr(e){return e.data==="$?"||e.data==="$~"}function Br(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Bg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ur=null;function Gh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Vh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Qh(e,t,n){switch(t=fo(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ji(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Al(e)}var Ln=new Map,Zh=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=I.d;I.d={f:Ug,r:qg,D:Yg,C:Xg,L:Gg,m:Vg,X:Zg,S:Qg,M:Kg};function Ug(){var e=pa.f(),t=ao();return e||t}function qg(e){var t=Sa(e);t!==null&&t.tag===5&&t.type==="form"?uf(t):pa.r(e)}var ai=typeof document>"u"?null:document;function Kh(e,t,n){var a=ai;if(a&&typeof t=="string"&&t){var l=It(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Zh.has(l)||(Zh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),$t(t,"link",e),st(t),a.head.appendChild(t)))}}function Yg(e){pa.D(e),Kh("dns-prefetch",e,null)}function Xg(e,t){pa.C(e,t),Kh("preconnect",e,t)}function Gg(e,t,n){pa.L(e,t,n);var a=ai;if(a&&e&&t){var l='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+It(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+It(n.imageSizes)+'"]')):l+='[href="'+It(e)+'"]';var i=l;switch(t){case"style":i=li(e);break;case"script":i=ii(e)}Ln.has(i)||(e=$({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ln.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Wi(i))||t==="script"&&a.querySelector(Ii(i))||(t=a.createElement("link"),$t(t,"link",e),st(t),a.head.appendChild(t)))}}function Vg(e,t){pa.m(e,t);var n=ai;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+It(a)+'"][href="'+It(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ii(e)}if(!Ln.has(i)&&(e=$({rel:"modulepreload",href:e},t),Ln.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ii(i)))return}a=n.createElement("link"),$t(a,"link",e),st(a),n.head.appendChild(a)}}}function Qg(e,t,n){pa.S(e,t,n);var a=ai;if(a&&e){var l=dn(a).hoistableStyles,i=li(e);t=t||"default";var o=l.get(i);if(!o){var u={loading:0,preload:null};if(o=a.querySelector(Wi(i)))u.loading=5;else{e=$({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ln.get(i))&&qr(e,n);var v=o=a.createElement("link");st(v),$t(v,"link",e),v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),v.addEventListener("load",function(){u.loading|=1}),v.addEventListener("error",function(){u.loading|=2}),u.loading|=4,mo(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(i,o)}}}function Zg(e,t){pa.X(e,t);var n=ai;if(n&&e){var a=dn(n).hoistableScripts,l=ii(e),i=a.get(l);i||(i=n.querySelector(Ii(l)),i||(e=$({src:e,async:!0},t),(t=Ln.get(l))&&Yr(e,t),i=n.createElement("script"),st(i),$t(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Kg(e,t){pa.M(e,t);var n=ai;if(n&&e){var a=dn(n).hoistableScripts,l=ii(e),i=a.get(l);i||(i=n.querySelector(Ii(l)),i||(e=$({src:e,async:!0,type:"module"},t),(t=Ln.get(l))&&Yr(e,t),i=n.createElement("script"),st(i),$t(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Fh(e,t,n,a){var l=(l=Re.current)?ho(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=li(n.href),n=dn(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=li(n.href);var i=dn(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Wi(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ln.set(e,n),i||Fg(l,e,n,o.state))),t&&a===null)throw Error(r(528,""));return o}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ii(n),n=dn(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function li(e){return'href="'+It(e)+'"'}function Wi(e){return'link[rel="stylesheet"]['+e+"]"}function Jh(e){return $({},e,{"data-precedence":e.precedence,precedence:null})}function Fg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),$t(t,"link",n),st(t),e.head.appendChild(t))}function ii(e){return'[src="'+It(e)+'"]'}function Ii(e){return"script[async]"+e}function Wh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(a)return t.instance=a,st(a),a;var l=$({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),st(a),$t(a,"style",l),mo(a,n.precedence,e),t.instance=a;case"stylesheet":l=li(n.href);var i=e.querySelector(Wi(l));if(i)return t.state.loading|=4,t.instance=i,st(i),i;a=Jh(n),(l=Ln.get(l))&&qr(a,l),i=(e.ownerDocument||e).createElement("link"),st(i);var o=i;return o._p=new Promise(function(u,v){o.onload=u,o.onerror=v}),$t(i,"link",a),t.state.loading|=4,mo(i,n.precedence,e),t.instance=i;case"script":return i=ii(n.src),(l=e.querySelector(Ii(i)))?(t.instance=l,st(l),l):(a=n,(l=Ln.get(i))&&(a=$({},n),Yr(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),st(l),$t(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,mo(a,n.precedence,e));return t.instance}function mo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var u=a[o];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function qr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var po=null;function Ih(e,t,n){if(po===null){var a=new Map,l=po=new Map;l.set(n,a)}else l=po,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[xa]||i[xt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=a.get(o);u?u.push(i):a.set(o,[i])}}return a}function Ph(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Jg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function em(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Wg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=li(a.href),i=t.querySelector(Wi(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=go.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,st(i);return}i=t.ownerDocument||t,a=Jh(a),(l=Ln.get(l))&&qr(a,l),i=i.createElement("link"),st(i);var o=i;o._p=new Promise(function(u,v){o.onload=u,o.onerror=v}),$t(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=go.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Xr=0;function Ig(e,t){return e.stylesheets&&e.count===0&&yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Xr===0&&(Xr=62500*Lg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Xr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function yo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,t.forEach(Pg,e),bo=null,go.call(e))}function Pg(e,t){if(!(t.state.loading&4)){var n=bo.get(e);if(n)var a=n.get(null);else{n=new Map,bo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=go.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Pi={$$typeof:se,Provider:null,Consumer:null,_currentValue:ve,_currentValue2:ve,_threadCount:0};function eb(e,t,n,a,l,i,o,u,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zt(0),this.hiddenUpdates=zt(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function tm(e,t,n,a,l,i,o,u,v,A,H,q){return e=new eb(e,t,n,o,v,A,H,q,u),t=1,i===!0&&(t|=24),i=hn(3,null,null,t),e.current=i,i.stateNode=e,t=Sc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},kc(i),e}function nm(e){return e?(e=$l,e):$l}function am(e,t,n,a,l,i){l=nm(l),a.context===null?a.context=l:a.pendingContext=l,a=La(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Na(e,a,t),n!==null&&(ln(n,e,t),zi(n,e,t))}function lm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gr(e,t){lm(e,t),(e=e.alternate)&&lm(e,t)}function im(e){if(e.tag===13||e.tag===31){var t=rl(e,67108864);t!==null&&ln(t,e,67108864),Gr(e,67108864)}}function sm(e){if(e.tag===13||e.tag===31){var t=yn();t=va(t);var n=rl(e,t);n!==null&&ln(n,e,t),Gr(e,t)}}var vo=!0;function tb(e,t,n,a){var l=L.T;L.T=null;var i=I.p;try{I.p=2,Vr(e,t,n,a)}finally{I.p=i,L.T=l}}function nb(e,t,n,a){var l=L.T;L.T=null;var i=I.p;try{I.p=8,Vr(e,t,n,a)}finally{I.p=i,L.T=l}}function Vr(e,t,n,a){if(vo){var l=Qr(a);if(l===null)zr(e,t,a,xo,n),cm(e,a);else if(lb(l,e,t,n,a))a.stopPropagation();else if(cm(e,a),t&4&&-1<ab.indexOf(e)){for(;l!==null;){var i=Sa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Me(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var v=1<<31-$e(o);u.entanglements[1]|=v,o&=~v}Wn(i),(qe&6)===0&&(to=Ye()+500,Zi(0))}}break;case 31:case 13:u=rl(i,2),u!==null&&ln(u,i,2),ao(),Gr(i,2)}if(i=Qr(a),i===null&&zr(e,t,a,xo,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else zr(e,t,a,null,n)}}function Qr(e){return e=Ko(e),Zr(e)}var xo=null;function Zr(e){if(xo=null,e=wa(e),e!==null){var t=b(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xo=e,null}function om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case On:return 2;case cn:return 8;case Hn:case Sn:return 32;case Yn:return 268435456;default:return 32}default:return 32}}var Kr=!1,Ga=null,Va=null,Qa=null,es=new Map,ts=new Map,Za=[],ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cm(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function ns(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Sa(t),t!==null&&im(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lb(e,t,n,a,l){switch(t){case"focusin":return Ga=ns(Ga,e,t,n,a,l),!0;case"dragenter":return Va=ns(Va,e,t,n,a,l),!0;case"mouseover":return Qa=ns(Qa,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return es.set(i,ns(es.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,ts.set(i,ns(ts.get(i)||null,e,t,n,a,l)),!0}return!1}function rm(e){var t=wa(e.target);if(t!==null){var n=b(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Ml(e.priority,function(){sm(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,Ml(e.priority,function(){sm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qr(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);pi=a,n.target.dispatchEvent(a),pi=null}else return t=Sa(n),t!==null&&im(t),e.blockedOn=n,!1;t.shift()}return!0}function um(e,t,n){wo(e)&&n.delete(t)}function ib(){Kr=!1,Ga!==null&&wo(Ga)&&(Ga=null),Va!==null&&wo(Va)&&(Va=null),Qa!==null&&wo(Qa)&&(Qa=null),es.forEach(um),ts.forEach(um)}function So(e,t){e.blockedOn===t&&(e.blockedOn=null,Kr||(Kr=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,ib)))}var Eo=null;function dm(e){Eo!==e&&(Eo=e,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Zr(a||n)===null)continue;break}var i=Sa(n);i!==null&&(e.splice(t,3),t-=3,Qc(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function si(e){function t(v){return So(v,e)}Ga!==null&&So(Ga,e),Va!==null&&So(Va,e),Qa!==null&&So(Qa,e),es.forEach(t),ts.forEach(t);for(var n=0;n<Za.length;n++){var a=Za[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Za.length&&(n=Za[0],n.blockedOn===null);)rm(n),n.blockedOn===null&&Za.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Lt]||null;if(typeof i=="function")o||dm(n);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Lt]||null)u=o.formAction;else if(Zr(l)!==null)continue}else u=o.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),dm(n)}}}function fm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Fr(e){this._internalRoot=e}To.prototype.render=Fr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,a=yn();am(n,a,e,t,null,null)},To.prototype.unmount=Fr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;am(e.current,2,null,e,null,null),ao(),t[Vn]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=kl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Za.length&&t!==0&&t<Za[n].priority;n++);Za.splice(n,0,e),n===0&&rm(e)}};var hm=c.version;if(hm!=="19.2.4")throw Error(r(527,hm,"19.2.4"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=G(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var sb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Vt=jo.inject(sb),oe=jo}catch{}}return ls.createRoot=function(e,t){if(!f(e))throw Error(r(299));var n=!1,a="",l=xf,i=wf,o=Sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tm(e,1,!1,null,null,n,a,null,l,i,o,fm),e[Vn]=t.current,Dr(e),new Fr(t)},ls.hydrateRoot=function(e,t,n){if(!f(e))throw Error(r(299));var a=!1,l="",i=xf,o=wf,u=Sf,v=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=tm(e,1,!0,t,n??null,a,l,v,i,o,u,fm),t.context=nm(null),n=t.current,a=yn(),a=va(a),l=La(a),l.callback=null,Na(n,l,a),n=a,t.current.lanes=n,Gn(t,n),Wn(t),e[Vn]=t.current,Dr(e),new To(t)},ls.version="19.2.4",ls}var jm;function oy(){if(jm)return eu.exports;jm=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(c){console.error(c)}}return m(),eu.exports=sy(),eu.exports}var cy=oy();const ry=ku(cy);function uy({onNew:m,onOpen:c,onSave:d,onPreviewChange:r,currentPreviewMode:f,onImport:b,onExport:g,onAbout:y,onMarkdownHelp:k,onSettings:G,onWritingMode:B,currentWritingMode:$,hasCurrentFile:M,hasUnsavedChanges:Y,hasTextSelected:O,hasFiles:Q,fileCount:X,onStyleChange:S,onEditAction:K,files:se,currentFileId:re,onSwitchFile:we,onCloseFile:D,onShowCommandPalette:w,showLintGutter:j,onLinterToggle:_,showLineNumbers:te,onLineNumbersToggle:P,showHeadingGutter:le,onHeadingGutterToggle:ie,appMode:Z,onAppModeChange:W,activeRightTab:L,onTogglePanel:I,showWritingStats:ve,onWritingStatsToggle:Be,floatingPanels:J=[],dockedPanels:fe=[],canUndo:Se=!1,canRedo:xe=!1,showCommandPalette:ge,showMarkdownHelp:yt}){const[Re,We]=p.useState(!1),[Et,At]=p.useState(!1),[je,Ue]=p.useState({topLine:!1,bottomLine:!1,titleBar:!1}),[vt,ya]=p.useState({topLine:[],bottomLine:[],titleBar:[]}),Dt=p.useRef(null),Gt=p.useRef(null),Jt=p.useRef(null),Tt={flexWrap:"nowrap",flexShrink:0,display:"flex",alignItems:"center"};p.useEffect(()=>{if(!Re)return;const ye=lt=>{Dt.current&&!Dt.current.contains(lt.target)&&We(!1)};return document.addEventListener("mousedown",ye),()=>document.removeEventListener("mousedown",ye)},[Re]),p.useEffect(()=>{if(!Gt.current)return;const ye=()=>{if(!Gt.current)return;const On=Gt.current.querySelector(".ribbon-title-bar"),cn=Gt.current.querySelector(".ribbon-top-line"),Hn=Gt.current.querySelector(".ribbon-bottom-line"),Sn=window.innerWidth<=768,Yn={titleBar:!1,topLine:!1,bottomLine:!1},En={titleBar:[],topLine:[],bottomLine:[]};if(On){const be=On.querySelector(".ribbon-title-left");if(be){be.querySelectorAll("button[aria-label], .fui-ToolbarDivider").forEach(Me=>{Me.style.display=""});const oe=be.querySelector(".ribbon-file-pill"),it=oe?.querySelector(".ribbon-file-pill-name");oe&&oe.classList.remove("compact"),it&&(it.style.setProperty("display","inline-block","important"),it.style.setProperty("visibility","visible","important"),it.style.setProperty("max-width","none","important"));const $e=be.style.width,Xn=be.style.flex,rn=be.style.overflow,un=be.clientWidth;be.style.flex="0 0 auto",be.style.width="max-content",be.style.overflow="visible";const qt=be.offsetWidth;be.style.flex=Xn,be.style.width=$e,be.style.overflow=rn;const dt=qt>un-5;dt!==Et&&At(dt),dt?(oe&&oe.classList.add("compact"),it&&(it.style.display="none")):(oe&&oe.classList.remove("compact"),it&&(it.style.display=""));const ue=be.scrollWidth>be.clientWidth+2;if(Yn.titleBar=ue&&!Sn,ue&&!Sn){const Me=Array.from(be.querySelectorAll("button[aria-label]")).filter(Ie=>Ie.getAttribute("aria-label")!=="More options"),Ee=be.getBoundingClientRect().right-100;for(let Ie=Me.length-1;Ie>=0;Ie--){const Yt=Me[Ie],zt=Yt.getBoundingClientRect(),Gn=Yt.getAttribute("aria-label");Gn&&zt.right>Ee&&(En.titleBar.unshift({ariaLabel:Gn,type:"title"}),Yt.style.display="none")}}}}if(cn){const be=cn.querySelector(".ribbon-section-content");if(be){be.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]').forEach(ue=>{ue.style.display=""});const oe=be.querySelectorAll(".ribbon-group");oe.forEach(ue=>{const Me=ue.querySelectorAll("button[aria-label], select"),tt=Array.from(Me).some(Ee=>Ee.style.display!=="none");ue.style.display=tt?"":"none"});const it=be.style.overflow;be.style.overflow="visible";const $e=be.scrollWidth,Xn=be.clientWidth,rn=$e>Xn+2;if(Yn.topLine=rn&&!Sn,rn&&!Sn){const ue=Array.from(be.querySelectorAll("button[aria-label], .ribbon-group select")).filter(Ee=>Ee.getAttribute("aria-label")!=="More options"),tt=be.getBoundingClientRect().right-80;for(let Ee=ue.length-1;Ee>=0;Ee--){const Ie=ue[Ee],Yt=Ie.getBoundingClientRect(),zt=Ie.getAttribute("aria-label");zt&&Yt.right>tt&&(En.topLine.unshift({ariaLabel:zt,type:"top"}),Ie.style.display="none")}oe.forEach(Ee=>{const Ie=Ee.querySelectorAll("button[aria-label], select"),Yt=Array.from(Ie).some(zt=>zt.style.display!=="none");Ee.style.display=Yt?"":"none"})}const un=Array.from(be.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]')).filter(ue=>ue.getAttribute("aria-label")!=="More options"&&ue.offsetParent!==null);let qt=!1;for(let ue=un.length-1;ue>=0;ue--){const Me=un[ue];Me.classList.contains("fui-ToolbarDivider")||Me.getAttribute("role")==="separator"||Me.classList.contains("ribbon-divider")?qt||(Me.style.display="none"):Me.style.display!=="none"&&(qt=!0)}let dt=!0;un.forEach(ue=>{if(ue.style.display==="none")return;ue.classList.contains("fui-ToolbarDivider")||ue.getAttribute("role")==="separator"||ue.classList.contains("ribbon-divider")?dt?ue.style.display="none":dt=!0:dt=!1}),be.style.overflow=it}}if(Hn){const be=Hn.querySelector(".ribbon-section-content");if(be){be.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]').forEach(ue=>{ue.style.display=""});const oe=be.querySelectorAll(".ribbon-group");oe.forEach(ue=>{const Me=ue.querySelectorAll("button[aria-label], select"),tt=Array.from(Me).some(Ee=>Ee.style.display!=="none");ue.style.display=tt?"":"none"});const it=be.style.overflow;be.style.overflow="visible";const $e=be.scrollWidth,Xn=be.clientWidth,rn=$e>Xn+2;if(Yn.bottomLine=rn&&!Sn,rn&&!Sn){const ue=Array.from(be.querySelectorAll("button[aria-label], .ribbon-group select")).filter(Ee=>Ee.getAttribute("aria-label")!=="More options"),tt=be.getBoundingClientRect().right-80;for(let Ee=ue.length-1;Ee>=0;Ee--){const Ie=ue[Ee],Yt=Ie.getBoundingClientRect(),zt=Ie.getAttribute("aria-label")||(Ie.tagName==="SELECT"?"Heading Style":null);zt&&Yt.right>tt&&(En.bottomLine.unshift({ariaLabel:zt,type:"bottom"}),Ie.style.display="none")}oe.forEach(Ee=>{const Ie=Ee.querySelectorAll("button[aria-label], select"),Yt=Array.from(Ie).some(zt=>zt.style.display!=="none");Ee.style.display=Yt?"":"none"})}const un=Array.from(be.querySelectorAll('button[aria-label], .ribbon-group select, .fui-ToolbarDivider, [role="separator"]')).filter(ue=>ue.getAttribute("aria-label")!=="More options"&&ue.offsetParent!==null);let qt=!1;for(let ue=un.length-1;ue>=0;ue--){const Me=un[ue];Me.classList.contains("fui-ToolbarDivider")||Me.getAttribute("role")==="separator"||Me.classList.contains("ribbon-divider")?qt||(Me.style.display="none"):Me.style.display!=="none"&&(qt=!0)}let dt=!0;un.forEach(ue=>{if(ue.style.display==="none")return;ue.classList.contains("fui-ToolbarDivider")||ue.getAttribute("role")==="separator"||ue.classList.contains("ribbon-divider")?dt?ue.style.display="none":dt=!0:dt=!1}),be.style.overflow=it}}Ue(Yn),ya(En)};ye();const lt=[setTimeout(ye,100),setTimeout(ye,300),setTimeout(ye,1e3)];Jt.current=new ResizeObserver(()=>{requestAnimationFrame(ye)}),Jt.current.observe(Gt.current),Gt.current.querySelectorAll(".ribbon-section-content").forEach(On=>{Jt.current.observe(On)});const Ye=Gt.current.querySelector(".ribbon-title-left");Ye&&Jt.current.observe(Ye);const Ut=()=>{requestAnimationFrame(ye)};return window.addEventListener("resize",Ut),()=>{lt.forEach(On=>clearTimeout(On)),Jt.current&&Jt.current.disconnect(),window.removeEventListener("resize",Ut)}},[Q,M,se,re,X,Et,Z,f,j,J,fe,O]);const tl=se?.find(ye=>ye.id===re),wn=ye=>{const lt={New:{icon:s.jsx(oi,{}),onClick:()=>m("empty"),disabled:!1,toggleable:!1},"Open File":{icon:s.jsx(Co,{}),onClick:c,disabled:!1,toggleable:!1},Open:{icon:s.jsx(Co,{}),onClick:c,disabled:!1,toggleable:!1},Save:{icon:s.jsx(au,{}),onClick:d,disabled:!Y,toggleable:!1},Import:{icon:s.jsx($m,{}),onClick:b,disabled:!1,toggleable:!1},Export:{icon:s.jsx(el,{}),onClick:()=>{},disabled:!Q,toggleable:!1},About:{icon:s.jsx(Lo,{}),onClick:y,disabled:!1,toggleable:!1},"Markdown Syntax Reference":{icon:s.jsx(pm,{}),onClick:k,disabled:!1,toggleable:!0,checked:yt},Settings:{icon:s.jsx(lu,{}),onClick:G,disabled:!1,toggleable:!1},"Command Palette":{icon:s.jsx(xm,{}),onClick:w,disabled:!1,toggleable:!0,checked:ge},"Edit Mode":{icon:s.jsx(ko,{}),onClick:()=>W("edit"),disabled:!M,toggleable:!0,checked:Z==="edit"},"Read Mode":{icon:s.jsx(mm,{}),onClick:()=>W("view"),disabled:!M,toggleable:!0,checked:Z==="view"}},jt={Undo:{icon:s.jsx(os,{}),onClick:()=>K&&K("undo"),disabled:!M||!Se,toggleable:!1},Redo:{icon:s.jsx(No,{}),onClick:()=>K&&K("redo"),disabled:!M||!xe,toggleable:!1},Cut:{icon:s.jsx(iu,{}),onClick:()=>K&&K("cut"),disabled:!O,toggleable:!1},Copy:{icon:s.jsx(su,{}),onClick:()=>K&&K("copy"),disabled:!O,toggleable:!1},Paste:{icon:s.jsx(ou,{}),onClick:()=>K&&K("paste"),disabled:!M,toggleable:!1},Find:{icon:s.jsx(cu,{}),onClick:()=>K&&K("find"),disabled:!M,toggleable:!1},Replace:{icon:s.jsx(_o,{}),onClick:()=>K&&K("replace"),disabled:!M,toggleable:!1},Linter:{icon:s.jsx(bm,{}),onClick:()=>_&&_(),disabled:!M,toggleable:!0,checked:j},"Toggle Line#":{icon:s.jsx(gm,{}),onClick:()=>P&&P(),disabled:!M,toggleable:!0,checked:te},"Toggle Fold Gutter":{icon:s.jsx(Jr,{}),onClick:()=>ie&&ie(),disabled:!M,toggleable:!0,checked:le},"Toggle Preview":{icon:s.jsx(ym,{}),onClick:()=>I("preview"),disabled:!M,toggleable:!0,checked:J.includes("preview")||fe.includes("preview")},"Toggle Outline":{icon:s.jsx(El,{}),onClick:()=>I("outline"),disabled:!M,toggleable:!0,checked:J.includes("outline")||fe.includes("outline")},"Toggle Property":{icon:s.jsx(Ao,{}),onClick:()=>I("property"),disabled:!M,toggleable:!0,checked:J.includes("property")||fe.includes("property")},"Toggle MetaData":{icon:s.jsx(Ao,{}),onClick:()=>I("metadata"),disabled:!M,toggleable:!0,checked:J.includes("metadata")||fe.includes("metadata")},"Toggle History":{icon:s.jsx(Ro,{}),onClick:()=>I("history"),disabled:!M,toggleable:!0,checked:J.includes("history")||fe.includes("history")},"Toggle Snippet":{icon:s.jsx(ri,{}),onClick:()=>I("snippet"),disabled:!M,toggleable:!0,checked:J.includes("snippet")||fe.includes("snippet")},"Zen Mode":{icon:s.jsx(uu,{}),onClick:()=>B("zen"),disabled:!M,toggleable:!0,checked:$.zen.enabled},"Focus Mode":{icon:s.jsx(du,{}),onClick:()=>B("focus"),disabled:!M,toggleable:!0,checked:$.focus.enabled},"Typewriter Mode":{icon:s.jsx(fu,{}),onClick:()=>B("typewriter"),disabled:!M,toggleable:!0,checked:$.typewriter.enabled},"Toggle Stats":{icon:s.jsx(ru,{}),onClick:()=>Be&&Be(),disabled:!M,toggleable:!0,checked:ve},"WYSIWYG Mode":{icon:s.jsx(vm,{}),onClick:()=>B("wysiwyg"),disabled:!M,toggleable:!0,checked:$.wysiwyg}},Ye={"Heading Style":{icon:s.jsx(ko,{}),onClick:()=>{},disabled:!O,toggleable:!1},Bold:{icon:s.jsx(ba,{}),onClick:()=>S&&S("bold"),disabled:!O,toggleable:!1},Italic:{icon:s.jsx(hu,{}),onClick:()=>S&&S("italic"),disabled:!O,toggleable:!1},Code:{icon:s.jsx(ci,{}),onClick:()=>S&&S("code"),disabled:!O,toggleable:!1},Strikethrough:{icon:s.jsx(mu,{}),onClick:()=>S&&S("strikethrough"),disabled:!O,toggleable:!1},"Bullet List":{icon:s.jsx($o,{}),onClick:()=>S&&S("bullet"),disabled:!O,toggleable:!1},"Numbered List":{icon:s.jsx(El,{}),onClick:()=>S&&S("numbered"),disabled:!O,toggleable:!1},Quote:{icon:s.jsx(bu,{}),onClick:()=>S&&S("quote"),disabled:!O,toggleable:!1},Link:{icon:s.jsx(yu,{}),onClick:()=>S&&S("link"),disabled:!O,toggleable:!1},Image:{icon:s.jsx(vu,{}),onClick:()=>S&&S("image"),disabled:!O,toggleable:!1},Table:{icon:s.jsx(xu,{}),onClick:()=>S&&S("table"),disabled:!M,toggleable:!1},"Code Block":{icon:s.jsx(ci,{}),onClick:()=>S&&S("codeblock"),disabled:!M,toggleable:!1},HR:{icon:s.jsx(Eu,{}),onClick:()=>S&&S("hr"),disabled:!M,toggleable:!1},"Task List":{icon:s.jsx(Su,{}),onClick:()=>S&&S("tasklist"),disabled:!M,toggleable:!1},Footnote:{icon:s.jsx(wu,{}),onClick:()=>S&&S("footnote"),disabled:!M,toggleable:!1},Highlight:{icon:s.jsx(xm,{}),onClick:()=>S&&S("highlight"),disabled:!O,toggleable:!1},Subscript:{icon:s.jsx(pu,{}),onClick:()=>S&&S("subscript"),disabled:!O,toggleable:!1},Superscript:{icon:s.jsx(gu,{}),onClick:()=>S&&S("superscript"),disabled:!O,toggleable:!1},Snippet:{icon:s.jsx(ri,{}),onClick:()=>I("snippet"),disabled:!M,toggleable:!0,checked:J.includes("snippet")||fe.includes("snippet")}},Ut={...lt[ye],...jt[ye],...Ye[ye]};return Object.keys(Ut).length>0?Ut:null},Bt=(ye,lt)=>{if(ye.ariaLabel==="Open File"&&se&&se.length>0)return s.jsxs(_m.Fragment,{children:[s.jsx(Ir,{}),se.map(Ye=>s.jsx(Je,{icon:s.jsx(Rm,{}),className:Ye.id===re?"ribbon-overflow-checked":"",onClick:()=>we&&we(Ye.id),children:Ye.name},`file-${Ye.id}`)),s.jsx(Ir,{})]},`files-group-${lt}`);if(ye.ariaLabel==="Heading Style")return s.jsxs(Fa,{children:[s.jsx(Ja,{children:s.jsx(Je,{icon:s.jsx(ko,{}),disabled:!O,children:"Heading Style"})}),s.jsx(Wa,{children:s.jsxs(Ia,{children:[s.jsx(Je,{onClick:()=>S&&S("h1"),children:"Heading 1"}),s.jsx(Je,{onClick:()=>S&&S("h2"),children:"Heading 2"}),s.jsx(Je,{onClick:()=>S&&S("h3"),children:"Heading 3"}),s.jsx(Je,{onClick:()=>S&&S("h4"),children:"Heading 4"}),s.jsx(Je,{onClick:()=>S&&S("h5"),children:"Heading 5"}),s.jsx(Je,{onClick:()=>S&&S("h6"),children:"Heading 6"})]})})]},lt);const jt=wn(ye.ariaLabel);return jt?s.jsx(Je,{icon:jt.icon,"aria-label":ye.ariaLabel,className:jt.toggleable&&jt.checked?"ribbon-overflow-checked":"",onClick:jt.onClick,disabled:jt.disabled,children:ye.ariaLabel},lt):null};return s.jsxs("div",{className:"ribbon-menu",ref:Gt,children:[s.jsxs("div",{className:"ribbon-title-bar",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch"},children:[s.jsxs("div",{className:"ribbon-title-left",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flex:1,minWidth:0},children:[s.jsx("div",{className:"ribbon-title-file-ops",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Nn,{style:Tt,children:[s.jsxs(Fa,{children:[s.jsx(me,{content:"Create a new markdown document",relationship:"label",children:s.jsx(Ja,{disableButtonEnhancement:!0,children:s.jsx(Le,{"aria-label":"New",icon:s.jsx(oi,{}),appearance:"secondary"})})}),s.jsx(Wa,{children:s.jsxs(Ia,{children:[s.jsx(Je,{onClick:()=>m("empty"),children:"Blank Document"}),s.jsx(Je,{onClick:()=>m("meeting"),children:"Meeting Notes Template"}),s.jsx(Je,{onClick:()=>m("blog"),children:"Blog Post Template"}),s.jsx(Je,{onClick:()=>m("readme"),children:"README Template"})]})})]}),s.jsx(me,{content:"Open file from computer",relationship:"label",children:s.jsx(Le,{"aria-label":"Open",icon:s.jsx(Co,{}),onClick:c,appearance:"secondary"})}),M&&s.jsx(me,{content:Y?"Save current file":"No changes to save",relationship:"label",children:s.jsx(Le,{"aria-label":"Save",icon:s.jsx(au,{}),onClick:d,appearance:"secondary",disabled:!Y})}),Q&&s.jsxs(Fa,{children:[s.jsx(me,{content:"Export document",relationship:"label",children:s.jsx(Ja,{children:s.jsx(Le,{"aria-label":"Export",icon:s.jsx(el,{}),appearance:"secondary"})})}),s.jsx(Wa,{children:s.jsxs(Ia,{children:[s.jsx(Je,{onClick:()=>g("md"),children:"Export as Markdown (.md)"}),s.jsx(Je,{onClick:()=>g("html"),children:"Export as HTML (.html)"}),s.jsx(Je,{onClick:()=>g("pdf"),children:"Print / Export as PDF"}),s.jsx(Je,{onClick:()=>g("doc"),children:"Export as Word (.doc)"}),s.jsx(Je,{onClick:()=>g("epub"),children:"Export as EPUB (.epub)"}),s.jsx(Je,{onClick:()=>g("pptx"),children:"Export as PowerPoint (.pptx)"})]})})]})]})}),s.jsx(_n,{}),s.jsxs("div",{className:"ribbon-file-breadcrumb",ref:Dt,children:[s.jsxs("button",{className:`ribbon-file-pill ${Et?"compact":""}`,onClick:()=>We(ye=>!ye),"aria-haspopup":"listbox","aria-expanded":Re,"aria-label":"Open File",children:[s.jsx("span",{className:"ribbon-file-pill-name",children:tl?tl.name:"Open File"}),Y&&s.jsx("span",{className:"ribbon-file-unsaved-dot","aria-label":"Unsaved changes"}),s.jsx(Jr,{className:`ribbon-file-chevron ${Re?"open":""}`})]}),Re&&s.jsx("div",{className:"ribbon-file-dropdown",role:"listbox","aria-label":"Open files",style:{position:"fixed",top:Dt.current?Dt.current.getBoundingClientRect().bottom+4:0,left:Dt.current?Dt.current.getBoundingClientRect().left:0,zIndex:99999},children:se&&se.length>0?se.map(ye=>s.jsxs("div",{className:`ribbon-file-dropdown-item ${ye.id===re?"active":""}`,role:"option","aria-selected":ye.id===re,onClick:()=>{we&&we(ye.id),We(!1)},children:[s.jsx("span",{className:"ribbon-file-dropdown-item-name",children:ye.name}),s.jsx("button",{className:"ribbon-file-dropdown-close","aria-label":`Close ${ye.name}`,onClick:lt=>{lt.stopPropagation(),D&&D(ye.id),se.length<=1&&We(!1)},children:s.jsx(rs,{})})]},ye.id)):s.jsx("div",{className:"ribbon-file-dropdown-empty",children:"No open files"})})]})]}),s.jsxs("div",{className:"ribbon-title-actions",children:[s.jsxs(Nn,{style:Tt,children:[M&&s.jsx(me,{content:Z==="view"?"Switch to Edit Mode":"Switch to Read Mode",relationship:"label",children:s.jsx(Le,{"aria-label":Z==="view"?"Edit Mode":"Read Mode",icon:Z==="view"?s.jsx(ko,{}):s.jsx(mm,{}),onClick:()=>W(Z==="view"?"edit":"view"),appearance:"secondary"})}),s.jsx(me,{content:"Command Palette (Ctrl+P)",relationship:"label",children:s.jsx(Ft,{"aria-label":"Command Palette",icon:s.jsx(db,{}),onClick:w,checked:ge,appearance:"secondary"})}),s.jsx(me,{content:"Editor settings",relationship:"label",children:s.jsx(Le,{"aria-label":"Settings",icon:s.jsx(lu,{}),onClick:G,appearance:"secondary"})}),s.jsx(me,{content:"Markdown Syntax Reference",relationship:"label",children:s.jsx(Ft,{"aria-label":"Markdown Syntax Reference",icon:s.jsx(pm,{}),onClick:k,checked:yt,appearance:"secondary"})}),s.jsx(me,{content:"About MarkdownStudio",relationship:"label",children:s.jsx(Le,{"aria-label":"About",icon:s.jsx(Lo,{}),onClick:y,appearance:"secondary"})})]}),je.titleBar&&vt.titleBar.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(_n,{}),s.jsx("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Fa,{children:[s.jsx(Ja,{children:s.jsx(Le,{"aria-label":"More options",icon:s.jsx(Wr,{}),appearance:"secondary"})}),s.jsx(Wa,{children:s.jsx(Ia,{children:vt.titleBar.map(Bt)})})]})})]})]})]}),M&&s.jsx("div",{className:"ribbon-section ribbon-top-line",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%"},children:s.jsxs("div",{className:"ribbon-section-content",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch",alignItems:"center",flex:1},children:[Z==="edit"&&s.jsxs("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:[s.jsxs(Nn,{style:Tt,children:[s.jsx(me,{content:"Undo (Ctrl+Z)",relationship:"label",children:s.jsx(Le,{"aria-label":"Undo",icon:s.jsx(os,{}),onClick:()=>K&&K("undo"),appearance:"secondary",disabled:!M||!Se})}),s.jsx(me,{content:"Redo (Ctrl+Y)",relationship:"label",children:s.jsx(Le,{"aria-label":"Redo",icon:s.jsx(No,{}),onClick:()=>K&&K("redo"),appearance:"secondary",disabled:!M||!xe})})]}),s.jsxs(Nn,{style:Tt,children:[s.jsx(me,{content:"Cut (Ctrl+X)",relationship:"label",children:s.jsx(Le,{"aria-label":"Cut",icon:s.jsx(iu,{}),onClick:()=>K&&K("cut"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Copy (Ctrl+C)",relationship:"label",children:s.jsx(Le,{"aria-label":"Copy",icon:s.jsx(su,{}),onClick:()=>K&&K("copy"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Paste (Ctrl+V)",relationship:"label",children:s.jsx(Le,{"aria-label":"Paste",icon:s.jsx(ou,{}),onClick:()=>K&&K("paste"),appearance:"secondary",disabled:!M})})]}),s.jsx(_n,{}),s.jsxs(Nn,{style:Tt,children:[s.jsx(me,{content:"Find (Ctrl+F)",relationship:"label",children:s.jsx(Le,{"aria-label":"Find",icon:s.jsx(cu,{}),onClick:()=>K&&K("find"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Find & Replace (Ctrl+H)",relationship:"label",children:s.jsx(Le,{"aria-label":"Replace",icon:s.jsx(_o,{}),onClick:()=>K&&K("replace"),appearance:"secondary",disabled:!M})})]})]}),Z==="edit"&&s.jsx(_n,{}),Z==="edit"&&s.jsx("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Nn,{style:Tt,children:[s.jsx(me,{content:"Toggle rendering line number",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Line#",icon:s.jsx(gm,{}),checked:te,onClick:()=>P&&P(),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Toggle fold gutter (expand/collapse heading)",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Fold Gutter",icon:s.jsx(Jr,{}),checked:le,onClick:()=>ie&&ie(),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Toggle linter gutter",relationship:"label",children:s.jsx(Ft,{"aria-label":"Linter",icon:s.jsx(bm,{}),checked:j,onClick:()=>_&&_(),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:M?"Toggle writing statistics line":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Stats",icon:s.jsx(ru,{}),checked:ve,onClick:()=>Be&&Be(),appearance:"secondary",disabled:!M})}),s.jsx(_n,{}),s.jsx(me,{content:"Toggle Preview",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Preview",icon:s.jsx(ym,{}),checked:J.includes("preview")||fe.includes("preview"),onClick:()=>I("preview"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Toggle Outline",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Outline",icon:s.jsx(El,{}),checked:J.includes("outline")||fe.includes("outline"),onClick:()=>I("outline"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Toggle Property",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Property",icon:s.jsx(Ao,{}),checked:J.includes("property")||fe.includes("property"),onClick:()=>I("property"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Toggle History",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle History",icon:s.jsx(Ro,{}),checked:J.includes("history")||fe.includes("history"),onClick:()=>I("history"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Toggle Snippet",relationship:"label",children:s.jsx(Ft,{"aria-label":"Toggle Snippet",icon:s.jsx(ri,{}),checked:J.includes("snippet")||fe.includes("snippet"),onClick:()=>I("snippet"),appearance:"secondary",disabled:!M})})]})}),Z==="edit"&&s.jsx(_n,{}),Z==="edit"&&s.jsx("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Nn,{style:Tt,children:[s.jsx(me,{content:M?"Zen mode - hide all UI distractions":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"Zen Mode",icon:s.jsx(uu,{}),checked:$.zen,onClick:()=>B("zen"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:M?"Focus mode - minimize distractions":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"Focus Mode",icon:s.jsx(du,{}),checked:$.focus,onClick:()=>B("focus"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:M?"Typewriter mode - keep current line centered":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"Typewriter Mode",icon:s.jsx(fu,{}),checked:$.typewriter.enabled,onClick:()=>B("typewriter"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:M?"WYSIWYG Mode - render markdown in place":"No file open",relationship:"label",children:s.jsx(Ft,{"aria-label":"WYSIWYG Mode",icon:s.jsx(vm,{}),checked:$.wysiwyg,onClick:()=>B("wysiwyg"),appearance:"secondary",disabled:!M})})]})}),je.topLine&&vt.topLine.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(_n,{}),s.jsx("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Fa,{children:[s.jsx(Ja,{children:s.jsx(Le,{"aria-label":"More options",icon:s.jsx(Wr,{}),appearance:"secondary"})}),s.jsx(Wa,{children:s.jsx(Ia,{children:vt.topLine.map(Bt)})})]})})]})]})}),M&&Z==="edit"&&s.jsx("div",{className:"ribbon-section ribbon-bottom-line",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%"},children:s.jsxs("div",{className:"ribbon-section-content",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch",alignItems:"center",flex:1},children:[s.jsxs("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:[s.jsxs(Nn,{style:Tt,children:[s.jsx(me,{content:"Bold (Ctrl+B)",relationship:"label",children:s.jsx(Le,{"aria-label":"Bold",icon:s.jsx(ba,{}),onClick:()=>S&&S("bold"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Italic (Ctrl+I)",relationship:"label",children:s.jsx(Le,{"aria-label":"Italic",icon:s.jsx(hu,{}),onClick:()=>S&&S("italic"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Strikethrough (Alt+S)",relationship:"label",children:s.jsx(Le,{"aria-label":"Strikethrough",icon:s.jsx(mu,{}),onClick:()=>S&&S("strikethrough"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Subscript",relationship:"label",children:s.jsx(Le,{"aria-label":"Subscript",icon:s.jsx(pu,{}),onClick:()=>S&&S("subscript"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Superscript",relationship:"label",children:s.jsx(Le,{"aria-label":"Superscript",icon:s.jsx(gu,{}),onClick:()=>S&&S("superscript"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Code (Ctrl+`)",relationship:"label",children:s.jsx(Le,{"aria-label":"Code",icon:s.jsx(ci,{}),onClick:()=>S&&S("code"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Highlight Text",relationship:"label",children:s.jsx(Le,{"aria-label":"Highlight",icon:s.jsx(Nm,{}),onClick:()=>S&&S("highlight"),appearance:"secondary",disabled:!O})})]}),s.jsx(Nn,{style:Tt,children:s.jsxs(Fa,{children:[s.jsx(me,{content:"Text Transformations",relationship:"label",children:s.jsx(Ja,{children:s.jsx(Le,{"aria-label":"Transform",icon:s.jsx(is,{}),appearance:"secondary",disabled:!O})})}),s.jsx(Wa,{children:s.jsxs(Ia,{children:[s.jsx(Je,{onClick:()=>S&&S("transform-upper"),children:"UPPERCASE"}),s.jsx(Je,{onClick:()=>S&&S("transform-lower"),children:"lowercase"}),s.jsx(Je,{onClick:()=>S&&S("transform-sentence"),children:"Sentence case"}),s.jsx(Ir,{}),s.jsx(Je,{onClick:()=>S&&S("remove-formatting"),children:"Remove Formatting"})]})})]})})]}),s.jsx(_n,{}),s.jsx("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsx(Nn,{style:Tt,children:s.jsxs("select",{"aria-label":"Heading Style",disabled:!O,onChange:ye=>{const lt=ye.target.value;lt&&S&&S(lt)},style:{backgroundColor:"var(--color-neutral-background3)",border:"1px solid var(--color-neutral-stroke2)",borderRadius:"4px",padding:"4px 8px",color:"var(--color-neutral-foreground2)",fontSize:"12px",cursor:"pointer"},children:[s.jsx("option",{value:"",children:"Heading"}),s.jsx("option",{value:"h1",children:"Heading 1"}),s.jsx("option",{value:"h2",children:"Heading 2"}),s.jsx("option",{value:"h3",children:"Heading 3"}),s.jsx("option",{value:"h4",children:"Heading 4"}),s.jsx("option",{value:"h5",children:"Heading 5"}),s.jsx("option",{value:"h6",children:"Heading 6"})]})})}),s.jsx(_n,{}),s.jsx("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Nn,{style:Tt,children:[s.jsx(me,{content:"Bullet List (Ctrl+Shift+8)",relationship:"label",children:s.jsx(Le,{"aria-label":"Bullet List",icon:s.jsx($o,{}),onClick:()=>S&&S("bullet"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Numbered List (Ctrl+Shift+9)",relationship:"label",children:s.jsx(Le,{"aria-label":"Numbered List",icon:s.jsx(El,{}),onClick:()=>S&&S("numbered"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Quote (Ctrl+Shift+>)",relationship:"label",children:s.jsx(Le,{"aria-label":"Quote",icon:s.jsx(bu,{}),onClick:()=>S&&S("quote"),appearance:"secondary",disabled:!O})})]})}),s.jsx(_n,{}),s.jsx("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Nn,{style:Tt,children:[s.jsx(me,{content:"Link (Ctrl+K)",relationship:"label",children:s.jsx(Le,{"aria-label":"Link",icon:s.jsx(yu,{}),onClick:()=>S&&S("link"),appearance:"secondary",disabled:!O})}),s.jsx(me,{content:"Image (Ctrl+Shift+I)",relationship:"label",children:s.jsx(Le,{"aria-label":"Image",icon:s.jsx(vu,{}),onClick:()=>S&&S("image"),appearance:"secondary",disabled:!O})}),s.jsx(_n,{}),s.jsx(me,{content:"Insert Table (Ctrl+Shift+T)",relationship:"label",children:s.jsx(Le,{"aria-label":"Table",icon:s.jsx(xu,{}),onClick:()=>S&&S("table"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Insert Code Block (Ctrl+Shift+C)",relationship:"label",children:s.jsx(Le,{"aria-label":"Code Block",icon:s.jsx(ci,{}),onClick:()=>S&&S("codeblock"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Insert Footnote",relationship:"label",children:s.jsx(Le,{"aria-label":"Footnote",icon:s.jsx(wu,{}),onClick:()=>S&&S("footnote"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Task List",relationship:"label",children:s.jsx(Le,{"aria-label":"Task List",icon:s.jsx(Su,{}),onClick:()=>S&&S("tasklist"),appearance:"secondary",disabled:!M})}),s.jsx(me,{content:"Horizontal Rule (Ctrl+Shift+-)",relationship:"label",children:s.jsx(Le,{"aria-label":"HR",icon:s.jsx(Eu,{}),onClick:()=>S&&S("hr"),appearance:"secondary",disabled:!M})}),s.jsxs(Fa,{children:[s.jsx(me,{content:"Insert Callout",relationship:"label",children:s.jsx(Ja,{children:s.jsx(Le,{"aria-label":"Callout",icon:s.jsx(ss,{}),appearance:"secondary",disabled:!M})})}),s.jsx(Wa,{children:s.jsxs(Ia,{children:[s.jsx(Je,{onClick:()=>S&&S("callout-note"),children:"Note"}),s.jsx(Je,{onClick:()=>S&&S("callout-tip"),children:"Tip"}),s.jsx(Je,{onClick:()=>S&&S("callout-warning"),children:"Warning"}),s.jsx(Je,{onClick:()=>S&&S("callout-error"),children:"Error"})]})})]})]})}),je.bottomLine&&vt.bottomLine.length>0&&s.jsxs("div",{className:"ribbon-overflow-menu",children:[s.jsx(_n,{}),s.jsx("div",{className:"ribbon-group",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Fa,{children:[s.jsx(Ja,{children:s.jsx(Le,{"aria-label":"More options",icon:s.jsx(Wr,{}),appearance:"secondary"})}),s.jsx(Wa,{children:s.jsx(Ia,{children:vt.bottomLine.map(Bt)})})]})})]})]})})]})}class dy{static getLintDiagnostics(){return c=>{const d=[],r=c.state.doc,b=r.toString().split(`
`),g=new Set;let y=null;return b.forEach((k,G)=>{const B=k.trim();if(B.startsWith("```")||B.startsWith("~~~~")||B.startsWith("> ```")||B.startsWith("> ~~~~")||B.match(/^(\s*>)+\s*```/)||B.match(/^(\s*>)+\s*~~~~/))if(y===null)y=G;else{for(let $=y;$<=G;$++)g.add($);y=null}}),b.forEach((k,G)=>{if(g.has(G))return;const B=/^(\s*)[-*_]{3,}\s*$/.test(k);if(B)return;const $=r.line(G+1).from,M=r.line(G+1).to,Y=k.replace(/\\\*/g,"").replace(/\\\#/g,"").replace(/\\\[/g,"").replace(/\\\]/g,"").replace(/\\\`/g,""),O=Y.match(/\[/g)||[],Q=Y.match(/\]/g)||[];if(O.length>Q.length){const P=Y.lastIndexOf("["),le=Y.substring(P+1),ie=Y.includes("[[")||Y.includes("]]")||Y.match(/\[\s*\[/)||Y.match(/\]\s*\]/),Z=/\[\s*\d+[\s,\d]*\s*\]/.test(Y)||/\[\s*[a-zA-Z]+\s*=\s*[a-zA-Z0-9]+\s*\]/.test(Y),W=/[\+\-\*\/=]/.test(le);le.trim().length>0&&!le.startsWith(" ")&&!le.match(/^[\s\[\]]*$/)&&!ie&&!Z&&!W&&d.push({from:$+P,to:M,severity:"error",message:"Unclosed link bracket"})}if((Y.match(/\*\*/g)||[]).length%2===1){(Y.match(/`/g)||[]).length>=2;const le=Y.lastIndexOf("**");d.push({from:$+le,to:M,severity:"warning",message:"Unclosed bold formatting"})}const S=Y.split("**").join("").match(/\*/g)||[];if(S.length%2===1){const P=/^(\s*)[\*\-\+]\s/.test(Y),le=Y.trim()[0],ie=/\d+\s*\*\s*\d+/.test(Y)||/\d+\s*\*\s*[a-zA-Z]/.test(Y)||/[a-zA-Z]\s*\*\s*\d+/.test(Y)||/\*\s*[=\+\/]/.test(Y)||/[=\+\/]\s*\*/.test(Y);if(!(P&&le==="*"&&S.length===1||ie)){const Z=Y.split("**").join("").lastIndexOf("*");let W=0,L=Z;const I=Y.split("**");for(let ve=0;ve<I.length;ve++){if(L<=I[ve].length){W+=L;break}L-=I[ve].length,W+=I[ve].length+2}d.push({from:$+W,to:M,severity:"warning",message:"Unclosed italic formatting"})}}const K=(Y.match(/`/g)||[]).length;if(K%2===1&&(Y.match(/`[^`]*`[^`]*`/)&&(Y.match(/`/g)||[]).length===3&&Y.endsWith("`")&&Y.includes("**"),K!==3)){if(K!==4){const P=Y.lastIndexOf("`");d.push({from:$+P,to:M,severity:"error",message:"Unclosed code formatting"})}}const se=/^(\s*)(#{1,6})([^\s\#])/,re=Y.match(se);if(re){const P=re[1],le=re[2];re[3]!==""&&P.length<4&&!k.includes("\\#")&&d.push({from:$+re.index+P.length+le.length,to:$+re.index+P.length+le.length+1,severity:"warning",message:"Header should have a space after #"})}const we=/^(\s*)([-=]{3,})\s*$/.test(Y),D=Y.includes("**")||Y.includes("`");if(!B&&!we&&!D&&!(k.includes("\\*")||k.includes("\\#")||k.includes("\\`")||k.includes("\\[")||k.includes("\\]"))){const le=/^(\s*)([*\-+])([^\s\*\-\+])/,ie=Y.match(le);if(ie){const L=ie[1],I=ie[2];ie[3]!==" "&&L.length<4&&d.push({from:$+ie.index+L.length+I.length,to:$+ie.index+L.length+I.length+1,severity:"warning",message:"List Items Without Proper Spacing"})}const Z=/^(\s*)(\d+)([\.\s])/,W=Y.match(Z);if(W){const L=W[1],I=W[2],ve=W[3],Be=Y.substring(W[0].length);ve==="."&&Be.length>0&&!Be.startsWith(" ")?d.push({from:$+W.index+L.length+I.length+1,to:$+W.index+L.length+I.length+2,severity:"warning",message:"List Items Without Proper Spacing"}):ve!=="."&&ve!==" "&&L.length<4&&d.push({from:$+W.index+L.length+I.length,to:$+W.index+L.length+I.length+1,severity:"warning",message:"Ordered list items should have a space or period after the number"})}}const w=k.match(/\(/g)||[],j=k.match(/\)/g)||[];if(k.includes("[")&&k.includes("](")&&w.length>j.length){const P=k.lastIndexOf("("),le=k.substring(0,P).includes("![");d.push({from:$+P,to:M,severity:"error",message:le?"Unclosed image link":"Unclosed link"})}if(k.includes("![](")){const P=k.indexOf("![");d.push({from:$+P,to:$+P+4,severity:"warning",message:"Image is missing alt text (accessibility)"})}const _=k.match(/^(\s*)(#{1,6})\s/);if(_&&!g.has(G)){const P=_[2].length;P===1&&(this.h1Count===void 0&&(this.h1Count=0),this.h1Count++,this.h1Count>1&&d.push({from:$+_[1].length,to:$+_[1].length+_[2].length,severity:"warning",message:"Multiple H1 headers detected. Document should have only one primary title."})),this.lastHeadingLevel!==void 0&&P>this.lastHeadingLevel+1&&d.push({from:$+_[1].length,to:$+_[1].length+_[2].length,severity:"warning",message:`Heading level jump: H${this.lastHeadingLevel} to H${P}`}),this.lastHeadingLevel=P}k.trim().split(/\s+/).filter(P=>P.length>0).length>200&&!_&&!g.has(G)&&d.push({from:$,to:M,severity:"info",message:"Long paragraph detected. Consider breaking it up for better readability."})}),this.lastHeadingLevel=void 0,this.h1Count=0,d}}}class fy{constructor(){this.editorView=null,this.settings={focus:{enabled:!1,opacity:.3,lineHeight:1.6},typewriter:{enabled:!1,centerOffset:.4,scrollBehavior:"smooth"},wysiwyg:{enabled:!1},zen:{enabled:!1,hideUI:!0,minimalMode:!1}},this.wordCount=0,this.characterCount=0,this.readabilityScore=0,this.readingTime=0,this.statistics={wordsToday:0,wordsThisWeek:0,writingStreak:0,lastWritingDate:null},this.listeners=[],this.loadSettings(),this.loadStatistics()}loadSettings(){try{const c=localStorage.getItem("markdownstudio_writing_modes");if(c){const d=JSON.parse(c);Object.keys(this.settings).forEach(r=>{d[r]&&typeof d[r]=="object"&&(this.settings[r]={...this.settings[r],...d[r]})}),this.settings.zen.enabled=!1}}catch(c){console.warn("Failed to load writing mode settings:",c)}}saveSettings(){localStorage.setItem("markdownstudio_writing_modes",JSON.stringify(this.settings))}loadStatistics(){const c=localStorage.getItem("markdownstudio_writing_stats");c&&(this.statistics={...this.statistics,...JSON.parse(c)})}saveStatistics(){localStorage.setItem("markdownstudio_writing_stats",JSON.stringify(this.statistics))}addModeChangeListener(c){this.listeners.push(c)}removeModeChangeListener(c){this.listeners=this.listeners.filter(d=>d!==c)}emitModeChange(){const c=this.getActiveModes();this.listeners.forEach(d=>{try{d(c)}catch(r){console.error("Error in mode change listener:",r)}})}toggleMode(c,d=!1){const r=this.isModeEnabled(c);d||!r?this.enableMode(c):this.disableMode(c)}enableMode(c){switch(c){case"focus":this.settings.focus.enabled=!0,this.applyFocusMode();break;case"typewriter":this.settings.typewriter.enabled=!0,this.applyTypewriterMode();break;case"wysiwyg":this.settings.wysiwyg.enabled=!0;break;case"zen":this.settings.zen.enabled=!0,this.applyZenMode();break}this.saveSettings(),this.emitModeChange()}disableMode(c){switch(c){case"focus":this.settings.focus.enabled=!1,this.removeFocusMode();break;case"typewriter":this.settings.typewriter.enabled=!1,this.removeTypewriterMode();break;case"wysiwyg":this.settings.wysiwyg.enabled=!1;break;case"zen":this.settings.zen.enabled=!1,this.removeZenMode();break}this.saveSettings(),this.emitModeChange()}applyFocusMode(){}removeFocusMode(){}applyTypewriterMode(){}removeTypewriterMode(){}applyZenMode(){this.zenKeyListener=c=>{c.key==="Escape"&&this.toggleMode("zen")},document.addEventListener("keydown",this.zenKeyListener)}removeZenMode(){this.zenKeyListener&&(document.removeEventListener("keydown",this.zenKeyListener),this.zenKeyListener=null)}calculateWordCount(c){return c?c.replace(/#+\s+/g,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[([^\]]*)\]\([^)]+\)/g,"$1").replace(/^\s*[-*+]\s+/gm,"").replace(/^\s*\d+\.\s+/gm,"").replace(/^\s*>\s+/gm,"").replace(/^[>-]+/gm,"").replace(/\n{3,}/g,`

`).trim().split(/\s+/).filter(f=>f.length>0).length:0}calculateReadingTime(c){return Math.ceil(c/225)}updateWritingStats(c){const d=this.calculateWordCount(c);if(this.wordCount=d,this.characterCount=c?c.length:0,this.readingTime=this.calculateReadingTime(d),d>5){const b=c.split(/[.!?]+/).filter(k=>k.trim().length>0).length||1,y=4.71*(c.replace(/\s+/g,"").length/d)+.5*(d/b)-21.43;this.readabilityScore=Math.max(0,Math.min(22,Math.round(y)))}else this.readabilityScore=0;const r=new Date().toDateString(),f=this.statistics.lastWritingDate;if(f!==r){const b=new Date(Date.now()-864e5).toDateString();f===b?this.statistics.writingStreak+=1:this.statistics.writingStreak=1,this.statistics.wordsToday=0,this.statistics.lastWritingDate=r}this.statistics.wordsToday=Math.max(this.statistics.wordsToday,d),this.statistics.wordsThisWeek=this.statistics.wordsToday,this.saveStatistics()}getWritingStatistics(){return{wordCount:this.wordCount,characterCount:this.characterCount,readabilityScore:this.readabilityScore,readingTime:this.readingTime,...this.statistics}}getActiveModes(){return{focus:this.settings.focus.enabled,typewriter:{enabled:this.settings.typewriter.enabled,centerOffset:this.settings.typewriter.centerOffset,scrollBehavior:this.settings.typewriter.scrollBehavior},wysiwyg:this.settings.wysiwyg.enabled,zen:this.settings.zen.enabled}}getCurrentMode(){return this.settings.zen.enabled?"zen":this.settings.focus.enabled?"focus":this.settings.typewriter.enabled?"typewriter":this.settings.wysiwyg.enabled?"wysiwyg":"normal"}isModeEnabled(c){return this.settings[c]?.enabled||!1}setEditorView(c){this.editorView=c}cleanup(){this.removeFocusMode(),this.removeTypewriterMode(),this.removeZenMode()}}const xn=new fy;Xo().use(Go).use(Cb).use(Xm).use(Cu).use(Au).use(Gm).use(Vo,{allowDangerousHtml:!0}).use(Du).use(Vm,{ignoreMissing:!0}).use(Qo,{allowDangerousHtml:!0});const hy=m=>{if(!m||!m.includes("|"))return m;const c=m.trim().split(`
`);if(c.length<2)return m;const d=c.map(f=>f.replace(/^\||\|$/g,"").split("|").map(g=>g.trim())),r=[];return d.forEach(f=>{f.forEach((b,g)=>{r[g]=Math.max(r[g]||0,b.length)})}),d.map((f,b)=>{const g=b===1&&f.every(k=>/^:?-+:?$/.test(k));return`|${f.map((k,G)=>{const B=r[G];if(g){const $=k.startsWith(":"),M=k.endsWith(":");let Y="-".repeat(B+2);return $&&M?Y=":"+"-".repeat(B)+":":$?Y=":"+"-".repeat(B+1):M&&(Y="-".repeat(B+1)+":"),Y}else return" "+k.padEnd(B)+" "}).join("|")}|`}).join(`
`)},my=$n.inputHandler.of((m,c,d,r)=>(r!=="|"||setTimeout(()=>{const{state:f}=m,b=m.state.selection.main.head,g=m.state.doc.lineAt(b);if(g.text.includes("|")){let y=g.number;for(;y>1&&m.state.doc.line(y-1).text.includes("|");)y--;let k=g.number;for(;k<m.state.doc.lines&&m.state.doc.line(k+1).text.includes("|");)k++;if(k-y>=2){const G={from:m.state.doc.line(y).from,to:m.state.doc.line(k).to},B=m.state.doc.sliceString(G.from,G.to),$=hy(B);$!==B&&m.dispatch({changes:{from:G.from,to:G.to,insert:$},selection:{anchor:b}})}}},10),!1)),py=Zo.line({class:"cm-activeBlock"}),gy=Ab.define({create(m){return km(m)},update(m,c){return c.docChanged||c.selection?km(c.state):m},provide:m=>$n.decorations.from(m)});function km(m){const c=m.selection.main.head;let d=m.doc.lineAt(c).number,r=d;for(;d>1&&m.doc.line(d-1).text.trim();)d--;for(;r<m.doc.lines&&m.doc.line(r+1).text.trim();)r++;const f=[];for(let b=d;b<=r;b++)f.push(py.range(m.doc.line(b).from));return Zo.set(f)}const by=Zo.mark({class:"cm-wysiwyg-hidden",attributes:{style:"opacity: 0.3; font-style: italic; user-select: text;"}}),Mm=m=>{const c=[],d=m.state.selection.main,r=m.state.doc.lineAt(d.head).from,f=m.state.doc.lineAt(d.head).to;for(let{from:b,to:g}of m.visibleRanges)qb(m.state).iterate({from:b,to:g,enter:y=>{y.from>=r&&y.to<=f||(y.name.includes("Mark")||y.name==="URL"||y.name==="LinkTitle"||y.name==="CodeInfo")&&c.push(by.range(y.from,y.to))}});return c.sort((b,g)=>b.from-g.from),Zo.set(c,!0)},yy=Db.fromClass(class{constructor(m){this.decorations=Mm(m)}update(m){(m.docChanged||m.selectionSet||m.viewportChanged)&&(this.decorations=Mm(m.view))}},{decorations:m=>m.decorations}),vy=m=>{let c=m.matchBefore(/\/\w*/);if(!c)return null;if(c.from>0){let d=m.state.sliceDoc(c.from-1,c.from);if(!/\s/.test(d)&&d!==`
`)return null}return c.from===c.to&&!m.explicit?null:{from:c.from,options:[Xe("**${}**",{label:"/bold",detail:"Bold Text",type:"text"}),Xe("*${}*",{label:"/italic",detail:"Italic Text",type:"text"}),Xe("~~${}~~",{label:"/strike",detail:"Strikethrough",type:"text"}),Xe("==${}==",{label:"/highlight",detail:"Highlight",type:"text"}),Xe("~${}~",{label:"/subscript",detail:"Subscript",type:"text"}),Xe("^${}^",{label:"/superscript",detail:"Superscript",type:"text"}),Xe("# ${}",{label:"/h1",detail:"Heading 1",type:"text"}),Xe("## ${}",{label:"/h2",detail:"Heading 2",type:"text"}),Xe("### ${}",{label:"/h3",detail:"Heading 3",type:"text"}),Xe("#### ${}",{label:"/h4",detail:"Heading 4",type:"text"}),Xe("##### ${}",{label:"/h5",detail:"Heading 5",type:"text"}),Xe("###### ${}",{label:"/h6",detail:"Heading 6",type:"text"}),Xe("> ${}",{label:"/quote",detail:"Blockquote",type:"text"}),Xe("`${}`",{label:"/inlinecode",detail:"Inline Code",type:"text"}),Xe("```${language}\n${}\n```",{label:"/code",detail:"Code Block",type:"text"}),Xe(`| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |`,{label:"/table",detail:"Table",type:"text"}),Xe(`---
`,{label:"/divider",detail:"Horizontal Rule",type:"text"}),Xe("- ${}",{label:"/bullet",detail:"Bullet List",type:"text"}),Xe("1. ${}",{label:"/numbered",detail:"Numbered List",type:"text"}),Xe("- [ ] ${}",{label:"/todo",detail:"Task List",type:"text"}),Xe("[${text}](url)",{label:"/link",detail:"Link",type:"text"}),Xe("![${alt}](url)",{label:"/image",detail:"Image",type:"text"}),Xe("Here is some text with a footnote[^${1}].\n\n[^${1}]: This is the footnote content.",{label:"/footnote",detail:"Footnote",type:"text"}),Xe("> [!NOTE]\n> ${}",{label:"/note",detail:"Note Callout",type:"text"}),Xe("> [!TIP]\n> ${}",{label:"/tip",detail:"Tip Callout",type:"text"}),Xe("> [!WARNING]\n> ${}",{label:"/warning",detail:"Warning Callout",type:"text"}),Xe("> [!ERROR]\n> ${}",{label:"/error",detail:"Error Callout",type:"text"}),Xe(`$$
\${}
$$`,{label:"/math",detail:"Math Block",type:"text"}),Xe("```mermaid\ngraph TD\n    A[Start] --> B[End]\n```",{label:"/mermaid",detail:"Mermaid",type:"text"}),Xe(`---
title: \${}
date: 
tags: []
---
`,{label:"/frontmatter",detail:"YAML Frontmatter",type:"text"})]}},xy=Qm.data.of({autocomplete:vy}),wy=[{key:"Tab",run:zb},...Lb],Sy=Nb((m,c)=>{const{state:d}=m,r=d.doc.lineAt(c),f=r.text,b=r.from,g=/\[([^\]]+)\]\(([^)]+)\)/g;let y;for(;(y=g.exec(f))!==null;){const B=b+y.index,$=B+y[0].length;if(c>=B&&c<=$){const M=y[1],Y=y[2];return{pos:B,end:$,above:!0,create:()=>{const O=document.createElement("div");return O.style.padding="4px 8px",O.style.backgroundColor="#333",O.style.color="#fff",O.style.borderRadius="4px",O.style.fontSize="12px",O.style.maxWidth="300px",O.style.wordBreak="break-word",Y.startsWith("http://")||Y.startsWith("https://")?O.innerHTML=`
              <div style="font-weight: bold; margin-bottom: 2px;">Link</div>
              <div>Text: ${M}</div>
              <div style="color: #4fc3f7;">URL: ${Y}</div>
            `:O.innerHTML=`
              <div style="font-weight: bold; margin-bottom: 2px;">Internal Link</div>
              <div>Text: ${M}</div>
              <div style="color: #81c784;">File: ${Y}</div>
            `,{dom:O}}}}}const k=/!\[([^\]]*)\]\(([^)]+)\)/g;for(;(y=k.exec(f))!==null;){const B=b+y.index,$=B+y[0].length;if(c>=B&&c<=$){const M=y[1]||"image",Y=y[2];return{pos:B,end:$,above:!0,create:()=>{const O=document.createElement("div");return O.style.padding="4px 8px",O.style.backgroundColor="#333",O.style.color="#fff",O.style.borderRadius="4px",O.style.fontSize="12px",O.style.maxWidth="300px",O.innerHTML=`
            <div style="font-weight: bold; margin-bottom: 2px;">Image</div>
            <div>Alt: ${M}</div>
            <div style="color: #ff9800;">Source: ${Y}</div>
          `,{dom:O}}}}}const G=/\[([^\]]+)\]/g;for(;(y=G.exec(f))!==null;){const B=b+y.index,$=B+y[0].length,M=f[y.index-1],Y=f[y.index+y[0].length];if(!(M==="!"||Y==="(")&&c>=B&&c<=$){const O=y[1];return{pos:B,end:$,above:!0,create:()=>{const Q=document.createElement("div");return Q.style.padding="4px 8px",Q.style.backgroundColor="#333",Q.style.color="#fff",Q.style.borderRadius="4px",Q.style.fontSize="12px",Q.innerHTML=`
            <div style="font-weight: bold; margin-bottom: 2px;">Reference</div>
            <div style="color: #ba68c8;">[${O}]</div>
          `,{dom:Q}}}}}return null}),Ey=$n.domEventHandlers({touchstart:(m,c)=>{if(!("ontouchstart"in window)||m.touches.length>1)return;const d=m.touches[0];c._touchStart={x:d.clientX,y:d.clientY},c._touchTimer&&clearTimeout(c._touchTimer),c._touchTimer=setTimeout(()=>{const r=c.posAtCoords({x:d.clientX,y:d.clientY});if(r!==null){const f=c.state.wordAt(r);f&&(c.dispatch({selection:{anchor:f.from,head:f.to},userEvent:"select.touch"}),window.navigator&&window.navigator.vibrate&&window.navigator.vibrate(50))}c._touchTimer=null},600)},touchmove:(m,c)=>{if(!("ontouchstart"in window)||!c._touchStart)return;const d=m.touches[0],r=d.clientX-c._touchStart.x,f=d.clientY-c._touchStart.y;(Math.abs(r)>10||Math.abs(f)>10)&&(c._touchTimer&&(clearTimeout(c._touchTimer),c._touchTimer=null),c._touchStart=null)},touchend:(m,c)=>{!("ontouchstart"in window)||!c._touchTimer||(clearTimeout(c._touchTimer),c._touchTimer=null,c._touchStart=null)},touchcancel:(m,c)=>{!("ontouchstart"in window)||!c._touchTimer||(clearTimeout(c._touchTimer),c._touchTimer=null,c._touchStart=null)}}),Ty=$n.theme({"&":{fontSize:"0.875rem",backgroundColor:"#ffffff",color:"#1e1e1e"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground, .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"rgba(0, 120, 212, 0.35) !important",borderRadius:"1px"},".cm-selectionMatch":{backgroundColor:"rgba(0, 120, 212, 0.2) !important"},".cm-activeLine":{backgroundColor:"rgba(0, 120, 212, 0.08)"},".cm-activeLineGutter":{backgroundColor:"rgba(0, 120, 212, 0.12)"}},{dark:!1}),jy=$n.theme({"&":{fontSize:"0.875rem",backgroundColor:"#1e1e1e",color:"#d4d4d4"},".cm-content":{caretColor:"#aeafad"},".cm-gutters":{backgroundColor:"#252526",color:"#858585",borderRight:"1px solid rgba(255,255,255,0.08)"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground, .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"rgba(0, 120, 212, 0.55) !important",borderRadius:"1px"},".cm-selectionMatch":{backgroundColor:"rgba(0, 120, 212, 0.35) !important"},".cm-activeLine":{backgroundColor:"rgba(255, 255, 255, 0.08)"},".cm-activeLineGutter":{backgroundColor:"rgba(255, 255, 255, 0.1)"},".cm-cursor":{borderLeftColor:"#aeafad"}},{dark:!0}),ky=[_b({base:Qm,codeLanguages:Yb}),Rb.of(wy),gy,xy,$b(),Ob(),Hb(),Bb(),Sy,Ey,my],My=(m,c,d)=>{const r=[Kb.highest(d?jy:Ty)];return c?.typewriter?.enabled&&r.push($n.updateListener.of(f=>{if(f.docChanged||f.selectionSet){if(!f.state.selection.main.empty)return;f.view.dispatch({effects:$n.scrollIntoView(f.state.selection.main.head,{y:"center",behavior:c.typewriter.scrollBehavior||"auto"})})}})),c?.wysiwyg&&r.push(yy),m?.highlightSpecialChars&&r.push(Xb()),m?.scrollPastEnd&&r.push(Gb()),m?.showLintGutter&&r.push(Vb(dy.getLintDiagnostics()),Qb({markerFilter:f=>f,tooltipFilter:f=>f,markerTooltip:f=>f.length===1?f[0].message:f.map(b=>b.message).join(`
`)})),m?.showPlaceholder&&r.push(Zb("Start typing your markdown here...")),r},Cy=p.memo(function({content:c,onChange:d,visible:r,onTextSelection:f,scrollRef:b,onEditorReady:g,settings:y,writingMode:k,isDark:G,onCursorActivity:B,onHistoryChange:$}){const[M,Y]=p.useState(null),O=p.useRef(null),Q=p.useRef(!1),X=p.useRef({canUndo:!1,canRedo:!1}),S=p.useRef(0),K=p.useRef({undo:0,redo:0});p.useEffect(()=>{M&&(xn.setEditorView(M),g&&g(M))},[M,g]),p.useEffect(()=>{if(b&&M){const D=M.dom.querySelector(".cm-scroller");D&&(b.current=D)}},[M,b]);const se=p.useMemo(()=>$n.updateListener.of(D=>{if(D.selectionSet||D.docChanged){const w=!D.state.selection.main.empty;if(Q.current!==w&&(Q.current=w,f&&f(w)),B){const j=D.state.selection.main.head,_=D.state.doc.lineAt(j),te=j-_.from+1;B({line:_.number,column:te})}if(D.docChanged&&(S.current++,S.current===1&&(K.current={undo:Em(D.state),redo:Sm(D.state)})),$){const j=Em(D.state)>K.current.undo,_=Sm(D.state)>K.current.redo;(j!==X.current.canUndo||_!==X.current.canRedo)&&(X.current={canUndo:j,canRedo:_},$({canUndo:j,canRedo:_}))}}}),[f,B,$]),re=p.useMemo(()=>$n.domEventHandlers({paste:(D,w)=>{const j=D.clipboardData?.getData("text/html");return j?(D.preventDefault(),Ht(()=>import("./vendor-processing.CmTeLQxv.js").then(_=>_.ac),__vite__mapDeps([0,1])).then(_=>{const te=_.default,le=new te({headingStyle:"atx",codeBlockStyle:"fenced"}).turndown(j),{state:ie}=w,Z=ie.selection.main;w.dispatch({changes:{from:Z.from,to:Z.to,insert:le},selection:{anchor:Z.from+le.length}}),w.focus()}).catch(_=>console.error("Turndown failed",_)),!0):!1}}),[]),we=p.useMemo(()=>[...ky,...My(y,k,G),se,re],[se,re,y,k,G]);return r?s.jsx("div",{className:`editor-pane selectable-content ${G?"dark-theme":"light-theme"}`,"data-theme":G?"dark":"light",role:"textbox","aria-label":"Markdown editor",children:s.jsx(Ub,{ref:O,value:c,height:"100%",width:"100%",extensions:we,onChange:D=>d(D),className:`codemirror-editor ${G?"dark-theme":"light-theme"} ${y?.showLineNumbers?"":"hide-line-numbers"} ${y?.showFoldGutter?"":"hide-fold-gutter"} ${k.zen?"zen-mode":""} ${k.focus?"focus-mode-active":""}`,onCreateEditor:D=>{Y(D)}})}):null}),Km=new Map;let Tu="default";function Ay(){return m=>{zu(m,c=>{c.position&&c.type!=="text"&&c.type!=="inlineCode"&&(c.data=c.data||{},c.data.hProperties=c.data.hProperties||{},c.data.hProperties["data-line"]=c.position.start.line)})}}function Dy(){return m=>{zu(m,"code",c=>{if(c.lang==="mermaid"){c.type="html";const d=c.value,r=d.replace(/</g,"&lt;").replace(/>/g,"&gt;"),f=Km.get(d);f&&f.theme===Tu&&f.svg?c.value=`<div class="mermaid-container" style="display:flex; justify-content:center; margin:1.5rem 0; padding:1rem; background-color:var(--color-neutral-background2); border-radius:6px; border:1px solid rgba(0,0,0,0.1);"><div class="mermaid-src" style="display:none;">${r}</div><div class="mermaid-result" data-rendered="true" data-theme="${Tu}">${f.svg}</div></div>`:c.value=`<div class="mermaid-container" style="display:flex; justify-content:center; margin:1.5rem 0; padding:1rem; background-color:var(--color-neutral-background2); border-radius:6px; border:1px solid rgba(0,0,0,0.1);"><div class="mermaid-src" style="display:none;">${r}</div><div class="mermaid-result">Loading diagram...</div></div>`}})}}function zy(){return m=>{zu(m,c=>{if(c.type==="text"){if(c.value&&typeof c.value=="string"){const d=c.value.split(/(==(.*?)==)/);if(d.length>1){const r=[];for(let f=0;f<d.length;f++){const b=d[f];if(b.startsWith("==")&&b.endsWith("==")){const g=b.slice(2,-2);r.push({type:"element",tagName:"mark",properties:{className:"highlighted-text"},children:[{type:"text",value:g}]})}else b&&r.push({type:"text",value:b})}c.type="element",c.tagName="span",c.properties={},c.children=r}}}else c.children&&Array.isArray(c.children)&&c.children.forEach(d=>{if(d.type==="text"&&d.value&&typeof d.value=="string"){const r=d.value.split(/(==(.*?)==)/);if(r.length>1){const f=[];for(let b=0;b<r.length;b++){const g=r[b];if(g.startsWith("==")&&g.endsWith("==")){const y=g.slice(2,-2);f.push({type:"element",tagName:"mark",properties:{className:"highlighted-text"},children:[{type:"text",value:y}]})}else g&&f.push({type:"text",value:g})}d.type="element",d.tagName="span",d.properties={},d.children=f}}})})}}const Ly=Xo().use(Go).use(Xm).use(Ay).use(Dy).use(zy).use(Cu).use(Au).use(Gm).use(Vo,{allowDangerousHtml:!0}).use(Du).use(Vm,{ignoreMissing:!0}).use(Qo,{allowDangerousHtml:!0}),Ny=m=>{if(!m)return{html:"",offset:0};const c=m.match(/^---\s*\n([\s\S]*?)\n---\s*\n/),d=c?c[0].split(`
`).length-1:0;let r=m;c&&(r=m.slice(c[0].length));const f={note:"ℹ️",tip:"💡",important:"🔔",warning:"⚠️",caution:"⚡",error:"❌"};r=r.replace(/(^|\r?\n)((?:>\s*)+)\[!(\w+)\] ?(.*)/g,(b,g,y,k,G)=>{const B=k.toLowerCase(),$=f[B]||"ℹ️",M=G.trim()||k.charAt(0).toUpperCase()+k.slice(1);return`${g}${y}<div class="callout-header callout-${B}">${$} ${M}</div>
${y}`});try{const b=Ly.processSync(r);return{html:String(b),offset:d}}catch(b){return console.error("Markdown rendering error:",b),{html:m,offset:0}}},cs=p.memo(({content:m,visible:c=!0,scrollRef:d,scrollStateRef:r,rememberScrollPosition:f=!0,onJumpToLine:b,activeLine:g=0})=>{const y=p.useRef(null);p.useRef(!1);const[k,G]=p.useState(m||""),[B,$]=p.useState(0),[M,Y]=p.useState({visible:!1,content:"",target:null}),O=p.useRef(null),Q=p.useRef(null);p.useEffect(()=>{const D=document.querySelector(".app");if(!D)return;const w=new MutationObserver(j=>{for(const _ of j)_.attributeName==="class"&&$(te=>te+1)});return w.observe(D,{attributes:!0,attributeFilter:["class"]}),()=>w.disconnect()},[]);const X=p.useCallback(D=>{const w=D.target,j=w.closest("[data-line]");if(j&&b){const _=j.getAttribute("data-line");if(_){b(parseInt(_));return}}if(w.tagName==="A"&&w.hash){D.preventDefault();const _=document.querySelector(w.hash);_&&_.scrollIntoView({behavior:"smooth"});return}if(["H1","H2","H3","H4","H5","H6"].includes(w.tagName)){const _=w.id;_&&b&&b(_)}},[b]),S=p.useCallback(D=>{const w=D.target;if(w.tagName==="A"&&w.id?.startsWith("fnref-")||w.getAttribute("href")?.startsWith("#fn-")){const j=w.getAttribute("href").substring(1),_=document.getElementById(j);_&&Y({visible:!0,content:_.innerHTML,target:w})}else M.visible&&!w.closest(".footnote-tooltip-surface")&&Y(j=>({...j,visible:!1}))},[M.visible]);p.useEffect(()=>{if(!c||!y.current)return;const D=y.current;return D.addEventListener("click",X),D.addEventListener("mouseover",S),()=>{D.removeEventListener("click",X),D.removeEventListener("mouseover",S)}},[c,X,S]);const K=p.useCallback(()=>{const D=y.current;if(!D||!r)return;const w=D.scrollHeight-D.clientHeight;r.current={ratio:w>0?D.scrollTop/w:0,pixel:D.scrollTop}},[]);p.useEffect(()=>{if(!c)return;K();const D=()=>G(m||"");return typeof window<"u"&&"requestIdleCallback"in window?(O.current&&window.cancelIdleCallback(O.current),O.current=window.requestIdleCallback(D,{timeout:700}),()=>{O.current&&(window.cancelIdleCallback(O.current),O.current=null)}):(Q.current&&clearTimeout(Q.current),Q.current=setTimeout(D,500),()=>{Q.current&&(clearTimeout(Q.current),Q.current=null)})},[m,c,K]),p.useLayoutEffect(()=>{if(!c||!y.current||!r)return;const D=y.current,w=D.scrollHeight-D.clientHeight,{ratio:j,pixel:_}=r.current||{ratio:0,pixel:0},te=w>0?j*w:_;Number.isFinite(te)&&(D.scrollTop=Math.max(0,Math.min(w,te)))},[k,c]);const{htmlContent:se,frontmatterOffset:re}=p.useMemo(()=>{Tu=document.querySelector(".app.dark-theme")!==null?"dark":"default";const w=Ny(k);return{htmlContent:w.html,frontmatterOffset:w.offset}},[k,B]),we=p.useRef(null);return p.useEffect(()=>{if(!c||!y.current||g<=0)return;const D=g-re;if(D<=0){y.current.scrollTo({top:0,behavior:"auto"});return}const w=y.current.querySelectorAll("[data-line]");let j=null,_=-1;for(let te=0;te<w.length;te++){const P=parseInt(w[te].getAttribute("data-line"));if(P<=D&&P>_)_=P,j=w[te];else if(P>D)break}if(j){we.current&&we.current.classList.remove("sync-highlight"),j.scrollIntoView({behavior:"auto",block:"center"}),j.classList.add("sync-highlight"),we.current=j;const te=setTimeout(()=>{we.current===j&&(j.classList.remove("sync-highlight"),we.current=null)},1500);return()=>clearTimeout(te)}},[g,c,re]),p.useEffect(()=>{d&&y.current&&(d.current=y.current)},[d,c]),p.useEffect(()=>{if(!c||!y.current)return;const w=setTimeout(async()=>{try{const j=y.current,_=j.querySelectorAll(".mermaid-container");if(_.length>0){const{default:P}=await Ht(async()=>{const{default:ie}=await import("./vendor-visual.B_Q0hmov.js").then(Z=>Z.bC);return{default:ie}},__vite__mapDeps([2,0,1])),le=document.querySelector(".app.dark-theme")!==null;P.initialize({startOnLoad:!1,theme:le?"dark":"default",fontFamily:"'Outfit', 'Inter', -apple-system, sans-serif"});for(let ie=0;ie<_.length;ie++){const Z=_[ie],W=Z.querySelector(".mermaid-src"),L=Z.querySelector(".mermaid-result");if(!W||!L)continue;const I=le?"dark":"default",ve=L.getAttribute("data-theme");if(L.hasAttribute("data-rendered")&&ve===I)continue;const Be=W.textContent||W.innerText,J=`mermaid-svg-${Date.now()}-${ie}`;try{const{svg:fe}=await P.render(J,Be);L.innerHTML=fe,L.setAttribute("data-rendered","true"),L.setAttribute("data-theme",I),Km.set(Be,{theme:I,svg:fe})}catch(fe){const Se=fe.message||"Syntax Error";console.warn("Mermaid render error:",Se),L.innerHTML="",L.setAttribute("data-rendered","error")}}}j.querySelectorAll("pre code.language-js, pre code.language-javascript").forEach(P=>{const le=P.parentElement;if(le.querySelector(".run-btn"))return;const ie=document.createElement("button");ie.className="run-btn",ie.innerHTML="▶ Run",ie.title="Run JavaScript code";const Z=document.createElement("div");Z.className="code-output",Z.style.cssText="display:none; padding:8px; margin-top:-1rem; margin-bottom:1rem; border-radius:0 0 6px 6px; font-family:monospace; font-size:12px; background:rgba(0,0,0,0.05); border-top:1px solid rgba(0,0,0,0.1); white-space:pre-wrap;",le.style.position="relative",le.appendChild(ie),le.after(Z),ie.onclick=W=>{W.stopPropagation(),Z.style.display="block",Z.textContent="Executing...",Z.style.color="var(--color-neutral-foreground2)";const L=P.textContent,I=[],ve=console.log;console.log=(...Be)=>I.push(Be.map(J=>typeof J=="object"?JSON.stringify(J):String(J)).join(" "));try{const Be=new Function(L)();console.log=ve,Z.textContent=I.length>0?I.join(`
`):Be!==void 0?String(Be):"Execution finished (no output)"}catch(Be){console.log=ve,Z.textContent=`Error: ${Be.message}`,Z.style.color="var(--color-status-error-foreground1)"}}})}catch(j){console.error("Error in preview enrichment:",j)}},100);return()=>clearTimeout(w)},[se,c,B]),c?s.jsxs("div",{className:"preview-pane",role:"document","aria-label":"Markdown preview",ref:y,children:[s.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:se}}),M.visible&&s.jsxs(Om,{open:!0,positioning:{target:M.target,position:"above",align:"start"},children:[s.jsx(Hm,{disableButtonEnhancement:!0,children:s.jsx("div",{style:{position:"fixed",left:-9999}})}),s.jsx(Bm,{className:"footnote-tooltip-surface",style:{maxWidth:"300px",fontSize:"13px"},children:s.jsx("div",{dangerouslySetInnerHTML:{__html:M.content}})})]})]}):null}),Cm={setItem:(m,c)=>{try{return localStorage.setItem(m,c),!0}catch(d){if(d.name==="QuotaExceededError")return console.warn("localStorage quota exceeded, unable to save:",m),!1;throw d}},getItem:m=>{try{return localStorage.getItem(m)}catch(c){return console.warn("Error reading from localStorage:",c),null}}};function Fm({content:m,visible:c,cursorLine:d=1,cursorColumn:r=1}){const[f,b]=p.useState({wordCount:0,readingTime:0,wordsToday:0,wordsThisWeek:0,writingStreak:0,lastWritingDate:null}),[g,y]=p.useState(()=>{const Q=Cm.getItem("markdownstudio_writing_goal");return Q?parseInt(Q):500}),[k,G]=p.useState(!1);if(p.useEffect(()=>{m&&m.trim()&&(xn.updateWritingStats(m),b(xn.getWritingStatistics()))},[m]),p.useEffect(()=>{Cm.setItem("markdownstudio_writing_goal",g.toString())},[g]),!c||!m||!m.trim())return null;const B=Math.min(1,f.wordsToday/g),$=Math.round(B*100),M=Q=>{if(Q<60)return`${Q} min read`;const X=Math.floor(Q/60),S=Q%60;return`${X}h ${S}m read`},Y=Q=>Q===0||Q<=3?"🔥":Q<=7?"🔥🔥":Q<=14?"🔥🔥🔥":"🔥🔥🔥🔥",O=Q=>new Intl.NumberFormat().format(Q||0);return s.jsxs("div",{className:"writing-stats compact",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",overflow:"hidden"},children:[s.jsxs("div",{className:"stats-line",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:[s.jsx("div",{className:"goal-container",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:s.jsxs(Om,{open:k,onOpenChange:(Q,X)=>G(X.open),children:[s.jsx(Hm,{disableButtonEnhancement:!0,children:s.jsxs("div",{className:"goal-progress-wrapper",title:`Daily Goal: ${$}% (${f.wordsToday}/${g} words)`,children:[s.jsx("div",{className:"goal-progress-bar",style:{width:`${$}%`}}),s.jsxs("span",{className:"goal-text",children:[s.jsx(fb,{style:{fontSize:"12px",marginRight:"4px"}})," ",$,"%"]})]})}),s.jsx(Bm,{style:{padding:"12px",width:"200px"},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[s.jsx("span",{style:{fontSize:"12px",fontWeight:"bold"},children:"Set Daily Word Goal"}),s.jsx(ui,{type:"number",value:g,onChange:(Q,X)=>y(parseInt(X.value)||0),size:"small",contentAfter:"words"}),s.jsx(Ot,{size:"small",appearance:"primary",onClick:()=>G(!1),children:"Apply"})]})})]})}),s.jsx(me,{content:"Word Count",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Words: ",O(f.wordCount)]})})}),s.jsx(me,{content:"Reading Time",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Read: ",M(f.readingTime)]})})}),s.jsx(me,{content:"Words Today",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Today: ",O(f.wordsToday)]})})}),f.writingStreak>0&&s.jsx(me,{content:`Streak: ${f.writingStreak} days`,relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:[Y(f.writingStreak)," ",f.writingStreak," Days"]})})})]}),s.jsxs("div",{className:"stats-line stats-right",style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",flexShrink:0},children:[s.jsx(me,{content:"Cursor Position",relationship:"label",withArrow:!0,children:s.jsx("div",{className:"stat-item",children:s.jsxs("span",{className:"stat-text",children:["Ln ",d,", Col ",r]})})}),s.jsx("div",{className:"stat-item",children:s.jsx("span",{className:"stat-text",children:"UTF-8"})}),s.jsx("div",{className:"stat-item",children:s.jsx("span",{className:"stat-text",children:"Markdown"})})]})]})}const _y=Object.freeze(Object.defineProperty({__proto__:null,default:Fm},Symbol.toStringTag,{value:"Module"}));function ju({isOpen:m=!0,onClose:c=()=>{},isDarkTheme:d=!1,isDialog:r=!1}){const[f,b]=p.useState("");return p.useEffect(()=>{fetch("/mdstudio/user-manual.md").then(y=>y.text()).then(y=>b(y)).catch(y=>console.error("Failed to load user manual:",y))},[]),r?s.jsx(Ho,{open:m,onOpenChange:(g,y)=>!y.open&&c(),children:s.jsx(Bo,{className:d?"dark-theme":"light-theme",style:{maxWidth:"750px",width:"95vw",maxHeight:"80vh"},children:s.jsxs(Uo,{children:[s.jsx(qo,{children:"User Manual"}),s.jsx("div",{style:{maxHeight:"calc(80vh - 100px)",overflow:"auto"},children:s.jsx(cs,{content:f,visible:!0})}),s.jsx(Yo,{children:s.jsx(Ot,{appearance:"primary",onClick:c,children:"Close"})})]})})}):s.jsx("div",{className:"user-manual-container user-manual-full-window",style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",border:"none",margin:0,padding:0,backgroundColor:"var(--color-neutral-background1)"},children:s.jsx("div",{className:"user-manual-content user-manual-full-window",style:{flex:1,overflow:"auto",border:"none",margin:0,padding:"20px"},children:s.jsx(cs,{content:f,visible:!0})})})}const Ry=Object.freeze(Object.defineProperty({__proto__:null,default:ju},Symbol.toStringTag,{value:"Module"})),Lu=(m,c)=>{p.useEffect(()=>{if(!m.current||!c)return;const d=m.current;d.style.setProperty("max-height","80vh","important"),d.style.setProperty("overflow-y","auto","important"),d.style.setProperty("user-select","none","important"),d.querySelectorAll('input, textarea, select, [contenteditable="true"]').forEach(M=>{M.style.setProperty("user-select","auto","important")});let f=!1,b,g;const y=window.innerWidth>768,k=()=>{const M=d.getBoundingClientRect(),Y=window.innerWidth,O=window.innerHeight,Q=Math.max(10,(Y-M.width)/2),X=Math.max(10,(O-M.height)/2);d.style.setProperty("transform","none","important"),d.style.setProperty("left",`${Q}px`,"important"),d.style.setProperty("top",`${X}px`,"important"),d.style.setProperty("margin","0","important"),d.style.setProperty("position","fixed","important")},G=setTimeout(k,50);let B=!1;const $=new ResizeObserver(M=>{!B&&M.length>0&&M[0].contentRect.width>0&&(k(),B=!0)});if($.observe(d),y){const M=Q=>{const X=Q.target.closest(".fui-DialogTitle")||Q.target.closest(".dialog-header")||Q.target===d,S=Q.target.closest('button, input, textarea, a, [role="button"]');if(X&&!S&&Q.button===0){f=!0;const K=d.getBoundingClientRect();b=Q.clientX-K.left,g=Q.clientY-K.top,d.style.transition="none",Q.preventDefault()}},Y=Q=>{if(!f)return;const X=window.innerWidth,S=window.innerHeight,K=d.offsetWidth,se=d.offsetHeight,re=10;let we=Q.clientX-b,D=Q.clientY-g;we=Math.min(Math.max(re,we),X-K-re),D=Math.min(Math.max(re,D),S-se-re),d.style.left=`${we}px`,d.style.top=`${D}px`},O=()=>{f&&(f=!1,d.style.transition="")};return d.addEventListener("mousedown",M),window.addEventListener("mousemove",Y),window.addEventListener("mouseup",O),()=>{clearTimeout(G),$.disconnect(),d.removeEventListener("mousedown",M),window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",O)}}return()=>{clearTimeout(G),$.disconnect()}},[c,m])};function Jm({isOpen:m,onClose:c,isDarkTheme:d}){const r=p.useRef(null);return Lu(r,m),s.jsx(Ho,{open:m,onOpenChange:c,children:s.jsx(Bo,{ref:r,className:`about-dialog-surface ${d?"dark-theme":"light-theme"}`,children:s.jsxs(Uo,{children:[s.jsx(qo,{children:s.jsx("div",{className:"about-dialog-header",children:"About"})}),s.jsx(Mu,{className:"about-dialog-content",children:s.jsxs("div",{className:"about-app-info",children:[s.jsx("h2",{children:"MarkdownStudio v1.0.0"}),s.jsx("p",{className:"about-description",children:"A modern, intuitive, and cross-platform markdown editor application."}),s.jsx("hr",{className:"about-divider"}),s.jsx("p",{className:"about-details",children:"Built with productivity in mind. All your markdown files are organized efficiently."}),s.jsx("p",{className:"about-copyright",children:"© 2026 @platohe. All rights reserved."})]})}),s.jsx(Yo,{children:s.jsx(Ot,{appearance:"primary",onClick:c,children:"Close"})})]})})})}const $y=Object.freeze(Object.defineProperty({__proto__:null,default:Jm},Symbol.toStringTag,{value:"Module"})),Oy=({onExitZen:m})=>s.jsx("button",{className:"zen-exit-button",onClick:m,title:"Exit Zen Mode (Esc)","aria-label":"Exit Zen Mode",children:"Exit"}),Hy=(m,c={x:100,y:100},d=null)=>{try{const r=localStorage.getItem(`window-state-${m}`);if(r){const f=JSON.parse(r),b=f.x>=0&&f.x<=window.innerWidth-100,g=f.y>=0&&f.y<=window.innerHeight-100;if(!b||!g)return{position:c,size:d};const y={position:{x:f.x,y:f.y}};if(d&&f.width&&f.height){const k=f.width>=300&&f.width<=window.innerWidth-100,G=f.height>=200&&f.height<=window.innerHeight-100;k&&G?y.size={width:f.width,height:f.height}:y.size=d}return y}}catch{}return{position:c,size:d}},By=(m,c,d=null)=>{try{const r={x:c.x,y:c.y};d&&(r.width=d.width,r.height=d.height),localStorage.setItem(`window-state-${m}`,JSON.stringify(r))}catch{}},Tl=(m,c,d=null)=>{const f=Hy(m,c,d),[b,g]=p.useState(f.position),[y,k]=p.useState(f.size);return p.useEffect(()=>{By(m,b,y)},[m,b,y]),{position:b,setPosition:g,size:y,setSize:k}};function Wm({editorView:m,onClose:c,isVisible:d,mode:r="find"}){const[f,b]=p.useState(""),[g,y]=p.useState(""),[k,G]=p.useState(!1),[B,$]=p.useState(!1),[M,Y]=p.useState(!1),[O,Q]=p.useState(0),[X,S]=p.useState(0),{position:K,setPosition:se}=Tl("find-bar",{x:window.innerWidth/2-200,y:150}),[re,we]=p.useState(!1),D=p.useRef({x:0,y:0}),w=r==="findReplace",j=p.useRef(null),_=p.useRef(null),te=p.useRef(null),[P,le]=p.useState(window.innerWidth),ie=P<600;p.useEffect(()=>{const J=()=>le(window.innerWidth);return window.addEventListener("resize",J),()=>window.removeEventListener("resize",J)},[]),p.useEffect(()=>{d&&setTimeout(()=>j.current?.focus(),100)},[d,r]);const Z=J=>{ie||J.target.closest("button")||J.target.closest("input")||J.target.closest("label")||(we(!0),D.current={x:J.clientX-K.x,y:J.clientY-K.y},J.preventDefault())},W=J=>{if(ie||J.target.closest("button")||J.target.closest("input")||J.target.closest("label"))return;const fe=J.touches[0];we(!0),D.current={x:fe.clientX-K.x,y:fe.clientY-K.y}};p.useEffect(()=>{const J=Se=>{if(!re||ie)return;const xe=Se.type==="touchmove"?Se.touches[0].clientX:Se.clientX,ge=Se.type==="touchmove"?Se.touches[0].clientY:Se.clientY,yt=xe-D.current.x,Re=ge-D.current.y;se({x:Math.max(0,Math.min(yt,window.innerWidth-100)),y:Math.max(0,Math.min(Re,window.innerHeight-100))})},fe=()=>{we(!1)};return re&&(window.addEventListener("mousemove",J),window.addEventListener("mouseup",fe),window.addEventListener("touchmove",J,{passive:!1}),window.addEventListener("touchend",fe),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",fe),window.removeEventListener("touchmove",J),window.removeEventListener("touchend",fe),document.body.style.userSelect=""}},[re,ie]),p.useEffect(()=>{f.trim()&&L(f)},[k,B,M]);const L=(J,fe="next")=>{if(!m||!J.trim())return;const Se=m.state;let xe=Se.selection.main.head;try{let ge;if(M){const Ue=k?"g":"gi",vt=B?`\\b${J}\\b`:J;ge=new RegExp(vt,Ue)}else{const Ue=J.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),vt=k?"g":"gi",ya=B?`\\b${Ue}\\b`:Ue;ge=new RegExp(ya,vt)}const yt=Se.doc.toString(),Re=[];let We;for(;(We=ge.exec(yt))!==null;)Re.push({from:We.index,to:We.index+We[0].length,text:We[0]}),We.index===ge.lastIndex&&ge.lastIndex++;if(S(Re.length),Re.length===0){Q(0);return}let Et;fe==="next"?Et=Re.find(Ue=>Ue.from>xe)||Re[0]:Et=[...Re].reverse().find(Ue=>Ue.from<xe)||Re[Re.length-1];const At=Re.findIndex(Ue=>Ue.from===Et.from);Q(At+1);const je=Se.update({selection:{anchor:Et.from,head:Et.to},scrollIntoView:!0});m.dispatch(je)}catch{S(0),Q(0)}},I=J=>{J.key==="Enter"?(J.preventDefault(),J.shiftKey?L(f,"previous"):L(f,"next")):J.key==="Escape"&&c()},ve=()=>{if(!m||!f.trim())return;const J=m.state,fe=J.selection.main;if(!fe.empty){const Se=J.update({changes:{from:fe.from,to:fe.to,insert:g},selection:{anchor:fe.from,head:fe.from+g.length}});m.dispatch(Se),setTimeout(()=>L(f,"next"),0)}},Be=()=>{if(!m||!f.trim())return;let J;try{if(M){const yt=k?"g":"gi",Re=B?`\\b${f}\\b`:f;J=new RegExp(Re,yt)}else{const yt=f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Re=k?"g":"gi",We=B?`\\b${yt}\\b`:yt;J=new RegExp(We,Re)}const Se=m.state.doc.toString(),xe=[];let ge;for(;(ge=J.exec(Se))!==null;)xe.push({from:ge.index,to:ge.index+ge[0].length,insert:g}),ge.index===J.lastIndex&&J.lastIndex++;xe.length>0&&(m.dispatch({changes:xe}),S(0),Q(0))}catch(fe){console.error("Replace all error:",fe)}};return d?s.jsxs("div",{ref:te,className:`find-bar ${re?"dragging":""} ${ie?"is-mobile":""}`,style:ie?{}:{left:`${K.x}px`,top:`${K.y}px`},children:[s.jsxs("div",{className:"find-bar-title-bar",onMouseDown:Z,onTouchStart:W,children:[s.jsxs("div",{className:"find-bar-title",children:[s.jsx(hb,{className:"title-icon"}),s.jsx("span",{children:w?"Find & Replace":"Find"})]}),s.jsx("button",{className:"find-close-btn",onClick:c,children:s.jsx(rs,{})})]}),s.jsxs("div",{className:"find-bar-content",children:[s.jsxs("div",{className:"find-inputs-group",children:[s.jsxs("div",{className:"find-input-wrapper",children:[s.jsx("input",{ref:j,type:"text",className:"find-input",placeholder:"Find...",value:f,onChange:J=>{b(J.target.value),J.target.value?L(J.target.value):(S(0),Q(0))},onKeyDown:I}),s.jsxs("div",{className:"find-nav-group",children:[s.jsx("button",{className:"find-nav-btn",onClick:()=>L(f,"previous"),disabled:!X,children:s.jsx(mb,{})}),s.jsx("button",{className:"find-nav-btn",onClick:()=>L(f,"next"),disabled:!X,children:s.jsx(pb,{})})]})]}),w&&s.jsx("div",{className:"replace-section",children:s.jsxs("div",{className:"find-input-wrapper",children:[s.jsx("input",{ref:_,type:"text",className:"find-input",placeholder:"Replace with...",value:g,onChange:J=>y(J.target.value),onKeyDown:I}),s.jsxs("div",{className:"find-nav-group",children:[s.jsx("button",{className:"replace-btn",onClick:ve,title:"Replace",disabled:!X,children:s.jsx(_o,{})}),s.jsx("button",{className:"replace-btn",onClick:Be,title:"Replace All",disabled:!X,children:s.jsx(gb,{})})]})]})})]}),s.jsxs("div",{className:"find-info-row",children:[s.jsx("span",{className:"match-count",children:X>0?`${O} of ${X}`:f.trim()?"No matches":""}),s.jsxs("div",{className:"find-options-list",children:[s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:k,onChange:J=>G(J.target.checked)}),s.jsx("span",{className:`checkbox-custom ${k?"checked":""}`,children:k&&s.jsx(Pr,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Match case"})]}),s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:B,onChange:J=>$(J.target.checked)}),s.jsx("span",{className:`checkbox-custom ${B?"checked":""}`,children:B&&s.jsx(Pr,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Whole word"})]}),s.jsxs("label",{className:"find-option-item",children:[s.jsx("input",{type:"checkbox",checked:M,onChange:J=>Y(J.target.checked)}),s.jsx("span",{className:`checkbox-custom ${M?"checked":""}`,children:M&&s.jsx(Pr,{className:"checkmark-icon"})}),s.jsx("span",{className:"option-label",children:"Regex"})]})]})]})]})]}):null}const Uy=Object.freeze(Object.defineProperty({__proto__:null,default:Wm},Symbol.toStringTag,{value:"Module"}));class qy{constructor(){this.settings={fontSize:100,highContrast:!1,reducedMotion:!1,screenReaderOptimized:!1,keyboardNavigation:!0,focusVisible:!0,dyslexiaFont:!1,largeTargets:!1},this.loadSettings(),this.applySettings(),this.setupEventListeners(),this.dispatchSettingsChange()}dispatchSettingsChange(){typeof document<"u"&&document.dispatchEvent(new CustomEvent("accessibilitySettingsChange",{detail:this.getSettings()}))}loadSettings(){try{const c=localStorage.getItem("markdownstudio_accessibility");c&&(this.settings={...this.settings,...JSON.parse(c)})}catch(c){console.warn("Failed to load accessibility settings:",c)}}saveSettings(){try{localStorage.setItem("markdownstudio_accessibility",JSON.stringify(this.settings))}catch(c){console.warn("Failed to save accessibility settings:",c)}}applySettings(){this.applyFontSize(),this.applyHighContrast(),this.applyReducedMotion(),this.applyScreenReaderOptimizations(),this.applyKeyboardNavigation(),this.applyFocusVisible(),this.applyDyslexiaFont(),this.applyLargeTargets()}setFontSize(c){this.settings.fontSize=Math.max(100,Math.min(200,c)),this.applyFontSize(),this.saveSettings(),this.dispatchSettingsChange()}applyFontSize(){const c=document.documentElement;c.style.fontSize=`${this.settings.fontSize}%`,c.style.setProperty("--base-font-size",`${this.settings.fontSize}%`)}setHighContrast(c){this.settings.highContrast=c,this.applyHighContrast(),this.saveSettings(),this.dispatchSettingsChange()}applyHighContrast(){const c=document.body;this.settings.highContrast?(c.classList.add("high-contrast"),document.documentElement.style.setProperty("--text-contrast-ratio","7:1"),document.documentElement.style.setProperty("--border-contrast","black")):(c.classList.remove("high-contrast"),document.documentElement.style.removeProperty("--text-contrast-ratio"),document.documentElement.style.removeProperty("--border-contrast"))}setReducedMotion(c){this.settings.reducedMotion=c,this.applyReducedMotion(),this.saveSettings(),this.dispatchSettingsChange()}applyReducedMotion(){const c=window.matchMedia("(prefers-reduced-motion: reduce)");this.settings.reducedMotion||c.matches?(document.documentElement.style.setProperty("--transition-duration","0ms"),document.documentElement.style.setProperty("--animation-duration","0ms"),document.body.classList.add("reduced-motion")):(document.documentElement.style.removeProperty("--transition-duration"),document.documentElement.style.removeProperty("--animation-duration"),document.body.classList.remove("reduced-motion"))}setScreenReaderOptimized(c){this.settings.screenReaderOptimized=c,this.applyScreenReaderOptimizations(),this.saveSettings(),this.dispatchSettingsChange()}applyScreenReaderOptimizations(){this.settings.screenReaderOptimized?(document.body.classList.add("screen-reader-optimized"),this.addScreenReaderAnnouncements(),this.improveSemanticStructure()):(document.body.classList.remove("screen-reader-optimized"),this.removeScreenReaderAnnouncements())}setKeyboardNavigation(c){this.settings.keyboardNavigation=c,this.applyKeyboardNavigation(),this.saveSettings(),this.dispatchSettingsChange()}applyKeyboardNavigation(){this.settings.keyboardNavigation?(this.setupKeyboardShortcuts(),this.improveTabOrder()):this.removeKeyboardShortcuts()}setFocusVisible(c){this.settings.focusVisible=c,this.applyFocusVisible(),this.saveSettings(),this.dispatchSettingsChange()}applyFocusVisible(){this.settings.focusVisible?(document.documentElement.style.setProperty("--focus-outline-width","3px"),document.documentElement.style.setProperty("--focus-outline-style","solid"),document.documentElement.style.setProperty("--focus-outline-color","#2196F3")):(document.documentElement.style.removeProperty("--focus-outline-width"),document.documentElement.style.removeProperty("--focus-outline-style"),document.documentElement.style.removeProperty("--focus-outline-color"))}setDyslexiaFont(c){this.settings.dyslexiaFont=c,this.applyDyslexiaFont(),this.saveSettings(),this.dispatchSettingsChange()}applyDyslexiaFont(){this.settings.dyslexiaFont?(document.body.classList.add("dyslexia-font"),document.documentElement.style.setProperty("--font-family-primary",'"OpenDyslexic", "Lexie Readable", Arial, sans-serif')):(document.body.classList.remove("dyslexia-font"),document.documentElement.style.removeProperty("--font-family-primary"))}setLargeTargets(c){this.settings.largeTargets=c,this.applyLargeTargets(),this.saveSettings(),this.dispatchSettingsChange()}applyLargeTargets(){this.settings.largeTargets?(document.documentElement.style.setProperty("--touch-target-min-size","44px"),document.body.classList.add("large-targets")):(document.documentElement.style.removeProperty("--touch-target-min-size"),document.body.classList.remove("large-targets"))}setupEventListeners(){window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{this.applyReducedMotion()}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{this.updateColorScheme()});const r=window.matchMedia("(prefers-contrast: high)");r.addEventListener("change",()=>{r.matches&&this.setHighContrast(!0)})}addScreenReaderAnnouncements(){if(!document.getElementById("accessibility-announcements")){const c=document.createElement("div");c.id="accessibility-announcements",c.setAttribute("aria-live","polite"),c.setAttribute("aria-atomic","true"),c.className="sr-only",document.body.appendChild(c)}}removeScreenReaderAnnouncements(){const c=document.getElementById("accessibility-announcements");c&&c.remove()}announce(c,d="polite"){const r=document.getElementById("accessibility-announcements");r&&(r.setAttribute("aria-live",d),r.textContent=c,setTimeout(()=>{r.textContent=""},1e3))}improveSemanticStructure(){this.ensureLandmarks(),this.ensureHeadingStructure(),this.addAriaLabels()}ensureLandmarks(){[{selector:"header",role:"banner"},{selector:"nav",role:"navigation"},{selector:"main",role:"main"},{selector:"aside",role:"complementary"},{selector:"footer",role:"contentinfo"}].forEach(({selector:d,role:r})=>{document.querySelectorAll(d).forEach(b=>{b.getAttribute("role")||b.setAttribute("role",r)})})}ensureHeadingStructure(){const c=document.querySelectorAll("h1, h2, h3, h4, h5, h6");let d=0;c.forEach(r=>{const f=parseInt(r.tagName.charAt(1));f>d+1&&console.warn("Heading level skipped:",r.textContent),d=f})}addAriaLabels(){document.querySelectorAll("button[title], input[title], a[title]").forEach(d=>{const r=d.getAttribute("title");r&&!d.getAttribute("aria-label")&&d.setAttribute("aria-label",r)})}setupKeyboardShortcuts(){document.addEventListener("keydown",this.handleKeyboardShortcut.bind(this))}removeKeyboardShortcuts(){document.removeEventListener("keydown",this.handleKeyboardShortcut.bind(this))}handleKeyboardShortcut(c){if(c.target.matches("input, textarea, [contenteditable]"))return;const{ctrlKey:d,metaKey:r,altKey:f,shiftKey:b,key:g}=c;(d||r)&&g==="="?(c.preventDefault(),this.setFontSize(this.settings.fontSize+10),this.announce(`Font size increased to ${this.settings.fontSize}%`)):(d||r)&&g==="-"?(c.preventDefault(),this.setFontSize(this.settings.fontSize-10),this.announce(`Font size decreased to ${this.settings.fontSize}%`)):(d||r)&&g==="0"?(c.preventDefault(),this.setFontSize(100),this.announce("Font size reset to 100%")):f&&g==="h"&&(c.preventDefault(),this.setHighContrast(!this.settings.highContrast),this.announce(`High contrast ${this.settings.highContrast?"enabled":"disabled"}`))}improveTabOrder(){document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach((d,r)=>{d.hasAttribute("tabindex")||d.setAttribute("tabindex","0")})}updateColorScheme(){const c=window.matchMedia("(prefers-color-scheme: dark)").matches,d=new CustomEvent("systemColorSchemeChange",{detail:{prefersDark:c}});document.dispatchEvent(d)}validateAccessibility(){const c=[];return this.checkColorContrast(c),this.checkFocusIndicators(c),this.checkAltText(c),this.checkFormLabels(c),{compliant:c.length===0,issues:c}}checkColorContrast(c){this.settings.highContrast&&document.querySelectorAll("p, span, div, h1, h2, h3, h4, h5, h6").forEach(r=>{const f=window.getComputedStyle(r),b=f.color,g=f.backgroundColor;(b===g||g==="rgba(0, 0, 0, 0)")&&c.push({type:"contrast",element:r,message:"Element may have insufficient color contrast"})})}checkFocusIndicators(c){document.querySelectorAll("button, [href], input, select, textarea").forEach(r=>{const b=window.getComputedStyle(r).outline;(b==="none"||b==="")&&c.push({type:"focus",element:r,message:"Element lacks visible focus indicator"})})}checkAltText(c){document.querySelectorAll("img").forEach(r=>{!r.alt&&!r.getAttribute("aria-label")&&c.push({type:"alt-text",element:r,message:"Image missing alt text or aria-label"})})}checkFormLabels(c){document.querySelectorAll("input, select, textarea").forEach(r=>{!(document.querySelector(`label[for="${r.id}"]`)||r.getAttribute("aria-label")||r.getAttribute("aria-labelledby"))&&r.type!=="hidden"&&c.push({type:"form-label",element:r,message:"Form input missing associated label"})})}getSettings(){return{...this.settings}}resetSettings(){this.settings={fontSize:100,highContrast:!1,reducedMotion:!1,screenReaderOptimized:!1,keyboardNavigation:!0,focusVisible:!0,dyslexiaFont:!1,largeTargets:!1},this.applySettings(),this.saveSettings(),this.dispatchSettingsChange(),this.announce("Accessibility settings reset to defaults")}}const vn=new qy,tu={highlightSpecialChars:!1,tabSize:4,indentUnit:2,lineSeparator:"auto",theme:"light",scrollPastEnd:!1,showLintGutter:!1,showLineNumbers:!0,showFoldGutter:!0,showWritingStats:!0,showPlaceholder:!1},Yy=[{value:"auto",label:"Auto (system default)"},{value:`
`,label:"LF (Unix/Linux)"},{value:`\r
`,label:"CRLF (Windows)"}],Am=[{value:"light",label:"Light"},{value:"dark",label:"Dark"}];function Im({isOpen:m,onClose:c,settings:d,onSettingsChange:r}){const f=p.useRef(null);Lu(f,m);const[b,g]=p.useState("general"),[y,k]=p.useState(()=>{const X=d||tu;return{...X,theme:X.theme||"light"}}),[G,B]=p.useState(()=>vn.getSettings()),$=()=>{r(y),Object.entries(G).forEach(([X,S])=>{Q(X,S)}),c()},M=()=>{const X=d||tu;k({...X,theme:X.theme||"light"}),c()},Y=()=>{k(tu),vn.resetSettings(),B(vn.getSettings())},O=(X,S)=>{X==="theme"&&(Am.map(se=>se.value).includes(S)||(S="light")),k(K=>({...K,[X]:S}))},Q=(X,S)=>{const K={...G,[X]:S};switch(B(K),X){case"fontSize":vn.setFontSize(S);break;case"highContrast":vn.setHighContrast(S);break;case"reducedMotion":vn.setReducedMotion(S);break;case"screenReaderOptimized":vn.setScreenReaderOptimized(S);break;case"keyboardNavigation":vn.setKeyboardNavigation(S);break;case"focusVisible":vn.setFocusVisible(S);break;case"dyslexiaFont":vn.setDyslexiaFont(S);break;case"largeTargets":vn.setLargeTargets(S);break}};return s.jsx(Ho,{open:m,onOpenChange:c,children:s.jsx(Bo,{ref:f,className:`settings-dialog-surface ${(y.theme||d?.theme||"light")==="dark"?"dark-theme":"light-theme"}`,children:s.jsxs(Uo,{className:"settings-dialog-body",children:[s.jsx(qo,{children:"Settings"}),s.jsx("div",{className:"settings-fixed-header",children:s.jsxs("div",{className:"custom-tabs",children:[s.jsx("button",{className:`tab-button ${b==="general"?"active":""}`,onClick:()=>g("general"),children:"General"}),s.jsx("button",{className:`tab-button ${b==="accessibility"?"active":""}`,onClick:()=>g("accessibility"),children:"Accessibility"})]})}),s.jsx(Mu,{className:"settings-dialog-scroll-content",children:s.jsxs("div",{className:"settings-tab-content",children:[b==="general"&&s.jsxs("div",{className:"tab-panel",children:[s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Display"}),s.jsx(Ct,{label:"Theme",children:s.jsx("select",{value:y.theme||"light",onChange:X=>O("theme",X.target.value),className:"theme-select",children:Am.map(X=>s.jsx("option",{value:X.value,children:X.label},X.value))})}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Highlight Special Characters"}),s.jsx(on,{checked:y.highlightSpecialChars,onChange:(X,S)=>O("highlightSpecialChars",S.checked),label:"Show whitespace and non-printable characters"})]}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Scroll Past End"}),s.jsx(on,{checked:y.scrollPastEnd,onChange:(X,S)=>O("scrollPastEnd",S.checked),label:"Allow scrolling beyond the last line"})]})]}),s.jsx(Sl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Indentation"}),s.jsx(Ct,{label:"Tab Size",children:s.jsx(ui,{type:"number",min:"1",max:"8",value:y.tabSize,onChange:(X,S)=>O("tabSize",parseInt(S.value)||4)})}),s.jsx(Ct,{label:"Indent Unit",children:s.jsx(ui,{type:"number",min:"1",max:"8",value:y.indentUnit,onChange:(X,S)=>O("indentUnit",parseInt(S.value)||2)})}),s.jsx(Ct,{label:"Line Separator",children:s.jsx("select",{value:y.lineSeparator,onChange:X=>O("lineSeparator",X.target.value),className:"line-separator-select",children:Yy.map(X=>s.jsx("option",{value:X.value,children:X.label},X.value))})})]}),s.jsx(Sl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Editor Features"}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Writing Statistics"}),s.jsx(on,{checked:y.showWritingStats,onChange:(X,S)=>O("showWritingStats",S.checked),label:"Display word count, reading time, and other writing metrics"})]})]}),s.jsx(Sl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Gutters"}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Line Numbers"}),s.jsx(on,{checked:y.showLineNumbers,onChange:(X,S)=>O("showLineNumbers",S.checked),label:"Show line numbers in the gutter"})]}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Fold Gutter"}),s.jsx(on,{checked:y.showFoldGutter,onChange:(X,S)=>O("showFoldGutter",S.checked),label:"Show expand/collapse controls for headings"})]}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Lint Gutter"}),s.jsx(on,{checked:y.showLintGutter,onChange:(X,S)=>O("showLintGutter",S.checked),label:"Show syntax errors and warnings in the gutter"})]}),s.jsxs(Ct,{children:[s.jsx(sn,{children:"Show Placeholder"}),s.jsx(on,{checked:y.showPlaceholder,onChange:(X,S)=>O("showPlaceholder",S.checked),label:"Show placeholder text when editor is empty"})]})]})]}),b==="accessibility"&&s.jsxs("div",{className:"tab-panel",children:[s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Visual"}),s.jsxs("div",{className:"setting-item",children:[s.jsxs("label",{htmlFor:"font-size",children:["Font Size: ",G.fontSize,"%"]}),s.jsx("input",{id:"font-size",type:"range",min:"100",max:"200",step:"10",value:G.fontSize,onChange:X=>Q("fontSize",parseInt(X.target.value)),"aria-describedby":"font-size-description",className:"accessibility-range"}),s.jsx("div",{id:"font-size-description",className:"setting-description",children:"Adjust text size up to 200% for better readability"})]}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"High Contrast Mode"}),s.jsx(on,{checked:G.highContrast,onChange:(X,S)=>Q("highContrast",S.checked),label:"Increase contrast ratios to meet WCAG AAA standards (4.5:1 or better)"})]}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Dyslexia-Friendly Font"}),s.jsx(on,{checked:G.dyslexiaFont,onChange:(X,S)=>Q("dyslexiaFont",S.checked),label:"Use OpenDyslexic font for improved readability"})]})]}),s.jsx(Sl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Motion"}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Reduced Motion"}),s.jsx(on,{checked:G.reducedMotion,onChange:(X,S)=>Q("reducedMotion",S.checked),label:"Minimize animations and transitions for users with vestibular disorders"})]})]}),s.jsx(Sl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Interaction"}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Enhanced Keyboard Navigation"}),s.jsx(on,{checked:G.keyboardNavigation,onChange:(X,S)=>Q("keyboardNavigation",S.checked),label:"Enable keyboard shortcuts and improve tab navigation"})]}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Visible Focus Indicators"}),s.jsx(on,{checked:G.focusVisible,onChange:(X,S)=>Q("focusVisible",S.checked),label:"Show clear 3px focus outlines for keyboard navigation"})]}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Large Touch Targets"}),s.jsx(on,{checked:G.largeTargets,onChange:(X,S)=>Q("largeTargets",S.checked),label:"Ensure all interactive elements are at least 44px for motor accessibility"})]})]}),s.jsx(Sl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Screen Reader"}),s.jsxs(Ct,{className:"setting-item",children:[s.jsx(sn,{children:"Screen Reader Optimizations"}),s.jsx(on,{checked:G.screenReaderOptimized,onChange:(X,S)=>Q("screenReaderOptimized",S.checked),label:"Improve semantic structure and add ARIA labels for screen readers"})]})]}),s.jsx(Sl,{}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"Keyboard Shortcuts"}),s.jsxs("div",{className:"shortcuts-list",children:[s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"+"}),s.jsx("span",{children:"Increase font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"-"}),s.jsx("span",{children:"Decrease font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Ctrl/Cmd"})," + ",s.jsx("kbd",{children:"0"}),s.jsx("span",{children:"Reset font size"})]}),s.jsxs("div",{className:"shortcut-item",children:[s.jsx("kbd",{children:"Alt"})," + ",s.jsx("kbd",{children:"H"}),s.jsx("span",{children:"Toggle high contrast"})]})]})]})]})]})}),s.jsxs(Yo,{children:[s.jsx(Ot,{appearance:"secondary",onClick:Y,children:"Reset to Defaults"}),s.jsx(Ot,{appearance:"secondary",onClick:M,children:"Cancel"}),s.jsx(Ot,{appearance:"primary",onClick:$,children:"Save"})]})]})})})}const Xy=Object.freeze(Object.defineProperty({__proto__:null,default:Im},Symbol.toStringTag,{value:"Module"}));p.lazy(()=>Ht(()=>Promise.resolve().then(()=>$y),void 0));p.lazy(()=>Ht(()=>Promise.resolve().then(()=>Xy),void 0));p.lazy(()=>Ht(()=>Promise.resolve().then(()=>Ry),void 0));p.lazy(()=>Ht(()=>Promise.resolve().then(()=>Fy),void 0));const Gy=p.lazy(()=>Ht(()=>Promise.resolve().then(()=>iv),void 0));p.lazy(()=>Ht(()=>Promise.resolve().then(()=>sv),void 0));const Vy=p.lazy(()=>Ht(()=>Promise.resolve().then(()=>ov),void 0)),Qy=p.lazy(()=>Ht(()=>Promise.resolve().then(()=>dv),void 0)),Zy=p.lazy(()=>Ht(()=>Promise.resolve().then(()=>hv),void 0));p.lazy(()=>Ht(()=>Promise.resolve().then(()=>Uy),void 0));p.lazy(()=>Ht(()=>import("./AccessibilityPanel.BtOR5hMV.js"),__vite__mapDeps([3,1,0,4,5,6])));p.lazy(()=>Ht(()=>Promise.resolve().then(()=>_y),void 0));const Ky=({appMode:m,content:c,editorView:d,fileId:r,visible:f,activeTab:b,onTabChange:g,onUndockPanel:y,dockedPanels:k=["preview","outline","property","history","snippet"],onNavigate:G,onUpdateProperty:B,onRestoreHistory:$,onMoveSection:M,onInsertSnippet:Y,isDarkTheme:O,activeLine:Q=0})=>{const X=p.useRef({ratio:0,pixel:0}),S=p.useRef({tabId:null,startY:0,startTime:0}),K=p.useRef(null),se=p.useRef(null),re=(w,j)=>{const _=w.touches[0];S.current={tabId:j,startY:_.clientY,startTime:Date.now()},K.current&&clearTimeout(K.current),K.current=setTimeout(()=>{y&&S.current.tabId&&(y(S.current.tabId),S.current.tabId=null)},600)},we=w=>{if(!S.current.tabId)return;const _=w.touches[0].clientY-S.current.startY;Math.abs(_)>10&&K.current&&(clearTimeout(K.current),K.current=null),Math.abs(_)>50&&y&&(y(S.current.tabId),S.current.tabId=null,K.current&&(clearTimeout(K.current),K.current=null))},D=()=>{K.current&&(clearTimeout(K.current),K.current=null),S.current.tabId=null};return f?s.jsxs("div",{className:"right-panel-container",children:[m==="edit"&&s.jsx("div",{className:"right-panel-tabs",ref:se,onDragOver:w=>{w.preventDefault(),w.stopPropagation()},onDrop:w=>{w.stopPropagation()},onTouchMove:we,onTouchEnd:D,children:s.jsxs(bb,{selectedValue:b,onTabSelect:(w,j)=>g(j.value),children:[k.includes("preview")&&s.jsx(as,{value:"preview",draggable:!0,onDragStart:w=>{w.dataTransfer.setData("tabId","preview"),w.dataTransfer.effectAllowed="move"},onTouchStart:w=>re(w,"preview"),children:"Preview"}),k.includes("outline")&&s.jsx(as,{value:"outline",draggable:!0,onDragStart:w=>{w.dataTransfer.setData("tabId","outline"),w.dataTransfer.effectAllowed="move"},onTouchStart:w=>re(w,"outline"),children:"Outline"}),k.includes("property")&&s.jsx(as,{value:"property",draggable:!0,onDragStart:w=>{w.dataTransfer.setData("tabId","property"),w.dataTransfer.effectAllowed="move"},onTouchStart:w=>re(w,"property"),children:"Property"}),k.includes("history")&&s.jsx(as,{value:"history",draggable:!0,onDragStart:w=>{w.dataTransfer.setData("tabId","history"),w.dataTransfer.effectAllowed="move"},onTouchStart:w=>re(w,"history"),children:"History"}),k.includes("snippet")&&s.jsx(as,{value:"snippet",draggable:!0,onDragStart:w=>{w.dataTransfer.setData("tabId","snippet"),w.dataTransfer.effectAllowed="move"},onTouchStart:w=>re(w,"snippet"),children:"Snippets"})]})}),s.jsxs("div",{className:"right-panel-content",children:[(k.includes("preview")||m==="view")&&s.jsx("div",{className:`tab-panel ${m==="view"||b==="preview"?"active":""}`,children:s.jsx(cs,{content:c,visible:m==="view"||b==="preview",scrollStateRef:X,onJumpToLine:G,activeLine:Q})}),k.includes("outline")&&s.jsx("div",{className:`tab-panel ${b==="outline"?"active":""}`,children:s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Outline..."}),children:s.jsx(Vy,{content:c,visible:b==="outline",onNavigate:G,onMoveSection:M,inline:!0,activeLine:Q})})}),k.includes("property")&&s.jsx("div",{className:`tab-panel ${b==="property"?"active":""}`,children:s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Properties..."}),children:s.jsx(Qy,{content:c,visible:b==="property",inline:!0,onUpdate:B})})}),k.includes("history")&&s.jsx("div",{className:`tab-panel ${b==="history"?"active":""}`,children:s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading History..."}),children:s.jsx(Zy,{fileId:r,visible:b==="history",inline:!0,onRestore:$})})}),k.includes("snippet")&&s.jsx("div",{className:`tab-panel ${b==="snippet"?"active":""}`,children:s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"loading-fallback",children:"Loading Snippets..."}),children:s.jsx(Gy,{visible:b==="snippet",inline:!0,onInsert:Y,isDarkTheme:O})})})]})]}):null},Pm=({isOpen:m,onClose:c,actions:d,isDark:r})=>{const[f,b]=p.useState(""),[g,y]=p.useState(0),{position:k,setPosition:G}=Tl("command-palette",{x:window.innerWidth/2-250,y:100}),[B,$]=p.useState(!1),M=p.useRef({x:0,y:0}),Y=p.useRef(null),O=p.useRef(null),Q=p.useRef(null),X=p.useMemo(()=>{let w=d.filter(_=>!_.disabled);if(!f)return w;const j=f.toLowerCase();return w.filter(_=>_.label.toLowerCase().includes(j)||_.id.toLowerCase().includes(j))},[d,f]),[S,K]=p.useState(window.innerWidth),se=S<600;p.useEffect(()=>{const w=()=>K(window.innerWidth);return window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),p.useEffect(()=>{m&&(b(""),y(0),setTimeout(()=>Y.current?.focus(),100))},[m]),p.useEffect(()=>{y(0)},[f]);const re=w=>{w.key==="ArrowDown"?(w.preventDefault(),y(j=>(j+1)%X.length)):w.key==="ArrowUp"?(w.preventDefault(),y(j=>(j-1+X.length)%X.length)):w.key==="Enter"?(w.preventDefault(),X[g]&&(X[g].onExecute(),c())):w.key==="Escape"&&c()},we=w=>{se||w.target.closest(".command-palette-close")||w.target.closest(".command-palette-search-wrapper")||w.target.closest(".command-palette-content")||($(!0),M.current={x:w.clientX-k.x,y:w.clientY-k.y},w.preventDefault())},D=w=>{if(se||w.target.closest(".command-palette-close")||w.target.closest(".command-palette-search-wrapper")||w.target.closest(".command-palette-content"))return;const j=w.touches[0];$(!0),M.current={x:j.clientX-k.x,y:j.clientY-k.y}};return p.useEffect(()=>{const w=_=>{if(!B||se)return;const te=_.type==="touchmove"?_.touches[0].clientX:_.clientX,P=_.type==="touchmove"?_.touches[0].clientY:_.clientY,le=te-M.current.x,ie=P-M.current.y;G({x:Math.max(0,Math.min(le,window.innerWidth-100)),y:Math.max(0,Math.min(ie,window.innerHeight-100))})},j=()=>{$(!1)};return B&&(window.addEventListener("mousemove",w),window.addEventListener("mouseup",j),window.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",j),window.addEventListener("touchcancel",j),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",j),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",j),window.removeEventListener("touchcancel",j),document.body.style.userSelect=""}},[B,se]),p.useEffect(()=>{if(!m)return;const w=j=>{if(Q.current&&!Q.current.contains(j.target)){if(j.target.closest('[aria-label="Command Palette"]'))return;c()}};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[m,c]),p.useEffect(()=>{const w=O.current?.querySelector(".command-item.selected");w&&w.scrollIntoView({block:"nearest"})},[g]),m?s.jsx("div",{className:"command-palette-overlay",children:s.jsxs("div",{ref:Q,className:`command-palette-surface ${B?"dragging":""} ${r?"dark-theme":"light-theme"} ${se?"is-mobile":""}`,style:se?{}:{left:`${k.x}px`,top:`${k.y}px`},children:[s.jsxs("div",{className:"command-palette-title-bar",onMouseDown:we,onTouchStart:D,children:[s.jsxs("div",{className:"command-palette-title",children:[s.jsx(yb,{className:"title-icon"}),s.jsx("span",{children:"Command Palette"})]}),s.jsx("button",{className:"command-palette-close",onClick:c,children:s.jsx(rs,{})})]}),s.jsxs("div",{className:"command-palette-search-wrapper",children:[s.jsx(Um,{className:"command-palette-icon"}),s.jsx("input",{ref:Y,className:"command-palette-input",placeholder:"Type a command or search...",value:f,onChange:w=>b(w.target.value),onKeyDown:re})]}),s.jsx("div",{className:"command-palette-content",children:s.jsx("div",{className:"command-list",ref:O,children:X.length>0?X.map((w,j)=>s.jsxs("div",{className:`command-item ${j===g?"selected":""}`,onClick:()=>{w.onExecute(),c()},onMouseEnter:()=>y(j),children:[s.jsx("span",{className:"command-item-icon",children:w.icon}),s.jsx("span",{className:"command-item-label",children:w.label}),w.shortcut&&s.jsx("span",{className:"command-item-shortcut",children:w.shortcut})]},w.id)):s.jsx("div",{className:"command-no-results",children:"No commands found"})})})]})}):null},Fy=Object.freeze(Object.defineProperty({__proto__:null,default:Pm},Symbol.toStringTag,{value:"Module"})),Jy=`# Comprehensive Math Formula Test Suite

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

`,Wy=`# Comprehensive Mermaid Test Suite\r
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
`,ep=(m,c)=>{if(!m)return[];const d=[];return m.split(/\n### |^### /m).slice(1).forEach((f,b)=>{if(!f.trim())return;const g=f.split(`
`),y=g[0].trim();if(!y)return;let k=g.slice(1).join(`
`).trim();if(c==="mermaid"){const G=k.match(/```mermaid[\s\S]*?```/);G&&(k=G[0])}d.push({id:`${c}-file-${b}`,name:y,content:k,type:c})}),d},Iy=ep(Jy,"math"),Py=ep(Wy,"mermaid"),ev=[{id:"alert-note",name:"Note",content:`> [!NOTE]
> Highlights information that users should take into account.`},{id:"alert-tip",name:"Tip",content:`> [!TIP]
> Optional information to help a user be more successful.`},{id:"alert-important",name:"Important",content:`> [!IMPORTANT]
> Crucial information users need to know.`},{id:"alert-warning",name:"Warning",content:`> [!WARNING]
> Critical content demanding immediate user attention.`},{id:"alert-caution",name:"Caution",content:`> [!CAUTION]
> Negative potential consequences of an action.`}].map(m=>({...m,type:"alert"})),tv=[{id:"util-table",name:"Table",content:`| Header 1 | Header 2 |
| :--- | :--- |
| Cell 1 | Cell 2 |`},{id:"util-task",name:"Task List",content:`- [ ] Task 1
- [x] Completed task
- [ ] Task 2`},{id:"util-details",name:"Collapsible",content:`<details>
  <summary>Click to expand</summary>
  
  This is hidden content.
</details>`},{id:"util-footnote",name:"Footnote",content:`Here is a simple footnote[^1].

[^1]: This is the footnote content.`},{id:"util-link",name:"Link (Title)",content:'[Google](https://google.com "Search Engine")'}].map(m=>({...m,type:"utility"})),nv=[{id:"code-py",name:"Python",content:'```python\ndef hello_world():\n    print("Hello, World!")\n```'},{id:"code-js",name:"Javascript",content:'```javascript\nfunction helloWorld() {\n  console.log("Hello, World!");\n}\n```'},{id:"code-css",name:"CSS",content:"```css\n.container {\n  display: flex;\n  justify-content: center;\n}\n```"},{id:"code-html",name:"HTML",content:'```html\n<div class="card">\n  <h1>Title</h1>\n  <p>Description</p>\n</div>\n```'}].map(m=>({...m,type:"code"})),Pa=[...Iy,...Py,...ev,...tv,...nv],av=Xo().use(Go).use(Au).use(Vo).use(Du).use(Qo),lv=Xo().use(Go).use(Cu).use(Vo,{allowDangerousHtml:!0}).use(Qo,{allowDangerousHtml:!0});function Dm({snippet:m,isSelected:c,onSelect:d,isDarkTheme:r,onDoubleClick:f}){const[b,g]=p.useState("");return p.useEffect(()=>{let y=!0;return(async()=>{if(m.type==="math"){const G=av.processSync(m.content);y&&g(String(G))}else if(m.type==="mermaid")try{const{default:G}=await Ht(async()=>{const{default:Y}=await import("./vendor-visual.B_Q0hmov.js").then(O=>O.bC);return{default:Y}},__vite__mapDeps([2,0,1]));G.initialize({startOnLoad:!1,theme:r?"dark":"default",securityLevel:"loose",fontFamily:"inherit"});const B=m.content.replace(/^```mermaid\s*/,"").replace(/\s*```$/,""),$=`mermaid-tile-${m.id.replace(/-/g,"_")}-${Math.random().toString(36).substr(2,9)}`,{svg:M}=await G.render($,B);y&&g(M)}catch(G){console.error("Tile rendering failed:",G),y&&g('<div class="error">Error</div>')}else{let G=m.content;if(m.type==="alert"){const B={note:"ℹ️",tip:"💡",important:"🔔",warning:"⚠️",caution:"⚡"},$=G.match(/\[!(\w+)\]/);if($){const M=$[1].toLowerCase(),Y=B[M]||"ℹ️",O=M.charAt(0).toUpperCase()+M.slice(1);G=G.replace(/> \[!(\w+)\](.*)/,`> **${Y} ${O}**`)}}try{const B=lv.processSync(G);y&&g(String(B))}catch(B){console.error("Markdown rendering failed:",B),y&&g('<div class="error">Error</div>')}}})(),()=>{y=!1}},[m,r]),s.jsxs("div",{className:`snippet-tile snippet-tile-${m.type} ${c?"active":""}`,onClick:d,onDoubleClick:f,children:[s.jsx("div",{className:"tile-preview",dangerouslySetInnerHTML:{__html:b}}),s.jsxs("div",{className:"tile-info",children:[s.jsx("span",{className:"tile-type",children:m.type}),s.jsx("span",{className:"tile-name",children:m.name})]})]})}const tp=p.memo(({visible:m,onClose:c,onDock:d,onInsert:r,isDarkTheme:f,inline:b=!1})=>{const[g,y]=p.useState(0),{position:k,setPosition:G}=Tl("snippet-panel",{x:window.innerWidth-450,y:70}),[B,$]=p.useState(!1),M=p.useRef({x:0,y:0}),Y=p.useRef(null),O=p.useRef(null),Q=typeof window<"u"&&window.innerWidth<=768;Lu(O,m&&!b&&!Q),p.useEffect(()=>{m&&setTimeout(()=>Y.current?.focus(),100)},[m]);const S=D=>{let w=b?2:5;if(Y.current){const _=window.getComputedStyle(Y.current).getPropertyValue("grid-template-columns");_&&(w=_.split(" ").filter(te=>te.length>0).length)}D.key==="ArrowRight"?(D.preventDefault(),y(j=>(j+1)%Pa.length)):D.key==="ArrowLeft"?(D.preventDefault(),y(j=>(j-1+Pa.length)%Pa.length)):D.key==="ArrowDown"?(D.preventDefault(),y(j=>Math.min(Pa.length-1,j+w))):D.key==="ArrowUp"?(D.preventDefault(),y(j=>Math.max(0,j-w))):D.key==="Enter"&&(D.preventDefault(),K())};p.useEffect(()=>{const D=Y.current?.querySelector(".snippet-tile.active");D&&D.scrollIntoView({block:"nearest",behavior:"smooth"})},[g]);const K=()=>{Pa[g]&&r(Pa[g].content)},se=D=>{b||D.target.closest(".snippet-panel-close")||D.target.closest(".snippet-dialog-content")||($(!0),M.current={x:D.clientX-k.x,y:D.clientY-k.y},D.preventDefault())},re=D=>{if(b||D.target.closest(".snippet-panel-close")||D.target.closest(".snippet-dialog-content"))return;const w=D.touches[0];$(!0),M.current={x:w.clientX-k.x,y:w.clientY-k.y}};if(p.useEffect(()=>{const D=j=>{if(!B)return;const _=j.type==="touchmove"?j.touches[0].clientX:j.clientX,te=j.type==="touchmove"?j.touches[0].clientY:j.clientY,P=_-M.current.x,le=te-M.current.y,ie=window.innerWidth-100,Z=window.innerHeight-100;G({x:Math.max(0,Math.min(P,ie)),y:Math.max(0,Math.min(le,Z))})},w=j=>{if(B){$(!1);const _=j.type==="touchend"||j.type==="touchcancel"?j.changedTouches?j.changedTouches[0].clientX:0:j.clientX,te=j.type==="touchend"||j.type==="touchcancel"?j.changedTouches?j.changedTouches[0].clientY:0:j.clientY;document.elementsFromPoint(_,te).some(le=>le.classList.contains("right-panel-tabs"))&&d&&d()}};return B&&(window.addEventListener("mousemove",D),window.addEventListener("mouseup",w),window.addEventListener("touchmove",D,{passive:!1}),window.addEventListener("touchend",w),window.addEventListener("touchcancel",w),document.body.style.userSelect="none",document.body.classList.add("resizing-panel")),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",w),window.removeEventListener("touchmove",D),window.removeEventListener("touchend",w),window.removeEventListener("touchcancel",w),document.body.style.userSelect="",document.body.classList.remove("resizing-panel")}},[B,d]),p.useEffect(()=>{if(!(!m||!(typeof window<"u"&&window.innerWidth<=768)||b))return document.body.classList.add("mobile-panel-open"),()=>document.body.classList.remove("mobile-panel-open")},[m,b]),!m)return null;if(!b&&!Q)return s.jsx(Ho,{open:m,onOpenChange:(D,w)=>!w.open&&c(),children:s.jsx(Bo,{className:`snippet-panel ${f?"dark-theme":"light-theme"}`,children:s.jsxs(Uo,{children:[s.jsx(qo,{children:s.jsx("div",{className:"title-area",style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[s.jsx(ri,{}),s.jsx("span",{children:"Snippets"})]})})}),s.jsx(Mu,{className:"snippet-dialog-content",children:s.jsx("div",{ref:Y,className:"snippet-grid",tabIndex:0,onKeyDown:S,children:Pa.map((D,w)=>s.jsx(Dm,{snippet:D,isSelected:g===w,isDarkTheme:f,onSelect:()=>y(w),onDoubleClick:K},D.id))})}),s.jsxs(Yo,{children:[s.jsx(Ot,{appearance:"secondary",onClick:c,children:"Cancel"}),s.jsx(Ot,{appearance:"primary",onClick:K,children:"Insert"})]})]})})});const we=s.jsxs("div",{className:`snippet-panel-container ${f?"dark-theme":"light-theme"} ${Q?"is-mobile":""} ${b?"inline-mode":""}`,ref:O,style:b?{}:Q?{}:{left:`${k.x}px`,top:`${k.y}px`,right:"auto"},children:[s.jsxs("div",{className:"snippet-panel-header",onMouseDown:b?void 0:se,onTouchStart:b?void 0:re,children:[s.jsxs("div",{className:"title-area",children:[s.jsx(ri,{}),s.jsx("span",{children:"Snippets"})]}),!b&&s.jsx(Ot,{appearance:"subtle",icon:s.jsx(rs,{}),onClick:c,"aria-label":"Close",className:"snippet-dialog-close"})]}),s.jsx("div",{className:"snippet-dialog-content",children:s.jsx("div",{ref:Y,className:"snippet-grid",tabIndex:0,onKeyDown:S,children:Pa.map((D,w)=>s.jsx(Dm,{snippet:D,isSelected:g===w,isDarkTheme:f,onSelect:()=>y(w),onDoubleClick:K},D.id))})}),s.jsx("div",{className:"snippet-panel-footer",children:s.jsx(Ot,{appearance:"primary",onClick:K,children:"Insert"})})]});return Q&&!b?qm.createPortal(we,document.body):we}),iv=Object.freeze(Object.defineProperty({__proto__:null,default:tp},Symbol.toStringTag,{value:"Module"})),zm=`# Markdown Syntax Reference Guide

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
`,np=({isVisible:m,onClose:c,isDarkTheme:d})=>{const[r,f]=p.useState(""),{position:b,setPosition:g,size:y,setSize:k}=Tl("markdown-help-window",{x:100,y:100},{width:500,height:600}),[G,B]=p.useState({width:window.innerWidth,height:window.innerHeight}),$=G.width<600,[M,Y]=p.useState(!1),[O,Q]=p.useState(!1),[X,S]=p.useState({x:0,y:0}),[K,se]=p.useState({x:0,y:0,width:0,height:0}),re=p.useRef(null);p.useEffect(()=>{m&&f("")},[m]),p.useEffect(()=>{const j=()=>{B({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const we=j=>{$||(j.target.closest(".help-window-header")?(Y(!0),S({x:j.clientX-b.x,y:j.clientY-b.y}),j.preventDefault()):j.target.closest(".help-window-resize-handle")&&(Q(!0),se({x:j.clientX,y:j.clientY,width:y.width,height:y.height}),j.preventDefault()))},D=j=>{if($)return;const _=j.touches[0];j.target.closest(".help-window-header")?(Y(!0),S({x:_.clientX-b.x,y:_.clientY-b.y})):j.target.closest(".help-window-resize-handle")&&(Q(!0),se({x:_.clientX,y:_.clientY,width:y.width,height:y.height}))};p.useEffect(()=>{const j=te=>{const P=te.type==="touchmove"?te.touches[0].clientX:te.clientX,le=te.type==="touchmove"?te.touches[0].clientY:te.clientY;if(M){const ie=P-X.x,Z=le-X.y,W=window.innerWidth-100,L=window.innerHeight-100;g({x:Math.max(0,Math.min(ie,W)),y:Math.max(0,Math.min(Z,L))})}else if(O){const ie=P-K.x,Z=le-K.y,W=Math.max(300,K.width+ie),L=Math.max(200,K.height+Z);k({width:Math.min(W,window.innerWidth-b.x-20),height:Math.min(L,window.innerHeight-b.y-20)})}},_=()=>{Y(!1),Q(!1)};if(M||O)return document.addEventListener("mousemove",j),document.addEventListener("mouseup",_),document.addEventListener("touchmove",j,{passive:!1}),document.addEventListener("touchend",_),document.addEventListener("touchcancel",_),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",j),document.removeEventListener("touchend",_),document.removeEventListener("touchcancel",_)}},[M,O,X,K,b]);const w=p.useMemo(()=>{if(!r.trim())return zm;const j=zm.split(/\n(?=## )/),_=r.toLowerCase(),te=j.filter((P,le)=>le===0&&!P.toLowerCase().includes(_)?!1:P.toLowerCase().includes(_));return te.length===0?`## No results found
Try a different search term.`:te.join(`

`)},[r]);return m?s.jsxs("div",{ref:re,onMouseDown:we,onTouchStart:D,className:`help-window-container ${$?"is-mobile":""}`,style:$?{}:{left:b.x,top:b.y,width:`${y.width}px`,height:`${y.height}px`},children:[s.jsxs("div",{className:"help-window-header",style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke1)",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:$?"default":M?"grabbing":"grab",backgroundColor:"var(--color-neutral-background2)",userSelect:"none"},children:[s.jsxs("span",{style:{fontWeight:600,fontSize:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[s.jsx(vb,{})," Markdown Syntax Help"]}),s.jsx(Ot,{appearance:"subtle",icon:s.jsx(rs,{}),onClick:c,size:"small"})]}),s.jsx("div",{style:{padding:"12px",borderBottom:"1px solid var(--color-neutral-stroke1)",backgroundColor:"var(--color-neutral-background1)"},children:s.jsx(ui,{contentBefore:s.jsx(Um,{}),placeholder:"Search syntax (e.g., 'table', 'bold', 'image')...",value:r,onChange:(j,_)=>f(_.value),style:{width:"100%"}})}),s.jsx("div",{style:{flex:1,overflow:"auto",padding:"16px",backgroundColor:"var(--color-neutral-background1)"},children:s.jsx("div",{className:"help-preview-container",children:s.jsx(cs,{content:w,visible:!0,inline:!0})})}),s.jsx("div",{className:"help-window-resize-handle",style:{position:"absolute",bottom:0,right:0,width:"20px",height:"20px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, var(--color-neutral-stroke1) 50%)",borderRadius:"0 0 8px 0"}})]}):null},sv=Object.freeze(Object.defineProperty({__proto__:null,default:np},Symbol.toStringTag,{value:"Module"})),ap=p.memo(({content:m,visible:c,onClose:d,onDock:r,onNavigate:f,onMoveSection:b,inline:g=!1,activeLine:y=0})=>{const{position:k,setPosition:G}=Tl("outline-panel",{x:window.innerWidth-300,y:70}),[B,$]=p.useState(!1),[M,Y]=p.useState(null),O=p.useRef({x:0,y:0}),Q=p.useRef(null),X=p.useMemo(()=>m?m.split(`
`).map((W,L)=>{const ve=W.trim().match(/^(#{1,6})\s+(.*)$/);return ve?{level:ve[1].length,text:ve[2].trim(),line:L+1}:null}).filter(Boolean):[],[m]),S=p.useMemo(()=>{if(!X.length||y<=0)return-1;let Z=-1;for(let W=0;W<X.length&&X[W].line<=y;W++)Z=W;return Z},[X,y]),K=p.useRef(null);p.useEffect(()=>{K.current&&K.current.scrollIntoView({behavior:"smooth",block:"nearest"})},[S]);const se=Z=>{g||Z.target.closest(".outline-close")||Z.target.closest(".outline-content")||($(!0),O.current={x:Z.clientX-k.x,y:Z.clientY-k.y},Z.preventDefault())},re=Z=>{if(g||Z.target.closest(".outline-close")||Z.target.closest(".outline-content"))return;const W=Z.touches[0];$(!0),O.current={x:W.clientX-k.x,y:W.clientY-k.y}};p.useEffect(()=>{const Z=L=>{if(!B)return;const I=L.type==="touchmove"?L.touches[0].clientX:L.clientX,ve=L.type==="touchmove"?L.touches[0].clientY:L.clientY,Be=I-O.current.x,J=ve-O.current.y,fe=window.innerWidth-50,Se=window.innerHeight-50;G({x:Math.max(0,Math.min(Be,fe)),y:Math.max(0,Math.min(J,Se))})},W=L=>{if(B){$(!1);const I=L.type==="touchend"||L.type==="touchcancel"?L.changedTouches?L.changedTouches[0].clientX:0:L.clientX,ve=L.type==="touchend"||L.type==="touchcancel"?L.changedTouches?L.changedTouches[0].clientY:0:L.clientY;document.elementsFromPoint(I,ve).some(J=>J.classList.contains("right-panel-tabs"))&&r&&r()}};return B&&(window.addEventListener("mousemove",Z),window.addEventListener("mouseup",W),window.addEventListener("touchmove",Z,{passive:!1}),window.addEventListener("touchend",W),window.addEventListener("touchcancel",W),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",W),window.removeEventListener("touchmove",Z),window.removeEventListener("touchend",W),window.removeEventListener("touchcancel",W),document.body.style.userSelect=""}},[B,r]);const we=(Z,W)=>{Y(W),Z.dataTransfer.effectAllowed="move",Z.currentTarget.classList.add("is-being-dragged")},D=Z=>{Y(null),Z.currentTarget.classList.remove("is-being-dragged")},w=(Z,W)=>{Z.preventDefault(),!(M===null||M===W)&&Z.currentTarget.classList.add("drag-over")},j=Z=>{Z.currentTarget.classList.remove("drag-over")},_=(Z,W)=>{if(Z.preventDefault(),Z.currentTarget.classList.remove("drag-over"),M===null||M===W)return;const L=X[M],I=X[W];b&&L&&I&&b(L.line,I.line)},te=p.useRef({startIndex:null,currentIndex:null,lastY:0,startTime:0}),P=(Z,W)=>{const L=Z.touches[0];te.current={startIndex:W,currentIndex:W,lastY:L.clientY,startTime:Date.now()}},le=Z=>{if(te.current.startIndex===null)return;const W=Z.touches[0],L=Math.abs(W.clientY-te.current.lastY);if(M===null&&(L>10||Date.now()-te.current.startTime>200)&&(Y(te.current.startIndex),Z.cancelable&&Z.preventDefault()),M!==null){Z.cancelable&&Z.preventDefault();const ve=document.elementFromPoint(W.clientX,W.clientY)?.closest(".outline-item");if(ve){const Be=Array.from(Q.current.querySelectorAll(".outline-item")),J=Be.indexOf(ve);J!==-1&&J!==te.current.currentIndex&&(Be.forEach(fe=>fe.classList.remove("drag-over")),ve.classList.add("drag-over"),te.current.currentIndex=J)}}},ie=Z=>{if(M!==null){const W=te.current.currentIndex;if(W!==null&&W!==M){const L=X[M],I=X[W];b&&L&&I&&b(L.line,I.line)}}Y(null),te.current={startIndex:null,currentIndex:null,lastY:0,startTime:0},Q.current?.querySelectorAll(".outline-item").forEach(W=>W.classList.remove("drag-over"))};return c?s.jsxs("div",{className:`outline-view ${B?"dragging":""} ${g?"inline-mode":""}`,style:g?{}:{left:`${k.x}px`,top:`${k.y}px`,right:"auto"},ref:Q,children:[s.jsxs("div",{className:"outline-header",onMouseDown:g?void 0:se,onTouchStart:g?void 0:re,children:[s.jsx("h3",{children:"Outline"}),s.jsx("span",{className:"outline-hint",children:"Drag to rearrange"}),!g&&s.jsx("button",{className:"outline-close",onClick:d,children:"×"})]}),s.jsx("div",{className:"outline-content",children:X.length>0?s.jsx("ul",{className:"outline-list",children:X.map((Z,W)=>s.jsxs("li",{className:`outline-item level-${Z.level} ${W===S?"active":""}`,onClick:()=>f(Z.line),ref:W===S?K:null,draggable:!0,onDragStart:L=>we(L,W),onDragEnd:D,onDragOver:L=>w(L,W),onDragLeave:j,onDrop:L=>_(L,W),onTouchStart:L=>P(L,W),onTouchMove:le,onTouchEnd:ie,title:"Drag to rearrange document section",children:[s.jsxs("span",{className:"outline-level",children:["H",Z.level]}),s.jsx("span",{className:"outline-text",children:Z.text})]},`${W}-${Z.line}`))}):s.jsx("p",{className:"outline-empty",children:"No headings found."})})]}):null}),ov=Object.freeze(Object.defineProperty({__proto__:null,default:ap},Symbol.toStringTag,{value:"Module"})),cv=m=>{if(!m)return null;const c=m.match(/^(---\r?\n([\s\S]*?)\r?\n---|\+\+\+\r?\n([\s\S]*?)\r?\n\+\+\+)\r?\n/);if(!c)return null;const d=c[2]||c[3];try{const r=Zm.load(d);return r&&typeof r=="object"&&Object.keys(r).length>0?r:null}catch(r){return console.error("YAML parsing error:",r),null}},rv=m=>{if(!m||Object.keys(m).length===0)return"";try{return`---
${Zm.dump(m)}---
`}catch(c){return console.error("YAML stringify error:",c),""}},uv=(m,c)=>{const d=/^(---\r?\n[\s\S]*?\r?\n---|\+\+\+\r?\n[\s\S]*?\r?\n\+\+\+)\r?\n?/,r=rv(c);return m.match(d)?m.replace(d,r):r?`${r}${m}`:m},lp=({content:m,visible:c,onClose:d,onUpdate:r,onDock:f,inline:b=!1})=>{const{position:g,setPosition:y}=Tl("metadata-panel",{x:window.innerWidth-340,y:70}),[k,G]=p.useState(!1),B=p.useRef({x:0,y:0}),$=p.useRef(null),M=p.useMemo(()=>cv(m)||{},[m]),[Y,O]=p.useState(M);p.useEffect(()=>{O(M)},[M]);const Q=(w,j)=>{const _={...Y,[w]:j};O(_),r&&r(_)},X=w=>{const j={...Y};delete j[w],O(j),r&&r(j)},S=()=>{const w=`key_${Object.keys(Y).length+1}`;Q(w,"value")},K=w=>{b||w.target.closest(".metadata-close")||w.target.closest(".metadata-content")||(G(!0),B.current={x:w.clientX-g.x,y:w.clientY-g.y},w.preventDefault())},se=w=>{if(b||w.target.closest(".metadata-close")||w.target.closest(".metadata-content"))return;const j=w.touches[0];G(!0),B.current={x:j.clientX-g.x,y:j.clientY-g.y}};if(p.useEffect(()=>{const w=_=>{if(!k)return;const te=_.type==="touchmove"?_.touches[0].clientX:_.clientX,P=_.type==="touchmove"?_.touches[0].clientY:_.clientY,le=te-B.current.x,ie=P-B.current.y,Z=window.innerWidth-50,W=window.innerHeight-50;y({x:Math.max(0,Math.min(le,Z)),y:Math.max(0,Math.min(ie,W))})},j=_=>{if(k){G(!1);const te=_.type==="touchend"||_.type==="touchcancel"?_.changedTouches?_.changedTouches[0].clientX:0:_.clientX,P=_.type==="touchend"||_.type==="touchcancel"?_.changedTouches?_.changedTouches[0].clientY:0:_.clientY;document.elementsFromPoint(te,P).some(ie=>ie.classList.contains("right-panel-tabs"))&&f&&f()}};return k&&(window.addEventListener("mousemove",w),window.addEventListener("mouseup",j),window.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",j),window.addEventListener("touchcancel",j),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",j),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",j),window.removeEventListener("touchcancel",j),document.body.style.userSelect=""}},[k,f]),p.useEffect(()=>{if(!(!c||!(typeof window<"u"&&window.innerWidth<=768)||b))return document.body.classList.add("mobile-panel-open"),()=>document.body.classList.remove("mobile-panel-open")},[c,b]),!c)return null;const re=typeof window<"u"&&window.innerWidth<=768,we=typeof document<"u"&&document.querySelector(".dark-theme")!==null,D=s.jsxs("div",{className:`metadata-panel ${k?"dragging":""} ${b?"inline-mode":""} ${re&&!b?"is-mobile":""} ${we?"dark-theme-panel":""}`,style:b?{}:re?{}:{left:`${g.x}px`,top:`${g.y}px`,right:"auto"},ref:$,children:[s.jsxs("div",{className:"metadata-header",onMouseDown:b?void 0:K,onTouchStart:b?void 0:se,children:[s.jsx("h3",{children:"Document Property"}),s.jsxs("div",{className:"metadata-header-actions",children:[!re&&s.jsx(Ot,{icon:s.jsx(wm,{}),appearance:"subtle",size:"small",onClick:S,title:"Add property key"}),!b&&s.jsx("button",{className:"metadata-close",onClick:d,children:"×"})]})]}),s.jsx("div",{className:"metadata-content",children:Object.keys(Y).length>0?s.jsxs("table",{className:"metadata-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Key"}),s.jsx("th",{children:"Value"}),s.jsx("th",{style:{width:"32px"}})]})}),s.jsx("tbody",{children:Object.entries(Y).map(([w,j])=>s.jsxs("tr",{children:[s.jsx("td",{className:"metadata-key",children:s.jsx(ui,{value:w,appearance:"underline",fluid:!0,onChange:(_,te)=>{const P={...Y};delete P[w],P[te.value]=j,O(P),r&&r(P)}})}),s.jsx("td",{className:"metadata-value",children:s.jsx(ui,{value:String(j),appearance:"underline",fluid:!0,onChange:(_,te)=>Q(w,te.value)})}),s.jsx("td",{children:s.jsx(Ot,{icon:s.jsx(Ym,{}),appearance:"subtle",size:"small",onClick:()=>X(w)})})]},w))})]}):s.jsx("div",{className:"metadata-empty",children:s.jsx("p",{children:"No property found."})})}),re&&!b&&s.jsx("div",{className:"metadata-footer",children:s.jsx(Ot,{icon:s.jsx(wm,{}),appearance:"primary",onClick:S,children:"Add Property"})})]});return re&&!b?qm.createPortal(D,document.body):D},dv=Object.freeze(Object.defineProperty({__proto__:null,default:lp},Symbol.toStringTag,{value:"Module"}));class fv{constructor(){this.dbName="MarkdownStudio_History",this.storeName="snapshots",this.db=null,this.initDB()}async initDB(){return new Promise((c,d)=>{const r=indexedDB.open(this.dbName,1);r.onerror=()=>d(r.error),r.onsuccess=()=>{this.db=r.result,c(this.db)},r.onupgradeneeded=f=>{const b=f.target.result;if(!b.objectStoreNames.contains(this.storeName)){const g=b.createObjectStore(this.storeName,{keyPath:"id"});g.createIndex("fileId","fileId",{unique:!1}),g.createIndex("timestamp","timestamp",{unique:!1})}}})}async ensureDB(){return this.db||await this.initDB(),this.db}async createSnapshot(c,d){if(!c||d===void 0)return;const r=await this.ensureDB(),f={id:Do(),fileId:c,content:d,timestamp:Date.now()};return new Promise((b,g)=>{const G=r.transaction([this.storeName],"readwrite").objectStore(this.storeName).add(f);G.onsuccess=()=>b(f),G.onerror=()=>g(G.error)})}async getSnapshots(c){const d=await this.ensureDB();return new Promise((r,f)=>{const k=d.transaction([this.storeName],"readonly").objectStore(this.storeName).index("fileId").getAll(IDBKeyRange.only(c));k.onsuccess=()=>{const G=k.result.sort((B,$)=>$.timestamp-B.timestamp);r(G)},k.onerror=()=>f(k.error)})}async deleteSnapshot(c){const d=await this.ensureDB();return new Promise((r,f)=>{const y=d.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(c);y.onsuccess=()=>r(),y.onerror=()=>f(y.error)})}async clearHistory(c){const d=await this.ensureDB(),r=await this.getSnapshots(c),b=d.transaction([this.storeName],"readwrite").objectStore(this.storeName);r.forEach(g=>b.delete(g.id))}}const Oo=new fv,ip=({fileId:m,onRestore:c,visible:d,onClose:r,onDock:f,inline:b=!1})=>{const[g,y]=p.useState([]),[k,G]=p.useState(!1),{position:B,setPosition:$}=Tl("history-panel",{x:window.innerWidth-300,y:70}),[M,Y]=p.useState(!1),O=p.useRef({x:0,y:0}),Q=p.useRef(null);p.useEffect(()=>{d&&m&&K()},[d,m]);const X=D=>{b||D.target.closest(".history-close")||D.target.closest(".history-list-container")||(Y(!0),O.current={x:D.clientX-B.x,y:D.clientY-B.y},D.preventDefault())},S=D=>{if(b||D.target.closest(".history-close")||D.target.closest(".history-list-container"))return;const w=D.touches[0];Y(!0),O.current={x:w.clientX-B.x,y:w.clientY-B.y}};p.useEffect(()=>{const D=j=>{if(!M)return;const _=j.type==="touchmove"?j.touches[0].clientX:j.clientX,te=j.type==="touchmove"?j.touches[0].clientY:j.clientY,P=_-O.current.x,le=te-O.current.y,ie=window.innerWidth-50,Z=window.innerHeight-50;$({x:Math.max(0,Math.min(P,ie)),y:Math.max(0,Math.min(le,Z))})},w=j=>{if(M){Y(!1);const _=j.type==="touchend"||j.type==="touchcancel"?j.changedTouches?j.changedTouches[0].clientX:0:j.clientX,te=j.type==="touchend"||j.type==="touchcancel"?j.changedTouches?j.changedTouches[0].clientY:0:j.clientY;document.elementsFromPoint(_,te).some(le=>le.classList.contains("right-panel-tabs"))&&f&&f()}};return M&&(window.addEventListener("mousemove",D),window.addEventListener("mouseup",w),window.addEventListener("touchmove",D,{passive:!1}),window.addEventListener("touchend",w),window.addEventListener("touchcancel",w),document.body.style.userSelect="none"),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",w),window.removeEventListener("touchmove",D),window.removeEventListener("touchend",w),window.removeEventListener("touchcancel",w),document.body.style.userSelect=""}},[M,f]);const K=async()=>{G(!0);try{const D=await Oo.getSnapshots(m);y(D)}catch(D){console.error("Failed to load snapshots:",D)}finally{G(!1)}},se=D=>{window.confirm(`Restore this version from ${new Date(D.timestamp).toLocaleString()}? Current unsaved changes will be lost.`)&&c(D.content)},re=async(D,w)=>{w.stopPropagation();try{await Oo.deleteSnapshot(D),y(j=>j.filter(_=>_.id!==D))}catch(j){console.error("Failed to delete snapshot:",j)}},we=D=>{const w=new Date(D),_=new Date-w;return _<6e4?"Just now":_<36e5?`${Math.floor(_/6e4)}m ago`:_<864e5?`${Math.floor(_/36e5)}h ago`:w.toLocaleDateString()+" "+w.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return d?s.jsxs("div",{className:`history-panel ${M?"dragging":""} ${b?"inline-mode":""}`,style:b?{}:{left:`${B.x}px`,top:`${B.y}px`,right:"auto"},ref:Q,children:[s.jsxs("div",{className:"history-header",onMouseDown:b?void 0:X,onTouchStart:b?void 0:S,children:[s.jsxs("div",{className:"history-header-title",children:[s.jsx(Ro,{}),s.jsx("span",{children:"Version History"}),s.jsx(xb,{appearance:"outline",color:"brand",children:g.length})]}),!b&&s.jsx("button",{className:"history-close",onClick:r,children:"×"})]}),s.jsx("div",{className:"history-list-container",children:k?s.jsx("div",{className:"history-status",children:"Loading history..."}):g.length===0?s.jsx("div",{className:"history-empty",children:" No historical snapshots yet. "}):s.jsx("div",{className:"history-list",children:g.map(D=>s.jsxs("div",{className:"history-item",onClick:()=>se(D),children:[s.jsxs("div",{className:"history-item-info",children:[s.jsx("span",{className:"history-time",children:we(D.timestamp)}),s.jsxs("span",{className:"history-preview",children:[D.content.substring(0,50).replace(/\n/g," "),"..."]})]}),s.jsxs("div",{className:"history-item-actions",children:[s.jsx(me,{content:"Restore this version",relationship:"label",children:s.jsx(Ot,{size:"small",icon:s.jsx(os,{}),onClick:w=>{w.stopPropagation(),se(D)},appearance:"subtle"})}),s.jsx(me,{content:"Delete snapshot",relationship:"label",children:s.jsx(Ot,{size:"small",icon:s.jsx(Ym,{}),onClick:w=>re(D.id,w),appearance:"subtle"})})]})]},D.id))})}),s.jsx("div",{className:"history-footer",children:s.jsx(Ot,{size:"small",onClick:K,children:"Refresh History"})})]}):null},hv=Object.freeze(Object.defineProperty({__proto__:null,default:ip},Symbol.toStringTag,{value:"Module"}));class mv{constructor(){this.isDevelopment=!1,this.levels={error:0,warn:1,info:2,debug:3},this.currentLevel=this.isDevelopment?this.levels.debug:this.levels.error}error(c,...d){this.currentLevel>=this.levels.error&&console.error(`[ERROR] ${c}`,...d)}warn(c,...d){this.currentLevel>=this.levels.warn&&console.warn(`[WARN] ${c}`,...d)}info(c,...d){this.currentLevel>=this.levels.info&&console.info(`[INFO] ${c}`,...d)}debug(c,...d){this.currentLevel>=this.levels.debug&&console.log(`[DEBUG] ${c}`,...d)}log(c,...d){this.debug(c,...d)}component(c,d,...r){this.debug(`[${c}] ${d}`,...r)}service(c,d,...r){this.debug(`[${c}] ${d}`,...r)}}const ga=new mv;function pv(){const m=p.useRef(null),c=p.useRef(!1),d=p.useCallback(g=>{g&&(m.current=g,ga.component("FocusManager","Editor view registered:",!!g))},[]),r=p.useCallback(()=>{c.current=!0,ga.component("FocusManager","Preparing for focus restoration")},[]),f=p.useCallback((g=!1)=>{if(ga.component("FocusManager","restoreFocus called, editorView:",!!m.current,"shouldRestore:",c.current,"force:",g),!c.current&&!g)return ga.component("FocusManager","Not restoring - not prepared"),!1;try{if(m.current&&m.current.focus)return ga.component("FocusManager","Using CodeMirror view.focus()"),m.current.focus(),c.current=!1,!0;const y=document.querySelector(".cm-content");return y?(ga.component("FocusManager","Using fallback - focusing .cm-content"),y.focus(),c.current=!1,!0):m.current&&m.current.dom?(ga.component("FocusManager","Using fallback - focusing editor.dom"),m.current.dom.focus(),c.current=!1,!0):(ga.component("FocusManager","No focusable element found"),!1)}catch(y){return ga.warn("Failed to restore focus:",y),!1}},[]),b=p.useCallback((g,y=!0)=>(...k)=>{y&&r();const G=g(...k);return y&&setTimeout(()=>f(),100),G},[r,f]);return p.useEffect(()=>()=>{c.current=!1},[]),{registerEditor:d,restoreFocus:f,prepareFocusLoss:r,withFocusRestore:b}}var gv=Wb();const bv=ku(gv);class yv{constructor(){this.db=null,this.isInitialized=!1}async initialize(){if(!this.isInitialized)try{const c=await bv({locateFile:r=>r.endsWith(".wasm")?"/mdstudio/sql-wasm.wasm":r}),d=localStorage.getItem("markdownstudio_db");if(d){const r=new Uint8Array(JSON.parse(d));this.db=new c.Database(r)}else this.db=new c.Database,this.createTables();this.isInitialized=!0}catch(c){throw console.error("Failed to initialize database:",c),c}}createTables(){const c=`
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
    `;this.db.run(c),this.db.run(d)}async saveFile(c){await this.initialize();const d=this.db.prepare(`
      INSERT OR REPLACE INTO files (id, name, content, created_at, modified_at, tags, metadata)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);d.run([c.id,c.name,c.content||"",c.createdAt||new Date().toISOString(),c.modifiedAt||new Date().toISOString(),JSON.stringify(c.tags||[]),JSON.stringify(c.metadata||{})]),d.free(),this.updateSearchIndex(c),this.saveToLocalStorage()}async getFile(c){await this.initialize();const d=this.db.prepare("SELECT * FROM files WHERE id = ?"),r=d.get(c);return d.free(),r?{id:r.id,name:r.name,content:r.content,createdAt:r.created_at,modifiedAt:r.modified_at,tags:JSON.parse(r.tags||"[]"),metadata:JSON.parse(r.metadata||"{}")}:null}async getAllFiles(){await this.initialize();const c=this.db.prepare("SELECT * FROM files ORDER BY modified_at DESC"),d=c.getAsObject([]);return c.free(),d.map(r=>({id:r.id,name:r.name,content:r.content,createdAt:r.created_at,modifiedAt:r.modified_at,tags:JSON.parse(r.tags||"[]"),metadata:JSON.parse(r.metadata||"{}")}))}async deleteFile(c){await this.initialize();const d=this.db.prepare("DELETE FROM files WHERE id = ?");d.run(c),d.free(),this.saveToLocalStorage()}async searchFiles(c,d={}){await this.initialize();let r="SELECT * FROM files_fts WHERE files_fts MATCH ?";const f=[c];d.tags&&d.tags.length>0&&(r+=" AND tags LIKE ?",f.push(`%${d.tags[0]}%`));const b=this.db.prepare(r),g=b.getAsObject(f);return b.free(),g.map(y=>({id:y.id,name:y.name,content:y.content,tags:JSON.parse(y.tags||"[]"),rank:y.rank}))}updateSearchIndex(c){Ht(()=>import("./SearchService.D1nxONAv.js"),__vite__mapDeps([7,1,4])).then(d=>{const r=d.default;r.isInitialized?r.addDocument(c):r.initialize([c])})}saveToLocalStorage(){const c=this.db.export();localStorage.setItem("markdownstudio_db",JSON.stringify(Array.from(c)))}async extractLinks(c){const d=/\[\[([^\]|]+)(?:\|([^\]]+))?(?:#([^\]]+))?\]\]/g,r=[];let f;for(;(f=d.exec(c))!==null;)r.push({text:f[0],target:f[1],displayText:f[2]||f[1],heading:f[3]||null,type:"wikilink"});return r}async updateLinks(c,d){await this.initialize(),this.db.run("DELETE FROM links WHERE source_file_id = ?",[c]);const r=await this.extractLinks(d),f=this.db.prepare(`
      INSERT INTO links (source_file_id, target_file_id, link_text, link_type)
      VALUES (?, ?, ?, ?)
    `);for(const b of r)f.run([c,b.target,b.text,b.type]);f.free()}async close(){this.db&&(this.saveToLocalStorage(),this.db.close(),this.db=null,this.isInitialized=!1)}}const vv=new yv,In={getSectionRange:(m,c)=>{const d=m.split(`
`),r=c-1;let f=-1,b=7;for(let y=r;y>=0;y--){const k=d[y].match(/^(#{1,6})\s+/);if(k){f=y,b=k[1].length;break}}if(f===-1){let y=d.findIndex(k=>k.match(/^#{1,6}\s+/));return{start:1,end:y===-1?d.length:y,level:0}}let g=-1;for(let y=f+1;y<d.length;y++){const k=d[y].match(/^(#{1,6})\s+/);if(k&&k[1].length<=b){g=y;break}}return{start:f+1,end:g===-1?d.length:g,level:b}},moveSection:(m,c,d,r)=>{const f=m.split(`
`),b=f.slice(c-1,d),g=[...f.slice(0,c-1),...f.slice(d)];let y=r;return r>d?y-=b.length:r>c&&(y=c),[...g.slice(0,y-1),...b,...g.slice(y-1)].join(`
`)},findBlockRanges:(m,c)=>{const d=m.split(`
`),r=[];return d.forEach((f,b)=>{let g=!1;c==="headings"&&f.match(/^#{1,6}\s+/)&&(g=!0),c==="list-items"&&f.match(/^\s*([-*+]|\d+\.)\s+/)&&(g=!0),c==="code-blocks"&&f.match(/^```/)&&(g=!0),g&&r.push({line:b+1,content:f})}),r}};var xv=Ib(),wv=Pb();const Sv=ku(wv);ty.workerSrc=`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ey}/pdf.worker.min.js`;class Ev{constructor(){this.turndownService=null,this.turndownPromise=null}async getTurndownService(){return this.turndownService?this.turndownService:(this.turndownPromise||(this.turndownPromise=Ht(()=>import("./vendor-processing.CmTeLQxv.js").then(c=>c.ac),__vite__mapDeps([0,1])).then(c=>{const d=c.default;return this.turndownService=new d({headingStyle:"atx",codeBlockStyle:"fenced",hr:"---",bulletListMarker:"-",emDelimiter:"*",strongDelimiter:"**"}),this.turndownService.addRule("strikethrough",{filter:["del","s","strike"],replacement:r=>`~~${r}~~`}),this.turndownService})),this.turndownPromise)}async convertWordToMarkdown(c){try{const d=await c.arrayBuffer(),f=(await xv.convertToHtml({arrayBuffer:d})).value;return(await this.getTurndownService()).turndown(f)}catch(d){throw console.error("Error converting Word to Markdown:",d),new Error("Failed to convert Word document. Ensure it is a valid .docx file.")}}async convertPdfToMarkdown(c){try{const d=await c.arrayBuffer(),f=await ny({data:d}).promise;let b="";for(let g=1;g<=f.numPages;g++){const k=await(await f.getPage(g)).getTextContent();let G,B="";for(const $ of k.items)G!==void 0&&Math.abs($.transform[5]-G)>5&&(B+=`  
`),B+=$.str,G=$.transform[5];b+=B+`

---

`}return b.trim()}catch(d){throw console.error("Error converting PDF to Markdown:",d),new Error("Failed to extract text from PDF.")}}async isBinaryFile(c){const r=await c.slice(0,4096).arrayBuffer(),f=new Uint8Array(r);for(let b=0;b<f.length;b++)if(f[b]===0)return!0;return!1}async convertPptxToMarkdown(c){try{const d=await c.arrayBuffer(),r=await zo.loadAsync(d),f=[];r.folder("ppt/slides").forEach((g,y)=>{g.match(/^slide\d+\.xml$/)&&f.push(y)}),f.sort((g,y)=>{const k=parseInt(g.name.match(/slide(\d+)\.xml$/)[1],10),G=parseInt(y.name.match(/slide(\d+)\.xml$/)[1],10);return k-G});let b="";for(let g=0;g<f.length;g++){const G=((await f[g].async("string")).match(/<a:t.*?>(.*?)<\/a:t>/g)||[]).map(B=>B.replace(/<.*?>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'")).join(" ").trim();G?b+=`## Slide ${g+1}

${G}

---

`:b+=`## Slide ${g+1}

*(Empty slide or unsupported content)*

---

`}return b.trim()}catch(d){throw console.error("Error converting PPTX to Markdown:",d),new Error("Failed to convert PPTX document. Ensure it is a valid .pptx file.")}}async convertExcelToMarkdown(c){try{const d=await c.arrayBuffer(),r=ay(d,{type:"array"});let f="";for(const b of r.SheetNames){const g=r.Sheets[b],y=ly.sheet_to_csv(g);y.trim()&&(f+=`## ${b}

`,f+=this.convertCsvToMarkdown(y),f+=`

`)}return f.trim()}catch(d){throw console.error("Error converting Spreadsheet to Markdown:",d),new Error("Failed to convert spreadsheet. Ensure it is a valid Excel or ODS file.")}}async convertOdtToMarkdown(c){try{const d=await c.arrayBuffer(),f=await(await zo.loadAsync(d)).file("content.xml").async("string"),b=[],g=/<text:(p|h)[^>]*>(.*?)<\/text:\1>/g;let y;for(;(y=g.exec(f))!==null;){let k=y[2].replace(/<[^>]+>/g,"").trim();y[1]==="h"?b.push("### "+k):k&&b.push(k)}return b.join(`

`)}catch(d){throw console.error("Error converting ODT to Markdown:",d),new Error("Failed to convert OpenDocument Text. Ensure it is a valid .odt file.")}}async convertEpubToMarkdown(c){try{const d=await c.arrayBuffer(),r=await zo.loadAsync(d),f=[];r.forEach((g,y)=>{g.match(/\.(html|xhtml)$/i)&&f.push(y)}),f.sort((g,y)=>g.name.localeCompare(y.name));let b="";for(const g of f){const y=await g.async("string"),k=await this.getTurndownService();b+=k.turndown(y)+`

---

`}return b.trim()}catch(d){throw console.error("Error converting EPUB to Markdown:",d),new Error("Failed to convert EPUB document. Ensure it is a valid .epub file.")}}convertCsvToMarkdown(c){const d=Sv.parse(c,{header:!1});if(d.errors.length>0&&d.data.length===0)return c;const r=d.data;if(r.length===0)return"";let f="";const b=r[0].map(y=>String(y).replace(/\|/g,"\\|"));f+="| "+b.join(" | ")+` |
`;const g=b.map(()=>"---");f+="| "+g.join(" | ")+` |
`;for(let y=1;y<r.length;y++){if(r[y].length===1&&r[y][0]==="")continue;const k=r[y].map(G=>String(G).replace(/\|/g,"\\|").replace(/\n/g,"<br>"));for(;k.length<b.length;)k.push("");f+="| "+k.join(" | ")+` |
`}return f}convertJsonToMarkdown(c){try{const d=JSON.parse(c);return"```json\n"+JSON.stringify(d,null,2)+"\n```"}catch{return"```json\n"+c+"\n```"}}async importFile(c){const d=c.name,r=d.split(".").pop().toLowerCase();let f="",b=d;if(r==="docx")f=await this.convertWordToMarkdown(c),b=d.replace(/\.docx$/,".md");else if(["xlsx","xls","ods"].includes(r))f=await this.convertExcelToMarkdown(c),b=d.replace(/\.(xlsx|xls|ods)$/,".md");else if(r==="odt")f=await this.convertOdtToMarkdown(c),b=d.replace(/\.odt$/,".md");else if(r==="epub")f=await this.convertEpubToMarkdown(c),b=d.replace(/\.epub$/,".md");else if(r==="pptx")f=await this.convertPptxToMarkdown(c),b=d.replace(/\.pptx$/,".md");else if(r==="pdf")f=await this.convertPdfToMarkdown(c),b=d.replace(/\.pdf$/,".md");else{if(await this.isBinaryFile(c))throw new Error(`File ${d} appears to be a binary file. Only .docx, .pdf, or text formats are supported.`);const g=await c.text();r==="csv"?(f=this.convertCsvToMarkdown(g),b=d.replace(/\.csv$/,".md")):r==="json"?(f=this.convertJsonToMarkdown(g),b=d.replace(/\.json$/,".md")):r==="html"||r==="htm"?(f=(await this.getTurndownService()).turndown(g),b=d.replace(/\.(html|htm)$/,".md")):["md","markdown"].includes(r)?f=g:(f=g.replace(/(\r?\n)/g,"  $1"),r!=="txt"?b=d+".md":b=d.replace(/\.txt$/,".md"))}return{name:b,content:f}}}const Tv=new Ev,jv={empty:"",meeting:`# Meeting Notes: [Topic]

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

MIT`},kv=(m,c,d,r)=>({undo:f=>{Jb(f),f.focus()},redo:f=>{Fb(f),f.focus()},cut:async f=>{const b=f.state.selection.main,g=f.state.sliceDoc(b.from,b.to);g&&(await navigator.clipboard.writeText(g),f.dispatch({changes:{from:b.from,to:b.to,insert:""}})),f.focus()},copy:async f=>{const b=f.state.selection.main,g=f.state.sliceDoc(b.from,b.to);g&&await navigator.clipboard.writeText(g),f.focus()},paste:async f=>{try{const b=await navigator.clipboard.readText(),g=f.state.selection.main;f.dispatch({changes:{from:g.from,to:g.to,insert:b},selection:{anchor:g.from+b.length}})}catch{}f.focus()},find:f=>{m(b=>b&&r==="find"?!1:(c("find"),!0))},replace:f=>{m(b=>b&&r==="findReplace"?!1:(c("findReplace"),!0))}}),Mv={highlightSpecialChars:!1,tabSize:4,indentUnit:2,lineSeparator:"auto",theme:"light",scrollPastEnd:!1,showLintGutter:!1,showLineNumbers:!0,showFoldGutter:!0,showWritingStats:!0,showPlaceholder:!0},Mo=.5,nu=.2,Lm=.8,Cv=240,Av=.45,Rn={getUsage:()=>{let m=0;for(let c in localStorage)localStorage.hasOwnProperty(c)&&(m+=localStorage[c].length+c.length);return m},getQuota:()=>5*1024*1024,compressFiles:m=>m.map(d=>({...d,content:d.content&&d.content.length>1e5?"[FILE_TOO_LARGE_TO_SAVE]":d.content})),setItem:(m,c)=>{try{if(m==="markdownstudio_files"){const d=JSON.parse(c),r=Rn.compressFiles(d),f=JSON.stringify(r),b=Rn.getUsage(),g=f.length+m.length,y=Rn.getQuota();return b+g>y*.9&&(console.warn("Approaching localStorage quota limit, clearing old data"),Rn.removeItem("markdownstudio_files"),Rn.removeItem("markdownstudio_settings")),localStorage.setItem(m,f),!0}else return localStorage.setItem(m,c),!0}catch(d){if(d.name==="QuotaExceededError"){if(console.warn("localStorage quota exceeded, unable to save:",m),m==="markdownstudio_files")try{localStorage.removeItem("markdownstudio_files");const r=JSON.parse(c),f=Rn.compressFiles(r);return localStorage.setItem(m,JSON.stringify(f)),console.warn("Saved compressed files to localStorage"),!0}catch(r){console.error("Failed to save even compressed files:",r)}return!1}throw d}},getItem:m=>{try{return localStorage.getItem(m)}catch(c){return console.warn("Error reading from localStorage:",c),null}},removeItem:m=>{try{return localStorage.removeItem(m),!0}catch(c){return console.warn("Error removing from localStorage:",c),!1}}};function Dv(){const[m,c]=p.useState([]),[d,r]=p.useState(null),[f,b]=p.useState(()=>typeof window<"u"&&window.innerWidth<=768?"editor":"split"),[g,y]=p.useState(()=>typeof window<"u"&&window.innerWidth<=768?"edit":"view"),[k,G]=p.useState(()=>{const h=localStorage.getItem("markdownstudio_theme");return h?h==="dark":!1}),[B,$]=p.useState(()=>localStorage.getItem("markdownstudio_high_contrast")==="true");p.useEffect(()=>{localStorage.setItem("markdownstudio_theme",k?"dark":"light")},[k]),p.useEffect(()=>{localStorage.setItem("markdownstudio_high_contrast",B.toString())},[B]);const[M,Y]=p.useState(!1),[O,Q]=p.useState(!1),[X,S]=p.useState(!1),[K,se]=p.useState("find"),[re,we]=p.useState(!1),[D,w]=p.useState(!1),[j,_]=p.useState(!1),[te,P]=p.useState("preview"),[le,ie]=p.useState(!1),[Z,W]=p.useState(()=>vn.getSettings()),[L,I]=p.useState(()=>{const h=Rn.getItem("markdownstudio_settings"),x={...Mv};return!h&&typeof window<"u"&&window.innerWidth<=768&&(x.showLineNumbers=!1,x.showFoldGutter=!1,x.showLintGutter=!1,x.showWritingStats=!1),h?{...x,...JSON.parse(h)}:x}),[ve,Be]=p.useState(()=>xn.getActiveModes()),[J,fe]=p.useState(L.showWritingStats),[Se,xe]=p.useState(!1),[ge,yt]=p.useState(!1),[Re,We]=p.useState(!1),[Et,At]=p.useState(!1),[je,Ue]=p.useState(""),[vt,ya]=p.useState(1),[Dt,Gt]=p.useState(1),Jt=p.useRef(null),Tt=p.useRef({line:1,column:1}),tl=p.useCallback(h=>{const x=typeof h=="number"?{line:h,column:1}:h;Tt.current=x,Jt.current||(Jt.current=setTimeout(()=>{ya(Tt.current.line),Gt(Tt.current.column),Jt.current=null},50))},[]),[wn,Bt]=p.useState(()=>{if(typeof window<"u"){const h=parseFloat(Rn.getItem("markdownstudio_split_ratio"));if(Number.isFinite(h))return Math.min(Lm,Math.max(nu,h))}return Mo}),[ye,lt]=p.useState([]),[jt,Ye]=p.useState(()=>typeof window<"u"&&window.innerWidth<=768?[]:["preview"]),[Ut,On]=p.useState({x:window.innerWidth-450,y:70}),[cn,Hn]=p.useState(!1),[Sn,Yn]=p.useState({x:0,y:0}),En=p.useDeferredValue(je),be=p.useRef(null),Vt=p.useRef(null),oe=p.useRef(null),{registerEditor:it,withFocusRestore:$e}=pv(),Xn=p.useRef(null),rn=p.useRef(null),un=p.useRef({ratio:0,pixel:0}),qt=p.useRef(null),dt=p.useRef(!1),ue=p.useRef({fromEditor:!1,fromPreview:!1});p.useEffect(()=>{const h=Xn.current,x=rn.current;if(!h||!x||f!=="split")return;const R=()=>{if(ue.current.fromPreview){ue.current.fromPreview=!1;return}ue.current.fromEditor=!0;const F=h.scrollHeight-h.clientHeight,de=F>0?h.scrollTop/F:0,ce=x.scrollHeight-x.clientHeight;ce>0&&(x.scrollTop=de*ce)},V=()=>{if(ue.current.fromEditor){ue.current.fromEditor=!1;return}ue.current.fromPreview=!0;const F=x.scrollHeight-x.clientHeight,de=F>0?x.scrollTop/F:0,ce=h.scrollHeight-h.clientHeight;ce>0&&(h.scrollTop=de*ce)};return h.addEventListener("scroll",R,{passive:!0}),x.addEventListener("scroll",V,{passive:!0}),()=>{h.removeEventListener("scroll",R),x.removeEventListener("scroll",V)}},[f,d]);const Me=p.useRef("");p.useEffect(()=>{if(!d||!je)return;const h=setTimeout(()=>{je!==Me.current&&(Oo.createSnapshot(d,je),Me.current=je)},3e4),x=setInterval(()=>{je!==Me.current&&(Oo.createSnapshot(d,je),Me.current=je)},120*1e3);return()=>{clearTimeout(h),clearInterval(x)}},[d,je]);const tt=p.useCallback(()=>qt.current?.getBoundingClientRect().width||null,[]),Ee=p.useCallback((h,x)=>{if(!Number.isFinite(h))return Mo;if(!x)return Math.min(Lm,Math.max(nu,h));const R=Cv/x,V=Math.min(Av,Math.max(nu,R)),F=1-V;return Math.min(F,Math.max(V,h))},[]),Ie=p.useCallback(()=>{dt.current&&(typeof document<"u"&&document.body.classList.remove("resizing-horizontal"),dt.current=!1)},[]),Yt=p.useCallback(h=>{f==="split"&&(dt.current=!0,typeof document<"u"&&document.body.classList.add("resizing-horizontal"),h.preventDefault())},[f]),zt=p.useCallback(()=>{const h=tt();Bt(x=>Ee(Mo,h??void 0))},[Ee,tt]),Gn=p.useCallback(h=>{if(f!=="split")return;const x=tt()??void 0;if(h.key==="ArrowLeft"||h.key==="ArrowRight"){h.preventDefault();const R=h.key==="ArrowLeft"?-.02:.02;Bt(V=>Ee(V+R,x))}else h.key==="Home"?(h.preventDefault(),Bt(()=>Ee(0,x))):h.key==="End"?(h.preventDefault(),Bt(()=>Ee(1,x))):(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),Bt(()=>Ee(Mo,x)))},[Ee,tt,f]);p.useEffect(()=>{const h=Rn.getItem("markdownstudio_files");if(h)try{const x=JSON.parse(h),R=x.filter(V=>V.content==="[FILE_TOO_LARGE_TO_SAVE]");R.length>0&&console.warn(`${R.length} files were too large to save and will be empty`),c(x)}catch(x){console.warn("Error parsing saved files:",x),c([])}},[]),p.useEffect(()=>{const h=JSON.stringify(m);Rn.setItem("markdownstudio_files",h)||console.warn("Unable to save files to localStorage due to quota limits")},[m]),p.useEffect(()=>{Rn.setItem("markdownstudio_settings",JSON.stringify(L))},[L]),p.useEffect(()=>{fe(L.showWritingStats)},[L.showWritingStats]),p.useEffect(()=>{L.theme==="dark"?G(!0):L.theme==="light"&&G(!1)},[L.theme]),p.useEffect(()=>{const h=R=>{const V=R.detail;W(V),$(V.highContrast)};document.addEventListener("accessibilitySettingsChange",h);const x=vn.getSettings();return W(x),$(x.highContrast),()=>{document.removeEventListener("accessibilitySettingsChange",h)}},[]),p.useEffect(()=>{typeof window<"u"&&Rn.setItem("markdownstudio_split_ratio",wn.toString())},[wn]),p.useEffect(()=>{typeof document<"u"&&document.body.classList.remove("resizing-horizontal")},[]);const ee=m.find(h=>h.id===d);p.useEffect(()=>{if(!ee)return;const h=tt();h&&Bt(x=>Ee(x,h))},[ee,Ee,tt]),p.useEffect(()=>{f!=="split"&&Ie()},[f,Ie]),p.useEffect(()=>{const h=()=>{const x=tt();Bt(R=>Ee(R,x))};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[Ee,tt]),p.useEffect(()=>{const h=R=>{if(!dt.current||f!=="split")return;const V=qt.current;if(!V)return;const F=V.getBoundingClientRect();if(!F.width)return;const de=(R.clientX-F.left)/F.width,ce=Ee(de,F.width);Bt(ce),R.preventDefault()},x=()=>{Ie()};return window.addEventListener("pointermove",h),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x)}},[Ee,f,Ie]);const us=g==="edit"&&(f==="split"||f==="editor"),di=g==="view"||f==="split"||f==="preview",Pn=p.useCallback((h="empty")=>{const x=jv[h]||"",R={id:Do(),name:`Untitled-${Date.now()}.md`,content:x,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString()};c(V=>[...V,R]),Ue(x),xe(h!=="empty"),We(!1),At(!1),r(R.id),y("edit"),xn.disableMode("zen")},[]),va=p.useCallback(()=>{!d||be.current===null||(c(h=>h.map(x=>x.id===d?{...x,content:be.current,modifiedAt:new Date().toISOString()}:x)),be.current=null,Vt.current&&(clearTimeout(Vt.current),Vt.current=null))},[d,c]),jl=p.useCallback(()=>{Vt.current&&clearTimeout(Vt.current),Vt.current=setTimeout(()=>{va()},350)},[va]),kl=async()=>{try{const[h]=await window.showOpenFilePicker({types:[{description:"Markdown files",accept:{"text/markdown":[".md"]}}]}),x=await h.getFile(),R=await x.text(),V=m.find(de=>de.name===x.name);if(V){Ue(V.content||""),xe(!1),We(!1),At(!1),r(V.id),y(window.innerWidth<=768?"edit":"view"),xn.disableMode("zen");return}const F={id:Do(),name:x.name,content:R,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString(),fileHandle:h};c([...m,F]),Ue(R),xe(!1),We(!1),At(!1),r(F.id),y(window.innerWidth<=768?"edit":"view"),xn.disableMode("zen")}catch(h){console.error("Error opening file:",h)}},Ml=async()=>{if(ee){va();try{if(ee.fileHandle){const h=await ee.fileHandle.createWritable();await h.write(je),await h.close()}else{const h=await window.showSaveFilePicker({suggestedName:ee.name,types:[{description:"Markdown files",accept:{"text/markdown":[".md"]}}]}),x=await h.createWritable();await x.write(je),await x.close();const R=m.map(V=>V.id===ee.id?{...V,fileHandle:h}:V);c(R)}xe(!1)}catch(h){console.error("Error saving file:",h)}}},kt=p.useCallback(h=>{if(!d)return;be.current=h,Ue(h);const x=ee?.content??"";xe(x!==h),xn.updateWritingStats(h),jl()},[d,ee,jl]),xt=p.useCallback(h=>{let x=d;if(d===h){const R=m.filter(F=>F.id!==h);x=R.length>0?R[0].id:null;const V=R.length>0?R[0]:null;Ue(V?V.content:""),xe(!1),We(!1),At(!1)}c(R=>R.filter(V=>V.id!==h)),r(x)},[m,d]);p.useCallback((h,x)=>{c(R=>R.map(V=>V.id===h?{...V,name:x}:V))},[]);const Lt=p.useCallback($e(()=>{const h=!k;G(h),I(x=>({...x,theme:h?"dark":"light"}))}),[$e,k]),Vn=p.useCallback(()=>{Q(!0)},[]),nl=p.useCallback(()=>{we(!0)},[]),ds=p.useCallback(()=>{w(!0)},[]),fs=p.useCallback(h=>{const x=oe.current;if(!x||h===void 0||h===null)return;const R=x.state.doc,V=h;let F=je;if(!F)return;const de=/^---\s*\n[\s\S]*?\n---\s*\n/;F=F.replace(de,"");let ce=1;const Zt=F.split(`
`);let nt=!1;for(let ot=0;ot<Zt.length;ot++){const ct=Zt[ot].trim();if(ct.startsWith("#")&&ct.replace(/^#+\s*/,"").trim().toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")===V){const Tn=je.match(/^---\s*\n[\s\S]*?\n---\s*\n/),pi=Tn?Tn[0].split(`
`).length-1:0;ce=ot+1+pi,nt=!0;break}}if(nt||typeof h=="number"){const ot=typeof h=="number"?Math.min(Math.max(1,h),R.lines):ce,ct=R.line(ot).from;x.dispatch({selection:{anchor:ct,head:ct},effects:$n.scrollIntoView(ct,{y:"center"})}),x.focus(),typeof window<"u"&&window.innerWidth<=768&&(b("editor"),y("edit"))}},[je]),Cl=p.useCallback(h=>{if(!h)return;const x=h.getBoundingClientRect(),R=window.innerWidth,V=window.innerHeight,F=10,de=60;if(x.top>=F&&x.left>=F&&x.right<=R-F&&x.bottom<=V-F)return;let Zt=x.left,nt=x.top;x.width>R-2*F||x.left<F?Zt=F:x.right>R-F&&(Zt=R-x.width-F),x.height>V-2*F||x.top<F?nt=F:x.bottom>V-F&&(nt=V-x.height-F),nt>V-de&&(nt=Math.max(F,V-de)),(Zt!==x.left||nt!==x.top)&&(h.style.setProperty("left",`${Zt}px`,"important"),h.style.setProperty("top",`${nt}px`,"important"),h.style.setProperty("transform","none","important"),h.style.setProperty("margin","0","important"))},[]);p.useEffect(()=>{const h=()=>{setTimeout(()=>{document.querySelectorAll('[role="dialog"], .fui-Dialog__surface, .fui-DialogSurface').forEach(F=>{F.style.setProperty("max-height","80vh","important"),F.style.setProperty("overflow-y","auto","important"),F.style.setProperty("user-select","none","important"),F.querySelectorAll('input, textarea, select, [contenteditable="true"]').forEach(ce=>ce.style.setProperty("user-select","auto","important")),F.offsetParent!==null&&Cl(F)})},100)},x=new MutationObserver(h);x.observe(document.body,{childList:!0,subtree:!0});const R=()=>{document.querySelectorAll('[role="dialog"], .fui-Dialog__surface, .fui-DialogSurface').forEach(F=>{F.offsetParent!==null&&Cl(F)})};return window.addEventListener("resize",R),()=>{x.disconnect(),window.removeEventListener("resize",R)}},[Cl]);const xa=p.useCallback((h,x)=>{const R=oe.current;if(!R)return;const V=In.getSectionRange(je,h),F=In.moveSection(je,V.start,V.end,x);kt(F),Ue(F),R.dispatch({changes:{from:0,to:R.state.doc.length,insert:F}}),setTimeout(()=>R.focus(),50)},[je,kt]),Al=p.useCallback($e(()=>{I(h=>({...h,showLintGutter:!h.showLintGutter}))}),[$e]),wa=p.useCallback($e(()=>{I(h=>({...h,showLineNumbers:!h.showLineNumbers}))}),[$e]),Sa=p.useCallback($e(()=>{I(h=>({...h,showFoldGutter:!h.showFoldGutter}))}),[$e]),Ea=p.useCallback($e(()=>{I(h=>({...h,showWritingStats:!h.showWritingStats}))}),[$e]),dn=p.useCallback($e(h=>{xn.toggleMode(h)}),[$e]),st=p.useCallback(()=>{xn.toggleMode("zen")},[]);p.useEffect(()=>{if(g==="edit"){const h=setTimeout(()=>{oe.current&&oe.current.focus()},50);return()=>clearTimeout(h)}},[g,d]),p.useEffect(()=>{const h=x=>{if((x.ctrlKey||x.metaKey)&&(x.key==="p"||x.key==="P")){x.preventDefault(),ie(R=>!R);return}if((x.ctrlKey||x.metaKey)&&(x.key==="f"||x.key==="F")){x.preventDefault(),X&&K==="find"?S(!1):(se("find"),S(!0));return}if((x.ctrlKey||x.metaKey)&&(x.key==="h"||x.key==="H")){x.preventDefault(),X&&K==="findReplace"?S(!1):(se("findReplace"),S(!0));return}x.key==="Escape"&&ve.zen&&st()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[ve,st,X,K]);const hs=p.useCallback(h=>{yt(h)},[]),ms=p.useCallback(({canUndo:h,canRedo:x})=>{We(h),At(x)},[]),Qn=p.useMemo(()=>kv(S,se,X,K),[S,se,X,K]),Xt=p.useCallback(h=>{const x=oe.current;if(!x)return;const R=Qn[h];R&&R(x)},[Qn]),Ne=p.useCallback(h=>{if(!oe.current)return;const x=oe.current,{state:R}=x,V=R.selection.main,F=R.sliceDoc(V.from,V.to),ce={bold:{wrap:["**","**"],offset:2},italic:{wrap:["*","*"],offset:1},code:{wrap:["`","`"],offset:1},strikethrough:{wrap:["~~","~~"],offset:2},h1:{prefix:"# ",offset:2},h2:{prefix:"## ",offset:3},h3:{prefix:"### ",offset:4},h4:{prefix:"#### ",offset:5},h5:{prefix:"##### ",offset:6},h6:{prefix:"###### ",offset:7},bullet:{prefix:"- ",offset:2},numbered:{prefix:"1. ",offset:3},quote:{prefix:"> ",offset:2},link:{transform:ct=>ct?`[${ct}](url)`:"[text](url)",offset:ct=>ct?ct.length+3:1},image:{transform:ct=>ct?`![${ct}](url)`:"![alt](url)",offset:ct=>ct?ct.length+4:2},"callout-note":{prefix:`> [!NOTE]
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
\`\`\``,offset:4}}[h];if(!ce||!F&&!["link","image","callout-note","callout-tip","callout-warning","callout-error","table","codeblock","hr","tasklist","footnote","math","mermaid","h1","h2","h3","h4","h5","h6"].includes(h))return;let nt,ot;ce.transform?(nt=ce.transform(F),ot=typeof ce.offset=="function"?ce.offset(F):ce.offset):ce.wrap?(nt=`${ce.wrap[0]}${F}${ce.wrap[1]}`,ot=F?0:ce.offset):ce.suffix?(nt=`${ce.prefix}${F}${ce.suffix}`,ot=F?ce.suffix.length:ce.offset):(nt=`${ce.prefix}${F}`,ot=F?0:ce.offset),x.dispatch({changes:{from:V.from,to:V.to,insert:nt},selection:{anchor:V.from+nt.length-ot,head:V.from+nt.length-ot}}),x.focus()},[]),fi=p.useCallback(h=>{const x=oe.current;if(!x)return;const{state:R}=x,V=R.selection.main;x.dispatch({changes:{from:V.from,to:V.to,insert:h},selection:{anchor:V.from+h.length,head:V.from+h.length}}),x.focus()},[]),wt=p.useCallback($e(h=>{b(x=>{let R=x===h?x:h;return typeof window<"u"&&window.innerWidth<=768&&(R==="preview"||R==="split")?(lt(F=>Array.from(new Set([...F,"preview"]))),"editor"):(R==="split"&&jt.length===0&&(Ye(["preview"]),P("preview")),R)})}),[$e,jt]),Ta=p.useCallback(h=>{lt(x=>x.filter(R=>R!==h)),Ye(x=>Array.from(new Set([...x,h]))),P(h),f!=="split"&&wt("split")},[f,wt]),al=p.useCallback(h=>{ye.includes(h)||(lt(x=>[...x,h]),Ye(x=>{const R=x.filter(V=>V!==h);return te===h&&(R.length>0?P(R[0]):wt("editor")),R}))},[ye,te,wt]),ll=p.useCallback(h=>{const x=typeof window<"u"&&window.innerWidth<=768,R=ye.includes(h),V=jt.includes(h);R?lt(de=>de.filter(ce=>ce!==h)):x?lt(de=>Array.from(new Set([...de,h]))):te===h&&(f==="split"||f==="preview")?Ye(de=>{const ce=de.filter(Zt=>Zt!==h);return te===h&&(ce.length>0?P(ce[0]):wt("editor")),ce}):V?(P(h),f!=="split"&&f!=="preview"&&wt(x?"preview":"split")):(Ye(de=>Array.from(new Set([...de,h]))),P(h),f!=="split"&&f!=="preview"&&wt(x?"preview":"split"))},[ye,jt,te,f,wt]),Qt=p.useCallback(h=>{lt(x=>x.filter(R=>R!==h)),Ye(x=>{const R=x.filter(V=>V!==h);return te===h&&(R.length>0?P(R[0]):wt("editor")),R})},[te,wt]);ll.bind(null,"snippet");const Wt=p.useCallback(h=>{Hn(!0),Yn({x:h.clientX-Ut.x,y:h.clientY-Ut.y}),h.preventDefault()},[Ut]),ps=p.useCallback(h=>{const x=h.touches[0];Hn(!0),Yn({x:x.clientX-Ut.x,y:x.clientY-Ut.y})},[Ut]),gs=p.useCallback(h=>{if(!cn)return;const x=h.type==="touchmove"?h.touches[0].clientX:h.clientX,R=h.type==="touchmove"?h.touches[0].clientY:h.clientY,V=x-Sn.x,F=R-Sn.y,de=window.innerWidth-400,ce=window.innerHeight-500;On({x:Math.max(0,Math.min(V,de)),y:Math.max(0,Math.min(F,ce))})},[cn,Sn]),ja=p.useCallback(h=>{if(cn){Hn(!1);const x=h.type==="touchend"||h.type==="touchcancel"?h.changedTouches?h.changedTouches[0].clientX:0:h.clientX,R=h.type==="touchend"||h.type==="touchcancel"?h.changedTouches?h.changedTouches[0].clientY:0:h.clientY;document.elementsFromPoint(x,R).some(F=>F.classList.contains("right-panel-tabs"))&&Ta("preview")}},[cn,Ta]);p.useEffect(()=>{if(!ee||!je)return;const h=setTimeout(()=>{vv.saveFile({...ee,content:je,modifiedAt:new Date().toISOString()}).catch(x=>console.error("Auto-save failed:",x))},2e3);return()=>clearTimeout(h)},[je,ee]),p.useEffect(()=>{const h=x=>{Be(x)};return xn.addModeChangeListener(h),()=>{xn.removeModeChangeListener(h)}},[]),p.useEffect(()=>{const h=R=>{gs(R)},x=R=>{ja(R)};if(cn)return document.addEventListener("mousemove",h),document.addEventListener("mouseup",x),document.addEventListener("touchmove",h,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)}},[cn,gs,ja]);const hi=async()=>{try{const h=await window.showOpenFilePicker({types:[{description:"Text-based files",accept:{"text/markdown":[".md",".markdown"],"text/plain":[".txt"],"text/html":[".html",".htm"],"text/csv":[".csv"],"application/json":[".json"]}},{description:"Word Documents",accept:{"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"]}},{description:"Spreadsheets",accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel":[".xls"],"application/vnd.oasis.opendocument.spreadsheet":[".ods"]}},{description:"OpenDocument Text",accept:{"application/vnd.oasis.opendocument.text":[".odt"]}},{description:"PowerPoint Documents",accept:{"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]}},{description:"PDF Documents",accept:{"application/pdf":[".pdf"]}},{description:"E-books",accept:{"application/epub+zip":[".epub"]}}],multiple:!0});for(const x of h){const R=await x.getFile(),{name:V,content:F}=await Tv.importFile(R),de={id:Do(),name:V,content:F,createdAt:new Date().toISOString(),modifiedAt:new Date().toISOString()};c(ce=>[...ce,de]),r(de.id),Ue(F),y("edit")}}catch(h){h.name!=="AbortError"&&(console.error("Error importing files:",h),alert(h.message||"Error importing files"))}},il=p.useCallback(h=>{const x=uv(je,h);kt(x),Ue(x),oe.current&&oe.current.dispatch({changes:{from:0,to:oe.current.state.doc.length,insert:x}})},[je,kt]),Zn=(h="md")=>{if(!ee){alert("No active file to export");return}if(h==="md"){const x=new Blob([ee.content],{type:"text/markdown"}),R=URL.createObjectURL(x),V=document.createElement("a");V.href=R,V.download=ee.name,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(R)}else if(h==="html"){const x=document.querySelector(".markdown-content")?.innerHTML||"",R=`<!DOCTYPE html>
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
${x}
</body>
</html>`,V=new Blob([R],{type:"text/html"}),F=URL.createObjectURL(V),de=document.createElement("a");de.href=F,de.download=ee.name.replace(/\.md$/,".html"),document.body.appendChild(de),de.click(),document.body.removeChild(de),URL.revokeObjectURL(F)}else if(h==="pdf"){const x=document.querySelector(".markdown-content")?.innerHTML||"",R=window.open("","","width=800,height=900");R.document.write(`<!DOCTYPE html>
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
${x}
<script>
  window.onload = () => { setTimeout(() => { window.print(); window.close(); }, 500); }
<\/script>
</body>
</html>`),R.document.close()}else if(h==="doc"){const x=document.querySelector(".markdown-content")?.innerHTML||"",R=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${ee.name}</title></head>
<body>${x}</body></html>`,V=new Blob(["\uFEFF",R],{type:"application/msword"}),F=URL.createObjectURL(V),de=document.createElement("a");de.href=F,de.download=ee.name.replace(/\.md$/,".doc"),document.body.appendChild(de),de.click(),document.body.removeChild(de),URL.revokeObjectURL(F)}else if(h==="epub"){const x=document.querySelector(".markdown-content")?.innerHTML||"",R=new zo;R.file("mimetype","application/epub+zip"),R.file("META-INF/container.xml",`<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);const F=`<?xml version="1.0" encoding="UTF-8"?>
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
</package>`;R.file("OEBPS/content.opf",F);const de=`<?xml version="1.0" encoding="UTF-8"?>
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
</ncx>`;R.file("OEBPS/toc.ncx",de);const ce=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${ee.name}</title>
</head>
<body>
  ${x.replace(/<br>/g,"<br/>").replace(/<hr>/g,"<hr/>").replace(/<img(.*?)>/g,"<img$1/>")}
</body>
</html>`;R.file("OEBPS/content.html",ce),R.generateAsync({type:"blob",mimeType:"application/epub+zip"}).then(Zt=>{const nt=URL.createObjectURL(Zt),ot=document.createElement("a");ot.href=nt,ot.download=ee.name.replace(/\.md$/,".epub"),document.body.appendChild(ot),ot.click(),document.body.removeChild(ot),URL.revokeObjectURL(nt)})}else if(h==="pptx"){const x=document.querySelector(".markdown-content")?.innerHTML||"",R=document.createElement("div");R.innerHTML=x;const V=new iy;let F=V.addSlide();F.addText(ee.name.replace(/\.md$/,""),{x:.5,y:.5,fontSize:28,bold:!0});let de=1.5;Array.from(R.children).forEach(ce=>{ce.tagName.match(/^H[1-3]$/)?(F=V.addSlide(),F.addText(ce.innerText,{x:.5,y:.5,w:9,h:1,fontSize:24,bold:!0}),de=1.5):(ce.tagName==="P"||ce.tagName==="UL"||ce.tagName==="OL")&&(de>4.5&&(F=V.addSlide(),de=.5),F.addText(ce.innerText,{x:.5,y:de,w:9,h:1}),de+=1)}),V.writeFile({fileName:ee.name.replace(/\.md$/,".pptx")})}},It=p.useMemo(()=>[{id:"new",label:"New Blank Document",icon:s.jsx(oi,{}),onExecute:()=>Pn("empty")},{id:"new-meeting",label:"New Meeting Notes Template",icon:s.jsx(oi,{}),onExecute:()=>Pn("meeting")},{id:"new-blog",label:"New Blog Post Template",icon:s.jsx(oi,{}),onExecute:()=>Pn("blog")},{id:"new-readme",label:"New README Template",icon:s.jsx(oi,{}),onExecute:()=>Pn("readme")},{id:"open",label:"Open File",icon:s.jsx(Co,{}),onExecute:()=>kl(),shortcut:"Ctrl+O"},{id:"save",label:"Save File",icon:s.jsx(au,{}),onExecute:()=>Ml(),shortcut:"Ctrl+S",disabled:!ee||!Se},{id:"import",label:"Import File",icon:s.jsx($m,{}),onExecute:()=>hi()},{id:"export-md",label:"Export as Markdown (.md)",icon:s.jsx(el,{}),onExecute:()=>Zn("md"),disabled:!ee},{id:"export-html",label:"Export as HTML (.html)",icon:s.jsx(el,{}),onExecute:()=>Zn("html"),disabled:!ee},{id:"export-pdf",label:"Export as PDF",icon:s.jsx(el,{}),onExecute:()=>Zn("pdf"),disabled:!ee},{id:"export-doc",label:"Export as Word (.doc)",icon:s.jsx(el,{}),onExecute:()=>Zn("doc"),disabled:!ee},{id:"export-epub",label:"Export as EPUB (.epub)",icon:s.jsx(el,{}),onExecute:()=>Zn("epub"),disabled:!ee},{id:"export-pptx",label:"Export as PowerPoint (.pptx)",icon:s.jsx(el,{}),onExecute:()=>Zn("pptx"),disabled:!ee},{id:"undo",label:"Undo",icon:s.jsx(os,{}),onExecute:()=>Xt("undo"),shortcut:"Ctrl+Z",disabled:!ee||!Re||g==="view"},{id:"redo",label:"Redo",icon:s.jsx(No,{}),onExecute:()=>Xt("redo"),shortcut:"Ctrl+Y",disabled:!ee||!Et||g==="view"},{id:"cut",label:"Cut",icon:s.jsx(iu,{}),onExecute:()=>Xt("cut"),shortcut:"Ctrl+X",disabled:!ge||g==="view"},{id:"copy",label:"Copy",icon:s.jsx(su,{}),onExecute:()=>Xt("copy"),shortcut:"Ctrl+C",disabled:!ge||g==="view"},{id:"paste",label:"Paste",icon:s.jsx(ou,{}),onExecute:()=>Xt("paste"),shortcut:"Ctrl+V",disabled:!ee||g==="view"},{id:"find",label:"Find",icon:s.jsx(cu,{}),onExecute:()=>Xt("find"),shortcut:"Ctrl+F",disabled:!ee||g==="view"},{id:"replace",label:"Find & Replace",icon:s.jsx(_o,{}),onExecute:()=>Xt("replace"),shortcut:"Ctrl+H",disabled:!ee||g==="view"},{id:"bold",label:"Format Bold",icon:s.jsx(ba,{}),onExecute:()=>Ne("bold"),shortcut:"Ctrl+B",disabled:!ge||g==="view"},{id:"italic",label:"Format Italic",icon:s.jsx(hu,{}),onExecute:()=>Ne("italic"),shortcut:"Ctrl+I",disabled:!ge||g==="view"},{id:"strikethrough",label:"Format Strikethrough",icon:s.jsx(mu,{}),onExecute:()=>Ne("strikethrough"),shortcut:"Alt+S",disabled:!ge||g==="view"},{id:"code",label:"Format Code",icon:s.jsx(ci,{}),onExecute:()=>Ne("code"),shortcut:"Ctrl+`",disabled:!ge||g==="view"},{id:"bullet",label:"Bullet List",icon:s.jsx($o,{}),onExecute:()=>Ne("bullet"),shortcut:"Ctrl+Shift+8",disabled:!ge||g==="view"},{id:"numbered",label:"Numbered List",icon:s.jsx(El,{}),onExecute:()=>Ne("numbered"),shortcut:"Ctrl+Shift+9",disabled:!ge||g==="view"},{id:"quote",label:"Blockquote",icon:s.jsx(bu,{}),onExecute:()=>Ne("quote"),disabled:!ge||g==="view"},{id:"link",label:"Insert Link",icon:s.jsx(yu,{}),onExecute:()=>Ne("link"),shortcut:"Ctrl+K",disabled:!ge||g==="view"},{id:"image",label:"Insert Image",icon:s.jsx(vu,{}),onExecute:()=>Ne("image"),shortcut:"Ctrl+Shift+I",disabled:!ge||g==="view"},{id:"subscript",label:"Format Subscript",icon:s.jsx(pu,{}),onExecute:()=>Ne("subscript"),disabled:!ge||g==="view"},{id:"superscript",label:"Format Superscript",icon:s.jsx(gu,{}),onExecute:()=>Ne("superscript"),disabled:!ge||g==="view"},{id:"highlight",label:"Highlight Text",icon:s.jsx(Nm,{}),onExecute:()=>Ne("highlight"),disabled:!ge||g==="view"},{id:"transform-upper",label:"Transform UPPERCASE",icon:s.jsx(is,{}),onExecute:()=>Ne("transform-upper"),disabled:!ge||g==="view"},{id:"transform-lower",label:"Transform lowercase",icon:s.jsx(is,{}),onExecute:()=>Ne("transform-lower"),disabled:!ge||g==="view"},{id:"transform-sentence",label:"Transform Sentence case",icon:s.jsx(is,{}),onExecute:()=>Ne("transform-sentence"),disabled:!ge||g==="view"},{id:"remove-formatting",label:"Remove Formatting",icon:s.jsx(is,{}),onExecute:()=>Ne("remove-formatting"),disabled:!ge||g==="view"},{id:"heading1",label:"Insert Heading 1",icon:s.jsx(ba,{}),onExecute:()=>Ne("h1"),shortcut:"Ctrl+1",disabled:!ee||g==="view"},{id:"heading2",label:"Insert Heading 2",icon:s.jsx(ba,{}),onExecute:()=>Ne("h2"),shortcut:"Ctrl+2",disabled:!ee||g==="view"},{id:"heading3",label:"Insert Heading 3",icon:s.jsx(ba,{}),onExecute:()=>Ne("h3"),shortcut:"Ctrl+3",disabled:!ee||g==="view"},{id:"heading4",label:"Insert Heading 4",icon:s.jsx(ba,{}),onExecute:()=>Ne("h4"),shortcut:"Ctrl+4",disabled:!ee||g==="view"},{id:"heading5",label:"Insert Heading 5",icon:s.jsx(ba,{}),onExecute:()=>Ne("h5"),shortcut:"Ctrl+5",disabled:!ee||g==="view"},{id:"heading6",label:"Insert Heading 6",icon:s.jsx(ba,{}),onExecute:()=>Ne("h6"),shortcut:"Ctrl+6",disabled:!ee||g==="view"},{id:"table",label:"Insert Table",icon:s.jsx(xu,{}),onExecute:()=>Ne("table"),shortcut:"Ctrl+Shift+T",disabled:!ee||g==="view"},{id:"codeblock",label:"Insert Code Block",icon:s.jsx(ci,{}),onExecute:()=>Ne("codeblock"),shortcut:"Ctrl+Shift+C",disabled:!ee||g==="view"},{id:"hr",label:"Insert Horizontal Rule",icon:s.jsx(Eu,{}),onExecute:()=>Ne("hr"),shortcut:"Ctrl+Shift+-",disabled:!ee||g==="view"},{id:"tasklist",label:"Insert Task List",icon:s.jsx(Su,{}),onExecute:()=>Ne("tasklist"),disabled:!ee||g==="view"},{id:"footnote",label:"Insert Footnote",icon:s.jsx(wu,{}),onExecute:()=>Ne("footnote"),disabled:!ee||g==="view"},{id:"callout-note",label:"Insert Note Callout",icon:s.jsx(ss,{}),onExecute:()=>Ne("callout-note"),disabled:!ee||g==="view"},{id:"callout-tip",label:"Insert Tip Callout",icon:s.jsx(ss,{}),onExecute:()=>Ne("callout-tip"),disabled:!ee||g==="view"},{id:"callout-warning",label:"Insert Warning Callout",icon:s.jsx(ss,{}),onExecute:()=>Ne("callout-warning"),disabled:!ee||g==="view"},{id:"callout-error",label:"Insert Error Callout",icon:s.jsx(ss,{}),onExecute:()=>Ne("callout-error"),disabled:!ee||g==="view"},{id:"select-current-section",label:"Select Current Section",icon:s.jsx(wb,{}),disabled:!ee||g==="view",onExecute:()=>{const h=oe.current;if(!h)return;const x=h.state.selection.main.head,R=h.state.doc.lineAt(x).number,V=In.getSectionRange(je,R),F=h.state.doc.line(V.start).from,de=h.state.doc.line(V.end).to;h.dispatch({selection:{anchor:F,head:de}}),h.focus()}},{id:"select-all-headings",label:"Select All Headings",icon:s.jsx(El,{}),disabled:!ee||g==="view",onExecute:()=>{const h=oe.current;if(!h)return;const x=In.findBlockRanges(je,"headings").map(R=>({anchor:h.state.doc.line(R.line).from,head:h.state.doc.line(R.line).to}));x.length&&(h.dispatch({selection:{ranges:x,main:0}}),h.focus())}},{id:"select-all-lists",label:"Select All List Items",icon:s.jsx($o,{}),disabled:!ee||g==="view",onExecute:()=>{const h=oe.current;if(!h)return;const x=In.findBlockRanges(je,"list-items").map(R=>({anchor:h.state.doc.line(R.line).from,head:h.state.doc.line(R.line).to}));x.length&&(h.dispatch({selection:{ranges:x,main:0}}),h.focus())}},{id:"move-section-up",label:"Move Current Section Up",icon:s.jsx(os,{}),disabled:!ee||g==="view",onExecute:()=>{const h=oe.current;if(!h)return;const x=h.state.selection.main.head,R=h.state.doc.lineAt(x).number,V=In.getSectionRange(je,R);if(V.start<=1)return;const F=In.moveSection(je,V.start,V.end,V.start-1);kt(F),Ue(F),h.dispatch({changes:{from:0,to:h.state.doc.length,insert:F}})}},{id:"move-section-down",label:"Move Current Section Down",icon:s.jsx(No,{}),disabled:!ee||g==="view",onExecute:()=>{const h=oe.current;if(!h)return;const x=h.state.selection.main.head,R=h.state.doc.lineAt(x).number,V=In.getSectionRange(je,R);if(V.end>=h.state.doc.lines)return;const F=In.getSectionRange(je,V.end+1),de=In.moveSection(je,V.start,V.end,F.end+1);kt(de),Ue(de),h.dispatch({changes:{from:0,to:h.state.doc.length,insert:de}})}},{id:"outline",label:"Toggle Outline",icon:s.jsx(El,{}),onExecute:()=>{wt("split"),P("outline")},disabled:!ee||g==="view"},{id:"property",label:"Toggle Property",icon:s.jsx(Ao,{}),onExecute:()=>{wt("split"),P("property")},disabled:!ee||g==="view"},{id:"history",label:"Toggle History",icon:s.jsx(Ro,{}),onExecute:()=>{wt("split"),P("history")},disabled:!ee||g==="view"},{id:"snippet",label:"Toggle Snippets",icon:s.jsx(ri,{}),onExecute:()=>{wt("split"),P("snippet")},disabled:!ee||g==="view"},{id:"zen",label:"Toggle Zen Mode",icon:s.jsx(uu,{}),onExecute:()=>dn("zen"),disabled:!ee||g==="view"},{id:"focus",label:"Toggle Focus Mode",icon:s.jsx(du,{}),onExecute:()=>dn("focus"),disabled:!ee||g==="view"},{id:"typewriter",label:"Toggle Typewriter Mode",icon:s.jsx(fu,{}),onExecute:()=>dn("typewriter"),disabled:!ee||g==="view"},{id:"wysiwyg",label:"Toggle WYSIWYG Mode",icon:s.jsx(Rm,{}),onExecute:()=>dn("wysiwyg"),disabled:!ee||g==="view"},{id:"linter",label:`${L.showLintGutter?"Hide":"Show"} Linter Gutter`,icon:s.jsx(Sb,{}),onExecute:()=>Al(),disabled:!ee},{id:"theme",label:`Switch to ${k?"Light":"Dark"} Theme`,icon:k?s.jsx(Eb,{}):s.jsx(Tb,{}),onExecute:()=>Lt()},{id:"stats",label:"Toggle Writing Stats",icon:s.jsx(ru,{}),onExecute:()=>Ea(),disabled:!ee},{id:"settings",label:"Settings",icon:s.jsx(lu,{}),onExecute:()=>nl()},{id:"about",label:"About",icon:s.jsx(Lo,{}),onExecute:()=>Vn()},{id:"usermanual",label:"User Manual",icon:s.jsx(Lo,{}),onExecute:()=>ds()}],[Pn,kl,Ml,Zn,Xt,Ne,wt,dn,k,Lt,nl,Vn,ds,J,fe,ge,ee,Se,L,g,Re,Et]);return s.jsx(jb,{theme:k?kb:Mb,children:s.jsxs("div",{className:`app ${k?"dark-theme":"light-theme"} ${B?"high-contrast":""} ${Z.dyslexiaFont?"dyslexia-font":""} ${g==="edit"&&J&&ee?"show-stats":""} ${ve.zen?"zen-mode":""}`,onDragOver:h=>{h.preventDefault()},onDrop:h=>{const x=h.dataTransfer.getData("tabId");x&&al(x)},children:[s.jsx(uy,{onNew:Pn,onOpen:kl,onSave:Ml,onPreviewChange:wt,currentPreviewMode:f,onImport:hi,onExport:Zn,onAbout:Vn,onMarkdownHelp:()=>_(h=>!h),showMarkdownHelp:j,onSettings:nl,showHighContrast:B,onWritingMode:dn,currentWritingMode:ve,hasCurrentFile:!!ee,hasUnsavedChanges:Se,hasTextSelected:ge,hasFiles:m.length>0,fileCount:m.length,onStyleChange:Ne,onEditAction:Xt,files:m,currentFileId:d,onSwitchFile:h=>{const x=m.find(R=>R.id===h);x&&(va(),Ue(x.content||""),xe(!1),We(!1),At(!1),r(h),xn.disableMode("zen"))},onCloseFile:xt,onShowCommandPalette:()=>ie(h=>!h),showCommandPalette:le,showLintGutter:L.showLintGutter,onLinterToggle:Al,showLineNumbers:L.showLineNumbers,onLineNumbersToggle:wa,showHeadingGutter:L.showFoldGutter,onHeadingGutterToggle:Sa,appMode:g,onAppModeChange:y,activeRightTab:te,onTogglePanel:ll,showWritingStats:J,onWritingStatsToggle:Ea,floatingPanels:ye,dockedPanels:jt,canUndo:Re,canRedo:Et}),s.jsx("div",{className:"editor-scroll-container",children:s.jsx("div",{id:"editor-container",className:"editor-container",children:ee?s.jsxs("div",{className:`editor-split ${g==="view"?"preview":f}`,style:g==="edit"&&f==="split"?{"--editor-pane-width":`${(wn*100).toFixed(2)}%`,"--preview-pane-width":`${((1-wn)*100).toFixed(2)}%`}:void 0,ref:qt,children:[s.jsx(Cy,{content:je,onChange:kt,visible:g==="edit"&&us,onTextSelection:hs,scrollRef:Xn,settings:L,writingMode:ve,isDark:k,onEditorReady:h=>{it(h),oe.current=h},onCursorActivity:tl,onHistoryChange:ms},d),g==="edit"&&f==="split"&&s.jsx("div",{className:"splitter-handle",role:"separator","aria-label":"Resize editor and preview panes","aria-orientation":"vertical","aria-valuemin":20,"aria-valuemax":80,"aria-valuenow":Math.round(wn*100),"aria-valuetext":`${Math.round(wn*100)}% editor width`,tabIndex:0,onPointerDown:Yt,onKeyDown:Gn,onDoubleClick:zt,children:s.jsx("span",{className:"splitter-grip"})}),di&&s.jsx("div",{className:"right-panel-wrapper",style:{height:"100%",width:"100%",minWidth:0,overflow:"hidden",display:"flex"},children:s.jsx(Ky,{appMode:g,content:En,editorView:oe.current,fileId:d,visible:di,activeTab:te,dockedPanels:jt,onTabChange:P,onUndockPanel:al,onMoveSection:xa,previewScrollRef:rn,onUpdateProperty:il,onRestoreHistory:h=>{kt(h),Ue(h),oe.current&&oe.current.dispatch({changes:{from:0,to:oe.current.state.doc.length,insert:h}})},onInsertSnippet:h=>{fi(h),window.innerWidth<=768&&(b("editor"),y("edit"))},isDarkTheme:k,activeLine:vt,onNavigate:h=>{if(oe.current){const x=oe.current;if(typeof h=="string")fs(h);else{const R=x.state.doc.line(h).from;x.dispatch({selection:{anchor:R,head:R},effects:$n.scrollIntoView(R,{y:"center"})}),x.focus()}window.innerWidth<=768&&(b("editor"),y("edit"))}}})})]}):s.jsx("div",{className:"empty-state",children:s.jsx(ju,{})})})}),g==="edit"&&J&&ee&&s.jsx("div",{className:"writing-stats-wrapper",children:s.jsx(Fm,{content:En,visible:J,cursorLine:vt,cursorColumn:Dt})}),ve.zen&&s.jsx(Oy,{onExitZen:st}),s.jsx(Jm,{isOpen:O,onClose:()=>Q(!1),isDarkTheme:k}),s.jsx(Im,{isOpen:re,onClose:()=>we(!1),settings:L,onSettingsChange:I}),s.jsx(ju,{isOpen:D,onClose:()=>w(!1),isDarkTheme:k,isDialog:!0}),s.jsx(np,{isVisible:j,onClose:()=>_(!1),isDarkTheme:k}),s.jsx(Wm,{editorView:oe.current,isVisible:X,onClose:()=>S(!1),mode:K}),s.jsx(Pm,{isOpen:le,onClose:()=>ie(!1),actions:It,isDark:k}),ye.includes("outline")&&s.jsx(ap,{content:En,visible:!0,inline:!1,activeLine:vt,onClose:()=>Qt("outline"),onDock:()=>Ta("outline"),onMoveSection:xa,onNavigate:h=>{if(oe.current){const x=oe.current,R=x.state.doc.line(h).from;x.dispatch({selection:{anchor:R,head:R},effects:$n.scrollIntoView(R,{y:"center"})}),x.focus(),window.innerWidth<=768&&(b("editor"),y("edit"))}}}),ye.includes("property")&&s.jsx(lp,{content:En,visible:!0,inline:!1,onClose:()=>Qt("property"),onDock:()=>Ta("property"),onUpdate:il}),ye.includes("history")&&s.jsx(ip,{fileId:d,visible:!0,onRestore:h=>{kt(h),Ue(h),oe.current&&oe.current.dispatch({changes:{from:0,to:oe.current.state.doc.length,insert:h}})},onClose:()=>Qt("history"),onDock:()=>Ta("history")}),ye.includes("snippet")&&s.jsx(tp,{visible:!0,inline:!1,onClose:()=>Qt("snippet"),onDock:()=>Ta("snippet"),onInsert:h=>{fi(h),window.innerWidth<=768&&(b("editor"),y("edit"))},isDarkTheme:k}),ye.includes("preview")&&s.jsxs("div",{className:"floating-preview-panel",style:{position:"fixed",left:typeof window<"u"&&window.innerWidth<=768?0:Ut.x,top:typeof window<"u"&&window.innerWidth<=768?0:Ut.y,width:typeof window<"u"&&window.innerWidth<=768?"100%":"400px",height:typeof window<"u"&&window.innerWidth<=768?"100%":"500px",backgroundColor:"var(--color-neutral-background1)",boxShadow:"0 4px 16px rgba(0,0,0,0.15)",border:"1px solid var(--color-neutral-stroke1)",zIndex:1e3,display:"flex",flexDirection:"column",borderRadius:"4px"},children:[s.jsxs("div",{style:{padding:"8px",borderBottom:"1px solid var(--color-neutral-stroke1)",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:cn?"grabbing":"grab",backgroundColor:"var(--color-neutral-background2)",userSelect:"none"},onMouseDown:Wt,onTouchStart:ps,onMouseUp:ja,onTouchEnd:ja,children:[s.jsx("span",{style:{fontWeight:600,fontSize:"14px"},children:"Preview"}),s.jsx("button",{onClick:()=>Qt("preview"),style:{background:"none",border:"none",cursor:"pointer",fontSize:"16px"},children:"×"})]}),s.jsx("div",{style:{flex:1,backgroundColor:"var(--color-neutral-background1)",overflow:"hidden"},children:s.jsx(cs,{content:En,visible:!0,scrollRef:rn,scrollStateRef:un,inline:!1,onJumpToLine:fs,activeLine:vt})})]})]})})}ry.createRoot(document.getElementById("root")).render(s.jsx(_m.StrictMode,{children:s.jsx(Dv,{})}));export{vn as A};
