var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'voronoi-labels',\r
  title: 'Voronoi Labels',\r
  desc: 'Voronoi Labels — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiLabels',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-labels"],\r
}\r
\r
export default function VoronoiLabels({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":100,"y":100,"name":"Site A"},{"x":220,"y":140,"name":"Site B"},{"x":160,"y":220,"name":"Site C"}]\r
\r
    const points = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']\r
\r
    // Build Voronoi cells via d3.Delaunay (d3 v7)\r
    const delaunay = d3.Delaunay.from(points, d => d.x, d => d.y)\r
    const voronoi = delaunay.voronoi([0, 0, W, H])\r
\r
    points.forEach((p, i) => {\r
      const cell = voronoi.cellPolygon(i)\r
      if (!cell) return\r
\r
      svg.append('path')\r
        .attr('d', \`M\${cell.map(pt => pt.join(',')).join('L')}Z\`)\r
        .attr('fill', color[i % color.length])\r
        .attr('fill-opacity', 0.15)\r
        .attr('stroke', color[i % color.length])\r
        .attr('stroke-width', 1.5)\r
\r
      svg.append('circle')\r
        .attr('cx', p.x)\r
        .attr('cy', p.y)\r
        .attr('r', 8)\r
        .attr('fill', color[i % color.length])\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
\r
      svg.append('text')\r
        .attr('x', p.x)\r
        .attr('y', p.y - 12)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 600)\r
        .text(p.name || \`Site \${i+1}\`)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};