var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'dot-plot',\r
  title: 'Dot Plot',\r
  desc: 'Dot Plot — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'DotPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","dot-plot"],\r
}\r
\r
export default function DotPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"name":"Epsilon","value":97},{"name":"Alpha","value":92},{"name":"Eta","value":88},{"name":"Gamma","value":85},{"name":"Beta","value":78},{"name":"Zeta","value":71},{"name":"Delta","value":63},{"name":"Theta","value":54}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const y = d3.scaleBand().domain(data.map((d) => d.name)).range([20, 270]).padding(0.4)\r
    const x = d3.scaleLinear().domain([0, 100]).range([60, 370])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', 'translate(70,20)')\r
      .call(d3.axisTop(x).ticks(5).tickSize(230).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Dots\r
    data.forEach((d, i) => {\r
      // Streak line\r
      svg.append('line')\r
        .attr('x1', 70).attr('x2', x(d.value)).attr('y1', y(d.name) + y.bandwidth() / 2).attr('y2', y(d.name) + y.bandwidth() / 2)\r
        .attr('stroke', '#6366f1').attr('stroke-opacity', 0.2).attr('stroke-width', 8).attr('stroke-linecap', 'round')\r
\r
      // Dot\r
      svg.append('circle')\r
        .attr('cx', x(d.value)).attr('cy', y(d.name) + y.bandwidth() / 2)\r
        .attr('r', 6).attr('fill', '#6366f1').attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
      // Value\r
      svg.append('text')\r
        .attr('x', x(d.value) + 12).attr('y', y(d.name) + y.bandwidth() / 2 + 4)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('font-weight', 600)\r
        .text(d.value)\r
    })\r
\r
    // Y labels\r
    data.forEach((d) => {\r
      svg.append('text')\r
        .attr('x', 62).attr('y', y(d.name) + y.bandwidth() / 2 + 4)\r
        .attr('dominant-baseline', 'middle').attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text)').attr('font-size', '12px').attr('font-weight', 500)\r
        .text(d.name)\r
    })\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', 'translate(70,275)')\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(6))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};