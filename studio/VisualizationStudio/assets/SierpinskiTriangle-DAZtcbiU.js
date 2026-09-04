var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'sierpinski-triangle',\r
  title: 'Sierpinski Triangle',\r
  desc: 'Sierpinski Triangle — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SierpinskiTriangle',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sierpinski-triangle"],\r
}\r
\r
export default function SierpinskiTriangle({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"iterations":2000}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_DATA, ...customData }\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
    const size = 200\r
    const hTri = size * (Math.sqrt(3) / 2)\r
\r
    const vertices = [\r
      [cx, cy - hTri / 2],               // Top\r
      [cx - size / 2, cy + hTri / 2],   // Bottom-Left\r
      [cx + size / 2, cy + hTri / 2],   // Bottom-Right\r
    ]\r
\r
    const n = Math.min(4000, config.iterations || 2000)\r
    let px = cx, py = cy\r
    const points = []\r
\r
    for (let i = 0; i < n; i++) {\r
      const v = vertices[Math.floor(Math.random() * 3)]\r
      px = (px + v[0]) / 2\r
      py = (py + v[1]) / 2\r
      points.push({ x: px, y: py, i })\r
    }\r
\r
    const g = svg.append('g')\r
\r
    // Bounding triangle\r
    g.append('polygon')\r
      .attr('points', vertices.map(v => v.join(',')).join(' '))\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-dasharray', '3,3')\r
      .attr('stroke-opacity', 0.5)\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateCool)\r
      .domain([0, n])\r
\r
    g.selectAll('circle')\r
      .data(points)\r
      .join('circle')\r
      .attr('cx', d => d.x)\r
      .attr('cy', d => d.y)\r
      .attr('r', 1.1)\r
      .attr('fill', d => colorScale(d.i))\r
      .attr('fill-opacity', 0.8)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Sierpiński Triangle (Chaos Game Fractal)')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text(\`Iterative Midpoint Stochastic Convergence (N = \${n})\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};