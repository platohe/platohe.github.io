var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'spirograph',\r
  title: 'Spirograph',\r
  desc: 'Spirograph — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Spirograph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spirograph"],\r
}\r
\r
export default function Spirograph({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"R":100,"r":64,"d":52,"revolutions":16,"resolution":1200}\r
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
    const cy = height / 2 + 5\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    const R = config.R || 100\r
    const r = config.r || 64\r
    const d = config.d || 52\r
    const revs = config.revolutions || 16\r
    const totalPoints = config.resolution || 1200\r
\r
    // Outer stator ring circle\r
    g.append('circle')\r
      .attr('r', R)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-opacity', 0.35)\r
      .attr('stroke-dasharray', '3,3')\r
\r
    // Generate hypotrochoid points\r
    const points = []\r
    const maxTheta = revs * 2 * Math.PI\r
    for (let i = 0; i <= totalPoints; i++) {\r
      const theta = (i / totalPoints) * maxTheta\r
      const x = (R - r) * Math.cos(theta) + d * Math.cos(((R - r) / r) * theta)\r
      const y = (R - r) * Math.sin(theta) - d * Math.sin(((R - r) / r) * theta)\r
      points.push({ x, y, i })\r
    }\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateRainbow)\r
      .domain([0, totalPoints])\r
\r
    // Draw multi-color stroke segments\r
    const batch = 20\r
    for (let i = 0; i < points.length - batch; i += batch) {\r
      const chunk = points.slice(i, i + batch + 1)\r
      const pathLine = d3.line()\r
        .x(p => p.x)\r
        .y(p => p.y)\r
        .curve(d3.curveBasis)(chunk)\r
\r
      g.append('path')\r
        .attr('d', pathLine)\r
        .attr('fill', 'none')\r
        .attr('stroke', colorScale(i))\r
        .attr('stroke-width', 1.2)\r
        .attr('stroke-opacity', 0.8)\r
    }\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 20)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Spirograph / Hypotrochoid')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 31)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .attr('font-family', 'var(--font-mono)')\r
      .text(\`R=\${R}, r=\${r}, d=\${d} | \${revs} revs\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};