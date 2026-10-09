var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'sunflower-plot',\r
  title: 'Sunflower Plot',\r
  desc: 'Sunflower Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SunflowerPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sunflower-plot"],\r
}\r
\r
export default function SunflowerPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":20,"y":30},{"x":22,"y":32},{"x":21,"y":29},{"x":23,"y":31},{"x":22,"y":31},{"x":24,"y":28},{"x":25,"y":33},{"x":23,"y":30},{"x":35,"y":50},{"x":37,"y":52},{"x":36,"y":48},{"x":38,"y":51},{"x":35,"y":53},{"x":37,"y":49},{"x":36,"y":52},{"x":38,"y":50},{"x":50,"y":70},{"x":52,"y":72},{"x":51,"y":68},{"x":53,"y":71},{"x":50,"y":73},{"x":52,"y":69},{"x":51,"y":72},{"x":53,"y":70}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([H - M.bottom, M.top])\r
\r
    // Count overlapping points\r
    const counts = {}\r
    data.forEach(d => {\r
      const key = \`\${d.x.toFixed(0)},\${d.y.toFixed(0)}\`\r
      counts[key] = (counts[key] || 0) + 1\r
    })\r
\r
    const maxCount = d3.max(Object.values(counts)) || 1\r
\r
    // Draw sunflower plots\r
    Object.entries(counts).forEach(([key, count]) => {\r
      const [px, py] = key.split(',').map(Number)\r
      const cx = x(px), cy = y(py)\r
      const r = 5 + count * 1.5\r
\r
      // Outer circle\r
      svg.append('circle')\r
        .attr('cx', cx).attr('cy', cy).attr('r', r + 3)\r
        .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
      // Inner circle\r
      svg.append('circle')\r
        .attr('cx', cx).attr('cy', cy).attr('r', r)\r
        .attr('fill', count > 1 ? '#6366f1' : '#f59e0b')\r
        .attr('fill-opacity', 0.6 + (count / maxCount) * 0.4)\r
        .attr('stroke', count > 1 ? '#4f46e5' : '#d97706')\r
        .attr('stroke-width', 1)\r
\r
      // Petals\r
      const petals = count * 2\r
      for (let i = 0; i < petals; i++) {\r
        const angle = (i / petals) * 2 * Math.PI\r
        const ex = cx + Math.cos(angle) * (r + 4)\r
        const ey = cy + Math.sin(angle) * (r + 4)\r
        svg.append('line')\r
          .attr('x1', cx).attr('y1', cy)\r
          .attr('x2', ex).attr('y2', ey)\r
          .attr('stroke', count > 1 ? '#4f46e5' : '#d97706').attr('stroke-width', 0.8).attr('stroke-opacity', 0.7)\r
      }\r
\r
      // Count label\r
      if (count > 1) {\r
        svg.append('text')\r
          .attr('x', cx).attr('y', cy + 3)\r
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
          .attr('fill', '#fff').attr('font-size', '7px').attr('font-weight', 600)\r
          .text(count)\r
      }\r
    })\r
\r
    // Axes\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};