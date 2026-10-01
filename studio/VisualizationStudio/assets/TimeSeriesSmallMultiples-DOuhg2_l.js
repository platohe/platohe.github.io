var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'time-series-small-multiples',\r
  title: 'Time Series Small Multiples',\r
  desc: 'Time Series Small Multiples — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TimeSeriesSmallMultiples',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","time-series-small-multiples"],\r
}\r
\r
export default function TimeSeriesSmallMultiples({ data: customData }) {\r
  const ref = useRef(null)\r
  const [chartType, setChartType] = useState('line')\r
\r
  const DEFAULT_DATA = {\r
    series: [\r
      { name: 'Revenue', color: colors[0], data: generateSeries(50, 1000, 50) },\r
      { name: 'Users', color: colors[1], data: generateSeries(50, 5000, 200) },\r
      { name: 'Sessions', color: colors[2], data: generateSeries(50, 8000, 300) },\r
      { name: 'Conversion Rate', color: colors[3], data: generateSeries(50, 0.05, 0.01) },\r
      { name: 'Churn Rate', color: colors[4], data: generateSeries(50, 0.03, 0.005) },\r
      { name: 'NPS Score', color: colors[5], data: generateSeries(50, 50, 5) }\r
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
    const input = (customData && customData.series) ? customData : DEFAULT_DATA\r
    const { series } = input\r
\r
    const nSeries = series.length\r
    const nCols = 3\r
    const nRows = Math.ceil(nSeries / nCols)\r
    const cellW = IW / nCols\r
    const cellH = IH / nRows\r
    const padding = 8\r
\r
    const allValues = series.flatMap(s => s.data.map(d => d.y))\r
    const globalYMin = d3.min(allValues) || 0\r
    const globalYMax = d3.max(allValues) || 1\r
    const globalXMin = 0\r
    const globalXMax = d3.max(series[0]?.data.map(d => d.x) || [0])\r
\r
    const g = svg.append('g')\r
\r
    // Chart type selector\r
    const selector = g.append('g')\r
      .attr('transform', \`translate(\${M.left}, \${M.top - 30})\`)\r
      .style('font-size', '8px')\r
\r
    const types = ['line', 'area', 'horizon']\r
    types.forEach((type, i) => {\r
      const btn = selector.append('g')\r
        .attr('transform', \`translate(\${i * 65}, 0)\`)\r
        .style('cursor', 'pointer')\r
        .on('click', () => setChartType(type))\r
\r
      btn.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', 60).attr('height', 20)\r
        .attr('rx', 3)\r
        .attr('fill', chartType === type ? colors[0] : 'var(--border)')\r
        .attr('stroke', chartType === type ? colors[0] : 'transparent')\r
        .attr('stroke-width', 1)\r
\r
      btn.append('text')\r
        .attr('x', 30).attr('y', 14)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', chartType === type ? 'white' : 'var(--text-secondary)')\r
        .attr('font-size', '8px')\r
        .attr('font-weight', 500)\r
        .text(type.charAt(0).toUpperCase() + type.slice(1))\r
    })\r
\r
    series.forEach((s, idx) => {\r
      const col = idx % nCols\r
      const row = Math.floor(idx / nCols)\r
      const cellX = M.left + col * cellW + padding\r
      const cellY = M.top + row * cellH + padding + 10\r
      const w = cellW - 2 * padding\r
      const h = cellH - 2 * padding - 10\r
\r
      const seriesValues = s.data.map(d => d.y)\r
      const yMin = chartType === 'horizon' ? d3.min(seriesValues) : globalYMin\r
      const yMax = chartType === 'horizon' ? d3.max(seriesValues) : globalYMax\r
\r
      const x = d3.scaleLinear()\r
        .domain([globalXMin, globalXMax])\r
        .range([0, w])\r
\r
      const y = d3.scaleLinear()\r
        .domain([yMin, yMax])\r
        .range([h, 0])\r
\r
      const cellG = g.append('g')\r
        .attr('transform', \`translate(\${cellX}, \${cellY})\`)\r
\r
      // Series label\r
      cellG.append('text')\r
        .attr('x', 0)\r
        .attr('y', -5)\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 600)\r
        .text(s.name)\r
\r
      // Grid\r
      cellG.append('g')\r
        .attr('transform', \`translate(0,\${h})\`)\r
        .call(d3.axisBottom(x).ticks(4).tickSize(-h).tickPadding(4))\r
        .call(gr => gr.select('.domain').remove())\r
        .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.3))\r
        .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6px'))\r
\r
      cellG.append('g')\r
        .call(d3.axisLeft(y).ticks(3).tickSize(-w).tickPadding(4))\r
        .call(gr => gr.select('.domain').remove())\r
        .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.3))\r
        .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6px'))\r
\r
      if (chartType === 'line') {\r
        const line = d3.line()\r
          .curve(d3.curveBasis)\r
          .x(d => x(d.x))\r
          .y(d => y(d.y))\r
\r
        cellG.append('path')\r
          .datum(s.data)\r
          .attr('d', line)\r
          .attr('fill', 'none')\r
          .attr('stroke', s.color)\r
          .attr('stroke-width', 1.5)\r
          .attr('stroke-linecap', 'round')\r
          .attr('stroke-linejoin', 'round')\r
      } else if (chartType === 'area') {\r
        const area = d3.area()\r
          .curve(d3.curveBasis)\r
          .x(d => x(d.x))\r
          .y0(h)\r
          .y1(d => y(d.y))\r
\r
        cellG.append('path')\r
          .datum(s.data)\r
          .attr('d', area)\r
          .attr('fill', s.color)\r
          .attr('fill-opacity', 0.3)\r
\r
        const line = d3.line()\r
          .curve(d3.curveBasis)\r
          .x(d => x(d.x))\r
          .y(d => y(d.y))\r
\r
        cellG.append('path')\r
          .datum(s.data)\r
          .attr('d', line)\r
          .attr('fill', 'none')\r
          .attr('stroke', s.color)\r
          .attr('stroke-width', 1.5)\r
          .attr('stroke-linecap', 'round')\r
      } else if (chartType === 'horizon') {\r
        drawHorizonChart(cellG, s.data, w, h, x, y, s.color)\r
      }\r
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
      .text('Time Series Small Multiples — Line / Area / Horizon')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Click to switch views')\r
  }, [customData, chartType])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
\r
function drawHorizonChart(cellG, data, w, h, x, y, color) {\r
  const seriesValues = data.map(d => d.y)\r
  const median = d3.median(seriesValues)\r
  const bands = 2\r
  const bandHeight = h / (bands * 2)\r
\r
  const posColor = d3.interpolateBlues\r
  const negColor = d3.interpolateReds\r
\r
  data.forEach((d, i) => {\r
    if (i === 0) return\r
    const prev = data[i - 1]\r
    const val1 = d.y\r
    const val2 = prev.y\r
\r
    for (let b = 0; b < bands; b++) {\r
      const upper = median + (b + 1) * (yMax - median) / bands\r
      const lower = median + b * (yMax - median) / bands\r
\r
      const v1 = Math.min(Math.max(val1, lower), upper)\r
      const v2 = Math.min(Math.max(val2, lower), upper)\r
\r
      if (v1 !== v2 || v1 !== lower) {\r
        const intensity = (v1 - lower) / (upper - lower)\r
        cellG.append('line')\r
          .attr('x1', x(prev.x))\r
          .attr('x2', x(d.x))\r
          .attr('y1', y(lower) + bandHeight * (1 - intensity))\r
          .attr('y2', y(lower) + bandHeight * (1 - (v2 - lower) / (upper - lower)))\r
          .attr('stroke', posColor(0.3 + intensity * 0.7))\r
          .attr('stroke-width', bandHeight)\r
          .attr('stroke-linecap', 'round')\r
      }\r
    }\r
\r
    for (let b = 0; b < bands; b++) {\r
      const lower = median - (b + 1) * (median - yMin) / bands\r
      const upper = median - b * (median - yMin) / bands\r
\r
      const v1 = Math.min(Math.max(val1, lower), upper)\r
      const v2 = Math.min(Math.max(val2, lower), upper)\r
\r
      if (v1 !== v2 || v1 !== lower) {\r
        const intensity = (upper - v1) / (upper - lower)\r
        cellG.append('line')\r
          .attr('x1', x(prev.x))\r
          .attr('x2', x(d.x))\r
          .attr('y1', y(upper) - bandHeight * (1 - intensity))\r
          .attr('y2', y(upper) - bandHeight * (1 - (upper - v2) / (upper - lower)))\r
          .attr('stroke', negColor(0.3 + intensity * 0.7))\r
          .attr('stroke-width', bandHeight)\r
          .attr('stroke-linecap', 'round')\r
      }\r
    }\r
  })\r
}`;export{e as default};