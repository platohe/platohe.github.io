var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'radial-bar4',\r
  title: 'Radial Bar4',\r
  desc: 'Radial Bar4 — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'RadialBar4',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["radial","radial-bar4"],\r
}\r
\r
export default function RadialBar4({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"label":"A","value":85},{"label":"B","value":65},{"label":"C","value":92},{"label":"D","value":48},{"label":"E","value":73},{"label":"F","value":56}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const cx = W / 2, cy = H / 2, n = data.length, maxR = 105, minR = 25\r
    const angle = (2 * Math.PI) / n, maxVal = d3.max(data, d => d.value) || 1\r
    data.forEach((d, i) => {\r
      const a1 = angle * i - Math.PI / 2, a2 = a1 + angle * 0.85\r
      const r1 = minR, r2 = minR + (maxR - minR) * (d.value / maxVal)\r
      const arc = d3.arc().innerRadius(r1).outerRadius(r2).startAngle(a1).endAngle(a2)\r
      svg.append('path').attr('d', arc()).attr('transform', \`translate(\${cx},\${cy})\`).attr('fill', colors[i % colors.length]).attr('opacity', 0.85)\r
      const mid = (a1 + a2) / 2, lr = maxR + 14\r
      svg.append('text').attr('x', cx + lr * Math.cos(mid)).attr('y', cy + lr * Math.sin(mid) + 3).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text(d.label)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};