var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'hive-plot',\r
  title: 'Hive Plot',\r
  desc: 'Hive Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HivePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hive-plot"],\r
}\r
\r
export default function HivePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"axes":[{"id":0,"label":"Source Layer","color":"#ef4444"},{"id":1,"label":"Processing Layer","color":"#10b981"},{"id":2,"label":"Storage Layer","color":"#3b82f6"}],"nodes":[{"id":"s1","axis":0,"pos":0.2},{"id":"s2","axis":0,"pos":0.5},{"id":"s3","axis":0,"pos":0.85},{"id":"p1","axis":1,"pos":0.15},{"id":"p2","axis":1,"pos":0.45},{"id":"p3","axis":1,"pos":0.75},{"id":"p4","axis":1,"pos":0.95},{"id":"t1","axis":2,"pos":0.3},{"id":"t2","axis":2,"pos":0.6},{"id":"t3","axis":2,"pos":0.8}],"links":[{"source":"s1","target":"p1"},{"source":"s1","target":"p2"},{"source":"s2","target":"p2"},{"source":"s2","target":"p3"},{"source":"s3","target":"p4"},{"source":"s3","target":"p3"},{"source":"p1","target":"t1"},{"source":"p2","target":"t1"},{"source":"p2","target":"t2"},{"source":"p3","target":"t2"},{"source":"p3","target":"t3"},{"source":"p4","target":"t3"},{"source":"t1","target":"s1"},{"source":"t2","target":"s2"}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.axes && customData.nodes)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
    const innerRadius = 25\r
    const outerRadius = Math.min(width, height) / 2 - 28\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    const axes = data.axes || [\r
      { id: 0, label: 'Axis 1', color: '#ef4444' },\r
      { id: 1, label: 'Axis 2', color: '#10b981' },\r
      { id: 2, label: 'Axis 3', color: '#3b82f6' },\r
    ]\r
    const k = axes.length\r
    const angleStep = (2 * Math.PI) / k\r
\r
    // Radius scale along each axis\r
    const rScale = d3.scaleLinear()\r
      .domain([0, 1])\r
      .range([innerRadius, outerRadius])\r
\r
    // Node map\r
    const nodeMap = new Map()\r
    data.nodes.forEach(n => {\r
      const a = (n.axis * angleStep) - Math.PI / 2\r
      const r = rScale(n.pos)\r
      const x = r * Math.cos(a)\r
      const y = r * Math.sin(a)\r
      nodeMap.set(n.id, { ...n, angle: a, r, x, y })\r
    })\r
\r
    // Draw Links as curved arcs between axes\r
    data.links.forEach(l => {\r
      const s = nodeMap.get(l.source)\r
      const t = nodeMap.get(l.target)\r
      if (!s || !t) return\r
\r
      // Control points for smooth curved hive link\r
      const midAngle = (s.angle + t.angle) / 2\r
      const isCrossWrap = Math.abs(s.angle - t.angle) > Math.PI\r
      const effectiveMid = isCrossWrap ? midAngle + Math.PI : midAngle\r
      const ctrlR = (s.r + t.r) / 2 * 0.75\r
\r
      const cx1 = ctrlR * Math.cos(effectiveMid)\r
      const cy1 = ctrlR * Math.sin(effectiveMid)\r
\r
      const pathStr = \`M \${s.x} \${s.y} Q \${cx1} \${cy1} \${t.x} \${t.y}\`\r
\r
      g.append('path')\r
        .attr('d', pathStr)\r
        .attr('fill', 'none')\r
        .attr('stroke', '#6366f1')\r
        .attr('stroke-width', 1.2)\r
        .attr('stroke-opacity', 0.5)\r
    })\r
\r
    // Draw Axes Lines & Labels\r
    axes.forEach((axis, i) => {\r
      const a = i * angleStep - Math.PI / 2\r
      const x1 = innerRadius * Math.cos(a)\r
      const y1 = innerRadius * Math.sin(a)\r
      const x2 = (outerRadius + 8) * Math.cos(a)\r
      const y2 = (outerRadius + 8) * Math.sin(a)\r
\r
      g.append('line')\r
        .attr('x1', x1).attr('y1', y1)\r
        .attr('x2', x2).attr('y2', y2)\r
        .attr('stroke', axis.color)\r
        .attr('stroke-width', 2.5)\r
        .attr('stroke-linecap', 'round')\r
\r
      // Label at end of axis\r
      const lx = (outerRadius + 18) * Math.cos(a)\r
      const ly = (outerRadius + 18) * Math.sin(a)\r
\r
      g.append('text')\r
        .attr('x', lx)\r
        .attr('y', ly + 2.5)\r
        .attr('text-anchor', Math.cos(a) > 0.1 ? 'start' : Math.cos(a) < -0.1 ? 'end' : 'middle')\r
        .attr('fill', axis.color)\r
        .attr('font-size', '7.5px')\r
        .attr('font-weight', '600')\r
        .text(axis.label)\r
    })\r
\r
    // Draw Node Circles\r
    nodeMap.forEach(n => {\r
      g.append('circle')\r
        .attr('cx', n.x)\r
        .attr('cy', n.y)\r
        .attr('r', 3.8)\r
        .attr('fill', '#ffffff')\r
        .attr('stroke', axes[n.axis]?.color || '#6366f1')\r
        .attr('stroke-width', 2)\r
    })\r
\r
    // Center Hub Circle\r
    g.append('circle')\r
      .attr('r', innerRadius)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-dasharray', '2,2')\r
      .attr('stroke-opacity', 0.4)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Hive Plot (Radial Multi-Axis Network)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};