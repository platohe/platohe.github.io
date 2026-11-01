var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-chart-transitions',\r
  title: 'Bar Chart Transitions',\r
  desc: 'Bar Chart Transitions — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'BarChartTransitions',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape","d3-transition"],\r
  tags: ["animation","bar-chart-transitions"],\r
}\r
\r
export default function BarChartTransitions({ data: customData }) {\r
  const ref = useRef(null)\r
  const [data, setData] = useState(\r
    Array.isArray(customData) && customData.length > 0\r
      ? customData\r
      : [\r
          { label: 'Apples', value: 120 },\r
          { label: 'Bananas', value: 80 },\r
          { label: 'Cherries', value: 150 },\r
          { label: 'Dates', value: 60 },\r
          { label: 'Elderberries', value: 90 },\r
          { label: 'Figs', value: 110 },\r
          { label: 'Grapes', value: 130 },\r
        ],\r
  )\r
\r
  const datasets = [\r
    [\r
      { label: 'Apples', value: 120 },\r
      { label: 'Bananas', value: 80 },\r
      { label: 'Cherries', value: 150 },\r
      { label: 'Dates', value: 60 },\r
      { label: 'Elderberries', value: 90 },\r
      { label: 'Figs', value: 110 },\r
      { label: 'Grapes', value: 130 },\r
    ],\r
    [\r
      { label: 'Apples', value: 180 },\r
      { label: 'Bananas', value: 60 },\r
      { label: 'Cherries', value: 100 },\r
      { label: 'Dates', value: 140 },\r
      { label: 'Elderberries', value: 70 },\r
      { label: 'Figs', value: 90 },\r
      { label: 'Grapes', value: 160 },\r
    ],\r
    [\r
      { label: 'Apples', value: 90 },\r
      { label: 'Bananas', value: 130 },\r
      { label: 'Cherries', value: 80 },\r
      { label: 'Dates', value: 110 },\r
      { label: 'Elderberries', value: 140 },\r
      { label: 'Figs', value: 70 },\r
      { label: 'Grapes', value: 100 },\r
    ],\r
    [\r
      { label: 'Apples', value: 150 },\r
      { label: 'Bananas', value: 100 },\r
      { label: 'Cherries', value: 130 },\r
      { label: 'Dates', value: 80 },\r
      { label: 'Elderberries', value: 120 },\r
      { label: 'Figs', value: 90 },\r
      { label: 'Grapes', value: 110 },\r
    ],\r
  ]\r
\r
  const [currentIndex, setCurrentIndex] = useState(0)\r
\r
  const xFor = (rows) => d3.scaleBand()\r
    .domain(rows.map((d) => d.label))\r
    .range([0, IW])\r
    .padding(0.3)\r
\r
  const yFor = (rows) => d3.scaleLinear()\r
    .domain([0, (d3.max(rows, (d) => d.value) || 100) * 1.1])\r
    .range([IH, 0])\r
\r
  // Initial mount: build classed layers so the update pass can target the\r
  // bars reliably (positional selection used to hit the lowered grid layer,\r
  // whose empty rect selection silently skipped every transition).\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const x = xFor(data)\r
    const y = yFor(data)\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('class', 'bt-grid')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Bars grow in on mount to make the transition behavior obvious.\r
    svg.append('g')\r
      .attr('class', 'bt-bars')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('rect')\r
      .data(data)\r
      .join('rect')\r
      .attr('x', (d) => x(d.label))\r
      .attr('width', x.bandwidth())\r
      .attr('fill', (d, i) => colors[i % colors.length])\r
      .attr('rx', 3)\r
      .attr('y', IH)\r
      .attr('height', 0)\r
      .transition()\r
      .duration(750)\r
      .ease(d3.easeCubicOut)\r
      .attr('y', (d) => y(d.value))\r
      .attr('height', (d) => IH - y(d.value))\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('class', 'bt-x')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('class', 'bt-y')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Update button\r
    const button = svg.append('g')\r
      .attr('transform', 'translate(20, 270)')\r
      .attr('cursor', 'pointer')\r
      .on('click', () => {\r
        const nextIndex = (currentIndex + 1) % datasets.length\r
        setCurrentIndex(nextIndex)\r
        setData(datasets[nextIndex])\r
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
      .text('Update Data')\r
\r
  }, [])\r
\r
  // Data updates tween bars + y axis between datasets.\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    if (svg.select('g.bt-bars').empty()) return\r
\r
    const x = xFor(data)\r
    const y = yFor(data)\r
\r
    svg.select('g.bt-y')\r
      .transition()\r
      .duration(750)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.select('g.bt-x')\r
      .transition()\r
      .duration(750)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.select('g.bt-bars')\r
      .selectAll('rect')\r
      .data(data, (d) => d.label)\r
      .join(\r
        (enter) => enter.append('rect')\r
          .attr('x', (d) => x(d.label))\r
          .attr('width', x.bandwidth())\r
          .attr('fill', (d, i) => colors[i % colors.length])\r
          .attr('rx', 3)\r
          .attr('y', IH)\r
          .attr('height', 0),\r
        (update) => update,\r
        (exit) => exit.transition().duration(400).attr('y', IH).attr('height', 0).remove(),\r
      )\r
      .transition()\r
      .duration(750)\r
      .ease(d3.easeCubicInOut)\r
      .attr('x', (d) => x(d.label))\r
      .attr('width', x.bandwidth())\r
      .attr('y', (d) => y(d.value))\r
      .attr('height', (d) => IH - y(d.value))\r
\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};