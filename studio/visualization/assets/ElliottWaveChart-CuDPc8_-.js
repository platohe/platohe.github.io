var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
\r
export const meta = {\r
  id: 'elliott-wave-chart',\r
  title: 'Elliott Wave Chart',\r
  desc: 'Elliott Wave Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ElliottWaveChart',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","elliott-wave-chart"],\r
}\r
\r
export default function ElliottWaveChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [\r
      { date: "2024-01-01", open: 100, high: 105, low: 98, close: 103 },\r
      { date: "2024-01-02", open: 103, high: 108, low: 102, close: 107 },\r
      { date: "2024-01-03", open: 107, high: 110, low: 104, close: 106 },\r
      { date: "2024-01-04", open: 106, high: 112, low: 105, close: 110 },\r
      { date: "2024-01-05", open: 110, high: 115, low: 108, close: 109 },\r
      { date: "2024-01-06", open: 109, high: 114, low: 107, close: 113 },\r
    ]\r
    const raw = (customData && customData[0] && customData[0].open !== undefined) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = raw.map(d => ({ ...d, date: parse(d.date) }))\r
    const hi = d3.max(pts, d => d.high), lo = d3.min(pts, d => d.low)\r
    const pad = (hi - lo) * 0.1 || 5\r
    const x = d3.scaleBand().domain(pts.map(d => d.date)).range([M.left, W - M.right]).padding(0.3)\r
    const xc = d => x(d.date) + x.bandwidth() / 2\r
    const y = d3.scaleLinear().domain([lo - pad, hi + pad]).range([H - M.bottom, M.top])\r
\r
    // Build wave points: alternating highs and lows for 6 segments\r
    const waveVals = []\r
    for (let i = 0; i < pts.length; i++) {\r
      waveVals.push(pts[i].low)\r
      waveVals.push(pts[i].high)\r
    }\r
    // Trim to 6 wave points (0-5 labels)\r
    const wavePoints = waveVals.slice(0, 6).map((v, i) => [M.left + i * (W - M.left - M.right) / 5, y(v)])\r
\r
    const g = svg.append('g')\r
\r
    // Draw and label wave points with staggered reveal\r
    wavePoints.forEach((p, i) => {\r
      g.append('circle')\r
        .attr('cx', p[0]).attr('cy', p[1]).attr('r', 0)\r
        .attr('fill', colors[i % 2 === 0 ? 0 : 3])\r
        .transition().delay(i * 250).duration(400).ease(d3.easeBackOut)\r
        .attr('r', 4)\r
      g.append('text')\r
        .attr('x', p[0]).attr('y', p[1] - 8)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '9px').attr('font-weight', 600)\r
        .attr('opacity', 0)\r
        .text(String(i))\r
        .transition().delay(i * 250 + 200).duration(300).attr('opacity', 1)\r
    })\r
\r
    // Line draws progressively\r
    const line = g.append('path')\r
      .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.4)\r
    const totalLen = d3.line()(wavePoints)\r
    const waveEl = line.node()\r
  const len = (waveEl && typeof waveEl.getTotalLength === 'function') ? waveEl.getTotalLength() : 2000\r
    line.attr('stroke-dasharray', len).attr('stroke-dashoffset', len)\r
      .transition().duration(1800).ease(d3.easeCubicInOut)\r
      .attr('stroke-dashoffset', 0)\r
\r
    g.append('text')\r
      .attr('x', M.left).attr('y', M.top - 6)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '9px')\r
      .text('Elliott waves 0-5')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};