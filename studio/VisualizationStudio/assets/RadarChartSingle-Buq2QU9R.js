var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'radar-chart-single',\r
  title: 'Radar Chart Single',\r
  desc: 'Radar Chart Single — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarChartSingle',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["fun","radar-chart-single"],\r
}\r
\r
export default function RadarChartSingle({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"labels":["Speed","Reliability","Comfort","Safety","Efficiency","Design"],"values":[85,90,70,95,75,88]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const { labels, values } = config\r
    const n = labels.length\r
\r
    const cx = W / 2, cy = H / 2 + 5\r
    const r = 105\r
\r
    const angleSlice = (2 * Math.PI) / n\r
    const color = colors[0];\r
\r
    // Grid rings\r
    [0.25, 0.5, 0.75, 1.0].forEach(level => {\r
      const points = labels.map((_, i) => {\r
        const a = angleSlice * i - Math.PI / 2\r
        return [cx + r * level * Math.cos(a), cy + r * level * Math.sin(a)]\r
      })\r
      svg.append('polygon')\r
        .attr('points', points.map(p => p.join(',')).join(' '))\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', level === 1 ? 1.5 : 0.8)\r
        .attr('stroke-opacity', level === 1 ? 0.6 : 0.3)\r
    })\r
\r
    // Axes\r
    labels.forEach((_, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      const x = cx + r * Math.cos(a)\r
      const y = cy + r * Math.sin(a)\r
      svg.append('line')\r
        .attr('x1', cx).attr('y1', cy).attr('x2', x).attr('y2', y)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 0.8).attr('stroke-opacity', 0.5)\r
    })\r
\r
    // Data area\r
    const dataPoints = values.map((v, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      return [cx + r * (v / 100) * Math.cos(a), cy + r * (v / 100) * Math.sin(a)]\r
    })\r
    svg.append('polygon')\r
      .attr('points', dataPoints.map(p => p.join(',')).join(' '))\r
      .attr('fill', color).attr('fill-opacity', 0.2)\r
      .attr('stroke', color).attr('stroke-width', 2)\r
\r
    // Data dots + labels\r
    values.forEach((v, i) => {\r
      const a = angleSlice * i - Math.PI / 2\r
      const px = cx + r * (v / 100) * Math.cos(a)\r
      const py = cy + r * (v / 100) * Math.sin(a)\r
      svg.append('circle').attr('cx', px).attr('cy', py).attr('r', 4)\r
        .attr('fill', color).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      // Value label\r
      const labelR = r + 16\r
      svg.append('text')\r
        .attr('x', cx + labelR * Math.cos(a)).attr('y', cy + labelR * Math.sin(a) + 3)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 600)\r
        .text(v)\r
      // Axis label\r
      const lx = cx + (r + 28) * Math.cos(a)\r
      const ly = cy + (r + 28) * Math.sin(a)\r
      svg.append('text')\r
        .attr('x', lx).attr('y', ly + 3)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8.5px')\r
        .text(labels[i])\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};