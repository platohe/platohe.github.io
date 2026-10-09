var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'horizontal-bar',\r
  title: 'Horizontal Bar',\r
  desc: 'Horizontal Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizontalBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","horizontal-bar"],\r
}\r
\r
export default function HorizontalBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"label":"JavaScript","value":95},{"label":"Python","value":88},{"label":"TypeScript","value":82},{"label":"Go","value":71},{"label":"Rust","value":68},{"label":"Java","value":65},{"label":"C++","value":58}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, 100])\r
      .range([0, 340])\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map((d) => d.label))\r
      .range([0, 260])\r
      .padding(0.35)\r
\r
    // Bars\r
    svg.append('g')\r
      .attr('transform', 'translate(80,20)')\r
      .selectAll('rect')\r
      .data(data)\r
      .join('rect')\r
      .attr('x', 0)\r
      .attr('y', (d) => y(d.label))\r
      .attr('width', (d) => x(d.value))\r
      .attr('height', y.bandwidth())\r
      .attr('fill', (d, i) => ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#f59e0b', '#fbbf24', '#fcd34d'][i])\r
      .attr('rx', 3)\r
\r
    // Labels\r
    svg.append('g')\r
      .attr('transform', 'translate(80,20)')\r
      .selectAll('text')\r
      .data(data)\r
      .join('text')\r
      .attr('x', -8)\r
      .attr('y', (d) => y(d.label) + y.bandwidth() / 2)\r
      .attr('text-anchor', 'end')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .text((d) => d.label)\r
\r
    // Values\r
    svg.append('g')\r
      .attr('transform', 'translate(80,20)')\r
      .selectAll('text')\r
      .data(data)\r
      .join('text')\r
      .attr('x', (d) => x(d.value) + 6)\r
      .attr('y', (d) => y(d.label) + y.bandwidth() / 2)\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text((d) => d.value)\r
\r
    // Axis\r
    svg.append('g')\r
      .attr('transform', 'translate(420,286)')\r
      .call(d3.axisBottom(x).ticks(5).tickSize(4).tickPadding(6))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
      .lower()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};