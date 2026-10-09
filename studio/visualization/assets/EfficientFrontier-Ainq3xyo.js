var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'efficient-frontier',\r
  title: 'Efficient Frontier',\r
  desc: 'Efficient Frontier — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EfficientFrontier',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","efficient-frontier"],\r
}\r
\r
export default function EfficientFrontier({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"assets":[{"name":"Stocks","return":12,"risk":20},{"name":"Bonds","return":5,"risk":8},{"name":"Real Estate","return":8,"risk":15},{"name":"Commodities","return":10,"risk":18},{"name":"Cash","return":2,"risk":0}],"portfolios":[{"name":"Conservative","allocation":[10,70,5,10,5],"return":5.2,"risk":7.5},{"name":"Moderate","allocation":[30,50,10,5,5],"return":7.8,"risk":11.2},{"name":"Balanced","allocation":[50,30,10,5,5],"return":9.5,"risk":14.8},{"name":"Growth","allocation":[70,15,10,3,2],"return":11.2,"risk":18.5},{"name":"Aggressive","allocation":[85,5,5,3,2],"return":12.5,"risk":21}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, 25])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, 15])\r
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
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Generate efficient frontier curve\r
    const frontierPoints = []\r
    for (let risk = 5; risk <= 22; risk += 0.5) {\r
      const return_ = Math.min(14, 0.02 * risk * risk - 0.1 * risk + 5 + Math.random() * 0.5)\r
      frontierPoints.push({ risk, return: return_ })\r
    }\r
\r
    const frontierLine = d3.line()\r
      .x(d => x(d.risk))\r
      .y(d => y(d.return))\r
      .curve(d3.curveBasis)\r
\r
    // Draw frontier area\r
    svg.append('path')\r
      .datum(frontierPoints)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', d3.area()\r
        .x(d => x(d.risk))\r
        .y0(d => y(d.return))\r
        .y1(y(0))\r
        .curve(d3.curveBasis)(frontierPoints))\r
      .attr('fill', colors[0]).attr('opacity', 0.1)\r
\r
    // Draw frontier line\r
    svg.append('path')\r
      .datum(frontierPoints)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', frontierLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
\r
    // Individual assets as dots\r
    data.assets.forEach((asset, i) => {\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(asset.risk))\r
        .attr('cy', y(asset.return))\r
        .attr('r', 6)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('stroke', 'white').attr('stroke-width', 1.5)\r
\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + x(asset.risk)},\${M.top + y(asset.return) - 12})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', colors[i % colors.length])\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 'bold')\r
        .text(asset.name.substring(0, 4))\r
    })\r
\r
    // Portfolios as larger dots\r
    data.portfolios.forEach((portfolio, i) => {\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(portfolio.risk))\r
        .attr('cy', y(portfolio.return))\r
        .attr('r', 8)\r
        .attr('fill', colors[(i + 2) % colors.length])\r
        .attr('fill-opacity', 0.7)\r
        .attr('stroke', 'white').attr('stroke-width', 1.5)\r
\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + x(portfolio.risk)},\${M.top + y(portfolio.return) - 14})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '9px')\r
        .text(portfolio.name)\r
    })\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
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
    // Axis labels\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top + IH + 30})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text('Risk (Standard Deviation %)')\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(12,\${M.top + IH / 2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text('Expected Return (%)')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
      .text('Efficient Frontier - Modern Portfolio Theory')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};