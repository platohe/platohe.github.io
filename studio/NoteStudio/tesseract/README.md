# Bundled Tesseract OCR assets (P1-5, plan.md)

This directory is where NoteStudio ships Tesseract's on-device OCR runtime so
Ink-to-Text and image OCR work **fully offline** from the PWA — no runtime
download from a CDN.

## Files
- `tesseract-core.wasm` — the Tesseract C++ core (3.4 MB), copied from
  `node_modules/tesseract.js-core/`. The `?url` import in `App.jsx` and the
  PWA precache both resolve to this file.
- `eng.traineddata` — **placeholder**. Drop the real Tesseract English
  traineddata (LSTM, `.traineddata` ~10–15 MB or the 4.0 `best` variant
  ~3.5 MB) here. Until then, OCR falls back to the bundled WASM and the
  `langPath` points at this directory; a missing `eng.traineddata` means
  Tesseract degrades to "no language loaded" rather than a 404 from a CDN.

## Why a placeholder instead of a committed binary
A 10 MB traineddata in the repo would double the bundle and trip every
diff-based review. The Nexus convention is: the *build* wires the precache
glob (`vite.config.js` → `workbox.globPatterns` includes `tesseract/**`) so
that **whenever** a real `eng.traineddata` lands in this directory, the next
`npm run build` automatically ships it in the PWA's offline manifest. The
structural offline path (WASM bundled, langPath → `./tesseract/`) is correct
now; only the model binary itself is pending a one-time drop-in.

## To add the model (one-time)
```bash
# Any of these work — pick the smallest that fits your accuracy bar:
#   - eng.traineddata (LSTM, ~10 MB)        https://github.com/tesseract-ocr/tessdata
#   - eng.traineddata (4.0 best, ~3.5 MB)   https://github.com/tesseract-ocr/tessdata_best
curl -L -o public/tesseract/eng.traineddata \
  https://github.com/tesseract-ocr/tessdata_best/raw/main/eng.traineddata
# Then:
npm run build   # the PWA precache picks it up automatically
```

## The structural fix (already shipped)
`App.jsx`'s OCR worker now points at the bundled WASM + `langPath:
'./tesseract/'` instead of the old hand-rolled `new URL('tesseract.js-core',
import.meta.url)` that 404'd offline. See `src/App.jsx` → `handleInkToText`
/ `handlePasteWithOCR`.
