var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'beeswarm',\r
  title: 'Beeswarm',\r
  desc: 'Beeswarm — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'Beeswarm',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","beeswarm"],\r
}\r
\r
export default function Beeswarm({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Generate groups of data\r
    const DEFAULT_DATA = ["Group A","Group B","Group C"]\r
    const groups = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
    const data = []\r
    groups.forEach((g) => {\r
      const center = g === 'Group A' ? 30 : g === 'Group B' ? 50 : 70\r
      for (let i = 0; i < 30; i++) {\r
        data.push({\r
          group: g,\r
          x: center + (Math.random() - 0.5) * 30,\r
          y: Math.random() * 200 + 20,\r
          r: 4 + Math.random() * 4,\r
        })\r
      }\r
    })\r
\r
    const x = d3.scaleBand().domain(groups).range([30, 370]).padding(0.3)\r
    const y = d3.scaleLinear().domain([0, 240]).range([260, 20])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    const colors = { 'Group A': '#6366f1', 'Group B': '#f59e0b', 'Group C': '#10b981' }\r
\r
    svg.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.group) + x.bandwidth() / 2 + (d.x - 50) * 2.5 + 50)\r
      .attr('cy', (d) => y(d.y) + 20)\r
      .attr('r', (d) => d.r)\r
      .attr('fill', (d) => colors[d.group])\r
      .attr('opacity', 0.65)\r
\r
    // X labels\r
    groups.forEach((g) => {\r
      svg.append('text')\r
        .attr('x', x(g) + x.bandwidth() / 2 + 50)\r
        .attr('y', 278)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600)\r
        .text(g)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};