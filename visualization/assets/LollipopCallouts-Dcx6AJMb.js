var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'lollipop-callouts',\r
  title: 'Lollipop Callouts',\r
  desc: 'Lollipop Callouts — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'LollipopCallouts',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["historical","lollipop-callouts"],\r
}\r
\r
export default function LollipopCallouts({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Product A","value":92,"highlight":true,"note":"Best seller"},{"label":"Product B","value":78,"highlight":false},{"label":"Product C","value":65,"highlight":false},{"label":"Product D","value":94,"highlight":true,"note":"New launch"},{"label":"Product E","value":55,"highlight":false},{"label":"Product F","value":83,"highlight":false,"note":"Trending up"},{"label":"Product G","value":41,"highlight":false},{"label":"Product H","value":70,"highlight":false}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? [...customData].sort((a, b) => b.value - a.value)\r
      : [...DEFAULT_DATA].sort((a, b) => b.value - a.value)\r
\r
    const margin = { top: 30, right: 80, bottom: 30, left: 100 }\r
    const w = W - margin.left - margin.right\r
    const rowH = (H - margin.top - margin.bottom) / data.length\r
\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, w])\r
    const color = d3.scaleOrdinal(colors)\r
\r
    data.forEach((d, i) => {\r
      const gy = margin.top + i * rowH + rowH / 2\r
      const isHighlight = d.highlight\r
      const col = isHighlight ? '#6366f1' : color(i % colors.length)\r
\r
      svg.append('text')\r
        .attr('x', margin.left - 8).attr('y', gy + 4)\r
        .attr('text-anchor', 'end').attr('fill', isHighlight ? col : 'var(--text)')\r
        .attr('font-size', isHighlight ? '11px' : '10px').attr('font-weight', isHighlight ? 700 : 500)\r
        .text(d.label)\r
\r
      svg.append('line')\r
        .attr('x1', margin.left).attr('x2', margin.left + x(d.value))\r
        .attr('y1', gy).attr('y2', gy)\r
        .attr('stroke', col).attr('stroke-width', isHighlight ? 2.5 : 1.8).attr('opacity', isHighlight ? 1 : 0.7)\r
\r
      svg.append('circle')\r
        .attr('cx', margin.left + x(d.value)).attr('cy', gy).attr('r', isHighlight ? 7 : 5)\r
        .attr('fill', col).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
      svg.append('text')\r
        .attr('x', margin.left + x(d.value) + 10).attr('y', gy + 4)\r
        .attr('fill', col).attr('font-size', '10px').attr('font-weight', 600)\r
        .text(d.value)\r
\r
      if (d.note) {\r
        const nx = margin.left + x(d.value) + 28\r
        svg.append('text')\r
          .attr('x', nx).attr('y', gy + 4)\r
          .attr('fill', '#ef4444').attr('font-size', '8px').attr('font-weight', 600)\r
          .text(d.note)\r
        svg.append('line')\r
          .attr('x1', margin.left + x(d.value) + 8).attr('x2', nx - 2)\r
          .attr('y1', gy).attr('y2', gy)\r
          .attr('stroke', '#ef4444').attr('stroke-width', 0.8).attr('stroke-dasharray', '2,2').attr('opacity', 0.6)\r
      }\r
    })\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${H - margin.bottom + 4})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(4))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};