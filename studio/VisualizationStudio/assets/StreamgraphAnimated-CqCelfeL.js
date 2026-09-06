var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'streamgraph-animated',\r
  title: 'Streamgraph Animated',\r
  desc: 'Streamgraph Animated — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'StreamgraphAnimated',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-transition"],\r
  tags: ["animation","streamgraph-animated"],\r
}\r
\r
export default function StreamgraphAnimated({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [\r
    { time: 0, web: 36.011, mobile: 33.586, desktop: 19.262 },\r
    { time: 1, web: 41.13, mobile: 30.609, desktop: 19.222 },\r
    { time: 2, web: 41.202, mobile: 31.965, desktop: 22.443 },\r
    { time: 3, web: 46.473, mobile: 25.623, desktop: 23.927 },\r
    { time: 4, web: 51.438, mobile: 22.164, desktop: 21.725 },\r
    { time: 5, web: 49.97, mobile: 21.331, desktop: 24.785 },\r
    { time: 6, web: 44.646, mobile: 16.392, desktop: 26.643 },\r
    { time: 7, web: 43.46, mobile: 15.316, desktop: 23.041 },\r
    { time: 8, web: 42.802, mobile: 10.511, desktop: 23.925 },\r
    { time: 9, web: 44.246, mobile: 15.275, desktop: 22.926 },\r
    { time: 10, web: 33.847, mobile: 20.205, desktop: 24.713 },\r
    { time: 11, web: 35.724, mobile: 19.482, desktop: 23.717 },\r
    { time: 12, web: 23.737, mobile: 21.286, desktop: 23.187 },\r
    { time: 13, web: 25.651, mobile: 26.647, desktop: 22.352 },\r
    { time: 14, web: 19.021, mobile: 30.185, desktop: 21.373 },\r
    { time: 15, web: 23.924, mobile: 33.666, desktop: 17.15 },\r
    { time: 16, web: 17.9, mobile: 32.276, desktop: 14.906 },\r
    { time: 17, web: 22.711, mobile: 34.14, desktop: 16.421 },\r
    { time: 18, web: 27.687, mobile: 26.787, desktop: 16.179 },\r
    { time: 19, web: 26.051, mobile: 30.051, desktop: 10.792 },\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 20, bottom: 30, left: 30 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const timeKey = data[0] && data[0].time !== undefined ? 'time' : null\r
    const x = d3.scaleLinear()\r
      .domain(timeKey ? d3.extent(data, d => d[timeKey]) : [0, data.length - 1])\r
      .range([0, w])\r
    const keys = Object.keys(data[0]).filter(k => k !== timeKey && typeof data[0][k] === 'number')\r
    const yMax = d3.max(data, d => d3.sum(keys, k => d[k])) * 1.1\r
    const y = d3.scaleLinear().domain([0, yMax]).range([h, 0])\r
    const color = d3.scaleOrdinal(colors)\r
\r
    const stack = d3.stack().keys(keys).offset(d3.stackOffsetWiggle)\r
    const stacked = stack(data)\r
\r
    const area = d3.area()\r
      .x((d, i) => x(timeKey ? d.data[timeKey] : i))\r
      .y0(d => y(d[0]))\r
      .y1(d => y(d[1]))\r
      .curve(d3.curveBasis)\r
\r
    const clipId = 'sg-clip-' + Math.random().toString(36).slice(2, 7)\r
    const defs = svg.append('defs')\r
    const clipRect = defs.append('clipPath').attr('id', clipId)\r
      .append('rect').attr('x', 0).attr('y', 0).attr('width', 0).attr('height', h)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const paths = g.selectAll('path').data(stacked).join('path')\r
      .attr('clip-path', \`url(#\${clipId})\`)\r
      .attr('d', area)\r
      .attr('fill', (d, i) => color(i))\r
      .attr('opacity', 0.8)\r
\r
    // Animate reveal\r
    clipRect\r
      .attr('width', 0)\r
      .transition().duration(2000).ease(d3.easeCubicInOut)\r
      .attr('width', w)\r
\r
    // Axes (fade in after reveal)\r
    const xAxis = g.append('g').attr('transform', \`translate(0,\${h})\`).attr('opacity', 0)\r
    xAxis.call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    xAxis.transition().delay(1800).duration(400).attr('opacity', 1)\r
\r
    const title = svg.append('text')\r
      .attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', 600)\r
      .attr('opacity', 0)\r
      .text('Streamgraph (Wiggle Offset)')\r
    title.transition().delay(1800).duration(400).attr('opacity', 1)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};