var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'mirrored-beeswarm',\r
  title: 'Mirrored Beeswarm',\r
  desc: 'Mirrored Beeswarm — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MirroredBeeswarm',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","mirrored-beeswarm"],\r
}\r
\r
export default function MirroredBeeswarm({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.MirroredBeeswarm || [\r
      {"value": 22, "group": "A"}, {"value": 25, "group": "A"}, {"value": 28, "group": "A"},\r
      {"value": 31, "group": "A"}, {"value": 33, "group": "A"},\r
      {"value": 18, "group": "B"}, {"value": 21, "group": "B"}, {"value": 24, "group": "B"},\r
      {"value": 27, "group": "B"}, {"value": 30, "group": "B"},\r
    ]\r
    const width = 600\r
    const height = 400\r
    const margin = { top: 40, right: 20, bottom: 40, left: 20 }\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(chartData, d => d.value)).nice()\r
      .range([margin.left, width - margin.right])\r
\r
    // Axes\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${height / 2})\`)\r
      .call(d3.axisBottom(x).ticks(8))\r
      .attr('color', '#94a3b8')\r
\r
    // Center line\r
    svg.append('line')\r
      .attr('x1', margin.left)\r
      .attr('x2', width - margin.right)\r
      .attr('y1', height / 2)\r
      .attr('y2', height / 2)\r
      .attr('stroke', '#64748b')\r
\r
    const r = 5\r
    const groupA = chartData.filter(d => d.group === 'A')\r
    const groupB = chartData.filter(d => d.group === 'B')\r
\r
    // Place dots with simple beeswarm force\r
    const simA = d3.forceSimulation(groupA)\r
      .force('x', d3.forceX(d => x(d.value)).strength(1))\r
      .force('y', d3.forceY(height / 2 - 30).strength(0.1))\r
      .force('collide', d3.forceCollide(r + 2).strength(0.5))\r
      .stop()\r
\r
    const simB = d3.forceSimulation(groupB)\r
      .force('x', d3.forceX(d => x(d.value)).strength(1))\r
      .force('y', d3.forceY(height / 2 + 30).strength(0.1))\r
      .force('collide', d3.forceCollide(r + 2).strength(0.5))\r
      .stop()\r
\r
    for (let i = 0; i < 120; i++) { simA.tick(); simB.tick() }\r
\r
    // Top group (A)\r
    svg.append('g')\r
      .selectAll('circle')\r
      .data(groupA)\r
      .join('circle')\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => Math.min(d.y, height / 2 - 5))\r
        .attr('r', r)\r
        .attr('fill', '#6366f1')\r
        .attr('fill-opacity', 0.8)\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1)\r
\r
    // Bottom group (B)\r
    svg.append('g')\r
      .selectAll('circle')\r
      .data(groupB)\r
      .join('circle')\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => Math.max(d.y, height / 2 + 5))\r
        .attr('r', r)\r
        .attr('fill', '#ec4899')\r
        .attr('fill-opacity', 0.8)\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1)\r
\r
    svg.append('text').attr('x', width / 2).attr('y', margin.top - 10).attr('text-anchor', 'middle').attr('fill', '#6366f1').text('Group A')\r
    svg.append('text').attr('x', width / 2).attr('y', height - 5).attr('text-anchor', 'middle').attr('fill', '#ec4899').text('Group B')\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};