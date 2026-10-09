var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bubble-matrix',\r
  title: 'Bubble Matrix',\r
  desc: 'Bubble Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BubbleMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bubble-matrix"],\r
}\r
\r
export default function BubbleMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":0,"y":0,"value":60.11},{"x":0,"y":1,"value":44.829},{"x":0,"y":2,"value":85.247},{"x":0,"y":3,"value":66.973},{"x":0,"y":4,"value":17.481},{"x":1,"y":0,"value":52.659},{"x":1,"y":1,"value":27.323},{"x":1,"y":2,"value":62.474},{"x":1,"y":3,"value":86.547},{"x":1,"y":4,"value":47.232},{"x":2,"y":0,"value":24.992},{"x":2,"y":1,"value":88.206},{"x":2,"y":2,"value":74.574},{"x":2,"y":3,"value":30.7},{"x":2,"y":4,"value":19.725},{"x":3,"y":0,"value":50.073},{"x":3,"y":1,"value":68.661},{"x":3,"y":2,"value":61.062},{"x":3,"y":3,"value":0.384},{"x":3,"y":4,"value":47.078},{"x":4,"y":0,"value":83.734},{"x":4,"y":1,"value":5.121},{"x":4,"y":2,"value":59.232},{"x":4,"y":3,"value":3.154},{"x":4,"y":4,"value":26.696}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 35, right: 20, bottom: 35, left: 35 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const cols = 5, rows = 5\r
    const cellW = w / cols, cellH = h / rows\r
    const maxVal = d3.max(data, d => d.value) || 1\r
    const rScale = d3.scaleSqrt().domain([0, maxVal]).range([3, Math.min(cellW, cellH) / 2 - 2])\r
    const colorScale = d3.scaleSequential(d3.interpolateInferno).domain([0, maxVal])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.forEach(d => {\r
      const cx = d.x * cellW + cellW / 2\r
      const cy = d.y * cellH + cellH / 2\r
      const r = rScale(d.value)\r
      g.append('circle')\r
        .attr('cx', cx).attr('cy', cy).attr('r', r)\r
        .attr('fill', colorScale(d.value)).attr('opacity', 0.85)\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 1)\r
    })\r
\r
    // Row labels\r
    for (let r = 0; r < rows; r++) {\r
      g.append('text').attr('x', -6).attr('y', r * cellH + cellH / 2 + 3)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('R' + (r + 1))\r
    }\r
    // Column labels\r
    for (let c = 0; c < cols; c++) {\r
      g.append('text').attr('x', c * cellW + cellW / 2).attr('y', h + 16)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text('C' + (c + 1))\r
    }\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};