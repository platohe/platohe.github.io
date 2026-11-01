var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
import { getDefaultData } from './defaultData'\r
\r
export const meta = {\r
  id: 'bar-chart',\r
  title: 'Bar Chart',\r
  desc: 'Bar Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["bars","bar-chart"],\r
}\r
\r
export default function BarChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Apples","value":120},{"label":"Bananas","value":80},{"label":"Cherries","value":150},{"label":"Dates","value":60},{"label":"Elderberries","value":90},{"label":"Figs","value":110},{"label":"Grapes","value":130}]\r
\r
  useEffect(() => {\r
    if (!ref.current) return\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleBand()\r
      .domain(data.map((d) => d.label))\r
      .range([0, IW])\r
      .padding(0.3)\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, (d3.max(data, (d) => d.value) || 100) * 1.1])\r
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
    // Bars\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('rect')\r
      .data(data)\r
      .join('rect')\r
      .attr('x', (d) => x(d.label))\r
      .attr('y', (d) => y(d.value))\r
      .attr('width', x.bandwidth())\r
      .attr('height', (d) => IH - y(d.value))\r
      .attr('fill', (d, i) => colors[i % colors.length])\r
      .attr('rx', 3)\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};