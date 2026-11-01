var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'radial-bar',\r
  title: 'Radial Bar',\r
  desc: 'Radial Bar — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'RadialBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["radial","radial-bar"],\r
}\r
\r
export default function RadialBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"label":"A","value":85},{"label":"B","value":65},{"label":"C","value":92},{"label":"D","value":45},{"label":"E","value":78},{"label":"F","value":55}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const angle = d3.scaleBand()\r
      .domain(data.map((d) => d.label))\r
      .range([0, 2 * Math.PI])\r
      .padding(0.15)\r
\r
    const radius = d3.scaleLinear().domain([0, 100]).range([30, 110])\r
    const color = d3.scaleOrdinal().domain(data.map((d) => d.label)).range(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4'])\r
\r
    const arc = d3.arc()\r
      .innerRadius((d) => 30)\r
      .outerRadius((d) => radius(d.value))\r
      .startAngle((d) => angle(d.label) ?? 0)\r
      .endAngle((d) => (angle(d.label) ?? 0) + angle.bandwidth())\r
      .padAngle(0.02)\r
\r
    svg.selectAll('path')\r
      .data(data.map((d) => ({ ...d, _angle: angle(d.label) })))\r
      .join('path')\r
      .attr('d', arc)\r
      .attr('fill', (d) => color(d.label))\r
      .attr('transform', 'translate(200,150)')\r
\r
    // Labels\r
    data.forEach((d) => {\r
      const a = angle(d.label) + angle.bandwidth() / 2\r
      const lr = 125\r
      svg.append('text')\r
        .attr('x', 200 + lr * Math.cos(a - Math.PI / 2))\r
        .attr('y', 150 + lr * Math.sin(a - Math.PI / 2))\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 600)\r
        .text(\`\${d.value}\`)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};