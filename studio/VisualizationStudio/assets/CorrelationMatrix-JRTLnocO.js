var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'correlation-matrix',\r
  title: 'Correlation Matrix',\r
  desc: 'Correlation Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CorrelationMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","correlation-matrix"],\r
}\r
\r
export default function CorrelationMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"variables":["Sales","AdSpend","ROI","Churn","NPS","Traffic"],"matrix":[[1,0.82,0.65,-0.45,0.72,0.88],[0.82,1,0.51,-0.32,0.6,0.79],[0.65,0.51,1,-0.68,0.84,0.58],[-0.45,-0.32,-0.68,1,-0.75,-0.41],[0.72,0.6,0.84,-0.75,1,0.69],[0.88,0.79,0.58,-0.41,0.69,1]]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.matrix)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const vars = data.variables || ['A', 'B', 'C', 'D', 'E', 'F']\r
    const n = vars.length\r
\r
    const margin = { top: 40, right: 30, bottom: 20, left: 60 }\r
    const size = Math.min(W - margin.left - margin.right, H - margin.top - margin.bottom)\r
    const cellSize = size / n\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const colorScale = d3.scaleDiverging(d3.interpolateRdBu)\r
      .domain([1, 0, -1]) // RdBu: positive = Blue, negative = Red\r
\r
    // Render cells\r
    for (let i = 0; i < n; i++) {\r
      for (let j = 0; j < n; j++) {\r
        const val = data.matrix[i]?.[j] ?? 0\r
        const cell = g.append('g').attr('transform', \`translate(\${j * cellSize},\${i * cellSize})\`)\r
\r
        cell.append('rect')\r
          .attr('width', cellSize - 1.5)\r
          .attr('height', cellSize - 1.5)\r
          .attr('rx', 3)\r
          .attr('fill', colorScale(val))\r
          .attr('fill-opacity', 0.85)\r
\r
        // Circle indicator proportional to abs(val)\r
        cell.append('circle')\r
          .attr('cx', cellSize / 2 - 0.75)\r
          .attr('cy', cellSize / 2 - 0.75)\r
          .attr('r', (Math.abs(val) * (cellSize / 2 - 4)))\r
          .attr('fill', 'rgba(255,255,255,0.25)')\r
\r
        cell.append('text')\r
          .attr('x', cellSize / 2 - 0.75)\r
          .attr('y', cellSize / 2 + 2)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', Math.abs(val) > 0.6 ? '#ffffff' : '#0f172a')\r
          .attr('font-size', cellSize * 0.28 + 'px')\r
          .attr('font-family', 'var(--font-mono)')\r
          .attr('font-weight', '600')\r
          .text(val.toFixed(2))\r
      }\r
    }\r
\r
    // Row & Column Labels\r
    vars.forEach((v, idx) => {\r
      // Top labels\r
      g.append('text')\r
        .attr('x', idx * cellSize + cellSize / 2)\r
        .attr('y', -8)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7.5px')\r
        .attr('font-weight', '600')\r
        .text(v)\r
\r
      // Left labels\r
      g.append('text')\r
        .attr('x', -8)\r
        .attr('y', idx * cellSize + cellSize / 2 + 2.5)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7.5px')\r
        .attr('font-weight', '600')\r
        .text(v)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Correlation Matrix Heatmap')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};