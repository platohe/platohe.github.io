var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
const DEFAULT_DATA = [{"label":"CPU Usage","value":78,"color":"#38bdf8"},{"label":"Memory","value":62,"color":"#818cf8"},{"label":"Disk I/O","value":45,"color":"#34d399"},{"label":"Network","value":89,"color":"#f472b6"}]\r
\r
export const meta = {\r
  id: 'arc-tween',\r
  title: 'Arc Tween',\r
  desc: 'Arc Tween — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ArcTween',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["animation","arc-tween"],\r
}\r
\r
export default function ArcTween({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    const ringThickness = 12\r
    const ringGap = 5\r
    const baseRadius = 38\r
\r
    const arcGen = d3.arc().cornerRadius(6)\r
\r
    data.forEach((d, i) => {\r
      const innerRadius = baseRadius + i * (ringThickness + ringGap)\r
      const outerRadius = innerRadius + ringThickness\r
      const targetAngle = ((d.value || 50) / 100) * 2 * Math.PI\r
\r
      // Background full circle track\r
      g.append('path')\r
        .attr('d', arcGen({ innerRadius, outerRadius, startAngle: 0, endAngle: 2 * Math.PI }))\r
        .attr('fill', 'var(--border)').attr('fill-opacity', 0.25)\r
\r
      // Active arc with tweening animation\r
      const arcPath = g.append('path')\r
        .datum({ endAngle: 0 })\r
        .attr('fill', d.color || '#6366f1')\r
\r
      arcPath.transition()\r
        .duration(1400 + i * 200)\r
        .ease(d3.easeCubicOut)\r
        .attrTween('d', (b) => {\r
          const interpolate = d3.interpolate(b.endAngle, targetAngle)\r
          return (t) => {\r
            b.endAngle = interpolate(t)\r
            return arcGen({ innerRadius, outerRadius, startAngle: 0, endAngle: b.endAngle })\r
          }\r
        })\r
    })\r
\r
    // Center metric\r
    const avgVal = Math.round(d3.mean(data, d => d.value || 0) || 0)\r
    g.append('text')\r
      .attr('text-anchor', 'middle').attr('y', -2)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '20px').attr('font-weight', '700').attr('font-family', 'var(--font-mono)')\r
      .text(\`\${avgVal}%\`)\r
\r
    g.append('text')\r
      .attr('text-anchor', 'middle').attr('y', 14)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '7.5px')\r
      .text('Average Load')\r
\r
    // Legend\r
    const legG = svg.append('g').attr('transform', 'translate(14, 14)')\r
    data.forEach((d, idx) => {\r
      legG.append('circle')\r
        .attr('cx', idx * 90 + 4).attr('cy', 0).attr('r', 3.5)\r
        .attr('fill', d.color || '#6366f1')\r
      legG.append('text')\r
        .attr('x', idx * 90 + 12).attr('y', 3)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '7.5px')\r
        .text(\`\${d.label || ''}: \${d.value || 0}\`)\r
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