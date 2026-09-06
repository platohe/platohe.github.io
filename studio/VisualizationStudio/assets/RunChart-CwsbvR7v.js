var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'run-chart',\r
  title: 'Run Chart',\r
  desc: 'Run Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RunChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","run-chart"],\r
}\r
\r
export default function RunChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":"Wk1","value":50.809},{"period":"Wk2","value":53.481},{"period":"Wk3","value":59.993},{"period":"Wk4","value":60.678},{"period":"Wk5","value":57.394},{"period":"Wk6","value":59.306},{"period":"Wk7","value":54.94},{"period":"Wk8","value":54.348},{"period":"Wk9","value":52.34},{"period":"Wk10","value":45.353},{"period":"Wk11","value":40.431},{"period":"Wk12","value":43.54},{"period":"Wk13","value":42.004},{"period":"Wk14","value":39.621},{"period":"Wk15","value":41.265},{"period":"Wk16","value":47.212},{"period":"Wk17","value":52.658},{"period":"Wk18","value":55.826},{"period":"Wk19","value":53.967},{"period":"Wk20","value":59.445},{"period":"Wk21","value":62.592},{"period":"Wk22","value":54.956},{"period":"Wk23","value":56.588},{"period":"Wk24","value":48.481},{"period":"Wk25","value":46.392},{"period":"Wk26","value":41.054},{"period":"Wk27","value":39.207},{"period":"Wk28","value":42.459},{"period":"Wk29","value":40.451},{"period":"Wk30","value":37.989}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const x = d3.scaleBand().domain(data.map(d => d.period)).range([0, IW]).padding(0.2)\r
    const y = d3.scaleLinear().domain([d3.min(data, d => d.value) - 5, d3.max(data, d => d.value) + 5]).range([IH, 0])\r
    const mean = d3.mean(data, d => d.value)\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Mean line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(mean)).attr('y2', y(mean))\r
      .attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
\r
    // Control limits (±2σ)\r
    const sigma = d3.deviation(data, d => d.value) || 5\r
    [mean + 2 * sigma, mean - 2 * sigma].forEach((limit, i) => {\r
      if (limit >= 0 && limit <= y.domain()[0]) {\r
        svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('x1', 0).attr('x2', IW).attr('y1', y(limit)).attr('y2', y(limit))\r
          .attr('stroke', colors[i]).attr('stroke-width', 1).attr('stroke-dasharray', '3,3').attr('opacity', 0.6)\r
      }\r
    })\r
\r
    // Line\r
    const line = d3.line().x(d => x(d.period) + x.bandwidth() / 2).y(d => y(d.value)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.period) + x.bandwidth() / 2)\r
      .attr('cy', d => y(d.value))\r
      .attr('r', 4)\r
      .attr('fill', d => Math.abs(d.value - mean) > 2 * sigma ? colors[3] : colors[0])\r
      .attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Western Electric rule annotations\r
    const runAbove = data.filter(d => d.value > mean)\r
    if (runAbove.length >= 7) {\r
      svg.append('text').attr('x', IW - 8).attr('y', M.top + 12)\r
        .attr('text-anchor', 'end').attr('fill', colors[3]).attr('font-size', '9px')\r
        .text('⚠ Run > 7')\r
    }\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(6))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').attr('transform', 'rotate(-30)').attr('text-anchor', 'end'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Period')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Run Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};