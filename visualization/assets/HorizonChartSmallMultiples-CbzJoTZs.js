var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'horizon-chart-small-multiples',\r
  title: 'Horizon Chart Small Multiples',\r
  desc: 'Horizon Chart Small Multiples — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonChartSmallMultiples',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-chart-small-multiples"],\r
}\r
\r
export default function HorizonChartSmallMultiples({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {\r
    metrics: [\r
      { name: 'Revenue', color: colors[0], data: generateSeries(100, 1000, 100) },\r
      { name: 'Users', color: colors[1], data: generateSeries(100, 5000, 500) },\r
      { name: 'Sessions', color: colors[2], data: generateSeries(100, 8000, 800) },\r
      { name: 'Conversion', color: colors[3], data: generateSeries(100, 0.05, 0.01) },\r
      { name: 'Churn', color: colors[4], data: generateSeries(100, 0.03, 0.005) },\r
      { name: 'NPS', color: colors[5], data: generateSeries(100, 50, 5) },\r
      { name: 'Support Tickets', color: colors[6], data: generateSeries(100, 200, 50) },\r
      { name: 'Page Views', color: colors[7], data: generateSeries(100, 10000, 2000) }\r
    ]\r
  }\r
\r
  function generateSeries(n, center, spread) {\r
    let val = center\r
    return d3.range(n).map((_, i) => {\r
      val += (Math.random() - 0.5) * spread * 0.3\r
      val = Math.max(0, val + (Math.random() - 0.5) * spread * 0.1)\r
      return { x: i, y: val }\r
    })\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && customData.metrics) ? customData : DEFAULT_DATA\r
    const { metrics } = input\r
\r
    const nMetrics = metrics.length\r
    const nCols = 2\r
    const nRows = Math.ceil(nMetrics / nCols)\r
    const cellW = IW / nCols\r
    const cellH = IH / nRows\r
    const padding = 6\r
\r
    const g = svg.append('g')\r
\r
    metrics.forEach((metric, idx) => {\r
      const col = idx % nCols\r
      const row = Math.floor(idx / nCols)\r
      const cellX = M.left + col * cellW + padding\r
      const cellY = M.top + row * cellH + padding\r
      const w = cellW - 2 * padding\r
      const h = cellH - 2 * padding\r
\r
      // Horizon chart: split into bands around median\r
      const values = metric.data.map(d => d.y)\r
      const median = d3.median(values)\r
      const maxVal = d3.max(values)\r
      const minVal = d3.min(values)\r
      const range = maxVal - minVal\r
      const bands = 2 // positive and negative from median\r
      const bandHeight = h / (bands * 2)\r
\r
      const x = d3.scaleLinear()\r
        .domain([0, metric.data.length - 1])\r
        .range([0, w])\r
\r
      const y = d3.scaleLinear()\r
        .domain([minVal, maxVal])\r
        .range([h, 0])\r
\r
      const cellG = g.append('g')\r
        .attr('transform', \`translate(\${cellX}, \${cellY})\`)\r
\r
      // Metric label\r
      cellG.append('text')\r
        .attr('x', 0)\r
        .attr('y', -3)\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '8px')\r
        .attr('font-weight', 600)\r
        .text(metric.name)\r
\r
      // Horizon bands\r
      // Positive bands (above median) - blue shades\r
      for (let b = 0; b < bands; b++) {\r
        const upper = median + (b + 1) * (maxVal - median) / bands\r
        const lower = median + b * (maxVal - median) / bands\r
\r
        const area = d3.area()\r
          .curve(d3.curveBasis)\r
          .x(d => x(d.x))\r
          .y0(d => Math.min(y(lower), y(median)))\r
          .y1(d => y(Math.min(Math.max(d.y, lower), upper)))\r
\r
        const intensity = 0.3 + (b / bands) * 0.6\r
        cellG.append('path')\r
          .datum(metric.data)\r
          .attr('d', area)\r
          .attr('fill', d3.interpolateBlues(intensity))\r
          .attr('fill-opacity', 0.8)\r
      }\r
\r
      // Negative bands (below median) - red shades\r
      for (let b = 0; b < bands; b++) {\r
        const lower = median - (b + 1) * (median - minVal) / bands\r
        const upper = median - b * (median - minVal) / bands\r
\r
        const area = d3.area()\r
          .curve(d3.curveBasis)\r
          .x(d => x(d.x))\r
          .y0(d => Math.max(y(upper), y(median)))\r
          .y1(d => y(Math.max(Math.min(d.y, upper), lower)))\r
\r
        const intensity = 0.3 + (b / bands) * 0.6\r
        cellG.append('path')\r
          .datum(metric.data)\r
          .attr('d', area)\r
          .attr('fill', d3.interpolateReds(intensity))\r
          .attr('fill-opacity', 0.8)\r
      }\r
\r
      // Median line\r
      cellG.append('line')\r
        .attr('x1', 0).attr('x2', w)\r
        .attr('y1', y(median)).attr('y2', y(median))\r
        .attr('stroke', 'var(--text)').attr('stroke-width', 0.5)\r
        .attr('stroke-dasharray', '2,2')\r
\r
      // Sparkline for reference (thin line)\r
      const line = d3.line()\r
        .curve(d3.curveBasis)\r
        .x(d => x(d.x))\r
        .y(d => y(d.y))\r
\r
      cellG.append('path')\r
        .datum(metric.data)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', metric.color)\r
        .attr('stroke-width', 0.8)\r
        .attr('stroke-opacity', 0.6)\r
\r
      // Y-axis label (min/max)\r
      cellG.append('text')\r
        .attr('x', -4)\r
        .attr('y', 0)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '6px')\r
        .text(d3.format('.1f')(maxVal))\r
\r
      cellG.append('text')\r
        .attr('x', -4)\r
        .attr('y', h)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '6px')\r
        .text(d3.format('.1f')(minVal))\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('Horizon Chart Small Multiples')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Blue = above median | Red = below median')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};