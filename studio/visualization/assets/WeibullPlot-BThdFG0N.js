var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'weibull-plot',\r
  title: 'Weibull Plot',\r
  desc: 'Weibull Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WeibullPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","weibull-plot"],\r
}\r
\r
export default function WeibullPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"time":13.006,"failed":1},{"time":24.262,"failed":1},{"time":30.874,"failed":1},{"time":41.366,"failed":1},{"time":54.327,"failed":1},{"time":61.25,"failed":1},{"time":73.729,"failed":1},{"time":80.986,"failed":1},{"time":93.433,"failed":1},{"time":100.019,"failed":1},{"time":114.187,"failed":0},{"time":122.962,"failed":0},{"time":131.335,"failed":0},{"time":140.928,"failed":1},{"time":152.652,"failed":0},{"time":160.865,"failed":1},{"time":172.439,"failed":1},{"time":181.597,"failed":1},{"time":190.187,"failed":0},{"time":202.783,"failed":1},{"time":211.226,"failed":1},{"time":221.048,"failed":1},{"time":233.693,"failed":1},{"time":242.54,"failed":0},{"time":251.421,"failed":0},{"time":260.373,"failed":1},{"time":273.404,"failed":1},{"time":284.639,"failed":0},{"time":294.719,"failed":1},{"time":304.711,"failed":0}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const failed = data.filter(d => d.failed === 1).sort((a, b) => a.time - b.time)\r
\r
    // Weibull probability plot: ln(time) vs ln(-ln(1-F))\r
    const n = failed.length\r
    const points = failed.map((d, i) => {\r
      const medianRank = Math.max(0.001, Math.min(0.999, (i + 0.5) / n))\r
      return {\r
        x: Math.log(d.time),\r
        y: -Math.log(-Math.log(1 - medianRank)),\r
        time: d.time,\r
      }\r
    })\r
\r
    const x = d3.scaleLinear().domain(d3.extent(points, d => d.x)).range([0, IW])\r
    const y = d3.scaleLinear().domain(d3.extent(points, d => d.y)).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Line through points\r
    const line = d3.line().x(d => x(d.x)).y(d => d.y >= y.domain()[0] ? y(d.y) : y(d3.mean(points, p => p.y))).curve(d3.curveLinear)\r
    const validPoints = points.filter(p => p.y >= y.domain()[0] && p.y <= y.domain()[1])\r
    if (validPoints.length > 1) {\r
      const fitLine = d3.line().x(d => x(d.x)).y(d => y(d.y)).curve(d3.curveLinear)\r
      svg.append('path').datum(validPoints).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', fitLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
    }\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(points).join('circle')\r
      .attr('cx', d => x(d.x)).attr('cy', d => Math.max(y.domain()[0], Math.min(y.domain()[1], y(d.y))))\r
      .attr('r', 4).attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8).tickFormat(d => 'ln(' + Math.exp(d).toFixed(0) + ')'))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('ln(Time)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('ln(-ln(1-F))')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Weibull Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};