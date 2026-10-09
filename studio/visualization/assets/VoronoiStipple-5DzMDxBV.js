var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'voronoi-stipple',\r
  title: 'Voronoi Stipple',\r
  desc: 'Voronoi Stipple — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiStipple',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-stipple"],\r
}\r
\r
export default function VoronoiStipple({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":150,"y":100},{"x":200,"y":120},{"x":180,"y":180},{"x":250,"y":160},{"x":120,"y":150},{"x":220,"y":200}]\r
    const points = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4']\r
\r
    // Build Voronoi cells via d3.Delaunay (d3 v7)\r
    const delaunay = d3.Delaunay.from(points, d => d.x, d => d.y)\r
    const voronoi = delaunay.voronoi([0, 0, W, H])\r
\r
    points.forEach((p, i) => {\r
      const cell = voronoi.cellPolygon(i)\r
      if (!cell) return\r
\r
      // Cell polygon: light fill + subtle border so cell structure is visible\r
      svg.append('path')\r
        .attr('d', \`M\${cell.map(pt => pt.join(',')).join('L')}Z\`)\r
        .attr('fill', color[i % color.length])\r
        .attr('fill-opacity', 0.06)\r
        .attr('stroke', color[i % color.length])\r
        .attr('stroke-width', 1)\r
        .attr('stroke-opacity', 0.5)\r
\r
      // Stipple dots scattered inside this cell (rejection sampling)\r
      const minX = Math.min(...cell.map(pt => pt[0]))\r
      const maxX = Math.max(...cell.map(pt => pt[0]))\r
      const minY = Math.min(...cell.map(pt => pt[1]))\r
      const maxY = Math.max(...cell.map(pt => pt[1]))\r
      const area = Math.max(40, (maxX - minX) * (maxY - minY))\r
      const dotCount = Math.round(Math.sqrt(area) / 6)\r
      let placed = 0\r
      let attempts = 0\r
      while (placed < dotCount && attempts < dotCount * 40) {\r
        attempts++\r
        const dx = minX + Math.random() * (maxX - minX)\r
        const dy = minY + Math.random() * (maxY - minY)\r
        if (d3.polygonContains(cell, [dx, dy])) {\r
          svg.append('circle')\r
            .attr('cx', dx).attr('cy', dy).attr('r', 1.5)\r
            .attr('fill', color[i % color.length])\r
            .attr('opacity', 0.7)\r
          placed++\r
        }\r
      }\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};