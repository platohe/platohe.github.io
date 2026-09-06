var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'regression-plot',\r
  title: 'Regression Plot',\r
  desc: 'Regression Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RegressionPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","regression-plot"],\r
}\r
\r
export default function RegressionPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":10,"y":18},{"x":15,"y":26},{"x":20,"y":31},{"x":25,"y":38},{"x":30,"y":44},{"x":35,"y":55},{"x":40,"y":58},{"x":45,"y":68},{"x":50,"y":72},{"x":55,"y":80},{"x":60,"y":85},{"x":65,"y":91},{"x":70,"y":99},{"x":75,"y":105},{"x":80,"y":112}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const xExt = d3.extent(data, d => d.x)\r
    const yExt = d3.extent(data, d => d.y)\r
\r
    const xScale = d3.scaleLinear().domain([xExt[0] - 5, xExt[1] + 5]).range([0, IW])\r
    const yScale = d3.scaleLinear().domain([yExt[0] - 10, yExt[1] + 10]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    g.append('g').call(d3.axisLeft(yScale).ticks(5).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g').attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(xScale).ticks(6).tickSize(-IH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // OLS regression: y = a + b*x\r
    const n = data.length\r
    const sumX = d3.sum(data, d => d.x)\r
    const sumY = d3.sum(data, d => d.y)\r
    const sumXY = d3.sum(data, d => d.x * d.y)\r
    const sumX2 = d3.sum(data, d => d.x * d.x)\r
    const b = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX)\r
    const a = (sumY - b * sumX) / n\r
\r
    // Predicted values and residuals\r
    const yHats = data.map(d => a + b * d.x)\r
    const residuals = data.map((d, i) => (d.y - yHats[i]) ** 2)\r
    const mse = d3.mean(residuals)\r
    const se = Math.sqrt(mse)\r
\r
    // Confidence band\r
    const xMean = sumX / n\r
    const sxx = sumX2 - n * xMean * xMean\r
    const bandPts = d3.range(xExt[0] - 5, xExt[1] + 6).map(xi => {\r
      const yPred = a + b * xi\r
      const halfW = 1.96 * se * Math.sqrt(1 / n + (xi - xMean) ** 2 / sxx)\r
      return { x: xi, yLo: yPred - halfW, yHi: yPred + halfW }\r
    })\r
\r
    g.append('path')\r
      .datum(bandPts)\r
      .attr('d', d3.area().x(d => xScale(d.x)).y0(d => yScale(d.yLo)).y1(d => yScale(d.yHi)).curve(d3.curveBasis))\r
      .attr('fill', '#6366f1').attr('fill-opacity', 0.12)\r
\r
    // Regression line\r
    g.append('line')\r
      .attr('x1', xScale(xExt[0] - 5)).attr('y1', yScale(a + b * (xExt[0] - 5)))\r
      .attr('x2', xScale(xExt[1] + 5)).attr('y2', yScale(a + b * (xExt[1] + 5)))\r
      .attr('stroke', '#6366f1').attr('stroke-width', 2.2)\r
\r
    // Scatter points\r
    g.selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => xScale(d.x)).attr('cy', d => yScale(d.y))\r
      .attr('r', 4).attr('fill', '#38bdf8').attr('stroke', '#ffffff').attr('stroke-width', 1.2)\r
\r
    // Equation annotation\r
    g.append('text')\r
      .attr('x', IW - 4).attr('y', 14).attr('text-anchor', 'end')\r
      .attr('fill', '#6366f1').attr('font-size', '7px').attr('font-family', 'var(--font-mono)')\r
      .text(\`ŷ = \${a.toFixed(1)} + \${b.toFixed(2)}x  (±1.96·SE)\`)\r
\r
    svg.append('text').attr('x', 14).attr('y', 16)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Linear Regression with 95% Confidence Band')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};