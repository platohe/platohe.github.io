var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
\r
const KEYS = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon']\r
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
\r
function generateFrame(seed) {\r
  return KEYS.map((k, ki) =>\r
    MONTHS.map((m, mi) => ({\r
      key: k, month: m,\r
      value: 20 + Math.sin((mi + ki + seed) / 2) * 15 + Math.cos((mi - ki + seed) / 3) * 10 + 5\r
    }))\r
  ).flat()\r
}\r
\r
const FRAMES = [0, 3, 6, 9].map(generateFrame)\r
\r
// Series keys present in a frame — derived so externally supplied rows\r
// (e.g. editor data with its own key names) stack correctly instead of\r
// hitting the module-level KEYS that only match generated frames.\r
function frameKeys(frame) {\r
  return [...new Set((frame || []).filter(r => r && r.key).map(r => r.key))]\r
}\r
\r
export const meta = {\r
  id: 'streamgraph-transition',\r
  title: 'Streamgraph Transition',\r
  desc: 'Streamgraph Transition — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'StreamgraphTransition',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-transition"],\r
  tags: ["animation","streamgraph-transition"],\r
}\r
\r
export default function StreamgraphTransition({ data }) {\r
  const ref = useRef(null)\r
  const frameRef = useRef(0)\r
  const intervalRef = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const innerW = W - M.left - M.right\r
    const innerH = H - M.top - M.bottom\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    const x = d3.scalePoint().domain(MONTHS).range([0, innerW])\r
\r
    const colorScale = d3.scaleOrdinal().domain(KEYS).range(colors)\r
\r
    // When the editor supplies long-format rows we keep their shape but\r
    // derive animated variants from them — otherwise every interval tick\r
    // redraws the same pinned data and nothing appears to animate.\r
    const baseCustom = (data && Array.isArray(data) && data[0]?.key && data[0]?.month && MONTHS.includes(data[0].month))\r
      ? data.map(r => ({ key: String(r.key), month: String(r.month), value: Number(r.value) }))\r
      : null\r
    const frames = baseCustom\r
      ? [0, 1, 2, 3].map(k => baseCustom.map((r, ri) => ({\r
          ...r,\r
          value: Math.max(1, (Number.isFinite(r.value) ? r.value : 20)\r
            + Math.round(Math.sin(k * 1.9 + ri * 0.7 + r.key.length) * 6) + k * 2),\r
        })))\r
      : FRAMES\r
\r
    function drawFrame(frameIdx) {\r
      const frame = frames[frameIdx % frames.length]\r
\r
      const keys = frameKeys(frame)\r
      if (keys.length === 0) return KEYS\r
\r
      // Only months actually covered by the frame — externally supplied rows\r
      // may span fewer months than the generated 12-month frames, and empty\r
      // month rows would stack to NaN.\r
      const months = MONTHS.filter(m => frame.some(r => r && r.month === m && keys.includes(r.key)))\r
      if (months.length === 0) return KEYS\r
      x.domain(months)\r
\r
      // Pivot: { month -> { key: value } }; sparse key/month cells default to 0.\r
      const byMonth = {}\r
      months.forEach(m => { byMonth[m] = { month: m } })\r
      frame.forEach(r => {\r
        if (r && r.month && byMonth[r.month] && r.key && keys.includes(r.key)) {\r
          const v = Number(r.value)\r
          byMonth[r.month][r.key] = Number.isFinite(v) ? v : 0\r
        }\r
      })\r
      const rows = months.map(m => byMonth[m])\r
\r
      const stack = d3.stack()\r
        .keys(keys)\r
        .offset(d3.stackOffsetWiggle)\r
        .order(d3.stackOrderInsideOut)\r
\r
      const series = stack(rows)\r
\r
      const yExtent = [\r
        d3.min(series, s => d3.min(s, dd => dd[0])),\r
        d3.max(series, s => d3.max(s, dd => dd[1])),\r
      ]\r
\r
      const y = d3.scaleLinear().domain(yExtent).range([innerH, 0])\r
\r
      const area = d3.area()\r
        .x(d => x(d.data.month))\r
        .y0(d => y(d[0]))\r
        .y1(d => y(d[1]))\r
        .curve(d3.curveCatmullRom)\r
\r
      // Bind and transition — enter and update selections are merged so new\r
      // layers fade in and existing ones morph between frames (unmerged\r
      // enter selections rendered each swap as an abrupt content change).\r
      const paths = g.selectAll('.stream-path').data(series, s => s.key)\r
\r
      const entered = paths.enter().append('path').attr('class', 'stream-path')\r
        .attr('fill', s => colorScale(s.key))\r
        .attr('opacity', 0)\r
        .attr('d', s => area(s.map((dd, i) => Object.assign([...dd], { data: rows[i] }))))\r
\r
      entered.merge(paths)\r
        .transition().duration(800).ease(d3.easeCubicInOut)\r
        .attr('opacity', 0.8)\r
        .attr('d', s => area(s.map((dd, i) => Object.assign([...dd], { data: rows[i] }))))\r
\r
      paths.exit().transition().duration(400).attr('opacity', 0).remove()\r
\r
      return keys\r
    }\r
\r
    const legendKeys = drawFrame(0)\r
\r
    intervalRef.current = setInterval(() => {\r
      frameRef.current = (frameRef.current + 1) % FRAMES.length\r
      drawFrame(frameRef.current)\r
    }, 1800)\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${innerH})\`)\r
      .call(d3.axisBottom(x).tickSize(0))\r
      .call(gg => gg.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gg => gg.selectAll('.tick text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Legend\r
    legendKeys.forEach((k, i) => {\r
      svg.append('circle').attr('cx', M.left + i * 62).attr('cy', H - 4).attr('r', 4).attr('fill', colorScale(k))\r
      svg.append('text').attr('x', M.left + i * 62 + 8).attr('y', H)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(k)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', 14)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Streamgraph Transition · Animated States')\r
\r
    return () => clearInterval(intervalRef.current)\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};