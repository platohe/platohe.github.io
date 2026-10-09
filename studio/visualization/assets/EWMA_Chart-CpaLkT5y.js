var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'ewma_chart',\r
  title: 'E W M A_ Chart',\r
  desc: 'E W M A_ Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EWMA_Chart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","e-w-m-a_-chart"],\r
}\r
\r
export default function EWMA_Chart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"value":50.6,"ewma":50.12},{"period":2,"value":51.2,"ewma":50.33},{"period":3,"value":54.9,"ewma":51.25},{"period":4,"value":54.9,"ewma":51.99},{"period":5,"value":52.7,"ewma":52.13},{"period":6,"value":55.1,"ewma":52.74},{"period":7,"value":53.5,"ewma":52.89},{"period":8,"value":55.1,"ewma":53.33},{"period":9,"value":55.6,"ewma":53.77},{"period":10,"value":52,"ewma":53.41},{"period":11,"value":49.2,"ewma":52.57},{"period":12,"value":51.5,"ewma":52.36},{"period":13,"value":49.3,"ewma":51.74},{"period":14,"value":45.4,"ewma":50.47},{"period":15,"value":43.8,"ewma":49.14},{"period":16,"value":45.1,"ewma":48.34},{"period":17,"value":46.1,"ewma":47.9},{"period":18,"value":46,"ewma":47.53},{"period":19,"value":43.2,"ewma":46.65},{"period":20,"value":47.1,"ewma":46.74},{"period":21,"value":50.6,"ewma":47.51},{"period":22,"value":47.4,"ewma":47.49},{"period":23,"value":52.1,"ewma":48.41},{"period":24,"value":50.1,"ewma":48.75},{"period":25,"value":52.6,"ewma":49.51},{"period":26,"value":52.1,"ewma":50.02},{"period":27,"value":53.1,"ewma":50.64},{"period":28,"value":56.6,"ewma":51.82},{"period":29,"value":54.5,"ewma":52.35},{"period":30,"value":54.5,"ewma":52.77},{"period":31,"value":54.1,"ewma":53.04},{"period":32,"value":56.7,"ewma":53.77},{"period":33,"value":53.1,"ewma":53.62},{"period":34,"value":53.6,"ewma":53.61},{"period":35,"value":49.4,"ewma":52.77},{"period":36,"value":49.3,"ewma":52.08},{"period":37,"value":46.3,"ewma":50.93},{"period":38,"value":46.3,"ewma":50.01},{"period":39,"value":49.7,"ewma":49.96},{"period":40,"value":50.8,"ewma":50.12}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const lambda = 0.2\r
    const sigma = 5\r
    const limit = 3\r
\r
    const x = d3.scaleLinear().domain([1, data.length]).range([0, IW])\r
    const y = d3.scaleLinear().domain([d3.min(data, d => d.value) - 5, d3.max(data, d => d.value) + 5]).range([IH, 0])\r
    const target = d3.mean(data, d => d.value) || 50\r
\r
    // Control limits\r
    const ucl = target + limit * sigma * Math.sqrt(lambda / (2 - lambda))\r
    const lcl = target - limit * sigma * Math.sqrt(lambda / (2 - lambda))\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // UCL/LCL\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(ucl)).attr('y2', y(ucl))\r
      .attr('stroke', colors[3]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4')\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(lcl)).attr('y2', y(lcl))\r
      .attr('stroke', colors[3]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4')\r
\r
    // Target\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(target)).attr('y2', y(target))\r
      .attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
\r
    // Values\r
    const line = d3.line().x(d => x(d.period)).y(d => y(d.value)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1).attr('opacity', 0.5)\r
\r
    // EWMA\r
    const ewmaLine = d3.line().x(d => x(d.period)).y(d => y(d.ewma)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', ewmaLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Period')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('EWMA Control Chart (λ=' + lambda + ')')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};