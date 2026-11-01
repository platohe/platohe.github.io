var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'gauge-chart',\r
  title: 'Gauge Chart',\r
  desc: 'Gauge Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GaugeChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gauge-chart"],\r
}\r
\r
export default function GaugeChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"value":72,"label":"Performance","min":0,"max":100,"sectors":[{"from":0,"to":33,"color":"#ef4444"},{"from":33,"to":66,"color":"#f59e0b"},{"from":66,"to":100,"color":"#10b981"}],"target":80}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object') ? customData : DEFAULT_DATA\r
    const { value, label, min, max, sectors, target } = config\r
    const v = value ?? 72\r
    const lo = min ?? 0\r
    const hi = max ?? 100\r
    const tgt = target ?? 80\r
\r
    const cx = W / 2, cy = H / 2 + 25\r
    const r = 110\r
    const arcW = 28\r
\r
    const startAngle = Math.PI, endAngle = 2 * Math.PI\r
\r
    const arc = d3.arc()\r
      .innerRadius(r - arcW / 2)\r
      .outerRadius(r + arcW / 2)\r
      .startAngle(startAngle)\r
      .endAngle(endAngle)\r
\r
    // Background arc\r
    svg.append('path')\r
      .datum({})\r
      .attr('d', arc)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', arcW)\r
      .attr('stroke-linecap', 'round')\r
\r
    // Sector arcs\r
    const angleRange = endAngle - startAngle\r
    sectors.forEach(s => {\r
      const a1 = startAngle + ((s.from - lo) / (hi - lo)) * angleRange\r
      const a2 = startAngle + ((s.to - lo) / (hi - lo)) * angleRange\r
      const sArc = d3.arc()\r
        .innerRadius(r - arcW / 2)\r
        .outerRadius(r + arcW / 2)\r
        .startAngle(a1)\r
        .endAngle(a2)\r
      svg.append('path').datum({}).attr('d', sArc).attr('fill', s.color).attr('opacity', 0.7)\r
    })\r
\r
    // Value arc\r
    const valueAngle = startAngle + ((v - lo) / (hi - lo)) * angleRange\r
    const vArc = d3.arc()\r
      .innerRadius(r - arcW / 2)\r
      .outerRadius(r + arcW / 2)\r
      .startAngle(startAngle)\r
      .endAngle(valueAngle)\r
    svg.append('path').datum({}).attr('d', vArc)\r
      .attr('fill', colors[0]).attr('opacity', 0.9)\r
\r
    // Tick marks\r
    for (let t = lo; t <= hi; t += (hi - lo) / 10) {\r
      const a = startAngle + ((t - lo) / (hi - lo)) * angleRange\r
      const inner = r - arcW / 2 - 6\r
      const outer = r - arcW / 2 - (t % 10 === 0 ? 14 : 9)\r
      svg.append('line')\r
        .attr('x1', cx + inner * Math.cos(a)).attr('y1', cy + inner * Math.sin(a))\r
        .attr('x2', cx + outer * Math.cos(a)).attr('y2', cy + outer * Math.sin(a))\r
        .attr('stroke', 'var(--text-secondary)').attr('stroke-width', t % 10 === 0 ? 1.5 : 0.8)\r
        .attr('opacity', 0.6)\r
      if (t % 10 === 0) {\r
        const lr = r + arcW / 2 + 12\r
        svg.append('text')\r
          .attr('x', cx + lr * Math.cos(a)).attr('y', cy + lr * Math.sin(a) + 3)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
          .text(t)\r
      }\r
    }\r
\r
    // Target marker\r
    const tgtAngle = startAngle + ((tgt - lo) / (hi - lo)) * angleRange\r
    svg.append('line')\r
      .attr('x1', cx + (r + arcW / 2 + 3) * Math.cos(tgtAngle))\r
      .attr('y1', cy + (r + arcW / 2 + 3) * Math.sin(tgtAngle))\r
      .attr('x2', cx + (r + arcW / 2 + 16) * Math.cos(tgtAngle))\r
      .attr('y2', cy + (r + arcW / 2 + 16) * Math.sin(tgtAngle))\r
      .attr('stroke', '#ef4444').attr('stroke-width', 2.5).attr('stroke-linecap', 'round')\r
    svg.append('circle')\r
      .attr('cx', cx + (r + arcW / 2 + 16) * Math.cos(tgtAngle))\r
      .attr('cy', cy + (r + arcW / 2 + 16) * Math.sin(tgtAngle)).attr('r', 3)\r
      .attr('fill', '#ef4444').attr('opacity', 0.8)\r
\r
    // Needle\r
    const needleAngle = startAngle + ((v - lo) / (hi - lo)) * angleRange\r
    const needleLen = r - arcW / 2 - 8\r
    svg.append('polygon')\r
      .attr('points', \`\${cx},\${cy} \${cx + needleLen * Math.cos(needleAngle - 0.04)},\${cy + needleLen * Math.sin(needleAngle - 0.04)} \${cx + needleLen * Math.cos(needleAngle + 0.04)},\${cy + needleLen * Math.sin(needleAngle + 0.04)}\`)\r
      .attr('fill', '#1a1a2e').attr('opacity', 0.85)\r
\r
    // Center cap\r
    svg.append('circle').attr('cx', cx).attr('cy', cy).attr('r', 8)\r
      .attr('fill', 'var(--bg-card)').attr('stroke', 'var(--border)').attr('stroke-width', 1.5)\r
\r
    // Value text\r
    svg.append('text')\r
      .attr('x', cx).attr('y', cy - 10)\r
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
      .attr('fill', 'var(--text)').attr('font-size', '32px').attr('font-weight', 700)\r
      .text(Math.round(v))\r
    svg.append('text')\r
      .attr('x', cx).attr('y', cy + 14)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text(label || 'Value')\r
\r
    // Target text\r
    svg.append('text')\r
      .attr('x', cx + 50).attr('y', cy - 8)\r
      .attr('text-anchor', 'start')\r
      .attr('fill', '#ef4444').attr('font-size', '9px').attr('font-weight', 600)\r
      .text(\`Target: \${tgt}\`)\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};