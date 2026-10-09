var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'pendulum-wave',\r
  title: 'Pendulum Wave',\r
  desc: 'Pendulum Wave — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'PendulumWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","pendulum-wave"],\r
}\r
\r
export default function PendulumWave({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"count":16,"baseFreq":50,"cycleDurationSec":24}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_DATA, ...customData }\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const n = config.count || 16\r
    const margin = { top: 35, right: 35, bottom: 25, left: 35 }\r
    const plotW = width - margin.left - margin.right\r
    const plotH = height - margin.top - margin.bottom\r
\r
    const dx = plotW / (n - 1)\r
    const amp = plotH * 0.42\r
    const cy = margin.top + plotH / 2\r
\r
    const pendulums = d3.range(n).map(i => ({\r
      id: i,\r
      x: margin.left + i * dx,\r
      freq: (config.baseFreq || 50) + i,\r
      color: d3.interpolateSpectral(i / n),\r
    }))\r
\r
    const g = svg.append('g')\r
\r
    // Suspension beam line\r
    g.append('line')\r
      .attr('x1', margin.left - 10)\r
      .attr('y1', margin.top)\r
      .attr('x2', margin.left + plotW + 10)\r
      .attr('y2', margin.top)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 2.5)\r
\r
    // Pendulum strings and bobs\r
    const stringElements = g.selectAll('.p-string')\r
      .data(pendulums)\r
      .join('line')\r
      .attr('class', 'p-string')\r
      .attr('x1', d => d.x)\r
      .attr('y1', margin.top)\r
      .attr('stroke', 'rgba(255,255,255,0.25)')\r
      .attr('stroke-width', 1)\r
\r
    const bobElements = g.selectAll('.p-bob')\r
      .data(pendulums)\r
      .join('circle')\r
      .attr('class', 'p-bob')\r
      .attr('r', 5)\r
      .attr('fill', d => d.color)\r
      .attr('stroke', '#ffffff')\r
      .attr('stroke-width', 1)\r
\r
    const cycleSec = config.cycleDurationSec || 24\r
    const timer = d3.timer((elapsed) => {\r
      const t = (elapsed / 1000) / cycleSec\r
\r
      pendulums.forEach(p => {\r
        const theta = 2 * Math.PI * p.freq * t\r
        p.currentY = cy + Math.sin(theta) * amp\r
      })\r
\r
      stringElements\r
        .attr('x2', d => d.x)\r
        .attr('y2', d => d.currentY)\r
\r
      bobElements\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => d.currentY)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Harmonic Pendulum Wave Simulation')\r
\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 29)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Dancing Serpentine Patterns from Monotonically Tuned Frequencies')\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};