var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'inline-labels',\r
  title: 'Inline Labels',\r
  desc: 'Inline Labels — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'InlineLabels',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","inline-labels"],\r
}\r
\r
export default function InlineLabels({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"label":"Q1","value":65},{"label":"Q2","value":82},{"label":"Q3","value":45},{"label":"Q4","value":91},{"label":"Q5","value":73},{"label":"Q6","value":58}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleBand().domain(data.map((d) => d.label)).range([30, 370]).padding(0.4)\r
    const y = d3.scaleLinear().domain([0, 100]).range([255, 20])\r
\r
    // Bars\r
    data.forEach((d) => {\r
      const bx = x(d.label) + 30\r
      svg.append('rect')\r
        .attr('x', bx).attr('y', y(d.value))\r
        .attr('width', x.bandwidth()).attr('height', 255 - y(d.value))\r
        .attr('fill', '#6366f1').attr('opacity', 0.8).attr('rx', 3)\r
\r
      // Inline value label\r
      svg.append('text')\r
        .attr('x', bx + x.bandwidth() / 2).attr('y', y(d.value) + 14)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'white').attr('font-size', '12px').attr('font-weight', 700)\r
        .text(d.value)\r
\r
      // X label\r
      svg.append('text')\r
        .attr('x', bx + x.bandwidth() / 2).attr('y', 270)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px')\r
        .text(d.label)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};