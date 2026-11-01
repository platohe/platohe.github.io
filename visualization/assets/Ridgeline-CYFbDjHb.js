var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'ridgeline',\r
  title: 'Ridgeline',\r
  desc: 'Ridgeline — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Ridgeline',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","ridgeline"],\r
}\r
\r
export default function Ridgeline({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"group":"Jan","values":[12,15,18,22,25,28,30]},{"group":"Feb","values":[18,22,28,35,40,42,45]},{"group":"Mar","values":[10,14,20,26,32,36,40]},{"group":"Apr","values":[22,28,34,42,50,55,60]}]\r
\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const categories = data.map((d) => (typeof d === 'object' ? (d.group || d.category || 'Group') : String(d)))\r
\r
    const y = d3.scaleBand().domain(categories).range([20, 260]).padding(0.2)\r
    const x = d3.scaleLinear().domain([0, 70]).range([50, 360])\r
\r
    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']\r
\r
    data.forEach((item, ci) => {\r
      const vals = (typeof item === 'object' && Array.isArray(item.values)) ? item.values : [10, 20, 30, 40, 30, 20, 10]\r
      const name = typeof item === 'object' ? (item.group || item.category || \`G\${ci+1}\`) : String(item)\r
\r
      const line = d3.line()\r
        .x((v, idx) => x((idx / (vals.length - 1)) * 60 + 5))\r
        .y((v) => y(name) + y.bandwidth() - (v / 70) * y.bandwidth())\r
        .curve(d3.curveBasis)\r
\r
      const area = d3.area()\r
        .x((v, idx) => x((idx / (vals.length - 1)) * 60 + 5))\r
        .y0(y(name) + y.bandwidth())\r
        .y1((v) => y(name) + y.bandwidth() - (v / 70) * y.bandwidth())\r
        .curve(d3.curveBasis)\r
\r
      svg.append('path')\r
        .datum(vals)\r
        .attr('d', area)\r
        .attr('fill', colors[ci % colors.length])\r
        .attr('opacity', 0.4)\r
\r
      svg.append('path')\r
        .datum(vals)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[ci % colors.length])\r
        .attr('stroke-width', 2)\r
\r
      svg.append('text')\r
        .attr('x', 40).attr('y', y(name) + y.bandwidth() / 2)\r
        .attr('dominant-baseline', 'middle').attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '11px')\r
        .text(name)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};