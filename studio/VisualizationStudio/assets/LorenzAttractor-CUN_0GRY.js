var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'lorenz-attractor',\r
  title: 'Lorenz Attractor',\r
  desc: 'Lorenz Attractor — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LorenzAttractor',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","lorenz-attractor"],\r
}\r
\r
export default function LorenzAttractor({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"sigma":10,"rho":28,"beta":2.667,"steps":2500,"dt":0.008}\r
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
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    const sigma = config.sigma || 10\r
    const rho = config.rho || 28\r
    const beta = config.beta || 8 / 3\r
    const dt = config.dt || 0.008\r
    const steps = Math.min(5000, config.steps || 2500)\r
\r
    // Numerical integration (Euler / RK2)\r
    let x = 0.1, y = 0, z = 0\r
    const trajectory = []\r
\r
    for (let i = 0; i < steps; i++) {\r
      const dx = sigma * (y - x) * dt\r
      const dy = (x * (rho - z) - y) * dt\r
      const dz = (x * y - beta * z) * dt\r
\r
      x += dx\r
      y += dy\r
      z += dz\r
\r
      trajectory.push({ x, y, z, i })\r
    }\r
\r
    // 3D to 2D projection (slight oblique tilt)\r
    const scale = 5.2\r
    const project = (p) => {\r
      // Rotation around Y/X\r
      const angle = 0.4\r
      const px = p.x * Math.cos(angle) - p.y * Math.sin(angle)\r
      const py = -p.z + (p.x * Math.sin(angle) + p.y * Math.cos(angle)) * 0.35\r
      return [px * scale, (py + 25) * scale]\r
    }\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateSinebow)\r
      .domain([0, steps])\r
\r
    // Draw multi-colored segment ribbons\r
    const batchSize = 15\r
    for (let i = 0; i < trajectory.length - batchSize; i += batchSize) {\r
      const chunk = trajectory.slice(i, i + batchSize + 1)\r
      const pathData = d3.line()\r
        .x(d => project(d)[0])\r
        .y(d => project(d)[1])\r
        .curve(d3.curveCatmullRom)(chunk)\r
\r
      g.append('path')\r
        .attr('d', pathData)\r
        .attr('fill', 'none')\r
        .attr('stroke', colorScale(i))\r
        .attr('stroke-width', 1.2)\r
        .attr('stroke-opacity', 0.85)\r
    }\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 20)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Lorenz Attractor (Chaos Theory)')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 31)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .attr('font-family', 'var(--font-mono)')\r
      .text(\`σ=\${sigma}, ρ=\${rho}, β=\${beta.toFixed(2)} | N=\${steps}\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};