var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'phyllotaxis',\r
  title: 'Phyllotaxis',\r
  desc: 'Phyllotaxis — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Phyllotaxis',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","phyllotaxis"],\r
}\r
\r
export default function Phyllotaxis({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"count":450,"radiusStep":4.8,"angleDegrees":137.508,"dotRadius":3.2}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_DATA, ...customData }\r
      : Array.isArray(customData)\r
        ? { ...DEFAULT_DATA, count: customData.length }\r
        : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    const goldenAngle = (config.angleDegrees * Math.PI) / 180\r
    const count = Math.min(800, config.count || 450)\r
    const c = config.radiusStep || 4.8\r
    const dotRadius = config.dotRadius || 3.2\r
\r
    const points = d3.range(count).map((i) => {\r
      const theta = i * goldenAngle\r
      const r = c * Math.sqrt(i)\r
      const x = r * Math.cos(theta)\r
      const y = r * Math.sin(theta)\r
      return { i, x, y, r, theta }\r
    })\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateTurbo)\r
      .domain([0, count])\r
\r
    g.selectAll('circle')\r
      .data(points)\r
      .join('circle')\r
      .attr('cx', d => d.x)\r
      .attr('cy', d => d.y)\r
      .attr('r', (d, i) => Math.max(1.2, dotRadius - (i / count) * 0.5))\r
      .attr('fill', d => colorScale(d.i))\r
      .attr('fill-opacity', 0.88)\r
      .attr('stroke', 'rgba(0,0,0,0.25)')\r
      .attr('stroke-width', 0.5)\r
\r
    // Decorative center pin\r
    g.append('circle')\r
      .attr('r', 4)\r
      .attr('fill', '#ffffff')\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 1.5)\r
\r
    // Info overlay\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 20)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Phyllotaxis / Fermat Spiral')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 31)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .attr('font-family', 'var(--font-mono)')\r
      .text(\`θ = \${config.angleDegrees.toFixed(3)}° | N = \${count}\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};