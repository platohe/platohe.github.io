var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'funnel-chart',\r
  title: 'Funnel Chart',\r
  desc: 'Funnel Chart — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'FunnelChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel-chart"],\r
}\r
\r
export default function FunnelChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"stage":"Visit","value":1000},{"stage":"Sign Up","value":600},{"stage":"Activate","value":400},{"stage":"Purchase","value":200},{"stage":"Retain","value":120},{"stage":"Refer","value":60}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const maxVal = d3.max(data, d => d.value) || 1\r
    const n = data.length\r
    const barH = (H - 40 - n * 10) / n\r
    const color = d3.scaleSequential(d3.interpolateRgbBasis(['#6366f1', '#818cf8', '#a5b4fc']))\r
\r
    const g = svg.append('g').attr('transform', 'translate(80,20)')\r
\r
    data.forEach((d, i) => {\r
      const w = (d.value / maxVal) * (W - 140)\r
      const x = W - 140 - w\r
      const y = i * (barH + 10)\r
\r
      // Trapezoid shape\r
      const nextW = i < n - 1 ? (data[i + 1].value / maxVal) * (W - 140) : w * 0.5\r
      const nextX = W - 140 - nextW\r
      const nextY = (i + 1) * (barH + 10)\r
\r
      g.append('path')\r
        .attr('d', \`M\${x},\${y} L\${x + w},\${y} L\${nextX + nextW},\${nextY} L\${nextX},\${nextY} Z\`)\r
        .attr('fill', color(i / (n - 1)))\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
      // Label\r
      g.append('text')\r
        .attr('x', x - 10).attr('y', y + barH / 2)\r
        .attr('dominant-baseline', 'middle').attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '9px').attr('font-weight', 500)\r
        .text(d.stage)\r
\r
      // Value\r
      g.append('text')\r
        .attr('x', x + w / 2).attr('y', y + barH / 2)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', '#fff').attr('font-size', '10px').attr('font-weight', 600)\r
        .text(d.value)\r
\r
      // Conversion rate\r
      if (i > 0) {\r
        const rate = ((d.value / data[i - 1].value) * 100).toFixed(0)\r
        g.append('text')\r
          .attr('x', W / 2).attr('y', y + barH + 5)\r
          .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
          .text(\`\${rate}% →\`)\r
      }\r
    })\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};