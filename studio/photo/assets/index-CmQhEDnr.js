import{a as Yu}from"./index-T9BzRlNX.js";function Qu(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const r=Object.getOwnPropertyDescriptor(s,o);r&&Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}/**
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
 */const Zu=1e-7,Ju=1e-4;class ed{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Oa{refCount(e){return ge("refCount")}incRef(e){return ge("incRef")}timerAvailable(){return!0}time(e){return ge("time")}read(e){return ge("read")}readSync(e){return ge("readSync")}readToGPU(e,t){return ge("readToGPU")}numDataIds(){return ge("numDataIds")}disposeData(e,t){return ge("disposeData")}write(e,t,s){return ge("write")}move(e,t,s,o,r){return ge("move")}createTensorFromGPUData(e,t,s){return ge("createTensorFromGPUData")}memory(){return ge("memory")}floatPrecision(){return ge("floatPrecision")}epsilon(){return this.floatPrecision()===32?Zu:Ju}dispose(){return ge("dispose")}}function ge(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function Pa(n){let e=n.length,t=0;for(;e>0;)t=Math.random()*e|0,e--,Ze(n,e,t)}function td(n,e){if(n.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${n.length}Second array length was ${e.length}`);let t=n.length,s=0;for(;t>0;)s=Math.random()*t|0,t--,Ze(n,t,s),Ze(e,t,s)}function kn(n,e,t){return Math.max(n,Math.min(e,t))}function Ts(n){return n%2===0?n:n+1}function Ze(n,e,t){const s=n[e];n[e]=n[t],n[t]=s}function _a(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e}function nd(n,e){const t=Math.random();return e*t+(1-t)*n}function sd(n,e){let t=0;for(let s=0;s<n.length;s++){const o=Number(n[s])-Number(e[s]);t+=o*o}return t}function v(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function rn(n,e,t=""){v(Q(n,e),()=>t+` Shapes ${n} and ${e} must match`)}function od(n){v(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function I(n){if(n.length===0)return 1;let e=n[0];for(let t=1;t<n.length;t++)e*=n[t];return e}function rd(n){return n.length===0}function ad(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==null&&e[t]!==null&&n[t]!==e[t])return!1;return!0}function Q(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Nn(n){return n%1===0}function id(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;{const e=Math.exp(2*n);return(e-1)/(e+1)}}function gs(n){const e=Math.ceil(Math.sqrt(n));return[e,Math.ceil(n/e)]}function cd(n){const e=new Uint32Array(n);for(let t=0;t<n;++t)e[t]=t;return Pa(e),e}function St(n,e){return e<=n.length?n:n+" ".repeat(e-n.length)}function Js(n,e=o=>0,t,s){return new Promise((o,r)=>{let a=0;const i=()=>{if(n()){o();return}a++;const c=e(a);if(t!=null&&a>=t){r();return}s!=null?s(i,c):setTimeout(i,c)};i()})}function La(n,e){let t=1,s=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)t*=n[r];else if(n[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(s===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${n}`);return n}if(t===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);const o=n.slice();return o[s]=e/t,o}function ne(n,e){const t=e.length;return n=n==null?e.map((s,o)=>o):[].concat(n),v(n.every(s=>s>=-t&&s<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${n}`),v(n.every(s=>Nn(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?t+s:s)}function pt(n,e){const t=[],s=[],o=e!=null&&Array.isArray(e)&&e.length===0,r=e==null||o?null:ne(e,n).sort();let a=0;for(let i=0;i<n.length;++i){if(r!=null){if(r[a]===i&&n[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${n[i]}' is not 1`);(r[a]==null||r[a]>i)&&n[i]===1&&(t.push(n[i]),s.push(i)),r[a]<=i&&a++}n[i]!==1&&(t.push(n[i]),s.push(i))}return{newShape:t,keptDims:s}}function He(n,e){return K(n,e)}function K(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else if(n==="string")t=new Array(e);else throw new Error(`Unknown data type ${n}`);return t}function Ba(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${e} being uploaded contains ${s}.`)}}function Ma(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Ro(n,e){return!(e==="complex64"||e==="float32"&&n!=="complex64"||e==="int32"&&n!=="float32"&&n!=="complex64"||e==="bool"&&n==="bool")}function An(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Va(n){if(n==null)return 0;let e=0;return n.forEach(t=>e+=t.length),e}function Wn(n){return typeof n=="string"||n instanceof String}function Ua(n){return typeof n=="boolean"}function Wa(n){return typeof n=="number"}function an(n){return Array.isArray(n)?an(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Wa(n)?"float32":Wn(n)?"string":Ua(n)?"bool":"float32"}function ut(n){return!!(n&&n.constructor&&n.call&&n.apply)}function xs(n,e){for(let t=e;t<n;++t)if(n%t===0)return t;return n}function q(n){const e=n.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=n[e-1];for(let s=e-3;s>=0;--s)t[s]=t[s+1]*n[s+1];return t}function Ga(n,e,t,s=!1){const o=new Array;if(e.length===1){const r=e[0]*(s?2:1);for(let a=0;a<r;a++)o[a]=t[n+a]}else{const r=e[0],a=e.slice(1),i=a.reduce((c,l)=>c*l)*(s?2:1);for(let c=0;c<r;c++)o[c]=Ga(n+c*i,a,t,s)}return o}function Yt(n,e,t=!1){if(n.length===0)return e[0];const s=n.reduce((o,r)=>o*r)*(t?2:1);if(s===0)return[];if(s!==e.length)throw new Error(`[${n}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return Ga(0,n,e,t)}function ld(n,e){if(Array.isArray(n))return n;if(e==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(e==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${e}`)}function za(n,e){const t=Xe(n,e);for(let s=0;s<t.length;s++)t[s]=1;return t}function Xe(n,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${e}`)}function ud(n,e){const t=n.reduce((s,o)=>s*o,1);if(e==null||e==="float32")return Yt(n,new Float32Array(t));if(e==="int32")return Yt(n,new Int32Array(t));if(e==="bool")return Yt(n,new Uint8Array(t));throw new Error(`Unknown data type ${e}`)}function cn(n){n.forEach(e=>{v(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function en(n,e,t){if(e===0)return 0;if(e===1)return n[0];let s=n[n.length-1];for(let o=0;o<n.length-1;++o)s+=t[o]*n[o];return s}function Gn(n,e,t){if(e===0)return[];if(e===1)return[n];const s=new Array(e);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(n/t[o]),n-=s[o]*t[o];return s[s.length-1]=n,s}function Rs(n){return n&&n.then&&typeof n.then=="function"}/**
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
 */const Pr="tfjsflags";class dd{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=hd,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(y().getBool("IS_TEST")||y().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,s){if(this.flagRegistry[e]={evaluationFn:t,setHook:s},this.urlFlags[e]!=null){const o=this.urlFlags[e];y().getBool("IS_TEST")||y().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${o}.`),this.set(e,o)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(Rs(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Pr in e&&e[Pr].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=pd(o,r)})}}function hd(n){const e={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...s)=>(fd(e,s[0],s[1]),s.join("="))),e}function fd(n,e,t){n[decodeURIComponent(e)]=decodeURIComponent(t||"")}function pd(n,e){const t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function y(){return Ha}let Ha=null;function md(n){Ha=n}/**
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
 */let Xs;function Xa(){if(Xs==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Xs=n}return Xs}function gd(){const n=Xa();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Eo(n,e){const t=gd();if(t.has(n))return t.get(n);{const s=e();return t.set(n,s),t.get(n)}}const ko="Abs",xd="Acos",bd="Acosh",zn="Add",wd="AddN",Cd="All",yd="Any",$d="ArgMax",vd="ArgMin",Sd="Asin",Id="Asinh",Td="Atan",Rd="Atanh",Ed="Atan2",kd="AvgPool",Nd="AvgPoolGrad",Ad="AvgPool3D",Fd="AvgPool3DGrad",Dd="BatchMatMul",Od="BatchToSpaceND",Pd="Bincount",No="BitwiseAnd",YT="BroadcastTo",_d="BroadcastArgs",Es="Cast",Ao="Ceil",Ld="ClipByValue",Fo="Complex",qa="ComplexAbs",Bd="Concat",Md="Conv2D",Vd="Conv2DBackpropFilter",Ud="Conv2DBackpropInput",Wd="Conv3D",Gd="Conv3DBackpropFilterV2",zd="Conv3DBackpropInputV2",Hd="Cos",Xd="Cosh",qd="Cumprod",jd="Cumsum",Kd="CropAndResize",Yd="DenseBincount",Qd="DepthToSpace",Zd="DepthwiseConv2dNative",Jd="DepthwiseConv2dNativeBackpropFilter",eh="DepthwiseConv2dNativeBackpropInput",th="Diag",nh="Dilation2D",QT="Dilation2DBackpropInput",ZT="Dilation2DBackpropFilter",JT="Draw",ja="RealDiv",sh="Einsum",Ka="Elu",oh="EluGrad",rh="Erf",Do="Equal",Oo="Exp",ah="ExpandDims",Po="Expm1",ih="FFT",Ya="Fill",ch="FlipLeftRight",_o="Floor",ks="FloorDiv",lh="FusedBatchNorm",uh="GatherV2",dh="GatherNd",Lo="Greater",Bo="GreaterEqual",Ns="Identity",hh="IFFT",fh="Imag",ph="IsFinite",mh="IsInf",gh="IsNan",Qa="LeakyRelu",Mo="Less",Vo="LessEqual",xh="LinSpace",Uo="Log",bh="Log1p",wh="LogicalAnd",Ch="LogicalNot",yh="LogicalOr",eR="LogicalXor",tR="LogSoftmax",nR="LowerBound",$h="LRN",vh="LRNGrad",sR="MatrixBandPart",Sh="Max",As="Maximum",Ih="MaxPool",Th="MaxPoolGrad",Rh="MaxPool3D",Eh="MaxPool3DGrad",kh="MaxPoolWithArgmax",Nh="Mean",Ah="Min",Wo="Minimum",Fh="MirrorPad",Dh="Mod",Oh="Multinomial",Fs="Multiply",Za="Neg",Go="NotEqual",Ph="NonMaxSuppressionV3",_h="NonMaxSuppressionV4",Lh="NonMaxSuppressionV5",Bh="OnesLike",Mh="OneHot",Vh="Pack",Uh="PadV2",oR="Pool",Ja="Pow",ei="Prelu",ti="Prod",Wh="RaggedGather",Gh="RaggedRange",zh="RaggedTensorToTensor",Hh="Range",ni="Real",Xh="Reciprocal",si="Relu",oi="Reshape",qh="ResizeNearestNeighbor",jh="ResizeNearestNeighborGrad",Kh="ResizeBilinear",Yh="ResizeBilinearGrad",ri="Relu6",Qh="Reverse",Zh="Round",zo="Rsqrt",Jh="ScatterNd",ef="TensorScatterUpdate",tf="SearchSorted",nf="Select",sf="Selu",ai="Slice",of="Sin",rf="Sinh",af="Sign",Ds="Sigmoid",cf="Softplus",Os="Sqrt",ii="Sum",lf="SpaceToBatchND",uf="SplitV",df="Softmax",hf="SparseFillEmptyRows",ff="SparseReshape",pf="SparseSegmentMean",mf="SparseSegmentSum",gf="SparseToDense",Ho="SquaredDifference",xf="Square",Xo="StaticRegexReplace",bf="StridedSlice",wf="StringNGrams",Cf="StringSplit",yf="StringToHashBucketFast",Ps="Sub",$f="Tan",vf="Tanh",ci="Tile",Sf="TopK",If="Transform",li="Transpose",Tf="Unique",Rf="Unpack",Ef="UnsortedSegmentSum",rR="UpperBound",ui="ZerosLike",di="Step",kf="FromPixels",Nf="RotateWithOffset",Af="_FusedMatMul",Ff="FusedConv2D",Df="FusedDepthwiseConv2D";/**
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
 */function Ne(...n){y().getBool("IS_TEST")||y().getBool("PROD")||console.warn(...n)}function Of(...n){y().getBool("IS_TEST")||y().getBool("PROD")||[...n]}/**
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
 * =============================================================================
 */const tn=Eo("kernelRegistry",()=>new Map),Fn=Eo("gradRegistry",()=>new Map);function _r(n,e){const t=qo(n,e);return tn.get(t)}function Lr(n){return Fn.get(n)}function eo(n){const e=tn.entries(),t=[];for(;;){const{done:s,value:o}=e.next();if(s)break;const[r,a]=o,[i]=r.split("_");i===n&&t.push(a)}return t}function hi(n){const{kernelName:e,backendName:t}=n,s=qo(e,t);tn.has(s)&&Ne(`The kernel '${e}' for backend '${t}' is already registered`),tn.set(s,n)}function aR(n){const{kernelName:e}=n;Fn.has(e)&&y().getBool("DEBUG")&&Ne(`Overriding the gradient for '${e}'`),Fn.set(e,n)}function iR(n,e){const t=qo(n,e);if(!tn.has(t))throw new Error(`The kernel '${n}' for backend '${e}' is not registered`);tn.delete(t)}function cR(n){if(!Fn.has(n))throw new Error(`The gradient '${n}' for backend is not registered`);Fn.delete(n)}function lR(n,e){eo(n).forEach(s=>{const o=Object.assign({},s,{backendName:e});hi(o)})}function qo(n,e){return`${e}_${n}`}/**
 * @license
 * Copyright 2023 Google LLC.
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
 */function fi(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}var pi=G,Ae=null;try{Ae=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function G(n,e,t){this.low=n|0,this.high=e|0,this.unsigned=!!t}G.prototype.__isLong__;Object.defineProperty(G.prototype,"__isLong__",{value:!0});function we(n){return(n&&n.__isLong__)===!0}G.isLong=we;var Br={},Mr={};function _t(n,e){var t,s,o;return e?(n>>>=0,(o=0<=n&&n<256)&&(s=Mr[n],s)?s:(t=z(n,(n|0)<0?-1:0,!0),o&&(Mr[n]=t),t)):(n|=0,(o=-128<=n&&n<128)&&(s=Br[n],s)?s:(t=z(n,n<0?-1:0,!1),o&&(Br[n]=t),t))}G.fromInt=_t;function Fe(n,e){if(isNaN(n))return e?$t:De;if(e){if(n<0)return $t;if(n>=mi)return bi}else{if(n<=-Ur)return xe;if(n+1>=Ur)return xi}return n<0?Fe(-n,e).neg():z(n%nn|0,n/nn|0,e)}G.fromNumber=Fe;function z(n,e,t){return new G(n,e,t)}G.fromBits=z;var bs=Math.pow;function jo(n,e,t){if(n.length===0)throw Error("empty string");if(n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return De;if(typeof e=="number"?(t=e,e=!1):e=!!e,t=t||10,t<2||36<t)throw RangeError("radix");var s;if((s=n.indexOf("-"))>0)throw Error("interior hyphen");if(s===0)return jo(n.substring(1),e,t).neg();for(var o=Fe(bs(t,8)),r=De,a=0;a<n.length;a+=8){var i=Math.min(8,n.length-a),c=parseInt(n.substring(a,a+i),t);if(i<8){var l=Fe(bs(t,i));r=r.mul(l).add(Fe(c))}else r=r.mul(o),r=r.add(Fe(c))}return r.unsigned=e,r}G.fromString=jo;function Me(n,e){return typeof n=="number"?Fe(n,e):typeof n=="string"?jo(n,e):z(n.low,n.high,typeof e=="boolean"?e:n.unsigned)}G.fromValue=Me;var Vr=65536,Pf=1<<24,nn=Vr*Vr,mi=nn*nn,Ur=mi/2,Wr=_t(Pf),De=_t(0);G.ZERO=De;var $t=_t(0,!0);G.UZERO=$t;var Kt=_t(1);G.ONE=Kt;var gi=_t(1,!0);G.UONE=gi;var to=_t(-1);G.NEG_ONE=to;var xi=z(-1,2147483647,!1);G.MAX_VALUE=xi;var bi=z(-1,-1,!0);G.MAX_UNSIGNED_VALUE=bi;var xe=z(0,-2147483648,!1);G.MIN_VALUE=xe;var N=G.prototype;N.toInt=function(){return this.unsigned?this.low>>>0:this.low};N.toNumber=function(){return this.unsigned?(this.high>>>0)*nn+(this.low>>>0):this.high*nn+(this.low>>>0)};N.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(xe)){var t=Fe(e),s=this.div(t),o=s.mul(t).sub(this);return s.toString(e)+o.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var r=Fe(bs(e,6),this.unsigned),a=this,i="";;){var c=a.div(r),l=a.sub(c.mul(r)).toInt()>>>0,u=l.toString(e);if(a=c,a.isZero())return u+i;for(;u.length<6;)u="0"+u;i=""+u+i}};N.getHighBits=function(){return this.high};N.getHighBitsUnsigned=function(){return this.high>>>0};N.getLowBits=function(){return this.low};N.getLowBitsUnsigned=function(){return this.low>>>0};N.getNumBitsAbs=function(){if(this.isNegative())return this.eq(xe)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return this.high!=0?t+33:t+1};N.isZero=function(){return this.high===0&&this.low===0};N.eqz=N.isZero;N.isNegative=function(){return!this.unsigned&&this.high<0};N.isPositive=function(){return this.unsigned||this.high>=0};N.isOdd=function(){return(this.low&1)===1};N.isEven=function(){return(this.low&1)===0};N.equals=function(e){return we(e)||(e=Me(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};N.eq=N.equals;N.notEquals=function(e){return!this.eq(e)};N.neq=N.notEquals;N.ne=N.notEquals;N.lessThan=function(e){return this.comp(e)<0};N.lt=N.lessThan;N.lessThanOrEqual=function(e){return this.comp(e)<=0};N.lte=N.lessThanOrEqual;N.le=N.lessThanOrEqual;N.greaterThan=function(e){return this.comp(e)>0};N.gt=N.greaterThan;N.greaterThanOrEqual=function(e){return this.comp(e)>=0};N.gte=N.greaterThanOrEqual;N.ge=N.greaterThanOrEqual;N.compare=function(e){if(we(e)||(e=Me(e)),this.eq(e))return 0;var t=this.isNegative(),s=e.isNegative();return t&&!s?-1:!t&&s?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};N.comp=N.compare;N.negate=function(){return!this.unsigned&&this.eq(xe)?xe:this.not().add(Kt)};N.neg=N.negate;N.add=function(e){we(e)||(e=Me(e));var t=this.high>>>16,s=this.high&65535,o=this.low>>>16,r=this.low&65535,a=e.high>>>16,i=e.high&65535,c=e.low>>>16,l=e.low&65535,u=0,d=0,h=0,f=0;return f+=r+l,h+=f>>>16,f&=65535,h+=o+c,d+=h>>>16,h&=65535,d+=s+i,u+=d>>>16,d&=65535,u+=t+a,u&=65535,z(h<<16|f,u<<16|d,this.unsigned)};N.subtract=function(e){return we(e)||(e=Me(e)),this.add(e.neg())};N.sub=N.subtract;N.multiply=function(e){if(this.isZero())return De;if(we(e)||(e=Me(e)),Ae){var t=Ae.mul(this.low,this.high,e.low,e.high);return z(t,Ae.get_high(),this.unsigned)}if(e.isZero())return De;if(this.eq(xe))return e.isOdd()?xe:De;if(e.eq(xe))return this.isOdd()?xe:De;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Wr)&&e.lt(Wr))return Fe(this.toNumber()*e.toNumber(),this.unsigned);var s=this.high>>>16,o=this.high&65535,r=this.low>>>16,a=this.low&65535,i=e.high>>>16,c=e.high&65535,l=e.low>>>16,u=e.low&65535,d=0,h=0,f=0,p=0;return p+=a*u,f+=p>>>16,p&=65535,f+=r*u,h+=f>>>16,f&=65535,f+=a*l,h+=f>>>16,f&=65535,h+=o*u,d+=h>>>16,h&=65535,h+=r*l,d+=h>>>16,h&=65535,h+=a*c,d+=h>>>16,h&=65535,d+=s*u+o*l+r*c+a*i,d&=65535,z(f<<16|p,d<<16|h,this.unsigned)};N.mul=N.multiply;N.divide=function(e){if(we(e)||(e=Me(e)),e.isZero())throw Error("division by zero");if(Ae){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?Ae.div_u:Ae.div_s)(this.low,this.high,e.low,e.high);return z(t,Ae.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?$t:De;var s,o,r;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return $t;if(e.gt(this.shru(1)))return gi;r=$t}else{if(this.eq(xe)){if(e.eq(Kt)||e.eq(to))return xe;if(e.eq(xe))return Kt;var a=this.shr(1);return s=a.div(e).shl(1),s.eq(De)?e.isNegative()?Kt:to:(o=this.sub(e.mul(s)),r=s.add(o.div(e)),r)}else if(e.eq(xe))return this.unsigned?$t:De;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();r=De}for(o=this;o.gte(e);){s=Math.max(1,Math.floor(o.toNumber()/e.toNumber()));for(var i=Math.ceil(Math.log(s)/Math.LN2),c=i<=48?1:bs(2,i-48),l=Fe(s),u=l.mul(e);u.isNegative()||u.gt(o);)s-=c,l=Fe(s,this.unsigned),u=l.mul(e);l.isZero()&&(l=Kt),r=r.add(l),o=o.sub(u)}return r};N.div=N.divide;N.modulo=function(e){if(we(e)||(e=Me(e)),Ae){var t=(this.unsigned?Ae.rem_u:Ae.rem_s)(this.low,this.high,e.low,e.high);return z(t,Ae.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};N.mod=N.modulo;N.rem=N.modulo;N.not=function(){return z(~this.low,~this.high,this.unsigned)};N.and=function(e){return we(e)||(e=Me(e)),z(this.low&e.low,this.high&e.high,this.unsigned)};N.or=function(e){return we(e)||(e=Me(e)),z(this.low|e.low,this.high|e.high,this.unsigned)};N.xor=function(e){return we(e)||(e=Me(e)),z(this.low^e.low,this.high^e.high,this.unsigned)};N.shiftLeft=function(e){return we(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?z(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):z(0,this.low<<e-32,this.unsigned)};N.shl=N.shiftLeft;N.shiftRight=function(e){return we(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?z(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):z(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};N.shr=N.shiftRight;N.shiftRightUnsigned=function(e){if(we(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var s=this.low;return z(s>>>e|t<<32-e,t>>>e,this.unsigned)}else return e===32?z(t,0,this.unsigned):z(t>>>e-32,0,this.unsigned)};N.shru=N.shiftRightUnsigned;N.shr_u=N.shiftRightUnsigned;N.toSigned=function(){return this.unsigned?z(this.low,this.high,!1):this};N.toUnsigned=function(){return this.unsigned?this:z(this.low,this.high,!0)};N.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};N.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};N.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]};G.fromBytes=function(e,t,s){return s?G.fromBytesLE(e,t):G.fromBytesBE(e,t)};G.fromBytesLE=function(e,t){return new G(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)};G.fromBytesBE=function(e,t){return new G(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};const wi=Yu(pi),_f=Qu({__proto__:null,default:wi},[pi]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */const Ct=wi||_f;function Hn(n){return Ct.fromString(n,!0,16)}const Ci=Hn("c3a5c85c97cb3127"),wt=Hn("b492b66fbe98f273"),ce=Hn("9ae16a3b2f90404f");function no(n){return n.xor(n.shru(47))}function yi(n,e,t){const s=n.slice(e,e+t);return Ct.fromBytes(Array.from(s),!0,!0)}function W(n,e){return yi(n,e,8)}function Gr(n,e){return yi(n,e,4)}function Y(n,e){return e===0?n:n.shru(e).or(n.shl(64-e))}function ct(n,e,t=Hn("9ddfea08eb382d69")){let s=n.xor(e).mul(t);s=s.xor(s.shru(47));let o=e.xor(s).mul(t);return o=o.xor(o.shru(47)),o=o.mul(t),o}function Lf(n,e,t,s,o,r){o=o.add(n),r=Y(r.add(o).add(s),21);const a=o;return o=o.add(e),o=o.add(t),r=r.add(Y(o,44)),[o.add(s),r.add(a)]}function ns(n,e,t,s){return Lf(W(n,e),W(n,e+8),W(n,e+16),W(n,e+24),t,s)}function Bf(n,e=n.length){if(e>=8){const t=ce.add(e*2),s=W(n,0).add(ce),o=W(n,e-8),r=Y(o,37).mul(t).add(s),a=Y(s,25).add(o).mul(t);return ct(r,a,t)}if(e>=4){const t=ce.add(e*2),s=Gr(n,0);return ct(s.shl(3).add(e),Gr(n,e-4),t)}if(e>0){const t=n[0],s=n[e>>1],o=n[e-1],r=t+(s<<8),a=e+(o<<2);return no(ce.mul(r).xor(Ci.mul(a))).mul(ce)}return ce}function Mf(n,e=n.length){const t=ce.add(e*2),s=W(n,0).mul(wt),o=W(n,8),r=W(n,e-8).mul(t),a=W(n,e-16).mul(ce);return ct(Y(s.add(o),43).add(Y(r,30)).add(a),s.add(Y(o.add(ce),18)).add(r),t)}function Vf(n,e=n.length){const t=ce.add(e*2),s=W(n,0).mul(ce),o=W(n,8),r=W(n,e-8).mul(t),a=W(n,e-16).mul(ce),i=Y(s.add(o),43).add(Y(r,30)).add(a),c=ct(i,s.add(Y(o.add(ce),18)).add(r),t),l=W(n,16).mul(t),u=W(n,24),d=i.add(W(n,e-32)).mul(t),h=c.add(W(n,e-24)).mul(t);return ct(Y(l.add(u),43).add(Y(d,30)).add(h),l.add(Y(u.add(s),18)).add(d),t)}function $i(n,e=n.length){const t=Ct.fromNumber(81,!0);if(e<=32)return e<=16?Bf(n,e):Mf(n,e);if(e<=64)return Vf(n,e);let s=t,o=t.mul(wt).add(113),r=no(o.mul(ce).add(113)).mul(ce),a=[Ct.UZERO,Ct.UZERO],i=[Ct.UZERO,Ct.UZERO];s=s.mul(ce).add(W(n,0));let c=0;const l=(e-1>>6)*64,u=l+(e-1&63)-63;do s=Y(s.add(o).add(a[0]).add(W(n,c+8)),37).mul(wt),o=Y(o.add(a[1]).add(W(n,c+48)),42).mul(wt),s=s.xor(i[1]),o=o.add(a[0]).add(W(n,c+40)),r=Y(r.add(i[0]),33).mul(wt),a=ns(n,c,a[1].mul(wt),s.add(i[0])),i=ns(n,c+32,r.add(i[1]),o.add(W(n,c+16))),[r,s]=[s,r],c+=64;while(c!==l);const d=wt.add(r.and(255).shl(1));return c=u,i[0]=i[0].add(e-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),s=Y(s.add(o).add(a[0]).add(W(n,c+8)),37).mul(d),o=Y(o.add(a[1]).add(W(n,c+48)),42).mul(d),s=s.xor(i[1].mul(9)),o=o.add(a[0].mul(9).add(W(n,c+40))),r=Y(r.add(i[0]),33).mul(d),a=ns(n,c,a[1].mul(d),s.add(i[0])),i=ns(n,c+32,r.add(i[1]),o.add(W(n,c+16))),[r,s]=[s,r],ct(ct(a[0],i[0],d).add(no(o).mul(Ci)).add(r),ct(a[1],i[1],d).add(s),d)}/**
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
 */function Lt(n,e){return e==="string"?lt(n):Xn([n],e)}function Uf(n,e){return n instanceof Float32Array&&e==="float32"||n instanceof Int32Array&&e==="int32"||n instanceof Uint8Array&&e==="bool"}function Xn(n,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=dt(n)),y().getBool("DEBUG")&&Ba(n,e),Uf(n,e))return n;if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool"){const t=new Uint8Array(n.length);for(let s=0;s<t.length;++s)Math.round(n[s])!==0&&(t[s]=1);return t}else throw new Error(`Unknown data type ${e}`)}function ke(){return y().platform.now()}function Wf(n,e){return y().platform.fetch(n,e)}function lt(n,e="utf-8"){return e=e||"utf-8",y().platform.encode(n,e)}function Tt(n,e="utf-8"){return e=e||"utf-8",y().platform.decode(n,e)}function Se(n){return y().platform.isTypedArray!=null?y().platform.isTypedArray(n):fi(n)}function dt(n,e=[],t=!1){if(e==null&&(e=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||Rs(n)||n==null||Se(n)&&t)e.push(n);else if(Array.isArray(n)||Se(n))for(let s=0;s<n.length;++s)dt(n[s],e,t);else{let s=-1;for(const o of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)dt(n[o],e,t)}return e}const uR=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Q,arraysEqualWithNull:ad,assert:v,assertNonNegativeIntegerDimensions:cn,assertNonNull:od,assertShapesMatch:rn,bytesFromStringArray:Va,bytesPerElement:An,checkConversionForErrors:Ba,clamp:kn,computeStrides:q,convertBackendValuesAndArrayBuffer:ld,createScalarValue:Lt,createShuffledIndices:cd,decodeString:Tt,distSquared:sd,encodeString:lt,fetch:Wf,fingerPrint64:$i,flatten:dt,getArrayFromDType:K,getTypedArrayFromDType:He,hasEncodingLoss:Ro,hexToLong:Hn,indexToLoc:Gn,inferDtype:an,inferFromImplicitShape:La,isBoolean:Ua,isFunction:ut,isInt:Nn,isNumber:Wa,isPromise:Rs,isScalarShape:rd,isString:Wn,isTypedArray:Se,isValidDtype:Ma,locToIndex:en,makeOnesTypedArray:za,makeZerosNestedTypedArray:ud,makeZerosTypedArray:Xe,nearestDivisor:xs,nearestLargerEven:Ts,now:ke,parseAxisParam:ne,randUniform:nd,repeatedTry:Js,rightPad:St,shuffle:Pa,shuffleCombo:td,sizeFromShape:I,sizeToSquarishShape:gs,squeezeShape:pt,sum:_a,swap:Ze,tanh:id,toNestedArray:Yt,toTypedArray:Xn},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Gf{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new Hf)}profileKernel(e,t,s){let o;const r=()=>{o=s()};let a;const i=ke();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(r);else{r();for(const l of o)l.dataSync();a=Promise.resolve({kernelMs:ke()-i})}if(y().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<o.length;l++){const u=o[l];u.data().then(d=>{zf(d,u.dtype,e)})}return{kernelName:e,outputs:o,inputs:t,timeMs:a.then(l=>l.kernelMs),extraInfo:a.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:s,timeMs:o,inputs:r,extraInfo:a}=e;s.forEach(i=>{Promise.all([i.data(),o,a]).then(c=>{this.logger.logKernelProfile(t,i,c[0],c[1],r,c[2])})})}}function zf(n,e,t){if(e!=="float32")return!1;for(let s=0;s<n.length;s++){const o=n[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${t}'`),!0}return!1}class Hf{logKernelProfile(e,t,s,o,r,a){const i=typeof o=="number"?St(`${o}ms`,9):o.error,c=St(e,25),l=t.rank,u=t.size,d=St(t.shape.toString(),14);let h="";for(const f in r){const p=r[f];if(p!=null){const x=p.shape||t.shape,g=x.length;h+=`${f}: ${g}D ${g>0?x:""} `}}`${c}${i}${l}${d}${u}${h}${a}`}}/**
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
 */function Xf(n,e,t){const s={},o={};for(let c=0;c<e.length;c++)s[e[c].id]=!0;for(let c=0;c<n.length;c++){const l=n[c],u=l.inputs;for(const d in u){const h=u[d];let f=!1;for(let p=0;p<e.length;p++)if(s[h.id]){l.outputs.forEach(x=>s[x.id]=!0),f=!0,o[l.id]=!0;break}if(f)break}}const r={};r[t.id]=!0;const a={};for(let c=n.length-1;c>=0;c--){const l=n[c],u=l.inputs;for(let d=0;d<l.outputs.length;d++)if(r[l.outputs[d].id]){for(const h in u)r[u[h].id]=!0,a[l.id]=!0;break}}const i=[];for(let c=0;c<n.length;c++){const l=n[c];if(o[l.id]&&a[l.id]){const u={};for(const h in l.inputs){const f=l.inputs[h];s[f.id]&&(u[h]=f)}const d=Object.assign({},l);d.inputs=u,d.outputs=l.outputs,i.push(d)}}return i}function qf(n,e,t,s){for(let o=e.length-1;o>=0;o--){const r=e[o],a=[];if(r.outputs.forEach(c=>{const l=n[c.id];l!=null?a.push(l):a.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const i=r.gradient(a);for(const c in r.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);const l=t(()=>i[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const u=r.inputs[c];if(!Q(l.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=l;else{const d=n[u.id];n[u.id]=s(d,l),d.dispose()}}}}/**
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
 */const zr=20,yn=3,qs=7;function jf(n,e,t,s){const o=q(e),r=Kf(n,e,t,o),a=e.length,i=cs(n,e,t,o,r),c=["Tensor"];return s&&(c.push(`  dtype: ${t}`),c.push(`  rank: ${a}`),c.push(`  shape: [${e}]`),c.push("  values:")),c.push(i.map(l=>"    "+l).join(`
`)),c.join(`
`)}function Kf(n,e,t,s){const o=I(e),r=s[s.length-1],a=new Array(r).fill(0),i=e.length,c=t==="complex64"?vn(n):n;if(i>1)for(let l=0;l<o/r;l++){const u=l*r;for(let d=0;d<r;d++)a[d]=Math.max(a[d],$n(c[u+d],0,t).length)}return a}function $n(n,e,t){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(qs))} + ${parseFloat(n[1].toFixed(qs))}j`:Wn(n)?s=`'${n}'`:t==="bool"?s=vi(n):s=parseFloat(n.toFixed(qs)).toString(),St(s,e)}function vi(n){return n===0?"false":"true"}function cs(n,e,t,s,o,r=!0){const a=t==="complex64"?2:1,i=e[0],c=e.length;if(c===0){if(t==="complex64"){const x=vn(n);return[$n(x[0],0,t)]}return t==="bool"?[vi(n[0])]:[n[0].toString()]}if(c===1){if(i>zr){const g=yn*a;let m=Array.from(n.slice(0,g)),b=Array.from(n.slice((i-yn)*a,i*a));return t==="complex64"&&(m=vn(m),b=vn(b)),["["+m.map((w,C)=>$n(w,o[C],t)).join(", ")+", ..., "+b.map((w,C)=>$n(w,o[i-yn+C],t)).join(", ")+"]"]}return["["+(t==="complex64"?vn(n):Array.from(n)).map((g,m)=>$n(g,o[m],t)).join(", ")+"]"]}const l=e.slice(1),u=s.slice(1),d=s[0]*a,h=[];if(i>zr){for(let x=0;x<yn;x++){const g=x*d,m=g+d;h.push(...cs(n.slice(g,m),l,t,u,o,!1))}h.push("...");for(let x=i-yn;x<i;x++){const g=x*d,m=g+d;h.push(...cs(n.slice(g,m),l,t,u,o,x===i-1))}}else for(let x=0;x<i;x++){const g=x*d,m=g+d;h.push(...cs(n.slice(g,m),l,t,u,o,x===i-1))}const f=c===2?",":"";h[0]="["+(i>0?h[0]+f:"");for(let x=1;x<h.length-1;x++)h[x]=" "+h[x]+f;let p=`,
`;for(let x=2;x<c;x++)p+=`
`;return h[h.length-1]=" "+h[h.length-1]+"]"+(r?"":p),h}function vn(n){const e=[];for(let t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}/**
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
 */class ws{constructor(e,t,s){if(this.dtype=t,this.shape=e.slice(),this.size=I(e),s!=null){const o=s.length;v(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||K(t,this.size),this.strides=q(e)}set(e,...t){t.length===0&&(t=[0]),v(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const s=this.locToIndex(t);this.values[s]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const o of e){if(o<0||o>=this.shape[t]){const r=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(r)}t++}let s=e[e.length-1];for(let o=0;o<e.length-1;++o)s+=this.strides[o]*e[o];return this.values[s]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let s=0;s<e.length-1;++s)t+=this.strides[s]*e[s];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let s=0;s<t.length-1;++s)t[s]=Math.floor(e/this.strides[s]),e-=t[s]*this.strides[s];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return _e().makeTensor(this.values,this.shape,this.dtype)}}let _e=null,qt=null;function Yf(n){_e=n}function Qf(n){qt=n}class he{constructor(e,t,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=I(e),this.strides=q(e),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return qt.buffer(this.shape,this.dtype,e)}bufferSync(){return qt.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return Yt(this.shape,e,this.dtype==="complex64")}arraySync(){return Yt(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=_e().read(this.dataId);if(this.dtype==="string"){const t=await e;try{return t.map(s=>Tt(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),_e().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=_e().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>Tt(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await _e().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),_e().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return qt.print(this,e)}clone(){return this.throwIfDisposed(),qt.clone(this)}toString(e=!1){const t=this.dataSync();return jf(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),qt.cast(this,e)}variable(e=!0,t,s){return this.throwIfDisposed(),_e().makeVariable(this,e,t,s)}}Object.defineProperty(he,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Si(){return Eo("Tensor",()=>he)}Si();class Cs extends he{constructor(e,t,s,o){super(e.shape,e.dtype,e.dataId,o),this.trainable=t,this.name=s}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Q(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);_e().disposeTensor(this),this.dataId=e.dataId,_e().incRef(this,null)}dispose(){_e().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Cs,Symbol.hasInstance,{value:n=>n instanceof he&&n.assign!=null&&n.assign instanceof Function});/**
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
 */var Hr;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Hr||(Hr={}));var so;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(so||(so={}));var oo;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(oo||(oo={}));var ro;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(ro||(ro={}));var ao;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(ao||(ao={}));const Zf={float32:ro,int32:so,bool:oo,complex64:ao};function qe(n,e){if(n==="string"||e==="string"){if(n==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${n} with ${e}`)}return Zf[n][e]}function Ko(n){return qe(n,"int32")}function Ii(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Ti(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}/**
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
 */function mt(n,e){if(n.dtype===e.dtype)return[n,e];const t=qe(n.dtype,e.dtype);return[n.cast(t),e.cast(t)]}function Jf(n,e){v(n.dtype===e.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${e.dtype}) input must match`)}function ep(n,e){return e.some(t=>t.id===n.id)}function Yo(n){const e=[];return Ri(n,e,new Set),e}function Ri(n,e,t){if(n==null)return;if(n instanceof he){e.push(n);return}if(!tp(n))return;const s=n;for(const o in s){const r=s[o];t.has(r)||(t.add(r),Ri(r,e,t))}}function tp(n){return Array.isArray(n)||typeof n=="object"}const dR=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:Jf,getTensorsInContainer:Yo,isTensorInList:ep,makeTypesMatch:mt},Symbol.toStringTag,{value:"Module"}));/**
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
 */function js(n){return n.kernelName!=null}class Xr{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class sn{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Xr}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const s=e[t];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,s=1){return e in this.registryFactory?(Ne(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:s},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:s}=this.initializeBackend(e);if(!(s?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Gf(this.backendInstance),!0}setupRegisteredKernels(){eo(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){eo(e).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const s=t.factory();if(s&&!(s instanceof Oa)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(a=>o<this.pendingBackendInitId?!1:(this.registry[e]=a,this.pendingBackendInit=null,!0)).catch(a=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,Ne(`Initialization of backend ${e} failed`),Ne(a.stack||a.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[e]=s,{success:!0,asyncInit:!1}}catch(s){return Ne(`Initialization of backend ${e} failed`),Ne(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const s=e[t],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const s=this.state.tensorInfo.get(t),o=s.backend,r=this.readSync(t),a=o.refCount(t);o.disposeData(t,!0),s.backend=e,e.move(t,r,s.shape,s.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let s=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=e}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=t(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(e,t,s){e();try{const o=s();return t(),o}catch(o){throw t(),o}}nextTensorId(){return sn.nextTensorId++}nextVariableId(){return sn.nextVariableId++}clone(e){const t=A.runKernel(Ns,{x:e}),s={x:e},o=a=>({x:()=>{const i="float32",c={x:a},l={dtype:i};return A.runKernel(Es,c,l)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[t],o,r,{}),t}runKernel(e,t,s){if(this.backendName==null&&this.backend,!(_r(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,s){const o=this.backend.numDataIds();let r=0;s.forEach(c=>{r+=c.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=o-t-r-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${e}'`)}runKernelFunc(e){let t,s=[];const o=this.isTapeOn(),r=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c;const l=js(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(js(e)){const{kernelName:p,inputs:x,attrs:g}=e;this.backendName==null&&this.backend;const m=_r(p,this.backendName);v(m!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),i=()=>{const b=this.backend.numDataIds();c=m.kernelFunc({inputs:x,attrs:g,backend:this.backend});const w=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,b,w);const C=w.map($=>$.rank!=null?$:this.makeTensorFromTensorInfo($));if(o){const $=this.getTensorsForGradient(p,x,C);s=this.saveTensorsForBackwardMode($)}return C}}else{const{forwardFunc:p}=e,x=g=>{o&&(s=g.map(m=>this.keep(this.clone(m))))};i=()=>{const g=this.backend.numDataIds();c=this.tidy(()=>p(this.backend,x));const m=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,g,m),m}}const{inputs:u,attrs:d}=e,h=js(e)?null:e.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=i():(f=this.profiler.profileKernel(l,u,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),t=f.outputs)}),o&&this.addTapeNode(l,u,t,h,s,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:t.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(c)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(e,t,s){const o=Lr(e);if(o!=null){const r=o.inputsToSave||[],a=o.outputsToSave||[];let i;o.saveAllInputs?(v(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(t).map(l=>t[l])):i=r.map(l=>t[l]);const c=s.filter((l,u)=>a[u]);return i.concat(c)}return[]}makeTensor(e,t,s,o){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=e;s==="string"&&Wn(e[0])&&(r=e.map(c=>lt(c)));const a=o.write(r,t,s),i=new he(t,s,a,this.nextTensorId());if(this.trackTensor(i,o),s==="string"){const c=this.state.tensorInfo.get(a),l=Va(r);this.state.numBytes+=l-c.bytes,c.bytes=l}return i}makeTensorFromDataId(e,t,s,o){s=s||"float32";const r={dataId:e,shape:t,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(e,t){const{dataId:s,shape:o,dtype:r}=e,a=new he(o,r,s,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==e.dtype&&(e=e.cast(o));const r=new Cs(e,t,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let s=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(s=e.size*An(e.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:s})),e instanceof Cs||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const s=e.size*An(e.dtype);this.state.numBytes-=s}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,s,o,r,a){const i={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:s,saved:r},c=Lr(e);c!=null&&(o=c.gradFunc),o!=null&&(i.gradient=l=>(l=l.map((u,d)=>{if(u==null){const h=s[d],f=Xe(h.size,h.dtype);return this.makeTensor(f,h.shape,h.dtype)}return u}),o(l.length>1?l:l[0],r,a))),this.state.activeTape.push(i)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Yo(e),s=new Set(t.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const a=this.state.activeScope.track[r];!a.kept&&!s.has(a.id)&&a.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(e,t,s,o=!1){if(v(t.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));v(r instanceof he,()=>"The result y returned by f() must be a tensor.");const a=Xf(this.state.activeTape,t,r);if(!o&&a.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[r.id]=s??np(r.shape),qf(i,a,l=>this.tidy(l),sp);const c=t.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const u of l.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:c}})}customGrad(e){return v(ut(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{v(t.every(i=>i instanceof he),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};t.forEach((i,c)=>{o[c]=i});const r=(i,c)=>(s=e(...t,c),v(s.value instanceof he,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),v(ut(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),a=(i,c)=>{const l=s.gradFunc(i,c),u=Array.isArray(l)?l:[l];v(u.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),v(u.every(h=>h instanceof he),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return u.forEach((h,f)=>{d[f]=()=>h}),d};return this.runKernelFunc({forwardFunc:r,backwardsFunc:a,inputs:o})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=ke(),s=await this.backend.time(e);return s.wallMs=ke()-t,s}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Xr;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}sn.nextTensorId=0;sn.nextVariableId=0;function np(n){const e=za(I(n),"float32");return A.makeTensor(e,n,"float32")}function Ei(){const n=Xa();if(n._tfengine==null){const e=new dd(n);n._tfengine=new sn(e)}return md(n._tfengine.ENV),Yf(()=>n._tfengine),n._tfengine}const A=Ei();function sp(n,e){const t={a:n,b:e};return A.runKernel(zn,t)}/**
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
 */function op(){return typeof navigator<"u"&&navigator!=null}let io;function rp(n){io=n}function Qo(n){if(io!==void 0)return io;if(n||op()){if(n||(n=navigator),n.product==="ReactNative")return!0;const e=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!e){const t=n;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Zo(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const hR=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:Zo,isMobile:Qo,mockIsMobile:rp},Symbol.toStringTag,{value:"Module"}));/**
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
 * =============================================================================
 */const fe=y();fe.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});fe.registerFlag("IS_BROWSER",()=>Zo());fe.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");fe.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));fe.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));fe.registerFlag("PROD",()=>!1);fe.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>fe.getBool("DEBUG"));fe.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);fe.registerFlag("IS_TEST",()=>!1);fe.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>fe.getBool("DEBUG"));fe.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);fe.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);fe.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
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
 */function ki(n,e){let t=n;if(Se(n))return e==="string"?[]:[n.length];if(Ii(n)){const o=n.channels||"RGBA";return[n.height,n.width*o.length]}else if(Ti(n))return[n.buffer.size/(e==null?4:An(e))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(t)||Se(t)&&e!=="string";)s.push(t.length),t=t[0];return Array.isArray(n)&&y().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Ni(n,s,[]),s}function Ni(n,e,t){if(t=t||[],!Array.isArray(n)&&!Se(n)){v(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}v(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${n.length} elements`),v(n.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${n.length} elements`);const s=e.slice(1);for(let o=0;o<n.length;++o)Ni(n[o],s,t.concat(o))}function qr(n,e,t,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==e||n==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${s}' must be ${n} tensor, but got ${e} tensor`)}}function _(n,e,t,s="numeric"){if(n instanceof Si())return qr(s,n.dtype,e,t),n;let o=an(n);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),qr(s,o,e,t),n==null||!Se(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const c=n==null?"null":n.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${c}'`)}const r=ki(n,o);!Se(n)&&!Array.isArray(n)&&(n=[n]);const i=o!=="string"?Xn(n,o):dt(n,[],!0);return A.makeTensor(i,r,o)}function ap(n,e,t,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((r,a)=>_(r,`${e}[${a}]`,t,s))}/**
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
 */const ip="__op";function X(n){const e=Object.keys(n);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const s=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+ip;const o=(...r)=>{A.startScope(t);try{const a=s(...r);return Rs(a)&&console.error("Cannot return a Promise inside of tidy."),A.endScope(a),a}catch(a){throw A.endScope(null),a}};return Object.defineProperty(o,"name",{value:t,configurable:!0}),o}/**
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
 */function cp(n,e){const t=_(n,"real","complex"),s=_(e,"imag","complex");rn(t.shape,s.shape,`real and imag shapes, ${t.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:t,imag:s};return A.runKernel(Fo,o)}const Ai=X({complex_:cp});/**
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
 */function Fi(n,e,t,s){if(s==null)s=an(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Ti(n)||Ii(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return A.backend.createTensorFromGPUData(n,e||t,s)}if(!Se(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){cn(e);const o=I(e),r=I(t);v(o===r,()=>`Based on the provided shape, [${e}], the tensor should have ${o} values but has ${r}`);for(let a=0;a<t.length;++a){const i=t[a],c=a===t.length-1?i!==I(e.slice(a)):!0;v(t[a]===e[a]||!c,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!Se(n)&&!Array.isArray(n)&&(n=[n]),e=e||t,n=s!=="string"?Xn(n,s):dt(n,[],!0),A.makeTensor(n,e,s)}/**
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
 */function Ks(n,e,t){const s=ki(n,t);return Fi(n,e,s,t)}/**
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
 */const Rt={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class je{static join(e){return new je(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(s=>Se(s)?s.buffer:s),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let s=0;s<e.length;s++){const o=e[s];s!==e.length-1&&o.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const r=t+o.byteLength;this.shards.push({buffer:o,start:t,end:r}),t=r}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);const s=this.findShardForByte(e);if(s===-1)throw new Error(`Could not find start shard for byte ${e}`);const o=t-e,r=new ArrayBuffer(o),a=new Uint8Array(r);let i=0;for(let c=s;c<this.shards.length;c++){const l=this.shards[c],d=e+i-l.start,h=i,p=Math.min(t,l.end)-l.start,x=new Uint8Array(l.buffer,d,p-d);if(a.set(x,h),i+=x.length,t<l.end)break}return r}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(o){return e<o.start?-1:e>=o.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=lp(this.shards,t);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function lp(n,e){let t=0,s=n.length;for(;t<=s;){const o=Math.floor((s-t)/2)+t,r=e(n[o]);if(r===0)return o;r<0?s=o:t=o+1}return-1}/**
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
 */function fR(){y().set("PROD",!0)}function pR(){y().set("DEBUG",!0)}function mR(){y().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function gR(n){y().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function xR(){A.disposeVariables()}function st(){return A}function bR(){return A.memory()}function wR(n){return A.profile(n)}function j(n,e){return A.tidy(n,e)}function ve(n){Yo(n).forEach(t=>t.dispose())}function up(n){return A.keep(n)}function CR(n){return A.time(n)}function yR(n){return A.setBackend(n)}function $R(){return A.ready()}function dp(){return A.backendName}function vR(n){A.removeBackend(n)}function SR(n){return A.findBackend(n)}function IR(n){return A.findBackendFactory(n)}function hp(n,e,t=1){return A.registerBackend(n,e,t)}function fp(){return A.backend}function TR(n,e){y().setPlatform(n,e)}/**
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
 */const ht=4;async function RR(n,e){const t=[],s=[],o=Array.isArray(n)?n.map(a=>a.name):Object.keys(n);for(let a=0;a<o.length;++a){const i=o[a],c=Array.isArray(n)?n[a].tensor:n[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);const l={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const u=new Promise(async d=>{const h=await c.bytes(),f=h.reduce((g,m)=>g+m.length,0)+ht*h.length,p=new Uint8Array(f);let x=0;for(let g=0;g<h.length;g++){const m=h[g],b=new Uint8Array(new Uint32Array([m.length]).buffer);p.set(b,x),x+=ht,p.set(m,x),x+=m.length}d(p)});s.push(u)}else s.push(c.data());e!=null&&(l.group=e),t.push(l)}const r=await Promise.all(s);return{data:xp(r),specs:t}}function pp(n,e){const t=new je(n),s={};let o=0;for(const r of e){const a=mp(r,(i,c)=>t.slice(o+i,o+c));s[r.name]=Di(r,t.slice(o,o+a)),o+=a}return s}function mp(n,e){const t=I(n.shape);let s;if("quantization"in n){const o=n.quantization;s=Rt[o.dtype]}else if(n.dtype==="string"){let o=0;for(let r=0;r<t;r++)o+=ht+new Uint32Array(e(o,o+ht))[0];return o}else s=Rt[n.dtype];return t*s}async function gp(n,e){const t=I(n.shape);let s;if("quantization"in n){const o=n.quantization;s=Rt[o.dtype]}else if(n.dtype==="string"){let o=0;for(let r=0;r<t;r++)o+=ht+new Uint32Array(await e(o,o+ht))[0];return o}else s=Rt[n.dtype];return t*s}function Di(n,e){const t=n.name,s=n.dtype,o=n.shape,r=I(o);let a,i=0;if("quantization"in n){const c=n.quantization;if(c.dtype==="uint8"||c.dtype==="uint16"){if(!("min"in c&&"scale"in c))throw new Error(`Weight ${n.name} with quantization ${c.dtype} doesn't have corresponding metadata min and scale.`)}else if(c.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${n.name} is quantized with ${c.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${n.name} has unknown quantization dtype ${c.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const l=Rt[c.dtype],u=c.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(s==="float32")if(c.dtype==="uint8"||c.dtype==="uint16"){a=new Float32Array(u.length);for(let d=0;d<u.length;d++){const h=u[d];a[d]=h*c.scale+c.min}}else if(c.dtype==="float16")a=Sp()(u);else throw new Error(`Unsupported quantization type ${c.dtype} for weight type float32.`);else if(s==="int32"){if(c.dtype!=="uint8"&&c.dtype!=="uint16")throw new Error(`Unsupported quantization type ${c.dtype} for weight type int32.`);a=new Int32Array(u.length);for(let d=0;d<u.length;d++){const h=u[d];a[d]=Math.round(h*c.scale+c.min)}}else throw new Error(`Unsupported dtype in weight '${t}': ${s}`);i+=r*l}else if(s==="string"){const c=I(n.shape);a=[];for(let l=0;l<c;l++){const u=new Uint32Array(e.slice(i,i+ht))[0];i+=ht;const d=new Uint8Array(e.slice(i,i+u));a.push(d),i+=u}}else{const c=Rt[s];if(s==="float32")a=new Float32Array(e);else if(s==="int32")a=new Int32Array(e);else if(s==="bool")a=new Uint8Array(e);else if(s==="complex64"){a=new Float32Array(e);const l=new Float32Array(a.length/2),u=new Float32Array(a.length/2);for(let p=0;p<l.length;p++)l[p]=a[p*2],u[p]=a[p*2+1];const d=Ks(l,o,"float32"),h=Ks(u,o,"float32"),f=Ai(d,h);return d.dispose(),h.dispose(),f}else throw new Error(`Unsupported dtype in weight '${t}': ${s}`);i+=r*c}return Ks(a,o,s)}async function jr(n,e,t){let s=new Uint8Array(e);for(;s.byteLength<t;){const{done:o,value:r}=await n.read();if(o&&r==null){const i=t-s.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const a=new Uint8Array(s.length+r.byteLength);a.set(s,0),a.set(new Uint8Array(r),s.length),s=a}return s.buffer}async function ER(n,e){const t={},s=n.getReader();let o=new ArrayBuffer(0);for(const r of e){const a=await gp(r,async(l,u)=>(o=await jr(s,o,u),o.slice(l,u)));o=await jr(s,o,a);const i=o.slice(0,a);o=o.slice(a);const c=Di(r,i);if(t[r.name]=c,dp()==="webgpu"){const l=fp();"uploadToGPU"in l&&I(c.shape)>=y().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&l.uploadToGPU(c.dataId)}}return t}function xp(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let e=0;const t=[];n.forEach(r=>{if(e+=r.byteLength,t.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(e);let o=0;return t.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const Jo=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Kr(n){return Jo?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function bp(n){if(Jo)return Buffer.from(n).toString("base64");const e=new Uint8Array(n);let t="";for(let s=0,o=e.length;s<o;s++)t+=String.fromCharCode(e[s]);return btoa(t)}function wp(n){if(Jo){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const e=atob(n),t=new Uint8Array(e.length);for(let s=0;s<e.length;++s)t.set([e.charCodeAt(s)],s);return t.buffer}function kR(n){return je.join(n)}function Yr(n){const e="/";for(n=n.trim();n.endsWith(e);)n=n.slice(0,n.length-1);const t=n.split(e);return t[t.length-1]}function Oi(n,e){const t={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:e};return n.signature!=null&&(t.signature=n.signature),n.userDefinedMetadata!=null&&(t.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(t.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(t.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(t.trainingConfig=n.trainingConfig),t}function Cp(n,e,t){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=e,s.weightData=t}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(s.initializerSignature=n.initializerSignature),s}async function Pi(n,e){let t,s;return n.weightsManifest!=null&&([t,s]=await e(n.weightsManifest)),Cp(n,t,s)}function _s(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Kr(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Kr(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new je(n.weightData).byteLength}}function Qr(n){const e=[];for(const t of n)e.push(...t.weights);return e}function yp(){const n=t=>{let s=t<<13,o=0;for(;!(s&8388608);)o-=8388608,s<<=1;return s&=-8388609,o+=947912704,s|o},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=n(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function $p(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let e=1;e<31;e++)n[e]=e<<23;for(let e=33;e<63;e++)n[e]=2147483648+(e-32<<23);return n}function vp(){const n=new Uint32Array(64);for(let e=0;e<64;e++)n[e]=1024;return n[0]=n[32]=0,n}function Sp(){const n=yp(),e=$p(),t=vp();return s=>{const o=new ArrayBuffer(4*s.length),r=new Uint32Array(o);for(let a=0;a<s.length;a++){const i=s[a],c=n[t[i>>10]+(i&1023)]+e[i>>10];r[a]=c}return new Float32Array(o)}}/**
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
 */class H{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return H.instance==null&&(H.instance=new H),H.instance}static registerSaveRouter(e){H.getInstance().saveRouters.push(e)}static registerLoadRouter(e){H.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return H.getHandlers(e,"save")}static getLoadHandlers(e,t){return H.getHandlers(e,"load",t)}static getHandlers(e,t,s){const o=[];return(t==="load"?H.getInstance().loadRouters:H.getInstance().saveRouters).forEach(a=>{const i=a(e,s);i!==null&&o.push(i)}),o}}const NR=n=>H.registerSaveRouter(n),AR=n=>H.registerLoadRouter(n),FR=n=>H.getSaveHandlers(n),DR=(n,e)=>H.getLoadHandlers(n,e);/**
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
 */const co="tensorflowjs",lo=1,vt="models_store",at="model_info_store";function _i(){if(!y().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,e=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function uo(n){const e=n.result;e.createObjectStore(vt,{keyPath:"modelPath"}),e.createObjectStore(at,{keyPath:"modelPath"})}class Et{constructor(e){if(this.indexedDB=_i(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((s,o)=>{const r=this.indexedDB.open(co,lo);r.onupgradeneeded=()=>uo(r),r.onsuccess=()=>{const a=r.result;if(t==null){const i=a.transaction(vt,"readonly"),l=i.objectStore(vt).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return a.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(l.result.modelArtifacts)},l.onerror=u=>(a.close(),o(l.error)),i.oncomplete=()=>a.close()}else{t.weightData=je.join(t.weightData);const i=_s(t),c=a.transaction(at,"readwrite");let l=c.objectStore(at),u;try{u=l.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(h){return o(h)}let d;u.onsuccess=()=>{d=a.transaction(vt,"readwrite");const h=d.objectStore(vt);let f;try{f=h.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:i})}catch(p){return o(p)}f.onsuccess=()=>s({modelArtifactsInfo:i}),f.onerror=p=>{l=c.objectStore(at);const x=l.delete(this.modelPath);x.onsuccess=()=>(a.close(),o(f.error)),x.onerror=g=>(a.close(),o(f.error))}},u.onerror=h=>(a.close(),o(u.error)),c.oncomplete=()=>{d==null?a.close():d.oncomplete=()=>a.close()}}},r.onerror=a=>o(r.error)})}}Et.URL_SCHEME="indexeddb://";const Li=n=>y().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Et.URL_SCHEME)?Ip(n.slice(Et.URL_SCHEME.length)):null;H.registerSaveRouter(Li);H.registerLoadRouter(Li);function Ip(n){return new Et(n)}function Tp(n){return n.startsWith(Et.URL_SCHEME)?n.slice(Et.URL_SCHEME.length):n}class Rp{constructor(){this.indexedDB=_i()}async listModels(){return new Promise((e,t)=>{const s=this.indexedDB.open(co,lo);s.onupgradeneeded=()=>uo(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(at,"readonly"),i=r.objectStore(at).getAll();i.onsuccess=()=>{const c={};for(const l of i.result)c[l.modelPath]=l.modelArtifactsInfo;e(c)},i.onerror=c=>(o.close(),t(i.error)),r.oncomplete=()=>o.close()},s.onerror=o=>t(s.error)})}async removeModel(e){return e=Tp(e),new Promise((t,s)=>{const o=this.indexedDB.open(co,lo);o.onupgradeneeded=()=>uo(o),o.onsuccess=()=>{const r=o.result,a=r.transaction(at,"readwrite"),i=a.objectStore(at),c=i.get(e);let l;c.onsuccess=()=>{if(c.result==null)return r.close(),s(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const u=i.delete(e),d=()=>{l=r.transaction(vt,"readwrite");const f=l.objectStore(vt).delete(e);f.onsuccess=()=>t(c.result.modelArtifactsInfo),f.onerror=p=>s(c.error)};u.onsuccess=d,u.onerror=h=>(d(),r.close(),s(c.error))}},c.onerror=u=>(r.close(),s(c.error)),a.oncomplete=()=>{l==null?r.close():l.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})}}/**
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
 */const Je="/",jt="tensorflowjs_models",Bi="info",Ep="model_topology",kp="weight_specs",Np="weight_data",Ap="model_metadata";function Mi(n){return{info:[jt,n,Bi].join(Je),topology:[jt,n,Ep].join(Je),weightSpecs:[jt,n,kp].join(Je),weightData:[jt,n,Np].join(Je),modelMetadata:[jt,n,Ap].join(Je)}}function Vi(n){for(const e of Object.values(n))window.localStorage.removeItem(e)}function Fp(n){const e=n.split(Je);if(e.length<3)throw new Error(`Invalid key format: ${n}`);return e.slice(1,e.length-1).join(Je)}function Dp(n){return n.startsWith(kt.URL_SCHEME)?n.slice(kt.URL_SCHEME.length):n}class kt{constructor(e){if(!y().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Mi(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),s=JSON.stringify(e.weightSpecs),o=_s(e),r=je.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,bp(r));const a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:o}}catch{throw Vi(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const i=JSON.parse(r);t.format=i.format,t.generatedBy=i.generatedBy,t.convertedBy=i.convertedBy,i.signature!=null&&(t.signature=i.signature),i.userDefinedMetadata!=null&&(t.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(t.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(t.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(t.trainingConfig=i.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=wp(a),t}}kt.URL_SCHEME="localstorage://";const Ui=n=>y().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(kt.URL_SCHEME)?Op(n.slice(kt.URL_SCHEME.length)):null;H.registerSaveRouter(Ui);H.registerLoadRouter(Ui);function Op(n){return new kt(n)}class Pp{constructor(){v(y().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),v(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},t=jt+Je,s=Je+Bi;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(t)&&r.endsWith(s)){const a=Fp(r);e[a]=JSON.parse(this.LS.getItem(r))}}return e}async removeModel(e){e=Dp(e);const t=Mi(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const s=JSON.parse(this.LS.getItem(t.info));return Vi(t),s}}/**
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
 */const Qt="://";class ie{constructor(){this.managers={}}static getInstance(){return ie.instance==null&&(ie.instance=new ie),ie.instance}static registerManager(e,t){v(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Qt)&&(e=e.slice(0,e.indexOf(Qt))),v(e.length>0,()=>"scheme must not be an empty string.");const s=ie.getInstance();v(s.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),s.managers[e]=t}static getManager(e){const t=ie.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(ie.getInstance().managers)}}function ls(n){if(n.indexOf(Qt)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ie.getSchemes().join(",")}`);return{scheme:n.split(Qt)[0],path:n.split(Qt)[1]}}async function Wi(n,e,t=!1){v(n!==e,()=>`Old path and new path are the same: '${n}'`);const s=H.getLoadHandlers(n);v(s.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),v(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${n}.`);const o=s[0],r=H.getSaveHandlers(e);v(r.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),v(r.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${e}.`);const a=r[0],i=ls(n).scheme,c=ls(n).path,l=i===ls(n).scheme,u=await o.load();t&&l&&await ie.getManager(i).removeModel(c);const d=await a.save(u);return t&&!l&&await ie.getManager(i).removeModel(c),d.modelArtifactsInfo}async function OR(){const n=ie.getSchemes(),e={};for(const t of n){const s=await ie.getManager(t).listModels();for(const o in s){const r=t+Qt+o;e[r]=s[o]}}return e}async function PR(n){const e=ls(n);return ie.getManager(e.scheme).removeModel(e.path)}async function _R(n,e){return Wi(n,e,!1)}async function LR(n,e){return Wi(n,e,!0)}/**
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
 * =============================================================================
 */class _p{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!y().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return fi(e)}}if(y().get("IS_BROWSER")){y().setPlatform("browser",new _p);try{ie.registerManager(kt.URL_SCHEME,new Pp)}catch{}try{ie.registerManager(Et.URL_SCHEME,new Rp)}catch{}}/**
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
 * =============================================================================
 */const Lp={importFetch:()=>require("node-fetch")};let Ys;class Bp{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return y().global.fetch!=null?y().global.fetch(e,t):(Ys==null&&(Ys=Lp.importFetch()),Ys(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}y().get("IS_NODE")&&!y().get("IS_BROWSER")&&y().setPlatform("node",new Bp);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function te(n,e="float32",t){return e=e||"float32",cn(n),new ws(n,e,t)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Mp(n,e){const t=_(n,"x","cast");if(!Ma(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:t},o={dtype:e};return A.runKernel(Es,s,o)}const ys=X({cast_:Mp});/**
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
 */function Vp(n){const t={x:_(n,"x","clone","string_or_numeric")};return A.runKernel(Ns,t)}const Gi=X({clone_:Vp});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Up(n,e=!1){n.toString(e)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */Ei();const Wp={buffer:te,cast:ys,clone:Gi,print:Up};Qf(Wp);/**
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
 */function Gp(n,e){let t=_(n,"a","add"),s=_(e,"b","add");[t,s]=mt(t,s);const o={a:t,b:s};return A.runKernel(zn,o)}const V=X({add_:Gp});/**
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
 */function zp(n,e){let t=_(n,"a","floorDiv"),s=_(e,"b","floorDiv");[t,s]=mt(t,s);const o={a:t,b:s};return A.runKernel(ks,o)}const Hp=X({floorDiv_:zp});/**
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
 */function Xp(n,e){let t=_(n,"a","div"),s=_(e,"b","div");if([t,s]=mt(t,s),t.dtype==="int32"&&s.dtype==="int32")return Hp(t,s);const o={a:t,b:s},r={};return A.runKernel(ja,o,r)}const Ge=X({div_:Xp});/**
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
 */function qp(n,e){let t=_(n,"a","mul"),s=_(e,"b","mul");[t,s]=mt(t,s);const o={a:t,b:s};return A.runKernel(Fs,o)}const L=X({mul_:qp});/**
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
 */function jp(n){const e=_(n,"x","abs");if(e.dtype==="complex64"){const t={x:e};return A.runKernel(qa,t)}else{const t={x:e};return A.runKernel(ko,t)}}const Kp=X({abs_:jp});/**
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
 */function zi(n,e,t,s,o="NHWC",r){const a=n[3],i=[...e,a],c=dn(o);return Ve(n,i,t,r,s,null,null,c)}function ln(n,e,t,s,o,r,a="channelsLast"){const[i,c]=Dn(e);let l;if(a==="channelsLast")l=[i,c,n[3],n[3]];else if(a==="channelsFirst")l=[i,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${a}`);return Ve(n,l,t,s,o,r,!1,a)}function qn(n,e,t,s,o,r,a="NDHWC"){const[i,c,l]=ho(e);let u,d;if(a==="NDHWC")d="channelsLast",u=[i,c,l,n[4],n[4]];else if(a==="NCDHW")d="channelsFirst",u=[i,c,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${a}`);return jn(n,u,t,s,o,!1,d,r)}function Ve(n,e,t,s,o,r,a=!1,i="channelsLast"){let[c,l,u,d]=[-1,-1,-1,-1];if(i==="channelsLast")[c,l,u,d]=n;else if(i==="channelsFirst")[c,d,l,u]=n;else throw new Error(`Unknown dataFormat ${i}`);const[h,f,,p]=e,[x,g]=Dn(t),[m,b]=Dn(s),w=Zt(h,m),C=Zt(f,b),{padInfo:$,outHeight:R,outWidth:T}=Zp(o,l,u,x,g,w,C,r,i),S=a?p*d:p;let D;return i==="channelsFirst"?D=[c,S,R,T]:i==="channelsLast"&&(D=[c,R,T,S]),{batchSize:c,dataFormat:i,inHeight:l,inWidth:u,inChannels:d,outHeight:R,outWidth:T,outChannels:S,padInfo:$,strideHeight:x,strideWidth:g,filterHeight:h,filterWidth:f,effectiveFilterHeight:w,effectiveFilterWidth:C,dilationHeight:m,dilationWidth:b,inShape:n,outShape:D,filterShape:e}}function jn(n,e,t,s,o,r=!1,a="channelsLast",i){let[c,l,u,d,h]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[c,l,u,d,h]=n;else if(a==="channelsFirst")[c,h,l,u,d]=n;else throw new Error(`Unknown dataFormat ${a}`);const[f,p,x,,g]=e,[m,b,w]=ho(t),[C,$,R]=ho(s),T=Zt(f,C),S=Zt(p,$),D=Zt(x,R),{padInfo:O,outDepth:P,outHeight:M,outWidth:me}=Jp(o,l,u,d,m,b,w,T,S,D,i),Z=r?g*h:g;let oe;return a==="channelsFirst"?oe=[c,Z,P,M,me]:a==="channelsLast"&&(oe=[c,P,M,me,Z]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:u,inWidth:d,inChannels:h,outDepth:P,outHeight:M,outWidth:me,outChannels:Z,padInfo:O,strideDepth:m,strideHeight:b,strideWidth:w,filterDepth:f,filterHeight:p,filterWidth:x,effectiveFilterDepth:T,effectiveFilterHeight:S,effectiveFilterWidth:D,dilationDepth:C,dilationHeight:$,dilationWidth:R,inShape:n,outShape:oe,filterShape:e}}function Yp(n,e,t,s,o){s==null&&(s=er(n,e,t));const r=n[0],a=n[1],i=On((r-e+2*s)/t+1,o),c=On((a-e+2*s)/t+1,o);return[i,c]}function Qp(n,e,t,s,o,r){o==null&&(o=er(n,e[0],s[0]));const a=[0,0,0,t];for(let i=0;i<3;i++)n[i]+2*o>=e[i]&&(a[i]=On((n[i]-e[i]+2*o)/s[i]+1,r));return a}function er(n,e,t,s=1){const o=Zt(e,s);return Math.floor((n[0]*(t-1)-t+o)/2)}function Dn(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function ho(n){return typeof n=="number"?[n,n,n]:n}function Zt(n,e){return e<=1?n:n+(n-1)*(e-1)}function Zp(n,e,t,s,o,r,a,i,c){let l,u,d;if(typeof n=="number"){l={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const f=Yp([e,t],r,s,n,i);u=f[0],d=f[1]}else if(n==="same"){u=Math.ceil(e/s),d=Math.ceil(t/o);const h=Math.max(0,(u-1)*s+r-e),f=Math.max(0,(d-1)*o+a-t),p=Math.floor(h/2),x=h-p,g=Math.floor(f/2),m=f-g;l={top:p,bottom:x,left:g,right:m,type:"SAME"}}else if(n==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((e-r+1)/s),d=Math.ceil((t-a+1)/o);else if(typeof n=="object"){const h=c==="channelsLast"?n[1][0]:n[2][0],f=c==="channelsLast"?n[1][1]:n[2][1],p=c==="channelsLast"?n[2][0]:n[3][0],x=c==="channelsLast"?n[2][1]:n[3][1];l={top:h,bottom:f,left:p,right:x,type:h===0&&f===0&&p===0&&x===0?"VALID":"EXPLICIT"},u=On((e-r+h+f)/s+1,i),d=On((t-a+p+x)/o+1,i)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:l,outHeight:u,outWidth:d}}function Jp(n,e,t,s,o,r,a,i,c,l,u){let d,h,f,p;if(n==="valid"&&(n=0),typeof n=="number"){d={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=Qp([e,t,s,1],[i,c,l],1,[o,r,a],n,u);h=g[0],f=g[1],p=g[2]}else if(n==="same"){h=Math.ceil(e/o),f=Math.ceil(t/r),p=Math.ceil(s/a);const x=(h-1)*o+i-e,g=(f-1)*r+c-t,m=(p-1)*a+l-s,b=Math.floor(x/2),w=x-b,C=Math.floor(g/2),$=g-C,R=Math.floor(m/2),T=m-R;d={top:C,bottom:$,left:R,right:T,front:b,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:d,outDepth:h,outHeight:f,outWidth:p}}function On(n,e){if(!e)return Math.trunc(n);switch(e){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${e}`)}}function fo(n){const[e,t,s]=Dn(n);return e===1&&t===1&&s===1}function un(n,e){return fo(n)||fo(e)}function em(n){return Dn(n).every(e=>e>0)}function dn(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function tm(n,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")v(Nn(e),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(s=>{s.forEach(o=>{v(Nn(o),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${o}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${e}`)}}/**
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
 */function nm(n,e){const s={x:_(n,"x","reshape","string_or_numeric")},o={shape:e};return A.runKernel(oi,s,o)}const tr=X({reshape_:nm});/**
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
 */function sm(n){const t={x:_(n,"x","sigmoid","float32")};return A.runKernel(Ds,t)}const om=X({sigmoid_:sm});/**
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
 */function rm(n,e){let t=_(n,"broadcastTo","x");const s=t.shape;if(cn(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const l=t.shape.slice();for(;l.length<e.length;)l.unshift(1);t=tr(t,l)}const o=t.shape,r=Array.from(e);for(let l=e.length-1;l>=0;l--)if(o[l]===e[l])r[l]=1;else if(t.shape[l]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${e}].`);if(r.map((l,u)=>l>1?u:-1).filter(l=>l>=0).length===0)return Gi(t);const i={x:t},c={reps:r};return A.runKernel(ci,i,c)}const am=X({broadcastTo_:rm});/**
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
 */function im(n,e,t){cn(n),t=t||an(e);const s={shape:n,value:e,dtype:t};return A.runKernel(Ya,{},s)}/**
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
 */function Nt(n,e){const t=n.length,s=[];for(let o=0;o<t;o++){const r=t-1-o,a=n[r]||1;(e[e.length-1-o]||1)>1&&a===1&&s.unshift(r)}return s}function nr(n,e){const t=[];for(let s=0;s<e.length;s++){const o=n[n.length-s-1],r=e.length-s-1,a=e[r];(o==null||o===1&&a>1)&&t.unshift(r)}return t}function ee(n,e){const t=Math.max(n.length,e.length),s=new Array(t);for(let o=0;o<t;o++){let r=n[n.length-o-1];r==null&&(r=1);let a=e[e.length-o-1];if(a==null&&(a=1),r===1)s[t-o-1]=a;else if(a===1)s[t-o-1]=r;else if(r!==a){const i=`Operands could not be broadcast together with shapes ${n} and ${e}.`;throw Error(i)}else s[t-o-1]=r}return s}const BR=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:ee,getBroadcastDims:Nt,getReductionAxes:nr},Symbol.toStringTag,{value:"Module"}));/**
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
 */function cm(n){const t={x:_(n,"x","zerosLike")};return A.runKernel(ui,t)}const ze=X({zerosLike_:cm});/**
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
 */function lm(n){const t={x:_(n,"x","elu","float32")};return A.runKernel(Ka,t)}const um=X({elu_:lm});/**
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
 */function sr(n,e){for(let t=0;t<n.length;++t)if(n[n.length-t-1]!==e-1-t)return!1;return!0}function Hi(n,e,t){const s=n.length+e.length,o=[];let r=0,a=0;for(let i=0;i<s;i++)t.indexOf(i)===-1?o.push(n[r++]):o.push(e[a++]);return o}function Ke(n,e){const t=[],s=n.length;for(let r=0;r<s;r++)e.indexOf(r)===-1&&t.push(n[r]);const o=e.map(r=>n[r]);return[t,o]}function Ye(n,e){const t=e.map(s=>1);return Hi(n,t,e)}function Ue(n,e,t){v(sr(e,t),()=>`${n} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function Ie(n,e){if(sr(n,e))return null;const t=[];for(let s=0;s<e;++s)n.indexOf(s)===-1&&t.push(s);return n.forEach(s=>t.push(s)),t}function or(n){return n.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function Te(n,e){const t=[];for(let s=e-n;s<e;++s)t.push(s);return t}/**
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
 */function dm(n,e){let t=_(n,"base","pow"),s=_(e,"exp","pow");[t,s]=mt(t,s);const o={a:t,b:s};return A.runKernel(Ja,o)}const Zr=X({pow_:dm});/**
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
 */function ft(n,e){if((Se(n)&&e!=="string"||Array.isArray(n))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Se(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Fi(n,[],[],e)}/**
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
 */function hm(n){const t={x:_(n,"x","sqrt","float32")};return A.runKernel(Os,t)}const on=X({sqrt_:hm});/**
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
 * =============================================================================
 */function fm(n){const e=_(n,"x","square"),t={};return A.runKernel("Square",{x:e},t)}const It=X({square_:fm});/**
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
 */function pm(n,e=null,t=!1){let s=_(n,"x","sum");s.dtype==="bool"&&(s=ys(s,"int32"));const o={x:s},r={axis:e,keepDims:t};return A.runKernel(ii,o,r)}const mm=X({sum_:pm});/**
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
 */function gm(n,e=.2){const s={x:_(n,"x","leakyRelu")},o={alpha:e};return A.runKernel(Qa,s,o)}const xm=X({leakyRelu_:gm});/**
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
 */function MR(n){return v(ut(n),()=>"The f passed in grad(f) must be a function"),(e,t)=>{const s=_(e,"x","tf.grad","string_or_numeric"),o=t!=null?_(t,"dy","tf.grad"):null;return A.tidy(()=>{const{value:r,grads:a}=A.gradients(()=>n(s),[s],o);return o!=null&&rn(r.shape,o.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Ls(a),a[0]})}}function VR(n){return v(ut(n),()=>"The f passed in grads(f) must be a function"),(e,t)=>{v(Array.isArray(e),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=ap(e,"args","tf.grads","string_or_numeric"),o=t!=null?_(t,"dy","tf.grads"):null;return A.tidy(()=>{const{value:r,grads:a}=A.gradients(()=>n(...s),s,o);return o!=null&&rn(r.shape,o.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Ls(a),a})}}function UR(n){return v(ut(n),()=>"The f passed in valueAndGrad(f) must be a function"),(e,t)=>{v(e instanceof he,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),v(t==null||t instanceof he,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:o}=A.gradients(()=>n(e),[e],t);return Ls(s),{grad:s[0],value:o}}}function WR(n){return v(ut(n),()=>"The f passed in valueAndGrads(f) must be a function"),(e,t)=>{v(Array.isArray(e)&&e.every(o=>o instanceof he),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),v(t==null||t instanceof he,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=A.gradients(()=>n(...e),e,t);return t!=null&&rn(s.value.shape,t.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Ls(s.grads),s}}function bm(n,e){v(ut(n),()=>"The f passed in variableGrads(f) must be a function"),v(e==null||Array.isArray(e)&&e.every(l=>l instanceof Cs),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=e!=null;if(!t){e=[];for(const l in A.registeredVariables)e.push(A.registeredVariables[l])}const s=t?e.filter(l=>!l.trainable):null,o=e.length;e=e.filter(l=>l.trainable),v(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:a,grads:i}=A.gradients(n,e,null,r);v(i.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),v(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);const c={};return e.forEach((l,u)=>{i[u]!=null&&(c[l.name]=i[u])}),s!=null&&s.forEach(l=>c[l.name]=null),{value:a,grads:c}}function GR(n){return A.customGrad(n)}function Ls(n){if(n.filter(t=>t==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
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
 */function wm(n,e){let t=_(n,"a","sub"),s=_(e,"b","sub");[t,s]=mt(t,s);const o={a:t,b:s};return A.runKernel(Ps,o)}const Jt=X({sub_:wm});/**
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
 */function Cm(n,e){let t=_(n,"a","maximum"),s=_(e,"b","maximum");[t,s]=mt(t,s),t.dtype==="bool"&&(t=ys(t,"int32"),s=ys(s,"int32")),ee(t.shape,s.shape);const o={a:t,b:s};return A.runKernel(As,o)}const ym=X({maximum_:Cm});/**
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
 */function po(n,e="float32"){if(cn(n),e==="complex64"){const s=po(n,"float32"),o=po(n,"float32");return Ai(s,o)}const t=Xe(I(n),e);return A.makeTensor(t,n,e)}/**
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
 */function $m(n,e){const t=_(n,"x","prelu"),s=_(e,"alpha","prelu"),o={x:t,alpha:s};return A.runKernel(ei,o)}const vm=X({prelu_:$m});/**
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
 */function Sm(n){const t={x:_(n,"x","relu")};return A.runKernel(si,t)}const Im=X({relu_:Sm});/**
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
 */function Tm(n){const t={x:_(n,"x","relu6")};return A.runKernel(ri,t)}const Rm=X({relu6_:Tm});/**
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
 */function Em(n,e=0){const s={x:_(n,"x","step")},o={alpha:e};return A.runKernel(di,s,o)}const km=X({step_:Em});function rr(n,e,t){const s=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,r=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${n}, sliceDim: ${s}, and batchDim: ${o}.`;if(t.rank<o)throw new Error(r+` update.rank < ${o}. `);if(n.length<s+(t.rank-o))throw new Error(r+` Output shape length < ${s+(t.rank-o)}`);if(t.rank!==o+n.length-s)throw new Error(r+` update.rank != ${o+n.length-s}`);for(let a=0;a<o;++a)if(t.shape[a]!==e.shape[a])throw new Error(r+` updates.shape[${a}] (${t.shape[a]}) != indices.shape[${a}] (${e.shape[a]}).`);for(let a=0;a<t.rank-o;++a)if(t.shape[a+o]!==n[a+s])throw new Error(r+` updates.shape[${a+o}] (${t.shape[a+o]}) != shape[${a+o}] (${n[a+o]})`)}function Xi(n,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}rr(t,e,n)}function Kn(n,e,t){const s=e.shape.length,o=s>1?e.shape[s-1]:1,r=t.length;let a=1;for(let d=o;d<r;++d)a*=t[d];const i=o<1?1:o,c=I(e.shape)/i,l=[...q(t.slice(0,o)),1],u=I(t);return{sliceRank:o,numUpdates:c,sliceSize:a,strides:l,outputSize:u}}const zR=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:Kn,validateInput:Xi,validateUpdateShape:rr},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Nm(n,e){const t=[];for(let r=0;r<e.length;r++)e[r]&&t.push(r);const s=te(n,"int32"),o=te([t.length,n.length],"int32");for(let r=0;r<t.length;r++){const a=s.indexToLoc(t[r]),i=r*n.length;o.values.set(a,i)}return o.toTensor()}/**
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
 * =============================================================================
 */function Am(n,e,t){if(t==null||t==="linear")return n;if(t==="relu")return L(n,km(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function Fm(n,e){let t=e;const s=nr(n.shape,e.shape);return s.length>0&&(t=mm(t,s)),tr(t,n.shape)}function Dm(n,e,t,s){if(e==="linear")return n;if(e==="relu")return Im(n);if(e==="elu")return um(n);if(e==="relu6")return Rm(n);if(e==="prelu")return vm(n,t);if(e==="leakyrelu")return xm(n,s);if(e==="sigmoid")return om(n);throw new Error(`Unknown fused activation ${e}.`)}const Om=(n,e)=>!(n>0)||e==="linear";/**
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
 * =============================================================================
 */function Pm(n,e,t){const s=_m(n,e,t),o=s<0?-(s+1):s;n.splice(o,0,e)}function _m(n,e,t){return Bm(n,e,t||Lm)}function Lm(n,e){return n>e?1:n<e?-1:0}function Bm(n,e,t){let s=0,o=n.length,r=0,a=!1;for(;s<o;){r=s+(o-s>>>1);const i=t(e,n[r]);i>0?s=r+1:(o=r,a=!i)}return a?s:-s-1}/**
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
 */function Mm(n,e,t,s,o){return ar(n,e,t,s,o,0)}function Vm(n,e,t,s,o,r){return ar(n,e,t,s,o,0,!1,r,!0)}function Um(n,e,t,s,o,r){return ar(n,e,t,s,o,r,!0)}function ar(n,e,t,s,o,r,a=!1,i=!1,c=!1){const l=[];for(let g=0;g<e.length;g++)e[g]>o&&l.push({score:e[g],boxIndex:g,suppressBeginIndex:0});l.sort(Jr);const u=r>0?-.5/r:0,d=[],h=[];for(;d.length<t&&l.length>0;){const g=l.pop(),{score:m,boxIndex:b,suppressBeginIndex:w}=g;if(m<o)break;let C=!1;for(let $=d.length-1;$>=w;--$){const R=Wm(n,b,d[$]);if(R>=s){C=!0;break}if(g.score=g.score*Gm(s,u,R),g.score<=o)break}g.suppressBeginIndex=d.length,C||(g.score===m?(d.push(b),h.push(g.score)):g.score>o&&Pm(l,g,Jr))}const f=d.length,p=t-f;i&&p>0&&(d.push(...new Array(p).fill(0)),h.push(...new Array(p).fill(0)));const x={selectedIndices:d};return a&&(x.selectedScores=h),c&&(x.validOutputs=f),x}function Wm(n,e,t){const s=n.subarray(e*4,e*4+4),o=n.subarray(t*4,t*4+4),r=Math.min(s[0],s[2]),a=Math.min(s[1],s[3]),i=Math.max(s[0],s[2]),c=Math.max(s[1],s[3]),l=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),d=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),f=(i-r)*(c-a),p=(d-l)*(h-u);if(f<=0||p<=0)return 0;const x=Math.max(r,l),g=Math.max(a,u),m=Math.min(i,d),b=Math.min(c,h),w=Math.max(m-x,0)*Math.max(b-g,0);return w/(f+p-w)}function Gm(n,e,t){const s=Math.exp(e*t*t);return t<=n?s:0}function Jr(n,e){return n.score-e.score||n.score===e.score&&e.boxIndex-n.boxIndex}/**
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
 */const zm=new Map,mo=new Map;class qi{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class rt{constructor(){this.classNameMap={}}static getMap(){return rt.instance==null&&(rt.instance=new rt),rt.instance}static register(e){rt.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function ji(n,e,t){v(n.className!=null,()=>"Class being registered does not have the static className property defined."),v(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),v(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=n.className);const s=t,o=e+">"+s;return rt.register(n),zm.set(o,n),mo.set(n,o),n}function Hm(n){return mo.has(n)?mo.get(n):n.className}const HR=Object.freeze(Object.defineProperty({__proto__:null,Serializable:qi,SerializationMap:rt,getRegisteredName:Hm,registerClass:ji},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Bt extends qi{minimize(e,t=!1,s){const{value:o,grads:r}=this.computeGradients(e,s);if(s!=null){const a=s.map(i=>({name:i.name,tensor:r[i.name]}));this.applyGradients(a)}else this.applyGradients(r);return ve(r),t?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return bm(e,t)}dispose(){this.iterations_!=null&&ve(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:ft(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Bt,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});/**
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
 */class Xm extends Bt{static get className(){return"Adadelta"}constructor(e,t,s=null){super(),this.learningRate=e,this.rho=t,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=A.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=A.registeredVariables[s],a=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:j(()=>ze(r).variable(a))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:j(()=>ze(r).variable(a))});const i=Array.isArray(e)?e[o].tensor:e[s];if(i==null)return;const c=this.accumulatedGrads[o].variable,l=this.accumulatedUpdates[o].variable;j(()=>{const u=V(L(c,this.rho),L(It(i),1-this.rho)),d=L(Ge(on(V(l,this.epsilon)),on(V(c,this.epsilon))),i),h=V(L(l,this.rho),L(It(d),1-this.rho));c.assign(u),l.assign(h);const f=V(L(d,-this.learningRate),r);r.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ve(this.accumulatedGrads.map(e=>e.variable)),ve(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=e.length/2,s=!1;this.accumulatedGrads=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}/**
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
 */class qm extends Bt{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=A.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:j(()=>im(r.shape,this.initialAccumulatorValue).variable(!1))});const a=Array.isArray(e)?e[o].tensor:e[s];if(a==null)return;const i=this.accumulatedGrads[o].variable;j(()=>{const c=V(i,It(a));i.assign(c);const l=V(L(Ge(a,on(V(c,A.backend.epsilon()))),-this.learningRate),r);r.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ve(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulatedGrads=e.map(s=>({originalName:s.name,variable:s.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}/**
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
 */class jm extends Bt{static get className(){return"Adam"}constructor(e,t,s,o=null){super(),this.learningRate=e,this.beta1=t,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],j(()=>{this.accBeta1=ft(t).variable(),this.accBeta2=ft(s).variable()}),o==null&&(this.epsilon=A.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(s=>s.name):Object.keys(e);j(()=>{const s=Jt(1,this.accBeta1),o=Jt(1,this.accBeta2);t.forEach((r,a)=>{const i=A.registeredVariables[r],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${r}/m`,variable:j(()=>ze(i).variable(c))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${r}/v`,variable:j(()=>ze(i).variable(c))});const l=Array.isArray(e)?e[a].tensor:e[r];if(l==null)return;const u=this.accumulatedFirstMoment[a].variable,d=this.accumulatedSecondMoment[a].variable,h=V(L(u,this.beta1),L(l,1-this.beta1)),f=V(L(d,this.beta2),L(It(l),1-this.beta2)),p=Ge(h,s),x=Ge(f,o);u.assign(h),d.assign(f);const g=V(L(Ge(p,V(on(x),this.epsilon)),-this.learningRate),i);i.assign(g)}),this.accBeta1.assign(L(this.accBeta1,this.beta1)),this.accBeta2.assign(L(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ve(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&ve(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e),j(()=>{this.accBeta1.assign(Zr(this.beta1,this.iterations_+1)),this.accBeta2.assign(Zr(this.beta2,this.iterations_+1))});const t=e.length/2,s=!1;this.accumulatedFirstMoment=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}/**
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
 */class Km extends Bt{static get className(){return"Adamax"}constructor(e,t,s,o=null,r=0){super(),this.learningRate=e,this.beta1=t,this.beta2=s,this.epsilon=o,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],j(()=>{this.iteration=ft(0).variable(),this.accBeta1=ft(t).variable()}),o==null&&(this.epsilon=A.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(s=>s.name):Object.keys(e);j(()=>{const s=Jt(1,this.accBeta1),o=Ge(-this.learningRate,V(L(this.iteration,this.decay),1));t.forEach((r,a)=>{const i=A.registeredVariables[r],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${r}/m`,variable:ze(i).variable(c)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${r}/v`,variable:ze(i).variable(c)});const l=Array.isArray(e)?e[a].tensor:e[r];if(l==null)return;const u=this.accumulatedFirstMoment[a].variable,d=this.accumulatedWeightedInfNorm[a].variable,h=V(L(u,this.beta1),L(l,1-this.beta1)),f=L(d,this.beta2),p=Kp(l),x=ym(f,p);u.assign(h),d.assign(x);const g=V(L(Ge(o,s),Ge(h,V(x,this.epsilon))),i);i.assign(g)}),this.iteration.assign(V(this.iteration,1)),this.accBeta1.assign(L(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ve(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&ve(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}/**
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
 */class Ki extends Bt{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=Array.isArray(e)?e[o].tensor:e[s];if(r==null)return;const a=A.registeredVariables[s];j(()=>{const i=V(L(this.c,r),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=up(ft(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}/**
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
 */class Ym extends Ki{static get className(){return"Momentum"}constructor(e,t,s=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=s,this.accumulations=[],this.m=ft(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=A.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:j(()=>ze(r).variable(!1))});const a=this.accumulations[o].variable,i=Array.isArray(e)?e[o].tensor:e[s];i!=null&&j(()=>{let c;const l=V(L(this.m,a),i);this.useNesterov?c=V(L(this.c,V(i,L(l,this.m))),r):c=V(L(this.c,l),r),a.assign(l),r.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ve(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulations=e.map(s=>({originalName:s.name,variable:s.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}/**
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
 */class Qm extends Bt{static get className(){return"RMSProp"}constructor(e,t=.9,s=0,o=null,r=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=r,o==null&&(this.epsilon=A.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=A.registeredVariables[s],a=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:j(()=>ze(r).variable(a))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:j(()=>ze(r).variable(a))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:j(()=>ze(r).variable(a))});const i=Array.isArray(e)?e[o].tensor:e[s];if(i==null)return;const c=this.accumulatedMeanSquares[o].variable,l=this.accumulatedMoments[o].variable;j(()=>{const u=V(L(c,this.decay),L(It(i),1-this.decay));if(this.centered){const d=this.accumulatedMeanGrads[o].variable,h=V(L(d,this.decay),L(i,1-this.decay)),f=Ge(L(i,this.learningRate),on(Jt(u,V(It(h),this.epsilon)))),p=V(L(l,this.momentum),f);c.assign(u),d.assign(h),l.assign(p);const x=Jt(r,p);r.assign(x)}else{const d=V(L(c,this.decay),L(It(i),1-this.decay)),h=V(L(l,this.momentum),Ge(L(i,this.learningRate),on(V(d,this.epsilon))));c.assign(d),l.assign(h);const f=Jt(r,h);r.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ve(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ve(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&ve(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,s=!1;this.accumulatedMeanSquares=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
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
 */const Zm=[Xm,qm,jm,Km,Ym,Qm,Ki];function Jm(){for(const n of Zm)ji(n)}/**
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
 */const eg="model",tg=".json",ng=".weights.bin";function ea(n){return new Promise(e=>setTimeout(e)).then(n)}class At{constructor(e){if(!y().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(At.URL_SCHEME)&&(e=e.slice(At.URL_SCHEME.length)),(e==null||e.length===0)&&(e=eg),this.modelJsonFileName=e+tg,this.weightDataFileName=e+ng}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=je.join(e.weightData),s=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const o=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r=Oi(e,o),a=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=a,await ea(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=s,await ea(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:_s(e)}}}}At.URL_SCHEME="downloads://";class sg{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{const s=new FileReader;s.onload=o=>{const r=JSON.parse(o.target.result),a=r.modelTopology;if(a==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(r.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:a});return}const c=Pi(r,l=>this.loadWeights(l));e(c)},s.onerror=o=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(e){const t=[],s=[];for(const a of e)t.push(...a.weights),s.push(...a.paths);const o=this.checkManifestAndWeightFiles(e),r=s.map(a=>this.loadWeightsFile(a,o[a]));return Promise.all(r).then(a=>[t,a])}loadWeightsFile(e,t){return new Promise((s,o)=>{const r=new FileReader;r.onload=a=>{const i=a.target.result;s(i)},r.onerror=a=>o(`Failed to weights data from file of path '${e}'.`),r.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){const t=[],s=this.weightsFiles.map(r=>Yr(r.name)),o={};for(const r of e)r.paths.forEach(a=>{const i=Yr(a);if(t.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(t.push(i),s.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);o[a]=this.weightsFiles[s.indexOf(i)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return o}}const og=n=>y().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(At.URL_SCHEME)?rg(n.slice(At.URL_SCHEME.length)):null;H.registerSaveRouter(og);function rg(n="model"){return new At(n)}function XR(n){return new sg(n)}/**
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
 * =============================================================================
 */function ta(n,e,t,s){a(n),t=t??0,s=s??1,i(t,s);let o=0;const r=c=>(c.then(l=>{const u=t+ ++o/n.length*(s-t);return e(u),l}),c);function a(c){v(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function i(c,l){v(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),v(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),v(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(n.map(r))}/**
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
 */async function Yi(n,e){e==null&&(e={});const t=e.fetchFunc==null?y().platform.fetch:e.fetchFunc,s=n.map(d=>t(d,e.requestInit,{isBinary:!0})),i=(e.onProgress==null?await Promise.all(s):await ta(s,e.onProgress,0,.5)).map(d=>d.arrayBuffer());return e.onProgress==null?await Promise.all(i):await ta(i,e.onProgress,.5,1)}function ag(n,e){var t;const s=e.fetchFunc==null?y().platform.fetch:e.fetchFunc;let o=0,r;return(t=e.onProgress)===null||t===void 0||t.call(e,0),new ReadableStream({pull:async a=>{for(var i;o<n.length;){r||(r=(await s(n[o],e.requestInit,{isBinary:!0})).body.getReader());const{done:c,value:l}=await r.read();if(c){o++,r=void 0,(i=e.onProgress)===null||i===void 0||i.call(e,o/n.length);continue}a.enqueue(l);return}a.close()}})}async function qR(n,e="",t,s){return ig(a=>Yi(a,{requestInit:s}))(n,e,t)}function ig(n){return async(e,t="",s)=>{const o=e.map(()=>!1),r={},a=s!=null?s.map(()=>!1):[],i=[];if(e.forEach((f,p)=>{let x=0;f.weights.forEach(g=>{const m="quantization"in g?g.quantization.dtype:g.dtype,b=Rt[m]*I(g.shape),w=()=>{o[p]=!0,r[p]==null&&(r[p]=[]),r[p].push({manifestEntry:g,groupOffset:x,sizeBytes:b})};s!=null?s.forEach((C,$)=>{C===g.name&&(w(),a[$]=!0)}):w(),i.push(g.name),x+=b})}),!a.every(f=>f)){const f=s.filter((p,x)=>!a[x]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const c=o.reduce((f,p,x)=>(p&&f.push(x),f),[]),l=[];c.forEach(f=>{e[f].paths.forEach(p=>{const x=t+(t.endsWith("/")?"":"/")+p;l.push(x)})});const u=await n(l),d={};let h=0;return c.forEach(f=>{const p=e[f].paths.length,x=new je(u.slice(h,h+p));r[f].forEach(m=>{const b=x.slice(m.groupOffset,m.groupOffset+m.sizeBytes),w=pp(b,[m.manifestEntry]);for(const C in w)d[C]=w[C]}),h+=p}),d}}/**
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
 */const cg="application/octet-stream",lg="application/json";class ir{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(v(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=y().platform.fetch,v(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&v(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],o=Oi(e,s);if(t.body.append("model.json",new Blob([JSON.stringify(o)],{type:lg}),"model.json"),e.weightData!=null){const a=je.join(e.weightData);t.body.append("model.weights.bin",new Blob([a],{type:cg}),"model.weights.bin")}const r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:_s(e),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}const s=t.modelTopology,o=t.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return Pi(e,t=>this.loadWeights(t))}async loadStream(){const e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),s=Qr(e.weightsManifest),o=()=>ag(t,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:s,getWeightStream:o})}async getWeightUrls(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=ug(t),r=this.weightPathPrefix||s,a=[],i=[];for(const c of e)for(const l of c.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(l)):a.push(r+l+o);return this.weightUrlConverter&&a.push(...await Promise.all(i)),a}async loadWeights(e){const t=await this.getWeightUrls(e),s=Qr(e),o=await Yi(t,this.loadOptions);return[s,o]}}ir.URL_SCHEME_REGEX=/^https?:\/\//;function ug(n){const e=n.lastIndexOf("/"),t=n.lastIndexOf("?"),s=n.substring(0,e),o=t>e?n.substring(t):"";return[s+"/",o]}function na(n){return n.match(ir.URL_SCHEME_REGEX)!=null}const Qi=(n,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(n)?t=n.every(s=>na(s)):t=na(n),t)return Zi(n,e)}return null};H.registerSaveRouter(Qi);H.registerLoadRouter(Qi);function Zi(n,e){return new ir(n,e)}function jR(n,e){return Zi(n,e)}function cr(n,e){const t=n.shape.length,s=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[s-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[s-1]} vs. ${t}`);if(I(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const o=e.shape,r=o[o.length-1];let a=1;for(let d=0;d<o.length-1;++d)a*=o[d];const i=n.shape,c=o.slice();c.pop();let l=1;for(let d=r;d<t;++d)l*=i[d],c.push(i[d]);const u=[...q(n.shape).map(d=>d/l),1].slice(0,r);return[c,a,l,u]}const KR=Object.freeze(Object.defineProperty({__proto__:null,prepareAndValidate:cr},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */const go=-2,dg=-1;function lr(n,e,t){const s=n.shape.length;v(s===e.length,()=>`Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),v(s===t.length,()=>`Error in slice${s}D: Length of size ${t} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)v(e[o]+t[o]<=n.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${e[o]+t[o]}) would overflow input.shape[${o}] (${n.shape[o]})`)}function hg(n){const e=[];let t=0;for(;n>0;)n&1&&e.push(t),n/=2,t++;return e}function Ji(n,e,t){const s=[];for(let o=0;o<n.length;o++)s[o]=Math.ceil((e[o]-n[o])/t[o]);return s}function ec(n,e,t,s){const o=[...n];for(let r=o.length;r<s.length;r++)o.push(1);for(let r=0;r<t;r++)r===0?o[e]=1:(o.splice(e,0,1),o.pop());return o}function tc(n,e,t){return t<=n?t:t-(e-1)}function nc(n,e){const t=[];for(let s=0;s<n;s++)t.push(e+s);return t}function fg(n,e,t,s,o,r,a,i,c){const l=n.length;let u=new Array(l),d=new Array(l),h=new Array(l);if(e.length&&t>0){const f=e[0],p=t+1;u=sc(a,f,p,s,n),d=oc(i,f,p,o,n),h=ec(r,f,p,n)}else for(let f=0;f<l;f++)u[f]=ac(a,s,r,n,f,c),d[f]=ic(i,o,r,n,f,c),h[f]=rc(r,f,c);return{begin:u,end:d,strides:h}}function sc(n,e,t,s,o){const r=[...o],a=nc(t,e);for(let i=0;i<r.length;i++)if(a.indexOf(i)>-1)r[i]=0;else{const c=tc(e,t,i);let l=s[c];n&1<<c&&(l=0),r[i]=l}return r}function oc(n,e,t,s,o){const r=[...o],a=nc(t,e);for(let i=0;i<r.length;i++)if(a.indexOf(i)>-1)r[i]=Number.MAX_SAFE_INTEGER;else{const c=tc(e,t,i);let l=s[c];n&1<<c&&(l=Number.MAX_SAFE_INTEGER),r[i]=l}for(let i=0;i<r.length;i++){const c=o[i];r[i]<0&&(r[i]+=c),r[i]=kn(0,r[i],o[i])}return r}function rc(n,e,t){let s=n[e];return(t&1<<e||s==null)&&(s=1),s}function ac(n,e,t,s,o,r){let a=e[o];const i=t[o]||1;(n&1<<o||r&1<<o||a==null)&&(i>0?a=Number.MIN_SAFE_INTEGER:a=Number.MAX_SAFE_INTEGER);const c=s[o];return a<0&&(a+=c),a=kn(0,a,c-1),a}function ic(n,e,t,s,o,r){let a=e[o];const i=t[o]||1;(n&1<<o||r&1<<o||a==null)&&(i>0?a=Number.MAX_SAFE_INTEGER:a=Number.MIN_SAFE_INTEGER);const c=s[o];return a<0&&(a+=c),i>0?a=kn(0,a,c):a=kn(-1,a,c-1),a}function ur(n,e,t){let s=t.length;for(let o=0;o<t.length;o++)if(t[o]>1){s=o;break}for(let o=s+1;o<t.length;o++)if(e[o]>0||t[o]!==n[o])return!1;return!0}function dr(n,e){let t=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)t+=n[s]*e[s];return t}function hr(n,e,t){let s;const o=n.shape.length;typeof e=="number"?s=[e,...new Array(o-1).fill(0)]:e.length<o?s=e.concat(new Array(o-e.length).fill(0)):s=e.slice(),s.forEach(a=>{v(a!==-1,()=>"slice() does not support negative begin indexing.")});let r;return t==null?r=new Array(o).fill(-1):typeof t=="number"?r=[t,...new Array(o-1).fill(-1)]:t.length<o?r=t.concat(new Array(o-t.length).fill(-1)):r=t,r=r.map((a,i)=>a>=0?a:(v(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${i}.`),n.shape[i]-s[i])),[s,r]}function cc(n,e,t,s,o,r,a,i,c){let l;if(s==null?(l=new Array(e.length),l.fill(1)):l=s,a!=null&&a&a-1)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const d={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:l.slice(),beginMask:o,endMask:r,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};for(let w=0;w<d.dims;w++)u&&1<<w&i&&d.numAddAxisAfterEllipsis++,1<<w&a&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);const h={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};pg(d,h);let f=!0,p=!0,x=!0;const g=[],m=[];for(let w=0;w<n.length;++w){if(h.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const C=!!(h.shrinkAxisMask&1<<w),$=n[w];if($===-1){g.push(C?1:-1);continue}const R=[h.beginMask&1<<w,h.endMask&1<<w],T=[h.strides[w]>0?0:-1,h.strides[w]>0?$:$-1];if(C&&h.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");x=x&&h.strides[w]===1;const S=!!(h.beginMask&1<<w&&h.endMask&1<<w);if(h.beginValid&&h.endValid){if(C){const M=h.begin[w]<0?$+h.begin[w]:h.begin[w];if(h.begin[w]=M,h.end[w]=h.begin[w]+1,M<0||M>=$)throw Error(`slice index ${h.begin[w]} of dimension ${w} out of bounds.`)}else h.begin[w]=sa(h.begin[w],0,h.strides[w],$,R,T),h.end[w]=sa(h.end[w],1,h.strides[w],$,R,T);const P=h.strides[w]===1&&h.begin[w]===0&&h.end[w]===$;f=f&&P,p=p&&(w===0&&h.strides[w]===1||P)}else f=f&&h.strides[w]===1&&S,p=p&&(w===0&&h.strides[w]===1||S);let D,O=!1;if(h.beginValid&&h.endValid?(D=h.end[w]-h.begin[w],O=!0):C?(D=1,O=!0):S&&$>=0&&(h.strides[w]<0?D=-$:D=$,O=!0),O){let P;D===0||D<0!=h.strides[w]<0?P=0:P=Math.trunc(D/h.strides[w])+(D%h.strides[w]!==0?1:0),g.push(P)}else g.push(-1)}for(let w=0;w<h.finalShapeGatherIndices.length;++w){const C=h.finalShapeGatherIndices[w];C>=0?m.push(g[C]):C===go&&m.push(1)}return{finalShapeSparse:m.filter((w,C)=>h.finalShapeGatherIndices[C]!==go),finalShape:m,isIdentity:f,sliceDim0:p,isSimpleSlice:x,begin:h.begin,end:h.end,strides:h.strides}}function pg(n,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=n.begin!=null,e.endValid=n.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const o=Math.min(e.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,e.dims);for(;t<o;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=s}else if(1<<s&n.newAxisMask)e.finalShapeGatherIndices.push(go),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);n.begin!=null&&(e.begin[t]=n.begin[s]),n.end!=null&&(e.end[t]=n.end[s]),e.strides[t]=n.strides[s],n.beginMask&1<<s&&(e.beginMask|=1<<t),n.endMask&1<<s&&(e.endMask|=1<<t),n.shrinkAxisMask&1<<s?(e.finalShapeGatherIndices.push(dg),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(s)),e.inputShapeGatherIndicesSparse[t]=s,t++}}function sa(n,e,t,s,o,r){if(o[e])return t>0?r[e]:r[e+1&1];{const a=n<0?s+n:n;return a<r[0]?r[0]:a>r[1]?r[1]:a}}const mg=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:lr,computeFlatOffset:dr,computeOutShape:Ji,getNormalizedAxes:fg,isSliceContinous:ur,maskToAxes:hg,parseSliceParams:hr,sliceInfo:cc,startForAxis:ac,startIndicesWithElidedDims:sc,stopForAxis:ic,stopIndicesWithElidedDims:oc,stridesForAxis:rc,stridesWithElidedDims:ec},Symbol.toStringTag,{value:"Module"}));/**
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
 */const gg=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function xg(){return new Promise(n=>gg(()=>n()))}/**
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
 */function lc(n,e){const t=n[0].length;n.forEach((o,r)=>{v(o.length===t,()=>`Error in concat${t}D: rank of tensors[${r}] must be the same as the rank of the rest (${t})`)}),v(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);const s=n[0];n.forEach((o,r)=>{for(let a=0;a<t;a++)v(a===e||o[a]===s[a],()=>`Error in concat${t}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function Ft(n,e){const t=n[0].slice();for(let s=1;s<n.length;s++)t[e]+=n[s][e];return t}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */var Le;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(Le||(Le={}));function uc(n,e,t){let s=new Array;if(t==null&&e==null)return s;if(e==null)for(;s.length<n+t.length;)s.push(-1);else s=e.slice();if(t==null)return s;if(n+t.length!==s.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${n+t.length}, but shape.rank = ${s.length}`);for(let o=1;o<t.length;++o){const r=t[o],a=s[s.length-t.length+o],i=s[a];if(r>=0)if(i>=0){if(i!==r)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${o+n}] = ${r} but shape[${o+n}] = ${i}`)}else s[a]=r}return s}function dc(n){const e={FIRST_DIM_SIZE:Le.FIRST_DIM_SIZE,VALUE_ROWIDS:Le.VALUE_ROWIDS,ROW_LENGTHS:Le.ROW_LENGTHS,ROW_SPLITS:Le.ROW_SPLITS,ROW_LIMITS:Le.ROW_LIMITS,ROW_STARTS:Le.ROW_STARTS},t=[];for(const s of n)if(s in e)t.push(e[s]);else break;return t}function hc(n){return n.length===0?0:n[0]===Le.FIRST_DIM_SIZE?n.length-1:n.length}function fc(n,e){if(n==null||e==null)return;const t=n.length,s=e.length;if(t>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${s})`);for(let o=0;o<Math.min(t,s-1);++o){const r=n[o],a=e[o+1];if(r>=0&&a>=0&&r!==1&&r!==a)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${o-n.length}] = ${r} but ragged tensor input.flatValues.shape[${o-n.length}] = ${a}`)}}/**
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
 */const fr=30;function Bs(n){return n<=fr?n:xs(n,Math.floor(Math.sqrt(n)))}/**
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
 */function pc(n,e,t){const s=t*(typeof n=="number"?n:n[0]),o=e*(typeof n=="number"?n:n[1]);return[s,o]}/**
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
 */function pr(n,e,t,s=!0){let o=[];if(s)o=o.concat(e.slice(0)),o.push(n[0]/t),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const r=e.length;for(let a=0;a<r;++a)o=o.concat([n[a+1]/e[a],e[a]]);o=o.concat(n.slice(r+1))}return o}function mr(n,e,t=!0){const s=[];if(t){s.push(e);for(let o=e+1;o<n;++o)o<=2*e?(s.push(o),s.push(o-(e+1))):s.push(o)}else{const o=[],r=[];for(let a=1;a<n;++a)a>=e*2+1||a%2===1?r.push(a):o.push(a);s.push(...o),s.push(0),s.push(...r)}return s}function gr(n,e,t,s=!0){const o=[];s?o.push(n[0]/t):o.push(n[0]*t);for(let r=1;r<n.length;++r)r<=e.length?s?o.push(e[r-1]*n[r]):o.push(n[r]/e[r-1]):o.push(n[r]);return o}function mc(n,e){const t=[0];for(let s=0;s<e;++s)t.push(n[s][0]);return t}function gc(n,e,t){const s=n.slice(0,1);for(let o=0;o<t;++o)s.push(n[o+1]-e[o][0]-e[o][1]);return s}/**
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
 */const xc=1.7580993408473768,bc=1.0507009873554805;/**
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
 */const wc=.3275911,Cc=.254829592,yc=-.284496736,$c=1.421413741,vc=-1.453152027,Sc=1.061405429;/**
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
 */function Pn(n,e){if(n.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${e.length}.`);const t=new Float32Array(n.length*2);for(let s=0;s<t.length;s+=2)t[s]=n[s/2],t[s+1]=e[s/2];return t}function bg(n){const e=new Float32Array(n.length/2),t=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)e[s/2]=n[s],t[s/2]=n[s+1];return{real:e,imag:t}}function wg(n){const e=Math.ceil(n.length/4),t=new Float32Array(e),s=new Float32Array(e);for(let o=0;o<n.length;o+=4)t[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:t,imag:s}}function Cg(n){const e=Math.floor(n.length/4),t=new Float32Array(e),s=new Float32Array(e);for(let o=2;o<n.length;o+=4)t[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:t,imag:s}}function yg(n,e){const t=n[e*2],s=n[e*2+1];return{real:t,imag:s}}function $g(n,e,t,s){n[s*2]=e,n[s*2+1]=t}function vg(n,e){const t=new Float32Array(n/2),s=new Float32Array(n/2);for(let o=0;o<Math.ceil(n/2);o++){const r=(e?2:-2)*Math.PI*(o/n);t[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:t,imag:s}}function Sg(n,e,t){const s=(t?2:-2)*Math.PI*(n/e),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */const Qs="->",Ig=/->/g,oa=",",ra="...";function Ic(n,e){n=n.replace(/\s/g,"");const t=(n.length-n.replace(Ig,"").length)/Qs.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${Qs}").`);const[s,o]=n.split(Qs);v(s.indexOf(ra)===-1,()=>`The ellipsis notation ("${ra}") is not supported yet.`);const r=s.split(oa),a=r.length;if(e!==a)throw new Error(`Expected ${a} input tensors, received ${e}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let h=0;h<o.length;++h){const f=o[h];if(!r.some(p=>p.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);i.indexOf(f)===-1&&i.push(f)}for(let h=0;h<s.length;++h){const f=s[h];i.indexOf(f)===-1&&f!==oa&&i.push(f)}const c=new Array(r.length);for(let h=0;h<a;++h){if(new Set(r[h].split("")).size!==r[h].length)throw new Error(`Found duplicate axes in input component ${r[h]}. Support for duplicate axes in input is not implemented yet.`);c[h]=[];for(let f=0;f<r[h].length;++f)c[h].push(i.indexOf(r[h][f]))}const l=i.length,u=o.length,d=[];for(let h=u;h<l;++h)d.push(h);return{allDims:i,summedDims:d,idDims:c}}function Tc(n,e){let t=new Array(n);t.fill(-1);for(let o=0;o<e.length;++o)t[e[o]]=o;const s=[];for(let o=0;o<n;++o)t[o]===-1&&s.push(o);return t=t.filter(o=>o!==-1),{permutationIndices:t,expandDims:s}}function Rc(n,e,t){const s=new Array(n);for(let o=0;o<t.length;++o){const r=t[o].shape;for(let a=0;a<e[o].length;++a)s[e[o][a]]===void 0?s[e[o][a]]=r[a]:v(s[e[o][a]]===r[a],()=>`Expected dimension ${s[e[o][a]]} at axis ${a} of input shaped ${JSON.stringify(r)}, but got dimension ${r[a]}`)}}function Ec(n,e){const t=n,s=[];let o=0;n.length===0&&t.push(-1),o=n.length+1;for(let a=0;a<o;++a)s.push([]);const r=[];for(let a=0;a<t.length;++a){const i=t[a],c=Tg(e,i);for(const l of c)r.indexOf(l)===-1&&(s[a].push(l),r.push(l))}return{path:t,steps:s}}function kc(n){return n.every((e,t)=>e===t)}function Tg(n,e){const t=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(e)!==-1||e===-1)&&t.push(s);return t}function Nc(n,e,t=0){let s=[];if(typeof e=="number")v(n.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),s=new Array(e).fill(n.shape[t]/e);else{const o=e.reduce((a,i)=>(i===-1&&(a+=1),a),0);v(o<=1,()=>"There should be only one negative value in split array.");const r=e.indexOf(-1);if(r!==-1){const a=e.reduce((i,c)=>c>0?i+c:i);e[r]=n.shape[t]-a}v(n.shape[t]===e.reduce((a,i)=>a+i),()=>"The sum of sizes must match the size of the axis dimension."),s=e}return s}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function Ac(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function Fc(n,e){return`indices(${n}, 0) is invalid: ${e} < 0`}function Dc(n,e,t){return`indices(${n}, 0) is invalid: ${e} >= ${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function Oc(n,e){return`only one output dimension may be -1, not both ${n} and ${e}`}function Pc(n,e){return`size ${n} must be non-negative, not ${e}`}function _c(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Lc(n,e){const t=I(n),s=I(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${e}`}function Bc(n,e){const t=I(n),s=I(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function xo(){return"segment ids must be >= 0"}function Mc(){return"segment ids are not increasing"}function Vc(n,e){return`Segment id ${n} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function Uc(n,e,t){return`Bad: indices[${n}] == ${e} out of range [0, ${t})`}/**
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
 */function Wc(n,e){let t=!1,s;for(n<=fr?(s=n,t=!0):s=xs(n,Math.floor(Math.sqrt(n)));!t;)s>e||s===n?t=!0:s=xs(n,s+1);return s}function Gc(n,e,t){const s=[],o=n.length;for(let r=0;r<o;r++)r!==e?s.push(n[r]):s.push(t);return s}function zc(n,e,t,s){const o=e.shape.length,r=n.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(t<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${t}).`);for(let d=0;d<s;++d)if(n.shape[d]!==e.shape[d])throw new Error(`x.shape[${d}]: ${n.shape[d]} should be equal to indices.shape[${d}]: ${e.shape[d]}.`);const a=n.shape[t],i=[];let c=1,l=1,u=1;for(let d=0;d<s;++d)i.push(n.shape[d]),c*=n.shape[d];for(let d=s;d<t;d++)i.push(n.shape[d]),l*=n.shape[d];for(let d=s;d<o;d++)i.push(e.shape[d]);for(let d=t+1;d<r;d++)i.push(n.shape[d]),u*=n.shape[d];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:a,outputShape:i}}const Rg=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:zc,computeOutShape:Gc,segOpComputeOptimalWindowSize:Wc},Symbol.toStringTag,{value:"Module"}));/**
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
 */function et(n){try{return n.map(e=>Tt(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function Hc(n){return n.map(e=>lt(e))}const Eg=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:Cc,ERF_A2:yc,ERF_A3:$c,ERF_A4:vc,ERF_A5:Sc,ERF_P:wc,PARALLELIZE_THRESHOLD:fr,get RowPartitionType(){return Le},SELU_SCALE:bc,SELU_SCALEALPHA:xc,applyActivation:Dm,assertAndGetBroadcastShape:ee,assertAxesAreInnerMostDims:Ue,assertParamsConsistent:lc,assignToTypedArray:$g,axesAreInnerMostDims:sr,calculateShapes:Kn,checkEinsumDimSizes:Rc,checkPadOnDimRoundingMode:tm,combineLocations:Hi,combineRaggedTensorToTensorShapes:uc,complexWithEvenIndex:wg,complexWithOddIndex:Cg,computeConv2DInfo:Ve,computeConv3DInfo:jn,computeDefaultPad:er,computeDilation2DInfo:zi,computeOptimalWindowSize:Bs,computeOutAndReduceShapes:Ke,computeOutShape:Ft,computePool2DInfo:ln,computePool3DInfo:qn,convertConv2DDataFormat:dn,decodeEinsumEquation:Ic,eitherStridesOrDilationsAreOne:un,expandShapeToKeepDim:Ye,exponent:Sg,exponents:vg,fromStringArrayToUint8:Hc,fromUint8ToStringArray:et,getAxesPermutation:Ie,getBroadcastDims:Nt,getComplexWithIndex:yg,getEinsumComputePath:Ec,getEinsumPermutation:Tc,getFusedBiasGradient:Fm,getFusedDyActivation:Am,getImageCenter:pc,getInnerMostAxes:Te,getPermuted:mr,getRaggedRank:hc,getReductionAxes:nr,getReshaped:pr,getReshapedPermuted:gr,getRowPartitionTypesHelper:dc,getSliceBeginCoords:mc,getSliceSize:gc,getSparseFillEmptyRowsIndicesDenseShapeMismatch:Ac,getSparseFillEmptyRowsNegativeIndexErrorMessage:Fc,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Dc,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:_c,getSparseReshapeInputOutputMismatchErrorMessage:Bc,getSparseReshapeInputOutputMultipleErrorMessage:Lc,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:Oc,getSparseReshapeNegativeOutputDimErrorMessage:Pc,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:Uc,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:xo,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Mc,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Vc,getUndoAxesPermutation:or,isIdentityPermutation:kc,log:Of,mergeRealAndImagArrays:Pn,prepareAndValidate:cr,prepareSplitSize:Nc,segment_util:Rg,shouldFuse:Om,slice_util:mg,splitRealAndImagArrays:bg,stridesOrDilationsArePositive:em,tupleValuesAreOne:fo,upcastType:qe,validateDefaultValueShape:fc,validateInput:Xi,validateUpdateShape:rr,warn:Ne},Symbol.toStringTag,{value:"Module"}));/**
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
 */Jm();/**
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
 * =============================================================================
 */function Mt(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&v(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xc(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;++t)e[t]=Math.abs(n[t]);return e}const kg=n=>{const{x:e}=n.inputs,t=n.backend;Mt(e,"abs");let s=new Float32Array(I(e.shape));const o=t.data.get(e.dataId).values;return s=Xc(o),t.makeOutput(s,e.shape,e.dtype)},YR={kernelName:ko,backendName:"cpu",kernelFunc:kg};/**
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
 */function pe(n){return(e,t,s,o,r)=>{const a=ee(e,t),i=a.length,c=q(a),l=I(a),u=He(r,l),d=e.length,h=t.length,f=q(e),p=q(t),x=Nt(e,a),g=Nt(t,a);if(x.length+g.length===0)for(let m=0;m<u.length;++m)u[m]=n(s[m%s.length],o[m%o.length]);else for(let m=0;m<u.length;++m){const b=Gn(m,i,c),w=b.slice(-d);x.forEach(T=>w[T]=0);const C=en(w,d,f),$=b.slice(-h);g.forEach(T=>$[T]=0);const R=en($,h,p);u[m]=n(s[C],o[R])}return[u,a]}}/**
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
 */function Ms(n){const{inputs:e,backend:t}=n,{real:s,imag:o}=e,r=t.data.get(s.dataId).values,a=t.data.get(o.dataId).values,i=t.makeTensorInfo(s.shape,"complex64"),c=t.data.get(i.dataId);return c.complexTensorInfos={real:t.makeTensorInfo(s.shape,"float32",r),imag:t.makeTensorInfo(o.shape,"float32",a)},i}const QR={kernelName:Fo,backendName:"cpu",kernelFunc:Ms};/**
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
 */function bo(n,e,t="float32"){if(t==="complex64"){const o=bo(n,e,"float32"),r=bo(n,e,"float32");return Ms({inputs:{real:o,imag:r},backend:n})}const s=Xe(I(e),t);return n.makeTensorInfo(e,t,s)}/**
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
 */function wo(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const ZR={kernelName:Ns,backendName:"cpu",kernelFunc:wo};/**
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
 */function qc(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.data.get(s.dataId).complexTensorInfos.real,r=t.data.get(o.dataId).values;return t.makeTensorInfo(o.shape,o.dtype,r)}const JR={kernelName:ni,backendName:"cpu",kernelFunc:qc};/**
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
 */function jc(n,e,t,s){if(s==="int32"){const o=Int32Array.from(n);return[e,"int32",o]}if(s==="bool"){const o=Xn([0],t),[r,a]=pe((i,c)=>i!==c?1:0)(e,[],n,o,"bool");return[a,"bool",r]}throw new Error(`Error in Cast: failed to cast ${t} to ${s}`)}function _n(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return wo({inputs:{x:o},backend:t});const u=bo(t,o.shape,o.dtype),d=_n({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),h=Ms({inputs:{real:d,imag:u},backend:t});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(d),h}if(o.dtype==="complex64"){const u=qc({inputs:{input:o},backend:t}),d=_n({inputs:{x:u},backend:t,attrs:{dtype:r}});return t.disposeIntermediateTensorInfo(u),d}if(!Ro(o.dtype,r)){const u=wo({inputs:{x:o},backend:t});return{dataId:u.dataId,shape:u.shape,dtype:r}}const a=t.data.get(o.dataId).values,[i,c,l]=jc(a,o.shape,o.dtype,r);return t.makeTensorInfo(i,c,l)}const eE={kernelName:Es,backendName:"cpu",kernelFunc:_n};/**
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
 */function Ce(n,e,t,s){return t==null?({inputs:o,backend:r})=>{const{a,b:i}=o,c=r;Mt([a,i],n);const l=c.data.get(a.dataId).values,u=c.data.get(i.dataId).values,d=a.dtype==="string"?et(l):l,h=a.dtype==="string"?et(u):u,f=s||a.dtype,[p,x]=e(a.shape,i.shape,d,h,f);return c.makeTensorInfo(x,f,p)}:({inputs:o,backend:r})=>{const{a,b:i}=o,c=r;if(a.dtype==="complex64"||i.dtype==="complex64"){const l=_n({inputs:{x:a},backend:c,attrs:{dtype:"complex64"}}),u=c.data.get(l.dataId),d=u.complexTensorInfos.real,h=u.complexTensorInfos.imag,f=c.data.get(d.dataId).values,p=c.data.get(h.dataId).values,x=_n({inputs:{x:i},backend:c,attrs:{dtype:"complex64"}}),g=c.data.get(x.dataId),m=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,w=c.data.get(m.dataId).values,C=c.data.get(b.dataId).values,[$,R,T]=t(a.shape,i.shape,f,p,w,C),S=c.makeTensorInfo(T,"float32",$),D=c.makeTensorInfo(T,"float32",R),O=Ms({inputs:{real:S,imag:D},backend:c});return c.disposeIntermediateTensorInfo(l),c.disposeIntermediateTensorInfo(x),c.disposeIntermediateTensorInfo(S),c.disposeIntermediateTensorInfo(D),O}else{const l=c.data.get(a.dataId).values,u=c.data.get(i.dataId).values,d=s||a.dtype,[h,f]=e(a.shape,i.shape,l,u,d);return c.makeTensorInfo(f,d,h)}}}function xr(n){return(e,t,s,o,r,a)=>{const i=ee(e,t),c=I(i),l=i.length,u=q(i),d=He("float32",c),h=He("float32",c),f=Nt(e,i),p=Nt(t,i),x=Pn(s,o),g=Pn(r,a),m=e.length,b=q(e),w=t.length,C=q(t);if(f.length+p.length===0)for(let $=0;$<d.length;$++){const R=$%x.length,T=$%g.length,S=n(x[R*2],x[R*2+1],g[T*2],g[T*2+1]);d[$]=S.real,h[$]=S.imag}else for(let $=0;$<d.length;$++){const R=Gn($,l,u),T=R.slice(-m);f.forEach(M=>T[M]=0);const S=en(T,m,b),D=R.slice(-w);p.forEach(M=>D[M]=0);const O=en(D,w,C),P=n(x[S*2],x[S*2+1],g[O*2],g[O*2+1]);d[$]=P.real,h[$]=P.imag}return[d,h,i]}}/**
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
 */const Kc=pe((n,e)=>n+e),Ng=xr((n,e,t,s)=>({real:n+t,imag:e+s})),Ag=Ce(zn,Kc,Ng),tE={kernelName:zn,backendName:"cpu",kernelFunc:Ag};/**
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
 */function Fg(n,e,t,s,o){const r=I(s),a=Xe(o,t);for(let i=0;i<n.length;i++){const c=n[i];if(c<0)throw new Error("Input x must be non-negative!");c>=o||(r>0?a[c]+=e[i]:a[c]+=1)}return a}function Dg(n,e,t,s=!1){const o=n.shape[0],r=n.shape[1],a=te([o,t],e.dtype);for(let i=0;i<o;i++)for(let c=0;c<r;c++){const l=n.get(i,c);if(l<0)throw new Error("Input x must be non-negative!");l>=t||(s?a.set(1,i,l):e.size>0?a.set(a.get(i,l)+e.get(i,c),i,l):a.set(a.get(i,l)+1,i,l))}return a}/**
 * @license
 * Copyright 2023 Google LLC.
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
 */const Yc=pe((n,e)=>n&e),Og=Ce(No,Yc),nE={kernelName:No,backendName:"cpu",kernelFunc:Og};/**
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
 */function Qe(n){return(e,t,s)=>{const o=K(t,e.length);for(let r=0;r<e.length;++r)o[r]=n(e[r],s);return o}}/**
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
 */function Qc(n,e,t){const s=Qe(e);return gt(n,s,t)}function gt(n,e,t){return({inputs:s,attrs:o,backend:r})=>{const{x:a}=s;Mt(a,n);const i=r,c=i.data.get(a.dataId).values;let l;if(a.dtype==="string"){if(!Array.isArray(c))throw new Error("String tensor's value was not an instance of Array");l=et(c)}else l=c;const u=t||a.dtype,d=e(l,u,o);return i.makeTensorInfo(a.shape,u,d)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zc=Qe(n=>Math.ceil(n)),Pg=gt(Ao,Zc),sE={kernelName:Ao,backendName:"cpu",kernelFunc:Pg};/**
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
 */function _g(n,e,t,s){const o=K(t,I(e));if(s&&t!=="string"){let r=0;n.forEach(a=>{const i=I(a.shape);o.set(a.vals,r),r+=i})}else{let r=0;n.forEach(a=>{const i=t==="string"?et(a.vals):a.vals;let c=0;for(let l=0;l<a.shape[0];++l){const u=l*e[1]+r;for(let d=0;d<a.shape[1];++d)o[u+d]=i[c++]}r+=a.shape[1]})}return o}/**
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
 */const Jc=pe((n,e)=>n===e?1:0),Lg=Ce(Do,Jc,null,"bool"),oE={kernelName:Do,backendName:"cpu",kernelFunc:Lg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const el=Qe(n=>Math.exp(n)),Bg=gt(Oo,el,"float32"),rE={kernelName:Oo,backendName:"cpu",kernelFunc:Bg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tl=Qe(n=>Math.expm1(n)),Mg=gt(Po,tl),aE={kernelName:Po,backendName:"cpu",kernelFunc:Mg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nl=Qe(n=>Math.floor(n)),Vg=gt(_o,nl),iE={kernelName:_o,backendName:"cpu",kernelFunc:Vg};/**
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
 */const sl=pe((n,e)=>Math.floor(n/e)),Ug=Ce(ks,sl,null,"int32"),cE={kernelName:ks,backendName:"cpu",kernelFunc:Ug};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function Wg(n,e,t,s,o,r,a,i,c){const l=te([s,r],t);for(let u=0;u<s;u++){const d=[];let h=0;for(let f=0;f<o;f++){const p=n[u*o+f];h+=p*a[f],d.push(p)}if(h<0||h>=c/r)throw new Error(`Invalid indices: ${d} does not index into ${i}`);for(let f=0;f<r;f++)l.values[u*r+f]=e.get(...e.indexToLoc(h*r+f))}return l}/**
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
 */function Gg(n,e,t){const s=te(t,n.dtype);for(let o=0;o<s.size;++o){const a=s.indexToLoc(o).slice(),i=a[0],c=a[2],l=e.locToIndex([i,c]);a[2]=e.values[l];const u=n.locToIndex(a);0<=u&&u<n.values.length&&(s.values[o]=n.values[u])}return s}/**
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
 */const ol=pe((n,e)=>n>e?1:0),zg=Ce(Lo,ol,null,"bool"),lE={kernelName:Lo,backendName:"cpu",kernelFunc:zg};/**
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
 */const rl=pe((n,e)=>n>=e?1:0),Hg=Ce(Bo,rl,null,"bool"),uE={kernelName:Bo,backendName:"cpu",kernelFunc:Hg};/**
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
 */const al=pe((n,e)=>n<e?1:0),Xg=Ce(Mo,al,null,"bool"),dE={kernelName:Mo,backendName:"cpu",kernelFunc:Xg};/**
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
 */const il=pe((n,e)=>n<=e?1:0),qg=Ce(Vo,il,null,"bool"),hE={kernelName:Vo,backendName:"cpu",kernelFunc:qg};/**
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
 */function jg(n,e,t){const s=(e-n)/(t-1),o=Xe(t,"float32");o[0]=n;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cl=Qe(n=>Math.log(n)),Kg=gt(Uo,cl),fE={kernelName:Uo,backendName:"cpu",kernelFunc:Kg};/**
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
 */function Yg(n,e,t,s){const o=He(s,I(t));for(let r=0;r<o.length;++r){const a=r*e;let i=n[a];for(let c=0;c<e;++c){const l=n[a+c];(Number.isNaN(l)||l>i)&&(i=l)}o[r]=i}return o}/**
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
 */const ll=pe((n,e)=>Math.max(n,e)),Qg=Ce(As,ll),pE={kernelName:As,backendName:"cpu",kernelFunc:Qg};/**
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
 */const ul=pe((n,e)=>Math.min(n,e)),Zg=Ce(Wo,ul),mE={kernelName:Wo,backendName:"cpu",kernelFunc:Zg};/**
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
 */const br=pe((n,e)=>n*e),Jg=xr((n,e,t,s)=>({real:n*t-e*s,imag:n*s+e*t})),ex=Ce(Fs,br,Jg),gE={kernelName:Fs,backendName:"cpu",kernelFunc:ex};/**
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
 */function dl(n,e,t){const s=Lt(-1,t);return br([],e,s,n,t)}function tx(n){const{inputs:e,backend:t}=n,{x:s}=e;Mt(s,"neg");const o=t.data.get(s.dataId).values,[r,a]=dl(o,s.shape,s.dtype);return t.makeTensorInfo(a,s.dtype,r)}const xE={kernelName:Za,backendName:"cpu",kernelFunc:tx};/**
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
 */const hl=pe((n,e)=>n!==e?1:0),nx=Ce(Go,hl,null,"bool"),bE={kernelName:Go,backendName:"cpu",kernelFunc:nx};/**
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
 */function fl(n,e,t,s,o){const r=e.length,a=I(e),i=q(e),c=q(o),l=He(t,I(o));for(let u=0;u<a;++u){const d=Gn(u,r,i),h=new Array(d.length);for(let p=0;p<h.length;p++)h[p]=d[s[p]];const f=en(h,r,c);l[f]=n[u]}return l}/**
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
 */function pl(n){const{inputs:e,attrs:t,backend:s}=n,{x:o}=e,{perm:r}=t;Mt(o,"transpose");const a=o.shape.length,i=new Array(a);for(let d=0;d<i.length;d++)i[d]=o.shape[r[d]];const c=s.data.get(o.dataId).values,l=fl(c,o.shape,o.dtype,r,i);return{dataId:s.write(l,i,o.dtype),shape:i,dtype:o.dtype}}const wE={kernelName:li,backendName:"cpu",kernelFunc:pl};/**
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
 */function ml(n,e,t,s){const[o,r]=Ke(n,s),a=qe(e,"int32"),i=Xe(I(o),a),c=I(r);for(let l=0;l<i.length;++l){const u=l*c;let d=1;for(let h=0;h<c;++h)d*=t[u+h];i[l]=d}return{outVals:i,outShape:o,outDtype:a}}function sx(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:a}=s;Mt(o,"prod");const i=o.shape.length,c=ne(r,o.shape),l=Ie(c,i);let u=c,d=o;const h=[];l!=null&&(d=pl({inputs:{x:o},backend:t,attrs:{perm:l}}),h.push(d),u=Te(u.length,i));const f=t.data.get(d.dataId).values,{outVals:p,outShape:x,outDtype:g}=ml(d.shape,d.dtype,f,u);let m=x;return a&&(m=Ye(x,c)),h.forEach(b=>t.disposeIntermediateTensorInfo(b)),t.makeTensorInfo(m,g,p)}const CE={kernelName:ti,backendName:"cpu",kernelFunc:sx};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */function ox(n,e,t){n.forEach((s,o)=>{if(s<0||s>=t){const r=Gn(o,e.length,q(e)).join(",");throw new Error(`indices[${r}] = ${s} is not in [0, ${t})`)}})}function rx(n,e){for(let t=0;t<n.length;++t){const s=n[t],o=t===n.length-1?e:n[t+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let r=1;r<s.length;++r)if(s[r-1]>s[r])throw new Error("Ragged splits must be sorted in ascending order")}}function ax(n,e,t,s){const o=[];let r=0;const a=e.length-1+t.length,i=new Array(a).fill(null).map(()=>[0]);rx(t,s);let c=1;for(let l=0;l<e.length-1;++l){c*=e[l];const u=e[l+1];for(let d=1;d<c+1;++d)i[l].push(d*u)}for(let l=0;l<n.length;++l){let u=n[l],d=n[l]+1;for(let h=0;h<t.length;++h){const f=t[h],p=h+e.length-1;if(p>=0){const x=i[p],g=x[x.length-1]-f[u];for(let m=u;m<d;++m)i[p].push(f[m+1]+g)}u=f[u],d=f[d]}d!==u&&(o.push([u,d]),r+=d-u)}return{outSplits:i,valueSlices:o,numValues:r}}function ix(n){const e=[];for(let t=0;t<n.length;++t){const s=n[t].length,o=K("int32",s);e.push(o),n[t].forEach((r,a)=>o[a]=r)}return e}function aa(n,e){const t=n.slice(0,e);for(;t.length<e;)t.push(1);for(let s=e;s<n.length;s++)t[e-1]*=n[s];return t}function cx(n,e,t,s,o,r){const a=aa(e,2)[1],i=aa(r,2)[1];let c=0;for(const l of t)for(let u=l[0];u<l[1];++u){for(let d=0;d<s;++d)o[c*i+d]=n[u*a+d];++c}}function lx(n,e,t,s,o){const r=e.slice();r[0]=o;const a=K(t,I(r)),i=n.length,c=i===0?0:i/e[0];return cx(n,e,s,c,a,r),[a,r]}function ux(n,e,t,s,o,r,a,i){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const c=e[0][0]-1;if(ox(r,a,c),s.length===0)throw new Error("params.rank must be nonzero");const l=s[0],{outSplits:u,valueSlices:d,numValues:h}=ax(r,a,n,l),f=ix(u),p=lx(t,s,o,d,h);return[f,p[0],p[1]]}/**
 * @license
 * Copyright 2022 Google LLC.
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
 */const ia=2147483647;function dx(n,e,t,s,o,r,a){if(e.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(a.length>1)throw new Error("deltas must be a scalar or vector");const i=e.length===0,c=o.length===0,l=a.length===0,u=[];i||u.push(e[0]),c||u.push(o[0]),l||u.push(a[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const d=u.length===0?1:u[0],h=K("int32",d+1);h[0]=0;for(let g=0;g<d;++g){const m=i?n[0]:n[g],b=c?s[0]:s[g],w=l?r[0]:r[g];if(w===0)throw new Error("Requires delta != 0");let C;if(w>0&&b<m||w<0&&b>m)C=0;else if(C=Math.ceil(Math.abs((b-m)/w)),C>ia)throw new Error(`Requires ((limit - start) / delta) <= ${ia}`);h[g+1]=h[g]+C}const f=h[d],p=K(t,f);let x=0;for(let g=0;g<d;++g){const m=h[g+1]-h[g];let b=i?n[0]:n[g];const w=l?r[0]:r[g];for(let C=0;C<m;++C)p[x++]=b,b+=w}return[h,p]}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */var Ee=Le;class $s{constructor(e,t,s,o,r,a,i,c,l,u){this.shape=e,this.shapeShape=t,this.values=s,this.valuesShape=o,this.valuesDType=r,this.defaultValue=a,this.defaultValueShape=i,this.rowPartitionValues=c,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=dc(u),this.raggedRank=hc(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===Ee.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===Ee.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case Ee.VALUE_ROWIDS:return $s.getMaxWidthValueRowID(t);case Ee.ROW_SPLITS:return $s.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${Ee[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const t=e.length;if(t===0||t===1)return 0;let s=0;for(let o=0;o<t-1;++o){const r=e[o+1]-e[o];r>s&&(s=r)}return s}static getMaxWidthValueRowID(e){const t=e.length;if(t===0)return 0;let s=0,o=e[0],r=0;for(let a=1;a<t;++a){const i=e[a];i!==o&&(o=i,r=Math.max(a-s,r),s=a)}return Math.max(t-s,r)}tensorShapeFromTensor(e,t,s=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return la(e,s)}calculateOutputSize(e){const t=this.valuesShape,s=this.defaultValueShape;fc(s,t);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),a=uc(this.raggedRank,o,t);a[0]<0&&(a[0]=e);for(let i=1;i<=this.raggedRank;++i)a[i]<0&&(a[i]=this.getMaxWidth(i));return a}calculateFirstParentOutputIndex(e,t,s){const o=Math.min(e,s),r=[];let a=0;for(let i=0;i<o;++i,a+=t)r.push(a);for(let i=o;i<e;++i)r.push(-1);return v(r.length===e,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(e,t,s,o){const r=e.length,a=[];for(let i=0;i<r-1;++i){const c=e[i+1]-e[i];let l=Math.min(o,c),u=t[i];u===-1&&(l=0);for(let d=0;d<l;++d)a.push(u),u+=s;for(let d=0;d<c-l;++d)a.push(-1)}if(r>0&&a.length!==e[r-1])throw new Error("Invalid row split size.");return a}calculateOutputIndexValueRowID(e,t,s,o){const r=e.length,a=[];if(r===0)return[];let i=0,c=e[0];if(c>=t.length)throw new Error(`Got currentValueRowId=${c}, which is not less than ${t.length}`);let l=t[c];a.push(l);for(let u=1;u<r;++u){const d=e[u];if(d===c)l>=0&&(++i,i<o?l+=s:l=-1);else{if(i=0,c=d,d>=t.length)throw new Error(`Got nextValueRowId=${d} which is not less than ${t.length}`);l=t[d]}a.push(l)}if(a.length!==e.length)throw new Error("Invalid row ids.");return a}calculateOutputIndex(e,t,s,o){const r=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case Ee.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,t,s,o);case Ee.ROW_SPLITS:if(r.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(r,t,s,o);default:throw new Error(`Unsupported partition type: ${Ee[a]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case Ee.FIRST_DIM_SIZE:return e[0];case Ee.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Ee.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Ee[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),s=this.calculateOutputSize(t),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let c=o.length-2;c>=0;--c)o[c]=o[c+1]*s[c+1];const r=la(s,!1),a=K(this.valuesDType,I(r));if(o[0]*s[0]>0){let c=this.calculateFirstParentOutputIndex(t,o[0],s[0]);for(let l=1;l<=this.raggedRank;++l)c=this.calculateOutputIndex(l-1,c,o[l],s[l]);this.setOutput(this.raggedRank,c,a,r)}return[r,a]}setOutput(e,t,s,o){if(s.length===0)return;const r=this.values,a=s;let i=o.slice();i=i.slice(e+1);const c=I(i),l=t.length;let u=this.defaultValue;if(u.length!==c&&u.length!==1){const p=this.defaultValueShape;j(()=>{const x=tr(u,p);u=am(x,i).dataSync()})}let d=0,h=0,f=0;for(let p=0;p<=l;++p){let x=p<l?t[p]:-1;if(x===f){++f;continue}if(h<f){const g=r.subarray(d*c),m=a.subarray(h*c),b=(f-h)*c;ca(m,g,b)}if(p>=l){const g=s.length;x=Math.floor(g/c)}if(x>f)if(this.defaultValue.length===1)a.subarray(f*c,x*c).fill(this.defaultValue[0]),f=x;else for(;x>f;){const g=a.slice(f*c);ca(g,u,c),++f}x<0?(d=p+1,h=f):(d=p,h=f,f=h+1)}}}function ca(n,e,t){for(let s=0;s<t;s++)n[s]=e[s]}function la(n,e){const t=[];for(let s of n){if(s<0){if(!e)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}t.push(s)}return t}function hx(n,e,t,s,o,r,a,i,c,l){return new $s(n,e,t,s,o,r,a,i,c,l).compute()}/**
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
 */function fx(n,e,t,s){const o=n===e,r=n<e&&t<0,a=e<n&&t>1;if(o||r||a)return Xe(0,s);const i=Math.abs(Math.ceil((e-n)/t)),c=Xe(i,s);e<n&&t===1&&(t=-1),c[0]=n;for(let l=1;l<c.length;l++)c[l]=c[l-1]+t;return c}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gl=Qe(n=>1/Math.sqrt(n)),px=gt(zo,gl),yE={kernelName:zo,backendName:"cpu",kernelFunc:px};/**
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
 */function mx(n,e,t,s,o,r,a,i,c,l){const u=[s/o,o],d=n.values,h=e.values;if(s===0)return te(t,e.dtype);const f=c instanceof ws?c:te(u,e.dtype);typeof c=="string"||typeof c=="number"?f.values.fill(c):typeof c=="boolean"&&f.values.fill(+c);for(let p=0;p<r;p++){const x=[];let g=0;for(let m=0;m<a;m++){const b=d[p*a+m];x.push(b),g+=b*i[m]}if(g<0||g>=s/o)throw new Error(`Invalid indices: ${x} does not index into ${t}`);for(let m=0;m<o;m++)l?f.values[g*o+m]+=h[p*o+m]:f.values[g*o+m]=e.rank===0?h[0]:h[p*o+m]}return f}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gx=Qe(n=>1/(1+Math.exp(-n))),xx=Qc(Ds,n=>1/(1+Math.exp(-n))),$E={kernelName:Ds,backendName:"cpu",kernelFunc:xx};/**
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
 */function xl(n,e,t,s,o){const r=ur(s,e,t),a=I(t),i=q(s);if(r){const d=dr(e,i);return o==="string"?n.slice(d,d+a):n.subarray(d,d+a)}const c=o==="string"?et(n):n,l=te(s,o,c),u=te(t,o);for(let d=0;d<u.size;++d){const h=u.indexToLoc(d),f=h.map((p,x)=>p+e[x]);u.set(l.get(...f),...h)}return o==="string"?Hc(u.values):u.values}function bx(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:r,size:a}=s;Mt(o,"slice");const[i,c]=hr(o,r,a);lr(o,i,c);const l=t.data.get(o.dataId).values,u=xl(l,i,c,o.shape,o.dtype);return t.makeTensorInfo(c,o.dtype,u)}const vE={kernelName:ai,backendName:"cpu",kernelFunc:bx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function wx(n,e,t,s,o,r,a){const i=e[0],c=r[0],l=new Array(c),u=new Array(i),d=e[1];if(c===0){if(i!==0)throw new Error(Ac(i));const g=K(t,0),m=K(o,0);return[g,[0,d],m,l,u]}let h=!0,f=0;const p=new Array(c).fill(0);for(let g=0;g<i;++g){const m=n[g*d];if(m<0)throw new Error(Fc(g,m));if(m>=c)throw new Error(Dc(g,m,c));++p[m],h=h&&m>=f,f=m}let x=!0;for(let g=0;g<c;++g){const m=p[g]===0;l[g]=m,x=x&&!m,p[g]=Math.max(p[g],1),g>0&&(p[g]+=p[g-1])}if(x&&h){const g=n,m=s;for(let b=0;b<i;++b)u[b]=b;return[g,[i,d],m,l,u]}else{const g=p[c-1],m=K(t,g*d),b=K(o,g),w=new Array(c).fill(0);for(let C=0;C<i;++C){const $=n[C*d],R=w[$],T=($===0?0:p[$-1])+R;w[$]++;for(let S=0;S<d;++S)m[T*d+S]=n[C*d+S];b[T]=s[C],u[C]=T}for(let C=0;C<c;++C)if(w[C]===0){const R=C===0?0:p[C-1];m[R*d+0]=C;for(let T=1;T<d;++T)m[R*d+T]=0;b[R]=a}return[m,[g,d],b,l,u]}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function Cx(n,e,t,s,o){const r=I(s),a=e[0],i=o.length,c=[];let l=1,u=-1;for(let g=0;g<i;++g){const m=o[g];if(m===-1){if(u!==-1)throw new Error(Oc(u,g));u=g,c.push(1)}else{if(m<0)throw new Error(Pc(g,m));l*=m,c.push(m)}}if(u!==-1){if(l<=0)throw new Error(_c());const g=Math.trunc(r/l);if(l*g!==r)throw new Error(Lc(s,c));c[u]=g}if(I(c)!==r)throw new Error(Bc(s,c));const h=s.length,f=[];if(h>0){f[h-1]=1;for(let g=h-2;g>=0;--g)f[g]=f[g+1]*s[g+1]}const p=[];if(i>0){p[i-1]=1;for(let g=i-2;g>=0;--g)p[g]=p[g+1]*c[g+1]}const x=K(t,a*i);for(let g=0;g<a;++g){let m=0;for(let b=0;b<h;++b)m+=n[g*h+b]*f[b];for(let b=0;b<i;++b)x[g*i+b]=Math.trunc(m/p[b]),m%=p[b]}return[x,[a,i],c]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function yx(n,e,t,s,o,r=!1,a=0){const i=s.length,c=[e[0],n.length/e[0]],l=c[1],d=i>0?o[i-1]+1:0;if(d<0)throw new Error(xo());const h=e.slice();h[0]=d;const f=h.reduce((w,C)=>w*C,1),p=K(t,f);if(i===0)return d>0&&p.fill(a),[p,h];if(d<=0)throw new Error(xo());let x=0,g=1,m=0,b=o[x];for(;;){let w=0;if(g<i){if(w=o[g],b===w){++g;continue}if(b>=w)throw new Error(Mc())}if(b<0||b>=d)throw new Error(Vc(b,d));b>m&&p.fill(a,m*l,b*l);for(let C=x;C<g;++C){const $=s[C];if($<0||$>=c[0])throw new Error(Uc(C,s[C],c[0]));for(let R=0;R<l;R++)p[b*l+R]+=n[$*l+R]}if(r)for(let C=0;C<l;C++)p[b*l+C]/=g-x;if(x=g,++g,m=b+1,b=w,g>i)break}return m<d&&p.fill(a,m*l,d*l),[p,h]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $x=Qe(n=>Math.sqrt(n)),vx=Qc(Os,n=>Math.sqrt(n)),SE={kernelName:Os,backendName:"cpu",kernelFunc:vx};/**
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
 */const bl=pe((n,e)=>{const t=n-e;return t*t}),Sx=Ce(Ho,bl),IE={kernelName:Ho,backendName:"cpu",kernelFunc:Sx};/**
 * @license
 * Copyright 2023 Google LLC.
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
 */const wl=Qe((n,e)=>{const{pattern:t,replaceGlobal:s,rewrite:o}=e;return n.replace(new RegExp(t,s?"g":""),o)}),Ix=gt(Xo,wl),TE={kernelName:Xo,backendName:"cpu",kernelFunc:Ix};/**
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
 */function Tx(n,e,t,s){const o=te(n,e.dtype);for(let r=0;r<o.size;r++){const a=o.indexToLoc(r),i=new Array(a.length);for(let c=0;c<i.length;c++)i[c]=a[c]*t[c]+s[c];o.set(e.get(...i),...a)}return o}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */class Rx{constructor(e,t,s,o,r,a){this.separator=lt(e),this.nGramWidths=t,this.leftPad=lt(s),this.rightPad=lt(o),this.padWidth=r,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const s=this.getPadWidth(t);return Math.max(0,e+2*s-t+1)}createNGrams(e,t,s,o,r,a){for(let i=0;i<r;++i){const c=this.getPadWidth(a),l=Math.max(0,c-i),u=Math.max(0,c-(r-(i+1))),d=a-(l+u),h=t+(l>0?0:i-c);let f=0;f+=l*this.leftPad.length;for(let b=0;b<d;++b)f+=e[h+b].length;f+=u*this.rightPad.length;const p=l+u+d-1;f+=p*this.separator.length,s[o+i]=new Uint8Array(f);const x=s[o+i];let g=0;const m=b=>b.forEach(w=>x[g++]=w);for(let b=0;b<l;++b)m(this.leftPad),m(this.separator);for(let b=0;b<d-1;++b)m(e[h+b]),m(this.separator);if(d>0){m(e[h+d-1]);for(let b=0;b<u;++b)m(this.separator),m(this.rightPad)}else{for(let b=0;b<u-1;++b)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(e,t){const s=e.length,o=t.length;if(o>0){let c=t[0];if(c!==0)throw new Error(`First split value must be 0, got ${c}`);for(let l=1;l<o;++l){let u=t[l]>=c;if(u=u&&t[l]<=s,!u)throw new Error(`Invalid split value ${t[l]}, must be in [${c}, ${s}]`);c=t[l]}if(c!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${c}`)}const r=o-1,a=K("int32",o);if(s===0||o===0){const c=new Array(s);for(let l=0;l<=r;++l)a[l]=0;return[c,a]}a[0]=0;for(let c=1;c<=r;++c){const l=t[c]-t[c-1];let u=0;this.nGramWidths.forEach(d=>{u+=this.getNumNGrams(l,d)}),this.preserveShort&&l>0&&u===0&&(u=1),a[c]=a[c-1]+u}const i=new Array(a[r]);for(let c=0;c<r;++c){const l=t[c];let u=a[c];if(this.nGramWidths.forEach(d=>{const h=t[c+1]-t[c],f=this.getNumNGrams(h,d);this.createNGrams(e,l,i,u,f,d),u+=f}),this.preserveShort&&u===a[c]){const d=t[c+1]-t[c];if(d===0)continue;const h=d+2*this.padWidth;this.createNGrams(e,l,i,u,1,h)}}return[i,a]}}function Ex(n,e,t,s,o,r,a,i){return new Rx(t,s,o,r,a,i).compute(n,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function kx(n,e,t,s){if(!n.length)return;if(e.length===0){for(let r=0;r<n.length;++r)s.push(n.subarray(r,r+1));return}if(e.length===1){const r=e[0];let a=n.indexOf(r);for(;a!==-1;){const i=n.subarray(0,a);(!t||i.length!==0)&&s.push(i),n=n.subarray(a+1),a=n.indexOf(r)}(!t||n.length!==0)&&s.push(n);return}let o=0;for(let r=0;r<n.length+1;r++)if(r===n.length||e.indexOf(n[r])!==-1){const a=n.subarray(o,r);(!t||a.length!==0)&&s.push(a),o=r+1}}function Nx(n,e,t){const s=n.length,o=[];let r=0,a=0;const i=new Array(s);for(let h=0;h<s;++h){const f=o.length;kx(n[h],e,t,o);const p=o.length-f;i[h]=p,r+=p,a=Math.max(a,p)}const c=K("int32",r*2),l=new Array(r),u=[s,a];let d=0;for(let h=0;h<s;++h)for(let f=0;f<i[h];++f)c[d*2]=h,c[d*2+1]=f,l[d]=o[d],++d;return[c,l,u]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function Ax(n,e){const t=K("int32",n.length);for(let s=0;s<n.length;++s)t[s]=$i(n[s]).modulo(e).getLowBitsUnsigned();return t}/**
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
 */const Cl=pe((n,e)=>n-e),Fx=xr((n,e,t,s)=>({real:n-t,imag:e-s})),Dx=Ce(Ps,Cl,Fx),RE={kernelName:Ps,backendName:"cpu",kernelFunc:Dx};/**
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
 * =============================================================================
 */function Ox(n,e){const t=new Array(n.rank);for(let o=0;o<t.length;o++)t[o]=n.shape[o]*e[o];const s=te(t,n.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),a=new Array(n.rank);for(let c=0;c<a.length;c++)a[c]=r[c]%n.shape[c];const i=n.locToIndex(a);s.values[o]=n.values[i]}return s}/**
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
 */const Sn=(n,e)=>{const t=e.value-n.value;return t===0?n.index-e.index:t};function yl(n,e,t=0,s=n.length-1){for(;s>t;){if(s-t>600){const i=s-t+1,c=e-t+1,l=Math.log(i),u=.5*Math.exp(2*l/3),d=.5*Math.sqrt(l*u*(i-u)/i)*Math.sign(c-i/2),h=Math.max(t,Math.floor(e-c*u/i+d)),f=Math.min(s,Math.floor(e+(i-c)*u/i+d));yl(n,e,h,f)}const o=n[e];let r=t,a=s;for(Ze(n,t,e),Sn(n[s],o)>0&&Ze(n,t,s);r<a;){for(Ze(n,r,a),r++,a--;Sn(n[r],o)<0;)r=r+1;for(;Sn(n[a],o)>0;)a=a-1}Sn(n[t],o)===0?Ze(n,t,a):(a=a+1,Ze(n,a,s)),a<=e&&(t=a+1),e<=a&&(s=a-1)}}function Px(n,e,t,s,o){const r=e[e.length-1],[a,i]=[n.length/r,r],c=He(t,a*s),l=He("int32",a*s);for(let d=0;d<a;d++){const h=d*i,f=n.subarray(h,h+i);let p=new Array(f.length);f.forEach((b,w)=>p[w]={value:b,index:w}),s<p.length&&(yl(p,s),p=p.slice(0,s)),o&&p.sort(Sn);const x=d*s,g=c.subarray(x,x+s),m=l.subarray(x,x+s);for(let b=0;b<s;b++)g[b]=p[b].value,m[b]=p[b].index}const u=e.slice();return u[u.length-1]=s,[te(u,t,c),te(u,"int32",l)]}/**
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
 */function _x(n,e,t,s){const o=ne(e,t)[0],r=[1,t[0],1];for(let p=0;p<o;p++)r[0]*=t[p];r[1]=t[o];for(let p=o+1;p<t.length;p++)r[2]*=t[p];const a=new Map,i=new Int32Array(t[o]),c=new ws(r,s,n),l=[],u=r[0]===1&&r[2]===1;for(let p=0;p<t[o];p++){let x;if(u)x=n[p].toString();else{const m=[];for(let b=0;b<r[0];b++)for(let w=0;w<r[2];w++)m.push(c.get(b,p,w));x=m.join(",")}const g=a.get(x);if(g!=null)i[p]=g;else{const m=a.size;a.set(x,m),i[p]=m,l.push(p)}}const d=r.slice();d[1]=a.size;const h=new ws(d,s);l.forEach((p,x)=>{for(let g=0;g<r[0];g++)for(let m=0;m<r[2];m++)h.set(c.get(g,p,m),g,x,m)});const f=t.slice();return f[o]=d[1],{outputValues:h.values,outputShape:f,indices:i}}/**
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
 */const Lx=Object.freeze(Object.defineProperty({__proto__:null,addImpl:Kc,bincountImpl:Fg,bincountReduceImpl:Dg,bitwiseAndImpl:Yc,castImpl:jc,ceilImpl:Zc,concatImpl:_g,equalImpl:Jc,expImpl:el,expm1Impl:tl,floorDivImpl:sl,floorImpl:nl,gatherNdImpl:Wg,gatherV2Impl:Gg,greaterEqualImpl:rl,greaterImpl:ol,lessEqualImpl:il,lessImpl:al,linSpaceImpl:jg,logImpl:cl,maxImpl:Yg,maximumImpl:ll,minimumImpl:ul,multiplyImpl:br,negImpl:dl,notEqualImpl:hl,prodImpl:ml,raggedGatherImpl:ux,raggedRangeImpl:dx,raggedTensorToTensorImpl:hx,rangeImpl:fx,rsqrtImpl:gl,scatterImpl:mx,sigmoidImpl:gx,simpleAbsImpl:Xc,sliceImpl:xl,sparseFillEmptyRowsImpl:wx,sparseReshapeImpl:Cx,sparseSegmentReductionImpl:yx,sqrtImpl:$x,squaredDifferenceImpl:bl,staticRegexReplaceImpl:wl,stridedSliceImpl:Tx,stringNGramsImpl:Ex,stringSplitImpl:Nx,stringToHashBucketFastImpl:Ax,subImpl:Cl,tileImpl:Ox,topKImpl:Px,transposeImpl:fl,uniqueImpl:_x},Symbol.toStringTag,{value:"Module"}));/**
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
 */const yt={},ss={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function $l(n,e){yt[n]=e}function Be(n,e){if(!(n in yt)||e!=null){const s=Mx(n,e);if(s!==null)yt[n]=s;else return null}const t=yt[n];return t==null||t.isContextLost()?(delete yt[n],Be(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),yt[n])}function Bx(n){if(!y().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function Mx(n,e){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const t=e??Bx(n);return t.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete yt[n]},!1),y().getBool("SOFTWARE_WEBGL_ENABLED")&&(ss.failIfMajorPerformanceCaveat=!1),n===1?t.getContext("webgl",ss)||t.getContext("experimental-webgl",ss):t.getContext("webgl2",ss)}/**
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
 */var Ln;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Ln||(Ln={}));var ye;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(ye||(ye={}));var J;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(J||(J={}));function Yn(n,e){return[e,n]}function Vx(n,e){return n*e}function os(n){const e=I(n),t=Math.ceil(e/4);return gs(t)}function hn(n,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(n/2))]}function Ux(n,e){const[t,s]=hn(n,e);return t*s*4}function wr(n,e){const t=n;let s,o,r,a,i,c,l,u,d,h;return y().getNumber("WEBGL_VERSION")===2?(s=t.R32F,o=t.R16F,r=t.RGBA16F,a=t.RGBA32F,i=t.RED,l=4,u=1,d=t.HALF_FLOAT,h=t.FLOAT,c=t.RGBA8):(s=n.RGBA,o=n.RGBA,r=n.RGBA,a=t.RGBA,i=n.RGBA,l=4,u=4,d=e!=null?e.HALF_FLOAT_OES:null,h=n.FLOAT,c=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:h}}/**
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
 */function k(n,e){const t=e();return y().getBool("DEBUG")&&Wx(n),t}function Wx(n){const e=n.getError();if(e!==n.NO_ERROR)throw new Error("WebGL Error: "+Sl(n,e))}const Gx=596e-10,zx=65504;function vl(n){return!!(y().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||Gx<Math.abs(n)&&Math.abs(n)<zx)}function Sl(n,e){switch(e){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function In(n,e){return tt(n,()=>n.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function Il(n,e){const t=tt(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(k(n,()=>n.shaderSource(t,e)),k(n,()=>n.compileShader(t)),n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw n.getShaderInfoLog(t),new Error("Failed to compile vertex shader.");return t}function Tl(n,e){const t=tt(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(k(n,()=>n.shaderSource(t,e)),k(n,()=>n.compileShader(t)),y().get("ENGINE_COMPILE_ONLY"))return t;if(n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw Cr(e,n.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}const Hx=/ERROR: [0-9]+:([0-9]+):/g;function Cr(n,e){const t=Hx.exec(e);if(t==null){`${e}`;return}const s=+t[1],o=n.split(`
`),r=o.length.toString().length+2,a=o.map((d,h)=>St((h+1).toString(),r)+d);let i=0;for(let d=0;d<a.length;d++)i=Math.max(a[d].length,i);const c=a.slice(0,s-1),l=a.slice(s-1,s),u=a.slice(s);c.join(`
`),e.split(`
`)[0],`${St(l[0],i)}`,u.join(`
`)}function Rl(n){return tt(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function El(n,e){if(k(n,()=>n.linkProgram(e)),!y().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(e,n.LINK_STATUS)===!1)throw n.getProgramInfoLog(e),new Error("Failed to link vertex and fragment shaders.")}function us(n,e){if(k(n,()=>n.validateProgram(e)),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw n.getProgramInfoLog(e),new Error("Shader program validation failed.")}function kl(n,e){const t=tt(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return k(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),k(n,()=>n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function Nl(n,e){const t=tt(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return k(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t)),k(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function Xx(){return y().getNumber("WEBGL_VERSION")===2?1:4}function Al(n){return tt(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function Fl(n,e){const t=y().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||e<=0){const s=`[${n}x${e}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>t||e>t){const s=`[${n}x${e}]`,o=`[${t}x${t}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function Dl(n){return tt(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Co(n,e,t,s,o,r,a){const i=n.getAttribLocation(e,t);return i===-1?!1:(k(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),k(n,()=>n.vertexAttribPointer(i,o,n.FLOAT,!1,r,a)),k(n,()=>n.enableVertexAttribArray(i)),!0)}function Ol(n,e,t){Ml(n,t),k(n,()=>n.activeTexture(n.TEXTURE0+t)),k(n,()=>n.bindTexture(n.TEXTURE_2D,e))}function qx(n,e){Ml(n,e),k(n,()=>n.activeTexture(n.TEXTURE0+e)),k(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function Pl(n,e,t){return tt(n,()=>n.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function _l(n,e,t){return n.getUniformLocation(e,t)}function Ll(n,e,t,s){k(n,()=>Ol(n,e,s)),k(n,()=>n.uniform1i(t,s))}function jx(n){k(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,null)),k(n,()=>n.viewport(0,0,n.canvas.width,n.canvas.height)),k(n,()=>n.scissor(0,0,n.canvas.width,n.canvas.height))}function ds(n,e,t){k(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),k(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0))}function yo(n,e){k(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),k(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function Tn(n){const e=n.checkFramebufferStatus(n.FRAMEBUFFER);if(e!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Bl(n,e))}function Bl(n,e){switch(e){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function tt(n,e,t){const s=k(n,()=>e());if(s==null)throw new Error(t);return s}function Ml(n,e){const t=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=e+n.TEXTURE0;if(s<n.TEXTURE0||s>t){const o=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${o}.`)}}function Dt(n,e=2){return I(n.slice(0,n.length-e))}function Ot(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function Rn(n){let e=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(e=[Dt(n),...Ot(n)]),e}function Vl(n,e=!1){let t=y().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=y().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&y().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=t/2),e&&(t=t*2,s=s*2,n=n.map((i,c)=>c>=n.length-2?Ts(n[c]):n[c]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=pt(n).newShape);let o=I(n),r=null;n.length<=1&&o<=t?r=[1,o]:n.length===2&&n[0]<=t&&n[1]<=t?r=n:n.length===3&&n[0]*n[1]<=t&&n[2]<=t?r=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=t&&n[1]*n[2]<=t?r=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=t&&n[3]<=t?r=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=t&&n[1]*n[2]*n[3]<=t&&(r=[n[0],n[1]*n[2]*n[3]]);const a=r!=null&&Math.max(...r)>s&&Math.min(...r)<=(e?2:1)&&Math.min(...r)>0;if(r==null||a)if(e){const i=Dt(n);let c=2,l=2;n.length&&([c,l]=Ot(n)),o=i*(c/2)*(l/2),r=gs(o).map(u=>u*2)}else r=gs(o);return r}function rs(n){return n%2===0}function Bn(n,e){if(n=n.slice(-2),e=e.slice(-2),Q(n,e)||!n.length||!e.length||n[0]===0||n[1]===0||e[0]===0||e[1]===0)return!0;if(n.length!==e.length){const t=n[n.length-1],s=e[e.length-1];if(t===s||rs(t)&&rs(s)&&(n[0]===1||e[0]===1))return!0}return n[1]===e[1]&&rs(n[0])&&rs(e[0])}let hs,fs;function Ul(n){if(hs==null){const e=Be(n);hs=e.getParameter(e.MAX_TEXTURE_SIZE)}return hs}function Kx(){hs=null}function Yx(){fs=null}function Wl(n){if(fs==null){const e=Be(n);fs=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,fs)}function Gl(n){if(n===0)return 0;let e;const t=Be(n);return $e(t,"EXT_disjoint_timer_query_webgl2")&&n===2?e=2:$e(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function $e(n,e){return n.getExtension(e)!=null}function $o(n){try{if(Be(n)!=null)return!0}catch(e){return!1}return!1}function zl(n){if(n===0)return!1;const e=Be(n);if(n===1){if(!$e(e,"OES_texture_float"))return!1}else if(!$e(e,"EXT_color_buffer_float"))return!1;return vo(e)}function Hl(n){if(n===0)return!1;const e=Be(n);if(n===1){if(!$e(e,"OES_texture_float")||!$e(e,"WEBGL_color_buffer_float"))return!1}else{if($e(e,"EXT_color_buffer_float"))return vo(e);const s="EXT_color_buffer_half_float";if($e(e,s)){const o=e.getExtension(s);return Qx(e,o)}return!1}return vo(e)}function vo(n){const e=wr(n),t=n.createTexture();n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(t),n.deleteFramebuffer(r),a}function Qx(n,e){const t=wr(n,e),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);const a=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,a),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(a),i}function Xl(n){return n!==2?!1:Be(n).fenceSync!=null}function fn(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&v(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}const Zx=Object.freeze(Object.defineProperty({__proto__:null,assertNotComplex:fn,bindCanvasToFramebuffer:jx,bindColorTextureToFramebuffer:ds,bindTextureToProgramUniformSampler:Ll,bindTextureUnit:Ol,bindVertexBufferToProgramAttribute:Co,callAndCheck:k,canBeRepresented:vl,createFragmentShader:Tl,createFramebuffer:Dl,createProgram:Rl,createStaticIndexBuffer:Nl,createStaticVertexBuffer:kl,createTexture:Al,createVertexShader:Il,getBatchDim:Dt,getExtensionOrThrow:In,getFramebufferErrorMessage:Bl,getMaxTexturesInShader:Wl,getNumChannels:Xx,getProgramUniformLocation:_l,getProgramUniformLocationOrThrow:Pl,getRowsCols:Ot,getShapeAs3D:Rn,getTextureShapeFromLogicalShape:Vl,getWebGLDisjointQueryTimerVersion:Gl,getWebGLErrorMessage:Sl,getWebGLMaxTextureSize:Ul,hasExtension:$e,isCapableOfRenderingToFloatTexture:zl,isDownloadFloatTextureEnabled:Hl,isReshapeFree:Bn,isWebGLFenceEnabled:Xl,isWebGLVersionEnabled:$o,linkProgram:El,logShaderSourceAndInfoLog:Cr,resetMaxTextureSize:Kx,resetMaxTexturesInShader:Yx,unbindColorTextureFromFramebuffer:yo,unbindTextureUnit:qx,validateFramebuffer:Tn,validateProgram:us,validateTextureSize:Fl},Symbol.toStringTag,{value:"Module"}));/**
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
 * =============================================================================
 */const F=y();F.registerFlag("HAS_WEBGL",()=>F.getNumber("WEBGL_VERSION")>0);F.registerFlag("WEBGL_VERSION",()=>$o(2)?2:$o(1)?1:0);F.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);F.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>F.get("WEBGL_VERSION")===2);F.registerFlag("WEBGL_CPU_FORWARD",()=>!0);F.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);F.registerFlag("WEBGL_PACK",()=>F.getBool("HAS_WEBGL"));F.registerFlag("WEBGL_PACK_NORMALIZATION",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_CLIP",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_REDUCE",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_LAZILY_UNPACK",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_CONV_IM2COL",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>Ul(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>Wl(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=F.getNumber("WEBGL_VERSION");return n===0?0:Gl(n)});F.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>F.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Qo());F.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>zl(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>F.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:F.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));F.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>Hl(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_FENCE_API_ENABLED",()=>Xl(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>F.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);F.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});F.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Qo()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});F.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);F.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);F.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);F.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);F.registerFlag("WEBGL_EXP_CONV",()=>!1);F.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>F.getBool("IS_TEST"));F.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);F.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);F.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);F.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);/**
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
 */function de(){let n,e,t,s,o,r,a,i,c,l;return y().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",e="in",t="out",s="in",o="texture",r="outputColor",a="out vec4 outputColor;",i=y().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",c="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",e="attribute",t="varying",s="varying",o="texture2D",r="gl_FragColor",a="",i=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:e,varyingVs:t,varyingFs:s,texture2D:o,output:r,defineOutput:a,defineSpecialNaN:i,defineSpecialInf:c,defineRound:l}}/**
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
 */function Vt(n,e,t="index"){const s=q(e);return s.map((o,r)=>{const a=`int ${n[r]} = ${t} / ${o}`,i=r===s.length-1?`int ${n[r+1]} = ${t} - ${n[r]} * ${o}`:`index -= ${n[r]} * ${o}`;return`${a}; ${i};`}).join("")}function Vs(n,e,t="index"){const s=q(e);return s.map((o,r)=>{const a=`int ${n[r]} = ${t} / outShapeStrides[${r}]`,i=r===s.length-1?`int ${n[r+1]} = ${t} - ${n[r]} * outShapeStrides[${r}]`:`index -= ${n[r]} * outShapeStrides[${r}]`;return`${a}; ${i};`}).join("")}function Jx(n,e){const t=n.length,s=n.map(r=>`${e}[${r}]`),o=new Array(t-1);o[t-2]=s[t-1];for(let r=t-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function e0(n,e,t="index"){const s=n.map((r,a)=>a),o=Jx(s,e);return o.map((r,a)=>{const i=`int ${n[a]} = ${t} / ${o[a]}`,c=a===o.length-1?`int ${n[a+1]} = ${t} - ${n[a]} * ${o[a]}`:`index -= ${n[a]} * ${o[a]}`;return`${i}; ${c};`}).join("")}function yr(n){const e=q(n).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function $r(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const ql=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;/**
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
 */const{getBroadcastDims:jl}=Eg;function t0(n,e,t){const s=[];if(n.forEach(f=>{const p=I(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${p>1?`[${p}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),t.enableShapeUniforms){const{uniformShape:x}=vr(t.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(x.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const o=s.join(`
`),r=n.map(f=>n0(f,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),a=e.texShape,i=de(),c=r0(i);let l,u,d=c0(i);return e.isPacked?(l=s0(e.logicalShape,a,t.enableShapeUniforms),u=i0(i)):(l=o0(e.logicalShape,a,t.enableShapeUniforms),u=a0(i)),t.packedInputs&&(d+=h0),[d,c,u,o,l,r,t.userCode].join(`
`)}function pn(n,e=!1){const t=n.shapeInfo.logicalShape;switch(t.length){case 0:return S0(n,e);case 1:return T0(n,e);case 2:return E0(n,e);case 3:return N0(n,e);case 4:return F0(n,e);case 5:return D0(n);case 6:return O0(n);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function Kl(n,e){switch(n.shapeInfo.logicalShape.length){case 0:return v0(n);case 1:return I0(n,e);case 2:return R0(n,e);case 3:return k0(n,e);default:return A0(n,e)}}function n0(n,e,t=!1,s){let o="";t?o+=Kl(n,s):o+=pn(n,s);const r=n.shapeInfo.logicalShape,a=e.logicalShape;return r.length<=a.length&&(t?o+=P0(n,e):o+=_0(n,e)),o}function s0(n,e,t){switch(n.length){case 0:return Yl();case 1:return f0(n,e,t);case 2:return y0(n,e,t);case 3:return m0(n,e,t);default:return x0(n,e,t)}}function o0(n,e,t){switch(n.length){case 0:return Yl();case 1:return p0(n,e,t);case 2:return $0(n,e,t);case 3:return g0(n,e,t);case 4:return b0(n,e,t);case 5:return w0(n,e);case 6:return C0(n,e);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function r0(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function a0(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function i0(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function c0(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${l0}
    ${u0}
    ${d0}
  `}const l0=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,u0=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,d0=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,h0=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Yl(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function f0(n,e,t){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return s[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function p0(n,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function m0(n,e,t){if(t)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(n[2]/2),r=o*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function g0(n,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Vs(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=Vt(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function x0(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(n[n.length-1]/2),r=o*Math.ceil(n[n.length-2]/2);let a=r,i="",c="b, r, c";for(let l=2;l<n.length-1;l++)a*=n[n.length-l-1],i=`
      int b${l} = index / ${a};
      index -= b${l} * ${a};
    `+i,c=`b${l}, `+c;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${i}

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${n.length}(${c});
    }
  `}function b0(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Vs(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Vt(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function w0(n,e){const t=Vt(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function C0(n,e){const t=Vt(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function y0(n,e,t){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(Q(n,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(n[1]/2);return t?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function $0(n,e,t){return Q(n,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:n[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function Ut(n){return`offset${n}`}function v0(n){const e=n.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),s=de();return`
    vec4 ${t}() {
      return ${s.texture2D}(${e}, halfCR);
    }
  `}function S0(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${t};}`;const[o,r]=n.shapeInfo.texShape;if(o===1&&r===1)return`
      float ${s}() {
        return sampleTexture(${t}, halfCR);
      }
    `;const a=Ut(t);if(e)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${a});
      return sampleTexture(${t}, uv);
    }
  `;const[i,c]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${i}, ${c}, ${a});
      return sampleTexture(${t}, uv);
    }
  `}function I0(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=n.shapeInfo.texShape,r=de();if(e)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${r.texture2D}(${t}, uv);
    }
  `;const a=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${a[0]}, ${a[1]}, index);
      return ${r.texture2D}(${t}, uv);
    }
  `}function T0(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${mn(n)}
      }
    `;const o=n.shapeInfo.texShape,r=o[0],a=o[1];if(a===1&&r===1)return`
      float ${s}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;const i=Ut(t);return a===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / ${r}.0);
        return sampleTexture(${t}, uv);
      }
    `:r===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${i}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${i}) + 0.5) / ${a}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${i});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${r}, ${a}, index + ${i});
      return sampleTexture(${t}, uv);
    }
  `}function R0(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,a=r[0],i=r[1],c=de();if(r!=null&&Q(t,r))return e?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${c.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${i}.0, ${a}.0);

        return ${c.texture2D}(${s}, uv);
      }
    `;if(e)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `;const l=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],u=Math.ceil(t[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `}function E0(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape;if(r!=null&&Q(t,r)){if(e)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const h=r[0],f=r[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:a,keptDims:i}=pt(t),c=a;if(c.length<t.length){const h=gn(n,c),f=["row","col"];return`
      ${pn(h,e)}
      float ${o}(int row, int col) {
        return ${o}(${xn(f,i)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${mn(n)}
      }
    `;const l=r[0],u=r[1],d=Ut(s);return u===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${s}, uv);
    }
  `:l===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:e?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function k0(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,a=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(t[0]===1){const h=t.slice(1),f=[1,2],p=gn(n,h),x=["b","row","col"];return`
        ${Kl(p,e)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${xn(x,f)});
        }
      `}const i=de();if(e)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${i.texture2D}(${s}, uv);
    }
  `;const c=a[0],l=a[1],u=Math.ceil(t[2]/2),d=u*Math.ceil(t[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${d}, ${u}, b, row, col);
      return ${i.texture2D}(${s}, uv);
    }
  `}function N0(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t[1]*t[2],a=t[2],{newShape:i,keptDims:c}=pt(t),l=i;if(l.length<t.length){const x=gn(n,l),g=["row","col","depth"];return`
        ${pn(x,e)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${xn(g,c)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${r}, ${a}, 1)));
        ${mn(n)}
      }
    `;const u=n.shapeInfo.texShape,d=u[0],h=u[1],f=n.shapeInfo.flatOffset;if(h===r&&f==null)return e?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${a}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${h}.0, ${d}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(h===a&&f==null)return e?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `;const p=Ut(s);return e?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${p};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r} + col * ${a} + depth + ${p};
        vec2 uv = uvFromFlat(${d}, ${h}, index);
        return sampleTexture(${s}, uv);
      }
  `}function A0(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=de();if(e)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${t}, uv);
    }
  `;const r=n.shapeInfo.logicalShape,a=r.length,i=n.shapeInfo.texShape,c=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=c[0],u=c[1],d=Math.ceil(r[a-1]/2);let h=d*Math.ceil(r[a-2]/2),f="int b, int row, int col",p=`b * ${h} + (row / 2) * ${d} + (col / 2)`;for(let x=2;x<a-1;x++)f=`int b${x}, `+f,h*=r[a-x-1],p=`b${x} * ${h} + `+p;return`
    vec4 ${s}(${f}) {
      int index = ${p};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${o.texture2D}(${t}, uv);
    }
  `}function F0(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t[3],a=t[2]*r,i=t[1]*a,{newShape:c,keptDims:l}=pt(t);if(c.length<t.length){const b=gn(n,c),w=["row","col","depth","depth2"];return`
      ${pn(b,e)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${xn(w,l)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${i}, ${a}, ${r}, 1)));
        ${mn(n)}
      }
    `;const u=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,h=d[0],f=d[1],p=`int stride2 = ${s}Shape[3];`,x=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(f===i&&u==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${p}
        ${x}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${a}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(f===r&&u==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${s}, uv);
      }
    `;const m=Ut(s);return e?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${p}
      ${x}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${m});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${i} + col * ${a} +
          depth * ${r} + depth2;
      vec2 uv = uvFromFlat(${h}, ${f}, index + ${m});
      return sampleTexture(${s}, uv);
    }
  `}function D0(n){const e=n.shapeInfo.logicalShape,t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=e[4],r=e[3]*o,a=e[2]*r,i=e[1]*a,{newShape:c,keptDims:l}=pt(e);if(c.length<e.length){const x=gn(n,c),g=["row","col","depth","depth2","depth3"];return`
      ${pn(x)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${xn(g,l)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${i}, ${a}, ${r}, ${o})) +
          depth3;
        ${mn(n)}
      }
    `;const u=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,h=d[0],f=d[1];if(f===i&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${a}, ${r}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(f===o&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${t}, uv);
      }
    `;const p=Ut(t);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${i} + col * ${a} + depth * ${r} +
          depth2 * ${o} + depth3 + ${p};
      vec2 uv = uvFromFlat(${h}, ${f}, index);
      return sampleTexture(${t}, uv);
    }
  `}function O0(n){const e=n.shapeInfo.logicalShape,t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:o,keptDims:r}=pt(e);if(o.length<e.length){const g=gn(n,o),m=["row","col","depth","depth2","depth3","depth4"];return`
      ${pn(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${xn(m,r)});
      }
    `}const a=e[5],i=e[4]*a,c=e[3]*i,l=e[2]*c,u=e[1]*l;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${i})) +
          dot(
            vec2(depth3, depth4),
            vec2(${a}, 1)));
        ${mn(n)}
      }
    `;const d=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,f=h[0],p=h[1];if(p===u&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${i}, ${a})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(p===a&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;const x=Ut(t);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${i} + depth3 * ${a} + depth4 + ${x};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${t}, uv);
    }
  `}function mn(n){const e=n.name,t=I(n.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function P0(n,e){const t=n.name,s=t.charAt(0).toUpperCase()+t.slice(1),o="get"+s+"AtOutCoords",r=n.shapeInfo.logicalShape.length,a=e.logicalShape.length,i=jl(n.shapeInfo.logicalShape,e.logicalShape),c=U(a),l=a-r;let u;const d=["x","y","z","w","u","v"];r===0?u="":a<2&&i.length>=1?u="coords = 0;":u=i.map(b=>`coords.${d[b+l]} = 0;`).join(`
`);let h="";a<2&&r>0?h="coords":h=n.shapeInfo.logicalShape.map((b,w)=>`coords.${d[w+l]}`).join(", ");let f="return outputValue;";const x=I(n.shapeInfo.logicalShape)===1,m=I(e.logicalShape)===1;if(r===1&&!x&&!m)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(x&&!m)a===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(i.length){const b=r-2,w=r-1;i.indexOf(b)>-1&&i.indexOf(w)>-1?f="return vec4(outputValue.x);":i.indexOf(b)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":i.indexOf(w)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${h});
      ${f}
    }
  `}function _0(n,e){const t=n.name,s=t.charAt(0).toUpperCase()+t.slice(1),o="get"+s+"AtOutCoords",r=e.texShape,a=n.shapeInfo.texShape,i=n.shapeInfo.logicalShape.length,c=e.logicalShape.length;if(!n.shapeInfo.isUniform&&i===c&&n.shapeInfo.flatOffset==null&&Q(a,r))return`
      float ${o}() {
        return sampleTexture(${t}, resultUV);
      }
    `;const l=U(c),u=jl(n.shapeInfo.logicalShape,e.logicalShape),d=c-i;let h;const f=["x","y","z","w","u","v"];i===0?h="":c<2&&u.length>=1?h="coords = 0;":h=u.map(x=>`coords.${f[x+d]} = 0;`).join(`
`);let p="";return c<2&&i>0?p="coords":p=n.shapeInfo.logicalShape.map((x,g)=>`coords.${f[g+d]}`).join(", "),`
    float ${o}() {
      ${l} coords = getOutputCoords();
      ${h}
      return get${s}(${p});
    }
  `}function U(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function vr(n,e,t){const{newShape:s,keptDims:o}=pt(e),r=e.length,a=n&&r===3&&e[0]===1,i=a?e.slice(1):s,c=!n&&r>1&&!Q(e,t)&&s.length<r||a;return{useSqueezeShape:c,uniformShape:c?i:e,keptDims:o}}function gn(n,e){const t=JSON.parse(JSON.stringify(n));return t.shapeInfo.logicalShape=e,t}function xn(n,e){return e.map(t=>n[t]).join(", ")}/**
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
 */function L0(n,e,t,s){const o=t.map((u,d)=>{const h={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(h.flatOffset=u.texData.slice.flatOffset),{name:e.variableNames[d],shapeInfo:h}}),r=o.map(u=>u.shapeInfo),a={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},i=t0(o,a,e),c=Tl(n.gl,i),l=n.createProgram(c);return y().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:c,source:i,webGLProgram:l,inShapeInfos:r,outShapeInfo:a,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(l),Object.assign({program:e,fragmentShader:c,source:i,webGLProgram:l,inShapeInfos:r,outShapeInfo:a},Ql(n,e,l)))}function Ql(n,e,t){const s=[],o=[];let r,a,i,c=null,l=null;l=n.getUniformLocation(t,"NAN",!1),y().getNumber("WEBGL_VERSION")===1&&(c=n.getUniformLocation(t,"INFINITY",!1));const u=!1;for(const d of e.variableNames){const h={name:d,uniform:n.getUniformLocation(t,d,u),offset:n.getUniformLocation(t,`offset${d}`,u)};e.enableShapeUniforms&&(h.shape=n.getUniformLocation(t,`${d}Shape`,u),h.texShape=n.getUniformLocation(t,`${d}TexShape`,u)),s.push(h)}if(e.enableShapeUniforms&&(r=n.getUniformLocation(t,"outShape",u),i=n.getUniformLocation(t,"outShapeStrides",u),a=n.getUniformLocation(t,"outTexShape",u)),e.customUniforms)for(const d of e.customUniforms)o.push(n.getUniformLocation(t,d.name,u));return{variablesLocations:s,customUniformLocations:o,infLoc:c,nanLoc:l,outShapeLocation:r,outShapeStridesLocation:i,outTexShapeLocation:a}}function ua(n,e){if(n.length!==e.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${e.length} inputs`);n.forEach((t,s)=>{const o=t.logicalShape,r=e[s],a=r.shape;if(!Q(o,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${a} must match`);if(t.isUniform&&r.isUniform)return;const i=t.texShape,c=r.isUniform?null:r.texData.texShape;if(!Q(i,c))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${i} and ${c} must match`)})}function B0(n,e,t,s,o){e.program.enableShapeUniforms||(ua(e.inShapeInfos,t),ua([e.outShapeInfo],[s]));const r=s.texData.texture,a=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(r.texture,a[0],a[1]):n.setOutputMatrixTexture(r.texture,a[0],a[1]),n.setProgram(e.webGLProgram),n.bindVertexArray(e.webGLProgram.vao),y().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&n.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&n.gl.uniform1f(e.nanLoc,NaN);for(let c=0;c<t.length;++c){const l=t[c],{uniform:u,offset:d,shape:h,texShape:f}=e.variablesLocations[c];if(h){const{uniformShape:p}=vr(e.program.packedInputs,l.shape,l.texData.texShape);switch(p.length){case 1:n.gl.uniform1iv(h,new Int32Array(p));break;case 2:n.gl.uniform2iv(h,new Int32Array(p));break;case 3:n.gl.uniform3iv(h,new Int32Array(p));break;case 4:n.gl.uniform4iv(h,new Int32Array(p));break}}if(f&&n.gl.uniform2i(f,l.texData.texShape[0],l.texData.texShape[1]),u!=null){if(l.isUniform){if(I(l.shape)<2)n.gl.uniform1f(u,l.uniformValues[0]);else{let p=l.uniformValues;p instanceof Float32Array||(p=new Float32Array(p)),n.gl.uniform1fv(u,p)}continue}l.texData.slice!=null&&d!=null&&n.gl.uniform1i(d,l.texData.slice.flatOffset),n.setInputMatrixTexture(l.texData.texture.texture,u,c)}}const i=e.outShapeLocation;if(i)switch(s.shape.length){case 1:n.gl.uniform1iv(i,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(i,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(i,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(i,new Int32Array(s.shape));break}if(e.outShapeStridesLocation){const c=q(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(c));break;case 3:n.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(c));break;case 4:n.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(c));break}}if(e.outTexShapeLocation&&n.gl.uniform2i(e.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),e.program.customUniforms&&o)for(let c=0;c<e.program.customUniforms.length;++c){const l=e.program.customUniforms[c],u=e.customUniformLocations[c],d=o[c];if(l.type==="float")n.gl.uniform1fv(u,d);else if(l.type==="vec2")n.gl.uniform2fv(u,d);else if(l.type==="vec3")n.gl.uniform3fv(u,d);else if(l.type==="vec4")n.gl.uniform4fv(u,d);else if(l.type==="int")n.gl.uniform1iv(u,d);else if(l.type==="ivec2")n.gl.uniform2iv(u,d);else if(l.type==="ivec3")n.gl.uniform3iv(u,d);else if(l.type==="ivec4")n.gl.uniform4iv(u,d);else throw Error(`uniform type ${l.type} is not supported yet.`)}n.executeProgram()}function M0(n,e,t){let s="";e.concat(t).forEach(a=>{const i=a.texData!=null&&a.texData.slice!=null&&a.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!a.isUniform){const c=a.texData.texShape,{useSqueezeShape:l,uniformShape:u,keptDims:d}=vr(n.packedInputs,a.shape,c);let h="",f="",p="";if(u.length===1&&n.packedInputs){const $=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)];h=`${$[0]>1}_${$[1]>1}`}else if(u.length===2&&!n.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const $=q(u);p=`${$[0]===c[1]}_${$[$.length-1]===c[1]}`}const x=a.shape.length,g=u.length===2&&Q(a.shape,c),m=I(a.shape)===1,b=Nt(a.shape,t.shape),w=!n.packedInputs&&x===t.shape.length&&Q(c,t.texData.texShape),C=n.packedInputs||u.length>2?"":`${c[0]>1}_${c[1]>1}`;s+=`${x}_${w}_${l?d:""}_${u.length}_${m}_${b}_${g}_${h}_${f}_${p}_${C}_${i}`}else{const c=a.isUniform?"uniform":a.texData.texShape;s+=`${a.shape}_${c}_${i}`}});const o=n.userCode;let r=n.constructor.name;return r+="_"+s+"_"+o+`${y().getNumber("WEBGL_VERSION")}`,r}function re(n){return y().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}/**
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
 * =============================================================================
 */class V0{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Ln.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=de();this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Vs(["r","c","d"],e):Vt(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}/**
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
 * =============================================================================
 */class U0{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Ln.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=de();this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Vs(["r","c","d"],e):Vt(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}/**
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
 */class W0{constructor(e){this.variableNames=["A"],this.outTexUsage=ye.DOWNLOAD;const t=de();this.outputShape=e,this.userCode=`
      ${ql}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}/**
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
 */class G0{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=ye.DOWNLOAD;const t=de();this.outputShape=e,this.userCode=`
      ${ql}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}/**
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
 */const z0={R:0,G:1,B:2,A:3};class da{constructor(e,t=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=de();this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length);let r="result";t&&(r="floor(result * 255. + 0.5)");let a="";for(let i=0;i<s.length;i++){const c=s[i];a+=`
          if(offset == ${i}) {
            result = values[${z0[c]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?$r():yr(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${s.length});

        flatIndex = idiv(flatIndex, ${s.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${a}
        }
        ${o.output} = vec4(${r}, 0., 0., 0.);
      }
    `}}/**
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
 */class H0{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=de();this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length);let o="",r="result";t&&(r="floor(result * 255. + 0.5)");for(let a=0;a<=1;a++)for(let i=0;i<=1;i++){const c=a*2+i;o+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${a} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${a};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${c}] = values[0];
            } else if (offset == 1) {
              result[${c}] = values[1];
            } else if (offset == 2) {
              result[${c}] = values[2];
            } else {
              result[${c}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?$r():yr(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${s.output} = ${r};
        }
    `}}/**
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
 */function Zl(n){const e=de(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return Il(n,t)}function Jl(n){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return kl(n,e)}function eu(n){const e=new Uint16Array([0,1,2,2,1,3]);return Nl(n,e)}function Qn(n,e,t,s,o,r){Fl(e,t);const a=Al(n),i=n.TEXTURE_2D;return k(n,()=>n.bindTexture(i,a)),k(n,()=>n.texParameteri(i,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),k(n,()=>n.texParameteri(i,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),k(n,()=>n.texParameteri(i,n.TEXTURE_MIN_FILTER,n.NEAREST)),k(n,()=>n.texParameteri(i,n.TEXTURE_MAG_FILTER,n.NEAREST)),y().getNumber("WEBGL_VERSION")===1?k(n,()=>n.texImage2D(i,0,s,e,t,0,o,r,null)):k(n,()=>n.texStorage2D(i,1,s,e,t)),k(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:a,texShape:[t,e]}}function Sr(n){return n.internalFormatFloat}function tu(n,e,t,s){const[o,r]=Yn(e,t);return Qn(n,o,r,Sr(s),s.textureFormatFloat,n.FLOAT)}function Ir(n){return n.internalFormatHalfFloat}function nu(n,e,t,s){const[o,r]=Yn(e,t);return Qn(n,o,r,Ir(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function Tr(n){return n.downloadTextureFormat}function su(n,e,t,s){const[o,r]=Yn(e,t);return Qn(n,o,r,Tr(s),n.RGBA,n.UNSIGNED_BYTE)}function Rr(n){return n.internalFormatPackedFloat}function ou(n,e,t,s){const[o,r]=hn(e,t);return Qn(n,o,r,Rr(s),n.RGBA,n.FLOAT)}function Er(n){return n.internalFormatPackedHalfFloat}function ru(n,e,t,s){const[o,r]=hn(e,t);return Qn(n,o,r,Er(s),n.RGBA,s.textureTypeHalfFloat)}function au(n,e,t){return k(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),Co(n,e,"clipSpacePos",t,3,20,0)&&Co(n,e,"uv",t,2,20,12)}function iu(n,e,t,s,o,r){k(n,()=>n.bindTexture(n.TEXTURE_2D,e));let a,i,c;o instanceof Uint8Array?(a=new Uint8Array(t*s*4),i=n.UNSIGNED_BYTE,c=n.RGBA):(a=new Float32Array(t*s*4),i=n.FLOAT,c=r.internalFormatPackedFloat),a.set(o),y().getNumber("WEBGL_VERSION")===2?k(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t,s,n.RGBA,i,a)):k(n,()=>n.texImage2D(n.TEXTURE_2D,0,c,t,s,0,n.RGBA,i,a)),k(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function cu(n,e,t){k(n,()=>n.bindTexture(n.TEXTURE_2D,e)),t.data instanceof Uint8Array?y().getNumber("WEBGL_VERSION")===2?k(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t.width,t.height,n.RGBA,n.UNSIGNED_BYTE,t.data)):k(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t.width,t.height,0,n.RGBA,n.UNSIGNED_BYTE,t.data)):y().getNumber("WEBGL_VERSION")===2?k(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t)):k(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)),k(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function lu(n,e,t,s){const o=n.createBuffer();k(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,o));const i=4*4*e*t;return k(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,i,n.STREAM_READ)),k(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,0)),k(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),o}function uu(n,e,t){const s=n,o=new Float32Array(t);return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function du(n,e,t,s){const[o,r]=Yn(e,t),a=4,i=new Uint8Array(Vx(e*t,a));return k(n,()=>n.readPixels(0,0,o,r,s.downloadTextureFormat,n.UNSIGNED_BYTE,i)),new Float32Array(i.buffer)}function hu(n,e,t,s,o,r,a,i){const c=n,l=new Float32Array(Ux(r,a));return c.bindBuffer(c.PIXEL_PACK_BUFFER,e),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function fu(n,e,t){const s=new Float32Array(e*t*4);return k(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,s)),s}const X0=Object.freeze(Object.defineProperty({__proto__:null,bindVertexProgramAttributeStreams:au,createBufferFromOutputTexture:lu,createFloat16MatrixTexture:nu,createFloat16PackedMatrixTexture:ru,createFloat32MatrixTexture:tu,createIndexBuffer:eu,createPackedMatrixTexture:ou,createUnsignedBytesMatrixTexture:su,createVertexBuffer:Jl,createVertexShader:Zl,downloadByteEncodedFloatMatrixFromOutputTexture:du,downloadFloat32MatrixFromBuffer:uu,downloadMatrixFromPackedOutputTexture:fu,downloadPackedMatrixFromBuffer:hu,getInternalFormatForFloat16MatrixTexture:Ir,getInternalFormatForFloat16PackedMatrixTexture:Er,getInternalFormatForFloat32MatrixTexture:Sr,getInternalFormatForPackedMatrixTexture:Rr,getInternalFormatForUnsignedBytesMatrixTexture:Tr,uploadDenseMatrixToTexture:iu,uploadPixelDataToTexture:cu},Symbol.toStringTag,{value:"Module"}));/**
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
 */class ps{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const t=y().getNumber("WEBGL_VERSION");if(e!=null?(this.gl=e,$l(t,e)):this.gl=Be(t),e=this.gl,y().getNumber("WEBGL_VERSION")===2){const r=e;this.createVertexArray=()=>k(r,()=>r.createVertexArray()),this.bindVertexArray=a=>k(r,()=>r.bindVertexArray(a)),this.deleteVertexArray=a=>k(r,()=>r.deleteVertexArray(a)),this.getVertexArray=()=>k(r,()=>r.getParameter(r.VERTEX_ARRAY_BINDING))}else if(e!=null){const r=e.getExtension("OES_vertex_array_object");if(r==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>k(e,()=>r.createVertexArrayOES()),this.bindVertexArray=a=>k(e,()=>r.bindVertexArrayOES(a)),this.deleteVertexArray=a=>k(e,()=>r.deleteVertexArrayOES(a)),this.getVertexArray=()=>k(e,()=>e.getParameter(r.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),y().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",a="OES_texture_half_float";if(this.textureFloatExtension=In(this.gl,r),$e(this.gl,a))this.textureHalfFloatExtension=In(this.gl,a);else if(y().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),$e(this.gl,o))this.colorBufferHalfFloatExtension=In(this.gl,o);else if(y().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",$e(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if($e(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=Jl(this.gl),this.indexBuffer=eu(this.gl),this.framebuffer=Dl(this.gl),this.textureConfig=wr(this.gl,this.textureHalfFloatExtension)}get debug(){return y().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;k(e,()=>e.finish()),k(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),k(e,()=>e.deleteFramebuffer(this.framebuffer)),k(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),k(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),k(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),tu(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),nu(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),su(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),cu(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,s,o){this.throwIfDisposed(),iu(this.gl,e,t,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),ru(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),ou(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(yo(this.gl,this.framebuffer),this.outputTexture=null),k(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,s){return this.downloadMatrixDriver(e,()=>du(this.gl,t,s,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,s,o,r,a){return hu(this.gl,e,t,s,o,r,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return uu(this.gl,e,t)}createBufferFromTexture(e,t,s){this.bindTextureToFrameBuffer(e);const o=lu(this.gl,t,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,s;if(y().getBool("WEBGL_FENCE_API_ENABLED")){const o=e,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),s=()=>{const a=o.clientWaitSync(r,0,0);return a===o.ALREADY_SIGNALED||a===o.CONDITION_SATISFIED},t=r}else y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(t,y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:t,isFencePassed:s}}downloadMatrixFromPackedTexture(e,t,s){return this.downloadMatrixDriver(e,()=>fu(this.gl,t,s))}createProgram(e){this.throwIfDisposed();const t=this.gl;this.vertexShader==null&&(this.vertexShader=Zl(t));const s=Rl(t);k(t,()=>t.attachShader(s,this.vertexShader)),k(t,()=>t.attachShader(s,e)),El(t,s);const o=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&us(t,o),o}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);const t=this.gl;k(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),au(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(k(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&us(this.gl,this.program),k(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,s=!0){return this.throwIfDisposed(),s?Pl(this.gl,e,t):_l(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),k(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,s){this.throwIfDisposed(),this.throwIfNoProgram(),Ll(this.gl,e,t,s)}setOutputMatrixTexture(e,t,s){this.setOutputMatrixTextureDriver(e,s,t)}setOutputPackedMatrixTexture(e,t,s){this.throwIfDisposed();const[o,r]=hn(t,s);this.setOutputMatrixTextureDriver(e,o,r)}setOutputMatrixWriteRegion(e,t,s,o){this.setOutputMatrixWriteRegionDriver(s,e,o,t)}setOutputPackedMatrixWriteRegion(e,t,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&us(this.gl,this.program),Tn(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;if(this.debug){const t=this.getVertexArray();console.assert(t===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}k(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),k(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=In(this.gl,y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const t=this.gl,s=this.getQueryTimerExtensionWebGL2();t.endQuery(s.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await Js(()=>this.disposed||this.isQueryAvailable(e,y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(t===0)return null;if(t===2){const s=this.gl;return s.getQueryParameter(e,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(e,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(e,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(e,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){const e=q0(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){const{resolveFn:s}=this.itemsToPoll[t];s()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in y().platform&&(s=y().platform.setTimeoutCustom.bind(y().platform)),Js(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),ds(this.gl,e,this.framebuffer),this.debug&&Tn(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(ds(this.gl,this.outputTexture,this.framebuffer),this.debug&&Tn(this.gl)):yo(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const s=t();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(e,t,s){this.throwIfDisposed();const o=this.gl;ds(o,e,this.framebuffer),this.debug&&Tn(o),this.outputTexture=e,k(o,()=>o.viewport(0,0,t,s)),k(o,()=>o.scissor(0,0,t,s))}setOutputMatrixWriteRegionDriver(e,t,s,o){this.throwIfDisposed(),k(this.gl,()=>this.gl.scissor(e,t,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function q0(n){let e=0;for(;e<n.length&&n[e]();++e);return e-1}/**
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
 */const{addImpl:j0,bincountImpl:pu,bincountReduceImpl:K0,bitwiseAndImpl:Y0,castImpl:Q0,ceilImpl:Z0,concatImpl:J0,equalImpl:eb,expImpl:tb,expm1Impl:nb,floorImpl:sb,gatherNdImpl:ob,gatherV2Impl:rb,greaterImpl:ab,greaterEqualImpl:ib,lessImpl:cb,lessEqualImpl:lb,linSpaceImpl:ub,logImpl:db,maxImpl:hb,maximumImpl:fb,minimumImpl:pb,multiplyImpl:mb,negImpl:gb,notEqualImpl:xb,prodImpl:bb,raggedGatherImpl:wb,raggedRangeImpl:Cb,raggedTensorToTensorImpl:yb,rangeImpl:$b,rsqrtImpl:vb,scatterImpl:Sb,sigmoidImpl:Ib,simpleAbsImpl:mu,sliceImpl:Tb,sparseFillEmptyRowsImpl:Rb,sparseReshapeImpl:Eb,sparseSegmentReductionImpl:gu,sqrtImpl:kb,staticRegexReplaceImpl:Nb,stridedSliceImpl:Ab,stringNGramsImpl:Fb,stringSplitImpl:Db,stringToHashBucketFastImpl:Ob,subImpl:Pb,tileImpl:_b,topKImpl:Lb,transposeImpl:kr,uniqueImpl:Bb}=Lx;/**
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
 */function xu(n,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${n}.${t}`)}function le(n,e){return e===1?[n]:xu(n,e)}function Mb(n,e){if(n===1)return"rc";let t="";for(let s=0;s<n;s++)t+=e[s],s<n-1&&(t+=",");return t}/**
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
 */class Vb{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=re(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const t=le("rc",this.rank),s=U(this.rank),o=this.getOutOfBoundsCondition(t),r=this.getSetup(t),a=this.getOutput(t);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${a}));
          }
        }
      `}}getSourceCoordsArr(e){const t=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let r=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let a=2;a<this.rank;a++)r=`${e[e.length-1-a]},`+r;t.push(r)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let s=this.rank-2;s<this.rank;s++)t+=`${e[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";const t=e.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(e){const t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}/**
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
 */class bu{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${Ub(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?$r():yr(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${s}

        setOutput(result);
      }
    `}}function Ub(n,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?e0(["r","c","d"],"inputShape"):Vt(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}/**
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
 */class Wb{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,s){const o=fa(t,s),r=pa(e,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const a=ha(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();const c=this.freeTextures[r].pop();return this.usedTextures[r].push(c),c}let i;return o===J.PACKED_2X2_FLOAT32?i=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):o===J.PACKED_2X2_FLOAT16?i=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):o===J.UNPACKED_FLOAT32?i=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):o===J.UNPACKED_FLOAT16?i=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):o===J.PACKED_4X1_UNSIGNED_BYTE&&(i=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[r].push(i),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),i}releaseTexture(e,t,s,o){if(this.freeTextures==null)return;const r=fa(s,o),a=pa(t,r,o);a in this.freeTextures||(this.freeTextures[a]=[]);const i=ha(t,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),c=y().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");c!==-1&&this._numBytesAllocated>c?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=i):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=i),this.numUsedTextures--;const l=this.usedTextures[a],u=l&&l.indexOf(e);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l[u]=l[l.length-1],l.pop(),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;`${this.numFreeTextures}${this.numUsedTextures}`,`${e}`;const t=this._numBytesFree/this._numBytesAllocated;`${this._numBytesAllocated}`,`${this._numBytesFree}${Math.round(100*t)}`}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function Gb(n,e){const t=n;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F)return 16;if(e===n.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function ha(n,e,t,s,o){const r=zb(e,s);let a;if(o){const[c,l]=hn(n[0],n[1]);a=c*l}else{const[c,l]=Yn(n[0],n[1]);a=c*l}const i=Gb(t,r);return a*i}function zb(n,e){switch(n){case J.PACKED_2X2_FLOAT32:return Rr(e);case J.PACKED_2X2_FLOAT16:return Er(e);case J.UNPACKED_FLOAT32:return Sr(e);case J.UNPACKED_FLOAT16:return Ir(e);case J.PACKED_4X1_UNSIGNED_BYTE:return Tr(e);default:throw new Error(`Unknown physical texture type ${n}`)}}function Hb(n){return y().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?J.PACKED_2X2_FLOAT32:J.UNPACKED_FLOAT32:n?J.PACKED_2X2_FLOAT16:J.UNPACKED_FLOAT16}function fa(n,e){if(n===ye.UPLOAD)return J.PACKED_2X2_FLOAT32;if(n===ye.RENDER||n==null)return Hb(e);if(n===ye.DOWNLOAD||n===ye.PIXELS)return J.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function pa(n,e,t){return`${n[0]}_${n[1]}_${e}_${t}`}/**
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
 */class We{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const Oe="if (isnan(x)) return x;",Xb="return x;",ma="return abs(x);",qb="return (x >= 0.0) ? x : (exp(x) - 1.0);",jb=Oe+`
  return (x < 0.0) ? 0.0 : x;
`,Kb=Oe+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,ot="return x;",Yb="return 1.0 / (1.0 + exp(-1.0 * x));";/**
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
 */const Qb="return x;",Zb=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Jb=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ew=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,tw="return 1.0 / (1.0 + exp(-1.0 * x));";class it{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}/**
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
 */class nw{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length);const t=e.length,s=le("rc",t),o=U(t),r=Mb(t,s),a=s.slice(-2),i=t<=1?"rc":`vec2(${a.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${i}));
      }
    `}}/**
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
 */const sw=Nm,ow=1e-7,rw=1e-4,as={};function aw(n){return n in as||(as[n]={}),as[n]}const iw=y().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),cw=600;function lw(){return y().global.screen==null?1024:y().global.screen.height*y().global.screen.width*window.devicePixelRatio*cw/1024/1024}class Zn extends Oa{nextDataId(){return Zn.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!y().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(e!=null){if(e instanceof ps)t=e;else{const s=Be(y().getNumber("WEBGL_VERSION"),e);t=new ps(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=Be(y().getNumber("WEBGL_VERSION"));t=new ps(s),this.binaryCache=aw(y().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Wb(this.gpgpu),this.numMBBeforeWarning=lw(),this.texData=new ed(this,st())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,s,o,r,a){const i=this.makeTensorInfo(t,s),c=this.texData.get(i.dataId);c.isPacked=!1,c.texture={texture:e,texShape:[o,r]},c.texShape=[o,r];const l=Rn(t),u=new da(l,!1,a),d=this.runWebGLProgram(u,[i],s,[[o,r]]);return d.shape=t,c.texture=null,this.disposeIntermediateTensorInfo(i),d.dataId}write(e,t,s){if((y().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||y().getBool("DEBUG"))&&this.checkNumericalProblems(e),s==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:t,dtype:s,values:e,usage:ye.UPLOAD,refCount:1}),o}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){const t=this.texData.get(e);t.refCount--}}move(e,t,s,o,r){if(y().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:s,dtype:o,values:t,usage:ye.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:s,dtype:o,complexTensorInfos:r,slice:a,shape:i,isPacked:c}=t;if(a!=null){let h;c?h=new it(i,ot):h=new We(i,ot);const f=this.runWebGLProgram(h,[{dataId:e,shape:i,dtype:o}],o),p=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),p}if(s!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return s;const l=this.activeTimers!=null;let u;l&&(u=ke());let d;if(o==="complex64"){const h=this.readSync(r.real.dataId),f=this.readSync(r.imag.dataId);d=Pn(h,f)}else d=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=ke()-u),this.convertAndCacheOnCPU(e,d)}async read(e){if(this.pendingRead.has(e)){const p=this.pendingRead.get(e);return new Promise(x=>p.push(x))}const t=this.texData.get(e),{values:s,shape:o,slice:r,dtype:a,complexTensorInfos:i,isPacked:c}=t;if(r!=null){let p;c?p=new it(o,ot):p=new We(o,ot);const x=this.runWebGLProgram(p,[{dataId:e,shape:o,dtype:a}],a),g=this.read(x.dataId);return this.disposeIntermediateTensorInfo(x),g}if(s!=null)return this.convertAndCacheOnCPU(e);if(y().getBool("DEBUG")&&!y().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&y().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l=null,u;if(a!=="complex64"&&y().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(e);const p=this.texData.get(u.dataId);l=this.gpgpu.createBufferFromTexture(p.texture.texture,...os(o))}this.pendingRead.set(e,[]),a!=="complex64"&&await this.gpgpu.createAndWaitForFence();let d;if(a==="complex64"){const p=await Promise.all([this.read(i.real.dataId),this.read(i.imag.dataId)]),x=p[0],g=p[1];d=Pn(x,g)}else if(l==null)d=this.getValuesFromTexture(e);else{const p=I(o);d=this.gpgpu.downloadFloat32MatrixFromBuffer(l,p)}if(u!=null&&this.disposeIntermediateTensorInfo(u),l!=null){const p=this.gpgpu.gl;k(p,()=>p.deleteBuffer(l))}const h=this.convertAndCacheOnCPU(e,d),f=this.pendingRead.get(e);return this.pendingRead.delete(e),f.forEach(p=>p(h)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&st().removeDataId(e,this),this.pendingDeletes--),h}readToGPU(e,t={}){const s=this.texData.get(e),{values:o,shape:r,slice:a,dtype:i,isPacked:c,texture:l}=s;if(i==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(a!=null){let f;c?f=new it(r,ot):f=new We(r,ot);const p=this.runWebGLProgram(f,[{dataId:e,shape:r,dtype:i}],i),x=this.readToGPU(p,t);return this.disposeIntermediateTensorInfo(p),x}if(l==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(e,t.customTexShape),d=st().makeTensorFromTensorInfo(u),h=this.texData.get(u.dataId);return Object.assign({tensorRef:d},h.texture)}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const s=t.map(o=>Tt(o));return te(e.shape,e.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return te(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){const s=e[t];if(!vl(s))throw y().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:t,dtype:s,isPacked:o}=this.texData.get(e),r=I(t);if(y().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const h=this.decode(e),f=this.texData.get(h.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...os(t)).subarray(0,r);return this.disposeIntermediateTensorInfo(h),p}const a=y().getBool("WEBGL_PACK")&&o===!0,i=a?Rn(t):t,c=a?new G0(i):new W0(i),l=this.runWebGLProgram(c,[{shape:i,dtype:s,dataId:e}],"float32"),u=this.texData.get(l.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(l),d}timerAvailable(){return y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,e();const r=dt(this.activeTimers.map(c=>c.query)).filter(c=>c!=null),a=dt(this.activeTimers.map(c=>c.name)).filter(c=>c!=null);this.activeTimers=t,o&&(this.programTimersStack=null);const i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const c=await Promise.all(r);i.kernelMs=_a(c),i.getExtraProfileInfo=()=>c.map((l,u)=>({name:a[u],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", ")}else i.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,i})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:ke(),endMs:null}}endTimer(e){return y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=ke(),e)}async getQueryTime(e){if(y().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:s}=this.texData.get(e);return s!=null&&(this.disposeData(s.real.dataId,t),this.disposeData(s.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:s,texShape:o,usage:r,isPacked:a,slice:i}=this.texData.get(e),c=i&&i.origDataId||e,l=this.dataRefCount.get(c);l>1?this.dataRefCount.set(c,l-1):(this.dataRefCount.delete(c),t!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(t,o,r,a)));const u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=iw){return y().getBool("WEBGL_CPU_FORWARD")&&e.every(s=>this.texData.get(s.dataId).texture==null&&I(s.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){Ne("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return sw(e.shape,t)}packedUnaryOp(e,t,s){const o=new it(e.shape,t),r=this.compileAndRun(o,[e],s);return st().makeTensorFromTensorInfo(r)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const o=mu(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,o)}if(y().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ma,e.dtype);const t=new We(e.shape,ma),s=this.compileAndRun(t,[e]);return st().makeTensorFromTensorInfo(s)}makeTensorInfo(e,t,s){let o;if(t==="string"&&s!=null&&s.length>0&&Wn(s[0])){const r=s.map(a=>lt(a));o=this.write(r,e,t)}else o=this.write(s,e,t);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:t}}makeOutput(e,t,s){return st().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,s),this)}unpackTensor(e){const t=new nw(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new Vb(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const s=[Dt(e.shape),...Ot(e.shape)],o={dtype:e.dtype,shape:s,dataId:e.dataId},r=[Dt(t),...Ot(t)],a=new bu(r,s),i=!0,c=[s],l=this.runWebGLProgram(a,[o],e.dtype,c,i);return{dataId:l.dataId,shape:t,dtype:l.dtype}}decode(e,t){const s=this.texData.get(e),{isPacked:o,shape:r,dtype:a}=s;if(t!=null){const h=I(r),f=t[0]*t[1]*4;v(h<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const i=Rn(r);let c;o?c=new U0(i):c=new V0(i);const l=!0,u=[t??os(i)],d=this.runWebGLProgram(c,[{shape:i,dtype:a,dataId:e}],a,u,l,t);return{dtype:a,shape:r,dataId:d.dataId}}runWebGLProgram(e,t,s,o,r=!1,a){const i=this.makeTensorInfo(e.outputShape,s),c=this.texData.get(i.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===Ln.DENSE){const m=a??os(e.outputShape);c.texShape=m.map(b=>b*2)}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),I(i.shape)===0)return c.values=He(i.dtype,0),i;const l=[],u=t.map(m=>{if(m.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(m.dataId);if(b.texture==null){if(!e.packedInputs&&I(m.shape)<=y().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:m.shape,texData:null,isUniform:!0,uniformValues:b.values};e.packedInputs&&(b.isPacked=!0,b.shape=m.shape)}if(this.uploadToGPU(m.dataId),!!b.isPacked!=!!e.packedInputs)m=b.isPacked?this.unpackTensor(m):this.packTensor(m),l.push(m),b=this.texData.get(m.dataId);else if(b.isPacked&&!Bn(b.shape,m.shape)){const w=m,C=m.shape;m.shape=b.shape,m=this.packedReshape(m,C),l.push(m),b=this.texData.get(m.dataId),w.shape=C}return{shape:m.shape,texData:b,isUniform:!1}});this.uploadToGPU(i.dataId);const d={shape:i.shape,texData:c,isUniform:!1},h=M0(e,u,d),f=this.getAndSaveBinary(h,()=>L0(this.gpgpu,e,u,d)),p=this.activeTimers!=null;let x;p&&(x=this.startTimer()),y().get("ENGINE_COMPILE_ONLY")||B0(this.gpgpu,f,u,d,o),l.forEach(m=>this.disposeIntermediateTensorInfo(m)),p&&(x=this.endTimer(x),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(x)}));const g=y().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const m=ke();m-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=m)}if(!y().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&r===!1){const m=this.unpackTensor(i);return this.disposeIntermediateTensorInfo(i),m}return i}compileAndRun(e,t,s,o,r=!1){return s=s||t[0].dtype,this.runWebGLProgram(e,t,s,o,r)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(y().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(t=>{this.gpgpu.deleteProgram(this.binaryCache[t].webGLProgram),delete this.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=j(()=>{if(!y().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=y().getBool("DEBUG");y().set("DEBUG",!1);const t=this.abs(ft(1e-8)).dataSync()[0];if(y().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?ow:rw}uploadToGPU(e){const t=this.texData.get(e),{shape:s,dtype:o,values:r,texture:a,usage:i,isPacked:c}=t;if(a!=null)return;const l=this.activeTimers!=null;let u;l&&(u=ke());let d=t.texShape;if(d==null&&(d=Vl(s,c),t.texShape=d),r!=null){const h=Rn(s);let f,p=d[1],x=d[0];const g=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(c||!g)&&([p,x]=hn(d[0],d[1])),c?f=new H0(h,g):f=new da(h,g);const m=g?[x,p]:d,b=this.makeTensorInfo(m,o),w=this.texData.get(b.dataId);g?w.usage=ye.PIXELS:w.usage=ye.UPLOAD,w.texShape=m,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),p,x,r);const C=[[x,p]],R=this.runWebGLProgram(f,[b],o,C,!0),T=this.texData.get(R.dataId);t.texShape=T.texShape,t.isPacked=T.isPacked,t.usage=T.usage,y().get("ENGINE_COMPILE_ONLY")?this.disposeData(R.dataId):(t.texture=T.texture,t.values=null,this.texData.delete(R.dataId)),this.disposeIntermediateTensorInfo(b),l&&(this.uploadWaitMs+=ke()-u)}else{const h=this.acquireTexture(d,i,o,c);t.texture=h}}convertAndCacheOnCPU(e,t){const s=this.texData.get(e),{dtype:o}=s;return t!=null&&(s.values=uw(t,o)),s.values}acquireTexture(e,t,s,o){if(this.numBytesInGPU+=this.computeBytes(e,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,o)}computeBytes(e,t){return e[0]*e[1]*An(t)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(const[,t]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(t),o(!0)}catch(r){throw r}});e.push(s)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await xg(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw this.gpgpu.gl.getProgramInfoLog(e.webGLProgram),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Cr(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);const{variablesLocations:t,customUniformLocations:s,infLoc:o,nanLoc:r,outShapeLocation:a,outShapeStridesLocation:i,outTexShapeLocation:c}=Ql(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=s,e.infLoc=o,e.nanLoc=r,e.outShapeLocation=a,e.outShapeStridesLocation=i,e.outTexShapeLocation=c}}createTensorFromGPUData(e,t,s){e.channels=e.channels||"RGBA";const{texture:o,height:r,width:a,channels:i}=e,c=st().backend;if(!c.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const l=c.writeTexture(o,t,s,r,a,i);return st().makeTensorFromDataId(l,t,s,c)}}Zn.nextDataId=0;function uw(n,e){if(e==="float32"||e==="complex64")return n;if(e==="int32"||e==="bool"){const t=e==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<t.length;++s)t[s]=Math.round(n[s]);return t}else throw new Error(`Unknown dtype ${e}`)}/** @license See the LICENSE file. */const dw="4.22.0";/**
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
 * =============================================================================
 */function wu(){y().set("WEBGL_FORCE_F16_TEXTURES",!0)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */Zo()&&hp("webgl",()=>new Zn,2);const hw={forceHalfFloat:wu};/**
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
 */const Nr=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class Pt{constructor(e,t,s){this.variableNames=["A","B"],this.outputShape=ee(t,s),this.enableShapeUniforms=re(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}/**
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
 */const Wt=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class bn{constructor(e,t,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=ee(t,s);const r=this.outputShape.length;this.enableShapeUniforms=re(r);let a="";if(o)if(r===0||I(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${U(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const c=le("coords",r);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${c[r-2]} + 1) >= outShape[${r} - 2];
            bool nextColOutOfBounds =
              (${c[r-1]} + 1) >= outShape[${r} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${c[r-2]} + 1) >= ${this.outputShape[r-2]};
            bool nextColOutOfBounds =
              (${c[r-1]} + 1) >= ${this.outputShape[r-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${a}

        setOutput(result);
      }
    `}}/**
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
 */function be(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const fw={kernelName:Ns,backendName:"webgl",kernelFunc:be};/**
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
 */function xt(n){const{inputs:e,backend:t}=n,{real:s,imag:o}=e,r=t.makeTensorInfo(s.shape,"complex64"),a=t.texData.get(r.dataId),i=be({inputs:{x:s},backend:t}),c=be({inputs:{x:o},backend:t});return a.complexTensorInfos={real:i,imag:c},r}const pw={kernelName:Fo,backendName:"webgl",kernelFunc:xt};/**
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
 */const Cu="return (a < 0.) ? b * a : a;",yu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function mw(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{alpha:r}=s,a=t.makeTensorInfo([],"float32",Lt(r,"float32")),i=y().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(yu,o.shape,a.shape):new Pt(Cu,o.shape,a.shape),c=t.runWebGLProgram(i,[o,a],"float32");return t.disposeIntermediateTensorInfo(a),c}const gw={kernelName:Qa,backendName:"webgl",kernelFunc:mw};/**
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
 */const $u="return (a < 0.) ? b * a : a;",vu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function xw(n){const{inputs:e,backend:t}=n,{x:s,alpha:o}=e,r=y().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(vu,s.shape,o.shape):new Pt($u,s.shape,o.shape);return t.runWebGLProgram(r,[s,o],"float32")}const bw={kernelName:ei,backendName:"webgl",kernelFunc:xw};/**
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
 */const wn="if (isnan(x)) return x;";function B({opSnippet:n,packedOpSnippet:e,cpuKernelImpl:t,dtype:s}){return({inputs:o,backend:r})=>{const{x:a}=o,i=r,c=s||a.dtype;if(i.shouldExecuteOnCPU([a])&&t!=null){const d=i.texData.get(a.dataId),h=t(d.values,c);return i.makeTensorInfo(a.shape,c,h)}const l=y().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let u;return l?u=new it(a.shape,e):u=new We(a.shape,n),i.runWebGLProgram(u,[a],c)}}function se({opSnippet:n,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:a,backend:i})=>{const{a:c,b:l}=a,u=i;if(s&&c.dtype==="complex64"){const p=u.texData.get(c.dataId),x=u.texData.get(l.dataId),[g,m]=[[p.complexTensorInfos.real,x.complexTensorInfos.real],[p.complexTensorInfos.imag,x.complexTensorInfos.imag]].map(w=>{const[C,$]=w,R={dataId:C.dataId,dtype:C.dtype,shape:c.shape},T={dataId:$.dataId,dtype:$.dtype,shape:l.shape},S=new Pt(n,c.shape,l.shape);return u.runWebGLProgram(S,[R,T],qe(C.dtype,$.dtype))}),b=xt({inputs:{real:g,imag:m},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(m),b}const d=r||qe(c.dtype,l.dtype);if((c.dtype==="string"||l.dtype==="string"||u.shouldExecuteOnCPU([c,l]))&&o!=null){const p=u.texData.get(c.dataId).values,x=u.texData.get(l.dataId).values,g=c.dtype==="string"?et(p):p,m=c.dtype==="string"?et(x):x,[b,w]=o(c.shape,l.shape,g,m,d),C=u.makeTensorInfo(w,d),$=u.texData.get(C.dataId);return $.values=b,C}const h=y().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let f;return h?f=new bn(e,c.shape,l.shape,t):f=new Pt(n,c.shape,l.shape),u.runWebGLProgram(f,[c,l],d)}}function Mn(n,e=!1){if(n==="linear")return e?Qb:Xb;if(n==="relu")return e?Jb:jb;if(n==="elu")return e?Zb:qb;if(n==="relu6")return e?ew:Kb;if(n==="prelu")return e?vu:$u;if(n==="leakyrelu")return e?yu:Cu;if(n==="sigmoid")return e?tw:Yb;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}/**
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
 */class Su{constructor(e,t,s,o=!1,r=!1,a=!1,i=null,c=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=re(this.outputShape.length);const u=o?e[1]:e[2],d=Math.ceil(u/2),h=o?"i * 2, rc.y":"rc.y, i * 2",f=r?"rc.z, i * 2":"i * 2, rc.z",p=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],x=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",m="";i&&(c?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${i}
        }`:l?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${i}
        }`:g=`vec4 activation(vec4 x) {
          ${i}
        }`,m="result = activation(result);");const b=a?"result += getBiasAtOutCoords();":"";a&&this.variableNames.push("bias"),c&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let w="rc.x",C="rc.x";e[0]<t[0]?w=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(C=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${d}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${w};
        int batchB = ${C};
        for (int i = 0; i < ${d}; i++) {
          vec4 a = getMatrixA(batchA, ${h});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${x[0]});
          result += (${p[1]} * ${x[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${m}

        setOutput(result);
      }
    `}}/**
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
 */const ga={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class xa{constructor(e,t,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=ee(t,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}/**
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
 */const ba="return a * b;";function Ar(n){const{inputs:e,backend:t}=n,{a:s,b:o}=e,r=qe(s.dtype,o.dtype);if(s.dtype==="complex64"){const i=t.texData.get(s.dataId),c=t.texData.get(o.dataId),l=new xa(ga.REAL,s.shape,o.shape),u=new xa(ga.IMAG,s.shape,o.shape),d=[{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:s.shape},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:o.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:o.shape}],h=t.runWebGLProgram(l,d,"float32"),f=t.runWebGLProgram(u,d,"float32"),p=xt({inputs:{real:h,imag:f},backend:t});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(f),p}if(t.shouldExecuteOnCPU([s,o])){const i=t.texData.get(s.dataId),c=t.texData.get(o.dataId),[l,u]=mb(s.shape,o.shape,i.values,c.values,r),d=t.makeTensorInfo(u,r),h=t.texData.get(d.dataId);return h.values=l,d}let a;return y().getBool("WEBGL_PACK_BINARY_OPERATIONS")?a=new bn(ba,s.shape,o.shape):a=new Pt(ba,s.shape,o.shape),t.runWebGLProgram(a,[s,o],r)}const ww={kernelName:Fs,backendName:"webgl",kernelFunc:Ar};/**
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
 */function Cw(n,e,t){const s=[Dt(n.shape),...Ot(n.shape)],o={dtype:n.dtype,shape:s,dataId:n.dataId},r=[Dt(e),...Ot(e)],a=new bu(r,s),i=!0,c=[s],l=t.runWebGLProgram(a,[o],n.dtype,c,i);return{dataId:l.dataId,shape:e,dtype:l.dtype}}/**
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
 */function E(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{shape:r}=s,a=t,i=I(o.shape),c=La(r,i),l=I(c);v(i===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${o.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`);const u=a.texData.get(o.dataId);return u.isPacked&&!Bn(o.shape,c)&&!(u.texture!==null&&Bn(u.shape,c))?Cw(o,c,a):(a.incRef(o.dataId),{dataId:o.dataId,shape:c,dtype:o.dtype})}const yw={kernelName:oi,backendName:"webgl",kernelFunc:E};/**
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
 */class wa{constructor(e,t){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:a}=e;this.outputShape=[o,a];const i=Math.floor(s/4)*4,c=s%4;let l="sumValue += dot(values, ones);";if(t!=null){const d=1/t;l=`sumValue += dot(values * ${Nn(d)?d.toPrecision(2):d}, ones);`}let u="";r%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${i}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${i};
        if (${c===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}}/**
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
 */class $w{constructor(e,t){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:a}=e;this.outputShape=[o,a];let i="0.0",c="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",c="min"):t==="max"&&(i="-1.0 / 1e-20",c="max");let l=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?l="sumValue":t==="prod"?l="prodValue":t==="all"?l="allValue":t==="any"&&(l="anyValue");const u=Math.floor(s/4)*4,d=s%4;let h=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${c}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${c}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";t==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${i};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${i});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${d===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${d===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${d===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}/**
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
 */function vw(n){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const t=e.length?e[e.length-1].outSize:n[1],s=Bs(t);e.push({inSize:t,windowSize:s,outSize:Math.ceil(t/s)})}return e}function Gt(n,e,t,s){const o=vw(n.shape);let r=n;for(let a=0;a<o.length;a++){const{inSize:i,windowSize:c,outSize:l}=o[a];let u,d;t==="mean"?u=a===0?new wa({windowSize:c,inSize:i,batchSize:n.shape[0],outSize:l},i):new wa({windowSize:c,inSize:i,batchSize:n.shape[0],outSize:l}):u=new $w({windowSize:c,inSize:i,batchSize:n.shape[0],outSize:l},t),d=r,r=s.runWebGLProgram(u,[r],e),d.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(d)}return r}/**
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
 */class Sw{constructor(e,t){this.variableNames=["A"];const s=new Array(e.length);for(let a=0;a<s.length;a++)s[a]=e[t[a]];this.outputShape=s,this.rank=s.length;const o=U(this.rank),r=Iw(t);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function Iw(n){const e=n.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(e);for(let o=0;o<n.length;o++)s[n[o]]=t[o];return s.join()}/**
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
 * =============================================================================
 */class Tw{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(e.length);for(let u=0;u<s.length;u++)s[u]=e[t[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=U(this.rank),r=xu("rc",this.rank),a=new Array(this.rank);for(let u=0;u<t.length;u++)a[t[u]]=r[u];const i=`vec2(${a.slice(-2).join()})`,c=`++${r[this.rank-1]} < ${s[this.rank-1]}`,l=`getChannel(getA(${a.join()}), ${i})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${c}) {
        result[1] = ${l};
      }
      --${r[this.rank-1]};
      if(++${r[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${l};
        if(${c}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}}/**
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
 */function Us(n,e,t){const s=y().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Tw(n.shape,e):new Sw(n.shape,e);return t.runWebGLProgram(s,[n],n.dtype)}/**
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
 */function Rw(n,e,t,s){const o=e,r=n.shape.length,a=ne(o,n.shape);let i=a;const c=Ie(i,r),l=c!=null;let u=n;l&&(u=Us(n,c,s),i=Te(i.length,r)),Ue("sum",i,r);const[d,h]=Ke(u.shape,i);let f=d;t&&(f=Ye(d,a));const p=I(h),g=I(n.shape)/p,m=E({inputs:{x:u},attrs:{shape:[g,p]},backend:s}),b=Ko(n.dtype),w=Gt(m,b,"sum",s),C=E({inputs:{x:w},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(m),s.disposeIntermediateTensorInfo(w),l&&s.disposeIntermediateTensorInfo(u),C}/**
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
 */function Ws(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:a}=s;return Rw(o,r,a,t)}const Ew={kernelName:ii,backendName:"webgl",kernelFunc:Ws};/**
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
 */function ue(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{perm:r}=s,a=t,i=o.shape.length,c=new Array(i);for(let u=0;u<c.length;u++)c[u]=o.shape[r[u]];let l;if(a.shouldExecuteOnCPU([o])){const d=a.texData.get(o.dataId).values,h=kr(d,o.shape,o.dtype,r,c);l=a.makeTensorInfo(c,o.dtype);const f=a.texData.get(l.dataId);f.values=h}else l=Us(o,r,a);return l}const kw={kernelName:li,backendName:"webgl",kernelFunc:ue};/**
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
 */const Iu=1e3;function vs({a:n,b:e,transposeA:t,transposeB:s,backend:o,bias:r=null,preluActivationWeights:a=null,leakyreluAlpha:i=0,activation:c=null}){const l=n.shape.length,u=e.shape.length,d=t?n.shape[l-2]:n.shape[l-1],h=s?e.shape[u-1]:e.shape[u-2],f=t?n.shape[l-1]:n.shape[l-2],p=s?e.shape[u-2]:e.shape[u-1],x=n.shape.slice(0,-2),g=e.shape.slice(0,-2),m=I(x),b=I(g),C=ee(n.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,p]);v(d===h,()=>`Error in matMul: inner shapes (${d}) and (${h}) of Tensors with shapes ${n.shape} and ${e.shape} and transposeA=${t} and transposeB=${s} must match.`);const $=t?[m,d,f]:[m,f,d],R=s?[b,p,h]:[b,h,p],T=E({inputs:{x:n},backend:o,attrs:{shape:$}}),S=E({inputs:{x:e},backend:o,attrs:{shape:R}}),D=[T,S],O=Math.max(m,b),P=t?T.shape[1]:T.shape[2],M=r!=null,me=a!=null,Z=c==="leakyrelu",oe=c!=null?Mn(c,!0):null,Re=M||me||Z||oe!=null;let Pe;if((f===1||p===1)&&P>Iu&&Re===!1){let nt=T,zt=S;t&&(nt=ue({inputs:{x:T},backend:o,attrs:{perm:[0,2,1]}}),D.push(nt)),s&&(zt=ue({inputs:{x:S},backend:o,attrs:{perm:[0,2,1]}}),D.push(zt));const Ht=p!==1,ts=p===1;let zs=nt;Ht&&(zs=E({inputs:{x:nt},backend:o,attrs:{shape:[O,P,1]}}),D.push(zs));const Ku=p===1?2:1;let Hs=zt;ts&&(Hs=E({inputs:{x:zt},backend:o,attrs:{shape:[O,1,P]}}),D.push(Hs));const Or=Ar({inputs:{a:zs,b:Hs},backend:o});Pe=Ws({inputs:{x:Or},backend:o,attrs:{axis:Ku,keepDims:!0}}),D.push(Or)}else{const nt=qe(n.dtype,e.dtype),zt=new Su($,R,[O,f,p],t,s,M,oe,me,Z),Ht=[T,S];if(r!=null&&Ht.push(r),me&&Ht.push(a),Z){const ts=o.makeTensorInfo([],"float32",Lt(i,"float32"));Ht.push(ts),D.push(ts)}Pe=o.runWebGLProgram(zt,Ht,nt)}const ae=E({inputs:{x:Pe},backend:o,attrs:{shape:C}});D.push(Pe);for(const nt of D)o.disposeIntermediateTensorInfo(nt);return ae}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nw(n){const{inputs:e,backend:t,attrs:s}=n,{a:o,b:r,bias:a,preluActivationWeights:i}=e,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=s;return vs({a:o,b:r,transposeA:c,transposeB:l,backend:t,bias:a,preluActivationWeights:i,leakyreluAlpha:d,activation:u})}const Aw={kernelName:Af,backendName:"webgl",kernelFunc:Nw};/**
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
 */const Ca="return abs(x);";function Fw(n){const{inputs:e,backend:t}=n,{x:s}=e;if(t.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=t.texData.get(s.dataId),a=mu(r.values);return t.makeTensorInfo(s.shape,s.dtype,a)}let o;return y().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new it(s.shape,Ca):o=new We(s.shape,Ca),t.runWebGLProgram(o,[s],s.dtype)}const Dw={kernelName:ko,backendName:"webgl",kernelFunc:Fw};/**
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
 */const Ow=Oe+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Pw=B({opSnippet:Ow}),_w={kernelName:xd,backendName:"webgl",kernelFunc:Pw};/**
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
 */const Lw=Oe+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,Bw=B({opSnippet:Lw}),Mw={kernelName:bd,backendName:"webgl",kernelFunc:Bw};/**
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
 */const ya="return a + b;",Vw=se({opSnippet:ya,packedOpSnippet:ya,supportsComplex:!0,cpuKernelImpl:j0}),Uw={kernelName:zn,backendName:"webgl",kernelFunc:Vw};/**
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
 * =============================================================================
 */class Ww{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((r,a)=>`T${a}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}/**
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
 * =============================================================================
 */class Gw{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((r,a)=>`T${a}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}/**
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
 */function ms(n){const{inputs:e,backend:t}=n,s=e;if(s.length===1)return be({inputs:{x:s[0]},backend:t});if(s.length>y().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const c=Math.floor(s.length/2),l=ms({inputs:s.slice(0,c),backend:t}),u=ms({inputs:s.slice(c),backend:t});return ms({inputs:[l,u],backend:t})}const o=s.map(c=>c.dtype).reduce((c,l)=>qe(c,l)),r=s.map(c=>c.shape),i=y().getBool("WEBGL_PACK")?new Gw(s[0].shape,r):new Ww(s[0].shape,r);return t.runWebGLProgram(i,s,o)}const zw={kernelName:wd,backendName:"webgl",kernelFunc:ms};/**
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
 */function Hw(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:a}=s,i=o.shape.length,c=ne(r,o.shape);let l=c;const u=Ie(l,i);let d=o;u!=null&&(d=ue({inputs:{x:o},backend:t,attrs:{perm:u}}),l=Te(l.length,i)),Ue("all",l,i);const[h,f]=Ke(d.shape,l),p=I(f),x=E({inputs:{x:d},backend:t,attrs:{shape:[-1,p]}}),g=Gt(x,x.dtype,"all",t);let m;if(a){const b=Ye(h,c);m=E({inputs:{x:g},backend:t,attrs:{shape:b}})}else m=E({inputs:{x:g},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),u!=null&&t.disposeIntermediateTensorInfo(d),m}const Xw={kernelName:Cd,backendName:"webgl",kernelFunc:Hw};/**
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
 */function qw(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:a}=s,i=o.shape.length,c=ne(r,o.shape);let l=c;const u=Ie(l,i);let d=o;u!=null&&(d=ue({inputs:{x:o},backend:t,attrs:{perm:u}}),l=Te(l.length,i)),Ue("any",l,i);const[h,f]=Ke(d.shape,l),p=I(f),x=E({inputs:{x:d},backend:t,attrs:{shape:[-1,p]}}),g=Gt(x,x.dtype,"any",t);let m;if(a){const b=Ye(h,c);m=E({inputs:{x:g},backend:t,attrs:{shape:b}})}else m=E({inputs:{x:g},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),u!=null&&t.disposeIntermediateTensorInfo(d),m}const jw={kernelName:yd,backendName:"webgl",kernelFunc:qw};/**
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
 */class Kw{constructor(e,t,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:a}=e;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,a];const i=t==="max"?">":"<",c=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${c};
          float candidate = getA(batch, inIdx);
          if (candidate ${i} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}/**
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
 * =============================================================================
 */class Yw{constructor(e,t,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,v(e.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=e[e.length-1],a=Math.ceil(r/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),o||this.variableNames.push("bestIndicesA");const i=this.outputShape,c=i.length,l=U(c),u=le("coords",c);let d,h;if(a===1){h=c+1;const S=U(h);d=`
        ${S} sourceLocR = ${S}(${u.join()}, 0);
        ++${u[c-1]};
        ${S} sourceLocG = ${S}(${u.join()}, 0);
        ++${u[c-2]};
        ${S} sourceLocA = ${S}(${u.join()}, 0);
        --${u[c-1]};
        ${S} sourceLocB = ${S}(${u.join()}, 0);
        --${u[c-2]};`}else h=c,d=`
        ${l} sourceLocR = coords;
        ++${u[c-1]};
        ${l} sourceLocG = coords;
        ++${u[c-2]};
        ${l} sourceLocA = coords;
        --${u[c-1]};
        ${l} sourceLocB = coords;
        --${u[c-2]};`;const f=["x","y","z","w","u","v"].slice(0,h),p="."+f[h-1],x=f.map(S=>"int "+S),g=le("sourceLocR",h-1).concat("inIdx.r"),m=le("sourceLocG",h-1).concat("inIdx.g"),b=le("sourceLocB",h-1).concat("inIdx.b"),w=le("sourceLocA",h-1).concat("inIdx.a"),C=s==="max"?"greaterThan":"lessThan",$=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${w.join()})));`,R=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${m.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,T=o?"":`
      float getBestIndicesAChannel(${x.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${x.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${T}
      void main() {
        ${l} coords = getOutputCoords();
        bool hasNextCol = ${u[c-1]} < ${i[c-1]-1};
        bool hasNextRow = ${u[c-2]} < ${i[c-2]-1};
        ${d}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${R};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${$}
          vec4 candidate = ${R};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${C}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}/**
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
 */function Tu(n,e,t,s=null){let o=e.shape[0],r=e.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const a=Bs(r),i={windowSize:a,inSize:r,batchSize:o,outSize:Math.ceil(r/a)},c=new Kw(i,t,s==null),l=[e];s!=null&&l.push(s);const u=n.runWebGLProgram(c,l,"int32");if(u.shape[1]===1)return u;const d=Tu(n,e,t,u);return n.disposeIntermediateTensorInfo(u),d}function Ru(n,e,t,s=null){const o=s!=null?s.shape:e.shape,r=o[o.length-1],a=Bs(r),i=new Yw(o,a,t,s==null),c=s==null?[e]:[e,s],l=n.runWebGLProgram(i,c,"int32");if(l.shape.length===e.shape.length){const u=Ru(n,e,t,l);return n.disposeIntermediateTensorInfo(l),u}return l}function Eu(n,e,t,s){const o=[t];if(Ue("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,e.shape.length),!y().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const r=[],a=n.texData.get(e.dataId),i=a!==null&&a.isPacked;let c=e;i&&(c=n.unpackTensor(e),r.push(c));const[l,u]=Ke(c.shape,o),d=I(u),h=E({inputs:{x:c},backend:n,attrs:{shape:[-1,d]}});r.push(h);const f=Tu(n,h,s);r.push(f);const p=E({inputs:{x:f},backend:n,attrs:{shape:l}});return r.forEach(x=>n.disposeIntermediateTensorInfo(x)),p}return Ru(n,e,s)}/**
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
 */function Qw(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r}=s;let a=ne(r,o.shape);const i=Ie(a,o.shape.length);let c=o;const l=[];i!=null&&(c=ue({inputs:{x:o},backend:t,attrs:{perm:i}}),l.push(c),a=Te(a.length,c.shape.length)),Ue("argMax",[a[0]],c.shape.length);const u=Eu(t,c,a[0],"max");return l.forEach(d=>t.disposeIntermediateTensorInfo(d)),u}const Zw={kernelName:$d,backendName:"webgl",kernelFunc:Qw};/**
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
 */function Jw(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r}=s;let a=ne(r,o.shape);const i=Ie(a,o.shape.length);let c=o;const l=[];i!=null&&(c=ue({inputs:{x:o},backend:t,attrs:{perm:i}}),l.push(c),a=Te(a.length,c.shape.length)),Ue("argMin",[a[0]],c.shape.length);const u=Eu(t,c,a[0],"min");return l.forEach(d=>t.disposeIntermediateTensorInfo(d)),u}const eC={kernelName:vd,backendName:"webgl",kernelFunc:Jw};/**
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
 */const tC=Oe+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,nC=B({opSnippet:tC}),sC={kernelName:Sd,backendName:"webgl",kernelFunc:nC};/**
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
 */const oC=Oe+"return log(x + sqrt(x * x + 1.0));",rC=B({opSnippet:oC}),aC={kernelName:Id,backendName:"webgl",kernelFunc:rC};/**
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
 */const iC=Oe+`
  return atan(x);
`,cC=B({opSnippet:iC}),lC={kernelName:Td,backendName:"webgl",kernelFunc:cC};/**
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
 */const uC=Nr+`
  return atan(a, b);
`,dC=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Wt+`
  return result;
`,hC=se({opSnippet:uC,packedOpSnippet:dC}),fC={kernelName:Ed,backendName:"webgl",kernelFunc:hC};/**
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
 */const pC=Oe+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,mC=B({opSnippet:pC}),gC={kernelName:Rd,backendName:"webgl",kernelFunc:mC};/**
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
 */class Vn{constructor(e,t,s,o=!1,r=!1){if(this.variableNames=["x"],t==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const a=e.filterWidth,i=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;const x=t==="avg",g=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,m=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let b="0.0";if(x||(b="-1.0 / 1e-20"),s){const S=">=";this.userCode=`
        const ivec2 strides = ivec2(${i}, ${c});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${d};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${S} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?r?g:m:`wR * ${h} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const w="max";let C=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(C="avgValue / max(count, 1.0)");const $=Math.floor(a/4)*4,R=a%4,T=`
      if (${x}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${c});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${d};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${$}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${T}
          }

          int xC = xCCorner + ${$};
          if (${R===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${R===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${R===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${T}
          }
        }
        setOutput(${C});
      }
    `}}class Fr{constructor(e,t,s,o=!1,r=!1){if(this.variableNames=["x"],t==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const a=e.filterWidth,i=e.strideDepth,c=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,d=e.dilationHeight,h=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,x=e.effectiveFilterWidth,g=e.padInfo.front,m=e.padInfo.top,b=e.padInfo.left;this.outputShape=e.outShape;const w=t==="avg";let C="0.0";if(w||(C="-1.0 / 1e-20"),s){const O=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${i}, ${c}, ${l});
        const ivec3 pads = ivec3(${g}, ${m}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${d}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${x};
                  wC += ${h}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${O} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?r?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${x} +
                      wR * ${x} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const $="max";let R=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(R="avgValue / max(count, 1.0)");const T=Math.floor(a/4)*4,S=a%4,D=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${$}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${i}, ${c}, ${l});
      const ivec3 pads = ivec3(${g}, ${m}, ${b});
      const float initializationValue = ${C};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${C});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${d}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${T}; wC += 4) {
              int xC = xCCorner + wC * ${h};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                getValue(batch, xD, xR, xC + 3 * ${h}, ch)
              );

              ${D}
            }

            int xC = xCCorner + ${T};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${D}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                initializationValue,
                initializationValue
              );

              ${D}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                initializationValue
              );

              ${D}
            }
          }
        }
        setOutput(${R});
      }
    `}}/**
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
 */function xC(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;fn(o,"avgPool");const{filterSize:r,strides:a,pad:i,dimRoundingMode:c}=s,l=1;v(un(a,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);const u=ln(o.shape,r,a,l,i,c);if(u.filterWidth===1&&u.filterHeight===1&&Q(u.inShape,u.outShape))return be({inputs:{x:o},backend:t});const d=new Vn(u,"avg",!1);return t.runWebGLProgram(d,[o],"float32")}const bC={kernelName:kd,backendName:"webgl",kernelFunc:xC};/**
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
 */function wC(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{filterSize:r,strides:a,pad:i,dimRoundingMode:c,dataFormat:l}=s,u=[1,1,1],d=qn(o.shape,r,a,u,i,c,l),h=new Fr(d,"avg",!1);return t.runWebGLProgram(h,[o],"float32")}const CC={kernelName:Ad,backendName:"webgl",kernelFunc:wC};/**
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
 */class yC{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=c-1-e.padInfo.top,d=l-1-e.padInfo.left,h=1/(t*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${d});
      const float avgMultiplier = float(${h});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${c};
            wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${i}) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class $C{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,s=e.filterHeight,o=e.filterWidth,r=e.strideDepth,a=e.strideHeight,i=e.strideWidth,c=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=d-1-e.padInfo.front,x=h-1-e.padInfo.top,g=f-1-e.padInfo.left,m=1/(t*s*o);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${x}, ${g});
      const float avgMultiplier = float(${m});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${c}) {
          float dyD = float(dyDCorner + wD) / ${r}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${h};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */function vC(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,a=r,{filterSize:i,strides:c,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=qn(a.shape,i,c,d,l,u),f=new $C(h);return t.runWebGLProgram(f,[o],a.dtype)}const SC={kernelName:Fd,backendName:"webgl",kernelFunc:vC};/**
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
 */function IC(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,a=r;fn([o,r],"avgPoolGrad");const{filterSize:i,strides:c,pad:l}=s,u=ln(a.shape,i,c,1,l),d=new yC(u);return t.runWebGLProgram(d,[o],a.dtype)}const TC={kernelName:Nd,backendName:"webgl",kernelFunc:IC};/**
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
 */function RC(n){const{inputs:e,backend:t,attrs:s}=n,{a:o,b:r}=e,{transposeA:a,transposeB:i}=s;return vs({a:o,b:r,transposeA:a,transposeB:i,backend:t})}const EC={kernelName:Dd,backendName:"webgl",kernelFunc:RC};/**
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
 */class kC{constructor(e,t,s,o,r,a){this.outputShape=[],this.variableNames=["x","mean","variance"],ee(e,t),ee(e,s);let i="0.0";o!=null&&(ee(e,o),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let c="1.0";r!=null&&(ee(e,r),this.variableNames.push("scale"),c="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${i};
        float scale = ${c};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}/**
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
 */class NC{constructor(e,t,s,o,r,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],ee(e,t),ee(e,s);let i="vec4(0.0)";o!=null&&(ee(e,o),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let c="vec4(1.0)";r!=null&&(ee(e,r),this.variableNames.push("scale"),c="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${i};
        vec4 scale = ${c};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}}/**
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
 */const AC=({inputs:n,backend:e,attrs:t})=>{const{x:s,mean:o,variance:r,offset:a,scale:i}=n;v(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),v(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),v(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:c}=t;c==null&&(c=.001);const l=[s,o,r];let u=null;a!=null&&(u=a.shape,l.push(a));let d=null;i!=null&&(d=i.shape,l.push(i));const h=y().getBool("WEBGL_PACK_NORMALIZATION")?new NC(s.shape,o.shape,r.shape,u,d,c):new kC(s.shape,o.shape,r.shape,u,d,c);return e.runWebGLProgram(h,l,l[0].dtype)},FC={kernelName:lh,backendName:"webgl",kernelFunc:AC};/**
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
 */class DC{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=U(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=OC(this.rank);let o;const r=e.map((a,i)=>`sourceLoc.${So[i]} = start[${i}] + coords.${So[i]};`);o=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const So=["x","y","z","w","u","v"];function OC(n){if(n===1)return"sourceLoc";if(n<=6)return So.slice(0,n).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}/**
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
 * =============================================================================
 */class PC{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=U(this.rank),s=le("coords",this.rank),o=le("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,a=`getChannel(getSource(${o.join()}), ${r})`,i=`
      result.x = ${a};
      if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${a};
        --${o[this.rank-1]};
      }
    `,c=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${e[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${a};
        if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${a};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((u,d)=>`start[${d}]`).join()});`:e.map((u,d)=>`${o[d]} = ${s[d]} + start[${d}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${i}
        ${c}
        setOutput(result);
      }
    `}}/**
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
 */function _C(n,e,t,s){const o=s.texData.get(n.dataId),r=s.makeTensorInfo(t,n.dtype),a=s.texData.get(r.dataId);Object.assign(a,o),a.refCount=1,a.shape=t,a.dtype=n.dtype;let i=dr(e,q(n.shape));o.slice&&(i+=o.slice.flatOffset),a.slice={flatOffset:i,origDataId:o.slice&&o.slice.origDataId||n.dataId};const c=s.dataRefCount.get(a.slice.origDataId)||1;return s.dataRefCount.set(a.slice.origDataId,c+1),r}function Cn(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:r,size:a}=s,[i,c]=hr(o,r,a);if(lr(o,i,c),I(c)===0)return t.makeTensorInfo(c,o.dtype,[]);if(t.shouldExecuteOnCPU([o])||o.dtype==="string"){const d=t.texData.get(o.dataId),h=Tb(d.values,i,c,o.shape,o.dtype);return t.makeTensorInfo(c,o.dtype,h)}const{isPacked:l}=t.texData.get(o.dataId),u=ur(o.shape,i,c);if(l||!u){const d=y().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new PC(c):new DC(c),h=[i];return t.runWebGLProgram(d,[o],o.dtype,h)}return t.uploadToGPU(o.dataId),_C(o,i,c,t)}const LC={kernelName:ai,backendName:"webgl",kernelFunc:Cn};/**
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
 */const BC=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockShape:r,crops:a}=s;v(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const i=r.reduce((b,w)=>b*w),c=pr(o.shape,r,i),l=mr(c.length,r.length),u=gr(o.shape,r,i),d=mc(a,r.length),h=gc(u,a,r.length),f=[],p=E({inputs:{x:o},backend:t,attrs:{shape:c}}),x=ue({inputs:{x:p},backend:t,attrs:{perm:l}}),g=E({inputs:{x},backend:t,attrs:{shape:u}}),m=Cn({inputs:{x:g},backend:t,attrs:{begin:d,size:h}});return f.push(p),f.push(x),f.push(g),f.forEach(b=>t.disposeIntermediateTensorInfo(b)),m},MC={kernelName:Od,backendName:"webgl",kernelFunc:BC};/**
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
 */function VC(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,weights:r}=e,{size:a}=s,i=t.readSync(o.dataId),c=t.readSync(r.dataId),l=pu(i,c,r.dtype,r.shape,a);return t.makeTensorInfo([a],r.dtype,l)}const UC={kernelName:Pd,backendName:"webgl",kernelFunc:VC};/**
 * @license
 * Copyright 2023 Google LLC.
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
 */const WC=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,GC=`
  return float(int(a.r) & int(b.r));
`;function zC(n){const{inputs:e,backend:t}=n,{a:s,b:o}=e,r=y().getBool("WEBGL_PACK_BINARY_OPERATIONS"),a=y().getNumber("WEBGL_VERSION");if(t.shouldExecuteOnCPU([s,o])||a===1){const c=t.texData.get(s.dataId).values,l=t.texData.get(o.dataId).values,[u,d]=Y0(s.shape,o.shape,c,l,s.dtype),h=t.makeTensorInfo(d,s.dtype),f=t.texData.get(h.dataId);return f.values=u,h}let i;return r?i=new bn(WC,s.shape,o.shape,!1):i=new Pt(GC,s.shape,o.shape),t.runWebGLProgram(i,[s,o],s.dtype)}const HC={kernelName:No,backendName:"webgl",kernelFunc:zC};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function XC(n){const{inputs:e,backend:t}=n,{s0:s,s1:o}=e,r=t.readSync(s.dataId),a=t.readSync(o.dataId),i=ee(Array.from(r),Array.from(a));return t.makeTensorInfo([i.length],"int32",Int32Array.from(i))}const qC={kernelName:_d,backendName:"webgl",kernelFunc:XC};/**
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
 */const jC="return float(a != b);",ku=se({opSnippet:jC,cpuKernelImpl:xb,dtype:"bool"}),KC={kernelName:Go,backendName:"webgl",kernelFunc:ku};/**
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
 */function Jn(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.texData.get(s.dataId);return be({inputs:{x:o.complexTensorInfos.real},backend:t})}const YC={kernelName:ni,backendName:"webgl",kernelFunc:Jn};/**
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
 */const QC="return float(int(x));";function ZC(n,e){const t=new We(n.shape,QC),s=e.runWebGLProgram(t,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}/**
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
 */function Io(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return be({inputs:{x:o},backend:t});const a=po(o.shape),i=Io({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),c=xt({inputs:{real:i,imag:a},backend:t});return a.dispose(),t.disposeIntermediateTensorInfo(i),c}if(o.dtype==="complex64"){const a=Jn({inputs:{input:o},backend:t}),i=Io({inputs:{x:a},backend:t,attrs:{dtype:r}});return t.disposeIntermediateTensorInfo(a),i}if(!Ro(o.dtype,r)){const a=be({inputs:{x:o},backend:t});return{dataId:a.dataId,shape:a.shape,dtype:r}}if(t.shouldExecuteOnCPU([o])){const a=t.texData.get(o.dataId).values,[i,c,l]=Q0(a,o.shape,o.dtype,r);return t.makeTensorInfo(i,c,l)}if(r==="int32")return ZC(o,t);if(r==="bool"){const a=t.makeTensorInfo([],"bool",He("bool",1)),c=ku({inputs:{a:o,b:a},backend:t});return t.disposeIntermediateTensorInfo(a),c}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const JC={kernelName:Es,backendName:"webgl",kernelFunc:Io};/**
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
 */const $a="return ceil(x);",ey=B({opSnippet:$a,packedOpSnippet:$a,cpuKernelImpl:Z0}),ty={kernelName:Ao,backendName:"webgl",kernelFunc:ey};/**
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
 */class ny{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}/**
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
 */class sy{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}/**
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
 */function oy(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{clipValueMin:r,clipValueMax:a}=s;let i;y().getBool("WEBGL_PACK_CLIP")?i=new sy(o.shape):i=new ny(o.shape);const c=[[r],[a]];return t.runWebGLProgram(i,[o],o.dtype,c)}const ry={kernelName:Ld,backendName:"webgl",kernelFunc:oy};/**
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
 */class ay{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}/**
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
 */function va(n,e){return{dataId:e.dataId,dtype:e.dtype,shape:n.shape}}function iy(n){const{inputs:e,backend:t}=n,{x:s}=e,o=t.texData.get(s.dataId),r=new ay(s.shape),a=[va(s,o.complexTensorInfos.real),va(s,o.complexTensorInfos.imag)];return t.runWebGLProgram(r,a,a[0].dtype)}const cy={kernelName:qa,backendName:"webgl",kernelFunc:iy};/**
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
 */class ly{constructor(e){this.outputShape=[],this.outputShape=Ft(e,1),this.variableNames=e.map((a,i)=>`T${i}`);const t=new Array(e.length-1);t[0]=e[0][1];for(let a=1;a<t.length;a++)t[a]=t[a-1]+e[a][1];const s=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let a=1;a<t.length;a++){const i=t[a-1];s.push(`else if (yC < ${t[a]}) setOutput(getT${a}(yR, yC-${i}));`)}const o=t.length,r=t[t.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}/**
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
 * =============================================================================
 */class uy{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Ft(e,t);const s=this.outputShape,o=s.length,r=U(o),a=le("coords",o),i=["x","y","z","w","u","v"].slice(0,o);this.variableNames=e.map((x,g)=>`T${g}`);const c=new Array(e.length-1);c[0]=e[0][t];for(let x=1;x<c.length;x++)c[x]=c[x-1]+e[x][t];const l=i[t],u=i.slice(-2),d=i.join();let h=`if (${l} < ${c[0]}) {
        return getChannel(
            getT0(${d}), vec2(${u.join()}));
        }`;for(let x=1;x<c.length;x++){const g=c[x-1];h+=`
        if (${l} < ${c[x]}  && ${l} >= ${c[x-1]}) {
          return getChannel(
            getT${x}(${is(i,l,g)}),
            vec2(${is(u,l,g)}));
        }`}const f=c.length,p=c[c.length-1];h+=`
        return getChannel(
          getT${f}(${is(i,l,p)}),
          vec2(${is(u,l,p)}));`,this.userCode=`
      float getValue(${i.map(x=>"int "+x)}) {
        ${h}
      }

      void main() {
        ${r} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[o-1]} = ${a[o-1]} + 1;
        if (${a[o-1]} < ${s[o-1]}) {
          result.g = getValue(${a});
        }

        ${a[o-2]} = ${a[o-2]} + 1;
        if (${a[o-2]} < ${s[o-2]}) {
          result.a = getValue(${a});
        }

        ${a[o-1]} = ${a[o-1]} - 1;
        if (${a[o-2]} < ${s[o-2]} &&
            ${a[o-1]} < ${s[o-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}}function is(n,e,t){const s=n.indexOf(e);return n.map((r,a)=>a===s?`${r} - ${t}`:r).join()}/**
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
 */function Gs(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.texData.get(s.dataId);return be({inputs:{x:o.complexTensorInfos.imag},backend:t})}const dy={kernelName:fh,backendName:"webgl",kernelFunc:Gs};/**
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
 */function En(n,e,t){const s=n[0].dtype;if(s==="complex64"){const f=n.map(b=>Jn({inputs:{input:b},backend:t})),p=n.map(b=>Gs({inputs:{input:b},backend:t})),x=En(f,e,t),g=En(p,e,t),m=xt({inputs:{real:x,imag:g},backend:t});return f.forEach(b=>t.disposeIntermediateTensorInfo(b)),p.forEach(b=>t.disposeIntermediateTensorInfo(b)),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),m}let o=t.shouldExecuteOnCPU(n);if(s==="string"&&(o=!0),o){const f=n.map(C=>{const R=[-1,I(C.shape.slice(e))];return E({inputs:{x:C},backend:t,attrs:{shape:R}})}),p=f.map(C=>({vals:t.readSync(C.dataId),shape:C.shape})),x=Ft(f.map(C=>C.shape),1),g=f[0].shape[0]===1,m=J0(p,x,s,g),b=Ft(n.map(C=>C.shape),e),w=t.makeTensorInfo(b,s,m);return f.forEach(C=>t.disposeIntermediateTensorInfo(C)),w}const r=n.filter(f=>I(f.shape)>0),a=y().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&r[0].shape.length>1;if(r.length===1){const f=a?new We(n[0].shape,ot):new it(n[0].shape,ot);return t.runWebGLProgram(f,n,s)}const i=y().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(r.length>i){const f=[];for(let x=0;x<r.length;x+=i){const g=r.slice(x,x+i);f.push(En(g,e,t))}const p=En(f,e,t);for(const x of f)t.disposeIntermediateTensorInfo(x);return p}if(a){const f=new uy(r.map(p=>p.shape),e);return t.runWebGLProgram(f,r,s)}const{tensors2D:c,outShape:l}=hy(r,e,t),u=new ly(c.map(f=>f.shape)),d=t.runWebGLProgram(u,c,s);c.forEach(f=>t.disposeIntermediateTensorInfo(f));const h=E({inputs:{x:d},attrs:{shape:l},backend:t});return t.disposeIntermediateTensorInfo(d),h}function hy(n,e,t){const s=Ft(n.map(r=>r.shape),e);return{tensors2D:n.map(r=>E({inputs:{x:r},attrs:{shape:[-1,I(r.shape.slice(e))]},backend:t})),outShape:s}}/**
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
 */function Nu(n){const{inputs:e,backend:t,attrs:s}=n,{axis:o}=s,r=ne(o,e[0].shape)[0],a=e.map(l=>l.shape);lc(a,r);const i=Ft(e.map(l=>l.shape),r);if(I(i)===0)return t.makeTensorInfo(i,e[0].dtype,[]);const c=e.filter(l=>I(l.shape)>0);return c.length===1?be({inputs:{x:c[0]},backend:t}):En(c,r,t)}const fy={kernelName:Bd,backendName:"webgl",kernelFunc:Nu};/**
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
 */class Au{constructor(e,t=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const a=e.padInfo.top,i=e.padInfo.left,c=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,x=e.inChannels%4,g=e.dataFormat==="channelsLast",m=g?1:2,b=g?2:3,w=g?3:1;let C="",$="";s&&(o?C=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?C=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:C=`
          float activation(float x) {
            ${s}
          }
        `,$="result = activation(result);");const R=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${C}

      const ivec2 strides = ivec2(${c}, ${l});
      const ivec2 pads = ivec2(${a}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${w}];

        ivec2 xRCCorner =
            ivec2(coords[${m}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${h}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${d};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${x===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${x===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${x===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${R}
        ${$}
        setOutput(result);
      }
    `}}class py{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left,r=e.strideDepth,a=e.strideHeight,i=e.strideWidth,c=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterDepth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,x=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${r}, ${a}, ${i});
      const ivec3 pads = ivec3(${t}, ${s}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${d}; wF++) {
          int xF = xFCorner + wF * ${c};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${x===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${x===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${x===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */class Fu{constructor(e,t=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=re(this.outputShape.length);const a=e.padInfo.left,i=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u;let h=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<u;g++)h+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;h+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let g=0;g<u;g++)h+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;h+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(d+1)/2;g++){const m=g*2;if(h+=`
           xC = xCCorner + ${m*c};
           `,i===1){if(m<u&&(a%2===1?(h+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }
               `,c===1&&m>0?h+=`
                 xC${m} = vec4(xTexelC${m-2}.zw, xTexelC${m}.xy);
                 `:h+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${m} = vec4(previous.zw, xTexelC${m}.xy);
                   } else {
                     xC${m} = vec4(0.0, 0.0, xTexelC${m}.xy);
                   }
                   `):h+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 xC${m} = xTexelC${m};
                 `,m+1<u)){const b=a%2===0?Ts(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(h+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                     xTexelC${m+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${m+1}.zw = vec2(0.0);
                     }
                     xTexelC${m+1}Ready = 1;
                   }
                   `,c>1?h+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${m+1} = vec4(previous.zw, xTexelC${m+1}.xy);
                     } else {
                      xC${m+1} = vec4(0.0, 0.0, xTexelC${m+1}.xy);
                     }
                     `:h+=`
                     xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.xy);
                     `):b===1?h+=`
                     xC${m+1} = xTexelC${m};
                     `:h+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                       xTexelC${m+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${m+1}.zw = vec2(0.0);
                       }
                       xTexelC${m+1}Ready = 1;
                     }

                     xC${m+1} = xTexelC${m+1};
                     `}}else m<u&&(a%2===1?(h+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${m+1}Ready == 0) {
                   xTexelC${m+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${m+1}.zw = vec2(0.0);
                   }
                   xTexelC${m+1}Ready = 1;
                 }

                 xC${m} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
               `,m+1<u&&(h+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${m+1} = vec4(xTexelC${m+1}.xy, final.xy);
                 `)):(h+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                   xTexelC${m+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m+1}.zw = vec2(0.);
                   }
                   xTexelC${m+1}Ready = 1;
                 }

                 xC${m} = vec4(
                   xTexelC${m}.xy, xTexelC${m+1}.xy);
               `,m+1<u&&(h+=`
                   xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
                 `)));m<u&&(h+=`
             wTexel = getW(r, ${m}, d1, d2);
             dotProd += xC${m}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${m}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,m+1<u&&(h+=`
               wTexel = getW(r, ${m+1}, d1, d2);
               dotProd += xC${m+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${m+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}h+=`
     }
   `,h+=`
     }
   `,h+=`
     }
   `;let f="",p="";s&&(o?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:r?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:f=`vec4 activation(vec4 x) {
           ${s}
         }`,p="result = activation(result);");const x=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${h}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${x}
         ${p}
         setOutput(result);
       }
     `}}/**
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
 * =============================================================================
 */class my{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=re(this.outputShape.length);const{dataFormat:s}=t,o=de(),r=s==="channelsLast",a=r?1:2,i=r?2:3,c=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let l="";for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)l+=`
          blockIndex = rc.z + ${d};
          pos = rc.y + ${u};

          ${c}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${i}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${r}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+d}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+d}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${o.output} = result;
      }
    `}}/**
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
 */function Ss(n,e){const t=n.length;return t>=3?e?[...n.slice(0,-3),n[t-3]*n[t-2],n[t-1]]:[...n.slice(0,-3),n[t-3],n[t-2]*n[t-1]]:!e&&t===1&&n[0]>1?[n[0],1]:null}function Du({x:n,filter:e,convInfo:t,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:a=0,activation:i=null}){const c=n.shape,l=s.texData.get(n.dataId),u=t.inChannels,d=c[0]*c[1]*c[2],h=t.outChannels,f=t.dataFormat==="channelsLast",p=!1,x=!1;let g;const m=[];if(r!=null){const C=Ss(r.shape,f);C!=null&&(r=E({inputs:{x:r},backend:s,attrs:{shape:C}}),m.push(r))}if(o!=null){const C=Ss(o.shape,f);C!=null&&(o=E({inputs:{x:o},backend:s,attrs:{shape:C}}),m.push(o))}if(!((d===1||h===1)&&u>Iu)&&l.isPacked&&f&&l.texture!=null&&c[2]%2!==0&&Q(l.shape.slice(-3),c.slice(-3))){const C=c[0]*c[1]*(c[2]+1),$={dataId:n.dataId,shape:[1,C,t.inChannels],dtype:n.dtype},R=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,v(Bn(l.shape,$.shape),()=>`packed reshape ${l.shape} to ${$.shape} isn't free`);const T=E({inputs:{x:e},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}});m.push(T);const S=vs({a:$,b:T,backend:s,transposeA:p,transposeB:x,bias:o,activation:i,preluActivationWeights:r,leakyreluAlpha:a}),D=s.texData.get(S.dataId);v(D.isPacked,()=>"batchMatMul result is expected to be packed"),l.shape=R,D.shape=t.outShape,g=be({inputs:{x:S},backend:s}),g.shape=t.outShape,m.push(S)}else{const C=t.outHeight*t.outWidth,$=E({inputs:{x:n},backend:s,attrs:{shape:f?[t.batchSize,C,t.inChannels]:[t.batchSize,t.inChannels,C]}}),R=E({inputs:{x:e},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}}),T=vs({a:f?$:R,b:f?R:$,transposeA:!f,transposeB:x,backend:s,bias:o,activation:i,preluActivationWeights:r,leakyreluAlpha:a});g=E({inputs:{x:T},backend:s,attrs:{shape:t.outShape}}),m.push($),m.push(R),m.push(T)}for(const C of m)s.disposeIntermediateTensorInfo(C);return g}function Ou({x:n,filter:e,convInfo:t,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:a=0,activation:i=null}){const{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:h,dataFormat:f}=t,p=f==="channelsLast",x=c*l*u,g=h*d,m=[t.batchSize,x,g],b=!0,w=!1,C=[];if(r!=null){const ae=Ss(r.shape,p);ae!=null&&(r=E({inputs:{x:r},backend:s,attrs:{shape:ae}}),C.push(r))}if(o!=null){const ae=Ss(o.shape,p);ae!=null&&(o=E({inputs:{x:o},backend:s,attrs:{shape:ae}}),C.push(o))}const $=E({inputs:{x:e},backend:s,attrs:{shape:[1,x,I(e.shape)/x]}});C.push($);const R=new my(m,t),T=[n.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],S=s.runWebGLProgram(R,[n],"float32",T),D=E({inputs:{x:S},backend:s,attrs:{shape:m}});C.push(S),C.push(D);const O=o!=null,P=r!=null,M=i==="leakyrelu",me=i?Mn(i,!0):null,Z=new Su(p?D.shape:$.shape,p?$.shape:D.shape,p?[t.batchSize,g,t.outChannels]:[t.batchSize,t.outChannels,g],b,w,O,me,P,M),oe=p?[D,$]:[$,D];if(o&&oe.push(o),P&&oe.push(r),M){const ae=s.makeTensorInfo([],"float32",Lt(a,"float32"));oe.push(ae),C.push(ae)}const Re=s.runWebGLProgram(Z,oe,"float32"),Pe=E({inputs:{x:Re},backend:s,attrs:{shape:t.outShape}});C.push(Re);for(const ae of C)s.disposeIntermediateTensorInfo(ae);return Pe}/**
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
 */function gy(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:a,pad:i,dataFormat:c,dilations:l,dimRoundingMode:u}=s,d=dn(c),h=Ve(o.shape,r.shape,a,l,i,u,!1,d);let f;if(h.filterHeight===1&&h.filterWidth===1&&h.dilationHeight===1&&h.dilationWidth===1&&h.strideHeight===1&&h.strideWidth===1&&(h.padInfo.type==="SAME"||h.padInfo.type==="VALID"))f=Du({x:o,filter:r,convInfo:h,backend:t});else if(h.strideWidth<=2&&d==="channelsLast"&&y().getBool("WEBGL_EXP_CONV")){const x=new Fu(h),g=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];f=t.runWebGLProgram(x,[o,r],"float32",g)}else if(y().getBool("WEBGL_CONV_IM2COL"))f=Ou({x:o,filter:r,convInfo:h,backend:t});else{const x=new Au(h);f=t.runWebGLProgram(x,[o,r],"float32")}const p=E({inputs:{x:f},backend:t,attrs:{shape:h.outShape}});return t.disposeIntermediateTensorInfo(f),p}const xy={kernelName:Md,backendName:"webgl",kernelFunc:gy};/**
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
 */class by{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,r=e.padInfo.left,a=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${a?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class wy{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,a=e.dataFormat==="channelsLast",i=t-1-e.padInfo.top,c=s-1-e.padInfo.left,l=a?1:2,u=a?2:3,d=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${d}];

        ivec2 dyCorner = ivec2(coords[${l}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${a}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Cy{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,s=e.strideHeight,o=e.strideWidth,r=e.padInfo.front,a=e.padInfo.top,i=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${r};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${a};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${i};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class yy{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,s=e.filterHeight,o=e.filterWidth,r=e.strideDepth,a=e.strideHeight,i=e.strideWidth,c=t-1-e.padInfo.front,l=s-1-e.padInfo.top,u=o-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${c}, ${l}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${r}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */function $y(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:a,pad:i,dataFormat:c,dimRoundingMode:l,filterShape:u}=s,d=dn(c),h=Ve(o.shape,u,a,1,i,l,!1,d),f=new by(h);return t.runWebGLProgram(f,[o,r],"float32")}const vy={kernelName:Vd,backendName:"webgl",kernelFunc:$y};/**
 * @license
 * Copyright 2023 Google LLC.
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
 */class Sy{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=re(this.outputShape.length);const t=e.filterHeight,s=e.filterWidth,o=t-1-e.padInfo.top,r=s-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${r});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            int wCPerm = ${s} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}/**
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
 */function Iy(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{inputShape:a,strides:i,pad:c,dataFormat:l,dimRoundingMode:u}=s,d=dn(l),h=Ve(a,r.shape,i,1,c,u,!1,d);if(y().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&d==="channelsLast"){const f=[[h.strideHeight,h.strideWidth]],p=new Sy(h);return t.runWebGLProgram(p,[o,r],"float32",f)}else{const f=new wy(h);return t.runWebGLProgram(f,[o,r],"float32")}}const Ty={kernelName:Ud,backendName:"webgl",kernelFunc:Iy};/**
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
 */function Ry(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:a,pad:i,dilations:c}=s,l=jn(o.shape,r.shape,a,c,i),u=new py(l);return t.runWebGLProgram(u,[o,r],"float32")}const Ey={kernelName:Wd,backendName:"webgl",kernelFunc:Ry};/**
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
 */function ky(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:a,pad:i,filterShape:c}=s,l=jn(o.shape,c,a,1,i),u=new Cy(l);return t.runWebGLProgram(u,[o,r],"float32")}const Ny={kernelName:Gd,backendName:"webgl",kernelFunc:ky};/**
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
 */function Ay(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{pad:a,strides:i,inputShape:c}=s,l=jn(c,r.shape,i,1,a),u=new yy(l);return t.runWebGLProgram(u,[o,r],"float32")}const Fy={kernelName:zd,backendName:"webgl",kernelFunc:Ay};/**
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
 */const Dy=wn+`
  return cos(x);
`,Oy=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Wt}
  return result;
`,Py=B({opSnippet:Dy,packedOpSnippet:Oy}),_y={kernelName:Hd,backendName:"webgl",kernelFunc:Py};/**
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
 */const Ly=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,By=B({opSnippet:Ly}),My={kernelName:Xd,backendName:"webgl",kernelFunc:By};/**
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
 */class Vy{constructor(e,t,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[a,i,c,l]=e,[u]=t,[d,h]=s;this.outputShape=[u,d,h,l];const f=o==="bilinear"?1:0,[p,x]=[`${i-1}.0`,`${c-1}.0`],[g,m,b]=d>1?[`${(i-1)/(d-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[w,C,$]=h>1?[`${(c-1)/(h-1)}`,"(x2-x1) * width_ratio",`x1*${x} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${x}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${w});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${m};
        float width_scale = ${C};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${r}));
          return;
        }
        float in_x = ${$};
        if( in_x < 0.0 || in_x > ${x} ) {
          setOutput(float(${r}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}/**
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
 */const Uy=n=>{const{inputs:e,backend:t,attrs:s}=n,{image:o,boxes:r,boxInd:a}=e,{cropSize:i,method:c,extrapolationValue:l}=s,u=new Vy(o.shape,r.shape,i,c,l);return t.runWebGLProgram(u,[o,r,a],"float32")},Wy={kernelName:Kd,backendName:"webgl",kernelFunc:Uy};var Un;(function(n){n.Prod="*",n.Sum="+"})(Un||(Un={}));class Sa{constructor(e,t,s,o){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,a=this.op===Un.Prod?"1.0":"0.0",i=s?a:`getX(${Ia(r,"coords",this.op)})`,c=this.outputShape[this.outputShape.length-1];let l="",u="";s?(l=o?`end != ${c-1}`:"end != 0",u=o?"end + 1":"end - 1"):(l=o?`end + pow2 < ${c}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${U(r)} coords = getOutputCoords();
        int end = ${Ta(r,"coords",this.op)};
        float val = ${i};
        int pow2 = int(pow(2.0, index));
        if (${l}) {
          int idx = ${u};
          ${Ta(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${Ia(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function Ia(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.x, ${e}.y`;if(n===3)return`${e}.x, ${e}.y, ${e}.z`;if(n===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function Ta(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.y`;if(n===3)return`${e}.z`;if(n===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */function Pu(n,e,t,s,o,r){const a=e.shape.length,i=Ie([s],a);let c=e;i!=null&&(c=ue({inputs:{x:e},backend:t,attrs:{perm:i}}));const l=Te(1,a)[0];if(l!==a-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${s}`);const u=c.shape[l];let d=be({inputs:{x:c},backend:t});for(let h=0;h<=Math.ceil(Math.log2(u))-1;h++){const f=new Sa(n,c.shape,!1,r),p=[[h]],x=d;d=t.runWebGLProgram(f,[d],d.dtype,p),t.disposeIntermediateTensorInfo(x)}if(o){const h=new Sa(n,c.shape,o,r),f=d;d=t.runWebGLProgram(h,[d],d.dtype),t.disposeIntermediateTensorInfo(f)}if(i!=null){const h=or(i),f=ue({inputs:{x:d},backend:t,attrs:{perm:h}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(c),f}return d}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */function Gy(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,exclusive:a,reverse:i}=s;return Pu(Un.Prod,o,t,r,a,i)}const zy={kernelName:qd,backendName:"webgl",kernelFunc:Gy};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */function Hy(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,exclusive:a,reverse:i}=s;return Pu(Un.Sum,o,t,r,a,i)}const Xy={kernelName:jd,backendName:"webgl",kernelFunc:Hy};/**
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
 */function qy(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,weights:r}=e,{size:a,binaryOutput:i}=s;if(o.shape.length===1){const c=t.readSync(o.dataId),l=t.readSync(r.dataId),u=pu(c,l,r.dtype,r.shape,a);return t.makeTensorInfo([a],r.dtype,u)}else if(o.shape.length===2){const c=t.bufferSync(o),l=t.bufferSync(r),u=K0(c,l,a,i);return t.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const jy={kernelName:Yd,backendName:"webgl",kernelFunc:qy};/**
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
 */class Ky{constructor(e,t,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
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
 */function Yy(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockSize:r,dataFormat:a}=s,i=o.shape[0],c=a==="NHWC"?o.shape[1]:o.shape[2],l=a==="NHWC"?o.shape[2]:o.shape[3],u=a==="NHWC"?o.shape[3]:o.shape[1],d=c*r,h=l*r,f=u/(r*r),p=a==="NHWC"?[i,d,h,f]:[i,f,d,h],x=new Ky(p,r,a);return t.runWebGLProgram(x,[o],o.dtype)}const Qy={kernelName:Qd,backendName:"webgl",kernelFunc:Yy};/**
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
 */class _u{constructor(e,t=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=re(this.outputShape.length);const a=e.filterHeight,i=e.filterWidth,c=e.outChannels/e.inChannels;let l="",u="";s&&(o?l=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?l=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:l=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const d=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${c};
        int q = d2 - d1 * ${c};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${i}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${d}
        ${u}
        setOutput(result);
      }
    `}}/**
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
 */class Lu{constructor(e,t=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=re(this.outputShape.length);const a=e.outChannels/e.inChannels,i=e.padInfo.left,c=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,d=e.filterWidth,h=d;let f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let m=0;m<d;m++)f+=`
          vec4 xTexelC${m*2};
          int xTexelC${m*2}Ready;
          vec4 xTexelC${m*2+1};
          int xTexelC${m*2+1}Ready;
          vec4 xC${m};`;f+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let m=0;m<d;m++)f+=`
          xTexelC${m*2} = vec4(0.0);
          xTexelC${m*2}Ready = 0;
          xTexelC${m*2+1} = vec4(0.0);
          xTexelC${m*2+1}Ready = 0;
          xC${m} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let m=0;m<(h+1)/2;m++){const b=m*2;if(f+=`
          xC = xCCorner + ${b*l};
          `,c===1){if(b<d&&(i%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,l===1&&b>0?f+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<d)){const w=i%2===0?Ts(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${w};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,l>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:f+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):w===1?f+=`
                    xC${b+1} = xTexelC${b};
                    `:f+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<d&&(i%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<d&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<d&&(f+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<d&&(f+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<d&&(f+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p="",x="";s&&(o?p=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?p=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:p=`vec4 activation(vec4 x) {
          ${s}
        }`,x="result = activation(result);");const g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${x}
        setOutput(result);
      }
    `}}/**
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
 */function Zy(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:a,pad:i,dilations:c,dimRoundingMode:l}=s;let u=c;u==null&&(u=[1,1]),v(un(a,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${a} and dilations '${u}'`);const d=Ve(o.shape,r.shape,a,u,i,l,!0);let h;y().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?h=new Lu(d):h=new _u(d);const f=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return t.runWebGLProgram(h,[o,r],"float32",f)}const Jy={kernelName:Zd,backendName:"webgl",kernelFunc:Zy};/**
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
 */class e1{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,r=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class t1{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,a=t-1-e.padInfo.top,i=s-1-e.padInfo.left,c=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${c}; dm++) {
              int d2 = d1 * ${c} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */function n1(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:a,dilations:i,pad:c,dimRoundingMode:l,filterShape:u}=s,d=Ve(o.shape,u,a,i,c,l,!0),h=new e1(d);return t.runWebGLProgram(h,[o,r],"float32")}const s1={kernelName:Jd,backendName:"webgl",kernelFunc:n1};/**
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
 */function o1(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{strides:a,dilations:i,pad:c,dimRoundingMode:l,inputShape:u}=s,d=Ve(u,r.shape,a,i,c,l,!0),h=new t1(d);return t.runWebGLProgram(h,[o,r],"float32")}const r1={kernelName:eh,backendName:"webgl",kernelFunc:o1};/**
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
 * =============================================================================
 */class a1{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}/**
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
 */function i1(n){const{inputs:e,backend:t}=n,{x:s}=e,o=[...s.shape,...s.shape],r=I(s.shape),a=E({inputs:{x:s},backend:t,attrs:{shape:[r]}}),i=new a1(r),c=t.runWebGLProgram(i,[a],a.dtype),l=E({inputs:{x:c},backend:t,attrs:{shape:o}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(c),l}const c1={kernelName:th,backendName:"webgl",kernelFunc:i1};/**
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
 */class l1{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:s,padInfo:o,strideHeight:r,strideWidth:a,filterHeight:i,filterWidth:c,dilationHeight:l,dilationWidth:u}=e,{top:d,left:h}=o;this.userCode=`
      const ivec2 strides = ivec2(${r}, ${a});
      const ivec2 pads = ivec2(${d}, ${h});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${i}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${c}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}/**
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
 */function u1(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:a,pad:i,dilations:c}=s,l=zi(o.shape,r.shape,a,i,"NHWC",c);let u;const d=new l1(l);u=t.runWebGLProgram(d,[o,r],"float32");const h=E({inputs:{x:u},backend:t,attrs:{shape:l.outShape}});return t.disposeIntermediateTensorInfo(u),h}const d1={kernelName:nh,backendName:"webgl",kernelFunc:u1};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function h1(n){const{inputs:e,backend:t,attrs:s}=n,{equation:o}=s,r=e,{allDims:a,summedDims:i,idDims:c}=Ic(o,r.length);Rc(a.length,c,r);const{path:l,steps:u}=Ec(i,c),d=u.length;let h=null,f=a.length;const p=[];for(let x=0;x<d;++x){for(const g of u[x]){const{permutationIndices:m,expandDims:b}=Tc(f,c[g]);let w;kc(m)?w=r[g]:(w=ue({inputs:{x:r[g]},backend:t,attrs:{perm:m}}),p.push(w));const C=w.shape.slice();for(let $=0;$<b.length;++$)C.splice(b[$],0,1);Q(w.shape,C)||(w=E({inputs:{x:w},backend:t,attrs:{shape:C}}),p.push(w)),h===null?h=w:(h=Ar({inputs:{a:w,b:h},backend:t}),p.push(h))}x<d-1&&(l[x]>=0&&(h=Ws({inputs:{x:h},backend:t,attrs:{axis:l[x]-(a.length-f),keepDims:!1}}),p.push(h)),f--)}for(const x of p)x!==h&&t.disposeIntermediateTensorInfo(x);return h}const f1={kernelName:sh,backendName:"webgl",kernelFunc:h1};/**
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
 */const p1="return (x >= 0.0) ? x : (exp(x) - 1.0);",m1=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,g1=B({opSnippet:p1,packedOpSnippet:m1}),x1={kernelName:Ka,backendName:"webgl",kernelFunc:g1};/**
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
 */const b1="return (b >= 0.0) ? a : a * (b + 1.0);",w1=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,C1=n=>{const{inputs:e,backend:t}=n,{dy:s,y:o}=e,r=y().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(w1,s.shape,o.shape):new Pt(b1,s.shape,o.shape);return t.runWebGLProgram(r,[s,o],s.dtype)},y1={kernelName:oh,backendName:"webgl",kernelFunc:C1};/**
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
 */const $1=`
  return vec4(equal(a, b));
`,v1="return float(a == b);",S1=se({opSnippet:v1,packedOpSnippet:$1,dtype:"bool",cpuKernelImpl:eb}),I1={kernelName:Do,backendName:"webgl",kernelFunc:S1};/**
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
 */const T1=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${wc};
  float a1 = ${Cc};
  float a2 = ${yc};
  float a3 = ${$c};
  float a4 = ${vc};
  float a5 = ${Sc};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,R1=B({opSnippet:T1}),E1={kernelName:rh,backendName:"webgl",kernelFunc:R1};/**
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
 */const k1=wn+`
  return exp(x);
`,N1=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Bu=B({opSnippet:k1,packedOpSnippet:N1,cpuKernelImpl:tb,dtype:"float32"}),A1={kernelName:Oo,backendName:"webgl",kernelFunc:Bu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function To(n){const{inputs:e,attrs:t,backend:s}=n,{dim:o}=t,{input:r}=e,a=r.shape.length,i=r.shape.slice();let c=o;return o<0&&(v(-(a+1)<=o,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),c=a+o+1),i.splice(c,0,1),E({inputs:{x:r},backend:s,attrs:{shape:i}})}const F1={kernelName:ah,backendName:"webgl",kernelFunc:To};/**
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
 */const Ra="return exp(x) - 1.0;",D1=B({opSnippet:Ra,packedOpSnippet:Ra,cpuKernelImpl:nb}),O1={kernelName:Po,backendName:"webgl",kernelFunc:D1};/**
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
 */class Ea{constructor(e,t,s){this.variableNames=["real","imag"];const o=t[1];this.outputShape=t;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=s?`${o}.0`:"1.0";let i;if(e==="real")i="return real * expR - imag * expI;";else if(e==="imag")i="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${r};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${i}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}/**
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
 */function Mu(n,e,t){const s=t.texData.get(n.dataId),o=I(n.shape),r=n.shape[n.shape.length-1],a=o/r,i=E({inputs:{x:n},backend:t,attrs:{shape:[a,r]}}),c=i.shape,l=new Ea("real",c,e),u=new Ea("imag",c,e),d=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:c},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:c}],h=t.runWebGLProgram(l,d,"float32"),f=t.runWebGLProgram(u,d,"float32"),p=xt({inputs:{real:h,imag:f},backend:t});t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(f);const x=E({inputs:{x:p},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(p),x}/**
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
 */function P1(n){const{inputs:e,backend:t}=n,{input:s}=e;return Mu(s,!1,t)}const _1={kernelName:ih,backendName:"webgl",kernelFunc:P1};/**
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
 * =============================================================================
 */class L1{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}/**
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
 */function es(n){const{backend:e,attrs:t}=n,{shape:s,value:o}=t;let{dtype:r}=t;if(r=r||an(o),r==="string"){const a=K(r,I(s));return a.fill(o),e.makeTensorInfo(s,r,a)}else{const a=new L1(s,o),i=[[o]];return e.runWebGLProgram(a,[],r,i)}}const B1={kernelName:Ya,backendName:"webgl",kernelFunc:es};/**
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
 */class M1{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
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
 */const V1={kernelName:ch,backendName:"webgl",kernelFunc:({inputs:n,backend:e})=>{const{image:t}=n,s=e,o=new M1(t.shape);return s.runWebGLProgram(o,[t],t.dtype)}};/**
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
 */const ka="return floor(x);",U1=B({opSnippet:ka,packedOpSnippet:ka,cpuKernelImpl:sb}),W1={kernelName:_o,backendName:"webgl",kernelFunc:U1};/**
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
 */const G1=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,z1=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,H1=se({opSnippet:G1,packedOpSnippet:z1,dtype:"int32"}),X1={kernelName:ks,backendName:"webgl",kernelFunc:H1};/**
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
 */class q1{constructor(e){this.variableNames=["A"];const t=de(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}/**
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
 */class j1{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=de(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${s}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}/**
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
 * =============================================================================
 */const K1={kernelName:kf,backendName:"webgl",kernelFunc:Y1};let Xt,Zs=y().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function Y1(n){const{inputs:e,backend:t,attrs:s}=n;let{pixels:o}=e;const{numChannels:r}=s,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,i=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[c,l]=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[l,c],d=[l,c,r];if(i||a){const x=y().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Xt==null||x!==Zs)&&(Zs=x,Xt=document.createElement("canvas").getContext("2d",{willReadFrequently:Zs})),Xt.canvas.width=c,Xt.canvas.height=l,Xt.drawImage(o,0,0,c,l),o=Xt.canvas}const h=t.makeTensorInfo(u,"int32");t.texData.get(h.dataId).usage=ye.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(h.dataId),o);const f=y().getBool("WEBGL_PACK")?new j1(d):new q1(d),p=t.runWebGLProgram(f,[h],"int32");return t.disposeData(h.dataId),p}/**
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
 */function Q1(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r,bias:a,preluActivationWeights:i}=e,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:h,activation:f,leakyreluAlpha:p}=s,x=dn(u),g=Ve(o.shape,r.shape,c,d,l,h,!1,x);let m;const b=[],w=a!=null,C=i!=null,$=f==="leakyrelu",R=()=>{const S=[o,r],D=(O,P)=>{if(P==="NCHW"&&O.shape.length===1&&O.shape[0]!==1){const M=E({inputs:{x:O},backend:t,attrs:{shape:[O.shape[0],1,1]}});return b.push(M),M}return O};if(w&&S.push(D(a,u)),C&&S.push(D(i,u)),$){const O=t.makeTensorInfo([],"float32",Lt(p,"float32"));S.push(O),b.push(O)}return S};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))m=Du({x:o,filter:r,convInfo:g,backend:t,bias:a,activation:f,preluActivationWeights:i,leakyreluAlpha:p});else if(g.strideWidth<=2&&x==="channelsLast"&&y().getBool("WEBGL_EXP_CONV")){const S=f?Mn(f,!0):null,D=new Fu(g,w,S,C,$),O=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],P=R();m=t.runWebGLProgram(D,P,"float32",O)}else if(y().getBool("WEBGL_CONV_IM2COL"))m=Ou({x:o,filter:r,convInfo:g,backend:t,bias:a,activation:f,preluActivationWeights:i,leakyreluAlpha:p});else{const S=f?Mn(f,!1):null,D=new Au(g,w,S,C,$),O=R();m=t.runWebGLProgram(D,O,"float32")}const T=E({inputs:{x:m},backend:t,attrs:{shape:g.outShape}});return b.push(m),b.forEach(S=>t.disposeIntermediateTensorInfo(S)),T}const Z1={kernelName:Ff,backendName:"webgl",kernelFunc:Q1};/**
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
 */function J1(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r,bias:a,preluActivationWeights:i}=e,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:h,leakyreluAlpha:f}=s,p=[];let x=u;x==null&&(x=[1,1]),v(un(c,x),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${x}'`);const g=Ve(o.shape,r.shape,c,x,l,d,!0),m=y().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=h?Mn(h,m):null,w=[o,r],C=a!=null,$=i!=null,R=h==="leakyrelu";if(C&&w.push(a),$&&w.push(i),R){const O=t.makeTensorInfo([],"float32",Lt(f,"float32"));w.push(O),p.push(O)}let T;m?T=new Lu(g,C,b,$,R):T=new _u(g,C,b,$,R);const S=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],D=t.runWebGLProgram(T,w,"float32",S);return p.forEach(O=>t.disposeIntermediateTensorInfo(O)),D}const e$={kernelName:Df,backendName:"webgl",kernelFunc:J1};class t${constructor(e,t,s,o){this.sliceDim=e,this.strides=t,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const r=U(s.length);let a=`
    int index;`;for(let i=0;i<this.sliceDim;i++)a+=`
          index = round(getIndices(coords[0], ${i}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[i]};
          flattenIndex += index * ${this.strides[i]};`;this.userCode=`
         void main() {
          ${r} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}/**
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
 */function n$(n){const{inputs:e,backend:t}=n,{params:s,indices:o}=e,r=o.shape,a=r[r.length-1],i=I(s.shape),[c,l,u,d]=cr(s,o),h=E({inputs:{x:o},backend:t,attrs:{shape:[l,a]}}),f=E({inputs:{x:s},backend:t,attrs:{shape:[I(s.shape)/u,u]}});if(t.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const m=t.readSync(o.dataId),b=t.bufferSync(s),w=ob(m,b,s.dtype,l,a,u,d,s.shape,i);return t.makeTensorInfo(c,s.dtype,w.values)}const p=new t$(a,d,[l,u],s.shape),x=t.runWebGLProgram(p,[f,h],f.dtype),g=E({inputs:{x},backend:t,attrs:{shape:c}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(x),g}const s$={kernelName:dh,backendName:"webgl",kernelFunc:n$};/**
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
 */class o${constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const s=U(this.rank),o=r$(e);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function r$(n,e){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<n.length;o++)o===2?s.push("index"):s.push(`${t[o]}`);return s.join()}/**
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
 */function Vu(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,indices:r}=e,{axis:a,batchDims:i}=s,c=ne(a,o.shape)[0];if(y().get("DEBUG")){const b=t.readSync(r.dataId),w=o.shape[c];for(let C=0;C<b.length;++C){const $=b[C];v($<=w-1&&$>=0,()=>`GatherV2: the index value ${$} is not in [0, ${w-1}]`)}}const l=zc(o,r,c,i),u=I(r.shape),d=[],h=E({inputs:{x:o},backend:t,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=E({inputs:{x:r},backend:t,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(h),d.push(f);const p=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(t.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const b=t.bufferSync(f),w=t.bufferSync(h),C=rb(w,b,p);return d.forEach($=>t.disposeIntermediateTensorInfo($)),t.makeTensorInfo(l.outputShape,C.dtype,C.values)}const x=new o$(h.shape,p),g=t.runWebGLProgram(x,[h,f],h.dtype);d.push(g);const m=E({inputs:{x:g},backend:t,attrs:{shape:l.outputShape}});return d.forEach(b=>t.disposeIntermediateTensorInfo(b)),m}const a$={kernelName:uh,backendName:"webgl",kernelFunc:Vu};/**
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
 */const i$="return float(a > b);",c$=`
  return vec4(greaterThan(a, b));
`,l$=se({opSnippet:i$,packedOpSnippet:c$,cpuKernelImpl:ab,dtype:"bool"}),u$={kernelName:Lo,backendName:"webgl",kernelFunc:l$};/**
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
 */const d$="return float(a >= b);",h$=`
  return vec4(greaterThanEqual(a, b));
`,f$=se({opSnippet:d$,packedOpSnippet:h$,dtype:"bool",cpuKernelImpl:ib}),p$={kernelName:Bo,backendName:"webgl",kernelFunc:f$};/**
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
 */function m$(n){const{inputs:e,backend:t}=n,{input:s}=e;return Mu(s,!0,t)}const g$={kernelName:hh,backendName:"webgl",kernelFunc:m$};/**
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
 */const x$="return float(!isnan(x) && !isinf(x));",b$=B({opSnippet:x$,dtype:"bool"}),w$={kernelName:ph,backendName:"webgl",kernelFunc:b$};/**
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
 */const C$="return float(isinf(x));",y$=B({opSnippet:C$,dtype:"bool"}),$$={kernelName:mh,backendName:"webgl",kernelFunc:y$};/**
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
 */const v$="return float(isnan(x));",S$=B({opSnippet:v$,dtype:"bool"}),I$={kernelName:gh,backendName:"webgl",kernelFunc:S$};/**
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
 */const T$="return float(a < b);",R$=`
  return vec4(lessThan(a, b));
`,E$=se({opSnippet:T$,packedOpSnippet:R$,cpuKernelImpl:cb,dtype:"bool"}),k$={kernelName:Mo,backendName:"webgl",kernelFunc:E$};/**
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
 */const N$="return float(a <= b);",A$=`
  return vec4(lessThanEqual(a, b));
`,F$=se({opSnippet:N$,packedOpSnippet:A$,cpuKernelImpl:lb,dtype:"bool"}),D$={kernelName:Vo,backendName:"webgl",kernelFunc:F$};/**
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
 */function O$(n){const{backend:e,attrs:t}=n,{start:s,stop:o,num:r}=t,a=ub(s,o,r);return e.makeTensorInfo([a.length],"float32",a)}const P$={kernelName:xh,backendName:"webgl",kernelFunc:O$};/**
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
 */const _$=wn+`
  return x < 0.0 ? 0./0. : log(x);
`,L$=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,B$=B({opSnippet:_$,packedOpSnippet:L$,cpuKernelImpl:db}),M$={kernelName:Uo,backendName:"webgl",kernelFunc:B$};/**
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
 */const V$=wn+`
  return log(1.0 + x);
`,U$=B({opSnippet:V$}),W$={kernelName:bh,backendName:"webgl",kernelFunc:U$};/**
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
 */const G$="return float(a >= 1.0 && b >= 1.0);",z$=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,H$=se({opSnippet:G$,packedOpSnippet:z$,dtype:"bool"}),X$={kernelName:wh,backendName:"webgl",kernelFunc:H$};/**
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
 */const q$="return float(!(x >= 1.0));",j$=B({opSnippet:q$}),K$={kernelName:Ch,backendName:"webgl",kernelFunc:j$};/**
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
 */const Y$="return float(a >= 1.0 || b >= 1.0);",Q$=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,Z$=se({opSnippet:Y$,packedOpSnippet:Q$,dtype:"bool"}),J$={kernelName:yh,backendName:"webgl",kernelFunc:Z$};/**
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
 */class ev{constructor(e,t,s,o,r){this.variableNames=["x"],this.outputShape=[];const a=t,i=e[3]-1;this.outputShape=e;let c;const l=`float(${s}) + float(${o}) * sum`;r===.5?c=`inversesqrt(${l})`:r===1?c=`1.0/(${l})`:c=`exp(log(${l}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${i}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${c};
        setOutput(val);
      }
    `}}/**
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
 * =============================================================================
 */class tv{constructor(e,t,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const a=t,i=e[3]-1;this.outputShape=e;let c;const l=`float(${s}) + float(${o}) * sum`;r===.5?c=`inversesqrt(${l})`:r===1?c=`1.0/(${l})`:c=`exp(log(${l}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${i}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${c};
        setOutput(result);
      }
    `}}/**
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
 */const nv=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{depthRadius:r,bias:a,alpha:i,beta:c}=s,l=y().getBool("WEBGL_PACK_NORMALIZATION")?new tv(o.shape,r,a,i,c):new ev(o.shape,r,a,i,c);return t.runWebGLProgram(l,[o],o.dtype)},sv={kernelName:$h,backendName:"webgl",kernelFunc:nv};/**
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
 */class ov{constructor(e,t,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${r})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${r});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}/**
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
 */const rv=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o,y:r,dy:a}=e,{depthRadius:i,bias:c,alpha:l,beta:u}=s,d=new ov(o.shape,i,c,l,u);return t.runWebGLProgram(d,[o,r,a],o.dtype)},av={kernelName:vh,backendName:"webgl",kernelFunc:rv};/**
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
 */function iv(n,e,t,s){const o=I(e),a=I(n.shape)/o,i=E({inputs:{x:n},attrs:{shape:[a,o]},backend:s}),c=Gt(i,n.dtype,"max",s),l=E({inputs:{x:c},attrs:{shape:t},backend:s});return s.disposeIntermediateTensorInfo(i),s.disposeIntermediateTensorInfo(c),l}/**
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
 */function Uu(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{reductionIndices:r,keepDims:a}=s,i=o.shape.length,c=ne(r,o.shape);let l=c;const u=Ie(l,i),d=u!=null,h=t.shouldExecuteOnCPU([o]);let f=o;if(d){if(h){const w=t.texData.get(f.dataId).values,C=new Array(i);for(let T=0;T<C.length;T++)C[T]=o.shape[u[T]];const $=kr(w,o.shape,o.dtype,u,C);f=t.makeTensorInfo(C,o.dtype);const R=t.texData.get(f.dataId);R.values=$}else f=Us(o,u,t);l=Te(l.length,i)}Ue("max",l,i);const[p,x]=Ke(f.shape,l);let g=p;a&&(g=Ye(p,c));let m;if(h){const w=t.texData.get(f.dataId).values,C=hb(w,I(x),g,o.dtype);m=t.makeTensorInfo(g,o.dtype);const $=t.texData.get(m.dataId);$.values=C}else m=iv(f,x,g,t);return d&&t.disposeIntermediateTensorInfo(f),m}const cv={kernelName:Sh,backendName:"webgl",kernelFunc:Uu};/**
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
 */const lv=Nr+`
  return max(a, b);
`,uv=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Wt+`
  return result;
`,dv=se({opSnippet:lv,packedOpSnippet:uv,cpuKernelImpl:fb}),hv={kernelName:As,backendName:"webgl",kernelFunc:dv};/**
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
 */function fv(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;fn(o,"maxPool");const{filterSize:r,strides:a,pad:i,dimRoundingMode:c}=s,l=1;v(un(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);const u=ln(o.shape,r,a,l,i,c);if(u.filterWidth===1&&u.filterHeight===1&&Q(u.inShape,u.outShape))return be({inputs:{x:o},backend:t});const d=new Vn(u,"max",!1);return t.runWebGLProgram(d,[o],o.dtype)}const pv={kernelName:Ih,backendName:"webgl",kernelFunc:fv};/**
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
 */function mv(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{filterSize:r,strides:a,pad:i,dataFormat:c,dimRoundingMode:l}=s,u=[1,1,1],d=qn(o.shape,r,a,u,i,l,c),h=new Fr(d,"max",!1);return t.runWebGLProgram(h,[o],o.dtype)}const gv={kernelName:Rh,backendName:"webgl",kernelFunc:mv};/**
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
 */class xv{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,s=e.strideWidth,o=e.dilationHeight,r=e.effectiveFilterHeight,a=e.effectiveFilterWidth,i=r-1-e.padInfo.top,c=a-1-e.padInfo.left,l=r*a-1;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${r};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${l} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class bv{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,s=e.strideHeight,o=e.strideWidth,r=e.dilationDepth,a=e.dilationHeight,i=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,d=c-1-e.padInfo.front,h=l-1-e.padInfo.top,f=u-1-e.padInfo.left,p=c*l*u-1;this.userCode=`
      const ivec3 pads = ivec3(${d}, ${h}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${c};
           wD += ${r}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${i}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */function wv(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,a=r,{filterSize:i,strides:c,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=qn(a.shape,i,c,d,l,u),f=new Fr(h,"max",!0),p=t.runWebGLProgram(f,[a],a.dtype),x=new bv(h),g=t.runWebGLProgram(x,[o,p],a.dtype);return t.disposeIntermediateTensorInfo(p),g}const Cv={kernelName:Eh,backendName:"webgl",kernelFunc:wv};/**
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
 */function yv(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r,output:a}=e,i=r;fn([r,a],"maxPoolGrad");const{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=s,h=ln(i.shape,c,l,1,u,d),f=!0,p=new Vn(h,"max",f),x=t.runWebGLProgram(p,[i],i.dtype),g=new xv(h),m=t.runWebGLProgram(g,[o,x],i.dtype);return t.disposeIntermediateTensorInfo(x),m}const $v={kernelName:Th,backendName:"webgl",kernelFunc:yv};/**
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
 */function vv(n,e,t,s){let o=new Vn(t,"max",!1);const r=s.runWebGLProgram(o,[n],"float32");o=new Vn(t,"max",!0,!0,e);const a=s.runWebGLProgram(o,[n],"float32");return[r,a]}/**
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
 */const Sv={kernelName:kh,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{filterSize:o,strides:r,pad:a,includeBatchInIndex:i}=e,c=t;v(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const l=[1,1];v(un(r,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${l}'`);const u=ln(s.shape,o,r,l,a),[d,h]=vv(s,i,u,c);return[d,h]}};/**
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
 */function Iv(n,e,t,s){const o=I(e),a=I(n.shape)/o,i=E({inputs:{x:n},attrs:{shape:[a,o]},backend:s}),c=Gt(i,"float32","mean",s),l=E({inputs:{x:c},attrs:{shape:t},backend:s});return s.disposeIntermediateTensorInfo(i),s.disposeIntermediateTensorInfo(c),l}/**
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
 */const Tv={kernelName:Nh,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{keepDims:o,axis:r}=e,a=t,i=s.shape.length,c=ne(r,s.shape);let l=c;const u=Ie(l,i),d=u!=null,h=a.shouldExecuteOnCPU([s]),f=[];let p=s;if(d){if(h){const C=a.texData.get(p.dataId).values,$=new Array(i);for(let S=0;S<$.length;S++)$[S]=s.shape[u[S]];const R=kr(C,s.shape,s.dtype,u,$);p=a.makeTensorInfo($,s.dtype);const T=a.texData.get(p.dataId);T.values=R}else p=Us(s,u,a);f.push(p),l=Te(l.length,i)}Ue("sum",l,i);const[x,g]=Ke(p.shape,l);let m=x;o&&(m=Ye(x,c));const b=Iv(p,g,m,a);for(const w of f)a.disposeIntermediateTensorInfo(w);return b}};/**
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
 */function Rv(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:a}=s,i=o.shape.length,c=ne(r,o.shape);let l=c;const u=Ie(l,i);let d=o;u!=null&&(d=ue({inputs:{x:o},backend:t,attrs:{perm:u}}),l=Te(l.length,o.shape.length)),Ue("min",l,i);const[h,f]=Ke(d.shape,l),p=I(f),x=E({inputs:{x:d},backend:t,attrs:{shape:[-1,p]}}),g=Gt(x,x.dtype,"min",t);let m;if(a){const b=Ye(h,c);m=E({inputs:{x:g},backend:t,attrs:{shape:b}})}else m=E({inputs:{x:g},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),u!=null&&t.disposeIntermediateTensorInfo(d),m}const Ev={kernelName:Ah,backendName:"webgl",kernelFunc:Rv};/**
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
 */const kv=Nr+`
  return min(a, b);
`,Nv=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Wt+`
  return result;
`,Av=se({opSnippet:kv,packedOpSnippet:Nv,cpuKernelImpl:pb}),Fv={kernelName:Wo,backendName:"webgl",kernelFunc:Av};/**
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
 */class Dv{constructor(e,t,s){this.variableNames=["x"],this.outputShape=t.map((u,d)=>u[0]+e[d]+u[1]);const o=e.length,r=U(o),a=t.map(u=>u[0]).join(","),i=t.map((u,d)=>u[0]+e[d]).join(","),c=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),l=s==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${a};
        int end = ${i};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${a});
      ${r} end = ${r}(${i});

      void main() {
        ${r} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${r} coords = outC - start;
        setOutput(getX(${c}));
      }
    `}}/**
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
 */class Ov{constructor(e,t,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((p,x)=>p[0]+e[x]+p[1]);const o=e.length,r=U(o),a=t.map(p=>p[0]).join(","),i=t.map((p,x)=>p[0]+e[x]).join(","),c=le("rc",o),l=le("source",o),u=`${c[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${l.slice(-2).join()})`,h=s==="reflect"?0:1;let f="";if(o===1){const p=`
        ${r} source = rc;
        if (source < start) {
          source = start * 2 - source - ${h};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${h};
        }
        source -= start;
      `;f=`
        ${r} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${c[o-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
      `}else{const p=`
        ${r} source = rc;
        ${r} lt = ${r}(lessThan(source, start));
        ${r} gte = ${r}(greaterThanEqual(source, end));
        ${r} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${h}) +
                gte * ((end - 1) * 2 - source + ${h});
        source -= start;
      `;f=`
        ${r} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${c[o-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
        rc = outputLoc;
        ${c[o-2]} += 1;
        if(${c[o-2]} < ${this.outputShape[o-2]}) {
          ${p}
          result[2] = getChannel(getX(${l.join()}), ${d});
          ${c[o-1]} += 1;
          if(${u}) {
            ${p}
            result[3] = getChannel(getX(${l.join()}), ${d});
          }
        }
      `}this.userCode=`
      const ${r} start = ${r}(${a});
      const ${r} end = ${r}(${i});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}/**
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
 */const Pv=({inputs:n,backend:e,attrs:t})=>{const{x:s}=n,{paddings:o,mode:r}=t,a=y().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ov(s.shape,o,r):new Dv(s.shape,o,r);return e.runWebGLProgram(a,[s],s.dtype)},_v={kernelName:Fh,backendName:"webgl",kernelFunc:Pv};/**
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
 */const Lv=`if (b == 0.0) return NAN;
  return mod(a, b);`,Bv=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Wt+`
  return result;
`,Mv=se({opSnippet:Lv,packedOpSnippet:Bv}),Vv={kernelName:Dh,backendName:"webgl",kernelFunc:Mv};/**
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
 */class Uv{constructor(e,t,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}/**
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
 */const Wv=`
if (a == b) {
  return 1.0;
};
return a / b;`,Gv=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,Wu=se({opSnippet:Wv,packedOpSnippet:Gv,checkOutOfBounds:!0}),zv={kernelName:ja,backendName:"webgl",kernelFunc:Wu};/**
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
 */const Na="return a - b;",Gu=se({opSnippet:Na,packedOpSnippet:Na,supportsComplex:!0,cpuKernelImpl:Pb}),Hv={kernelName:Ps,backendName:"webgl",kernelFunc:Gu};/**
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
 */function zu(n){const{inputs:e,backend:t,attrs:s}=n,{logits:o}=e,{dim:r}=s,a=ne([r],o.shape),i=Uu({inputs:{x:o},backend:t,attrs:{reductionIndices:a,keepDims:!1}}),c=Ye(i.shape,a),l=E({inputs:{x:i},backend:t,attrs:{shape:c}}),u=Gu({inputs:{a:o,b:l},backend:t}),d=Bu({inputs:{x:u},backend:t}),h=Ws({inputs:{x:d},backend:t,attrs:{axis:a,keepDims:!1}}),f=E({inputs:{x:h},backend:t,attrs:{shape:c}}),p=Wu({inputs:{a:d,b:f},backend:t});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(f),p}const Xv={kernelName:df,backendName:"webgl",kernelFunc:zu};/**
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
 */function qv(n){const{inputs:e,backend:t,attrs:s}=n,{logits:o}=e,{numSamples:r,seed:a,normalized:i}=s,c=i?o:zu({inputs:{logits:o},backend:t,attrs:{dim:o.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new Uv(l,u,r),h=[[a]],f=t.runWebGLProgram(d,[c],"int32",h);return i||t.disposeIntermediateTensorInfo(c),f}const jv={kernelName:Oh,backendName:"webgl",kernelFunc:qv};/**
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
 */const Kv=Oe+`
  return -x;
`,Yv=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function Qv(n){const{inputs:e,backend:t}=n,{x:s}=e;if(t.shouldExecuteOnCPU([s])){const r=t.texData.get(s.dataId),[a,i]=gb(r.values,s.shape,s.dtype);return t.makeTensorInfo(i,s.dtype,a)}let o;return y().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new it(s.shape,Yv):o=new We(s.shape,Kv),t.runWebGLProgram(o,[s],s.dtype)}const Zv={kernelName:Za,backendName:"webgl",kernelFunc:Qv};/**
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
 */const Jv=Mm;function eS(n){Ne("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c}=s,l=t.readSync(o.dataId),u=t.readSync(r.dataId),{selectedIndices:d}=Jv(l,u,a,i,c);return t.makeTensorInfo([d.length],"int32",new Int32Array(d))}const tS={kernelName:Ph,backendName:"webgl",kernelFunc:eS};/**
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
 */const nS=Vm;function sS(n){Ne("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c,padToMaxOutputSize:l}=s,u=t.readSync(o.dataId),d=t.readSync(r.dataId),{selectedIndices:h,validOutputs:f}=nS(u,d,a,i,c,l);return[t.makeTensorInfo([h.length],"int32",new Int32Array(h)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}const oS={kernelName:_h,backendName:"webgl",kernelFunc:sS};/**
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
 */const rS=Um;function aS(n){Ne("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c,softNmsSigma:l}=s,u=t.readSync(o.dataId),d=t.readSync(r.dataId),h=a,f=i,p=c,x=l,{selectedIndices:g,selectedScores:m}=rS(u,d,h,f,p,x);return[t.makeTensorInfo([g.length],"int32",new Int32Array(g)),t.makeTensorInfo([m.length],"float32",new Float32Array(m))]}const iS={kernelName:Lh,backendName:"webgl",kernelFunc:aS};/**
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
 */class cS{constructor(e,t,s,o){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}/**
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
 */const lS=n=>{const{inputs:e,backend:t,attrs:s}=n,{indices:o}=e,{dtype:r,depth:a,onValue:i,offValue:c}=s,l=I(o.shape),u=new cS(l,a,i,c),d=E({inputs:{x:o},backend:t,attrs:{shape:[l]}}),h=t.runWebGLProgram(u,[d],r);t.disposeIntermediateTensorInfo(d);const f=[...o.shape,a],p=E({inputs:{x:h},backend:t,attrs:{shape:f}});return t.disposeIntermediateTensorInfo(h),p},uS={kernelName:Mh,backendName:"webgl",kernelFunc:lS};/**
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
 */function Is(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="complex64"){const o=Jn({inputs:{input:s},backend:t}),r=Is({inputs:{x:o},backend:t}),a=Gs({inputs:{input:s},backend:t}),i=Is({inputs:{x:a},backend:t}),c=xt({inputs:{real:r,imag:i},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(i),c}else return es({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:t})}const dS={kernelName:ui,backendName:"webgl",kernelFunc:Is};/**
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
 */function Hu(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=Jn({inputs:{input:s},backend:t}),r=Hu({inputs:{x:o},backend:t}),a=Gs({inputs:{input:s},backend:t}),i=Is({inputs:{x:a},backend:t}),c=xt({inputs:{real:r,imag:i},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(i),c}else return es({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:t})}const hS={kernelName:Bh,backendName:"webgl",kernelFunc:Hu};/**
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
 */function fS(n){const{inputs:e,backend:t,attrs:s}=n,{axis:o}=s;if(e.length===1)return To({inputs:{input:e[0]},backend:t,attrs:{dim:o}});const r=e[0].shape,a=e[0].dtype;e.forEach(u=>{rn(r,u.shape,"All tensors passed to stack must have matching shapes"),v(a===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const i=[],c=e.map(u=>{const d=To({inputs:{input:u},backend:t,attrs:{dim:o}});return i.push(d),d}),l=Nu({inputs:c,backend:t,attrs:{axis:o}});return i.forEach(u=>t.disposeIntermediateTensorInfo(u)),l}const pS={kernelName:Vh,backendName:"webgl",kernelFunc:fS};/**
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
 */class mS{constructor(e,t,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((l,u)=>l[0]+e[u]+l[1]);const o=e.length,r=U(o),a=t.map(l=>l[0]).join(","),i=t.map((l,u)=>l[0]+e[u]).join(","),c=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${a};
        int end = ${i};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${a});
      ${r} end = ${r}(${i});

      void main() {
        ${r} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${r} coords = outC - start;
          setOutput(getX(${c}));
        }
      }
    `}}/**
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
 * =============================================================================
 */class gS{constructor(e,t,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((x,g)=>x[0]+e[g]+x[1]);const o=e.length,r=U(o),a=t.map(x=>x[0]).join(","),i=t.map((x,g)=>x[0]+e[g]).join(","),c=le("rc",o),l=le("source",o),u=`${c[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${l.slice(-2).join()})`,h=[`${r} rc = outputLoc;`,`${c[o-1]} += 1;
       if(${u}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${c[o-2]} += 1;
       if(${c[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${c[o-1]} += 1;
         if(${u}) {`],f=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let p="";for(let x=0,g=o===1?2:4;x<g;x++)p+=`
        ${h[x]}
        if (${f}) {
          result[${x}] = float(value);
        } else {
          ${r} source = rc - start;
          result[${x}] = getChannel(getX(${l.join()}), ${d});
        }
      `;p+=o===1?"} ":"}}",this.userCode=`
      const ${r} start = ${r}(${a});
      const ${r} end = ${r}(${i});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}/**
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
 */const Xu=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{paddings:r,constantValue:a}=s;if(I(o.shape)===0){const l=r.map((u,d)=>u[0]+o.shape[d]+u[1]);return es({backend:t,attrs:{shape:l,value:a,dtype:o.dtype}})}const i=y().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new gS(o.shape,r,a):new mS(o.shape,r,a),c=[[a]];return t.runWebGLProgram(i,[o],o.dtype,c)},xS={kernelName:Uh,backendName:"webgl",kernelFunc:Xu};/**
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
 */const bS=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,wS=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+Wt+`
  return result;
`,CS=se({opSnippet:bS,packedOpSnippet:wS}),yS={kernelName:Ja,backendName:"webgl",kernelFunc:CS};/**
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
 */function $S(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:a}=s,i=o.shape.length,c=[],l=ne(r,o.shape);let u=l;const d=Ie(u,i);let h=o;d!=null&&(h=ue({inputs:{x:o},backend:t,attrs:{perm:d}}),u=Te(u.length,i),c.push(h)),Ue("prod",u,i);let f;if(t.shouldExecuteOnCPU([h])){const p=t.texData.get(h.dataId).values,{outVals:x,outShape:g,outDtype:m}=bb(h.shape,h.dtype,p,u);f=t.makeTensorInfo(g,m,x)}else{const[p,x]=Ke(h.shape,u),g=I(x),m=E({inputs:{x:h},backend:t,attrs:{shape:[-1,g]}}),b=Ko(o.dtype),w=Gt(m,b,"prod",t);f=E({inputs:{x:w},backend:t,attrs:{shape:p}}),c.push(m),c.push(w)}if(a){c.push(f);const p=Ye(f.shape,l);f=E({inputs:{x:f},backend:t,attrs:{shape:p}})}return c.forEach(p=>t.disposeIntermediateTensorInfo(p)),f}const vS={kernelName:ti,backendName:"webgl",kernelFunc:$S};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */function SS(n){const{inputs:e,backend:t,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:a}=e,{outputRaggedRank:i}=s,c=o.map(m=>t.readSync(m.dataId)),l=o.map(m=>m.shape),u=t.readSync(r.dataId),d=t.readSync(a.dataId),[h,f,p]=wb(c,l,u,r.shape,r.dtype,d,a.shape,i),x=h.map(m=>t.makeTensorInfo([m.length],"int32",m)),g=t.makeTensorInfo(p,r.dtype,f);return x.concat([g])}const IS={kernelName:Wh,backendName:"webgl",kernelFunc:SS};/**
 * @license
 * Copyright 2022 Google LLC.
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
 */function TS(n){const{inputs:e,backend:t}=n,{starts:s,limits:o,deltas:r}=e,a=t.readSync(s.dataId),i=t.readSync(o.dataId),c=t.readSync(r.dataId),[l,u]=Cb(a,s.shape,s.dtype,i,o.shape,c,r.shape),d=t.makeTensorInfo([l.length],"int32",l),h=t.makeTensorInfo([u.length],s.dtype,u);return[d,h]}const RS={kernelName:Gh,backendName:"webgl",kernelFunc:TS};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */function ES(n){const{inputs:e,backend:t,attrs:s}=n,{shape:o,values:r,defaultValue:a,rowPartitionTensors:i}=e,{rowPartitionTypes:c}=s,l=t.readSync(o.dataId),u=t.readSync(r.dataId),d=t.readSync(a.dataId),h=i.map(g=>t.readSync(g.dataId)),f=i.map(g=>g.shape),[p,x]=yb(l,o.shape,u,r.shape,r.dtype,d,a.shape,h,f,c);return t.makeTensorInfo(p,r.dtype,x)}const kS={kernelName:zh,backendName:"webgl",kernelFunc:ES};/**
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
 */const qu=n=>{const{backend:e,attrs:t}=n,{start:s,stop:o,step:r,dtype:a}=t,i=$b(s,o,r,a);return e.makeTensorInfo([i.length],a,i)},NS={kernelName:Hh,backendName:"webgl",kernelFunc:qu};/**
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
 */const AS="return 1.0 / x;",FS=B({opSnippet:AS}),DS={kernelName:Xh,backendName:"webgl",kernelFunc:FS};/**
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
 */const OS=Oe+`
  return (x < 0.0) ? 0.0 : x;
`,PS=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,_S=B({opSnippet:OS,packedOpSnippet:PS}),LS={kernelName:si,backendName:"webgl",kernelFunc:_S};/**
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
 */const BS=Oe+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,MS=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,VS=B({opSnippet:BS,packedOpSnippet:MS}),US={kernelName:ri,backendName:"webgl",kernelFunc:VS};/**
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
 */class WS{constructor(e,t,s,o,r){this.variableNames=["A"],this.outputShape=[];const[a,i,c,l]=e;this.outputShape=[a,t,s,l];const u=[o&&t>1?i-1:i,o&&s>1?c-1:c],d=[o&&t>1?t-1:t,o&&s>1?s-1:s];let h;r?h="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${i}.0, ${c}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}/**
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
 * =============================================================================
 */class GS{constructor(e,t,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[a,i,c,l]=e;this.outputShape=[a,t,s,l];const u=[o&&t>1?i-1:i,o&&s>1?c-1:c],d=[o&&t>1?t-1:t,o&&s>1?s-1:s];let h;r?h="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${i}.0, ${c}.0,
                                     ${c}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}/**
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
 */function zS(n){const{inputs:e,backend:t,attrs:s}=n,{images:o}=e,{alignCorners:r,halfPixelCenters:a,size:i}=s,[c,l]=i,u=y().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new GS(o.shape,c,l,r,a):new WS(o.shape,c,l,r,a);return t.runWebGLProgram(u,[o],"float32")}const HS={kernelName:Kh,backendName:"webgl",kernelFunc:zS};/**
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
 */class XS{constructor(e,t,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,o,r]=t,[,a,i]=e,c=[s&&a>1?o-1:o,s&&i>1?r-1:r],l=[s&&a>1?a-1:a,s&&i>1?i-1:i],u=c[0]/l[0],d=c[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,x=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${x});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${i}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
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
 */function qS(n){const{inputs:e,backend:t,attrs:s}=n,{images:o,dy:r}=e,{alignCorners:a}=s,i=new XS(r.shape,o.shape,a);return t.runWebGLProgram(i,[r],r.dtype)}const jS={kernelName:Yh,backendName:"webgl",kernelFunc:qS};/**
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
 */class KS{constructor(e,t,s,o,r){this.variableNames=["A"],this.outputShape=[];const[a,i,c,l]=e;this.outputShape=[a,t,s,l];const u=[o&&t>1?i-1:i,o&&s>1?c-1:c],d=[o&&t>1?t-1:t,o&&s>1?s-1:s],h=o?"0.5":"0.0";let f;r?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${i}.0, ${c}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}/**
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
 * =============================================================================
 */class YS{constructor(e,t,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[a,i,c,l]=e;this.outputShape=[a,t,s,l];const u=[o&&t>1?i-1:i,o&&s>1?c-1:c],d=[o&&t>1?t-1:t,o&&s>1?s-1:s],h=o?"0.5":"0.0";let f;r?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${i}.0, ${c}.0,
                                     ${c}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}/**
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
 */function QS(n){const{inputs:e,backend:t,attrs:s}=n,{images:o}=e,{alignCorners:r,halfPixelCenters:a,size:i}=s,[c,l]=i,u=y().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new YS(o.shape,c,l,r,a):new KS(o.shape,c,l,r,a);return t.runWebGLProgram(u,[o],o.dtype)}const ZS={kernelName:qh,backendName:"webgl",kernelFunc:QS};/**
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
 */class JS{constructor(e,t,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,o,r]=t,[,a,i]=e,c=[s&&a>1?o-1:o,s&&i>1?r-1:r],l=[s&&a>1?a-1:a,s&&i>1?i-1:i],u=c[0]/l[0],d=c[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,x=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${x});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${i}) {
              continue;
            }

            float sourceFracRow =
              float(${c[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${c[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
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
 */function eI(n){const{inputs:e,backend:t,attrs:s}=n,{images:o,dy:r}=e,{alignCorners:a}=s,i=new JS(r.shape,o.shape,a);return t.runWebGLProgram(i,[r],r.dtype)}const tI={kernelName:jh,backendName:"webgl",kernelFunc:eI};/**
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
 */class nI{constructor(e,t){this.variableNames=["x"];const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=e,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const o=i=>t.indexOf(i)!==-1&&e[i]!==1?`${e[i]} - coords[${i}] - 1`:`coords[${i}]`,r=e.map((i,c)=>o(c)).join(","),a=U(s);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}/**
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
 * =============================================================================
 */class sI{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=e;const o=le("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,a=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,i=U(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${r}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${i} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${c(o.slice())};
          if(${r}){
            result.g = ${l(o.slice())};
          }
          if(${a}) {
            result.b = ${u(o.slice())};
            if(${r}) {
              result.a = ${d(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function c(p){return h(p)}function l(p){return p[s-1]="("+p[s-1]+" + 1)",h(p)}function u(p){return p[s-2]="("+p[s-2]+" + 1)",h(p)}function d(p){return p[s-1]="("+p[s-1]+" + 1)",p[s-2]="("+p[s-2]+" + 1)",h(p)}function h(p){const x=e.map((b,w)=>f(w,p)),g=x.join(","),m=x.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${m}))`}function f(p,x){return t.indexOf(p)!==-1&&e[p]!==1?`${e[p]} - ${x[p]} - 1`:`${x[p]}`}}}/**
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
 */function oI(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dims:r}=s,a=o.shape.length,i=ne(r,o.shape);if(a===0)return be({inputs:{x:o},backend:t});const c=y().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sI(o.shape,i):new nI(o.shape,i);return t.runWebGLProgram(c,[o],o.dtype)}const rI={kernelName:Qh,backendName:"webgl",kernelFunc:oI};/**
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
 */class aI{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=e[1],o=e[2];this.outputShape=e;let r="";typeof t=="number"?r=`float outputValue = ${t.toFixed(2)};`:r=`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${r}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
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
 */const iI={kernelName:Nf,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:s}=n,{radians:o,fillValue:r,center:a}=e,i=t,c=new aI(s.shape,r),[l,u]=pc(a,s.shape[1],s.shape[2]),d=[[l,u,Math.sin(o),Math.cos(o)]];return i.runWebGLProgram(c,[s],s.dtype,d)}};/**
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
 */const cI=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,lI=B({opSnippet:cI}),uI={kernelName:Zh,backendName:"webgl",kernelFunc:lI};/**
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
 */const dI="return inversesqrt(x);",hI=B({opSnippet:dI,cpuKernelImpl:vb}),fI={kernelName:zo,backendName:"webgl",kernelFunc:hI};/**
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
 */class Dr{constructor(e,t,s,o,r,a,i=!0,c=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;const l=U(r.length),u=U(a.length);let d="";s===1?d="i":s===2&&(d="i, j");const h=`getIndices(${d})`;let f="";o===1?f="i":o===2&&(f="i, coords[1]");const p=`getUpdates(${f})`;let x="";c&&(x="coords[0], coords[1]");const g=`getDefaultValue(${x})`,m=t>1?"strides[j]":"strides";this.userCode=`
        ${l} strides = ${l}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${h});
              flattenedIndex += index * ${m};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}}/**
 * @license
 * Copyright 2023 Google LLC.
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
 */class pI{constructor(e,t,s,o,r,a,i=!0,c=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a;const l=U(r.length),u=U(a.length);let d="";s===1?d="i":s===2&&(d="i, j");const h=`getIndices(${d})`;let f="";o===1?f="i":o===2&&(f="i, coords[1]");const p=`getUpdates(${f})`;let x="";c&&(x="coords[0], coords[1]");const g=`getDefaultValue(${x})`,m=t>1?"strides[j]":"strides",b=t>1?"strides[j + 1]":"strides";this.userCode=`
        ${l} strides = ${l}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${h});
              flattenedIndex += index.xz * ${m};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${b};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${p};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${g}, sum, found));
        }
      `}}/**
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
 */function mI(n){const{inputs:e,backend:t,attrs:s}=n,{indices:o,updates:r}=e,{shape:a}=s,{sliceRank:i,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=Kn(r,o,a),h=[d/l,l];if(d===0)return t.makeTensorInfo(a,o.dtype);const f=E({inputs:{x:o},backend:t,attrs:{shape:[c,i]}}),p=E({inputs:{x:r},backend:t,attrs:{shape:[c,l]}}),x=t.makeTensorInfo([],"float32",new Float32Array([0]));let g;y().getBool("WEBGL_PACK")?g=new pI(c,i,f.shape.length,p.shape.length,u,h):g=new Dr(c,i,f.shape.length,p.shape.length,u,h);const m=t.runWebGLProgram(g,[p,f,x],p.dtype),b=E({inputs:{x:m},backend:t,attrs:{shape:a}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(x),b}const gI={kernelName:Jh,backendName:"webgl",kernelFunc:mI};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */class xI{constructor(e,t,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,s];const r="while (left < right) {",a=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,i=y().getNumber("WEBGL_VERSION")===2?r:a,c=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${i}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${c} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */function bI(n){const{inputs:e,backend:t,attrs:s}=n,{sortedSequence:o,values:r}=e,{side:a}=s,i=new xI(o.shape[0],o.shape[1],r.shape[1],a),c=[[o.shape[1]]];return t.runWebGLProgram(i,[o,r],"int32",c)}const wI={kernelName:tf,backendName:"webgl",kernelFunc:bI};/**
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
 */class CI{constructor(e,t,s){this.variableNames=["c","a","b"],this.outputShape=t;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const i=["resRC.x","resRC.y","resRC.z","resRC.w"],c=[],l=[];for(let u=0;u<t.length;u++)l.push(`${i[u]}`),u<e&&c.push(`${i[u]}`);o=c.join(),r=l.join()}const a=U(s);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}/**
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
 */function yI(n){const{inputs:e,backend:t}=n,{condition:s,t:o,e:r}=e,a=new CI(s.shape.length,o.shape,o.shape.length);return t.runWebGLProgram(a,[s,o,r],qe(o.dtype,r.dtype))}const $I={kernelName:nf,backendName:"webgl",kernelFunc:yI};/**
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
 */const vI=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${xc};
  float scale = ${bc};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,SI=B({opSnippet:vI}),II={kernelName:sf,backendName:"webgl",kernelFunc:SI};/**
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
 */const TI=wn+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,RI=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,EI=B({opSnippet:TI,packedOpSnippet:RI,cpuKernelImpl:Ib}),kI={kernelName:Ds,backendName:"webgl",kernelFunc:EI};/**
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
 */const NI=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,AI=B({opSnippet:NI}),FI={kernelName:af,backendName:"webgl",kernelFunc:AI};/**
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
 */const DI=wn+`
  return sin(x);
`,OI=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Wt}
  return result;
`,PI=B({opSnippet:DI,packedOpSnippet:OI}),_I={kernelName:of,backendName:"webgl",kernelFunc:PI};/**
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
 */const LI=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,BI=B({opSnippet:LI}),MI={kernelName:rf,backendName:"webgl",kernelFunc:BI};/**
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
 */const VI=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,UI=B({opSnippet:VI}),WI={kernelName:cf,backendName:"webgl",kernelFunc:UI};/**
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
 */const GI=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockShape:r,paddings:a}=s;v(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const i=r.reduce((m,b)=>m*b),c=[[0,0]];c.push(...a);for(let m=1+r.length;m<o.shape.length;++m)c.push([0,0]);const l=[],u=Xu({inputs:{x:o},backend:t,attrs:{paddings:c,constantValue:0}}),d=pr(u.shape,r,i,!1),h=mr(d.length,r.length,!1),f=gr(u.shape,r,i,!1),p=E({inputs:{x:u},backend:t,attrs:{shape:d}}),x=ue({inputs:{x:p},backend:t,attrs:{perm:h}}),g=E({inputs:{x},backend:t,attrs:{shape:f}});return l.push(u),l.push(p),l.push(x),l.forEach(m=>t.disposeIntermediateTensorInfo(m)),g},zI={kernelName:lf,backendName:"webgl",kernelFunc:GI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function HI(n){const{inputs:e,backend:t}=n,{indices:s,values:o,denseShape:r,defaultValue:a}=e;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(a.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${a.shape}`);const i=t.readSync(s.dataId),c=t.readSync(o.dataId),l=t.readSync(r.dataId),u=t.readSync(a.dataId)[0],[d,h,f,p,x]=Rb(i,s.shape,s.dtype,c,o.dtype,l,u);return[t.makeTensorInfo(h,s.dtype,d),t.makeTensorInfo([h[0]],o.dtype,f),t.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),t.makeTensorInfo([x.length],s.dtype,new Int32Array(x))]}const XI={kernelName:hf,backendName:"webgl",kernelFunc:HI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function qI(n){const{inputs:e,backend:t}=n,{inputIndices:s,inputShape:o,newShape:r}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const a=Array.from(t.readSync(o.dataId)),i=t.readSync(s.dataId),c=Array.from(t.readSync(r.dataId)),[l,u,d]=Eb(i,s.shape,s.dtype,a,c);return[t.makeTensorInfo(u,s.dtype,l),t.makeTensorInfo([d.length],r.dtype,new Int32Array(d))]}const jI={kernelName:ff,backendName:"webgl",kernelFunc:qI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function KI(n){const{inputs:e,backend:t}=n,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const a=t.readSync(s.dataId),i=t.readSync(o.dataId),c=t.readSync(r.dataId),[l,u]=gu(a,s.shape,s.dtype,i,c,!0);return t.makeTensorInfo(u,s.dtype,l)}const YI={kernelName:pf,backendName:"webgl",kernelFunc:KI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function QI(n){const{inputs:e,backend:t}=n,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const a=t.readSync(s.dataId),i=t.readSync(o.dataId),c=t.readSync(r.dataId),[l,u]=gu(a,s.shape,s.dtype,i,c);return t.makeTensorInfo(u,s.dtype,l)}const ZI={kernelName:mf,backendName:"webgl",kernelFunc:QI};/**
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
 */function JI(n){const{inputs:e,backend:t,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:a}=e,{outputShape:i}=s,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:h}=Kn(r,o,i),f=!1;if(r.dtype==="string"){const m=t.bufferSync(o),b=t.bufferSync(r),w=Tt(t.readSync(a.dataId)[0]),C=Sb(m,b,i,h,u,l,c,d,w,f);return t.makeTensorInfo(i,C.dtype,C.values)}const p=new Dr(l,c,o.shape.length,r.shape.length,d,[h,1],f),x=t.runWebGLProgram(p,[r,o,a],r.dtype),g=E({inputs:{x},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(x),g}const eT={kernelName:gf,backendName:"webgl",kernelFunc:JI};/**
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
 */function tT(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{numOrSizeSplits:r,axis:a}=s,i=ne(a,o.shape)[0],c=Nc(o,r,i),l=o.shape.length,u=new Array(l).fill(0),d=o.shape.slice();return c.map(h=>{const f=[...d];f[i]=h;const p=Cn({inputs:{x:o},backend:t,attrs:{begin:u,size:f}});return u[i]+=h,p})}const nT={kernelName:uf,backendName:"webgl",kernelFunc:tT};/**
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
 */const Aa="return sqrt(x);",sT=B({opSnippet:Aa,packedOpSnippet:Aa,cpuKernelImpl:kb}),oT={kernelName:Os,backendName:"webgl",kernelFunc:sT};/**
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
 * =============================================================================
 */const rT="return x * x;",aT=B({opSnippet:rT}),iT={kernelName:xf,backendName:"webgl",kernelFunc:aT};/**
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
 */const Fa="return (a - b) * (a - b);",cT=se({opSnippet:Fa,packedOpSnippet:Fa}),lT={kernelName:Ho,backendName:"webgl",kernelFunc:cT};/**
 * @license
 * Copyright 2023 Google LLC.
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
 */function uT(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");const r=t.readSync(o.dataId),a=et(r),i=Nb(a,"string",s);return t.makeTensorInfo(o.shape,"string",i)}const dT={kernelName:Xo,backendName:"webgl",kernelFunc:uT};/**
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
 */function hT({inputs:n,attrs:e,backend:t}){const{x:s}=n,o=Oe+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,r=new We(s.shape,o);return t.runWebGLProgram(r,[s],s.dtype)}const fT={kernelName:di,backendName:"webgl",kernelFunc:hT};/**
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
 */class pT{constructor(e,t,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=U(s.length),a=U(s.length);let i="";if(o===1)i="coords * strides + begin";else{let c=0;i=s.map((l,u)=>(c++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${c-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${e});
      ${r} strides = ${r}(${t});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}}/**
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
 */function mT(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:r,end:a,strides:i,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:h}=s,{finalShapeSparse:f,finalShape:p,isIdentity:x,sliceDim0:g,isSimpleSlice:m,begin:b,end:w,strides:C}=cc(o.shape,r,a,i,c,l,u,d,h);let $;if(x)$=E({inputs:{x:o},backend:t,attrs:{shape:p}});else if(g||m){v(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const T=Ji(b,w,C),S=Cn({inputs:{x:o},backend:t,attrs:{begin:b,size:T}});$=E({inputs:{x:S},backend:t,attrs:{shape:p}}),t.disposeIntermediateTensorInfo(S)}else if(t.shouldExecuteOnCPU([o])){const S=t.readSync(o.dataId),D=te(o.shape,o.dtype,S),O=Ab(f,D,C,b);$=t.makeTensorInfo(p,o.dtype,O.values)}else{const S=new pT(b,C,f);$=t.runWebGLProgram(S,[o],o.dtype)}const R=E({inputs:{x:$},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo($),R}const gT={kernelName:bf,backendName:"webgl",kernelFunc:mT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function xT(n){const{inputs:e,backend:t,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:a,rightPad:i,padWidth:c,preserveShortSequences:l}=s,{data:u,dataSplits:d}=e,h=t.readSync(u.dataId),f=t.readSync(d.dataId),[p,x]=Fb(h,f,o,r,a,i,c,l);return[t.makeTensorInfo([p.length],"string",p),t.makeTensorInfo(d.shape,"int32",x)]}const bT={kernelName:wf,backendName:"webgl",kernelFunc:xT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function wT(n){const{inputs:e,backend:t,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:a}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(a.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${a.shape}`);const i=t.readSync(r.dataId),c=t.readSync(a.dataId)[0],[l,u,d]=Db(i,c,o),h=u.length;return[t.makeTensorInfo([h,2],"int32",l),t.makeTensorInfo([h],"string",u),t.makeTensorInfo([2],"int32",new Int32Array(d))]}const CT={kernelName:Cf,backendName:"webgl",kernelFunc:wT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function yT(n){const{inputs:e,backend:t,attrs:s}=n,{numBuckets:o}=s,{input:r}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const a=t.readSync(r.dataId),i=Ob(a,o);return t.makeTensorInfo(r.shape,"int32",i)}const $T={kernelName:yf,backendName:"webgl",kernelFunc:yT};/**
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
 */const vT="return tan(x);",ST=B({opSnippet:vT}),IT={kernelName:$f,backendName:"webgl",kernelFunc:ST};/**
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
 */const TT=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,RT=B({opSnippet:TT}),ET={kernelName:vf,backendName:"webgl",kernelFunc:RT};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
 */function kT(n){const{inputs:e,backend:t,attrs:s}=n,{tensor:o,indices:r,updates:a}=e,{sliceRank:i,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=Kn(a,r,o.shape),h=[d/l,l];if(d===0)return t.makeTensorInfo(o.shape,r.dtype);const f=E({inputs:{x:r},backend:t,attrs:{shape:[c,i]}}),p=E({inputs:{x:a},backend:t,attrs:{shape:[c,l]}}),x=E({inputs:{x:o},backend:t,attrs:{shape:h}}),g=new Dr(c,i,f.shape.length,p.shape.length,u,h,!1,!0),m=t.runWebGLProgram(g,[p,f,x],x.dtype),b=E({inputs:{x:m},backend:t,attrs:{shape:o.shape}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(m),b}const NT={kernelName:ef,backendName:"webgl",kernelFunc:kT};/**
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
 */class AT{constructor(e,t){this.variableNames=["A"];const s=new Array(e.length);for(let a=0;a<s.length;a++)s[a]=e[a]*t[a];this.outputShape=s,this.rank=s.length;const o=U(this.rank),r=FT(e);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function FT(n){const e=n.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${n[0]})`;const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<n.length;o++)s.push(`imod(${t[o]}, ${n[o]})`);return s.join()}/**
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
 */function ju(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const c=t.readSync(o.dataId),l=o.dtype==="string"?c.map(h=>Tt(h)):c,u=te(o.shape,o.dtype,l),d=_b(u,r);return t.makeTensorInfo(d.shape,d.dtype,d.values)}const a=new AT(o.shape,r);return t.runWebGLProgram(a,[o],o.dtype)}const DT={kernelName:ci,backendName:"webgl",kernelFunc:ju};class OT{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class PT{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}/**
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
 */function bt(n,e){e!==null&&n.disposeIntermediateTensorInfo(e)}function Da(n){let e=1;for(;e<n;)e*=2;return e}function _T(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{k:r,sorted:a}=s,i=y().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),c=y().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=o.shape,u=l[l.length-1];if(t.shouldExecuteOnCPU([o])||u<i||r>c){const O=t.readSync(o.dataId),[P,M]=Lb(O,l,o.dtype,r,a);return[t.makeTensorInfo(P.shape,P.dtype,P.values),t.makeTensorInfo(M.shape,M.dtype,M.values)]}if(r===0)return l[l.length-1]=0,[t.makeTensorInfo(l,o.dtype,[]),t.makeTensorInfo(l,"int32",[])];if(u===1)return[o,es({attrs:{shape:l,dtype:"int32",value:0},backend:t})];const d=t.texData.get(o.dataId),h=d!==null&&d.isPacked,f=h?t.unpackTensor(o):o,x=I(l)/u,g=E({inputs:{x:f},attrs:{shape:[x,u]},backend:t});h&&bt(t,f);const m=Da(r),b=Da(u);let w=null;const C=()=>w===null?[g,g]:[g,w],$=(O,P,M)=>{const me=C(),Z=new OT(M),Re=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[O],[P]],Pe=w;w=t.runWebGLProgram(Z,me,"int32",Re),bt(t,Pe)};for(let O=1;O<m;O*=2){const P=O*2;for(let M=O;M>=1;M/=2)$(P,M,[x,b])}for(let O=b;O>m;O/=2){const P=C(),M=new PT([x,O/2]),Z=[[u],[w===null?1:0],[m]],oe=w;w=t.runWebGLProgram(M,P,"int32",Z),bt(t,oe);const Re=m/2,Pe=Re*2;for(let ae=Re;ae>=1;ae/=2)$(Pe,ae,w.shape)}let R=w;w=Cn({inputs:{x:w},backend:t,attrs:{begin:0,size:[x,r]}}),bt(t,R);let T=Vu({inputs:{x:g,indices:w},backend:t,attrs:{axis:1,batchDims:1}});bt(t,g);const S=l.slice(0,-1);S.push(r),R=w,w=E({inputs:{x:w},attrs:{shape:S},backend:t}),bt(t,R);const D=T;return T=E({inputs:{x:T},attrs:{shape:S},backend:t}),bt(t,D),[T,w]}const LT={kernelName:Sf,backendName:"webgl",kernelFunc:_T};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */class BT{constructor(e,t,s,o,r,a){this.variableNames=["Image","Transforms"],this.outputShape=a;const i=s==="nearest"?1:2;let c;switch(o){case"constant":c=1;break;case"reflect":c=2;break;case"wrap":c=3;break;case"nearest":c=4;break;default:c=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${c} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${c} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${c} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${r});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${r});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${i} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
 */function MT(n){const{inputs:e,backend:t,attrs:s}=n,{image:o,transforms:r}=e,{interpolation:a,fillMode:i,fillValue:c,outputShape:l}=s,[u,d,h,f]=o.shape,[p,x]=l??[d,h],g=[u,p,x,f],m=new BT(d,h,a,i,c,g);return t.runWebGLProgram(m,[o,r],"float32")}const VT={kernelName:If,backendName:"webgl",kernelFunc:MT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UT(n){const{inputs:e,attrs:t,backend:s}=n,{axis:o}=t,{x:r}=e;fn(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const a=s.readSync(r.dataId),{outputValues:i,outputShape:c,indices:l}=Bb(a,o,r.shape,r.dtype);return[s.makeTensorInfo(c,r.dtype,i),s.makeTensorInfo([l.length],"int32",l)]}const WT={kernelName:Tf,backendName:"webgl",kernelFunc:UT};/**
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
 */function GT(n){const{inputs:e,backend:t,attrs:s}=n,{value:o}=e;let{axis:r}=s;r<0&&(r+=o.shape.length);const a=o,i=a.shape.length,c=o.shape[r],l=new Array(i-1);let u=0;for(let x=0;x<i;x++)x!==r&&(l[u++]=a.shape[x]);const d=[],h=new Array(i).fill(0),f=a.shape.slice();f[r]=1;const p=new Array(c);for(let x=0;x<p.length;x++){h[r]=x;const g=Cn({inputs:{x:a},backend:t,attrs:{begin:h,size:f}}),m=E({inputs:{x:g},backend:t,attrs:{shape:l}});p[x]=m,d.push(g)}return d.forEach(x=>t.disposeIntermediateTensorInfo(x)),p}const zT={kernelName:Rf,backendName:"webgl",kernelFunc:GT};/**
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
 */class HT{constructor(e,t){this.variableNames=["x","segmentIds"];const s=e.windowSize,o=e.batchSize,r=e.inSize,a=e.numSegments,i=a*Math.ceil(r/s);this.outputShape=[o,i];const c="0.0",l="sumValue",u=Math.floor(s/4)*4,d=s%4,h=`
        sumValue += dot(values, segFilter);
    `;let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `);let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${c};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${p}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${d===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${h}
        } else if (${d===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${h}
        } else if (${d===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}/**
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
 */function XT(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,segmentIds:r}=e,{numSegments:a}=s,i=o.shape.length,c=[];let l=0;const u=Ie([l],i);let d=o;u!=null&&(d=ue({inputs:{x:o},backend:t,attrs:{perm:u}}),c.push(d),l=Te(1,i)[0]);const h=Gc(d.shape,l,a),f=I([d.shape[l]]),p=E({inputs:{x:d},backend:t,attrs:{shape:[-1,f]}});c.push(p);const x=Ko(o.dtype),g=(C,$,R,T,S)=>{const D=C.shape[0],O=C.shape[1],P=Wc(O,S),M={windowSize:P,inSize:O,batchSize:D,numSegments:S},me=new HT(M,$),Z=t.compileAndRun(me,[C,R],T);if(c.push(Z),Z.shape[1]===S)return Z;const oe=qu({backend:t,attrs:{start:0,stop:S,step:1,dtype:"float32"}}),Re=ju({inputs:{x:oe},backend:t,attrs:{reps:[O/P]}});return c.push(oe),c.push(Re),g(Z,$,Re,T,S)},m=g(p,"unsortedSegmentSum",r,x,a),b=E({inputs:{x:m},backend:t,attrs:{shape:h}});let w=b;if(u!=null){c.push(b);const C=or(u);w=ue({inputs:{x:w},backend:t,attrs:{perm:C}})}return c.forEach(C=>t.disposeIntermediateTensorInfo(C)),w}const qT={kernelName:Ef,backendName:"webgl",kernelFunc:XT};/**
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
 */const jT=[Aw,Dw,_w,Mw,Uw,zw,Xw,jw,Zw,eC,sC,aC,lC,fC,gC,bC,CC,SC,TC,EC,FC,MC,UC,HC,qC,JC,ty,ry,pw,cy,fy,xy,vy,Ty,Ey,Ny,Fy,_y,My,Wy,zy,Xy,jy,Qy,Jy,s1,r1,c1,d1,f1,x1,y1,I1,E1,A1,F1,O1,_1,B1,V1,W1,X1,K1,Z1,e$,s$,a$,u$,p$,fw,g$,dy,w$,$$,I$,gw,k$,D$,P$,M$,W$,X$,K$,J$,sv,av,cv,hv,pv,gv,Cv,$v,Sv,Tv,Ev,Fv,_v,Vv,jv,ww,Zv,tS,oS,iS,KC,uS,hS,pS,xS,yS,bw,vS,IS,RS,kS,NS,YC,zv,DS,LS,US,yw,HS,jS,ZS,tI,rI,iI,uI,fI,gI,wI,$I,II,kI,FI,_I,MI,LC,Xv,WI,zI,XI,jI,YI,ZI,eT,nT,oT,iT,lT,dT,fT,gT,bT,CT,$T,Hv,Ew,IT,ET,NT,DT,LT,VT,kw,WT,zT,qT,dS];for(const n of jT)hi(n);/**
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
 */const EE=Object.freeze(Object.defineProperty({__proto__:null,GPGPUContext:ps,MathBackendWebGL:Zn,forceHalfFloat:wu,gpgpu_util:X0,setWebGLContext:$l,version_webgl:dw,webgl:hw,webgl_util:Zx},Symbol.toStringTag,{value:"Module"}));export{th as $,xd as A,Dd as B,Bd as C,om as D,A as E,Od as F,lh as G,Pd as H,No as I,_d as J,Ao as K,im as L,Ld as M,em as N,Md as O,Ud as P,Wd as Q,zd as R,ai as S,vf as T,Hd as U,Xd as V,qd as W,jd as X,Yd as Y,Qd as Z,Zd as _,bd as a,Mh as a$,nh as a0,ee as a1,Do as a2,am as a3,nf as a4,Ge as a5,ze as a6,sh as a7,ad as a8,rh as a9,Nn as aA,$h as aB,Uo as aC,bh as aD,Za as aE,cf as aF,GR as aG,Jt as aH,wh as aI,Ch as aJ,yh as aK,I as aL,tf as aM,Ih as aN,Rh as aO,kh as aP,Nh as aQ,cn as aR,po as aS,Ai as aT,za as aU,he as aV,Wo as aW,Fh as aX,Dh as aY,Oh as aZ,Go as a_,Sh as aa,Ah as ab,ne as ac,Ye as ad,Kp as ae,mm as af,on as ag,Zr as ah,ft as ai,It as aj,Oo as ak,ah as al,Po as am,ci as an,te as ao,_o as ap,uh as aq,Lo as ar,Bo as as,fh as at,ph as au,mh as av,gh as aw,Mo as ax,Vo as ay,xh as az,v as b,Kd as b$,Bh as b0,Uh as b1,lf as b2,ln as b3,ti as b4,Wh as b5,Gh as b6,zh as b7,lt as b8,Wn as b9,ef as bA,Sf as bB,Tf as bC,Ef as bD,Rf as bE,Nm as bF,rn as bG,j as bH,li as bI,Jf as bJ,Jh as bK,gf as bL,dh as bM,He as bN,Ks as bO,Vd as bP,Om as bQ,Dm as bR,Ve as bS,Ff as bT,Am as bU,fo as bV,Fm as bW,Jd as bX,eh as bY,Df as bZ,Af as b_,Se as ba,ki as bb,dt as bc,Hh as bd,ni as be,Xh as bf,Qh as bg,Zh as bh,zo as bi,sf as bj,ws as bk,af as bl,of as bm,rf as bn,df as bo,ih as bp,hh as bq,uf as br,Ho as bs,pt as bt,Vh as bu,bf as bv,$f as bw,od as bx,Fi as by,Xi as bz,_ as c,qa as c$,ch as c0,Nf as c1,Ph as c2,Mm as c3,Lh as c4,Um as c5,_h as c6,Vm as c7,Kh as c8,qh as c9,na as cA,OR as cB,qR as cC,LR as cD,AR as cE,NR as cF,PR as cG,ig as cH,JT as cI,y as cJ,_r as cK,kf as cL,Ki as cM,Ym as cN,Qm as cO,jm as cP,Xm as cQ,Km as cR,qm as cS,ko as cT,km as cU,zn as cV,nr as cW,Fd as cX,Nd as cY,YT as cZ,Es as c_,If as ca,ve as cb,Im as cc,hf as cd,ff as ce,pf as cf,mf as cg,wf as ch,Cf as ci,yf as cj,Xo as ck,je as cl,XR as cm,jR as cn,kR as co,_R as cp,pp as cq,ER as cr,RR as cs,DR as ct,Pi as cu,Cp as cv,_s as cw,FR as cx,Qr as cy,Zi as cz,Q as d,ed as d$,Gd as d0,Ie as d1,ZT as d2,QT as d3,Ka as d4,oh as d5,ks as d6,or as d7,Ns as d8,Qa as d9,ui as dA,aR as dB,Si as dC,um as dD,Hp as dE,xm as dF,vm as dG,Rm as dH,ke as dI,fp as dJ,qi as dK,rt as dL,ji as dM,xg as dN,Wa as dO,up as dP,Bt as dQ,Pa as dR,bR as dS,Yt as dT,ip as dU,Up as dV,Rs as dW,Yo as dX,ep as dY,Wf as dZ,Oa as d_,tR as da,vh as db,As as dc,Eh as dd,Th as de,Ke as df,Fs as dg,Ja as dh,ei as di,ja as dj,ri as dk,si as dl,oi as dm,Yh as dn,jh as dp,xc as dq,bc as dr,Ds as ds,hr as dt,Os as du,xf as dv,di as dw,Ps as dx,ii as dy,ym as dz,wd as e,Sg as e$,st as e0,Ne as e1,Pn as e2,ld as e3,Tt as e4,Mt as e5,hp as e6,Qc as e7,pe as e8,wo as e9,zi as eA,K as eB,en as eC,Xn as eD,ud as eE,_n as eF,bo as eG,Ic as eH,Rc as eI,Ec as eJ,Tc as eK,kc as eL,ex as eM,Sc as eN,vc as eO,$c as eP,yc as eQ,Cc as eR,wc as eS,yg as eT,Lt as eU,bg as eV,wg as eW,Cg as eX,vg as eY,Dx as eZ,$g as e_,xx as ea,La as eb,q as ec,Ag as ed,pl as ee,Te as ef,Ue as eg,Xe as eh,Ce as ei,qn as ej,pr as ek,mr as el,gr as em,mc as en,gc as eo,bx as ep,Fg as eq,lc as er,Ft as es,qc as et,Ms as eu,_g as ev,dn as ew,jn as ex,qe as ey,Dg as ez,Cd as f,RE as f$,Ya as f0,an as f1,cr as f2,Wg as f3,zc as f4,Gg as f5,jg as f6,fl as f7,Yg as f8,Gn as f9,eE as fA,sE as fB,QR as fC,oE as fD,rE as fE,aE as fF,iE as fG,cE as fH,lE as fI,uE as fJ,ZR as fK,dE as fL,hE as fM,fE as fN,pE as fO,mE as fP,gE as fQ,xE as fR,bE as fS,CE as fT,JR as fU,yE as fV,$E as fW,vE as fX,SE as fY,IE as fZ,TE as f_,Bg as fa,ux as fb,dx as fc,hx as fd,fx as fe,pc as ff,Kn as fg,mx as fh,wx as fi,Cx as fj,yx as fk,Nc as fl,cc as fm,Ji as fn,Tx as fo,Ex as fp,Nx as fq,Ax as fr,Ox as fs,Px as ft,kn as fu,_x as fv,Lg as fw,YR as fx,tE as fy,nE as fz,yd as g,wE as g0,hi as g1,dw as g2,Fo as g3,Ha as g4,dd as g5,ps as g6,eR as g7,nR as g8,Zn as g9,vR as gA,zR as gB,HR as gC,yR as gD,TR as gE,$l as gF,Lx as gG,mg as gH,Ko as gI,dR as gJ,CR as gK,cR as gL,iR as gM,uR as gN,UR as gO,WR as gP,bm as gQ,hw as gR,Zx as gS,EE as gT,sR as ga,oR as gb,Hr as gc,rR as gd,Cs as ge,Eg as gf,BR as gg,lR as gh,gR as gi,hR as gj,mR as gk,xR as gl,pR as gm,fR as gn,SR as go,IR as gp,wu as gq,KR as gr,dp as gs,Lr as gt,eo as gu,X0 as gv,MR as gw,VR as gx,wR as gy,$R as gz,$d as h,vd as i,Sd as j,Id as k,Td as l,mt as m,Ed as n,X as o,Rd as p,un as q,tr as r,tm as s,kd as t,ys as u,Ad as v,ap as w,Gi as x,V as y,L as z};
