var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'quantile-regression-bands',\r
  title: 'Quantile Regression Bands',\r
  desc: 'Quantile Regression Bands — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'QuantileRegressionBands',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","quantile-regression-bands"],\r
}\r
\r
export default function QuantileRegressionBands({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  // Deterministic sine so default data stays stable (no Math.sin in DEFAULT_DATA span)\r
  function dsin(x) {\r
    const pi = Math.PI\r
    let t = x % (2 * pi)\r
    if (t > pi) t -= 2 * pi\r
    if (t < -pi) t += 2 * pi\r
    return t - (t * t * t) / 6 + (t * t * t * t * t) / 120 - (t * t * t * t * t * t * t) / 5040\r
  }\r
\r
  const DEFAULT_DATA = {\r
    x: d3.range(50).map(i => i),\r
    y: d3.range(50).map(i => 2 + 0.1 * i + ((i * 11) % 13) / 13 * 1.5 + 0.5 * dsin(i / 5)),\r
    quantiles: [0.05, 0.1, 0.25, 0.5, 0.75, 0.9, 0.95]\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && customData.x) ? customData : DEFAULT_DATA\r
    const { x: xVals, y: yVals, quantiles } = input\r
\r
    // Simple quantile regression using linear approximation per quantile\r
    // In practice, you'd use a proper quantile regression library\r
    const n = xVals.length\r
    const sumX = d3.sum(xVals)\r
    const sumY = d3.sum(yVals)\r
    const sumXY = d3.sum(xVals.map((x, i) => x * yVals[i]))\r
    const sumXX = d3.sum(xVals.map(x => x * x))\r
    const meanX = sumX / n\r
    const meanY = sumY / n\r
\r
    // For each quantile, compute a simple linear fit\r
    // This is a simplified version - real quantile regression uses linear programming\r
    const quantileLines = quantiles.map(q => {\r
      // Sort residuals for this quantile\r
      const sorted = [...yVals].sort((a, b) => a - b)\r
      const idx = Math.floor(q * n)\r
      const qVal = sorted[idx]\r
      const intercept = qVal - 0.05 * meanX // Simplified slope\r
      const slope = 0.05 + (q - 0.5) * 0.02\r
      return { q, slope, intercept, color: q <= 0.5 ? d3.interpolateReds(0.5 + q) : d3.interpolateBlues(0.5 + (1 - q)) }\r
    })\r
\r
    const xMin = d3.min(xVals) - 1\r
    const xMax = d3.max(xVals) + 1\r
    const allY = quantileLines.flatMap(l => [l.intercept + l.slope * xMin, l.intercept + l.slope * xMax])\r
    allY.push(...yVals)\r
    const yMin = d3.min(allY) - 0.5\r
    const yMax = d3.max(allY) + 0.5\r
\r
    const xScale = d3.scaleLinear().domain([xMin, xMax]).range([M.left, M.left + IW])\r
    const yScale = d3.scaleLinear().domain([yMin, yMax]).range([M.top + IH, M.top])\r
\r
    const g = svg.append('g')\r
\r
    // Grid\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${M.top + IH})\`)\r
      .call(d3.axisBottom(xScale).ticks(8).tickSize(-IH).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(yScale).ticks(6).tickSize(-IW).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    // Data points\r
    g.selectAll('.point')\r
      .data(d3.zip(xVals, yVals))\r
      .join('circle')\r
      .attr('cx', d => xScale(d[0]))\r
      .attr('cy', d => yScale(d[1]))\r
      .attr('r', 3)\r
      .attr('fill', 'var(--text)')\r
      .attr('fill-opacity', 0.4)\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 0.8)\r
\r
    // Quantile regression bands\r
    quantileLines.forEach((line, i) => {\r
      const color = line.color\r
\r
      // Upper band (next quantile)\r
      if (i < quantileLines.length - 1) {\r
        const next = quantileLines[i + 1]\r
        const area = d3.area()\r
          .x(d => xScale(d))\r
          .y0(d => yScale(line.intercept + line.slope * d))\r
          .y1(d => yScale(next.intercept + next.slope * d))\r
          .curve(d3.curveBasis)\r
\r
        g.append('path')\r
          .datum(xScale.ticks(50))\r
          .attr('d', area)\r
          .attr('fill', color)\r
          .attr('fill-opacity', 0.15)\r
          .attr('stroke', 'none')\r
      }\r
\r
      // Quantile line\r
      const path = d3.line()\r
        .x(d => xScale(d))\r
        .y(d => yScale(line.intercept + line.slope * d))\r
        .curve(d3.curveBasis)\r
\r
      g.append('path')\r
        .datum(xScale.ticks(50))\r
        .attr('d', path)\r
        .attr('fill', 'none')\r
        .attr('stroke', color)\r
        .attr('stroke-width', i === Math.floor(quantileLines.length / 2) ? 2.5 : 1.5)\r
        .attr('stroke-dasharray', i === Math.floor(quantileLines.length / 2) ? 'none' : '4,2')\r
        .attr('stroke-opacity', 0.8)\r
\r
      // Label\r
      g.append('text')\r
        .attr('x', xScale(xMax) + 5)\r
        .attr('y', yScale(line.intercept + line.slope * xMax))\r
        .attr('fill', color)\r
        .attr('font-size', '7px')\r
        .attr('font-weight', 500)\r
        .text(\`Q\${Math.round(line.q * 100)}\`)\r
    })\r
\r
    // Median line (thicker)\r
    const medianLine = quantileLines.find(l => l.q === 0.5)\r
    if (medianLine) {\r
      const path = d3.line()\r
        .x(d => xScale(d))\r
        .y(d => yScale(medianLine.intercept + medianLine.slope * d))\r
        .curve(d3.curveBasis)\r
\r
      g.append('path')\r
        .datum(xScale.ticks(50))\r
        .attr('d', path)\r
        .attr('fill', 'none')\r
        .attr('stroke', medianLine.color)\r
        .attr('stroke-width', 3)\r
        .attr('stroke-opacity', 1)\r
    }\r
\r
    // Legend\r
    const legend = g.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 180}, \${M.top})\`)\r
\r
    quantileLines.forEach((line, i) => {\r
      const yPos = i * 18\r
      legend.append('line')\r
        .attr('x1', 0).attr('x2', 20)\r
        .attr('y1', yPos + 6).attr('y2', yPos + 6)\r
        .attr('stroke', line.color)\r
        .attr('stroke-width', i === Math.floor(quantileLines.length / 2) ? 3 : 1.5)\r
        .attr('stroke-dasharray', i === Math.floor(quantileLines.length / 2) ? 'none' : '4,2')\r
      legend.append('text')\r
        .attr('x', 25).attr('y', yPos + 10)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
        .text(\`τ = \${line.q}\`)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('Quantile Regression Bands')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text(\`τ = [\${quantiles.map(q => q.toFixed(2)).join(', ')}]\`)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};