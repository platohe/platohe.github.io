var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
\r
export const meta = {\r
  id: "acf-plot",\r
  title: "ACF Plot",\r
  desc: "ACF Plot - Autocorrelation Function chart",\r
  category: "Analysis",\r
  component: "ACFPlot",\r
  complexity: "beginner",\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["analysis","acf-plot"],\r
}\r
\r
export default function ACFPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"lag":1,"correlation":0.655},{"lag":2,"correlation":0.294},{"lag":3,"correlation":0.046},{"lag":4,"correlation":-0.117},{"lag":5,"correlation":-0.195},{"lag":6,"correlation":-0.162},{"lag":7,"correlation":-0.126},{"lag":8,"correlation":-0.053},{"lag":9,"correlation":0.004},{"lag":10,"correlation":0.013},{"lag":11,"correlation":0.014},{"lag":12,"correlation":0.045},{"lag":13,"correlation":0.032},{"lag":14,"correlation":0.002},{"lag":15,"correlation":-0.011},{"lag":16,"correlation":-0.001},{"lag":17,"correlation":0.006},{"lag":18,"correlation":0.001},{"lag":19,"correlation":-0.028},{"lag":20,"correlation":-0.004}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d.lag) + 1])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([-1, 1])\r
      .range([IH, 0])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Zero line\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW)\r
      .attr('y1', y(0)).attr('y2', y(0))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1)\r
\r
    // Confidence interval bands\r
    const ci95 = 1.96 / Math.sqrt(100)\r
    const ci99 = 2.576 / Math.sqrt(100)\r
\r
    svg.append('rect')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x', 0).attr('y', y(ci95))\r
      .attr('width', IW).attr('height', y(-ci95) - y(ci95))\r
      .attr('fill', colors[2]).attr('opacity', 0.1)\r
\r
    svg.append('rect')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x', 0).attr('y', y(ci99))\r
      .attr('width', IW).attr('height', y(-ci99) - y(ci99))\r
      .attr('fill', colors[3]).attr('opacity', 0.1);\r
\r
    // CI lines\r
    [ci95, ci99].forEach((ci, i) => {\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', 0).attr('x2', IW)\r
        .attr('y1', y(ci)).attr('y2', y(ci))\r
        .attr('stroke', i === 0 ? colors[2] : colors[3])\r
        .attr('stroke-width', 1).attr('stroke-dasharray', '3,3')\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', 0).attr('x2', IW)\r
        .attr('y1', y(-ci)).attr('y2', y(-ci))\r
        .attr('stroke', i === 0 ? colors[2] : colors[3])\r
        .attr('stroke-width', 1).attr('stroke-dasharray', '3,3')\r
    })\r
\r
    // Bars\r
    data.forEach((d, i) => {\r
      const barWidth = IW / data.length * 0.6\r
      const barX = x(d.lag) - barWidth / 2\r
      const barColor = d.correlation >= 0 ? colors[0] : colors[1]\r
      const barTop = d.correlation >= 0 ? y(d.correlation) : y(0)\r
      const barHeight = Math.abs(y(d.correlation) - y(0))\r
\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', barX)\r
        .attr('y', d.correlation >= 0 ? y(d.correlation) : y(0))\r
        .attr('width', barWidth)\r
        .attr('height', Math.abs(y(d.correlation) - y(0)))\r
        .attr('fill', barColor)\r
        .attr('opacity', 0.8)\r
    })\r
\r
    // Lag labels\r
    data.forEach((d, i) => {\r
      if (i % 2 === 0 || data.length <= 10) {\r
        svg.append('text')\r
          .attr('transform', \`translate(\${M.left + x(d.lag)},\${M.top + IH + 12})\`)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', 'var(--text-secondary)')\r
          .attr('font-size', '10px')\r
          .text(d.lag)\r
      }\r
    })\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('ACF Plot - Autocorrelation Function')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 100},\${M.top + IH + 25})\`)\r
    lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', colors[2]).attr('opacity', 0.3).attr('stroke', colors[2]).attr('stroke-width', 1)\r
    lg.append('text').attr('x', 16).attr('y', 10).text('95% CI').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('rect').attr('x', 50).attr('width', 12).attr('height', 12).attr('fill', colors[3]).attr('opacity', 0.3).attr('stroke', colors[3]).attr('stroke-width', 1)\r
    lg.append('text').attr('x', 66).attr('y', 10).text('99% CI').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};