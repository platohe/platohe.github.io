var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
// Normalize any accepted editor shape into wide rows: { time, <group>: number }\r
// Supported inputs: wide rows with a \`time\` field; per-series rows shaped\r
// { key, values: [...] }; long rows shaped { key, time/month, value }.\r
function toWideRows(raw) {\r
  if (!Array.isArray(raw) || raw.length === 0) return null\r
  const first = raw[0]\r
  if (typeof first !== 'object' || first === null) return null\r
  if (first.time !== undefined) return raw\r
  if (Array.isArray(first.values)) {\r
    const n = Math.max(...raw.map(r => (Array.isArray(r.values) ? r.values.length : 0)))\r
    if (n === 0) return null\r
    return d3.range(n).map(i => {\r
      const row = { time: String(i + 1) }\r
      raw.forEach(r => {\r
        const v = Number((r.values || [])[i])\r
        row[String(r.key)] = Number.isFinite(v) ? v : 0\r
      })\r
      return row\r
    })\r
  }\r
  const tKey = first.month !== undefined ? 'month' : (first.time !== undefined ? 'time' : null)\r
  if (first.key !== undefined && tKey && first.value !== undefined) {\r
    const rows = {}\r
    raw.forEach(r => {\r
      const t = String(r[tKey])\r
      if (!rows[t]) rows[t] = { time: t }\r
      const v = Number(r.value)\r
      rows[t][String(r.key)] = Number.isFinite(v) ? v : 0\r
    })\r
    return Object.values(rows)\r
  }\r
  return null\r
}\r
\r
export const meta = {\r
  id: 'stream-graph-transitions',\r
  title: 'Stream Graph Transitions',\r
  desc: 'Stream Graph Transitions — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'StreamGraphTransitions',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-transition"],\r
  tags: ["animation","stream-graph-transitions"],\r
}\r
\r
export default function StreamGraphTransitions({ data: customData }) {\r
  const ref = useRef(null)\r
  const [currentData, setCurrentData] = useState(0)\r
\r
  const customRows = toWideRows(customData)\r
  const datasets = customRows\r
    ? [customRows]\r
    : [\r
    [\r
      { time: 'Jan', GroupA: 30, GroupB: 20, GroupC: 15, GroupD: 25 },\r
      { time: 'Feb', GroupA: 35, GroupB: 25, GroupC: 20, GroupD: 30 },\r
      { time: 'Mar', GroupA: 45, GroupB: 30, GroupC: 25, GroupD: 35 },\r
      { time: 'Apr', GroupA: 40, GroupB: 35, GroupC: 30, GroupD: 40 },\r
      { time: 'May', GroupA: 55, GroupB: 40, GroupC: 35, GroupD: 45 },\r
    ],\r
    [\r
      { time: 'Jan', GroupA: 25, GroupB: 35, GroupC: 30, GroupD: 20 },\r
      { time: 'Feb', GroupA: 30, GroupB: 40, GroupC: 35, GroupD: 25 },\r
      { time: 'Mar', GroupA: 35, GroupB: 45, GroupC: 40, GroupD: 30 },\r
      { time: 'Apr', GroupA: 30, GroupB: 50, GroupC: 45, GroupD: 35 },\r
      { time: 'May', GroupA: 45, GroupB: 55, GroupC: 50, GroupD: 40 },\r
    ],\r
    [\r
      { time: 'Jan', GroupA: 40, GroupB: 25, GroupC: 20, GroupD: 35 },\r
      { time: 'Feb', GroupA: 45, GroupB: 30, GroupC: 25, GroupD: 40 },\r
      { time: 'Mar', GroupA: 55, GroupB: 35, GroupC: 30, GroupD: 45 },\r
      { time: 'Apr', GroupA: 50, GroupB: 40, GroupC: 35, GroupD: 50 },\r
      { time: 'May', GroupA: 65, GroupB: 45, GroupC: 40, GroupD: 55 },\r
    ],\r
  ]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = datasets[currentData]\r
    // Derive group keys and time key from data shape\r
    const timeKey = data[0] && data[0].time !== undefined ? 'time' : null\r
    const groups = timeKey\r
      ? Object.keys(data[0]).filter(k => k !== timeKey && typeof data[0][k] === 'number')\r
      : []\r
    if (groups.length === 0 || data.length === 0) return\r
    const colorScale = d3.scaleOrdinal(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#ec4899']).domain(groups)\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scalePoint()\r
      .domain(data.map(d => String(d[timeKey])))\r
      .range([0, width])\r
\r
    const stack = d3.stack()\r
      .keys(groups)\r
      .offset(d3.stackOffsetWiggle)\r
\r
    const stackedData = stack(data)\r
\r
    // Wiggle offset centers the stream around zero — domain must span the\r
    // full stacked extent or half the stream is clipped below the axis.\r
    const yExtent = [\r
      d3.min(stackedData, s => d3.min(s, d => d[0])),\r
      d3.max(stackedData, s => d3.max(s, d => d[1])),\r
    ]\r
    const y = d3.scaleLinear().domain(yExtent).range([height, 0])\r
\r
    const area = d3.area()\r
      .x(d => x(String(d.data[timeKey])))\r
      .y0(d => y(d[0]))\r
      .y1(d => y(d[1]))\r
      .curve(d3.curveBasis)\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    stackedData.forEach((layer, i) => {\r
      g.append('path')\r
        .datum(layer)\r
        .attr('d', area)\r
        .attr('fill', colorScale(groups[i]))\r
        .attr('opacity', 0)\r
        .attr('transform', 'translate(0,12)')\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 1)\r
        .attr('cursor', 'pointer')\r
        .transition().duration(700).delay(i * 90).ease(d3.easeCubicOut)\r
        .attr('opacity', 0.8)\r
        .attr('transform', 'translate(0,0)')\r
        .on('end', function () {\r
          d3.select(this)\r
            .on('mouseover', function () {\r
              d3.select(this).transition().duration(200).attr('opacity', 1)\r
            })\r
            .on('mouseout', function () {\r
              d3.select(this).transition().duration(200).attr('opacity', 0.8)\r
            })\r
        })\r
    })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Legend\r
    const legend = svg.append('g')\r
      .attr('transform', 'translate(280, 30)')\r
\r
    groups.forEach((group, i) => {\r
      const legendItem = legend.append('g')\r
        .attr('transform', \`translate(0, \${i * 20})\`)\r
\r
      legendItem.append('rect')\r
        .attr('width', 16)\r
        .attr('height', 16)\r
        .attr('fill', colorScale(group))\r
        .attr('rx', 2)\r
\r
      legendItem.append('text')\r
        .attr('x', 22)\r
        .attr('y', 12)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(group)\r
    })\r
\r
    // Update button\r
    const button = svg.append('g')\r
      .attr('transform', 'translate(20, 270)')\r
      .attr('cursor', 'pointer')\r
      .on('click', () => {\r
        setCurrentData((prev) => (prev + 1) % datasets.length)\r
      })\r
\r
    button.append('rect')\r
      .attr('width', 100)\r
      .attr('height', 24)\r
      .attr('rx', 4)\r
      .attr('fill', '#6366f1')\r
\r
    button.append('text')\r
      .attr('x', 50)\r
      .attr('y', 16)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 600)\r
      .text('Next Data')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Streamgraph with Transitions')\r
\r
  }, [currentData, customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};