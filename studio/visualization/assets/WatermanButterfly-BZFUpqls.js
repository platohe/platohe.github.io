var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'waterman-butterfly',\r
  title: 'Waterman Butterfly',\r
  desc: 'Waterman Butterfly — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WatermanButterfly',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","waterman-butterfly"],\r
}\r
\r
export default function WatermanButterfly({ data: _customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    // Waterman Butterfly unfolds an octahedron into 8 triangular facets (4 upper, 4 lower)\r
    const facetSize = 52\r
    const h = facetSize * (Math.sqrt(3) / 2)\r
\r
    // 8 Facet Centers / Triangles resembling the iconic Butterfly wings\r
    const facets = [\r
      // Top-Left Wing\r
      { points: [[-facetSize * 1.5, -h * 1.5], [-facetSize * 0.5, -h * 1.5], [-facetSize, -h * 0.5]], color: '#38bdf8' },\r
      { points: [[-facetSize, -h * 0.5], [0, -h * 0.5], [-facetSize * 0.5, -h * 1.5]], color: '#0284c7' },\r
      // Top-Right Wing\r
      { points: [[0, -h * 0.5], [facetSize, -h * 0.5], [facetSize * 0.5, -h * 1.5]], color: '#0284c7' },\r
      { points: [[facetSize * 0.5, -h * 1.5], [facetSize * 1.5, -h * 1.5], [facetSize, -h * 0.5]], color: '#38bdf8' },\r
      // Bottom-Left Wing\r
      { points: [[-facetSize * 1.5, h * 1.5], [-facetSize * 0.5, h * 1.5], [-facetSize, h * 0.5]], color: '#10b981' },\r
      { points: [[-facetSize, h * 0.5], [0, h * 0.5], [-facetSize * 0.5, h * 1.5]], color: '#059669' },\r
      // Bottom-Right Wing\r
      { points: [[0, h * 0.5], [facetSize, h * 0.5], [facetSize * 0.5, h * 1.5]], color: '#059669' },\r
      { points: [[facetSize * 0.5, h * 1.5], [facetSize * 1.5, h * 1.5], [facetSize, h * 0.5]], color: '#10b981' },\r
    ]\r
\r
    // Render Facet Triangles\r
    facets.forEach(f => {\r
      g.append('polygon')\r
        .attr('points', f.points.map(p => p.join(',')).join(' '))\r
        .attr('fill', f.color)\r
        .attr('fill-opacity', 0.25)\r
        .attr('stroke', f.color)\r
        .attr('stroke-width', 1.2)\r
\r
      // Internal latitude/longitude graticule lines per triangle\r
      const [p1, p2, p3] = f.points\r
      for (let s = 0.33; s < 1; s += 0.33) {\r
        const q1 = [p1[0] + (p2[0] - p1[0]) * s, p1[1] + (p2[1] - p1[1]) * s]\r
        const q2 = [p1[0] + (p3[0] - p1[0]) * s, p1[1] + (p3[1] - p1[1]) * s]\r
        g.append('line')\r
          .attr('x1', q1[0]).attr('y1', q1[1]).attr('x2', q2[0]).attr('y2', q2[1])\r
          .attr('stroke', 'rgba(255,255,255,0.25)')\r
          .attr('stroke-dasharray', '2,2')\r
          .attr('stroke-width', 0.8)\r
      }\r
    })\r
\r
    // Central Equator Hinge Line\r
    g.append('line')\r
      .attr('x1', -facetSize * 1.5)\r
      .attr('y1', 0)\r
      .attr('x2', facetSize * 1.5)\r
      .attr('y2', 0)\r
      .attr('stroke', '#f43f5e')\r
      .attr('stroke-width', 1.8)\r
      .attr('stroke-dasharray', '3,3')\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Waterman Butterfly Polyhedral Map Projection')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Octahedral Unfolded World Projection Minimizing Area & Shape Distortion')\r
  }, [])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};