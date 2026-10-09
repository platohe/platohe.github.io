# Bundled fonts

These Noto Sans TTF assets are the single source of truth for PDF text
rendering (`src/utils/headlessLayoutEngine.ts`) and are also the CJK/Arabic
font fallback for the live editor (`src/styles/design.css`).

| File | License | Notes |
|---|---|---|
| `NotoSans-Regular.ttf` | OFL-1.1 | Noto Sans *variable* font — covers all weights (Thin→Black) + Latin, Cyrillic, Arabic |
| `NotoSans-Bold.ttf` | OFL-1.1 | Same variable font registered under the Bold slot |
| `NotoSans-Italic.ttf` | OFL-1.1 | Same variable font registered under the Italic slot |

> **Note on weight fidelity:** all three slots currently point at the same
> *variable* Noto Sans TTF. The engine registers it once per style slot, so
> the PDF text renders in a coherent Noto Sans face. True per-weight
> (Bold/Italic) distinction would need weight-specific TTF instances (or
> the browser's `@font-face` `font-variation-settings`); that's a follow-up.
> For now the export is *coherent* (one real embedded font instead of
> jsPDF's default Helvetica) even if the bold/italic weight difference is
> subtle.

Google Noto Sans is released under the SIL Open Font License, version 1.1,
so bundling these into the repo (and shipping them to a consumer's browser
at runtime) is redistribution-safe.

**Why Noto Sans, not Calibri / Aptos:** the editor's real body font
(Calibri/Aptos — see `src/styles/design.css` `--ds-font-serif`) is a
commercial Microsoft font and is not redistributable. Noto Sans is the
de-facto cross-platform OFL sans-serif with close x-height to Segoe UI,
so the PDF output stays visually coherent with what the user actually sees
on screen without violating the repo's "no external services" principle.

## How they are loaded

`src/utils/headlessLayoutEngine.ts` lazily `fetch()`es each asset on the
first `toPDF` call, base64-encodes the bytes, and hands them to jsPDF via
`pdf.addFont(base64, 'NotoSans', 'normal'|'bold'|'italic', 'Truetype')`.
On fetch failure (offline without the asset, SSR, etc.) the engine falls
back to `helvetica` so an export never hard-crashes.

> **jsPDF gotcha:** `addFont` takes the *format* as its 4th arg —
> `'Truetype'`. Omitting it makes jsPDF treat the base64 payload as a font
> *name* and the next `setFont` call throws
> `t.toLowerCase is not a function` inside jsPDF's `getFont`.

## Adding / swapping a font

Drop new TTFs into this directory, update the `variants` array in the
`ensurePdfFontLoaded` block of `headlessLayoutEngine.ts` with the new
asset URLs, and (if the new font has a narrower Latin coverage) keep the
`helvetica` fallback path.
