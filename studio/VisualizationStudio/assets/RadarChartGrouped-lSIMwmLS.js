var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'radar-chart-grouped',\r
  title: 'Radar Chart Grouped',\r
  desc: 'Radar Chart Grouped — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarChartGrouped',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["fun","radar-chart-grouped"],\r
}\r
\r
export default function RadarChartGrouped({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = {"labels":["A","B","C","D","E","F"],"series":[{"name":"Set 1","values":[80,65,90,70,85,60]},{"name":"Set 2","values":[60,85,70,90,55,80]}]}\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const config = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const { labels, series } = config\r
    const n = labels.length, cx = W / 2, cy = H / 2, r = 95\r
    const angleSlice = (2 * Math.PI) / n;\r
    // Grid\r
    [0.25, 0.5, 0.75, 1.0].forEach(level => {\r
      const pts = labels.map((_, i) => { const a = angleSlice * i - Math.PI / 2; return [cx + r * level * Math.cos(a), cy + r * level * Math.sin(a)] })\r
      svg.append('polygon').attr('points', pts.map(p => p.join(',')).join(' ')).attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', level === 1 ? 1 : 0.5).attr('stroke-opacity', level === 1 ? 0.5 : 0.2)\r
    })\r
    // Axes\r
    labels.forEach((_, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      svg.append('line').attr('x1', cx).attr('y1', cy).attr('x2', cx + r * Math.cos(a)).attr('y2', cy + r * Math.sin(a)).attr('stroke', 'var(--border)').attr('stroke-width', 0.5).attr('stroke-opacity', 0.4)\r
      svg.append('text').attr('x', cx + (r + 14) * Math.cos(a)).attr('y', cy + (r + 14) * Math.sin(a) + 3).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8.5px').text(labels[i])\r
    })\r
    // Series\r
    series.forEach((s, si) => {\r
      const col = colors[si % colors.length]\r
      const pts = s.values.map((v, i) => { const a = angleSlice * i - Math.PI / 2; return [cx + r * (v / 100) * Math.cos(a), cy + r * (v / 100) * Math.sin(a)] })\r
      svg.append('polygon').attr('points', pts.map(p => p.join(',')).join(' ')).attr('fill', col).attr('fill-opacity', 0.1).attr('stroke', col).attr('stroke-width', 1.8)\r
      pts.forEach(p => svg.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 3.5).attr('fill', col).attr('stroke', 'var(--bg)').attr('stroke-width', 1))\r
    })\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${W - 85},14)\`)\r
    series.forEach((s, i) => {\r
      lg.append('rect').attr('width', 10).attr('height', 10).attr('rx', 2).attr('fill', colors[i % colors.length]).attr('opacity', 0.7)\r
      lg.append('text').attr('x', 15).attr('y', 9).attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(s.name)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};