var e=`/**
 * BarChartHighDensity — renders 10k+ bars via Canvas
 */
import { useEffect, useRef } from 'react'
import { useChartTheme } from '../hooks/useChartTheme'
import { getCanvasDims } from '../renderer/adapters'
import * as d3 from 'd3'

export const meta = {
  id: 'bar-chart-high-density',
  title: 'High-Density Bar Chart',
  desc: 'Bar chart optimized for 10k+ categories using Canvas',
  category: 'Bars',
  component: 'BarChartHighDensity',
  complexity: 'intermediate',
  interactivity: ['zoom'],
  d3Api: ['d3-scale', 'd3-axis'],
  tags: ['bar', 'high-density', 'canvas', 'performance'],
}

const DEFAULT_DATA = Array.from({ length: 10000 }, (_, i) => ({
  label: \`Item \${i}\`,
  value: Math.random() * 100,
}))

export default function BarChartHighDensity({ data: customData }) {
  const theme = useChartTheme()
  const canvasRef = useRef(null)
  const data = customData || DEFAULT_DATA

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = 400
    const H = 300
    const dims = getCanvasDims({ width: W, height: H, dpr: 2 })
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(2, 2)

    const x = d3.scaleBand()
      .domain(data.map((d, i) => i.toString()))
      .range([dims.padding.left, W - dims.padding.right])
      .padding(0)

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 100])
      .range([H - dims.padding.bottom, dims.padding.top])

    // Draw bars (batched for performance)
    const barWidth = Math.max(1, (W - dims.padding.left - dims.padding.right) / data.length)
    ctx.fillStyle = theme.series(0)

    // Use ImageData for bulk pixel operations (fastest for dense bars)
    const imageData = ctx.createImageData(W, H)
    const pixels = imageData.data

    data.forEach((d, i) => {
      const barX = dims.padding.left + i * barWidth
      const barH = H - dims.padding.bottom - y(d.value)
      const barTop = H - dims.padding.bottom - barH

      // Draw bar column
      for (let py = Math.floor(barTop); py < H - dims.padding.bottom; py++) {
        for (let px = Math.floor(barX); px < barX + barWidth; px++) {
          if (px >= 0 && px < W && py >= 0 && py < H) {
            const idx = (py * W + px) * 4
            pixels[idx] = 99     // R
            pixels[idx + 1] = 102 // G
            pixels[idx + 2] = 241 // B (series-0: #6366f1)
            pixels[idx + 3] = 180 // A
          }
        }
      }
    })

    ctx.putImageData(imageData, 0, 0)

    // Axes overlay
    ctx.strokeStyle = theme.textSecondary
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(dims.padding.left, dims.padding.top)
    ctx.lineTo(dims.padding.left, H - dims.padding.bottom)
    ctx.lineTo(W - dims.padding.right, H - dims.padding.bottom)
    ctx.stroke()

    // Axis labels
    ctx.fillStyle = theme.textSecondary
    ctx.font = '9px sans-serif'
    const labelStep = Math.max(1, Math.floor(data.length / 5))
    for (let i = 0; i < data.length; i += labelStep) {
      const xVal = dims.padding.left + (i / data.length) * dims.plotWidth
      ctx.fillText(i.toString(), xVal, H - dims.padding.bottom + 14)
    }

    const maxVal = d3.max(data, d => d.value) || 0
    for (let i = 0; i <= 4; i++) {
      const val = Math.round(maxVal * i / 4)
      const yVal = H - dims.padding.bottom - (i / 4) * dims.plotHeight
      ctx.fillText(val.toString(), dims.padding.left - 28, yVal + 3)
    }
  }, [data, theme])

  return (
    <div className="canvas-chart-container" style={{ position: 'relative' }}>
      <canvas
        ref={canvasRef}
        width={400 * 2}
        height={300 * 2}
        style={{ width: '400px', height: '300px' }}
        role="img"
        aria-label={\`\${data.length} bar chart (Canvas)\`}
      />
      <div className="chart-renderer-badge" style={{ position: 'absolute', top: 4, right: 4, background: '#10b981', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: '9px', fontFamily: 'monospace' }}>
        Canvas ({data.length.toLocaleString()} bars)
      </div>
    </div>
  )
}
`;export{e as default};