var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'stacked-to-grouped',\r
  title: 'Stacked To Grouped',\r
  desc: 'Stacked To Grouped — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'StackedToGrouped',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","stacked-to-grouped"],\r
}\r
\r
export default function StackedToGrouped({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(svgRef.current)\r
    const chartData = data || defaultDataMap.StackedToGrouped\r
    const width = W\r
    const height = H\r
    const margin = { top: 30, right: 30, bottom: 50, left: 40 }\r
\r
    const timeKey = chartData[0] && chartData[0].label !== undefined ? 'label' : 'category'\r
    const keys = Object.keys(chartData[0]).filter(k => k !== timeKey && typeof chartData[0][k] === 'number')\r
\r
    svg.attr('viewBox', [0, 0, width, height]).style('font', '11px sans-serif').selectAll('*').remove()\r
\r
    const stack = d3.stack().keys(keys)\r
    const color = d3.scaleOrdinal().domain(keys).range(colors.slice(0, keys.length))\r
\r
    const x0 = d3.scaleBand()\r
      .domain(chartData.map(d => d[timeKey]))\r
      .range([margin.left, width - margin.right])\r
      .padding(0.15)\r
\r
    const x1 = d3.scaleBand()\r
      .domain(keys).range([0, x0.bandwidth()]).padding(0.05)\r
\r
    const yMax = d3.max(chartData, d => d3.sum(keys, k => d[k])) || 100\r
    const y = d3.scaleLinear().domain([0, yMax]).nice().range([height - margin.bottom, margin.top])\r
\r
    svg.append('g').attr('transform', \`translate(0,\${height - margin.bottom})\`)\r
      .call(d3.axisBottom(x0)).attr('color', '#94a3b8')\r
    svg.append('g').attr('transform', \`translate(\${margin.left},0)\`)\r
      .call(d3.axisLeft(y)).attr('color', '#94a3b8')\r
\r
    const label = svg.append('text')\r
      .attr('x', width / 2).attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
      .text('Stacked → auto-animated')\r
\r
    const groups = svg.append('g')\r
      .selectAll('g').data(stack(chartData)).join('g').attr('fill', d => color(d.key))\r
\r
    // Stacked rects\r
    groups.each(function(series) {\r
      d3.select(this).selectAll('rect')\r
        .data(series)\r
        .join('rect')\r
          .attr('x', d => x0(d.data[timeKey]))\r
          .attr('y', d => y(d[1]))\r
          .attr('height', d => Math.max(0, y(d[0]) - y(d[1])))\r
          .attr('width', x0.bandwidth())\r
          .attr('rx', 2)\r
    })\r
\r
    // Auto-cycle between stacked and grouped every 2s\r
    let stacked = true\r
    const cycle = () => {\r
      stacked = !stacked\r
      label.text(stacked ? 'Stacked → auto-animated' : 'Grouped → auto-animated')\r
\r
      groups.each(function(series, si) {\r
        const sel = d3.select(this).selectAll('rect').data(series)\r
        sel.join('rect')\r
          .attr('x', stacked ? d => x0(d.data[timeKey]) : d => x0(d.data[timeKey]) + x1(keys[si]))\r
          .attr('y', stacked ? d => y(d[1]) : d => y(d[1] - d[0]))\r
          .attr('height', stacked ? d => Math.max(0, y(d[0]) - y(d[1])) : d => Math.max(0, y(0) - y(d[1] - d[0])))\r
          .attr('width', stacked ? x0.bandwidth() : x1.bandwidth())\r
          .attr('rx', 2)\r
          .transition().duration(700).ease(d3.easeCubicInOut)\r
          .attr('x', stacked ? d => x0(d.data[timeKey]) : d => x0(d.data[timeKey]) + x1(keys[si]))\r
          .attr('y', stacked ? d => y(d[1]) : d => y(d[1] - d[0]))\r
          .attr('height', stacked ? d => Math.max(0, y(d[0]) - y(d[1])) : d => Math.max(0, y(0) - y(d[1] - d[0])))\r
          .attr('width', stacked ? x0.bandwidth() : x1.bandwidth())\r
      })\r
    }\r
\r
    const interval = setInterval(cycle, 2200)\r
    return () => clearInterval(interval)\r
  }, [data])\r
\r
  return <svg ref={svgRef} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};