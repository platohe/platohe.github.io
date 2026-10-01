var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
\r
export const meta = {\r
  id: 'echopleth',\r
  title: 'Echopleth',\r
  desc: 'Echopleth — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Echopleth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","echopleth"],\r
}\r
\r
export default function Echopleth({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"A","values":[12,15,18,22,25,27,28,29,31,35]},{"group":"B","values":[20,22,25,28,30,32,35,38,40,42]},{"group":"C","values":[8,12,15,18,20,22,25,28,30,33]},{"group":"D","values":[30,35,38,40,42,45,48,50,55,60]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const allValues = data.flatMap(d => d.values)\r
    const x = d3.scaleLinear().domain(d3.extent(allValues)).range([M.left, W - M.right])\r
    const y = d3.scaleBand().domain(data.map(d => d.group)).range([M.top, H - M.bottom]).padding(0.2)\r
\r
    const g = svg.append('g')\r
\r
    // Draw echopleth dots for each group\r
    data.forEach((d, gi) => {\r
      const rowY = y(d.group)\r
      const rowH = y.bandwidth()\r
      const centerY = rowY + rowH / 2\r
\r
      // Grouped dots along the row\r
      d.values.forEach((v, vi) => {\r
        const col = Math.floor(vi / 10)\r
        const row = vi % 10\r
        const dotX = x(v) + col * 8\r
        const dotY = centerY + (row - 4.5) * 6\r
\r
        g.append('circle')\r
          .attr('cx', dotX).attr('cy', dotY)\r
          .attr('r', 2.5)\r
          .attr('fill', ['#6366f1', '#f59e0b', '#10b981', '#ef4444'][gi % 4])\r
          .attr('fill-opacity', 0.7)\r
      })\r
    })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom + 5})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(6))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    // Y axis\r
    g.append('g')\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '9px').attr('font-weight', 500))\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};