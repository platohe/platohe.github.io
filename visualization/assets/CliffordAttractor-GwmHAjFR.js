var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'clifford-attractor',\r
  title: 'Clifford Attractor',\r
  desc: 'Clifford Attractor — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CliffordAttractor',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","clifford-attractor"],\r
}\r
\r
export default function CliffordAttractor({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"a":-1.4,"b":1.6,"c":1,"d":0.7,"points":1500}\r
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
    const cx = width / 2\r
    const cy = height / 2 + 10\r
\r
    const a = config.a || -1.4\r
    const b = config.b || 1.6\r
    const c = config.c || 1.0\r
    const d = config.d || 0.7\r
    const n = Math.min(3000, config.points || 1500)\r
\r
    let x = 0.1, y = 0.1\r
    const pts = []\r
\r
    for (let i = 0; i < n; i++) {\r
      const nx = Math.sin(a * y) + c * Math.cos(a * x)\r
      const ny = Math.sin(b * x) + d * Math.cos(b * y)\r
      x = nx\r
      y = ny\r
      pts.push({ x, y, i })\r
    }\r
\r
    const scale = 50\r
    const colorScale = d3.scaleSequential(d3.interpolateWarm)\r
      .domain([0, n])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    g.selectAll('circle')\r
      .data(pts)\r
      .join('circle')\r
      .attr('cx', d => d.x * scale)\r
      .attr('cy', d => d.y * scale)\r
      .attr('r', 1.2)\r
      .attr('fill', d => colorScale(d.i))\r
      .attr('fill-opacity', 0.75)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Clifford Strange Attractor (Fractal Flame)')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .attr('font-family', 'var(--font-mono)')\r
      .text(\`a=\${a}, b=\${b}, c=\${c}, d=\${d}\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};