var e=`/**
 * LineChartHighDensity — renders time series with 10k+ points via Canvas
 */
import { useEffect, useRef } from 'react'
import { useChartTheme } from '../hooks/useChartTheme'
import { renderLineCanvas, getCanvasDims } from '../renderer/adapters'
import * as d3 from 'd3'

export const meta = {
  id: 'line-chart-high-density',
  title: 'High-Density Line Chart',
  desc: 'Time series line chart optimized for 10k+ data points',
  category: 'Lines',
  component: 'LineChartHighDensity',
  complexity: 'intermediate',
  interactivity: ['zoom'],
  d3Api: ['d3-scale', 'd3-line'],
  tags: ['line', 'timeseries', 'high-density', 'canvas'],
  filterKeys: ['x', 'y'],
  linkedDims: ['x', 'y'],
}

const DEFAULT_DATA = Array.from({ length: 10000 }, (_, i) => ({
  x: i,
  y: 50 + Math.sin(i * 0.01) * 30 + Math.random() * 10,
}))

export default function LineChartHighDensity({ data: customData }) {
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

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([dims.padding.left, W - dims.padding.right])

    const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.y))
      .range([H - dims.padding.bottom, dims.padding.top])

    // Draw grid
    ctx.strokeStyle = theme.border
    ctx.lineWidth = 0.5
    for (let i = 0; i <= 5; i++) {
      const gx = dims.padding.left + (dims.plotWidth * i) / 5
      ctx.beginPath()
      ctx.moveTo(gx, dims.padding.top)
      ctx.lineTo(gx, H - dims.padding.bottom)
      ctx.stroke()

      const gy = dims.padding.top + (dims.plotHeight * i) / 5
      ctx.beginPath()
      ctx.moveTo(dims.padding.left, gy)
      ctx.lineTo(W - dims.padding.right, gy)
      ctx.stroke()
    }

    // Draw axes
    ctx.strokeStyle = theme.textSecondary
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(dims.padding.left, dims.padding.top)
    ctx.lineTo(dims.padding.left, H - dims.padding.bottom)
    ctx.lineTo(W - dims.padding.right, H - dims.padding.bottom)
    ctx.stroke()

    // Draw line
    renderLineCanvas(ctx, data, x, y, dims, {
      color: theme.series(0),
      width: 1.5,
      curve: d3.curveCatmullRom.alpha(0.5),
    })

    // Draw axis labels
    ctx.fillStyle = theme.textSecondary
    ctx.font = '9px sans-serif'
    for (let i = 0; i <= 5; i++) {
      const val = x.invert(dims.padding.left + (dims.plotWidth * i) / 5)
      ctx.fillText(Math.round(val).toString(), dims.padding.left + (dims.plotWidth * i) / 5 - 8, H - dims.padding.bottom + 14)

      const valY = y.invert(dims.padding.top + (dims.plotHeight * i) / 5)
      ctx.fillText(Math.round(valY).toString(), dims.padding.left - 32, dims.padding.top + (dims.plotHeight * i) / 5 + 3)
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
        aria-label={\`\${data.length} point line chart (Canvas)\`}
      />
      <div className="chart-renderer-badge" style={{ position: 'absolute', top: 4, right: 4, background: '#10b981', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: '9px', fontFamily: 'monospace' }}>
        Canvas ({data.length.toLocaleString()} pts)
      </div>
    </div>
  )
}
`;export{e as default};