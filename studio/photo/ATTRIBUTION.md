# ImageStudio — Third-Party Attribution & License Audit

ImageStudio ships a fully local, offline-capable image pipeline. This file
records every license-affecting dependency, its license, and source, so the
repo-level audit has a single home (see enhancement plan §P0-E / Risk 1).

The lens correction database carries its own, more specific notice at
[lens-db/ATTRIBUTION.md](./lens-db/ATTRIBUTION.md) (lensfun subset, MIT/LGPL
profile data). That file is unchanged; this one covers the studio's
library-level dependencies.

## License summary

| Package | License | Notes |
|---|---|---|
| `react`, `react-dom` | MIT | React 18, deduped to a single copy via `resolve.dedupe`. |
| `@fluentui/react-components` | MIT | Fluent UI v9 component library. |
| `@fluentui/react-icons` | MIT | Icon set (codicon-flavoured). |
| `pixi.js` | MIT | Canvas rendering (WebGL/WebGPU). |
| `pixi-filters` | MIT | Custom shader filters for pixi.js. |
| `fabric` | MIT | Canvas object model. |
| `jszip` | MIT or GPLv3 | Dual-licensed; the studio uses it under **MIT** (`packZip` batch output). |
| `idb` | ISC | Promise wrapper over the native IndexedDB API. |
| `exifr` | MIT | Read-only EXIF/IPTC/XMP parser (metadata, embedded RAW preview). |
| `gifshot` | MIT (Yahoo-authored portions under a separate YAPL grant) | GIF export. |
| `ag-psd` | MIT | PSD read/write. |
| `face-api.js` | MIT (model weights: see below) | Face detection/landmarks/age/sex/EMO. |
| `@huggingface/transformers` | Apache-2.0 | On-device transformers inference. |
| `@tensorflow/tfjs` (+ `-backend-webgl`) | Apache-2.0 | Neural-network runtime (AI pipelines, face-api). |
| `onnxruntime-web` | MIT (runtime) · model weights vary | ONNX inference (OCR, vision). Model files are separate artifacts with their own licenses. |
| `canvas` | MIT | Node-side canvas (build/test only; not bundled into the browser). |
| `vite-plugin-pwa` | MIT | PWA manifest/service-worker generation at build time. |
| `wasm-vips` | MIT (runtime) · **libvips LGPL-3.0 · libraw / other vendored codecs vary** | The RAW path's license exposure — see below. |

## wasm-vips / RAW decoder — the item the audit exists for

`wasm-vips` (v0.0.17) is the MIT-licensed JS runtime that wraps
**libvips 8.18.1** compiled to WebAssembly. The libvips library itself is
LGPL-3.0, and the WASM build vendors a set of image-format codecs, each
with its own license (recorded in the package's `THIRD-PARTY-NOTICES.md`):

- **libvips** — GNU Lesser General Public License v3.0
  (https://github.com/libvips/libvips)
- **libwebp** — BSD-3-Clause (https://github.com/webmproject/libwebp)
- **png (libpng)** — zlib license (https://sourceforge.net/projects/libpng/)
- **zlib-ng** — MIT/zlib (https://github.com/sealos/zlib-ng)
- **mozjpeg** — BSD-3-Clause (https://github.com/tensorflow/mozjpeg)
- **heif (libheif)** — MIT (https://github.com/strukturag/libheif)
- **jxl (libjxl)** — BSD-3-Clause (https://github.com/libjxl/libjxl)
- **aom (libaom)** — BSD-3-Clause (https://aomedia.github.io/aom)
- **uhdr** — Apache-2.0 / BSD (https://github.com/google/uhs-sdk)
- **resvg** — MIT/Apache-2.0 dual (https://github.com/RazrF1res/resvg)
- **lcms2** — MIT (https://github.com/littlecms/littlecms)
- **expat** — MIT (https://libexpat.org/doc/man/)
- **brotli** — MIT (https://github.com/google/brotli)
- **highway** — BSD-3-Clause (https://github.com/jdermes/highway)
- **cgif** — MIT (https://github.com/dlfsouza/cgif)
- **imagequant** — MIT (https://github.com/ImageQuant/imagequant)
- **emscripten runtime** — MIT (https://emscripten.org)

The WASM build is linked (not statically merged into a binary the user
installs) and the JS runtime is MIT; per LGPL the user retains the right
to replace the WASM module, so this is a **dynamic linkage** that keeps the
studio itself under its own terms. No license conflict was found between
the studio's MIT runtime and the LGPL/BS-licensed vendored codecs, because
none of the studio's own code is linked into the LGPL library — it talks to
it across a clean WASM boundary.

### RAW demosaic status (relevant to P0-A / P2-F)

As of this tree, `wasm-vips` exposes `rawload` only as the **raw-pixel-
buffer** variant (`vips_rawload`: you supply width/height/bands) — it is
**not** a camera-file (CR2/NEF/ARW/DNG) container decoder, and there is no
libraw / demosaic symbol in the build. The RAW path therefore uses the
**exifr embedded-JPEG fallback** and reports
`processingMethod: 'exifr-preview-fallback'`.

P0-A is unblocked in-tree by `src/utils/RAWDemosaic.js`: a dependency-free
(MIT, studio-owned) Bayer sensor demosaic + RAW unpacker. When a caller
supplies an unpacked Bayer buffer via `parseRAW(file, { sensor })`, the
raster is produced by that module and `processingMethod` is
`'wasm-demosaic'`. No new third-party codec and no new license row are
required for that path.

A **file-container** RAW decoder (parsing the CR2/NEF/ARW/DNG container to
reach the sensor bytes) is still a separate decision. The integration point
is opt-in and engine-agnostic: `src/services/RAWContainerCodec.js` probes
for a configured codec package and feeds its sensor buffer to
`src/utils/RAWDemosaic.js`, emitting `processingMethod: 'raw-wasm'`. With
no codec configured (the current default) that module is a no-op and the
exifr path is unchanged — so nothing is bundled until a codec is chosen.

The **in-tree shader** path (3) is implemented and now *active*:
`src/utils/GLRAWDemosaic.js` is the WebGL GPU backend for
`src/utils/RAWDemosaic.js` (preferred via `RAWDemosaic.demosaicSensorGL`,
CPU fallback kept). It carries no new dependency and no new row. On top of
that, an in-tree **DNG container codec** — `src/utils/DngRawContainer.js`
(MIT, studio-owned) — parses the DNG TIFF/IFD sensor strips and feeds them
to the demosaic, so DNG files emit `processingMethod: 'raw-wasm'` license-
cleanly. DNG is the one camera-RAW container that is a spec-open (Adobe)
format, so reaching its sensor bytes needs no proprietary container
parser.

The **proprietary** containers (CR2 / CR3 / NEF / ARW / RAF / …) are a
separate, still-gated decision: they are closed binary formats that need a
libraw-class codec. That path remains opt-in via
`src/services/RAWContainerCodec.js`, which feeds a configured codec's
sensor buffer to `src/utils/RAWDemosaic.js` and emits
`processingMethod: 'raw-wasm'`. With no codec configured (the current
default) it is a no-op for those formats and the exifr embedded-JPEG path
is unchanged — so nothing is bundled until a codec is chosen.

When a codec *is* chosen for the proprietary containers, one of three
licensing paths applies, and the chosen license must be added to the table
above **before** it ships.

- **GPL-2.0-or-later** (libraw-derived WASM, e.g. a `raw-wasm` / `kamua`
  build). Highest fidelity. Add a `raw-wasm` row under "GPL-2.0-or-later"
  and note the WASM is dynamically linked across a clean boundary.
- **Apache-2.0 / MIT dual** (a Rust `image-rs` / `raw-rs` codec, if one
  exposes a camera-RAW demosaic). Permissive. Add a permissive row.
- **In-tree shader + in-tree DNG container** (implemented —
  `src/utils/GLRAWDemosaic.js` + `src/utils/DngRawContainer.js`). No new
  dependency; no new row. This path demosaics an unpacked Bayer buffer and
  reaches DNG sensor bytes out of the DNG file license-cleanly; it does not
  parse the proprietary containers, so those still require a codec choice
  above to emit `raw-wasm` for them.

## AI model weights

Model artifacts under `public/models/` (face-api weights, onnx OCR/vision
models) are shipped as data, not code. Their licenses vary by model:
face-api.js weights are MIT/Apache-2.0 in the project's `models/` readme;
any onnx vision models are licensed by their respective publishers. Because
ImageStudio is a local-first tool and never uploads, no network or
attribution obligation is triggered at runtime beyond this notice.

## Source-of-truth references

- `wasm-vips` package: `node_modules/wasm-vips/{LICENSE,THIRD-PARTY-NOTICES.md,versions.json}`
- `jszip` dual license: `node_modules/jszip/LICENSE`
- `@huggingface/transformers` Apache header: `node_modules/@huggingface/transformers/LICENSE`
- Lens DB notice: `public/lens-db/ATTRIBUTION.md`
