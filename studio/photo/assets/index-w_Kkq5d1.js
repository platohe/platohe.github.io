var F=new WeakMap;function C(e){let i=F.get(e);if(!i){const t=new AbortController;e.lost.then(()=>t.abort(Error("WebGPU device was lost."))),i=t.signal,F.set(e,i)}return i}var G;async function N(){var t;const e=await fetch(new URL(""+new URL("libraw-0dMLcZ-B.wasm",import.meta.url).href,import.meta.url));if(!e.ok)throw Error("Could not load the native decoder.");return((t=e.headers.get("content-type"))==null?void 0:t.split(";")[0].trim())==="application/wasm"&&"compileStreaming"in WebAssembly?WebAssembly.compileStreaming(e):WebAssembly.compile(await e.arrayBuffer())}function q(){return G??(G=N().catch(e=>{throw G=void 0,e})),G}function D(e,i){const t=new Worker(new URL(""+new URL("worker-CI6VYr7B.js",import.meta.url).href,import.meta.url),{type:"module"}),a=new Map;let r=0,f;function c(o=Error("RAW source is closed.")){f=o,t.terminate();for(const n of a.values())n.reject(o);a.clear()}return e.then(o=>{f||t.postMessage({module:o,maxSide:i})},o=>c(o instanceof Error?o:Error(String(o)))),t.onmessage=({data:o})=>{const n=a.get(o.id);a.delete(o.id),"error"in o?n==null||n.reject(Error(o.error)):n==null||n.resolve(o)},t.onerror=o=>{o.preventDefault(),c(Error(o.message||"RAW decoding worker failed."))},t.onmessageerror=()=>c(Error("Could not read the RAW worker response.")),{request(o){if(f)return Promise.reject(f);const n=++r,s=Promise.withResolvers();a.set(n,s);try{t.postMessage({id:n,value:o})}catch(l){a.delete(n),s.reject(l)}return s.promise},dispose:c}}var W=`// Sensor samples in, linear Rec.2020 or display sRGB out: normalize, white balance,
// demosaic when needed, correct vignetting, convert color and apply exposure.

// Specialization removes display conversion from the default editor pipeline.
override outputSrgb: bool = false;

fn output(color: vec3f) -> vec4f {
  if (!outputSrgb) { return vec4f(color, 1.0); }
  let matrix = mat3x3f(
    1.660491, -0.124550, -0.018151,
    -0.587641, 1.132900, -0.100579,
    -0.072850, -0.008349, 1.118730,
  );
  let rgb = clamp(matrix * color, vec3f(0.0), vec3f(1.0));
  let encoded = select(1.055 * pow(rgb, vec3f(1.0 / 2.4)) - 0.055, 12.92 * rgb, rgb <= vec3f(0.0031308));
  return vec4f(encoded, 1.0);
}

struct Sensor {
  black: vec4f,
  patternSize: vec4u,
  white: f32,
  flip: u32,
  mosaic: u32,
  floating: u32,
}

struct Calibration {
  gains: vec3f,
  exposure: f32,
  matrix: mat3x3f,
}

struct Vignette {
  coefficients: vec4f,
  origin: vec2f,
  step: vec2f,
  last: f32,
}

@group(0) @binding(0) var source: texture_2d<u32>;
@group(0) @binding(1) var<uniform> sensor: Sensor;
@group(0) @binding(2) var<uniform> calibration: Calibration;
@group(0) @binding(3) var<uniform> vignette: Vignette;

@group(0) @binding(4) var<uniform> pattern: array<vec4u, 9>;

// CFA color index at a sensor position: R=0, G=1 or 3, B=2.
fn channel(p: vec2i) -> u32 {
  if (sensor.patternSize.x == 2u) {
    return pattern[0][(p.y & 1) * 2 + (p.x & 1)];
  }
  let side = i32(sensor.patternSize.x);
  let q = (p % side + side) % side;
  let i = u32(q.y * side + q.x);
  return pattern[i / 4u][i % 4u];
}

// One normalized, white-balanced sample; both greens share the green gain.
fn sample(p: vec2i, size: vec2i) -> f32 {
  // Reflect at the border without changing CFA parity.
  let q = min(abs(p), 2 * (size - 1) - p);
  let c = channel(q);
  let value = f32(textureLoad(source, q, 0).r);
  let gain = calibration.gains[select(c, 1u, c == 3u)];
  return max(value - sensor.black[c], 0.0) / (sensor.white - sensor.black[c]) * gain;
}

// Malvar, He and Cutler, ICASSP 2004, Fig. 2: gradient-corrected 5x5 Bayer filters.
fn demosaic(p: vec2i, size: vec2i) -> vec3f {
  let center = sample(p, size);
  let horizontal = sample(p + vec2i(-1, 0), size) + sample(p + vec2i(1, 0), size);
  let vertical = sample(p + vec2i(0, -1), size) + sample(p + vec2i(0, 1), size);
  let horizontal2 = sample(p + vec2i(-2, 0), size) + sample(p + vec2i(2, 0), size);
  let vertical2 = sample(p + vec2i(0, -2), size) + sample(p + vec2i(0, 2), size);
  let diagonal = sample(p + vec2i(-1, -1), size) + sample(p + vec2i(1, -1), size)
    + sample(p + vec2i(-1, 1), size) + sample(p + vec2i(1, 1), size);
  let c = channel(p);

  // At a red or blue site: green from the cross, the opposite color from the diagonals.
  if (c == 0u || c == 2u) {
    let green = (4.0 * center + 2.0 * (horizontal + vertical) - horizontal2 - vertical2) / 8.0;
    let opposite = (6.0 * center + 2.0 * diagonal - 1.5 * (horizontal2 + vertical2)) / 8.0;
    return select(vec3f(opposite, green, center), vec3f(center, green, opposite), c == 0u);
  }

  // At a green site: the color of the row neighbors uses the row filter, the other the column filter.
  let across = (5.0 * center + 4.0 * horizontal - horizontal2 - diagonal + 0.5 * vertical2) / 8.0;
  let along = (5.0 * center + 4.0 * vertical - vertical2 - diagonal + 0.5 * horizontal2) / 8.0;
  return select(vec3f(along, center, across), vec3f(across, center, along), channel(p + vec2i(1, 0)) == 0u);
}

// Normalized convolution for larger RGB mosaics. Preserve the measured channel and
// reconstruct missing colors from nearby sites, weighted by inverse fourth-power distance.
fn demosaicPattern(p: vec2i, size: vec2i) -> vec3f {
  var sum = vec3f(0.0);
  var weight = vec3f(0.0);
  for (var y = -3; y <= 3; y++) {
    for (var x = -3; x <= 3; x++) {
      let q = p + vec2i(x, y);
      if (any(q < vec2i(0)) || any(q >= size)) { continue; }
      let c = channel(q);
      let rgb = select(c, 1u, c == 3u);
      let distance2 = f32(max(x * x + y * y, 1));
      let w = 1.0 / (distance2 * distance2);
      sum[rgb] += sample(q, size) * w;
      weight[rgb] += w;
    }
  }
  var color = sum / max(weight, vec3f(0.00001));
  let c = channel(p);
  color[select(c, 1u, c == 3u)] = sample(p, size);
  return color;
}

@fragment fn fs_main(@builtin(position) position: vec4f) -> @location(0) vec4f {
  // Map the oriented output pixel back to its sensor position.
  let size = vec2i(textureDimensions(source));
  var p = vec2i(position.xy);
  if ((sensor.flip & 4u) != 0u) { p = p.yx; }
  if ((sensor.flip & 2u) != 0u) { p.y = size.y - 1 - p.y; }
  if ((sensor.flip & 1u) != 0u) { p.x = size.x - 1 - p.x; }

  var camera: vec3f;
  if (sensor.mosaic != 0u) {
    if (sensor.patternSize.x == 2u) {
      camera = demosaic(p, size);
    } else {
      camera = demosaicPattern(p, size);
    }
  } else {
    let bits = textureLoad(source, p, 0).rgb;
    let value = select(vec3f(bits), bitcast<vec3f>(bits), sensor.floating != 0u);
    camera = max(value - sensor.black.rgb, vec3f(0.0))
      / (vec3f(sensor.white) - sensor.black.rgb) * calibration.gains;
  }

  // DNG FixVignetteRadial: a polynomial in r² over normalized coordinates.
  let q = (vec2f(p) + 0.5) * vignette.step + vignette.origin;
  let r2 = dot(q, q);
  let k = vignette.coefficients;
  let gain = 1.0 + r2 * (k.x + r2 * (k.y + r2 * (k.z + r2 * (k.w + r2 * vignette.last))));

  return output(calibration.matrix * camera * gain * calibration.exposure);
}

@group(0) @binding(5) var cameraSource: texture_2d<f32>;

// Refine a neutral camera-RGB estimate by interpolating color differences.
// The denser green samples carry detail into red and blue without repeating
// this reconstruction when white balance changes.
@fragment fn fs_refine(@builtin(position) position: vec4f) -> @location(0) vec4f {
  let size = vec2i(textureDimensions(source));
  var p = vec2i(position.xy);
  if ((sensor.flip & 4u) != 0u) { p = p.yx; }
  if ((sensor.flip & 2u) != 0u) { p.y = size.y - 1 - p.y; }
  if ((sensor.flip & 1u) != 0u) { p.x = size.x - 1 - p.x; }
  let center = textureLoad(cameraSource, vec2i(position.xy), 0).rgb;
  var difference = vec3f(0.0);
  var weight = vec3f(0.0);
  for (var y = -3; y <= 3; y++) {
    for (var x = -3; x <= 3; x++) {
      let q = p + vec2i(x, y);
      if (any(q < vec2i(0)) || any(q >= size)) { continue; }
      let c = channel(q);
      if (c != 0u && c != 2u) { continue; }
      var oriented = q;
      if ((sensor.flip & 1u) != 0u) { oriented.x = size.x - 1 - oriented.x; }
      if ((sensor.flip & 2u) != 0u) { oriented.y = size.y - 1 - oriented.y; }
      if ((sensor.flip & 4u) != 0u) { oriented = oriented.yx; }
      let rgb = textureLoad(cameraSource, oriented, 0).rgb;
      let distance2 = f32(max(x * x + y * y, 1));
      let w = 1.0 / (distance2 * distance2);
      difference[c] += (rgb[c] - rgb.g) * w;
      weight[c] += w;
    }
  }
  var color = center.g + difference / max(weight, vec3f(0.00001));
  let c = channel(p);
  color[select(c, 1u, c == 3u)] = center[select(c, 1u, c == 3u)];
  return vec4f(calibration.matrix * color * calibration.exposure, 1.0);
}

// Cached X-Trans camera RGB: subsequent edits only apply per-pixel linear transforms.
@fragment fn fs_camera(@builtin(position) position: vec4f) -> @location(0) vec4f {
  let camera = textureLoad(cameraSource, vec2i(position.xy), 0).rgb;
  return output(calibration.matrix * (camera * calibration.gains) * calibration.exposure);
}

// One triangle covering the whole destination.
@vertex fn vs_main(@builtin(vertex_index) index: u32) -> @builtin(position) vec4f {
  let points = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  return vec4f(points[index], 0, 1);
}
`;async function I(e){const i=e.createShaderModule({code:W}),t=new Map;function a(n,s={}){const{format:l="rgba16float",outputColorSpace:u="linear-rec2020"}=s;if(!["rgba16float","rgba8unorm","bgra8unorm"].includes(l))throw Error("RAW output format must be rgba16float, rgba8unorm or bgra8unorm.");return{layout:"auto",vertex:{module:i,entryPoint:"vs_main"},fragment:{module:i,entryPoint:n,targets:[{format:l}],constants:{outputSrgb:+(u==="srgb")}},primitive:{topology:"triangle-list"}}}function r(n,s={}){return`${n}:${s.format??"rgba16float"}:${s.outputColorSpace??"linear-rec2020"}`}const[f,c,o]=await Promise.all(["fs_main","fs_camera","fs_refine"].map(async n=>{const s=await e.createRenderPipelineAsync(a(n));return t.set(r(n),s),s}));return{sensor:f,camera:c,refine:o,get(n,s){const l=r(n,s);let u=t.get(l);return u||(u=e.createRenderPipeline(a(n,s)),t.set(l,u)),u}}}function B(e,i){const t=e.createBuffer({size:i.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(t,0,i),t}function O(e,i){const t=new ArrayBuffer(48),a=new Float32Array(t),r=new Uint32Array(t);return a.set(i.black),r[4]=i.cfaSize??2,a[8]=i.white,r[9]=i.flip,r[10]=+(i.cfa!==null),r[11]=+(i.sampleFormat==="float32"),B(e,t)}function V(e,i){const t=new Float32Array(12);return t.set(i.vignette.slice(0,4)),t.set(i.vignette.slice(5,9),4),t[8]=i.vignette[4],B(e,t.buffer)}function Y(e,i,t){const{data:a,...r}=i,f=r.cfa!==null,c=r.flip&4?[r.size[1],r.size[0]]:r.size,s=r.sampleFormat==="float32"?"rgba32uint":f?"r16uint":"rgba16uint",l=e.createTexture({size:r.size,format:s,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT}),u=[],d=new Set;let p,b=!1;function P(){if(!b){b=!0;for(const m of d)m();for(const m of u)m.destroy();l.destroy(),p==null||p.destroy()}}function v(m,y,z="rgba16float"){if(b)throw Error("RAW source is closed.");const h=new Float32Array(16),R=B(e,h.buffer),E=e.createBindGroup({layout:m.getBindGroupLayout(0),entries:[...y,{binding:2,resource:{buffer:R}}]});let w=!1;function U(){w=!0,R.destroy(),d.delete(U)}return d.add(U),{render(g){if(w||b)throw Error("RAW development pass is closed.");const{destination:x,calibration:T,exposure:L=0}=g;if(x.format!==z||x.width!==c[0]||x.height!==c[1])throw Error(`RAW destination must be a ${z} texture matching the oriented source size.`);h.set(T.gains),h[3]=2**L;for(let A=0;A<3;A++)h.set(T.matrix.slice(A*3,A*3+3),4+A*4);e.queue.writeBuffer(R,0,h);const M=g.encoder??e.createCommandEncoder(),S=M.beginRenderPass({colorAttachments:[{view:x.createView(),loadOp:"clear",storeOp:"store"}]});S.setPipeline(m),S.setBindGroup(0,E),S.draw(3),S.end(),g.encoder||e.queue.submit([M.finish()])},dispose:U}}try{if(a.byteLength>e.limits.maxBufferSize){const g=e.createCommandEncoder();g.beginRenderPass({colorAttachments:[{view:l.createView(),loadOp:"clear",storeOp:"store"}]}).end(),e.queue.submit([g.finish()])}const m=a.BYTES_PER_ELEMENT*(f?1:4),y=r.size[0]*m,z=Math.floor(e.limits.maxBufferSize/(Math.ceil(y/256)*256));for(let g=0;g<r.size[1];g+=z){const x=Math.min(z,r.size[1]-g);e.queue.writeTexture({texture:l,origin:[0,g]},a.buffer,{offset:a.byteOffset+g*y,bytesPerRow:y},[r.size[0],x])}const h=O(e,r);u.push(h);const R=new Uint32Array(36);R.set(r.cfa??[]);const E=B(e,R.buffer);u.push(E);const w=V(e,r);u.push(w);const U=[{binding:0,resource:l.createView()},{binding:1,resource:{buffer:h}},{binding:3,resource:{buffer:w}},{binding:4,resource:{buffer:E}}];if(f&&(r.cfaSize??2)>2){p=e.createTexture({size:c,format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});const g=v(t.sensor,U);g.render({destination:p,calibration:{gains:[1,1,1],matrix:[1,0,0,0,1,0,0,0,1]}}),g.dispose();const x=p;try{p=e.createTexture({size:c,format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});const T=v(t.refine,[{binding:0,resource:l.createView()},{binding:1,resource:{buffer:h}},{binding:4,resource:{buffer:E}},{binding:5,resource:x.createView()}]);T.render({destination:p,calibration:{gains:[1,1,1],matrix:[1,0,0,0,1,0,0,0,1]}}),T.dispose()}finally{x.destroy()}}return{texture:l,metadata:r,size:c,createDevelopPass(g={}){return v(t.get(p?"fs_camera":"fs_main",g),p?[{binding:5,resource:p.createView()}]:U,g.format)},dispose:P}}catch(m){throw P(),m}}var j=`// Interleaved TIFF samples in, linear Rec.2020 with straight alpha out, one row band per dispatch.

struct Params {
  width: u32,
  height: u32,
  channels: u32,
  bytes: u32,        // per sample
  bits: u32,         // per sample; zero for float
  orientation: u32,  // TIFF orientation tag, 1 to 8
  photometric: u32,  // 0 white is zero, 1 black is zero, 2 RGB
  alpha: u32,        // 1 when the extra sample is associated (premultiplied) alpha
  rowBytes: u32,
  startRow: u32,     // first image row in this band
  rows: u32,         // rows in this band
  bigEndian: u32,
  matrix: mat3x3f,
}

@group(0) @binding(0) var<storage, read> source: array<u32>;
@group(0) @binding(1) var<storage, read> curves: array<f32>;
@group(0) @binding(2) var<uniform> params: Params;
@group(0) @binding(3) var output: texture_storage_2d<rgba16float, write>;

// One sample at a byte offset, normalized to 0..1 for integers and left as is for floats.
fn sample(offset: u32) -> f32 {
  var word = source[offset / 4u];
  if params.bigEndian == 1u {
    if params.bytes == 2u { word = ((word & 0x00ff00ffu) << 8u) | ((word & 0xff00ff00u) >> 8u); }
    if params.bytes == 4u { word = (word << 24u) | ((word & 0xff00u) << 8u) | ((word >> 8u) & 0xff00u) | (word >> 24u); }
  }
  if params.bits == 0u { return bitcast<f32>(word); }
  var value = word;
  if params.bytes < 4u { value = (word >> ((offset % 4u) * 8u)) & ((1u << (params.bytes * 8u)) - 1u); }
  return f32(value) / (exp2(f32(params.bits)) - 1.0);
}

// Transfer curve over 0..1; samples outside keep their distance, so HDR and negative values pass through.
fn transfer(value: f32, channel: u32) -> f32 {
  let last = arrayLength(&curves) / 3u - 1u;
  let bounded = clamp(value, 0.0, 1.0);
  let position = bounded * f32(last);
  let low = min(u32(position), last - 1u);
  let base = channel * (last + 1u) + low;
  return mix(curves[base], curves[base + 1u], position - f32(low)) + (value - bounded);
}

// Where a stored pixel lands after the orientation tag.
fn oriented(p: vec2u) -> vec2u {
  let w = params.width - 1u;
  let h = params.height - 1u;
  switch params.orientation {
    case 2u: { return vec2u(w - p.x, p.y); }
    case 3u: { return vec2u(w - p.x, h - p.y); }
    case 4u: { return vec2u(p.x, h - p.y); }
    case 5u: { return p.yx; }
    case 6u: { return vec2u(h - p.y, p.x); }
    case 7u: { return vec2u(h - p.y, w - p.x); }
    case 8u: { return vec2u(p.y, w - p.x); }
    default: { return p; }
  }
}

override workgroupRows: u32 = 16;

@compute @workgroup_size(16, workgroupRows) fn main(@builtin(global_invocation_id) id: vec3u) {
  if id.x >= params.width || id.y >= params.rows { return; }
  let offset = id.y * params.rowBytes + id.x * params.channels * params.bytes;

  // Gray replicates its single sample; RGB reads three.
  var rgb = vec3f(sample(offset));
  var colors = 1u;
  if params.photometric == 2u {
    colors = 3u;
    rgb = vec3f(rgb.r, sample(offset + params.bytes), sample(offset + 2u * params.bytes));
  }
  var alpha = 1.0;
  if params.channels > colors { alpha = sample(offset + colors * params.bytes); }
  if params.photometric == 0u { rgb = 1.0 - rgb; }
  if params.alpha == 1u { rgb /= max(alpha, 0.000001); }

  let linear = vec3f(transfer(rgb.r, 0u), transfer(rgb.g, 1u), transfer(rgb.b, 2u));
  textureStore(output, oriented(vec2u(id.x, id.y + params.startRow)), vec4f(params.matrix * linear, alpha));
}
`,_=new WeakMap;function k(e,i,t){const a=e.createBuffer({size:Math.ceil(i.byteLength/4)*4,usage:t,mappedAtCreation:!0});try{return new Uint8Array(a.getMappedRange()).set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength)),a.unmap(),a}catch(r){throw a.destroy(),r}}function H(e,i,t){const a=new ArrayBuffer(96),r=new Uint32Array(a);r.set(e.metadata.subarray(0,9)),r[9]=i,r[10]=t,r[11]=Number(e.bigEndian);const f=new Float32Array(a);for(let c=0;c<3;c++)f.set(e.color.matrix.slice(c*3,c*3+3),12+c*4);return new Uint8Array(a)}async function X(e,i,t){const a=Math.min(16,Math.floor(e.limits.maxComputeInvocationsPerWorkgroup/16));let r=_.get(e);r||(r=e.createComputePipelineAsync({layout:"auto",compute:{module:e.createShaderModule({code:j}),entryPoint:"main",constants:{workgroupRows:a}}}).catch(m=>{throw _.delete(e),m}),_.set(e,r));const f=await r;t==null||t.throwIfAborted();const{data:c,metadata:o,color:n}=i,[s,l,,,,u,,,d]=o,p=u>=5?[l,s]:[s,l],b=Math.floor(Math.min(e.limits.maxStorageBufferBindingSize,e.limits.maxBufferSize)/d);if(!b)throw Error("TIFF row exceeds the device buffer size limit.");const P=e.createTexture({size:p,format:"rgba16float",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC});let v;try{v=k(e,n.table,GPUBufferUsage.STORAGE);for(let m=0;m<l;m+=b){const y=Math.min(b,l-m),z=k(e,c.subarray(m*d,(m+y)*d),GPUBufferUsage.STORAGE);let h;try{h=k(e,H(i,m,y),GPUBufferUsage.UNIFORM);const R=e.createBindGroup({layout:f.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}},{binding:2,resource:{buffer:h}},{binding:3,resource:P.createView()}]}),E=e.createCommandEncoder(),w=E.beginComputePass();w.setPipeline(f),w.setBindGroup(0,R),w.dispatchWorkgroups(Math.ceil(s/16),Math.ceil(y/a)),w.end(),e.queue.submit([E.finish()])}finally{z.destroy(),h==null||h.destroy()}}return{texture:P,size:p,dispose:()=>P.destroy()}}catch(m){throw P.destroy(),m}finally{v==null||v.destroy()}}async function $(e,i,{signal:t}={}){const a=t?AbortSignal.any([t,C(e)]):C(e);a.throwIfAborted();const r=new Worker(new URL(""+new URL("tiff-worker-ZY_Fpm6h.js",import.meta.url).href,import.meta.url),{type:"module"}),f=Promise.withResolvers(),c=()=>f.reject(a.reason);a.addEventListener("abort",c);try{const o=await Promise.race([q(),f.promise]),n=new Promise((u,d)=>{r.onmessage=({data:p})=>{p.error?d(Error(p.error)):u(p)},r.onerror=p=>{p.preventDefault(),d(Error(p.message||"TIFF decoding worker failed."))},r.onmessageerror=()=>d(Error("Could not read TIFF worker response.")),r.postMessage({file:i,module:o,maxSide:e.limits.maxTextureDimension2D})}),s=await Promise.race([n,f.promise]),l=X(e,s,a).then(u=>{if(a.aborted)throw u.dispose(),a.reason;return u});return await Promise.race([l,f.promise])}finally{a.removeEventListener("abort",c),r.terminate()}}function Z(e){let i;const t=new Set;let a=!1;function r(){a=!0,f.removeEventListener("abort",r);for(const c of t)c()}const f=C(e);return f.addEventListener("abort",r,{once:!0}),{async load(c,{signal:o}={}){if(a||f.aborted)throw Error("RAW decoder is closed.");if(o!=null&&o.aborted)throw o.reason;const n=D(q(),e.limits.maxTextureDimension2D);let s,l=!1;function u(){l=!0,o==null||o.removeEventListener("abort",u),s==null||s.dispose(),n.dispose(),t.delete(u)}t.add(u),o==null||o.addEventListener("abort",u);try{i??(i=I(e).catch(b=>{throw i=void 0,b}));const[d,p]=await Promise.all([n.request(c),i]);if(l)throw Error("RAW source is closed.");if(!d.image)throw Error("RAW decoder returned no sensor samples.");if(d.image.size.some(b=>b>e.limits.maxTextureDimension2D))throw Error("RAW image exceeds this device's texture size limit.");return s=Y(e,d.image,p),o==null||o.removeEventListener("abort",u),{...s,asShot:d.asShot,calibration:d.calibration,async calibrate(b=d.asShot){if(l)throw Error("RAW source is closed.");if(!Number.isFinite(b.temperature)||b.temperature<=0||!Number.isFinite(b.tint))throw Error("White balance needs a positive temperature and a finite tint.");return(await n.request(b)).calibration},dispose:u}}catch(d){throw u(),o!=null&&o.aborted?o.reason:d}},dispose:r}}export{Z as createRawDecoder,$ as decodeTiff};
