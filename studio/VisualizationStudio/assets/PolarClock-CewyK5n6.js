var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'polar-clock',\r
  title: 'Polar Clock',\r
  desc: 'Polar Clock — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PolarClock',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","polar-clock"],\r
}\r
\r
export default function PolarClock({ data: customData }) {\r
  const ref = useRef(null)\r
  const [tick, setTick] = useState(0)\r
\r
  useEffect(() => {\r
    const id = setInterval(() => setTick(t => t + 1), 1000)\r
    return () => clearInterval(id)\r
  }, [])\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const now = new Date()\r
    const cx = W / 2\r
    const cy = H / 2 - 5\r
    const maxR = 118\r
    const ringGap = 13\r
\r
    // Rings: seconds, minutes, hours, day-of-month, day-of-year, year\r
    const rings = [\r
      { key: 'sec', value: now.getSeconds(), max: 60, color: '#6366f1' },\r
      { key: 'min', value: now.getMinutes(), max: 60, color: '#10b981' },\r
      { key: 'hour', value: now.getHours(), max: 24, color: '#f59e0b' },\r
      { key: 'day', value: now.getDate(), max: new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(), color: '#ef4444' },\r
      { key: 'doy', value: Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000), max: 365, color: '#8b5cf6' },\r
      { key: 'year', value: now.getFullYear() - 2000, max: 100, color: '#06b6d4' },\r
    ]\r
\r
    const arc = d3.arc()\r
      .innerRadius(d => d.r0)\r
      .outerRadius(d => d.r1)\r
      .startAngle(0)\r
      .endAngle(d => (d.value / d.max) * 2 * Math.PI)\r
\r
    rings.forEach((ring, i) => {\r
      const r1 = maxR - i * ringGap\r
      const r0 = r1 - ringGap + 3\r
      ring.r0 = r0\r
      ring.r1 = r1\r
\r
      // Background track\r
      svg.append('path')\r
        .datum({ ...ring, value: ring.max })\r
        .attr('d', arc)\r
        .attr('transform', \`translate(\${cx},\${cy})\`)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-opacity', 0.35)\r
        .attr('stroke-width', 3)\r
\r
      // Active arc\r
      svg.append('path')\r
        .datum(ring)\r
        .attr('d', arc)\r
        .attr('transform', \`translate(\${cx},\${cy})\`)\r
        .attr('fill', ring.color)\r
        .attr('fill-opacity', 0.85)\r
\r
      // Ring label\r
      svg.append('text')\r
        .attr('x', cx + r1 + 8)\r
        .attr('y', cy + 3)\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '9px')\r
        .text(\`\${ring.key}: \${ring.value}\`)\r
    })\r
\r
    // Center dot\r
    svg.append('circle')\r
      .attr('cx', cx).attr('cy', cy).attr('r', 5)\r
      .attr('fill', '#6366f1').attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
    // Digital readout\r
    const timeStr = now.toLocaleTimeString()\r
    svg.append('text')\r
      .attr('x', cx).attr('y', cy + maxR + 22)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '12px').attr('font-family', 'var(--font-mono)')\r
      .text(timeStr)\r
  }, [customData, tick])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};