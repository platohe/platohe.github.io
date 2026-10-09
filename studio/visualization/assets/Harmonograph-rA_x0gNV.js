var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'harmonograph',\r
  title: 'Harmonograph',\r
  desc: 'Harmonograph — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Harmonograph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","harmonograph"],\r
}\r
\r
export default function Harmonograph({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"f1":3.001,"f2":2,"f3":3,"f4":2.001,"p1":1.571,"p2":0,"p3":1.571,"p4":0,"d1":0.002,"d2":0.002,"d3":0.002,"d4":0.002,"steps":2400}\r
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
    const { f1, f2, f3, f4, p1, p2, p3, p4, d1, d2, d3: damp3, d4 } = config\r
    const steps = Math.min(4000, config.steps || 2400)\r
    const amp = 55\r
\r
    const points = []\r
    for (let t = 0; t < steps; t += 0.5) {\r
      const x = amp * (Math.sin(f1 * t * 0.05 + p1) * Math.exp(-d1 * t) + Math.sin(f2 * t * 0.05 + p2) * Math.exp(-d2 * t))\r
      const y = amp * (Math.sin(f3 * t * 0.05 + p3) * Math.exp(-damp3 * t) + Math.sin(f4 * t * 0.05 + p4) * Math.exp(-d4 * t))\r
      points.push({ x, y, t })\r
    }\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateSinebow)\r
      .domain([0, steps])\r
\r
    // Draw multi-color smooth harmonograph path chunks\r
    const chunk = 20\r
    for (let i = 0; i < points.length - chunk; i += chunk) {\r
      const sub = points.slice(i, i + chunk + 1)\r
      const pathLine = d3.line().x(p => p.x).y(p => p.y).curve(d3.curveCatmullRom)(sub)\r
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
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Multi-Pendulum Lateral Harmonograph')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('4-Axis Damped Geometric Friction Drawing Machine')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};