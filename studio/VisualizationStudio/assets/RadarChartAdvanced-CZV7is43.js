var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'radar-chart-advanced',\r
  title: 'Radar Chart Advanced',\r
  desc: 'Radar Chart Advanced — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarChartAdvanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["fun","radar-chart-advanced"],\r
}\r
\r
export default function RadarChartAdvanced({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = {"labels":["Speed","Power","Endurance","Agility","Strength","Flexibility"],"values":[78,85,60,90,72,88]}\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const config = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const { labels, values } = config\r
    const n = labels.length, cx = W / 2, cy = H / 2, r = 100\r
    const angleSlice = (2 * Math.PI) / n;\r
    // Grid\r
    [0.25, 0.5, 0.75, 1.0].forEach(level => {\r
      const pts = labels.map((_, i) => {\r
        const a = angleSlice * i - Math.PI / 2\r
        return [cx + r * level * Math.cos(a), cy + r * level * Math.sin(a)]\r
      })\r
      svg.append('polygon').attr('points', pts.map(p => p.join(',')).join(' ')).attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', level === 1 ? 1 : 0.5).attr('stroke-opacity', level === 1 ? 0.5 : 0.2)\r
    })\r
    // Axes\r
    labels.forEach((_, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      svg.append('line').attr('x1', cx).attr('y1', cy).attr('x2', cx + r * Math.cos(a)).attr('y2', cy + r * Math.sin(a)).attr('stroke', 'var(--border)').attr('stroke-width', 0.5).attr('stroke-opacity', 0.4)\r
    })\r
    // Data\r
    const pts = values.map((v, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      return [cx + r * (v / 100) * Math.cos(a), cy + r * (v / 100) * Math.sin(a)]\r
    })\r
    svg.append('polygon').attr('points', pts.map(p => p.join(',')).join(' ')).attr('fill', colors[0]).attr('fill-opacity', 0.2).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    values.forEach((v, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      svg.append('circle').attr('cx', cx + r * (v / 100) * Math.cos(a)).attr('cy', cy + r * (v / 100) * Math.sin(a)).attr('r', 4).attr('fill', colors[0]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
    })\r
    labels.forEach((label, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      svg.append('text').attr('x', cx + (r + 16) * Math.cos(a)).attr('y', cy + (r + 16) * Math.sin(a) + 3).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8.5px').text(label)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};