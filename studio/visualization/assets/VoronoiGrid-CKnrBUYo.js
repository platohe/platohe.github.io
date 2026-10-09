var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// VoronoiGrid: Regular grid seeds → perfect rectilinear cells\r
export const meta = {\r
  id: 'voronoi-grid',\r
  title: 'Voronoi Grid',\r
  desc: 'Voronoi Grid — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiGrid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-grid"],\r
}\r
\r
export default function VoronoiGrid({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    // Regular grid seeds: 5 cols × 4 rows\r
    const cols = 5, rows = 4\r
    const margin = 40\r
    const cellW = (W - 2 * margin) / cols\r
    const cellH = (H - 2 * margin) / rows\r
    const pts = []\r
    for (let r = 0; r < rows; r++) {\r
      for (let c = 0; c < cols; c++) {\r
        pts.push([margin + c * cellW + cellW / 2, margin + r * cellH + cellH / 2])\r
      }\r
    }\r
    const delaunay = d3.Delaunay.from(pts)\r
    const voronoi = delaunay.voronoi([margin, margin, W - margin, H - margin])\r
    pts.forEach((p, i) => {\r
      const poly = voronoi.cellPolygon(i)\r
      if (!poly) return\r
      g.append('path').attr('d', 'M' + poly.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z')\r
        .attr('fill', d3.interpolateGreys((i % cols) / Math.max(1, cols - 1)))\r
        .attr('fill-opacity', 0.75)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1.6)\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 2.5).attr('fill', '#0f172a').attr('fill-opacity', 0.55)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};