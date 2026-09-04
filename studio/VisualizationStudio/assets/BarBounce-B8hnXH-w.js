var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-bounce',\r
  title: 'Bar Bounce',\r
  desc: 'Bar Bounce — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarBounce',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-bounce"],\r
}\r
\r
export default function BarBounce({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const toNum = n => { const x = Number(n); return Number.isFinite(x) ? x : null }\r
    const rawData = Array.isArray(customData) && customData.length ? customData : null\r
    let data\r
    if (rawData) {\r
      const mapped = rawData.map(d => {\r
        if (d == null) return null\r
        if (typeof d === 'number') return toNum(d)\r
        if (typeof d === 'object') {\r
          const v = toNum(d.value ?? d.v ?? d.h ?? d.height)\r
          return v !== null ? v : null\r
        }\r
        return toNum(d)\r
      }).filter(v => v !== null && Number.isFinite(v) && v >= 0)\r
      if (mapped.length) data = mapped.map(v => Math.max(5, Math.min(H - 20, v)))\r
    }\r
    if (!data || !data.length) data = Array.from({ length: 6 }, () => 30 + Math.random() * 70)\r
    data = data.map(v => Number.isFinite(v) ? Math.max(2, Math.min(H - 20, v)) : 30)\r
\r
    const n = data.length || 1, bw = W / n * 0.8, gap = W / n * 0.2\r
    const bwSafe = Number.isFinite(bw) ? bw : 10\r
    const gapSafe = Number.isFinite(gap) ? gap : 2\r
    const BASE = H - 20\r
\r
    // Current animated heights (start at base value)\r
    const curH = [...data]\r
\r
    const bars = svg.selectAll('rect').data(data).join('rect')\r
      .attr('x', (_, i) => i * (bwSafe + gapSafe) + gapSafe / 2)\r
      .attr('y', d => BASE - d)\r
      .attr('width', bwSafe)\r
      .attr('height', d => d)\r
      .attr('fill', (_, i) => colors[i % colors.length])\r
      .attr('rx', 2)\r
\r
    const nodes = bars.nodes()\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.003\r
      data.forEach((baseH, i) => {\r
        // Bounce: sin wave with per-bar phase + smooth lerp for elastic feel\r
        const bounce = Math.abs(Math.sin(t + i * 0.9)) // 0..1\r
        // Spring-like: scale between 0.35x and 1x of base height\r
        const targetH = Math.max(4, baseH * (0.35 + 0.65 * bounce))\r
        curH[i] += (targetH - curH[i]) * 0.22\r
        const h = Math.max(2, curH[i])\r
        const node = nodes[i]\r
        if (!node) return\r
        node.setAttribute('y', String(BASE - h))\r
        node.setAttribute('height', String(h))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};