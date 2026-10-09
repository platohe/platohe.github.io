var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'pareto-effects',\r
  title: 'Pareto Effects',\r
  desc: 'Pareto Effects — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ParetoEffects',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","pareto-effects"],\r
}\r
\r
export default function ParetoEffects({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"factor":"Temp","effect":18.5},{"factor":"Pressure","effect":12.3},{"factor":"Catalyst","effect":8.7},{"factor":"Time","effect":5.2},{"factor":"pH","effect":3.1},{"factor":"Agitation","effect":1.8},{"factor":"Concentration","effect":0.9}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.effect !== undefined) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => Math.abs(b.effect) - Math.abs(a.effect))\r
    const n = sorted.length\r
    const maxAbs = d3.max(sorted, d => Math.abs(d.effect)) || 1\r
    const threshold = maxAbs * 0.3 // significance threshold\r
\r
    const y = d3.scaleBand().domain(sorted.map(d => d.factor)).range([0, IH]).padding(0.3)\r
    const x = d3.scaleLinear().domain([-maxAbs * 1.1, maxAbs * 1.1]).range([0, IW])\r
    const barH = y.bandwidth()\r
    const zeroX = x(0)\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Threshold line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(threshold)).attr('x2', x(threshold)).attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', colors[3]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4')\r
    svg.append('text').attr('x', x(threshold) + 4).attr('y', M.top + 10)\r
      .attr('fill', colors[3]).attr('font-size', '9px').text('Threshold')\r
\r
    // Bars\r
    sorted.forEach((d, i) => {\r
      const barW = x(Math.abs(d.effect)) - zeroX\r
      const barX = d.effect >= 0 ? zeroX : x(d.effect)\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', barX).attr('y', y(d.factor)).attr('width', barW).attr('height', barH)\r
        .attr('fill', d.effect >= 0 ? colors[0] : colors[3]).attr('opacity', 0.85).attr('rx', 2)\r
\r
      svg.append('text').attr('transform', \`translate(\${M.left + (d.effect >= 0 ? x(d.effect) + 4 : x(d.effect) - barW - 4)},\${M.top + y(d.factor) + barH / 2 + 4})\`)\r
        .attr('text-anchor', d.effect >= 0 ? 'start' : 'end')\r
        .attr('fill', d.effect >= 0 ? colors[0] : colors[3]).attr('font-size', '10px').text(d.effect.toFixed(1))\r
    })\r
\r
    // Cumulative line\r
    let cumSum = 0\r
    const total = d3.sum(sorted.map(d => Math.abs(d.effect)))\r
    const cumPoints = sorted.map(d => {\r
      cumSum += Math.abs(d.effect)\r
      return { factor: d.factor, cum: cumSum / total }\r
    })\r
    const cumX = d3.scaleBand().domain(sorted.map(d => d.factor)).range([0, IW]).padding(0)\r
    const cumY = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    const cumLine = d3.line()\r
      .x(d => cumX(d.factor) + cumX.bandwidth() / 2)\r
      .y(d => cumY(d.cum))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path').datum(cumPoints).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', cumLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2)\r
\r
    cumPoints.forEach(p => {\r
      svg.append('circle').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', cumX(p.factor) + cumX.bandwidth() / 2).attr('cy', cumY(p.cum)).attr('r', 3)\r
        .attr('fill', colors[1]).attr('stroke', '#fff').attr('stroke-width', 1)\r
    })\r
\r
    // Right Y axis for cumulative\r
    svg.append('g').attr('transform', \`translate(\${M.left + IW},\${M.top})\`)\r
      .call(d3.axisRight(cumY).ticks(5).tickSize(0).tickPadding(8).tickFormat(d => (d * 100).toFixed(0) + '%'))\r
      .call(g => g.select('.domain').attr('stroke', colors[1]).attr('opacity', 0.5))\r
      .call(g => g.selectAll('text').attr('fill', colors[1]).attr('font-size', '10px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Factor')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Pareto of Effects (DOE)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};