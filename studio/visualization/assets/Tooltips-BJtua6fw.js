var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'tooltips',\r
  title: 'Tooltips',\r
  desc: 'Tooltips — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Tooltips',\r
  complexity: 'beginner',\r
  interactivity: ["hover"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tooltips"],\r
}\r
\r
export default function Tooltips({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"name":"Metric 1","value":45,"info":"First dataset entry"},{"name":"Metric 2","value":80,"info":"Second dataset entry"},{"name":"Metric 3","value":65,"info":"Third dataset entry"}]\r
\r
    const rawData = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const data = rawData.map((d, i) => ({\r
      x: d.x !== undefined ? d.x : i * 5,\r
      y: d.y !== undefined ? d.y : (d.value !== undefined ? d.value : 50),\r
      label: d.name || d.label || \`Point \${i+1}\`\r
    }))\r
\r
    // Derive x domain from data so points stay on-screen\r
    const xMax = d3.max(data, d => d.x) || 15\r
    const x = d3.scaleLinear().domain([0, xMax * 1.1]).range([0, 310])\r
    const yMax = d3.max(data, d => d.y) || 100\r
    const y = d3.scaleLinear().domain([0, yMax * 1.1]).range([230, 0])\r
\r
    const g = svg.append('g').attr('transform', 'translate(50,20)')\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((group) => group.select('.domain').remove())\r
      .call((group) => group.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((group) => group.selectAll('text').remove())\r
      .lower()\r
\r
    const line = d3.line().x((d) => x(d.x)).y((d) => y(d.y)).curve(d3.curveCatmullRom.alpha(0.5))\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2.5)\r
\r
    data.forEach((d) => {\r
      const dot = g.append('circle')\r
        .attr('cx', x(d.x))\r
        .attr('cy', y(d.y))\r
        .attr('r', 6)\r
        .attr('fill', '#6366f1')\r
        .attr('stroke', 'var(--bg)')\r
        .attr('stroke-width', 2)\r
        .style('cursor', 'pointer')\r
\r
      const tooltip = g.append('g')\r
        .attr('class', 'tooltip')\r
        .attr('opacity', 0)\r
        .style('pointer-events', 'none')\r
\r
      tooltip.append('rect')\r
        .attr('x', -40).attr('y', -32).attr('width', 80).attr('height', 24)\r
        .attr('fill', 'var(--bg)').attr('stroke', 'var(--border)').attr('rx', 4)\r
\r
      tooltip.append('text')\r
        .attr('x', 0).attr('y', -20)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 600)\r
        .text(\`\${d.label}: \${d.y.toFixed(0)}\`)\r
\r
      dot.on('mouseover', function () {\r
        d3.select(this).transition().duration(100).attr('r', 9)\r
        tooltip.attr('opacity', 1).attr('transform', \`translate(\${x(d.x)},\${y(d.y)})\`)\r
      }).on('mouseout', function () {\r
        d3.select(this).transition().duration(100).attr('r', 6)\r
        tooltip.attr('opacity', 0)\r
      })\r
    })\r
\r
    g.append('g')\r
      .attr('transform', 'translate(0,230)')\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((group) => group.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((group) => group.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((group) => group.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((group) => group.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};