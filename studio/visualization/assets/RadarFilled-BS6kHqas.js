var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'radar-filled',\r
  title: 'Radar Filled',\r
  desc: 'Radar Filled — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarFilled',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-filled"],\r
}\r
\r
export default function RadarFilled({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = {"labels":["A","B","C","D","E","F"],"values":[80,65,90,70,85,60]}\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const config = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const { labels, values } = config\r
    const n = labels.length, cx = W / 2, cy = H / 2, r = 90\r
    const angleSlice = (2 * Math.PI) / n\r
    // Grid\r
    for (let lvl = 0.25; lvl <= 1; lvl += 0.25) {\r
      const pts = labels.map((_, i) => {\r
        const a = angleSlice * i - Math.PI / 2\r
        return [cx + r * lvl * Math.cos(a), cy + r * lvl * Math.sin(a)]\r
      })\r
      svg.append('polygon').attr('points', pts.map(p => p.join(',')).join(' ')).attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', lvl >= 0.95 ? 1 : 0.5).attr('stroke-opacity', lvl >= 0.95 ? 0.5 : 0.2)\r
    }\r
    // Axes + labels\r
    labels.forEach((label, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      svg.append('line').attr('x1', cx).attr('y1', cy).attr('x2', cx + r * Math.cos(a)).attr('y2', cy + r * Math.sin(a)).attr('stroke', 'var(--border)').attr('stroke-width', 0.5).attr('stroke-opacity', 0.4)\r
      svg.append('text').attr('x', cx + (r + 14) * Math.cos(a)).attr('y', cy + (r + 14) * Math.sin(a) + 3).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(label)\r
    })\r
    // Data polygon\r
    const pts = values.map((v, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      return [cx + r * (v / 100) * Math.cos(a), cy + r * (v / 100) * Math.sin(a)]\r
    })\r
    svg.append('polygon').attr('points', pts.map(p => p.join(',')).join(' ')).attr('fill', colors[0]).attr('fill-opacity', 0.25).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    pts.forEach((p, i) => {\r
      svg.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 4).attr('fill', colors[0]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};