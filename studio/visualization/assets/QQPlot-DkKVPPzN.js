var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'qqplot',\r
  title: 'Q Q Plot',\r
  desc: 'Q Q Plot — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'QQPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","q-q-plot"],\r
}\r
\r
export default function QQPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"sample":12,"theoretical":10},{"sample":25,"theoretical":22},{"sample":38,"theoretical":36},{"sample":55,"theoretical":52},{"sample":70,"theoretical":68}]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 80]).range([40, 360])\r
    const y = d3.scaleLinear().domain([0, 80]).range([250, 20])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Reference line\r
    svg.append('line')\r
      .attr('x1', x(0) + 50).attr('x2', x(80) + 50)\r
      .attr('y1', y(0) + 20).attr('y2', y(80) + 20)\r
      .attr('stroke', 'var(--border)').attr('stroke-dasharray', '4,4')\r
\r
    // Points\r
    svg.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.theoretical || 0) + 50)\r
      .attr('cy', (d) => y(d.sample || 0) + 20)\r
      .attr('r', 5)\r
      .attr('fill', '#6366f1')\r
      .attr('opacity', 0.8)\r
\r
    // Axes\r
    svg.append('g')\r
      .attr('transform', 'translate(50,270)')\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Labels\r
    svg.append('text').attr('x', 200).attr('y', 292).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Theoretical Quantiles')\r
    svg.append('text').attr('x', 10).attr('y', 135).attr('text-anchor', 'middle').attr('font-size', '11px').attr('transform', 'rotate(-90,10,135)').attr('fill', 'var(--text-secondary)').text('Sample Quantiles')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};