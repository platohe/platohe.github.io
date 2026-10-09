var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'diverging-bar',\r
  title: 'Diverging Bar',\r
  desc: 'Diverging Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DivergingBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","diverging-bar"],\r
}\r
\r
export default function DivergingBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"label":"Sarah","value":-35},{"label":"Mike","value":52},{"label":"Emma","value":-18},{"label":"James","value":64},{"label":"Lisa","value":-47},{"label":"Tom","value":29},{"label":"Anna","value":-61},{"label":"Bob","value":43}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map((d) => d.label))\r
      .range([20, 270])\r
      .padding(0.4)\r
\r
    const maxAbs = d3.max(data, (d) => Math.abs(d.value))\r
    const x = d3.scaleLinear().domain([-maxAbs * 1.1, maxAbs * 1.1]).range([40, 360])\r
\r
    // Center line\r
    svg.append('line')\r
      .attr('x1', x(0)).attr('x2', x(0))\r
      .attr('y1', 20).attr('y2', 270)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1.5)\r
\r
    // Bars\r
    svg.selectAll('rect')\r
      .data(data)\r
      .join('rect')\r
      .attr('x', (d) => d.value < 0 ? x(d.value) : x(0))\r
      .attr('y', (d) => y(d.label))\r
      .attr('width', (d) => Math.abs(x(d.value) - x(0)))\r
      .attr('height', y.bandwidth())\r
      .attr('fill', (d) => d.value < 0 ? '#ef4444' : '#10b981')\r
      .attr('rx', 3)\r
\r
    // Labels\r
    svg.selectAll('.lbl')\r
      .data(data)\r
      .join('text')\r
      .attr('class', 'lbl')\r
      .attr('x', (d) => d.value < 0 ? x(d.value) - 6 : x(d.value) + 6)\r
      .attr('y', (d) => y(d.label) + y.bandwidth() / 2)\r
      .attr('dominant-baseline', 'middle')\r
      .attr('text-anchor', (d) => d.value < 0 ? 'end' : 'start')\r
      .attr('fill', (d) => d.value < 0 ? '#ef4444' : '#10b981')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 600)\r
      .text((d) => d.value)\r
\r
    // Y labels\r
    svg.append('g')\r
      .selectAll('text')\r
      .data(data)\r
      .join('text')\r
      .attr('x', 34)\r
      .attr('y', (d) => y(d.label) + y.bandwidth() / 2)\r
      .attr('dominant-baseline', 'middle')\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .text((d) => d.label)\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};