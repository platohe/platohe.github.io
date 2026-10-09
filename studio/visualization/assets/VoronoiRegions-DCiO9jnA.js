var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// VoronoiRegions: Few large service regions with labels\r
export const meta = {\r
  id: 'voronoi-regions',\r
  title: 'Voronoi Regions',\r
  desc: 'Voronoi Regions — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiRegions',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-regions"],\r
}\r
\r
export default function VoronoiRegions({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    // Use custom data or default: 4-5 large regions\r
    const DEFAULT_DATA = [\r
      { name: "North", x: 120, y: 80, value: 120 },\r
      { name: "South", x: 300, y: 220, value: 95 },\r
      { name: "East", x: 320, y: 90, value: 80 },\r
      { name: "West", x: 60, y: 180, value: 110 },\r
      { name: "Central", x: 200, y: 150, value: 140 }\r
    ]\r
    // Handle both {x,y,name,value} and {label,value} formats\r
    const parseRegions = (data) => {\r
      if (!Array.isArray(data) || data.length === 0) return DEFAULT_DATA\r
      const first = data[0]\r
      if (first && typeof first.x === 'number' && typeof first.y === 'number') {\r
        return data.map(d => ({ name: d.name || d.label || \`Site \${d.idx}\`, x: d.x, y: d.y, value: d.value || d.v || 0 }))\r
      }\r
      // Fallback: generate positions for label/value data\r
      return data.map((d, i) => {\r
        const angle = (i / data.length) * 2 * Math.PI\r
        const r = 80 + Math.random() * 60\r
        return { name: d.label || d.name || \`R\${i+1}\`, x: 200 + r * Math.cos(angle), y: 150 + r * Math.sin(angle), value: d.value || d.v || 0 }\r
      })\r
    }\r
    const regions = parseRegions(customData)\r
    const pts = regions.map(r => [r.x, r.y])\r
    const delaunay = d3.Delaunay.from(pts)\r
    const voronoi = delaunay.voronoi([10, 10, 390, 290])\r
    regions.forEach((r, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      const color = colors[i % colors.length]\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', color).attr('fill-opacity', 0.4).attr('stroke', color).attr('stroke-width', 2.5)\r
      const cx = d3.mean(poly, d => d[0])\r
      const cy = d3.mean(poly, d => d[1])\r
      if (Number.isFinite(cx) && Number.isFinite(cy)) {\r
        g.append('text').attr('x', cx).attr('y', cy).attr('text-anchor', 'middle')\r
          .attr('font-size', '11px').attr('font-weight', 700).attr('fill', '#fff')\r
          .text(r.name)\r
        g.append('text').attr('x', cx).attr('y', cy + 14).attr('text-anchor', 'middle')\r
          .attr('font-size', '9px').attr('fill', 'rgba(255,255,255,0.8)')\r
          .text(\`\${r.value}\`)\r
      }\r
      g.append('circle').attr('cx', r.x).attr('cy', r.y).attr('r', 5)\r
        .attr('fill', color).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};