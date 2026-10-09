var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
import { getDefaultData } from './defaultData'\r
\r
export const meta = {\r
  id: 'bullet-chart',\r
  title: 'Bullet Chart',\r
  desc: 'Bullet Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BulletChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bullet-chart"],\r
}\r
\r
export default function BulletChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"title":"Revenue","subtitle":"US$, in thousands","current":275,"target":250,"ranges":[150,225,300]},{"title":"Profit","subtitle":"%","current":22,"target":26,"ranges":[20,25,30]},{"title":"New Customers","subtitle":"count","current":1400,"target":1600,"ranges":[1000,1500,2000]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA // 'BulletChart')\r
\r
    const margin = { top: 25, right: 30, bottom: 20, left: 110 }\r
    const rowHeight = 70\r
    const barHeight = 24\r
\r
    data.forEach((d, i) => {\r
      const g = svg.append('g').attr('transform', \`translate(\${margin.left}, \${margin.top + i * rowHeight})\`)\r
      const chartW = W - margin.left - margin.right\r
\r
      const ranges = d.ranges || [100, 200, 300]\r
      const maxVal = d3.max(ranges) || 300\r
\r
      const x = d3.scaleLinear().domain([0, maxVal]).range([0, chartW])\r
\r
      // Range rects (qualitative bands)\r
      const sortedRanges = [...ranges].sort((a, b) => b - a)\r
      const rangeColors = ['#e2e8f0', '#cbd5e1', '#94a3b8']\r
\r
      sortedRanges.forEach((val, rIdx) => {\r
        g.append('rect')\r
          .attr('x', 0)\r
          .attr('y', 0)\r
          .attr('width', x(val))\r
          .attr('height', barHeight)\r
          .attr('fill', rangeColors[rIdx % rangeColors.length])\r
          .attr('rx', 3)\r
      })\r
\r
      // Current measure bar\r
      g.append('rect')\r
        .attr('x', 0)\r
        .attr('y', barHeight / 4)\r
        .attr('width', x(d.current || 0))\r
        .attr('height', barHeight / 2)\r
        .attr('fill', '#6366f1')\r
        .attr('rx', 2)\r
\r
      // Target marker line\r
      if (d.target !== undefined) {\r
        g.append('line')\r
          .attr('x1', x(d.target))\r
          .attr('x2', x(d.target))\r
          .attr('y1', 2)\r
          .attr('y2', barHeight - 2)\r
          .attr('stroke', '#ef4444')\r
          .attr('stroke-width', 3)\r
      }\r
\r
      // Title & Subtitle\r
      const labelG = svg.append('g').attr('transform', \`translate(\${margin.left - 10}, \${margin.top + i * rowHeight + barHeight / 2})\`)\r
      labelG.append('text')\r
        .attr('x', 0)\r
        .attr('y', -2)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 600)\r
        .text(d.title || \`Item \${i+1}\`)\r
\r
      if (d.subtitle) {\r
        labelG.append('text')\r
          .attr('x', 0)\r
          .attr('y', 12)\r
          .attr('text-anchor', 'end')\r
          .attr('fill', 'var(--text-secondary)')\r
          .attr('font-size', '10px')\r
          .text(d.subtitle)\r
      }\r
\r
      // Axis\r
      const axis = d3.axisBottom(x).ticks(5).tickSize(3)\r
      g.append('g')\r
        .attr('transform', \`translate(0, \${barHeight})\`)\r
        .call(axis)\r
        .call((group) => group.select('.domain').attr('stroke', 'var(--border)'))\r
        .call((group) => group.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};