var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'network-clustering',\r
  title: 'Network Clustering',\r
  desc: 'Network Clustering — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NetworkClustering',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","network-clustering"],\r
}\r
\r
export default function NetworkClustering({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"id":0,"cluster":0},{"id":1,"cluster":0},{"id":2,"cluster":0},{"id":3,"cluster":0},{"id":4,"cluster":1},{"id":5,"cluster":1},{"id":6,"cluster":1},{"id":7,"cluster":1},{"id":8,"cluster":2},{"id":9,"cluster":2},{"id":10,"cluster":2},{"id":11,"cluster":2},{"id":12,"cluster":0},{"id":13,"cluster":1},{"id":14,"cluster":2}],"links":[[0,1],[0,2],[1,3],[2,3],[0,12],[1,12],[3,12],[4,5],[4,6],[5,7],[6,7],[4,13],[6,13],[7,13],[8,9],[9,10],[10,11],[8,11],[9,14],[10,14],[11,14],[12,13],[13,14]]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
    const nodes = config.nodes.map(n => ({ ...n }))\r
    const links = config.links.map(([s, t]) => ({ source: s, target: t }))\r
\r
    const clusters = [...new Set(nodes.map(n => n.cluster))]\r
    const color = d3.scaleOrdinal(['#38bdf8', '#10b981', '#f59e0b', '#ec4899']).domain(clusters)\r
\r
    const cx = W / 2, cy = H / 2 + 8\r
\r
    const sim = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id(d => d.id).distance(38))\r
      .force('charge', d3.forceManyBody().strength(-120))\r
      .force('center', d3.forceCenter(cx, cy))\r
      .force('cluster', d3.forceRadial(60, cx, cy).strength(d => d.cluster === 0 ? 0.08 : d.cluster === 1 ? 0.08 : 0.08))\r
      .stop()\r
\r
    for (let i = 0; i < 250; i++) sim.tick()\r
\r
    const g = svg.append('g')\r
\r
    // Convex hull per cluster\r
    clusters.forEach(ci => {\r
      const clusterNodes = nodes.filter(n => n.cluster === ci)\r
      if (clusterNodes.length < 3) return\r
      const hull = d3.polygonHull(clusterNodes.map(n => [n.x, n.y]))\r
      if (!hull) return\r
\r
      // Expand hull slightly\r
      const centroid = d3.polygonCentroid(hull)\r
      const expanded = hull.map(([px, py]) => {\r
        const dx = px - centroid[0], dy = py - centroid[1]\r
        const len = Math.sqrt(dx * dx + dy * dy)\r
        return [px + (dx / len) * 18, py + (dy / len) * 18]\r
      })\r
\r
      g.append('path')\r
        .datum(expanded)\r
        .attr('d', d => 'M' + d.join('L') + 'Z')\r
        .attr('fill', color(ci)).attr('fill-opacity', 0.08)\r
        .attr('stroke', color(ci)).attr('stroke-width', 1.5)\r
        .attr('stroke-dasharray', '4,3')\r
    })\r
\r
    // Links\r
    g.selectAll('.lnk').data(links).join('line').attr('class', 'lnk')\r
      .attr('x1', d => d.source.x).attr('y1', d => d.source.y)\r
      .attr('x2', d => d.target.x).attr('y2', d => d.target.y)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1.2).attr('stroke-opacity', 0.5)\r
\r
    // Nodes\r
    g.selectAll('.nd').data(nodes).join('circle').attr('class', 'nd')\r
      .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 7)\r
      .attr('fill', d => color(d.cluster)).attr('fill-opacity', 0.9)\r
      .attr('stroke', '#ffffff').attr('stroke-width', 1.2)\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Network Clustering with Convex Hull Boundaries')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};