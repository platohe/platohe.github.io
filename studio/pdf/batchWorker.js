// src/workers/batchWorker.js
// Web Worker for batch PDF processing (merge, split, compress, watermark, etc.)
// Keeps UI responsive by offloading pdf-lib operations to a background thread.

/* eslint-env worker */

importScripts('pdf-lib.esm.js')

const { PDFDocument, StandardFonts, rgb, degrees } = PDFLib

// --- Worker message protocol ---
// { type: 'batch', id, files: ArrayBuffer[], operation, opts }
// { type: 'cancel', id }
// { type: 'progress', id, done, total, label }
// { type: 'result', id, result, error, failed }

const activeJobs = new Map()

async function runBatch(job) {
  const { id, files, operation, opts } = job
  const failed = []

  try {
    if (operation === 'merge') {
      postMessage({ type: 'progress', id, done: 0, total: 1, label: 'Merging…' })
      const out = await PDFDocument.create()
      for (let i = 0; i < files.length; i++) {
        const src = await PDFDocument.load(files[i])
        const pages = await out.copyPages(src, src.getPageIndices())
        pages.forEach(p => out.addPage(p))
        postMessage({ type: 'progress', id, done: i + 1, total: files.length, label: `Merged ${i + 1}/${files.length}` })
      }
      const bytes = await out.save()
      postMessage({ type: 'result', id, result: bytes, failed: [] })
    } else if (operation === 'split') {
      const { ranges } = opts
      const results = []
      for (let r = 0; r < ranges.length; r++) {
        const [start, end] = ranges[r]
        const out = await PDFDocument.create()
        for (let i = 0; i < files.length; i++) {
          const pdf = await PDFDocument.load(files[i])
          const pageIndices = pdf.getPageIndices().slice(start, end)
          if (pageIndices.length > 0) {
            const copied = await out.copyPages(pdf, pageIndices)
            copied.forEach(p => out.addPage(p))
          }
        }
        const bytes = await out.save()
        results.push(bytes)
        postMessage({ type: 'progress', id, done: r + 1, total: ranges.length, label: `Split range ${r + 1}/${ranges.length}` })
      }
      postMessage({ type: 'result', id, result: results, failed: [] })
    } else {
      // Per-file operations
      const results = []
      for (let i = 0; i < files.length; i++) {
        let out
        try {
          const pdf = await PDFDocument.load(files[i])
          if (operation === 'compress') {
            out = await pdf.save({ useObjectStreams: true, addDefaultPage: false })
          } else if (operation === 'watermark') {
            const { text = 'CONFIDENTIAL', opacity = 0.18, fontSize = 48, rotation = -30 } = opts
            const font = await pdf.embedFont(StandardFonts.Helvetica)
            const degree = (Math.PI / 180) * rotation
            for (const page of pdf.getPages()) {
              const { width, height } = page.getSize()
              const tw = font.widthOfTextAtSize(text, fontSize)
              const cx = width / 2 - (tw / 2) * Math.cos(degree)
              const cy = height / 2 + (tw / 2) * Math.sin(degree)
              page.drawText(text, { x: cx, y: cy, size: fontSize, font, color: rgb(0.58, 0.62, 0.71), opacity, rotate: degrees(rotation) })
            }
            out = await pdf.save()
          } else if (operation === 'encrypt') {
            const { userPassword, ownerPassword } = opts
            out = await pdf.save({ userPassword, ownerPassword: ownerPassword || userPassword })
          } else if (operation === 'pageNumbers') {
            const { fontSize = 12, align = 'center' } = opts
            const font = await pdf.embedFont(StandardFonts.Helvetica)
            const pages = pdf.getPages()
            pages.forEach((page, pIdx) => {
              const label = `${pIdx + 1} / ${pages.length}`
              const tw = font.widthOfTextAtSize(label, fontSize)
              const { width } = page.getSize()
              let x = width / 2 - tw / 2
              if (align === 'left') x = 24
              else if (align === 'right') x = width - 24 - tw
              page.drawText(label, { x, y: 24, size: fontSize, font, color: rgb(0.42, 0.45, 0.48) })
            })
            out = await pdf.save()
          }
          results.push(out)
        } catch (err) {
          failed.push({ index: i, error: err?.message || String(err) })
        }
        postMessage({ type: 'progress', id, done: i + 1, total: files.length, label: `${i + 1}/${files.length} done` })
      }
      postMessage({ type: 'result', id, result: results, failed })
    }
  } catch (err) {
    postMessage({ type: 'result', id, error: err?.message || String(err), failed })
  }
}

self.onmessage = (e) => {
  const msg = e.data
  if (msg.type === 'batch') {
    runBatch(msg)
  } else if (msg.type === 'cancel') {
    // Cancellation is best-effort; pdf-lib doesn't support abort natively.
    // We just drop the job from tracking.
    activeJobs.delete(msg.id)
  }
}

// Ping to keep worker alive
setInterval(() => {}, 30000)