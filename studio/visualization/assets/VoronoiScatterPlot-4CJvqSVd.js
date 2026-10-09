var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// VoronoiScatterPlot: Data-driven scatter points with Voronoi territories\r
export const meta = {\r
  id: 'voronoi-scatter-plot',\r
  title: 'Voronoi Scatter Plot',\r
  desc: 'Voronoi Scatter Plot — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiScatterPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-scatter-plot"],\r
}\r
\r
export default function VoronoiScatterPlot({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const g = svg.append('g')\r
    // Use custom data or generate synthetic scatter\r
    const DEFAULT_DATA = [\r
      { x: 80, y: 60, group: 0, label: 'A' },\r
      { x: 200, y: 80, group: 1, label: 'B' },\r
      { x: 320, y: 50, group: 2, label: 'C' },\r
      { x: 100, y: 150, group: 0, label: 'D' },\r
      { x: 230, y: 140, group: 1, label: 'E' },\r
      { x: 350, y: 180, group: 2, label: 'F' },\r
      { x: 70, y: 220, group: 3, label: 'G' },\r
      { x: 200, y: 240, group: 3, label: 'H' },\r
      { x: 330, y: 260, group: 0, label: 'I' },\r
      { x: 160, y: 120, group: 1, label: 'J' },\r
      { x: 280, y: 100, group: 2, label: 'K' },\r
      { x: 140, y: 200, group: 3, label: 'L' }\r
    ]\r
    // Handle both customData formats: array of {x,y,group,label} or array of {label,value}\r
    let points = DEFAULT_DATA\r
    if (customData && Array.isArray(customData) && customData.length > 0) {\r
      const first = customData[0]\r
      if (typeof first.x === 'number' && typeof first.y === 'number') {\r
        points = customData.map(d => ({ x: d.x, y: d.y, group: d.group ?? 0, label: d.label ?? '' }))\r
      } else if (first && (first.label || first.name) && (first.value || first.v)) {\r
        // Generate positions for label/value data\r
        points = customData.map((d, i) => {\r
          const angle = (i / customData.length) * 2 * Math.PI\r
          const r = 60 + Math.random() * 100\r
          return { x: 200 + r * Math.cos(angle), y: 150 + r * Math.sin(angle), group: i % 4, label: d.label || d.name || \`P\${i+1}\` }\r
        })\r
      }\r
    }\r
    const xy = points.map(p => [p.x, p.y])\r
    const delaunay = d3.Delaunay.from(xy)\r
    const voronoi = delaunay.voronoi([20, 20, 380, 280])\r
    // Draw Voronoi cells colored by group\r
    points.forEach((p, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      const color = colors[p.group % colors.length]\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', color).attr('fill-opacity', 0.25).attr('stroke', color).attr('stroke-width', 1).attr('stroke-opacity', 0.5)\r
    })\r
    // Draw scatter points on top\r
    points.forEach((p, i) => {\r
      const color = colors[p.group % colors.length]\r
      g.append('circle').attr('cx', p.x).attr('cy', p.y).attr('r', 5)\r
        .attr('fill', color).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
      if (p.label) {\r
        g.append('text').attr('x', p.x).attr('y', p.y - 10).attr('text-anchor', 'middle')\r
          .attr('font-size', '8px').attr('fill', 'var(--text)').text(p.label)\r
      }\r
    })\r
    // Group legend\r
    const groups = [...new Set(points.map(p => p.group))].sort()\r
    groups.forEach((grp, i) => {\r
      g.append('circle').attr('cx', 20).attr('cy', 20 + i * 16).attr('r', 5)\r
        .attr('fill', colors[grp % colors.length])\r
      g.append('text').attr('x', 30).attr('y', 24 + i * 16).attr('font-size', '9px')\r
        .attr('fill', 'var(--text-secondary)').text(\`Group \${grp}\`)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};