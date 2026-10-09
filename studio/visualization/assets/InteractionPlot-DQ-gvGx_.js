var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'interaction-plot',\r
  title: 'Interaction Plot',\r
  desc: 'Interaction Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'InteractionPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","interaction-plot"],\r
}\r
\r
export default function InteractionPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"factorA":"Low","factorB":"A","response":40},{"factorA":"Low","factorB":"B","response":55},{"factorA":"High","factorB":"A","response":70},{"factorA":"High","factorB":"B","response":60}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const levels = [...new Set(data.map(d => d.factorA))]\r
    const groups = [...new Set(data.map(d => d.factorB))]\r
\r
    const x = d3.scaleBand().domain(levels).range([0, IW]).padding(0.3)\r
    const y = d3.scaleLinear().domain([d3.min(data, d => d.response) - 5, d3.max(data, d => d.response) + 5]).range([IH, 0])\r
    const groupX = d3.scaleBand().domain(groups).range([0, x.bandwidth()]).padding(0.1)\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Lines per group\r
    groups.forEach((g, gi) => {\r
      const gData = data.filter(d => d.factorB === g)\r
      const line = d3.line()\r
        .x(d => M.left + x(d.factorA) + x.bandwidth() / 2)\r
        .y(d => M.top + y(d.response))\r
        .curve(d3.curveMonotoneX)\r
\r
      svg.append('path').datum(gData).attr('d', line)\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('fill', 'none').attr('stroke', colors[gi]).attr('stroke-width', 2.5)\r
\r
      gData.forEach(d => {\r
        svg.append('circle').attr('cx', M.left + x(d.factorA) + x.bandwidth() / 2)\r
          .attr('cy', M.top + y(d.response)).attr('r', 5)\r
          .attr('fill', colors[gi]).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
      })\r
    })\r
\r
    // Bars (grouped)\r
    levels.forEach(level => {\r
      groups.forEach((g, gi) => {\r
        const d = data.find(dd => dd.factorA === level && dd.factorB === g)\r
        if (d) {\r
          const bx = M.left + x(level) + groupX(g)\r
          svg.append('rect').attr('x', bx).attr('y', M.top + y(d.response))\r
            .attr('width', groupX.bandwidth()).attr('height', y(0) - y(d.response))\r
            .attr('fill', colors[gi]).attr('opacity', 0.3).attr('rx', 2)\r
        }\r
      })\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Legend\r
    groups.forEach((g, i) => {\r
      svg.append('line').attr('x1', IW - 60 + i * 30).attr('x2', IW - 46 + i * 30).attr('y1', M.top + 4).attr('y2', M.top + 4)\r
        .attr('stroke', colors[i]).attr('stroke-width', 2.5)\r
      svg.append('circle').attr('cx', IW - 53 + i * 30).attr('cy', M.top + 4).attr('r', 4)\r
        .attr('fill', colors[i]).attr('stroke', '#fff').attr('stroke-width', 1)\r
      svg.append('text').attr('x', IW - 40 + i * 30).attr('y', M.top + 8)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(g)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Factor A Levels')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Interaction Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};