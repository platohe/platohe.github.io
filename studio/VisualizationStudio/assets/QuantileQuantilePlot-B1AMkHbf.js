var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'quantile-quantile-plot',\r
  title: 'Quantile Quantile Plot',\r
  desc: 'Quantile Quantile Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'QuantileQuantilePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","quantile-quantile-plot"],\r
}\r
\r
export default function QuantileQuantilePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Q-Q plot data\r
    const DEFAULT_DATA = [{"observed":-0.956,"expected":-0.273},{"observed":-1.842,"expected":-1.141},{"observed":-0.529,"expected":1.229},{"observed":-0.269,"expected":-1.802},{"observed":-0.666,"expected":-3.279},{"observed":0.565,"expected":1.003},{"observed":1.504,"expected":0.384},{"observed":1.11,"expected":1.03},{"observed":0.434,"expected":-1.436},{"observed":2.431,"expected":-0.889},{"observed":-1.022,"expected":-0.585},{"observed":0.491,"expected":0.33},{"observed":-0.423,"expected":-1.222},{"observed":-0.307,"expected":0.329},{"observed":-0.309,"expected":0.224},{"observed":2.087,"expected":-1.419},{"observed":0.8,"expected":-0.429},{"observed":-0.065,"expected":0.357},{"observed":0.499,"expected":2.056},{"observed":0.927,"expected":-1.138},{"observed":-1.213,"expected":-0.194},{"observed":-1.485,"expected":-0.198},{"observed":0.085,"expected":-1.244},{"observed":1.257,"expected":-0.329},{"observed":0.574,"expected":-2.15},{"observed":0.429,"expected":0.102},{"observed":-0.258,"expected":-1.479},{"observed":-1.073,"expected":0.395},{"observed":0.73,"expected":0.394},{"observed":0.927,"expected":-0.37},{"observed":-0.241,"expected":0.677},{"observed":0.112,"expected":-1.002},{"observed":1.759,"expected":-0.216},{"observed":-0.25,"expected":1.451},{"observed":1.736,"expected":1.054},{"observed":0.908,"expected":-0.284},{"observed":-1.249,"expected":-0.516},{"observed":-0.699,"expected":-0.219},{"observed":-0.909,"expected":-0.931},{"observed":-0.776,"expected":-0.667},{"observed":0.163,"expected":-0.639},{"observed":1.077,"expected":1.469},{"observed":0.275,"expected":-0.881},{"observed":0.703,"expected":-0.6},{"observed":1.303,"expected":0.61},{"observed":-0.449,"expected":-1.439},{"observed":0.169,"expected":-1.317},{"observed":-0.177,"expected":0.304},{"observed":0.727,"expected":1.122},{"observed":-0.519,"expected":0.738},{"observed":-0.432,"expected":0.36},{"observed":-0.6,"expected":0.916},{"observed":-0.512,"expected":-0.252},{"observed":0.835,"expected":-1.291},{"observed":2.404,"expected":-0.138},{"observed":0.218,"expected":-0.326},{"observed":-0.284,"expected":1.898},{"observed":-1.465,"expected":-0.223},{"observed":0.147,"expected":-0.906},{"observed":-1.076,"expected":-1.19},{"observed":-0.644,"expected":0.921},{"observed":-0.128,"expected":-1.075},{"observed":-0.861,"expected":2.001},{"observed":1.831,"expected":1.589},{"observed":-1.298,"expected":0.937},{"observed":-1.647,"expected":-0.502},{"observed":0.887,"expected":0},{"observed":0.261,"expected":0.37},{"observed":0.502,"expected":1.861},{"observed":-0.19,"expected":-0.437},{"observed":1.064,"expected":-2.2},{"observed":-0.314,"expected":-0.588},{"observed":1.672,"expected":-0.032},{"observed":0.731,"expected":-0.145},{"observed":0.391,"expected":-1.525},{"observed":-0.721,"expected":-0.816},{"observed":1.076,"expected":0.018},{"observed":-1.039,"expected":0.593},{"observed":0.992,"expected":1.104},{"observed":-0.71,"expected":0.582},{"observed":0.662,"expected":0.501},{"observed":1.534,"expected":-0.186},{"observed":0.128,"expected":-0.171},{"observed":1.048,"expected":-0.435},{"observed":1.101,"expected":0.922},{"observed":-0.78,"expected":-0.953},{"observed":-0.81,"expected":1.24},{"observed":1.562,"expected":0.66},{"observed":-0.242,"expected":2.175},{"observed":-0.5,"expected":1.001},{"observed":0.814,"expected":-0.274},{"observed":-1.497,"expected":-1.677},{"observed":-0.102,"expected":-0.804},{"observed":-1.003,"expected":0.42},{"observed":0.753,"expected":1.933},{"observed":-1.406,"expected":0.212},{"observed":-0.121,"expected":-0.321},{"observed":0.911,"expected":0.236},{"observed":0.395,"expected":-0.695},{"observed":1.728,"expected":-0.653}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(data, d => d.expected))\r
      .range([0, width])\r
\r
    const y = d3.scaleLinear()\r
      .domain(d3.extent(data, d => d.observed))\r
      .range([height, 0])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Reference line (perfect normal distribution)\r
    g.append('line')\r
      .attr('x1', 0)\r
      .attr('y1', height)\r
      .attr('x2', width)\r
      .attr('y2', 0)\r
      .attr('stroke', '#9ca3af')\r
      .attr('stroke-width', 2)\r
      .attr('stroke-dasharray', '5,5')\r
\r
    // Confidence interval (95%)\r
    const sortedObserved = [...data].sort((a, b) => a.observed - b.observed)\r
    const sortedExpected = [...data].sort((a, b) => a.expected - b.expected)\r
    \r
    const ciPoints = sortedExpected.map((d, i) => ({\r
      x: x(d.expected),\r
      y: y(sortedObserved[i].observed)\r
    }))\r
\r
    const ci = d3.line()\r
      .x(d => d.x)\r
      .y(d => d.y)\r
      .curve(d3.curveMonotoneX)\r
\r
    g.append('path')\r
      .datum(ciPoints)\r
      .attr('d', ci)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#10b981')\r
      .attr('stroke-width', 2)\r
      .attr('opacity', 0.5)\r
\r
    // Data points\r
    g.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.expected))\r
      .attr('cy', d => y(d.observed))\r
      .attr('r', 3)\r
      .attr('fill', '#6366f1')\r
      .attr('opacity', 0.6)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 6)\r
          .attr('opacity', 1)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 3)\r
          .attr('opacity', 0.6)\r
      })\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Axis labels\r
    g.append('text')\r
      .attr('x', width / 2)\r
      .attr('y', height + 35)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text('Expected Quantiles')\r
\r
    g.append('text')\r
      .attr('x', -10)\r
      .attr('y', height / 2)\r
      .attr('text-anchor', 'middle')\r
      .attr('transform', 'rotate(-90, -10, ' + height / 2 + ')')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text('Observed Quantiles')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Normal Q-Q Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};