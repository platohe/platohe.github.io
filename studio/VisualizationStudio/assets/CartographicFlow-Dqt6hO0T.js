var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'cartographic-flow',\r
  title: 'Cartographic Flow',\r
  desc: 'Cartographic Flow — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CartographicFlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cartographic-flow"],\r
}\r
\r
export default function CartographicFlow({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"gridX":16,"gridY":12,"vortex1":{"x":130,"y":110,"strength":1.2},"vortex2":{"x":270,"y":190,"strength":-1}}\r
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
    const margin = { top: 35, right: 25, bottom: 20, left: 25 }\r
    const plotW = width - margin.left - margin.right\r
    const plotH = height - margin.top - margin.bottom\r
\r
    const nx = config.gridX || 16\r
    const ny = config.gridY || 12\r
\r
    const dx = plotW / (nx - 1)\r
    const dy = plotH / (ny - 1)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const vectors = []\r
    const v1 = config.vortex1 || DEFAULT_DATA.vortex1\r
    const v2 = config.vortex2 || DEFAULT_DATA.vortex2\r
\r
    for (let j = 0; j < ny; j++) {\r
      for (let i = 0; i < nx; i++) {\r
        const x = i * dx\r
        const y = j * dy\r
\r
        // Vector field calculation (superposition of two vortices)\r
        const d1x = x - (v1.x - margin.left)\r
        const d1y = y - (v1.y - margin.top)\r
        const r1Sq = d1x * d1x + d1y * d1y + 100\r
        const u1 = -v1.strength * d1y * (200 / r1Sq)\r
        const v_1 = v1.strength * d1x * (200 / r1Sq)\r
\r
        const d2x = x - (v2.x - margin.left)\r
        const d2y = y - (v2.y - margin.top)\r
        const r2Sq = d2x * d2x + d2y * d2y + 100\r
        const u2 = -v2.strength * d2y * (200 / r2Sq)\r
        const v_2 = v2.strength * d2x * (200 / r2Sq)\r
\r
        const u = u1 + u2 + 0.5 // constant background drift\r
        const v = v_1 + v_2\r
\r
        const speed = Math.sqrt(u * u + v * v)\r
        const angle = Math.atan2(v, u)\r
\r
        vectors.push({ x, y, u, v, speed, angle })\r
      }\r
    }\r
\r
    const maxSpeed = d3.max(vectors, d => d.speed) || 5\r
    const colorScale = d3.scaleSequential(d3.interpolateTurbo)\r
      .domain([0, maxSpeed])\r
\r
    // Render flow vector arrows\r
    vectors.forEach(vec => {\r
      const len = Math.min(dx * 0.9, (vec.speed / maxSpeed) * dx * 1.1 + 4)\r
      const arrowG = g.append('g').attr('transform', \`translate(\${vec.x},\${vec.y}) rotate(\${(vec.angle * 180) / Math.PI})\`)\r
\r
      arrowG.append('line')\r
        .attr('x1', -len / 2)\r
        .attr('y1', 0)\r
        .attr('x2', len / 2)\r
        .attr('y2', 0)\r
        .attr('stroke', colorScale(vec.speed))\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-linecap', 'round')\r
\r
      // Arrowhead\r
      arrowG.append('path')\r
        .attr('d', \`M \${len / 2 - 3} -2 L \${len / 2} 0 L \${len / 2 - 3} 2 Z\`)\r
        .attr('fill', colorScale(vec.speed))\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Cartographic Vector Flow Field (Streamlines & Vortices)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};