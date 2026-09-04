var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'radar-multi',\r
  title: 'Radar Multi',\r
  desc: 'Radar Multi — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-multi"],\r
}\r
\r
export default function RadarMulti({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"Company A","values":[85,90,75,95,80,70]},{"name":"Company B","values":[70,80,90,65,85,95]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const metrics = ['Speed', 'Reliability', 'Safety', 'Efficiency', 'Comfort', 'Design']\r
    const n = metrics.length\r
    const angle = (i) => (i / n) * 2 * Math.PI - Math.PI / 2\r
    const r = 90\r
    const cx = W / 2, cy = H / 2 + 10\r
\r
    const color = d3.scaleOrdinal(['#6366f1', '#f59e0b', '#10b981', '#ef4444']);\r
\r
    // Grid circles\r
    [0.25, 0.5, 0.75, 1].forEach(scale => {\r
      svg.append('circle')\r
        .attr('cx', cx).attr('cy', cy).attr('r', r * scale)\r
        .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
    })\r
\r
    // Axis lines\r
    metrics.forEach((_, i) => {\r
      const a = angle(i)\r
      svg.append('line')\r
        .attr('x1', cx).attr('y1', cy)\r
        .attr('x2', cx + Math.cos(a) * r).attr('y2', cy + Math.sin(a) * r)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
      // Labels\r
      const lx = cx + Math.cos(a) * (r + 18)\r
      const ly = cy + Math.sin(a) * (r + 18)\r
      svg.append('text')\r
        .attr('x', lx).attr('y', ly)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
        .text(metrics[i])\r
    })\r
\r
    // Draw data polygons\r
    data.forEach((d, di) => {\r
      const points = d.values.map((v, i) => {\r
        const a = angle(i)\r
        return [cx + Math.cos(a) * (r * v / 100), cy + Math.sin(a) * (r * v / 100)]\r
      })\r
\r
      const line = d3.line().x(d => d[0]).y(d => d[1]).curve(d3.curveLinearClosed)\r
      const area = d3.area().x(d => d[0]).y(d => d[1]).curve(d3.curveLinearClosed)\r
\r
      svg.append('path').datum(points).attr('d', area)\r
        .attr('fill', color(di)).attr('fill-opacity', 0.15)\r
\r
      svg.append('path').datum(points).attr('d', line)\r
        .attr('fill', 'none').attr('stroke', color(di)).attr('stroke-width', 2)\r
\r
      points.forEach(p => {\r
        svg.append('circle').attr('cx', p[0]).attr('cy', p[1]).attr('r', 3)\r
          .attr('fill', color(di)).attr('stroke', 'var(--bg)').attr('stroke-width', 1)\r
      })\r
    })\r
\r
    // Legend\r
    const legG = svg.append('g').attr('transform', \`translate(\${W / 2 - data.length * 50 / 2},\${H - 15})\`)\r
    data.forEach((d, i) => {\r
      legG.append('circle').attr('cx', i * 90).attr('cy', 0).attr('r', 4).attr('fill', color(i))\r
      legG.append('text').attr('x', i * 90 + 8).attr('y', 3)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px').text(d.name)\r
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