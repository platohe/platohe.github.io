var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'pacf_plot',\r
  title: 'P A C F_ Plot',\r
  desc: 'P A C F_ Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PACF_Plot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","p-a-c-f_-plot"],\r
}\r
\r
export default function PACF_Plot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"lag":1,"partialCorr":0.005},{"lag":2,"partialCorr":-0.15},{"lag":3,"partialCorr":0.159},{"lag":4,"partialCorr":-0.089},{"lag":5,"partialCorr":0.042},{"lag":6,"partialCorr":-0.03},{"lag":7,"partialCorr":0.004},{"lag":8,"partialCorr":-0.001},{"lag":9,"partialCorr":0.021},{"lag":10,"partialCorr":-0.002},{"lag":11,"partialCorr":-0.012},{"lag":12,"partialCorr":0.019},{"lag":13,"partialCorr":0.012},{"lag":14,"partialCorr":-0.01},{"lag":15,"partialCorr":-0.015},{"lag":16,"partialCorr":0},{"lag":17,"partialCorr":0.009},{"lag":18,"partialCorr":0.006},{"lag":19,"partialCorr":-0.025},{"lag":20,"partialCorr":-0.001}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.partialCorr !== undefined) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, data.length + 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain([-1, 1]).range([IH, 0])\r
    const maxAbs = d3.max(data, d => Math.abs(d.partialCorr)) || 0.5\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Zero line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(0)).attr('y2', y(0))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1)\r
\r
    // CI bands\r
    const n = 100\r
    const ci95 = 1.96 / Math.sqrt(n)\r
    const ci99 = 2.576 / Math.sqrt(n)\r
    svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x', 0).attr('y', y(ci95)).attr('width', IW).attr('height', y(-ci95) - y(ci95))\r
      .attr('fill', colors[2]).attr('opacity', 0.1)\r
    svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x', 0).attr('y', y(ci99)).attr('width', IW).attr('height', y(-ci99) - y(ci99))\r
      .attr('fill', colors[3]).attr('opacity', 0.08);\r
\r
    // CI lines\r
    [ci95, ci99].forEach((ci, i) => {\r
      const ciVals = [ci, -ci];\r
      ciVals.forEach(v => {\r
        svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('x1', 0).attr('x2', IW).attr('y1', y(v)).attr('y2', y(v))\r
          .attr('stroke', i === 0 ? colors[2] : colors[3]).attr('stroke-width', 1).attr('stroke-dasharray', '3,3')\r
      })\r
    })\r
\r
    // Stems (vertical lines from zero to value)\r
    data.forEach((d, i) => {\r
      const cx = x(i + 1)\r
      svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(0)).attr('y2', y(d.partialCorr))\r
        .attr('stroke', colors[0]).attr('stroke-width', 2)\r
      svg.append('circle').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', cx).attr('cy', y(d.partialCorr)).attr('r', 3.5)\r
        .attr('fill', Math.abs(d.partialCorr) > ci95 ? colors[3] : colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
    })\r
\r
    // Connect stems\r
    const line = d3.line().x((d, i) => x(i + 1)).y(d => y(d.partialCorr)).curve(d3.curveLinear)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1).attr('opacity', 0.4)\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(10).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Lag')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Partial Correlation')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('PACF Plot - Partial Autocorrelation')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};