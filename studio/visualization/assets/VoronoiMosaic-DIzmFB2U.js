var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// VoronoiMosaic: Rectilinear clipping → Manhattan-style tiles\r
export const meta = {\r
  id: 'voronoi-mosaic',\r
  title: 'Voronoi Mosaic',\r
  desc: 'Voronoi Mosaic — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiMosaic',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-mosaic"],\r
}\r
\r
export default function VoronoiMosaic({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    // Grid-aligned seed points\r
    const cols = 5, rows = 4\r
    const margin = 25\r
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
    // Clip each cell to its grid rectangle (rectilinear)\r
    pts.forEach((p, i) => {\r
      const col = i % cols\r
      const row = Math.floor(i / cols)\r
      const cellRect = [\r
        [margin + col * cellW, margin + row * cellH],\r
        [margin + (col + 1) * cellW, margin + row * cellH],\r
        [margin + (col + 1) * cellW, margin + (row + 1) * cellH],\r
        [margin + col * cellW, margin + (row + 1) * cellH]\r
      ]\r
      // Intersect Voronoi cell with grid rect\r
      const vorCell = voronoi.cellPolygon(i)\r
      if (!vorCell) return\r
      // Simple clip: use the grid rect as the cell (Manhattan style)\r
      const pathStr = 'M' + cellRect.map(pt => pt[0] + ',' + pt[1]).join('L') + 'Z'\r
      g.append('path').attr('d', pathStr)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('fill-opacity', 0.7)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
      // Seed marker at center\r
      g.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 3).attr('fill', '#0f172a').attr('fill-opacity', 0.55)\r
    })\r
    // Add grid lines for emphasis\r
    g.selectAll('.grid-line')\r
      .data(d3.range(cols + 1)).enter()\r
      .append('line')\r
      .attr('x1', d => margin + d * cellW).attr('x2', d => margin + d * cellW)\r
      .attr('y1', margin).attr('y2', H - margin)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 0.5).attr('stroke-dasharray', '2,2')\r
    g.selectAll('.grid-line-h')\r
      .data(d3.range(rows + 1)).enter()\r
      .append('line')\r
      .attr('y1', d => margin + d * cellH).attr('y2', d => margin + d * cellH)\r
      .attr('x1', margin).attr('x2', W - margin)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 0.5).attr('stroke-dasharray', '2,2')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};