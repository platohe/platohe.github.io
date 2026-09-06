var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'circle-clock',\r
  title: 'Circle Clock',\r
  desc: 'Circle Clock — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleClock',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-clock"],\r
}\r
\r
export default function CircleClock({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
    // hour markers around a circular clock face with progress arcs\r
    for (let h = 0; h < 12; h++) {\r
      const a0 = (h / 12) * 2 * Math.PI - Math.PI / 2\r
      const a1 = ((h + 1) / 12) * 2 * Math.PI - Math.PI / 2 - 0.03\r
      const arc = d3.arc().innerRadius(58).outerRadius(88).startAngle(a0).endAngle(a1)\r
      g.append('path').attr('d', arc({})).attr('transform', \`translate(\${cx},\${cy})\`)\r
        .attr('fill', colors[h % colors.length]).attr('fill-opacity', h % 3 === 0 ? 0.9 : 0.45)\r
      const mx = cx + Math.cos(a0 + 0.26) * 73\r
      const my = cy + Math.sin(a0 + 0.26) * 73\r
      g.append('text').attr('x', mx).attr('y', my + 2.5).attr('text-anchor', 'middle')\r
        .attr('font-size', '7px').attr('font-weight', 700).attr('fill', '#fff').text(h === 0 ? 12 : h)\r
    }\r
    g.append('circle').attr('cx', cx).attr('cy', cy).attr('r', 34).attr('fill', 'var(--border)').attr('fill-opacity', 0.25)\r
    g.append('line').attr('x1', cx).attr('y1', cy).attr('x2', cx + 22).attr('y2', cy - 14).attr('stroke', 'var(--text-secondary)').attr('stroke-width', 2.4).attr('stroke-linecap', 'round')\r
    g.append('line').attr('x1', cx).attr('y1', cy).attr('x2', cx - 10).attr('y2', cy + 24).attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.6).attr('stroke-linecap', 'round')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};