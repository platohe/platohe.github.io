import{z as oe,H as p,J as le,K as d,L as z,N as ce,Q as _,V as ue,W as F,X as u,Y as I,Z as y,_ as de,$ as he,a0 as fe,a1 as me,a2 as pe,a3 as ge,a4 as be,a5 as we,a6 as ye,a7 as Se,a8 as ve,a9 as Ce,aa as xe,ab as Ee,ac as Ne,ad as Ae,ae as Te,af as De,ag as ke,ah as Re,ai as Me,aj as Pe,ak as ze,al as _e,am as Fe,an as Ie,ao as j,ap as Oe,aq as Le,ar as $e,as as Be,at as je,au as Ue,av as Ve,aw as Ge,ax as qe,ay as We,az as He,aA as Qe,aB as Ke,aC as Xe,aD as Ze,aE as Je,aF as Ye,aG as et,aH as tt,aI as at,aJ as st,aK as nt,aL as rt,aM as it,aN as ot,aO as lt,aP as ct,aQ as ut,aR as dt,aS as ht,aT as ft,aU as mt,aV as pt,aW as gt,aX as bt,aY as wt,aZ as yt,a_ as St,a$ as vt,b0 as Ct,b1 as xt,b2 as Et,b3 as Nt,b4 as At,b5 as Tt,b6 as Dt,b7 as kt,b8 as Rt,b9 as Mt,ba as Pt,bb as zt,bc as _t,bd as Ft,be as It,bf as Ot,bg as Lt,bh as $t,bi as U,bj as Bt,bk as jt,bl as Ut,bm as Vt,bn as Gt,bo as qt,bp as Wt,bq as Ht,br as Qt,bs as Kt,bt as Xt,bu as Zt,bv as x,bw as E,bx as Jt,by as Yt,bz as ea,bA as ta,bB as aa,bC as sa,bD as na,bE as ra,bF as ia,bG as oa,bH as la,bI as ca,bJ as ua,bK as da,bL as ha,bM as fa,bN as ma,bO as N,bP as S,bQ as h,bR as pa,bS as ga,bT as ba,bU as O,bV as wa,bW as ya,bX as Sa,bY as va,bZ as Ca,b_ as V,b$ as xa,c0 as G,c1 as q,c2 as Ea,c3 as Na,c4 as Aa}from"./index-w6mGLJEs.js";import{c5 as xr,c6 as Er,c7 as Nr,c8 as Ar,c9 as Tr,ca as Dr,cb as kr,cc as Rr,cd as Mr,ce as Pr,cf as zr,cg as _r,ch as Fr,ci as Ir,cj as Or,ck as Lr,cl as $r,cm as Br,cn as jr,co as Ur,cp as Vr,cq as Gr,cr as qr,cs as Wr,ct as Hr,cu as Qr,cv as Kr,cw as Xr,cx as Zr,cy as Jr,cz as Yr,cA as ei,cB as ti,cC as ai,cD as si,cE as ni,cF as ri,cG as ii,cH as oi,cI as li,cJ as ci,cK as ui,cL as di,cM as hi,cN as fi,cO as mi,cP as pi,cQ as gi,cR as bi,cS as wi,cT as yi,cU as Si,cV as vi,cW as Ci,cX as xi,cY as Ei,cZ as Ni,c_ as Ai,c$ as Ti,d0 as Di,d1 as ki,d2 as Ri,d3 as Mi,d4 as Pi,d5 as zi,d6 as _i,d7 as Fi,d8 as Ii,d9 as Oi,da as Li,db as $i,dc as Bi,dd as ji,de as Ui,df as Vi,dg as Gi,dh as qi,di as Wi,dj as Hi,dk as Qi,dl as Ki,dm as Xi,dn as Zi,dp as Ji,dq as Yi,dr as eo,ds as to,dt as ao,du as so,dv as no,dw as ro,dx as io,dy as oo,dz as lo,dA as co,dB as uo,dC as ho,dD as fo,dE as mo,dF as po,dG as go,dH as bo,dI as wo,dJ as yo,dK as So,dL as vo,dM as Co,dN as xo,dO as Eo,dP as No,dQ as Ao,dR as To,dS as Do,dT as ko,dU as Ro,dV as Mo,dW as Po,dX as zo,dY as _o,dZ as Fo,d_ as Io,d$ as Oo,e0 as Lo,e1 as $o,e2 as Bo,e3 as jo,e4 as Uo,e5 as Vo,e6 as Go,e7 as qo,e8 as Wo,e9 as Ho,ea as Qo,eb as Ko,ec as Xo,ed as Zo,ee as Jo,ef as Yo,eg as el,eh as tl,ei as al,ej as sl,ek as nl,el as rl,em as il,en as ol,eo as ll,ep as cl,eq as ul,er as dl,es as hl,et as fl,eu as ml,ev as pl,ew as gl,ex as bl,ey as wl,ez as yl,eA as Sl,eB as vl,eC as Cl,eD as xl,eE as El,eF as Nl,eG as Al,eH as Tl,eI as Dl,eJ as kl,eK as Rl,eL as Ml,eM as Pl,eN as zl,eO as _l,eP as Fl,eQ as Il,eR as Ol,eS as Ll,eT as $l,eU as Bl,eV as jl,eW as Ul,eX as Vl,eY as Gl,eZ as ql,e_ as Wl,e$ as Hl,f0 as Ql,f1 as Kl,f2 as Xl,f3 as Zl,f4 as Jl,f5 as Yl,f6 as ec,f7 as tc,f8 as ac,f9 as sc,fa as nc,fb as rc,fc as ic,fd as oc,fe as lc,ff as cc,fg as uc,fh as dc,fi as hc,fj as fc,fk as mc,fl as pc,fm as gc,fn as bc,fo as wc,fp as yc,fq as Sc,fr as vc,fs as Cc,ft as xc,fu as Ec,fv as Nc,fw as Ac,fx as Tc,fy as Dc,fz as kc,fA as Rc,fB as Mc,fC as Pc,fD as zc,fE as _c,fF as Fc,fG as Ic,fH as Oc,fI as Lc,fJ as $c,fK as Bc,fL as jc,fM as Uc,fN as Vc,fO as Gc,fP as qc,fQ as Wc,fR as Hc,fS as Qc,fT as Kc,fU as Xc,fV as Zc,fW as Jc,fX as Yc,fY as eu,fZ as tu,f_ as au,f$ as su,g0 as nu,g1 as ru,g2 as iu,g3 as ou,g4 as lu,g5 as cu,g6 as uu,g7 as du,g8 as hu,g9 as fu,ga as mu,gb as pu,gc as gu,gd as bu,ge as wu,gf as yu,gg as Su,gh as vu,gi as Cu,gj as xu,gk as Eu,gl as Nu,gm as Au,gn as Tu,go as Du,gp as ku,gq as Ru,gr as Mu,gs as Pu,gt as zu,gu as _u,gv as Fu,gw as Iu,gx as Ou,gy as Lu,gz as $u,gA as Bu,gB as ju,gC as Uu,gD as Vu,gE as Gu,gF as qu,gG as Wu,gH as Hu,gI as Qu,gJ as Ku,gK as Xu,gL as Zu,gM as Ju,gN as Yu,gO as ed,gP as td,gQ as ad,gR as sd,gS as nd,gT as rd,gU as id,gV as od,gW as ld,gX as cd,gY as ud,gZ as dd,g_ as hd,g$ as fd,h0 as md,h1 as pd,h2 as gd,h3 as bd,h4 as wd,h5 as yd,h6 as Sd,h7 as vd,h8 as Cd,h9 as xd,ha as Ed,hb as Nd,hc as Ad,hd as Td,he as Dd,hf as kd,hg as Rd,hh as Md,hi as Pd,hj as zd,hk as _d,hl as Fd,hm as Id,hn as Od,ho as Ld,hp as $d,hq as Bd,hr as jd,hs as Ud,ht as Vd,hu as Gd,hv as qd,hw as Wd,hx as Hd,hy as Qd,hz as Kd,hA as Xd,hB as Zd,hC as Jd,hD as Yd,hE as eh,hF as th,hG as ah,hH as sh,hI as nh,hJ as rh,hK as ih,hL as oh,hM as lh,hN as ch,hO as uh,hP as dh,hQ as hh,hR as fh,hS as mh,hT as ph,hU as gh,hV as bh,hW as wh,hX as yh,hY as Sh,hZ as vh,h_ as Ch,h$ as xh,i0 as Eh,i1 as Nh,i2 as Ah,i3 as Th,i4 as Dh,i5 as kh,i6 as Rh,i7 as Mh,i8 as Ph,i9 as zh,ia as _h,ib as Fh,ic as Ih,id as Oh,ie as Lh,ig as $h,ih as Bh,ii as jh,ij as Uh,ik as Vh,il as Gh,im as qh,io as Wh,ip as Hh,iq as Qh,ir as Kh,is as Xh,it as Zh,iu as Jh,iv as Yh,iw as ef,ix as tf,iy as af,iz as sf,iA as nf,iB as rf,iC as of,iD as lf,iE as cf,iF as uf,iG as df,iH as hf,iI as ff,iJ as mf,iK as pf,iL as gf,iM as bf,iN as wf,iO as yf,iP as Sf,iQ as vf,iR as Cf,iS as xf,iT as Ef,iU as Nf,iV as Af,iW as Tf,iX as Df,iY as kf,iZ as Rf,i_ as Mf,i$ as Pf,j0 as zf,j1 as _f,j2 as Ff,j3 as If,j4 as Of,j5 as Lf,j6 as $f,j7 as Bf,j8 as jf,j9 as Uf,ja as Vf,jb as Gf,jc as qf,jd as Wf,je as Hf,jf as Qf,jg as Kf,jh as Xf,ji as Zf,jj as Jf,jk as Yf,jl as em,jm as tm,jn as am,jo as sm,jp as nm,jq as rm,jr as im,js as om,jt as lm,ju as cm,jv as um,jw as dm,jx as hm}from"./index-w6mGLJEs.js";/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ta=.001,W=.1;function Da(e,t,a){return a==null&&(a=A()),C(e,t,(s,n)=>T(s,n,a))}function A(){return le.backend.floatPrecision()===32?Ta:W}function C(e,t,a){let s=!0;if((d(e)||d(t))&&(s=!1),d(e)&&d(t)&&(s=!0),s){const i=e.constructor.name,r=t.constructor.name;if(i!==r)throw new Error(`Arrays are of different type. Actual: ${i}. Expected: ${r}`)}if(Array.isArray(e)&&Array.isArray(t)){const i=z(e),r=z(t);if(!ce(i,r))throw new Error(`Arrays have different shapes. Actual: [${i}]. Expected: [${r}]`)}const n=d(e)?e:_(e),o=d(t)?t:_(t);if(n.length!==o.length)throw new Error(`Arrays have different lengths actual: ${n.length} vs expected: ${o.length}.
Actual:   ${n}.
Expected: ${o}.`);for(let i=0;i<o.length;++i){const r=n[i],l=o[i];if(!a(r,l))throw new Error(`Arrays differ: actual[${i}] = ${r}, expected[${i}] = ${l}.
Actual:   ${n}.
Expected: ${o}.`)}typeof expect<"u"&&expect().nothing()}function ka(e,t){e().then(()=>t.fail(),()=>t()),typeof expect<"u"&&expect().nothing()}function Ra(e,t){const a=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return p(e)||p(e[0])||p(t)||p(t[0])?C(e,a,(s,n)=>s==n):C(e,t,(s,n)=>T(s,n,0))}function Ma(e,t,a){if(a==null&&(a=A()),!T(e,t,a))throw new Error(`Numbers differ: actual === ${e}, expected === ${t}`);typeof expect<"u"&&expect().nothing()}function T(e,t,a){return!isFinite(e)&&!isFinite(t)?!0:!(isNaN(e)||isNaN(t)||Math.abs(e-t)>a)}function Pa(e,t,a){for(let s=0;s<e.length;s++)if(e[s]<t||e[s]>a)throw new Error(`Value out of range:${e[s]} low: ${t}, high: ${a}`)}function za(e,t){const a=new Float32Array(e),s=new Float32Array(t);if(a.length!==s.length)throw new Error(`Expected ArrayBuffer to be of length ${s.length}, but it was ${a.length}`);for(let n=0;n<s.length;n++)if(a[n]!==s[n])throw new Error(`Expected ArrayBuffer value at ${n} to be ${s[n]} but got ${a[n]} instead`)}function H(e){for(let t=0;t<e.length;t++){const a=e[t];Array.isArray(a)?H(a):e[t]=oe(a)}return e}function _a(e){const t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise(a=>{t.addEventListener("loadeddata",s=>a(t)),t.load()})}async function Fa(e){await e.play(),"requestVideoFrameCallback"in e&&await new Promise(t=>{e.requestVideoFrameCallback(t)})}const ir=Object.freeze(Object.defineProperty({__proto__:null,TEST_EPSILON_FLOAT16:W,createVideoElement:_a,encodeStrings:H,expectArrayBuffersEqual:za,expectArraysClose:Da,expectArraysEqual:Ra,expectNumbersClose:Ma,expectPromiseToFail:ka,expectValuesInRange:Pa,play:Fa,testEpsilon:A},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ia(e,t,a){const s=F(e,"labels","confusionMatrix"),n=F(t,"predictions","confusionMatrix");u(a==null||a>0&&Number.isInteger(a),()=>`If provided, numClasses must be a positive integer, but got ${a}`),u(s.rank===1,()=>`Expected the rank of labels to be 1, but got ${s.rank}`),u(n.rank===1,()=>`Expected the rank of predictions to be 1, but got ${n.rank}`),u(s.shape[0]===n.shape[0],()=>`Mismatch in the number of examples: ${s.shape[0]} vs. ${n.shape[0]}. Labels and predictions should have the same number of elements.`),u(a>0&&Number.isInteger(a),()=>`numClasses is required to be a positive integer, but got ${a}`);const o=I(y(s,"int32"),a),i=I(y(n,"int32"),a),r=de(o),l=he(r,i);return y(l,"int32")}const Oa=ue({confusionMatrix_:Ia});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const or=Object.freeze(Object.defineProperty({__proto__:null,confusionMatrix:Oa},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const La="4.22.0";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lr=Object.freeze(Object.defineProperty({__proto__:null,nonMaxSuppressionV3Impl:fe,nonMaxSuppressionV4Impl:me,nonMaxSuppressionV5Impl:pe,whereImpl:ge},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function $a(e){return new be(e)}function Ba(e){return new Se(e)}function ja(){return new ye}function Ua(e){return new we(e)}const cr=Object.freeze(Object.defineProperty({__proto__:null,maxNorm:$a,minMaxNorm:Ua,nonNeg:ja,unitNorm:Ba},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Va(){return new Fe}function Ga(){return new ke}function qa(e){return new ve(e)}function Wa(e){return new Pe(e)}function Ha(e){return new Me(e)}function Qa(e){return new ze(e)}function Ka(e){return new Ae(e)}function Xa(e){return new _e(e)}function Za(e){return new xe(e)}function Ja(e){return new Ce(e)}function Ya(e){return new Ee(e)}function es(e){return new Ne(e)}function ts(e){return new Te(e)}function as(e){return new De(e)}function ss(e){return new Re(e)}const ur=Object.freeze(Object.defineProperty({__proto__:null,constant:qa,glorotNormal:Ja,glorotUniform:Za,heNormal:Ya,heUniform:es,identity:Ka,leCunNormal:ts,leCunUniform:as,ones:Ga,orthogonal:ss,randomNormal:Ha,randomUniform:Wa,truncatedNormal:Qa,varianceScaling:Xa,zeros:Va},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function dr(e){return new j(e)}function hr(e){return new Le(e)}function ns(e){return Ie(e)}function fr(e,t){Oe.registerCallbackConstructor(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function rs(e){return new St(e)}function is(e){return new ct(e)}function os(e){return new Ft(e)}function ls(e){return new Ct(e)}function cs(e){return new zt(e)}function us(e){return new Vt(e)}function ds(e){return new Wt(e)}function hs(e){return new Ze(e)}function fs(e){return new Je(e)}function ms(e){return new Ye(e)}function ps(e){return new et(e)}function gs(e){return new tt(e)}function bs(e){return new Bt(e)}function ws(e){return new nt(e)}function ys(e){return new Qt(e)}function Ss(e){return new it(e)}function vs(e){return new $e(e)}function Cs(e){return new rt(e)}function xs(e){return new lt(e)}function Es(e){return new Gt(e)}function Ns(e){return new dt(e)}function As(e){return new It(e)}function Ts(e){return new Lt(e)}function Ds(e){return new Pt(e)}function ks(e){return new ut(e)}function Rs(e){return new Be(e)}function Ms(e){return new Ue(e)}function Ps(e){return new Xe(e)}function zs(e){return new kt(e)}function _s(e){return new Rt(e)}function Fs(e){return new Mt(e)}function Is(e){return new ot(e)}function Os(e){return new We(e)}function Ls(e){return new vt(e)}function $s(e){return new Kt(e)}function D(e){return new Ve(e)}function Bs(e){return D(e)}function js(e){return D(e)}function k(e){return new Ge(e)}function Us(e){return k(e)}function Vs(e){return k(e)}function R(e){return new qe(e)}function Gs(e){return R(e)}function qs(e){return R(e)}function Ws(e){return new mt(e)}function Hs(e){return new pt(e)}function Q(e){return new gt(e)}function K(e){return new bt(e)}function X(e){return new At(e)}function Z(e){return new Tt(e)}function Qs(e){return new Dt(e)}function Ks(e){return new wt(e)}function Xs(e){return new yt(e)}function Zs(e){return new xt(e)}function Js(e){return new Et(e)}function Ys(e){return new jt(e)}function en(e){return new Ut(e)}function tn(e){return new at(e)}function an(e){return new st(e)}function sn(e){return new U(e)}function nn(e){return new qt(e)}function rn(e){return new He(e)}function on(e){return new Ht(e)}const ln=Q,cn=K,un=X,dn=Z;function hn(e){return new ft(e)}function fn(e){return new ht(e)}function mn(e){return new je(e)}function pn(e){return new Nt(e)}function gn(e){return new Ot(e)}function bn(e){return new Ke(e)}function wn(e){return new $t(e)}function yn(e){return new Qe(e)}function Sn(e){return new _t(e)}const mr=Object.freeze(Object.defineProperty({__proto__:null,Layer:Xt,RNN:U,RNNCell:Zt,activation:vs,add:Rs,alphaDropout:mn,average:Ms,averagePooling1d:D,averagePooling2d:k,averagePooling3d:R,avgPool1d:Bs,avgPool2d:Us,avgPool3d:Gs,avgPooling1d:js,avgPooling2d:Vs,avgPooling3d:qs,batchNormalization:Os,bidirectional:rn,categoryEncoding:yn,centerCrop:bn,concatenate:Ps,conv1d:hs,conv2d:fs,conv2dTranspose:ms,conv3d:ps,conv3dTranspose:gs,convLstm2d:tn,convLstm2dCell:an,cropping2D:ws,dense:Cs,depthwiseConv2d:Ss,dot:Is,dropout:xs,elu:is,embedding:ks,flatten:Ns,gaussianDropout:fn,gaussianNoise:hn,globalAveragePooling1d:Ws,globalAveragePooling2d:Hs,globalMaxPool1d:ln,globalMaxPool2d:cn,globalMaxPooling1d:Q,globalMaxPooling2d:K,gru:Ks,gruCell:Xs,input:ns,inputLayer:rs,layerNormalization:Ls,leakyReLU:ls,lstm:Zs,lstmCell:Js,masking:pn,maxPool1d:un,maxPool2d:dn,maxPooling1d:X,maxPooling2d:Z,maxPooling3d:Qs,maximum:zs,minimum:_s,multiply:Fs,permute:Ds,prelu:cs,randomWidth:Sn,reLU:os,repeatVector:As,rescaling:gn,reshape:Ts,resizing:wn,rnn:sn,separableConv2d:bs,simpleRNN:Ys,simpleRNNCell:en,softmax:us,spatialDropout1d:Es,stackedRNNCells:nn,thresholdedReLU:ds,timeDistributed:on,upSampling2d:ys,zeroPadding2d:$s},Symbol.toStringTag,{value:"Module"}));function vn(e,t){return Jt(e,t)}function Cn(e,t){return Yt(e,t)}function xn(e,t){return oa(e,t)}function En(e,t){return ea(e,t)}function Nn(e,t){return ta(e,t)}function An(e,t){return na(e,t)}function Tn(e,t){return ia(e,t)}function Dn(e,t){return aa(e,t)}function kn(e,t){return sa(e,t)}function Rn(e,t){return x(e,t)}function Mn(e,t){return x(e,t)}function Pn(e,t){return x(e,t)}function zn(e,t){return E(e,t)}function _n(e,t){return E(e,t)}function Fn(e,t){return E(e,t)}function In(e,t){return ra(e,t)}const pr=Object.freeze(Object.defineProperty({__proto__:null,MAPE:Mn,MSE:_n,binaryAccuracy:vn,binaryCrossentropy:Cn,categoricalAccuracy:En,categoricalCrossentropy:Nn,cosineProximity:Dn,mape:Pn,meanAbsoluteError:kn,meanAbsolutePercentageError:Rn,meanSquaredError:zn,mse:Fn,precision:An,r2Score:In,recall:Tn,sparseCategoricalAccuracy:xn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const gr=Object.freeze(Object.defineProperty({__proto__:null,modelFromJSON:la},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function On(e){return new ua(e)}function Ln(e){return ca(e)}function $n(e){return da(e)}const br=Object.freeze(Object.defineProperty({__proto__:null,l1:Ln,l1l2:On,l2:$n},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Bn extends ha{constructor(){super(...arguments),this.model=null}setModel(t){if(!(t instanceof j))throw new Error("model must be a LayersModel, not some other Container");this.model=t}}function g(e,t){return e<t}function L(e,t){return e>t}class jn extends Bn{constructor(t){if(super(),t==null&&(t={}),t.restoreBestWeights)throw new fa("restoreBestWeights = True is not implemented in EarlyStopping yet.");this.monitor=t.monitor||"val_loss",this.minDelta=Math.abs(t.minDelta||0),this.patience=t.patience||0,this.verbose=t.verbose||0,this.mode=t.mode||"auto",this.baseline=t.baseline,["auto","min","max"].indexOf(this.mode)===-1&&(console.warn(`EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`),this.mode="auto"),this.mode==="min"?this.monitorFunc=g:this.mode==="max"?this.monitorFunc=L:this.monitor.indexOf("acc")!==-1?this.monitorFunc=L:this.monitorFunc=g,this.monitorFunc===g&&(this.minDelta*=-1)}async onTrainBegin(t){this.wait=0,this.stoppedEpoch=0,this.baseline!=null?this.best=this.baseline:this.best=this.monitorFunc===g?1/0:-1/0}async onEpochEnd(t,a){await ma(a);const s=this.getMonitorValue(a);s!=null&&(this.monitorFunc(s-this.minDelta,this.best)?(this.best=s,this.wait=0):(this.wait++,this.wait>=this.patience&&(this.stoppedEpoch=t,this.model.stopTraining=!0)))}async onTrainEnd(t){this.stoppedEpoch>0&&this.verbose&&console.log(`Epoch ${this.stoppedEpoch}: early stopping.`)}getMonitorValue(t){t==null&&(t={});const a=t[this.monitor];return a==null&&console.warn(`Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(t)}`),a}}function Un(e){return new jn(e)}const wr={earlyStopping:Un};/** @license See the LICENSE file. */const Vn="4.22.0";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class J extends N{constructor(t){super(),this.input=t}async iterator(){return(await this.input.iterator()).decodeUTF8().split(`
`).map(n=>(n.endsWith("\r")&&(n=n.slice(0,-1)),n))}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */const b='"',m=Symbol("out"),$=Symbol("field"),w=Symbol("quote"),v=Symbol("quoteafterquote"),B=Symbol("quoteinquote");class Y extends N{async columnNames(){return this.columnNamesValidated||await this.setColumnNames(),this.configuredColumnsOnly?Object.keys(this.columnConfigs):this.fullColumnNames}async setColumnNames(){const t=await this.maybeReadHeaderLine();if(!this.fullColumnNames&&!t)throw new Error("Column names must be provided if there is no header line.");this.fullColumnNames&&t&&u(t.length===this.fullColumnNames.length,()=>"The length of provided columnNames ("+this.fullColumnNames.length.toString()+") does not match the length of the header line read from file ("+t.length.toString()+")."),this.fullColumnNames||(this.fullColumnNames=t);const a=this.fullColumnNames.reduce((n,o)=>(n[o]=n[o]+1||1,n),{}),s=Object.keys(a).filter(n=>a[n]>1);if(u(s.length===0,()=>"Duplicate column names found: "+s.toString()),this.columnConfigs){for(const n of Object.keys(this.columnConfigs))if(this.fullColumnNames.indexOf(n)===-1)throw new Error('The key "'+n+'" provided in columnConfigs does not match any of the column names ('+this.fullColumnNames.toString()+").")}this.columnNamesValidated=!0}async maybeReadHeaderLine(){if(this.hasHeader){const a=await(await this.base.iterator()).next();if(a.done)throw new Error("No data was found for CSV parsing.");const s=a.value;return this.parseRow(s,!1)}else return null}constructor(t,a){super(),this.input=t,this.hasHeader=!0,this.fullColumnNames=null,this.columnNamesValidated=!1,this.columnConfigs=null,this.configuredColumnsOnly=!1,this.delimiter=",",this.delimWhitespace=!1,this.base=new J(t),a||(a={}),this.hasHeader=a.hasHeader!==!1,this.fullColumnNames=a.columnNames,this.columnConfigs=a.columnConfigs,this.configuredColumnsOnly=a.configuredColumnsOnly,a.delimWhitespace?(u(a.delimiter==null,()=>"Delimiter should not be provided when delimWhitespace is true."),this.delimWhitespace=!0,this.delimiter=" "):this.delimiter=a.delimiter?a.delimiter:","}async iterator(){this.columnNamesValidated||await this.setColumnNames();let t=await this.base.iterator();return this.hasHeader&&(t=t.skip(1)),t.map(a=>this.makeDataElement(a))}makeDataElement(t){const a=this.parseRow(t),s={},n={};for(let o=0;o<this.fullColumnNames.length;o++){const i=this.fullColumnNames[o],r=this.columnConfigs?this.columnConfigs[i]:null;if(!(this.configuredColumnsOnly&&!r)){const l=a[o];let c=null;if(l==="")if(r&&r.default!==void 0)c=r.default;else{if(r&&(r.required||r.isLabel))throw new Error(`Required column ${i} is empty in this line: ${t}`);c=void 0}else{const f=Number(l);if(isNaN(f))r&&r.dtype==="bool"?c=this.getBoolean(l):c=l;else if(!r||!r.dtype)c=f;else switch(r.dtype){case"float32":c=f;break;case"int32":c=Math.floor(f);break;case"bool":c=this.getBoolean(l);break;default:c=f}}r&&r.isLabel?n[i]=c:s[i]=c}}return Object.keys(n).length===0?s:{xs:s,ys:n}}getBoolean(t){return t==="1"||t.toLowerCase()==="true"?1:0}parseRow(t,a=!0){const s=[];let n=0;const o=t.length;let i=m;for(let r=0;r<o;r++)switch(i){case m:switch(t.charAt(r)){case b:n=r+1,i=w;break;case this.delimiter:if(n=r+1,this.delimiter===" "&&this.delimWhitespace)break;s.push(""),i=m;break;default:i=$,n=r;break}break;case $:switch(t.charAt(r)){case this.delimiter:s.push(t.substring(n,r)),i=m,n=r+1;break}break;case w:switch(t.charAt(r)){case b:i=v;break}break;case v:switch(t.charAt(r)){case this.delimiter:s.push(t.substring(n,r-1)),i=m,n=r+1;break;case b:i=w;break;default:i=B;break}break;case B:switch(t.charAt(r)){case b:i=w;break}break}if(i===v?s.push(t.substring(n,o-1)):s.push(t.substring(n)),a&&s.length!==this.fullColumnNames.length)throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${s}`);return s}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class M extends S{constructor(t){super(),this.microphoneConfig=t,this.isClosed=!1,this.fftSize=t.fftSize||1024;const a=Math.log2(this.fftSize);if(this.fftSize<0||a<4||a>14||!Number.isInteger(a))throw new Error(`Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got ${this.fftSize}`);if(this.numFrames=t.numFramesPerSpectrogram||43,this.sampleRateHz=t.sampleRateHz,this.columnTruncateLength=t.columnTruncateLength||this.fftSize,this.audioTrackConstraints=t.audioTrackConstraints,this.smoothingTimeConstant=t.smoothingTimeConstant||0,this.includeSpectrogram=t.includeSpectrogram!==!1,this.includeWaveform=t.includeWaveform===!0,!this.includeSpectrogram&&!this.includeWaveform)throw new Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.")}summary(){return"microphone"}static async create(t={}){if(!h().get("IS_BROWSER"))throw new Error("microphone API is only supported in browser environment.");const a=new M(t);return await a.start(),a}async start(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:this.audioTrackConstraints==null?!0:this.audioTrackConstraints,video:!1})}catch(s){throw new Error(`Error thrown while initializing video stream: ${s.message}`)}if(!this.stream)throw new Error("Could not obtain audio from microphone.");const t=window.AudioContext||window.webkitAudioContext;if(this.audioContext=new t,!this.sampleRateHz)this.sampleRateHz=this.audioContext.sampleRate;else if(this.audioContext.sampleRate!==this.sampleRateHz)throw new Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: ${this.audioContext.sampleRate}`);const a=this.audioContext.createMediaStreamSource(this.stream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.fftSize*2,this.analyser.smoothingTimeConstant=this.smoothingTimeConstant,a.connect(this.analyser),this.freqData=new Float32Array(this.fftSize),this.timeData=new Float32Array(this.fftSize)}async next(){if(this.isClosed)return{value:null,done:!0};let t,a;const s=await this.getAudioData();if(this.includeSpectrogram){const n=this.flattenQueue(s.freqDataQueue);t=this.getTensorFromAudioDataArray(n,[this.numFrames,this.columnTruncateLength,1])}if(this.includeWaveform){const n=this.flattenQueue(s.timeDataQueue);a=this.getTensorFromAudioDataArray(n,[this.numFrames*this.fftSize,1])}return{value:{spectrogram:t,waveform:a},done:!1}}async capture(){return(await this.next()).value}async getAudioData(){const t=[],a=[];let s=0;return new Promise(n=>{const o=setInterval(()=>{this.includeSpectrogram&&(this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0&&n({freqDataQueue:t,timeDataQueue:a}),t.push(this.freqData.slice(0,this.columnTruncateLength))),this.includeWaveform&&(this.analyser.getFloatTimeDomainData(this.timeData),a.push(this.timeData.slice())),++s===this.numFrames&&(clearInterval(o),n({freqDataQueue:t,timeDataQueue:a}))},this.fftSize/this.sampleRateHz*1e3)})}stop(){this.isClosed||(this.isClosed=!0,this.analyser.disconnect(),this.audioContext.close(),this.stream!=null&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop())}toArray(){throw new Error("Can not convert infinite audio stream to array.")}getSampleRate(){return this.sampleRateHz}flattenQueue(t){const a=t[0].length,s=new Float32Array(t.length*a);return t.forEach((n,o)=>s.set(n,o*a)),s}getTensorFromAudioDataArray(t,a){const s=new Float32Array(pa(a));return s.set(t,s.length-t.length),ga(s,a)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class P extends S{constructor(t,a){if(super(),this.webcamVideoElement=t,this.webcamConfig=a,this.isClosed=!0,this.resize=!1,this.needToResize())if(this.resize=!0,this.cropSize=[this.webcamConfig.resizeHeight,this.webcamConfig.resizeWidth],this.cropBoxInd=ba([0],"int32"),this.webcamConfig.centerCrop){const s=this.webcamConfig.resizeWidth*1/this.webcamVideoElement.width,n=this.webcamConfig.resizeHeight*1/this.webcamVideoElement.height,o=(1-s)/2,i=(1-n)/2,r=o+s,l=n+i;this.cropBox=O([i,o,l,r],[1,4])}else this.cropBox=O([0,0,1,1],[1,4])}summary(){return"webcam"}static async create(t,a={}){if(!h().get("IS_BROWSER"))throw new Error("tf.data.webcam is only supported in browser environment.");if(!t){if(t=document.createElement("video"),!a.resizeWidth||!a.resizeHeight)throw new Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");t.width=a.resizeWidth,t.height=a.resizeHeight}const s=new P(t,a);return await s.start(),s}async start(){this.webcamConfig.facingMode&&u(this.webcamConfig.facingMode==="user"||this.webcamConfig.facingMode==="environment",()=>`Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);try{this.stream=await navigator.mediaDevices.getUserMedia({video:{deviceId:this.webcamConfig.deviceId,facingMode:this.webcamConfig.facingMode?this.webcamConfig.facingMode:"user",width:this.webcamVideoElement.width,height:this.webcamVideoElement.height}})}catch(t){throw t.message=`Error thrown while initializing video stream: ${t.message}`,t}if(!this.stream)throw new Error("Could not obtain video from webcam.");try{this.webcamVideoElement.srcObject=this.stream}catch(t){console.log(t),this.webcamVideoElement.src=window.URL.createObjectURL(this.stream)}return this.webcamVideoElement.play(),this.isClosed=!1,new Promise(t=>{this.webcamVideoElement.onloadedmetadata=()=>{t()}})}async next(){if(this.isClosed)return{value:null,done:!0};let t;try{t=wa(this.webcamVideoElement)}catch(a){throw new Error(`Error thrown converting video to pixels: ${JSON.stringify(a)}`)}if(this.resize)try{return{value:this.cropAndResizeFrame(t),done:!1}}catch(a){throw new Error(`Error thrown cropping the video: ${a.message}`)}finally{t.dispose()}else return{value:t,done:!1}}needToResize(){return!!(this.webcamConfig.resizeWidth&&this.webcamConfig.resizeHeight&&(this.webcamVideoElement.width!==this.webcamConfig.resizeWidth||this.webcamVideoElement.height!==this.webcamConfig.resizeHeight))}cropAndResizeFrame(t){return ya(()=>{const a=Sa(y(t,"float32"),0);let s;s=va.cropAndResize(a,this.cropBox,this.cropBoxInd,this.cropSize,"bilinear");const n=s.shape;return Ca(s,n.slice(1))})}async capture(){return(await this.next()).value}stop(){this.stream.getTracks().forEach(a=>a.stop());try{this.webcamVideoElement.srcObject=null}catch(a){console.log(a),this.webcamVideoElement.src=null}this.isClosed=!0}toArray(){throw new Error("Can not convert infinite video stream to array.")}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class ee{}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class te extends S{split(t){return new Gn(this,t)}}class Gn extends te{constructor(t,a){super(),this.upstream=t,this.impl=new qn(t,a)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class qn extends V{constructor(t,a){super(),this.upstream=t,this.separator=a,this.carryover=""}summary(){return`${this.upstream.summary()} -> Split('${this.separator}')`}async pump(){const t=await this.upstream.next();if(t.done)return this.carryover===""?!1:(this.outputQueue.push(this.carryover),this.carryover="",!0);const a=t.value.split(this.separator);a[0]=this.carryover+a[0];for(const s of a.slice(0,-1))this.outputQueue.push(s);return this.carryover=a[a.length-1],!0}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Wn extends S{decodeUTF8(){return new Hn(this)}}class Hn extends te{constructor(t){super(),this.upstream=t,this.impl=new Qn(t)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class Qn extends V{constructor(t){if(super(),this.upstream=t,h().get("IS_BROWSER"))this.decoder=new TextDecoder("utf-8");else{const{StringDecoder:a}=require("string_decoder");this.decoder=new a("utf8")}}summary(){return`${this.upstream.summary()} -> Utf8`}async pump(){const t=await this.upstream.next();let a;if(t.done)return!1;a=t.value;let s;return h().get("IS_BROWSER")?s=this.decoder.decode(a,{stream:!0}):s=this.decoder.write(Buffer.from(a.buffer)),this.outputQueue.push(s),!0}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class ae extends Wn{constructor(t,a={}){super(),this.file=t,this.options=a,u(t instanceof Uint8Array||(h().get("IS_BROWSER")?t instanceof File||t instanceof Blob:!1),()=>"FileChunkIterator only supports File, Blob and Uint8Array right now."),this.offset=a.offset||0,this.chunkSize=a.chunkSize||1024*1024}summary(){return`FileChunks ${this.file}`}async next(){return this.offset>=(this.file instanceof Uint8Array?this.file.byteLength:this.file.size)?{value:null,done:!0}:{value:await new Promise((a,s)=>{const n=this.offset+this.chunkSize;if(this.file instanceof Uint8Array)a(new Uint8Array(this.file.slice(this.offset,n)));else{const o=new FileReader;o.onload=r=>{let l=o.result;if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),!(l instanceof Uint8Array))return s(new TypeError("FileReader returned unknown type."));a(l)},o.onabort=r=>s(new Error("Aborted")),o.onerror=r=>s(new Error(r.type));const i=this.file.slice(this.offset,n);o.readAsArrayBuffer(i)}this.offset=n}),done:!1}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */async function Kn(e,t={},a){let s,n;typeof e=="string"?s=e:(s=e.url,n=Xn(e));const o=await xa(s,n);if(o.ok){const i=new Uint8Array(await o.arrayBuffer());return new ae(i,t)}else throw new Error(o.statusText)}const Xn=e=>({method:e.method,headers:e.headers,body:e.body,mode:e.mode,credentials:e.credentials,cache:e.cache,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function se(e){return typeof e=="string"&&e.slice(0,7)==="file://"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class ne extends ee{constructor(t,a={}){super(),this.input=t,this.options=a}async iterator(){if(se(this.input)&&h().get("IS_NODE")){const t=require("fs");this.input=t.readFileSync(this.input.slice(7))}return new ae(this.input,this.options)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class re extends ee{constructor(t,a={}){super(),this.url=t,this.fileOptions=a}async iterator(){return se(this.url)?new ne(this.url,this.fileOptions).iterator():Kn(this.url,this.fileOptions)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function Zn(e,t={}){return new Y(new re(e),t)}function Jn(e){const t=G(e);return q(async()=>t)}function Yn(e){return q(async()=>{const t=await e();return G(()=>t.next())})}async function er(e,t){return P.create(e,t)}async function tr(e){return M.create(e)}/** @license See the LICENSE file. */const ie="4.22.0";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yr=Object.freeze(Object.defineProperty({__proto__:null,CSVDataset:Y,Dataset:N,FileDataSource:ne,TextLineDataset:J,URLDataSource:re,array:Ea,csv:Zn,func:Jn,generator:Yn,microphone:tr,version_data:ie,webcam:er,zip:Na},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const ar="4.22.0";/** @license See the LICENSE file. */const sr="4.22.0";/** @license See the LICENSE file. */const nr="4.22.0";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sr={"tfjs-core":La,"tfjs-backend-cpu":ar,"tfjs-backend-webgl":sr,"tfjs-data":ie,"tfjs-layers":Aa,"tfjs-converter":Vn,tfjs:nr};export{xr as Abs,Er as Acos,Nr as Acosh,Ar as AdadeltaOptimizer,Tr as AdagradOptimizer,Dr as AdamOptimizer,kr as AdamaxOptimizer,Rr as Add,Mr as AddN,Pr as All,zr as Any,_r as ArgMax,Fr as ArgMin,Ir as Asin,Or as Asinh,Lr as Atan,$r as Atan2,Br as Atanh,jr as AvgPool,Ur as AvgPool3D,Vr as AvgPool3DGrad,Gr as AvgPoolGrad,qr as BatchMatMul,Wr as BatchToSpaceND,Hr as Bincount,Qr as BitwiseAnd,Kr as BroadcastArgs,Xr as BroadcastTo,Bn as Callback,Zr as CallbackList,Jr as Cast,Yr as Ceil,ei as ClipByValue,ti as Complex,ai as ComplexAbs,si as Concat,ni as Conv2D,ri as Conv2DBackpropFilter,ii as Conv2DBackpropInput,oi as Conv3D,li as Conv3DBackpropFilterV2,ci as Conv3DBackpropInputV2,ui as Cos,di as Cosh,hi as CropAndResize,fi as Cumprod,mi as Cumsum,pi as CustomCallback,gi as DataStorage,bi as DenseBincount,wi as DepthToSpace,yi as DepthwiseConv2dNative,Si as DepthwiseConv2dNativeBackpropFilter,vi as DepthwiseConv2dNativeBackpropInput,Ci as Diag,xi as Dilation2D,Ei as Dilation2DBackpropFilter,Ni as Dilation2DBackpropInput,Ai as Draw,Ti as ENV,jn as EarlyStopping,Di as Einsum,ki as Elu,Ri as EluGrad,Mi as Environment,Pi as Equal,zi as Erf,_i as Exp,Fi as ExpandDims,Ii as Expm1,Oi as FFT,Li as Fill,$i as FlipLeftRight,Bi as Floor,ji as FloorDiv,Ui as FromPixels,Vi as FusedBatchNorm,Gi as FusedConv2D,qi as FusedDepthwiseConv2D,Wi as GPGPUContext,Hi as GatherNd,Qi as GatherV2,Ki as GraphModel,Xi as Greater,Zi as GreaterEqual,Ji as History,Yi as IFFT,eo as Identity,to as Imag,ao as InputSpec,so as IsFinite,no as IsInf,ro as IsNan,io as KernelBackend,oo as LRN,lo as LRNGrad,co as LayerVariable,j as LayersModel,uo as LeakyRelu,ho as Less,fo as LessEqual,mo as LinSpace,po as Log,go as Log1p,bo as LogSoftmax,wo as LogicalAnd,yo as LogicalNot,So as LogicalOr,vo as LogicalXor,Co as LowerBound,xo as MathBackendCPU,Eo as MathBackendWebGL,No as MatrixBandPart,Ao as Max,To as MaxPool,Do as MaxPool3D,ko as MaxPool3DGrad,Ro as MaxPoolGrad,Mo as MaxPoolWithArgmax,Po as Maximum,zo as Mean,_o as Min,Fo as Minimum,Io as MirrorPad,Oo as Mod,Lo as MomentumOptimizer,$o as Multinomial,Bo as Multiply,jo as Neg,Uo as NonMaxSuppressionV3,Vo as NonMaxSuppressionV4,Go as NonMaxSuppressionV5,qo as NotEqual,Wo as OP_SCOPE_SUFFIX,Ho as OneHot,Qo as OnesLike,Ko as Optimizer,Xo as OptimizerConstructors,Zo as Pack,Jo as PadV2,Yo as Pool,el as Pow,tl as Prelu,al as Prod,sl as RMSPropOptimizer,U as RNN,nl as RaggedGather,rl as RaggedRange,il as RaggedTensorToTensor,ol as Range,ll as Rank,cl as Real,ul as RealDiv,dl as Reciprocal,hl as Reduction,fl as Relu,ml as Relu6,pl as Reshape,gl as ResizeBilinear,bl as ResizeBilinearGrad,wl as ResizeNearestNeighbor,yl as ResizeNearestNeighborGrad,Sl as Reverse,vl as RotateWithOffset,Cl as Round,xl as Rsqrt,El as SGDOptimizer,Nl as ScatterNd,Al as SearchSorted,Tl as Select,Dl as Selu,Le as Sequential,kl as Sigmoid,Rl as Sign,Ml as Sin,Pl as Sinh,zl as Slice,_l as Softmax,Fl as Softplus,Il as SpaceToBatchND,Ol as SparseFillEmptyRows,Ll as SparseReshape,$l as SparseSegmentMean,Bl as SparseSegmentSum,jl as SparseToDense,Ul as SplitV,Vl as Sqrt,Gl as Square,ql as SquaredDifference,Wl as StaticRegexReplace,Hl as Step,Ql as StridedSlice,Kl as StringNGrams,Xl as StringSplit,Zl as StringToHashBucketFast,Jl as Sub,Yl as Sum,ec as SymbolicTensor,tc as Tan,ac as Tanh,sc as Tensor,nc as TensorBuffer,rc as TensorScatterUpdate,ic as Tile,oc as TopK,lc as Transform,cc as Transpose,uc as Unique,dc as Unpack,hc as UnsortedSegmentSum,fc as UpperBound,mc as Variable,pc as ZerosLike,gc as _FusedMatMul,bc as abs,wc as acos,yc as acosh,Sc as add,vc as addN,Cc as all,xc as any,Ec as argMax,Nc as argMin,Ac as asin,Tc as asinh,Dc as atan,kc as atan2,Rc as atanh,Mc as avgPool,Pc as avgPool3d,zc as backend,_c as backend_util,Fc as basicLSTMCell,Ic as batchNorm,Oc as batchNorm2d,Lc as batchNorm3d,$c as batchNorm4d,Bc as batchToSpaceND,jc as bincount,Uc as bitwiseAnd,Vc as booleanMaskAsync,Gc as broadcastArgs,qc as broadcastTo,Wc as broadcast_util,Hc as browser,Qc as buffer,wr as callbacks,y as cast,Kc as ceil,Xc as clipByValue,Zc as clone,Jc as complex,Yc as concat,eu as concat1d,tu as concat2d,au as concat3d,su as concat4d,cr as constraints,nu as conv1d,ru as conv2d,iu as conv2dTranspose,ou as conv3d,lu as conv3dTranspose,cu as copyRegisteredKernels,uu as cos,du as cosh,hu as cosineWindow,fu as cumprod,mu as cumsum,pu as customGrad,yr as data,gu as denseBincount,bu as deprecationWarn,wu as depthToSpace,yu as depthwiseConv2d,Su as deregisterOp,vu as device_util,Cu as diag,xu as dilation2d,Eu as disableDeprecationWarnings,Nu as dispose,Au as disposeVariables,Tu as div,Du as divNoNan,ku as dot,Ru as dropout,Mu as einsum,Pu as elu,zu as enableDebugMode,_u as enableProdMode,Fu as enclosingPowerOfTwo,Iu as engine,Ou as ensureShape,h as env,Lu as equal,$u as erf,Bu as euclideanNorm,ju as exp,Sa as expandDims,Uu as expm1,Vu as eye,Gu as fft,qu as fill,Wu as findBackend,Hu as findBackendFactory,Qu as floor,Ku as floorDiv,Xu as forceHalfFloat,Zu as fused,Ju as gather,Yu as gatherND,ed as gather_util,td as getBackend,ad as getGradient,sd as getKernel,nd as getKernelsForBackend,rd as gpgpu_util,id as grad,od as grads,ld as greater,cd as greaterEqual,ud as ifft,dd as imag,va as image,hd as inTopKAsync,ur as initializers,ns as input,fd as io,md as irfft,pd as isFinite,gd as isInf,bd as isNaN,wd as keep,lr as kernel_impls,mr as layers,yd as leakyRelu,Sd as less,vd as lessEqual,Cd as linalg,xd as linspace,Ed as loadGraphModel,Nd as loadGraphModelSync,Ad as loadLayersModel,Td as localResponseNormalization,Dd as log,kd as log1p,Rd as logSigmoid,Md as logSoftmax,Pd as logSumExp,zd as logicalAnd,_d as logicalNot,Fd as logicalOr,Id as logicalXor,Od as losses,Ld as lowerBound,he as matMul,or as math,$d as max,Bd as maxPool,jd as maxPool3d,Ud as maxPoolWithArgmax,Vd as maximum,Gd as mean,qd as memory,Wd as meshgrid,pr as metrics,Hd as min,Qd as minimum,Kd as mirrorPad,Xd as mod,dr as model,gr as models,Zd as moments,Jd as movingAverage,Yd as mul,eh as multiRNNCell,th as multinomial,ah as neg,sh as nextFrame,nh as norm,rh as notEqual,I as oneHot,ih as ones,oh as onesLike,ue as op,lh as outerProduct,ch as pad,uh as pad1d,dh as pad2d,hh as pad3d,fh as pad4d,mh as pool,ph as pow,gh as prelu,bh as print,wh as prod,yh as profile,Sh as raggedGather,vh as raggedRange,Ch as raggedTensorToTensor,xh as rand,Eh as randomGamma,Nh as randomNormal,Ah as randomStandardNormal,Th as randomUniform,Dh as randomUniformInt,kh as range,Rh as ready,Mh as real,Ph as reciprocal,zh as registerBackend,fr as registerCallbackConstructor,_h as registerGradient,Fh as registerKernel,Ih as registerOp,br as regularizers,Oh as relu,Lh as relu6,$h as removeBackend,Ca as reshape,Bh as reverse,jh as reverse1d,Uh as reverse2d,Vh as reverse3d,Gh as reverse4d,qh as rfft,Wh as round,Hh as rsqrt,Qh as scalar,Kh as scatterND,Xh as scatter_util,Zh as searchSorted,Jh as selu,Yh as separableConv2d,hr as sequential,ef as serialization,tf as setBackend,af as setPlatform,sf as setWebGLContext,nf as setdiff1dAsync,rf as shared,of as sigmoid,lf as sign,cf as signal,uf as sin,df as sinh,hf as slice,ff as slice1d,mf as slice2d,pf as slice3d,gf as slice4d,bf as slice_util,wf as softmax,yf as softplus,Sf as spaceToBatchND,vf as sparse,Cf as sparseToDense,xf as spectral,Ef as split,Nf as sqrt,Af as square,Tf as squaredDifference,Df as squeeze,kf as stack,Rf as step,Mf as stridedSlice,Pf as string,zf as sub,_f as sum,Ff as sumOutType,If as tan,Of as tanh,ga as tensor,ba as tensor1d,O as tensor2d,Lf as tensor3d,$f as tensor4d,Bf as tensor5d,jf as tensor6d,Uf as tensorScatterUpdate,Vf as tensor_util,ir as test_util,ya as tidy,Gf as tile,qf as time,Wf as topk,Hf as train,de as transpose,Qf as truncatedNormal,Kf as unique,Xf as unregisterGradient,Zf as unregisterKernel,Jf as unsortedSegmentSum,Yf as unstack,em as upcastType,tm as upperBound,am as util,sm as valueAndGrad,nm as valueAndGrads,rm as variable,im as variableGrads,Sr as version,Vn as version_converter,La as version_core,ar as version_cpu,Aa as version_layers,sr as version_webgl,om as webgl,lm as webgl_util,cm as where,um as whereAsync,dm as zeros,hm as zerosLike};
