var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'diverging-stacked-bar',\r
  title: 'Diverging Stacked Bar',\r
  desc: 'Diverging Stacked Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DivergingStackedBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","diverging-stacked-bar"],\r
}\r
\r
export default function DivergingStackedBar({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.DivergingStackedBar\r
    const width = 600\r
    const height = 380\r
    const margin = { top: 30, right: 30, bottom: 30, left: 100 }\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const categories = chartData.map(d => d.question)\r
\r
    const y = d3.scaleBand()\r
      .domain(categories)\r
      .range([margin.top, height - margin.bottom])\r
      .padding(0.25)\r
\r
    const x = d3.scaleLinear()\r
      .domain([-100, 100])\r
      .range([margin.left, width - margin.right])\r
\r
    // Center zero axis\r
    svg.append('line')\r
      .attr('x1', x(0))\r
      .attr('y1', margin.top)\r
      .attr('x2', x(0))\r
      .attr('y2', height - margin.bottom)\r
      .attr('stroke', '#64748b')\r
      .attr('stroke-dasharray', '4,4')\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${height - margin.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickFormat(d => \`\${Math.abs(d)}%\`))\r
      .attr('color', '#94a3b8')\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},0)\`)\r
      .call(d3.axisLeft(y))\r
      .attr('color', '#94a3b8')\r
\r
    // Render negative (left) & positive (right) bars\r
    const barsGroup = svg.append('g')\r
\r
    chartData.forEach(d => {\r
      const py = y(d.question)\r
      const bh = y.bandwidth()\r
\r
      // Disagree (negative)\r
      const wNeg = x(0) - x(-d.disagree)\r
      barsGroup.append('rect')\r
        .attr('x', x(-d.disagree))\r
        .attr('y', py)\r
        .attr('width', wNeg)\r
        .attr('height', bh)\r
        .attr('fill', '#ef4444')\r
        .attr('rx', 2)\r
\r
      // Agree (positive)\r
      const wPos = x(d.agree) - x(0)\r
      barsGroup.append('rect')\r
        .attr('x', x(0))\r
        .attr('y', py)\r
        .attr('width', wPos)\r
        .attr('height', bh)\r
        .attr('fill', '#10b981')\r
        .attr('rx', 2)\r
    })\r
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