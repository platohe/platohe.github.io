var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'quiver-plot',\r
  title: 'Quiver Plot',\r
  desc: 'Quiver Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'QuiverPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","quiver-plot"],\r
}\r
\r
export default function QuiverPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":-1.5,"y":-1.5,"u":0.45,"v":-0.45},{"x":-1.5,"y":-1,"u":0.3,"v":-0.45},{"x":-1.5,"y":-0.5,"u":0.15,"v":-0.45},{"x":-1.5,"y":0,"u":0,"v":-0.45},{"x":-1.5,"y":0.5,"u":-0.15,"v":-0.45},{"x":-1.5,"y":1,"u":-0.3,"v":-0.45},{"x":-1.5,"y":1.5,"u":-0.45,"v":-0.45},{"x":-1,"y":-1.5,"u":0.45,"v":-0.3},{"x":-1,"y":-1,"u":0.3,"v":-0.3},{"x":-1,"y":-0.5,"u":0.15,"v":-0.3},{"x":-1,"y":0,"u":0,"v":-0.3},{"x":-1,"y":0.5,"u":-0.15,"v":-0.3},{"x":-1,"y":1,"u":-0.3,"v":-0.3},{"x":-1,"y":1.5,"u":-0.45,"v":-0.3},{"x":-0.5,"y":-1.5,"u":0.45,"v":-0.15},{"x":-0.5,"y":-1,"u":0.3,"v":-0.15},{"x":-0.5,"y":-0.5,"u":0.15,"v":-0.15},{"x":-0.5,"y":0,"u":0,"v":-0.15},{"x":-0.5,"y":0.5,"u":-0.15,"v":-0.15},{"x":-0.5,"y":1,"u":-0.3,"v":-0.15},{"x":-0.5,"y":1.5,"u":-0.45,"v":-0.15},{"x":0,"y":-1.5,"u":0.45,"v":0},{"x":0,"y":-1,"u":0.3,"v":0},{"x":0,"y":-0.5,"u":0.15,"v":0},{"x":0,"y":0,"u":0,"v":0},{"x":0,"y":0.5,"u":-0.15,"v":0},{"x":0,"y":1,"u":-0.3,"v":0},{"x":0,"y":1.5,"u":-0.45,"v":0},{"x":0.5,"y":-1.5,"u":0.45,"v":0.15},{"x":0.5,"y":-1,"u":0.3,"v":0.15},{"x":0.5,"y":-0.5,"u":0.15,"v":0.15},{"x":0.5,"y":0,"u":0,"v":0.15},{"x":0.5,"y":0.5,"u":-0.15,"v":0.15},{"x":0.5,"y":1,"u":-0.3,"v":0.15},{"x":0.5,"y":1.5,"u":-0.45,"v":0.15},{"x":1,"y":-1.5,"u":0.45,"v":0.3},{"x":1,"y":-1,"u":0.3,"v":0.3},{"x":1,"y":-0.5,"u":0.15,"v":0.3},{"x":1,"y":0,"u":0,"v":0.3},{"x":1,"y":0.5,"u":-0.15,"v":0.3},{"x":1,"y":1,"u":-0.3,"v":0.3},{"x":1,"y":1.5,"u":-0.45,"v":0.3},{"x":1.5,"y":-1.5,"u":0.45,"v":0.45},{"x":1.5,"y":-1,"u":0.3,"v":0.45},{"x":1.5,"y":-0.5,"u":0.15,"v":0.45},{"x":1.5,"y":0,"u":0,"v":0.45},{"x":1.5,"y":0.5,"u":-0.15,"v":0.45},{"x":1.5,"y":1,"u":-0.3,"v":0.45},{"x":1.5,"y":1.5,"u":-0.45,"v":0.45}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([30, IW - 10])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([IH - 10, 30])\r
    const maxMag = d3.max(data, d => Math.sqrt(d.u * d.u + d.v * d.v)) || 1\r
    const scale = Math.min(IW, IH) / (maxMag * 3)\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Arrows\r
    data.forEach(d => {\r
      const cx = M.left + x(d.x)\r
      const cy = M.top + y(d.y)\r
      const dx = d.u * scale\r
      const dy = -d.v * scale\r
      const angle = Math.atan2(dy, dx)\r
      const headLen = 6\r
\r
      svg.append('line').attr('x1', cx).attr('x2', cx + dx).attr('y1', cy).attr('y2', cy + dy)\r
        .attr('stroke', colors[0]).attr('stroke-width', 1.5).attr('opacity', 0.7)\r
\r
      svg.append('polygon').attr('points',\r
        \`\${cx + dx},\${cy + dy} \${cx + dx - headLen * Math.cos(angle - 0.4)},\${cy + dy - headLen * Math.sin(angle - 0.4)} \${cx + dx - headLen * Math.cos(angle + 0.4)},\${cy + dy - headLen * Math.sin(angle + 0.4)}\`\r
      ).attr('fill', colors[0]).attr('opacity', 0.7)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Quiver / Vector Field Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};