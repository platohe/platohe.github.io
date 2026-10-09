var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'stacked-bar',\r
  title: 'Stacked Bar',\r
  desc: 'Stacked Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StackedBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","stacked-bar"],\r
}\r
\r
export default function StackedBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"year":"2018","web":40,"mobile":30,"desktop":20},{"year":"2019","web":55,"mobile":45,"desktop":25},{"year":"2020","web":70,"mobile":60,"desktop":30},{"year":"2021","web":65,"mobile":80,"desktop":35},{"year":"2022","web":90,"mobile":95,"desktop":40},{"year":"2023","web":110,"mobile":120,"desktop":50}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    // Derive keys from data: all numeric properties except the label key\r
    const labelKey = data[0] && data[0].year !== undefined ? 'year'\r
      : data[0] && data[0].label !== undefined ? 'label'\r
      : null\r
    const keys = labelKey\r
      ? Object.keys(data[0]).filter(k => k !== labelKey && typeof data[0][k] === 'number')\r
      : Object.keys(data[0]).filter(k => typeof data[0][k] === 'number')\r
\r
    const stacked = d3.stack().keys(keys)(data)\r
\r
    const x = d3.scaleBand()\r
      .domain(data.map((d) => labelKey ? d[labelKey] : d.label || d.key))\r
      .range([20, 360])\r
      .padding(0.25)\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(stacked[stacked.length - 1], (d) => d[1]) * 1.1])\r
      .range([250, 20])\r
\r
    const color = d3.scaleOrdinal(colors).domain(keys)\r
\r
    // Grid\r
    svg.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-360).tickPadding(0))\r
      .attr('transform', 'translate(50,20)')\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Stacked bars\r
    svg.selectAll('.stack')\r
      .data(stacked)\r
      .join('g')\r
      .attr('transform', 'translate(50,20)')\r
      .selectAll('rect')\r
      .data((d) => d.map((v) => ({ ...v, key: d.key })))\r
      .join('rect')\r
      .attr('x', (d) => x(labelKey ? d.data[labelKey] : d.data.label))\r
      .attr('y', (d) => y(d[1]))\r
      .attr('width', x.bandwidth())\r
      .attr('height', (d) => y(d[0]) - y(d[1]))\r
      .attr('fill', (d) => color(d.key))\r
      .attr('rx', 2)\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', 'translate(50,270)')\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Legend\r
    const legend = svg.append('g').attr('transform', 'translate(280,8)')\r
    keys.forEach((key, i) => {\r
      const lg = legend.append('g').attr('transform', \`translate(\${i * 70},0)\`)\r
      lg.append('rect').attr('width', 10).attr('height', 10).attr('rx', 2).attr('fill', color(key))\r
      lg.append('text').attr('x', 15).attr('y', 9).attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(key)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};