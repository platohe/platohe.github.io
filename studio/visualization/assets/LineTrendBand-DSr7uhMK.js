var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-trend-band',\r
  title: 'Line Trend Band',\r
  desc: 'Line Trend Band — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineTrendBand',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-trend-band"],\r
}\r
\r
export default function LineTrendBand({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":0,"y":52.022},{"x":1,"y":50.966},{"x":2,"y":61.049},{"x":3,"y":59.395},{"x":4,"y":51.496},{"x":5,"y":60.532},{"x":6,"y":57.465},{"x":7,"y":66.495},{"x":8,"y":73.309},{"x":9,"y":67.446},{"x":10,"y":64.998},{"x":11,"y":79.641},{"x":12,"y":78.915},{"x":13,"y":72.14},{"x":14,"y":71.945},{"x":15,"y":80.015},{"x":16,"y":85.732},{"x":17,"y":86.212},{"x":18,"y":76.077},{"x":19,"y":87.416}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 30, bottom: 35, left: 45 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, w])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([h, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Trend line (OLS)\r
    const n = data.length\r
    const sumX = d3.sum(data, d => d.x), sumY = d3.sum(data, d => d.y)\r
    const sumXY = d3.sum(data, d => d.x * d.y), sumX2 = d3.sum(data, d => d.x * d.x)\r
    const b = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX)\r
    const a = (sumY - b * sumX) / n\r
\r
    const xExt = d3.extent(data, d => d.x)\r
    g.append('line')\r
      .attr('x1', x(xExt[0])).attr('y1', y(a + b * xExt[0]))\r
      .attr('x2', x(xExt[1])).attr('y2', y(a + b * xExt[1]))\r
      .attr('stroke', colors[0]).attr('stroke-width', 2).attr('stroke-dasharray', '6,3')\r
      .attr('opacity', 0)\r
      .transition().duration(700).delay(300)\r
      .attr('opacity', 0.7)\r
\r
    // Confidence band\r
    const residuals = data.map(d => (d.y - (a + b * d.x)) ** 2)\r
    const se = Math.sqrt(d3.mean(residuals))\r
    const bandPts = d3.range(xExt[0], xExt[1] + 1, 0.5).map(xi => {\r
      const pred = a + b * xi\r
      const halfW = 1.5 * se\r
      return { x: xi, lo: pred - halfW, hi: pred + halfW }\r
    })\r
    g.append('path')\r
      .datum(bandPts)\r
      .attr('d', d3.area().x(d => x(d.x)).y0(d => y(d.lo)).y1(d => y(d.hi)).curve(d3.curveBasis))\r
      .attr('fill', colors[0]).attr('opacity', 0)\r
      .transition().duration(900).ease(d3.easeCubicOut)\r
      .attr('opacity', 0.1)\r
\r
    // Data line draws on from left to right\r
    const dataLine = g.append('path')\r
      .datum(data)\r
      .attr('d', d3.line().x(d => x(d.x)).y(d => y(d.y)).curve(d3.curveCatmullRom))\r
      .attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2)\r
    if (dataLine.node() && dataLine.node().getTotalLength) {\r
      const len = dataLine.node().getTotalLength()\r
      dataLine\r
        .attr('stroke-dasharray', \`\${len} \${len}\`).attr('stroke-dashoffset', len)\r
        .transition().duration(1100).ease(d3.easeCubicInOut)\r
        .attr('stroke-dashoffset', 0)\r
        .on('end', () => dataLine.attr('stroke-dasharray', null))\r
    }\r
\r
    // Points pop in staggered after the line lands\r
    g.selectAll('.pt').data(data).join('circle')\r
      .attr('class', 'pt')\r
      .attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 0)\r
      .attr('fill', colors[1]).attr('stroke', 'var(--bg)').attr('stroke-width', 1)\r
      .transition().duration(300).delay((_, i) => 900 + i * 25)\r
      .attr('r', 3)\r
\r
    // Axis\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(x).ticks(5)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    g.append('text').attr('x', w - 4).attr('y', 14).attr('text-anchor', 'end')\r
      .attr('fill', colors[0]).attr('font-size', '8px').attr('font-family', 'var(--font-mono)')\r
      .attr('opacity', 0)\r
      .transition().duration(500).delay(1200)\r
      .attr('opacity', 1)\r
      .text(\`y = \${a.toFixed(1)} + \${b.toFixed(2)}x\`)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};