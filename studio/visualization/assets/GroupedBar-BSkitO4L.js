var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'grouped-bar',\r
  title: 'Grouped Bar',\r
  desc: 'Grouped Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","grouped-bar"],\r
}\r
\r
export default function GroupedBar({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"year":"2019","A":45,"B":38},{"year":"2020","A":52,"B":44},{"year":"2021","A":61,"B":55},{"year":"2022","A":58,"B":63}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 25, right: 30, bottom: 35, left: 40 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const groups = Object.keys(data[0]).filter(k => k !== 'year')\r
    const xGroup = d3.scaleBand().domain(data.map(d => d.year)).range([0, w]).padding(0.2)\r
    const xSub = d3.scaleBand().domain(groups).range([0, xGroup.bandwidth()]).padding(0.05)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d3.max(groups, g => d[g])) * 1.1]).range([h, 0])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    groups.forEach((grp, gi) => {\r
      g.selectAll(\`.bar-\${gi}\`).data(data).join('rect')\r
        .attr('x', d => xGroup(d.year) + xSub(grp)).attr('y', d => y(d[grp])).attr('width', xSub.bandwidth()).attr('height', d => h - y(d[grp]))\r
        .attr('fill', colors[gi % colors.length]).attr('opacity', 0.85).attr('rx', 1)\r
    })\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(xGroup).tickSize(0).tickPadding(8)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};