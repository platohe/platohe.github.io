var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'voronoi-map',\r
  title: 'Voronoi Map',\r
  desc: 'Voronoi Map — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'VoronoiMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","voronoi-map"],\r
}\r
\r
export default function VoronoiMap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"id":"JFK","x":280,"y":120},{"id":"LAX","x":80,"y":200},{"id":"ORD","x":200,"y":100},{"id":"DFW","x":160,"y":220},{"id":"SEA","x":70,"y":60}]\r
    const points = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4']\r
\r
    // Compute Voronoi cells from the points\r
    const delaunay = d3.Delaunay.from(points, d => d.x, d => d.y)\r
    const voronoi = delaunay.voronoi([0, 0, 400, 300])\r
\r
    // Draw filled Voronoi cells\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(points)\r
      .join('path')\r
        .attr('d', (d, i) => voronoi.renderCell(i))\r
        .attr('fill', (d, i) => color[i % color.length])\r
        .attr('fill-opacity', 0.6)\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1.5)\r
\r
    // Draw point markers on top\r
    points.forEach((p, i) => {\r
      svg.append('circle')\r
        .attr('cx', p.x)\r
        .attr('cy', p.y)\r
        .attr('r', 5)\r
        .attr('fill', color[i % color.length])\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
\r
      svg.append('text')\r
        .attr('x', p.x)\r
        .attr('y', p.y - 10)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 600)\r
        .text(p.id || \`P\${i+1}\`)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};