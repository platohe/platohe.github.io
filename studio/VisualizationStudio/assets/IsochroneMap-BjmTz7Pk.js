var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'isochrone-map',\r
  title: 'Isochrone Map',\r
  desc: 'Isochrone Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'IsochroneMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","isochrone-map"],\r
}\r
\r
export default function IsochroneMap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"origin":{"x":200,"y":165,"label":"City Center"},"rings":[{"minutes":10,"color":"#10b981","opacity":0.55},{"minutes":20,"color":"#3b82f6","opacity":0.4},{"minutes":30,"color":"#6366f1","opacity":0.3},{"minutes":45,"color":"#ec4899","opacity":0.2},{"minutes":60,"color":"#f59e0b","opacity":0.12}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.origin && customData.rings) ? customData : DEFAULT_DATA\r
    const { origin, rings } = config\r
\r
    const g = svg.append('g')\r
\r
    // Simulated street grid\r
    for (let i = 0; i < 7; i++) {\r
      g.append('line').attr('x1', 30 + i * 58).attr('y1', 25).attr('x2', 30 + i * 58).attr('y2', H - 20)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 0.8).attr('stroke-opacity', 0.35)\r
      g.append('line').attr('x1', 20).attr('y1', 35 + i * 42).attr('x2', W - 15).attr('y2', 35 + i * 42)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 0.8).attr('stroke-opacity', 0.35)\r
    }\r
\r
    // Isochrone rings (warped circles simulating travel time with road impedance)\r
    rings.slice().reverse().forEach(ring => {\r
      const baseR = ring.minutes * 2.2\r
      // Generate organic polygon with noise variation\r
      const pts = d3.range(24).map(i => {\r
        const angle = (i / 24) * 2 * Math.PI\r
        // Vary radius to simulate road network anisotropy\r
        const noise = 0.7 + 0.45 * Math.abs(Math.sin(angle * 2.5 + ring.minutes * 0.1))\r
        const r = baseR * noise\r
        return [origin.x + r * Math.cos(angle), origin.y + r * Math.sin(angle)]\r
      })\r
\r
      g.append('path')\r
        .attr('d', d3.line().curve(d3.curveCatmullRomClosed)(pts))\r
        .attr('fill', ring.color).attr('fill-opacity', ring.opacity)\r
        .attr('stroke', ring.color).attr('stroke-width', 1.2).attr('stroke-opacity', 0.8)\r
\r
      // Travel time label\r
      const labelAngle = -Math.PI / 5\r
      const labelR = baseR * 0.9\r
      g.append('text')\r
        .attr('x', origin.x + labelR * Math.cos(labelAngle))\r
        .attr('y', origin.y + labelR * Math.sin(labelAngle))\r
        .attr('text-anchor', 'middle').attr('fill', ring.color)\r
        .attr('font-size', '6.5px').attr('font-weight', '700')\r
        .text(\`\${ring.minutes} min\`)\r
    })\r
\r
    // Origin marker\r
    g.append('circle').attr('cx', origin.x).attr('cy', origin.y).attr('r', 7)\r
      .attr('fill', '#ef4444').attr('stroke', '#ffffff').attr('stroke-width', 2)\r
\r
    g.append('text').attr('x', origin.x).attr('y', origin.y + 18)\r
      .attr('text-anchor', 'middle').attr('fill', '#ef4444')\r
      .attr('font-size', '7px').attr('font-weight', '700')\r
      .text(origin.label || 'Origin')\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Isochrone Travel Time Map')\r
\r
    svg.append('text').attr('x', 14).attr('y', 28)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
      .text('Reachable Zones by Walk/Transit Time from Origin')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};