var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-chart-animated',\r
  title: 'Bar Chart Animated',\r
  desc: 'Bar Chart Animated — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'BarChartAnimated',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape","d3-transition"],\r
  tags: ["animation","bar-chart-animated"],\r
}\r
\r
export default function BarChartAnimated({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"A","value":65},{"label":"B","value":82},{"label":"C","value":45},{"label":"D","value":91},{"label":"E","value":58},{"label":"F","value":73}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 20, bottom: 35, left: 35 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scaleBand().domain(data.map(d => d.label)).range([0, w]).padding(0.3)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.value) * 1.1]).range([h, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Animated bars\r
    const bars = g.selectAll('rect').data(data).join(\r
      enter => enter.append('rect')\r
        .attr('x', d => x(d.label)).attr('y', h).attr('width', x.bandwidth())\r
        .attr('height', 0).attr('fill', (d, i) => colors[i % colors.length])\r
        .attr('rx', 2),\r
      update => update,\r
      exit => exit.remove()\r
    )\r
\r
    bars.transition().duration(800).ease(d3.easeCubicOut)\r
      .attr('y', d => y(d.value)).attr('height', d => Math.max(0, h - y(d.value)))\r
\r
    // Value labels\r
    g.selectAll('.val').data(data).join('text').attr('class', 'val')\r
      .attr('x', d => x(d.label) + x.bandwidth() / 2).attr('y', d => y(d.value) - 6)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 600)\r
      .text(d => d.value)\r
\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-w).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};