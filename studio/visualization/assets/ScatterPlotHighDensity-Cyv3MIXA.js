var e=`/**
 * ScatterPlotHighDensity — renders up to 100k points using Canvas for performance
 * Falls back to SVG for small datasets
 */
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { useChartTheme } from '../hooks/useChartTheme'
import {
  getCanvasDims,
  drawAxes,
  drawGrid,
  renderScatterCanvas,
  isCanvasSupported,
} from '../renderer/adapters'

export const meta = {
  id: 'scatter-plot-high-density',
  title: 'High-Density Scatter Plot',
  desc: 'Scatter plot optimized for 10k+ data points using Canvas rendering',
  category: 'Dots',
  component: 'ScatterPlotHighDensity',
  complexity: 'intermediate',
  interactivity: ['zoom'],
  d3Api: ['d3-scale'],
  tags: ['scatter', 'high-density', 'canvas', 'performance'],
  filterKeys: ['x', 'y'],
  linkedDims: ['x', 'y'],
}

const DEFAULT_DATA = Array.from({ length: 500 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: 2 + Math.random() * 3,
  color: Math.random() > 0.7 ? '#ef4444' : undefined,
}))

const DEFAULT_HIGH_DENSITY = Array.from({ length: 10000 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: 1.5,
}))

export default function ScatterPlotHighDensity({
  data: customData,
  pointCount = 500,
}) {
  const theme = useChartTheme()
  const ref = useRef(null)
  const [renderMode, setRenderMode] = useState<'svg' | 'canvas'>('svg')
  const [pointCountState, setPointCountState] = useState(pointCount)

  const data = customData || (pointCountState > 1000 ? DEFAULT_HIGH_DENSITY.slice(0, pointCountState) : DEFAULT_DATA.slice(0, pointCountState))
  const useCanvas = pointCountState > 500 && isCanvasSupported()
  const W = 400
  const H = 300
  const M = { top: 20, right: 20, bottom: 35, left: 50 }
  const IW = W - M.left - M.right
  const IH = H - M.top - M.bottom

  useEffect(() => {
    setRenderMode(useCanvas ? 'canvas' : 'svg')
  }, [useCanvas])

  if (useCanvas) {
    return (
      <div className="canvas-chart-container" style={{ position: 'relative' }}>
        <canvas
          ref={ref}
          width={W * 2}
          height={H * 2}
          style={{ width: \`\${W}px\`, height: \`\${H}px\` }}
          role="img"
          aria-label={\`\${data.length} point scatter plot (Canvas)\`}
        />
        <div className="chart-renderer-badge" style={{ position: 'absolute', top: 4, right: 4, background: theme.series(2), color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: '9px', fontFamily: 'monospace' }}>
          Canvas
        </div>
      </div>
    )
  }

  return <SvgScatterPlot data={data} W={W} H={H} M={M} IW={IW} IH={IH} theme={theme} />
}

function SvgScatterPlot({ data, W, H, M, IW, IH, theme }) {
  const svgRef = useRef(null)

  useEffect(() => {
    if (!svgRef.current) return
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([M.left, W - M.right])

    const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.y))
      .range([H - M.bottom, M.top])

    const g = svg.append('g')

    // Grid
    g.append('g')
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').attr('stroke', theme.border).attr('stroke-opacity', 0.3))
      .call(g => g.selectAll('text').attr('fill', theme.textSecondary).attr('font-size', '10px'))
      .lower()

    // Points
    g.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', d => x(d.x))
      .attr('cy', d => y(d.y))
      .attr('r', d => d.r ?? 3)
      .attr('fill', d => d.color || theme.series(0))
      .attr('opacity', 0.7)

    // Axes
    g.append('g')
      .attr('transform', \`translate(0,\${H - M.bottom})\`)
      .call(d3.axisBottom(x).ticks(5))
      .call(g => g.selectAll('text').attr('fill', theme.textSecondary).attr('font-size', '10px'))
      .call(g => g.select('.domain').attr('stroke', theme.border))

    g.append('g')
      .call(d3.axisLeft(y).ticks(5))
      .call(g => g.selectAll('text').attr('fill', theme.textSecondary).attr('font-size', '10px'))
      .call(g => g.select('.domain').attr('stroke', theme.border))

    svg.attr('role', 'img').attr('aria-label', \`\${data.length} point scatter plot\`)
  }, [data, W, H, M, IW, IH, theme])

  return (
    <svg ref={svgRef} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`}>
      <title>Scatter Plot</title>
    </svg>
  )
}

`;export{e as default};