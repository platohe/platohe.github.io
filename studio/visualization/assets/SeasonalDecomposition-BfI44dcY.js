var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'seasonal-decomposition',\r
  title: 'Seasonal Decomposition',\r
  desc: 'Seasonal Decomposition — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SeasonalDecomposition',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","seasonal-decomposition"],\r
}\r
\r
export default function SeasonalDecomposition({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [period, setPeriod] = useState(options.period || 12)\r
\r
  const DEFAULT_DATA = {"dates":["2021-09-23","2021-10-23","2021-11-23","2021-12-23","2022-01-23","2022-02-23","2022-03-23","2022-04-23","2022-05-23","2022-06-23","2022-07-23","2022-08-23","2022-09-23","2022-10-23","2022-11-23","2022-12-23","2023-01-23","2023-02-23","2023-03-23","2023-04-23","2023-05-23","2023-06-23","2023-07-23","2023-08-23","2023-09-23","2023-10-23","2023-11-23","2023-12-23","2024-01-23","2024-02-23","2024-03-23","2024-04-23","2024-05-23","2024-06-23","2024-07-23","2024-08-23","2024-09-23","2024-10-23","2024-11-23","2024-12-23","2025-01-23","2025-02-23","2025-03-23","2025-04-23","2025-05-23","2025-06-23","2025-07-23","2025-08-23","2025-09-23","2025-10-23","2025-11-23","2025-12-23","2026-01-23","2026-02-23","2026-03-23","2026-04-23","2026-05-23","2026-06-23","2026-07-23","2026-08-23"],"values":[100.404,105.293,111.07,112.179,109.36,107.606,102.093,98.999,96.802,94.389,95.339,102.028,106.983,110.728,114.449,117.503,117.407,113.942,107.015,104.383,102.689,98.705,102.709,104.626,111.068,115.747,120.403,124.634,122.782,117.608,113.692,111.871,107.291,107.736,107.618,112.3,116.15,121.706,127.887,129.887,127.641,126.083,119.838,115.715,114.294,113.935,114.372,117.317,123.137,128.672,131.959,136.139,135.383,132.272,128.711,120.852,121.115,118.225,122.109,123.049]}\r
\r
  // Simple STL-like decomposition\r
  function decompose(data, period) {\r
    const n = data.length\r
    const trend = new Array(n).fill(0)\r
    const seasonal = new Array(n).fill(0)\r
    const residual = new Array(n).fill(0)\r
\r
    // Simple moving average for trend\r
    const halfPeriod = Math.floor(period / 2)\r
    for (let i = 0; i < n; i++) {\r
      let sum = 0, count = 0\r
      for (let j = Math.max(0, i - halfPeriod); j <= Math.min(n - 1, i + halfPeriod); j++) {\r
        sum += data[j]\r
        count++\r
      }\r
      trend[i] = sum / count\r
    }\r
\r
    // Detrend\r
    const detrended = data.map((d, i) => d - trend[i])\r
\r
    // Seasonal averages\r
    const seasonalSums = new Array(period).fill(0)\r
    const seasonalCounts = new Array(period).fill(0)\r
    for (let i = 0; i < n; i++) {\r
      const idx = i % period\r
      seasonalSums[idx] += detrended[i]\r
      seasonalCounts[idx]++\r
    }\r
    const seasonalPattern = seasonalSums.map((s, i) => seasonalCounts[i] > 0 ? s / seasonalCounts[i] : 0)\r
\r
    // Adjust seasonal to sum to zero\r
    const seasonalMean = d3.mean(seasonalPattern)\r
    for (let i = 0; i < period; i++) {\r
      seasonalPattern[i] -= seasonalMean\r
    }\r
\r
    for (let i = 0; i < n; i++) {\r
      seasonal[i] = seasonalPattern[i % period]\r
      residual[i] = detrended[i] - seasonal[i]\r
    }\r
\r
    return { trend, seasonal, residual }\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { dates, values } = data\r
\r
    if (!values || values.length < period * 2) {\r
      console.warn('Seasonal Decomposition needs at least 2 periods of data')\r
      return\r
    }\r
\r
    const { trend, seasonal, residual } = decompose(values, period)\r
\r
    const n = values.length\r
    const x = d3.scaleLinear().domain([0, n - 1]).range([0, IW])\r
    \r
    const allValues = [...values, ...trend, ...seasonal, ...residual]\r
    const y = d3.scaleLinear().domain(d3.extent(allValues)).range([IH, 0]).nice()\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(4).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    const components = [\r
      { name: 'Original', data: values, color: colors[0], y },\r
      { name: 'Trend', data: trend, color: colors[1], y },\r
      { name: 'Seasonal', data: seasonal, color: colors[2], y: d3.scaleLinear().domain(d3.extent(seasonal)).range([IH, 0]).nice() },\r
      { name: 'Residual', data: residual, color: colors[3], y: d3.scaleLinear().domain(d3.extent(residual)).range([IH, 0]).nice() }\r
    ]\r
\r
    const panelHeight = IH / 4 - 20\r
    const panelGap = 20\r
\r
    components.forEach((comp, idx) => {\r
      const panelY = idx * (panelHeight + panelGap)\r
      const panelG = g.append('g').attr('transform', \`translate(0, \${panelY})\`)\r
\r
      // Panel background\r
      panelG.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', IW).attr('height', panelHeight)\r
        .attr('fill', 'var(--bg-card)').attr('opacity', 0.3)\r
        .attr('rx', 4)\r
\r
      const line = d3.line()\r
        .x((d, i) => x(i))\r
        .y(d => comp.y(d))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      // Area\r
      const area = d3.area()\r
        .x((d, i) => x(i))\r
        .y0(panelHeight)\r
        .y1(d => comp.y(d))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      panelG.append('path')\r
        .datum(comp.data)\r
        .attr('d', area)\r
        .attr('fill', comp.color)\r
        .attr('opacity', 0.15)\r
\r
      // Line\r
      panelG.append('path')\r
        .datum(comp.data)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', comp.color)\r
        .attr('stroke-width', 1.5)\r
\r
      // Label\r
      panelG.append('text')\r
        .attr('x', 10).attr('y', 15)\r
        .attr('font-size', '11px').attr('fill', comp.color).attr('font-weight', 600)\r
        .text(comp.name)\r
\r
      // Mini Y axis\r
      const miniY = comp.y\r
      panelG.append('g')\r
        .attr('transform', \`translate(\${IW},0)\`)\r
        .call(d3.axisRight(miniY).ticks(3).tickSize(0).tickPadding(5))\r
        .call(g => g.select('.domain').remove())\r
        .call(g => g.selectAll('text').attr('font-size', '8px').attr('fill', 'var(--text-secondary)'))\r
    })\r
\r
    // X axis (shared at bottom)\r
    g.append('g')\r
      .attr('transform', \`translate(0, \${components.length * (panelHeight + panelGap) - panelGap})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickFormat((d, i) => dates[i]?.slice(0, 7) || '').tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text(\`Seasonal Decomposition (Period: \${period})\`)\r
\r
  }, [customData, period])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};