var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bullet-dashboard',\r
  title: 'Bullet Dashboard',\r
  desc: 'Bullet Dashboard — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BulletDashboard',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bullet-dashboard"],\r
}\r
\r
export default function BulletDashboard({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"metric":"Revenue","current":142,"target":150,"ranges":[0,80,120,150],"unit":"$K"},{"metric":"Customers","current":1250,"target":1500,"ranges":[0,800,1100,1500],"unit":""},{"metric":"NPS","current":72,"target":75,"ranges":[0,40,60,75],"unit":"pts"},{"metric":"Churn","current":4.2,"target":3,"ranges":[0,3,5,8],"unit":"%"},{"metric":"Uptime","current":99.5,"target":99.9,"ranges":[99,99.5,99.8,99.9],"unit":"%"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 25, right: 20, bottom: 15, left: 80 }\r
    const rowH = (H - margin.top - margin.bottom) / data.length\r
    const barH = rowH * 0.35\r
\r
    data.forEach((d, i) => {\r
      const gy = margin.top + i * rowH\r
      const maxVal = d.ranges[d.ranges.length - 1]\r
      const chartW = W - margin.left - margin.right\r
      const x = d3.scaleLinear().domain([0, maxVal]).range([0, chartW])\r
\r
      // Label\r
      svg.append('text')\r
        .attr('x', margin.left - 8).attr('y', gy + barH + 6)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 600)\r
        .text(d.metric)\r
\r
      // Background ranges\r
      const rangeColors = ['#e2e8f0', '#cbd5e1', '#94a3b8']\r
      for (let r = 0; r < d.ranges.length - 1; r++) {\r
        svg.append('rect')\r
          .attr('x', margin.left + x(d.ranges[r])).attr('y', gy)\r
          .attr('width', x(d.ranges[r + 1]) - x(d.ranges[r])).attr('height', barH)\r
          .attr('fill', rangeColors[r]).attr('rx', r === 0 ? 3 : 0)\r
          .attr('ry', r === 0 ? 3 : 0)\r
        if (r === d.ranges.length - 2) {\r
          svg.select(\`rect:nth-child(\${4 + r})\`)\r
            .attr('rx', 3).attr('ry', 3)\r
        }\r
      }\r
\r
      // Feature measure bar\r
      svg.append('rect')\r
        .attr('x', margin.left).attr('y', gy + barH * 0.25)\r
        .attr('width', x(d.current)).attr('height', barH * 0.5)\r
        .attr('fill', colors[0]).attr('rx', 2)\r
\r
      // Target marker\r
      svg.append('line')\r
        .attr('x1', margin.left + x(d.target)).attr('x2', margin.left + x(d.target))\r
        .attr('y1', gy - 3).attr('y2', gy + barH + 3)\r
        .attr('stroke', '#ef4444').attr('stroke-width', 2.5)\r
\r
      // Value\r
      svg.append('text')\r
        .attr('x', margin.left + x(d.current) + 5).attr('y', gy + barH / 2 + 4)\r
        .attr('fill', colors[0]).attr('font-size', '10px').attr('font-weight', 700)\r
        .text(\`\${d.current}\${d.unit}\`)\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};