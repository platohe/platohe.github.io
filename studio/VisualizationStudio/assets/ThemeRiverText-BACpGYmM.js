var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'theme-river-text',\r
  title: 'Theme River Text',\r
  desc: 'Theme River Text — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ThemeRiverText',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","theme-river-text"],\r
}\r
\r
export default function ThemeRiverText({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT = {\r
    terms: ['Data', 'Design', 'AI'],\r
    series: Array.from({ length: 12 }, (_, i) => ({\r
      x: i,\r
      Data: 10 + Math.sin(i * 0.6) * 6 + Math.random() * 4,\r
      Design: 8 + Math.cos(i * 0.5) * 5 + Math.random() * 3,\r
      AI: 6 + Math.sin(i * 0.8 + 1) * 4 + Math.random() * 3,\r
    })),\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    let terms = DEFAULT.terms\r
    let series = DEFAULT.series\r
\r
    if (customData) {\r
      if (customData.terms && customData.series) {\r
        terms = customData.terms\r
        series = customData.series\r
      } else if (customData.layers) {\r
        // layers: [{name, values:[{x,y}]}] -> convert\r
        terms = customData.layers.map(l => l.name)\r
        const xs = customData.layers[0]?.values.map(v => v.x) ?? []\r
        series = xs.map((xVal, idx) => {\r
          const obj = { x: xVal }\r
          customData.layers.forEach(l => { obj[l.name] = l.values[idx]?.y ?? 0 })\r
          return obj\r
        })\r
      }\r
    }\r
\r
    const x = d3.scaleLinear().domain(d3.extent(series, d => d.x)).range([0, IW])\r
    const stack = d3.stack().keys(terms).offset(d3.stackOffsetWiggle)\r
    const stacked = stack(series)\r
    const yMin = d3.min(stacked, layer => d3.min(layer, d => d[0]))\r
    const yMax = d3.max(stacked, layer => d3.max(layer, d => d[1]))\r
    const y = d3.scaleLinear().domain([yMin, yMax]).range([IH, 0])\r
\r
    const area = d3.area()\r
      .x(d => x(d.data.x))\r
      .y0(d => y(d[0]))\r
      .y1(d => y(d[1]))\r
      .curve(d3.curveBasis)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    stacked.forEach((layer, i) => {\r
      g.append('path')\r
        .datum(layer)\r
        .attr('d', area)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('opacity', 0.78)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 0.7)\r
    })\r
\r
    // word labels near middle of each stream\r
    const midIdx = Math.floor(series.length / 2)\r
    stacked.forEach((layer, i) => {\r
      const mid = layer[midIdx]\r
      if (!mid) return\r
      const ym = y((mid[0] + mid[1]) / 2)\r
      const xm = x(mid.data.x)\r
      // only if stream thick enough\r
      const thickness = Math.abs(y(mid[1]) - y(mid[0]))\r
      if (thickness < 14) return\r
      g.append('text')\r
        .attr('x', xm).attr('y', ym + 3)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', '#fff').attr('font-size', '8px').attr('font-weight', 700)\r
        .attr('stroke', 'rgba(0,0,0,0.25)').attr('stroke-width', 0.3)\r
        .attr('paint-order', 'stroke')\r
        .text(terms[i])\r
    })\r
\r
    // axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(6))\r
      .call(g2 => g2.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g2 => g2.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', 14)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 700)\r
      .text('ThemeRiver: Topic Flow')\r
\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', H - 4)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
      .text('Stream thickness ∝ topic volume — words anchored in flow')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};