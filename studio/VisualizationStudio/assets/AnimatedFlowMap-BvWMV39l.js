var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'animated-flow-map',\r
  title: 'Animated Flow Map',\r
  desc: 'Animated Flow Map — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'AnimatedFlowMap',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-transition"],\r
  tags: ["animation","animated-flow-map"],\r
}\r
\r
export default function AnimatedFlowMap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [\r
    { from: [80, 80], to: [200, 120], value: 30 },\r
    { from: [200, 120], to: [320, 80], value: 25 },\r
    { from: [320, 80], to: [200, 200], value: 20 },\r
    { from: [200, 200], to: [80, 80], value: 35 },\r
    { from: [80, 80], to: [320, 80], value: 15 },\r
    { from: [200, 120], to: [80, 80], value: 28 },\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const clampedData = data.map(d => ({\r
      from: [\r
        Math.max(10, Math.min(W - 10, d.from[0])),\r
        Math.max(10, Math.min(H - 10, d.from[1])),\r
      ],\r
      to: [\r
        Math.max(10, Math.min(W - 10, d.to[0])),\r
        Math.max(10, Math.min(H - 10, d.to[1])),\r
      ],\r
      value: Math.max(1, d.value),\r
    }))\r
\r
    const g = svg.append('g')\r
\r
    // Draw paths and nodes\r
    clampedData.forEach((d) => {\r
      const [fx, fy] = d.from\r
      const [tx, ty] = d.to\r
      const mx = (fx + tx) / 2\r
      const my = Math.max(10, Math.min(H - 10, (fy + ty) / 2 - 30))\r
\r
      const pathD = \`M\${fx},\${fy} Q\${mx},\${my} \${tx},\${ty}\`\r
      g.append('path')\r
        .attr('d', pathD)\r
        .attr('fill', 'none')\r
        .attr('stroke', '#6366f1')\r
        .attr('stroke-width', d.value * 0.3)\r
        .attr('stroke-opacity', 0.3)\r
        .attr('stroke-linecap', 'round')\r
\r
      g.append('circle')\r
        .attr('cx', fx).attr('cy', fy).attr('r', 6)\r
        .attr('fill', '#6366f1').attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      g.append('circle')\r
        .attr('cx', tx).attr('cy', ty).attr('r', 6)\r
        .attr('fill', '#10b981').attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
\r
      const dot = g.append('circle').attr('r', 3).attr('fill', '#f59e0b')\r
      const bezier = (t) => [\r
        (1 - t) * (1 - t) * fx + 2 * (1 - t) * t * mx + t * t * tx,\r
        (1 - t) * (1 - t) * fy + 2 * (1 - t) * t * my + t * t * ty,\r
      ]\r
\r
      const timer = d3.timer((elapsed) => {\r
        const t = (elapsed * 0.001 * d.value * 0.5) % 1\r
        const pos = bezier(t)\r
        dot.attr('cx', pos[0]).attr('cy', pos[1])\r
      })\r
\r
      setTimeout(() => timer.stop(), 8000)\r
    })\r
\r
    // Labels\r
    const labels = ['A', 'B', 'C', 'D']\r
    const labelPositions = [[80, 80], [200, 120], [320, 80], [200, 200]]\r
    labelPositions.forEach(([x, y], i) => {\r
      g.append('text')\r
        .attr('x', x).attr('y', y + 16)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '9px').attr('font-weight', 600)\r
        .text(labels[i])\r
    })\r
\r
    return () => {\r
      svg.selectAll('*').remove()\r
    }\r
  }, [customData])\r
\r
  return (\r
    <div style={{\r
      width: '100%',\r
      height: '100%',\r
      display: 'flex',\r
      alignItems: 'center',\r
      justifyContent: 'center',\r
    }}>\r
      <svg\r
        ref={ref}\r
        viewBox={\`0 0 \${W} \${H}\`}\r
        style={{ width: '100%', height: '100%', maxWidth: '500px' }}\r
      />\r
    </div>\r
  )\r
}\r
`;export{e as default};