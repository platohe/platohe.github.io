var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'chladni-plate',\r
  title: 'Chladni Plate',\r
  desc: 'Chladni Plate — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ChladniPlate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","chladni-plate"],\r
}\r
\r
export default function ChladniPlate({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"m":3,"n":5,"a":1,"b":1,"particles":1800}\r
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
    const plateSize = 175\r
\r
    const m = config.m || 3\r
    const n = config.n || 5\r
    const a = config.a || 1.0\r
    const b = config.b || 1.0\r
    const numParticles = Math.min(3000, config.particles || 1800)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    // Plate Boundary Square\r
    g.append('rect')\r
      .attr('x', -plateSize / 2)\r
      .attr('y', -plateSize / 2)\r
      .attr('width', plateSize)\r
      .attr('height', plateSize)\r
      .attr('fill', '#090d16')\r
      .attr('stroke', '#38bdf8')\r
      .attr('stroke-width', 2)\r
      .attr('rx', 4)\r
\r
    // Chladni 2D Standing Wave Function\r
    function chladni(xNorm, yNorm) {\r
      const pi = Math.PI\r
      return a * Math.sin(n * pi * xNorm) * Math.sin(m * pi * yNorm) - b * Math.sin(m * pi * xNorm) * Math.sin(n * pi * yNorm)\r
    }\r
\r
    // Generate sand particles settling onto nodal lines (where amplitude approx 0)\r
    const points = []\r
    let attempts = 0\r
    while (points.length < numParticles && attempts < numParticles * 8) {\r
      attempts++\r
      const xNorm = Math.random() // [0, 1]\r
      const yNorm = Math.random() // [0, 1]\r
      const amp = Math.abs(chladni(xNorm, yNorm))\r
\r
      // Acceptance probability inversely proportional to vibration amplitude\r
      if (Math.random() > amp * 1.5) {\r
        const px = (xNorm - 0.5) * plateSize\r
        const py = (yNorm - 0.5) * plateSize\r
        points.push({ x: px, y: py })\r
      }\r
    }\r
\r
    // Render sand particles\r
    g.selectAll('circle')\r
      .data(points)\r
      .join('circle')\r
      .attr('cx', d => d.x)\r
      .attr('cy', d => d.y)\r
      .attr('r', 1.0)\r
      .attr('fill', '#f59e0b')\r
      .attr('fill-opacity', 0.85)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Chladni Plate Standing Wave Resonance Patterns')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .attr('font-family', 'var(--font-mono)')\r
      .text(\`Mode (m=\${m}, n=\${n}) Nodal Sand Lines\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};